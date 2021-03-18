<template>
    <div class="business-box">
        <div class="header-nav">
            <p>Dashboard</p>
        </div>
        <Tab :tab-list="['营销洞察','经营诊断']" @change="changeTab"></Tab>
        <div v-if="tabActive == 1">
            <BusinessMarket></BusinessMarket>
            <div class="report-btn">
                <i class="iconfont iconxiazai"/>
                <span class="btn-txt">一键生成洞察报告</span>
            </div>
        </div>
        <div v-else>
            <BusinessManage></BusinessManage>
            <div class="report-btn">
                <i class="iconfont iconxiazai"/>
                <span class="btn-txt">一键生成诊断报告</span>
            </div>
        </div>
    </div>
</template>

<script>
    import BusinessManage from "./BusinessManage";
    import BusinessMarket from "./BusinessMarket";
    import Tab from "../../components/Tab"

    export default {
        name: "BusinessOwner",
        components: {BusinessMarket, BusinessManage, Tab},
        data() {
            return {
                tabActive: 1
            }
        },
        methods: {
            changeTab(index) {
                this.tabActive = index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .business-box {
        position: relative;
        padding: 0 24px 24px 24px;

        ::v-deep .ivu-tabs-bar {
            margin-top: 14px;
        }

        .report-btn {
            position: absolute;
            right: 24px;
            top: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 164px;
            height: 40px;
            background: #2373FF;
            box-shadow: 3px 4px 8px 0px rgba(36, 47, 87, 0.1);
            border-radius: 4px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #FFFFFF;

            > i {
                margin-right: 8px;
                color: #ffffff;
            }
        }
    }
</style>