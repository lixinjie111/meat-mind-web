<template>
    <div class="fxmx-event">
        <!-- <img src="../../../../static/img/tool/fxmx/event@2x.png" alt=""> -->
        <div class="title">
            <img class="back" @click="back" src="../../../../static/img/tool/fxmx/back@2x.png" alt="">
            事件分析
        </div>
        <div class="event-content">
            <div class="filter-container">
                <p class="c-title">事件</p>
                <Collapse v-model="panelValue">
                    <Panel name="1">
                        任意事件的总次数
                        <div class="" slot="content">
                            <div class="property" v-for="(item,index) in propertyList" :key="index">
                                <Select v-model="attribute1" class="mr12 w200">
                                    <i class="iconfont iconchengyuan" slot="prefix" size="small"/>
                                    <Option v-for="item in attributeList1" :value="item.value" :key="item.value"
                                            :disabled="item.disabled">{{ item.label }}
                                    </Option>
                                </Select>
                                <span class="mr12">的</span>
                                <Select v-model="attribute2" class="mr12 w200">
                                    <Option value="总次数">总次数</Option>
                                    <Option value="用户数">用户数</Option>
                                    <Option value="人均次数">人均次数</Option>
                                    <Option value="预定义指标">预定义指标</Option>
                                </Select>
                                <div>
                                    <i class="add iconfont iconicon_more2" @click="add">
                                        新增</i>
                                </div>
                                <i class="del iconfont iconicon_close" @click="del(index)"></i>
                            </div>
                        </div>
                    </Panel>
                </Collapse>
                <div class="filter-show">
                    按
                    <Select v-model="attribute3" class="mr12 w100">
                        <Option value="总体">总体</Option>
                        <Option value="事件属性">事件属性</Option>
                        <Option value="用户属性">用户属性</Option>
                        <Option value="用户标签">用户标签</Option>
                    </Select>
                    查看
                </div>
            </div>
            <div class="show-container">
                <div class="top">
                    <Select class="date-select" v-model="dateValue">
                        <Option value="1">按天</Option>
                        <Option value="2">按周</Option>
                        <Option value="3">按月</Option>
                        <Option value="4">按季度</Option>
                        <Option value="5">按年</Option>
                        <Option value="6">按小时</Option>
                        <Option value="7">按分钟</Option>
                    </Select>
                    <DatePicker type="daterange" :value="dateRangeValue" class="date-range-select"
                                :options="dateOptions"
                                placeholder="请选择时间范围"></DatePicker>
                </div>
                <div class="bottom">
                    <p>任意事件的总次数</p>
                    <div class="chart-box">
                        <iframe v-if="iframeShow == 3" class="iframe" src="/static/html/fxgj/bar3.html" frameborder="0"
                                scrolling="no"></iframe>
                        <iframe v-if="iframeShow == 2" class="iframe" src="/static/html/fxgj/bar2.html" frameborder="0"
                                scrolling="no"></iframe>
                        <iframe v-if="iframeShow == 1" class="iframe" src="/static/html/fxgj/bar1.html" frameborder="0"
                                scrolling="no"></iframe>
                        <iframe v-if="iframeShow == 4" class="iframe" src="/static/html/fxgj/bar4.html" frameborder="0"
                                scrolling="no"></iframe>
                        <iframe v-if="iframeShow == 5" class="iframe" src="/static/html/fxgj/bar5.html" frameborder="0"
                                scrolling="no"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Event",
        data() {
            return {
                panelValue: [1, 2],
                attributeList1: [
                    {
                        value: '任意事件',
                        label: '任意事件',
                    },
                    {
                        value: 'APP崩溃',
                        label: 'APP崩溃',
                    },
                    {
                        value: '领取权益',
                        label: '领取权益',
                    },
                    {
                        value: '收藏商品',
                        label: '收藏商品',
                    },
                    {
                        value: '完善资料',
                        label: '完善资料',
                    }
                ],
                attribute1: "任意事件",
                attribute2: "总次数",
                attribute3: "总体",
                actionList1: [
                    {
                        value: '小程序签到',
                        label: '小程序签到'
                    },
                    {
                        value: 'APP元素点击',
                        label: 'APP元素点击'
                    },
                    {
                        value: '商品购买',
                        label: '商品购买'
                    },
                    {
                        value: '加入购物车',
                        label: '加入购物车'
                    },
                    {
                        value: '评论',
                        label: '评论'
                    },
                    {
                        value: '线下店访问',
                        label: '线下店访问'
                    }
                ],
                date: [],
                action1: "做过",
                action2: "APP元素点击",
                action3: "总次数",
                action4: "≥",
                action5: "1",
                propertyList: [0],
                behaviorList: [0],
                iframeShow: 3,
                dateValue: "1",
                dateRangeValue: [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).toLocaleString(), new Date().toLocaleString()],
                dateOptions: {
                    shortcuts: [
                        {
                            text: '今日',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                return [start, end];
                            },
                            onClick: () => {
                                this.iframeShow = 1;
                            }
                        },
                        {
                            text: '昨日',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
                                end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
                                return [start, end];
                            },
                            onClick: () => {
                                this.iframeShow = 2;
                            }
                        },
                        {
                            text: '过去7天',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            },
                            onClick: () => {
                                this.iframeShow = 3;
                            }
                        },
                        {
                            text: '过去30天',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '过去90天',
                            value() {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            back() {
                this.$router.push({name: "analysis-tool-fxmx"})
            },
            add() {
                this.propertyList.push({})
            },
            del(index) {
                if (this.propertyList.length == 1) {
                    return
                }
                this.propertyList.splice(index, 1)
            },
            behaviorAdd() {
                this.behaviorList.push(0)
            },
            behaviorDel(index) {
                if (this.behaviorList.length == 1) {
                    return
                }
                this.behaviorList.splice(index, 1)
            }
        }
    }
