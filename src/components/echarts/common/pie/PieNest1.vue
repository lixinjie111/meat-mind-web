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
			var option = {
                color:this.colorList,
				title: [{
					text: '报表名'
				},
					{
						text: '{h1|匹配度}\n\n{h2|70%}',
						top: '32%',
						left: 'center',
						textStyle: {
							rich: {
								h1: {
									fontSize: 20
								},
								h2: {
									fontSize: 12
								}
							}
						}
					}],
				legend: {
					data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
					top: '80%',
					width: '60%'
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
						data: [
							{value: 1548, name: '搜索引擎'},
							{value: 775, name: '直达'},
							{value: 679, name: '营销广告'}
						]
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
						data: [
							{value: 1048, name: '百度'},
							{value: 335, name: '直达'},
							{value: 310, name: '邮件营销'},
							{value: 251, name: '谷歌'},
							{value: 234, name: '联盟广告'},
							{value: 147, name: '必应'},
							{value: 135, name: '视频广告'},
							{value: 102, name: '其他'}
						]
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

