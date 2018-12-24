<template>
  <!--后台产品管理-->
  <div id="pdmanage">
    <div class="pdmanage_first" style="float: left">
      <!--检索-->
      <el-form :inline="true" :model="formInline" class="demo-form-inline" style="float: left">
        <el-form-item style="float: left">
          <el-input v-model="formInline.pdName" placeholder="产品名" clearable></el-input>
        </el-form-item>
        <el-form-item style="float: left">
          <el-input v-model="formInline.upOrg" placeholder="发布单位" clearable></el-input>
        </el-form-item>
        <el-form-item style="float: left">
          <el-date-picker
            v-model="formInline.value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="发布日期（始）"
            end-placeholder="发布日期（终）"
            :picker-options="pickerOptions2">
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: left">
          <el-button type="primary" @click="goSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="pdMenu">
      <el-button type="primary" @click="goPdAdd">新增</el-button>

      <el-button type="primary" @click="clearFilter">列表重置</el-button>
      <!--<el-button type="primary" @click="goTransactionDelete">下架</el-button>-->
    </div>
    <!--列表-->
    <div class="pdlist">
      <el-table
        :data="tableData"
        :default-sort="{prop: 'date', order: 'descending'}"
        style="width: 100%"
        ref="filterTable"
      >

        <el-table-column
          prop="id"
          label="编号"
          sortable
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="产品名称"
          :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="publisher"
          label="发布单位"
          :filters="upPeopleList"
          :filter-method="filterHandler"
          :show-overflow-tooltip="true">
        </el-table-column>
        <el-table-column
          prop="type"
          label="标签属性"
          :filters="pdTypeList"
          :filter-method="filterHandler"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="产品状态"
          :filters="pdStateList"
          :filter-method="filterHandler"
          :show-overflow-tooltip="true"
        >
          <template slot-scope="scope">
            <el-tag
              :type="typeTag(scope.row.state)"
              disable-transitions>{{scope.row.state}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="date"
          label="发布时间"
          sortable
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <el-button @click="goPdShow" type="text" size="small">查看</el-button>
            <el-button @click="goPdChange" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" >下架</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--页码-->
    <div class="pdlist_page" style="margin-top: 10px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PdManage",
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        input5: '',
        tableData:[
          {
            id:'1000',
            name:'上海刑事辅助办案系统',
            publisher:'上海智慧检务创新实验室',
            type: '公益诉讼',
            state:'已发布',
            date:'2018-01-11'
          },
          {
            id:'1001',
            name:'成都成小书辅助系统',
            publisher:'成都智慧检务创新实验室',
            type: '综合业务',
            state:'已发布',
            date:'2018-01-11'
          },
          {
            id:'1003',
            name:'成都智慧公诉辅助系统',
            publisher:'成都智慧检务创新实验室',
            type: '知识检索',
            state:'已发布',
            date:'2018-01-11'
          },
          {
            id:'1004',
            name:'成都智慧侦监辅助系统',
            publisher:'成都智慧检务创新实验室',
            type: '',
            state:'已发布',
            date:'2018-01-11'
          },
          {
            id:'1005',
            name:'温州检察院公益诉讼线索智能研判预警系统',
            publisher:'温州智慧检务创新实验室',
            type: '语音转写',
            state:'已发布',
            date:'2018-01-11'
          },
          {
            id:'1006',
            name:'民事裁判文书智慧监督系统',
            publisher:'浙江智慧检务创新实验室',
            type: '大数据分析',
            state:'审批中',
            date:'2018-01-11'
          },
          {
            id:'1007',
            name:'南检法律大数据智能量刑辅助系统',
            publisher:'湖南智慧检务创新实验室',
            type: '类案推送',
            state:'未提交',
            date:''
          },
          {
            id:'1000',
            name:'上海刑事辅助办案系统',
            publisher:'上海智慧检务创新实验室',
            type: '文书纠错',
            state:'已发布',
            date:'2018-01-11'
          },
          {
            id:'1055',
            name:'刑事辅助办案系统',
            publisher:'河南智慧检务创新实验室',
            type: 'OCR识别',
            state:'已下架',
            date:'2018-01-11'
          },
        ],
        formInline: {
          pdName: '',
          upOrg: '',
          value7: '',
        },
        upPeopleList:[{text:'上海智慧检务创新实验室',value:'上海智慧检务创新实验室'},
          {text:'成都智慧检务创新实验室',value:'成都智慧检务创新实验室'},
          {text:'温州智慧检务创新实验室',value:'温州智慧检务创新实验室'},
          {text:'浙江智慧检务创新实验室',value:'浙江智慧检务创新实验室'},
          {text:'河南智慧检务创新实验室',value:'河南智慧检务创新实验室'},
          {text:'山西智慧检务创新实验室',value:'山西智慧检务创新实验室'},
          {text:'陕西智慧检务创新实验室',value:'陕西智慧检务创新实验室'},
          {text:'山东智慧检务创新实验室',value:'山东智慧检务创新实验室'},
          {text:'河北智慧检务创新实验室',value:'河北智慧检务创新实验室'},
          {text:'内蒙古智慧检务创新实验室',value:'内蒙古智慧检务创新实验室'},
          {text:'广西智慧检务创新实验室',value:'广西智慧检务创新实验室'},
          {text:'湖南智慧检务创新实验室',value:'湖南智慧检务创新实验室'}
        ],
        pdTypeList:[{text:'公益诉讼',value:'公益诉讼'},
          {text:'综合业务',value:'综合业务'},
          {text:'知识检索',value:'知识检索'},
          {text:'语音转写',value:'语音转写'},
          {text:'大数据分析',value:'大数据分析'},
          {text:'类案推送',value:'类案推送'},
          {text:'文书纠错',value:'文书纠错'},
          {text:'OCR识别',value:'OCR识别'}
        ],
        pdStateList:[
          {text:'未提交',value:'未提交'},
          {text:'审批中',value:'审批中'},
          {text:'已发布',value:'已发布'},
          {text:'已下架',value:'已下架'},
        ],
        currentPage4: 4
      }
    },
    methods: {
      //表格过滤器
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goPdAdd() {
        this.$router.push({name: 'PdAdd'})
      },
      goPdShow() {
        this.$router.push({name: 'PdShow'})
      },
      goSearch() {
      },
      goPdChange() {
        this.$router.push({name: 'PdChange'})
      },
      //未提交、审批中、已发布
      typeTag(type){
        if(type!==null){
          if (type ==='未提交') {
            return 'primary'
          }else{
            if (type ==='审批中'){
              return 'danger'
            }else{
              if (type ==='已发布') {
                return 'success'
              }else{
                if (type ==='已下架') {
                  return 'info'
                }else{
                  return ''
                }
              }
            }
          }
        }else {
          return ''
        }
      }
    }
  }
</script>

<style scoped>
  #pdmanage {
    width: 90%;
    margin: 0 5%;
    min-height: 400px;
    /*display: inline;*/
  }
  .pdMenu {
    clear: both;
  }
  .el-button{
    float: left;
  }
  /*列表*/
  .pdlist {
    clear: both;
    padding-top: 20px
  }
</style>
