<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  name: "graphEcharts2",
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
      myEchart.setOption(option);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    defaultOption() {
        let arr = this.graphDatas.nodes.filter((item)=>{
            return item.category == 2
        })
        arr.sort((a,b)=>{
            return b.symbolSize - a.symbolSize
        })
        let links = []
        for(let i = 0;i < arr.length;i++){
            if(arr[i].symbolSize>12){arr[i].symbolSize -= 8}
            if(i>0){
                arr[i].name="机构"+i
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
                  return '知乎'
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
            categories:[{name:"知乎"}],
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