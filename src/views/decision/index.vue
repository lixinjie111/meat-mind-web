<template>
    <div class="intelligent-decision-container">
        <!-- 智能决策 -->
        <Side></Side>
        <div class="intelligent-decision-box">
            <Header :target="'智能决策'"></Header>
            <div class="content">
                <!-- 智能决策 -->
                <div class="top">
                    <div class="title">
                        <div class="title-left">智能诊断</div>
                        <div class="title-right">
                            <div class="years">
                                <div>季度</div>
                                <div>半年</div>
                                <div class="active">全年</div>
                            </div>
                            <DatePicker :value="date" format="yyyy/MM/dd" type="daterange" placement="bottom-end"
                                        placeholder="请选择时间" class="date-range"></DatePicker>
                        </div>
                    </div>
                    <div class="chart">
                        <div class="chart-left">
                            <div id="myChart" style="width:100%;height: 100%;"></div>
                            <div class="legend">
                                <img src="../../../src/static/img/decision/legend@2x.png">
                            </div>
                            <div class="chart-tooltip red">
                                <div class="value"><span>￥</span>6000万</div>
                                <div class="month">2020年8月</div>
                            </div>
                            <div class="chart-tooltip blue">
                                <div class="value"><span>￥</span>7200万</div>
                                <div class="month">目标</div>
                            </div>
                        </div>
                        <img class="chart-right" src="../../../src/static/img/decision/right@2x.png"/>
                    </div>
                </div>
                <div class="bottom">
                    <img src="../../../src/static/img/decision/bottom@2x.png"/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Side from "../../components/Side"
    import Header from "../../components/HeaderDefault"

    export default {
        name: "index",
        components: {Side, Header},
        data() {
            return {
                date: ['2020-01-01', '2020-12-31'],
                myChart: null
            }
        },
        mounted() {
            this.initChat();
            window.onresize = () => {
                this.myChart.resize();
            }
        },
        methods: {
            initChat() {
                // 初始化echarts实例
                this.myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                let min = 35; //Y轴最小值
                let max = 80; //Y轴最大值
                let dataAxis = ['0月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
                let data = [48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72]; //目标
                let data2 = [max - 48, max - 50, max - 52, max - 54, max - 56, max - 58, max - 60, max - 62, max - 64, max - 66, max - 68, max - 70, max - 72]; //正常区域
                let data3 = [48, 51, 52, 53, 55, 59, 64, 61, 60]; //实际数据
                let data4 = [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74]; //上边界
                let data5 = [46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70]; //下边界
                let effectValues = [
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 60,
                        symbolSize: 7
                    }
                ]; //实际数据预警点
                let effectValues1 = [
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 72,
                        symbolSize: 7
                    }
                ]; //目标最后点
                let effectValues2 = [
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 64,
                        symbolSize: 15
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    }
                ]; //6月份点
                let option = {
                    backgroundColor: "#fff",
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                type: 'solid',
                                width: 1,
                                color: '#E9E9E9'
                            }
                        },
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        formatter: (params) => {
                            let style = "";
                            if (params[0].data < params[2].data || params[0].seriesName != '实际') {
                                style = "display:none"
                            } else {
                                style = "display:block"
                            }
                            let str = '<div class="chart-tooltip" style="' + style + '">' +
                                '<div class="value">' + '<span>￥</span>' + params[0].data * 100 + '万</div>' +
                                '<div class="month"> ' + '2020年' + params[0].name + ' </div>' +
                                '</div>';
                            return str;
                        }
                    },
                    grid: {
                        left: '24px',
                        right: '24px',
                        top: '30px',
                        bottom: '24px',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: dataAxis,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'rgba(0, 0, 0, 0.65)',
                                fontSize: 12,
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                type: 'solid',
                                color: '#E9E9E9',
                                width: 1,
                            }
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '百万',
                        nameTextStyle: {
                            color: 'rgba(0, 0, 0, 0.65)'
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: 'rgba(0, 0, 0, 0.65)',
                                fontSize: 12
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff',
                                width: 1,
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#E9E9E9'
                            }
                        },
                        min: min,
                        max: max
                    }],
                    series: [
                        {
                            name: '实际',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        width: 6,
                                        type: 'solid',
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(187, 134, 252, 1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(94, 139, 255, 1)'
                                        }]),
                                        shadowColor: 'rgba(3, 13, 41, .3)',
                                        shadowBlur: 10,
                                        shadowOffsetY: 15,
                                    }
                                },
                            },
                            zlevel: 1,
                            data: data3
                        },
                        {
                            name: '上边界',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        width: 1,
                                        type: 'dashed',
                                        color: "rgba(35, 115, 255, .5)"
                                    }
                                },
                            },
                            data: data4
                        },
                        {
                            name: '下边界',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        width: 1,
                                        type: 'dashed',
                                        color: "rgba(245, 74, 69, .5)"
                                    }
                                },
                            },
                            data: data5
                        },
                        {
                            name: '目标',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            stack: 100,
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(252, 212, 201, 0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(252, 212, 201, .5)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(252, 212, 201, .8)'
                                    }]),
                                    lineStyle: {
                                        width: 1,
                                        type: 'dashed',
                                        color: "#DFDBDD"
                                    }
                                },
                            },
                            areaStyle: {
                                normal: {}
                            },
                            data: data,
                        },
                        {
                            name: '正常',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            stack: 100,
                            itemStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(184, 205, 251, 0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(184, 205, 251, .5)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(184, 205, 251, .8)'
                                    }]),
                                    lineStyle: {
                                        width: 0,
                                        type: 'solid',
                                        color: "#FFFFFF"
                                    }
                                },
                            },
                            areaStyle: {
                                normal: {}
                            },
                            data: data2,
                        },
                        {
                            name: "预警",
                            type: 'effectScatter',
                            coordinateSystem: 'cartesian2d',
                            data: effectValues,
                            symbol: 'circle',
                            effectType: 'ripple',
                            showEffectOn: 'render',
                            cursor: 'pointer',
                            rippleEffect: {
                                period: 5,
                                scale: 5,
                                brushType: 'fill',
                            },
                            itemStyle: {
                                normal: {
                                    color: '#F54A45',
                                    shadowBlur: 5,
                                    shadowColor: '#F54A45'
                                }
                            },
                            zlevel: 1
                        },
                        {
                            name: "最终目标",
                            type: 'effectScatter',
                            coordinateSystem: 'cartesian2d',
                            data: effectValues1,
                            symbol: 'circle',
                            effectType: 'ripple',
                            showEffectOn: 'render',
                            cursor: 'pointer',
                            rippleEffect: {
                                period: 5,
                                scale: 5,
                                brushType: 'fill',
                            },
                            itemStyle: {
                                normal: {
                                    color: '#2373FF',
                                    shadowBlur: 5,
                                    shadowColor: '#2373FF'
                                }
                            },
                            zlevel: 1
                        },
                        {
                            name: "6月点",
                            type: 'scatter',
                            symbol: 'circle',
                            data: effectValues2,
                            itemStyle: {
                                normal: {
                                    borderWidth: '2',
                                    borderType: 'solid',
                                    borderColor: '#ffffff',
                                    color: '#999999',
                                    shadowColor: '#515a6e',
                                    shadowBlur: 10
                                }
                            },
                            cursor: 'pointer',
                            zlevel: 1
                        }
                    ]
                };
                this.myChart.setOption(option);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .intelligent-decision-container {
        display: flex;

        .intelligent-decision-box {
            display: flex;
            flex-direction: column;
            width: calc(100vw - 88px);

            .content {
                width: 100%;
                height: calc(100vh - 56px);
                padding: 0 24px 24px;
                margin: 0 auto;
                overflow-y: scroll;

                .top {
                    margin-top: 16px;
                    background: #FFFFFF;
                    border-radius: 4px;

                    .title {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 15px 24px 14px;
                        border-bottom: 1px solid #F0F0F0;

                        .title-left {
                            font-size: 18px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #212121;
                        }

                        .title-right {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .years {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;

                                > div {
                                    margin-right: 8px;
                                    width: 60px;
                                    height: 32px;
                                    line-height: 32px;
                                    background: #FAFAFA;
                                    border-radius: 2px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #333333;
                                    text-align: center;

                                    &.active {
                                        background: rgba(35, 115, 255, 0.08);
                                        font-size: 14px;
                                        font-family: PingFangSC-Medium, PingFang SC;
                                        font-weight: 500;
                                        color: #2373FF;
                                    }
                                }
                            }

                            .date-range {
                                width: 200px;
                                margin-left: 16px;
                            }
                        }
                    }

                    .chart {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;

                        .chart-left {
                            position: relative;
                            padding-top: 10px;
                            width: 883px;
                            height: 440px;

                            .red {
                                position: absolute;
                                right: 160px;
                                top: 170px;
                            }

                            .blue {
                                position: absolute;
                                right: 10px;
                                top: 125px;
                            }

                            .legend {
                                margin-top: -5px;
                                text-align: center;

                                > img {
                                    width: 104px;
                                    height: 22px;
                                }
                            }
                        }

                        .chart-right {
                            width: 421px;
                            height: 470px;
                        }
                    }
                }

                .bottom {
                    margin-top: 16px;

                    > img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
    .chart-tooltip {
        padding: 5px 12px;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background: rgba(255, 255, 255, 0.2);

        .value {
            margin-left: -5px;
            font-size: 24px;
            font-family: HelveticaNeue-Medium, HelveticaNeue;
            font-weight: 500;
            color: #212121;
            line-height: 32px;

            > span {
                font-size: 18px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                color: #212121;
            }
        }

        .month {
            margin-top: 4px;
            font-size: 14px;
            font-family: HelveticaNeue;
            color: #666666;
            line-height: 22px;
        }

        &.red {
            border: 1px solid #F54A45;
        }

        &.blue {
            padding: 3px 4px;
            border: 1px solid #2373FF;
            background: rgba(255, 255, 255, 0.8);

            .value {
                font-size: 14px;
                line-height: 18px;

                > span {
                    font-size: 16px;
                }
            }

            .month {
                margin-top: 1px;
                font-size: 12px;
                line-height: 18px;
            }
        }
    }
</style>
