<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import {setBarWidth} from "./utils"
export default {
	name:"barHM2",
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
			_option = setBarWidth(_option,'barHM')
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
				formatter: function (params) {
						var str = '';//声明一个变量用来存储数据
						str += params[0].name +'</br>';
						//图显示的数据较多时需要循环数据，这样才可以成功的给多条数据添加单位
						for(var i=0; i<params.length; i++){
							str += params[i].marker+ params[i].seriesName +': '+ params[i].data + '万人' +'</br>';
						}
						return str;
					}
			},
            grid: {
                left: 40,
                right: 16,
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
						color:'#EAEDF7',
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
						color:'#636E95',
						type: "dashed"
					}
				},
				axisLabel: {
					textStyle: {
						color: "#97A0C3",   
						fontSize:12
					}
				},
				axisPointer: {
					type: "shadow",
					shadowStyle: {
						color: "rgba(124,136,177,0.1)"
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

