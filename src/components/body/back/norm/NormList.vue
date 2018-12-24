<template>
  <div>
    <!--列表-->
    <div class="normList">
      <el-table :data="tableData" :default-sort="{prop: 'implementDate', order: 'descending'}">
        <el-table-column
          prop="order"
          label="#"
          width="50px" :show-overflow-tooltip="true">
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
          sortable
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
          sortable
          label="状态" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          fixed="right"
          width="150px"
        label="操作" :show-overflow-tooltip="true">
        <template slot-scope="scope">
        <el-button @click="toView(scope.row)" type="text" size="medium">查看</el-button>
        <el-button @click="toChange(scope.row)" type="text" size="medium">变更</el-button>
        <el-button @click="toAlter(scope.row)" type="text" size="medium">修改</el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
  <!--页码-->
  <Pagination></Pagination>
  </div>
</template>

<script>
  import Pagination from "../../../resource/Pagination";
  export default {
    name: "NormList",
    components: {Pagination},
    data() {
      return {
        input5: '',
        tableData:[
          {
            order:'1',
            number:'GB/T 36905-2018',
            name:'信息安全技术 网络安全威胁信息格式规范',
            publisher:'研究院1',
            releaseDate:'2018-01-11',
            implementDate:'2019-04-11',
            state:'即将实施'
          },{
            order:'2',
            number:'GB/T 36905-2018',
            name:'信息安全技术 汽车电子系统网络安全指南',
            publisher:'研究院1',
            releaseDate:'2018-01-11',
            implementDate:'2018-04-11',
            state:'现行'
          },{
            order:'3',
            number:'GB/T 36905-2018',
            name:'信息安全技术 网络安全监测基本要求与实施指南',
            publisher:'研究院1',
            releaseDate:'2018-01-11',
            implementDate:'2018-10-11',
            state:'现行'
          },{
            order:'4',
            number:'GB/T 36905-2018',
            name:'信息安全技术 网络安全等级保护基本要求',
            publisher:'研究院1',
            releaseDate:'2018-01-11',
            implementDate:'2019-04-11',
            state:'即将实施'
          }
        ]
      }
    },
    methods: {
      toView(row) {
        this.$router.push({path:'/Back/NormManage/NormToView'})
        // this.$router.push({path:'',query:{normNumber:'row.number'}})
      },
      toChange(row) {
        this.$router.push({path:'/Back/NormManage/NormToChange'})
      },
      toAlter(row) {
        this.$router.push({path:'/Back/NormManage/NormToAlter'})
      }
    }
  }
</script>

<style scoped>
  .normList{
    margin: 30px 0;
    width: 100%;
    clear: both;
  }
  .el-button {
    margin: 0 5px 0 0;
  }

</style>
