<template>
  <div id="dictionaryDataAlter">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="字典项名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="字典项值" prop="value">
        <el-input v-model="ruleForm.value"></el-input>
      </el-form-item>
      <el-form-item label="字典项编号" prop="number">
        <el-input v-model="ruleForm.number"></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="note">
        <el-input type="textarea" v-model="ruleForm.note"></el-input>
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
      return {
        ruleForm: {
          name: '应用系统标准',
          value: '应用系统标准',
          number: '2',
          note: '应用系统标准是检察机关信息化建设标准中的一个分类',
          date: '2018-12-15',
        },
        rules: {
          name:[
            {required: true, message: '请输入名字', trigger: 'blur'}
          ],
          // value: [
          //   {required: true, message: '请输入值', trigger: 'blur'},
          // ],
          // number:[
          //   {required: true, message: '请输入编号', trigger: 'blur'}
          // ],
          // note: [
          //   {required: true, message: '请输入备注', trigger: 'blur'}
          // ],
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
      }
    }
  }
</script>
<style scoped>
  #dictionaryDataAlter {
    min-height: 300px;
    width: 80%;
    margin: 20px 10% 20px 10%;
    font-size: 16px;
  }
  #dictionaryDataAlter .el-input{
    width: 80% !important;
    text-align: left !important;
  }
</style>
<style>
  #dictionaryDataAlter .el-form-item__label{
    width: 100px !important;
  }
  #dictionaryDataAlter .el-textarea{
    width: 80% !important;
    text-align: left !important;
  }
  #dictionaryDataAlter .el-textarea__inner{
    line-height: 50px;
  }
</style>
