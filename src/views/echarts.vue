<template>
    <div class="main">
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            // var dataIPSxAxis = ['0月', '1月', '2月', '3月', '4月', '5月','6月','7月', '8月', '9月','10月','11月','12月'];
            // var dataIPS = [48,52,56,60,64,68,72,76,80,84,88,92,96];
            // var dataIPS2 = [100-48,100-52,100-56,100-60,100-64,100-68,100-72,100-76,100-80,100-84,100-88,100-92,100-96];

            var xDataArr = ['0月','1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            var yDataArr = [48,52,56,60,64,68,72,76,80,84,88,92,96]
            var yDataArr2 = [100-48,100-52,100-56,100-60,100-64,100-68,100-72,100-76,100-80,100-84,100-88,100-92,100-96]
            var option = {
                xAxis: {
                    type: 'category',
                    data: xDataArr,
                    boundaryGap: false, // 第一个值紧挨Y轴
                },
                yAxis: {
                    type: 'value',
                    scale: true, // 脱离0值比例

                },
                legend: {
                    type: "plain",
                    data: ['a', 'b'],
                    icon: "circle",
                },
                series: [{
                    name: "a",
                    type: 'line',
                    data: yDataArr,
                    smooth: true, // 是否平滑
                    stack: 'all', // 堆叠图的设置
                    areaStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'red' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'blue' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                    {
                        name: "b",
                        type: 'line',
                        data: yDataArr2,
                        smooth: true, // 是否平滑
                        stack: 'all', // 堆叠图的设置
                        areaStyle: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [{
                                    offset: 0,
                                    color: 'pink' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'blue' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }
                ]
            }


            myChart.setOption(option);
        }
    }
}
</script>

<style scoped lang="scss">
    .main {
        display: flex;
    }
</style>