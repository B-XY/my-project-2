<template>
  <div>
    <div id="header">
      <div class="register-login">
        <div class="float_right">
          <div style="float: right;width: 100px">
            <a @click="signOut" >退出系统</a>
          </div>
          <div style="float: right;width: 100px">
            <a @click="goLogin">登录</a>
            /
            <a @click="goRegister">注册</a>
          </div>
          <div style="float: right;width: 100px">
            <router-link :to="{ path: '/Back'}">后台管理</router-link>
          </div>

          <!--<el-badge :value="15" :max="99" class="item">-->
          <div style="width: 100px;float: right">
            <a @click="goPersonal" >个人中心</a>
          </div>

          <div @click="goNews" style="float: right;width: 100px">
            <el-badge :value="12" :max="99" class="item" style="cursor: pointer">
              消息
            </el-badge>
          </div>
          <!--</el-badge>-->
          <!--<a @click="goBack">后台管理</a>-->

        </div>
      </div>

      <div class="logo_title" style="min-height: 50px">
        <div class="logo" @click="goIndex"></div>
        <div class="title" @click="goIndex">智慧检务创新研究院智能化应用测试展示平台</div>

      </div>
    </div>
    <!--<Menu></Menu>-->
    <!--消息弹窗-->
    <el-dialog title="消息"
               :visible.sync="dialogVisibleNews"
               width="70%" style="min-width: 1000px">
      <div class="newsshow">
        <div class="new_title">
          <el-badge :value="2" :max="99" class="item">
            简单消息
          </el-badge>
        </div>
        <div class="transaction_title" @click="goTransactionManage" style="float: right;width: 100px">
          <el-badge :value="10" :max="99" class="item">
            事务消息
          </el-badge>
        </div>
        <el-table
          height="350"
          ref="filterTable"
          :data="newsshow"
          tooltip-effect="dark"
          :default-sort = "{prop: 'date', order: 'descending'}"
          style="width: 100%;"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            fixed="left"
            prop="type"
            label="类别" show-overflow-tooltip
            width="160"
            :filters="types"
            :filter-method="filterHandler"

          >
          </el-table-column>
          <el-table-column
            prop="name"
            width="70"
            label="发件人" show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            prop="organazation"
            width="200"
            label="发件单位" show-overflow-tooltip
            :filters="organazationList"
            :filter-method="filterHandler">
          </el-table-column>
          <el-table-column
            prop="date"
            sortable
            width="130"
            label="发件日期"
            column-key="date"

            :show-overflow-tooltip="true"
          >

          </el-table-column>
          <el-table-column
            prop="state"
            fixed="right"
            label="状态" show-overflow-tooltip
            :filters="states"
            :filter-method="filterHandler">
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.state === '未查看' ? 'danger' : 'success'"
                disable-transitions>{{scope.row.state}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            width="100px"
            label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button @click="goNew(scope.row)" type="text" size="medium">查看</el-button>
              <el-button @click="newDelete(scope.row)" type="text" size="medium">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="goNewsDelete">删除</el-button>
        <el-button type="primary" @click="clearFilter" style="margin-top: 20px">列表重置</el-button>
        <el-button type="primary" @click="dialogVisibleNews = false">返回</el-button>
      </div>
    </el-dialog>
    <el-dialog title="消息"
               :visible.sync="dialogVisibleNew"
               width="70%"
               style="min-width: 1000px">
      <div class="newshow" :data="newshow">
        <el-form label-width="150px" style="text-align: left;">
          <el-form-item label="发件人：" >
            {{newshow.name}}
          </el-form-item>
          <el-form-item label="发件单位：">
            {{newshow.organazation}}
          </el-form-item>

          <el-form-item label="消息类别：">
            {{newshow.type}}
          </el-form-item>
          <el-form-item label="消息状态：">
            {{newshow.state}}
          </el-form-item>
          <el-form-item label="发件时间：">
            {{newshow.date}}
          </el-form-item>
          <el-form-item label-width="0px">
            <el-card  shadow="never" style="min-height: 400px;border-color: #75beff;"  >
              {{newshow.content}}
            </el-card>
          </el-form-item>
          <!--<el-form-item label-width="0px">
            <p>意见建议：</p>
            <el-input  shadow="never" style="min-height: 100px;border-color: #75beff;"  type="textarea">
              {{newsshow.Opinion}}
            </el-input>
          </el-form-item>-->
          <el-form-item label-width="0px" style="text-align: center">
            <el-button type="primary" @click="goLast">
              上一封
            </el-button>
            <el-button type="primary" @click="goNext">
              下一封
            </el-button>
            <el-button type="primary" @click="goNews">
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <!--个人中心弹窗-->
    <el-dialog title="个人中心"
               :visible.sync="dialogVisiblePersonal"
               width="50%" style="min-width: 1000px">
      <div class="personalshow" :data="personalshow">
        <el-form label-width="150px" style="text-align: left;">
          <el-form-item label="用户名：" >
            <el-input v-model="personalshow.user" style="min-width: 200px;width: 60%"></el-input>
          </el-form-item>
          <el-form-item label="真实名：" >
            {{personalshow.relname}}
          </el-form-item>
          <el-form-item label="用户单位：">
            {{personalshow.organazation}}
          </el-form-item>

          <el-form-item label-width="0px" style="text-align: center">
            <el-button type="primary" @click="goChangeName">
              确定
            </el-button>
            <el-button type="primary" @click="goChangePassword">
              修改密码
            </el-button>
            <!--<el-button type="primary" @click="auditNoPass(script.row)">
              驳回
            </el-button>-->
            <el-button type="primary" @click="dialogVisiblePersonal = false">
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
    <!--修改密码-->
    <el-dialog title="密码修改"
               :visible.sync="dialogVisiblePassword"
               width="50%" style="min-width: 1000px">
      <div class="passwordchange">
        <el-form label-width="150px" style="text-align: left;">
          <el-form-item label="原密码：" >
            <el-input v-model="passwordchange.old" style="min-width: 200px;width: 70%"></el-input>
          </el-form-item>
          <el-form-item label="新密码：" >
            <el-input v-model="passwordchange.new" style="min-width: 200px;width: 70%"></el-input>
          </el-form-item>
          <el-form-item label-width="0px" style="text-align: center">
            <el-button type="primary" @click="change">
              修改密码
            </el-button>
            <!--<el-button type="primary" @click="auditNoPass(script.row)">
              驳回
            </el-button>-->
            <el-button type="primary" @click="goPersonal">
              返回
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  // import Menu from "./resource/Menu"
  export default {
    name: 'header',
    // components: {Menu},
    data(){
      return{
        dialogVisibleNews: false,
        dialogVisibleNew: false,
        dialogVisiblePersonal:false,
        dialogVisiblePassword:false,
        types:[
          {text:'用户注册审核',value:'用户注册审核'},
          {text:'产品发布审核',value:'产品发布审核'},
          {text:'产品试用审核',value:'产品试用审核'},
          {text:'标准发布审核',value:'标准发布审核'},
          {text:'公告发布审核',value:'公告发布审核'},
          {text:'用户注册待审核',value:'用户注册待审核'},
          {text:'产品发布待审核',value:'产品发布待审核'},
          {text:'产品试用待审核',value:'产品试用待审核'},
          {text:'标准发布待审核',value:'标准发布待审核'},
          {text:'公告发布待审核',value:'公告发布待审核'},
        ],
        //时间筛选（暂不设置）
        dateList:[
          {
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
              const date1=new Date();
            },
            // value:date1,
            value:'2018-12-24'
          },
          {
            text: '昨天',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 );
              picker.$emit('pick', [start, end]);
            },
            value:''
          },
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
            value:''
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
            value:''
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            },
            value:''
          }
        ],
        organazationList:[
          {text:'上海市实验室',value:'上海市实验室'},
          {text:'浙江省检察院',value:'浙江省检察院'},
          {text:'最高人民检察院',value:'最高人民检察院'},
        ],
        states:[
          {text:'已查看',value:'已查看'},
          {text:'未查看',value:'未查看'},
        ],
        newsshow:[
          {
            number: 1,
            name: '微王虎',
            organazation:'最高人民检察院',
            type:'用户注册审核',
            state:'已查看',
            date:'2018-12-24'
          },
          {
            number: 2,
            name: '微王虎',
            organazation:'最高人民检察院',
            type:'用户注册审核',
            state:'已查看',
            date:'2018-08-05'
          },
          {
            number: 3,
            name: '微王虎',
            organazation:'最高人民检察院',
            type:'用户注册审核',
            state:'已查看',
            date:'2018-08-05'
          },
          {
            number: 4,
            name: '微王虎',
            organazation:'最高人民检察院',
            type:'用户注册审核',
            state:'已查看',
            date:'2018-08-05'
          },
          {
            number: 5,
            name: '微王虎',
            organazation:'最高人民检察院',
            type:'用户注册审核',
            state:'已查看',
            date:'2018-08-05'
          },
          {
            number: 6,
            name: '二王虎',
            organazation:'最高人民检察院',
            type:'用户注册审核',
            state:'未查看',
            date:'2018-08-05'
          },
          {
            number: 7,
            name: '王一虎',
            organazation:'最高人民检察院',
            type:'用户注册审核',
            state:'未查看',
            date:'2018-08-05'
          },
        ],
        newshow:{
          name: '王小虎',
          organazation:'上海市实验室',
          type:'产品发布审核',
          state:'未审核',
          date:'2018-04-25',
          content:'消息内容......',
        },
        personalshow:{
          user: '王小虎',
          relname:'王小虎',
          organazation:'上海市实验室',
          date:'2018-04-25',
          content:'消息内容......',
          Opinion:'意见内容...'
        },
        passwordchange:{
          old:'',
          new:''
        }
      }
    },
    methods: {
      goLast(){
      },
      goNext(){
      },
      signOut(){
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      goIndex(){
        this.$router.push('/')
      },
      goRegister() {
        this.$router.push('/Register')
      },
      goLogin() {
        this.$router.push('/Login')
      },
      goTransactionManage(){
        this.$router.push('/Back/TransactionManage');
        this.dialogVisibleNews =false;
      },
      goNews() {
        this.dialogVisibleNew = false;
        this.dialogVisibleNews = true;
      },
      goNew() {
        this.dialogVisibleNews = false;
        this.dialogVisibleNew = true;
      },
      newDelete(){
      },
      goNewsDelete(){
      },
      goPersonal() {
        this.dialogVisiblePersonal = true;
        this.dialogVisiblePassword =false;
      },
      goBack() {
        this.$router.push({path: '/Back'})
        // this.$router.go(0)
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      goChangeName(){
      },
      goChangePassword(){
        this.dialogVisiblePersonal =false;
        this.dialogVisiblePassword =true;
      },
      change(){
        this.$confirm('确认修改密码?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '修改成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
        });
      }
    }
  }
