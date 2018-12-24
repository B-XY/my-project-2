<template>
  <div id="home">
    <div class="home">
      <!--搜索框-->
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="产品" value="1" selected="selected"></el-option>
            <el-option label="标准" value="2"></el-option>
          </el-select>
          <el-button slot="append" class="append-btn" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!--走马灯-->
      <!--<div class="block">
        <div class="block_carousel">
          <Carousel></Carousel>
        </div>
      </div>-->
      <!--最新产品和热门产品-->
      <div class="new" v-for="item in listData">
        <div class="new_title_line com-color" v-text="item.title" @click="goSearchType" style="cursor:pointer;">
        </div>
        <div class="newpd">
          <Layout1 :carouselData=" item.carouselData"></Layout1>
        </div>
      </div>
      <!--公告与标准-->
      <div class="notice_norm">
        <!--公告-->
        <div class="notice">
          <!--el-table中超出规定长度:show-overflow-tooltip="true"-->
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="title com-color">公告</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="goNoticeItem">更多>></el-button>
            </div>
            <div v-for="notice in notice_tableData" :key="" class="text item" @click="goNotice" style="cursor:pointer ">
              <div class="notice-title">{{notice.title}}</div>
              <div class="notice-date">{{notice.date}}</div>
            </div>
            <!--</div>-->
          </el-card>

        </div>
        <!--标准-->
        <div class="norm">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="title com-color">标准</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="goNorm">更多>></el-button>
            </div>
            <div v-for="norm in norm_tableData" :key="" class="text item" @click="goNormDetail" style="cursor:pointer ">
              <div class="norm-title">{{norm.title}}</div>
              <div class="norm-date">{{norm.date}}</div>
            </div>
          </el-card>
        </div>
      </div>

      <div class="clear" style="clear: both;height: 10px"></div>

    </div>
  </div>
</template>

<script>
  /*import Search1 from "./resource/Search1";*/
  /*import Carousel from "./resource/Carousel";*/
  import Layout1 from "./resource/Layout1";
  /*import List from "./resource/List";*/
  export default {
    name: "Home",
    components: {Layout1},
    data() {
      return {
        input5: '',
        select: '1',
        columnArr: [
          {prop: 'title', width: '400', label: '题目'},
          {prop: 'date', width: '100', label: '日期'},
        ],
        notice_tableData: [
          {
            title: '国家检察官学院第一批课程研发申报公告',
            date: '2018-11-23'
          },
          {
            title: '全国检察机关第九次“双先”评选表彰活动拟表彰对象公示',
            date: '2018-10-15',
          },
          {
            title: '关于最高人民检察院第二批法律实习生报到的通知',
            date: '2018-08-29',
          },
          {
            title: '最高人民检察院关于确定2018年度法律实习生人选的公告',
            date: '2018-08-03',
          },
          {
            title: '关于中国检察出版社负责人2015年至2017年任期激励情况的通告',
            date: '2018-07-27',
          }
        ],
        norm_tableData: [
          {title: '国家标准化业务管理平台（试用版） 正式发布', date: '2017-01-18'},
          {title: '国家标准化业务管理平台（试用版） 正式发布', date: '2017-01-18'},
          {title: '国家标准化业务管理平台（试用版） 正式发布', date: '2017-01-18'},
          {title: '国家标准化业务管理平台（试用版） 正式发布', date: '2017-01-18'},
          {title: '国家标准化业务管理平台（试用版） 正式发布', date: '2017-01-18'},
        ],
        listData: [
          {
            title: '最新产品',
            carouselData: [
              {url: require('../assets/img/1.jpg'), title: '法官智能辅助办案系统', id: 1},
              {url: require('../assets/img/2.jpg'), title: '公要办案管理中心', id: 2},
              {url: require('../assets/img/15.jpg'), title: '智能辅助办案系统', id: 3},
              {url: require('../assets/img/4.png'), title: '江苏省检察机关案件监督管理', id: 4},
              {url: require('../assets/img/13.jpg'), title: '在线智能海事诉讼系统', id: 5},
              {url: require('../assets/img/12.jpg'), title: '四川省大数据智能辅助办案平台', id: 6},
              {url: require('../assets/img/11.jpg'), title: '四川法院-智能文书系统', id: 7},
              {url: require('../assets/img/10.jpg'), title: '寿光市政法部门刑事案件信息共享平台', id: 8},
              /*{url: require('../assets/img/5.jpg'), title: '江苏省检察机关刑事执行检察智能辅助平台', id: 5}*/
            ]
          },
          {
            title: '热门产品',
            carouselData: [
              /*{url: require('../assets/img/1.jpg'), title: '法官智能辅助办案系统', id: 1},*/
              {url: require('../assets/img/7.jpg'), title: '金融纠纷一站式化解平台', id: 1},
              {url: require('../assets/img/9.jpg'), title: '上海刑事案件智能辅助办案系统', id: 2},
              {url: require('../assets/img/12.jpg'), title: '四川省大数据智能辅助办案平台', id: 3},
              {url: require('../assets/img/6.jpg'), title: '江苏省智能辅助办案系统', id: 4},
              {url: require('../assets/img/13.jpg'), title: '在线智能海事诉讼系统', id: 5},
              {url: require('../assets/img/12.jpg'), title: '四川省大数据智能辅助办案平台', id: 6},
              {url: require('../assets/img/11.jpg'), title: '四川法院-智能文书系统', id: 7},
              {url: require('../assets/img/10.jpg'), title: '寿光市政法部门刑事案件信息共享平台', id: 8},
            ]
          }
        ]
      }
    },
    methods: {
      goSearchType(){
        this.$router.push('/SearchType');
      },
      goNoticeItem() {
        this.$router.push('/NoticeItem');
      },
      goNotice() {
        this.$router.push('/Notice');
      },
      goNorm() {
        this.$router.push('/Norm');
      },
      goNormDetail() {
        this.$router.push('/NormDetail');
      },
    }
  }
