<template>
    <DefaultPage title="品牌画像">
        <Target></Target>
        <div class="mark-content">
            <div class="first-line">
                <div class="mark-overview">
                    <div class="title">品牌总体概览</div>
                    <div class="box-content">
                       <ShowTotal></ShowTotal>
                    </div>
                </div>
                <div class="tea-trend">
                    <div class="title">2016-2021年中国凉茶产量规模增长</div>
                    <div class="sub-title">
                        需求量
                        <span style="color:#34C724">稳步上升</span>,
                        市场供需
                        <span style="color:#FF8800">基本平衡</span>,
                        市场前景
                        <span style="color:#FF8800">良好</span>
                    </div>
                    <div class="tea-echart">
                        <!-- <barEcharts id="box14" :colorList="$lxjData.colorList" :myData="$lxjData.box14Data"></barEcharts> -->
                        <barM id="box9999" :colorList="$lxjData.colorList" :myData="$lxjData.box32Data"></barM>
                    </div>
                </div>
            </div>
            <div class="second-line">
                <div class="title">负面舆情的处理意见</div>
                <div class="second-content">
                    <div class="box1">
                        <div class="name">信息来源占比（%）</div>
                        <div class="box1-echart">
                            <barEcharts id="box15" :colorList="$lxjData.colorList" :myData="$lxjData.box15Data"></barEcharts>
                        </div>
                    </div>
                    <div class="box2">
                        <div class="box2-left">
                            <div class="name">敏感占比图 </div>
                            <div class="box2-echart">
                                <YibiaoCharts2 :colorList="$fjData.colorList" :myData="$fjData.box17Data" ></YibiaoCharts2>
                            </div>
                        </div>
                        <ul class="second-list red-card-ul">
                            <li class="warning">
                                <img src="../../assets/img/mark/warning@2x.png" alt="">
                                敏感信息
                                <p class="strong">443</p>
                            </li>
                            <li>邓老凉茶在凉茶巨头夹缝中迷失 同仁堂等遭</li>
                            <li>凉茶风光不再:负面新闻频发 高糖饮品销售</li>
                            <li>凉茶怎么“凉”的:潜规则、边缘化、互撕……_西药</li>
                            <li>申请挂牌新三板 邓老凉茶年销售收入不及行业龙头2%</li>
                        </ul>
                    </div>
                    <div class="box3">
                        <div class="name">负面舆情应对说明</div>
                        <div class="box3-echart">
                            <lineM1 id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM1>
                        </div>
                    </div>
                    <div class="box4">
                        <div class="name">舆情处理建议</div>
                        <div class="box4-echart">
                            <Leida2Echarts :colorList="$fjData.colorList" :myData="$fjData.box19Data" ></Leida2Echarts>
                        </div>
                        <div class="box4-desc">鉴于数据搜集显示负面新闻曝光量不足，
                            没有形成爆点和舆论热点，不需要过度采取媒体公关和舆论反击，否则容易造成二次传播，
                            增加负面传播强度及扩散时间，预计6-7周后可回归平静</div>
                    </div>
                </div>
            </div>
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
                    <div class="fourth-title">品牌需求图谱</div>
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
import DefaultPage from "../../layouts/DefaultPage";
import ThirdLine from "./components/Benchmark"
import Colourfol from "./base/Colourfol"
import Details from "./components/Details"
import Yuanhuan1 from '../../components/echarts/common/Yuanhuan1';
import LeidaEcharts from '../../components/echarts/common/LeidaEcharts';
import barEcharts from '../../components/echarts/common/barEcharts';
import YibiaoCharts2 from '../../components/echarts/common/YibiaoCharts2';
import lineM from '../../components/echarts/common/lineM';
import lineM1 from '../../components/echarts/common/lineM1';
import Leida2Echarts from '../../components/echarts/common/Leida2Echarts';
import barM from '../../components/echarts/common/barM';
import Target from "./base/Target"
import ShowTotal from "./components/ShowTotal"
export default {
    name:"index",
    components:{Target,ShowTotal,barM,lineM1,DefaultPage,ThirdLine,Colourfol,Details,Yuanhuan1,LeidaEcharts,barEcharts,YibiaoCharts2,lineM,Leida2Echarts},
}
</script>

<style scoped lang="scss">
 .mark-content{
     padding: 0 24px 24px 24px;

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

     .second-line{
         display: flex;
         flex-direction: column;
         width: 100%;
         height: 838px;
         padding: 24px;
         box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
         border-radius: 8px;
         opacity: 0.8;
         border: 1px solid #FFFFFF;
         background: url("../../assets/img/mark/colourfol.png") no-repeat center center / 1100% 838px;
        .title{
            height: 24px;
            margin-bottom: 24px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 24px;
        }
        .second-content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .box1,.box2,.box3,.box4{
                width: calc(50% - 12px);
                padding: 16px;
                margin-bottom: 24px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
                .name{
                    height: 24px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 24px;
                }
            }
            .box1,.box2{
                height: 328px;
            }  
            .box3,.box4{
                height: 390px;
            }
            .box1,.box3{
                .box1-echart,.box3-echart{
                    width: 100%;
                    height: calc(100% - 24px);
                }
            }
            .box2{
                display: flex;
                justify-content: space-between;
                .box2-left{
                    width: calc(100% - 260px);
                    height: 100%;
                    .box2-echart{
                        width: 100%;
                        height: calc(100% - 24px);
                    }
                }
                .second-list{
                    width: 260px;
                    >li{
                        height: 56px;
                        margin-bottom: 4px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        &:first-child{
                            // position: relative;
                            background: rgba(252,128,159,.2);
                            color: #FB343E;
                            &:before{
                                display: none;
                            }
                            img{
                                // position: absolute;
                                // top: 16px;
                                // left: 16px;
                                width: 24px;
                                height: 24px;
                            }
                            .strong{
                                margin-left: 8px;
                                font-size: 32px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                            }
                        }
                    }
                }
            }
            .box4{
                .box4-echart{
                    width: 100%;
                    height: calc(100% - 88px);
                }
                .box4-desc{
                    height: 64px;
                    font-size: 14px;
                    color: #636E95;
                    line-height: 22px;
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
             box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
             border-radius: 8px;
             .fourth-title{
                height: 24px;
                margin-bottom: 16px;
                font-size: 16px;
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