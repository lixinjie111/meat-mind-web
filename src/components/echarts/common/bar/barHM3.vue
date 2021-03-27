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
				trigger: 'axis',
				// formatter: function (params) {
				// 		var str = '';//声明一个变量用来存储数据
				// 		str += params[0].name +'</br>';
				// 		//图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
				// 		for(var i=0; i<params.length; i++){
				// 			str += params[i].marker+ params[i].seriesName +': '+ params[i].data + '万人' +'</br>';
				// 		}
				// 		return str;
				// 	}
			},
            grid: {
                left: 0,
                right: 50,
                bottom: 0,
                top: 0,
                containLabel: false,
            },
            xAxis: {
				type: 'value',
				//设置轴线的属性
				show:false,
				axisLine:{
					lineStyle:{
						color:'#E9EBF1',
					}
				} ,
				axisLabel: {
					formatter: '{value}%',
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:'12'
					}
				},

            },
            yAxis: {
                type: 'category',
				show:false,
                data: this.myData.name,
				axisLine:{
					show:false,
					lineStyle:{
						color:'#636E95',
						fontSize:14/144*window.rem,
						//width:8,//这里是为了突出显示加上的
					}
				},
				axisLabel: {
					textStyle: {
						color:'#636E95',
						fontSize:14/144*window.rem,
					}
				},
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

