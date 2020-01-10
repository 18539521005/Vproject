<template>
    <div class="my">
        <header>
            <span>立即登陆 ></span>
            <div class="title">
                <ul>
                    <li>
                        <p class="number">- 元</p>
                        <p class="font">账户余额</p>
                    </li>
                    <li>
                        <p class="number">- 张</p>
                        <p class="font">咖啡钱包</p>
                    </li>
                      <li>
                        <p class="number">- 张</p>
                        <p class="font">优惠券</p>
                    </li>
                      <li>
                        <p class="number">- 张</p>
                        <p class="font">礼品卡</p>
                    </li>
                </ul>
            </div>
        </header>
        <div class="content">
            <div class="myself">
                <ul>
                    <li><i class="iconfont icon-text_icon"></i>我的订单</li>
                    <li><i class="iconfont icon-fapiao"></i>发票管理</li>
                    <li><i class="iconfont icon-liwu"></i>兑换优惠</li>
                    <li><i class="iconfont icon-qiyekehu-"></i>企业账户</li>
                    <li><i class="iconfont icon-kefu"></i>我的客服</li>
                </ul>
            </div>
            <a><img src="../assets/img/My1.png" alt=""></a>
        </div>
      
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "",
    data() {
        return {}
    },
    components: {},
    methods: {}
}
</script>

<style lang="stylus" scoped>
.my{
    height 100%
    background #F5F5F5
}
header {
    position relative
    background #333999
    width 100%
    height 2.5rem
    color #fff
    padding-top 1.1rem
    span {
        font-size 0.33rem
        margin 0 0 1rem 1rem 
    }
    .title {
        position absolute
        width 95%
        background #fff
        left 2.5%
        top 2rem
        border-radius 0.15rem
        height 1.2rem
        ul {
            height 100%
            display flex
            justify-content space-around
            text-align center
            li {
                padding-top 0.25rem
                .number {
                    color #91A4D2
                }
                .font {
                    color #888
                }
            }
        }
    }
}
.content {
    background #F5F5F5
    height 81%
    .myself {
        width 95%
        margin 1rem auto 0
        background #fff
        padding-left 0.3rem
        li {
            height 0.7rem
            line-height 0.7rem
            i {
                margin-right 0.3rem
            }
        }
    }
    img {
        width 95%
        margin 0.3rem
        
    }
}
</style>
