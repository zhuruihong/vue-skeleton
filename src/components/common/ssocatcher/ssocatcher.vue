<template>
  <div class="hello">跳转中啊。。。。。</div>
</template>

<script type="text/ecmascript-6">
  import util from 'common/js/util';
  import bus from 'common/js/bus.js';
  // const cpsdcSso = require('cpsdc_sso');

  export default {
    data() {
      return {
        urlParams: (() => {
            let urlParams = util.urlParse();
            return urlParams;
          }
        )()
      };
    },
    methods: {
      ready() {
        this.router.push(this.urlParams.redirect);
        bus.$emit('sso-info', this.urlParams.ticket);
      }
    },
    mounted() {
      this.ready();
    }
  };
</script>

<style scoped>
  @import "../../../common/stylus/icon.styl";

</style>
