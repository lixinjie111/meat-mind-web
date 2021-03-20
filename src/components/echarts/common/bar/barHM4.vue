<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
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
							formatter: '{a}: {c}%',
			},
				legend: {
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
							splitLine: {
								show:true,
								lineStyle: {
									color:'#EAEDF7',
									type: 'dashed',
								}
							},
						axisLine:{
					show: true,
						lineStyle:{
							color:'#EAEDF7',
							type:"dashed"
						}
					} ,
				axisLabel: {
					formatter: '{value}%',
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
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

