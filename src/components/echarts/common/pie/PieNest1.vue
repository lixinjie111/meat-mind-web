<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
  let id = 0
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
			  ++id;
				return `PieNest1-${id}`;
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
				return  ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564','#BF6E9B','#CECE7E','#91C2F2','#B7C8EA','#FF9F7F','#91C2F2','#B380B6','#EDA8AD','#738AD4','#FF9F7F'];
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
			if(!myData || !myData.inner){
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
			const { inner, outer } = myData || {inner: { name: [], value: [] }, outer: { name: [], value: [] }};
			var option = {
                color:this.colorList,
				title: [
					{
						text: this.title,
						subtext: this.value+'%',
						top: '35%',
						left: 'center',
						textStyle: {
							fontSize: 12,
							fontWeight: 400,
							color: '#636E95'
						},
						subtextStyle: {
							fontSize: 12,
							fontWeight: 600,
							color: '#242F57'
						}
					}],
				legend: {
					data: inner.name,
					icon: 'circle',
					itemWidth: 6,
					itemHeight: 6,
					itemGap: 10,
					top: '78%',
					width: '90%',
					textStyle: {
						fontSize: 10,
						color: '#999'
					}
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						selectedMode: 'single',
						radius: ['20%', '38%'],
						top: '-20%',
						label: {
							show: false
						},
						itemStyle: {
							borderColor: '#fff',
							borderWidth: 2
						},
						data: inner.name.map((e, i)=>({ name: e, value: inner.value[i] })),
					},
					{
						name: '访问来源',
						type: 'pie',
						radius: ['40%', '58%'],
						top: '-20%',
						label: {
							show: false
						},
						itemStyle: {
							borderColor: '#fff',
							borderWidth: 2
						},
						data: outer.name.map((e, i)=>({ name: e, value: outer.value[i] })),
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

