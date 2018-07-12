<template>
  <div>
    <div class="chart" ref="chartOne"></div>
  </div>
</template>

<script>
  // 引入Echarts主模块
  import echarts from 'echarts';
  // // 引入柱状图
  // require('echarts/lib/chart/bar');
  // // 引入圆饼图
  // require('echarts/lib/chart/pie');
  // // 引入所需组件
  // require('echarts/lib/component/tooltip');
  // require('echarts/lib/component/legend');

  export default {
    name: 'chartone',
    methods: {
      /* 创建图表一 */
      createChartOne() {
        console.log('this is chartone!!');
        let chartOne = echarts.init(this.$refs.chartOne);
        // let chartOne = this.$echarts.init(this.$refs.chartOne);

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
    mounted() {
      this.createChartOne();
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .chart
    align-content center
    width 90%
    height 300px
    margin auto
</style>
