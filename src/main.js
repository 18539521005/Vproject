import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
//重置字体大小.回复默认
import '@/assets/js/font-size.js'
import '@/assets/css/reset.css'
//引入字体文件
import '@/assets/css/iconfont1.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
