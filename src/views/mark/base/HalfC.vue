<template>
    <div class="row">
        <div class="col br half">
            <p class="title">{{title}}</p>
            <p class="sub-title">{{ subDate }}</p>
            <div class="r-half-echarts">
                <slot name="left"></slot>
            </div>
        </div>
        <div class="col half bg">
            <p class="title">{{title}}</p>
            <p class="sub-title">{{ subDate }}</p>
            <div class="r-half-echarts">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Half",
        props: {
            subDate: {
                type: String,
                default: "",
            },
            title: {
                type: String
            }
        },
    };
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        height: 377px;
        margin-bottom: 24px;

        &:last-child {
            margin-bottom: 0;
        }

        .col {
            position: relative;
            height: 100%;
            padding: 16px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #EAEDF7;

            &.half {
                width: 50%;
            }

            .title {
                height: 24px;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                line-height: 24px;
            }

            .sub-title {
                height: 18px;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636e95;
                line-height: 18px;
            }

            &.br {
                margin-right: 24px;
            }

            &.bg {
                background: #F4F7FC;
            }

            .r-half-echarts {
                width: 100%;
                height: calc(100% - 20px);
                margin-top: -20px;
            }
        }
    }
</style>
