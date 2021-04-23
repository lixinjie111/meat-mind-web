<template>
    <div class="login-box">
        <div class="header-nav">
            <p>Dashboard</p>
        </div>
        <div class="welcome">
            <img class="user" src="../assets/img/login/head1.png" alt=""/>
            <div class="user-intro-container">
                <p>早安，分析师，欢迎使用 Meta-Mind-Marketing！</p>
                <p>轻松上手分析模型，探索不同业务中的关键行为，洞察指标背后的增长点。</p>
                <button class="btn-primary report-btn">
                    <i class="iconfont iconxiazai"/>
                    <span class="btn-txt">一键生成报告</span>
                </button>
            </div>
        </div>
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>MeMart元气值</p>
                    <p>通过将信息在品牌、消费者之间通过媒介传播的全过程进行量化和动态拟合，智能评估营销活动三要素的综合表现与营销活动中出现的问题，提醒企业及时规避风险。</p>
                </div>
            </div>
            <div class="me-mart-box flex">
                <div class="left">
                    <div class="top">
                        <PieNest2 id="303" :myData="$abelData.nest201Data" title="综合指数" value="72"></PieNest2>
                    </div>
                    <div class="bottom">
                        <p>Powered by <span>元知智能研究院</span></p>
                        <p>量化营销过程中的信息传播全过程，评估</br>品牌、消费者、媒介之间的匹配度</p>
                    </div>
                </div>
                <div class="right flex">
                    <div class="right-item">
                        <div class="right-item-top">
                            <div class="top">
                                <div class="top-icon blue"><i class="iconfont iconyonghu"></i></div>
                                <div class="top-title">
                                    <p class="p-blue">78</p>
                                    <p>客群定位</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="bottom-item flex">
                                    <p>客群覆盖度</p><i class="iconfont iconduigou1"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>目标客群心智拟合度</p><i class="iconfont iconguanyu"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>用户增长趋势</p><i class="iconfont iconduigou1"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right-item-bottom bg1">
                            <p>客群定位 <span class="p-blue">较为准确</span></p>
                        </div>
                    </div>
                    <div class="right-item">
                        <div class="right-item-top">
                            <div class="top">
                                <div class="top-icon orange"><i class="iconfont iconxingxing"></i></div>
                                <div class="top-title">
                                    <p class="p-orange">46</p>
                                    <p>媒介评测</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="bottom-item flex">
                                    <p>媒介匹配度</p><i class="iconfont iconduigou1"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>媒介传播效率</p><i class="iconfont iconguanyu"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>品牌媒介分布</p><i class="iconfont iconguanyu"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right-item-bottom bg2">
                            <p>媒介评测 <span class="p-orange">存在问题</span></p>
                        </div>
                    </div>
                    <div class="right-item">
                        <div class="right-item-top">
                            <div class="top">
                                <div class="top-icon green"><i class="iconfont iconpinpaihuaxiang"></i></div>
                                <div class="top-title">
                                    <p class="p-green">32</p>
                                    <p>品牌评价</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="bottom-item flex">
                                    <p>品牌受众匹配度</p><i class="iconfont iconduigou1"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>品牌心智占有率</p><i class="iconfont iconguanyu"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>公关事件响应策略</p><i class="iconfont iconguanyu"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right-item-bottom bg3">
                            <p>品牌评价 <span class="p-red">有待提升</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal v-model="showModal"
               footer-hide
               :mask-closable="false"
               :closable="false"
               class-name="login-modal">
            <div class="middle">
                <div class="title">欢迎使用智慧营销</div>
                <div class="sub-title">请选择您的身份</div>
                <div class="select">
                    <div @click="role = 0" :class="role == 0 ? 'active' : ''">
                        <img src="../assets/img/login/head1.png" alt="">
                        <p>分析师</p>
                    </div>
<!--                    <div @click="role = 1" :class="role == 1 ? 'active' : ''">-->
<!--                        <img src="../assets/img/login/head2.png" alt="">-->
<!--                        <p>企业主</p>-->
<!--                    </div>-->
                    <div @click="role = 2" :class="role == 2 ? 'active' : ''">
                        <img src="../assets/img/login/head3.png" alt="">
                        <p>数据管理员</p>
                    </div>
                </div>
                <button class="btn-primary confirm" :disabled="role < 0" @click="confirm">登录</button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import PieNest2 from '@/components/echarts/common/pie/PieNest2';

    export default {
        name: "Analyst",
        components: {PieNest2},
        data() {
            return {
                showModal: true,
                role: -1, //分析师-0，企业主-1，数据管理员-2
            }
        },
        methods: {
            confirm() {
                if (this.role < 0) {
                    this.$Message.error('请选择您的身份');
                    return false;
                }
                this.$store.commit('setRole', this.role);
                this.$router.push({name: "dashboard"});
            }
        }
    }
</script>

