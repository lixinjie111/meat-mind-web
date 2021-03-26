<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
  let id = 0;
  export default {
    // roseType 默认为 false，代表圆环图， radius:圆环南丁格尔图， area: 区域南丁格尔图
    name:"PieCaseEcharts",
    props: {
      myData: { default: ()=>{}},
      colorList: { type:Array },
      roseType: { default: false },
    },
    data() {
      id++
      return {
        chartID: `pie-${id}`,
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
          color: this.colorList,
          grid: {
            left: 'center',
            top:0,
            bottom:60,
            containLabel: true
          },
          legend: {
            icon: 'circle',
            itemWidth:6,
            itemHeight:6,
            type: 'scroll',
            orient: 'horizontal',
            //orient: 'vertical',
            left: 'center',
            //top: 'center',
            bottom: 10,
            data: name,
            padding: [0, 40],
          },
          tooltip: {
            trigger: 'item'
          },
          series: [{
            type: 'pie',
            center: ['50%', '40%'],
            radius: ['35%', '50%'],
            roseType: this.roseType,
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            label: {
              show: false
            },
            labelLine: {
           
                length: 10,
                length2: 20,
                lineStyle: {
                  width: 1
                }
              
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

