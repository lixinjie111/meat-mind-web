<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
  let id = 0;
  export default {
    // roseType 默认为 false，代表圆环图， radius:圆环南丁格尔图， area: 区域南丁格尔图
    props: {
      myData: {
        default: () => {
        }
      },
      colorList: {
        type:Array,
        default:()=>{
          return []
        }
      },
      roseType: {default: false},
    },
    data() {
      id++
      return {
        chartID: `yuanhuan1-${id}`,
        myChart: null
      }
    },
    mounted() {
      this.getChart();
      this.initEcharts(this.myData);
    },
    watch: {
      myData(myData) {
        this.initEcharts(myData)
      },
    },
    methods: {
      getChart() {
        this.myChart = this.$echarts.init(document.getElementById(this.chartID));
       window.addEventListener('resize',()=>{
                this.myChart.resize();
            })
      },
      initEcharts(myData) {
        if (!myData || !myData.name) {
          return
        }
        let _option = this.defaultOption(myData);
        this.myChart.setOption(_option);
      },
      defaultOption(myData) {
        var cellphoneTotle = [];
        const indicator = ['感知度', '观想度', '关注度', '共鸣度']
        const { name, value } = myData
        var data1 = [];
        for (var i = 0; i < value[0].length; ++i) {
          const name1 = name[0][i]
          const name2 = name[1][i]
          cellphoneTotle.push(name1)
          cellphoneTotle.push(name2)
          const item = value[0]
          data1.push({
            name: name1,
            value: item[i],
            itemStyle: {
              color: this.colorList[i],
            },
            label: {
              position: 'inside',
              rotate: 'tangential',
              show: false
            },
            children: [
              {
                name: name2,
                value: value[1][i],
                itemStyle: {
                  color: this.colorList[i]
                },
                label: {
                  position: 'inside',
                  rotate: 'tangential',
                  show: false
                }
              }]

          });
        }
        const option = {
          color: this.colorList,
          title: {
           show: false
          },
          tooltip: {
            show: false
          },
          grid: {
            bottom: 50
          },
          legend: {
            data: cellphoneTotle,
            icon: 'circle',
            type: 'scroll',
            orient: 'horizontal',
            left: 'center',
            //top: 'center',
            bottom: 0,
            padding: [20, 40],
          },
          radar: {
            center: ['50%', '40%'],
            radius: '28%',
            shape: 'circle',
            //  symbol:"circle",
             symbolSize: 4,
             nameGap:"6",
            splitArea: {
              show:false
            },
            axisLine: { 
              lineStyle: {
                color: '#EAEDF7',
              }
            },
            splitLine: {
              lineStyle: {
                color: '#EAEDF7',
              }
            },
             indicator: indicator.map(e=>({ text: e,color: "#7C88B1" })),
          },
          series: [
            {
              type: 'radar',
              symbol:"circle",
              symbolSize: 4,
              zlevel: 2,
              tooltip: {
                show: true
              },
              lineStyle: {
                color: 'rgba(35, 115, 255, 1)',
                width: 1,
              },
              itemStyle: {
                color: this.colorList[0],
                borderColor: this.colorList[0],
                borderWidth: 1,
              },
              areaStyle: {
                normal: {
                  color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                      offset: 0, color: "rgba(35, 115, 255, 0.3)" // 0% 处的颜色
                    }, {
                      offset: 1, color: "rgba(35, 115, 255, 0)" // 100% 处的颜色
                    }],
                    global: false
                  },
                }
              },
              data: [...name[0], ...name[1]].map((e, i)=>({
                name: e,
                value: value[2][i]
              }))
            },
            {
              type: 'sunburst',
              center: ['50%', '40%'],
              nodeClick: false,
              levels: [
                {},
                {
                  r0: '45%',
                  r: '55%',
                  label: {},
                  itemStyle: {
                    borderWidth: 0,
                  }
                },
                {
                  r0: '60%',
                  r: '75%',
                  itemStyle: {
                    borderWidth: 0,
                  }
                }
              ],
              data: data1,

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

