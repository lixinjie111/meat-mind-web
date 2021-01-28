import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import '../src/assets/viewui-theme/index.less'
import echarts from 'echarts'
import "../src/static/icon/iconfont.css"
import "../src/assets/scss/main.scss"
import lxjData from "./utils/lxjData.js"
import fjData from "./utils/fjData.js"

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$lxjData = lxjData;
Vue.prototype.$fjData = fjData;
Vue.use(ViewUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
