<template>
  <!--事务管理-->
  <div id="logManage">
    <!--检索-->
    <div class="logManage_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item  label="">
          <el-input  placeholder="操作用户" v-model="formInline.user"></el-input>
        </el-form-item>
        <el-form-item  label="">
          <el-date-picker
            v-model="formInline.value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="操作日期（始）"
            end-placeholder="操作日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goLogSearch" class="float-left" >查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--作用于列表的功能-->
    <div class="logMenu">
      <el-button type="primary" @click="goLogDelete">删除</el-button>
      <el-button type="primary" @click="clearFilter">列表重置</el-button>
    </div>
    <!--列表-->
    <div style="clear: both;padding-top: 20px">
      <el-table
        ref="filterTable"
        :data="logData"
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
          prop="describe"
          label="日志描述" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="user"
          sortable
          label="操作用户" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="role"
          sortable
          label="操作角色"
          :filters="roleList"
          :filter-method="filterHandler"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="result"
          sortable
          label="操作结果"
          :filters="resultList"
          :filter-method="filterHandler"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="date"
          sortable
          label="操作日期"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          fixed="right"
          width="100px"
          label="" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="logShow(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="logDelete(scope.row)" type="text" size="medium">删除</el-button>
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

    <el-dialog title="消息"
               :visible.sync="dialogVisible"
               width="70%">
      <div class="logToView" :data="logToView">
        <el-form label-width="150px" style="text-align: left;">
          <el-form-item label="操作用户：" >
            {{logToView.user}}
          </el-form-item>
          <el-form-item label="操作角色：">
            {{logToView.role}}
          </el-form-item>

          <el-form-item label="日志描述：">
            {{logToView.describe}}
          </el-form-item>
          <el-form-item label="操作时间：">
            {{logToView.date}}
          </el-form-item>
          <el-form-item label="操作结果：">
            {{logToView.result}}
          </el-form-item>
          <!--<el-form-item label="操作内容：" >-->
            <!--<el-card  shadow="never" style="min-height: 200px;border-color: #75beff;"  >-->
              <!--{{logToView.content}}-->
            <!--</el-card>-->
          <!--</el-form-item>-->
          <el-form-item label-width="60px" style="text-align: center">
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
    name: "LogManage",
    data() {
      return {
        formInline: {
          user: '',
          value7: '',
        },
        pickerOptions2: {
          shortcuts: [
            {
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
        logToView:{
          describe: '登录',
          user:'王小虎',
          role: '管理员',
          date:'2018-12-15',
          result:'成功'
        },
        logData: [
        {
          describe: '登录',
          user:'王小虎',
          role: '管理员',
          date:'2018-12-15',
          result:'成功'
        },
        {
          describe: '添加角色',
          user:'王大虎',
          role: '高级管理员',
          date:'2018-12-17',
          result:'成功'
        },
        {
          describe: '产品试用',
          user:'小王虎',
          role: '试用干警',
          date:'2018-11-12',
          result:'失败'
        },
        {
          describe: '标准录入',
          user:'王大虎',
          role: '高级管理员',
          date:'2018-11-13',
          result:'成功'
        },{
            describe: '产品下架',
            user:'王大虎',
            role: '高级管理员',
            date:'2018-12-02',
            result:'失败'
        },{
            describe: '标准意见反馈',
            user:'小虎',
            role: '试用干警',
            date:'2018-12-09',
            result:'失败'
        },
      ],
        currentPage4: 4,
        dialogVisible: false,
        roleList:[
          {text:'试用干警',value:'试用干警'},
          {text:'管理员',value:'管理员'},
          {text:'高级管理员',value:'高级管理员'},
        ],
        resultList:[
          {text:'成功',value:'成功'},
          {text:'失败',value:'失败'}
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
      logShow(){
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
      logDelete(){

      },
      goLogSearch(){

      },
      goLogDelete(){

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
  #logManage{
    margin: 0 5%;
    width: 90%;
    min-height: 400px;
  }
  /*.generalSearch-input{
    width: 60%;
    float: left;
  }*/
  .logManage_search {
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

  .logMenu {
    clear: both;
    /*padding-top: 20px;*/
  }

  .el-button {
    float: left;
  }
  .pagination{
    margin-top: 20px;
  }
  .logToView .el-form-item{

  }
</style>
