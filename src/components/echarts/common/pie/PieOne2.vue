<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
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
					}]},
					'#fff',
					'transparent'];
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
			let myChart = echarts5.init(document.getElementById(this.id));
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
					subtext: ''+value,
					text: this.title,
					top: '35%',
					left: 'center',
					textStyle: {
						fontSize: 10 / 144 * window.rem,
						fontWeight: 400,
						color: '#999'
					},
					subtextStyle: {
						fontSize: 20 / 144 * window.rem,
						fontWeight: 400,
						color: 'black'
					},
					itemGap: 10
				},
				series: [{
					name: 'shadow1',
					type: 'pie',
					z: 1,
					radius: [0, '87.5%'],
					hoverAnimation: false,
					labelLine: {
						show: false
					},
					itemStyle: {
						shadowBlur: 10 / 144 * window.rem,
						shadowColor: 'rgba(134, 143, 191, 0.3)',
					},
					data: [
						{value: 0},
						{value: 1},
					]
				},
				{
					name: 'shadow2',
					type: 'pie',
					z: 2,
					radius: [0, '67.3%'],
					hoverAnimation: false,
					labelLine: {
						show: false
					},
					itemStyle: {
						shadowBlur: 10 / 144 * window.rem,
						shadowColor: 'rgba(134, 143, 191, 0.3)',
					},
					data: [
						{value: 0},
						{value: 1},
					]
				},
					{
						name: '访问来源',
						type: 'pie',
						z: 3,
						radius: ['64%', '70.6%'],
						avoidLabelOverlap: false,
						// hoverAnimation: false,
						label: {
							show: false,
							position: 'center'
						},
						labelLine: {
							show: false
						},
						itemStyle: {
							borderRadius: 30 / 144 * window.rem,
						},
						data: [
							{value: value},
							{value: 0},
							{value: 100 - value},
						]
					},
					{
						name: 'Pressure',
						type: 'gauge',
						silent: true,
						z: 2,
						animation: false,
						axisTick: {
							distance: 0,
							length: 4,
							lineStyle: {
								width: 1,
								color: '#EAEDF7',
								opacity: .5
							}
						},
						detail: {
							show: false,
						},
						progress: {
							show: false,
						},
						axisLabel: {
							show: false,
						},
						axisLine: {
							show: false,
							lineStyle: {
								width: 0,
							}
						},
						splitLine: {
							length: 7,
							distance: 0,
							lineStyle: {
								width: 1,
								color: '#EAEDF7',
								opacity: .5
							}
						},
						radius: '87.5%',
						splitNumber: 12,
						startAngle: 90,
						endAngle: 90+360,
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

