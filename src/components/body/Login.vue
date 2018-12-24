<template>
  <div id="login">
    <h1 style="text-align: center;margin: 40px 0 50px 0">用户登录</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div style="width: 100%;height: 30px">
      <div style="float: right;margin-right: 50px"><i class="el-icon-view"></i><a style="cursor:pointer"
                                                                                  @click="goRegister">立即注册</a>
      </div>
      <div style="float: right;margin-right: 50px"><i class="el-icon-question"></i><a style="cursor:pointer"
                                                                                      @click="passwordReset">忘记密码</a>
      </div>
    </div>
    <el-dialog title="密码重置"
               :visible.sync="dialogVisible"
               width="70%">
      <div style="height: 40px"><a style="font-size: 15px;color: red">为了减少您的等待时间，请您详细填写以下信息</a></div>
      <div class="info_form">
        <el-form :model="infoForm" status-icon :rules="infoRules" ref="infoForm" label-width="100px"
                 class="demo-ruleForm">
          <div class="info" style="text-align: left">
            <el-form-item label="用户名" prop="name">
              <el-input v-model="infoForm.name"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名" prop="realName">
              <el-input v-model="infoForm.realName"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="idNumber">
              <el-input v-model="infoForm.idNumber"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone">
              <el-input v-model="infoForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="infoForm.email"></el-input>
            </el-form-item>
          </div>
          <div class="submenu">
            <el-form-item style="margin-left: 100px">
              <el-button type="primary" @click="submitForm('infoForm')">提交</el-button>
              <el-button @click="resetForm('infoForm')">重置</el-button>
              <el-button @click="dialogVisible=false">返回</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      var checkPhone = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!value) {
          return callback(new Error('请输入手机号码'))
        }
        setTimeout(() => {
          // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
          // 所以我就在前面加了一个+实现隐式转换
          if (!Number.isInteger(+value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (phoneReg.test(value)) {
              callback()
            } else {
              callback(new Error('电话号码格式不正确'))
            }
          }
        }, 100)
      }
      var checkEmail = (rule, value, callback) => {
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!value) {
          return callback(new Error('请输入邮箱'))
        }
        setTimeout(() => {
          if (mailReg.test(value)) {
            callback()
          } else {
            callback(new Error('请输入正确的邮箱格式'))
          }
        }, 100)
      }
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
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请填写密码', trigger: 'blur'}
          ]
        },
        infoForm: {
          name: '',
          realName: '',
          idNumber: '',
          phone: '',
          email: '',
        },
        infoRules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'}
          ],
          realName: [
            {required: true, message: '请输入真实姓名', trigger: 'blur'}
          ],
          idNumber: [
            {required: true, validator: validateID, trigger: 'blur'}
          ],
          phone: [
            {required: true, validator: checkPhone, trigger: 'blur'}
          ],
          email: [
            {required: true, validator: checkEmail, trigger: 'blur'}
          ]
        },
        //弹窗
        dialogVisible: false,
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
      },
      passwordReset() {
        this.dialogVisible = true;
      },
      goRegister() {
        this.$router.push('Register')
      }
    }
  }
</script>
<style scoped>
  #login {
    width: 100%;
    padding: 20px 20% 20px 20%;
    font-size: 15px;
    box-sizing: border-box;
  }

  #login .info_form {
    width: 90%;
    margin: 0px 5% 0px 5%;
  }

</style>
<style>
  #login .el-form-item__label {
    width: 150px !important;
  }

  #login .el-input {
    width: 80% !important;
    text-align: left !important;
  }

  #login .el-col-24 {
    width: 85% !important;
    text-align: center !important;
  }

  #login .el-date-editor--date {
    width: 40% !important;
  }
  #login .submenu .el-form-item__content{
    margin-left: -100px!important;
  }
</style>
