<template>
  <div id="addUser">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色" prop="role">
        <el-radio-group v-model="ruleForm.role">
          <el-radio label="试用干警"></el-radio>
          <el-radio label="管理员"></el-radio>
          <el-radio label="高级管理员"></el-radio>
        </el-radio-group>
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
      <el-form-item label="研究院" prop="institute">
        <el-input v-model="ruleForm.institute"></el-input>
      </el-form-item>
      <el-form-item label="实验室" prop="lab">
        <el-input v-model="ruleForm.lab"></el-input>
      </el-form-item>
      <el-form-item label="实验室编号" prop="labNumber">
        <el-input v-model="ruleForm.labNumber"></el-input>
      </el-form-item>
      <el-form-item label="检察机关" prop="orocuratorialOrgans">
        <el-input v-model="ruleForm.orocuratorialOrgans"></el-input>
      </el-form-item>
      <el-form-item label="检察机关编号" prop="orocuratorialOrgansNumber">
        <el-input v-model="ruleForm.orocuratorialOrgansNumber"></el-input>
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
  #addUser {
    min-height: 300px;
    width: 60%;
    margin: 20px 20% 20px 20%;
    font-size: 15px;
  }
  #addUser .el-input{
    width: 80% !important;
    text-align: left !important;
  }
  #addUser .el-col-24 {
    width: 85% !important;
    text-align: center !important;
  }
  #addUser .el-select{
    width: 80%;
  }
  #addUser .el-date-editor--date{
    width: 40% !important;
  }
</style>
<style>
  #addUser .el-form-item__label{
    width: 120px !important;
  }
</style>
