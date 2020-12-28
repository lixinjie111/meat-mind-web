<template>
    <div class="pphx">
        <img src="../../../static/img/protrait/pphx1@2x.png" alt="">
        <iframe class="iframe1" src="/static/html/fj/leid.html" frameborder="0" scrolling="no"></iframe>
        <iframe class="iframe2" src="/static/html/fj2/rdyc.html" frameborder="0" scrolling="no"></iframe>
        <iframe class="iframe3" src="/static/html/fj2/ppjz.html" frameborder="0" scrolling="no"></iframe>
        <div class="content">
            <div class="card">
                <div class="top">
                    <div class="tabs">
                        <div v-for="(item,index) in tabList" :key="index"
                             :class="item.id == tabActive ? 'active tab' : 'tab'" @click="changeTab(item.id)">
                            {{item.value}}
                        </div>
                    </div>
                    <div class="btns">
                        <div class="report-btn">一键生成报告</div>
                        <div class="add-btn">
                            <Icon type="md-add-circle" color="#FFFFFF" size="18"/>
                            添加卡片
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="tab-content" v-if="tabActive==1">
                        <div class="row">
                            <div class="col br half">
                                <p class="title">核心目标受众覆盖度</p>
                                <p class="sub-title">2020/12/21-2020/12/27</p>

                            </div>
                            <div class="col half">
                                <p class="title">核心目标受众匹配度</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">核心受众年龄分布</p>

                            </div>
                            <div class="col half">
                                <p class="title">核心受众性别分布</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">职业结构</p>

                            </div>
                            <div class="col half">
                                <p class="title">教育背景结构</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">购买时段及频次</p>

                            </div>
                            <div class="col half">
                                <p class="title">常用高频场景</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">核心受众消费等级分布</p>

                            </div>
                            <div class="col half">
                                <p class="title">传播内容偏好与参与度</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="title">核心受众偏好内容分布</p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" v-else-if="tabActive==2">
                        <div class="row">
                            <div class="col">
                                <p class="title">舆情总声量分布</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">舆情情感性分布</p>

                            </div>
                            <div class="col half">
                                <p class="title">舆情热词图</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="title">品牌及行业竞品舆情总声量走势</p>
                                <p class="sub-title">2020/12/21-2020/12/27</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="title">渠道舆情声量分布</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">负面声量渠道分布</p>

                            </div>
                            <div class="col half">
                                <p class="title">负面内容排名</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">情感分布</p>

                            </div>
                            <div class="col half">
                                <p class="title">品牌价值潜力分析</p>

                            </div>
                        </div>
                    </div>
                    <div class="tab-content" v-else>
                        <div class="row">
                            <div class="col">
                                <p class="title">2014-2024中国饮料市场规模比例及预测</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="title">2020年饮料市场细分比例</p>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <p class="title">茶饮料行业网络口碑及热度指数</p>
                                <p class="sub-title">2020/12/21-2020/12/27</p>
                                <div class="tip-box">
                                    <div class="tip">网络口碑:客观实时反映网友对事件、人物、品牌的评论态度，数值范围0~100;
                                        50以上时正向言论越多数值越大，言论偏负面时数值常低于45。
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col br half">
                                <p class="title">行业网络热搜词</p>

                            </div>
                            <div class="col half">
                                <p class="title">茶饮料行业负面舆情关键词排名</p>

                            </div>
                        </div>
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

        .iframe1 {
            position: absolute;
            left: 430px;
            top: 185px;
            width: 300px;
            height: 240px;
            background: #FFFFFF;
        }

        .iframe2 {
            position: absolute;
            width: 480px;
            height: 340px;
            top: 430px;
            left: 350px;
        }

        .iframe3 {
            background: #FFFFFF;
            position: absolute;
            top: 480px;
            right: 28px;
            width: 380px;
            height: 260px;
        }

        > img {
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

                        > div {
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

                                > i {
                                    vertical-align: -3px;
                                    margin-right: 9px;
                                }
                            }
                        }
                    }
                }

                .bottom {
                    .tab-content {
                        padding: 0 29px;

                        .row {
                            padding: 25px 0;
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-start;
                            width: 100%;
                            height: 390px;
                            border-bottom: 1px solid #F0F0F0;

                            &:last-child {
                                border-bottom: none;
                            }

                            .col {
                                height: 100%;

                                .title {
                                    font-size: 14px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #333333;
                                }

                                .sub-title {
                                    margin-top: 4px;
                                    font-size: 12px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #666666;
                                }

                                .tip-box {
                                    width: 1104px;

                                    .tip {
                                        margin: 0 auto;
                                        width: 490px;
                                        font-size: 14px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #666666;
                                        line-height: 22px;
                                        text-align: center;
                                    }
                                }

                                &.br {
                                    border-right: 1px solid #F0F0F0;
                                    margin-right: 36px;
                                }

                                &.half {
                                    width: 50%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
