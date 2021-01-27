<template>
    <div class="compare-box">
        <p>
            <span>环比</span>
            <span :class="data[0]>0?'green':'red'">{{Math.abs(data[0])}}%</span>
            <span class="ml-8">同比</span>
            <span :class="data[1]>0?'green':'red'">{{Math.abs(data[1])}}%</span>
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
        > p {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;

            .red {
                margin-left: 4px;
                color: #FB343E;
            }

            .green {
                margin-left: 4px;
                color: #34C724;
            }

            .ml-8 {
                margin-left: 8px;
            }
        }
    }
</style>