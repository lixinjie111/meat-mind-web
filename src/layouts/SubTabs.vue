<template>
    <div class="main">
        <Side></Side>
        <div class="container">
            <Header :target="'Dashboard'"></Header>
            <div class="content">
                <div class="nav">
                    <p class="nav-title">{{title}}</p>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import Side from "../components/Side"
    import Header from "../components/DefaultHeader"

    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        components: {Side, Header}
    }
</script>
<style scoped lang="scss">
    .main {
        display: flex;

        .container {
            display: flex;
            flex-direction: column;
            width: 100%;

            .content {
                padding: 0 24px 24px 24px;

                .nav {
                    padding: 16px 24px;
                }
            }
        }
    }
</style>
