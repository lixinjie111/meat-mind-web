<template>
    <div class="dashboard-container">
        <!-- 企业主 -->
        <template v-if="flag == 1">
            <BusinessOwner></BusinessOwner>
        </template>
        <!-- 数据管理员 -->
        <template v-else-if="flag == 2">
            <DataManager></DataManager>
        </template>
        <!-- 分析师 -->
        <template v-else>
            <AnalystManager></AnalystManager>
        </template>
    </div>
</template>

<script>
    import BusinessOwner from "./components/BusinessOwner";
    import AnalystManager from "./components/AnalystManager";
    import DataManager from "./components/DataManager";

    export default {
        name: "index",
        components: {DataManager, AnalystManager, BusinessOwner},
        data() {
            return {
                flag: this.$store.state.role
            }
        },
        watch: {
            '$store.state.role'(val) {
                this.flag = val
            }
        }
    }
</script>

<style scoped lang="scss">
    .dashboard-container {
    }
</style>
