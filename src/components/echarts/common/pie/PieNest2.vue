<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
	import echarts from 'echarts';
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
		title:{
			type:String,
			default:()=>{
				return '';
			},
		},
		value:{
			type:String,
			default:()=>{
				return '';
			},
		},
		colorList:{
			type:Array,
			default:()=>{
				return  [					{
					type: 'linear',
					x: 0,
					y: 0,
					x2: 0,
					y2: 1,
					colorStops: [{
						offset: 0, color: '#BCF7F4'
					}, {
						offset: 1, color: '#1DCEC3'
					}]
				},
					'#fff',
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#FFBEA8'
						}, {
							offset: 1, color: '#FF8359'
						}]
					},
					'transparent',
					{
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color: '#8CB6FF' // 0% 处的颜色
						}, {
							offset: 1, color: '#2373FF' // 100% 处的颜色
						}]
					},
					'transparent',
				];
			},
		},
	},
	data () {
		return {

		}
	},
    mounted(){this.initEcharts(this.myData)},
	methods: {
		initEcharts(myData) {
			if(!myData || !myData.value){
				return
			}
			let _option = this.defaultOption(myData);
			console.log(_option)
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption(_option);
			window.addEventListener('resize',()=>{
				myChart.resize();
			})
		},
		defaultOption(myData) {
			const { name, value } = myData || { name: [], value: [] };
			var option = {
				color:this.colorList,
				title: {
					text: ''+this.value,
					subtext: this.title,
					top: 'center',
					left: 'center',
					textStyle: {
						fontSize: 38,
						fontWeight: 400
					},
					subtextStyle: {
						color: '#666'
					},
					itemGap: 0
				},
				series: [
					{
						name: 'shadow',
						type: 'pie',
						z: 1,
						radius: [0, '58.5%'],
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
						radius: ['84%', '87.5%'],
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
							{value: 79},
							{value: 100 - 79},
						]
					},
					{
						name: '访问来源',
						type: 'pie',
						z: 2,
						radius: ['74%', '77.5%'],
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
							{value: 0},
							{value: 0},
							{value: 79},
							{value: 100 - 79},
						]
					},
					{
						name: '访问来源',
						type: 'pie',
						z: 2,
						radius: ['54%', '62.5%'],
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
							{value: 0},
							{value: 0},
							{value: 0},
							{value: 0},
							{value: 79},
							{value: 100 - 79},
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

