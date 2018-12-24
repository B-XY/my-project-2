// /**
//  * api接口统一出口
//  */
// //首页模块的接口
// import index from './index'
//
// //导出接口
// export default {
//   //index主页模块接口
//   index
// }
import axios from "axios"
import qs from "qs"
import {loading} from "element-ui"
import Vue from "vue"

//将axios挂载到原型上
Vue.prototype.$axios = axios;

let href = document.location.href;
let Burl = null
if(href.indexOf('htsoc')>-1){
  Burl = href.split('htsoc')[0]+'htsoc';
}else{
  Burl = 'http://localhost:8086/htsoc';
}
const base = Burl;

//
axios.defaults.withCredentials = true

axios.defaults.timeout = 360000

axios.interceptors.request.use(function (config) {
  if(config.method === 'post'&& typeof (config.data) === 'object'){
    if(config.postMod){
      config.params = config.data
    }else {
      config.data = qs.stringify(config.data,{indices:false})
    }
  }
  return config
},function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  if(response.config.url.indexOf('logout.ht')>-1){
    return response
  }
  if(!response.headers.expires && response.headers["content-type"]){
    if(document.location.hash.indexOf("#/topo")>-1){
      console.log(document.location.hash)
      setTimeout(function () {
        window.sessionStorage.removeItem('loginUserInfo')
        window.sessionStorage.removeItem('isLoadNodes')
        window.location.reload()
      },2000)
      return response
    }
    setTimeout(function () {
      window.sessionStorage.removeItem('loginUserInfo')
      window.sessionStorage.removeItem('isLoadNodes')
      load.close()
      let pathname = document.location.pathname
      //是否设置项目名
      if(pathname.startsWith('/htsoc')){
        window.location.href = '/htsoc/index.html'
      }else{
        window.location.href = '/'
      }
    },2000)
    // let load = loading.service({
    //   fullscreen:true,
    //   spinner:'fa fa-spinner fa-spin loading-icon',
    //   customClass:'n-timeout-loading',
    //   text:'登录超时，即将重新登录'
    // })
  }
},function (error) {
  return Promise.reject(error)
})

// export const changeKeys = p => {
//   return this.$axios.get(`http://localhost:8086/htsoc/changeKeys.ht`).then(res=>{this.keys = res.data});
// }
// export function changeKeys(){
//   // return axios.get(`${base}/changeKeys.ht`).then(res => {this.keys = ["123","456","789","987","654","321"]});
//   return axios.post(`http://localhost:8086/htsoc/changeKeys.ht`).then( res=>{
//     this.keys = res.data.data
//   }).catch( err => console.log(err));
// }

