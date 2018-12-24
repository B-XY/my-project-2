<template>
  <div id="dataDictionary">
    <el-container>
      <el-aside width="180px">
        <div class="dataDictionaryListBorder">
          <div class="dataDictionaryTree">
            <div
              style="padding: 10px 0;font-size: 20px;font-weight: bolder;border-bottom: 1px silver solid;margin-bottom: 5px">
              字典类别
            </div>
            <!--默认展开树形图   default-expand-all -->
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText" style="margin-bottom: 5px">
            </el-input>
            <el-tree :data="dataDictionaryData" :filter-node-method="filterNode" node-key="id" :props="defaultProps"
                     ref="tree2" default-expand-all :expand-on-click-node="false"
                     @node-click="handleNodeClick"></el-tree>
          </div>
        </div>
      </el-aside>
      <el-main style="margin-left: 20px;background-color: white;padding-left: 10px;padding-right: 10px">
        <!--<router-view :key="activeDate"></router-view>-->
        <router-view :key="$route.fullPath"></router-view>
        <!--<router-view></router-view>-->

        <!--<div>-->
        <!--&lt;!&ndash;检索&ndash;&gt;-->
        <!--<div class="dataDictionary_search">-->
        <!--<el-form :inline="true" :model="formInline" class="demo-form-inline">-->
        <!--<el-form-item label="">-->
        <!--<el-input placeholder="名称" v-model="formInline.name"></el-input>-->
        <!--</el-form-item>-->
        <!--&lt;!&ndash;<el-form-item label="">&ndash;&gt;-->
        <!--&lt;!&ndash;<el-input placeholder="字典号" v-model="formInline.number"></el-input>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
        <!--<el-form-item label="">-->
        <!--<el-date-picker-->
        <!--v-model="formInline.value7"-->
        <!--type="daterange"-->
        <!--align="right"-->
        <!--unlink-panels-->
        <!--range-separator="至"-->
        <!--start-placeholder="开始日期"-->
        <!--end-placeholder="结束日期"-->
        <!--:picker-options="pickerOptions2">-->
        <!--</el-date-picker>-->
        <!--</el-form-item>-->
        <!--<el-form-item style="float: left;">-->
        <!--<el-button type="primary" @click="goLogSearch" class="float-left">查询</el-button>-->
        <!--</el-form-item>-->
        <!--</el-form>-->
        <!--</div>-->
        <!--&lt;!&ndash;作用于列表的功能&ndash;&gt;-->
        <!--<div class="dataDictionaryMenu">-->
        <!--<el-button type="primary" @click="dictionaryAdd">新增</el-button>-->
        <!--<el-button type="primary" @click="dictionaryDelete">删除</el-button>-->
        <!--</div>-->
        <!--<div class="dictionaryDataList">-->
        <!--<el-table-->
        <!--ref="filterTable"-->
        <!--:data="dictionaryData"-->
        <!--tooltip-effect="dark"-->
        <!--:default-sort="{prop: 'date', order: 'descending'}"-->
        <!--style="width: 100%"-->
        <!--@selection-change="handleSelectionChange">-->
        <!--<el-table-column-->
        <!--type="selection"-->
        <!--width="55">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="No"-->
        <!--label="序号"-->
        <!--sortable-->
        <!--width="55">-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="name"-->
        <!--label="名称" show-overflow-tooltip>-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="value"-->
        <!--label="值" show-overflow-tooltip>-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="number"-->
        <!--sortable-->
        <!--label="字典号"-->
        <!--:filters="roleList"-->
        <!--:filter-method="filterHandler"-->
        <!--show-overflow-tooltip>-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="note"-->
        <!--label="备注"-->
        <!--:filters="resultList"-->
        <!--:filter-method="filterHandler"-->
        <!--show-overflow-tooltip>-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--prop="date"-->
        <!--sortable-->
        <!--label="操作日期"-->
        <!--show-overflow-tooltip>-->
        <!--</el-table-column>-->
        <!--<el-table-column-->
        <!--fixed="right"-->
        <!--width="100px"-->
        <!--label="" show-overflow-tooltip>-->
        <!--<template slot-scope="scope">-->
        <!--<el-button @click="dictionaryShow(scope.row)" type="text" size="medium">查看</el-button>-->
        <!--<el-button @click="dictionaryChange(scope.row)" type="text" size="medium">查看</el-button>-->
        <!--<el-button @click="dictionaryDelete(scope.row)" type="text" size="medium">删除</el-button>-->
        <!--</template>-->
        <!--</el-table-column>-->
        <!--</el-table>-->
        <!--<div class="pagination">-->
        <!--<el-pagination-->
        <!--@size-change="handleSizeChange"-->
        <!--@current-change="handleCurrentChange"-->
        <!--:current-page="currentPage4"-->
        <!--:page-sizes="[10, 20, 30, 40]"-->
        <!--:page-size="10"-->
        <!--layout="total, sizes, prev, pager, next, jumper"-->
        <!--:total="40">-->
        <!--</el-pagination>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {

    //——————刷新路由
    // inject: ['reload'],

    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      },
      // '$route' () {
      //   if (this.$route.path === '/Back/DataDictionary/DictionaryData') {
      //     this.handleNodeClick(data)
      //   }
      // }
    },

    data() {
      return {
        //————刷新路由
        activeDate: '',
        //————tree   搜索输入框数据
        filterText: '',
        defaultProps: {
          children: 'children',
          label: 'label'
        },

        dataDictionaryData: [
          {
            id: 1,
            label: '系统',
            children: [
              {
                id: 4,
                label: '角色分类',
              }
            ]
          },
          {
            id: 2,
            label: '产品',
            children: [
              {
                id: 5,
                label: '产品分类',
              },
              {
                id: 6,
                label: '产品关键字',
              }
            ]
          },
          {
            id: 3,
            label: '标准',
            children: [
              {
                id: 7,
                label: '标准分类',
              },
              {
                id: 8,
                label: '标准关键字',
              }
            ]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        },

        // formInline: {
        //   name: '',
        //   // number: '',
        //   value7: '',
        // },
        // pickerOptions2: {
        //   shortcuts: [
        //     {
        //       text: '最近一周',
        //       onClick(picker) {
        //         const end = new Date();
        //         const start = new Date();
        //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        //         picker.$emit('pick', [start, end]);
        //       }
        //     }, {
        //       text: '最近一个月',
        //       onClick(picker) {
        //         const end = new Date();
        //         const start = new Date();
        //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        //         picker.$emit('pick', [start, end]);
        //       }
        //     }, {
        //       text: '最近三个月',
        //       onClick(picker) {
        //         const end = new Date();
        //         const start = new Date();
        //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        //         picker.$emit('pick', [start, end]);
        //       }
        //     }]
        // },
        // dictionaryData:'',
        // dictionaryData1: [
        //   {
        //     No: '1',
        //     name: '基础标准',
        //     value: '基础标准',
        //     number: '1',
        //     note: '',
        //     date: '2018-12-17',
        //   },
        //   {
        //     No: '2',
        //     name: '应用系统标准',
        //     value: '应用系统标准',
        //     number: '2',
        //     note: '',
        //     date: '2018-12-15',
        //   },
        //   {
        //     No: '3',
        //     name: '应用支撑标准',
        //     value: '应用支撑标准',
        //     number: '3',
        //     note: '',
        //     date: '2018-12-16',
        //   },
        //   {
        //     No: '4',
        //     name: '管理标准',
        //     value: '管理标准',
        //     number: '4',
        //     note: '',
        //     date: '2018-12-12',
        //   },
        //   {
        //     No: '5',
        //     name: '信息安全标准',
        //     value: '信息安全标准',
        //     number: '5',
        //     note: '',
        //     date: '2018-11-12',
        //   },
        //   {
        //     No: '6',
        //     name: '网络基础设施标准',
        //     value: '网络基础设施标准',
        //     number: '6',
        //     note: '',
        //     date: '2018-12-08',
        //   }
        // ],
        // dataToView: {
        //   No: '',
        //   name: '',
        //   value: '',
        //   number: '',
        //   note: '',
        //   date: '',
        // },
      }
    },

    methods: {
      handleNodeClick(data) {
        //节点的值    data.label
        console.log(data);
        // this.reload()
        var name = data.label
        if (data.children == null) {
          // this.$router.push('/Back/DataDictionary/DictionaryData')
          // this.$router.push({name: 'DictionaryData', params: {data: name}})
          this.$router.push({path: '/Back/DataDictionary/DictionaryData', query: {data: name}})
          // this.dictionaryData=this.dictionaryData1
        } else {
          // this.$router.push({path: 'DataDictionaryList', params: {data: name}})
          this.$router.push({path: '/Back/DataDictionary/DataDictionaryList', query: {data: name}})
        }
        // this.activeDate = new Date()
      },

      //——————tree--过滤器
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },

      // dictionaryAdd(){
      //
      // },
      // dictionaryShow() {
      //
      // },
      // dictionaryChange() {
      //
      // },
      // dictionaryDelete() {
      //
      // },
    }
  }
</script>

<style scoped>
  #dataDictionary {
    margin: 0 5%;
    width: 90%;
    min-height: 400px;
    /*height: 100%;*/
  }

  .dataDictionaryListBorder {
    /*width: 100%;*/
    height: 100%;
    /*border: 1px white;*/
    background-color: white;
  }

  .dataDictionaryMenu .el-button {
    float: left;
  }

  .dataDictionaryTree {
    clear: both;
    padding-top: 20px;
    margin: 0 5px 5px;
  }

  .dataDictionary_search .el-form-item {
    float: left;
  }

  .dataDictionaryMenu {
    clear: both;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
