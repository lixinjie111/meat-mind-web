<template>
    <div class="yxdc">
        <div class="part1">
            <img src="../../../static/img/protrait/yxdc/active1.png" alt="" v-show="active==1">
            <img src="../../../static/img/protrait/yxdc/active2.png" alt="" v-show="active==2">
            <img src="../../../static/img/protrait/yxdc/active3.png" alt="" v-show="active==3">
            <img src="../../../static/img/protrait/yxdc/active4.png" alt="" v-show="active==4">
            <div class="target1" @click="active=1"></div>
            <div class="target2" @click="active=2"></div>
            <div class="target3" @click="active=3"></div>
            <div class="target4" @click="active=4"></div>
            <div class="report-btn" @click="downloadModal = true"></div>
        </div>
        <div class="part">
            <img src="../../../static/img/protrait/yxdc/img2.png" alt="">
        </div>
        <div class="part">
            <img src="../../../static/img/protrait/yxdc/img3.png" alt="">
            <iframe class="iframe iframe1" src="/static/html/lxj2/xzdc1.html" frameborder="0" scrolling="no"></iframe>
        </div>
        <div class="part">
            <img src="../../../static/img/protrait/yxdc/img4.png" alt="">
        </div>
        <div class="part">
            <img src="../../../static/img/protrait/yxdc/img5.png" alt="">
        </div>
        <div class="part">
            <img src="../../../static/img/protrait/yxdc/img6.png" alt="">
        </div>    
        <Modal class-name="portrait-report" v-model="downloadModal" footer-hide :closable="false">
            <div class="download">
                <img src="../../../static/img/decision/report@2x.png" alt="">
                <div class="close-btn" @click="downloadModal = false"></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'yxdc',
        data() {
            return {
                active:1,
                downloadModal: false,
            }
        }
    }
</script>

<style lang="scss">
    .portrait-report {
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
    .yxdc {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;

        img {
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
            img{
                width: 100%;
            }

            .target1 {
                position: absolute;
                top: 160px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }

            .target2 {
                position: absolute;
                top: 184px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }

            .target3 {
                position: absolute;
                top: 206px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }

            .target4 {
                position: absolute;
                top: 226px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }
        }

        .part {
            position: relative;
        }

        .iframe {
            position: absolute;
            width: 760px;
            height: 220px;
        }

        .iframe1 {
            right: 40px;
            top: 65px;
        }

    }
</style>
