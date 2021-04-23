<template>
    <div class="login-box">
        <AnalystManager></AnalystManager>
        <Modal v-model="showModal"
               footer-hide
               :mask-closable="false"
               :closable="false"
               class-name="login-modal">
            <div class="middle">
                <div class="title">欢迎使用智慧营销</div>
                <div class="sub-title">请选择您的身份</div>
                <div class="select">
                    <div @click="role = 0" :class="role == 0 ? 'active' : ''">
                        <img src="../assets/img/login/head1.png" alt="">
                        <p>分析师</p>
                    </div>
<!--                    <div @click="role = 1" :class="role == 1 ? 'active' : ''">-->
<!--                        <img src="../assets/img/login/head2.png" alt="">-->
<!--                        <p>企业主</p>-->
<!--                    </div>-->
                    <div @click="role = 2" :class="role == 2 ? 'active' : ''">
                        <img src="../assets/img/login/head3.png" alt="">
                        <p>数据管理员</p>
                    </div>
                </div>
                <button class="btn-primary confirm" :disabled="role < 0" @click="confirm">登录</button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import AnalystManager from '@/views/dashboard/components/AnalystManager';

    export default {
        name: "Analyst",
        components: {AnalystManager},
        data() {
            return {
                showModal: true,
                role: -1, //分析师-0，企业主-1，数据管理员-2
            }
        },
        methods: {
            confirm() {
                if (this.role < 0) {
                    this.$Message.error('请选择您的身份');
                    return false;
                }
                this.$store.commit('setRole', this.role);
                this.$router.push({name: "dashboard"});
            }
        }
    }
</script>

<style lang="scss">
    .ivu-modal-mask {
        background-color: rgba(0, 0, 0, .6) !important;
    }

    .login-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 700px !important;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid #EAEDF7;

            .ivu-modal-content {
                .ivu-modal-body {
                    padding: 56px;

                    .middle {
                        margin: 0 auto;
                        width: 400px;
                        text-align: center;

                        .title {
                            font-size: 24px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                        }

                        .sub-title {
                            margin: 60px 0 30px;
                            font-size: 16px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #97A0C3;
                        }

                        .select {
                            display: flex;
                            justify-content: space-between;
                            align-content: center;
                            height: 184px;

                            > div {
                                width: 160px;
                                height: 160px;
                                box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2), -6px -6px 12px 0px #FFFFFF;
                                border: 2px solid #FFFFFF;
                                border-radius: 50%;
                                cursor: pointer;

                                > img {
                                    width: 156px;
                                    height: 156px;
                                    border-radius: 50%;
                                }

                                > p {
                                    padding-top: 16px;
                                    font-size: 16px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #97A0C3;
                                }

                                &.active {
                                    box-shadow: 8px 8px 20px 0px rgba(99, 110, 149, 0.15) inset, -6px -6px 12px 0px rgba(255, 255, 255, 0.5) inset;
                                    border: 2px solid #2373FF;

                                    > p {
                                        color: #2373FF;
                                    }
                                }
                            }
                        }

                        .confirm {
                            margin: 78px auto 4px;
                            width: 104px;
                            height: 40px;
                            line-height: 40px;
                        }
                    }
                }

            }
        }
    }
</style>