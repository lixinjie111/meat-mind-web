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
    },
    detail:{
      type:Object
    }
  },
  methods: {
    initEcharts() {
      let option = {}
      option = this.defaultOption();
      let myEchart = this.$echarts.init(document.getElementById(this.id));
      myEchart.setOption(option,true);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    defaultOption() {
      this.graphDatas.nodes[3].name = this.detail.title
      this.graphDatas.nodes[9].name = this.detail.subPublicList[0].title
      this.graphDatas.nodes[19].name = this.detail.subPublicList[2].title
      this.graphDatas.nodes[26].name = this.detail.subPublicList[1].title
      this.graphDatas.categories = [{name:this.detail.title},
                                    {name:this.detail.subPublicList[0].title},
                                    {name:this.detail.subPublicList[1].title},
                                    {name:this.detail.subPublicList[2].title}]
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
                  return params.name
                }else if(params.dataIndex == 3){
                  return params.name
                }else if(params.dataIndex == 26){
                  return params.name
                }else if(params.dataIndex == 19){
                  return params.name
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