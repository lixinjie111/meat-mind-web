<template>
    <div class="data-manager-box">
        <div class="header-nav">
            <p>Dashboard</p>
        </div>
        <div class="welcome">
            <img class="user" src="../../assets/img/login/head3.png" alt=""/>
            <div class="user-intro-container">
                <p>早安，数据管理员，欢迎使用 Meta-Mind-Marketing！</p>
                <p>整合行业生态资源，融合全场景、全链条、全维度数据，为企业营销提供完整数据支撑，打造全维画像系统。</p>
                <div class="report-btn">
                    <i class="iconfont iconxiazai"/>
                    <span class="btn-txt">一键下载报告</span>
                </div>
            </div>
        </div>
        <div class="overview-box">
            <p>数据源概览</p>
        </div>
        <Card title="数据市场" class="last-card">
            <div class="data-box">
                <div class="data-box-title"><p>为您推荐</p></div>
                <div class="data-box-content">
                    <div class="item" v-for="(item,index) in recommendList" :key="index">
                        <img :src="item.img"/>
                        <div>
                            <div class="top flex">
                                <div class="info">{{item.title}}
                                    <div v-if="item.new" class="new">
                                        <div><span>New</span></div>
                                    </div>
                                </div>
                                <p class="detail" @click="toDetail(index)">详情</p>
                            </div>
                            <div class="middle">
                                <p>{{item.price}}</p>
                            </div>
                            <div class="bottom">
                                <div class="try-btn" v-if="item.try">试用三天</div>
                                <div class="blue-btn">购入</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
        <Modal class-name="data-market-modal" v-model="detailModal" footer-hide :closable="false">
            <div class="download">
                <img v-if="detail1" src="../../assets/img/datacenter/market/detail1@2x.png" alt="">
                <img v-if="detail2" src="../../assets/img/datacenter/market/detail2@2x.png" alt="">
                <div class="close-btn" @click="closeDetail"></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import Card from "../../components/Card"
    import Img1 from "../../assets/img/datacenter/market/1.png"
    import Img2 from "../../assets/img/datacenter/market/2.png"
    import Img3 from "../../assets/img/datacenter/market/3.png"
    import Img4 from "../../assets/img/datacenter/market/4.png"
    import Img5 from "../../assets/img/datacenter/market/5.png"
    import Img6 from "../../assets/img/datacenter/market/6.png"

    export default {
        name: "DataManager",
        components: {Card},
        data() {
            return {
                detailModal: false,
                detail1: false,
                detail2: false,
                recommendList: [
                    {
                        img: Img1,
                        title: '脑电波测试-消费场景数据包',
                        price: '¥3,200/月'
                    },
                    {
                        img: Img2,
                        title: '视觉捕捉教育场景数据包',
                        price: '¥5,600/月',
                        new: true,
                        try: true
                    },
                    {
                        img: Img3,
                        title: '用户消费场景心智测试数据包',
                        price: '¥5,999/月'
                    },
                    {
                        img: Img4,
                        title: '重大事件记忆联想测试数据包',
                        price: '¥4,999/月'
                    },
                    {
                        img: Img5,
                        title: '青少年课堂应激行为测试数据包',
                        price: '¥5,999/月'
                    },
                    {
                        img: Img6,
                        title: '女性色彩感知测试数据包 ',
                        price: '¥3,999/月'
                    }
                ],
            }
        },
        methods: {
            toDetail(index) {
                console.log(index);
                if (index == 0) {
                    this.detailModal = true
                    this.detail1 = true
                    this.detail2 = false
                }
                if (index == 1) {
                    this.detailModal = true
                    this.detail1 = false
                    this.detail2 = true
                }
            },
            closeDetail() {
                this.detailModal = false
                this.detail1 = false
                this.detail2 = false
            }
        }
    }
</script>

<style lang="scss">
    .data-market-modal {
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
                /*border: 1px solid red;*/
            }
        }
    }
</style>
<style scoped lang="scss">
    .data-manager-box {
        position: relative;
        padding: 0 24px 24px 24px;

        .welcome {
            position: relative;
            margin-bottom: 40px;
            padding: 24px;
            width: 100%;
            background: #FFFFFF;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;

            .user {
                margin-right: 24px;
                width: 72px;
                height: 72px;
                box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2), -6px -6px 12px 0px #ffffff;
                border: 1px solid #ffffff;
                border-radius: 50%;
            }

            .user-intro-container {
                display: inline-block;
                vertical-align: top;

                > p {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #7C88B1;

                    &:first-child {
                        margin-bottom: 12px;
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }
                }
            }

            .report-btn {
                position: absolute;
                right: 24px;
                bottom: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 136px;
                height: 40px;
                background: #2373FF;
                box-shadow: 3px 4px 8px 0px rgba(36, 47, 87, 0.1);
                border-radius: 4px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FFFFFF;

                > i {
                    margin-right: 8px;
                    color: #ffffff;
                }
            }
        }

        .overview-box {
            > p {
                margin-bottom: 24px;
                font-size: 18px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
            }
        }

        .last-card {
            margin-bottom: 0;
        }

        .data-box {
            .data-box-title {
                margin-bottom: 8px;

                > p {
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                }
            }

            .data-box-content {
                /*padding: 24px 0 8px 24px;*/
                //解决滚动条影响页面宽度
                //margin-right: -10px;

                .item {
                    margin: 0 16px 16px 0;
                    display: inline-block;
                    vertical-align: top;
                    padding: 16px;
                    width: 357px;
                    height: 112px;
                    background: #FFFFFF;
                    border-radius: 4px;
                    border: 1px solid #EAEDF7;

                    &:nth-child(3n+3) {
                        margin-right: 0;
                    }

                    > img {
                        margin-right: 10px;
                        width: 80px;
                        height: 80px;
                        border-radius: 8px;
                    }

                    > div {
                        width: 230px;
                        display: inline-block;
                        vertical-align: top;

                        .top {
                            .info {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;

                                .new {
                                    display: inline-block;
                                    width: 26px;
                                    height: 12px;
                                    line-height: 10px;
                                    background: rgba(255, 180, 176, 0.5);
                                    border-radius: 1px;
                                    border: 1px solid #FB343E;
                                    transform: skewX(-10deg);

                                    > div {
                                        transform: skewX(10deg);

                                        > span {
                                            display: inline-block;
                                            font-size: 12px;
                                            font-family: Helvetica-Oblique, Helvetica;
                                            font-weight: normal;
                                            color: #FB343E;
                                            text-align: center;
                                            transform: scale(0.7);
                                        }
                                    }
                                }
                            }

                            .detail {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #2373FF;
                                cursor: pointer;
                            }
                        }

                        .middle {
                            margin-top: 4px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #2373FF;
                        }

                        .bottom {
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            margin-top: 4px;

                            .try-btn {
                                margin-right: 12px;
                                width: 68px;
                                height: 28px;
                                line-height: 28px;
                                background: #FFFFFF;
                                border-radius: 4px;
                                border: 1px solid #97A0C3;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;
                                text-align: center;
                                cursor: pointer;
                            }

                            .blue-btn {
                                width: 68px;
                                height: 28px;
                                line-height: 28px;
                                background: #2373FF;
                                border-radius: 4px;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                                text-align: center;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
</style>