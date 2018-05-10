<template>
  <div class="floor">
    <div class="floor-win">
      <img :src="urls.p0" alt="">
    </div>
    <div class="floor-goods">
      <div class="goods-first-line">
        <div class="goods"><img v-lazy="urls.p1" alt="" ></div>
        <div class="goods"><img v-lazy="urls.p2" alt=""></div>
        <div class="goods"><img v-lazy="urls.p3" alt=""></div>
        <div class="goods"><img v-lazy="urls.p4" alt=""></div>
      </div>
      <div class="goods-second-line">
        <div class="goods"><img v-lazy="urls.p5" alt=""></div>
        <div class="goods"><img v-lazy="urls.p6" alt=""></div>
        <div class="goods"><img v-lazy="urls.p7" alt=""></div>
        <div class="goods"><img v-lazy="urls.p8" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'floor',
    props: {
      urls: {
        type: Object
      }
    },
    data: function () {
      return {
      };
    },
    methods: {
      ready: function () {
      }
    },
    mounted() {
      this.ready();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .floor
    clear both
    font-size 0px
    width 90%
    height 485px
    margin auto
    text-align left
    .floor-win
      width 20%
      display inline-block
      height: 100%
      padding 1px
      img
        width: 100%
        height: 100%
        overflow:hidden
    .floor-goods
      width 79%
      display inline-block
      .goods-first-line
        .goods
          width 24%
          display inline-block
          padding: 1px;
          height: 241.5px;
          img
            width 100%
            height 100%
      .goods-second-line
        .goods
          width 24%
          display inline-block
          padding: 1px;
          height: 241.5px;
          img
            width 100%
            height 100%

</style>
