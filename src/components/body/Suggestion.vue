<!--<template>-->
  <!--<div id="suggestion">-->
    <!--&lt;!&ndash;智慧检务创新研究院智能化应用测试展示平台&nbsp;&nbsp;&nbsp;&nbsp;&ndash;&gt;-->
    <!--<div class="title">标准意见反馈</div>-->
    <!--<div class="sug_norm"><a>特征集意见项目</a>{{norm.number}}&nbsp;&nbsp;&nbsp;&nbsp;{{norm.name}}</div>-->
    <!--<div class="sug_form">-->
      <!--<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
        <!--<div class="info" style="text-align: left">-->
          <!--<div class="info_title">基本信息</div>-->
          <!--<el-form-item label="姓名" prop="name">-->
            <!--<el-input v-model="ruleForm.name"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="单位名称" prop="company">-->
            <!--<el-input v-model="ruleForm.company"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="手机" prop="phone">-->
            <!--<el-input v-model="ruleForm.phone"></el-input>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="邮箱" prop="email">-->
            <!--<el-input v-model="ruleForm.email"></el-input>-->
          <!--</el-form-item>-->
          <!--&lt;!&ndash;<el-form-item label="验证码" prop="name">&ndash;&gt;-->
          <!--&lt;!&ndash;<el-input v-model="ruleForm.name"></el-input>&ndash;&gt;-->
          <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="sug" style="text-align: left">-->
          <!--<div class="sug_title">意见及建议</div>-->
          <!--<el-form-item label="意见类别" prop="resource">-->
            <!--<el-radio-group v-model="ruleForm.resource">-->
              <!--<el-radio label="技术参数问题"></el-radio>-->
              <!--<el-radio label="标准表述问题"></el-radio>-->
              <!--<el-radio label="交叉重复问题"></el-radio>-->
              <!--<el-radio label="其他"></el-radio>-->
            <!--</el-radio-group>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="意见内容" prop="desc">-->
            <!--<el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
          <!--</el-form-item>-->
        <!--</div>-->
        <!--<el-form-item>-->
          <!--<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
          <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--data() {-->
      <!--var checkPhone = (rule, value, callback) => {-->
        <!--const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/-->
        <!--if (!value) {-->
          <!--return callback(new Error('请输入手机号码'))-->
        <!--}-->
        <!--setTimeout(() => {-->
          <!--// Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串-->
          <!--// 所以我就在前面加了一个+实现隐式转换-->
          <!--if (!Number.isInteger(+value)) {-->
            <!--callback(new Error('请输入数字值'))-->
          <!--} else {-->
            <!--if (phoneReg.test(value)) {-->
              <!--callback()-->
            <!--} else {-->
              <!--callback(new Error('电话号码格式不正确'))-->
            <!--}-->
          <!--}-->
        <!--}, 100)-->
      <!--}-->
      <!--var checkEmail=(rule,value,callback)=>{-->
        <!--const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/-->
        <!--if (!value) {-->
          <!--return callback(new Error('请输入邮箱'))-->
        <!--}-->
        <!--setTimeout(() => {-->
          <!--if (mailReg.test(value)) {-->
            <!--callback()-->
          <!--} else {-->
            <!--callback(new Error('请输入正确的邮箱格式'))-->
          <!--}-->
        <!--}, 100)-->
      <!--}-->
      <!--return {-->
        <!--norm:{-->
          <!--number:'GB/T 36905-2018',-->
          <!--name:'电子证照 文件技术要求'-->
        <!--},-->
        <!--ruleForm: {-->
          <!--name: '',-->
          <!--company: '',-->
          <!--phone: '',-->
          <!--email: '',-->
          <!--resource: '',-->
          <!--desc: ''-->
        <!--},-->
        <!--rules: {-->
          <!--name: [-->
            <!--{required: true, message: '请输入姓名', trigger: 'blur'}-->
          <!--],-->
          <!--company: [-->
            <!--{required: true, message: '请输入单位名称', trigger: 'blur'}-->
          <!--],-->
          <!--phone: [-->
            <!--{required: true,validator:checkPhone,trigger:'blur'}-->
          <!--],-->
          <!--email: [-->
            <!--{required: true,validator:checkEmail,trigger:'blur'}-->
          <!--],-->
          <!--resource: [-->
            <!--{required: true, message: '请选择意见反馈类别', trigger: 'change'}-->
          <!--],-->
          <!--desc: [-->
            <!--{required: true, message: '请填写意见反馈内容', trigger: 'blur'}-->
          <!--]-->
        <!--},-->
        <!--radio: '0'-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--submitForm(formName) {-->
        <!--this.$refs[formName].validate((valid) => {-->
          <!--if (valid) {-->
            <!--alert('反馈成功!');-->
            <!--window.history.back()-->
          <!--} else {-->
            <!--console.log('反馈失败!!!');-->
            <!--return false;-->
          <!--}-->
        <!--});-->
      <!--},-->
      <!--resetForm(formName) {-->
        <!--this.$refs[formName].resetFields();-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->
  <!--&lt;!&ndash;#suggestion {&ndash;&gt;-->
    <!--&lt;!&ndash;min-height: 300px;&ndash;&gt;-->
    <!--&lt;!&ndash;width: 80%;&ndash;&gt;-->
    <!--&lt;!&ndash;margin: 20px 10%;&ndash;&gt;-->
    <!--&lt;!&ndash;font-size: 15px;&ndash;&gt;-->
    <!--&lt;!&ndash;border: 1px solid #F5F5F5;&ndash;&gt;-->
    <!--&lt;!&ndash;background-color: white;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->

  <!--&lt;!&ndash;.title {&ndash;&gt;-->
    <!--&lt;!&ndash;font-size: 25px;&ndash;&gt;-->
    <!--&lt;!&ndash;font-weight: bolder;&ndash;&gt;-->
    <!--&lt;!&ndash;text-align: center;&ndash;&gt;-->
    <!--&lt;!&ndash;margin: 20px 0;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->

  <!--&lt;!&ndash;.sug_norm {&ndash;&gt;-->
    <!--&lt;!&ndash;text-align: left;&ndash;&gt;-->
    <!--&lt;!&ndash;margin: 20px 5% 10px 5%;&ndash;&gt;-->
    <!--&lt;!&ndash;color: #4F9CEE;&ndash;&gt;-->
    <!--&lt;!&ndash;width: 90%;&ndash;&gt;-->
    <!--&lt;!&ndash;line-height: 50px;&ndash;&gt;-->
    <!--&lt;!&ndash;background-image: -webkit-linear-gradient(left, #C4E0F7, white)&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->

  <!--&lt;!&ndash;.sug_norm a {&ndash;&gt;-->
    <!--&lt;!&ndash;color: black;&ndash;&gt;-->
    <!--&lt;!&ndash;margin: 0 20px;&ndash;&gt;-->
    <!--&lt;!&ndash;text-decoration: none;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->

  <!--&lt;!&ndash;.sug_form {&ndash;&gt;-->
    <!--&lt;!&ndash;width: 90%;&ndash;&gt;-->
    <!--&lt;!&ndash;margin: 0px 5% 20px 5%;&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->

  <!--&lt;!&ndash;.info_title, .sug_title {&ndash;&gt;-->
    <!--&lt;!&ndash;text-align: left;&ndash;&gt;-->
    <!--&lt;!&ndash;padding-left: 20px;&ndash;&gt;-->
    <!--&lt;!&ndash;margin-bottom: 10px;&ndash;&gt;-->
    <!--&lt;!&ndash;width: 100%;&ndash;&gt;-->
    <!--&lt;!&ndash;line-height: 30px;&ndash;&gt;-->
    <!--&lt;!&ndash;background-image: -webkit-linear-gradient(left, #C4E0F7, white)&ndash;&gt;-->
  <!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</style>&ndash;&gt;-->
