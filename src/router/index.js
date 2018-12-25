import Vue from 'vue'
import Router from 'vue-router'

//前台
//前台--首页
import Index from "@/components/Index"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Body from "@/components/Body"
import Home from "@/components/Home"
//前台--注册登录
import Register from '@/components/body/Register'
import Login from '@/components/body/Login'
//前台--产品相关页面
import NoticeItem from '@/components/body/NoticeItem'
import Notice from '@/components/body/Notice'
import Product from '@/components/body/Product'
import SearchType from '@/components/body/SearchType'
//前台--标准相关页面
import Norm from '@/components/body/Norm'
import AdvancedSearch from '@/components/body/AdvancedSearch'
import GeneralSearch from '@/components/body/GeneralSearch'
import NormDetail from '@/components/body/NormDetail'
import Suggestion from '@/components/body/Suggestion'


//后台
//后台--主页
import Back from '@/components/body/back/Manage'
import LeftNav from '@/components/body/back/LeftNav'
import Hello from '@/components/body/back/Hello'
//后台--用户管理
import UsersManage from '@/components/body/back/users/UsersManage'
import AddUser from '@/components/body/back/users/AddUser'
import UserView from '@/components/body/back/users/UserView'
//后台--角色管理
import RoleManage from '@/components/body/back/role/RoleManage'
import AddRole from '@/components/body/back/role/AddRole'
import ChangeRoleInfo from '@/components/body/back/role/ChangeRoleInfo'
//后台--产品管理
import PdManage from '@/components/body/back/pd/PdManage'
import PdAdd from '@/components/body/back/pd/PdAdd'
import PdChange from '@/components/body/back/pd/PdChange'
import PdShow from '@/components/body/back/pd/PdShow'
//后台--标准管理
import NormManage from '@/components/body/back/norm/NormManage'
import BackNormList from '@/components/body/back/norm/NormList'
import AddNorm from '@/components/body/back/norm/AddNorm'
import EntryDictionary from '@/components/body/back/norm/EntryDictionary'
import NormToView from '@/components/body/back/norm/NormToView'
import NormToChange from '@/components/body/back/norm/NormToChange'
import NormToAlter from '@/components/body/back/norm/NormToAlter'
//后台--事务管理
import TransactionManage from '@/components/body/back/transaction/TransactionManage'
//后台--数据字典
import DataDictionary from '@/components/body/back/dataDictionary/DataDictionary'
import DataDictionaryList from '@/components/body/back/dataDictionary/DataDictionaryList'
import DataDictionaryAdd from '@/components/body/back/dataDictionary/DataDictionaryAdd'
import DataDictionaryAlter from '@/components/body/back/dataDictionary/DataDictionaryAlter'
import DataDictionaryView from '@/components/body/back/dataDictionary/DataDictionaryView'
import DictionaryData from '@/components/body/back/dataDictionary/DictionaryData'
import DictionaryAdd from '@/components/body/back/dataDictionary/DictionaryAdd'
import DictionaryAlter from '@/components/body/back/dataDictionary/DictionaryAlter'
import DictionaryView from '@/components/body/back/dataDictionary/DictionaryView'
//后台--组织机构管理
import OrganizationManage from '@/components/body/back/organization/OrganizationManage'
import OrganizationList from '@/components/body/back/organization/OrganizationList'
import OrganizationAdd from '@/components/body/back/organization/OrganizationAdd'
import OrganizationAlter from '@/components/body/back/organization/OrganizationAlter'
import OrganizationView from '@/components/body/back/organization/OrganizationView'
import OrganizationData from '@/components/body/back/organization/OrganizationData'
import OrganizationDataAdd from '@/components/body/back/organization/OrganizationDataAdd'
import OrganizationDataAlter from '@/components/body/back/organization/OrganizationDataAlter'
import OrganizationDataView from '@/components/body/back/organization/OrganizationDataView'
//后台--日志管理
import LogManage from '@/components/body/back/log/LogManage'
//后台--公告管理
import NoticeManage from '@/components/body/back/notice/NoticeManage'
//后台--统计管理
import Survey from '@/components/body/back/survey/Survey'

