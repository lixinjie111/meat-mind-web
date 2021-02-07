]<template>
    <div class="main">
        <Side class="main-left"></Side>
        <div class="container">
            <Header target="Dashboard" class="main-top"></Header>
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
        .main-left {
            position: fixed;
            left: 0;
            top: 0;
        }

        .container {
            .main-top {
                position: fixed;
                left: 240px;
                top: 0;
                z-index: 1000;
                width: calc(100% - 240px);
            }

            .content {
                position: absolute;
                left: 240px;
                top: 64px;
                width: calc(100% - 240px);
                height: calc(100vh - 64px);
                /*overflow-y: scroll;*/

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
