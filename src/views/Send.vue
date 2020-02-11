<template>
  <div class="box">
    <div>
      <router-link to="/index" tag="span">返回</router-link>送他咖啡
    </div>
    <hr />
    <ul>
      <li>免费送咖啡
          <span>马上送</span>
          <img src="" alt="">
      </li>
      <li>咖啡红包
          <span>发红包</span>
          <img src="" alt="">
      </li>
      <li>礼品卡（商品劵）
          <span>一键定制</span>
          <img src="" alt="">
      </li>
      <li>礼品卡（现金）
          <span>一键定制</span>
          <img src="" alt="">
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.box {
  font-size: 18px;
  background-color: #ddd;
}

.box div {
  width: 100%;
  height: 30px;
  line-height: 30px;
}

span {
  display: inline-block;
  margin-right: 120px;
}

.box ul li {
  width: 90%;
  height: 130px
  border: 1px solid #fff;
  background-color #fff
  margin 5px auto
  border-radius 5px
  position relative
}
.box ul li img{
    height 100px
    float right
    margin 15px 
    border-radius 50%
}
.box ul li span{
    display inline-block
    position absolute
    top 80px
    left 20px
    padding 2px 8px
    border: 1px solid #000;
    font-size 15px
    border-radius 20px
    background-color #333999
    color #fff
    border none 
}
</style>
