<template>
  <div>
    <div id="pdshow" :datafld="product in products">
      <div class="pdchange_form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
          <!--产品名称-->
          <div class="pdname">
            <el-form-item label="产品名称" prop="name">
              <el-input v-model="ruleForm.name" :disabled="true"></el-input>
            </el-form-item>
          </div>
          <!--产品编号-->
          <div class="pdnum">
            <el-form-item label="产品编号" prop="number">
              <el-input v-model="ruleForm.number"></el-input>
            </el-form-item>
          </div>
          <!--标签属性-->
          <div class="pdtype">
            <el-form-item label="标签属性" prop="type">
              <el-select v-model="ruleForm.types1 " placeholder="大分类" :disabled="true" class="type1" >
                <el-option label="业务应用类" value="业务应用类"></el-option>
                <el-option label="基础支撑类" value="基础支撑类"></el-option>
              </el-select>
              <el-select v-model="ruleForm.types2" placeholder="小分类" :disabled="true" class="type2">
                <el-option label="量刑辅助" value="量刑辅助"></el-option>
                <el-option label="类案推送" value="类案推送"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <!--关键字-->
          <div class="pdkeyword">
            <el-form-item label="关键字" prop="keyword">
              <el-col :span="5">
                <el-form-item prop="keyword1">
                  <el-input v-model="ruleForm.input" placeholder="关键字1"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="keyword2">
                  <el-input v-model="ruleForm.input" placeholder="关键字2"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="keyword3">
                  <el-input v-model="ruleForm.input" placeholder="关键字3"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item prop="keyword4">
                  <el-input v-model="ruleForm.input" placeholder="关键字4"></el-input>
                </el-form-item>
              </el-col>

            </el-form-item>
          </div>
          <!--产品发布者名称-->
          <div class="pdpublisher">
            <el-form-item label="发布单位" prop="publisher">
              <el-input v-model="ruleForm.publishorg" :disabled="true"></el-input>
            </el-form-item>
          </div>
          <!--产品发布者名称-->
          <div class="pdpublisher">
            <el-form-item label="发布者" prop="publisher">
              <el-input v-model="ruleForm.publisher" :disabled="true"></el-input>
            </el-form-item>
          </div>
          <!--产品发布者联系方式-->
          <div class="pdphone">
            <el-form-item
              label="联系方式"
              prop="phone"
              :rules="[
      { required: true, message: '联系方式不能为空'},
      { type: 'number', message: '联系方式必须为数字值'}
    ]">
              <el-input type="phone" v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <!--产品介绍-->
      <div class="pdintro" :data="pdintro">
        <el-tabs type="border-card">
          <el-tab-pane label="产品简介">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容1"
                v-model="pdintro.pdintro1"
                prop="pdintro1">
              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="功能简介">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容2"
                v-model="textarea">

              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="性能简介">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容3"
                v-model="textarea">

              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="使用场景">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容4"
                v-model="textarea">

              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="典型案例">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容5"
                v-model="textarea">

              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="售后服务">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容6"
                v-model="textarea">

              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="产品服务商信息">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容7"
                v-model="textarea">

              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  :limit="3"
                  :on-exceed="handleExceed"
                  :file-list="fileList">
                  <el-button size="small" type="primary">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!--产品发布申请按钮-->
      <div class="submit">
        <el-button type="primary" @click="goChange">修改</el-button>
        <el-button type="primary" @click="goPdManage">返回</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "PdShow",
    data(){
      return {
        pdintro:{
          pdintro1:'项目简介：系统由“机器人”自动抽取电子卷宗，搜索归类、甄别判断出程序、证据、事实等方面存在的疑点和重点问题，供公诉人逐一审查判断，通过结果递进关联引用，自动生成法律文书，推送类案参考和量刑建议，由公诉人最终作出审查处理决定，并同步开展法律监督。',
        },
        products:[
          {},{}
        ],
        ruleForm: {
          number:'1124',
          types2: '类案推送',
          textarea:'',
          phone:18855639248,
          input:'办公',
          name: '上海刑事辅助办案系统',
          publishorg: '上海智慧检务创新实验室',
          publisher:'小明',
          types1: '基础支撑类',
          date: '2018-01-11'
        },
        rules: {
          name: [
            { required: true, message: '请输入产品名称', trigger: 'blur' },
          ],
          types1: [
            { type: 'array',required: true, message: '请选择产品标签属性1', trigger: 'change' }
          ],
          types2: [
            { type: 'array',required: true, message: '请选择产品标签属性2', trigger: 'change' }
          ],
          publisher: [
            { required: true, message: '请输入产品发布者名称', trigger: 'blur' },
          ]
        }
      }
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
      goPdManage(){
        this.$router.push({name:'PdManage'})
      },
      goChange(){
      }
    }
  }
</script>

<style scoped>
  #pdshow{
    width: 90%;
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 18px;
  }
  #pdshow .pdchange_form{
    width: 100%;
    margin-top: 30px;
  }
  /*产品名称，发布者,发布者联系方式*/
  #pdshow .pdname .el-input{
    width: 80% !important;
  }
  #pdshow .pdnum .el-input{
    width: 80% !important;
  }
  #pdshow .pdpublisher .el-input{
    width: 80% !important;
  }
  #pdshow .pdphone .el-input{
    width: 80% !important;
  }
  /*标签属性*/
  #pdshow .pdtype{
  }
  #pdshow .pdtype .el-select{
    width: 35%;
  }
  .type1{
    margin-right: 5%;
  }
  .type2{
    margin-left: 5%;
  }
  /*关键字*/
  #pdshow .pdkeyword .el-input{
    width: 80%;
    /* margin-right: 5%;*/
    margin-left: 50%;
  }
  /*产品介绍*/
  #pdshow .pdintro{
    width: 100%;
  }
  #pdshow .pdintro .el-form-item_content{
    margin: 0 !important ;
  }
  /*产品介绍-文字输入*/
  #pdshow .pdintro .pdintro_input{
    /*min-height: 50px;*/
  }
  /*产品介绍-图片或文件下载*/
  #pdshow .pdintro .pdintro_upload{
    /*display: inline;*/
    margin-top: 20px;
    margin-left: 0 !important;
    width: 100%;
  }
  #pdshow .pdintro .photo_upload{
    float: left;
    margin-left: 20px;
  }
  #pdshow .pdintro .file_upload{
    float: left;
    margin-left: 20px;
  }
  /*申请和取消按钮*/
  #pdshow  .submit{
    clear: both;
    margin-top: 30px;
  }
</style>
