<template>
    <div class="ffsj">
        <div class="recommend">
            <img src="../../../static/img/datacenter/ffsj@2x.png" alt="">
            <div class="detail" @click="toDetail"></div>
            <div class="detail2" @click="toDetail2"></div>
            <Modal class-name="data-market-modal" v-model="detailModal" footer-hide :closable="false">
                <div class="download">
                    <img v-if="detail1" src="../../../static/img/home/detail1@2x.png" alt="">
                    <img v-if="detail2" src="../../../static/img/home/detail2@2x.png" alt="">
                    <div class="close-btn" @click="closeDetail"></div>
                </div>
            </Modal>
        </div>
        <div class="hot">
            <div class="page1" @click="page = 1"></div>
            <div class="page2" @click="page = 2"></div>
            <img src="../../../static/img/datacenter/ffsj1@2x.png" alt="" v-if="page == 1">
            <img src="../../../static/img/datacenter/ffsj2@2x.png" alt="" v-else>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Market",
        data() {
            return {
                page: 1,
                detailModal:false,
                detail1:false,
                detail2:false
            }
        },
        methods:{
            toDetail(){
                this.detailModal = true
                this.detail1 = true
                this.detail2 = false
            },
            toDetail2(){
                this.detailModal = true
                this.detail1 = false
                this.detail2 = true
            },
            closeDetail(){
                this.detailModal = false
                this.detail1 = false
                this.detail2 = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .ffsj {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            // height: 100%;
        }
        .recommend{
            position: relative;
            .detail {
                position: absolute;
                left: 340px;
                top: 152px;
                width: 50px;
                height: 24px;
                cursor: pointer;
                // border: 1px solid red;
            }
            .detail2{
                position: absolute;
                top: 152px;
                right: 416px;
                width: 50px;
                height: 24px;
                cursor: pointer;
                // border: 1px solid green;
            }
        }

        .hot {
            position: relative;

            .page1 {
                position: absolute;
                right: 120px;
                bottom: 54px;
                width: 28px;
                height: 28px;
                cursor: pointer;
            }

            .page2 {
                position: absolute;
                right: 85px;
                bottom: 54px;
                width: 28px;
                height: 28px;
                cursor: pointer;
            }
        }
    }
</style>
<style lang="scss">
.data-market-modal {
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

            >img {
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
