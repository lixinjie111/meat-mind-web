<template>
    <div class="user-comparison-container">
        <div class="title-box flex">
            <div class="left">
                <i @click="back" class="iconfont iconright-arrow"></i>
                <span>对标品牌</span>
            </div>
            <div class="right">
                <Select value="加多宝">
                    <Option value="加多宝">加多宝</Option>
                </Select>
            </div>
        </div>
        <TabD :tab-list="tabList" @change="changeTab"></TabD>
        <div class="comparison-box">
            <HalfC :title="'品牌真实受众覆盖度'">
                <!-- <RotateChart slot="left" :colorList="$fjData.colorList" :myData="$fjData.box13Data"></RotateChart> -->
                <!-- <RotateChart slot="right" :colorList="$fjData.colorList" :myData="$fjData.box13Data1"></RotateChart> -->
                <PieEcharts3 slot="left" :colorList="$fjData.colorList" :myData="$linData.pieData1"></PieEcharts3>
                <PieEcharts3 slot="right" :colorList="$fjData.colorList" :myData="$linData.pieData1Ck"></PieEcharts3>                
            </HalfC>
            <HalfC :title="'品牌真实受众匹配度'">
                <MatchEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box15Data" ></MatchEcharts>
                <MatchEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box15Data1" ></MatchEcharts>
            </HalfC>
            <HalfC :title="'核心受众年龄分布'">
                <PieEcharts3 slot="left" :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieEcharts3>
                <PieEcharts3 slot="right" :colorList="$fjData.colorList" :myData="$fjData.box1Data1"></PieEcharts3>
            </HalfC>
            <HalfC :title="'核心受众性别分布'">
                <PieEcharts3 slot="left" :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieEcharts3>
                <PieEcharts3 slot="right" :colorList="$fjData.colorList" :myData="$fjData.box5Data1"></PieEcharts3>
            </HalfC>
        </div>
    </div>
</template>

<script>
    import TabD from "../../components/TabD";
    import HalfC from "./base/HalfC";
    import RotateChart from '@/components/echarts/common/custom/RotateChart';
    import MatchEcharts from '@/components/echarts/common/radar/MatchEcharts';
    import PieEcharts3 from '@/components/echarts/common/pie/PieEcharts3'

    export default {
        name: "comparison",
        components: {TabD, HalfC, RotateChart, MatchEcharts, PieEcharts3},
        data() {
            return {
                tabList: [
                    {
                        name: '品牌受众分析',
                        disabled: false
                    },
                    {
                        name: '品牌舆情洞察',
                        disabled: true
                    },
                    {
                        name: '行业态势分析',
                        disabled: true
                    }
                ]
            }
        },
        methods: {
            back() {
                this.$router.push({name:"mark-detail"})
            },
            changeTab() {

            }
        }
    }
</script>

<style scoped lang="scss">
    .user-comparison-container {
        padding: 0 24px;

        .title-box {
            padding: 20px 0;

            .left {
                > i {
                    vertical-align: middle;
                    font-size: 24px;
                    color: #7C88B1;
                    cursor: pointer;
                }

                > span {
                    margin-left: 33px;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                }
            }

            .right {
                width: 140px;
            }
        }

        .comparison-box {
            margin-top: 16px;
            padding: 24px;
            background: #FFFFFF;
            border-radius: 8px;
        }
    }
</style>