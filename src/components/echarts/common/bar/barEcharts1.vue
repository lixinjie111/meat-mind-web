<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
  let id = 0
  import {setBarWidth} from "./utils"
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
          return `bar-chart-1-${id}`;
        },
      },
      colorList: {
        type: Array,
      }
    },
    data() {
      return {}
    },
    mounted() {
      this.initEcharts();
    },
    methods: {
      initEcharts() {
        let _option = this.defaultOption();
        _option = setBarWidth(_option)
        let myChart = this.$echarts.init(document.getElementById(this.id));
        myChart.setOption(_option);
        window.addEventListener('resize', () => {
          myChart.resize();
        })
      },
      defaultOption() {
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
            //设置轴线的属性
            axisLine: {
              lineStyle: {
                color: '#EAEDF7',
                type: "dashed"
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
              show: true,
              lineStyle: {
                color: '#EAEDF7',
                type: 'dashed',
              }
            },
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "rgba(124,136,177,0.1)"
              }
            },
          },
          yAxis: {
            type: 'value',
            splitNumber: 10,
            interval: 20,
            minInterval: 20,
            maxInterval: 20,
            axisLabel: {
              formatter: '{value}%',
              textStyle: {
                color: "#97A0C3",   //这里用参数代替了
                fontSize: '12'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#EAEDF7',
                type: "dashed"
                //width:8,//这里是为了突出显示加上的
              }
            },
            splitLine: {
              lineStyle: {
                color: '#EAEDF7',
                type: 'dashed',
              }
            },
          },
          series: [
            {
              data: this.myData.value,
              type: 'bar',
              label: {
                position: 'right',
              },
              itemStyle: {
                //barBorderRadius:[2 / 144 * window.rem,2 / 144 * window.rem,0,0]
              },
            }
          ]
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

