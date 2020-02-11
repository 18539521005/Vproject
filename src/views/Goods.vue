<template>
  <div>
    <div class="goods">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="" alt />
          </div>
          <div class="swiper-slide">
            <img src="" alt />
          </div>
          <div class="swiper-slide">
            <img src="" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="list">
        <div>
          <h3>瑞幸咖啡</h3>
          <p>系列周边</p>
        </div>
        <div>
          <h3>小鹿茶</h3>
          <p>系列周边</p>
        </div>
        <div class="orange">
          <h3>瑞幸坚果</h3>
          <p>全新上市</p>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [热销好货]
            <span>品质好货 口碑推荐</span>
          </p>
        </div>
        <router-link tag="li" to="" class="shops" v-for="(item,index) in list.supports" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </router-link>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [心选年货]
            <span>用心之选 传递心意</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.xinxuan" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [经典保温杯] 系列
            <span>陶瓷涂层内壁 保温保冷</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.jingdian" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            瑞幸精品挂耳咖啡
            <span>100%阿拉比卡咖啡豆</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.guaer" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [鼠年新品] 系列
            <span>心有所属 传递心意</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.shunian" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [冬日温暖] 系列
            <span>浓情节日温暖气息</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.dongri" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [luckin cup] 系列
            <span>买即赠萌趣杯塞 限量赠送</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.luckinCup" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            luckin coffee / STTOKE
            <span>水性陶瓷内壁 保温保冷</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.luckinCoffee" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            冯唐 [ 撩 ] 系列
            <span>[ 国潮 ] 从态度开始</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.fengtang" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [ 探月50周年 ] 系列
            <span>不断探索 推陈出新</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.tanyue" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [ luckin pop friends ] 系列
            <span>幸运好礼 尽在luckin</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.luckinPop" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [ 坚果礼盒 ] 系列
            <span>颗颗饱满 其味无穷</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.jianguo" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist">
        <div class="hot-title">
          <p>
            [ luckin Nuts ] 瑞幸坚果
            <span>其味无穷 停不下来</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.luckinNuts" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>

      <div class="shoplist" style="padding-bottom:1.3rem">
        <div class="hot-title">
          <p>
            luckin幸运小食
            <span>健康小食 轻松一刻</span>
          </p>
        </div>
        <div class="shops" v-for="(item,index) in list.luckinLucky" :key="index">
          <div class="shops-list">
            <img src="" alt />
            <p class="shop-title">{{item.title}}</p>
            <p class="shop-price">
              {{item.price}}
              <span class="shop-priced">{{item.priced}}</span>
            </p>
            <p class="shop-num">{{item.shoumai}}</p>
            <div class="shopcar el-icon-shopping-cart-2"></div>
          </div>
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import FooterNav from "@/componentes/common/footerNav";

export default {
  name: "",
  data() {
    return {
      list: []
    };
  },
  components: {
    FooterNav
  },
  created() {
    this.$axios.get("/api/getgoodsList").then(res => {
      console.log(res.data);
      this.list = res.data;
    });
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
.goods {
  padding-bottom .5rem
}

.swiper-container >>> .swiper-pagination-bullet-active {
  background-color: #848482;
}

.swiper-container {
  margin-top: 0.5rem;
  width: 92%;
  height: 3.5rem;
  border-radius: 5px;
}

.swiper-container img {
  width: 100%;
  height: 100%;
}

.list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 0.3rem;

  div {
    border: 2px solid #f0f0f0;
    border-radius: 2px;
    width: 2rem;
    line-height: 0.4rem;
    text-align: center;
    margin: 0.5rem 0;

    h3 {
      font-weight: bold;
      font-size: 0.3rem;
    }

    p {
      font-size: 0.2rem;
      color: #AEAEAE;
    }
  }

  .orange {
    border: 2px solid #F9E8DF;

    p {
      color: #DE995B;
    }
  }
}

.shoplist {
  background-color: #F3F3F3;
  float: left;
}

.hot-title {
  margin-left: 0.4rem;
  font-size: 0.3rem;
  padding-top: 0.4rem;

  p {
    letter-spacing: 0.1rem;
    font-weight: bold;

    span {
      letter-spacing: 0;
      font-size: 0.1rem;
      font-weight: normal;
      color: #868686;
    }
  }
}

.shops {
  .shops-list {
    position: relative;
    width: 47%;
    height: 3.5rem;
    margin: 0.2rem 0 0 0.15rem;
    background-color: #ffffff;
    float: left;

    img {
      width: 100%;
      height: 2rem;
    }

    p {
      padding-left: 0.2rem;
      line-height: 0.4rem;
    }

    .shop-price {
      font-weight: bold;
      font-size: 0.3rem;

      .shop-priced {
        text-decoration: line-through;
        font-size: 0.1rem;
        font-weight: normal;
        color: #BEBEBE;
      }
    }

    .shop-num {
      color: #BEBEBE;
    }
  }
}
li{
  list-style none
}
.shopcar {
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 15%;
  right: 0.2rem;
  font-size: 0.3rem;
  background-color: #F05000;
}
</style>
