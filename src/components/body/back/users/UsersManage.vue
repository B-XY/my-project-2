<template>
  <!--后台标准管理-->
  <div id="usersManage">
    <!--<div class="userManage_first">-->
    <!--检索-->
    <div style="float: left">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item style="float: left;">
          <el-input v-model="formInline.userName" placeholder="用户名"  style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="float: left;">
          <el-input v-model="formInline.relName" placeholder="真实姓名"  style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item style="float: left">
          <el-date-picker
            v-model="formInline.value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="注册日期（始）"
            end-placeholder="注册日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: left;">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--新增、启用、停用-->
    <div class="userMenu">
      <el-button type="primary" @click="goUserAdd">新增</el-button>
      <el-button type="primary" @click="goStart">启用</el-button>
      <el-button type="primary" @click="goDisable">停用</el-button>
      <el-button type="primary" @click="clearFilter">列表重置</el-button>
    </div>
    <!--列表-->
    <div style="clear: both;padding-top: 20px">
      <el-table
        ref="filterTable"
        :data="userData"
        tooltip-effect="dark"
        :default-sort="{prop: 'date', order: 'descending'}"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          width="70px" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户名" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="relName"
          label="真实姓名" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="role"
          sortable
          :filters="roleList"
          :filter-method="filterHandler"
          label="角色" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="org"
          :filters="orgList"
          :filter-method="filterHandler"
          label="单位" show-overflow-tooltip>
        </el-table-column>
        <!--<el-table-column
          prop="IDcard"
          label="身份证号码" show-overflow-tooltip>
        </el-table-column>-->
        <el-table-column
          prop="state"
          sortable
          :filters="roleStateList"
          :filter-method="filterHandler"
          label="状态" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-tag
              :type="typeTag(scope.row.state)"
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          sortable
          label="注册日期">
          <!--<template slot-scope="scope">{{ scope.row.date }}</template>-->
        </el-table-column>
        <el-table-column
          width="120px"
          label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button @click="userView(scope.row)" type="text" size="medium">查看</el-button>
            <el-button @click="roleAssignment(scope.row)" type="text" size="medium">角色分配</el-button>
          </template>
        </el-table-column>
      </el-table>
      <Pagination></Pagination>
    </div>

    <el-dialog title="用户角色分配"
               :visible.sync="dialogVisible"
               width="70%">
      <div id="userRoleAssignment">
        <div>
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
        </div>
        <div style="margin: 10px 0">
          <!--默认展开树形图   default-expand-all -->
          <el-tree
            :data="userRoleAssignmentData"
            show-checkbox
            node-key="id"
            :filter-node-method="filterNode"
            :props="defaultProps"
            check-strictly
            @check-change="handleClick"
            @node-click="nodeClick"
            ref="treeForm"
          >
          </el-tree>
        </div>
        <div class="buttons" style="position: absolute;bottom: 20px">
          <el-button @click="allotRole" style="background-color: #4976A5;color:white">分配角色</el-button>
        </div>
        <!--<el-tree-->
        <!--:data="roleData"-->
        <!--show-checkbox-->
        <!--node-key="id"-->
        <!--:default-expanded-keys="[2, 3]"-->
        <!--:default-checked-keys="[5]"-->
        <!--:props="defaultProps">-->
        <!--</el-tree>-->
      </div>
    </el-dialog>

  </div>

  <!--</div>-->
</template>

