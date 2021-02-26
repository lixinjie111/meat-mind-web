<template>
    <DefaultPage title="品牌画像">
        <!-- <Target></Target> -->
        <div class="mark-content">

            <!-- <div class="first-line">
                <div class="mark-overview">
                    <div class="title">品牌总体概览</div>
                    <div class="box-content">
                       <ShowTotal></ShowTotal>
                    </div>
                </div>
                <div class="tea-trend">
                    <div class="title">产量趋势 & 市场需求量  </div>
                    <div class="sub-title">
                        需求量
                        <span style="color:#34C724">稳步上升</span>,
                        市场供需
                        <span style="color:#FF8800">基本平衡</span>,
                        市场前景
                        <span style="color:#FF8800">良好</span>
                    </div>
                    <div class="tea-echart">
                        <barM id="box9999" :colorList="$lxjData.colorList" :myData="$lxjData.box32Data"></barM>
                    </div>
                </div>
            </div>
            <Brand></Brand> -->
            <div class="mark-line">
                 <div class="mark-line-top">
                    <div class="mark-line-sug mark-line-left">
                        <div class="title">
                            市场趋势及品牌现状
                        </div>
                        <div class="desc">
                            品牌定位与目标受众契合度良好，但市场份额小幅下滑，需进行产品多元化转型，引流年轻受众
                        </div>
                     </div>
                    <div class="mark-line-sug mark-line-rt">
                        <div class="title">
                            优化建议
                        </div>
                        <div class="desc">
                            提高微博、抖音的投放预算，增大品牌正向声量，塑造国医、简约、责任的品牌人设
                        </div>
                    </div>
                 </div>
                 <div class="mark-line-bt" v-if="showFlag">
                    <div class="mark-line-sug mark-line-left">
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                容行业市场供需已进入成熟阶段（97.1Brmb），整体呈平稳上升趋势且仍未饱和，2021年预估走强（+16.7%）
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                加多宝和王老吉已形成“两超多强”断层局势，共持有95.1%行业市场份额，邓老凉茶市场份额同比下降12.1%（8/53），同时品牌影响力指数排名较往年下降2位（6/53）
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                东南、华中地区为优势市场，华北地区政策利好拓展新市场，新增用户多为18-29岁年轻一代。
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                市场舆情总声量一般，顺意舆情占比高，逆意舆情类型多为竞对恶意抹黑，尚处于散播初期
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                元气森林（牛乳茶+0.51%）、燃茶（蜜桃乌龙+0.19%）等新兴爆品IP出现进军茶饮料市场的趋势。
                            </div>
                        </div>
                     </div>
                    <div class="mark-line-sug mark-line-rt">
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                增加15%-20%微信公众号、微博及抖音的营销预算，提高品牌正向声量，促成裂变
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                线下店需细分季节性核心产品，当前推荐：“香茅桃桃”、“金桂牛乳冻”及“秋梨胶原菊花”
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                               产品包装主打“深松绿”及“萱草黄”配色，突出治愈、新生、传统国医的品牌调性
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                                避开“怕上火”、“好声音”等头部竞对常用标签，通过“国家级非遗”、“抗击SARS药方”等品牌记忆点标签打造“药食一体”的差异化爆品，持续孵化“凉茶研究所“等自营IP
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                               取消产品低价策略，寻求“江小白”、“喜茶”等Z世代受众追捧的主流IP进行跨界合作，预期提升77%同比营收
                            </div>
                        </div>
                        <div class="item">
                            <div class="circle">
                            </div>
                            <div class="desc">
                               开拓新市场优先选择华北地区，邓老“大道至简，达济众生”的选材原则符合当地消费者心智期许（47.2%养生经济），强化品牌“养生性”标签的同时预期增加1.81%的市场份额
                            </div>
                        </div>
                    </div>
                 </div>
                <div class="showMore" v-if="showFlag" @click="showFlag=!showFlag">
                     收起详情
                     <i class="iconfont2 iconshouqi"></i>
                 </div>
                 <div class="showMore" v-else @click="showFlag=!showFlag">
                     展开详情
                     <i class="iconfont2 iconzhankai"></i>
                 </div>
            </div>
            <div class="mark-panel">
                <div class="title">
                    行业趋势
                </div>
                <Row :gutter="24">
                    <Col span="8">
                        <div class="box">
                            <div class="title">
                                市场前景
                            </div>
                            <div class="subTitle">
                                市场规模 <span style="color:#8AE6C7">稳步上升</span>，市场供需 <span style="color:#FF9F7F">基本平衡</span>，市场前景 <span style="color:#FF9F7F">良好</span>
                            </div>
                            <div class="echartBox">
                                <barLine id="box101" :colorList="$lxjData.colorList" :myData="$lxjData.box101Data"></barLine>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div class="box">
                        <div class="title">
                                品牌市场销售额排名（百万元）
                            </div>
                            <div class="tags">
                                <div class="tagList">
                                    <div class="tag">华东地区 <i class="iconfont2 iconicon_close"></i></div>
                                    <!-- <Tag v-if="show" closable @on-close="handleClose">标签三</Tag> -->
                                </div>
                                <div class="operate">+ 数据筛选</div>
                            </div>
                            <div class="echartBox">
                                <barL id="box240" :colorList="$lxjData.colorList" :myData="$lxjData.box240Data"></barL>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div class="box">
                            <div class="title">
                                舆情声量
                            </div>
                                <div class="selectNav">
                                    <div class="selectDiv selectLf">
                                       <div class="selectLabel"> 声量类型</div>
                                        <Select v-model="formItem.select" size="small" style="width:120px">
                                            <Option value="0">仅正面声量</Option>
                                            <Option value="1">仅负面声量</Option>
                                            <Option value="2">全部</Option>
                                        </Select>
                                    </div>
                                    <div class="selectDiv selectRt">
                                        <div class="selectLabel">对标比较</div>
                                        <Select v-model="formItem.pinpai" size="small" style="width:120px">
                                            <Option value="0">王老吉</Option>
                                            <Option value="1">加多宝</Option>
                                            <Option value="2">和其正</Option>
                                            <Option value="2">白云山</Option>
                                            <Option value="2">清心堂</Option>
                                        </Select>
                                    </div>
                                </div>
                            <div class="echartBox">
                                <lineM3 id="box68" :colorList="$lxjData.colorList" :myData="$lxjData.box68Data"></lineM3>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div class="mark-panel1">
                    <div class="title">
                        新增客户变化趋势
                    </div>
                    <div class="subTitle">
                       近期 北京 用户新增量最大，女性占比 环比增加 2.3%，年龄偏向年轻态
                    </div>
                    <div class="selectOiv">
                        <Select v-model="formItem.date" size="small" style="width:120px">
                            <Option value="0">近一个月</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <Card title="负面舆情的处理意见" class="card-five">
                <p class="card-five-desc">当前
                    <span>存在</span>
                负面舆情。该舆情起于
                <span>新闻</span>
                ；传播媒介最多的是
                <span>微博  论坛</span>
                ；事件负面级别为 <span>6</span> (影响一般)；根据负面舆情应对模型，推荐的应对方式是
                <span>逐步降低反击力度</span></p>
                <div class="card-five-box">
                    <div class="box1">
                        <div class="name">信息来源占比（%）</div>
                        <div class="box1-echart">
                            <barEcharts id="box15" :colorList="$lxjData.colorList" :myData="$lxjData.box15Data"></barEcharts>
                        </div>
                    </div>
                    <div class="box2">
                        <div class="box2-left">
                            <div class="name">敏感占比图</div>
                            <div class="box2-echart">
                                <YibiaoCharts2 :colorList="$fjData.colorList" :myData="$fjData.box17Data"></YibiaoCharts2>
                            </div>
                        </div>
                        <div class="second-list">
                            <div class="warning">
                                <img src="../../assets/img/mark/warning@2x.png" alt="">
                                <span>敏感信息</span>
                                <span class="strong">443</span>
                            </div>
                            <ul>
                                <li>邓老凉茶在凉茶巨头夹缝中迷失 同仁堂等遭</li>
                                <li>凉茶风光不再:负面新闻频发 高糖饮品销售</li>
                                <li>凉茶怎么“凉”的:潜规则、边缘化、互撕……_西药</li>
                                <li>申请挂牌新三板 邓老凉茶年销售收入不及行业龙头2%</li>
                            </ul>
                        </div>
                    </div>
                    <div class="box3">
                        <div class="name">负面舆情应对说明</div>
                        <div class="desc">已错过了最佳反击时间。<br>当前负面舆情已呈现随时间下降趋势，不宜过度反击，否则将造成二次传播扩散</div>
                        <div class="box3-echart">
                            <lineM1 id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM1>
                        </div>
                    </div>
                    <div class="box4">
                        <div class="name">舆情处理建议</div>
                        <div class="desc">负面舆情没有新的爆点和舆论热点，当前反击力度已足够。<br>应当随负面舆情热度走势逐步降低反击力度，预计3-4周后可回归平静。</div>
                        <div class="box4-echart">
                            <Leida2Echarts :colorList="$fjData.colorList" :myData="$fjData.box19Data"></Leida2Echarts>
                        </div>
                    </div>
                </div>
            </Card>
            <ThirdLine></ThirdLine>
            <div class="fourth-line">
                <div class="fourth-left">
                    <div class="fourth-title">品牌需求图谱</div>
                    <div class="fourth-left-echarts">
                        <iframe src="/static/html/pphx/rdyc1.html" frameborder="0" scrolling="no" style="width:100%;height:100%"></iframe>
                    </div>
                </div>
                <div class="fourth-right">
                    <div class="fourth-title">市场品类份额及品牌心智效能分析</div>
                    <div class="fourth-right-show">
                        <div class="fourth-right-echarts">
                            <Yuanhuan1 :colorList="$fjData.colorList" :myData="$fjData.box18Data" ></Yuanhuan1>
                        </div>
                        <div class="fourth-right-desc">
                            <div class="desc">覆盖度：品牌行业市场占有率</div>
                            <div class="desc2">近期行业态势：疫情后，2020年第三季度起增速回升，当前年均复合增长率为5.9%</div>
                            <div class="desc">总体市场规模：国内 620.5B 海外 385B</div>
                            <Colourfol :title="'感知度（整体有效性）：'" :color="'active1'" :num="'6'"></Colourfol>
                            <Colourfol :title="'联想度（记忆触发）：'" :color="'active2'" :num="'7'"></Colourfol>
                            <Colourfol :title="'关注度（注意力停留）：'" :color="'active3'" :num="'5'"></Colourfol>
                            <Colourfol :title="'共鸣感（情感投入）：'" :color="'active4'" :num="'8'"></Colourfol>
                        </div>
                    </div>
                </div>
            </div>
            <div class="five-line">
                <div class="fourth-left">
                    <div class="fourth-title">全竞品爆款特质分析</div>
                    <div class="fourth-content">
                        <div class="fourth-content-left fourth-content-cm">
                            <div class="fourth-content-title">
                                <div class="pic"><img src="../../assets/img/mark/wang.png" alt=""></div>
                                王老吉
                            </div>
                            <div class="tagList">
                                <div class="tag">凉茶饮料</div>
                                <div class="tag">防上火</div>
                                <div class="tag">健康功效</div>
                            </div>
                            <div class="fourth-content-subTitle">洞悉消费趋势，满足新的需求点</div>
                            <div class="fourth-content-text">开创凉茶饮料，主打“防上火”的健康功效，深度捆绑吃火锅、熬夜等容易上火的场景。</div>
                            <div class="fourth-content-subTitle">大面积推广，营销手段需要创意</div>
                            <div class="fourth-content-text">宣传自身为“凉茶始祖”，始于清道光年间，增强消费者信赖感；在电视上密集投放广告，抢占央视黄金时段。</div>
                        </div>
                        <div class="fourth-content-right fourth-content-cm">
                             <div class="fourth-content-title">
                                <div class="pic"><img src="../../assets/img/mark/qin.png" alt=""></div>
                                元气森林
                            </div>
                            <div class="tagList">
                                <div class="tag">无糖</div>
                                <div class="tag">新风味</div>
                                <div class="tag">佛系养生</div>
                            </div>
                            <div class="fourth-content-subTitle">洞悉消费趋势，满足新的需求点</div>
                            <div class="fourth-content-text">抓住无糖新风口，将目标锁定在“佛系养生”的年轻消费者身上，打造了无糖气泡水单品。</div>
                            <div class="fourth-content-subTitle">大面积推广，营销手段需要创意</div>
                            <div class="fourth-content-text">线下通过高频率、强触达的电梯媒体精准触达目标消费群体。线上通过植入综艺、与年轻群体喜欢的B站合作不断扩大品牌人气。</div>
                        </div>
                    </div>
                </div>
                <div class="fourth-right">
                    <div class="fourth-title fourth-rtTitle">细分市场占有率态势</div>
                    <div class="fourth-subTitle">细分市场占有率态势</div>
                    <div class="fourth-content">
                        <lineM id="box66" :colorList="$lxjData.colorList" :myData="$lxjData.box66Data"></lineM>
                    </div>
                </div>
            </div>
            <Details></Details>
        </div>
    </DefaultPage>
