<template>
    <div class="echarts-box" :id="id"></div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        props: {
            myData: {
                default: () => {
                    return [];
                },
            },
            id: {
                type: String,
                default: () => {
                    return '';
                },
            },
            colorList: {
                type: Array
            },
        },
        data() {
            return {}
        },
        mounted() {
            this.initEcharts();
        },
        methods: {
            initEcharts() {
                let _option = this.defaultOption();
                let myChart = this.$echarts.init(document.getElementById(this.id));
                myChart.setOption(_option);
                window.addEventListener('resize', () => {
                    myChart.resize();
                })
            },
            defaultOption() {
                var option = {
                    color: this.colorList[0],
                    title: {
                        text: '热度指数 67.2',
                        x: 'center',
                        y: '30%',
                        textStyle: {
                            //color: "#000",
                            fontSize: 14
                        },
                    },
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
                        data: this.myData.name,
                        //设置轴线的属性
                        axisLine: {
                            lineStyle: {
                                color: '#EAEDF7',
                                type: "dashed"
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#97A0C3",   //这里用参数代替了
                                fontSize: '12'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#EAEDF7',
                                type: 'dashed',
                            }
                        },
                        axisPointer: {
                            type: "shadow",
                            shadowStyle: {
                                color: "rgba(124,136,177,0.1)"
                            }
                        }

                    },
                    yAxis: {
                        name: '曝光量',
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} ',
                            textStyle: {
                                color: "#97A0C3",   //这里用参数代替了
                                fontSize: '12'
                            }
                        },
                        nameTextStyle: {
                            color: "#97A0C3",
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#EAEDF7',
                                type: "dashed"
                                //width:8,//这里是为了突出显示加上的
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#EAEDF7',
                                type: 'dashed',
                            }
                        },
                    },
                    series: [
                        {
                            data: this.myData.value,
                            type: 'line',
                            areaStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(0, 128, 255, 0.3)',
                                    }, {
                                        offset: 0.6,
                                        color: 'rgba(0, 128, 255, 0.2)',
                                    }, {
                                        offset: 1,
                                        color: 'rgba(255, 255, 255, 0)'
                                    }],
                                    global: false // 缺省为 false
                                }
                            },
                            lineStyle: {
                                width: 2 / 144 * window.rem,
                            },
                            smooth: true
                        }
                    ]
                };
                return option;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .echarts-box {
        width: 100%;
        height: 100%;
    }
</style>

