<template>
  <div class="hello">
    <div class="hw-content">
      <h1 class="h1-disp my-blue">{{ env_context }}</h1>
      <h1 class="h1-disp h1-font">{{ env }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ tips }}</h1>
      <router-link :to="{ name: 'test', params: { user: 123 }}">test</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import mheader from 'components/common/header/header';
import mfooter from 'components/common/footer/footer';

// const config = require('../../../config');
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      msg: 'This is a Vue.js skeleton.',
      env_context: 'The building environment is ',
      env: process.env.NODE_ENV + '.',
      tips: 'You can design something here.',
      // config: config,
      url: 'http%3A%2F%2Flocalhost%3A8080%2Fstatic%2Fproxy.html'
    };
  },
  components: {
    mheader,
    mfooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/icon.styl"

  fontWightBold = bold
  .font-cus
    font-weight fontWightBold
  .myhead
    @extend .font-cus
    color black
  .h1-disp
    display inline-block
  .h1-font
    font-weight fontWightBold
    color red
  .hw-content
    height 100%
    background-color white
</style>
