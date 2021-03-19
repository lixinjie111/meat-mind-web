<template>
    <div class="compare-box">
        <p>
            <span>环比</span>
            <i class="iconfont iconshangsheng" v-if="data[0]>0"></i>
            <i class="iconfont iconxiajiang" v-else></i>
            <span>{{Math.abs(data[0])}}%</span>
            <span class="ml-8">同比</span>
            <i class="iconfont iconshangsheng" v-if="data[1]>0"></i>
            <i class="iconfont iconxiajiang" v-else></i>
            <span>{{Math.abs(data[1])}}%</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Compare",
        props: {
            data: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .compare-box {
display: flex;
align-items: center;
height: 20px;
margin-top: 4px;
        > p {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;

            .ml-8 {
                margin-left: 15px;
            }

            .iconfont{
                display: inline-block;
                margin: 0 4px;
                font-size: 12px;
                transform: scale(0.7);
            }
        }
    }
</style>