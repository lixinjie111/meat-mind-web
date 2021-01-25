import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import '../src/assets/viewui-theme/index.less'
import echarts from 'echarts'
import "../src/static/icon/iconfont.css"
import "../src/assets/scss/main.scss"

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ViewUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
