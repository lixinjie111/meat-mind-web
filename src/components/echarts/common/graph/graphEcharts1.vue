<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  name: "graphEcharts1",
  props: {
    id: {
      type: String,
      default: "",
    },
    graphDatas:{
        type:Object
    },
    curColor:{
        type:String
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
    let option = {
        color:[this.curColor],
        animationDuration:1500,
        animationEasingUpdate : 'quinticInOut',
        series : [ {
            type : 'graph',
            layout : 'none',
            label: {
              show: true,
              position: "inside",
              textStyle: {
                fontSize: 10,
              },
              formatter: (params)=>{
                if(params.dataIndex==0){
                  return params.name
                }
              },              
            },
            roam : true,
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
            categories:this.graphDatas.categories,
        } ]
    }
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