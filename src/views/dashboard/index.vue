<template>
    <div class="dashboard-container">
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
        </template>
    </div>
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
    .dashboard-container {
        .data-admin {
            padding: 0 12px 0 18px;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 64px);
            overflow-y: scroll;
            background: #ffffff;

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
                    /*border: 1px solid red;*/
                    cursor: pointer;
                }
            }

            .part2 {
                position: relative;

                .more {
                    position: absolute;
                    top: 25px;
                    right: 35px;
                    width: 100px;
                    height: 36px;
                    cursor: pointer;
                    /*border: 1px solid red;*/
                }

                .detail {
                    position: absolute;
                    left: 330px;
                    top: 125px;
                    width: 50px;
                    height: 24px;
                    cursor: pointer;
                    /*border: 1px solid red;*/
                }

                .detail2 {
                    position: absolute;
                    left: 700px;
                    top: 125px;
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
