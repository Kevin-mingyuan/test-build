// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"

Vue.config.productionTip = false

import animated from 'animate.css' // npm install animate.css --save安装，再引入
Vue.use(animated)

import MintUI from 'mint-ui'; //引入 mint-ui
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import Vant from 'vant';  //引入vant
import 'vant/lib/index.css';
Vue.use(Vant);

import VueAwesomeSwiper from 'vue-awesome-swiper'  //引入swiper            
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import axios from "axios";
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
