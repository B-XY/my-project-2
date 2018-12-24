<template>
  <div>
    <div id="pdshow">
      <div class="pdchange_form">
        <el-form :data="pdinfo" label-width="150px" class="demo-ruleForm">
          <!--产品名称-->
          <div class="pdname">
            <el-form-item label="产品名称" prop="name" >
              <div class="form">
                {{pdinfo.name}}
              </div>

            </el-form-item>
          </div>
          <!--产品编号-->
          <div class="pdnum">
            <el-form-item label="产品编号" prop="number">
              <div class="form">
                {{pdinfo.number}}
              </div>
            </el-form-item>
          </div>
          <!--标签属性-->
          <div class="pdtype">
            <el-form-item label="标签属性" >
              <div style="margin-left: 100px;width: 80%;text-align: center">
                <div style="display: inline;margin: 0;border: 1px solid;background-color: white;width: 45%;float: left">
                  {{pdinfo.types1}}
                </div>
                <div style="display: inline;margin: 0;border: 1px solid;background-color: white;width: 45%;float: right">
                  {{pdinfo.types2}}
                </div>
              </div>
            </el-form-item>
          </div>
          <!--关键字-->
          <div class="pdkeyword">
            <el-form-item label="关键字" prop="keywords" >
              <!-- <el-col :span="5">
                 <el-form-item prop="keyword1">
                   {{}}
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
               </el-col>-->
              <div style="width: 80%;text-align: center;margin-left: 100px;">
                <div v-for="keyword in pdinfo.keywords" style="display: inline;margin-right:10px;float: left;border: 1px solid; background-color: white;width: 120px">
                  {{keyword.name}}
                </div>
              </div>
            </el-form-item>
          </div>
          <!--产品发布者名称-->
          <div class="pdpublisher">
            <el-form-item label="发布单位" prop="publishorg">
              <div class="form">
                {{pdinfo.publishorg}}
              </div>
            </el-form-item>
          </div>
          <!--产品发布者名称-->
          <div class="pdpublisher">
            <el-form-item label="发布者" prop="publisher">
              <div class="form">
                {{pdinfo.publisher}}
              </div>
            </el-form-item>
          </div>
          <!--产品发布者联系方式-->
          <div class="pdphone">
            <el-form-item
              label="联系方式"
              prop="phone"
            >
              <div class="form">
                {{pdinfo.phone}}
              </div>
            </el-form-item>
          </div>
          <div class="pdphone">
            <el-form-item
              label="宣传图片"
              prop="photo"
            >
              <el-upload
                class="upload-demo"
                action=""
                multiple
                :file-list="pdinfo.fileList0"
                list-type="picture"
                style="width: 80%;margin: 0 10%">
                <el-button size="small" type="primary" disabled="false">点击上传</el-button>

              </el-upload>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <!--产品介绍-->
      <div class="pdintro" :data="pdintro in pdinfo">
        <el-tabs type="border-card">
          <el-tab-pane label="产品简介">
            <div class="pdintro_input">
              {{pdinfo.pdintro.pdintro1}}
            </div>
            <div class="pdintro_upload">
              <div class="photo_upload">
                <el-upload
                  class="upload-demo"
                  action=""
                  multiple
                  list-type="picture"
                  :file-list="pdinfo.fileList11">
                  <el-button size="small" type="primary" disabled="false">图片上传</el-button>

                </el-upload>
              </div>
              <div class="file_upload">
                <el-upload
                  class="upload-demo"
                  action=""
                  multiple
                  :file-list="pdinfo.fileList12">
                  <el-button size="small" type="primary" disabled="false">文件上传</el-button>
                  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="功能简介">
            <div class="pdintro_input">
              {{pdinfo.pdintro.pdintro2}}
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
              {{pdinfo.pdintro.pdintro3}}
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
              {{pdinfo.pdintro.pdintro4}}
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
              {{pdinfo.pdintro.pdintro5}}
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
              {{pdinfo.pdintro.pdintro6}}
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
              {{pdinfo.pdintro.pdintro7}}
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

        pdinfo: {
          number:'1124',
          types2: '综合业务',
          phone:18855639248,
          name: '民航辅助办案系统',
          publishorg: '浙江智慧检务创新实验室',
          publisher:'小明',
          types1: '业务应用类',
          date: '2018-01-11',
          fileList0:[
            {
              name:'',
              url:''
            },
            {
              name:'',
              url:''
            },
          ],
          keywords:[
            {name:'上海'},
            {name:'刑事',},
            {name:'基础支撑',},
            {name:'类案推送'},
          ],
          pdintro:{
            pdintro1:'项目简介：系统由“机器人”自动抽取电子卷宗，搜索归类、甄别判断出程序、证据、事实等方面存在的疑点和重点问题，供公诉人逐一审查判断，通过结果递进关联引用，自动生成法律文书，推送类案参考和量刑建议，由公诉人最终作出审查处理决定，并同步开展法律监督。',
            pdintro2:'',
            pdintro3:'',
            pdintro4:'',
            pdintro5:'',
            pdintro6:'',
            pdintro7:'',
          },
          //宣传图片上传
          
          fileList11:[
            {
              name:'',
              url:''
            },
            {
              name:'',
              url:''
            }
          ],
          fileList12:[
            {
              name:'1.txt',
              url:''
            },
            {
              name:'2.txt',
              url:''
            },
          ],
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
        },
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
     /* handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisiblePhoto = true;
      },*/
    }
  }
</script>

<style scoped>
  #pdshow{
    width: 90%;
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
  }
  #pdshow .pdchange_form{
    width: 100%;
    margin-top: 30px;
  }
  /*产品名称，发布者,发布者联系方式*/
  .form{
    border: 1px solid;
    margin-left: 100px;
    background-color: white;
    width: 80%;
  }
  /*标签属性*/
  #pdshow .pdtype{
  }
  .type1{
    margin-right: 5%;
  }
  .type2{
    margin-left: 5%;
  }
  /*关键字*/
  /*产品介绍*/
  #pdshow .pdintro{
    width: 100%;
  }
  /*产品介绍-文字输入*/
  #pdshow .pdintro .pdintro_input{
    min-height: 100px;
    text-align: left;
    border: 1px solid #2c3e50;
    text-indent:22px;
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
<style>
  #pdshow *{
    font-size: 16px !important;
  }
</style>
