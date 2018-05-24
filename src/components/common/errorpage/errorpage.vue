<template>
  <div class="error-page">
    非常抱歉！你来到这里说明系统出现异常，异常信息如下，请联系你的管理员！<br>
    {{ errorMsg }}
  </div>
</template>

<script>
  export default {
    name: 'errorpage',
    data: function() {
      return {
        errorMsg: this.$route.params.errors
      };
    },
    created() {
    }
  };
</script>

<style scoped>

</style>
