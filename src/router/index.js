import Vue from 'vue';
import Router from 'vue-router';
import ConfigRouter from './config.js';
import axios from '@/http';
import store from '@/store'
import config from '@/config'
import util from '@/utils'

Vue.use(Router)
const RouterConfig = {
  mode: 'hash', //history hash
  routes: ConfigRouter,
  // base:process.env.NODE_ENV !== "development" ? '' : '/weChat'
}
const router = new Router(RouterConfig)

router.beforeEach((to,from,next) => { // 跳转前
  next();
})


export default router


