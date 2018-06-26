<template>
  <div class="hello" ref="prefacePage">
    Hi,{{this.userId}}, {{msg}} Preface Page is {{prefacePage}}
    <button @click="popAMess">X</button>
    <button @click="goto1">goto1</button>
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
    methods: {
      popAMess: function () {
        console.log('pop a message.');
      },
      goto1: function () {
        this.$router.push({name: 'example1'});
      }
    },
    created() {
      console.log('I am example2.');
      console.log(this.$route);
      bus.$on('ssofilter-info', e => {
        console.log('example2 on run');
        this.userId = e;
      });
    }
  };
</script>

<style scoped>

</style>
