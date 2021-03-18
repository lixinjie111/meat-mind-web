<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
	props: {
		myData:{
            type:Object,
			default:()=>{
				return {};
			},
		},
		id:{
			type:String,
			default:()=>{
				return '';
			},
		},
		colorList:{
			type:Array
		},
	},
	data () {
		return {
			
		}
	},
    mounted(){this.initEcharts()},
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
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    show: true
                },
                grid: {
                    top:20,
                    right:100,
                    bottom:10,
                    left:100,
                    containLabel: true,
                },
                xAxis: {
                    type: 'value',
                    show: false,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#ebebeb'
                        }
                    },
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisPointer: {
                        label: {
                            show: true,
                            margin: 30
                        }
                    },
                    //data: ['Sunny', 'Cloudy', 'Showers'],
                    data:  this.myData.legName,
                    axisLabel: {
                        fontSize: 12,
                        color: "#97A0C3",   //这里用参数代替了
                    },
                    formatter: function (value) {
                        return '{' + value + '| } {value|' + value + '}';
                    },
                    margin: 50,
                    rich: {
                        value: {
                            lineHeight: 1130,
                            align: 'center'
                        },
                        微博: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image:"https://pics0.baidu.com/feed/7aec54e736d12f2ed8dca052fe41e06a843568b6.jpeg?token=40d243e06ed62ccfd0463515ed8f0194&s=D72AB3470A516EC870B8A06303006063",
                            }
                        },
                        淘宝直播: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: this.myData.iconList[0],
                            }
                        },
                        抖音直播: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: this.myData.iconList[0],
                            }
                        },
                        小红书直播: {
                            height: 40,
                            align: 'center',
                            backgroundColor: {
                                image: this.myData.iconList[0],
                            }
                        },
                    }
                },
                series: [
                    {
                        name: 'City Alpha',
                        type: 'bar',
                        data: this.myData.value,
						barWidth: '10',
                        label: {
                            show: true,
                            // formatter: function(value) {
                            //     return value.data.num + '人 '+value.data.per + '%'
                            // },
                            position: 'right',
                            color: '#97A0C3',
                            fontSize: 14,
                            offset: [10, 0]
                        }
                    },
                    {
                        name: 'City Alpha',
                        type: 'bar',
                        data: this.myData.value1,
						barWidth: '10',
                        label: {
                            show: true,
                            // formatter: function(value) {
                            //     return value.data.num + '人 '+value.data.per + '%'
                            // },
                            position: 'right',
                            color: '#97A0C3',
                            fontSize: 14,
                            offset: [10, 0]
                        }
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

