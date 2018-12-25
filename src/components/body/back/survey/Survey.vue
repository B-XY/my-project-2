<template>
  <!--事务管理-->
  <div id="surveyManage">
    <!--检索-->
    <div class="surveyManage_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item  label="">
          <el-input  placeholder="产品名" v-model="formInline.pdname"></el-input>
        </el-form-item>
        <el-form-item  label="">
          <el-input  placeholder="用户名" v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item  label="">
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="提交日期（始）"
            end-placeholder="提交日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goSurveySearch" class="float-left" >查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--作用于列表的功能-->
    <div class="surveyMenu">
      <!--<el-button type="primary" @click="goSurveyDelete">删除</el-button>-->
      <!--<el-button type="primary" @click="goAdopt">采纳</el-button>-->
      <!--<el-button type="primary" @click="goAbandon">摈弃</el-button>-->
      <el-button type="primary" @click="clearFilter">列表重置</el-button>
    </div>
    <!--列表-->
    <div style="clear: both;padding-top: 20px">
      <el-table
        ref="filterTable"
        :data="surveyData"
        tooltip-effect="dark"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
        width="55">
      </el-table-column>
        <el-table-column
          prop="pdname"
          width="250"
          label="产品名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="user"
          label="用户名" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="type"
          label="意见类别" show-overflow-tooltip
          width="150"
          :filters="types"
          :filter-method="filterHandler"
          style="width: 200px;">
        </el-table-column>

        <!--<el-table-column-->
          <!--prop="organazation"-->
          <!--label="申请单位" show-overflow-tooltip-->
          <!--:filters="organazationList"-->
          <!--:filter-method="filterHandler">-->
        <!--</el-table-column>-->
        <el-table-column
          prop="date"
          sortable
          label="提交日期"
          column-key="date"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态" show-overflow-tooltip
          :filters="states"
          :filter-method="filterHandler">
          <template slot-scope="scope">
            <el-tag
              :type="typeTag(scope.row.state)"
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          width="70"
          label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="surveyShow(scope.row)" type="text" size="medium">查看</el-button>
            <!--<el-button @click="surveyDelete(scope.row)" type="text" size="medium">删除</el-button>-->
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
    <!--意见查看弹窗-->
    <el-dialog title="意见具体内容"
               :visible.sync="dialogVisible"
               width="70%">
      <div class="surveyshow" :data="surveyshow">
        <el-form label-width="150px" style="text-align: left;font-size: 20px">
          <el-form-item label="产品名称：" style="font-size: 20px">
            {{surveyshow.pdname}}
          </el-form-item>
          <el-form-item label="用户名：" style="font-size: 20px">
            {{surveyshow.user}}
          </el-form-item>

          <el-form-item label="意见类别：">
            {{surveyshow.type}}
          </el-form-item>
          <el-form-item label="意见状态：" style="">
            <template slot-scope="scope">
              <el-tag
                :type="typeTag(surveyshow.state)"
                disable-transitions>{{surveyshow.state}}</el-tag>
            </template>
          </el-form-item>
          <el-form-item label="提交日期：">
            {{surveyshow.date}}
          </el-form-item>
          <el-form-item label-width="0px" style="width: 90%;margin: 0 5%">
            <p>文档内容：</p>
            <el-card  shadow="never" style="min-height: 100px;border-color: #75beff;"  >
              {{surveyshow.content}}
            </el-card>
          </el-form-item>
          <el-form-item label-width="0px" style="width: 90%;margin: 0 5% 20px 5%">
            <p>意见建议：</p>
            <el-card  shadow="never" style="min-height: 100px;border-color: #75beff;"  >
              {{surveyshow.Opinion}}
            </el-card>
          </el-form-item>
          <el-form-item label-width="0px" style="margin-left: 10%">
            <el-button type="primary" @click="auditPass(script.row)">
              采纳
            </el-button>
            <el-button type="primary" @click="auditNoPass(script.row)">
              摒弃
            </el-button>
            <el-button type="primary" @click="dialogVisible = false">
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Survey",
    components:{},
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: '',
        surveyshow:{
          user: '王小虎',
          pdname:'民行智能辅助办案系统',
          type:'民事',
          state:'采纳',
          date:'2018-04-25',
          content:'文档内容......',
          Opinion:'意见内容...'
        },
        currentPage4: 4,
        dialogVisible: false,
        formInline: {
          user: '',
          pdname:'',
          date:'',
        },
        dateList:[
          '全部',
          '昨天',
          '前天','本周','上周','更早'],
        organazationList:[
          {text:'上海市实验室',value:'上海市实验室'},
          {text:'浙江省检察院',value:'浙江省检察院'},
          {text:'最高人民检察院',value:'最高人民检察院'},
        ],
        types:[
          {text:'民事',value:'民事'},
          {text:'刑事',value:'刑事'},
          {text:'行政',value:'行政'},
          {text:'公益',value:'公益'},
        ],
        states:[
          {text:'采纳',value:'采纳'},
          {text:'摒弃',value:'摒弃'},
          {text:'待定',value:'待定'}
        ],
        surveyData: [
          {
            number: 1,
            user: '王小虎',
            pdname:'民行智能辅助办案系统',
            type:'民事',
            state:'采纳',
            date:'2018-04-25'
          },
          {
            number: 2,
            user: '王小虎',
            pdname:'民行智能辅助办案系统',
            type:'行政',
            state:'采纳',
            date:'2018-04-25'
          },
          {
            number: 3,
            user: '王大虎',
            pdname:'民行智能辅助办案系统',
            type:'行政',
            state:'待定',
            date:'2018-03-25'
          },
          {
            number: 4,
            user: '王微虎',
            pdname:'民行智能辅助办案系统',
            type:'行政',
            state:'摒弃',
            date:'2018-02-25'
          },
          {
            number: 5,
            user: '小王虎',
            pdname:'民行智能辅助办案系统',
            type:'行政',
            state:'待定',
            date:'2018-04-24'
          },{
            number: 6,
            user: '大王虎',
            pdname:'民行智能辅助办案系统',
            type:'行政',
            state:'待定',
            date:'2018-04-26'
          },{
            number: 7,
            user: '微王虎',
            pdname:'民行智能辅助办案系统',
            type:'行政',
            state:'待定',
            date:'2018-08-05'
          },
        ]
      }
    },
    methods: {
      typeTag(type) {
        if (type !== null) {
          if (type === '摒弃') {
            return 'info'
          } else {
            if (type === '待定') {
              return 'danger'
            } else {
              if (type === '采纳') {
                return 'success'
              } else {
                  return ''
              }
            }
          }
        } else {
          return ''
        }
      },
      //搜索列表所需函数
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      goStart(){
      },
      surveyShow(){
        this.dialogVisible = true;
      },
      auditPass(){
        this.dialogFormVisible = false;
        this.$message({
          message: '审核通过确定完成！',
          type: 'success'
        });
      },
      auditNoPass(){
        this.dialogFormVisible = false;
        this.$message({
          message: '审核不通过确定完成！',
          type: 'success'
        });
      },
      //采纳
      goAdopt(){

      },
      goAbandon(){

      },
      goSurveySearch(){
      },
      goSurveyDelete(){
      },
      /*resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },*/
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      /*formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },*/
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      /*changeRole(){
        this.$router.push({path: '/Back/UsersManage/ChangeUserRole'})
      }*/
    }
    // 页码计算
    /* computed: {
       tableData: function () {
         return this.$store.state.tableData
       },
       currentPage: function () {
         return this.$store.state.currentPage
       },
       pageSize: function () {
         return this.$store.state.pageSize
       }
     }*/
  }
</script>

<style scoped>
  #surveyManage{
    margin: 0 5%;
    width: 90%;
    min-height: 400px;
  }
  /*.generalSearch-input{
    width: 60%;
    float: left;
  }*/
  .surveyManage_search {
    width: 100%;
    text-align: left;
  }
  .search_fields{
    width: 100%;
  }
  .search_field{
    /*margin-right: 20px;*/
    /*margin-bottom: 20px;*/
  }
  .float-left{
    float: left;
  }
  .float-right{
    float: right;
  }
  .surveyRoleSelect {
    width: 25%;
  }
  .surveyMenu {
    clear: both;
    /*padding-top: 20px;*/
  }
  .el-button {
    float: left;
  }
  .pagination{
    margin-top: 20px;
  }
  .surveyshow .el-form-item{
    margin-bottom: 0;
    /* font-size: 20px !important;*/
  }
  /*.surveyshow .el-form-item__label, .surveyshow .el-form-item__content{
    font-size: 20px !important;
  }*/
</style>
<style>
  .surveyshow .el-form-item__label, .surveyshow .el-form-item__content{
    font-size: 16px !important;
  }
</style>
