<template>
    <div class="login-box">
        <div class="nav">
            <p class="nav-title">Dashboard</p>
            <div class="btn_container">
                <img :src="downLoad" class="btn_download" />
                <span class="btntxt">一键生成报告</span>
            </div>
        </div>
        <div class="welcome">
            <img class="user" src="../static/img/header/oval@2x.png" alt="" />
            <div class="user_intro_container">
                <p>早安，分析师，欢迎使用 Meta-Mind-Marketing！</p>
                <p>
                    轻松上手分析模型，探索不同业务中的关键行为，洞察指标背后的增长点。
                </p>
            </div>

            <span class="infoIcon">
            <img :src="infoIcon" alt="" srcset="" class="infoIcon-img"/>
            <div class="infoIcon-desc">
                <div class="infoIcon-desc-item">
                    <i class="iconshujuguanli iconfont"></i>
                    <span>迅速掌握各项数据情报</span>
                </div>
                <div class="infoIcon-desc-item">
                    <i class="iconzhinengjuece iconfont"></i>
                    <span>定制化的展示看板</span>
                </div>
                <div class="infoIcon-desc-item">
                    <i class="iconbiaoqiantixi iconfont"></i>
                    <span>灵活可配置的分析纬度及标签</span>
                </div>
                <div class="infoIcon-desc-item">
                    <i class="iconzhengtigailan iconfont"></i>
                    <span>海量新潮分析模板素材</span>
                </div>
            </div>
        </span>
        </div>
        <div class="guide_container">
            <div class="guide_title_container">
                <div class="guide_title_lef">
                    <span style="margin-right: 4px">新手导航</span>
                    <img :src="infoIcon" alt="" srcset="" class="infoIcon" />
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
                        <img src="../assets/img/login/head1.png" alt="">
                        <p>分析师</p>
                    </div>
                    <div @click="role = 1" :class="role == 1 ? 'active' : ''">
                        <img src="../assets/img/login/head2.png" alt="">
                        <p>企业主</p>
                    </div>
                    <div @click="role = 2" :class="role == 2 ? 'active' : ''">
                        <img src="../assets/img/login/head3.png" alt="">
                        <p>数据管理员</p>
                    </div>
                </div>
                <div :class="[role >= 0 ? 'active' : '','confirm']" @click="confirm">登录</div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import vCard0 from "../components/common/card0";

    export default {
        name: "Analyst",
        components: {vCard0},
        data() {
            return {
                showModal: true,
                role: -1, //分析师-0，企业主-1，数据管理员-2
                guideList: [
                    {
                        tilIcon: require("../assets/img/dashboard/newGif.png"),
                        title: "领取新人礼包",
                        iconfont: 'iconlingquxinrenlibao',
                        desc:
                            "根据您行业属性，我们为您精选出一些通用数据包及行业数据包，希望您会喜欢。",
                        statusTxt: "已完成",
                        statusIcon: require("../assets/img/dashboard/checked.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/upData.png"),
                        title: "上传数据",
                        iconfont: 'iconshangchuanshuju',
                        desc: "开启第一步，去上传你的第一个数据文件，列入EXCEL报表文件。",
                        statusTxt: "已完成",
                        statusIcon: require("../assets/img/dashboard/checked.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/SDK.png"),
                        title: "SDK埋点",
                        iconfont: 'iconSDKmaidian',
                        desc:
                            "使用 SDK 实现数据采集功能，添加跟踪代码即可完成 SDK 的集成，为数据采集和分析做好准备。",
                        statusTxt: "已完成",
                        statusIcon: require("../assets/img/dashboard/checked.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/API.png"),
                        title: "API采集",
                        iconfont: 'iconAPIcaiji',
                        desc:
                            "为满足广大客户更灵活管理需求，我们提供了一套可以直接调用的 API 接口。",
                        statusTxt: "去查看",
                        statusIcon: require("../assets/img/dashboard/tor1.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/sjkzl.png"),
                        title: "数据库直连",
                        iconfont: 'iconshujukuzhilian',
                        desc:
                            "采用端口通信的方式进行客户端的数据库连接，安全有保障。连接数据库进行分析，实时性更高。",
                        statusTxt: "去查看",
                        statusIcon: require("../assets/img/dashboard/tor1.png"),
                    },
                    {
                        tilIcon: require("../assets/img/dashboard/help.png"),
                        title: "帮助中心",
                        iconfont: 'iconbianzu2',
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
                            background: #9ECBFF;
                            box-shadow: 4px 6px 12px 1px rgba(35, 115, 255, 0.15);
                            border-radius: 4px;
                            font-size: 16px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            text-align: center;
                            cursor: pointer;

                            &.active {
                                background: #2373FF;
                                box-shadow: 4px 6px 12px 1px rgba(35, 115, 255, 0.3);
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
            padding: 16px 0 16px 24px!important;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .btn_container {
                padding: 14px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                width: 164px;
                height: 40px;
                background: #FFFFFF linear-gradient(148deg, rgba(220, 225, 236, 0.2) 0%, rgba(255, 255, 255, 0.76) 100%);
                box-shadow: 3px 4px 8px 0px rgba(36, 47, 87, 0.1);
                border-radius: 8px;
                border: 1px solid rgba(255, 255, 255, 0.4);
                cursor: pointer;
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
            box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
            border-radius: 12px;
            border: 1px solid #EAEDF7;
            position: relative;
            .infoIcon {
                display: block;
                width: 16px;
                height: 16px;
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
                .infoIcon-img {
                    width: 16px;
                    height: 16px;
                    position: absolute;
                }
            }
            .infoIcon:hover .infoIcon-desc {
                display: block;
            }
            .infoIcon-desc {
                display: none;
                position: absolute;
                top: 0;
                right: 20px;
                width: 198px;
                height: 96px;
                padding: 8px;
                background: rgba(219, 234, 255, 0.94);

                box-shadow: 0 0 3px 0 rgba(219, 234, 255, 0.94);
                border-radius: 5px;
                border: 1px solid #4D94FF;
                .infoIcon-desc-item {
                    font-size: 12px;
                    font-weight: 400;
                    color: #636E95;
                    line-height: 20px;
                    display: flex;
                    .iconfont {
                        margin-right: 8px;
                    }
                }
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
            box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
            border-radius: 12px;
            border: 1px solid #EAEDF7;
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