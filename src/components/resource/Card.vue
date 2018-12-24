<template>
  <!--列表 如公告列表-->
  <div id="list">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="title">
      </el-table-column>
      <el-table-column
        prop="date">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "List",
    data() {
      return {
        tableData: [{
          title:'2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项公告',
          date: '2018-11-22',
        },
          {
            title:'2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项公告',
            date: '2018-11-22',
          },
          {
            title:'2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项公告',
            date: '2018-11-22',
          },
          {
            title:'2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项公告',
            date: '2018-11-22',
          },
          {
            title:'2018年度最高人民检察院检察理论研究所互联网刑事法律研究中心课题立项公告',
            date: '2018-11-22',
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #list{
  }
  /* #list .el-table_header-wrapper{
     !*display: none !important;*!
   }
 #list .el-table_body{
   !*width: 700px !important;*!
 }
 #list .el-table_body col{
   !*width: 350px !important;*!
 }*/
  /*#list .el-table_body col[el-table_2_column_1]{
    width: 750px !important;
  }
  #list .el-table_body col[el-table_2_column_2]{
    width: 150px !important;
  }
    #list .el-table_2_column_3{
      width: 750px !important;
    }
  #list .el-table_2_column_4{
    width: 150px !important;
  }*/
</style>
