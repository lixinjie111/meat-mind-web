<template>
    <div class="mark-details-accept">
        <div class="m-d-accept-header">
            <div class="a-h-title">{{title}}</div>
            <div class="a-h-arrow"></div>
        </div>
        <Analyse :descL="descL" :descR="descR"></Analyse>
        <div class="m-d-show-echarts">
            <Half :lTitle="'品牌真实受众覆盖度'" :rTitle="'品牌真实受众匹配度'" :subDate="'2021.1.1-2021.1.31'">
                <RotateChart slot="left" :colorList="$fjData.colorList" :myData="$fjData.box13Data"></RotateChart>
                <MatchEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box15Data" ></MatchEcharts>
            </Half>
            <Half :lTitle="'核心受众年龄分布'" :rTitle="'核心受众性别分布'" :subDate="'2021.1.1-2021.1.31'">
                <PieEcharts3 slot="left" :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieEcharts3>
                <PieEcharts3 slot="right" :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieEcharts3>
            </Half>
            <Half :lTitle="'职业结构'" :rTitle="'教育背景结构'">
                <PieEcharts3 slot="left" :colorList="$fjData.colorList" :myData="$fjData.box3Data" roseType="radius"></PieEcharts3>
                <barEcharts slot="right" id="box1" :colorList="$lxjData.colorList" :myData="$lxjData.box1Data"></barEcharts>
            </Half>
            <Half :lTitle="'购买时段及频次'" :rTitle="'常用高频场景'">
                <lineM slot="left" id="box63" :colorList="$lxjData.colorList" :myData="$lxjData.box63Data"></lineM>
                <lineM slot="right" id="box64" :colorList="$lxjData.colorList" :myData="$lxjData.box64Data"></lineM>
            </Half>
            <Half :lTitle="'核心受众消费等级分布'" :rTitle="'传播内容偏好与参与度'">
                <PieEcharts3 slot="left" :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieEcharts3>
                <barEcharts slot="right" id="box16" :colorList="$lxjData.colorList" :myData="$lxjData.box16Data"></barEcharts>
            </Half>
            <Full :title="'核心受众偏好内容分布'">
                <barCH id="box113" :colorList="$lxjData.colorList" :myData="$lxjData.box113Data"></barCH>
            </Full>
        </div>
    </div>
</template>

<script>
import Analyse from "../base/Analyse"
import Half from "../base/Half"
import Full from "../base/Full"
import RotateChart from '../../../components/echarts/common/RotateChart';
import MatchEcharts from '../../../components/echarts/common/MatchEcharts';
import PieEcharts3 from '../../../components/echarts/common/PieEcharts3';
import barEcharts from '../../../components/echarts/common/barEcharts';
import lineM from '../../../components/echarts/common/lineM';
import barCH from '../../../components/echarts/common/barCH';

export default {
    name:"Accept",
    components:{Analyse,Half,Full,RotateChart,MatchEcharts,PieEcharts3,barEcharts,lineM,barCH},
    props:{
        title:{
            type:String
        }
    },
    data(){
        return {
            descL:"品牌真实受众覆盖度一般，品牌忠诚度过低。",
            descR:"按受众特征（中高学历、中年管理层、便捷养生）与购买场景（带货、节日伴手礼）制定营销方案，增加客群覆盖度"
        }
    }
};
</script>

<style scoped lang="scss">
.mark-details-accept{
    padding-bottom:24px;
    background: #FFFFFF;
    border-radius: 8px;
    .m-d-accept-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 73px;
        border-top: 1px solid #EAEDF7;
        .a-h-title{
            height: 26px;
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 26px;
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