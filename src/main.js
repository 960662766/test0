// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import 'babel-polyfill'
import IView from 'iview'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import 'font-awesome/css/font-awesome.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import store from './store'
import router from './router'
import '@/fitler/fitler'
import '@/assets/css/index.scss';
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap,{
    ak:'8mq9WvV8VsO1U86wTycjGHxaGesWFZtn'
})
Vue.use(IView);
Vue.use(VueAwesomeSwiper)
import http from './http'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

Vue.prototype.$http = http
Vue.prototype.$Message.config({
    top: 50,

    duration: 3
});
Vue.config.productionTip = false
// require('./http/mock/mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render:h => h(App)
})