</script>

<style scoped>
  #home {
    min-height: 300px;
    width: 84%;
    margin: 0 8%;
    font-size: 18px;
    background-color: #fff;
    padding: 30px 0;
  }
  .home {
    margin: 0 5%;
    width: 90%;
  }
  /*搜索框*/
  .search {
    text-align: center;
    width: 80%;
    margin: 0 10%;
  }
  .search .el-select {
    width: 100px;
  }
  .search .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  /*走马灯*/
  /* .block {
     margin-top: 30px;
     float: left;
     width: 100%;
     min-width: 200px;
     !*padding-left: 10%;
     padding-right: 10%;*!
     height: 300px;
     padding-bottom: 30px;
   }
   .block_carousel {
     height: 100%;
     width: 100%;
     margin: 0;
   }*/
  /*公告与标准*/
  .notice_norm {
    clear: both;
    /*margin-top: 30px;*/
    width: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
    min-height: 100px;
    padding: 0;
    box-sizing: border-box;
  }
  .notice {
    float: left;
    width: 48%;
    margin-left: 0;
    margin-right: 4%;
    color: black;
    height: 100%;
  }
  .norm {
    float: left;
    width: 48%;
    margin-right: 0;
    color: black;
    height: 100%;
  }
  .el-card {
    height: 100%;
    width: 100%;
  }
  .notice-title, .norm-title  {
    width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
    height: 40px;
    text-align: left;
  }
  .notice-date, .norm-date {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 25%;
    float: right;
    text-align: left;
  }
  .text {
    font-size: 16px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before {
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
  .box-card {
    width: 100%;
  }
  .box-card .clearfix .title {
    float: left;
    font-size: 18px;
  }
  /*最新产品与热门产品*/
  .new {
    /*clear: both;*/
    width: 100%;
    /*font-size: 18px;*/
    background-color: #e5e5e5;
    margin-top: 30px;
    /*margin-bottom: 30px;*/
    /*padding-top: 10px;*/
    /*padding-bottom: 10px;*/
  }
  .new_title_line {
    clear: both;
    line-height: 60px;
    font-size: 24px;
    font-weight: bolder;
    text-align: center;
    letter-spacing: 5px;
    /* margin-top: 10px;*/
  }
  .newpd {
    /*margin-top: 20px;*/
    width: 100%;
  }
</style>
<style>
  #home .search .el-input_inner {
    color: #e5e5e5;
    /*background-color: white;*/
  }
  #home .el-select .el-input__inner {
    font-weight: 600;
    color: #fff;
    letter-spacing: 8px;
  }
  #home .el-input-group--append .el-input-group__prepend .el-input__inner {
    color: #fff;
  }
  #home button.append-btn {
    color: #fff !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>
