<template>
    <!-- 分析工具 -->
    <DefaultPage>
        <div class="tool-content">
            <router-view></router-view>
        </div>
    </DefaultPage>
</template>

<script>
    import DefaultPage from "../../layouts/DefaultSubPage";

    export default {
        name: "index",
        components: {DefaultPage},
        data() {
            return {};
        },
    };
</script>

<style scoped lang="scss">
    .tool-content {
    }
</style>