<script>
  import Pagination from "../../../resource/Pagination";
  export default {
    name: "UsersManage",
    components: {Pagination},
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    data() {
      return {
        currentPage4: 4,
        //————搜索表单数据
        formInline: {
          userName: '',
          ruserRole: '',
          relName:''
        },
        //————搜索列表数据
        userData: [
          {
            number: 1,
            name: '王小虎',
            relName: '王虎',
            role: '试用干警',
            state: '启用',
            date: '2018-04-25',
            org:'北京市检察院',
            // IDcard:'11111111111111111'
          }, {
            number: 2,
            name: '王大虎',
            relName: '王虎',
            role: '管理员',
            state: '停用',
            date: '2018-05-25',
            org:'天津市智慧检务实验室',
            // IDcard:'222222222222222222'
          },
          {
            number: 3,
            name: '王微虎',
            relName: '王虎',
            role: '高级管理员',
            state: '启用',
            date: '2018-02-25',
            org:'智慧检务创新研究院',
            // IDcard:'333333333333333333'
          },
          {
            number: 4,
            name: '小王虎',
            relName: '王虎',
            role: '试用干警',
            state: '启用',
            date: '2018-04-24',
            org:'山东省检察院',
            // IDcard:'44444444444444444'
          },
          {
            number: 5,
            name: '大王虎',
            relName: '王虎',
            role: '试用干警',
            state: '停用',
            date: '2018-04-26',
            org:'河北省检察院',
            // IDcard:'555555555555555555'
          },
          {
            number: 6,
            name: '微王虎',
            relName: '王虎',
            role: '试用干警',
            state: '停用',
            date: '2018-08-05',
            org:'重庆市检察院',
            // IDcard:'666666666666666666'
          },
        ],
        //————过滤器  过滤项数据
        roleList: [{text:'试用干警',value:'试用干警'},{text:'管理员',value:'管理员'},{text:'高级管理员',value:'高级管理员'}],
        roleStateList: [{text:'启用',value:'启用'},{text:'停用',value:'停用'}],
        orgList:[
          {text:'智慧检务创新研究院',value:'智慧检务创新研究院'},
          {text:'天津市智慧检务实验室',value:'天津市智慧检务实验室'},
          {text:'北京市检察院',value:'北京市检察院'},
          {text:'山东省检察院',value:'山东省检察院'},
          {text:'河北省检察院',value:'河北省检察院'},
          {text:'重庆市检察院',value:'重庆市检察院'},
        ],
        //————角色分配  数据
        filterText: '',
        userRoleAssignmentData: [
          {
            id: 1,
            label: '试用干警',
            // children: [{
            //   id: 4,
            //   label: '二级 1-1',
            //   children: [{
            //     id: 9,
            //     label: '三级 1-1-1'
            //   }, {
            //     id: 10,
            //     label: '三级 1-1-2'
            //   }]
            // }]
          },
          {
            id: 2,
            label: '管理员',
            // children: [
            //   {
            //   id: 5,
            //   label: '二级 2-1'
            // },
            //   {
            //   id: 6,
            //   label: '二级 2-2'
            // }
            // ]
          },
          {
            id: 3,
            label: '高级管理员',
            // children: [
            //   {
            //   id: 7,
            //   label: '二级 3-1'
            // }, {
            //   id: 8,
            //   label: '二级 3-2'
            // }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        //————角色分配弹窗设置
        dialogVisible: false,
      }
    },
    methods: {
      typeTag(type){
        if(type!==null){
          if (type ==='启用') {
            return 'success'
          }else{
            if (type ==='停用'){
              return 'danger'
            }else{
              return ''
            }
          }
        }else {
          return ''
        }
      },
      // back(){
      //   this.$router.push({name:'PdAdd'})
      // },
      //————搜索列表 所需函数
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //表格过滤器
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      //清除过滤信息
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      //————页面方法调用
      goUserAdd() {
        this.$router.push({path: '/Back/UsersManage/AddUser'})
      },
      goStart() {
      },
      goDisable() {
      },
      userView(){
        this.$router.push({path: '/Back/UsersManage/UserView'})
      },
      // ————角色分配
      //弹窗显示
      roleAssignment() {
        this.dialogVisible = true;
      },
      //角色分配--过滤器
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      //解决elementUI tree  无法实现单选问题
      handleClick(data, checked, node){
        if(checked == true){
          this.checkedId = data.id;
          this.$refs.treeForm.setCheckedNodes([data]);
        }
      },
      nodeClick(data,checked,node){
        this.checkedId = data.id
        this.$refs.treeForm.setCheckedNodes([data]);
      },
      //分配角色
      allotRole(){
      }
    }
  }
</script>

<style scoped>
  #usersManage {
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
  #userRoleAssignment{
    min-height: 300px;
  }
</style>
