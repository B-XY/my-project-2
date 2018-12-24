<template>
  <div id="el-pagination" style="margin-top: 10px">
    <!--<span class="demonstration">完整功能</span>-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10,15,20,25,30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>
<script>
  import store from "../../store/store";

  export default {
    store:store,
    data() {
      return {

      };
    }
    , methods: {
      handleSizeChange:function(size) {
        this.$store.state.pageSize = size
        console.log("每页"+this.size+"条");
      },
      handleCurrentChange:function(currentPage) {
        this.$store.state.currentPage = currentPage
        console.log("当前页: "+this.size);
      }
    },
    computed: {
      tableData: function () {
        return this.$store.state.tableData
      }
    }
  }
</script>
