<template>
  <div class="container">
    <div class="echarts-box" :id="chartID"></div>
  </div>
</template>

<script>
  let id = 0;
  export default {
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
      max: {default: 100},
    },
    data() {
      id++
      return {
        chartID: `match-echarts-${id}`,
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
      defaultOption() {
        function contains(arrays, obj) {
          var i = arrays.length;
          while (i--) {
            if (arrays[i] === obj) {
              return i;
            }
          }
          return false;
        }
        const {name, value} = this.myData || {name: [], value: []};
        const color = this.colorList;
        const max = this.max;
        const option = {
          color: color,
          tooltip: {
            formatter: function () {
              var html = '';
              for (var i = 0; i < value.length; i++) {
                html += name[i] + ' : ' + value[i] + '<br>'
              }
              return html
            }
          },
          radar: {
            radius: '70%',
            center: ['50%', '50%'],
            nameGap: '20',
            splitNumber: 4,
            color:"#7C88B1",
            name: {
              textStyle: {
                rich: {
                  a: {
                    align: 'center',
                    padding: [4, 0, 0, 0]
                  },
                  b: {
                    padding: [-20, 0, 0, 0]
                  }
                },
              },

              formatter: function (params) {
                var i = contains(name, params);
                var percent = (value[i] / 100 * 100);
                if (i === 0) {
                  return ' {b|' + params + '  ' + percent + '%}'
                }
                return '{a|' + percent + '%}\n' + params
              },
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
            indicator: name.map(e => ({max, name: e,color: "#7C88B1"})),
          },
          series: [{
            name: '',
            type: 'radar',
            symbol:"circle",
            symbolSize: 4,
            areaStyle: {
              
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 1,
                  colorStops: [{
                    offset: 0, color: "rgba(35, 115, 255, 0.3)" // 0% 处的颜色
                  }, {
                    offset: 1, color: 'rgba(35, 115, 255, 0)' // 100% 处的颜色
                  }],
                  global: false
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
            data: [value],
          }]
        }
        return option;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{

  }
  .container, .echarts-box {
    width: 100%;
    height: 100%;
  }
  #img{
    position: absolute;
    z-index: -1;
  }
</style>

