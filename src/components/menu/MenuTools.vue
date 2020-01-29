<template>
  <div class="menu-tools">
    <div class="location">
      <i class="el-icon-location-outline"></i>
      <span>高新万科店</span>
      <span class="km">距您1.8km</span>
    </div>
    <div class="dispatching">
      <span>自提/外送</span>
    </div>
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
.menu-tools {
  position absolute
  top 3.1rem
  left .186667rem
  width: 95%;
  height: 1rem
  background-color: #fff;
  border-radius: 0.13rem;

  .location {
    float: left;
    padding-left: 0.2rem;
    line-height: 1rem;
    overflow hidden

    i {
      font-size: 0.3rem;
    }

    span:first-of-type {
      position: absolute;
      bottom: 0.18rem;
      margin-left: 0.2rem;
      font-size: 0.266667rem;
    }

    span:last-of-type {
      position: absolute;
      top: 0.15rem;
      margin-left: 0.2rem;
      font-size: 0.213333rem;
    }
  }

  .dispatching {
    float: right;

    span {
      text-align: center;
      margin-right: 0.2rem;
      padding: 0.18rem;
      line-height: 1rem;
      background-color: #333999;
      color: #fff;
      border-radius: 50% rem;
    }
  }
}
</style>
