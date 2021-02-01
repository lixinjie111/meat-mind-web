<template>
    <div class="index-container">
        <img class="bg" src="../../src/assets/img/login/bg.png"/>
        <Modal title="欢迎使用智慧营销"
                v-model="showModal"
                footer-hide
                :mask-closable="false"
                class-name="vertical-center-modal">
            <div class="middle">
                <div class="select">
                    请选择您的身份
                    <Select v-model="model1" @on-change="change">
                        <Option v-for="item in optList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div>*根据您的身份，我们为您准备了不同的展示重点</div>
            </div>
            <div class="footer">
                <div class="confirm" @click="confirm">确认</div>
            </div>
        </Modal>
        <div class="seconde-step" v-show="showImg">
            <img src="../static/img/login/welcome@2x.png" alt="" @click="jump">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                showModal: true,
                model1: "分析师",
                optList: [
                    {
                        value: '分析师',
                        label: '分析师'
                    },
                    {
                        value: '企业主',
                        label: '企业主'
                    },
                    {
                        value: '数据管理员',
                        label: '数据管理员'
                    }
                ],
                showImg: false
            }
        },
        methods: {
            change(val) {
                this.model1 = val
            },
            confirm() {
                this.showModal = false
                this.showImg = true
            },
            jump() {
                this.showImg = false
                if (this.model1 == "企业主") {
                    this.$router.push({name: "dashboard"})
                    localStorage.setItem("dashboard",1)
                }else if (this.model1 == "数据管理员") {
                    this.$router.push({name: "dashboard"})
                    localStorage.setItem("dashboard",2)
                }else {
                    this.$router.push({name: "dashboard"})
                    localStorage.setItem("dashboard",0)
                }

            }
        }
    }
</script>

<style lang="scss">
    .ivu-modal-mask {
        background-color: rgba(0,0,0,.6)!important;
    }

    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 684px !important;
            min-height: 353px;
            background: #ffffff;
            border-radius: 4px;

            .ivu-modal-content {
                min-height: 353px;

                .ivu-modal-close {
                    top: 16px;
                    right: 16px;
                }

                .ivu-modal-header {
                    padding: 14px 32px;
                    border-bottom: 1px solid #f2f3f4;

                    .ivu-modal-header-inner {
                        height: 29px;
                        font-size: 21px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #25272b;
                        line-height: 29px;
                        //   text-align: center;
                    }
                }

                .ivu-modal-body {
                    padding: 0 32px 64px;

                    .middle {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        height: 200px;

                        .select {
                            margin: 20px 0 40px;

                            .ivu-select {
                               width: 200px;
                            }
                        }
                    }

                    .footer {
                        width: 100px;
                        margin: 0 auto;
                        text-align: center;

                        > div {
                            height: 32px;
                            padding: 6px 26px;
                            font-size: 14px;
                            border-radius: 4px;
                            cursor: pointer;
                            vertical-align: top;
                        }

                        .confirm {
                            color: #ffffff;
                            background: #278fe0;
                        }
                    }
                }

            }
        }
    }
</style>
<style scoped lang="scss">
    .index-container {
        .bg{
            width: 100%;
        }

        .seconde-step {
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            // background: #f5f5f5;
            background: rgba(0, 0, 0, 0.6);
            z-index: 1000;

            img {
                width: 862px;
                height: 554px;
                cursor: pointer;
            }
        }
    }
</style>
