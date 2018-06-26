<template>
  <footer>
    <hr />
    <table border="0" width="100%" height="">
      <tr>
        <td rowspan="2" class="tbimg">
          <img src="./footer1.png"/>
        </td>
        <td class="tbtxt">品质保障</td>
        <td rowspan="2" class="tbimg">
          <img src="./footer2.png"/>
        </td>
        <td class="tbtxt">特色服务</td>
        <td rowspan="2" class="tbimg">
          <img src="./footer3.png"/>
        </td>
        <td class="tbtxt">集团文化</td>
        <td rowspan="2" class="tbimg">
          <img src="./footer4.png"/>
        </td>
        <td class="tbtxt">覆盖全乡</td>
      </tr>
      <tr height="" class="tr_2">
        <td height="10px;">邮政优选</td>
        <td>不一样的感受</td>
        <td>正品权威</td>
        <td>安全送达</td>
      </tr>
    </table>
    <div class="footerbottom">
      <div>
        <a href="#">联系我们</a><span>|</span>
        <a href="#">投诉建议</a><span>|</span>
        <a href="#">异常及报错</a><span></span>
      </div>
      <p>
        友情链接：
        <a href="#">联系我们</a><span>|</span>
        <a href="#">投诉建议</a><span>|</span>
        <a href="#">投诉建议</a><span>|</span>
        <a href="#">异常及报错</a><span></span>
      </p>

      <img class="approve" src="./footer5.png"/>
      <img class="footerph" src="./footerphone.png"/>
    </div>
  </footer>
</template>
<script type="text/ecmascript-6">
  // import bus from 'common/js/bus';
  export default {
    // data: function () {
    //   return {
    //     username: 'hello'
    //   };
    // },
    // mounted() {
    //   console.log('foot emit run');
    //   bus.$emit('ssofilter-info', 'zhao');
    // }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer-out
    border 0
    width 100%np
  footer
    width 100%
    line-height 20px
    background-color #F2F2F2
    clear both
    margin-top 80px
    hr
      margin 0
      padding 0
      height 5px
      background-image linear-gradient(90deg, #006649 0%, #037760 23%, #0DA9A1 56%, #1BC595 85%, #2BD15D 100%)
    table
      margin 20px auto
      text-align left
    td
      width 200px
  .tbtxt
    font-size 24px
    color #221815
  .tbimg
    width 40px
    img
      width 35px
      height 35px
  .footer-tr2
    font-size 14px
    color #8A8D8E
  .footerbottom
    background-image linear-gradient(90deg, #006649 0%, #037760 23%, #0DA9A1 56%, #1BC595 85%, #2BD15D 100%)
    height 180px
    font-size 14px
    color #FFFFFF
    text-align center
    padding-top 70px
    position relative
    a
      color #fff
      padding-right 5px
    p
      margin 10px 0 0 0
    .approve
      width 80px
      height 30px
      position relative
      top 40px
      left 10px
    .footerph
      display block
      width 109px
      height 168px
      position absolute
      top 53px
      left 80%
</style>
