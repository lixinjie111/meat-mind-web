<template>
    <div class="fxmx-event">
        <!-- <img src="../../../../static/img/tool/fxmx/event@2x.png" alt=""> -->
        <div class="title">事件分析</div>
        <div class="event-content">
            <div class="filter-container">

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
                    </div>
                </div>
            </div>
        </div>
        <div class="back" @click="back">back</div>
    </div>
</template>

<script>
    export default {
        name: "Event",
        data() {
            return {
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
            }
        }
    }
</script>

<style scoped lang="scss">
    .fxmx-event {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0 24px 24px;
        background: #F5F5F5;

        img {
            width: 100%;
        }

        .title {
            width: 100%;
            height: 72px;
            font-size: 20px;
            color: #212121;
            line-height: 72px;
        }

        .event-content {
            min-height: calc(100% - 72px);

            .filter-container {
                background: #FFFFFF;
                border: 1px solid red;
                padding: 20px 0;
                margin-bottom: 20px;
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

        .back {
            position: absolute;
            top: 22px;
            left: 24px;
            width: 26px;
            height: 26px;
            border: 1px solid red;
            cursor: pointer;
        }
    }
</style>