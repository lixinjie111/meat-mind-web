<template>
    <div class="home">
        <!-- 首页 -->
        <Side></Side>
        <div class="container">
            <Header :target="'首页'"></Header>
            <div class="business-owner" v-if="flag==1">
                <div class="part1">
                    <img src="../../static/img/home/dashboard-part1@2x.png" alt="">
                    <div class="report-btn" @click="downloadModal = true"></div>
                    <iframe class="iframe1" src="/static/html/fj2/znjc.html" frameborder="0" scrolling="no"></iframe>
                    <div class="detail" @click="toPart1Detail"></div>
                </div>
                <div class="part2">
                    <img src="../../static/img/home/dashboard-part2@2x.png" alt="">
                    <iframe class="iframe1" src="/static/html/fj2/ppxx.html" frameborder="0" scrolling="no"></iframe>
                    <div class="detail" @click="toPart2Detail"></div>
                </div>
                <Modal class-name="dashboard-report" v-model="downloadModal" footer-hide :closable="false">
                    <div class="download">
                        <img src="../../../src/static/img/decision/report@2x.png" alt="">
                        <div class="close-btn" @click="downloadModal = false"></div>
                    </div>
                </Modal>
            </div>
            <div class="content" v-else>
                <img src="../../static/img/home/home1@2x.png" alt="">
                <div class="report-btn">一键生成报告</div>
                <!--品牌运营概览-->
                <div class="card">
                    <img src="../../static/img/home/home2@2x.png" alt="">
                    <div class="iframe1-bg"></div>
                    <iframe class="iframe1" src="/static/html/lxj/yibiao.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe2" src="/static/html/zjj/gmv.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe3" src="/static/html/zjj/dindanL.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe4" src="/static/html/zjj/kedanJ.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe5" src="/static/html/zjj/xiadanR.html" frameborder="0" scrolling="no"></iframe>
                </div>
                <!--用户生命周期-->
                <div class="card">
                    <img src="../../static/img/home/home3@2x.png" alt="">
                    <iframe class="iframe iframe6" src="/static/html/zjj/xinyonH.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe7" src="/static/html/zjj/huoyueYH.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe8" src="/static/html/zjj/huiliuYH.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe9" src="/static/html/zjj/chenmoYH.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe10" src="/static/html/zjj/liushiYH.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe11" src="/static/html/zjj/liuRliuCb.html" frameborder="0" scrolling="no"></iframe>
                </div>
                <!--通道概况-->
                <div class="card">
                    <img src="../../static/img/home/home4@2x.png" alt="">
                    <iframe class="iframe iframe12" src="/static/html/lxj/num.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe13" src="/static/html/lxj/num1.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe14" src="/static/html/lxj/num2.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe15" src="/static/html/lxj/num3.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe16" src="/static/html/lxj/num4.html" frameborder="0" scrolling="no"></iframe>
                </div>
                <!--产品数据评估-->
                <div class="card">
                    <img src="../../static/img/home/home5@2x.png" alt="">
                    <iframe class="iframe iframe17" src="/static/html/fj/Active-times.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe18" src="/static/html/fj/Active-user-core.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe19" src="/static/html/fj/Active-enterprises.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe20" src="/static/html/fj/Total-core-functions.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe21" src="/static/html/fj/Num-active-employees.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe22" src="/static/html/fj/Core-function-Enterprise.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe23" src="/static/html/fj/Active-user-core.html" frameborder="0" scrolling="no"></iframe>
                    <iframe class="iframe iframe24" src="/static/html/fj/Core-permeability.html" frameborder="0" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Side from "../../components/Side"
    import Header from "../../components/HeaderDefault"

    export default {
        name: "index",
        components:{Side,Header},
        data(){
            return {
                flag:sessionStorage.getItem("dashboard"),
                downloadModal: false,
            }
        },
        methods: {
            toPart1Detail() {
                this.$router.push({name:"business-analysis-ztgl"})
            },
            toPart2Detail() {
                this.$router.push({name:"portrait-system-yxdc"})
            }
        }
    }
</script>

<style lang="scss">
    .dashboard-report {
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal {
            top: 0;
            width: 1020px !important;
            height: 800px;
            overflow-y: scroll;
            background: #ffffff;
            border-radius: 4px;
        }
        .ivu-modal-body {
            padding: 0;
        }

        .download {
            position: relative;
            margin: 0 auto;
            width: 1000px;

            >img {
                width: 1000px;
                border-radius: 10px;
            }

            .close-btn {
                position: absolute;
                top: 17px;
                right: 115px;
                width: 80px;
                height: 30px;
                background: transparent;
                cursor: pointer;
            }

            .download-btn {
                display: inline-block;
                position: absolute;
                top: 17px;
                right: 25px;
                width: 80px;
                height: 30px;
                background: transparent;
                cursor: pointer;
            }
        }
    }
</style>
<style scoped lang="scss">
    .home {
        display: flex;

        .container {
            display: flex;
            flex-direction: column;
            width: calc(100vw - 88px);

            .business-owner{
                display: flex;
                flex-direction: column;
                width: 100%;
                height: calc(100vh - 56px);
                overflow-y:scroll;

                img{
                    width: 100%;
                }

                .part1 {
                    position: relative;
                    .report-btn{
                        position: absolute;
                        top: 20px;
                        right: 24px;
                        width: 120px;
                        height: 40px;
                        // border: 1px solid red;
                        cursor: pointer;
                    }
                    .iframe1 {
                        position: absolute;
                        left: 0;
                        top: 100px;
                        width: 960px;
                        height: 500px;
                    }

                    .detail {
                        position: absolute;
                        right: 48px;
                        top: 84px;
                        /*background: red;*/
                        width: 90px;
                        height: 34px;
                        cursor: pointer;
                    }
                }

                .part2 {
                    position: relative;

                    .iframe1 {
                        position: absolute;
                        left: 0;
                        top: 100px;
                        width: 960px;
                        height: 360px;
                    }

                    .detail {
                        position: absolute;
                        right: 46px;
                        top: 26px;
                        /*background: red;*/
                        width: 90px;
                        height: 34px;
                        cursor: pointer;
                    }
                }
            }
            .content {
                position: relative;
                width: 100%;
                height: calc(100vh - 56px);
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
                        right: 356px;
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
    }
</style>
