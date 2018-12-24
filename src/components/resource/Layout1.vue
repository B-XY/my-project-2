<template>
  <!--Layout布局 分栏布局-->
  <div id="layout1">
    <el-row>
      <!--<el-col :span="8" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 5 : 0">-->
      <el-col v-for="item in carouselData" :key="item.id" >
        <el-card :body-style="{ padding: '20px 15px 30px 15px' }">
          <div class="grid-content bg-purple layout" @click="goProduct">
            <img :src="item.url" class="item_img"/>
            <div  class="item_title clearfix">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "Layout1",
    props:{
      carouselData:{
          type:Array,
          required:true
      }
    },
    data: () => ({
      /*carouselData:[
        {url:require('../../assets/img/logo.jpg'),title:'产品1111',id:1},
        {url:require('../../assets/img/logo.jpg'),title:'产品2222',id:2},
        {url:require('../../assets/img/logo.jpg'),title:'产品2222',id:3},
        {url:require('../../assets/img/logo.jpg'),title:'产品4444',id:4},
        {url:require('../../assets/img/logo.jpg'),title:'产品5555',id:5}
      ],*/
      currentDate: new Date()
    }),
    methods: {
      goProduct() {
        this.$router.push('/Product')
      }
    }
  }
</script>

<style scoped>
  #layout1 {
    /*padding-bottom: 20px;*/
    /*position: relative;*/
  }
  .el-row {
    display: block;
    margin: 0px !important;
    /*height: 250px;*/
    width: 100%;
  }
  .el-col {
    /*height: 250px;*/
    width: calc(25% - 20px);
    margin: 0px 10px 15px 10px;
    /*圆角边框*/
    /*border-radius: 4px;*/
   /* padding: 0px !important;*/

  }

  #layout1 .item_img{
    /*width: 200px;*/
    /*min-height: 200px;*/
    /*min-width: 200px;*/
    display: block;

    /*overflow: hidden;*/
    width: 100%;
    height: 100%;
    /*padding-bottom: 20%;*/
    position: absolute;
  }
  #layout1 .item_title{
    display: block;
    width: 100%;
    /*height: 30px;*/
    margin: 0px !important;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    /*padding:10px 5px ;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    bottom: -24px;
    /* background-color: #a0cfff;*/
    position: absolute;
  }
  #layout1 .layout{
    width: 100%;
    height: 0;
    padding-bottom: 120%;
    position: relative;
  }
  /*.bottom {
    margin-top: 13px;
    line-height: 12px;
  }*/
  /*清除浮动*/
  .clearfix:before{
    display: table;
    content: "";
  }
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
