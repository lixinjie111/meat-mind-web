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
        margin: 0 10px 24px 10px;
        padding: 0 24px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        border: 1px solid #EAEDF7;

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