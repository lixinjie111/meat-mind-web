<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
	let id = 0
import {setBarWidth} from "./utils"	
export default {
	name:"barEchartsMark",
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
				return `bar-chart-${id}`;
			},
		},
		colorList:{
			type:Array,
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
			_option = setBarWidth(_option,'col')
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption(_option);
			window.addEventListener('resize',()=>{
				myChart.resize();
			})
		},
		defaultOption() {
			var option = {
            color: this.colorList[0],
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: 2,
                right: 6,
                bottom: '6%',
                top: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
				data: this.myData.name,
				//设置轴线的属性
				axisLine:{
					lineStyle:{
						color:'#EAEDF7',
						type:"dashed"
					}
				} ,
				axisLabel: {
					show: true,
					interval:0,
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
				},
            },
            yAxis: {
                type: 'value',
                axisLabel: {
					formatter: '{value} ',
					textStyle: {
						color: "#97A0C3",   
						fontSize:'12'
					}
                },
				axisLine:{
					lineStyle:{
						color:'#EAEDF7',
						type:"dashed"
					}
				},
                splitLine: {
                    lineStyle: {
						color:'#EAEDF7',
                        type: 'dashed',
                    }
                },
            },
            series: [
                {
                    data: this.myData.value,
                    type: 'bar',
					label:{
						position: 'right',
					}
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

