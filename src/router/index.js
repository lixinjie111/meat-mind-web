import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from "../views/login.vue"
import Home from "../views/home.vue"
import dashboard from "../views/dashboard/router"//首页
import userProtrait from "../views/user/router"//用户画像
import markProtrait from "../views/mark/router"//品牌画像
import mediaProtrait from "../views/media/router"//媒介画像
import businessAnalysis from "../views/analysis/router"//经营分析
import analysisTool from "../views/tool/router"//分析工具
import dataCenter from "../views/datacenter/router"//数据管理
// 统计图示例页面
import barDemo from "../components/echarts/barDemo"
import barView from "../components/echarts/barView"
import pieView from "../components/echarts/pieView"
import testView from "../components/echarts/testView"
import jyfxView from "../components/echarts/jyfxView"

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location){
  return originalPush.call(this,location).catch(err=>err)
}
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path:"/home",
    name:"home",
    component:Home,
    children:[
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      ...dashboard,
      ...userProtrait,
      ...markProtrait,
      ...mediaProtrait,
      ...businessAnalysis,
      ...analysisTool,
      ...dataCenter
    ]
  },
  {
    path: '/barDemo',
    name: 'barDemo',
    component: barDemo
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
  },
  {
    path: '/testView',
    name: 'testView',
    component: testView
  },
  {
    path: '/jyfxView',
    name: 'jyfxView',
    component: jyfxView
  }
]

const router = new VueRouter({
  routes,
  // mode:'history',
})

export default router
