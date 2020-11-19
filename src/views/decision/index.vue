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
                </div>
                <div class="chart">

                </div>
                <div class="info">
                    <img class="left" src="../../../src/static/img/decision/middle@2x.png"/>
                    <div class="right">
                        <div class="right-title">建议</div>
                        <ul class="right-ul">
                            <li>
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
                            <li>
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
                            <li>
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
        components: {Header}
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
                    padding: 12px 24px;
                    border-bottom: 1px solid #F0F0F0;

                    > p {
                        font-size: 16px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #212121;
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
