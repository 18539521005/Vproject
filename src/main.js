import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import '@/assets/js/font-size.js'
import '@/assets/css/reset.css'
=======
import '@/assets/js/font-size.js'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont.css'
import '@/assets/css/iconfont1.css'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.prototype.$axios = axios

>>>>>>> dingyan

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
=======
//重置字体大小.回复默认
import '@/assets/js/font-size.js'
import '@/assets/css/reset.css'
//引入字体文件
import '@/assets/css/iconfont1.css'
>>>>>>> wangziwen

=======
import '@/assets/js/font-size.js'
import '@/assets/css/reset.css'
import '@/assets/css/iconfont1.css'
import '../mock/mock.js'
import axios from 'axios'
Vue.prototype.$axios = axios
>>>>>>> fan
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
