<template>
    <div class="main">
        <Side></Side>
        <div class="container">
            <Header target="Dashboard"></Header>
            <div class="content" id="contentD">
                <div class="nav" v-if="title">
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
            width: calc(100% - 240px);

            .content {
                width: 100%;
                height: calc(100vh - 64px);
                overflow-y: scroll;
                .nav {
                    padding: 16px 24px;

                    > p {
                        padding-left: 24px;
                        font-size: 20px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }
                }
            }
        }
    }
</style>
