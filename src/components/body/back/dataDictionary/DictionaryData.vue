<template>
  <div id="dictionaryData">
    <!--检索-->
    <div class="dictionaryData_search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input placeholder="字典项名称" v-model="formInline.name"></el-input>
        </el-form-item>
        <!--<el-form-item label="">-->
        <!--<el-input placeholder="字典号" v-model="formInline.number"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item label="">
          <el-date-picker
            v-model="formInline.value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: left;">
          <el-button type="primary" @click="goDictionaryDataSearch" class="float-left">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--作用于列表的功能-->
    <div class="dictionaryDataMenu">
      <el-button type="primary" @click="dictionaryDataAdd">新增</el-button>
      <el-button type="primary" @click="dictionaryDataDelete">删除</el-button>
    </div>
    <div class="dictionaryDataList">
      <el-table
        ref="filterTable"
        :data="dictionaryData"
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
          width="55">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="value"
          label="值" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="number"
          sortable
          label="字典号"
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
            <el-button @click="dictionaryDataShow(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="dictionaryDataAlter(scope.row)" type="text" size="medium">修改</el-button>
            <el-button @click="dictionaryDataDelete(scope.row)" type="text" size="medium">删除</el-button>
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
      // if(flog.children = null){
        console.log(flog)
        if(flog === '标准分类'){
          this.dictionaryData = this.dictionaryData1
        }else if(flog === '产品分类'){
          this.dictionaryData = this.dictionaryData2
        }
      // }
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
        dictionaryData:'',
        dictionaryData1: [
          {
            name: '基础标准',
            value: '基础标准',
            number: '18',
            note: '',
            date: '2018-12-17',
          },
          {
            name: '应用系统标准',
            value: '应用系统标准',
            number: '27',
            note: '应用系统标准是检察机关信息化建设标准中的一个分类',
            date: '2018-12-15',
          },
          {
            name: '应用支撑标准',
            value: '应用支撑标准',
            number: '23',
            note: '',
            date: '2018-12-16',
          },
          {
            name: '管理标准',
            value: '管理标准',
            number: '10',
            note: '',
            date: '2018-12-12',
          },
          {
            name: '信息安全标准',
            value: '信息安全标准',
            number: '14',
            note: '',
            date: '2018-11-12',
          },
          {
            name: '网络基础设施标准',
            value: '网络基础设施标准',
            number: '02',
            note: '',
            date: '2018-12-08',
          }
        ],
        dictionaryData2: [
          {
            name: '文书纠错',
            value: '文书纠错',
            number: '23',
            note: '',
            date: '2018-12-17',
          },
          {
            name: '大数据分析',
            value: '大数据分析',
            number: '43',
            note: '大数据分析是产品基础支撑分类中的一个小类',
            date: '2018-12-16',
          },
          {
            name: '类案推送',
            value: '类案推送',
            number: '44',
            note: '',
            date: '2018-10-17',
          },
          {
            name: '文书生成',
            value: '文书生成',
            number: '21',
            note: '文书生成是产品基础支撑分类中的一个小类',
            date: '2018-10-21',
          },
          {
            name: '案卡自动填录',
            value: '案卡自动填录',
            number: '13',
            note: '',
            date: '2018-12-27',
          },
          {
            name: '量刑辅助',
            value: '量刑辅助',
            number: '19',
            note: '大数据分析是产品基础支撑分类中的一个小类',
            date: '2018-11-15',
          }
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
      goDictionaryDataSearch(){

      },
      dictionaryDataAdd(){
        this.$router.push('DictionaryAdd')
      },
      dictionaryDataShow() {
        this.$router.push('DictionaryView')
      },
      dictionaryDataAlter() {
        this.$router.push('DictionaryAlter')
      },
      dictionaryDataDelete() {

      },
    }
  }
</script>

<style scoped>
  .dictionaryData_search .el-form-item {
    float: left;
  }

  .dictionaryDataMenu {
    clear: both;
  }

  .dictionaryDataMenu .el-button {
    float: left;
  }

  .dictionaryDataList {
    clear: both;
    padding-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
