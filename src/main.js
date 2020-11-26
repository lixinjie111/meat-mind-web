import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import echarts from 'echarts'
import "../src/static/icon/iconfont.css"

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ViewUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
