<template>
  <div class="box">
    <img src="" alt />
    <div class="name">
      <h1>拿铁</h1>
      <p>Latte</p>
    </div>
    <div class="sugar">
      <div>
        <p>温度</p>
        <ul>
          <li class="active" >冰</li>
          <li>热</li>
        </ul>
      </div>
      <div>
        <p>糖</p>
        <ul>
          <li class="active">无糖</li>
          <li>半份糖</li>
          <li>单份糖</li>
        </ul>
      </div>
    </div>
    <div class="star">
      <h1>大咖说</h1>
      <div>
        <h2>
          汤唯
          <span>2018-04-02 10:06</span>
        </h2>
        <p>新鲜的咖啡，入口明快，回味微甘。</p>
      </div>
    </div>
    <div class="details">
      <h1>商品详情</h1>
      <p>经典意式奶卡。浓缩咖啡与香醇牛奶融合，口感圆润</p>
      <p>主要原材料：浓缩咖啡，牛奶</p>
      <p>图片仅供参考，请以实物为准。建议送达后尽快饮用。</p>
    </div>
    <nav>
      <div>
        <span>￥23</span>
        <div>
          <span>-</span>1
          <span>+</span>
        </div>
      </div>
      <ul>
        <li>充2送1</li>
        <li>立即购买</li>
        <li class="active">加入购物车</li>
      </ul>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "",
  data() {
    return {
      bbb: 0
    };
  },
  components: {},
  methods: {
    aaa(index) {
      this.bbb = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
.box {
  background-color: #ddd;
  padding-bottom: 100px;
}

.box > div {
  border: 1px solid #fff;
  border-radius: 5px;
  margin: 10px 5%;
  background-color: #fff;
}

img {
  width: 100%;
}

.name {
  width: 90%;
  height: 60px;
}

.sugar {
  height: 100px;
  width: 90%;
}

.sugar div {
  height: 50px;
  position: relative;
}

.sugar p {
  position: absolute;
  left: 5%;
  top: 20px;
}

.sugar ul {
  position: absolute;
  top: 20px;
  left: 20%;

  li {
    float: left;
    padding: 0 10px;
    margin: 0 3px;
    border: 1px solid #000;
    border-radius: 10px;
  }
}

.active {
  border: 1px solid #333999;
  background-color: #333999;
  color #fff
}

.star {
  height: 100px;

  h1 {
    margin: 0 0 8px 3%;
  }

  div {
    margin-left: 10%;
  }

  h2 span {
    display: inline-block;
    float: right;
    margin-right: 3%;
  }
}

.details {
  height: 100px;

  h1 {
    margin: 0 0 8px 3%;
  }

  p {
    margin: 0 0 3px 3%;
  }
}

nav {
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 0 5%;

  div {
    height: 40px;
    line-height: 40px;
    position: relative;

    div {
      position: absolute;
      right: 10%;
      top: 0;
    }
  }

  ul {
    height: 60px;

    li {
      float: left;
      width: 25%;
      height: 20px;
      margin: 20px 10px;
      border: 1px solid #000;
      text-align: center;
      border-radius: 10px;
    }
  }
}
</style>
