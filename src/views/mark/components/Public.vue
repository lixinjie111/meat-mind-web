<template>
    <div class="mark-details-public">
        <div class="m-d-public-header">
            <div class="a-h-title">{{title}}</div>
            <div class="a-h-arrow"></div>
        </div>
        <div class="m-d-show-echarts">
            <Full :title="'品牌市场情况'">
                <barM id="box32" :colorList="$lxjData.colorList" :myData="$lxjData.box32Data"></barM>
            </Full>
            <Half :lTitle="'2020年饮料市场细分比例'" :rTitle="'茶饮料行业负面舆情关键词排名'">
                <PieEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box10Data"></PieEcharts>
                <barL slot="right" id="box26" :colorList="$lxjData.colorList" :myData="$lxjData.box26Data"></barL>
            </Half>
            <Full :title="'茶饮料行业网络口碑及热度指数'">
                <lineO id="box59" :colorList="$lxjData.colorList" :myData="$lxjData.box59Data"></lineO>
            </Full>
        </div>
    </div>
</template>

<script>
import Half from "../base/Half"
import Full from "../base/Full"
import barM from '../../../components/echarts/common/barM';
import PieEcharts from '../../../components/echarts/common/PieEcharts';
import barL from '../../../components/echarts/common/barL';
import lineO from '../../../components/echarts/common/lineO';
export default {
    name:"Public",
    components:{Half,Full,barM,PieEcharts,barL,lineO},
    props:{
        title:{
            type:String
        }
    }
};
</script>

<style scoped lang="scss">
.mark-details-public{
    padding-bottom:24px;
    background: #FFFFFF;
    border-radius: 8px;
    .m-d-public-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        border-top: 1px solid #EAEDF7;
        .a-h-title{
            height: 24px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 24px;
        }
        .a-h-arrow{
            width: 16px;
            height: 16px;
            background: url("../../../assets/img/mark/arrow@2x.png") no-repeat center center / 16px 16px;
        }
    }
    .m-d-show-echarts{

    }
}
</style>