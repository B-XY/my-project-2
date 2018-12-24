<template>
  <div id="organization">
    <el-container>
      <el-aside width="180px">
        <div class="organizationListBorder">
          <div class="organizationTree">
            <div
              style="padding: 10px 0;font-size: 20px;font-weight: bolder;border-bottom: 1px silver solid;margin-bottom: 5px">
              组织机构
            </div>
            <!--默认展开树形图   default-expand-all -->
            <el-input
              placeholder="输入关键字进行过滤"
              v-model="filterText" style="margin-bottom: 5px">
            </el-input>
            <el-tree :data="organizationData" :filter-node-method="filterNode" node-key="id" :props="defaultProps"
            ref="tree2" default-expand-all :expand-on-click-node="false"
            @node-click="handleNodeClick"></el-tree>
          </div>
        </div>
      </el-aside>
      <el-main style="margin-left: 20px;background-color: white;padding-left: 10px;padding-right: 10px">
        <!--<router-view :key="activeDate"></router-view>-->
        <router-view :key="$route.fullPath"></router-view>
        <!--<router-view></router-view>-->
      </el-main>
    </el-container>
  </div>
</template>

<script>
  // let id = 1000;
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    data() {
      const data = [
        {
          id: 1,
          label: '高检院',
          children: [
            {
            id: 2,
            label: '智慧检务创新研究院',
            children:[
              {
                id: 7,
                label: '706所高检事业部'
              }, {
                id: 8,
                label: '高检信息中心'
              }
            ]
          },
            {
            id: 3,
            label: '上海智慧研究院',
            children:[
              {
                id: 9,
                label: '上海检察院'
              }, {
                id: 10,
                label: '上海研究中心'
              }
            ]
          },
            {
            id:4,
            label: '南京研究院',
            children:[
              {
                id: 11,
                label: '南京检察院'
              }, {
                id: 12,
                label: '南京信息中心'
              }
            ]
          },
            {
              id:5,
              label: '北京检察院',
            },
            {
              id:6,
              label: '北京信息中心',
            }
          ]
        }];
      return {
        organizationData: JSON.parse(JSON.stringify(data)),
        //————tree   搜索输入框数据
        filterText: '',
        // organizationData: [
        //   {
        //     id: 1,
        //     label: '系统',
        //     children: [
        //       {
        //         id: 4,
        //         label: '角色分类',
        //       }
        //     ]
        //   },
        //   {
        //     id: 2,
        //     label: '产品',
        //     children: [
        //       {
        //         id: 5,
        //         label: '产品分类',
        //       },
        //       {
        //         id: 6,
        //         label: '产品关键字',
        //       }
        //     ]
        //   },
        //   {
        //     id: 3,
        //     label: '标准',
        //     children: [
        //       {
        //         id: 7,
        //         label: '标准分类',
        //       },
        //       {
        //         id: 8,
        //         label: '标准关键字',
        //       }
        //     ]
        //   }
        // ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    methods: {
      handleNodeClick(data) {
        //节点的值    data.label
        console.log(data);
        var name = data.label
        if (data.children == null) {
          // this.$router.push('/Back/DataDictionary/DictionaryData')
          // this.$router.push({name: 'DictionaryData', params: {data: name}})
          this.$router.push({path: '/Back/OrganizationManage/OrganizationData', query: {data: name}})
          // this.dictionaryData=this.dictionaryData1
        } else {
          // this.$router.push({path: 'DataDictionaryList', params: {data: name}})
          this.$router.push({path: '/Back/OrganizationManage/OrganizationList', query: {data: name}})
        }
      },

      //——————tree--过滤器
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },

      append(data) {
        const newChild = {id: id++, label: 'testtest', children: []};
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      alter(data) {

      }
    }
  }
</script>

<style scoped>
  #organization {
    margin: 0 5%;
    width: 90%;
    min-height: 400px;
    /*height: 100%;*/
  }

  .organizationListBorder {
    /*width: 100%;*/
    height: 100%;
    /*border: 1px white;*/
    background-color: white;
  }

  .organizationTree {
    clear: both;
    padding-top: 20px;
    margin: 0 5px 5px;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }

  .organization_search .el-form-item {
    float: left;
  }

  .organizationMenu .el-button {
    float: left;
  }

  .organizationMenu {
    clear: both;
  }

  .pagination {
    margin-top: 20px;
  }
</style>
