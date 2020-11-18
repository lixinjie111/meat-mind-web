import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Decision from '../views/decision.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/decision',
    name: 'Decision',
    component: Decision
  }
]

const router = new VueRouter({
  routes
})

export default router
