<template>
    <div class="media_zuhe_panel">
        <div class="navBox">
            <div class="navItem" :class="currentIndex==1?'navActive':''" @click="changeIndex(1)">
                <div class="navItem_left">
                    <div class="headerIcon"><img src="../../../assets/img/yhhx/headerBg.png" alt=""></div>
                </div>
                <div class="navItem_rt">
                    <div class="navItem_title1">
                        策略1
                    </div>
                    <div class="navItem_title2">
                        快速拉新获客策略
                    </div>
                </div>
            </div>
            <div class="navItem navItem2" :class="currentIndex==2?'navActive':''" @click="changeIndex(2)">
                <div class="navItem_left">
                    <div class="headerIcon"><img src="../../../assets/img/yhhx/xunh.png" alt=""></div>
                </div>
                <div class="navItem_rt">
                    <div class="navItem_title1">
                        策略2
                    </div>
                    <div class="navItem_title2">
                        低成本高转化策略
                    </div>
                </div>
            </div>
            <div class="navItem navItem3" :class="currentIndex==3?'navActive':''" @click="changeIndex(3)">
                <div class="navItem_left">
                    <div class="headerIcon"><img src="../../../assets/img/yhhx/timeIc.png" alt=""></div>
                </div>
                <div class="navItem_rt">
                    <div class="navItem_title1">
                        策略3
                    </div>
                    <div class="navItem_title2">
                        持续转化策略
                    </div>
                </div>
            </div>
        </div>
        <div class="navContent">
            <div class="navContentBox">
                <div class="navContentTop">
                    <div class="navContentItem">
                        <div class="navTitle">媒介选择</div>
                        <div class="navSubTitle">短视频作为主要信息传播媒介</div>
                        <div class="list" v-for="(item,index) in mediaList1" :key="index">
                            <div class="logoPic"><img :src="item.icon" alt=""></div>
                            <div class="navMid1">
                                <div class="navtop">
                                    目标受众数
                                </div>
                                <div class="navBm">
                                    {{item.numTxt1}}人
                                </div>
                            </div>
                            <div class="navMid1">
                                <div class="navtop">
                                    投放预算
                                </div>
                                <div class="navBm">
                                    {{item.numTxt2}}元
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navContentItem">
                        <div class="navTitle">KOL组合</div>
                        <div class="navSubTitle">头部KOL组合</div>
                        <div class="list" v-for="(item,index) in mediaHlist1" :key="index">
                            <div class="logoPic"><img :src="item.icon" alt=""></div>
                            <div class="navMid1">
                                <div class="navtop">
                                    目标受众数
                                </div>
                                <div class="navBm">
                                    {{item.numTxt1}}人
                                </div>
                            </div>
                            <div class="navMid1">
                                <div class="navtop">
                                    投放预算
                                </div>
                                <div class="navBm">
                                    {{item.numTxt2}}元
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navContentItem1">
                        <div class="navTitle">最优曝光时间</div>
                        <div class="navSubTitle">未来7日，每日12-13点/18-23点；</div>
                        <div class="new_echart_box">
                            <PieOne3 id="304" :myData="myChartData5" title="未来7日"></PieOne3>
                        </div>
                    </div>
                    <div class="navContentItem1">
                        <div class="navTitle">投放预算</div>
                        <div class="navSubTitle"></div>
                        <div class="new_echart_box tfys_new_echart_box">
                            <PieEcharts9 :colorList="$fjData.colorList" :myData="myChartData0"></PieEcharts9>
                        </div>
                    </div>
                </div>
                <div class="navContentBm">
                    <div class="navContentLf">
                        <div class="navbmTitle">投放内容和形式</div>
                        <div class="navbmList">
                            <div class="navbmItem" v-for="item in contList" :key="item">{{item}}</div>
                        </div>
                    </div>
                    <div class="navContentRt">
                        <div class="navbmTitle">目标受众</div>
                        <div class="navbmList">
                            <div class="navbmItem1" v-for="item in contList1" :key="item" v-html="item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PieOne3 from '@/components/echarts/common/pie/PieOne3';
    import PieEcharts9 from '@/components/echarts/common/pie/PieEcharts9';

    export default {
        name: "Media",
        components: {PieOne3, PieEcharts9},
        data() {
            return {
                dyIcon: require("../../../assets/img/yhhx/dyI.png"),
                ke36Icon: require("../../../assets/img/yhhx/ke36.png"),
                wbIcon: require("../../../assets/img/yhhx/weib1.png"),
                xhsIcon: require("../../../assets/img/yhhx/xhs.png"),
                tenxIcon: require("../../../assets/img/yhhx/txxw.png"),
                ttIcon: require("../../../assets/img/yhhx/tt.png"),
                touxIcon1: require("../../../assets/img/yhhx/toux1.png"),
                touxIcon2: require("../../../assets/img/yhhx/toux2.png"),
                touxIcon3: require("../../../assets/img/yhhx/toux3.png"),
                touxIcon4: require("../../../assets/img/yhhx/toux4.png"),
                touxIcon5: require("../../../assets/img/yhhx/toux5.png"),
                currentIndex: 1,
                rankList: [],
                mediaList1: [],
                mediaHlist1: [],
                myChartData0: null,
                myChartData5: this.$abelData.nest202Data,
                contList: ['品牌官方产品发布', '直播', '微博博文', '节日礼品上新',],
                contList1: ['KOL自有粉丝', '品牌忠诚消费者', '品牌核心目标消费人群(北京上班族/年轻白领)'],
            }
        },
        created() {
            this.myChartData0 = this.$fjData.box51Data;
            this.rankList = [
                {
                    per: 93,
                    text: '抖音',
                    icon: this.dyIcon,
                },
                {
                    per: 92,
                    text: '微博',
                    icon: this.wbIcon,
                },
                {
                    per: 88,
                    text: '小红书',
                    icon: this.xhsIcon,
                },
                {
                    per: 81,
                    text: '今日头条',
                    icon: this.ttIcon,
                },
                {
                    per: 78,
                    text: '微信',
                    icon: require("../../../assets/img/yhhx/weiicon.png"),
                },
                {
                    per: 77,
                    text: '大众点评',
                    icon: require("../../../assets/img/yhhx/daicon.png"),
                },
                {
                    per: 75,
                    text: '人民日报',
                    icon: require("../../../assets/img/yhhx/renicon.png"),
                },
                {
                    per: 73,
                    text: '虎嗅',
                    icon: require("../../../assets/img/yhhx/huicon.png"),
                },
                {
                    per: 63,
                    text: '第一财经',
                    icon: require("../../../assets/img/yhhx/caiicon.png"),
                },
            ];
            this.mediaList1 = [
                {
                    numTxt1: '150W',
                    numTxt2: '30W',
                    icon: this.wbIcon,
                },
                {
                    numTxt1: '90W',
                    numTxt2: '200W',
                    icon: this.dyIcon,
                },
                {
                    numTxt1: '30W',
                    numTxt2: '60W',
                    icon: this.xhsIcon,
                },
            ]
            this.mediaHlist1 = [
                {
                    numTxt1: '30W',
                    numTxt2: '15W',
                    icon: this.touxIcon1,
                },
                {
                    numTxt1: '15W',
                    numTxt2: '10W',
                    icon: this.touxIcon2,
                },
                {
                    numTxt1: '9W',
                    numTxt2: '5W',
                    icon: this.touxIcon3,
                },
            ]
        },
        methods: {
            changeIndex(arg) {
                this.currentIndex = arg;
                if (arg == 1) {
                    this.myChartData0 = this.$fjData.box51Data;
                    this.myChartData5 = this.$abelData.nest202Data;
                    this.contList = ['品牌官方产品发布', '直播', '微博博文', '节日礼品上新',];
                    this.contList1 = ['KOL自有粉丝', '品牌忠诚消费者', '品牌核心目标消费人群(北京上班族/年轻白领)'];
                    this.mediaList1 = [
                        {
                            numTxt1: '150W',
                            numTxt2: '30W',
                            icon: this.wbIcon,
                        },
                        {
                            numTxt1: '90W',
                            numTxt2: '200W',
                            icon: this.dyIcon,
                        },
                        {
                            numTxt1: '30W',
                            numTxt2: '60W',
                            icon: this.xhsIcon,
                        },
                    ]
                    this.mediaHlist1 = [
                        {
                            numTxt1: '30W',
                            numTxt2: '15W',
                            icon: this.touxIcon1,
                        },
                        {
                            numTxt1: '15W',
                            numTxt2: '10W',
                            icon: this.touxIcon2,
                        },
                        {
                            numTxt1: '9W',
                            numTxt2: '5W',
                            icon: this.touxIcon3,
                        },
                    ]
                } else if (arg == 2) {
                    this.myChartData5 = this.$abelData.nest203Data;
                    this.myChartData0 = this.$fjData.box52Data;
                    this.mediaList1 = [
                        {
                            numTxt1: '500W',
                            numTxt2: '30W',
                            icon: this.ttIcon,
                        },
                        {
                            numTxt1: '300W',
                            numTxt2: '50W',
                            icon: this.dyIcon,
                        },
                        {
                            numTxt1: '150W',
                            numTxt2: '10W',
                            icon: this.xhsIcon,
                        },
                    ]
                    this.mediaHlist1 = [
                        {
                            numTxt1: '50W',
                            numTxt2: '15W',
                            icon: this.touxIcon1,
                        },
                        {
                            numTxt1: '45W',
                            numTxt2: '10W',
                            icon: this.touxIcon2,
                        },
                        {
                            numTxt1: '35W',
                            numTxt2: '5W',
                            icon: this.touxIcon3,
                        },
                    ]
                    this.contList = ['品牌产品种草短视频', '品牌产品介绍视频	', '品牌产品体验笔记',];
                    this.contList1 = ['KOL自有粉丝', '品牌忠诚消费者', '品牌核心目标消费人群(北京上班族/年轻白领)'];
                } else {
                    this.myChartData5 = this.$abelData.nest204Data;
                    this.myChartData0 = this.$fjData.box53Data;
                    this.mediaList1 = [
                        {
                            numTxt1: '2200W',
                            numTxt2: '80W',
                            icon: require("../../../assets/img/yhhx/taoicon.png"),
                        },
                        {
                            numTxt1: '1700W',
                            numTxt2: '70W',
                            icon: require("../../../assets/img/yhhx/daicon.png"),
                        },
                        {
                            numTxt1: '1500W',
                            numTxt2: '30W',
                            icon: this.xhsIcon,
                        },
                    ]
                    this.mediaHlist1 = [
                        {
                            numTxt1: '200W',
                            numTxt2: '35W',
                            icon: this.touxIcon4,
                        },
                        {
                            numTxt1: '150W',
                            numTxt2: '15W',
                            icon: this.touxIcon5,
                        },
                        {
                            numTxt1: '80W',
                            numTxt2: '10W',
                            icon: this.touxIcon3,
                        },
                    ]
                    this.contList = ['行业趋势(品牌/产品露出)', '生活指南', '好物推荐',];
                    this.contList1 = ['KOL自有粉丝', '品牌忠诚消费者', '品牌核心目标消费人群(北京上班族/年轻白领)'];
                }
            },
        }
    }
