<template>
    <div class="manage-box">
        <p class="tips">经营诊断可以智能监测营销活动效果，依据心智模型进行智能评测，针对性提出改进方案，提供海量新潮营销创意及案例</p>
        <div class="manage-overview flex">
            <div class="manage-overview-left flex-start">
                <div class="manage-overview-chart">
                    <div class="manage-overview-select">
                        <Select class="w120" value="邓老凉茶">
                            <Option value="邓老凉茶">邓老凉茶</Option>
                        </Select>
                        <Select class="w120" value="淘宝旗舰店">
                            <Option value="淘宝旗舰店">淘宝旗舰店</Option>
                        </Select>
                        <Select class="w120" value="营收状况">
                            <Option value="营收状况">营收状况</Option>
                        </Select>
                    </div>
                    <div id="myChart" style="width:100%;height: 100%;"></div>
                    <div class="chart-tooltip red">
                        <div class="value"><span>￥</span>6000万</div>
                        <div class="month">2020年8月</div>
                    </div>
                    <div class="chart-tooltip blue">
                        <div class="value"><span>￥</span>7200万</div>
                        <div class="month">目标</div>
                    </div>
                    <div class="manage-overview-list clearfix">
                        <div class="manage-overview-item fl">
                            <p>访问店铺</p>
                            <p>8,639<span>人</span></p>
                            <Compare :data="[-12.73,3.16]"></Compare>
                        </div>
                        <div class="manage-overview-item fr">
                            <p>商品访客数</p>
                            <p>126,470<span>次</span></p>
                            <Compare :data="[-13.14,11.45]"></Compare>
                        </div>
                        <div class="manage-overview-item fl">
                            <p>支付买家数</p>
                            <p>1,509<span>人</span></p>
                            <Compare :data="[-8.62,3.16]"></Compare>
                        </div>
                        <div class="manage-overview-item fr">
                            <p>平均停留时长</p>
                            <p>16.17<span>分</span></p>
                            <Compare :data="[-11.45,1.15]"></Compare>
                        </div>
                    </div>
                </div>
                <div class="manage-overview-info">
                    <p>当前经营状况</p>
                    <div class="manage-overview-result">
                        <p>低于预期</p>
                    </div>
                    <p>呈现问题</p>
                    <ul class="orange-card-ul">
                        <li>新增消费者数量下降</li>
                        <li>已有渠道扩展乏力，品牌营销卖点接受度下降，微博平台上品牌负面舆情呈上升趋势</li>
                    </ul>
                    <p>策略建议</p>
                    <ul class="blue-card-ul">
                        <li>及时进行引流，放宽对获客目标群体的年龄限制，增大对中低收入人群的覆盖</li>
                        <li>扩充抖音、快手短视频平台的推广力度；优化KOL投放结构，以主播类、时尚类为主</li>
                        <li>打造“年轻时尚”营销卖点，及时在微博平台进行公关，并监控效果</li>
                    </ul>
                    <div class="manage-overview-btn">查看全部经营分析</div>
                </div>
            </div>
            <div class="manage-overview-right">
                <img class="top-img" src="../../assets/img/dashboard/business/neurometrics-result@2x.png"/>
                <div class="bottom-img">
                    <img src="../../assets/img/dashboard/business/neurometrics-result2@2x.png"/>
                </div>
            </div>
        </div>
        <Card title="客群诊断">
            <div slot="right" class="card-right">查看用户画像详情<i class="iconfont iconarrowRight"></i></div>
            <div class="manage-card flex-start">
                <div class="manage-card-left">
                    <p>诊断结果</p>
                    <ul class="red-ul">
                        <li>新增消费者数量下降，10月下降明显，后续持续低迷</li>
                        <li>消费者整体活跃度下降，转化率持续走低</li>
                    </ul>
                    <p class="mt-24 mb-8">建议</p>
                    <ul>
                        <li class="red-text-li">及时进行引流，与理想目标客群比对结果显示应放宽对获客目
                            标群体的年龄限制，增大对中低收入人群的覆盖，以扩大客群
                        </li>
                        <li class="blue-text-li">应加大活动力度和推广度，提高消费者活跃度和转化率</li>
                    </ul>
                </div>
                <div class="manage-card-right">
                    <div class="manage-card-right-chart">
                        <p>每日新增用户 | 过去30天</p>
                        <cLine id="box5" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box5Data"></cLine>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>月活跃用户 | 上线至今</p>
                        <cLine id="box51" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box51Data"></cLine>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="媒介诊断">
            <div slot="right" class="card-right">查看媒介画像详情<i class="iconfont iconarrowRight"></i></div>
            <div class="manage-card flex-start">
                <div class="manage-card-left">
                    <p>诊断结果</p>
                    <ul class="red-ul">
                        <li>已有渠道扩展乏力，已投放的渠道如微信、微博、百度、今日头条月内触达率成连续下降趋势</li>
                    </ul>
                    <p class="mt-24 mb-8">建议</p>
                    <ul>
                        <li class="red-text-li">客群渠道匹配分析显示应扩充抖音、快手短视频平台的推广力度</li>
                        <li class="red-text-li">优化KOL投放结构，以主播类、时尚类为主</li>
                        <li class="blue-text-li">微信公众号推广时间由工作时间向休闲时间倾斜</li>
                    </ul>
                </div>
                <div class="manage-card-right">
                    <div class="manage-card-right-chart">
                        <p>渠道 | 新增用户</p>
                        <barM id="box4" :colorList="$lxjData.colorList"
                              :myData="$lxjData.box4Data"></barM>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>渠道 | 新增用户</p>
                        <lineM id="box6" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box6Data"></lineM>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="品牌诊断">
            <div slot="right" class="card-right">查看品牌画像详情<i class="iconfont iconarrowRight"></i></div>
            <div class="manage-card flex-start">
                <div class="manage-card-left">
                    <p>诊断结果</p>
                    <ul class="red-ul">
                        <li>品牌营销卖点接受度下降；</li>
                        <li>微博平台上，品牌负面舆情呈上升趋势</li>
                        <li>B站平台上，品牌热度下降明显，没有引起二次元群体的品牌认同</li>
                    </ul>
                    <p class="mt-24 mb-8">建议</p>
                    <ul>
                        <li class="red-text-li">品牌认知度分析显示应重点打造“年轻时尚”营销卖点</li>
                        <li class="red-text-li">及时在微博平台进行公关，并监控效果，适时进行二次公关</li>
                        <li class="blue-text-li">增加产品个性化、感性化的内容推广</li>
                    </ul>
                </div>
                <div class="manage-card-right">
                    <div class="manage-card-right-chart">
                        <p>B站热度下降</p>
                        <barL id="box2" :colorList="$lxjData.colorList"
                              :myData="$lxjData.box2Data"></barL>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>品牌负面舆情监控</p>
                        <lineM id="box61" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box61Data"></lineM>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="经营过程风险预警">
            <div slot="right" class="card-right">更多<i class="iconfont iconarrowRight"></i></div>
            <div class="manage-card2">
                <div class="manage-card2-top flex">
                    <div id="myChart2"></div>
                    <div class="manage-card2-top-info">
                        <div class="manage-card2-top-item">
                            <p>传播理念</p>
                            <p>消费者心智洞察120,111条数据，10,873人</p>
                        </div>
                        <div class="manage-card2-top-item">
                            <p>传播目的</p>
                            <p>消费者需求分析210,111条数据，30,123人</p>
                        </div>
                        <div class="manage-card2-top-item">
                            <p>传播支撑点</p>
                            <p>品牌核心资产挖掘210,550条数据，20,233人</p>
                        </div>
                        <div class="manage-card2-top-item">
                            <p>传播策略</p>
                            <p>传播策略分析570,283条数据，35,866人</p>
                        </div>
                    </div>
                </div>
                <div class="manage-card2-bottom flex">
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q1</span>48.88%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>市场占有率有小幅下降趋势</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>品牌定位不清晰，有陷入同质化竞争的前兆</li>
                            <li>传播渠道和传播内容单一，无法形成差异化品牌核心资产</li>
                        </ul>
                    </div>
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q2</span>32.33%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>舆论话题热度下降</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>目标消费者需求的改变没有及时发现</li>
                            <li>传播渠道和传播内容单一，无法形成差异化品牌核心资产</li>
                        </ul>
                    </div>
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q3</span>31.22%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>品牌负面舆情增加，口碑出现小幅负向增长</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>传播渠道成本投入减少且渠道监测管理不到位，在主要的品牌信息传播平台上有恶意刷差评的现象</li>
                        </ul>
                    </div>
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q4</span>68.81%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>用户线上互动量减少，个别渠道用户增长率接近峰值</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>品牌宣传活动隐晦含有”中药“、”老方”类型的关键词，触及消费者“是药三分毒”、“良药苦口”的群体创伤</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    import Card from "../../components/Card";
    import Compare from "../../components/Compare";
    import barM from '../../components/echarts/common/barM';
    import lineM from '../../components/echarts/common/lineM';
    import barL from '../../components/echarts/common/barL';
    import cLine from '../../components/echarts/common/line';

    export default {
        name: "BusinessManage",
        components: {Compare, Card, barL, barM, cLine, lineM},
        data() {
            return {}
        },
        mounted() {
            this.initChart();
            this.initChart2();
            window.onresize = () => {
                this.myChart.resize();
                this.myChart2.resize();
            }
        },
        methods: {
            initChart() {
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
                        top: '40px',
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
            },
            initChart2() {
                this.myChart2 = this.$echarts.init(document.getElementById('myChart2'));
                let echartData = [{
                    name: "1",
                    value: "48.88",
                },
                    {
                        name: "2",
                        value: "32.33",
                    },
                    {
                        name: "3",
                        value: "31.22",
                    },
                    {
                        name: "4",
                        value: "68.81",
                    }
                ];

                let xAxisData = echartData.map(v => v.name);
                let yAxisData = echartData.map(v => v.value);
                const hexToRgba = (hex, opacity) => {
                    let rgbaColor = "";
                    let reg = /^#[\da-f]{6}$/i;
                    if (reg.test(hex)) {
                        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
                            "0x" + hex.slice(3, 5)
                        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
                    }
                    return rgbaColor;
                }
                let option = {
                    tooltip: {
                        trigger: "axis",
                        formatter: function (params) {
                            let html = '';
                            const v = params[0];
                            let text = '';
                            switch (v.data) {
                                case '48.88':
                                    text = '市场占有率有小幅下降趋势';
                                    break;
                                case '32.33':
                                    text = '舆论话题热度下降';
                                    break;
                                case '31.22':
                                    text = '品牌负面舆情增加，口碑出现<br/>小幅负向增长';
                                    break;
                                case '68.81':
                                    text = '用户线上互动量减少，个别渠<br>道用户增长率接近峰值';
                                    break;
                            }

                            html += `<div style="color: #666;font-size: 14px;line-height: 24px; width: 156px">
                                        <div style="color: #333;font-weight:700;">Q${v.name}: <span style=";font-size: 18px">${v.value}%</span></div>
                                        <div style="color: red;">风险预警：</div>
                                        <div style="color: #999;font-size: 12px">${text}</div>
                                    </div>`;
                            return html
                        },
                        extraCssText: 'background: rgba(255, 255, 255, .8); border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, .2);color: red;',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                type: 'solid',
                                width: 1,
                                color: '#E9E9E9'
                            }
                        }
                    },
                    grid: {
                        left: '10px',
                        right: '10px',
                        top: '20px',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: false,
                        axisLabel: {
                            formatter: 'Q{value}',
                            textStyle: {
                                color: "#333"
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#D9D9D9"
                            }
                        },
                        data: xAxisData
                    }],
                    yAxis: [{
                        type: "value",
                        name: '品牌信息传播效率',
                        axisLabel: {
                            formatter: '{value}%',
                            textStyle: {
                                color: "#666",
                            }
                        },
                        nameTextStyle: {
                            color: "#666",
                            fontSize: 12,
                            lineHeight: 40
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#E9E9E9"
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        }
                    }],
                    series: [{
                        name: "2019",
                        type: "line",
                        smooth: true,
                        showSymbol: false,
                        symbolSize: 8,
                        zlevel: 30,
                        lineStyle: {
                            normal: {
                                width: 4,
                                shadowBlur: 3,
                                shadowColor: 'rgba(3, 13, 41, .2)',
                                shadowOffsetY: 8,
                                type: 'solid',
                                color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(187, 134, 252, 1)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(94, 139, 255, 1)'
                                    }]
                                )
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [{
                                        offset: 0,
                                        color: hexToRgba('#2965FF', 0.8)
                                    },
                                        {
                                            offset: .5,
                                            color: hexToRgba('#2965FF', 0.3)
                                        },
                                        {
                                            offset: 1,
                                            color: hexToRgba('#2965FF', 0)
                                        }
                                    ],
                                    false
                                ),
                                shadowColor: hexToRgba('#0090FF', 0.1),
                                shadowBlur: 10
                            }
                        },
                        data: yAxisData
                    }]
                };
                this.myChart2.setOption(option);
                //设置默认选中高亮部分
                this.myChart2.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: 3
                });
            }
        }

    }
