<template>
  <div id="dataDictionaryAdd">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="字典编号" prop="number">
        <el-input v-model="ruleForm.number"></el-input>
      </el-form-item>
      <el-form-item label="字典名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="字典值" prop="value">
        <el-input v-model="ruleForm.value"></el-input>
      </el-form-item>
      <el-form-item label="字典类别" prop="type">
        <el-select v-model="ruleForm.type" placeholder="请选择字典类别">
          <el-option v-bind:label=type v-for="(type,index) in typeData" :key="index"
                     v-bind:value=index></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="ruleForm.sort"></el-input>
      </el-form-item>
      <el-form-item label="字典数据库表" prop="table">
        <el-input v-model="ruleForm.table"></el-input>
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
          number:'',
          name: '',
          value: '',
          type: '',
          sort: '',
          table: '',
          note: '',
        },
        rules: {
          number:[
            {required: true, message: '请输入字典编号', trigger: 'blur'}
          ],
          name:[
            {required: true, message: '请输入字典名称', trigger: 'blur'}
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
        },
        typeData: ['系统', '标准','标准'],
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
  #dataDictionaryAdd {
    min-height: 300px;
    width: 80%;
    margin: 20px 10% 20px 10%;
    font-size: 16px;
  }
  #dataDictionaryAdd .el-input{
    width: 80% !important;
    text-align: left !important;
  }
  #dataDictionaryAdd .el-select{
    width: 80% !important;
    text-align: center !important;
  }
</style>
<style>
  #dataDictionaryAdd .el-form-item__label{
    width: 100px !important;
  }
  #dataDictionaryAdd .el-textarea{
    width: 80% !important;
    text-align: left !important;
  }
  #dataDictionaryAdd .el-textarea__inner{
    line-height: 50px;
  }
</style>
