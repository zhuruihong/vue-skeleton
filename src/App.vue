<template>
  <div id="app">
    <transition name="slide-right">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data: function() {
      return {
      };
    },
    created: function () {
    },
    components: {
    },
    mounted() {
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
