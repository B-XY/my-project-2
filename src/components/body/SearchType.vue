<template>
  <!--分类检索页-->
  <div id="searchtype">
    <div class="searchtype">
    <!--面包屑-->
    <div class="breadcrumb">
      <Breadcrumb></Breadcrumb>
    </div>
      <!--搜索框-->
      <div class="search" style="width: 100%" >
        <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width: 100%;text-align: left" >
          <el-form-item style="width: 60%;float: left" >
            <el-input v-model="formInline.input5" placeholder="请输入内容" style="width:100%;position: relative" class="input-with-select">
              <el-select v-model="formInline.select" slot="prepend" placeholder="请选择" style="width: 150px">
                <el-option label="产品名" value="1"></el-option>
                <el-option label="关键字" value="2"></el-option>
                <el-option label="发布单位" value="3"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" @click="goInputSearch2">重新查询</el-button>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" @click="goInputSearch1">在结果中查询</el-button>
          </el-form-item>

        </el-form>
      </div>
    <!--分类-->
    <div class="type">
      <table>
        <tr class="type1"  >
          <td class="type_title com-color">业务应用类:</td>
          <!--<td class="type_c" v-for="type1 in types1">{{type1}}</td>-->
          <td class="type_c">
            <span v-for="type1 in types1"><a style="margin-right: 10px">{{type1}}</a></span>
          </td>
        </tr>
        <tr class="type2"  >
          <td class="type_title com-color">基础支撑类:</td>
          <!--<td v-for="type2 in types2">{{type2}}</td>-->
          <td class="type_c">
            <span v-for="type2 in types2"><a style="margin-right: 10px">{{type2}}</a></span>
          </td>
        </tr>
      </table>
    </div>
    <!--展示-->
    <div class="show">
      <div class="pds">
        <!--展示的产品相同，只是排序不同，点击排序按钮触发点击事件-->
        <!--排序方式-->
        <div class="filter">

          <div class="f-sort">
            <a v-for="(item,index) in sortArr" :class="{'curr':index == checkindex}" v-text="item" @click="checkindex=index,pds.sort(randomArr)" ><i></i></a>
          </div>
          <!--<div class="clear"></div>-->
        </div>
        <!--具体展示列表-->
        <div class="pds_show">
          <div class="pds_show_pdi">
            <el-row>

            <el-col class="pdi"  v-for="item in pds" :key="item.id">
              <el-card :body-style="{ padding: '20px 15px 40px 15px' }" >
                <div class="grid-content bg-purple layout" @click="goProduct">
              <img :src="item.url" class="item_img"/>
                  <div  class="item_title clearfix">
                    <span>{{ item.title }}</span>
                  </div>
                </div>
              </el-card>

            </el-col>

            <div>
              <!--<div class="clear"></div>-->
            </div>

            </el-row>
          </div>
          <!--页码-->
          <div class="pages">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[20, 24, 28, 32]"
              :page-size="20"
              layout="total, sizes, prev, pager, next, jumper"
              :total="100">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    </div>

  </div>
</template>

<script>
  import DateTable from "element-ui/packages/date-picker/src/basic/date-table";
  import Breadcrumb from '../resource/Breadcrumb';
  /*import Pd from "../resource/Pd";*/
  export default {
    name: "SearchType",
    components: {DateTable, Breadcrumb},
    data() {
      return {
        formInline:{
          select:'1',
          input5:''
        },
        checkindex:'0',
        sortArr:['综合排序','点击量','评论数','上架时间'],
        /*activeName: 'first',*/
        currentPage4: 4,
        types1: [
          '刑事检察', '民事检察', '行政检察', '公益诉讼', '综合业务'
        ],
        types2: [
          '量刑辅助', '类案推送', '知识检索', '文书纠错', '文书生成', '语音转写', 'OCR识别', '大数据分析', '案卡自动填录'
        ],
        pds: [{url: require('../../assets/img/1.jpg'), title: '法官智能辅助办案系统', id: 1},
          {url: require('../../assets/img/2.jpg'), title: '公要办案管理中心 ', id: 2},
          {url: require('../../assets/img/4.png'), title: '江苏省检察机关案件监督管理', id: 4},
          {url: require('../../assets/img/5.jpg'), title: '江苏省检察机关刑事执行检察智能辅助平台', id: 5},
          {url: require('../../assets/img/6.jpg'), title: '江苏省智能辅助办案系统', id: 6},
          {url: require('../../assets/img/7.jpg'), title: '金融纠纷一站式化解平台', id: 7},
          {url: require('../../assets/img/8.jpg'), title: '人民法院智能辅助办案系统', id: 8},
          {url: require('../../assets/img/9.jpg'), title: '上海刑事案件智能辅助办案系统', id: 9},
          {url: require('../../assets/img/10.jpg'), title: '寿光市政法部门刑事案件信息共享平台', id: 10},
          {url: require('../../assets/img/11.jpg'), title: '四川法院-智能文书系统', id: 11},
          {url: require('../../assets/img/12.jpg'), title: '四川省大数据智能辅助办案平台', id: 12},
          {url: require('../../assets/img/13.jpg'), title: '在线智能海事诉讼系统', id: 13},
          {url: require('../../assets/img/14.gif'), title: '智慧公安', id: 14},
          {url: require('../../assets/img/15.jpg'), title: '智能辅助办案系统', id: 15},
        ]
      };
    },
    methods: {
      /*handleClick(tab, event) {
       console.log(tab, event);
       },*/
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goInputSearch1() {
        /*this.$store.state.tableData = this.tableData*/
        /*this.$router.push({name: 'GeneralSearch'})*/
      },
      goInputSearch2(){

      },
      goProduct(){
        this.$router.push('/Product')
      },
      randomArr: function(a,b){
          return Math.random()>.5 ? -1:1;

      }
    }
  }
