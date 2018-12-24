<template>
  <div id="userView">
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色" prop="role">
        <el-radio-group v-model="ruleForm.role" disabled>
          <el-radio label="试用干警"></el-radio>
          <el-radio label="管理员"></el-radio>
          <el-radio label="高级管理员"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="realName">
        <el-input v-model="ruleForm.realName" disabled></el-input>
      </el-form-item>
      <el-form-item label="证件类别"  prop="certificate">
        <el-select v-model="ruleForm.certificate" placeholder="请选择证件类别" disabled>
          <el-option label="身份证" value="idCard"></el-option>
          <el-option label="证件二" value="2"></el-option>
          <el-option label="证件三" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="证件号" prop="idNumber">
        <el-input v-model="ruleForm.idNumber" disabled></el-input>
      </el-form-item>
      <el-form-item label="研究院" prop="institute">
        <el-input v-model="ruleForm.institute" disabled></el-input>
      </el-form-item>
      <el-form-item label="实验室" prop="lab">
        <el-input v-model="ruleForm.lab" disabled></el-input>
      </el-form-item>
      <el-form-item label="实验室编号" prop="labNumber">
        <el-input v-model="ruleForm.labNumber" disabled></el-input>
      </el-form-item>
      <el-form-item label="检察机关" prop="orocuratorialOrgans">
        <el-input v-model="ruleForm.orocuratorialOrgans" disabled></el-input>
      </el-form-item>
      <el-form-item label="检察机关编号" prop="orocuratorialOrgansNumber">
        <el-input v-model="ruleForm.orocuratorialOrgansNumber" disabled></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '小王虎',
          realName: '王虎',
          role: '高级管理员',
          certificate:'身份证',
          idNumber: '241253199502125432',
          institute: '',
          lab: '智慧检务创新研究院',
          labNumber: '1151',
          orocuratorialOrgans:'',
          orocuratorialOrgansNumber:''
        },
      }
    },
    methods:{
      goBack() {
        this.$router.back()
      }
    }
  }
</script>
<style scoped>
  #userView {
    min-height: 300px;
    width: 60%;
    margin: 20px 20% 20px 20%;
    font-size: 15px;
  }
  #userView .el-input{
    width: 80% !important;
    text-align: left !important;
  }
  #userView .el-col-24 {
    width: 85% !important;
    text-align: center !important;
  }
  #userView .el-select{
    width: 80%;
  }
  #userView .el-date-editor--date{
    width: 40% !important;
  }
</style>
<style>
  #userView .el-form-item__label{
    width: 120px !important;
  }
</style>
