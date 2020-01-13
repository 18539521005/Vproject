<template>
    <div class="myorder">
      <header>
        <router-link to="/My" class="header-left"><span>〈</span></router-link><span class="header-right">我的订单</span>
      </header>
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
.myorder {
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
</style>
