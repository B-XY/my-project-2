<template>
  <!--走马灯 首页用-->
  <div id="carousel">
    <!--<el-carousel >
      <el-carousel-item v-for="item in carouselDatas" :key="item.id">
        <h3>{{ item.url }}</h3>
      </el-carousel-item>
    </el-carousel>-->
    <el-carousel>
      <el-carousel-item v-for="item in carouselDatas" :key="item.id">
        <div style="position:relative;">
          <img :src="item.url" alt="">
          <div style="position:absolute;z-indent:2;top:0;font-size:18px;font-weight:bolder;color: white;width: 100%;height:30px;line-height:30px;background-color:rgba(185, 173, 173, 0.5);">{{ item.title}}</div></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    // props:{
    //   carouselData:{
    //     type:Array,
    //     required:true
    //   }
    // },
    // data: () => ({
    //   /*carouselData:[
    //     {url:require('../../assets/img/logo.jpg'),title:'产品1111',id:1},
    //     {url:require('../../assets/img/logo.jpg'),title:'产品2222',id:2},
    //     {url:require('../../assets/img/logo.jpg'),title:'产品2222',id:3},
    //     {url:require('../../assets/img/logo.jpg'),title:'产品4444',id:4},
    //     {url:require('../../assets/img/logo.jpg'),title:'产品5555',id:5}
    //   ],*/
    //   currentDate: new Date()
    // }),
    data(){
      return{
        carouselDatas:[
          {url: require('../../assets/img/21.jpg'), title: '郭声琨：聚焦党和国家工作大局 回应人民群众所需所盼', id: 1},
          {url: require('../../assets/img/22.jpg'), title: '最高检机关第26次检察开放日：让宪法精神生根 为法治中国助力', id: 2},
          {url: require('../../assets/img/23.jpg'), title: '最高检举行“为了谁——扶贫事迹报告会”', id: 3},
          {url: require('../../assets/img/24.jpg'), title: '最高检举行检察开放日活动：讲述检察故事 感悟宪法精神', id: 4}
        ]
      }
    }
  }
</script>

<style scoped>
  #carousel{
    height: 100%;
    width: 100%;
  }
  .el-carousel{
    height: 100%;
  }
  /* .el-carousel_container{
     position: relative;
     height: 100% !important;
   }*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