</script>

<style scoped>
  #header {
    /*background-color: steelblue;*/
    background-image: url("../assets/img/head.jpg");
    min-height: 150px;
    width: 100%;
  }
  .register-login {
    width: 100%;
    padding: 15px 0px;
    color: white;
  }
  .float_right {
    float: right;
    margin-right: 20px;
  }
  .register-login a {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
  .register-login a:hover {
    font-weight: bolder;
  }
  .logo {
    float: left;
    width: 90px;
    height: 90px;
    margin: 0 50px;
    background-image: url("../assets/img/logo.png");
    /*图片自适应div大小*/
    background-size: contain;
    line-height: 90px;
    cursor: pointer;
  }
  .title {
    float: left;
    font-size: 25px;
    line-height: 90px;
    /*margin-left: 10px;*/
    color: white;
    cursor: pointer;
  }
  .newsshow{
    /*width: 90%;
    margin: 0px 5% 0px 5%;*/
  }
  .newsshow .new_title{
    width: 40%;
    float: left;
    line-height: 30px;
    margin: 0px 0 20px 0;
    text-align: left;
    background-image: -webkit-linear-gradient(left, #337AB7, white);
    color: white;
    font-weight: bold;
    /*background: rgba(70, 130, 180, .5);*/
    padding: 5px 0 5px 30px;
  }
  /*.newsshow .transaction_title{
    width: 40%;
    float: right;
    line-height: 30px;
    margin: 0px 0 20px 0;
    text-align: left;
    background-image: -webkit-linear-gradient(left, #337AB7, white);
    color: white;
    font-weight: bold;
    !*background: rgba(70, 130, 180, .5);*!
    padding: 5px 0 5px 30px;
  }*/
</style>
