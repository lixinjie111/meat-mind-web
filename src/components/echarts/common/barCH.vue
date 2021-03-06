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
				return  ['#2373FF', '#FE774B', '#1DCEC3', '#F16E84', '#FDD352', '#7BABFF', '#FFAE93', '#77E1DB', '#F6A8B5', '#FEE597', '#BDD5FF', '#FFD7C9', '#BBF1ED', '#FBD4DA', '#FEF1CB', '#FF9F7F'];
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
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    top:20,
                    right:100,
                    bottom:10,
                    left:10,
                    containLabel: true,
                },
                xAxis: {
                    type: 'value',
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#ebebeb'
                        }
                    },
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
                    // axisLabel: {
                    //     formatter: '{value}%'
                    // }
                    // axisLabel: {
                    //     show: false
                    // },
                    // axisTick: {
                    //     show: false
                    // },

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
                    data:  this.myData.name,
                    axisLabel: {
                        fontSize: 12,
                        color: "#97A0C3",   //这里用参数代替了
                    }
                },
                series: [{
                        z: 2,
                        name: '百分比',
                        type: 'bar',
                        data: this.myData.value.map((item, index) => {
                            return {
                                value: item.label,
                                label: {
                                    color: this.colorList[index]
                                },
                                itemStyle: {
                                    color: this.colorList[index]
                                },
                                per: item.label,
                                num: item.value,

                            };
                        }),
                        //   data: yValue.map((item, i) => {
                        //       return {
                        //           value: item,
                        //           itemStyle: {
                        //               color:'#6395f9'
                        //           }
                        //       };
						//   }),
						barWidth: '10',
						itemStyle: {
							normal: {
								barBorderRadius:[0,30,30,0]
							},
							// emphasis:{
							// 	color:'#FF9F7F'
							// }
						},
                        label: {
                            show: true,
                            formatter: function(value) {
                                return value.data.num + '人 '+value.data.per + '%'
                            },
                            position: 'right',
                            color: '#333333',
                            fontSize: 12,
                            offset: [10, 0]
                        }
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

