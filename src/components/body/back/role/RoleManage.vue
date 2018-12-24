<template>
  <!--后台标准管理-->
  <div id="userManage">
    <!--<div class="userManage_first">-->
    <!--检索-->
    <div style="float: left">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.roleName" placeholder="角色名" style="width: 400px"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--新增、启用、停用-->
    <div class="userMenu">
      <el-button type="primary" @click="goRoleAdd">新增</el-button>
      <el-button type="primary" @click="goRoleStart">启用</el-button>
      <el-button type="primary" @click="goRoleDisable">停用</el-button>
      <el-button type="primary" @click="goRoleDelete">删除</el-button>
    </div>
    <!--列表-->
    <div style="clear: both;padding-top: 20px">
      <el-table
        ref="filterTable"
        :data="roleData"
        tooltip-effect="dark"
        :default-sort="{prop: 'date', order: 'descending'}"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column
          type="index"
          width="70px" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="roleName"
          sortable
          label="角色名" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="describe"
          label="描述" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.state === '禁用' ? 'danger' : 'success'"
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          width="120px"
          label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="changeRoleInfo(scope.row)" type="text" size="medium">编辑</el-button>
            <el-button @click="limitAssignment(scope.row)" type="text" size="medium">权限分配</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination></Pagination>
    </div>

    <el-dialog title="角色权限分配"
               :visible.sync="dialogVisible"
               width="70%">
      <div id="roleLimitAssignment">
        <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
        <div style="margin: 10px 0 50px 0">
          <!--默认展开树形图   default-expand-all -->
          <el-tree
            :data="roleLimitAssignmentData"
            show-checkbox
            node-key="id"
            :filter-node-method="filterNode"
            :props="defaultProps"
            ref="tree2">
          </el-tree>
        </div>
        <div class="buttons" style="position: absolute;bottom: 20px">
          <el-button @click="allotLimit" style="background-color: #4976A5;color:white">分配权限</el-button>
        </div>
      </div>
    </el-dialog>

  </div>

  <!--</div>-->
</template>

<script>
  import Pagination from "../../../resource/Pagination";

  export default {
    name: "RoleManage",
    components: {Pagination},
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    data() {
      return {
        currentPage4: 4,
        formInline: {
          roleName: ''
        },
        roleList: ['试用干警', '管理员', '高级管理员'],
        roleData: [
          {
            number: 1,
            roleName: '高级管理员',
            describe: '高级管理员是最高检所拥有的角色，拥有系统的所有权限',
            state: '启用',
          }, {
            number: 2,
            roleName: '管理员',
            describe: '管理员是各地实验室所拥有的角色，拥有系统的部分权限',
            state: '启用',
          }, {
            number: 3,
            roleName: '试用干警',
            describe: '试用干警是各地检察机关所拥有的角色，拥有系统的部分权限',
            state: '启用',
          }
        ],

        //————权限分配  数据
        filterText: '',
        roleLimitAssignmentData: [
          {
            id: 1,
            label: '首页',
            children: [{
              id: 5,
              label: '头部',
              children: [{
                id: 15,
                label: '用户注册'
              }, {
                id: 16,
                label: '用户登录'
              }]
            }, {
                id: 6,
                label: '主体部分',
                children: [{
                  id: 17,
                  label: '检索'
                }, {
                  id: 18,
                  label: '菜单栏'
                }]
              }]
          },
          {
            id: 2,
            label: '商品详情页',
            children: [{
              id: 7,
              label: '产品白皮书下载'
            }, {
              id: 8,
              label: '产品试用'
            }]
          },
          {
            id: 3,
            label: '标准首页',
            children: [{
              id: 9,
              label: '标准检索'
            }, {
              id: 10,
              label: '高级检索'
            }, {
              id: 11,
              label: '关键字更换'
            }]
          }, {
            id: 4,
            label: '标准详情页',
            children: [{
              id: 12,
              label: '标准在线预览'
            }, {
              id: 13,
              label: '标准下载'
            }, {
              id: 14,
              label: '意见反馈'
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },

        dialogVisible: false,
      }
    },
    methods: {
      // back(){
      //   this.$router.push({name:'PdAdd'})
      // },
      //搜索列表所需函数
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      goRoleAdd() {
        this.$router.push({path: '/Back/RoleManage/AddRole'})
      },
      goRoleStart() {

      },
      goRoleDisable() {

      },
      goRoleDelete() {

      },
      changeRoleInfo() {
        this.$router.push({path: '/Back/RoleManage/ChangeRoleInfo'})
      },

      // ————角色分配
      //弹窗显示
      limitAssignment() {
        this.dialogVisible = true;
      },
      //角色分配--过滤器
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      //分配角色
      allotLimit() {

      }
    }
  }
</script>

<style scoped>
  #userManage {
    min-height: 400px;
    width: 90%;
    margin: 0 5%;
  }

  .userMenu {
    clear: both;
  }

  .el-button {
    float: left;
  }

  #roleLimitAssignment {
    min-height: 300px;
  }
</style>
