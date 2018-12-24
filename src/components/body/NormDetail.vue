<template>
  <div id="normDetail">
    <div style="width: 90%;margin: 0 5%">
      <div class='right-top right-top1' @click="goDetail">预<br>览<br>全<br>文</div>
      <!--<div class='right-top right-top2' @click="goDownload">下<br>载</div>-->
      <div class='right-top right-top2'><a style="color:#fff;" :href='item.path' :download="item.name">下<br>载</a></div>

      <div class='right-top right-top3' @click="goFeedback">意<br>见<br>反<br>馈</div>
      <!--<div class='right-top'>-->
      <!--<el-button type="text" @click="goFeedback"><div class="right-top3">意<br>见<br>反<br>馈</div></el-button>-->
      <!--</div>-->
      <el-row>
        <!--<el-col :span="4"><div class="grid-content bg-purple">标题名称:</div></el-col>-->
        <el-col :span="24">
          <div class="grid-content norm-name">{{normData.number}}&nbsp;&nbsp;&nbsp;&nbsp;{{normData.name}}</div>
        </el-col>
      </el-row>
      <el-row>
        <!--<el-col :span="4"><div class="grid-content bg-purple">标题介绍:</div></el-col>-->
        <el-col :span="24">
          <div class="grid-content">
            <div style="text-align: left" v-for="introduceData in normData.introduce">
              <div class="norm-introduce">{{introduceData}}</div>
              <br v-if="(index+1)%3===0">
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a>目录</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark" style="margin-left: 15%">
            <td class="directory">
              <a href="#norm_state">1 标准状态</a>
              <a href="#drilling_unit">2 起草单位</a>
              <a href="#drafter">3 起草人</a>
              <a href="#version">4 版本变更</a>
              <a href="#xml">5 元数据XML文档</a>
              <a href="#sql">6 元数据、数据标准类SQL脚本</a>
              <a href="#dictionary">7 元数据字典描述</a>
              <a href="#chart">8 标准引用关系</a>
            </td>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="norm_state">标准状态</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content">
            <el-steps :active="0" align-center>
              <el-step title="即将实施"></el-step>
              <el-step title="现行"></el-step>
              <el-step title="废止" description=""></el-step>
            </el-steps>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="drilling_unit">起草单位</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div v-for="drillingUnitData in normData.drillingUnit">
              <div class="list-content">{{drillingUnitData}}</div>
              <br v-if="(index+1)%3===0">
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="drafter">起草人</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div v-for="drafterData in normData.drafter">
              <div class="list-content">{{drafterData}}</div>
              <br v-if="(index+1)%3===0">
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="version">版本变更</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <a>原版本：{{normData.oldVersion}}</a><br>
            <a>变更情况说明：{{normData.changeDescription}}</a><br>
            <a>变更内容：{{normData.changeContent}}</a>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="xml">元数据XML文档</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-button type="primary">XML文档下载<i class="el-icon-download el-icon--right"></i></el-button>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="sql">元数据、数据标准类SQL脚本</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <el-button type="primary">SQL脚本下载<i class="el-icon-download el-icon--right"></i></el-button>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="dictionary">元数据字典表描述</a></div>
        </el-col>
      </el-row>
      <el-row v-for="(metadataDictionary,index) in metadataDictionaryData" :key="index">
        <el-col style="font-size: 16px;margin-bottom: 10px">{{metadataDictionary[0].dictionary}}</el-col>
        <el-col :span="24">
          <div class="figure-table">
            <!-- <img v-bind:src="normData.dictionary"/>-->
            <el-table
              border
              :data="metadataDictionary"
              stripe
              style="width: 90%;margin: 0 5%">
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
            <!--<img src="../../assets/metadataDictionary.png"/>-->
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple line"><a name="chart">标准引用关系图</a></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="figure-table" >
            <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
          </div>
        </el-col>
      </el-row>

      <el-dialog title="标准意见反馈"
                 :visible.sync="dialogVisible"
                 width="70%">
        <div id="suggestion">
          <!--智慧检务创新研究院智能化应用测试展示平台&nbsp;&nbsp;&nbsp;&nbsp;-->
          <!--<div class="title">标准意见反馈</div>-->
          <div class="sug_norm"><a>特征集意见项目</a>{{normData.number}}&nbsp;&nbsp;&nbsp;&nbsp;{{normData.name}}</div>
          <div class="sug_form">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                     class="demo-ruleForm">
              <div class="info" style="text-align: left">
                <div class="info_title"><a>基本信息</a></div>
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="单位名称" prop="company">
                  <el-input v-model="ruleForm.company"></el-input>
                </el-form-item>
                <el-form-item label="手机" prop="phone">
                  <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <!--<el-form-item label="验证码" prop="name">-->
                <!--<el-input v-model="ruleForm.name"></el-input>-->
                <!--</el-form-item>-->
              </div>
              <div class="sug" style="text-align: left">
                <div class="sug_title"><a>意见及建议</a></div>
                <el-row :gutter="20">
                  <el-col :span="10">
                    <el-form-item label="意见类别" prop="resource"><br>
                      <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="技术参数问题"></el-radio>
                        <el-radio label="标准表述问题"></el-radio>
                        <el-radio label="交叉重复问题"></el-radio>
                        <el-radio label="其他"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="14">
                    <el-form-item label="意见内容" prop="desc"><br>
                      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
              <div class="submenu">
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
              </div>
            </el-form>
          </div>
        </div>
      </el-dialog>
    </div>
    <iframe v-if="showPdf" id='previewPdf' :src="'/static/pdf/web/viewer.html?file=' + fileUrl" height="560"
            width="100%">
    </iframe>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/graph')
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: 'NormDetail',
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

      return {
        showPdf: false,
        //标准信息
        normData: {
          name: '电子检务工程 财务预算报表信息分类与编码',
          number: 'DZJW 2206-2017',
          introduce: ['本部分按GB/T 1.1-2009给出的规则起草。', '本部分由最高人民检察院检察技术信息研究中心提出并归口。', '本部分由最高人民检察院批准。', '本部分的起草单位：最高人民检察院检察技术信息研究中心，北京太极信息系统技术有限公司。'],
          drillingUnit: ['最高人民检察院检察技术信息研究中心','北京太极信息系统技术有限公司'],
          drafter: ["最高人民检察院检察技术信息研究中心"],
          oldVersion: 'DZJW 2206-2017',
          changeDescription: '应时代变化，予以更新',
          changeContent: '就电子证件的像素问题，由原来要求的180px*250px改为现在的200px*300px',
          // dictionary: require('../../assets/img/metadataDictionary.png'),
          XMLDocument: '',
          SQLScript: '',
          // dictionaryDescribes: '',
          // reference: ['标准一','标准一','标准一'],
          // referenced:['标准一','标准一']

        },
        //元数据字典数据
        metadataDictionaryData:[
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
              dictionary:'公共元数据字典'
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
              dictionary:'公共元数据字典'
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
              dictionary:'公共元数据字典'
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
              dictionary:'公共元数据字典'
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
              dictionary:'财务元数据字典'
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
              dictionary:'财务元数据字典'
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
              dictionary:'财务元数据字典'
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
              dictionary:'财务元数据字典'
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
              dictionary:'国库集中支付元数据字典'
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
              dictionary:'国库集中支付元数据字典'
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
              dictionary:'国库集中支付元数据字典'
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
              dictionary:'国库集中支付元数据字典'
            }
          ]
        ],
        item: {name: 'XX政府领导及分工.txt', path: '../../assets/download/1.txt'},

        ruleForm: {
          name: '',
          company: '',
          phone: '',
          email: '',
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ],
          company: [
            {required: true, message: '请输入单位名称', trigger: 'blur'}
          ],
          phone: [
            {required: true, validator: checkPhone, trigger: 'blur'}
          ],
          email: [
            {required: true, validator: checkEmail, trigger: 'blur'}
          ],
          resource: [
            {required: true, message: '请选择意见反馈类别', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写意见反馈内容', trigger: 'blur'}
          ]
        },

        radio: '0',
        //弹窗
        dialogVisible: false,
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('反馈成功!');
            window.history.back()
          } else {
            console.log('反馈失败!!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      cancelForm() {
        window.history.back()
      },
      goDetail() {
        let url = 'http://image.cache.timepack.cn/nodejs.pdf'  // 有效 服务器配置跨域处理
        // let url = 'http://localhost:8080/Vue.pdf'
        window.open('/static/pdf/web/viewer.html?file=' + url)
      },
      goDownload() {

      },
      goFeedback() {
        this.dialogVisible = true;
        // this.$router.push({name:'Suggestion'})
        // this.$prompt('请输入邮箱', '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        //   inputErrorMessage: '邮箱格式不正确'
        // }).then(({value}) => {
        //   this.$message({
        //     type: 'success',
        //     message: '你的邮箱是: ' + value
        //   });
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     message: '取消输入'
        //   });
        // });
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        window.onresize = function(){
          myChart.resize();
        }
        myChart.setOption({
          title: {
            text: ''
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 50,
              roam: true,
              label: {
                normal: {
                  show: true
                }
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: [{
                name: 'GB/T 12406-2008 表示货币和资金的代码',
                x: 300,
                y: 100
              }, {
                name: 'DZJW 2101-2017 电子检务工程 数据元总则',
                x: 300,
                y: 300
              }, {
                name: 'DZJW 2206-2017 电子检务工程 审计基建信息分类与编码',
                x: 300,
                y: 500
              }, {
                name: 'DZJW 2204-2017 电子检务工程 财务预算报表数据元',
                x: 600,
                y: 300
              }, {
                name: 'GB/T 10113-2003 分类与编码通用术语',
                x: 900,
                y: 200
              }, {
                name: 'GB/T 7027 信息分类和编码的基本原则与方法',
                x: 900,
                y: 400
              }],
              // links: [],
              links: [{
                source: 'DZJW 2101-2017 电子检务工程 数据元总则',
                target: 'DZJW 2204-2017 电子检务工程 财务预算报表数据元',
              }, {
                source: 'GB/T 12406-2008 表示货币和资金的代码',
                target: 'DZJW 2204-2017 电子检务工程 财务预算报表数据元'
              }, {
                source: 'DZJW 2206-2017 电子检务工程 审计基建信息分类与编码',
                target: 'DZJW 2204-2017 电子检务工程 财务预算报表数据元'
              }, {
                source: 'DZJW 2204-2017 电子检务工程 财务预算报表数据元',
                target: 'GB/T 10113-2003 分类与编码通用术语'
              }, {
                source: 'DZJW 2204-2017 电子检务工程 财务预算报表数据元',
                target: 'GB/T 7027 信息分类和编码的基本原则与方法'
              }],
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0
                }
              }
            }
          ]
        });
      }
    }
  }
