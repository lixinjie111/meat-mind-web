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
                    <div v-if="tabActive==1">
                        <img src="../../../static/img/protrait/tdjchx2@2x.png" alt="">
                    </div>
                    <div v-else>
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
                    >div {
                        >img {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
</style>
