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
                            <img src="../static/img/header/oval@2x.png" alt="">
                            <p>分析师</p>
                        </div>
                        <div @click="role = 1" :class="role == 1 ? 'active' : ''">
                            <img src="../static/img/header/oval@2x.png" alt="">
                            <p>企业主</p>
                        </div>
                        <div @click="role = 2" :class="role == 2 ? 'active' : ''">
                            <img src="../static/img/header/oval@2x.png" alt="">
                            <p>数据管理员</p>
                        </div>
                    </div>
                    <div :class="[role >= 0 ? 'active' : '','confirm']" @click="confirm">确认</div>
                </div>
            </Modal>
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
                role: -1, //分析师-0，企业主-1，数据管理员-2
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
            confirm() {
                if (this.role < 0) {
                    this.$Message.error('请选择您的身份');
                    return false;
                }
                this.$router.push({name: "dashboard"});
                localStorage.setItem("dashboard", this.role);
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
            width: 900px !important;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid #EAEDF7;

            .ivu-modal-content {
                .ivu-modal-body {
                    padding: 56px;

                    .middle {
                        margin: 0 auto;
                        width: 600px;
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
                                    font-size: 16px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #97A0C3;
                                }

                                &.active {
                                    box-shadow: 8px 8px 20px 0px rgba(99, 110, 149, 0.15), -6px -6px 12px 0px rgba(255, 255, 255, 0.5);
                                    border: 2px solid #2373FF;

                                    > p {
                                        color: #2373FF;
                                    }
                                }
                            }
                        }

                        .confirm {
                            margin: 62px auto 4px;
                            width: 120px;
                            height: 48px;
                            line-height: 48px;
                            background: linear-gradient(139deg, #F0F3F6 0%, #FFFFFF 100%);
                            box-shadow: 4px 4px 16px 0px rgba(55, 84, 170, 0.16), -4px -4px 16px 0px #FFFFFF, 1px 1px 2px 0px #FFFFFF;
                            border-radius: 32px;
                            font-size: 22px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #C6CBDE;
                            text-align: center;
                            cursor: pointer;

                            &.active {
                                background: #1B74FF;
                                border-radius: 24px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #FFFFFF;
                            }
                        }
                    }
                }

            }
        }
    }
</style>

<style scoped lang="scss">
    .login-box {
        padding: 0 24px;

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
    }
</style>