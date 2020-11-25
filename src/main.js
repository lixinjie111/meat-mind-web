import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ViewUI)
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
