import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  //存储状态
  state:{
    token:null,
    tableData:[],
    content:'',
    currentPage:1,
    pageSize:10


  },
  //显示的更改state
  mutation:{},
  //过滤state中的数据
  getters:{},
  //异步操作
  actions:{}
})
export default store
