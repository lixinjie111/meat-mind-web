<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
let id = 0;
const COLORS = [
  "#4D94FF",
  "#A49DFA",
  "#FC809F",
  "#FFD98C",
  "#8AE6C7",
  "#E19564",
  "#E44C7F",
  "#CECE7E",
  "#CECE7E",
  "#B7C8EA",
  "#95E9ED",
  "#91C2F2",
  "#B380B6",
  "#EDA8AD",
  "#738AD4",
];
export default {
  // roseType 默认为 false，代表圆环图， radius:圆环南丁格尔图， area: 区域南丁格尔图
  props: {
    myData: { default: () => {} },
    colorList: { default: COLORS },
    roseType: { default: false },
  },
  data() {
    id++;
    return {
      chartID: `pie2-${id}`,
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
      this.myChart = echarts5.init(document.getElementById(this.chartID));
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
      const option = {
        color:["#FDD352","#FE774B","#2373FF",],
        grid: {
          left: "center",
          right: '4%',
          top: "0",
          bottom: "60",
          containLabel: true,
        },
        legend: {
          icon: "circle",
          itemWidth:6,
          itemHeight:6,
          itemGap:24,
          type: "scroll",
          // orient: 'horizontal',
          orient: "vertical",
          right: "10%",
          top: "center",
          // bottom: -10,
          data: ['忠实顾客','摇摆顾客','潜在顾客',],
          padding: [20, 40],
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "rgba(0,0,0,0.6)", //设置背景图片 rgba格式
          borderWidth: "0", //边框宽度设置1
          //borderColor: "gray", //设置边框颜色
          textStyle: {
            color: "#fff" //设置文字颜色
          },
         },
        series: [
          {
            name: "忠实顾客",
            type: "pie",
            center: ['30%', '50%'],
            radius : ['50%', '40%'],
           label: {
							show: false,
							position: 'center'
						},
						labelLine: {
							show: false
						},
            hoverAnimation: false,
            data: [
              {
                value: "967",
                name: "忠实顾客",
                itemStyle: {
                  borderRadius: 30,
                },
                // itemStyle: {
                //   emphasis: {
                //     shadowBlur: 10,
                //     shadowOffsetX: 0,
                //     shadowColor: "rgba(0, 0, 0, 0.5)",
                    
                //       color: "#dc1439",
                
                //   },
                // },
              },
              {
                value: "2800",
                tooltip:{
                      show:false,
                    },
                itemStyle: {
                    color: "#F4F7FC",
                },
              },
            ],
          },
          {
            name: "摇摆顾客",
            type: "pie",
            center: ['30%', '50%'],
            radius : ['60%', '70%'],
            label: {
							show: false,
							position: 'center'
						},
						labelLine: {
							show: false
						},
            data: [
              {
                value: "825",
                name: "摇摆顾客",
                 itemStyle: {
                  borderRadius: 30,
                },
                // itemStyle: {
                //   emphasis: {
                //     shadowBlur: 10,
                //     shadowOffsetX: 0,
                //     shadowColor: "rgba(0, 0, 0, 0.5)",
                    
                //       color: "#dc1439",
           
                //   },
                // },
              },
              {
                value: "500",
                tooltip:{
                      show:false,
                    },
                 itemStyle: {
                   color: "#F4F7FC",
                },
              },
            ],
          },
          {
            name: '潜在顾客',
            type: 'pie',
            center: ['30%', '50%'],
            radius : ['80%', '90%'],
            label: {
							show: false,
							position: 'center'
						},
						labelLine: {
							show: false
						},
            data:[
                // {value:1078, name:'潜在顾客'}
                {
                    value:'1078',
                    name:'潜在顾客',
                     itemStyle: {
                  borderRadius: 30,
                },
                    // itemStyle: {
                    //     emphasis: {
                    //         shadowBlur: 10,
                    //         shadowOffsetX: 0,
                    //         shadowColor: 'rgba(0, 0, 0, 0.5)',
                            
                    //             color: "rgba(213,223,236,1)",
                          
                    //     }
                    // }
                },
                {
                    value:'800', 
                    tooltip:{
                      show:false,
                    },
                    itemStyle: {
                        
                            color: "#F4F7FC",
                        }
                    
                }
                
            ]
        },
        ],
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
