<template>
  <div id="generalSearch">
    <div style="width: 90%;margin: 0 5%">
      <div class="generalSearchConditions">
        <!--普通检索-->
        <div class="generalSearch-input">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="goInputSearch($event)"></el-button>
          </el-input>
        </div>
        <!--筛选条件-->
        <div class="conditions">
          <el-row>
            <el-col style="width: 20%">
              <div class="grid-content bg-purple"><a class="conditionsType">标准状态：</a></div>
            </el-col>
            <el-col style="width: 10%">
              <div class="grid-content bg-purple"><a href="#">全部</a></div>
            </el-col>
            <el-col style="width: 15%">
              <div class="grid-content bg-purple"><a href="#">即将实施</a></div>
            </el-col>
            <el-col style="width: 12%">
              <div class="grid-content bg-purple"><a href="#">现行</a></div>
            </el-col>
            <el-col style="width: 12%">
              <div class="grid-content bg-purple"><a href="#">废止</a></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col style="width: 20%">
              <div class="grid-content bg-purple"><a class="conditionsType">发布日期：</a></div>
            </el-col>
            <el-col style="width: 10%">
              <div class="grid-content bg-purple"><a href="#">全部</a></div>
            </el-col>
            <el-col style="width: 15%">
              <div class="grid-content bg-purple"><a href="#">近一月</a></div>
            </el-col>
            <el-col style="width: 12%">
              <div class="grid-content bg-purple"><a href="#">近三月</a></div>
            </el-col>
            <el-col style="width: 12%">
              <div class="grid-content bg-purple"><a href="#">近半年</a></div>
            </el-col>
            <el-col style="width: 12%">
              <div class="grid-content bg-purple"><a href="#">近一年</a></div>
            </el-col>
            <el-col style="width: 12%">
              <div class="grid-content bg-purple"><a href="#">近三年</a></div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="search-result">
        <el-table
          :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          stripe
          style="width: 100%"
          :default-sort="{prop: 'implementDate', order: 'descending'}">
          <el-table-column
            type="index"
            width="50">
            <!--序号不因排序而改变-->
            <!--<template scope="scope"><span>{{scope.$index+(pageNo - 1) * pageSize + 1}} </span></template>-->
          </el-table-column>
          <el-table-column
            prop="number"
            label="标准号" :show-overflow-tooltip="true">
            <template slot-scope="scope"><a class="normNumber" @click="goNormDetail($event)"
            >{{scope.row.number}}</a></template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="标准名称" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="date1"
            sortable
            label="发布日期" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="date2"
            sortable
            label="实施日期" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态" :show-overflow-tooltip="true">
          </el-table-column>
        </el-table>
        <div style="margin:20px 0">
          <pagination></pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as scope from "element-ui";
  import pagination from "../resource/Pagination"

  export default {
    name: 'GeneralSearch',
    components: {pagination},
    data() {
      return {}
    },
    methods: {
      goNormDetail(e) {
        this.$router.push({name: 'NormDetail'})
        // this.$router.push({name:'NormDetail',query:{normNumber:e.currentTarget.innerHTML}})
      },
      goInputSearch() {
        // this.$store.state.tableData = this.tableData
        this.$router.push({name: 'GeneralSearch'})
      },
    },
    computed: {
      tableData: function () {
        return this.$store.state.tableData
      },
      currentPage: function () {
        return this.$store.state.currentPage
      },
      pageSize: function () {
        return this.$store.state.pageSize
      }
    }
  }
</script>

<style scoped>
  #generalSearch {
    min-height: 300px;
    width: 84%;
    margin: 0px 8%;
    border: 1px solid #F5F5F5;
    background-color: white;
    padding: 30px 0;
  }

  #generalSearch table * {
    font-size: 16px !important;
  }

  #generalSearch .generalSearchConditions, .search-result {
    width: 100%;
    border: 1px solid #D0D0D0;
    border-radius: 5px;
    box-shadow: 0 0 2px #D0D0D0;
    margin-bottom: 30px;
  }

  #generalSearch .generalSearch-input {
    width: 92%;
    margin: 20px 4% 0 4%;
  }

  #generalSearch .conditions {
    margin: 10px 0;
  }

  #generalSearch .normNumber {
    cursor: pointer;
    color: #428BCA;
  }

  #generalSearch .normNumber:hover, #generalSearch .bg-purple a:hover {
    font-weight: bolder;
  }

  #generalSearch .bg-purple a {
    text-decoration: none;
    line-height: 35px;
    color: #337AB7;
  }

  #generalSearch .bg-purple .conditionsType {
    text-decoration: none;
    line-height: 35px;
    color: #3B3B3B;
  }

  #generalSearch .bg-purple .conditionsType:hover {
    font-weight: unset;
  }
</style>
