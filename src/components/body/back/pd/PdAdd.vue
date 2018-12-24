<template>
  <div>
    <div id="pdadd">
      <div class="pdadd_form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm"
        >
          <!--产品名称-->
          <div class="pdname">
            <el-form-item label="产品名称" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </div>
          <!--标签属性-->
          <div class="pdtype">
            <el-form-item label="标签属性"  v-model="ruleForm.types ">
              <el-select v-model="ruleForm.types.type1" placeholder="大分类" class="type1" clearable>
                <el-option v-bind:label=type1  v-for="(type1,index) in types.types1" :key="index" v-bind:value=index></el-option>
              </el-select>
              <el-select v-model="ruleForm.types.type2" placeholder="小分类" class="type2" clearable>
                <el-option v-bind:label=type2  v-for="(type2,index) in types.types2" :key="index" v-bind:value=index></el-option>

              </el-select>
            </el-form-item>
          </div>
          <!--<div class="pdname">
            <el-form-item
              v-for="(dkeyword, index) in dkeywordss.dkeywords"
              :label="'关键字' + index"
              :key="dkeyword.key"
              :prop="'dkeywords.' + index + '.value'"
            >
              <el-input v-model="dkeyword.value"></el-input><el-button @click.prevent="removedkeyword(dkeyword)">删除</el-button>
              <el-button @click="addKeyword">新增关键字</el-button>
            </el-form-item>
          </div>-->
          <!--关键字-->
          <div class="pdkeyword">
            <el-form-item label="关键字" prop="keywords">

              <el-select  placeholder="关键字1" clearable style="width: 150px;margin-left: 10%;float: left" v-model="ruleForm.keywords.select.select1">
                <el-option v-bind:label=keyword  v-for="(keyword,index) in keywords" :key="index" v-bind:value=index></el-option>

              </el-select>

              <el-select  placeholder="关键字2" clearable style="width: 150px;margin-left: 20px;float: left" v-model="ruleForm.keywords.select.select2">
                <el-option v-bind:label=keyword  v-for="(keyword,index) in keywords" :key="index" v-bind:value=index></el-option>

              </el-select>

              <el-input v-model="ruleForm.keywords.seldef.seldef1" placeholder="关键字3" style="width: 150px;margin-left: 20px;float: left"></el-input>


              <el-input v-model="ruleForm.keywords.seldef.seldef2" placeholder="关键字4"
                        style="width: 150px;margin-left: 20px;float: left"></el-input>



              <el-button @click="addKeyword" icon="el-icon-plus
" style="float: right"></el-button>


              <!--<el-form :inline="true" style="margin-top: 10px" v-model="ruleForm.keywords">
                <el-col :span="5">
                  <el-form-item v-for="(dkeyword, index) in dkeywordss.dkeywords"
                                :key="dkeyword.key"
                                :prop="'dkeywords.' + index + '.value'" >
                    <el-input v-model="dkeyword.value" placeholder="关键字"></el-input>

                  </el-form-item>

                </el-col>
              </el-form>-->
            </el-form-item>
          </div>

          <!--产品发布者名称-->
          <div class="pdpublishorg">
            <el-form-item label="发布者单位" prop="publishorg" v-model="ruleForm.publishorg ">
              <!--<el-input v-model="ruleForm.publishorg"></el-input>-->
              <el-select  placeholder="发布者单位" clearable style="width: 80%" v-model="ruleForm.publishorg ">
                <el-option v-bind:label=publishorg  v-for="(publishorg,index) in publishorgs" :key="index" v-bind:value=index></el-option>

              </el-select>
            </el-form-item>
          </div>
          <!--产品发布者联系方式-->
          <div class="pdphone">
            <el-form-item
              label="联系方式"
              prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </div>
          <!--宣传图片-->
          <div class="pdphoto">
            <el-form-item
              label="宣传图片"
              prop="photo">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :file-list="ruleForm.fileList0"
                list-type="picture"
              style="width: 80%;margin: 0 10%">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>

            </el-form-item>
          </div>
        </el-form>
      </div>
      <!--产品介绍-->
      <div class="pdintro">
        <el-tabs type="border-card">
          <el-tab-pane label="产品简介">
            <div class="pdintro_input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 100}"
                placeholder="请输入内容1"
                v-model="textarea">

              </el-input>
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  list-type="picture"
                  :file-list="ruleForm.fileList11">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
                  list-type="file"
                  :file-list="ruleForm.fileList12">
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
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  list-type="picture"
                  :file-list="ruleForm.fileList21">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
                  :file-list="ruleForm.fileList22">
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
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  list-type="picture"
                  :file-list="ruleForm.fileList31">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
                  :file-list="ruleForm.fileList32">
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
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  list-type="picture"
                  :file-list="ruleForm.fileList41">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
                  :file-list="ruleForm.fileList42">
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
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  list-type="picture"
                  :file-list="ruleForm.fileList51">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
                  :file-list="ruleForm.fileList52">
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
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  list-type="picture"
                  :file-list="ruleForm.fileList61">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
                  :file-list="ruleForm.fileList62">
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
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :before-remove="beforeRemove"
                  multiple
                  list-type="picture"
                  :file-list="ruleForm.fileList71">
                  <el-button size="small" type="primary">图片上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
                  :file-list="ruleForm.fileList72">
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
        <el-button type="primary" @click="saveForm('ruleForm')">保存</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">发布申请</el-button>
        <el-button type="primary" @click="goPdManage">取消</el-button>
      </div>
      <!--图片弹窗-->
      <el-dialog :visible.sync="dialogVisiblePhoto" label="">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
      <!--文件弹窗-->
      <!--<el-dialog :visible.sync="dialogVisibleFile" label="">
        <input type="file" width="100%" :src="dialogFileUrl" alt="">
      </el-dialog>-->
    </div>
  </div>
