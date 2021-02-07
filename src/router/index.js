import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from "../views/login.vue"
import dashboard from "../views/dashboard/router"//首页
import userProtrait from "../views/user/router"//用户画像
import markProtrait from "../views/mark/router"//品牌画像
import mediaProtrait from "../views/media/router"//媒介画像
import businessAnalysis from "../views/analysis/router"//经营分析
import analysisTool from "../views/tool/router"//分析工具
import dataCenter from "../views/datacenter/router"//数据管理
// 统计图示例页面
import barView from "../components/echarts/barView"
import pieView from "../components/echarts/pieView"

Vue.use(VueRouter)

const routes = [
  ...dashboard,
  ...userProtrait,
  ...markProtrait,
  ...mediaProtrait,
  ...businessAnalysis,
  ...analysisTool,
  ...dataCenter,
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/barView',
    name: 'barView',
    component: barView
  },
  {
    path: '/pieView',
    name: 'pieView',
    component: pieView
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
