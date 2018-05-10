<template>
  <div class="hello" ref="prefacePage">
    Hi,{{this.userId}}, {{msg}} Preface Page is {{prefacePage}}
  </div>
</template>

<script type="text/ecmascript-6">
  import bus from 'common/js/bus';
  import util from 'common/js/util';

  export default {
    props: {
    },
    data: function () {
      return {
        msg: 'I am example2.',
        userId: util.getCookie('userId'),
        prefacePage: this.$route.params.prefacePage
      };
    },
    created() {
      console.log('I am example2.');
      bus.$on('ssofilter-info', e => {
        console.log('example2 on run');
        this.userId = e;
      });
    }
  };
</script>

<style scoped>

</style>
