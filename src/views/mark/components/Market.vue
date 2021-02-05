<template>
    <div class="mark-details-market">
        <div class="m-d-market-header">
            <div class="a-h-title">{{title}}</div>
            <div class="a-h-arrow"></div>
        </div>
        <div class="m-d-show-echarts">
            <Full :title="'品牌舆情总声量基础特征'">
                <barEcharts id="box2" :colorList="$lxjData.colorList" :myData="$lxjData.box2Data"></barEcharts>
            </Full>
            <Half :lTitle="'舆情情感性分布'" :rTitle="'舆情热词图'">
                <Yibiao1Echarts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box16Data" ></Yibiao1Echarts>
                <iframe slot="right" src="/static/html/pphx/rdyc.html" frameborder="0" scrolling="no"></iframe>
            </Half>
            <Full :title="'品牌及行业竞品舆情总声量走势'">
                <lineM id="box65" :colorList="$lxjData.colorList" :myData="$lxjData.box65Data"></lineM>
            </Full>
            <Full :title="'渠道舆情声量分布'">
                <barHM id="box114" :colorList="$lxjData.colorList" :myData="$lxjData.box114Data"></barHM>
            </Full>
            <Half :lTitle="'负面声量渠道分布'" :rTitle="'负面内容排名'">
                <PieEcharts5 slot="left" :colorList="$fjData.colorList" :myData="$fjData.box9Data"></PieEcharts5>
                <barL slot="right" id="box24" :colorList="$lxjData.colorList" :myData="$lxjData.box24Data"></barL>
            </Half>
            <Half :lTitle="'情感分布'" :rTitle="'品牌价值潜力分析'">
                <barM slot="left" id="box31" :colorList="$lxjData.colorList" :myData="$lxjData.box31Data"></barM>
                <barL slot="right" id="box25" :colorList="$lxjData.colorList" :myData="$lxjData.box25Data"></barL>
            </Half>
        </div>
    </div>
</template>

<script>
import Half from "../base/Half"
import Full from "../base/Full"
import Yibiao1Echarts from '../../../components/echarts/common/Yibiao1Echarts';
import PieEcharts5 from '../../../components/echarts/common/PieEcharts5';
import lineM from '../../../components/echarts/common/lineM';
import barHM from '../../../components/echarts/common/barHM';
import barL from '../../../components/echarts/common/barL';
import barM from '../../../components/echarts/common/barM';
import barEcharts from '../../../components/echarts/common/barEcharts';
export default {
    name:"Market",
    components:{Half,Full,Yibiao1Echarts,PieEcharts5,lineM,barHM,barL,barM,barEcharts},
    props:{
        title:{
            type:String
        }
    }
};
</script>

<style scoped lang="scss">
.mark-details-market{
    padding-bottom:24px;
    background: #FFFFFF;
    border-radius: 8px;
    .m-d-market-header{
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