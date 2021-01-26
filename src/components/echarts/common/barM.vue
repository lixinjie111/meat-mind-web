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
				color: this.colorList,
				tooltip: {
					trigger: 'axis',
					axisPointer: {            // 坐标轴指示器，坐标轴触发有效
						type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				legend: {
					bottom:10,
					data: ['连续活跃用户', '流失用户', '沉默用户', '新用户', '回流用户'],
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:'12'
					}
				},
				grid: {
					top: '5%',
					left: '3%',
					right: '3%',
					bottom: '10%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: ['10-26当周', '11-2当周', '11-9当周', '11-16当周', '11-23当周',],
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
				yAxis: {
					type: 'value',
					axisLabel: {
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
				series:this.myData.value
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

