<template>
  <header>
    <div>
      <ul id="uLeft">
        <li>
          <a href="#">
            <i class="icon-small icon-home"></i>
            <span @click="reload">首页</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon-small icon-phone"></i>
            <span>移动端</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon-small icon-phone"></i>
            <span>移动端</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="icon-small icon-home"></i>
            <span>企业用户</span>
          </a>
        </li>
      </ul>
      <ul id="uRight">
        <li>
          <a href="#" @click="login" v-show="loginShow">请登录!</a>
          <a href="#" v-show="userShow">
            <strong><span @click="userInfo">Hi, {{userName}}</span></strong>
            &nbsp;&nbsp;&nbsp;
          </a>
          <a href="#" @click="logout" v-show="userShow">退出</a>
        </li>
        <li>
          <a href="#" @click="getTicket">会员中心</a>
        </li>
        <li>
          <a href="#">
            <i class="icon-small icon-home"></i>
            <span>购物车</span>
          </a>
        </li>
        <li>
          <a href="#">消息</a>
        </li>
        <li>
          <a href="#">更多</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import bus from 'common/js/bus.js';
  import util from 'common/js/util';

  const cpsdcSso = require('cpsdc_sso');
  export default {
    data: function() {
      return {
        proxyUrl: process.env.PROXY_URL,
        userName: '',
        loginShow: true,
        userShow: false
      };
    },
    methods: {
      // 点击图标刷新页面
      reload() {
        this.$router.push({path: '/'});
      },
      login() {
        console.log('proxyUrl=' + this.proxyUrl);
        console.log('cpsdcSso=' + cpsdcSso);
        window.location.href = cpsdcSso.getLoginUrl(this.proxyUrl);
      },
      logout() {
        cpsdcSso.logout(this.proxyUrl);
      },
      userInfo() {
        this.$message.info('功能开发中!');
      },
      getTicket() {
        // console.log('NNNNNNNNN=' + cpsdcSso.getInfo('token'));
        this.userShow = true;
        this.loginShow = false;
        this.userName = 'zhaoxnshow@11185.cn';
      }
    },
    created() {
      console.log('run header again');
      bus.$on('sso-info', e => {
        console.log('header on run');
        this.userName = decodeURIComponent(e);
        console.log('This user is:' + this.userName);
        if (!util.isBlank(this.userName)) {
          this.userShow = true;
          this.loginShow = false;
        }
        console.log('The userShow is:' + this.userShow);
        console.log('The loginShow is:' + this.loginShow);
        this.test = 'wawa';
      });
      console.log('this userShow is:' + this.userShow);
      console.log('this loginShow is:' + this.loginShow);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/icon.styl"

  header
    background-image linear-gradient(90deg, #006649 0%, #037760 23%, #0DA9A1 56%, #1BC595 85%, #2BD15D 100%)
    div
      height 30px
      line-height 30px
      margin 0 auto
      font-size 12px
      color #fff
  ul#uLeft
    float left
  ul#uRight
    float right
  ul#uLeft li,ul#uRight li
    float left
    padding 0px 10px
  header ul a
    color #fff
  /*小图标*/
  .icon-small
    display inline-block
    height 20px
    width 16px
    position relative
    top 7px
  .icon-home
    background url("home.png") no-repeat
    color red
  .icon-phone
    background url('phone.png') no-repeat
</style>
