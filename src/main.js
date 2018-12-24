import './assets/css/reset.css'
//pdf在线预览
import './assets/js/pdf.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import Vuex from 'vuex'
Vue.use(Vuex)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/mycss-face.scss'
Vue.use(ElementUI)

import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

// import api from './api/api' // 导入api接口
// Vue.prototype.$api = api; // 将api挂载到vue的原型上

import axios from "axios"
axios.defaults.withCredentials = true
// //将axios挂载到原型上
Vue.prototype.$axios = axios;
// //配置全局的axios默认值（可选）
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>',

  // data:{
  //   eventHub:new Vue() // 在main.js设置所有组件都能用调用
  // }
})

export function changeKeys() {
  // return axios.get(`${base}/changeKeys.ht`).then(res => {this.keys = ["123","456","789","987","654","321"]});
  return this.$axios.get(`http://localhost:8086/htsoc/changeKeys.ht`).then( res=>{
    this.keys = res.data.data
  }).catch( err => console.log(err));
}
