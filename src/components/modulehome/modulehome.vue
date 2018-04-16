<template>
  <div>
    <mheader></mheader>
    <router-view></router-view>
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

<style scoped>

</style>
