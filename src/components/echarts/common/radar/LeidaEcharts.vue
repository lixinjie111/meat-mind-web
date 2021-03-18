<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
let id = 0;
export default {
  props: {
    myData: { 
      type:Object,
      default: () => {
        return {}
      } 
    },
    colorList: { type: Array },
    max: { default: 88 },
    titleText: { default: 92 },
    rgbaColor:{
      type:Array,
      default:()=>[]
    }
  },
  data() {
    id++;
    return {
      chartID: `leida-${id}`,
      myChart: null,
    };
  },
  mounted() {
    this.getChart();
    this.initEcharts(this.myData);
  },
  watch: {
    myData(myData) {
      this.initEcharts(myData);
    },
  },
  methods: {
    getChart() {
      this.myChart = this.$echarts.init(document.getElementById(this.chartID));
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    initEcharts(myData) {
      if (!myData || !myData.name) {
        return;
      }
      let _option = this.defaultOption(myData);
      this.myChart.setOption(_option);
    },
    defaultOption(myData) {
      const { name, value } = myData || { name: [], value: [] };
      const color = this.colorList;
      const max = this.max;
      const title = this.titleText;
      const option = {
        color: this.colorList,
        title: [
          {
            text: title,
            x: "center",
            y: "center",
            textStyle: {
              color: "#fff",
              fontSize: 39,
            },
            zlevel: 24,
          },
        ],
        tooltip: {
          how: true,
          trigger: "item",
          confine: true,
        },
        legend: {
          show: true,
          icon: "circle",
          // left: "35%",
          // top: "90%",
          bottom:0,
          left:'center',
          orient: "horizontal",
          textStyle: {
            fontSize: 14,
            color: "#000",
          },
        },
        radar: {
          center: ["50%", "50%"],
          radiu: "70%",
          startAngle: 180,
          splitNumber: 4,
          // shape: "circle",
          name: {
            textStyle: {
              color: "rgb(51,51,51)",
              fontSize: 12,
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#EAEDF7", //
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#EAEDF7", //
            },
          },
          splitArea: {
            show: false,
          },
          indicator: name.map((e) => ({ name: e, max, color: "#7C88B1" })),
        },
        series: value.map((it, i) => ({
          name: "数据",
          type: "radar",
          symbol: "circle",
          symbolSize: 4,
          areaStyle: {
            
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                    offset: 0, color:this.rgbaColor[i][0] // 0% 处的颜色
                }, {
                    offset: 1, color: this.rgbaColor[i][1] // 100% 处的颜色
                }],
                global: false // 缺省为 false
            
            },
          },
          itemStyle: {
            color: this.colorList[i],
            borderColor: this.colorList[i],
            borderWidth: 1,
          },
          lineStyle: {
            
              color: this.colorList[i],
              width: 1,
            
          },
          data: [it],
        })),
      };
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.echarts-box {
  width: 100%;
  height: 100%;
}
</style>

