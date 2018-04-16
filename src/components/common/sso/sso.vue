<template>
  <div>
    <div>redirecting to sso......</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import util from 'common/js/util';
  export default {
    props: ['redirect', 'backPath'],
    data() {
      return {
        urlParam: (() => {
            let urlParam = util.urlParse();
            return urlParam;
          }
        )()
      };
    },
    methods: {
      ready() {
        // debugger;
        console.log(this.urlParam);
        window.location.href = process.env.URL_CAS_LOGIN_PREFIX + '?service=' +
          encodeURIComponent(util.getHostPath() + process.env.SSO_CATCHER + '?backRouter=' + this.urlParam.redirect);
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
