// 首页的路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/Goods'
import FooterNav from '@/componentes/common/footerNav'

Vue.use(VueRouter)

export default {
    path: '/Goods', 
    component: Goods,
    children:[
        {
            path: 'footernav',
            component: FooterNav
        }
    ]
}