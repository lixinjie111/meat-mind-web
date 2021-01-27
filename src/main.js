import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import echarts from 'echarts'
import lxjData from "./utils/lxjData.js";
import fjData from "./utils/fjData.js";

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.prototype.$lxjData = lxjData;
Vue.prototype.$fjData = fjData;
Vue.use(ViewUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')