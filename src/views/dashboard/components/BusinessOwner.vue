<template>
    <div class="business-box">
        <div class="header-nav">
            <p>Dashboard</p>
        </div>
        <div class="welcome">
            <img class="user" src="../../../assets/img/login/head2.png" alt=""/>
            <div class="user-intro-container" v-if="tabActive == 1">
                <p>早安，叶总，欢迎使用 Meta-Mind-Marketing！</p>
                <p>营销洞察助力智能获取精准目标客群，掌握市场趋势及竞对情报，发掘商业机会，借助热点打造爆款，提供海量营销创意案例。</p>
                <button class="btn-primary report-btn" @click="showModal = true">
                    <i class="iconfont iconxiazai"/>
                    <span class="btn-txt">一键生成洞察报告</span>
                </button>
            </div>
            <div class="user-intro-container" v-else>
                <p>早安，叶总，欢迎使用 Meta-Mind-Marketing！</p>
                <p>经营诊断可以智能监测营销活动效果，从客群、媒介以及品牌三个维度，针对性提出改进方案。</p>
                <button class="btn-primary report-btn" @click="showModal = true">
                    <i class="iconfont iconxiazai"/>
                    <span class="btn-txt">一键生成诊断报告</span>
                </button>
            </div>
        </div>
        <Tab :tab-list="['营销洞察','经营诊断']" @change="changeTab"></Tab>
        <div v-if="tabActive == 1">
            <BusinessMarket></BusinessMarket>
        </div>
        <div v-else>
            <BusinessManage></BusinessManage>
        </div>
        <Modal v-model="showModal"
               footer-hide
               :mask-closable="false"
               :closable="false"
               class-name="report-modal">
            <div class="report-modal-content">
                <div class="report-title-box flex">
                    <p v-if="tabActive == 1">营销洞察报告</p>
                    <p v-if="tabActive == 2">经营诊断报告</p>
                    <div class="flex">
                        <div @click="showModal = false" class="down-btn">关闭</div>
                        <a v-if="tabActive == 1" :href="report1" target="_blank" download='营销洞察报告'><button class="down-btn">下载</button></a>
                        <a v-if="tabActive == 2" :href="report2" target="_blank" download='经营诊断报告'><button class="down-btn">下载</button></a>
                    </div>
                </div>
                <div class="report-img-box">
                    <img v-if="tabActive == 1" :src="report1"/>
                    <img v-if="tabActive == 2" :src="report2"/>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import BusinessManage from "./BusinessManage";
    import BusinessMarket from "./BusinessMarket";
    import Tab from "@/components/Tab";
    import report1 from "../../../assets/img/dashboard/market/market-report.png";
    import report2 from "../../../assets/img/dashboard/manage/manage-report.png";

    export default {
        name: "BusinessOwner",
        components: {BusinessMarket, BusinessManage, Tab},
        data() {
            return {
                tabActive: 1,
                showModal: false,
                report1: report1,
                report2: report2
            }
        },
        methods: {
            changeTab(index) {
                this.tabActive = index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .business-box {
        position: relative;
        padding: 0 24px 24px 24px;

        ::v-deep .ivu-tabs-bar {
            margin-top: 14px;
        }

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
    }
</style>
<style lang="scss">
    .ivu-modal-mask {
        background-color: rgba(0, 0, 0, .6) !important;
    }

    .report-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 1000px !important;
            background: #FFFFFF;
            border-radius: 8px;

            .ivu-modal-body {
                padding: 0;

                .report-modal-content {
                    .report-title-box {
                        padding: 18px 24px;

                        > p {
                            font-size: 24px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: rgba(0, 0, 0, 0.85);
                        }

                        > div {
                            .down-btn {
                                width: 76px;
                                height: 32px;
                                line-height: 32px;
                                background: #FFFFFF;
                                border-radius: 4px;
                                border: 1px solid #97A0C3;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;
                                text-align: center;
                                cursor: pointer;

                                &:last-child {
                                    margin-left: 16px;
                                    background: #2373FF;
                                    box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
                                    border: none;
                                    color: #FFFFFF;
                                }
                            }
                        }
                    }

                    .report-img-box {
                        height: 600px;
                        overflow-y: auto;

                        > img {
                            max-width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>