<style lang="scss">
    .ivu-modal-mask {
        background-color: rgba(0, 0, 0, .6) !important;
    }

    .login-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 700px !important;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid #EAEDF7;

            .ivu-modal-content {
                .ivu-modal-body {
                    padding: 56px;

                    .middle {
                        margin: 0 auto;
                        width: 400px;
                        text-align: center;

                        .title {
                            font-size: 24px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                        }

                        .sub-title {
                            margin: 60px 0 30px;
                            font-size: 16px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #97A0C3;
                        }

                        .select {
                            display: flex;
                            justify-content: space-between;
                            align-content: center;
                            height: 184px;

                            > div {
                                width: 160px;
                                height: 160px;
                                box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2), -6px -6px 12px 0px #FFFFFF;
                                border: 2px solid #FFFFFF;
                                border-radius: 50%;
                                cursor: pointer;

                                > img {
                                    width: 156px;
                                    height: 156px;
                                    border-radius: 50%;
                                }

                                > p {
                                    padding-top: 16px;
                                    font-size: 16px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #97A0C3;
                                }

                                &.active {
                                    box-shadow: 8px 8px 20px 0px rgba(99, 110, 149, 0.15) inset, -6px -6px 12px 0px rgba(255, 255, 255, 0.5) inset;
                                    border: 2px solid #2373FF;

                                    > p {
                                        color: #2373FF;
                                    }
                                }
                            }
                        }

                        .confirm {
                            margin: 78px auto 4px;
                            width: 104px;
                            height: 40px;
                            line-height: 40px;
                        }
                    }
                }

            }
        }
    }
</style>

<style scoped lang="scss">
    .login-box {
        padding: 0 24px;

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
                width: 164px;
                height: 40px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;

                > i {
                    margin-right: 8px;
                    color: #ffffff;
                }
            }
        }

        .market-card {
            .title {
                margin: 32px 0 16px;

                .left {
                    > p {
                        height: 24px;
                        font-size: 18px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                        line-height: 24px;

                        &:nth-child(2) {
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #97A0C3;
                        }
                    }
                }

                .right {
                    > div {
                        margin-left: 16px;
                        width: 140px;
                    }
                }
            }

            .content {
                padding: 24px;
                width: 100%;
                background: #FFFFFF;
                box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                border-radius: 8px;
            }
            &:last-child{
                .content{
                    border: none;
                }
            }
        }

        .me-mart-box {
            .left {
                padding-top: 30px;
                width: 396px;
                height: 415px;
                background: #ffffff;
                box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                border-radius: 8px;
                text-align: center;

                .top {
                    margin: 0 auto;
                    width: 278px;
                    height: 278px;
                }

                .bottom {
                    > p {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;

                        &:first-child {
                            margin-bottom: 8px;
                            font-weight: 500;

                            > span {
                                font-family: PingFangSC-Medium, PingFang SC;
                            }
                        }
                    }
                }
            }

            .right {
                margin-left: 24px;
                width: calc(100% - 420px);

                .right-item {
                    .p-blue {
                        color: #2373FF!important;
                    }

                    .p-orange {
                        color: #FE774B!important;
                    }

                    .p-red {
                        color: #FF4C60!important;
                    }

                    .p-green {
                        color: #1DCEC3!important;
                    }

                    .right-item-top {
                        padding: 24px;
                        min-width: 228px;
                        height: 320px;
                        background: #FFFFFF;
                        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                        border-radius: 8px;

                        .top {
                            display: flex;

                            .top-icon {
                                width: 72px;
                                height: 72px;
                                line-height: 72px;
                                border-radius: 12px;
                                text-align: center;

                                > i {
                                    font-size: 40px;
                                }

                                &.blue {
                                    background: rgba(211, 227, 255, .3);

                                    > i {
                                        color: #2373FF;
                                    }
                                }

                                &.orange {
                                    background: rgba(255, 230, 222, .3);

                                    > i {
                                        color: #FE774B;
                                    }
                                }

                                &.green {
                                    background: rgba(223,248,246, .3);

                                    > i {
                                        color: #1DCEC3;
                                    }
                                }
                            }

                            .top-title {
                                margin-left: 8px;

                                > p {
                                    margin-top: 5px;
                                    font-size: 18px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #7C88B1;
                                    line-height: 25px;

                                    &:first-child {
                                        font-size: 32px;
                                        font-family: PingFangSC-Medium, PingFang SC;
                                        font-weight: 500;
                                        line-height: 32px;
                                    }
                                }
                            }
                        }

                        .bottom {
                            margin-top: 32px;

                            .bottom-item {
                                margin-top: 8px;
                                padding: 14px 12px;
                                width: 180px;
                                height: 48px;
                                background: rgba(211, 227, 255, .3);
                                border-radius: 8px;

                                > p {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                }

                                > i {
                                    &.iconduigou1 {
                                        color: #08BD6C;
                                    }

                                    &.iconguanyu {
                                        color: #FF8359;
                                    }
                                }
                            }
                        }
                    }

                    .right-item-bottom {
                        margin-top: 16px;
                        min-width: 228px;
                        height: 79px;
                        line-height: 95px;

                        > p {
                            font-size: 18px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            text-align: center;
                        }

                        &.bg1 {
                            background: url("../assets/img/dashboard/market/mart1@2x.png") no-repeat center center / 100% 100%;
                        }

                        &.bg2 {
                            background: url("../assets/img/dashboard/market/mart1@2x.png") no-repeat center center / 100% 100%;
                        }

                        &.bg3 {
                            background: url("../assets/img/dashboard/market/mart1@2x.png") no-repeat center center / 100% 100%;
                        }
                    }
                }
            }
        }
    }
</style>