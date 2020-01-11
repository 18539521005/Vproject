<template>
    <div class="myself">
        <header>
            <router-link to="/My" class="header-left"><span>〈</span></router-link><span class="header-right">个人资料</span>
        </header>
        <div class="content">
             <div class="myself1">
                <ul>
                    <li>用户名<span>{{$store.state.myself[0].info.name}}</span></li>
                    <li>性别<span>{{$store.state.myself[0].info.sex}}</span></li>
                    <li>绑定手机<span>{{$store.state.myself[0].username}}</span></li>
                    <li>收货地址<span>{{$store.state.myself[0].info.adress}}</span></li>
                    <li>账户管理<span></span></li>
                </ul>
            </div>
            <button class="quit" @click="quit">退出登陆</button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
export default {
    name: "",
    data() {
        return {
            infolist:{}
        }
    },
    components: {},
    computed:{
        ...mapState(['myself']),
    },
    methods: {
        quit(){
            localStorage.removeItem("token");
            this.$router.replace('/sign');
            alert('quit')
        },
    },
    created(){
        console.log(this.$store.state.myself)
    }
}
</script>

<style lang="stylus" scoped>
.myself {
    height 100%
    background #eee
    header {
        height 0.6rem
        line-height 0.6rem
        font-size 0.3rem
        font-weight 600
        .header-left {
            margin 0 35% 0 5%
        }
    }
}
.content {
    background #F5F5F5
    height 81%
    .myself1 {
        width 95%
        margin 1rem auto 0
        background #fff
        padding-left 0.3rem
        li {
            height 0.7rem
            line-height 0.7rem
            span {
                float right
            }
        }
    }
    img {
        width 95%
        margin 0.3rem
        
    }
    .quit {
        height 0.6rem
        line-height 0.1rem
        width 95%
        margin 0.5rem 2.5% 
        padding-left 2.5%
        background #333999
        border-color #333999
        border-radius 4px
        outline none
        font-size 14px
        font-weight 500
        color #fff
    }
}
</style>
