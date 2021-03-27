<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
	props: {
		myData:{
			type:Object,
			default:()=>{
				return {};
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
				color: this.colorList,
				tooltip: {
					trigger: 'item',
					formatter: "{b} : {c}%"
				},
				legend: {
					show: false,
					bottom:0,
					itemWidth: 6,
					itemHeight: 6,
					icon:"circle",
					data:this.myData.legName,
				},
				series: [
					{
						name:'',
						type:'funnel',
						left: 0,
						top: 20,
						bottom: 20,
						width: '100%',
						min: 0,
						max: 100,
						minSize: '10%',
						maxSize: '100%',
						sort: 'descending',
						gap: 2,
						label: {
							show: true,
							position: 'inside'
						},
						labelLine: {
							length: 10,
							lineStyle: {
								width: 1,
								type: 'solid'
							}
						},
						itemStyle: {
							borderColor: '#fff',
							borderWidth: 1
						},
						emphasis: {
							label: {
								fontSize: 20
							}
						},
						data: this.myData.value
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

