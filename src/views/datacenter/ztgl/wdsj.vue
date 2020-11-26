<template>
    <div class="wdsj">
        <img v-if="resultShow" src="../../../static/img/datacenter/data-result@2x.png" alt="">
        <img v-else src="../../../static/img/datacenter/wdsj@2x.png" alt="">
        <div v-if="resultShow" class="back-btn" @click="resultShow = false"></div>
        <div v-else class="upload-btn" @click="uploadModal1 = true"></div>
        <Modal class-name="upload-modal1" v-model="uploadModal1" footer-hide :closable="false" width="488px">
            <div class="upload1">
                <img src="../../../static/img/datacenter/upload1@2x.png" alt="">
                <div class="close1-btn" @click="uploadModal1 = false"></div>
                <div class="upload1-btn" @click="uploadChange1"></div>
                <div class="upload3-btn" @click="uploadChange3"></div>
            </div>
        </Modal>
        <Modal class-name="upload-modal2" v-model="uploadModal2" footer-hide :closable="false" width="488px">
            <div class="upload2">
                <img src="../../../static/img/datacenter/upload2.png" alt="">
                <div class="upload2-btn" @click="uploadChange2"></div>
            </div>
        </Modal>
        <Modal class-name="upload-modal3" v-model="uploadModal3" footer-hide :closable="false" width="488px">
            <div class="upload3">
                <img src="../../../static/img/datacenter/upload3@2x.png" alt="">
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uploadModal1: false,
                uploadModal2: false,
                uploadModal3: false,
                resultShow: false
            }
        },
        methods: {
            uploadChange1() {
                this.uploadModal1 = false;
                this.uploadModal2 = true;
            },
            uploadChange2() {
                this.uploadModal1 = true;
                this.uploadModal2 = false;
            },
            uploadChange3() {
                this.uploadModal1 = false;
                this.uploadModal3 = true;
                setTimeout(() => {
                    this.uploadModal3 = false;
                    this.resultShow = true;
                }, 1000);
            }
        }
    }
</script>

<style scoped lang="scss">
    .wdsj {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }

        .upload-btn {
            position: absolute;
            right: 48px;
            top: 189px;
            width: 88px;
            height: 33px;
            background: transparent;
            cursor: pointer;
        }

        .back-btn {
            position: absolute;
            top: 88px;
            left: 48px;
            width: 100px;
            height: 33px;
            background: transparent;
            cursor: pointer;
        }
    }
</style>
<style lang="scss">
    .upload-modal1 {
        .ivu-modal-body {
            padding: 0;
        }

        .upload1 {
            position: relative;
            width: 488px;
            height: 616px;

            > img {
                width: 488px;
                height: 616px;
            }

            .close1-btn {
                position: absolute;
                right: 15px;
                top: 20px;
                width: 16px;
                height: 16px;
                background: transparent;
                cursor: pointer;
            }

            .upload1-btn {
                position: absolute;
                left: 280px;
                top: 340px;
                width: 80px;
                height: 30px;
                background: transparent;
                cursor: pointer;
            }

            .upload3-btn {
                position: absolute;
                right: 24px;
                bottom: 10px;
                width: 90px;
                height: 30px;
                background: transparent;
                cursor: pointer;
            }
        }
    }

    .upload-modal2 {
        .ivu-modal-body {
            padding: 0;
        }

        .upload2 {
            position: relative;
            width: 640px;
            height: 400px;

            > img {
                width: 640px;
                height: 400px;
            }

            .upload2-btn {
                position: absolute;
                left: 120px;
                top: 50px;
                width: 160px;
                height: 80px;
                background: transparent;
                cursor: pointer;
            }
        }
    }

    .upload-modal3 {
        .ivu-modal-body {
            padding: 0;
        }

        .upload3 {
            position: relative;
            width: 500px;
            height: 206px;

            > img {
                width: 500px;
                height: 206px;
            }
        }
    }
</style>
