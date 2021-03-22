<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import lodash from 'lodash'
let id = 0
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
				++id
				return `bar-${id}`;
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
					}
				},
				legend: {
					type: 'scroll',
					bottom:-2,
					icon:"circle",
					pageFormatter: '',//隐藏翻页的数字
					pageButtonItemGap: 1,//翻页按钮的两个之间的间距
					pageButtonGap:1,
					pageIconSize:10,
					pageTextStyle:{
						width:0,
						fontSize:2
					},
					itemWidth:6,
					itemHeight:6,
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:12
					},
					data: this.myData.legName,
				},
				grid: {
					top: '5%',
					left: 10,
					right: 10,
					bottom: 25,
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
					}
					
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