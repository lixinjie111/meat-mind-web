<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
  let id = 0;
  const COLORS = ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564', '#E44C7F', '#CECE7E', '#CECE7E', '#B7C8EA', '#95E9ED', '#91C2F2', '#B380B6', '#EDA8AD', '#738AD4']
  export default {
    // roseType 默认为 false，代表圆环图， radius:圆环南丁格尔图， area: 区域南丁格尔图
    props: {
      myData: { default: ()=>{}},
      colorList: { default: COLORS },
      roseType: { default: false },
    },
    data() {
      id++
      return {
        chartID: `pie7-${id}`,
        myChart: null
      }
    },
    mounted() {
      this.getChart();
      this.initEcharts(this.myData);
    },
    watch: {
      myData(myData){
        this.initEcharts(myData)
      },
    },
    methods: {
      getChart(){
        this.myChart = this.$echarts.init(document.getElementById(this.chartID));
       window.addEventListener('resize',()=>{
                this.myChart.resize();
            })
      },
      initEcharts(myData) {
        if(!myData || !myData.name){
          return
        }
        let _option = this.defaultOption(myData);
        this.myChart.setOption(_option);
      },
      defaultOption(myData) {
        const { name, value } = myData || { name: [], value: [] };
        const option = {
          color: this.colorList || COLORS,
          grid: {
            left: 'center',
            // right: '4%',
            top:"0",
            bottom: '60',
            containLabel: true
          },
          legend: {
            icon: 'circle',
            type: 'scroll',
            orient: 'horizontal',
            //orient: 'vertical',
            left: 'center',
            //top: 'center',
            bottom: 12,
            data: name,
            padding: [20, 40],
          },
          tooltip: {
            trigger: 'item',
	          extraCssText: 'padding:12px;color: #242F57;width: 175px;height: 217px;background: rgba(255, 255, 255, 0.8);box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);border-radius: 4px;',
	          formatter(params){
            	const style1 = 'padding-bottom: 8px; border-bottom: 1px solid rgba(36, 47, 87, 0.1); display: flex; justify-content: space-between;font-weight: 500;'
            	const style = 'margin: 0 6px 10px 0;display: flex;align-items: center; justify-content: center; padding: 4px 6px;height: 26px;border-radius: 8px;font-size: 12px;'
		          return(
			          `<div >
										<div style="${style1}">感情得分 <span>43.48</span></div>
										<div style="${style1}">情感浓度 <span>11.00</span></div>
										<div style="padding-bottom: 8px; display: flex; justify-content: space-between">心智关键词</div>
										<div style="display: flex; align-items: center; flex-wrap: wrap">
											<div style="${style}background: rgba(77, 148, 255, 0.2);border: 1px solid #4D94FF;">高冷</div>
											<div style="${style}background: rgba(164, 157, 250, 0.2);border: 1px solid #1DCEC3;">精致</div>
											<div style="${style}background: rgba(255, 217, 140, 0.2);border: 1px solid #FFD98C;">活力</div>
											<div style="${style}background: rgba(255, 159, 127, 0.2);border: 1px solid #FF9F7F;">新潮</div>
											<div style="${style}background: rgba(252, 128, 159, 0.2);border: 1px solid #FC809F;">贵</div>
											<div style="${style}background: rgba(138, 230, 199, 0.2);border: 1px solid #8AE6C7;">单身贵族</div>
										</div>
									</div>`
		          )
            	return 'p'
	          },
          },
          series: [{
            type: 'pie',
            center: ['50%', '40%'],
            radius: ['35%', '50%'],
            roseType: this.roseType,
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            label: {
              show: false
            },
            labelLine: {
              
                length: 10,
                length2: 20,
                lineStyle: {
                  width: 1
                }
              
            },
            data: name.map((e, i)=>({ name: e, value: value[i] })),
          }]
        };
        return option;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .echarts-box {
    width: 100%;
    height: 100%;
  }
	.tooltip{
		width: 175px;
		height: 217px;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
		border-radius: 4px;
	}
</style>

