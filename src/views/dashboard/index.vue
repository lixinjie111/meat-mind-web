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
            <Analyst></Analyst>
        </template>
    </div>
</template>

<script>
    import BusinessOwner from "../../components/dashboard/BusinessOwner";
    import Analyst from "../../components/dashboard/Analyst";
    import DataManager from "../../components/dashboard/DataManager";

    export default {
        name: "index",
        components: {DataManager, Analyst, BusinessOwner},
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
