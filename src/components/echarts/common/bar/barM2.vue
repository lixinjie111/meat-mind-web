<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import lodash from 'lodash'
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
				++id
				return `bar-m-${id}`;
			},
		},
		colorList:{
			type:Array,
		},
		xName:{
			type:String,
			default:'',
		},
		yName:{
			type:String,
			default:'',
		},
		option: { type: Object, default: ()=>({}) },
	},
	data () {
		return {

		}
	},
	watch:{
		myData(a,b){
			this.initEcharts();
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
				color: this.colorList,
				tooltip: {
					trigger: 'axis',
					axisPointer: {            // 坐标轴指示器，坐标轴触发有效
						type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
					},
					extraCssText: 'background: rgba(0,0,0,0.8)',
					formatter: (params)=>{
						const [ first, second ] = params;
						const width1 = 60;
						const width2 = 80;
						const width3 = 60;
						return (
							`<div style="width: 340px;padding: 10px;">
								<div style=" border-bottom: 1px solid rgba(0,0,0,0.4); padding-bottom: 6px;margin-bottom: 6px;">${first.name}</div>
								<div>
									<div style="display: inline-block; width: 100px">MRR 构成</div>
									<div style="display: inline-block; width: ${width1}px">金额</div>
									<div style="display: inline-block; width: ${width2}px">增长率</div>
									<div style="display: inline-block; width: ${width3}px">客户数</div>
								</div>
								<div>
									<div style="display: inline-block; width: 100px"><span style="display: inline-block; width: 10px; height: 10px; background: ${first.color};margin-right: 6px"></span>${first.seriesName}</div>
									<div style="display: inline-block; width: ${width1}px">${first.data.money}</div>
									<div style="display: inline-block; width: ${width2}px; color: ${first.color};">+${first.data.increase}%</div>
									<div style="display: inline-block; width: ${width3}px">${first.data.clientele}</div>
								</div>
								<div>
									<div style="display: inline-block; width: 100px"><span style="display: inline-block; width: 10px; height: 10px;background: ${second.color};margin-right: 6px"></span>${second.seriesName}</div>
									<div style="display: inline-block; width: ${width1}px">${second.data.money}</div>
									<div style="display: inline-block; width: ${width2}px; color: ${second.color};">+${second.data.increase}%</div>
									<div style="display: inline-block; width: ${width3}px">${second.data.clientele}</div>
								</div>
							</div>`
						)
					}
				},
				legend: {
					type: 'scroll',
					bottom:0,
					pageFormatter: '',//隐藏翻页的数字
					pageButtonItemGap: -6,//翻页按钮的两个之间的间距
					data: this.myData.legName,
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:'12'
					}
				},
				grid: {
					top: '5%',
					left: '3%',
					right: '3%',
					bottom: 30,
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: this.myData.name,
					name: this.xName,
					axisLine:{
						lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
						}
					} ,
					axisLabel: {
						show: true,
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
					axisPointer:{
						type:"shadow",
						shadowStyle:{
							color:"rgba(124,136,177,0.1)"
						}
					},

				},
				yAxis: {
					type: 'value',
					name: this.yName,
					axisLabel: {
						textStyle: {
							color: "#97A0C3",   //这里用参数代替了
							fontSize:'12'
						}
					},
					axisLine:{
						show:true,
						lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
							//width:8,//这里是为了突出显示加上的
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
				series:this.myData.value
			};
			return lodash.merge({}, option, this.option);
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
