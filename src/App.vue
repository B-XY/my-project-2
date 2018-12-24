<template>
  <div id="app">
    <!--isRouterAlive用来刷新路由-->
    <!--<router-view v-if="isRouterAlive"/>-->
    <router-view/>
    <!--<Index></Index>-->
  </div>
</template>

<script>
  import Index from './components/Index'
  import './assets/css/mycss-face.scss';

  export default {
    name: 'App',
    components: {Index},
    provide() { // 注册一个方法
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
    /*width:100%;*/
    min-width: 1000px;
    background-color: #F5F5F5;
  }

  .el-container {
    margin: 1px 0 !important;
  }
</style>
