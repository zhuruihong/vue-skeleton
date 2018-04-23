<template>
  <div>
    <div @click="getredirct">redirecting to sso......</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import util from 'common/js/util';
  export default {
    // props: ['redirect', 'backPath'],
    data() {
      return {
        // urlParams: (() => {
        //     let urlParams = util.urlParse();
        //     return urlParams;
        //   }
        // )()
      };
    },
    methods: {
      getredirct() {
        console.log(this.$route.params);
      },
      ready() {
        let ssoService = encodeURIComponent(util.getSsoService('backRouter', this.$route.params.redirect, process.env.SSO_CATCHER));
        util.setCookie('ssoService', ssoService);
        window.location.href = process.env.URL_CAS_LOGIN_PREFIX + '?service=' + ssoService;
        console.log(window.location.href);
      }
    },
    mounted() {
      this.ready();
    },
    components: {
    }
  };
</script>

<style scoped>
</style>
