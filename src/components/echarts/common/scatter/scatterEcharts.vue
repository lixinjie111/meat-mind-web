<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
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
    }
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
      let arr = [],ary=[],warn=[]
      for(let i=0;i<31;i++){
        let num = Math.random()*(1-0.5)+0.5
        let num2 = Math.random() - 0.5
        let num3 = Math.random() * 0.5 -1
        arr.push(num)
        ary.push(num2)
        warn.push(num3)
      }
      let option = {
        color:this.colorList,
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
          data:this.scatterData.name,
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
            start:30,
            end:70,
            bottom:25,
            height:22
          }
        ],
        series: [
          // {
          //   name: "风险1",
          //   type: "effectScatter",
          //   data: [
          //     {
          //       name: "风险",
          //       value: [
          //         0.963,
          //         0.45,
          //         "【新浪财经】和其正在凉茶巨头夹缝中迷失，同仁堂与邓老遭多重考验",
          //       ],
          //       itemStyle: {
          //         color: "#FF4C60",
          //       },
          //       label: {
          //         color: "#FF4C60",
          //       },
          //     },
          //     {
          //       name: "机会1",
          //       value: [0.684, 0.8, "赢商网：邓老凉茶在京开ins风国潮店"],
          //       itemStyle: {
          //         color: this.colorList[1],
          //       },
          //       label: {
          //         color: this.colorList[1],
          //       },
          //     },
          //     {
          //       name: "机会2",
          //       value: [
          //         0.222,
          //         0.5,
          //         "和其正发表律师函声明，要依法惩治网络舆论散播者",
          //       ],
          //       itemStyle: {
          //         color: this.colorList[2],
          //       },
          //       label: {
          //         color: this.colorList[2],
          //       },
          //     },
          //   ],
          //   showEffectOn: "render",
          //   rippleEffect: {
          //     brushType: "stroke",
          //   },
          //   hoverAnimation: true,
          //   label: {
          //       formatter: "{b}",
          //       position: "right",
          //       show: true,
          //       color: "red",
          //   },
          //   symbolSize: 15,
          //   itemStyle: {
          //       color: "red",
          //       shadowBlur: 10,
          //       shadowColor: "#333",
          //   },
          //   zlevel: 1,
          // },
          {
            type: "scatter",
            name:"机会",
            symbolSize:(value,params)=>{
              return value*20
            },
            data:arr
          },
          {
            type: "scatter",
            name:"风险",
            symbolSize:(value,params)=>{
              return value*10
            },
            data:warn 
          },
          {
            type: "scatter",
            name:"正常",
            symbolSize:(value,params)=>{
              return value*30
            },
            data: ary
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