<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
import api from "@/utils/api"
export default {
  name: "scatterEcharts",
  props: {
    id: {
      type: String,
      default: "",
    },
    colorList: {
      type: Array,
    },
    scatterData:{
      type:Object
    },
    xData:{
      type:Array
    },
    starr:{
      type:Array
    },
    chance:{
      type:Array
    },
    risk:{
      type:Array
    },
    selectItem:{
      type:Object
    }
  },
  data(){
    return {
      lengndName:"风险",
      xName:this.selectItem.time,
      yValue:this.selectItem.index,
    }
  },
  methods: {   
    initEcharts() {
      let option = this.defaultOption();
      let myEchart = this.$echarts.init(document.getElementById(this.id));
      myEchart.setOption(option,true);
      myEchart.on('click',async (params)=>{
        if(params.seriesName=='正常'){
          return
        }
        // console.log(params)
        this.lengndName = params.seriesName
        this.xName = params.name
        this.yValue = params.value
        this.$emit('changeSeries',params.seriesName)
        let options = await this.defaultOption()
        myEchart.setOption(options,true)
      })
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    defaultOption() {
      let option = {
        color:this.colorList,
        tooltip:{
          trigger:"item",
          formatter:(params)=>{
            return params.data.content
          }
        },
        legend: {
          icon: 'circle',
          itemWidth:6,
          itemHeight:6,
          bottom: 0,
          textStyle: {
            fontSize: 12,
            color: '#97A0C3'
			    },
          data: this.scatterData.legend,
        },
        grid: {
          left: 2,
          top: 8,
          bottom: 60,
          right: 20,
          containLabel: true,
        },
        xAxis: {
          data:this.xData,
          axisLine: {
            type:'value',
            lineStyle: {
              color: "#EAEDF7",
              type: "dashed",
            },
          },
          axisTick: {
            lineStyle: {
              color: "#E9EBF1",
            },
          },          
          axisLabel:{
            color:"#97A0C3"
          },
          splitLine: {
            show:true,
            lineStyle: {
              color: "#EAEDF7",
              type: "dashed",
            },
          },
        },
        yAxis: {
          min:-1,
          max:1,
          type:"value",
          axisLine: {
            lineStyle: {
              color: "#EAEDF7",
              type: "dashed",
            },
          },
          axisTick: {
            lineStyle: {
              color: "#E9EBF1",
            },
          },
          axisLabel:{
            color:"#97A0C3"
          },
          splitLine: {
            show:true,
            lineStyle: {
              color: "#EAEDF7",
              type: "dashed",
            },
          },
          scale:true,
          data:['1','0.5','0','-0.5','-1']
        },
        dataZoom:[
          {
            type:'slider',
            backgroundColor:'#F4F7FC',
            fillerColor:'rgba(35, 115, 255, 0.2)',
            showDataShadow: false,
            start:30, 
            end:70,
            bottom:25,
            height:22
          }
        ],
        series: [
          {
            type: "scatter",
            name:"机会",
            symbolSize:(value,params)=>{
              return value*16
            },
            data:this.chance
          },
          {
            type: "scatter",
            name:"风险",
            symbolSize:(value,params)=>{
              return value*16
            },
            data:this.risk 
          },
          {
            type: "scatter",
            name:"正常",
            symbolSize:(value,params)=>{
              return value*40
            },
            data: this.starr
          },
          {
            // name:this.lengndName,
            type: "effectScatter",
            symbolSize: 20,
            data:[[this.xName,this.yValue]],
            zlevel: 1,
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