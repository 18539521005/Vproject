import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
import '@/assets/js/font-size.js'
import '@/assets/css/reset.css'

import '@/assets/css/iconfont1.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'
=======
import axios from 'axios'
import '@/assets/js/font-size.js'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont1.css'
//引入UI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> zp
Vue.prototype.$axios = axios

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
