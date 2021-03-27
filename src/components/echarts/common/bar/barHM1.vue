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
	watch:{
		myData(val,val1){
				this.initEcharts();	
			}
	},
    mounted() {
        	this.initEcharts();
    },
	methods: {
		initEcharts() {
			let _option = this.defaultOption();
			_option = setBarWidth(_option)
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
            grid: {
                left: 40,
                right: '2%',
                bottom: 0,
                top: '10%',
                containLabel: false,
            },
            xAxis: {
				type: 'value',
				//设置轴线的属性
				show:false,
				axisLine:{
					lineStyle:{
						color: '#EAEDF7',
						type: "dashed"
					}
				} ,
				axisLabel: {
					formatter: '{value}%',
					textStyle: {
						color: "#97A0C3",   
						fontSize:12
					}
				},

            },
            yAxis: {
                type: 'category',
                data: this.myData.name,
				axisLine:{
					show:false,
					lineStyle:{
						color: '#EAEDF7',
						type: "dashed"
					}
				},
				axisLabel: {
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:12
					}
				},
				axisPointer:{
					type:"shadow",
					shadowStyle:{
						color:"rgba(124,136,177,0.1)"
					}
				}		
                // splitLine: {
                //     lineStyle: {
				// 		color:'#E9EBF1',
                //         //type: 'dashed',
                //     }
                // },
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

