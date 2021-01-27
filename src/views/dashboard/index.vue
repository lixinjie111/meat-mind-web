<template>
    <DefaultPage>
        <div class="home">
            <!-- 企业主 -->
            <div class="business-owner" v-if="flag==1">
                <Tabs :animated="false">
                    <TabPane label="营销洞察">

                    </TabPane>
                    <TabPane label="经营诊断">
                        <p class="tips">经营诊断可以智能监测营销活动效果，依据心智模型进行智能评测，针对性提出改进方案，提供海量新潮营销创意及案例</p>
                        <div class="top flex">
                            <div class="left flex-start">
                                <div class="chart">
                                    <div class="select-box">
                                        <Select class="w120">
                                            <Option value="邓老凉茶">邓老凉茶</Option>
                                        </Select>
                                        <Select class="w120">
                                            <Option value="淘宝旗舰店">淘宝旗舰店</Option>
                                        </Select>
                                        <Select class="w120">
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
                                    <div class="list clearfix">
                                        <div class="item fl"></div>
                                        <div class="item fr"></div>
                                        <div class="item fl"></div>
                                        <div class="item fr"></div>
                                    </div>
                                </div>
                                <div class="info">
                                    <p>当前经营状况</p>
                                    <div class="result">
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
                                    <div class="btn">查看全部经营分析</div>
                                </div>
                            </div>
                            <div class="right">
                                <img class="top-img" src="../../assets/img/dashboard/neurometrics-result@2x.png"/>
                                <div class="bottom-img" >
                                    <img src="../../assets/img/dashboard/neurometrics-result2@2x.png"/>
                                </div>
                            </div>
                        </div>
                        <Card title="客群诊断">
                            <div slot="right">查看用户画像详情</div>
                            <div class="card-inner flex">
                                <div class="left">
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
                                <div class="right">

                                </div>
                            </div>
                        </Card>
                        <Card title="媒介诊断">
                            <div slot="right">查看媒介画像详情</div>
                            <div class="card-inner flex">
                                <div class="left">
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
                                <div class="right">

                                </div>
                            </div>
                        </Card>
                        <Card title="品牌诊断">
                            <div slot="right">查看品牌画像详情</div>
                            <div class="card-inner flex">
                                <div class="left">
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
                                <div class="right">

                                </div>
                            </div>
                        </Card>
                        <Card title="经营过程风险预警">
                            <div slot="right">更多</div>
                            <div>

                            </div>
                        </Card>
                    </TabPane>
                </Tabs>
            </div>
            <!-- 数据管理员 -->
            <div class="data-admin" v-else-if="flag==2">
                <div class="part1">
                    <div class="data-canter" @click="toDateCenter"></div>
                    <img src="../../static/img/home/datacenter1@2x.png" alt="">
                </div>
                <div class="part2">
                    <img src="../../static/img/home/datacenter2@2x.png" alt="">
                    <div class="more" @click="showMore"></div>
                    <div class="detail" @click="toDetail"></div>
                    <div class="detail2" @click="toDetail2"></div>
                    <Modal class-name="data-admin-modal" v-model="detailModal" footer-hide :closable="false">
                        <div class="download">
                            <img v-if="detail1" src="../../static/img/home/detail1@2x.png" alt="">
                            <img v-if="detail2" src="../../static/img/home/detail2@2x.png" alt="">
                            <div class="close-btn" @click="closeDetail"></div>
                        </div>
                    </Modal>
                </div>
            </div>
            <!-- 分析师 -->
            <div class="analyst" v-else>
                <img src="../../static/img/home/home1@2x.png" alt="">
                <div class="report-btn">一键生成报告</div>
                <!--品牌运营概览-->
                <div class="card">
                    <img src="../../static/img/home/home2@2x.png" alt="">
                    <div class="iframe1-bg"></div>
                    <iframe class="iframe1" src="/static/html/dashboard/yibiao.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe2" src="/static/html/dashboard/gmv.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe3" src="/static/html/dashboard/dindanL.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe4" src="/static/html/dashboard/kedanJ.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe5" src="/static/html/dashboard/xiadanR.html" frameborder="0"
                            scrolling="no"></iframe>
                </div>
                <!--用户生命周期-->
                <div class="card">
                    <img src="../../static/img/home/home3@2x.png" alt="">
                    <iframe class="iframe iframe6" src="/static/html/dashboard/xinyonH.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe7" src="/static/html/dashboard/huoyueYH.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe8" src="/static/html/dashboard/huiliuYH.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe9" src="/static/html/dashboard/chenmoYH.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe10" src="/static/html/dashboard/liushiYH.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe11" src="/static/html/dashboard/liuRliuCb.html" frameborder="0"
                            scrolling="no"></iframe>
                </div>
                <!--通道概况-->
                <div class="card">
                    <img src="../../static/img/home/home4@2x.png" alt="">
                    <iframe class="iframe iframe12" src="/static/html/dashboard/num.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe13" src="/static/html/dashboard/num1.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe14" src="/static/html/dashboard/num2.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe15" src="/static/html/dashboard/num3.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe16" src="/static/html/dashboard/num4.html" frameborder="0"
                            scrolling="no"></iframe>
                </div>
                <!--产品数据评估-->
                <div class="card">
                    <img src="../../static/img/home/home5@2x.png" alt="">
                    <iframe class="iframe iframe17" src="/static/html/dashboard/Active-times.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe18" src="/static/html/dashboard/Active-user-core.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe19" src="/static/html/dashboard/Active-enterprises.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe20" src="/static/html/dashboard/Total-core-functions.html"
                            frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe21" src="/static/html/dashboard/Num-active-employees.html"
                            frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe22" src="/static/html/dashboard/Core-function-Enterprise.html"
                            frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe23" src="/static/html/dashboard/Active-user-core.html" frameborder="0"
                            scrolling="no"></iframe>
                    <iframe class="iframe iframe24" src="/static/html/dashboard/Core-permeability.html" frameborder="0"
                            scrolling="no"></iframe>
                </div>
            </div>
        </div>
    </DefaultPage>
