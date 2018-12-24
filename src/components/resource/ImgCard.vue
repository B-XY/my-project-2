<template>
  <!--Layout布局 分栏布局-->
  <div id="layout1">
    <el-row>
      <el-col v-for="item in carouselData" :key="item.id" >

        <div class="grid-content bg-purple" @click="goProduct">
          <img :src="item.url" class="item_img"/>
          <div class="item_title"><a>{{ item.title }}</a></div>
        </div>

        <!--<div class="grid-content bg-purple">
          <img :src="item1.url" class="item_img"/>
          <div class="item_title">
          {{ item1.title }}
          </div>
        </div>-->
      </el-col>
      <!--<el-col>
        <div class="grid-content bg-purple">
          <img :src="item2.url"/>
          <span>{{ item2.title }}</span>
        </div>
      </el-col>
      <el-col>
        <div class="grid-content bg-purple">
          <img :src="item3.url"/>
          <span>{{ item3.title }}</span>
        </div>
      </el-col>
      <el-col>
        <div class="grid-content bg-purple">
          <img :src="item4.url"/>
          <span>{{ item4.title }}</span>
        </div>
      </el-col>
      <el-col>
        <div class="grid-content bg-purple">
          <img :src="item5.url"/>
          <span>{{ item5.title }}</span>
        </div>
      </el-col>-->
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "Layout1",
    data: () => ({
      carouselData:[
        {url:require('../../assets/img/logo.png'),title:'产品1111',id:1},
        {url:require('../../assets/img/logo.png'),title:'产品2222',id:2},
        {url:require('../../assets/img/logo.png'),title:'产品2222',id:3},
        {url:require('../../assets/img/logo.png'),title:'产品4444',id:4},
        {url:require('../../assets/img/logo.png'),title:'产品5555',id:5}
      ]
      /*item1:{url:require('../../assets/img/hd.png'),title:'产品1111',id:1},
    item2:{url:require('../../assets/img/hd.png'),title:'产品2222',id:2},
    item3:{url:require('../../assets/img/hd.png'),title:'产品3333',id:3},
    item4:{url:require('../../assets/img/hd.png'),title:'产品4444',id:4},
    item5:{url:require('../../assets/img/hd.png'),title:'产品5555',id:5}*/
    }),
    methods: {
      goProduct() {
        this.$router.push('/Product')
      }
    }
  }
</script>

<style scoped>
  .el-row {
    display: block;
    margin: 0px !important;
    /*height: 250px;*/
    width: 100%;
  }
  .el-col {
    /*height: 250px;*/
    width: 16.4%;
    /*圆角边框*/
    /*border-radius: 4px;*/
    padding: 0px !important;
    margin-left: 3%;
  }
  .bg-purple {
    /*background: #d3dce6;*/
    /*width: ;*/
  }
  .grid-content {
    /*border-radius: 4px;*/
    height: 100%;
  }
  #layout1 .item_img{
    /*width: 200px;*/
    width: 100%;
    /*height: 220px;*/
  }
  #layout1 .item_title{
    width: 100%;
    /*height: 30px;*/
    margin: 0px !important;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    /*background-color: #a0cfff;*/
  }
  /*.bg-purple-dark {
    background: #99a9bf;
  }*/
  /* .bg-purple-light {
     background: #e5e9f2;
   }*/
  /*.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }*/
</style>
