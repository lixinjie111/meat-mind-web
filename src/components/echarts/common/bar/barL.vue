<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import {setBarWidth} from "./utils"
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
		},
	},
	data () {
		return {
			
		}
	},
    mounted() {
        	this.initEcharts();
	},
	watch:{
		myData(a,b){
			this.initEcharts();
		}
	},
	methods: {
		initEcharts() {
			let _option = this.defaultOption();
			_option = setBarWidth(_option,'row')
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
				top: '10%',
				left: 20,
				right: 20,
				bottom: 5,
                containLabel: true,
            },
            yAxis: {
                type: 'category',
				data: this.myData.name,
				//设置轴线的属性
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
				axisLabel: {
					textStyle: {
						color: "#97A0C3",   
						fontSize:'12'
					}
				},
				axisPointer:{
					type:"shadow",
					shadowStyle:{
						color:"rgba(124,136,177,0.1)"
					}
				},
            },
            xAxis: {
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
				} ,
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

