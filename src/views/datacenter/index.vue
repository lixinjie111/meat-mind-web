<template>
    <!-- 数据管理 -->
    <DefaultPage>
        <div class="data-content">
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
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .data-content {

    }
</style>