<template>
  <div id="norm">
    <div style="width: 90%;margin: 0 5%">
      <div style="width:100%">
        <!--走马灯-->
        <div class="block">
          <el-carousel height="200px">
            <el-carousel-item v-for="item in carouselData" :key="index">
              <div style="position:relative;">
              <img :src="item.url" alt="" style="width: 100%">
                <div style="position:absolute;z-indent:2;top:0;font-size:16px;font-weight:bolder;color: white;width: 100%;min-height:30px;line-height:30px;background-color:rgba(185, 173, 173, 0.75);">{{ item.title}}</div></div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!--搜索-->
        <div class="search">
          <!--普通检索-->
          <div class="search-input" style="margin-left: 8%;margin-bottom:20px;">
            <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="goInputSearch($event)"></el-button>
            </el-input>
          </div>
          <!--关键字和高级检索入口-->
          <div class="advanced-search">
            <div class="keys-list">
              <el-badge value="hot" class="item">
                <div class="keys"><a>关键字</a></div>
              </el-badge>
            </div>
            <a class="el-icon-refresh" @click="changeKeys()">换一批</a>
            <a class="advanced-search-type el-icon-search " @click="goAdvancedSearch"> 高级检索</a>
            <div class="hot-keys" style="clear: both">
              <el-row :gutter="20" style="margin-left:5%">
                <el-col :span="8" v-for="key in keys" :key="index">
                  <div class="grid-content bg-purple"><a @click="goKeySearch()" v-bind:title=key>{{key}}</a></div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>

      <div style="width: 100%;clear: both">
        <!--国家检察机关信息化建设标准-->
        <div class="norm-type norm-type1">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark"><a @click="goTypeSearch($evevt)">国家检察机关信息化建设标准</a></div>
            </el-col>
          </el-row>
          <div class="norm-type-row">
            <el-row :gutter="20">
              <el-col :span="8" v-for="normType in procuratorateType" :key="index">
                <div class="grid-content bg-purple"><a @click="goType2Search($evevt)"
                                                       v-bind:title=normType>{{normType}}</a></div>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--国家标准-->
        <div class="norm-type">
          <el-row>
            <el-col :span="24">
              <div class="grid-content bg-purple-dark"><a @click="goTypeSearch($evevt)">国家标准</a></div>
            </el-col>
          </el-row>
          <div class="norm-type-row">
            <el-row :gutter="20">
              <el-col :span="8" v-for="normType in nationalType" :key="index">
                <div class="grid-content bg-purple"><a @click="goType1Search()" v-bind:title=normType>{{normType}}</a>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from "../../store/store";
  import {changeKeys} from '../../main'

  export default {
    store: store,
    data() {
      return {
        input3: '',
        input4: '',
        input5: '',
        select: '',
        activeNames: ['1'],
        // keys:[],
        keys: ['公诉', '反贪污贿赂', '刑事执行检察', '民事执行检察', '人民监督', '检察技术'],
        procuratorateType: ['基础标准', '应用系统标准', '应用支撑标准', '管理标准', '信息安全标准', '网络基础设施标准'],
        nationalType: ['公诉', '反贪污贿赂', '刑事执行检察', '民事行政检察', '民事执行检察', '人民监督', '检察技术', '控告检察', '死刑复核检察']
        ,
        carouselData: [
          {url: require('../../assets/img/21.jpg'), title: '郭声琨：聚焦党和国家工作大局 回应人民群众所需所盼', id: 1},
          {url: require('../../assets/img/22.jpg'), title: '最高检机关第26次检察开放日：让宪法精神生根 为法治中国助力', id: 2},
          {url: require('../../assets/img/23.jpg'), title: '最高检举行“为了谁——扶贫事迹报告会”', id: 3},
          {url: require('../../assets/img/24.jpg'), title: '最高检举行检察开放日活动：讲述检察故事 感悟宪法精神', id: 4}
        ],
        tableData: [
          {
          order: '1',
          number: 'GB/T 36905-2018',
          name: '电子证照 文件技术要求',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '2',
          number: 'GB/T 36903-2018',
          name: '电子证照 元数据规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '3',
          number: 'GB/T 36902-2018',
          name: '电子证照 目录信息规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '4',
          number: 'GB/T 36906-2018',
          name: '电子证照 标识规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '5',
          number: 'GB/T 36906-2018',
          name: '电子证照 共享服务接口规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '6',
          number: 'GB/T 36904-2018',
          name: '电子证照 总体技术架构',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '7',
          number: 'GB/T 36906-2018',
          name: '电子证照 共享服务接口规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '8',
          number: 'GB/T 36906-2018',
          name: '电子证照 共享服务接口规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '9',
          number: 'GB/T 36906-2018',
          name: '电子证照 共享服务接口规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '10',
          number: 'GB/T 36906-2018',
          name: '电子证照 共享服务接口规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '11',
          number: 'GB/T 36906-2018',
          name: '电子证照 共享服务接口规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }, {
          order: '12',
          number: 'GB/T 36906-2018',
          name: '电子证照 共享服务接口规范',
          date1: '2018-11-15',
          date2: '2019-01-01',
          state: '即将实施'
        }]
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      goAdvancedSearch() {
        this.$router.push({name: 'AdvancedSearch'})
      },
      goInputSearch() {
        this.$store.state.tableData = this.tableData
        this.$router.push({name: 'GeneralSearch'})
      },
      //e.currentTarget.innerHTML    获取点击事件的标签的值
      goKeySearch() {
        this.$store.state.tableData = this.tableData
        this.$router.push({name: 'GeneralSearch'})
        //   // this.$router.push({name:'GeneralSearch',query:{keys:e.currentTarget.innerHTML}})
      },
      changeKeys,
      // changeKeys(){
      //   // this.$axios.get(`http://localhost:8086/htsoc/changeKeys.ht`).then(res => {this.keys = ["123","456","789","987","654","321"]});
      //   this.$axios.get("http://localhost:8086/htsoc/changeKeys.ht").then(res=>{
      //       this.keys= res.data.data;
      //       console.log(res.data)
      //   })
      // },
      goTypeSearch() {
        this.$store.state.tableData = this.tableData
        this.$router.push({name: 'GeneralSearch'})
        // this.$router.push({name:'GeneralSearch',query:{typeLevel1:e.currentTarget.innerHTML}})
      },
      goType1Search() {
        this.$store.state.tableData = this.tableData
        this.$router.push({name: 'GeneralSearch'})
        // this.$router.push({name:'GeneralSearch',query:{typeLevel1:'国家标准',typeLevel2:e.currentTarget.innerHTML}})
      },
      goType2Search() {
        this.$store.state.tableData = this.tableData
        this.$router.push({name: 'GeneralSearch'})
        // this.$router.push({name:'GeneralSearch',query:{typeLevel1:'检察院标准',typeLevel2:e.currentTarget.innerHTML}})
      }
    }
  }
</script>
<style scoped>
  #norm {
    min-height: 300px;
    width: 84%;
    margin: 0px 8%;
    background-color: #fff;
    padding: 30px 0;
  }

  #norm .block {
    float: left;
    width: 40%;
  }

  #norm .h3 {
    color: #475669;
    font-size: 14px;
    /*opacity: 0.75;*/
    margin: 0;
    z-index: 999;
  }

  /*#norm .el-carousel__item:nth-child(2n) {*/
    /*background-color: #99a9bf;*/
  /*}*/

  /*#norm .el-carousel__item:nth-child(2n+1) {*/
    /*background-color: #d3dce6;*/
  /*}*/

  #norm .search {
    width: 60%;
    float: left;
    margin-top: 5px;
  }

  #norm .keys-list {
    text-align: left;
    margin-left: 9%;
  }

  #norm .item {
    height: 40px;
    float: left;
    margin-top: 10px;
    margin-right: 40px;
  }

  #norm .keys {
    width: 60px;
  }

  #norm .keys a {
    font-size: 15px;
    line-height: 20px;
    color: brown;
  }

  #norm .advanced-search .hot-keys a {
    color: black;
  }

  #norm .advanced-search-type {
    cursor: pointer;
    float: right;
    font-size: 16px;
    line-height: 40px;
    text-decoration: none;
    color: #337AB7;
  }

  .norm-type-row {
    /*width: 33%;*/
  }

  #norm .el-icon-refresh {
    float: left;
    /*margin-left: 2%;*/
    line-height: 40px;
    color: #337AB7;
    text-decoration: none;
  }

  #norm .el-icon-refresh:hover, .advanced-search-type:hover {
    font-weight: bolder;
  }

  #norm .norm-type1 {
    margin-top: 30px;
  }

  #norm .grid-content {
    /* margin-top: 20px; */
    /*background: rgba(70, 130, 180, 0.24);*/
    padding: 10px 20px;
    box-sizing: border-box;
    /*margin: 5px 0px;*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  #norm .grid-content a {
    cursor: pointer;
  }

  #norm .bg-purple-dark {
    line-height: 30px;
    margin: 30px 0 20px 0;
    text-align: left;
    background-image: -webkit-linear-gradient(left, #337AB7, white);
    color: white;
    font-weight: bold;
    /*background: rgba(70, 130, 180, .5);*/
    padding: 5px 0 5px 5px;
  }

  #norm .bg-purple-dark a {
    text-decoration: none;
    margin-left: 2%;
  }

  #norm .bg-purple a {
    text-decoration: none;
    /* color: #337AB7;*/
  }

  #norm .bg-purple a:hover {
    font-weight: bolder;
  }

</style>
