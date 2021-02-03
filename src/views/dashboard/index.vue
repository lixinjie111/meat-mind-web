<template>
    <DefaultPage>
        <div class="home">
            <!-- 企业主 -->
            <template v-if="flag==1">
                <BusinessOwner></BusinessOwner>
            </template>
            <!-- 数据管理员 -->
            <template v-else-if="flag==2">
              <div class="data-admin">
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
            </template>
            <!-- 分析师 -->
            <template v-else>
                <Analyst></Analyst>
<!--                <img src="../../static/img/home/home1@2x.png" alt="">-->
<!--                <div class="report-btn">一键生成报告</div>-->
<!--                &lt;!&ndash;品牌运营概览&ndash;&gt;-->
<!--                <div class="card">-->
<!--                    <img src="../../static/img/home/home2@2x.png" alt="">-->
<!--                    <div class="iframe1-bg"></div>-->
<!--                    <iframe class="iframe1" src="/static/html/dashboard/yibiao.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe2" src="/static/html/dashboard/gmv.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe3" src="/static/html/dashboard/dindanL.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe4" src="/static/html/dashboard/kedanJ.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe5" src="/static/html/dashboard/xiadanR.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                </div>-->
<!--                &lt;!&ndash;用户生命周期&ndash;&gt;-->
<!--                <div class="card">-->
<!--                    <img src="../../static/img/home/home3@2x.png" alt="">-->
<!--                    <iframe class="iframe iframe6" src="/static/html/dashboard/xinyonH.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe7" src="/static/html/dashboard/huoyueYH.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe8" src="/static/html/dashboard/huiliuYH.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe9" src="/static/html/dashboard/chenmoYH.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe10" src="/static/html/dashboard/liushiYH.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe11" src="/static/html/dashboard/liuRliuCb.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                </div>-->
<!--                &lt;!&ndash;通道概况&ndash;&gt;-->
<!--                <div class="card">-->
<!--                    <img src="../../static/img/home/home4@2x.png" alt="">-->
<!--                    <iframe class="iframe iframe12" src="/static/html/dashboard/num.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe13" src="/static/html/dashboard/num1.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe14" src="/static/html/dashboard/num2.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe15" src="/static/html/dashboard/num3.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe16" src="/static/html/dashboard/num4.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                </div>-->
<!--                &lt;!&ndash;产品数据评估&ndash;&gt;-->
<!--                <div class="card">-->
<!--                    <img src="../../static/img/home/home5@2x.png" alt="">-->
<!--                    <iframe class="iframe iframe17" src="/static/html/dashboard/Active-times.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe18" src="/static/html/dashboard/Active-user-core.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe19" src="/static/html/dashboard/Active-enterprises.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe20" src="/static/html/dashboard/Total-core-functions.html"-->
<!--                            frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe21" src="/static/html/dashboard/Num-active-employees.html"-->
<!--                            frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe22" src="/static/html/dashboard/Core-function-Enterprise.html"-->
<!--                            frameborder="0" scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe23" src="/static/html/dashboard/Active-user-core.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                    <iframe class="iframe iframe24" src="/static/html/dashboard/Core-permeability.html" frameborder="0"-->
<!--                            scrolling="no"></iframe>-->
<!--                </div>-->
            </template>
        </div>
    </DefaultPage>
</template>

<script>
    import DefaultPage from "../../layouts/DefaultPage";
    import BusinessOwner from "../../components/dashboard/BusinessOwner";
    import Analyst from "../../components/dashboard/Analyst";

    export default {
        name: "index",
        components: {Analyst, BusinessOwner, DefaultPage},
        data() {
            return {
                flag: localStorage.getItem("dashboard"),
                detailModal: false,
                detail1: true,
                detail2: false
            }
        },
        methods: {
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
        .data-admin {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 64px);
            overflow-y: scroll;
            background: #f5f5f5;

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
                    /*border: 1px solid red;*/
                }

                .detail {
                    position: absolute;
                    left: 350px;
                    top: 98px;
                    width: 50px;
                    height: 24px;
                    cursor: pointer;
                    /*border: 1px solid red;*/
                }

                .detail2 {
                    position: absolute;
                    left: 725px;
                    top: 98px;
                    width: 50px;
                    height: 24px;
                    cursor: pointer;
                    /*border: 1px solid green;*/
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
