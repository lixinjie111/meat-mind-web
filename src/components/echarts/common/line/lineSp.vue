<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import echarts from 'echarts'
export default {
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
			type:Array,
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
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption(_option);
			window.addEventListener('resize',()=>{
				myChart.resize();
			})
		},
		defaultOption() {
			var option = {
				color:this.colorList,
				tooltip: {
					trigger: 'axis'
				},
				xAxis: {
					data: [
						'0 获客区',
						'1 获客区',
						'2 升值区',
						'3 升值区',
						'4 留存区',
						'5 留存区',
					],
					axisLine:{
						lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
						}
					} ,
					axisLabel: {
						formatter: function(res) {
							//return res.split(" ")[0] + "\n" + res.split(" ")[1];
							return res.split(" ")[1];
						},
						textStyle: {
							color: "#97A0C3",   //这里用参数代替了
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
					axisLine:{
						lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
						}
					},
					axisLabel: {
						textStyle: {
							color: "#97A0C3",   //这里用参数代替了
							fontSize:'12'
						}
					},
					splitLine: {
						show:true,
						lineStyle: {
							color:'#EAEDF7',
							type: 'dashed',
						}
					},
				},
				series: [{
					name: "",
					smooth: true,
					type: 'line',
					data:[10, 30, 90, 110, 90,10],
					markArea: {
						silent: true,
						itemStyle: {
						
								borderWidth: 1,
								borderType: 'dashed'
						
						},
						data: [[
							{
								name: '引入区',
								xAxis: '0 获客区',
								itemStyle: {
									color: this.colorList[0],
                  opacity: 0.3,
								}
							},
							{
								xAxis: '1 获客区',
							}
						], [
							{
								name: '成长期',
								xAxis: '1 获客区',
								itemStyle: {
                  color: this.colorList[1],
                  opacity: 0.3,
								}
							},
							{
								xAxis: '2 升值区',
							},
						],
						[
							{
								name: '成熟期',
								xAxis: '2 升值区',
								itemStyle: {
                  color: this.colorList[2],
                  opacity: 0.3,
								}
							},
							{
								xAxis: '3 升值区',
							},
						],
						[
							{
								name: '休眠区',
								xAxis: '3 升值区',
								itemStyle: {
                  color: this.colorList[3],
                  opacity: 0.3,
								}
							},
							{
								xAxis: '4 留存区',
							}
						],
						[
							{
								name: '流失区',
								xAxis: '4 留存区',
								itemStyle: {
                  color: this.colorList[4],
                  opacity: 0.3,
								}
							},
							{
								xAxis: '5 留存区',
							}
						],
						]
					},
				}]
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

