// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// element ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// mint ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// vant
import Vant from 'vant';
import 'vant/lib/index.css';

import router from './router'

Vue.config.productionTip = false

import Loading from "@/components/loading"
Vue.use(Loading);
Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(Vant);

// 全局axios
import axios from 'axios';
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
