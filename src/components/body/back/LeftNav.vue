<template>
  <div>
    <!--后台左侧导航栏-->
    <div id="leftnav">
      <el-menu
        :default-active="activeIndex"
        style="box-sizing: border-box;"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="rgb(70, 130, 180)"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="PdManage" @click="goPdManage"><i class="el-icon-goods"></i>产品管理
        </el-menu-item>
        <el-menu-item index="NormManage" @click="goNormManage"><i class="el-icon-document"></i>标准管理
        </el-menu-item>

        <!--<el-submenu index="3">-->
        <!--<template slot="title">-->
        <!--<el-menu-item>事务</el-menu-item>-->
        <!--</template>-->
        <!--<el-menu-item index="3-1" style="font-size: 16px;text-align: right">代办事务</el-menu-item>-->
        <!--<el-menu-item index="3-2">已办事务</el-menu-item>-->
        <!--</el-submenu>-->

        <el-menu-item index="TransactionManage" @click="goTransactionManage"><i class="el-icon-message"></i>事务管理
        </el-menu-item>
        <el-menu-item index="NoticeManage" @click="goNoticeManage"><i class="el-icon-news"></i>公告管理
        </el-menu-item>
        <el-menu-item index="UsersManage" @click="goUsersManage"><i class="el-icon-star-on"></i>用户管理
        </el-menu-item>
        <el-menu-item index="RoleManage" @click="goRoleManage"><i class="el-icon-star-off"></i>角色管理
        </el-menu-item>
        <el-menu-item index="DataDictionary" @click="goDataDictionary"><i class="el-icon-tickets"></i>数据字典
        </el-menu-item>
        <!--<el-menu-item index="8" @click="goOrganizationManage"><i class="el-icon-edit-outline"></i>组织机构-->
        <!--</el-menu-item>-->
        <el-menu-item index="LogManage" @click="goLogManage"><i class="el-icon-edit"></i>日志管理
        </el-menu-item>

      </el-menu>
      <!-- </el-col>
     </el-row>-->

    </div>
  </div>
</template>

<script>
  export default {
    name: "LeftNav",
    data(){
      return {
        activeIndex:'PdManage',
      }
    },
    created(){
      this.getUrl();
    },
    methods: {
      getUrl(){
        let self = this;
        let currentUrl = window.location.href;
          self.activeIndex = currentUrl.split('/')[4]
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

      goUsersManage() {
        this.$router.push({path: '/Back/UsersManage'})
      },
      goRoleManage() {
        this.$router.push({path: '/Back/RoleManage'})
      },
      goPdManage() {
        this.$router.push({path: '/Back/PdManage'})
      },
      goNormManage() {
        this.$router.push({path: '/Back/NormManage'})
      },
      goTransactionManage() {
        this.$router.push({path: '/Back/TransactionManage'})
      },
      goDataDictionary() {
        this.$router.push({path: '/Back/DataDictionary'})
      },
      goOrganizationManage() {
        this.$router.push({path: '/Back/OrganizationManage'})
      },
      goLogManage() {
        this.$router.push({path: '/Back/LogManage'})
      },
      goNoticeManage() {
        this.$router.push({path: '/Back/NoticeManage'})
      }
    }
  }
</script>

<style scoped>
  #leftnav {
    clear: both;
    /*font-size: 22px;*/
    height: 100%;
    width: 250px;
    background-color: rgb(70, 130, 180);
  }

  /*#leftnav i {*/
    /*float: left;*/
    /*line-height: 56px;*/
  /*}*/

  .el-menu-item {
    font-size: 18px;
  }

  .el-menu {
    width: 100%;
    border-right: 0;
  }

  /*.tac{
    background-color:#545c64;
    color:#fff;
    height: 100%;
  }*/
  .el-menu-item:focus, .el-menu-item:hover, .el-menu-item.is-active {
    background-color: rgb(90, 160, 218) !important;
  }
</style>
