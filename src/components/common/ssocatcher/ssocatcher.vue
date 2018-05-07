<template>
  <div class="hello" @click="validationTicket" :class="className">{{msg}}</div>
</template>

<script type="text/ecmascript-6">
  import util from 'common/js/util';
  import bus from 'common/js/bus.js';
  // import axios from 'axios';
  // import Vue from 'vue';
  // const cpsdcSso = require('cpsdc_sso');
  // Vue.prototype.$http = axios;
  export default {
    data() {
      return {
        urlParams: (() => {
            let urlParams = util.urlParse();
            return urlParams;
          }
        )(),
        ssoService: util.getCookie('ssoService'),
        msg: '跳转中啊。。。。。',
        className: ''
      };
    },
    methods: {
      validationTicket() {
        let url = '/api/validatest/';
        this.$http.get('/run' + url,
          {
            // method: 'GET',
            // mode: 'no-cors',
            // headers: {
            //   'Access-Control-Allow-Origin': '*',
            //   'Content-Type': 'application/json'
            // },
            // withCredentials: true,
            // credentials: 'same-origin'
            headers: {
              url: process.env.URL_CAS_VALIDATE_PREFIX,
              service: encodeURIComponent(decodeURIComponent(this.ssoService)),
              ticket: this.urlParams.ticket
            }
          }
        ).then(function(resp) {
          this.msg = resp.data.msg;
            let userObj = resp.data;
            console.log(userObj);
            if (util.isBlank(userObj) || util.isBlank(userObj.user_name)) {
              this.msg = 'ticket可能已经失效，请重新登录或联系管理员.....';
              this.className = 'error-msg';
            } else {
              util.setCookie('userId', userObj.user_name);
              util.setCookieExpires();
              this.$router.push(this.urlParams.backRouter);
              console.log('emit');
              bus.$emit('ssofilter-info', userObj.user_name);
            }
          }
        ).catch((error) => {
            console.log(error);
            this.msg = 'ticket验证失败，请联系管理员.....';
            this.className = 'error-msg';
          }
        );
      },
      ready() {
        if (!util.isBlank(this.urlParams.ticket) && !util.isBlank(this.ssoService)) {
          console.log('ssofilter catcher: validate ticket....');
          this.validationTicket();
        } else {
          this.$router.push('/');
          console.log('ssofilter catcher: router to /....');
        }
      }
    },
    mounted() {
      this.ready();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/icon.styl";

  .error-msg
    color: red
    font-weight bold

</style>
