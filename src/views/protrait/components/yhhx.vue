<template>
    <div class="yhhx">
        <img src="../../../static/img/protrait/yhhx1@2x.png" alt="">
        <div class="content">
            <div class="card">
                <div class="top">
                    <div class="tabs">
                        <div v-for="(item,index) in tabList" :key="index" :class="item.id == tabActive ? 'active tab' : 'tab'" @click="changeTab(item.id)">{{item.value}}</div>
                    </div>
                    <div class="btns">
                        <div class="report-btn">一键生成报告</div>
                        <div class="add-btn"><Icon type="md-add-circle" color="#FFFFFF" size="18" style="vertical-align: -3px;margin-right: 9px;"/>添加卡片</div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="tab-content" v-if="tabActive==1">
                        <img src="../../../static/img/protrait/yhhx2@2x.png" alt="">
                        <iframe class="iframe iframe1" src="/static/html/lxj/pie1-2.html" frameborder="0" scrolling="no"></iframe>
                        <iframe class="iframe iframe2" src="/static/html/lxj/pie1-4.html" frameborder="0" scrolling="no"></iframe>
                        <iframe class="iframe iframe3" src="/static/html/lxj/pie1-3.html" frameborder="0" scrolling="no"></iframe>
                        <iframe class="iframe iframe4" src="/static/html/lxj/pie1-1.html" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div class="tab-content" v-else-if="tabActive==2">
                        <img src="../../../static/img/protrait/yhhx3@2x.png" alt="">
                        <video class="player" width="100%" height="100%" autoplay loop muted src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"></video>
                    </div>
                    <div class="tab-content" v-else>
                        <img src="../../../static/img/protrait/yhhx4@2x.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabActive: 1,
                tabList: [
                    {
                        id: 1,
                        value: '用户基础画像'
                    },
                    {
                        id: 2,
                        value: '用户行为分析'
                    },
                    {
                        id: 3,
                        value: '心智分析'
                    }
                ],
            }
        },
        methods: {
            changeTab(active) {
                this.tabActive = active;
            }
        }
    }
</script>

<style scoped lang="scss">
    .yhhx {
        width: 100%;
        height: 100%;

        >img {
            width: 100%;
        }

        .content {
            padding: 16px 24px 24px;

            .card {
                width: 100%;
                background: #FFFFFF;
                border-radius: 4px;

                .top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #F0F0F0;

                    .tabs {
                        display: inline-block;
                        vertical-align: top;

                        .tab {
                            display: inline-block;
                            padding: 16px 0;
                            margin: 0 17px;
                            font-size: 16px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #666666;
                            cursor: pointer;

                            &.active {
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #2965FF;
                                border-bottom: 2px solid #2965FF;
                            }
                        }
                    }

                    .btns {
                        padding-right: 24px;

                        > div{
                            display: inline-block;
                            vertical-align: top;
                            width: 114px;
                            height: 32px;
                            line-height: 32px;
                            border-radius: 2px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            text-align: center;

                            &.report-btn {
                                background: #FFFFFF;
                                border: 1px solid #D9D9D9;
                                color: #666666;
                            }

                            &.add-btn {
                                margin-left: 24px;
                                background: #2965FF;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #FFFFFF;
                            }
                        }
                    }
                }

                .bottom {

                    .tab-content {
                        position: relative;

                        >img {
                            width: 100%;
                        }

                        .iframe {
                            position: absolute;
                            width: 49%;
                            height: 350px;
                            background: #FFFFFF;
                        }

                        .iframe1 {
                            left: 0;
                            top: 46px;
                        }

                        .iframe2 {
                            width: 40%;
                            right: 60px;
                            top: 46px;
                        }

                        .iframe3 {
                            height: 336px;
                            left: 0;
                            top: 448px;
                        }

                        .iframe4 {
                            height: 330px;
                            right: 4px;
                            top: 448px;
                        }

                        .player {
                            position: absolute;
                            // width: 1150px;
                            width: 100%;
                            height: 460px;
                            top: -16px;
                            left: 0;
                        }
                    }
                }
            }
        }
    }
</style>
