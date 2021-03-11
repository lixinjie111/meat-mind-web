<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import echarts from 'echarts'
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
				// formatter: function(list) {
				// 			var msg = "";
				// 			for (let i in list) {
				// 				 if(list[i].componentIndex=='0'){
				// 					msg+=`过度反击状态—过度舆论<br/>反击将会造成二次传播扩散`;
				// 				 }else if(list[i].componentIndex=='1'){
				// 					msg+=`过度反击状态—过度舆论<br/>反击将会造成二次传播扩散`;
				// 				 }else{
				// 					msg+=`不需反击状态—舆情关注不足<br/>且自动衰减，可酌情选择是否处理`;
				// 				 }
				// 			}
				// 			return msg;
				// 		}
			},
			legend: {
				bottom:0,
				data:['负面舆情走势','有效反击走势预测','二次传播状态预测','反击预警线','当前时间',]
			},
            grid: {
                left: 14,
                right: '6%',
                bottom: 25,
                top: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
				data: ['1月1日',	'1月4日',	'1月7日',	'1月10日',	'1月13日',	'1月16日',	'1月19日',	'1月21日',	'1月24日',	'1月27日',	'1月30日'],
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
            yAxis: {
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
            series: [
				
				{
					name: '有效反击走势预测',
					type: 'line',
					smooth:true,
					markLine: {
						symbol: 'none',
						label: {show: false},
						lineStyle:{
							type:'dashed',
							color: '#53A58A',
							width: 1
						},
						data: [
							{xAxis: '1月16日'},
						]
					},
					itemStyle: {
						normal: {
							lineStyle: {
								type: 'dashed'
							}
						}
					},
					data: [11,	591,	2391,	2964,	1646,	816,	386,	300,	157,	128,	128 ]
				},
				{
					name: '二次传播状态预测',
					type: 'line',
					smooth:true,
					itemStyle: {
						normal: {
							lineStyle: {
								type: 'dashed'
							}
						}
					},
					data:[11,	591,	4367,	5513,	5140,	3943,	3788,	4357,	4900,	4564,	4021]
				},
				{
					name: '负面舆情走势',
					type: 'line',
					data: [11,	591,	4367,	5513,	5140,	3852,	2831,	1978,	1254,	730,	502],
					smooth:true,
					itemStyle: {
						normal: {
							lineStyle: {
								color:'#8AE6C7',
								width:3,
							}
						}
					},
					
				},
				{
					name: '反击预警线',
					type: 'line',
					smooth:true,
					itemStyle: {
						normal: {
							lineStyle: {
								type: 'dashed',
								color:'#f00',
							}
						}
					},
					data:[1500,	1500,	1500,	1500,	1500,	1500,	1500,	1500,	1500,	1500,	1500,
]
				},
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

