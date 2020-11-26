<template>
    <div class="home">
        <!-- 首页 -->
        <Side></Side>
        <div class="home-container">
            <Header :target="'首页'"></Header>
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

        .home-container {
            position: relative;
            display: flex;
            flex-direction: column;

            img {
                width: 100%;
                height: 100%;
            }

            .iframe1 {
                position: absolute;
                left: 35px;
                top: 705px;
                width: 140px;
                height: 140px;
                z-index: 100;
            }

            .iframe1-bg {
                position: absolute;
                left: 50px;
                top: 715px;
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
                left: 302px;
                top: 755px;
            }

            .iframe3 {
                left: 562px;
                top: 755px;
            }

            .iframe4 {
                left: 824px;
                top: 755px;
            }

            .iframe5 {
                left: 1082px;
                top: 755px;
            }

            .iframe6 {
                left: 42px;
                top: 1004px;
                width: 74px;
            }

            .iframe7 {
                left: 255px;
                top: 1004px;
                width: 60px;
            }

            .iframe8 {
                left: 481px;
                top: 1004px;
            }


            .iframe9 {
                left: 700px;
                top: 1004px;
                width: 80px;
            }

            .iframe10 {
                left: 913px;
                top: 1004px;
                width: 60px;
            }

            .iframe11 {
                left: 1132px;
                top: 1004px;
            }

            .iframe12 {
                left: 470px;
                top: 1256px;
            }

            .iframe13 {
                left: 688px;
                top: 1256px;
            }

            .iframe14 {
                left: 895px;
                top: 1256px;
            }

            .iframe15 {
                left: 1112px;
                top: 1266px;
            }

            .iframe16 {
                left: 485px;
                top: 1394px;
            }

            .iframe17 {
                left: 40px;
                top: 1636px;
            }

            .iframe18 {
                left: 365px;
                top: 1636px;
            }

            .iframe19 {
                left: 685px;
                top: 1636px;
                width: 42px;
            }

            .iframe20 {
                left: 1009px;
                top: 1638px;
                width: 127px;
            }

            .iframe21 {
                left: 42px;
                top: 1825px;
            }

            .iframe22 {
                left: 358px;
                top: 1825px;
                width: 42px;
            }

            .iframe23 {
                left: 690px;
                top: 1825px;
            }

            .iframe24 {
                left: 1022px;
                top: 1828px;
            }
        }
    }
</style>
