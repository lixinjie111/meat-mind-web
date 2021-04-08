<template>
    <div class="mark-details-market" id="mark-details-market">
        <!-- <div class="m-d-market-header">
            <div class="a-h-title">
                {{title}}
                <Poptip popper-class="saas-poptip" trigger="hover" placement="right">
                    <img class="gif" src="../../../assets/img/user/tip.gif" alt="">
                    <div slot="content">
                        <p><span>品牌舆情</span></p>
                        <p>品牌舆情分析是如何产生的</p>
                        <img class="big" src="../../../assets/img/mark/tip1.png"/>
                        <p><span>语言处理</span></p>
                        <p>品牌拥有来自多元文化背景的追随者，通常情况下，评论区是丰富多彩的各种语言，特别是当页面覆盖特定地区。对于数字营销人员来说，捕捉和处理这些多语言的评论，以真正理解他们的受众在说什么和感受是很重要的。</p>
                        <p><span>文本和主题分析</span></p>
                        <p>他们在说什么他们对什么运动感兴趣？哪些产品或内容在我的受众中产生了兴奋？这些信息将有助于制定未来运动的战略。算法还决定了每个评论有多少字，然后再决定将它们归类为合适的类别。</p>
                        <p><span>无关数据的过滤</span></p>
                        <p>有时评论区会被不必要的评论、垃圾邮件和不相关的输入挤得水泄不通，这就是为什么自动化的品牌情感分析会有帮助。想象一下，当你可以专注于更有成效的工作时，你每个月都要分析数以千计的评论，并花费无数的时间来阅读它们。通过社交媒体上的自动品牌情感分析，你只会挑选与帖子相关的最相关的评论。</p>
                        <p><span>用户情感提取</span></p>
                        <p>每一条评论都能告诉你听众的感受，例如，如果你看到这样的评论：</p>
                        <p>“哇，这是一个很棒的视频，伙计们！它让我想马上试试你们的产品。”</p>
                        <p>我们可以马上知道，评论的人是兴奋和高兴的。但是我们的算法是如何检测用户情绪的呢？首先他们浏览每一个词，并确定听众传达的情感是积极的、消极的还是中性的。</p>
                    </div>
                </Poptip>

            </div>
            <div class="a-h-arrow"></div>
        </div> -->
        <Analyse :descL="descL" :descR="descR"></Analyse>
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
import Analyse from "../base/Analyse"
import Half from "../base/Half"
import Full from "../base/Full"
import Yibiao1Echarts from '../../../components/echarts/common/gauge/Yibiao1Echarts';
import PieEcharts5 from '../../../components/echarts/common/pie/PieEcharts5';
import lineM from '../../../components/echarts/common/line/lineM';
import barHM from '../../../components/echarts/common/bar/barHM';
import barL from '../../../components/echarts/common/bar/barL';
import barM from '../../../components/echarts/common/bar/barM';
import barEcharts from '../../../components/echarts/common/bar/barEcharts';
export default {
    name:"Market",
    components:{Analyse,Half,Full,Yibiao1Echarts,PieEcharts5,lineM,barHM,barL,barM,barEcharts},
    props:{
        title:{
            type:String
        }
    },
    data(){
        return {
            descL:"负面舆情主要分布在微博和大众点评，曝光量不高，处于散播初期，未形成热议爆点，内容多为恶意竞争（34.6%）",
            descR:"建议与舆情发布者沟通，以证据要求更正或赔偿。不建议采取媒体公关反击，避免二次发酵"
        }
    }
};
</script>

<style scoped lang="scss">
.mark-details-market{
    padding: 24px;
    margin-bottom:24px;
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    border-radius: 8px;
    .m-d-market-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 73px;
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
        cursor: pointer;
      }
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
