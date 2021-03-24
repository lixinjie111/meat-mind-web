<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
  import echarts from 'echarts'
  import lodash from 'lodash'
  let id = 0
  export default {
    props: {
      myData: {
        default: () => {
          return [];
        },
      },
      id: {
        type: String,
        default: () => {
	        ++id
	        return `lines-${id}`;
        },
      },
      hasAreaStyle: { type: [Boolean, String], default: ()=>false },
      yName: { type: String, default: '' },
      xName: { type: String, default: '' },
      option: { type: Object, default: ()=>({}) },
      colorList: {
        type: Array,
      },
    },
    mounted() {
      this.initEcharts();
    },
    methods: {
      initEcharts() {
        let _option = this.defaultOption();
        let myChart = this.$echarts.init(document.getElementById(this.id));
        myChart.setOption(_option);
        window.addEventListener('resize', () => {
          myChart.resize();
        })
      },
      defaultOption() {
        const hasAreaStyle = this.hasAreaStyle
        var option = {
          color: this.colorList[0],
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 14,
            right: '6%',
            bottom: '6%',
            top: '10%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: this.myData.name,
            name: this.xName,
            boundaryGap: false,
            //设置轴线的属性
            axisLine: {
              lineStyle: {
                color:'#EAEDF7',
							  type:"dashed"
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#97A0C3",   //这里用参数代替了
                fontSize: '12'
              }
            },
            splitLine: {
              show:true,
              lineStyle: {
                color:'#EAEDF7',
                type: 'dashed',
              }
            },
            axisPointer:{
              type:"shadow",
              shadowStyle:{
                color:"rgba(124,136,177,0.1)"
              }
            }
          },
          yAxis: {
            type: 'value',
            name: this.yName,
            nameTextStyle:{
              color:'#636E95'  
            },
            axisLabel: {
              textStyle: {
                color: "#97A0C3",   //这里用参数代替了
                fontSize: '12'
              }
            },
            axisLine:{
              show:true,
              lineStyle:{
                color:'#EAEDF7',
                type:"dashed"
                //width:8,//这里是为了突出显示加上的
              }
            },
            splitLine: {
              show:true,
              lineStyle: {
                color:'#EAEDF7',
                type: 'dashed',
              }
            },
          },
          series: [
            {
              data: this.myData.value,
              type: 'line',
              areaStyle: hasAreaStyle ? {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: this.colorList[0], // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FFFFFF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
              }: undefined,
              // label: {
              //   position: 'right',
              // },
              // itemStyle: {
              //     fontSize: 20,
              //     barBorderRadius: 30
              //   emphasis: {
              //     color: '#FF9F7F'
              //   }
              // },
            }
          ]
        };
        return lodash.merge({}, option, this.option);
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

