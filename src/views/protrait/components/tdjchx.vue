<template>
    <div class="tdjchx">
        <img src="../../../static/img/protrait/tdjchx1@2x.png" alt="">
        <div class="content">
            <div class="card">
                <div class="top">
                    <div class="tabs">
                        <div v-for="(item,index) in tabList" :key="index" :class="item.id == tabActive ? 'active tab' : 'tab'" @click="changeTab(item.id)">{{item.value}}</div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="tab-content" v-if="tabActive==1">
                        <img src="../../../static/img/protrait/tdjchx2@2x.png" alt="">
                        <iframe class="iframe iframe1" src="/static/html/lxj/pie1-1.html" frameborder="0" scrolling="no"></iframe>
                        <iframe class="iframe iframe2" src="/static/html/lxj/pie1-2.html" frameborder="0" scrolling="no"></iframe>
                        <iframe class="iframe iframe3" src="/static/html/lxj/pie1-3.html" frameborder="0" scrolling="no"></iframe>
                        <iframe class="iframe iframe4" src="/static/html/lxj/pie1-4.html" frameborder="0" scrolling="no"></iframe>
                    </div>
                    <div class="tab-content" v-else>
                        <img src="../../../static/img/protrait/tdjchx3@2x.png" alt="">
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
                        value: '通道分类详情'
                    },
                    {
                        id: 2,
                        value: '通道流量详情'
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
    .tdjchx {
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
                }

                .bottom {
                    .tab-content {
                        position: relative;

                        >img {
                            width: 100%;
                        }

                        .iframe {
                            position: absolute;
                            width: 330px;
                            height: 280px;
                            background: #FFFFFF;
                        }

                        .iframe1 {
                            left: 40px;
                            top: 160px;
                        }

                        .iframe2 {
                            width: 300px;
                            height: 325px;
                            left: 430px;
                            top: 144px;
                        }

                        .iframe3 {
                            width: 300px;
                            height: 325px;
                            right: 60px;
                            top: 144px;
                        }

                        .iframe4 {
                            width: 330px;
                            height: 325px;
                            left: 40px;
                            top: 520px;
                        }
                    }
                }
            }
        }
    }
</style>
