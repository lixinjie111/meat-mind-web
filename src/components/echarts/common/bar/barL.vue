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
			default:()=>{
				return  ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564','#BF6E9B','#CECE7E','#91C2F2','#B7C8EA','#FF9F7F','#91C2F2','#B380B6','#EDA8AD','#738AD4','#FF9F7F'];
			},
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
                left: 14,
                right: '6%',
                bottom: '6%',
                top: '10%',
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
                         normal: {
                            //    barBorderRadius:[0,30,30,0]
						 },
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

