<template>
    <div class="mark-details-accept" id="m-d-accept-header">
        <div class="m-d-accept-header">
            <div class="a-h-title">
                {{title}}
                <Poptip popper-class="saas-poptip" placement="right-start">
                    <!-- <i class="iconfont iconguanyuline1 tip-icon"></i> -->
                    <img class="gif" src="../../../assets/img/user/tip.gif" alt="">
                    <div slot="content">
                        <p>用户从接受到产品的宣传营销信息（硬广or软文），到引起兴趣，然后开始搜索进行了解（百度、知乎、微博、淘宝），到在线下载or支付，以及后续的评价分享环节（产品内、微信、微博）</p>
                        <img class="big" src="../../../assets/img/mark/tip2.png"/>
                        <p>AISAS模型更符合互联网的特点，时效性强，但它和IDMA模型一样，依旧缺乏量化标准，每一环节的效应不能通过数据进行反馈。</p>
                    </div>
                </Poptip>
            </div>
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
import RotateChart from '../../../components/echarts/common/custom/RotateChart';
import MatchEcharts from '../../../components/echarts/common/radar/MatchEcharts';
import PieEcharts3 from '../../../components/echarts/common/pie/PieEcharts3';
import barEcharts from '../../../components/echarts/common/bar/barEcharts';
import lineM from '../../../components/echarts/common/line/lineM';
import barCH from '../../../components/echarts/common/bar/barCH';

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
    padding:0 24px 24px;
    // margin-bottom: 24px;
    background: #FFFFFF;
    border-radius: 8px;
    .m-d-accept-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 73px;
        // border-top: 1px solid #EAEDF7;
        .a-h-title{
            display: flex;
            align-items: center;
            height: 26px;
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 26px;
                  ::v-deep .ivu-poptip{height:26px}
      .gif{
        width: 26px;
        height: 26px;
        cursor:pointer
      }
        }
        .a-h-arrow{
            width: 16px;
            height: 16px;
            background: url("../../../assets/img/mark/arrow@2x.png") no-repeat center center / 16px 16px;
        }
    }
}
</style>