</template>

<script>
import Brand from "./components/Brand"
import Card from "../../components/Card"
import DefaultPage from "../../layouts/DefaultPage";
import ThirdLine from "./components/Benchmark"
import Colourfol from "./base/Colourfol"
import Details from "./components/Details"
import Yuanhuan1 from '../../components/echarts/common/Yuanhuan1';
import LeidaEcharts from '../../components/echarts/common/LeidaEcharts';
import barEcharts from '../../components/echarts/common/barEcharts';
import YibiaoCharts2 from '../../components/echarts/common/YibiaoCharts2';
import lineM from '../../components/echarts/common/lineM';
import barLine from '../../components/echarts/common/barLine';
import lineM3 from '../../components/echarts/common/lineM3';
import barL from '../../components/echarts/common/barL';
import lineM1 from '../../components/echarts/common/lineM1';
import Leida2Echarts from '../../components/echarts/common/Leida2Echarts';
import barM from '../../components/echarts/common/barM';
import Target from "./base/Target"
import ShowTotal from "./components/ShowTotal"
export default {
    name:"index",
    components:{lineM3,barLine,barL,Brand,Card,Target,ShowTotal,barM,lineM1,DefaultPage,ThirdLine,Colourfol,Details,Yuanhuan1,LeidaEcharts,barEcharts,YibiaoCharts2,lineM,Leida2Echarts},
    data () {
		return {
			showFlag:true,
            formItem: {
                select: '2',
                pinpai:0,
                date:''
            }
		}
	},
}
</script>

