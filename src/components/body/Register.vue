<template>
  <div id="register">
    <h1 style="text-align: center;margin: 40px 0 50px 0">用户注册</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色" prop="role">
        <el-select v-model="ruleForm.role" placeholder="请选择角色类型" @change="getRoleType">
          <el-option v-bind:label=type v-for="(type,index) in roleType" :key="index"
                     v-bind:value=type></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realName">
        <el-input v-model="ruleForm.realName"></el-input>
      </el-form-item>
      <el-form-item label="证件类别"  prop="certificate">
        <el-select v-model="ruleForm.certificate" placeholder="请选择证件类别">
          <el-option label="身份证" value="idCard"></el-option>
          <el-option label="证件二" value="2"></el-option>
          <el-option label="证件三" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号" prop="idNumber">
        <el-input v-model="ruleForm.idNumber"></el-input>
      </el-form-item>
      <el-form-item label="研究院" prop="institute"  v-if = 'isInstituteShow'>
        <el-input v-model="ruleForm.institute"></el-input>
      </el-form-item>
      <el-form-item label="实验室" prop="lab" v-if = 'isLabShow'>
        <el-select v-model="ruleForm.lab" placeholder="请选择所属实验室" @change="getLab">
          <el-option v-bind:label=lab v-for="(lab,index) in labList" :key="index"
                     v-bind:value=lab></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="实验室编号" prop="labNumber" v-if = 'isLabShow'>
        <el-input v-model="ruleForm.labNumber"></el-input>
      </el-form-item>
      <el-form-item label="检察机关" prop="orocuratorialOrgans" v-if = 'isOrocuratorialOrgansShow'>
        <el-select v-model="ruleForm.orocuratorialOrgans" placeholder="请选择所属检察机关" @change="getOrocuratorialOrgans">
          <el-option v-bind:label=orocuratorialOrgans v-for="(orocuratorialOrgans,index) in orocuratorialOrgansList" :key="index"
                     v-bind:value=orocuratorialOrgans></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="检察机关编号" prop="orocuratorialOrgansNumber" v-if = 'isOrocuratorialOrgansShow'>
        <el-input v-model="ruleForm.orocuratorialOrgansNumber"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div style="width: 100%;height: 30px">
    <div style="float: right;margin-right: 50px"><i class="el-icon-view"></i><a style="cursor:pointer" @click="goLogin">立即登录</a></div>
    </div>
    </div>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            // this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var validateID = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入证件号'));
        } else if (!/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i.test(value)) {
          callback(new Error('请输入15或18位有效省份证号!'));
        } else {
          callback();
        }
      }
      return {
        ruleForm: {
          role: '',
          name: '',
          pass: '',
          checkPass: '',
          realName: '',
          certificate:'',
          idNumber: '',
          institute: '',
          lab: '',
          labNumber: '',
          orocuratorialOrgans:'',
          orocuratorialOrgansNumber:''
        },
        rules: {
          role:[
            {required: true, message: '请选择角色类型', trigger: 'change'}
            ],
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
          ],
          pass: [
            {required: true, validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {required: true,validator: validatePass2, trigger: 'blur'}
          ],
          realName:[
            {required: true, message: '请输入真实姓名', trigger: 'blur'}
          ],
          certificate: [
            {required: true, message: '请选择证件类别', trigger: 'change'}
          ],
          idNumber:[
            {required: true, validator: validateID, trigger: 'blur'}
          ],
          institute:[
            {required: true, message: '请输入研究院名称', trigger: 'blur'}
          ],
          lab: [
            {required: true, message: '请输入实验室名称', trigger: 'blur'}
          ],
          labNumber: [
            {required: true, message: '请输入实验室编号', trigger: 'blur'}
          ],
          orocuratorialOrgans:[
            {required: true, message: '请输入检察院名称', trigger: 'blur'}
          ],
          orocuratorialOrgansNumber:[
            {required: true, message: '请输入检察院编号', trigger: 'blur'}
          ]
        },
        //————角色类型
        roleType:['试用干警','管理员','高级管理员'],
        //————实验室列表
        labList:['北京市实验室','湖南省实验室','贵州省实验室','河南省实验室','黑龙江省实验室','福建省实验室','湖北省实验室','四川省实验室','河北省实验室'],
        //————检察院列表
        orocuratorialOrgansList:['北京市检察院','湖南省检察院','贵州省检察院','河南省检察院','黑龙江省检察院','福建省检察院','湖北省检察院','四川省检察院','河北省检察院'],
        //————模块显示控制
        isInstituteShow:false,
        isLabShow:true,
        isOrocuratorialOrgansShow:true
      }
    },
    methods:{
      //根据用户注册不同角色，显示不同注册信息
      getRoleType(role){
        if(role === '试用干警'){
          this.isLabShow = false
          this.isOrocuratorialOrgansShow = true
        }else if(role === '管理员'){
          this.isOrocuratorialOrgansShow = false
          this.isLabShow = true
        }else{
          this.ruleForm.institute = '智慧检务创新研究院'
          this.isLabShow = false
          this.isOrocuratorialOrgansShow = false
        }
      },
      //明确实验室后，自动获取该实验室编号
      getLab(lab){
        //获取该实验室的编号，并赋值给labNumber

        this.ruleForm.labNumber = 13512
      },
      //明确检察机关后，自动获取该检察机关编号
      getOrocuratorialOrgans(orocuratorialOrgans){
        //获取该检察院的编号，并赋值给orocuratorialOrgansNumber

        this.ruleForm.orocuratorialOrgansNumber = 25131
      },

      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //跳转到登录页面
      goLogin(){
        this.$router.push('Login')
      }
    }
  }
</script>
<style scoped>
  #register {
    min-height: 300px;
    width: 60%;
    margin: 20px 20% 20px 20%;
    font-size: 15px;
  }
  #register .el-input{
    width: 80% !important;
    text-align: left !important;
  }
  #register .el-col-24 {
    width: 85% !important;
    text-align: center !important;
  }
  #register .el-select{
    width: 80%;
   }
  #register .el-date-editor--date{
    width: 40% !important;
  }
</style>
<style>
  #register .el-form-item__label{
    width: 120px !important;
  }
</style>
