<template>
  <div class="goBack"><el-button type="info" @click="goBack">返回</el-button></div>
</template>

<script>
    export default {
      methods: {
        goBack() {
          this.$router.back()
        }
      }
    }
</script>

<style>
  .goBack {
    text-align: left;

  }
</style>
