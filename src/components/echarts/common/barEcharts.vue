<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
	props: ['myData',"id",'colorList'],
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
			window.onresize = ()=>{
				myChart.resize();
			}
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
            xAxis: {
                type: 'category',
                data: this.myData.name
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} '
                },
                axisLine: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
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
                               barBorderRadius:30
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

