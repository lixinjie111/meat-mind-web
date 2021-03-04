<template>
    <div class="business-box">
        <div class="business-box-tab">
            <div :class="['tab-item', tabActive == 1 ? 'active' : '']" @click="tabActive = 1">
                营销洞察
            </div>
            <div :class="['tab-item', tabActive == 2 ? 'active' : '']" @click="tabActive = 2">
                经营诊断
            </div>
        </div>
        <BusinessMarket v-if="tabActive == 1"></BusinessMarket>
        <BusinessManage v-else></BusinessManage>
        <div class="report-btn" v-if="tabActive == 1">
            <img src="../../assets/img/dashboard/downLoad.png" class="btn-download"/>
            <span class="btn-txt">一键生成洞察报告</span>
        </div>
        <div class="report-btn" v-else>
            <img src="../../assets/img/dashboard/downLoad.png" class="btn-download"/>
            <span class="btn-txt">一键生成诊断报告</span>
        </div>
    </div>
</template>

<script>
    import BusinessManage from "./BusinessManage";
    import BusinessMarket from "./BusinessMarket";

    export default {
        name: "BusinessOwner",
        components: {BusinessMarket, BusinessManage},
        data() {
            return {
                tabActive: 1
            }
        },
    }
</script>

<style scoped lang="scss">
    .business-box {
        position: relative;

        .business-box-tab {
            width: 100%;
            height: 71px;
            background: url("../../assets/img/dashboard/manage/tab2.png") repeat-x left bottom / 100% 16px;

            .tab-item {
                display: inline-block;
                vertical-align: top;
                width: 220px;
                height: 71px;
                line-height: 78px;
                text-align: center;
                font-size: 20px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                cursor: pointer;

                &.active {
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #2373FF;
                    background: url("../../assets/img/dashboard/manage/tab1.png") no-repeat -1px center / 100% 100%;
                }
            }
        }

        .report-btn {
            position: absolute;
            right: 24px;
            top: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 169px;
            height: 40px;
            background: linear-gradient(139deg, #F0F3F6 0%, #FFFFFF 100%);
            box-shadow: 4px 4px 16px 0px rgba(55, 84, 170, 0.16), -4px -4px 16px 0px #FFFFFF, 1px 1px 0px 0px #FFFFFF;
            border-radius: 8px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;

            .btn-download {
                display: block;
                width: 14px;
                height: 14px;
                margin-right: 3px;
            }
        }
    }
</style>