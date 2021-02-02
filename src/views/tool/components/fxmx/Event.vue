<template>
    <div class="fxmx-event">
        <!-- <img src="../../../../static/img/tool/fxmx/event@2x.png" alt=""> -->
        <div class="title">
            <!-- <img class="back"  src="../../../../static/img/tool/fxmx/back@2x.png" alt=""> -->
            <div class="icon"><i @click="back" class="iconfont iconarrowRight"></i></div>
            事件分析
        </div>
        <div class="event-content">
            <div class="filter-container">
                <p class="c-title">事件</p>
                <!-- <Collapse v-model="panelValue"> -->
                    <!-- <Panel name="1"> -->
                        <!-- 事件 -->
                        <div class="" slot="content">
                            <div class="property" v-for="(item,index) in propertyList" :key="index">
                                <Select v-model="item.event" class="mr12 w200">
                                    <!-- <i class="iconfont iconzhinengjuece" slot="prefix" size="small"/> -->
                                    <Option v-for="ele in attributeList1" :value="ele.value" :key="ele.value">{{ ele.label }}</Option>
                                </Select>
                                <span class="mr12">的</span>
                                <Select v-model="item.place" class="mr12 w200">
                                    <Option v-for="ele in placeList" :value="ele.value" :key="ele.value">{{ ele.label }}</Option>
                                </Select>
                                <div>
                                    <i class="add iconfont iconicon_more2" @click="add">
                                        新增</i>
                                </div>
                                <i class="del iconfont iconicon_close" @click="del(index)"></i>
                            </div>
                        </div>
                    <!-- </Panel> -->
                <!-- </Collapse> -->
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
                    <!-- <p>任意事件的总次数</p> -->
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
        watch:{
            propertyList:{
                handler:function(){
                    if(this.iframeShow >= 5||this.iframeShow<2){
                        this.dateRangeValue = [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).toLocaleString(), new Date().toLocaleString()]
                        this.iframeShow = 3
                    }else{
                        this.dateRangeValue = [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).toLocaleString(), new Date().toLocaleString()]
                        this.iframeShow = this.iframeShow + 1
                    }
                },
                deep:true
            },
            attribute3(val){
                switch(val){
                    case "总体" :
                        this.iframeShow = 3
                        this.dateRangeValue = [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).toLocaleString(), new Date().toLocaleString()]
                        break
                    case "事件属性" :
                        this.iframeShow = 4
                        this.dateRangeValue = [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).toLocaleString(), new Date().toLocaleString()]
                        break    
                    case "用户属性" :
                        this.iframeShow = 5
                        this.dateRangeValue = [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).toLocaleString(), new Date().toLocaleString()]
                        break
                    case "用户标签" :
                        this.iframeShow = 3
                        this.dateRangeValue = [new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).toLocaleString(), new Date().toLocaleString()]
                        break   
                }
                
            }
        },
        data() {
            return {
                panelValue: [1, 2],
                propertyList: [{event:"任意事件",place:"总次数"}],
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
                placeList:[
                    {
                        value:"总次数",
                        label:"总次数"
                    },
                    {
                        value:"用户数",
                        label:"用户数"
                    },
                    {
                        value:"人均次数",
                        label:"人均次数"
                    }
                ],
                attribute1: "任意事件",
                attribute2: "总次数",
                attribute3: "总体",
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
                this.propertyList.push({event:"任意事件",place:"总次数"})
            },
            del(index) {
                if (this.propertyList.length == 1) {
                    return
                }
                this.propertyList.splice(index, 1)
            },
        }
    }
</script>

<style scoped lang="scss">
    .fxmx-event {
        width: 100%;
        height: 100%;
        padding: 0 24px 24px;
        background: #F4F7FC;

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
            display: flex;
            align-items: center;
            height: 64px;
            padding-left:24px;
            font-size: 20px;
            color: #212121;
            .icon{
                width: 56px;
                height: 24px;
                margin-right: 16px;
                transform: rotate(180deg);
                line-height: 24px;
                text-align: center;
                border-left: 1px solid #EAEDF7;
            }
            .iconfont{
                font-size: 24px;
                color: #7C88B1;
                cursor: pointer;
            }
        }

        .event-content {
            min-height: calc(100% - 72px);

            .filter-container {
                width: 1152px;
                padding: 24px;
                margin-bottom: 20px;
                background: #FFFFFF;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                border-radius: 8px;

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
                .filter-show{
                    margin-top: 20px;
                }
            }

            .show-container {
                padding: 24px;
                background: #FFFFFF;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                border-radius: 8px;
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