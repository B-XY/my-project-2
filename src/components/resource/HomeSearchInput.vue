<template>
  <!--搜索框-->
  <div class="search">
    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="请选择">
        <el-option label="产品" value="1" selected="selected"></el-option>
        <el-option label="标准" value="2"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        input5: '',
        select: '1',
      }
    }
  }
</script>

<style scoped>
  /*搜索框*/
  .search {
    text-align: center;
    margin-top: 15px;
    width: 75%;
    margin-left: 12.5%;

  }
  .el-select {
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
