<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import {setBarWidth} from "./utils"
export default {
	name:"barM1",
	props: {
		myData:{
			default:()=>{
				return [];
			},
		},
		id:{
			type:String,
			default:()=>{
				return '';
			},
		},
		colorList:{
			type:Array
		},
	},
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
			_option = setBarWidth(_option,'col')
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption(_option);
			window.addEventListener('resize',()=>{
				myChart.resize();
			})
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
					bottom: 0,
					data: this.myData.legName,
					itemWidth: 6,
					itemHeight: 6,
					icon:"circle",
					textStyle: {
						color: "#97A0C3",   
						fontSize:'12'
					}
				},
				grid: {
					top: '10%',
					left: 20,
					right: 20,
					bottom: 25,
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: this.myData.name,
					axisLine:{
						lineStyle:{
							color:'#EAEDF7',
							type: 'dashed',
						}
					} ,
					axisLabel: {
						show: true,
						textStyle: {
							color: "#97A0C3",   
							fontSize:'12'
						}
					},
					axisPointer:{
						type:"shadow",
						shadowStyle:{
							color:"rgba(124,136,177,0.1)"
						}
					}
					
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						textStyle: {
							color: "#97A0C3",   
							fontSize:'12'
						}
					},
					axisLine:{
						lineStyle:{
							color:'#EAEDF7',
							type: 'dashed',
						}
					},
					splitLine: {
						lineStyle: {
							color:'#EAEDF7',
							type: 'dashed',
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

