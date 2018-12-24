<template>
  <div id="dataDictionaryList">
    <!--检索-->
    <div class="dataDictionary_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input placeholder="字典编号" v-model="formInline.number"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input placeholder="字典名称" v-model="formInline.name"></el-input>
        </el-form-item>
        <el-form-item style="float: left;">
          <el-button type="primary" @click="goDataDictionarySearch" class="float-left">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--作用于列表的功能-->
    <div class="dataDictionaryMenu">
      <el-button type="primary" @click="dataDictionaryAdd">新增</el-button>
      <el-button type="primary" @click="dataDictionaryDelete">删除</el-button>
      <el-button type="primary" @click="clearFilter">清除所有过滤器</el-button>
    </div>
    <div class="dataDictionaryList">
      <el-table
        ref="filterTable"
        :data="dataDictionaryListData"
        tooltip-effect="dark"
        :default-sort="{prop: 'date', order: 'descending'}"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="number"
          label="字典编号"
          show-overflow-tooltip
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="字典名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="value"
          label="字典值" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="type"
          label="字典类别"
          :filters="dictionaryTypeList"
          :filter-method="filterHandler"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="sort"
          sortable
          label="排序"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="table"
          label="字典数据库表"
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
            <el-button @click="dataDictionaryShow(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="dataDictionaryAlter(scope.row)" type="text" size="medium">修改</el-button>
            <el-button @click="dataDictionaryDelete(scope.row)" type="text" size="medium">删除</el-button>
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
  // function f() {
  //   this.flog = this.$route.params.flog;
  //   console.log(this.log)
  //   if(this.flog = 'true'){
  //     this.dictionaryData = this.dictionaryData1
  //   }
  // }

  export default {
    created:function () {
      // var flog = this.$route.params.data;
      var flog = this.$route.query.data
      // if(flog.children = null){
      console.log(flog)
      if(flog === '系统'){
        this.dataDictionaryListData = this.dataDictionaryListData1
      }else if(flog === '标准'){
        this.dataDictionaryListData = this.dataDictionaryListData2
      }else if(flog === '产品'){
        this.dataDictionaryListData = this.dataDictionaryListData3
      }
      // }
    },
    data() {
      return {
        formInline: {
          name: '',
          number: '',
        },
        dataDictionaryListData: [
          {
            number: 'SYSROlE',
            name: '角色分类',
            value: '基础标准',
            type: '系统',
            sort:'1',
            table:'system_role',
            note: '',
            date: '2018-12-17',
          },
          {
            number: 'PDTYPE',
            name: '产品分类',
            value: '产品分类',
            type: '产品',
            sort:'2',
            table:'pd_type',
            note: '',
            date: '2018-12-17',
          },
          {
            number: 'NORMKEYS',
            name: '标准关键字',
            value: '标准关键字',
            type: '标准',
            sort:'3',
            table:'norm_keys',
            note: '',
            date: '2018-12-17',
          },
          {
            number: 'NORMTYPE',
            name: '标准分类',
            value: '标准分类',
            type: '标准',
            sort:'4',
            table:'norm_type',
            note: '',
            date: '2018-12-17',
          },
          {
            number: 'PDKEYS',
            name: '产品关键字',
            value: '产品关键字',
            type: '产品',
            sort:'5',
            table:'pa_keys',
            note: '',
            date: '2018-12-17',
          }
        ],
        //测试数据
        dataDictionaryListData1: [
          {
            number: 'SYSROlE',
            name: '角色分类',
            value: '基础标准',
            type: '系统',
            sort:'1',
            table:'system_role',
            note: '',
            date: '2018-12-17',
          }
        ],
        dataDictionaryListData2: [
          {
            number: 'NORMKEYS',
            name: '标准关键字',
            value: '标准关键字',
            type: '标准',
            sort:'3',
            table:'norm_keys',
            note: '',
            date: '2018-12-17',
          },
          {
            number: 'NORMTYPE',
            name: '标准分类',
            value: '标准分类',
            type: '标准',
            sort:'4',
            table:'norm_type',
            note: '',
            date: '2018-12-17',
          }
        ],
        dataDictionaryListData3: [
          {
            number: 'PDTYPE',
            name: '产品分类',
            value: '产品分类',
            type: '产品',
            sort:'2',
            table:'pd_type',
            note: '',
            date: '2018-12-17',
          },
          {
            number: 'PDKEYS',
            name: '产品关键字',
            value: '产品关键字',
            type: '产品',
            sort:'5',
            table:'pa_keys',
            note: '',
            date: '2018-12-17',
          }
        ],

        //过滤器  字典类别
        dictionaryTypeList: [{text: '系统', value: '系统'}, {text: '标准', value: '标准'}, {text: '产品', value: '产品'}],
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
      //表格过滤器
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      //清除过滤信息
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },

      goDataDictionarySearch(){

      },
      dataDictionaryAdd(){
        this.$router.push('DataDictionaryAdd')
      },
      dataDictionaryShow() {
        this.$router.push('DataDictionaryView')
      },
      dataDictionaryAlter() {
        this.$router.push('DataDictionaryAlter')
      },
      dataDictionaryDelete() {

      },
    }
  }
</script>

<style scoped>
  .dataDictionary_search .el-form-item {
    float: left;
  }

  .dataDictionaryMenu {
    clear: both;
  }

  .dataDictionaryMenu .el-button {
    float: left;
  }

  .dataDictionaryList {
    clear: both;
    padding-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
