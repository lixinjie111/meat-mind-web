<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import {setBarWidth} from "./utils"
export default {
    name:"barCH",
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
            _option = setBarWidth(_option,'row')
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
                    },
                    axisLine:{
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
                        // label: {
                        //     show: true,
                        //     margin: 30
                        // },
                        type: "shadow",
                        shadowStyle: {
                            color: "rgba(124,136,177,0.1)"
                        }
                    },
                    data:  this.myData.name,
                    axisLabel: {
                        fontSize: 12,
                        color: "#97A0C3",   
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
						itemStyle: {
					
								//barBorderRadius:[0,2 / 144 * window.rem,2 / 144 * window.rem,0]
						
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

