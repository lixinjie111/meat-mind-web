<template>
    <div class="home">
        <!-- 首页 -->
        <Header></Header>
        <div class="content">
            <!--品牌运营概览-->
            <img src="../../static/img/header/header-main@2x.png" alt="">
            <div class="iframe1-bg"></div>
            <iframe class="iframe1" src="/static/html/lxj/yibiao.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe2" src="/static/html/zjj/gmv.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe3" src="/static/html/zjj/dindanL.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe4" src="/static/html/zjj/kedanJ.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe5" src="/static/html/zjj/xiadanR.html" frameborder="0" scrolling="no"></iframe>
            <!--用户生命周期-->
            <iframe class="iframe iframe6" src="/static/html/zjj/xinyonH.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe7" src="/static/html/zjj/huoyueYH.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe8" src="/static/html/zjj/huiliuYH.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe9" src="/static/html/zjj/chenmoYH.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe10" src="/static/html/zjj/liushiYH.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe11" src="/static/html/zjj/liuRliuCb.html" frameborder="0" scrolling="no"></iframe>
            <!--通道概况-->
            <iframe class="iframe iframe12" src="/static/html/lxj/num.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe13" src="/static/html/lxj/num1.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe14" src="/static/html/lxj/num2.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe15" src="/static/html/lxj/num3.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe16" src="/static/html/lxj/num4.html" frameborder="0" scrolling="no"></iframe>
            <!--产品数据评估上-->
            <iframe class="iframe iframe17" src="/static/html/fj/Active-times.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe18" src="/static/html/fj/Active-user-core.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe19" src="/static/html/fj/Active-enterprises.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe20" src="/static/html/fj/Total-core-functions.html" frameborder="0" scrolling="no"></iframe>
            <!--产品数据评估下-->
            <iframe class="iframe iframe21" src="/static/html/fj/Num-active-employees.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe22" src="/static/html/fj/Core-function-Enterprise.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe23" src="/static/html/fj/Active-user-core.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe iframe24" src="/static/html/fj/Core-permeability.html" frameborder="0" scrolling="no"></iframe>
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

<style scoped lang="scss">
    .home {
        .content {
            position: relative;

            img {
                width: 100%;
                height: 100%;
            }

            .iframe1 {
                position: absolute;
                left: 35px;
                top: 645px;
                width: 160px;
                height: 200px;
                z-index: 100;
            }

            .iframe1-bg {
                position: absolute;
                left: 50px;
                top: 680px;
                width: 120px;
                height: 80px;
                background: #FFFFFF;
                z-index: 10;
            }

            .iframe {
                position: absolute;
                z-index: 100;
                width: 80px;
                height: 32px;
                background: #FFFFFF;
            }

            .iframe2 {
                left: 320px;
                top: 725px;
            }

            .iframe3 {
                left: 600px;
                top: 725px;
            }

            .iframe4 {
                left: 877px;
                top: 725px;
            }

            .iframe5 {
                left: 1155px;
                top: 725px;
            }

            .iframe6 {
                left: 45px;
                top: 980px;
            }

            .iframe7 {
                left: 265px;
                top: 980px;
                width: 70px;
            }

            .iframe8 {
                left: 515px;
                top: 980px;
            }


            .iframe9 {
                left: 750px;
                top: 980px;
            }

            .iframe10 {
                left: 970px;
                top: 980px;
                width: 70px;
            }

            .iframe11 {
                left: 1210px;
                top: 980px;
            }

            .iframe12 {
                left: 500px;
                top: 1242px;
            }

            .iframe13 {
                left: 735px;
                top: 1242px;
            }

            .iframe14 {
                left: 955px;
                top: 1242px;
            }

            .iframe15 {
                left: 1190px;
                top: 1252px;
            }

            .iframe16 {
                left: 515px;
                top: 1385px;
            }

            .iframe17 {
                left: 44px;
                top: 1636px;
            }

            .iframe18 {
                left: 390px;
                top: 1636px;
            }

            .iframe19 {
                left: 732px;
                top: 1636px;
                width: 42px;
            }

            .iframe20 {
                left: 1082px;
                top: 1636px;
                width: 127px;
            }

            .iframe21 {
                left: 44px;
                top: 1832px;
            }

            .iframe22 {
                left: 384px;
                top: 1832px;
                width: 42px;
            }

            .iframe23 {
                left: 738px;
                top: 1832px;
            }

            .iframe24 {
                left: 1092px;
                top: 1832px;
            }
        }
    }
</style>
