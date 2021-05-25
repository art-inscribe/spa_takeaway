// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button } from 'mint-ui'
Vue.config.productionTip = false

import router from './router'

import store from './store/index'

import './mock/mockServer' //加载 mockServer 即可
// import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueLazyLoad)
//注册全局组件标签

Vue.component(Button.name, Button) //<mt-button></mt-button>可以全局使用了

/* eslint-disable no-new */

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')