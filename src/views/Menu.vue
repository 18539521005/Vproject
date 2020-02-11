<template>
  <div class="menu">
    <header>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/img/zp1.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/zp3.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/zp5.jpg" alt />
          </div>
        </div>
      </div>
    </header>
    <menu-tools></menu-tools>
    <menu-food></menu-food>
    <footer-nav></footer-nav>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import MenuTools from "@/components/menu/MenuTools";
import MenuFood from "@/components/menu/MenuFood";
import FooterNav from '@/components/common/footerNav'

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    MenuTools,
    MenuFood,
    FooterNav
  },
  methods: {},
  mounted() {
    let mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      pagination: {
        loop: true
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
.menu {
  background-color #e0e0e0
  height 100%
  overflow hidden
  header {
    background-color: #333999
    padding-top .38rem
    height 4rem
    .swiper-container {
      width: 95%
      height: 2.4rem
      margin: 0.1rem auto
      border-radius: .13rem

      .swiper-slide {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