</script>

<style lang="scss">
    .chart-tooltip {
        padding: 5px 8px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background: rgba(255, 255, 255, 0.8);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
        border-radius: 8px;

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
            font-size: 14px;
            font-family: HelveticaNeue;
            color: #666666;
            line-height: 22px;
        }

        &.red {
            background: rgba(255, 255, 255, 0.8);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
            border-radius: 8px;
        }

        &.blue {
            padding: 3px 4px;
            background: rgba(255, 255, 255, 0.8);
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
            border-radius: 8px;

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
<style scoped lang="scss">
    .manage-box {
        .tips {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97A0C3;
        }

        .manage-overview {
            margin: 24px 0;

            .manage-overview-left {
                width: calc(100% - 388px);
                height: 607px;
                background: #FFFFFF;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                border-radius: 8px;

                .manage-overview-chart {
                    width: calc(100% - 236px);
                    height: 310px;
                    position: relative;

                    .red {
                        position: absolute;
                        right: 90px;
                        top: 180px;
                    }

                    .blue {
                        position: absolute;
                        right: 10px;
                        top: 150px;
                    }

                    .manage-overview-select {
                        padding: 12px;
                        display: flex;

                        .w120 {
                            margin-right: 16px;
                            width: 120px;
                        }
                    }

                    .manage-overview-list {
                        padding: 12px;
                        border-top: 1px solid #F4F7FC;

                        .manage-overview-item {
                            margin-bottom: 12px;
                            padding: 16px;
                            width: calc(50% - 6px);
                            height: 102px;
                            background: #F7F9FD;
                            border-radius: 8px;

                            > p {
                                &:nth-child(1) {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #636E95;
                                }

                                &:nth-child(2) {
                                    font-size: 24px;
                                    font-family: HelveticaNeue-Bold, HelveticaNeue;
                                    font-weight: bold;
                                    color: #242F57;

                                    > span {
                                        margin-left: 4px;
                                        font-size: 14px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #636E95;
                                    }
                                }
                            }
                        }
                    }
                }

                .manage-overview-info {
                    padding: 4px 16px 16px;
                    width: 236px;
                    background: #F3F7FF;

                    > p {
                        padding: 12px 8px 4px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #212121;
                    }

                    .manage-overview-result {
                        padding: 0 16px;
                        width: 100%;
                        height: 49px;
                        line-height: 49px;
                        background: #FFE6E5;
                        border-radius: 8px;

                        > p {
                            font-size: 21px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #FB343E;
                        }
                    }

                    .manage-overview-btn {
                        margin-top: 28px;
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        background: #FFFFFF;
                        border-radius: 20px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #2373FF;
                        text-align: center;
                    }
                }
            }

            .manage-overview-right {
                padding: 24px 0;
                width: 372px;
                height: 607px;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                background: url("../../assets/img/dashboard/business/neurotesting-bg@2x.png") no-repeat center / 100% 100%;
                border-radius: 8px;

                .top-img {
                    width: 372px;
                    height: 224px;
                }

                .bottom-img {
                    width: 372px;
                    height: 330px;
                    overflow-y: auto;

                    > img {
                        width: 372px;
                        height: auto;
                    }
                }
            }
        }

        .card-right {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #7C88B1;
            cursor: pointer;

            >i {
              margin-left: 4px;
              vertical-align: -1px;
            }
        }

        .manage-card {
            padding-bottom: 20px;

            p {
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
            }

            .manage-card-left {
                padding-right: 15px;
                width: 40%;
                border-right: 1px solid #F0F0F0;
            }

            .manage-card-right {
                width: 60%;

                .manage-card-right-chart {
                    display: inline-block;
                    vertical-align: top;
                    width: 50%;
                    height: 185px;
                    border-right: 1px solid #F0F0F0;

                    > p {
                        padding: 0 15px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    &:last-child {
                        border-right: none;
                    }
                }
            }
        }

        .manage-card2 {
            padding-bottom: 20px;

            .manage-card2-top {

                #myChart2 {
                    width: calc(100% - 407px);
                    height: 311px;
                }

                .manage-card2-top-info {
                    width: 382px;
                    height: 311px;

                    .manage-card2-top-item {
                        margin-bottom: 8px;
                        padding: 12px 24px;
                        width: 100%;
                        box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.5);
                        border-radius: 8px;

                        > p {
                            &:nth-child(1) {
                                font-size: 16px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #242F57;
                            }

                            &:nth-child(2) {
                                margin-top: 5px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;
                            }
                        }

                        &:nth-child(1) {
                            background: url("../../assets/img/dashboard/business/gradient-bg1@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(2) {
                            background: url("../../assets/img/dashboard/business/gradient-bg2@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(3) {
                            background: url("../../assets/img/dashboard/business/gradient-bg3@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(4) {
                            margin-bottom: 0;
                            background: url("../../assets/img/dashboard/business/gradient-bg4@2x.png") no-repeat center / 100% 100%;
                        }

                        &:hover {
                            background: #FFFFFF;
                            box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16), 1px 1px 0px 0px #FFFFFF;
                        }
                    }
                }
            }

            .manage-card2-bottom {
                margin-top: 20px;

                .manage-card2-bottom-item {
                    padding: 16px;
                    width: calc(25% - 6px);
                    height: 256px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;

                    .manage-card2-bottom-item-title {
                        font-size: 24px;
                        font-family: HelveticaNeue-Bold, HelveticaNeue;
                        font-weight: bold;
                        color: #242F57;

                        > span {
                            margin-right: 8px;
                            color: #97A0C3;
                        }
                    }

                    .manage-card2-bottom-item-sub-title {
                        margin: 12px 0 5px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    &:hover {
                        background: #F7F9FD;
                        border: 1px solid #F7F9FD;

                        .manage-card2-bottom-item-title {
                            color: #4D94FF;
                        }
                    }
                }
            }
        }
    }
</style>