</script>
<style scoped>
  #normDetail {
    min-height: 300px;
    width: 84%;
    margin: 0 8%;
    font-size: 15px;
    line-height: 25px;
    background-color: #fff;
    padding: 30px 0;
  }

  a {
    text-decoration: none;
  }

  .title {
    font-size: 25px;
    font-weight: bolder;
    text-align: center;
    margin: 20px 0;
  }

  .sug_norm {
    text-align: left;
    margin: 0px 5% 0px 5%;
    width: 90%;
    line-height: 30px;
    background-image: -webkit-linear-gradient(left, #337AB7, white);
    color: darkred;
    font-weight: bold;
    /*background: rgba(70, 130, 180, .5);*/
    padding: 5px 0 5px 5px;
  }

  .sug_norm a, .info_title a, .sug_title a {
    color: white;
    margin: 0 20px;
    text-decoration: none;
  }

  .sug_form {
    width: 90%;
    margin: 0px 5% 0px 5%;
  }

  .info_title, .sug_title {
    line-height: 30px;
    margin: 30px 0 20px 0;
    text-align: left;
    background-image: -webkit-linear-gradient(left, #337AB7, white);
    color: white;
    font-weight: bold;
    /*background: rgba(70, 130, 180, .5);*/
    padding: 5px 0 5px 5px;
  }

  .right-top {
    width: 40px;
    position: fixed; /*这是必须的*/
    z-index: 999;
    left: 92%; /*这是必须的*/
    font-weight: bolder;
    color: white;
    border: 1px solid white;
    background-color: #4C9CDA;
    cursor: pointer;
  }

  .right-top1 {
    height: 100px;
    top: 220px; /*这是必须的*/
  }

  .right-top2 {
    height: 50px;
    top: 330px; /*这是必须的*/
  }

  .right-top3 {
    height: 100px;
    top: 390px; /*这是必须的*/
  }

  .norm-name{
    text-align: left;
    /*margin-left: 30px;*/
  }

  /*.grid-content {*/
    /*text-align: center;*/
    /*min-height: 16px;*/
  /*}*/

  .norm-introduce {
    text-indent: 35px;
  }

  .norm-name {
    color: brown;
    font-weight: bolder;
    font-size: 20px;
  }

  .bg-purple {
    color: #4F9CEE;
    font-weight: bolder;
    /*font-size: 20px;*/
  }

  .bg-purple-dark {
    text-align: left;
    margin-left: 10%
  }

  .line {
    line-height: 30px;
    margin: 10px 0;
    text-align: left;
    background-image: -webkit-linear-gradient(left, #337AB7, white);
    color: white;
    font-weight: bold;
    /*background: rgba(70, 130, 180, .5);*/
    padding: 5px 0 5px 5px;
  }

  .line a {
    margin-left: 2%;
    cursor: pointer;
  }

  .list-content {
    float: left;
    width: 30%
  }

  .directory a {
    display: block;
    float: left;
    text-decoration: none;
    line-height: 30px;
    width: 40%;
    color: #428BCA;
  }

  .directory a:hover {
    font-weight: bolder;
  }

  .el-row {
    margin-bottom: 15px;
    /*&:last-child {*/
    /*margin-bottom: 0;*/
    /*}*/
  }

  .el-col {
    border-radius: 4px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<style>
  .sug .el-dialog__body {
    padding: 20px 0;
  }
  .sug .el-form-item__content, .el-radio, .submenu .el-form-item--feedback .el-form-item__content{
    margin-left: 0px!important;
  }
  .sug .el-radio{
    width: 200px;
    line-height: 30px;
  }
  .sug .el-textarea, .sug .el-textarea__inner{
   height: 120px;
  }
</style>