//资源
import Menu from '@/components/Menu'
import breadcrumb from '@/components/resource/Breadcrumb'
import pagination from "@/components/resource/Pagination"
import SearchInput from "@/components/resource/SearchInput"
import GoBack from "@/components/resource/GoBack"
import HomeSearchInput from "@/components/resource/HomeSearchInput"
import MarqueeScroll from "@/components/resource/MarqueeScroll"
import Card from "@/components/resource/Card"
import ImgCard from "@/components/resource/ImgCard"
import Carousel from '@/components/resource/Carousel'
import Layout1 from '@/components/resource/Layout1'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [

    //——————主页重定向
    // {
    //   path: '/',
    //   redirect: '/Index',
    //   // component: Index
    // },

    //——————主页
    {
      path: '/',
      name: 'Index',
      component: Index,
      // components: {
      //   // Header: Header,
      //   default: Body, //默认省略不写name的情况
      //   // Footer: Footer
      // },
      children: [
        //——————注册
        {
          path: '/Register',
          name: 'Register',
          component: Register
        },
        //——————登录
        {
          path: '/Login',
          name: 'Login',
          component: Login
        },
        //——————头部
        {
          path: '/Header',
          name: 'Header',
          component: Header
        },
        //——————尾部
        {
          path: '/Footer',
          name: 'Footer',
          component: Footer
        },
        //——————身体主页
        {
          path: '/Body',
          name: 'Body',
          component: Body,
          // components: {
          //   // Menu:Menu,
          //   default: Home
          // },
          children: [
            //——————身体主页主体部分
            {
              path: '/Home',
              name: 'Home',
              component: Home
            },
            //——————菜单栏
            {
              path: '/Menu',
              name: 'Menu',
              component: Menu
            },

            //——————公告页
            {
              path: '/NoticeItem',
              name: 'NoticeItem',
              component: NoticeItem
            },
            //——————产品详情
            {
              path: '/Product',
              name: 'Product',
              component: Product
            },
            //——————产品分类
            {
              path: '/SearchType',
              name: 'SearchType',
              component: SearchType
            },
            //——————公告页面
            {
              path: '/Notice',
              name: 'Notice',
              component: Notice
            },

            /* {
               path: '/Norm',
               name: '首页 / 标准',
               component: Norm
             },*/
            //——————标准页
            {
              path: '/Norm',
              name: 'Norm',
              component: Norm
            },
            //——————高级检索
            {
              path: '/AdvancedSearch',
              name: 'AdvancedSearch',
              component: AdvancedSearch
            },
            //——————普通检索
            {
              path: '/GeneralSearch',
              name: 'GeneralSearch',
              component: GeneralSearch
            },
            //——————标准详情页
            {
              path: '/NormDetail',
              name: 'NormDetail',
              component: NormDetail
            },
            //——————标准意见反馈
            {
              path: '/Suggestion',
              name: 'Suggestion',
              component: Suggestion
            },
          ], redirect: '/Home'
        },

        //——————后台管理
        {
          path: '/Back',
          name: 'Back',
          component: Back,
          // components:{
          //  LeftNav:LeftNav,
          //   default: Hello
          // },
          children: [
            //——————后台欢迎页面
            {
              path: '/Back/Hello',
              name: 'Hello',
              component: Hello
            },
            //——————后台左侧菜单栏
            {
              path: '/LeftNav',
              name: 'LeftNav',
              component: LeftNav
            },
            //——————标准管理
            {
              path: '/Back/NormManage',
              name: 'NormManage',
              component: NormManage,
            },
            //标准列表
            {
              path: '/Back/NormManage/BackNormList',
              name: 'BackNormList',
              component: BackNormList,
            },
            //新增标准
            {
              path: '/Back/NormManage/AddNorm',
              name: 'AddNorm',
              component: AddNorm,
              children: [
                //元数据字典表示
                {
                  path: '/Back/NormManage/AddNorm/EntryDictionary',
                  name: 'EntryDictionary',
                  component: EntryDictionary,
                }
              ]
            },
            //查看标准
            {
              path: '/Back/NormManage/NormToView',
              name: 'NormToView',
              component: NormToView
            },
            //标准版本升级
            {
              path: '/Back/NormManage/NormToChange',
              name: 'NormToChange',
              component: NormToChange
            },
            //标准修改
            {
              path: '/Back/NormManage/NormToAlter',
              name: 'NormToAlter',
              component: NormToAlter
            },
            //——————产品管理
            {
              path: '/Back/PdManage',
              name: 'PdManage',
              component: PdManage
            },
            //添加产品
            {
              path: '/Back/PdAdd',
              name: 'PdAdd',
              component: PdAdd
            },
            //查看产品信息
            {
              path: '/Back/PdShow',
              name: 'PdShow',
              component: PdShow
            },
            //修改产品信息
            {
              path: '/Back/PdChange',
              name: 'PdChange',
              component: PdChange
            },
            //——————用户管理
            {
              path: '/Back/UsersManage',
              name: 'UsersManage',
              component: UsersManage
            },
            //添加用户
            {
              path: '/Back/UsersManage/AddUser',
              name: 'AddUser',
              component: AddUser
            },
            //查看用户
            {
              path: '/Back/UsersManage/UserView',
              name: 'UserView',
              component: UserView
            },
            //——————角色管理
            {
              path: '/Back/RoleManage',
              name: 'RoleManage',
              component: RoleManage
            },
            //添加角色
            {
              path: '/Back/RoleManage/AddRole',
              name: 'AddRole',
              component: AddRole
            },
            //修改角色信息
            {
              path: '/Back/RoleManage/ChangeRoleInfo',
              name: 'ChangeRoleInfo',
              component: ChangeRoleInfo
            },
            //——————事务管理
            {
              path: '/Back/TransactionManage',
              name: 'TransactionManage',
              component: TransactionManage
            },
            //——————数据字典
            {
              path: '/Back/DataDictionary',
              name: 'DataDictionary',
              component: DataDictionary,
              children:[
                //字典表信息管理
                {
                  path: '/Back/DataDictionary/DataDictionaryList',
                  name: 'DataDictionaryList',
                  component: DataDictionaryList
                },
                {
                  path: '/Back/DataDictionary/DataDictionaryAdd',
                  name: 'DataDictionaryAdd',
                  component: DataDictionaryAdd
                },
                {
                  path: '/Back/DataDictionary/DataDictionaryAlter',
                  name: 'DataDictionaryAlter',
                  component: DataDictionaryAlter
                },
                {
                  path: '/Back/DataDictionary/DataDictionaryView',
                  name: 'DataDictionaryView',
                  component: DataDictionaryView
                },
                //字典项信息管理
                {
                  path: '/Back/DataDictionary/DictionaryData',
                  name: 'DictionaryData',
                  component: DictionaryData
                },
                {
                  path: '/Back/DataDictionary/DictionaryAdd',
                  name: 'DictionaryAdd',
                  component: DictionaryAdd
                },
                {
                  path: '/Back/DataDictionary/DictionaryAlter',
                  name: 'DictionaryAlter',
                  component: DictionaryAlter
                },
                {
                  path: '/Back/DataDictionary/DictionaryView',
                  name: 'DictionaryView',
                  component: DictionaryView
                }
              ]
              ,redirect: '/Back/DataDictionary/DataDictionaryList'
            },
            //——————组织机构管理
            {
              path: '/Back/OrganizationManage',
              name: 'OrganizationManage',
              component: OrganizationManage,
              children:[
                //组织机构信息管理
                {
                  path: '/Back/OrganizationManage/OrganizationList',
                  name: 'OrganizationList',
                  component: OrganizationList
                },
                {
                  path: '/Back/OrganizationManage/OrganizationAdd',
                  name: 'OrganizationAdd',
                  component: OrganizationAdd
                },
                {
                  path: '/Back/OrganizationManage/OrganizationAlter',
                  name: 'OrganizationAlter',
                  component: OrganizationAlter
                },
                {
                  path: '/Back/OrganizationManage/OrganizationView',
                  name: 'OrganizationView',
                  component: OrganizationView
                },
                //组织机构数据信息管理
                {
                  path: '/Back/OrganizationManage/OrganizationData',
                  name: 'OrganizationData',
                  component: OrganizationData
                },
                {
                  path: '/Back/OrganizationManage/OrganizationDataAdd',
                  name: 'OrganizationDataAdd',
                  component: OrganizationDataAdd
                },
                {
                  path: '/Back/OrganizationManage/OrganizationDataAlter',
                  name: 'OrganizationDataAlter',
                  component: OrganizationDataAlter
                },
                {
                  path: '/Back/OrganizationManage/OrganizationDataView',
                  name: 'OrganizationDataView',
                  component: OrganizationDataView
                }
              ]
              ,redirect:'/Back/OrganizationManage/OrganizationList'
            },
            //——————日志管理
            {
              path: '/Back/LogManage',
              name: 'LogManage',
              component: LogManage
            },
            //——————公告管理
            {
              path: '/Back/NoticeManage',
              name: 'NoticeManage',
              component: NoticeManage
            },
            //——————统计管理
            {
              path: '/Back/Survey',
              name: 'Survey',
              component: Survey
            },
          ], redirect: '/Back/PdManage'
        },

        //——————资源路由
        {
          //页码
          path: '/Pagination',
          name: 'Pagination',
          component: pagination
        },
        {
          //面包屑
          path: '/Breadcrumb',
          name: 'Breadcrumb',
          component: breadcrumb
        },
        {
          //普通搜索
          path: '/SearchInput',
          name: 'SearchInput',
          component: SearchInput
        },
        {
          //返回上一个路由
          path: '/GoBack',
          name: 'GoBack',
          component: GoBack
        },
        {
          //主页搜索框
          path: '/HomeSearchInput',
          name: 'HomeSearchInput',
          component: HomeSearchInput
        },
        {
          //卡片
          path: '/Card',
          name: 'Card',
          component: Card
        },
        {
          //带图片卡片
          path: '/ImgCard',
          name: 'ImgCard',
          component: ImgCard
        },
        {
          //走马灯
          path: '/MarqueeScroll',
          name: 'MarqueeScroll',
          component: MarqueeScroll
        },
        //走马灯
        {
          path: '/Carousel',
          name: 'Carousel',
          component: Carousel
        },
        //列表
        {
          path: '/Layout1',
          name: 'Layout1',
          component: Layout1
        },
      ], redirect: '/Body'
    }
  ]
})
