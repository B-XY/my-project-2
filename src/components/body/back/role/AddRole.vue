<template>
  <div id="addRole">
    <!--<h1 style="text-align: center;margin: 40px 0 50px 0">用户注册</h1>-->
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色" prop="role">
        <el-select v-model="ruleForm.role" placeholder="角色">
          <el-option v-bind:label=type v-for="(type,index) in roleList" :key="index" v-bind:value=index></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述" prop="describe">
        <el-input v-model="ruleForm.describe"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-input v-model="ruleForm.state"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
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
            this.$refs.ruleForm2.validateField('checkPass');
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
      return {
        ruleForm: {
          role: '',
          describe:'',
          state:''
        },
        roleList:['试用干警','管理员','高级管理员'],
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
            {required: true, message: '请输入证件号', trigger: 'blur'}
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
        }
      }
    },
    methods:{
      goBack() {
        this.$router.back()
      },
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      goLogin(){
        this.$router.push('Login')
      }
    }
  }
</script>
<style scoped>
  #addRole {
    min-height: 300px;
    width: 60%;
    margin: 20px 20% 20px 20%;
    font-size: 15px;
  }
  #addRole .el-input{
    width: 80% !important;
    text-align: left !important;
  }
  #addRole .el-col-24 {
    width: 85% !important;
    text-align: center !important;
  }
  #addRole .el-select{
    width: 80%;
  }
  #addRole .el-date-editor--date{
    width: 40% !important;
  }
</style>
<style>
  #addRole .el-form-item__label{
    width: 120px !important;
  }
</style>
