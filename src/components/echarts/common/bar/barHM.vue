<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import {setBarWidth} from "./utils"
export default {
	name:"barHM",
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
            color: this.colorList,
            tooltip: {
                trigger: 'axis'
			},
			legend: {
				icon:"circle",
				itemWidth:6,
				itemHeight:6,
                bottom: 0,
                data: this.myData.legName,
            },
            grid: {
                left: 14,
                right: '6%',
                bottom: 50,
                top: '10%',
                containLabel: true,
            },
            xAxis: {
				type: 'value',
				//设置轴线的属性
				splitLine:{
					show:false
				},
					axisLine:{
						lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
						}
					} ,
				axisLabel: {
					formatter: '{value}%',
					textStyle: {
						color: "#97A0C3",   
						fontSize:'12'
					}
				}
            },
            yAxis: {
                type: 'category',
                data: this.myData.name,
				axisLine:{
					lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
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
				}
            },
            series: this.myData.value,
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

