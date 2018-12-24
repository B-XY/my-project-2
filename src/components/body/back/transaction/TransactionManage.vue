<template>
  <!--事务管理-->
  <div id="transactionManage">
    <!--检索-->
    <div class="transactionManage_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item  label="">
          <el-input  placeholder="申请人" v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item  label="">
          <el-input  placeholder="申请单位" v-model="formInline.org"></el-input>
        </el-form-item>
        <el-form-item  label="">
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="申请日期（始）"
            end-placeholder="申请日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goTransactionSearch" class="float-left" >查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--作用于列表的功能-->
    <div class="transactionMenu">
      <el-button type="primary" @click="goTransactionDelete">删除</el-button>
      <el-button type="primary" @click="clearFilter">列表重置</el-button>
    </div>
    <!--列表-->
    <div style="clear: both;padding-top: 20px">
      <el-table
        ref="filterTable"
        :data="transactionData"
        tooltip-effect="dark"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <!--<el-table-column-->
        <!--prop="number"-->
        <!--label="序号"-->
        <!--width="55">-->
        <!--</el-table-column>-->
        <el-table-column
          prop="type"
          label="类别" show-overflow-tooltip
          width="200"
          :filters="types"
          :filter-method="filterHandler"
          style="width: 200px;">
        </el-table-column>
        <el-table-column
          prop="name"
          sortable
          label="申请人" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="organazation"
          label="申请单位" show-overflow-tooltip
          :filters="organazationList"
          :filter-method="filterHandler">
        </el-table-column>
        <el-table-column
          prop="date"
          sortable
          label="申请日期"
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
              :type="scope.row.state === '未审核' ? 'danger' : 'success'"
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          width="100px"
          label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="transactionShow(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="transactionDelete(scope.row)" type="text" size="medium">删除</el-button>
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
    <!--消息查看弹窗-->
    <el-dialog title="消息"
               :visible.sync="dialogVisible"
               width="70%">
      <div class="workshow" :data="workshow">
        <el-form label-width="150px" style="text-align: left;font-size: 20px">
          <el-form-item label="申请人：" style="font-size: 20px">
            {{workshow.name}}
          </el-form-item>
          <el-form-item label="申请单位：">
            {{workshow.organazation}}
          </el-form-item>

          <el-form-item label="消息类别：">
            {{workshow.type}}
          </el-form-item>
          <el-form-item label="消息状态：" style="">
            {{workshow.state}}
          </el-form-item>
          <el-form-item label="申请时间：">
            {{workshow.date}}
          </el-form-item>
          <el-form-item label-width="0px">
            <el-card  shadow="never" style="min-height: 400px;border-color: #75beff;"  >
              {{workshow.content}}
            </el-card>
          </el-form-item>
          <el-form-item label-width="0px">
            <p>意见建议：</p>
            <el-input  shadow="never" style="min-height: 100px;border-color: #75beff;"  type="textarea">
              {{workshow.Opinion}}
            </el-input>
          </el-form-item>
          <el-form-item label-width="0px" style="text-align: center">
            <el-button type="primary" @click="auditPass(script.row)">
              通过
            </el-button>
            <el-button type="primary" @click="auditNoPass(script.row)">
              驳回
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
    name: "TransactionManage",
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
        workshow:{
          name: '王小虎',
          organazation:'上海市实验室',
          role: '管理员',
          type:'产品发布审核',
          state:'未审核',
          date:'2018-04-25',
          content:'消息内容......',
          Opinion:'意见内容...'
        },
        currentPage4: 4,
        dialogVisible: false,
        formInline: {
          user: '',
          org:'',
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
        roleList:[
          {text:'试用干警',value:'试用干警'},
          {text:'管理员',value:'管理员'},
          {text:'高级管理员',value:'高级管理员'},
        ],
        types:[
          {text:'用户注册审核',value:'用户注册审核'},
          {text:'产品发布审核',value:'产品发布审核'},
          {text:'产品试用审核',value:'产品试用审核'},
          {text:'标准发布审核',value:'标准发布审核'},
          {text:'公告发布审核',value:'公告发布审核'},
          {text:'用户注册待审核',value:'用户注册待审核'},
          {text:'产品发布待审核',value:'产品发布待审核'},
          {text:'产品试用待审核',value:'产品试用待审核'},
          {text:'标准发布待审核',value:'标准发布待审核'},
          {text:'公告发布待审核',value:'公告发布待审核'},
        ],
        states:[
          {text:'已审核',value:'已审核'},
          {text:'未审核',value:'未审核'},
          /*{text:'未查看',value:'未查看'},
          {text:'已查看',value:'已查看'},
          {text:'已审核',value:'已审核'},
          {text:'未审核',value:'未审核'},*/
        ],
        transactionData: [
          {
            number: 1,
            name: '王小虎',
            organazation:'上海市实验室',
            type:'产品发布审核',
            state:'未审核',
            date:'2018-04-25'
          },
          {
            number: 2,
            name: '王大虎',
            organazation:'浙江省检察院',
            type:'用户注册审核',
            state:'未审核',
            date:'2018-03-25'
          },
          {
            number: 3,
            name: '王微虎',
            organazation:'最高人民检察院',
            type:'标准发布审核',
            state:'已审核',
            date:'2018-02-25'
          },
          {
            number: 4,
            name: '小王虎',
            organazation:'浙江省检察院',
            type:'用户注册审核',
            state:'未审核',
            date:'2018-04-24'
          },{
            number: 5,
            name: '大王虎',
            organazation:'浙江省检察院',
            type:'用户注册审核',
            state:'已审核',
            date:'2018-04-26'
          },{
            number: 6,
            name: '微王虎',
            organazation:'浙江省检察院',
            type:'用户注册审核',
            state:'已审核',
            date:'2018-08-05'
          },
        ]
      }
    },
    methods: {
      // back(){
      //   this.$router.push({name:'PdAdd'})
      // },
      //搜索列表所需函数
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      goStart(){
      },
      transactionShow(){
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
      transactionDelete(){
      },
      goTransactionSearch(){
      },
      goTransactionDelete(){
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
  #transactionManage{
    margin: 0 5%;
    width: 90%;
    min-height: 400px;
  }
  /*.generalSearch-input{
    width: 60%;
    float: left;
  }*/
  .transactionManage_search {
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
  .transactionRoleSelect {
    width: 25%;
  }
  .transactionMenu {
    clear: both;
    /*padding-top: 20px;*/
  }
  .el-button {
    float: left;
  }
  .pagination{
    margin-top: 20px;
  }
  .workshow .el-form-item{
    margin-bottom: 0;
    /* font-size: 20px !important;*/
  }
  /*.workshow .el-form-item__label, .workshow .el-form-item__content{
    font-size: 20px !important;
  }*/
</style>
<style>
  .workshow .el-form-item__label, .workshow .el-form-item__content{
    font-size: 16px !important;
  }
</style>
