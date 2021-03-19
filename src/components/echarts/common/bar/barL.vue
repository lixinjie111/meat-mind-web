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
	watch:{
		myData(a,b){
			this.initEcharts();
		}
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
				axisLabel: {
					show: true,
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
				},
            },
            xAxis: {
                type: 'value',
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
				} ,
				splitLine: {
					show:true,
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
					barWidth: '10',
					itemStyle: {
                  
                            //    barBorderRadius:[0,30,30,0]
				
						 emphasis:{
							 color:'#FF9F7F'
						 }
                    },
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

