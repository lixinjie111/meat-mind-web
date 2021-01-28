<template>
    <div class="market-box">
        <p class="tips">营销洞察助力智能获取精准目标客群，快速掌握市场趋势及竞对情报，发掘商业机会，借助热点打造爆款，提供海量营销创意、行业案例</p>
        <div class="market-target flex-start">
            <div class="target-left">
                <div class="target-left-title flex">
                    <p>推荐目标客群</p>
                    <p>查看全部<i class="iconfont iconarrowRight"></i></p>
                </div>
                <div class="target-left-content">
                    <Select class="target-left-select" value="北漂一族">
                        <Option value="北漂一族">北漂一族</Option>
                    </Select>
                    <p class="target-left-sub-title">基本特点</p>
                    <ul class="target-left-sub-ul">
                        <li>未婚</li>
                        <li>20-29岁</li>
                        <li>本科以上</li>
                        <li>白领</li>
                        <li>15-25k</li>
                        <li>一线城市</li>
                    </ul>
                    <p class="target-left-sub-title">关注话题</p>
                    <ul class="target-left-sub-ul">
                        <li>秋天的第一杯奶茶</li>
                        <li>燃烧我的卡路里</li>
                    </ul>
                    <p class="target-left-sub-title">心智特点</p>
                    <div class="target-left-group">
                        <div>
                            <p>品牌力偏好</p>
                            <p>强势品牌</p>
                        </div>
                        <div>
                            <p>内容偏好</p>
                            <p>促进型</p>
                        </div>
                        <div>
                            <p>消费态度</p>
                            <p>个性化/颜值…</p>
                        </div>
                        <div>
                            <p>品牌形象偏好</p>
                            <p>具象化/简洁</p>
                        </div>
                        <div>
                            <p>厌恶</p>
                            <p>性别歧视</p>
                        </div>
                        <div>
                            <p>创伤</p>
                            <p>996/晚高峰</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="target-right">
                <video class="player" width="100%" height="100%" autoplay loop muted
                       src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"></video>
            </div>
        </div>
        <div class="card card-one">
            <div class="card-one-left">
                <div class="card-one-left-info">
                    <div class="flex">
                        <p><span></span>北漂一族</p>
                        <p>分群用户数：<span>18197人</span></p>
                    </div>
                    <ul>
                        <li>公共交通</li>
                        <li>家</li>
                        <li>公司</li>
                    </ul>
                </div>
                <div class="card-one-left-img">
                    <img src="../../assets/img/dashboard/market/timeline@2x.png"/>
                </div>
            </div>
            <div class="card-one-right">
                <div class="card-one-right-item">
                    <div class="item-line"></div>
                    <div class="item-box">
                        <p>休息/通勤</p>
                    </div>
                    <div class="item-box">
                        <p>7:00 - 9:00</p>
                    </div>
                    <div class="item-box">
                        <p>头条/微博/小红书</p>
                    </div>
                    <div class="item-box">
                        <p>一般: 35% 紧张: 29%</p>
                    </div>
                    <div class="item-box">
                        <p>用户群体处于休息及通勤状态，偏好浏览新闻资讯及社交娱乐类型的APP，处理工作相关信息，情绪分布较为平均</p>
                    </div>
                </div>
                <div class="card-one-right-item active">
                    <div class="item-line"></div>
                    <div class="item-box">
                        <p>工作/休息</p>
                    </div>
                    <div class="item-box">
                        <p>12:00 - 13:00</p>
                    </div>
                    <div class="item-box">
                        <p>大众点评/新浪微博/抖音</p>
                    </div>
                    <div class="item-box">
                        <p>放松: 37% 一般: 36%</p>
                    </div>
                    <div class="item-box">
                        <p>用户群体主要处于午间休息状态，偏好浏览新闻资讯及社交娱乐类型的APP，情绪分布较为放松</p>
                    </div>
                </div>
                <div class="card-one-right-item">
                    <div class="item-line"></div>
                    <div class="item-box">
                        <p>休息/放松</p>
                    </div>
                    <div class="item-box">
                        <p>20:00 - 22:00</p>
                    </div>
                    <div class="item-box">
                        <p>抖音/小红书/快手</p>
                    </div>
                    <div class="item-box">
                        <p>放松: 48% 一般: 26%</p>
                    </div>
                    <div class="item-box">
                        <p>用户群体处于休息及休闲状态，偏好社交娱乐、电商购物类型的APP，情绪分布较为放松</p>
                    </div>
                </div>
                <div class="card-one-right-line"></div>
            </div>
        </div>
        <Card title="触达用户媒介" class="card-two">

        </Card>
        <div class="card-three flex">
            <Card title="市场趋势" class="card-three-left">

            </Card>
            <Card title="对标商品行情" class="card-three-right">

            </Card>
        </div>
        <Card title="舆情热点与营销机会" class="card-four">

        </Card>
        <Card title="负面舆情的处理意见" class="card-five">

        </Card>
        <Card title="行业分析报告、营销创意及案例" class="card-six">

        </Card>
    </div>