</template>

<script>
  import {number} from "echarts";

  export default {
    name: "PdAdd",
    data(){
      return {
        dialogVisibleFile:false,
        dialogFileUrl:false,
        dialogVisiblePhoto:false,
        dialogImageUrl: '',
        //动态增加表单项实验
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],

        },
        dkeywordss:{
          dkeywords:[
            /*{
              value: ''
            }*/

          ]
        },
        //数据字典表
        //后台返前台

        types:{
          types1:
            [

              '业务应用类','基础支撑类'
            ],
          types2: [
            '刑事检察','民事检察','行政检察','公益诉讼','综合业务',
            '量刑辅助', '类案推送', '知识检索', '文书纠错', '文书生成', '语音转写', 'OCR识别', '大数据分析', '案卡自动填录'

          ],
        },
        /*types:{
          types1:
            [
              '业务应用类','基础支撑类'
            ],
          types2: [
            '刑事检察','民事检察','行政检察','公益诉讼','综合业务',
            '量刑辅助', '类案推送', '知识检索', '文书纠错', '文书生成', '语音转写', 'OCR识别', '大数据分析', '案卡自动填录'

          ],
        },*/
        keywords:[
          /*keyword:[
            {
              value:'k0'
            },*/
          'k1','k2','k3'

        ],
        //单位
        publishorgs:[
          '上海市智慧检务实验室',
          '山东省智慧检务实验室'
        ],
        //前端返后端的产品新增内容
        ruleForm: {
          name: '',
          types:{
            type1:'',
            type2:'',
          },

          keywords:{
            select:{
              select1:'',
              select2:''
            },
            seldef:{
              seldef1:'',
              seldef2:'',
            }
          },
          //宣传图片上传
          fileList0:[
            /*{name: '', url: ''},
            {name: '', url: ''}*/
          ],
          fileList11:[],
          fileList12:[],
          fileList21:[],
          fileList22:[],
          fileList31:[],
          fileList32:[],
          fileList41:[],
          fileList42:[],
          fileList51:[],
          fileList52:[],
          fileList61:[],
          fileList62:[],
          fileList71:[],
          fileList72:[],
          /*types1: [],
          types2: '',*/
          publishorg:'',
          phone:'',
          textarea:''
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
          publishorg: [
            { required: true, message: '请输入产品发布者名称', trigger: 'blur' },
          ],
          phone:[
            { required: true, message: '联系方式不能为空',trigger: 'blur'},

          ]
        },
      }
    },
    methods: {
      //宣传图片上传
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisiblePhoto = true;
      },
      handlePreview(file) {
          console.log(file);
        /*this.dialogFileUrl = file.url;
        this.dialogVisibleFile = true;*/
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      //动态增加表单项实验
      removedkeyword(item) {
        var index = this.dkeywordss.dkeywords.indexOf(item)
        if (index !== -1) {
          this.dkeywordss.dkeywords.splice(index, 1)
        }
      },
      addKeyword(){
        this.dkeywordss.dkeywords.push({
          value: '',
          key: Date.now()
        });
      },
      //提交表单
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
      saveForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('save success!');
          } else {
            console.log('error save!!');
            return false;
          }
        });
      },
      goPdManage(){
        this.$router.push({name:'PdManage'})
      },

    }
  }
</script>

<style scoped>
  #pdadd{
    width: 90%;
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 18px;
  }
  #pdadd .pdadd_form{
    width: 100%;
    margin-top: 30px;
  }
  /*产品名称，发布者,发布者联系方式*/
  #pdadd .pdname .el-input {
    width: 80% !important;
  }
  #pdadd .pdpublishorg .el-input{
    width: 80% !important;
  }
  #pdadd .pdphone .el-input{
    width: 80% !important;
  }
  /*标签属性*/
  #pdadd .pdtype .el-select{
    width: 35%;

  }
  .type1{
    margin-right: 5%;

  }
  .type2{
    margin-left: 5%;
  }
  /*关键字*/
  #pdadd .pdkeyword .el-form{
    width: 80%;
    /* margin-right: 5%;*/
    margin-left: 10%;
  }
  /*产品介绍*/
  #pdadd .pdintro{
    width: 100%;
  }
  #pdadd .pdintro .el-form-item_content{
    margin: 0 !important ;
  }
  /*产品介绍-文字输入*/
  #pdadd .pdintro .el-textarea__inner{
    height: 100px !important;
  }
  /*产品介绍-图片或文件下载*/
  #pdadd .pdintro .pdintro_upload{
    /*display: inline;*/
    margin-top: 20px;
    margin-left: 0 !important;
    width: 100%;
  }
  #pdadd .pdintro .photo_upload{
    float: left;
    margin-left: 20px;
  }
  #pdadd .pdintro .file_upload{
    float: left;
    margin-left: 20px;
  }
  /*申请和取消按钮*/
  #pdadd  .submit{
    clear: both;
    margin-top: 30px;
  }

</style>
<style>
  #pdadd .pdphoto .el-dialog__header{
    padding-bottom:30px ;
  }
</style>
