<template>
    <div class="home">
        <!-- 首页 -->
        <Side></Side>
        <div class="container">
            <Header :target="'首页'"></Header>
            <div class="content">
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
        components:{Side,Header}
    }
</script>

<style scoped lang="scss">
    .home {
        display: flex;

        .container {
            display: flex;
            flex-direction: column;
            width: calc(100vw - 88px);

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
                        width: 78px;
                        height: 32px;
                        background: #FFFFFF;
                    }

                    .iframe2 {
                        left: 304px;
                        top: 155px;
                    }

                    .iframe3 {
                        left: 561px;
                        top: 155px;
                    }

                    .iframe4 {
                        left: 818px;
                        top: 155px;
                    }

                    .iframe5 {
                        left: 1076px;
                        top: 154px;
                    }

                    .iframe6 {
                        left: 46px;
                        top: 157px;
                        width: 74px;
                    }

                    .iframe7 {
                        left: 253px;
                        top: 157px;
                        width: 60px;
                    }

                    .iframe8 {
                        left: 481px;
                        top: 157px;
                    }


                    .iframe9 {
                        left: 694px;
                        top: 157px;
                        width: 80px;
                    }

                    .iframe10 {
                        left: 906px;
                        top: 157px;
                        width: 60px;
                    }

                    .iframe11 {
                        left: 1132px;
                        top: 157px;
                    }

                    .iframe12 {
                        left: 470px;
                        top: 165px;
                    }

                    .iframe13 {
                        left: 688px;
                        top: 165px;
                    }

                    .iframe14 {
                        left: 896px;
                        top: 165px;
                    }

                    .iframe15 {
                        left: 1114px;
                        top: 175px;
                    }

                    .iframe16 {
                        left: 482px;
                        top: 305px;
                    }

                    .iframe17 {
                        left: 45px;
                        top: 172px;
                    }

                    .iframe18 {
                        left: 370px;
                        top: 172px;
                    }

                    .iframe19 {
                        left: 674px;
                        top: 172px;
                        width: 40px;
                    }

                    .iframe20 {
                        left: 1009px;
                        top: 172px;
                        width: 127px;
                    }

                    .iframe21 {
                        left: 44px;
                        bottom: 102px;
                    }

                    .iframe22 {
                        left: 352px;
                        bottom: 102px;
                        width: 40px;
                    }

                    .iframe23 {
                        left: 692px;
                        bottom: 102px;
                    }

                    .iframe24 {
                        left: 1014px;
                        bottom: 105px;
                    }
                }
            }
        }
    }
</style>
