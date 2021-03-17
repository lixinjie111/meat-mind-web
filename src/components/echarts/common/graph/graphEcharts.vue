<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  name: "graphEcharts",
  props: {
    id: {
      type: String,
      default: "",
    },
    colorList: {
      type: Array,
    },
    graphDatas:{
      type: Object
    }
  },
  methods: {
    initEcharts() {
      let option = this.defaultOption();
      let myEchart = this.$echarts.init(document.getElementById(this.id));
      myEchart.setOption(option);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    defaultOption() {
      let option = {
        color: this.colorList,
        // legend: [
        //   {
        //     data: ["新浪财经", "百度百家号", "知乎", "抖音"],
        //   },
        // ],
        animationDuration: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
          {
            type: "graph",
            layout: "none",
            roam: true,
            label: {
              show: true,
              position: "inside",
              textStyle: {
                fontSize: 10,
              },
              formatter: (params)=>{
                if(params.dataIndex==9){
                  return '百度百家号'
                }else if(params.dataIndex == 3){
                  return '新浪财经'
                }else if(params.dataIndex == 26){
                  return '知乎'
                }else if(params.dataIndex == 19){
                  return '抖音'
                }
              },
            },
            labelLayout: {
              hideOverlap: true,
            },
            scaleLimit: {
              min: 0.4,
              max: 2,
            },
            lineStyle: {
              color: "source",
              curveness: 0.3,
            },
            data:this.graphDatas.nodes,
            links:this.graphDatas.links,
            categories: this.graphDatas.categories,
          },
        ],
      };
      return option;
    },
  },
  mounted() {
    this.initEcharts();
  },
};
</script>

<style scoped lang="scss">
.echarts-box {
  width: 100%;
  height: 100%;
}
</style>