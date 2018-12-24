<template>
  <div id="changeRoleInfo">
    <!--<h1 style="text-align: center;margin: 40px 0 50px 0">用户注册</h1>-->
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色" prop="role">
        <el-radio-group v-model="ruleForm.role" disabled="true">
          <el-radio label="试用干警"></el-radio>
          <el-radio label="管理员"></el-radio>
          <el-radio label="高级管理员"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="描述" prop="describe">
        <el-input v-model="ruleForm.describe"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="state">
        <el-input v-model="ruleForm.state" disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
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
          role:'管理员',
          describe: '管理员是各地实验室所拥有的角色，拥有系统的部分权限',
          state: '启用'
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
      goLogin(){
        this.$router.push('Login')
      }
    }
  }
</script>
<style scoped>
  #changeRoleInfo {
    min-height: 300px;
    width: 60%;
    margin: 20px 20% 20px 20%;
    font-size: 15px;
  }
  #changeRoleInfo .el-input{
    width: 80% !important;
    text-align: left !important;
  }
  #changeRoleInfo .el-col-24 {
    width: 85% !important;
    text-align: center !important;
  }
  #changeRoleInfo .el-select{
    width: 80%;
  }
  #changeRoleInfo .el-date-editor--date{
    width: 40% !important;
  }
</style>
<style>
  #changeRoleInfo .el-form-item__label{
    width: 120px !important;
  }
</style>
