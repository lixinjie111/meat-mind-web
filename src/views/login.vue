<template>
    <DefaultPage>
        <div class="login-box">
            <div class="nav">
                <p class="nav-title">Dashboard</p>
                <div class="btn_container">
                    <img :src="downLoad" class="btn_download"/>
                    <span class="btntxt">一键生成报告</span>
                </div>
            </div>
            <div class="welcome">
                <img class="user" src="../static/img/header/oval@2x.png" alt=""/>
                <div class="user_intro_container">
                    <p>早安，分析师，欢迎使用 Meta-Mind-Marketing！</p>
                    <p>
                        轻松上手分析模型，探索不同业务中的关键行为，洞察指标背后的增长点。
                    </p>
                </div>
                <img :src="infoIcon" alt="" srcset="" class="infoIcon"/>
            </div>
            <div class="guide_container">
                <div class="guide_title_container">
                    <div class="guide_title_lef">
                        <span style="margin-right: 4px">新手导航</span>
                        <img :src="infoIcon" alt="" srcset="" class="infoIcon"/>
                        <Progress :percent="45" status="active"></Progress>
                        <span>(3/6)</span>
                    </div>
                    <div class="guide_title_rig">
                        <div class="guide_title_rig_til">收起</div>
                        <div class="guide_title_rig_icon"></div>
                    </div>
                </div>
                <div class="card_container">
                    <vCard0
                            v-for="(item, index) in guideList"
                            :key="index"
                            :cardData="item"
                    ></vCard0>
                </div>
            </div>
            <Modal title="欢迎使用智慧营销"
                   v-model="showModal"
                   footer-hide
                   :mask-closable="false"
                   class-name="vertical-center-modal">
                <div class="middle">
                    <div class="select">
                        请选择您的身份
                        <Select v-model="model1" @on-change="change">
                            <Option v-for="item in optList" :value="item.value" :key="item.value">{{ item.label }}
                            </Option>
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
    import vCard0 from "../components/common/card0";
    import DefaultPage from "../layouts/DefaultPage";

    export default {
        name: "Analyst",
        components: {DefaultPage, vCard0},
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
                        tilIcon: require("../assets/img/dashboard/newGif.png"),
                        title: "领取新人礼包",
                        desc:
                            "根据您行业属性，我们为您精选出一些通用数据包及行业数据包，希望您会喜欢。",
                        statusTxt: "已完成",
                        statusIcon: require("../assets/img/dashboard/checked.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/upData.png"),
                        title: "上传数据",
                        desc: "开启第一步，去上传你的第一个数据文件，列入EXCEL报表文件。",
                        statusTxt: "已完成",
                        statusIcon: require("../assets/img/dashboard/checked.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/SDK.png"),
                        title: "SDK埋点",
                        desc:
                            "使用 SDK 实现数据采集功能，添加跟踪代码即可完成 SDK 的集成，为数据采集和分析做好准备。",
                        statusTxt: "已完成",
                        statusIcon: require("../assets/img/dashboard/checked.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/API.png"),
                        title: "API采集",
                        desc:
                            "为满足广大客户更灵活管理需求，我们提供了一套可以直接调用的 API 接口。",
                        statusTxt: "去查看",
                        statusIcon: require("../assets/img/dashboard/tor1.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/sjkzl.png"),
                        title: "数据库直连",
                        desc:
                            "采用端口通信的方式进行客户端的数据库连接，安全有保障。连接数据库进行分析，实时性更高。",
                        statusTxt: "去查看",
                        statusIcon: require("../assets/img/dashboard/tor1.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/help.png"),
                        title: "帮助中心",
                        desc: "查看功能说明，了解智慧营销平台。",
                        statusTxt: "去查看",
                        statusIcon: require("../assets/img/dashboard/tor1.png"),
                    },
                ],
                infoIcon: require("../assets/img/dashboard/gdI.png"),
                downLoad: require("../assets/img/dashboard/downLoad.png"),
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
                    localStorage.setItem("dashboard", 1)
                } else if (this.model1 == "数据管理员") {
                    this.$router.push({name: "dashboard"})
                    localStorage.setItem("dashboard", 2)
                } else {
                    this.$router.push({name: "dashboard"})
                    localStorage.setItem("dashboard", 0)
                }
            }
        }
    }
</script>

<style lang="scss">
    .ivu-modal-mask {
        background-color: rgba(0, 0, 0, .6) !important;
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
            width: 100%;
            padding: 16px 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .btn_container {
                padding: 14px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(139deg, #f0f3f6 0%, #ffffff 100%);
                box-shadow: 4px 4px 16px 0px rgba(55, 84, 170, 0.16),
                -4px -4px 16px 0px #ffffff, 1px 1px 2px 0px #ffffff;
                border-radius: 32px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;

                .btn_download {
                    display: block;
                    width: 18px;
                    height: 18px;
                    margin-right: 11px;
                }
            }
        }

        .welcome {
            padding: 24px;
            width: 100%;
            height: 122px;
            background: #ffffff;
            box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
            border-radius: 8px;
            position: relative;

            .infoIcon {
                display: block;
                width: 16px;
                height: 16px;
                position: absolute;
                top: 10px;
                right: 10px;
            }

            .user {
                margin-right: 24px;
                width: 72px;
                height: 72px;
                box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2),
                -6px -6px 12px 0px #ffffff;
                border: 1px solid #ffffff;
                border-radius: 50%;
            }

            .user_intro_container {
                display: inline-block;
                vertical-align: top;

                > p {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242f57;

                    &:first-child {
                        margin-bottom: 12px;
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242f57;
                    }
                }
            }
        }

        .guide_container {
            width: 100%;
            min-height: 404px;
            background: #ffffff;
            box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
            border-radius: 8px;
            padding: 24px;
            padding-bottom: 8px;
            box-sizing: border-box;
            margin-top: 24px;

            .guide_title_container {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 16px;

                .guide_title_lef {
                    width: 50%;
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242f57;

                    .infoIcon {
                        display: block;
                        width: 16px;
                        height: 16px;
                        margin-right: 12px;
                    }

                    ::v-deep .ivu-progress {
                        width: 30%;
                    }

                    ::v-deep .ivu-progress .ivu-progress-text {
                        display: none;
                    }

                    ::v-deep .ivu-progress .ivu-progress-outer {
                        padding-right: 10px;
                    }
                }

                .guide_title_rig {
                    display: flex;
                    align-items: center;

                    .guide_title_rig_til {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636e95;
                        margin-right: 4px;
                    }

                    .guide_title_rig_icon {
                        width: 18px;
                        height: 18px;
                    }
                }
            }

            .card_container {
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
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