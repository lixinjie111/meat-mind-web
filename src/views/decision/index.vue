<template>
    <div class="intelligent_decision">
        <!-- 智能决策 -->
        <Header></Header>
        <div class="content">
            <!-- 智能决策 -->
            <div class="nav">智能决策</div>
            <div class="top">
                <img src="../../../src/static/img/decision/top@2x.png"/>
            </div>
            <div class="middle">
                <div class="title">
                    <p>智能诊断</p>
                    <div class="title-right">
                       <div class="years">
                          <p>季度</p>
                          <p>半年</p>
                          <p class="active">全年</p>
                       </div>
                       <DatePicker :value="date" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择时间" class="date-range"></DatePicker>
                    </div>
                </div>
                <div class="chart">
                    <div id="myChart" style="width:100%;height: 100%;"></div>
                    <div class="legend">
                        <img src="../../../src/static/img/decision/legend@2x.png">
                    </div>
                    <div class="chart-tooltip red">
                        <div class="value"><span>￥</span>60百万</div>
                        <div class="month">2020年8月</div>
                    </div>
                    <div class="chart-tooltip blue">
                        <div class="value"><span>￥</span>72百万</div>
                        <div class="month">目标</div>
                    </div>
                </div>
                <div class="info">
                    <img class="left" src="../../../src/static/img/decision/middle@2x.png"/>
                    <div class="right">
                        <div class="right-title">建议</div>
                        <ul class="right-ul">
                            <li @click="toDetail">
                                <p class="li-title">消费者</p>
                                <div class="li-content">
                                    <div class="left">
                                        <p><span>•</span>建议及时进行引流，减少目标客群年龄限制</p>
                                        <p><span>•</span>应加大活动力度和推广度，提高消费者活跃度和转化率</p>
                                    </div>
                                    <div class="right">
                                        <span>查看详情</span>
                                        <img src="../../../src/static/img/decision/arrow@2x.png"/>
                                    </div>
                                </div>
                            </li>
                            <li @click="toDetail">
                                <p class="li-title">渠道</p>
                                <div class="li-content">
                                    <div class="left">
                                        <p><span>•</span>建议扩充抖音、快手短视频平台的推广力度</p>
                                        <p><span>•</span>微信公众号产品推广时间段由工作时间向休闲时间段倾斜</p>
                                    </div>
                                    <div class="right">
                                        <span>查看详情</span>
                                        <img src="../../../src/static/img/decision/arrow@2x.png"/>
                                    </div>
                                </div>
                            </li>
                            <li @click="toDetail">
                                <p class="li-title">品牌</p>
                                <div class="li-content">
                                    <div class="left">
                                        <p><span>•</span>建议及时进行公关，并监控公关效果，以便进行二次公关</p>
                                        <p><span>•</span>建议增加产品个性化，感性化的内容推广</p>
                                    </div>
                                    <div class="right">
                                        <span>查看详情</span>
                                        <img src="../../../src/static/img/decision/arrow@2x.png"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <img src="../../../src/static/img/decision/graph1@2x.png"/>
                    <img src="../../../src/static/img/decision/graph2@2x.png"/>
                </div>
                <div>
                    <img src="../../../src/static/img/decision/graph3@2x.png"/>
                    <img src="../../../src/static/img/decision/graph4@2x.png"/>
                </div>
                <div>
                    <img src="../../../src/static/img/decision/graph5@2x.png"/>
                    <img src="../../../src/static/img/decision/graph6@2x.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/HeaderDefault"

    export default {
        name: "index",
        components: {Header},
        data(){
            return {
                date: ['2020-01-01', '2020-12-31'],
                myChart: null
            }
        },
        mounted() {
            this.initChat();
            window.onresize = ()=>{
                this.myChart.resize();
            }
        },
        methods: {
            toDetail() {
                this.$router.push({name: "business-analysis"})
            },
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
                        symbolSize: 15
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
                        symbolSize: 15
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
                                '<div class="value">' + '<span>￥</span>' + params[0].data + '百万</div>' +
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
                                        color: "#D7D8DC"
                                    }
                                },
                            },
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
                                        color: 'rgba(245, 74, 69, 0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(245, 74, 69, .1)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(245, 74, 69, .2)'
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
                                        color: 'rgba(35, 115, 255, 0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(35, 115, 255, .1)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(35, 115, 255, .2)'
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
                                period: 3,
                                scale: 3,
                                brushType: 'stroke',
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
                                period: 3,
                                scale: 3,
                                brushType: 'stroke',
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
                            type: 'effectScatter',
                            coordinateSystem: 'cartesian2d',
                            data: effectValues2,
                            symbol: 'circle',
                            effectType: 'ripple',
                            showEffectOn: 'render',
                            cursor: 'pointer',
                            rippleEffect: {
                                period: 100000,
                                scale: 2,
                                brushType: 'stroke',
                            },
                            itemStyle: {
                                normal: {
                                    color: '#999999',
                                    shadowBlur: 5,
                                    shadowColor: '#999999'
                                }
                            },
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
    .intelligent_decision {
        .content {
            min-height: calc(100vh - 56px);
            padding: 0 24px 24px;
            margin: 0 auto;

            .nav {
                padding: 22px 24px;
                font-size: 20px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #212121;
            }

            .top {
                > img {
                    width: 100%;
                    height: 100%;

                }
            }

            .middle {
                padding-bottom: 24px;
                background: #FFFFFF;

                .title {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 24px;
                    border-bottom: 1px solid #F0F0F0;

                    > p {
                        font-size: 16px;
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

                            >p {
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
                    position: relative;
                    padding-top: 10px;
                    width: 1392px;
                    height: 460px;

                    .red {
                        position: absolute;
                        right: 320px;
                        top: 180px;
                    }

                    .blue {
                        position: absolute;
                        right: 30px;
                        top: 125px;
                    }

                    .legend {
                        text-align: center;

                        >img {
                           width: 1392px;
                           height: 60px;
                        }
                    }
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;

                    .left {
                        width: calc(50% - 30px);
                        height: 100%;
                    }

                    .right {
                        width: calc(50% - 30px);

                        .right-title {
                            padding: 16px 24px;
                            font-size: 16px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #212121;
                        }

                        .right-ul {
                            > li {
                                list-style-type: none;
                                padding: 12px 24px;
                                cursor: pointer;
                                border-bottom: 1px solid #F0F0F0;

                                &:first-child {
                                    border-top: 1px solid #F0F0F0;
                                }

                                &:hover {
                                    background: #F4F8FF;
                                }

                                .li-title {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #333333;
                                }

                                .li-content {
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;

                                    .left {
                                        width: calc(100% - 85px);

                                        > p {
                                            margin-top: 4px;
                                            font-size: 12px;
                                            font-family: PingFangSC-Regular, PingFang SC;
                                            font-weight: 400;
                                            color: #999999;

                                            > span {
                                                margin-right: 5px;
                                                color: #2373FF;
                                            }
                                        }
                                    }

                                    .right {
                                        width: 80px;

                                        > span {
                                            font-size: 14px;
                                            font-family: PingFangSC-Regular, PingFang SC;
                                            font-weight: 400;
                                            color: #2373FF;
                                        }

                                        > img {
                                            margin-left: 8px;
                                            width: 16px;
                                            height: 16px;
                                            vertical-align: text-bottom;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .bottom {
                > div {
                    margin-top: 16px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    > img {
                        width: calc(50% - 12px);
                        height: 100%;
                    }
                }
            }
        }
    }
</style>
<style lang="scss">
    .chart-tooltip {
        padding: 12px 16px;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.15);

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
