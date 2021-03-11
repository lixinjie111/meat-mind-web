<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
  let id = 0;
  export default {
    props: {
      myData: {default: () => {}},
      colorList: {
        type:Array,
        default:()=>[]
      },
      max: { default: 10 },
      titleText: { default: 92 },
    },
    data() {
      id++
      return {
        chartID: `leida2-${id}`,
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
        const {name, value} = myData || {name: [], value: []};
        const max = this.max;
        const option = {
          color: this.colorList,
          // backgroundColor: 'rgba(255, 255, 255, 0.6)',
          title: {
            show: false
          },
          tooltip: {
            how: true,
            trigger: "item",
            confine: true,
            formatter: (v)=>{
              return v.dimensionNames.map((e, i)=>{
                return `<div>${name[i]}: ${value[i]}</div>`
              }).join('')
            }
          },
          legend: {
            show: true,
            icon: "circle",
            left: "35%",
            top: "90%",
            orient: "horizontal",
            textStyle: {
              fontSize: 14,
              color: "#636E95"
            },
          },
          radar: {
            center: ["50%", "50%"],
            radius: "70%",
            startAngle: 180,
            nameGap: '20',
            splitNumber: 4,
            color:"#7C88B1",
            shape: "polygon",
            name: {
              textStyle: {
                "color": "#636E95",
                fontSize: 12,
              },
              formatter: function (text, indicator) {
                const value = indicator.value
                return text + '\n' + value;
              }
            },
            splitArea: {
              show:false
            },
            axisLine: { //指向外圈文本的分隔线样式
              lineStyle: {
                color: '#EAEDF7',
              }
            },
            splitLine: {
              lineStyle: {
                color: '#EAEDF7',
              }
            },
            indicator: (function (){
              // name.map((e, i)=>({ name: e, max, value: value[i] }))
              var res = [];
              for (let i = 0; i < name.length; i++) {
                res.push({text: name[i], max, value: value[i],color: "#7C88B1" });
              }
              return res;
            })(),
          },
          series: [
            {
              name: "数据",
              type: "radar",
              symbol: "circle",
              symbolSize: 4,
              areaStyle: {
                normal: {
                  color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 1,
                    colorStops: [{
                      offset: 0, color: "rgba(35, 115, 255, 0.3)" // 0% 处的颜色
                    }, {
                      offset: 1, color: "rgba(35, 115, 255, 0)" // 100% 处的颜色
                    }],
                    global: false
                  },
                  opacity: 1,
                }
              },
            lineStyle: {
              normal:{
                 color: 'rgba(35, 115, 255, 1)',
                width:1
              }
            },
            itemStyle: {
              color: this.colorList[0],
              borderColor: this.colorList[0],
              borderWidth: 1,
          },
              data: [value]
            }
          ],
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

