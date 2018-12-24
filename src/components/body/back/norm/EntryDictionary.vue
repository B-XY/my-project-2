<template>
  <div id="entryDictionary">
    <div>
      <el-table :data="tableData">
        <el-table-column
          prop="order"
          label="#"
          width="30px" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="name"
          label="中文名称" :show-overflow-tooltip="true">
          <!--<template slot-scope="scope"><a class="normNumber" @click="goNormDetail($event)"-->
          <!--&gt;{{scope.row.number}}</a></template>-->
        </el-table-column>
        <el-table-column
          prop="internalIdentifier"
          label="内部标识符" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="version"
          label="版本" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="define"
          label="定义" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="dataType"
          label="数据类型" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="dataFormat"
          label="数据格式" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="range"
          label="值域" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="synonym"
          label="同义名词" :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="measuringUnit"
          label="计量单位" :show-overflow-tooltip="true">rdr

        </el-table-column>
        <el-table-column
          prop="note"
          label="备注" :show-overflow-tooltip="true">
        </el-table-column>
      </el-table>
    </div>
    <div style="margin: 10px 10px">
      <el-form :model="dictionaryForm" status-icon :rules="rules" ref="ruleForm" label-width="120px"
               class="demo-ruleForm">
        <el-row>
          <el-col :span="12">
            <el-form-item label="标准号" prop="number">
              <el-input v-model="dictionaryForm.number"></el-input>
            </el-form-item>
          </el-col>
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
          <el-col :span="24">
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
              <el-button @click="goBack">返回</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
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
        rules: {
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
        }
      };
    },
    methods: {
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
  #entryDictionary {
    min-height: 300px;
    width: 100%;
    font-size: 15px;
    border: 1px solid darkgray;
  }
</style>
