<template>
  <div class="box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/img/f1.png" alt />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/f2.jpeg" alt />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/f3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/f4.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/f5.jpg" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="goods">
      <router-link to="/menu" tag="span">
        <img src="@/assets/img/f1.png" alt />
      </router-link>
      <router-link to="/wallet" tag="div">
        <img src="@/assets/img/f2.jpeg" alt />
      </router-link>
    </div>
    <ul class="discounts">
      <router-link to="/rewards" tag="li">
        <img src="@/assets/img/f7.jpg" alt />
      </router-link>
      <router-link to="/send" tag="li">
        <img src="@/assets/img/f4.jpg" alt />
      </router-link>
      <router-link to="/Goods" tag="li">
        <img src="@/assets/img/f3.jpg" alt />
      </router-link>
    </ul>
    <p>为你推荐</p>
    <div class="recommend">
      <ul>
        <router-link to="/details" tag="li">
          <img src="@/assets/img/f7.jpg" alt />
        </router-link>
        <router-link to="/details" tag="li">
          <img src="@/assets/img/f4.jpg" alt />
        </router-link>
        <router-link to="/details" tag="li">
          <img src="@/assets/img/f7.jpg" alt />
        </router-link>
      </ul>
    </div>
    <p>新鲜事</p>
    <div>
      <div class="swiper-container" id="aff">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/img/f7.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/f3.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/f4.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/f1.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/img/f5.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <p>瑞幸潮品</p>
    <hr>
    <div class="list">
      <ul>
        <router-link v-for="(item,index) in list.sylb" :key="index" to="/details" tag="li">
          <p>{{item.name}}</p>
          <p>{{item.price}}</p>
        </router-link>
      </ul>
    </div>
    <br>
    <br>
    <br>
    <footer-nav></footer-nav>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterNav from "@/components/common/footerNav";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "",
  data() {
    return {
      list: [],
    };
  },
  components: {
    FooterNav
  },
  methods: {
    getData() {
      this.$axios.get("/api/getSeller").then(res => {
        console.log(res)
        this.list = res.data;
        console.log(this.list)
      });
    }
  },
  created() {
    this.getData();
  },
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

.swiper-container >>> .swiper-pagination-bullet-active {
  background-color: #f00;
}

.swiper-container {
  width: 100%;
  height: 250px;
}

.swiper-container img {
  width: 100%;
  height: 100%;
}

.goods {
  width: 100%;
  height: 100px;
  margin: 10px 0 5px 0;

  span {
    width: 66%;
    height: 100%;
    float: left;
  }

  img {
    width: 100%;
    height: 100%;
  }

  div {
    width: 34%;
    height: 100%;
    float: left;
  }
}

.discounts {
  list-style: none;
  height: 100px;
  width: 100%;

  li {
    width: 33.333%;
    float: left;
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.recommend li {
  width: 33%;
  float: left;

  img {
    width: 100%;
    height: 2.666667rem;
  }
}
#aff{
  height 150px
}
.list{
  width 100%
  height  400px
  li{
    width 40%
    height 80px
    float left
    border 1px solid #000
    margin 10px 5%
  }
}
</style>
