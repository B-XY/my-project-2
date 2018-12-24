<template>
  <div id="normToChange">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="标准名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="标准号" prop="number">
            <el-input v-model="ruleForm.number" disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="标准状态" prop="state">
            <el-select v-model="ruleForm.state" placeholder="请选择标准状态" disabled="true">
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
            <el-select v-model="ruleForm.type2" placeholder="大分类">
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
                            prop="releaseDate" disabled="true"></el-date-picker>
            <!--</el-col>-->
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="实施日期" prop="implementDate">
            <!--<el-col style="color: #DCDFE6 ; font-weight: bolder">-->
            <el-date-picker v-model="ruleForm.implementDate" type="date" placeholder="选择实施日期" style="width: 30%"
                            prop="implementDate" disabled="true"></el-date-picker>
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
          <el-form-item label="引用标准">
            <el-input v-model="ruleForm.adopted"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注" prop="note">
            <el-input type="textarea" v-model="ruleForm.note"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
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

        <!--元数据字典表展示-->
        <el-col :span="24">
          <el-form-item label="元数据字典表">
            <el-row v-for="(metadataDictionary,index) in metadataDictionaryData" :key="index">
              <el-col style="font-size: 16px;margin-bottom: 10px">{{metadataDictionary[0].dictionary}}</el-col>
              <el-col :span="24">
                <div class="figure-table">
                  <!-- <img v-bind:src="normData.dictionary"/>-->
                  <el-table
                    border
                    :data="metadataDictionary"
                    stripe
                    style="width: 100%">
                    <el-table-column
                      type="selection"
                      width="55">
                    </el-table-column>
                    <el-table-column
                      prop="No"
                      label="序号"
                      show-overflow-tooltip
                      width="100"
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="中文名称"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="identifier"
                      label="内部标识符"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="version"
                      label="版本"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="definition"
                      label="定义"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="type"
                      label="数据类型"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="format"
                      label="数据格式"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="range"
                      label="值域"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="synonymousNouns"
                      label="同义名词"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="measuringUnit"
                      label="计量单位"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                    <el-table-column
                      prop="note"
                      label="备注"
                      show-overflow-tooltip
                      align="center"
                    >
                    </el-table-column>
                  </el-table>
                </div>
              </el-col>
              <el-col :span="2">
                <el-button type="primary" @click="changeDictionaryData('ruleForm')">修改</el-button>
              </el-col>
              <el-col :span="2">
                <el-button type="primary" @click="deleteDictionaryData('ruleForm')">删除</el-button>
              </el-col>
            </el-row>
          </el-form-item>
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
            <el-button type="primary" @click="submitForm('ruleForm')">变更</el-button>
            <el-button @click="goBack">返回</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-dialog title="元数据字典修改"
               :visible.sync="dialogVisible"
               width="70%">
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
            <el-col :span="24">
              <el-form-item  class="normToChangeMenu">
                <el-button type="primary" @click="submitForm('dictionaryForm')">立即添加</el-button>
                <!--<el-button @click="resetForm('dictionaryForm')">重置</el-button>-->
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
        ruleForm: {
          name: '电子证照 文件技术要求',
          number: 'GB/T 36905-2018',
          state: '即将实施',
          keys: '电子',
          drillingUnit: ['北京数科网维技术有限责任公司', '福建南威软件有限公司', '成都卫士通信息产业股份有限公司', '北京冠群信息技术股份有限公司', '江苏省建设信息中心', '北京海泰方圆科技股份有限公司', '浙江汇信科技有限公司', '广州市中智软件开发有限公司', '山东省标准化研究院'],
          releaseDate: '2018-05-14',
          implementDate: '2018-11-14',
          chinese: 'GB/T 36905-2018',
          international: 'GB/T 36905-2018',
          type1: '国家标准',
          type2: '电子照片',
          newVersion: 'V1.0[20181126]',
          oldVersion: 'V1.0[20181124]',
          abstract: '国家标准《电子证照 文件技术要求》由244（国家密码管理局）归口上报及执行，主管部门为国家密码管理局。\n' +
            '\n' +
            '主要起草单位 中央办公厅信息中心 、中国电子技术标准化研究院 、北京数科网维技术有限责任公司 、航天福昕软件（北京）有限公司 、福建南威软件有限公司 、方正国际软件（北京）有限公司 、成都卫士通信息产业股份有限公司 、浪潮软件集团有限公司 、北京冠群信息技术股份有限公司 、福建榕基软件股份有限公司 、江苏省建设信息中心 、广东省信息中心 、北京海泰方圆科技股份有限公司 、北京书生电子技术有限公司 、浙江汇信科技有限公司 、甘肃万维信息技术有限公司 、广州市中智软件开发有限公司 、北京安信天元科技发展有限公司 、山东省标准化研究院 、中国软件与技术服务股份有限公司 、中安网脉（北京）技术股份有限公司 、普华诚信信息技术有限公司 、上海维豪信息安全技术有限公司 。\n' +
            '\n' +
            '主要起草人 李海波 、孙文龙 、陈亚军 、丛培勇 、王少康 、冯辉 、董建 、黄文峰 、李平立 、钟伟平 、宁方刚 、彭洪 、薛馨枫 、王凌 、王寒冰 、贾宝刚 、李波 、陈兆亮 、翟浦江 、虞小平 、丁曙初 、张宇 、王卫国 、陈子楚 、武文高 、王忠义 、刘丹 、董卫兵 、梁国杰 、逄锦山 、柴德华 、刘冰 、程主 、冯文化 、苗银军 、王天顺 、张静 、乌兰 、陈晶 、李易昂 、龚沫薇 、郑秉文 。',
          using: ['GB/T 36901-2018', 'DB35/T 1743-2018', 'GB/T 36904-2018', 'GB/T 36903-2018', 'GB/T 36902-2018', 'DB44/T 1347-2014'],
          adopted: ['GB/T 36901-2018', 'DB35/T 1743-2018', 'GB/T 36904-2018', 'GB/T 36903-2018'],
          note: '国家标准《电子证照 文件技术要求》由244（国家密码管理局）归口上报及执行，主管部门为国家密码管理局。',
        },
        rules: {
          name: [{required: true, message: '请输入标准名称', trigger: 'blur'}],
          number: [{required: true, message: '请输入标准号', trigger: 'blur'}],
          state: [{required: true, message: '请选择标准状态', trigger: 'change'}],
          keys: [{required: true, message: '请输入关键词', trigger: 'blur'}],
          drillingUnit: [{required: true, message: '请输入起草单位', trigger: 'blur'}],
          releaseDate: [{required: true, message: '请输入发布日期', trigger: 'change'}],
          implementDate: [{required: true, message: '请输入实施日期', trigger: 'change'}],
          type1: [{required: true, message: '请输入大类型', trigger: 'change'}],
          type2: [{required: true, message: '请输入小类型', trigger: 'change'}],
          newVersion: [{required: true, message: '请输入新版本号', trigger: 'change'}],
          oldVersion: [{required: true, message: '请输入旧版本号', trigger: 'change'}],
          abstract: [{required: true, message: '请输入摘要', trigger: 'change'}],
          using: [{required: true, message: '请输入实使用者', trigger: 'change'}],
          chinese: [{required: true, message: '请输入中国标准分类号', trigger: 'blur'}],
          international: [{required: true, message: '请输入国际标准分类号', trigger: 'blur'}],
        },
        dictionaryForm: {
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
        },
        dictionaryData: [
          {
            order: '1',
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
          },
          {
            order: '2',
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
          },
          {
            order: '4',
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
          }
        ],
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
        //元数据字典数据
        metadataDictionaryData: [
          [
            {
              No: '1',
              name: '会计年度',
              identifier: 'DE03.01.001',
              version: 'v1.0',
              definition: '当年财务会计报告年属',
              type: '日期型',
              format: 'YYYY',
              range: '',
              synonymousNouns: '',
              measuringUnit: '',
              note: '参见电子检务工程 通用数据元 第4部分：时间 DE01.04.01',
              dictionary: '公共元数据字典'
            },
            {
              No: '2',
              name: '单位名称',
              identifier: 'DE03.01.002',
              version: 'v1.0',
              definition: '检察机关单位的名称',
              type: '字符型',
              format: 'an..100',
              range: 'DZJW 2202.1-2017《电子检务工程 通用信息分类与编码 第1部分 组织》中CC01.01.001',
              synonymousNouns: '',
              measuringUnit: '',
              note: '',
              dictionary: '公共元数据字典'
            },
            {
              No: '3',
              name: '单位代码',
              identifier: 'DE03.01.003',
              version: 'v1.0',
              definition: '单位的代码',
              type: '字符型',
              format: 'n6',
              range: 'DZJW 2202.1-2017《电子检务工程 通用信息分类与编码 第1部分 组织》中CC01.01.001',
              synonymousNouns: '',
              measuringUnit: '',
              note: '',
              dictionary: '公共元数据字典'
            },
            {
              No: '4',
              name: '创建时间',
              identifier: 'DE03.01.005',
              version: 'v1.0',
              definition: '创建的时间',
              type: '日期时间',
              format: 'YYYYMMDDhhmmss',
              range: '',
              synonymousNouns: '',
              measuringUnit: '',
              note: '参见电子检务工程 通用数据元 第4部分：时间 DE01.04.03',
              dictionary: '公共元数据字典'
            }
          ],
          [
            {
              No: '1',
              name: '账套代码',
              identifier: 'DE03.01.018',
              version: 'v1.0',
              definition: '账套的代码',
              type: '字符型',
              format: 'an..30',
              range: '',
              synonymousNouns: '',
              measuringUnit: '',
              note: '',
              dictionary: '财务元数据字典'
            },
            {
              No: '2',
              name: '账套名称',
              identifier: 'DE03.01.019',
              version: 'v1.0',
              definition: '账套的名称',
              type: '字符型',
              format: 'an..60',
              range: '',
              synonymousNouns: '',
              measuringUnit: '',
              note: '',
              dictionary: '财务元数据字典'
            },
            {
              No: '3',
              name: '科目体系',
              identifier: 'DE03.01.020',
              version: 'v1.0',
              definition: '科目的体系',
              type: '字符型',
              format: 'an..30',
              range: '可以取下列枚举值：\n' +
                '--行政科目体系；\n' +
                '--事业科目体系；\n' +
                '--基建科目体系；',
              synonymousNouns: '',
              measuringUnit: '',
              note: '',
              dictionary: '财务元数据字典'
            },
            {
              No: '4',
              name: '账套年度',
              identifier: 'DE03.01.021',
              version: 'v1.0',
              definition: '账套的年度编号',
              type: '日期型',
              format: 'YYYY',
              range: '',
              synonymousNouns: '',
              measuringUnit: '',
              note: '参见电子检务工程 通用数据元 第4部分：时间 DE01.04.01',
              dictionary: '财务元数据字典'
            }
          ],
          [
            {
              No: '1',
              name: '总付款笔数',
              identifier: 'DE03.01.059',
              version: 'v1.0',
              definition: '总付款的笔数',
              type: '数字型',
              format: 'n..30',
              range: '',
              synonymousNouns: '',
              measuringUnit: '',
              note: '',
              dictionary: '国库集中支付元数据字典'
            },
            {
              No: '2',
              name: '总付款金额',
              identifier: 'DE03.01.',
              version: 'v1.0',
              definition: '总付款的金额',
              type: '数字型',
              format: 'n..18,2',
              range: '',
              synonymousNouns: '',
              measuringUnit: '元',
              note: '参见电子检务工程 通用数据元 第5部分：金融 DE01.05.04',
              dictionary: '国库集中支付元数据字典'
            },
            {
              No: '3',
              name: '支付状态',
              identifier: 'DE03.01.',
              version: 'v1.0',
              definition: '支付的状态',
              type: '字符型',
              format: 'an..6',
              range: '可以取下列枚举值：\n' +
                '--已录入；\n' +
                '--已发送；\n' +
                '--已受理；',
              synonymousNouns: '',
              measuringUnit: '',
              note: '',
              dictionary: '国库集中支付元数据字典'
            },
            {
              No: '4',
              name: '支付时间',
              identifier: 'DE03.01.',
              version: 'v1.0',
              definition: '支付的时间',
              type: '日期时间',
              format: 'YYYYMMDDhhmmss',
              range: '',
              synonymousNouns: '',
              measuringUnit: '',
              note: '参见电子检务工程 通用数据元 第4部分：时间 DE01.04.03',
              dictionary: '国库集中支付元数据字典'
            }
          ]
        ],
      };
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      changeDictionaryData() {
        this.dialogVisible = true
      },
      deleteDictionaryData(){

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
      }
    }
  }
</script>
<style scoped>
  #normToChange {
    min-height: 300px;
    width: 90%;
    margin: 20px 5%;
    font-size: 15px
  }

  .goBack {
    text-align: left;

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
  .normToChangeMenu .el-form-item__content{
    margin-left: 0!important;
  }
</style>
