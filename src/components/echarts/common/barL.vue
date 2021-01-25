<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
	props: ['myData',"id",'colorList'],
	data () {
		return {
			
		}
	},
    mounted() {
        	this.initEcharts();
    },
	methods: {
		initEcharts() {
			let _option = this.defaultOption();
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption(_option);
			window.onresize = ()=>{
				myChart.resize();
			}
		},
		defaultOption() {
			var option = {
            color: this.colorList[0],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: 14,
                right: '6%',
                bottom: '6%',
                top: '10%',
                containLabel: true,
            },
            yAxis: {
                type: 'category',
				data: this.myData.name,
				//设置轴线的属性
				axisLine:{
					lineStyle:{
						color:'#E9EBF1',
					}
				} ,
				axisLabel: {
					show: true,
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:'12'
					}
				},

            },
            xAxis: {
                type: 'value',
                axisLabel: {
					formatter: '{value} ',
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:'12'
					}
                },
				axisLine:{
					lineStyle:{
						color:'#E9EBF1',
						//width:8,//这里是为了突出显示加上的
					}
				},
                splitLine: {
                    lineStyle: {
						color:'#E9EBF1',
                        //type: 'dashed',
                    }
                },
            },
            series: [
                {
                    data: this.myData.value,
                    type: 'bar',
					barWidth: '10',
					itemStyle: {
                         normal: {
                               barBorderRadius:30
						 },
						 emphasis:{
							 color:'#FF9F7F'
						 }
                    },
                }
            ]
        };
			return option;
		}
	}
}
</script>
<style lang="scss" scoped>
.echarts-box{
    width: 100%;
    height:100%;
}
</style>

