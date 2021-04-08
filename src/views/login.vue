<template>
    <div class="login-box">
        <div class="header-nav">
            <p>Dashboard</p>
        </div>
        <div class="wel_guid_container">
            <div class="welcome">
                <img class="user" src="../assets/img/login/head1.png" alt=""/>
                <div class="user_intro_container">
                    <div class="til_img_container">
                        <span>早安，分析师，欢迎使用 Meta-Mind-Marketing！</span>
                        <Poptip popper-class="saas-poptip small" trigger="hover" placement="right">
                            <i class="iconfont iconguanyu tip-icon"></i>
                            <div slot="content">
                                <p><i class="iconfont iconwodeshuju"></i>迅速掌握各项数据情报</p>
                                <p><i class="iconfont iconkanban"></i>定制化的展示看板</p>
                                <p><i class="iconfont iconfenxiline"></i>灵活可配置的分析纬度及标签</p>
                                <p><i class="iconfont iconfenbufenxi"></i>海量新潮分析模板素材</p>
                            </div>
                        </Poptip>
                    </div>
                    <p>
                        轻松上手分析模型，探索不同业务中的关键行为，洞察指标背后的增长点。
                    </p>
                </div>
                <span class="infoIcon">
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
                        <span style="margin-right: 18px">新手导航</span>
                        <Progress :percent="45" status="active"></Progress>
                        <span>(3/6)</span>
                    </div>
                    <div class="guide_title_rig" @click="exppandFn">
                        <div class="guide_title_rig_til">{{szTxt}}</div>
                        <div class="guide_title_rig_icon">
                            <i class="iconfont iconup" v-if="ifShowCard"></i>
                            <i class="iconfont icondown" v-else></i>
                        </div>
                    </div>
                </div>
                <div class="card_container" v-show="ifShowCard">
                    <vCard0
                            v-for="(item, index) in guideList"
                            :key="index"
                            :cardData="item"
                    ></vCard0>
                </div>
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
                <button class="btn-primary confirm" :disabled="role < 0" @click="confirm">登录</button>
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
                szTxt: '收起详情',
                ifShowCard: true,
                guideList: [
                    {
                        tilIcon: require("../assets/img/dashboard/newGif.png"),
                        title: "领取新人礼包",
                        iconfont: "iconxinrenlibao",
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
                        iconfont: 'iconbangzhu',
                        desc: "查看功能说明，了解智慧营销平台。",
                        statusTxt: "去查看",
                        statusIcon: require("../assets/img/dashboard/tor1.png"),
                    },
                ]
            }
        },
        methods: {
            exppandFn() {
                this.ifShowCard = !this.ifShowCard;
                if (this.ifShowCard) {
                    this.szTxt = '收起详情';
                } else {
                    this.szTxt = '展开详情';
                }
            },
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

        .wel_guid_container {
            width: 100%;
            background: #FFFFFF;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;

            .welcome {
                padding: 24px;
                width: 100%;
                height: 122px;
                position: relative;

                .infoIcon {
                    display: block;
                    width: 16px;
                    height: 16px;
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    cursor: pointer;
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
                    box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2), -6px -6px 12px 0px #ffffff;
                    border: 1px solid #ffffff;
                    border-radius: 50%;
                }

                .user_intro_container {
                    display: inline-block;
                    vertical-align: top;

                    > div {
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    > p {
                        margin-top: 12px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #7C88B1;
                    }

                    .til_img_container {
                        display: flex;
                        align-items: baseline;

                        :nth-child(1) {
                            margin-right: 4px;
                        }

                        .infoIcon-img {
                            width: 16px;
                            height: 16px;
                        }
                    }
                }
            }

            .guide_container {
                width: 100%;
                padding: 24px;
                padding-bottom: 8px;
                box-sizing: border-box;

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

                        &:hover {
                            cursor: pointer;
                        }

                        .guide_title_rig_til {
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636e95;
                            margin-right: 4px;
                        }

                        .guide_title_rig_icon {
                            width: 12px;
                            height: 6px;

                            .iconshouqi {
                                width: 100%;
                                height: 100%;
                            }
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
    }
</style>