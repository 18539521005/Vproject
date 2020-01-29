// 首页的路由
import Vue from 'vue'
import VueRouter from 'vue-router'

import Rewards from '@/views/Rewards'

import HangKong from '@/components/tab/HangKong'
import JinRoug from '@/components/tab/JinRong'
import TongXun from '@/components/tab/TongXun'
import WenYu from '@/components/tab/WenYu'

Vue.use(VueRouter)

export default {
  //这是父组件
  path: '/rewards',
  // name: 'rewards',
  component: Rewards,
  redirect: '/Rewards/jinroug',
  //父组件下跳转的子组件
  children: [
    {
      path: 'jinroug',
      component: JinRoug
    },
    {
      path: 'hangkong',
      component: HangKong
    },
    {
      path: 'tongxun',
      component: TongXun
    },
    {
      path: 'wenyu',
      component: WenYu
    },
  ]
}



