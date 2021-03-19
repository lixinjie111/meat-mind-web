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
				return `line-${id}`;
			},
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
		colorList:{
			type:Array,
		},
	},
    watch:{
		myData(){
			this.initEcharts();
    	}
	},
	data () {
		return {

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
                trigger: 'axis'
			},
			legend: {
				bottom:0,
				data:this.myData.legName,
			},
            grid: {
				top: '10%',
				left: 10,
				right: 10,
				bottom: 25,
                containLabel: true,
            },
            xAxis: {
                type: 'category',
				data: this.myData.name,
                name: this.xName,
				//设置轴线的属性
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
					formatter: '{value} ',
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
            series: this.myData.value
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

