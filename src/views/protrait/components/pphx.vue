<template>
    <div class="pphx">
        <img src="../../../static/img/protrait/pphx1@2x.png" alt="">
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
                        <img src="../../../static/img/protrait/pphx2@2x.png" alt="">
                    </div>
                    <div class="tab-content" v-else-if="tabActive==2">
                        <img src="../../../static/img/protrait/pphx3@2x.png" alt="">
                        <iframe class="iframe iframe1" src="/static/html/fj/zhu.html" frameborder="0" scrolling="no"></iframe>
                        <iframe class="iframe iframe2" src="/static/html/zjj/ppqdkb.html" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div class="tab-content" v-else>
                        <img src="../../../static/img/protrait/pphx4@2x.png" alt="">
                        <iframe class="iframe iframe3" src="/static/html/lxj/bar1.html" frameborder="0" scrolling="no"></iframe>
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
                        value: '目标消费者标签'
                    },
                    {
                        id: 2,
                        value: '媒体标签'
                    },
                    {
                        id: 3,
                        value: '行业标签'
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
    .pphx {
        position: relative;
        width: 100%;
        height: 100%;

        >img {
            width: 100%;
        }

        .content {
            padding: 0 24px 24px;

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
                        display: flex;

                        >img {
                            width: 100%;
                        }

                        .iframe {
                            position: absolute;
                            width: 48%;
                            height: 280px;
                            background: #FFFFFF;
                        }

                        .iframe1 {
                            left: 20px;
                            top: 70px;
                        }

                        .iframe2 {
                            right: 10px;
                            top: 50px;
                        }

                        .iframe3 {
                            left: 10px;
                            top: 45px;
                        }
                    }
                }
            }
        }
    }
</style>
