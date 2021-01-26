<template>
    <div class="main">
        <Side></Side>
        <div class="container">
            <Header :target="'Dashboard'"></Header>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Side from "../components/Side"
    import Header from "../components/DefaultHeader"

    export default {
        components: {Side, Header}
    }
</script>
<style scoped lang="scss">
    .main {
        display: flex;

        .container {
            display: flex;
            flex-direction: column;
            width: calc(100vw - 240px);
        }
    }
</style>
