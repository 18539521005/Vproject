<template>
  <div class="menu-food">
    <div class="menus">
      <ul>
        <li
          v-for="(item,index) in menus"
          :key="index"
          @click="toggle(index)"
          :class="curIndex === index ? 'active' : ''"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="coffe" ref="coffe">
      <ul>
        <li v-for="(item,index) in menus" :key="index" ref="coffetop">
          <h3>{{item.name}}</h3>
          <ul class="content">
            <li v-for="(newfood,index) in item.foods" :key="index">
              <img src="@/assets/img/coffe.png" alt />
              <div class="des">
                <p>{{newfood.name}}</p>
                <p>￥{{newfood.price}}</p>
              </div>
              <i class="el-icon-circle-plus"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
export default {
  name: "",
  data() {
    return {
      menus: [],
      foodmenus: [],
      curIndex: 0,
      coffeHeight: []
    };
  },
  components: {},
  methods: {
    toggle(index) {
      this.curIndex = index;
      // console.log(this.curIndex)
      this.coffeScroll.off("scroll");
      this.coffeScroll.scrollToElement(this.$refs.coffetop[index], 500);
      setTimeout(() => {
        this.coffeScroll.on("scroll", this.listenScroll);
      }, 500);
    },
    getCurIndex(){
      let index;
      let flag = true;
      for (let i = 0; i < this.coffeHeight.length - 1; i++) {
        if (
          this.posY >= this.coffeHeight[i] &&
          this.posY < this.coffeHeight[i + 1]
        ) {
          flag = false;
          index = i;
          break;
        }
      }
      if (flag) {
        index = this.coffeHeight.length - 1;
      }
      this.curIndex = index;
    },
    listenScroll(pos) {
      this.posY = Math.abs(pos.y);
      // console.log(this.posY)
      //获取滚动位置的索引
      this.getCurIndex()
    },

    getcoffedata(){
      this.$axios
      .get("/api/getSeller")
      .then(res => {
        this.menus = res.data
        this.foodmenus = res.data
        console.log(res.data)
        this.$nextTick(() => {
          //获取coffe元素距离父容器的偏移值
          this.coffeHeight = this.$refs.coffetop.map(item => {
            return item.offsetTop;
          });
          // console.log(this.$refs.coffetop);
          // console.log(this.coffeHeight);
          this.coffeScroll = new BScroll(this.$refs.coffe, {
            probeType: 3
          });
          //监听商品列表的滚动
          this.coffeScroll.on("scroll", this.listenScroll);
        });
      })
      .catch(err => {
        console.log(err);
      });
    },
  },
  created() {
    this.getcoffedata()
  }
}
</script>

<style lang="stylus" scoped>
.menu-food {
  display: flex
  justify-content: space-between
  position: absolute
  top: 4.2rem
  bottom 5rem
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 0.026667rem solid #000;

  .menus {
    width: 24%;
    margin-left: 0.053333rem
    background-color #e0e0e0
    li {
      margin: .16rem .16rem;
      padding: .106667rem;
      text-align: center;
    }

    li.active {
      background-color: #fff;
      border-radius: 0.13rem;
      font-weight: 600;
    }
  }

  .coffe {
    width: 70%;

    h3 {
      font-size: 0.3rem;
      color: #000;
    }

    .content {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.3rem;

        img {
          height 1.013333rem
          width 1.013333rem
          border-radius: 0.13rem
        }

        .des {
          p {
            vertical-align: middle;
          }

          p:last-of-type {
            color: #ec5300;
          }
        }

        i {
          margin-right: 0.266667rem;
          font-size: 0.373333rem;
          color: #6D86C4;
        }
      }
    }
  }
}
</style>
