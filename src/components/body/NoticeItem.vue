<template>
  <!--公告主题页-->
  <div id="noticeitem">
    <div class="noticeitem_body">
      <!--面包屑-->
      <div class="breadcrumb">
        <Breadcrumb></Breadcrumb>
      </div>
      <!--大标题-->
      <div class="item_line">
        <!--<el-card>-->
        <div class="bigitem">公告公示</div>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="Search($event)" style="background: steelblue;color: white"></el-button>
          </el-input>
        </div>
        <!--</el-card>-->
      </div>

      <!--列表-->
      <div class="notice_list">

        <el-table :data="notice_tableData">
          <el-table-column
            prop="title">
            <template slot-scope="scope"><a class="noticTitle" @click="goNotice"
                                            style="text-decoration: none;cursor: pointer;font-size: 16px"
            >{{scope.row.title}}</a></template>
          </el-table-column>
          <el-table-column
            prop="date" width="120px">
          </el-table-column>
        </el-table>
      </div>
      <!--<div class="clear"></div>-->
      <!--分页-->
      <div class="notice_pages">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[10,15,20,25,30]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="200">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from '../resource/Breadcrumb';
  export default {
    name: "NoticeItem",
    components: {Breadcrumb},
    data() {
      return {
        /*columnArr:[
         {prop:'title',width:'850',label:''},
         {prop:'date',width:'100',label:''},
         ],*/
        input5: '',
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
            title: '关于中国检察出版社负责人2015年至2017年任期激励情况的通告',
            date: '2018-07-27',
          },
          {
            title: '最高人民检察院关于童建明同志为中华人民共和国大检察官的公告',
            date: '2018-07-18',
          },
          {
            title: '纪念检察机关恢复重建40周年“检察老照片”征稿启事',
            date: '2018-05-18',
          },
          {
            title: '中华人民共和国全国人民代表大会公告（第九号）',
            date: '2018-03-19',
          },
          {
            title: '关于申报2018年度最高人民检察院检察理论研究课题的公告',
            date: '2018-02-12',
          },
          {
            title: '最高人民检察院关于张雪樵同志为中华人民共和国大检察官的公告',
            date: '2017-05-10',
          },
        ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      Search() {
        this.$store.state.tableData = this.tableData
      },
      goNotice() {
        this.$router.push({name: 'Notice'})
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style scoped>
  #noticeitem {
    width: 84%;
    margin: 0 8%;
    min-height: 600px;
    background-color: #fff;
    padding: 30px 0;
  }
  .noticeitem_body {
    height: 100%;
    width: 90%;
    /*padding: 0 10%;*/
    margin: 0 5%;
  }
  /*大标题*/
  .item_line {
    width: 100%;
    /*margin-top: 20px;*/
  }
  .bigitem{
    font-size: 26px;
    font-weight: bolder;
    text-align: left;
    width: 35%;
    float: left;
  }
  .search{
    width: 60%;
    float: right;
  }
  /*列表*/
  .notice_list {
    width: 100%;
    height: 100%;
  }
  /*分页*/
  .notice_pages {
    clear: both;
    margin: 20px 0 20px 0;
  }
</style>
