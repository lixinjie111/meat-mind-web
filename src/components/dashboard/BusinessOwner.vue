<template>
    <div class="business-owner">
        <Tabs :animated="false">
            <TabPane label="营销洞察">
                <BusinessMarket></BusinessMarket>
            </TabPane>
            <TabPane label="经营诊断">
                <BusinessManage></BusinessManage>
            </TabPane>
        </Tabs>
        <div class="report-btn">
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
            return {}
        },
    }
</script>

<style scoped lang="scss">
    .business-owner {
        position: relative;
        padding-top: 20px;

        .report-btn {
            position: absolute;
            right: 0;
            top: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 169px;
            height: 40px;
            background: linear-gradient(139deg, #F0F3F6 0%, #FFFFFF 100%);
            box-shadow: 4px 4px 16px 0px rgba(55, 84, 170, 0.16), -4px -4px 16px 0px #FFFFFF, 1px 1px 0px 0px #FFFFFF;
            border-radius: 24px;
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