</template>

<script>
    import DefaultPage from "../../layouts/DefaultPage";
    import Card from "../../components/Card";

    export default {
        name: "index",
        components: {Card, DefaultPage},
        data() {
            return {
                flag: localStorage.getItem("dashboard"),
                // downloadModal: false,
                detailModal: false,
                detail1: true,
                detail2: false
            }
        },
        mounted() {
            if (this.flag == 1) {
                this.initChat();
                window.onresize = () => {
                    this.myChart.resize();
                }
            }
        },
        methods: {
            // toPart1Detail() {
            //     this.$router.push({name:"business-analysis-ztgl"})
            // },
            // toPart2Detail() {
            //     this.$router.push({name:"portrait-system-yxdc"})
            // },
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
            // 数据管理员
            toDateCenter() {
                this.$router.push({name: "data-center-my"})
            },
            showMore() {
                this.$router.push({name: "data-center-market"})
            },
            toDetail() {
                this.detailModal = true
                this.detail1 = true
                this.detail2 = false
            },
            toDetail2() {
                this.detailModal = true
                this.detail1 = false
                this.detail2 = true
            },
            closeDetail() {
                this.detailModal = false
                this.detail1 = true
                this.detail2 = false
            }
        }
    }
</script>

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

    /*.dashboard-report-modal {*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: center;*/
    /*    .ivu-modal {*/
    /*        top: 0;*/
    /*        width: 1020px !important;*/
    /*        height: 680px;*/
    /*        overflow-y: scroll;*/
    /*        background: #ffffff;*/
    /*        border-radius: 4px;*/
    /*    }*/
    /*    .ivu-modal-body {*/
    /*        padding: 0;*/
    /*    }*/

    /*    .download {*/
    /*        position: relative;*/
    /*        margin: 0 auto;*/
    /*        width: 1000px;*/

    /*        >img {*/
    /*            width: 1000px;*/
    /*            border-radius: 10px;*/
    /*        }*/

    /*        .close-btn {*/
    /*            position: absolute;*/
    /*            top: 17px;*/
    /*            right: 115px;*/
    /*            width: 80px;*/
    /*            height: 30px;*/
    /*            background: transparent;*/
    /*            cursor: pointer;*/
    /*        }*/
    /*    }*/
    /*}*/

    .data-admin-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 600px !important;
            height: 460px;
            background: #ffffff;
            border-radius: 4px;
        }

        .ivu-modal-body {
            padding: 0;
        }

        .download {
            position: relative;
            margin: 0 auto;
            width: 600px;

            > img {
                width: 600px;
                border-radius: 10px;
            }

            .close-btn {
                position: absolute;
                top: 17px;
                right: 20px;
                width: 180px;
                height: 30px;
                background: transparent;
                cursor: pointer;
                // border: 1px solid red;
            }
        }
    }
