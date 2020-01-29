<template>
    <div class="footerNav">
         <ul>
            <router-link to="/Index" tag="li"><i class="iconfont icon-zhuye"></i><p>首页</p></router-link>
            <router-link to="/Menu" tag="li"><i class="iconfont icon-kafei"></i><p>菜单</p></router-link>
            <router-link to="/Goods" tag="li"><i class="iconfont icon-shangpin"></i><p>潮品</p></router-link>
            <router-link to="/ShopCar" tag="li"><i class="iconfont icon-icon22fuzhi"></i><p>购物车</p></router-link>
            <router-link to="/My" tag="li"><i class="iconfont icon-wode"></i><p>我的</p></router-link>
        </ul>
    </div>
</template>


<script type="text/ecmascript-6">
export default {
    name: "",
    data() {
<<<<<<< HEAD
        return{

        }
    },
    components: {
    },
=======
        return {}
    },
    components: {},
>>>>>>> fan
    methods: {}
}
</script>


<style lang="stylus" scoped>
.footerNav {
    position fixed
    bottom 0
    left 0
    width 100%
    height 1rem
    line-height .6rem
    background #fff
<<<<<<< HEAD
=======
    z-index 100
>>>>>>> fan
    ul {
        display flex
        justify-content space-around
        li {
            text-align center
            position relative
            p {
                width .666667rem
                position absolute
                top 20px
                left -7px
            }
        }
    }
}
.router-link-active{
    color #333999
}
</style>