</script>

<style scoped>
  #searchtype {
    min-height: 500px;
    width: 84%;
    margin: 0 8%;
    font-size: 18px;
    background-color: #fff;
    padding: 10px 0 30px 0;
  }
.searchtype{
  margin: 0 5%;
  width: 90%;
}
  /*类型分类*/
  .type {
    width: 100%;
    margin: 20px 0;
    height: auto;
  }

  .type_title {
    text-align: center;
    vertical-align: center;
    font-size: 18px;
    font-weight: bolder;
    /*border-right: 1px solid #DDD;*/
    min-width: 200px;
  }

  .type_c {
    text-align: left;
    vertical-align: center;
    font-size: 16px;
    /*margin-left: 5px;*/
    padding-left: 10px;
  }

  table {
    height: 110px;
    width: 100%;
    /*border: 1px solid #DDD;*/
  }

  td {
    border-bottom: 1px dashed white;
  }

  /*产品展示*/
  .show {
    width: 100%;
    /*每页最多展示20个*/
    /*min-height: 1000px;*/
    border: 1px solid #DDD;
    margin: 20px 0;
  }

  .pds {
    width: 100%;
    height: 90%;
    /*background-color: #a0cfff;*/
    margin: 0 !important;
  }

  /*排序栏*/
  .filter {
    height: 50px;
    line-height:50px;
    background: rgba(70, 130, 180,.5);

  }

  .f-sort {
    height: 100%;
    float: left;
    margin-left: 10px;
  }

  .filter .f-sort a.curr {
    background: #e4393c;
    color: #FFF;
    border-color: #e4393c;
  }

  .filter .f-sort a {
    border: 1px solid #4682b4;
    margin-right: -1px;
    background: #ffffff;
    color: #333;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 3px;
    padding: 8px 25px;
  }

  a:-webkit-any-link {
    /*color: -webkit-link;*/
    cursor: pointer;
    /*text-decoration: underline;*/
  }

  /*产品展示栏*/
  .pds_show {
    width: 100%;
    margin: 0;
    border: 1px solid #DDD;
    padding-top: 25px;
    /*background-color: #8cc5ff;*/
  }

  .pds_show .pds_show_pdi {
    /*min-height: 1000px;*/
    width: 100%;
    /*background-color: #e6a23c;*/
  }
  .pds_show .pds_show_pdi .el-row {
    display: block;
    margin: 0px !important;
    /*height: 250px;*/
    width: 100%;
  }
  .pds_show .pds_show_pdi  .el-col {

    width: calc(25% - 20px);
    margin: 0px 10px 15px 10px;


  }
  /*.pds_show .pdi {*/
    /*float: left;*/
    /*!* width: 200px;*!*/
    /*width: calc(25% - 30px);*/
    /*margin: 15px 0 15px 15px;*/
/*!*height: auto;*!*/
    /*!*background-color: #fbc4c4;*!*/
  /*}*/
  .pds_show .pds_show_pdi .layout{
    width: 100%;
    height: 0;
    padding-bottom: 120%;
    position: relative;
  }
  .item_img {
    /*width: 100%;*/
    /*height: calc(100% - 40px);*/
    /*min-width: 130px;*/
    /*min-height: 200px;*/
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .item_title {
    width: 100%;
    /*height: 30px;*/
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    /*padding:10px 5px ;*/
    bottom: -24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /*margin: 5px 0 0 0 !important;*/
    display: block;
    position: absolute;
  }
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
  /*分页*/
  .pages {
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 18px !important;
    height: 50px;
    /*background-color: chartreuse;*/
  }
  .type table,
  .type table tr,
  .type table tr td{
    /*border: 0 !important;*/
  }
  .type .type1 {
    /*background: rgba(70, 130, 180,.5);*/
    background: rgba(70, 130, 180,.4);
  }
  .type .type2 {
    background: rgba(70, 130, 180,.4);
  }
</style>
<style>
  #searchtype .search .el-form-item__content{
    width: 100%;
  }
  #searchtype .search .el-input-group__prepend{
    /*min-width: 100px !important;*/
  }
  #searchtype .search .input-with-select .el-input__inner{
    /*width: 60%;*/
    /*min-width: 300px;*/
    min-width: calc(100vw - 800px);
    padding-right: 100px;
    /*padding: 0 100% 0 50px;*/

  }
  #searchtype .search .input-with-select .el-select .el-input .el-input__inner{
    /*width: 150px !important;*/
     padding: 0 30px 0 15px;
  }
</style>
