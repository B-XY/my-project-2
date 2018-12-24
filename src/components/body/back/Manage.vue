<template>
  <div>
    <el-container style="min-height: calc(100vh - 263px);">
      <el-aside width="250px;">
        <LeftNav style="height: 100%"></LeftNav>
      </el-aside>
      <el-main>
        <router-view :key="activeDate"></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
  import LeftNav from "./LeftNav";

  export default {
    name: 'Back',
    components: {LeftNav},
    data() {
      return {

      }
    },
  }
</script>

<style>
.el-main{
  padding: 20px 0;
}
</style>
