<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
  let id = 0;
  export default {
    // roseType 默认为 false，代表圆环图， radius:圆环南丁格尔图， area: 区域南丁格尔图
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
            // right: '4%',
            top:0,
            bottom: 20,
            containLabel: true
          },
          legend: {
            icon: 'circle',
			itemWidth:6,
			itemHeight:6,
			bottom: 0,
			textStyle: {
				fontSize: 12,
				color: '#97A0C3'
			},
            data: name,
          },
          tooltip: {
            trigger: 'item',
            formatter:(params)=>{
                return params.marker+params.name+":"+params.percent+"%"
            }
          },
          series: [{
            type: 'pie',
            center: ['50%', '45%'],
            radius: ['40%', '60%'],
            roseType: this.roseType,
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            label: {
              show: false
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

