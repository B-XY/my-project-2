<template>
  <div id="index">
    <Header></Header>

    <router-view style=" min-height: calc(100vh - 262px);"></router-view>
    <!--面包屑BEGIN  ---xj -->
    <!--
    1、router/index.js  里面配置  path为路由   name为中文显示
    2、页面走path   this.$router.push({path: 'SearchType'});
    -->
    <!-- <div  class="breadcrumb-container" style="    position: absolute;    top: 170px;    left: 80px;">
         <el-breadcrumb separator="/" class="breadcrumb-inner">
             <el-breadcrumb-item   v-for="item in $route.matched" :key="item.path" >
                 {{item.name=='' ? '' : item.name}}
             </el-breadcrumb-item>
         </el-breadcrumb>
     </div>-->
    <!--面包屑END  ---xj -->

    <!--<a>{{this.$route.path.split('/')}}</a>-->
    <!--<el-container>-->
      <!--&lt;!&ndash;<el-aside width="200px" v-if="'{{this.$route.path.split('/')[1]}}'==='Back'">&ndash;&gt;-->
      <!--<el-aside width="15%" v-if="requestPath==='Back'">-->
        <!--<LeftNav style="height: 100%"></LeftNav>-->
        <!--&lt;!&ndash;<router-view ></router-view>&ndash;&gt;-->
      <!--</el-aside>-->
      <!--<el-main>-->
        <!--<router-view></router-view>-->
      <!--</el-main>-->
    <!--</el-container>-->

    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./Header"
  // import Body from "./Body"
  import Footer from "./Footer"

  // var requestPath = window.location.pathname.split('/')[1]
  // var requestPath = this.$route.path.split('/')[1]

  export default {
    name: 'Index',
    components: {Header,Footer},
    data() {
      return {
        // requestPath: this.$route.path.split('/')[1]

      }
    },
   /* watch:{
      $route(to,from){
            console.log(to,from);
        }
    }*/
  }
</script>

<style scoped>
  #index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
    width: 100%;
    /*min-width: 800px;*/
    min-height: 600px;
  }
</style>