<style scoped lang="scss">
 .mark-content{
     padding: 0 24px 24px 24px;
     .mark-line{
        background: url("../../assets/img/mark/markBg.png") no-repeat center center / 100% 100%;
        border-radius: 12px;
        padding: 24px;
        .showMore{
            margin-top: 27px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2373FF;
            cursor: pointer;
            i{
                margin-left: 5px;
                font-size: 12px;
            }
        }
        .mark-line-top{
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
            .mark-line-sug{
                width: 540px;
                box-shadow: 2px 4px 10px 0px rgba(41, 59, 149, 0.3);
                border-radius: 8px;
                 .title{
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FFFFFF;
                    line-height: 32px;
                    text-shadow: 2px 2px 4px rgba(43, 74, 158, 0.5);
                 }
                 .desc{
                    width: 375px;
                    margin-top: 18px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 23px;
                 }
                &.mark-line-left{
                    padding:24px;
                    background: url("../../assets/img/mark/mark1.png") no-repeat center center / 100% 100%;
                }
                &.mark-line-rt{
                    padding:24px;
                    background: url("../../assets/img/mark/mark2.png") no-repeat center center / 100% 100%;
                }
            }
           
        }
        .mark-line-bt{
            display: flex;
            justify-content: space-between;
            margin-bottom: 24px;
            .mark-line-sug{
                width: 540px;
                background: rgba(219, 234, 255, 0.8);
                border-radius: 8px;
                padding:16px;
                .item{
                    margin-bottom: 15px;
                    display: flex;
                    align-items: baseline;
                    .circle{
                        width: 8px;
                        height: 8px;
                        background: #276BE2;
                        margin-right: 12px;
                        border-radius: 50%;
                    }
                    .desc{
                        flex:1;
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        line-height: 18px;
                    }
                }
                &.mark-line-left{
                   border: 1px solid #4D94FF;
                }
                &.mark-line-rt{
                    border: 1px solid #34B8BE;
                    .item{
                        .circle{
                            background: #34B8BE;
                        }
                    }
                }
            }
           
        }
     }
     .mark-panel{
         margin:24px 0;
         padding: 24px;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        border: 1px solid #EAEDF7;
        .mark-panel1{
            height: 312px;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            margin: 24px 0;
            position: relative;
            padding: 16px;
             .title{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                margin-bottom: 4px;
           } 
            .subTitle{
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                 margin-bottom: 16px;
            }
            .selectOiv{
                position: absolute;
                width: 120px;
                right: 16px;
                top:16px
            }
        }
         .title{
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            margin-bottom: 24px;
         }
         .box{
             padding: 16px;
             height: 268px;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            display: flex;
            flex-direction: column;
            .title{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                 margin-bottom: 8px;
            }
             .selectNav{
                display: flex;
                justify-content: space-between;
                 ::v-deep .ivu-form-item{
                       margin-bottom: 0;
                    }
                 ::v-deep .ivu-form-item-label{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        padding-top:0;
                        padding-bottom:0;
                    }
                    .selectDiv{
                        display: flex;
                        align-items: center;
                        flex:1;
                         &.selectLf{
                             margin-right: 8px;
                         }
                        .selectLabel{
                             font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #242F57;
                            margin-right: 5px;
                        }
                    }
                .selectLf{
                    // ::v-deep .ivu-form-item-label{
                    //     font-size: 12px;
                    //     font-family: PingFangSC-Regular, PingFang SC;
                    //     font-weight: 400;
                    //     color: #242F57;
                    // }
                }
             }
            .tags{
                display: flex;
                justify-content: space-between;
                .operate{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    line-height: 18px;
                    cursor: pointer;
                }
                .tagList{
                    .tag{
                        margin-right: 8px;
                        display: flex;
                        padding:3px 8px;
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #2373FF;
                        background: rgba(221, 233, 255, 0.5);
                        border-radius: 4px;
                        align-items: center;
                        i{
                            margin-left: 3px;
                            font-size: 10px;
                            cursor: pointer;
                        }
                    }
                }
            }
            
            .subTitle{
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                line-height: 18px;
            }
            .echartBox{
                flex:1
            }
         }
     }
     .first-line{
         display: flex;
         justify-content: space-between;
         margin-bottom: 24px;
        .mark-overview,.tea-trend{
            width: calc( 50% - 12px);
            height: 482px;
            padding: 24px;
            box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            border: 1px solid #FFFFFF;
            .title{
                height: 22px;
                font-size: 18px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 22px;
            }
        }
        .mark-overview{
            display: flex;
            flex-direction: column;
            background: url("../../assets/img/mark/left-bg@2x.png") no-repeat center center / 100% 482px;
            .title{
                margin-bottom: 24px;
            }
            .box-content{
                width: 100%;
            }
        }
        .tea-trend{
            display: flex;
            flex-direction: column;
            background: url("../../assets/img/mark/right-bg@2x.png") no-repeat center center / 100% 482px;
            .title{
                margin-bottom: 8px;
            }
            .sub-title{
                height: 22px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                line-height: 22px;
            }
            .tea-echart{
                width: 100%;
                height: calc(100% - 48px);
            }
        }
     }

        .card-five {
            margin-top: 24px;
            ::v-deep .title .left > p{font-size: 18px;}
            
            .card-five-desc {
                margin: -15px 0 24px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;

                > span {
                    color: #FB343E;
                }
            }
            .card-five-box {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .box1, .box2, .box3, .box4 {
                    width: calc(50% - 12px);
                    padding: 16px;
                    margin-bottom: 24px;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;

                    .name {
                        height: 24px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    .desc {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                    }
                }

                .box1, .box2 {
                    height: 328px;
                }

                .box3, .box4 {
                    height: 390px;
                }

                .box1, .box3 {
                    .box1-echart {
                        width: 100%;
                        height: calc(100% - 24px);
                    }

                    .box3-echart {
                        width: 100%;
                        height: calc(100% - 64px);
                    }
                }

                .box2 {
                    display: flex;
                    justify-content: space-between;

                    .box2-left {
                        width: calc(100% - 260px);
                        height: 100%;

                        .box2-echart {
                            width: 100%;
                            height: calc(100% - 24px);
                        }
                    }

                    .second-list {
                        width: 260px;

                        .warning {
                            padding: 0 16px;
                            width: 260px;
                            height: 56px;
                            line-height: 56px;
                            border-radius: 8px;
                            background: rgba(252, 128, 159, .2);
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #FB343E;

                            img {
                                margin-right: 8px;
                                vertical-align: -8px;
                                width: 24px;
                                height: 24px;
                            }

                            > span {
                                vertical-align: middle;

                                &.strong {
                                    margin-left: 8px;
                                    font-size: 32px;
                                    font-family: Archivo-Bold, Archivo;
                                    font-weight: bold;
                                }
                            }
                        }

                        >ul {
                            > li {
                                display: flex;
                                align-items: baseline;
                                padding: 8px 16px;
                                margin-bottom: 4px;
                                border-radius: 8px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;

                                &:before {
                                    content: '•';
                                    margin-right: 8px;
                                    font-size: 14px;
                                    font-weight: 400;
                                    color: #FC809F;
                                }

                                &:hover {
                                    box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16), 1px 1px 0px 0px #FFFFFF;
                                }
                            }
                        }
                    }
                }

                .box4 {
                    .box4-echart {
                        width: 100%;
                        height: calc(100% - 88px);
                    }
                }
            }
        }


     .fourth-line{
         display: flex;
         justify-content: space-between;
         width: 100%;
         height: 392px;
         margin-top: 24px;
         .fourth-left,.fourth-right{
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             width: calc(50% - 12px);
             height: 392px;
             padding: 24px;
             background: #FFFFFF;
            box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
            border-radius: 12px;
            border: 1px solid #EAEDF7;
             .fourth-title{
                height: 24px;
                margin-bottom: 16px;
                font-size: 18px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
             }
         }
         .fourth-left{
             .fourth-left-echarts{
                 width: 100%;
                 height: calc(100% - 40px);
             }
         }
         .fourth-right{
             .fourth-right-show{
                 display: flex;
                 width: 100%;
                 height: calc(100% - 48px);
                 .fourth-right-echarts,.fourth-right-desc{
                     width: 50%;
                     height: 100%;
                 }
                 .fourth-right-desc{
                     .desc{
                        height: 22px;
                        margin-bottom: 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        line-height: 22px;
                        &.desc2{
                            height: 44px;
                        }
                     }
                 }
             }
         }
     }
     .five-line{
         display: flex;
         justify-content: space-between;
         width: 100%;
         height: 422px;
         margin-top: 24px;
         .fourth-left,.fourth-right{
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             width: calc(50% - 12px);
             height: 100%;
             padding: 24px;
             background: #FFFFFF;
            box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
            border-radius: 12px;
            border: 1px solid #EAEDF7;
             .fourth-title{
                height: 24px;
                margin-bottom: 24px;
                font-size: 18px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
                &.fourth-rtTitle{
                    margin-bottom: 8px;
                }
             }
             .fourth-subTitle{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
             }
             .fourth-content{
                flex:1;
                display: flex;
                justify-content: space-between;
                .fourth-content-cm{
                     width: calc(50% - 8px);
                     height: 100%;
                    border-radius: 8px;
                    padding:16px;
                    .fourth-content-title{
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                        margin-bottom: 8px;
                        .pic{
                            width: 32px;
                            margin-right: 8px;
                            img{
                                width: 100%;
                                display: block;
                            }
                        }
                    }
                    .tagList{
                        display: flex;
                        margin-bottom: 17px;
                        .tag{
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #2373FF;
                            background: rgba(221, 233, 255, 0.5);
                            border-radius: 4px;
                            padding:4px 8px;
                            margin-right: 8px;
                        }
                    }
                    .fourth-content-subTitle{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #97A0C3;
                        line-height: 18px;
                        margin-top: 16px;
                        margin-bottom: 4px;
                    }
                    .fourth-content-text{
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        line-height: 22px;
                    }
                }
                .fourth-content-left{
                    background: rgba(255, 241, 244, 0.3);
                }
                .fourth-content-right{
                    background: rgba(219, 234, 255, 0.3);
                }
             }
         }
         .fourth-left{
             .fourth-left-echarts{
                 width: 100%;
                 height: calc(100% - 40px);
             }
         }
         .fourth-right{
             .fourth-right-show{
                 display: flex;
                 width: 100%;
                 height: calc(100% - 48px);
                 .fourth-right-echarts,.fourth-right-desc{
                     width: 50%;
                     height: 100%;
                 }
                 .fourth-right-desc{
                     .desc{
                        height: 22px;
                        margin-bottom: 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        line-height: 22px;
                        &.desc2{
                            height: 44px;
                        }
                     }
                 }
             }
         }
     }

 }
</style>