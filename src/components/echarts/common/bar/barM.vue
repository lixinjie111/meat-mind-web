<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import lodash from 'lodash'
import {setBarWidth} from "./utils"
let id = 0
export default {
	name:"barM",
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
			_option = setBarWidth(_option,'barM')
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
					axisPointer: {            
						type: 'shadow'        
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
						color: "#97A0C3",   
						fontSize:12
					},
					data: this.myData.legName,
				},
				grid: {
					top: this.yName?40:10,
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
							color: "#97A0C3",   
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
					nameTextStyle:{
						color:'#636E95'  
					},
					axisLabel: {
						textStyle: {
							color: "#97A0C3",   
							fontSize:'12'
						}
					},
					axisLine:{
						show:true,
						lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
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