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
				trigger: 'axis',
				confine:true
				// formatter: function(list) {
				// 	var msg = "";
				// 	for (let i in list) {
				// 		if (i == 0) {
				// 			msg += list[i].name + "s<br>";
				// 		}
				// 		msg += list[i].seriesName + "：" + list[i].data + "<br>";
				// 		// if (list[i].seriesName == "SCL") {
				// 		// 	msg += list[i].seriesName + "：" + list[i].data + "<br>";
				// 		// }else{
							
				// 		// }
				// 	}
				// 	return msg;
				// }
			},
            grid: {
                left: 2,
                right: 2,
                bottom: 30,
                top: '10%',
                containLabel: true,
			},
			legend: {
				icon: 'circle',
				itemWidth:6,
				itemHeight:6,
				data: this.myData.legName,
				bottom: 0,
				textStyle: {
					fontSize: 12,
					color: '#97A0C3'
				}
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
            yAxis: [
			{
				// name: '情绪指标',
				type: 'value',
				nameTextStyle:{
					color:"#97A0C3", 
					fontSize:12,  
				},
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
			{
				// type: 'value',
				// name: '眼动注视指数',
				// nameTextStyle:{
				// 	color:"#97A0C3", 
				// 	fontSize:12,  
				// },
				textStyle: {
					color: "#97A0C3",   //这里用参数代替了
					fontSize:'12'
				},
				axisLabel: {
					formatter: `{value}${this.myData.formatter}`,
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
			}
		],
			
            series: this.myData.value
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

