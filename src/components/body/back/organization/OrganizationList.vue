<template>
  <div id="organizationData">
    <!--检索-->
    <div class="organizationData_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input placeholder="组织名称" v-model="formInline.name"></el-input>
        </el-form-item>
        <!--<el-form-item label="">-->
          <!--<el-date-picker-->
            <!--v-model="formInline.value7"-->
            <!--type="daterange"-->
            <!--align="right"-->
            <!--unlink-panels-->
            <!--range-separator="至"-->
            <!--start-placeholder="开始日期"-->
            <!--end-placeholder="结束日期"-->
            <!--:picker-options="pickerOptions2">-->
          <!--</el-date-picker>-->
        <!--</el-form-item>-->
        <el-form-item style="float: left;">
          <el-button type="primary" @click="goOrganizationDataSearch" class="float-left">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--作用于列表的功能-->
    <div class="organizationDataMenu">
      <el-button type="primary" @click="organizationDataAdd">新增</el-button>
      <el-button type="primary" @click="organizationDataDelete">删除</el-button>
    </div>
    <div class="organizationDataList">
      <el-table
        ref="filterTable"
        :data="organizationData"
        tooltip-effect="dark"
        :default-sort="{prop: 'date', order: 'descending'}"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          label="序号"
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="type"
          label="组织类别"
          :filters="dictionaryTypeList"
          :filter-method="filterHandler"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="people"
          label="操作人"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="note"
          label="备注"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="date"
          sortable
          label="操作日期"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          width="150px"
          label="" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="organizationDataShow(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="organizationDataAlter(scope.row)" type="text" size="medium">修改</el-button>
            <el-button @click="organizationDataDelete(scope.row)" type="text" size="medium">删除</el-button>
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
  </div>
</template>

<script>
  export default {

    created:function () {
      // var flog = this.$route.params.data;
      var flog = this.$route.query.data
      console.log(flog)
      if(flog.children === null){
        if(flog === '产品分类'){
          this.organizationData = this.organizationData1
        }else if(flog === '标准分类'){
          this.organizationData = this.organizationData2
        }
      }else {
        if(flog === '高检院'){
          this.organizationData = this.organizationData1
        }else if(flog === '研究院'){
          this.organizationData = this.organizationData2
        }else{
          this.organizationData = this.organizationData3
        }
      }
    },
    data() {
      return {
        formInline: {
          name: '',
          // number: '',
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

        organizationData:[
          {
            name: '最高人民检察院',
            type: '高检院',
            people: '王小虎',
            note: '',
            date: '2018-11-10',
          },
          {
            name: '智慧检务创新研究院',
            type: '研究院',
            people: '王大虎',
            note: '',
            date: '2018-11-21',
          },
          {
            name: '智慧研究院',
            type: '研究院',
            people: '王虎',
            note: '',
            date: '2018-12-03',
          },
          {
            name: '创新研究院',
            type: '研究院',
            people: '小虎',
            note: '',
            date: '2018-10-26',
          },
          {
            name: '北京实验室',
            type: '实验室',
            people: '小王虎',
            note: '',
            date: '2018-12-09',
          },
          {
            name: '上海实验室',
            type: '实验室',
            people: '大王虎',
            note: '',
            date: '2018-12-01',
          },{
            name: '深圳实验室',
            type: '实验室',
            people: '虎小',
            note: '',
            date: '2018-11-21',
          },
          {
            name: '福建实验室',
            type: '实验室',
            people: '虎大',
            note: '',
            date: '2018-12-17',
          },{
            name: '安徽实验室',
            type: '实验室',
            people: '虎小王',
            note: '',
            date: '2018-11-17',
          },
          {
            name: '湖北实验室',
            type: '实验室',
            people: '虎大王',
            note: '',
            date: '2018-10-30',
          },
        ],
        //测试数据
        organizationData1: [
          {
            name: '最高人民检察院',
            type: '高检院',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          }
        ],
        organizationData2: [
          {
            name: '智慧检务创新研究院',
            type: '研究院',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },
          {
            name: '智慧研究院',
            type: '研究院',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },
          {
            name: '创新研究院',
            type: '研究院',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },
        ],
        organizationData3: [
          {
            name: '北京实验室',
            type: '实验室',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },
          {
            name: '上海实验室',
            type: '实验室',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },{
            name: '深圳实验室',
            type: '实验室',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },
          {
            name: '福建实验室',
            type: '实验室',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },{
            name: '安徽实验室',
            type: '实验室',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },
          {
            name: '湖北实验室',
            type: '实验室',
            people: '王小虎',
            note: '',
            date: '2018-12-17',
          },
        ],
        // dataToView: {
        //   No: '',
        //   name: '',
        //   value: '',
        //   number: '',
        //   note: '',
        //   date: '',
        // },
      }
    },
    methods: {
      goOrganizationDataSearch(){

      },
      organizationDataAdd(){
        this.$router.push('DictionaryAdd')
      },
      organizationDataShow() {
        this.$router.push('DictionaryView')
      },
      organizationDataAlter() {
        this.$router.push('DictionaryAlter')
      },
      organizationDataDelete() {

      },
    }
  }
</script>

<style scoped>
  .organizationData_search .el-form-item {
    float: left;
  }

  .organizationDataMenu {
    clear: both;
  }

  .organizationDataMenu .el-button {
    float: left;
  }

  .organizationDataList {
    clear: both;
    padding-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
