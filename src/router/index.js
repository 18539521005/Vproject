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
// 个人资料
import Myself from '@/views/Myself'
// 我的订单
import Myorder from '@/views/Myorder'
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
    component:Sign,
    meta:{title:'登陆'}
  },
  {
    path:'/myself',
    component:Myself,
    meta:{title:'个人资料'}
  },
  {
    path:'/myorder',
    component:Myorder,
    meta:{title:'我的订单',
          requiresAuth:true
          }
  },


]

const router = new VueRouter({
  mode: 'history',

  routes
})
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    if(to.matched.some(record => record.meta.requiresAuth)){
      if(localStorage.getItem("token")){
        next()
      }else{
        next("/Sign")
      }
    }else{
      next()
    }
})

export default router
