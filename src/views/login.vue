<template>
    <DefaultPage>
        <div class="login-box">
            <div class="nav">
                <p class="nav-title">Dashboard</p>
            </div>
            <div class="welcome">
                <img class="user" src="../static/img/header/oval@2x.png" alt="">
                <div>
                    <p>早安，分析师，欢迎使用 Meta-Mind-Marketing！</p>
                    <p>轻松上手分析模型，探索不同业务中的关键行为，洞察指标背后的增长点。</p>
                </div>
            </div>
            <Card title="新手导航" class="guide">
                <div class="guide-item" v-for="(item,index) in guideList" :key="index">
                    <div class="guide-item-top">
                        <p>{{item.title}}</p>
                    </div>
                    <div class="guide-item-bottom">
                        <p>{{item.desc}}</p>
                    </div>
                </div>
            </Card>
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
            <div class="second-step" v-show="showImg">
                <img src="../static/img/login/welcome@2x.png" alt="" @click="jump">
            </div>
        </div>
    </DefaultPage>
</template>

<script>
    import Card from "../components/Card";
    import DefaultPage from "../layouts/DefaultPage";

    export default {
        name: "Analyst",
        components: {DefaultPage, Card},
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
                showImg: false,
                guideList: [
                    {
                        title: "领取新人礼包",
                        desc: "根据您行业属性，我们为您精选出一些通用数据包及行业数据包，希望您会喜欢。"
                    },
                    {
                        title: "上传数据",
                        desc: "开启第一步，去上传你的第一个数据文件，列入EXCEL报表文件。"
                    },
                    {
                        title: "SDK埋点",
                        desc: "使用 SDK 实现数据采集功能，添加跟踪代码即可完成 SDK 的集成，为数据采集和分析做好准备。"
                    },
                    {
                        title: "API采集",
                        desc: "为满足广大客户更灵活管理需求，我们提供了一套可以直接调用的 API 接口。"
                    },
                    {
                        title: "数据库直连",
                        desc: "采用端口通信的方式进行客户端的数据库连接，安全有保障。连接数据库进行分析，实时性更高。"
                    },
                    {
                        title: "帮助中心",
                        desc: "查看功能说明，了解智慧营销平台。"
                    }
                ]
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
    .login-box {
        .nav {
            padding: 16px 24px;
        }

        .welcome {
            padding: 24px;
            width: 100%;
            height: 122px;
            background: #FFFFFF;
            box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
            border-radius: 8px;

            > img {
                margin-right: 24px;
                width: 72px;
                height: 72px;
                box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2), -6px -6px 12px 0px #FFFFFF;
                border: 1px solid #FFFFFF;
                border-radius: 50%;
            }

            > div {
                display: inline-block;
                vertical-align: top;

                > p {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;

                    &:first-child {
                        margin-bottom: 12px;
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }
                }
            }
        }

        .guide {
            margin-top: 24px;

            .guide-item {
                margin-bottom: 16px;
                padding: 16px;
                display: inline-block;
                vertical-align: top;
                margin-right: 16px;
                width: calc(33.3% - 12px);
                height: 150px;
                background: #FFFFFF;
                border-radius: 8px;
                border: 1px solid #EAEDF7;

                &:nth-child(3n+1) {
                    margin-right: 0;
                }

                .guide-item-top {
                    > p {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                    }
                }

                .guide-item-bottom {
                    margin-top: 12px;

                    > p {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #7C88B1;
                    }
                }

                &:hover {
                    box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16);
                }
            }
        }

        .second-step {
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