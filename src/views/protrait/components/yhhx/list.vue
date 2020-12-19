<template>
    <div class="yhhx">
        <div class="back" @click="back"></div>
        <Select class="group-select" v-model="groupValue">
            <Option value="1">无</Option>
            <Option value="2">用户组2</Option>
        </Select>
        <template v-if="groupValue == 1">
            <img src="../../../../static/img/protrait/yhhx1@2x.png" alt="">
            <div class="content">
                <div class="card">
                    <div class="top">
                        <div class="tabs">
                            <div v-for="(item,index) in tabList" :key="index" :class="item.id == tabActive ? 'active tab' : 'tab'" @click="changeTab(item.id)">{{item.value}}</div>
                        </div>
                        <!--                    <div class="btns">-->
                        <!--                        <div class="report-btn">一键生成报告</div>-->
                        <!--                        <div class="add-btn"><Icon type="md-add-circle" color="#FFFFFF" size="18" style="vertical-align: -3px;margin-right: 9px;"/>添加卡片</div>-->
                        <!--                    </div>-->
                    </div>
                    <div class="bottom">
                        <div class="tab-content" v-if="tabActive==1">
                            <img src="../../../../static/img/protrait/yhhx2@2x.png" alt="">
                            <iframe class="iframe iframe1" src="/static/html/lxj/pie1-2.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe2" src="/static/html/lxj/pie1-4.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe3" src="/static/html/lxj/pie1-3.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe4" src="/static/html/lxj/pie1-1.html" frameborder="0" scrolling="no"></iframe>
                        </div>
                        <div class="tab-content" v-else-if="tabActive==2">
                            <img src="../../../../static/img/protrait/yhhx3@2x.png" alt="">
                            <video class="player" width="100%" height="100%" autoplay loop muted src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"></video>
                        </div>
                        <div class="tab-content" v-else>
                            <img src="../../../../static/img/protrait/yhhx4@2x.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <img src="../../../../static/img/protrait/yhhx7@2x.png" alt="">
            <div class="content">
                <div class="card">
                    <div class="top">
                        <div class="tabs">
                            <div v-for="(item,index) in tabList" :key="index" :class="item.id == tabActive ? 'active tab' : 'tab'" @click="changeTab(item.id)">{{item.value}}</div>
                        </div>
                        <!--                    <div class="btns">-->
                        <!--                        <div class="report-btn">一键生成报告</div>-->
                        <!--                        <div class="add-btn"><Icon type="md-add-circle" color="#FFFFFF" size="18" style="vertical-align: -3px;margin-right: 9px;"/>添加卡片</div>-->
                        <!--                    </div>-->
                    </div>
                    <div class="bottom">
                        <div class="tab-content" v-if="tabActive==1">
                            <img src="../../../../static/img/protrait/yhhx6@2x.png" alt="">
                            <iframe class="iframe iframe5" src="/static/html/lxj/pie1-2.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe6" src="/static/html/lxj/pie1-4.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe7" src="/static/html/lxj/pie1-3.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe8" src="/static/html/lxj/pie1-1.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe9" src="/static/html/lxj/pie1-2-1.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe10" src="/static/html/lxj/pie1-4-1.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe11" src="/static/html/lxj/pie1-3-1.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe iframe12" src="/static/html/lxj/pie1-1-1.html" frameborder="0" scrolling="no"></iframe>
                        </div>
                        <div class="tab-content" v-else-if="tabActive==2">
                            <img src="../../../../static/img/protrait/yhhx3@2x.png" alt="">
                            <video class="player" width="100%" height="100%" autoplay loop muted src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"></video>
                        </div>
                        <div class="tab-content" v-else>
                            <img src="../../../../static/img/protrait/yhhx4@2x.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </template>
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
                groupValue: '1'
            }
        },
        methods: {
            back() {
                this.$router.push({name: "portrait-system-yhhx"})
            },
            changeTab(active) {
                this.tabActive = active;
            }
        }
    }
</script>

<style scoped lang="scss">
    .yhhx {
        position: relative;
        width: 100%;
        height: 100%;

        .back {
            position: absolute;
            left: 24px;
            top: 24px;
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

        .group-select {
            position: absolute;
            right: 40px;
            top: 84px;
            width: 210px;
        }

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
                            width: 49%;
                            height: 350px;
                            background: #FFFFFF;
                        }

                        .iframe1 {
                            left: 0;
                            top: 42px;
                        }

                        .iframe2 {
                            width: 40%;
                            right: 60px;
                            top: 42px;
                        }

                        .iframe3 {
                            height: 336px;
                            left: 0;
                            top: 452px;
                        }

                        .iframe4 {
                            height: 330px;
                            right: 0;
                            top: 452px;
                        }

                        .iframe5 {
                            left: 0;
                            top: 42px;
                        }

                        .iframe6 {
                            left: 0;
                            top: 444px;
                            height: 344px;
                        }

                        .iframe7 {
                            left: 0;
                            top: 842px;
                            height: 340px;
                        }

                        .iframe8 {
                            left: 0;
                            // top: 1240px;
                            bottom: 806px;
                            height: 340px;
                        }

                        .iframe9 {
                            right: 0;
                            top: 42px;
                            background: #FAFAFA;
                        }

                        .iframe10 {
                            right: 0;
                            top: 442px;
                            background: #FAFAFA;
                            height: 344px;
                        }

                        .iframe11 {
                            right: 0;
                            top: 842px;
                            height: 340px;
                            background: #FAFAFA;
                        }

                        .iframe12 {
                            right: 0;
                            // top: 1240px;
                            bottom: 806px;
                            height: 340px;
                            background: #FAFAFA;
                        }

                        .player {
                            position: absolute;
                            width: 100%;
                            height: 466px;
                            top: -14px;
                            left: 0;
                        }
                    }
                }
            }
        }
    }
</style>
