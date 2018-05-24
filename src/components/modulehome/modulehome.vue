<template>
  <div>
    <mheader></mheader>
    <transition name="slide-right">
      <router-view class="child-view"></router-view>
    </transition>
    <mfooter></mfooter>
  </div>
</template>

<script>
  import mheader from 'components/common/header/header';
  import mfooter from 'components/common/footer/footer';
  export default {
    name: 'modulehome',
    components: {
      mheader,
      mfooter
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