</script>

<style scoped lang="scss">
    .media_zuhe_panel {
        background: #FFFFFF;
        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
        border-radius: 8px;
        padding: 24px;

        .navBox {
            display: flex;

            .navItem {
                width: 208px;
                padding-left: 24px;
                padding-top: 16px;
                padding-bottom: 13px;
                display: flex;
                align-items: center;
                cursor: pointer;

                &.navActive {
                    background: #F4F7FC;
                    border-top-left-radius: 8px;
                    border-top-right-radius: 8px;

                    .navItem_rt {
                        color: #2373FF;
                    }
                }

                &.navItem2 {
                    .navItem_left {
                        .headerIcon {
                            background: #FFE6DE;
                        }
                    }
                }

                &.navItem3 {
                    .navItem_left {
                        .headerIcon {
                            background: #DFF8F6;
                        }
                    }
                }

                .navItem_left {
                    .headerIcon {
                        width: 34px;
                        box-sizing: border-box;
                        padding: 5px;
                        background: #D3E3FF;
                        border-radius: 8px;

                        img {
                            width: 100%;
                            display: block;
                        }
                    }
                }

                .navItem_rt {
                    margin-left: 12px;
                    color: #242F57;

                    .navItem_title1 {
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                    }

                    .navItem_title2 {
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                    }
                }
            }
        }

        .navContent {
            background: #F4F7FC;
            padding: 24px;

            .navContentBox {
                padding: 16px;
                background: #FFFFFF;
                border-radius: 8px;

                .navContentTop {
                    padding-bottom: 16px;
                    border-bottom: 1px solid #EAEDF7;
                    display: flex;

                    .navContentItem {
                        flex: 1;
                        padding: 0 16px;
                        border-right: 1px solid #EAEDF7;
                        display: flex;
                        flex-direction: column;

                        .navTitle {
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                            margin-bottom: 7px;
                        }

                        .navSubTitle {
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636E95;
                            height: 16px;
                            margin-bottom: 26px;
                        }

                        .list {
                            flex: 1;
                            border-bottom: 1px solid #EAEDF7;
                            padding: 10px;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;

                            .logoPic {
                                width: 32px;

                                img {
                                    width: 100%;
                                    display: block;
                                }
                            }

                            .navMid1 {
                                .navtop {
                                    font-size: 12px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #97A0C3;
                                    line-height: 20px;
                                }

                                .navBm {
                                    font-size: 12px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                    line-height: 20px;
                                }
                            }
                        }

                        .list:last-child {
                            border-bottom: none;
                        }
                    }

                    .navContentItem1 {
                        flex: 1;
                        border-right: 1px solid #EAEDF7;
                        display: flex;
                        flex-direction: column;

                        .navTitle {
                            padding-left: 16px;
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                            margin-bottom: 7px;
                        }

                        .navSubTitle {
                            padding-left: 16px;
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636E95;
                            height: 16px;
                            margin-bottom: 26px;
                        }
                    }

                    .navContentItem1:last-child {
                        border-right: none;
                    }
                }

                .navContentBm {
                    padding-top: 16px;
                    display: flex;

                    .navContentLf {
                        flex: 1;
                        border-right: 1px solid #EAEDF7;
                        padding-right: 16px;

                        .navbmTitle {
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                            // margin-bottom: 14px;
                        }

                        .navbmList {
                            display: flex;
                            flex-flow: wrap;

                            .navbmItem {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 148px;
                                height: 32px;
                                margin-right: 16px;
                                margin-top: 12px;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #2373FF;
                                background: #F0F8FF;
                                border-radius: 4px;
                            }
                        }
                    }

                    .navContentRt {
                        flex: 1;
                        padding-left: 16px;

                        .navbmTitle {
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                            // margin-bottom: 14px;
                        }

                        .navbmList {
                            display: flex;
                            flex-flow: wrap;

                            .navbmItem1 {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                width: 153px;
                                height: 32px;
                                margin-right: 16px;
                                margin-top: 12px;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #2373FF;
                                background: #F0F8FF;
                                border-radius: 4px;
                            }

                            .navbmItem1:last-child {
                                width: 288px;
                                margin-right: 0
                            }
                        }
                    }
                }
            }
        }

        .new_echart_box {
            flex: 1;
        }
    }
</style>