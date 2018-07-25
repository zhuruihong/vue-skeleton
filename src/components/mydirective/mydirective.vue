<template>
  <div>
    <!--<div>-->
      <!--<div class="one" v-drag>拖拽one</div>-->
      <!--<div class="two" v-drag>拖拽two</div>-->
    <!--</div>-->
    <button @click="printLog">printLog</button>
    <button @click="showpdf">showpdf</button>
    <vueshowpdf @closepdf="closepdf" v-show="isshowpdf" :pdfurl="pdfurls" @pdferr="pdferr" :maxscale='4' :minscale='0.6' :scale='0.6' :value="isshowpdf"></vueshowpdf>
  </div>
</template>

<script>
  import vueshowpdf from 'vueshowpdf';

  export default {
    name: 'mydirective',
    data: function() {
      return {
        // pdfurls: 'http://192.168.202.4/kf-cnt/policy/AXIA280I4418PAAAAA19.pdf',
        // pdfurls: 'http://localhost:8081/static/img/AXIA280I4418PAAAAA19.pdf',
        pdfurls: 'http://192.168.1.102:8080/api/redirectpdf1',
        // pdfurls: 'http://192.168.248.108:8080/ZxptRestGccWECHAT/commonFunc/getPdf?pdfUrl=http://192.168.248.108:8080/ZxptRestGccWECHAT/commonFunc/redirectPdf',
        isshowpdf: false
      };
    },
    methods: {
      showpdf() {
        this.isshowpdf = true;
      },
      closepdf() {
        this.isshowpdf = false;
      },
      pdferr(errurl) {
        console.log(errurl);
      }
    },
    components: {
      vueshowpdf
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .one,.two
    height: 100px
    width 100px
    border 1px solid #000
    position absolute
    -webkit-user-select none
    -ms-user-select none
    -moz-user-select -moz-none
    cursor pointer
  .two
    left 200px
</style>
