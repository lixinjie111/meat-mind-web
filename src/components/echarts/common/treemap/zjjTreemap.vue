<template>
  <div class="echarts-box" :id="id"></div>
</template>
<script>
import echarts from "../../../../utils/echarts.min.js";
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
        return "";
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let _option = this.defaultOption();
      let myChart = echarts.init(document.getElementById(this.id));
      myChart.setOption(_option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    defaultOption() {
      var option = (option = {
         tooltip: {
          trigger: "item",
         },
        tooltip: {
          show: true,
          backgroundColor: "rgba(0,0,0,0.7)", //设置背景图片 rgba格式
          borderWidth: "0", //边框宽度设置1
          //borderColor: "gray", //设置边框颜色
          textStyle: {
            color: "#fff" //设置文字颜色
          },
          formatter(params) {
              var result = "<div>" + params.treePathInfo[1].name + "</div>";
              result += `<span style="display:block;margin-right:5px;margin-bottom:2px;border-radius:10px;'">${params.treePathInfo[2].name} ：${params.treePathInfo[2].value}%</span>`;
              return result;
          }
        },
         grid: {
                left: 0,
                right: 0,
                bottom: 0,
                top:0,
                containLabel: true,
            },
        series: [
          {
            breadcrumb: { show: false },
            type: "treemap",
            nodeClick:false,
            roam:false,
            data: this.myData,
            itemStyle: {
                borderColor: '#fff',
                //borderWidth: 0,
                gapWidth: 1
            },
          },
        ],
      });
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

