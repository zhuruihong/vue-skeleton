<template>
  <div class="hello">
    <div class="hw-content">
      <h1 class="h1-disp my-blue">{{ env_context }}</h1>
      <h1 class="h1-disp h1-font">{{ env }}</h1>
      <h1>{{ msg }}</h1>
      <h1>{{ tips }}</h1>
      <router-link :to="{ name: 'example2', params: { prefacePage: 'example1' }}">go to example2</router-link>
      <button @click="goto2">goto2</button>
      <br/>
      <router-link :to="{ name: 'myQuilleditor'}">go to myQuilleditor</router-link>
    </div>

    <floor :urls="urls1" :content="content"></floor>

    <div>This is a jsonp example:</div>
     <div v-for="(item, index) in items" :key="index">
        <div class="tree-item">{{item.treeName}}</div>
        <div class="tree-item">{{item.id}}</div>
        <div class="tree-item">{{item.treeCode}}</div>
      </div>
    <button @click="popAMess">X</button>
    <div class="chart" ref="chartOne"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import mheader from 'components/common/header/header';
import mfooter from 'components/common/footer/footer';
import floor from 'components/common/floor/floor';
import util from 'common/js/util';
import jsonp from 'jsonp';
import picList from 'common/js/pic-list';

const config = require('../../../config');

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      msg: 'This is a Vue.js skeleton.',
      env_context: 'The building environment is ',
      env: process.env.NODE_ENV + '.',
      tips: 'You can design something here.',
      config: config,
      items: [],
      urls1: {
        p0: util.generatePicUrlByBrowser(picList.f1P0J, picList.f1P0W),
        p1: util.generatePicUrlByBrowser(picList.f1P1J, picList.f1P1W),
        p2: util.generatePicUrlByBrowser(picList.f1P2J, picList.f1P2W),
        p3: util.generatePicUrlByBrowser(picList.f1P3J, picList.f1P3W),
        p4: util.generatePicUrlByBrowser(picList.f1P4J, picList.f1P4W),
        p5: util.generatePicUrlByBrowser(picList.f1P5J, picList.f1P5W),
        p6: util.generatePicUrlByBrowser(picList.f1P6J, picList.f1P6W),
        p7: util.generatePicUrlByBrowser(picList.f1P7J, picList.f1P7W),
        p8: util.generatePicUrlByBrowser(picList.f1P8J, picList.f1P8W)
      },
      content: '0'
    };
  },
  methods: {
    popAMess: function() {
      this.content = this.content + '1';
      console.log('pop a message.');
    },
    goto2: function() {
      this.$router.push({name: 'example2', params: { prefacePage: 'example1' }});
    },
    /* 创建图表一 */
    createChartOne() {
      let chartOne = this.$echarts.init(this.$refs.chartOne);

      chartOne.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          // data: [0, 100, 200]
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  },
  created() {
    console.log('hhhhhhhhhh!!@@');
    console.log(this.$route);
    // $.ajax({
    //   url: 'http://yntvapp.4kb.cn/webapp-yrt/content/columnList.do',
    //   dataType: 'jsonp',
    //   jsonp: 'callback',
    //   data: {type: 1},
    //   jsonpCallback: 'onBack',
    //   type: 'post',
    //   async: false,
    //   beforeSend: function (data) {
    //     // ShowDiv();
    //     console.log('this is beforeSend');
    //     console.log(data);
    //   },
    //   complete: function (data) {
    //     // HiddenDiv();
    //     console.log('this is complete');
    //     console.log(data);
    //   },
    //   success: function(data) {
    //     console.log('this is success');
    //     console.log(data);
    //   }
    // });

    let url1 = 'http://yntvapp.4kb.cn/webapp-yrt/content/columnList.do?type=1';
    let para = {
      name: 'onBack'
    };

    jsonp(url1, para, (err, data) => {
      if (err) {
        console.error('Getting columnList error');
        console.error(err.message);
        console.error('Getting columnList error');
      } else {
        console.log('Getting columnList success');
        console.log(data);
        console.log('Getting columnList success');
        if (!util.isBlank(data) && !util.isBlank(data.list)) {
          this.items = data.list;
        }
      }
    });
  },
  mounted() {
    this.createChartOne();
    console.log('hhhhhhhhhh!!');
  },
  components: {
    mheader,
    mfooter,
    floor
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*@import "../../common/stylus/icon.styl"*/

  fontWightBold = bold
  .font-cus
    font-weight fontWightBold
  .myhead
    @extend .font-cus
    color black
  .h1-disp
    display inline-block
    color black
  .h1-font
    font-weight fontWightBold
    color red
  .hw-content
    height 100%
    background-color white
  .tree-item
    display inline-block
  .chart
    align-content center
    width 90%
    height 300px
    margin auto
</style>
