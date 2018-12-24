<template>
  <div id="addNorm">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="标准名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="标准号" prop="number">
            <el-input v-model="ruleForm.number"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="标准状态" prop="state">
            <el-select v-model="ruleForm.state" placeholder="请选择标准状态">
              <el-option label="即将实施" value="1"></el-option>
              <el-option label="现行" value="2"></el-option>
              <el-option label="废止" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="大分类" prop="type1">
            <el-select v-model="ruleForm.type1" placeholder="大分类">
              <el-option v-bind:label=type v-for="(type,index) in typeData1" :key="index"
                         v-bind:value=index></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="小分类" prop="type2">
            <el-select v-model="ruleForm.type2" placeholder="小分类">
              <el-option v-bind:label=type v-for="(type,index) in typeData2" :key="index"
                         v-bind:value=index></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="关键词" prop="keys">
            <el-input v-model="ruleForm.keys"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="起草单位" prop="drillingUnit">
            <el-input v-model="ruleForm.drillingUnit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发布日期" prop="releaseDate">
            <!--<el-col style="color: #DCDFE6 ; font-weight: bolder">-->
            <el-date-picker v-model="ruleForm.releaseDate" type="date" placeholder="选择发布日期" style="width: 30%"
                            prop="releaseDate"></el-date-picker>
            <!--</el-col>-->
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实施日期" prop="implementDate">
            <!--<el-col style="color: #DCDFE6 ; font-weight: bolder">-->
            <el-date-picker v-model="ruleForm.implementDate" type="date" placeholder="选择实施日期" style="width: 30%"
                            prop="implementDate"></el-date-picker>
            <!--</el-col>-->
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="旧版本号" prop="oldVersion">
            <el-input v-model="ruleForm.oldVersion"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="新版本号" prop="newVersion">
            <el-input v-model="ruleForm.newVersion"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="标准摘要" prop="abstract">
            <el-input type="textarea" v-model="ruleForm.abstract"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="采用标准" prop="using">
            <el-input v-model="ruleForm.using"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="引用标准" prop="adopted">
            <el-input v-model="ruleForm.adopted"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注" prop="note">
            <el-input type="textarea" v-model="ruleForm.note"></el-input>
          </el-form-item>
        </el-col>

        <!--<el-col :span="8">-->
        <!--<el-form-item label="XML文档" prop="wpfile">-->
        <!--<el-upload-->
        <!--class="upload-demo"-->
        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--:on-preview="handlePreview"-->
        <!--:on-remove="handleRemove"-->
        <!--:before-remove="beforeRemove"-->
        <!--multiple-->
        <!--:limit="1"-->
        <!--:on-exceed="handleExceed"-->
        <!--:file-list="fileList">-->
        <!--<el-button size="small" type="primary">点击上传</el-button>-->
        <!--</el-upload>-->
        <!--</el-form-item>-->
        <!--</el-col>-->
        <!--<el-col :span="8">-->
        <!--<el-form-item label="SQL脚本" prop="wpfile">-->
        <!--<el-upload-->
        <!--class="upload-demo"-->
        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--:on-preview="handlePreview"-->
        <!--:on-remove="handleRemove"-->
        <!--:before-remove="beforeRemove"-->
        <!--multiple-->
        <!--:limit="1"-->
        <!--:on-exceed="handleExceed"-->
        <!--:file-list="fileList">-->
        <!--<el-button size="small" type="primary">点击上传</el-button>-->
        <!--</el-upload>-->
        <!--</el-form-item>-->
        <!--</el-col>-->

        <el-col :span="12">
          <el-form-item label="word/pdf文档" prop="wpfile">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="1"
              :on-exceed="handleExceed"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="元数据字典表">
            <el-button type="primary" @click="entryDictionary">录入元数据字典</el-button>
          </el-form-item>
          <!--<router-view></router-view>-->
        </el-col>
        <el-col :span="12">
          <el-form-item label="中国标准分类号" prop="chinese">
            <el-input v-model="ruleForm.chinese"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="国际标准分类号" prop="international">
            <el-input v-model="ruleForm.international"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            <el-button @click="goBack">返回</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-dialog title="元数据字典录入"
               :visible.sync="dialogVisible"
               width="70%">
      <div id="entryDictionary">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          :default-sort="{prop: 'date', order: 'descending'}"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <!--<el-table-column-->
          <!--type="selection"-->
          <!--width="55">-->
          <!--</el-table-column>-->
          <el-table-column
            prop="order"
            label="#"
            sortable :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="name"
            sortable
            label="中文名称" :show-overflow-tooltip="true">
            <!--<template slot-scope="scope"><a class="normNumber" @click="goNormDetail($event)"-->
            <!--&gt;{{scope.row.number}}</a></template>-->
          </el-table-column>
          <el-table-column
            prop="internalIdentifier"
            sortable
            label="内部标识符" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="version"
            sortable
            label="版本" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="define"
            sortable
            label="定义" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="dataType"
            sortable
            label="数据类型" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="dataFormat"
            sortable
            label="数据格式" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="range"
            sortable
            label="值域" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="synonym"
            sortable
            label="同义名词" :show-overflow-tooltip="true">
          </el-table-column>
          <el-table-column
            prop="measuringUnit"
            sortable
            label="计量单位" :show-overflow-tooltip="true">rdr

          </el-table-column>
          <el-table-column
            prop="note"
            label="备注" :show-overflow-tooltip="true">
          </el-table-column>
        </el-table>
        <!--<div class="dictionaryMenu" style="clear: both;text-align: left;margin: 10px 0 10px 60px">-->
        <!--<el-button type="primary" @click="goDelete">删除</el-button>-->
        <!--</div>-->
      </div>
      <div style="margin: 10px 10px">
        <el-form :model="dictionaryForm" status-icon :rules="dictionary_rules" ref="dictionaryForm" label-width="120px"
                 class="demo-ruleForm">
          <el-row>
            <!--<el-col :span="12">-->
            <!--<el-form-item label="标准号" prop="number">-->
            <!--<el-input v-model="dictionaryForm.number"></el-input>-->
            <!--</el-form-item>-->
            <!--</el-col>-->
            <el-col :span="12">
              <el-form-item label="中文名称" prop="name">
                <el-input v-model="dictionaryForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="内部标识符" prop="internalIdentifier">
                <el-input v-model="dictionaryForm.internalIdentifier"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="版本" prop="version">
                <el-input v-model="dictionaryForm.version"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="定义" prop="define">
                <el-input v-model="dictionaryForm.define"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="数据类型" prop="dataType">
                <el-input v-model="dictionaryForm.dataType"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="数据格式" prop="dataFormat">
                <el-input v-model="dictionaryForm.dataFormat"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="值域" prop="range">
                <el-input v-model="dictionaryForm.range"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="同义名词" prop="synonym">
                <el-input v-model="dictionaryForm.synonym"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="计量单位" prop="measuringUnit">
                <el-input v-model="dictionaryForm.measuringUnit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="备注" prop="note">
                <el-input type="textarea" v-model="dictionaryForm.note"></el-input>
              </el-form-item>
            </el-col>
            <!--<el-col :span="24">-->
            <el-form-item
              v-for="(domain, index) in dictionaryForm.domains"
              :label="'域名' + index"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{required: true, message: '域名不能为空', trigger: 'blur'}">
              <el-col :span="20">
              <el-input v-model="domain.value"></el-input>
              </el-col>
              <el-col :span="4">
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
              </el-col>
            </el-form-item>
            <!--</el-col>-->
            <el-col :span="24">
              <el-form-item class="addNormMenu">
                <el-button @click="addDomain">新增域名</el-button>
                <el-button type="primary" @click="submitForm('dictionaryForm')">立即添加</el-button>
                <el-button @click="resetForm('dictionaryForm')">重置</el-button>
                <!--<el-button @click="goBack">返回</el-button>-->
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        typeData1: ['全国检察机关标准', '国家标准'],
        typeData2: ['基础标准', '应用系统标准', '应用支撑标准', '管理标准', '信息安全标准', '基础设施建设标准'],
        fileList: [],

        ruleForm: {
          name: '',
          number: '',
          state: '',
          keys: '',
          type1: '',
          type2: '',
          drillingUnit: '',
          implementDate: '',
          releaseDate: '',
          newVersion: '',
          oldVersion: '',
          abstract: '',
          using: '',
          adopted: '',
          note: '',
          chinese: '',
          international: ''
        },
        rules: {
          name: [{required: true, message: '请输入标准名称', trigger: 'blur'}],
          number: [{required: true, message: '请输入标准号', trigger: 'blur'}],
          state: [{required: true, message: '请选择标准状态', trigger: 'change'}],
          type1: [{required: true, message: '请选择标准大分类', trigger: 'change'}],
          type2: [{required: true, message: '请选择标准小分类', trigger: 'change'}],
          keys: [{required: true, message: '请输入关键词', trigger: 'blur'}],
          drillingUnit: [{required: true, message: '请输入起草单位', trigger: 'blur'}],
          releaseDate: [{type: 'date', required: true, message: '请输入发布时间', trigger: 'change'}],
          implementDate: [{type: 'date', required: true, message: '请输入实施时间', trigger: 'change'}],
          oldVersion: [{required: true, message: '请输入旧版本号', trigger: 'blur'}],
          newVersion: [{required: true, message: '请输入新版本号', trigger: 'blur'}],
          abstract: [{required: true, message: '请输入摘要内容', rigger: 'blur'}],
          using: [{required: true, message: '请输入采用的标准', rigger: 'blur'}],
          adopted: [{required: true, message: '请输入引用的标准', rigger: 'blur'}],
          note: [{required: true, message: '请输入备注内容', rigger: 'blur'}],

          chinese: [{required: true, message: '请输入中国标准分类号', trigger: 'blur'}],
          international: [{required: true, message: '请输入国际标准分类号', trigger: 'blur'}]
        },
        tableData:[
          {
            order:'1',
            name: '辅助核算名称',
            internalIdentifier: 'DE03.01.050',
            version: 'v1.0',
            define: '会计科目的辅助核算名称',
            dataType: '字符型',
            dataFormat: 'an..60',
            range: '',
            synonym: '',
            measuringUnit: '',
            note: '同GB/T 24589.3-2011中的辅助项名称'
          },{
            order:'2',
            name: '外币金额',
            internalIdentifier: 'DE03.01.051',
            version: 'v1.0',
            define: '外币的金额',
            dataType: '字符型',
            dataFormat: 'n..18,2',
            range: '',
            synonym: '',
            measuringUnit: '',
            note: '参见电子检务工程 通用数据元 第五部分：金融 DE01.05.04'
          },{
            order:'4',
            name: '本位币金额',
            internalIdentifier: 'DE03.01.052',
            version: 'v1.0',
            define: '本位币的金额',
            dataType: '字符型',
            dataFormat: 'n..16,2',
            range: '',
            synonym: '',
            measuringUnit: '',
            note: ''
          },
        ],
        dictionaryForm: {
          domains: [],
          name: '',
          internalIdentifier: '',
          version: '',
          define: '',
          dataType: '',
          dataFormat: '',
          range: '',
          synonym: '',
          measuringUnit: '',
          note: ''
        },
        dictionary_rules: {
          number: [{required: true, message: '请输入标准号', trigger: 'blur'}],
          name: [{required: true, message: '请输入中文名称', trigger: 'blur'}],
          internalIdentifier: [{required: true, message: '请输入内部标识符', trigger: 'blur'}],
          version: [{required: true, message: '请输入版本', trigger: 'blur'}],
          define: [{required: true, message: '请输入定义', trigger: 'blur'}],
          dataType: [{required: true, message: '请输入数据类型', trigger: 'blur'}],
          dataFormat: [{required: true, message: '请输入数据格式', trigger: 'blur'}],
          range: [{required: true, message: '请输入值域', trigger: 'blur'}],
          synonym: [{required: true, message: '请输入同义名词', trigger: 'blur'}],
          measuringUnit: [{required: true, message: '请输入计量单位', trigger: 'blur'}],
          note: [{required: true, message: '请输入备注', rigger: 'blur'}]
        },
        dialogVisible: false,
      };
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      entryDictionary() {
        // this.$router.push('/Back/NormManage/AddNorm/EntryDictionary')
        this.dialogVisible = true
      },

      // handleRemove(file, fileList) {
      //   console.log(file, fileList);
      // },
      // handlePreview(file) {
      //   console.log(file);
      // },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
      },
      //元数据录入    删除新增表单项
      removeDomain(item) {
        var index = this.dictionaryForm.domains.indexOf(item)
        if (index !== -1) {
          this.dictionaryForm.domains.splice(index, 1)
        }
      },
      //元数据录入    新增表单项
      addDomain() {
        this.dictionaryForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }
  }
</script>
<style scoped>
  #addNorm {
    min-height: 300px;
    width: 90%;
    margin: 20px 5%;
    font-size: 15px
  }

  #entryDictionary {
    min-height: 100px;
    width: 100%;
    font-size: 15px;
    border: 1px solid darkgray;
  }

  .el-select {
    width: 100%;
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
<style>
  .addNormMenu .el-form-item__content{
    margin-left: 0!important;
  }
  .el-date-editor--date {
    width: 100% !important;
  }
</style>
