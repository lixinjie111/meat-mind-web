<template>
    <div class="zbgl">
        <div class="change1" @click="active = 1"></div>
        <div class="change2" @click="active = 2"></div>
        <div class="new" @click="newModal = true"></div>
        <div v-if="active == 1">
            <img src="../../../static/img/tool/zbgl/ztzb@2x.png" alt="">
        </div>
        <div v-else>
            <img src="../../../static/img/tool/zbgl/khzb@2x.png" alt="">
        </div>
        <Modal class-name="zbgl-modal" v-model="newModal" footer-hide :closable="false">
            <div class="content">
                <div class="close-btn" @click="newModal = false"></div>
                <img src="../../../static/img/tool/zbgl/xjzb@2x.png" alt="">
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 1,
                newModal: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .zbgl {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            // height: 100%;
        }

        .change1 {
            position: absolute;
            left: 30px;
            top: 80px;
            width: 100px;
            height: 40px;
            cursor: pointer;
        }

        .change2 {
            position: absolute;
            left: 130px;
            top: 80px;
            width: 100px;
            height: 40px;
            cursor: pointer;
        }

        .new {
            position: absolute;
            right: 40px;
            top: 81px;
            width: 100px;
            height: 34px;
            cursor: pointer;
        }
    }
</style>
<style lang="scss">
    .zbgl-modal {
        .ivu-modal{
            width: 460px!important;
        }
        .ivu-modal-body {
            padding: 0;
        }

        .content {
            position: relative;
            width: 460px;
            height: 600px;

            img {
                width: 460px;
                height: 600px;
            }

            .close-btn {
                position: absolute;
                right: 15px;
                top: 20px;
                width: 16px;
                height: 16px;
                cursor: pointer;
            }
        }
    }
</style>