</template>

<script>
    import Card from "../../components/Card"

    export default {
        name: "BusinessMarket",
        components: {Card}
    }
</script>

<style lang="scss">
    .market-box {
        .ivu-select-selection {
            background: transparent;
        }
    }
</style>
<style scoped lang="scss">
    .market-box {
        .tips {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97A0C3;
        }

        .market-target {
            margin-top: 24px;

            .target-left {
                margin-right: 16px;
                padding: 20px 24px;
                width: 320px;
                height: 442px;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                background: url("../../assets/img/dashboard/business/neurotesting-bg@2x.png") no-repeat center / 100% 100%;
                border-radius: 8px;

                .target-left-title {
                    > p {
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #7C88B1;

                        &:first-child {
                            font-size: 16px;
                            color: #242F57;
                        }
                    }
                }

                .target-left-content {
                    .target-left-select {
                        margin: 20px 0 0;
                    }

                    .target-left-sub-title {
                        margin: 16px 0 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    .target-left-sub-ul {
                        display: flex;
                        flex-wrap: wrap;

                        li {
                            margin: 0 4px 8px 0;
                            padding: 0 10px;
                            height: 24px;
                            line-height: 24px;
                            border-radius: 8px;
                            border: 1px solid #97A0C3;
                        }
                    }

                    .target-left-group {
                        display: flex;
                        flex-wrap: wrap;

                        > div {
                            margin-bottom: 8px;
                            width: 33.3%;

                            > p {
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #97A0C3;

                                &:last-child {
                                    color: #242F57;
                                }
                            }
                        }
                    }
                }
            }

            .target-right {
                width: calc(100% - 336px);
                height: 442px;
                background: #FFFFFF;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                border-radius: 8px;

                video {
                    object-fit: fill;
                }
            }
        }

        .card-one {
            margin-top: 24px;
            width: 100%;
            height: 480px;

            .card-one-left {
                display: inline-block;
                vertical-align: top;
                padding: 16px;
                width: 336px;
                height: 480px;
                border-right: 1px solid #EAEDF7;

                .card-one-left-info {
                    padding: 10px 12px;
                    width: 303px;
                    height: 72px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;

                    > div {
                        > p {
                            &:nth-child(1) {
                                font-size: 16px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;

                                > span {
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-right: 5px;
                                    width: 12px;
                                    height: 12px;
                                    border-radius: 50%;
                                    background: #2373FF;
                                }
                            }

                            &:nth-child(2) {
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;

                                > span {
                                    color: #2373FF;
                                }
                            }
                        }
                    }

                    > ul {
                        margin-top: 6px;

                        li {
                            display: inline-block;
                            vertical-align: top;
                            margin-right: 8px;
                            width: 55px;
                            height: 20px;
                            line-height: 20px;
                            background: rgba(164, 157, 250, .2);
                            border-radius: 8px;
                            font-size: 10px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #242F57;
                            text-align: center;

                            &:nth-child(2) {
                                background: rgba(138, 230, 199, .2);
                            }

                            &:nth-child(3) {
                                background: rgba(255, 159, 127, .2);
                            }
                        }
                    }
                }

                .card-one-left-img {
                    height: 380px;
                    overflow-y: auto;

                    > img {
                        width: 100%;
                    }
                }
            }

            .card-one-right {
                width: calc(100% - 336px);
                display: inline-block;
                vertical-align: top;
                padding: 16px 0 16px 24px;

                .card-one-right-line {
                    width: 40px;
                    height: 4px;
                    background: #4D94FF;
                    border-radius: 5px;
                    margin: 24px auto;
                }

                .card-one-right-item {
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 24px;
                    width: calc(33.3% - 24px);

                    &:last-child {
                        margin-right: 0;
                    }

                    .item-line {
                        position: absolute;
                        left: 24px;
                        top: 0;
                        width: 2px;
                        height: calc(100% - 24px);
                        background: #EAEDF7;
                        z-index: 1;
                    }

                    .item-box {
                        position: relative;
                        margin-bottom: 16px;
                        padding: 16px;
                        background: #F7F9FD;
                        border-radius: 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #636E95;
                        z-index: 2;

                        &:first-child {
                            font-size: 16px;
                        }

                        &:last-child {
                            height: 120px;
                        }
                    }

                    &.active {
                        .item-line {
                            background: #C7E3FF;
                        }

                        .item-box {
                            color: #242F57;
                            background: #FFFFFF;
                            box-shadow: 0px 4px 16px 0px rgba(55, 84, 170, 0.12);
                        }
                    }
                }
            }
        }

        .card-two {
            margin-top: 24px;
        }

        .card-three {
            margin-top: 24px;

            .card-three-left {
                width: calc(50% - 12px);
                height: 384px;
            }

            .card-three-right {
                width: calc(50% - 12px);
                height: 384px;
            }
        }

        .card-four {
            margin-top: 24px;
        }

        .card-five {
            margin-top: 24px;
        }

        .card-six {
            margin-top: 24px;
        }
    }
</style>