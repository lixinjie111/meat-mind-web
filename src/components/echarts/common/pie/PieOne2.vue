<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
	import echarts from 'echarts';
export default {
	props: {
		value:{
			type: Number,
			default:()=>{
				return 50;
			},
		},
		id:{
			type:String,
			default:()=>{
				return '';
			},
		},
		title:{
			type:String,
			default:()=>{
				return '';
			},
		},
		colorList:{
			type:Array,
			default:()=>{
				return  [{
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0, color: '#8CB6FF' // 0% 处的颜色
					}, {
						offset: 1, color: '#2373FF' // 100% 处的颜色
					}]}, '#fff'];
			},
		},
	},
	data () {
		return {

		}
	},
    mounted(){this.initEcharts()},
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
			let value = this.value;
			var option = {
				color:this.colorList,
				title: {
					text: ''+value,
					subtext: this.title,
					top: 'center',
					left: 'center',
					textStyle: {
						fontSize: 38,
						fontWeight: 400
					},
					itemGap: 0
				},
				series: [{
					name: 'shadow',
					type: 'pie',
					z: 1,
					radius: [0, '87.5%'],
					hoverAnimation: false,
					labelLine: {
						show: false
					},
					itemStyle: {
						borderRadius: 30,
						shadowBlur: 20,
						shadowColor: 'rgba(35,115,255, 0.3)',
					},
					data: [
						{value: 0},
						{value: 1},
					]
				},
					{
						name: '访问来源',
						type: 'pie',
						z: 2,
						radius: ['67%', '70.6%'],
						avoidLabelOverlap: false,
						hoverAnimation: false,
						label: {
							show: false,
							position: 'center'
						},
						labelLine: {
							show: false
						},
						data: [
							{value: value},
							{value: 100 - value},
						]
					},
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

