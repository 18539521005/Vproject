import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页
import Index from './indexRouter.js'
import Menu from './menuRouter.js'
import Goods from './goodsRouter.js'
import Send from './sendRouter.js'
import Rewards from './rewardsRouter.js'
import Wallet from './walletRouter.js'
import ShopCar from './shopcarRouter.js'
// 我的
import My from './myRouter.js'
// 登陆
import Sign from '@/views/Sign'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Index'},
  Index,
  Menu,
  Goods,
  Send,
  Rewards,
  Wallet,
  ShopCar,
  My,
  {
    path:'/sign',
    component:Sign
  },

]

const router = new VueRouter({
  mode: 'history',

  routes
})

export default router
