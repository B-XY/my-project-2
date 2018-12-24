<template>
  <div id="dictionaryDataView">
    <el-form :model="ruleForm" status-icon ref="ruleForm" label-width="50px" class="demo-ruleForm">
      <el-form-item label="字典项名称" prop="name">
        <el-input v-model="ruleForm.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="字典项值" prop="value">
        <el-input v-model="ruleForm.value" disabled></el-input>
      </el-form-item>
      <el-form-item label="字典项编号" prop="number">
        <el-input v-model="ruleForm.number" disabled></el-input>
      </el-form-item>
      <el-form-item label="备注" prop="note">
        <el-input type="textarea" v-model="ruleForm.note" disabled></el-input>
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
          name: '应用系统标准',
          value: '应用系统标准',
          number: '2',
          note: '应用系统标准是检察机关信息化建设标准中的一个分类',
          date: '2018-12-15',
        }
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
  #dictionaryDataView {
    min-height: 300px;
    width: 80%;
    margin: 20px 10% 20px 10%;
    font-size: 16px;
  }
  #dictionaryDataView .el-input{
    width: 80% !important;
    text-align: left !important;
  }
</style>
<style>
  #dictionaryDataView .el-form-item__label{
    width: 100px !important;
  }
  #dictionaryDataView .el-textarea{
    width: 80% !important;
    text-align: left !important;
  }
  #dictionaryDataView .el-textarea__inner{
    line-height: 50px;
  }
</style>
