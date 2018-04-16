<template>
    <div class="hello">name = {{username}}</div>
</template>

<script type="text/ecmascript-6">
  import bus from 'common/js/bus';
  export default {
    data: function () {
      return {
        username: 'I am example2.'
      };
    },
    created() {
      console.log('I am example2.');
      bus.$on('sso-info', e => {
        console.log('example2 on run');
        this.username = e;
      });
    }
  };
</script>

<style scoped>

</style>
