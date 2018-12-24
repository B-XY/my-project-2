<template>
  <div class="marqueeScroll">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {}
</script>

<style>
  .marqueeScroll {
    float: left;
    width: 35%;
  }
</style>
