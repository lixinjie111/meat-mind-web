<template>
    <div class="user-comparison-container">
        <div class="title-box flex">
            <div class="left">
                <i @click="back" class="iconfont iconright-arrow"></i>
                <span>用户群对比</span>
            </div>
            <div class="right">
                <Select value="加多宝">
                    <Option value="加多宝">加多宝</Option>
                </Select>
            </div>
        </div>
        <TabD :tab-list="tabList" @change="changeTab"></TabD>
        <div class="comparison-box">
            <Half :title="'年龄结构'">
                <PieEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieEcharts>
                <PieEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box1Data1"></PieEcharts>
            </Half>
            <Half :title="'收入结构'">
                <PieEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieEcharts>
                <PieEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box2Data1"></PieEcharts>
            </Half>
            <Half :title="'职业结构'">
                <cLine slot="left" id="box58" :colorList="$lxjData.colorList" :myData="$lxjData.box58Data"></cLine>
                <cLine slot="right" id="box581" :colorList="$lxjData.colorList" :myData="$lxjData.box58Data1"></cLine>
            </Half>
            <Half :title="'行业结构'">
                <barC slot="left" id="box7" :colorList="$lxjData.colorList" :myData="$lxjData.box7Data"></barC>
                <barC slot="right" id="box71" :colorList="$lxjData.colorList" :myData="$lxjData.box7Data1"></barC>
            </Half>
        </div>
    </div>
</template>

<script>
    import TabD from "../../components/TabD";
    import Half from "./base/Half";
    import PieEcharts from '@/components/echarts/common/pie/PieEcharts';
    import cLine from '@/components/echarts/common/line/line';
    import barC from '@/components/echarts/common/bar/barC';

    export default {
        name: "comparison",
        components: {TabD, Half, PieEcharts, cLine, barC},
        data() {
            return {
                tabList: [
                    {
                        name: '基础画像',
                        disabled: true
                    },
                    {
                        name: '行为分析',
                        disabled: false
                    },
                    {
                        name: '心智分析',
                        disabled: false
                    },
                    {
                        name: '生命周期分析',
                        disabled: false
                    }
                ]
            }
        },
        methods: {
            back() {
                this.$router.push({name:"user"})
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