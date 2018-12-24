<template>
  <div id="advancedSearch">
    <h1 style="margin: 40px 0 50px 0">高级检索</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-form-item label="标准名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="标准号" prop="number">
        <el-input v-model="ruleForm.number"></el-input>
      </el-form-item>
      <el-form-item label="标准状态" prop="state">
        <el-radio-group v-model="ruleForm.state">
          <el-radio label="全部"></el-radio>
          <el-radio label="即将实施"></el-radio>
          <el-radio label="现行"></el-radio>
          <el-radio label="废止"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="关键词" prop="keys">
        <el-input v-model="ruleForm.keys"></el-input>
      </el-form-item>
      <el-form-item label="起草单位" prop="drillingUnit">
        <el-input v-model="ruleForm.drillingUnit"></el-input>
      </el-form-item>
      <el-form-item label="发布日期" required>
        <el-col style="color: #DCDFE6 ; font-weight: bolder">
          <el-date-picker v-model="value1" type="date" placeholder="选择起始日期" style="width: 30%" prop="releaseStarting"></el-date-picker>
          ~
          <el-date-picker v-model="value2" type="date" placeholder="选择结束日期" style="width: 30%" prop="releaseEnding"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="实施日期" required>
        <el-col style="color: #DCDFE6 ; font-weight: bolder">
          <el-date-picker v-model="value3" type="date" placeholder="选择起始日期" style="width: 30%" prop="implementStarting"></el-date-picker>
          ~
          <el-date-picker v-model="value4" type="date" placeholder="选择结束日期" style="width: 30%" prop="implementEnding"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="中国标准分类号" prop="chinese">
        <el-input v-model="ruleForm.chinese"></el-input>
      </el-form-item>
      <el-form-item label="国际标准分类号" prop="international">
        <el-input v-model="ruleForm.international"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1:'',
        value2:'',
        value3:'',
        value4:'',
        ruleForm: {
          name: '',
          number: '',
          state: '',
          keys: '',
          drillingUnit:'',
          chinese:'',
          international:''
        },
        rules:{
          name:[{required: true, message: '请输入标准名称', trigger: 'blur'}],
          number:[{required: true, message: '请输入标准号', trigger: 'blur'}],
          state:[{required: true, message: '请选择标准状态', trigger: 'change'}],
          keys:[{required: true, message: '请输入关键词', trigger: 'blur'}],
          drillingUnit:[{required: true, message: '请输入起草单位', trigger: 'blur'}],
          chinese:[{required: true, message: '请输入中国标准分类号', trigger: 'blur'}],
          international:[{required: true, message: '请输入国际标准分类号', trigger: 'blur'}]

          // releaseTime:[{required: true, message: '请输入发布时间', trigger: 'change'}],
          // implementTime:[{required: true, message: '请输入实施时间', trigger: 'change'}]

          // releaseStarting:[{required: true, message: '请输入国际标准分类号', trigger: 'blur'}],
          // releaseEnding:[{required: true, message: '请输入国际标准分类号', trigger: 'blur'}],
          // implementStarting:[{required: true, message: '请输入国际标准分类号', trigger: 'blur'}],
          // implementEnding:[{required: true, message: '请输入国际标准分类号', trigger: 'blur'}]
        }
      };
    },
    methods: {
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
  #advancedSearch{
    min-height: 300px;
    width: 60%;
    margin: 20px 20%;
    font-size: 15px
  }
  /*#advancedSearch .el-form-item__label{*/
    /*width: 120px;*/
  /*}*/
  /*#advancedSearch .el-input{*/
    /*width: 80%;*/
    /*!*text-align: left;*!*/
  /*}*/

  /*#advancedSearch .el-col-24{*/
    /*width: 85%;*/
    /*text-align: center;*/
  /*}*/
  /*#advancedSearch .el-date-editor--date{*/
   /*width: 50%;*/
  /*}*/
</style>
