<template>
  <!--后台标准管理-->
  <div id="normManage">
    <!--检索-->
    <div class="normManage_first" style="float: left">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item style="float: left;">
          <!--<el-form-item label="标准号">-->
          <el-input v-model="formInline.normNumber" placeholder="标准号"></el-input>
        </el-form-item>
        <el-form-item style="float: left;">
          <!--<el-form-item label="标准中文名称">-->
          <el-input v-model="formInline.normName" placeholder="标准名称"></el-input>
        </el-form-item>
        <!--<el-form-item>-->
        <!--&lt;!&ndash;<el-form-item label="标准状态">&ndash;&gt;-->
        <!--<el-select v-model="formInline.normState" placeholder="标准状态">-->
        <!--<el-option v-bind:label=type v-for="(type,index) in normStateList" :key="index" v-bind:value=index></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item style="float: left;">
          <el-date-picker
            v-model="dateValue"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="发布日期（始）"
            end-placeholder="发布日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: left;">
          <el-date-picker
            v-model="dateValue"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="实施日期（始）"
            end-placeholder="实施日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: left;">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="normMenu">
      <el-button type="primary" @click="goNormAdd">新增</el-button>
      <el-button type="primary" @click="clearFilter">列表重置</el-button>
    </div>
    <!--列表-->
    <div style="clear: both;padding-top: 20px">
      <div class="normList">
        <el-table ref="filterTable" :data="tableData" :default-sort="{prop: 'releaseDate', order: 'descending'}">
          <el-table-column
            type="index"
            width="70px" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="number"
            sortable
            label="标准号" :show-overflow-tooltip="true">
            <!--<template slot-scope="scope"><a class="normNumber" @click="goNormDetail($event)"-->
            <!--&gt;{{scope.row.number}}</a></template>-->
          </el-table-column>
          <el-table-column
            prop="name"
            label="标准名称" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="releaseDate"
            sortable
            label="发布日期" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="implementDate"
            sortable
            label="实施日期" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            :filters="normStateList"
            :filter-method="filterHandler"
            :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <el-tag
                :type="typeTag(scope.row.state)"
                disable-transitions>{{scope.row.state}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            width="180px"
            label="操作" :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <el-button @click="toView(scope.row)" type="text" size="medium">查看</el-button>
              <el-button @click="toChange(scope.row)" type="text" size="medium">版本变更</el-button>
              <el-button @click="toAlter(scope.row)" type="text" size="medium">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--页码-->
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
  import Pagination from "../../../resource/Pagination";

  export default {
    name: "NormBack",
    components: {Pagination},
    data() {
      return {
        dateValue: '',
        //日期搜索函数
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
        currentPage4: 4,
        formInline: {
          normNumber: '',
          normName: '',
          normState: ''
        },
        normStateList: [{text: '即将实施', value: '即将实施'}, {text: '现行', value: '现行'}, {text: '废止', value: '废止'}],
        input5: '',
        tableData: [
          {
            number: 'GB/T 37025-2017',
            name: '信息安全技术 网络安全威胁信息格式规范',
            publisher: '研究院1',
            releaseDate: '2017-01-11',
            implementDate: '2018-04-11',
            state: '废止'
          }, {
            number: 'GB/T 33905-2018',
            name: '信息安全技术 汽车电子系统网络安全指南',
            publisher: '研究院1',
            releaseDate: '2018-01-11',
            implementDate: '2018-04-11',
            state: '现行'
          }, {
            number: 'GB/T 37205-2018',
            name: '信息安全技术 网络安全监测基本要求与实施指南',
            publisher: '研究院1',
            releaseDate: '2018-01-11',
            implementDate: '2018-10-11',
            state: '现行'
          }, {
            number: 'GB/T 32355-2018',
            name: '信息安全技术 网络安全等级保护基本要求',
            publisher: '研究院1',
            releaseDate: '2018-01-11',
            implementDate: '2019-04-11',
            state: '即将实施'
          }
        ]
      }
    },
    methods: {
      typeTag(type){
        if(type!==null){
          if (type ==='即将实施') {
            return 'primary'
          }else{
            if (type ==='废止'){
              return 'danger'
            }else{
              if (type ==='现行') {
                return 'success'
              }else{
                return ''
              }
            }
          }
        }else {
          return ''
        }
      },
      // back(){
      //   this.$router.push({name:'PdAdd'})
      // },
      handleClick(row) {
        console.log(row);
      },
      //表格过滤器
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      toView(row) {
        this.$router.push({path: '/Back/NormManage/NormToView'})
        // this.$router.push({path:'',query:{normNumber:'row.number'}})
      },
      toChange(row) {
        this.$router.push({path: '/Back/NormManage/NormToChange'})
      },
      toAlter(row) {
        this.$router.push({path: '/Back/NormManage/NormToAlter'})
      },
      goNormAdd() {
        this.$router.push({path: '/Back/NormManage/AddNorm'})
      }
    }
  }
</script>

<style scoped>
  #normManage {
    min-height: 400px;
    width: 90%;
    margin: 0 5%;
  }

  .normMenu {
    clear: both;
  }

  .el-button {
    float: left;
  }
</style>
