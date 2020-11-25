<template>
    <div class="home">
        <!-- 首页 -->
        <Header></Header>
        <div class="content">
            <img src="../../static/img/header/header-main@2x.png" alt="">
            <div class="iframe1-bg"></div>
            <iframe class="iframe1" src="/static/html/lxj/yibiao.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe2" src="/static/html/zjj/gmv.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe3" src="/static/html/zjj/dindanL.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe4" src="/static/html/zjj/kedanJ.html" frameborder="0" scrolling="no"></iframe>
            <iframe class="iframe5" src="/static/html/zjj/xiadanR.html" frameborder="0" scrolling="no"></iframe>
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

            .iframe2 {
                position: absolute;
                left: 320px;
                top: 725px;
                z-index: 100;
                width: 80px;
                height: 32px;
                background: #FFFFFF;
            }

            .iframe3 {
                position: absolute;
                left: 600px;
                top: 725px;
                z-index: 100;
                width: 80px;
                height: 32px;
                background: #FFFFFF;
            }

            .iframe4 {
                position: absolute;
                left: 877px;
                top: 725px;
                z-index: 100;
                width: 80px;
                height: 32px;
                background: #FFFFFF;
            }

            .iframe5 {
                position: absolute;
                left: 1155px;
                top: 725px;
                z-index: 100;
                width: 80px;
                height: 32px;
                background: #FFFFFF;
            }
        }
    }
</style>
