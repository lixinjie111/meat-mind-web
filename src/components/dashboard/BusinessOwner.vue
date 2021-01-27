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
        padding-top: 20px;
    }
</style>