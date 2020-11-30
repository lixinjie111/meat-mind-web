import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from "../views/login.vue"
import home from "../views/home/router"//首页
import analysisTool from "../views/tool/router"//分析工具
import portraitSystem from "../views/protrait/router" //画像系统
import intelligentDecision from "../views/decision/router"//智能决策
import dataCenter from "../views/datacenter/router"//数据管理
import businessAnalysis from "../views/analysis/router"//经营分析

Vue.use(VueRouter)

const routes = [
  ...home,
  ...analysisTool,
  ...portraitSystem,
  ...intelligentDecision,
  ...dataCenter,
  ...businessAnalysis,
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
})

export default router
