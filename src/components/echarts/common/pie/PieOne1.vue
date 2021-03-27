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
					text: ''+value,
					subtext: this.title,
					top: 'center',
					left: 'center',
					textStyle: {
						fontSize: 38 / 144 * window.rem,
						fontWeight: 400
					},
					subtextStyle: {
						fontSize: 12 / 144 * window.rem,
						color: '#666'
					},
					itemGap: 0
				},
				series: [{
					name: 'shadow',
					type: 'pie',
					z: 1,
					radius: [0, '84.5%'],
					hoverAnimation: false,
					labelLine: {
						show: false
					},
					itemStyle: {
						shadowBlur: 15 / 144 * window.rem,
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
						z: 2,
						radius: ['80%', '87.5%'],
						avoidLabelOverlap: false,
						// hoverAnimation: false,
						label: {
							show: false,
							position: 'center'
						},
						itemStyle: {
							borderRadius: 30 / 144 * window.rem,
							shadowBlur: 10 / 144 * window.rem,
							shadowColor: 'rgba(35,115,255, 0.3)',
						},
						labelLine: {
							show: false
						},
						data: [
							{value: value},
							{value: 0},
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