</style>
<style scoped lang="scss">
    .home {
        .business-owner {
            padding-top: 20px;

            .tips {
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97A0C3;
            }

            .top {
                margin: 24px 0;

                .left {
                    width: calc(100% - 388px);
                    height: 607px;
                    background: #FFFFFF;
                    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                    border-radius: 8px;

                    .chart {
                        width: calc(100% - 236px);
                        height: 310px;
                        position: relative;

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

                        .select-box {
                            padding: 12px;
                            display: flex;

                            .w120 {
                                margin-right: 16px;
                                width: 120px;
                            }
                        }

                        .list {
                            padding: 12px;
                            border-top: 1px solid #F4F7FC;

                            .item {
                                margin-bottom: 12px;
                                width: calc(50% - 6px);
                                height: 102px;
                                background: #F7F9FD;
                                border-radius: 8px;
                            }
                        }
                    }

                    .info {
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

                        .result {
                            padding: 0 16px;
                            width: 204px;
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

                        .btn {
                            margin-top: 28px;
                            width: 204px;
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

                .right {
                    padding: 24px 0;
                    width: 372px;
                    height: 607px;
                    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                    background: url("../../assets/img/dashboard/neurotesting-bg@2x.png") no-repeat center / 100% 100%;
                    border-radius: 8px;

                    .top-img {
                        width: 372px;
                        height: 224px;
                    }

                    .bottom-img {
                        width: 372px;
                        height: 330px;
                        overflow-y: auto;

                        >img {
                            width: 372px;
                            height: auto;
                        }
                    }
                }
            }

            .card-inner {
                padding-bottom: 20px;

                p {
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                }

                .left {
                    width: 40%;
                    border-right: 1px solid #F0F0F0;
                }

                .right {
                    width: 60%;
                }
            }
        }

        .data-admin {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 80px);
            overflow-y: scroll;

            img {
                width: 100%;
            }

            .part1 {
                position: relative;

                .data-canter {
                    position: absolute;
                    top: 82px;
                    right: 40px;
                    width: 120px;
                    height: 32px;
                    // border: 1px solid red;
                    cursor: pointer;
                }
            }

            .part2 {
                position: relative;

                .more {
                    position: absolute;
                    top: 10px;
                    right: 40px;
                    width: 100px;
                    height: 36px;
                    cursor: pointer;
                    // border: 1px solid red;
                }

                .detail {
                    position: absolute;
                    left: 390px;
                    top: 112px;
                    width: 50px;
                    height: 24px;
                    cursor: pointer;
                    // border: 1px solid red;
                }

                .detail2 {
                    position: absolute;
                    top: 112px;
                    right: 476px;
                    width: 50px;
                    height: 24px;
                    cursor: pointer;
                    // border: 1px solid green;
                }
            }
        }

        .analyst {
            position: relative;
            width: 100%;
            height: calc(100vh - 80px);
            overflow-y: scroll;

            img {
                width: 100%;
            }

            .report-btn {
                position: absolute;
                right: 48px;
                top: 40px;
                width: 112px;
                height: 32px;
                line-height: 32px;
                background: #2965FF;
                border-radius: 2px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FFFFFF;
                text-align: center;
                cursor: pointer;
            }

            .card {
                position: relative;

                .iframe1 {
                    position: absolute;
                    left: 35px;
                    top: 105px;
                    width: 140px;
                    height: 140px;
                    z-index: 100;
                }

                .iframe1-bg {
                    position: absolute;
                    left: 50px;
                    top: 105px;
                    width: 110px;
                    height: 80px;
                    background: #FFFFFF;
                    z-index: 10;
                }

                .iframe {
                    position: absolute;
                    z-index: 100;
                    width: 90px;
                    height: 32px;
                    background: #FFFFFF;
                }

                .iframe2 {
                    left: 300px;
                    top: 155px;
                }

                .iframe3 {
                    left: 560px;
                    top: 155px;
                }

                .iframe4 {
                    left: 818px;
                    top: 155px;
                }

                .iframe5 {
                    right: 180px;
                    top: 154px;
                }

                .iframe6 {
                    left: 40px;
                    top: 159px;
                }

                .iframe7 {
                    left: 250px;
                    top: 159px;
                    width: 60px;
                }

                .iframe8 {
                    left: 470px;
                    top: 159px;
                }


                .iframe9 {
                    left: 690px;
                    top: 159px;
                }

                .iframe10 {
                    right: 380px;
                    top: 159px;
                    width: 95px;
                }

                .iframe11 {
                    right: 154px;
                    top: 159px;
                }

                .iframe12 {
                    left: 463px;
                    top: 165px;
                }

                .iframe13 {
                    left: 685px;
                    top: 165px;
                }

                .iframe14 {
                    right: 368px;
                    top: 165px;
                }

                .iframe15 {
                    right: 154px;
                    top: 175px;
                }

                .iframe16 {
                    left: 480px;
                    top: 305px;
                }

                .iframe17 {
                    left: 40px;
                    top: 172px;
                }

                .iframe18 {
                    left: 365px;
                    top: 172px;
                }

                .iframe19 {
                    right: 594px;
                    top: 172px;
                    width: 70px;
                }

                .iframe20 {
                    right: 224px;
                    top: 172px;
                    width: 127px;
                }

                .iframe21 {
                    left: 40px;
                    bottom: 102px;
                }

                .iframe22 {
                    left: 355px;
                    bottom: 102px;
                    width: 70px;
                }

                .iframe23 {
                    right: 566px;
                    bottom: 102px;
                }

                .iframe24 {
                    right: 246px;
                    bottom: 105px;
                    width: 86px;
                }
            }
        }
    }
</style>
