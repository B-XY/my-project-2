<template>
  <div id="menu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#4682B4"
      text-color="#fff"
      active-text-color="#ffd04b" router>
      <el-menu-item class="menu-row" index="Home" style="font-size: 18px" @click="goIndex">首&nbsp;&nbsp;&nbsp;&nbsp;页
        <!--<router-link :to="{ path: '/Home'}" style="font-size: 18px"></router-link>-->
        <!--<a @click="goIndex">首页</a>-->
      </el-menu-item>
      <el-menu-item class="menu-row" index="SearchType" style="font-size: 18px" @click="goProductType">产品分类
        <!--<router-link :to="{ path: '/SearchType'}" style="font-size: 18px">产品分类</router-link>-->
      </el-menu-item>
      <el-menu-item class="menu-row" index="NoticeItem" style="font-size: 18px" @click="goNotice">公&nbsp;&nbsp;&nbsp;&nbsp;告
        <!--<router-link :to="{ path: '/NoticeItem'}" style="font-size: 18px">公&nbsp;&nbsp;&nbsp;&nbsp;告</router-link>-->
      </el-menu-item>
      <el-menu-item class="menu-row" index="New" style="font-size: 18px" @click="goNewProduct">最新产品
        <!--<router-link :to="{ path: ''}" style="font-size: 18px">最新产品</router-link>-->
      </el-menu-item>
      <el-menu-item class="menu-row" index="Hot" style="font-size: 18px" @click="goHotProduct">热门产品
        <!--<router-link :to="{ path: ''}" style="font-size: 18px">热门产品</router-link>-->
      </el-menu-item>
      <el-menu-item class="menu-row" index="Norm" style="font-size: 18px" @click="goNorm">标&nbsp;&nbsp;&nbsp;&nbsp;准
        <!--<router-link :to="{ path: '/Norm'}" style="font-size: 18px">标&nbsp;&nbsp;&nbsp;&nbsp;准</router-link>-->
        <!--<a @click="goNorm">标准</a>-->
      </el-menu-item>
    </el-menu>

    <span v-text="systemTime" class="system-time"></span>
    <!--<router-view></router-view>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: 'Home',
        systemTime: ''
      }
    },
    created(){
      this.getUrl();
    },
    methods: {
      getUrl(){
        let self = this;
        let currentUrl = window.location.href;
        let menu  = currentUrl.split('/').reverse()[0]
        if(menu.split('=').length === 1){
          self.activeIndex = menu
        }else {
          self.activeIndex = menu.split('=').reverse()[0]
        }
        // self.activeIndex = menu
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      goIndex() {
        this.$router.push({name: 'Home'});
      },
      goProductType() {
        this.$router.push({name: 'SearchType'});
      },
      goNotice() {
        this.$router.push({name: 'NoticeItem'});
      },
      goNewProduct() {
        // this.$router.push({name: 'SearchType'});
        this.$router.push({name: 'SearchType',query:{new:'New'}});
      },
      goHotProduct() {
        this.$router.push({name: 'SearchType',query:{hot:'Hot'}});
      },
      goNorm() {
        this.$router.push({name: 'Norm'});
      },
      getTime: function () {
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        var daysStr = "日一二三四五六";
        var dayStr = daysStr.charAt(new Date().getDay());
        this.systemTime = "" + year + "年" + month + "月" + day + "日，星期" + dayStr;
      }
    },
    mounted(){
      this.getTime();
    }
  }
</script>
<style scoped>
  #menu {
    width: 100%;
    /*margin: 20px 0;*/
    border-top: 1px solid #125A98;
    position:relative;
  }

  .menu-row {
    width: 120px;
  }

  #menu a {
    text-decoration: none;
  }
  .system-time {
    position: absolute;
    top: 17px;
    right: 38px;
    font-size: 16px;
    color: #fff;
  }
</style>
