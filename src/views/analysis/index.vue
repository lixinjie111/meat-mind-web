<template>
    <!-- 经营分析 -->
    <DefaultPage>
        <div class="business-analysis">
            <router-view></router-view>
        </div>
    </DefaultPage>
</template>

<script>
    import DefaultPage from "../../layouts/DefaultPage";
    export default {
        name: "index",
        components: {DefaultPage},
        data() {
            return {};
        },
    };
</script>

<style scoped lang="scss">
    .business-analysis {

    }
</style>