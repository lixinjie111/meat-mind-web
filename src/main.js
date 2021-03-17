import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import '../src/assets/viewui-theme/index.less'
import echarts from 'echarts'
// import * as echarts from "echarts"
import "../src/static/icon/iconfont.css"
import "../src/assets/scss/main.scss"
import lxjData from "./utils/lxjData.js"
import fjData from "./utils/fjData.js"
import zjjData from "./utils/zjjData.js"
import linData from "./utils/linData.js"
import ljEData from "./utils/ljData.js"
import './utils/flexible'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$lxjData = lxjData;
Vue.prototype.$fjData = fjData;
Vue.prototype.$zjjData = zjjData;
Vue.prototype.$linData = linData;
Vue.prototype.$ljEData = ljEData;
Vue.use(ViewUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