</script>

<style scoped lang="scss">
    .fxmx-event {
        width: 100%;
        height: 100%;
        padding: 0 24px 24px;
        background: #F5F5F5;

        .mt8 {
            margin-top: 8px;
        }

        .mr16 {
            margin-right: 16px;
        }

        .mr12 {
            margin-right: 12px;
        }

        .w200 {
            width: 200px;
        }

        .w100 {
            width: 100px;
        }

        .w80 {
            width: 80px;
        }

        .w60 {
            width: 60px;
        }

        // img{
        //     width: 100%;
        // }

        .title {
            width: 100%;
            height: 72px;
            font-size: 20px;
            color: #212121;
            line-height: 72px;

            img {
                width: 24px;
                height: 24px;
                vertical-align: middle;
                cursor: pointer;
            }
        }

        .event-content {
            min-height: calc(100% - 72px);

            .filter-container {
                background: #FFFFFF;
                padding: 24px;
                margin-bottom: 20px;
                width: 1152px;

                .c-title {
                    margin-bottom: 16px;
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #212121;
                }

                .property, .behavior {
                    position: relative;
                    padding: 10px 0;

                    .add {
                        position: absolute;
                        top: 12px;
                        right: 66px;
                        color: #2373FF;
                        font-size: 14px;
                        cursor: pointer;
                    }

                    .del {
                        position: absolute;
                        top: 12px;
                        right: 24px;
                        width: 18px;
                        height: 18px;
                        font-size: 18px;
                        color: #999999;
                        line-height: 18px;
                        cursor: pointer;
                    }
                }

            }

            .show-container {
                padding: 24px;
                background: #FFFFFF;

                .top {
                    .date-select {
                        width: 80px;
                    }

                    .date-range-select {
                        margin-left: 20px;
                        width: 200px;
                    }
                }

                .bottom {
                    > p {
                        padding-top: 20px;
                    }

                    .chart-box {
                        .iframe {
                            width: 100%;
                            height: 360px;
                        }
                    }
                }
            }
        }
    }
</style>