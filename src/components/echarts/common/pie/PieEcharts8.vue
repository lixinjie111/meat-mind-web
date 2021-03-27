<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
  let id = 0;
  const COLORS = ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564', '#E44C7F', '#CECE7E', '#CECE7E', '#B7C8EA', '#95E9ED', '#91C2F2', '#B380B6', '#EDA8AD', '#738AD4']
  export default {
    // roseType 默认为 false，代表圆环图， radius:圆环南丁格尔图， area: 区域南丁格尔图
    props: {
      myData: { default: ()=>{}},
      colorList: { default: COLORS },
      roseType: { default: false },
    },
    data() {
      id++
      return {
        chartID: `pie-8-${id}`,
        myChart: null
      }
    },
    mounted() {
      this.getChart();
      this.initEcharts(this.myData);
    },
    watch: {
      myData(myData){
        this.initEcharts(myData)
      },
    },
    methods: {
      getChart(){
        this.myChart = this.$echarts.init(document.getElementById(this.chartID));
        window.addEventListener('resize',()=>{
          this.myChart.resize();
        })
      },
      initEcharts(myData) {
        if(!myData || !myData.name){
          return
        }
        let _option = this.defaultOption(myData);
        this.myChart.setOption(_option);
      },
      defaultOption(myData) {
        const { name, value } = myData || { name: [], value: [] };
        const option = {
          color: this.colorList || COLORS,
          grid: {
            left: '0',
            right: '0',
            top:"0",
            bottom: '0',
            containLabel: true
          },
          title: {
            show: true,
            text: myData.title,
            x: 'center',
            y: 'center',
            textStyle: {
              color: '#636E95',
              fontSize: 12,
              fontWeight: 'normal',
              rich: {
                title: {
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#242F57',
                },
                titleB: {
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#242F57',
                  padding: [6, 0]
                },
                subTitle: {
                  fontSize: 10,
                  fontWeight: 400,
                  color: '#7C88B1',
                },
              }
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {d}%'
          },
          series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['45%', '65%'],
            roseType: this.roseType,
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 10,
            label: {
              show: true,
              color: '#7C88B1'
            },
            labelLine: {
              length: 5,
              length2: 8,
              // smooth: true,
              lineStyle: {
                color: '#7C88B1'
              },

            },
            data: name.map((e, i)=>({ name: e, value: value[i] })),
          }]
        };
        return option;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .echarts-box {
    width: 100%;
    height: 100%;
  }
</style>

