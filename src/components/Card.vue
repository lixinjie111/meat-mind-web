<template>
    <div class="card-container">
        <div class="title flex">
            <div class="left">
                <span>{{title}}</span>
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
        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
        border-radius: 8px;

        .title {
            height: 64px;

            .left {
                > span {
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                }
            }
        }
    }
</style>