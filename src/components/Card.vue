<template>
    <div class="card-container">
        <div class="title flex">
            <div class="left">
                <p>{{title}}</p>
                <slot name="left"></slot>
            </div>
            <slot name="right"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .card-container {
        margin-bottom: 24px;
        padding: 0 24px;
        background: #FFFFFF;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;

        .title {
            height: 64px;

            .left {
                > p {
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                }
            }
        }
    }
</style>