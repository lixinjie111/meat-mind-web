<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  name: "graphEcharts3",
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
  data(){
      return {}
  },
  methods: {
    initEcharts() {
      let option = this.defaultOption();
      let myEchart = this.$echarts.init(document.getElementById(this.id));
      myEchart.setOption(option,true);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    defaultOption() {
        let arr = this.graphDatas.nodes.filter((item)=>{
            return item.category == 3
        })
        arr.sort((a,b)=>{
            return b.symbolSize - a.symbolSize
        })
        let links = []
        for(let i = 0;i < arr.length;i++){
            if(arr[i].symbolSize>8){arr[i].symbolSize -= 8}
            if(i>0){
                arr[i].name="文献"+i
            }
            links.push({source:i+1,target:0})
        }
        let option = {
        color:[this.curColor],
        animationDuration:1500,
        animationDurationUpdate : 'quinticInOut',
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
            data:arr,
            links,
            categories:[{name:this.graphDatas.categories[3]}],
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