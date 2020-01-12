
<template>

  <div class="text">

   <router-link  to="/index"><</router-link> 优惠联盟

    <hr>

    <!-- swiper轮播图 开始-->
    <div class="swiper-container">

      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/img/lm1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/lm2.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/lm3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/lm4.jpg" alt />
        </div>
      </div>

       <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>

    <!-- swiper轮播图 结束
        <v-nav></v-nav> -->
        <hr>
        <ul class="tab">
            <router-link to="/Rewards/jinroug">金融</router-link>
            <router-link to="/Rewards/hangkong">航空</router-link>
            <router-link to="/Rewards/tongxun">通讯</router-link>
            <router-link to="/Rewards/wenyu">文娱</router-link>
        </ul>
        <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">

//1. 引入swiper及swiper的css
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
     
  },
  methods: {},

  // 2.swiper 必须写在 mounted生命函数中
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true
    });
  }
};
</script>

<style lang="stylus" scoped>


.swiper-container {
    width 100%
    height 10rem
}
.swiper-container img {
    width 100%
    height 100%

}

.tab router-link{
    float left
    margin-right 3rem
    list-style none
}
</style>
