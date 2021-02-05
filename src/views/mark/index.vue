<template>
    <DefaultPage title="品牌画像">
        <div class="mark-content">
            <ul class="new-target">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="first-line">
                <div class="mark-overview">
                    <div class="title">品牌总体概览</div>
                    <div class="box-content">
                        <div class="overview-echart">
                            <div class="total">
                                品牌综合评估
                                <p class="t-number">92</p>
                            </div>
                            <div class="show-echart">
                                <LeidaEcharts :colorList="$fjData.colorList" :myData="$fjData.box14Data" titleText="92"></LeidaEcharts>
                            </div>
                        </div>
                        <ul class="card-list blue-card-ul">
                            <li><div><b>覆盖度：</b>品牌行业市场占有率</div></li>
                            <li><div><b>认可度：</b>品牌对当前目标定位的适配程度</div></li>
                            <li><div><b>匹配度：</b>品牌与目标受众（标签集）的契合度</div></li>
                            <li><div><b>占据力：</b>品牌在消费者心智空间中的行业阶梯</div></li>
                            <li><div><b>忠诚度：</b>品牌的市场口碑好坏及认可度</div></li>
                            <li><div><b>传播度：</b>品牌在全渠道传播中的辐射力（渠道类型）</div></li>
                        </ul>
                    </div>
                </div>
                <div class="tea-trend">
                    <div class="title">2016-2021年中国凉茶产量规模增长</div>
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

export default {
    name:"index",
    components:{barM,lineM1,DefaultPage,ThirdLine,Colourfol,Details,Yuanhuan1,LeidaEcharts,barEcharts,YibiaoCharts2,lineM,Leida2Echarts}
}
</script>

<style scoped lang="scss">
 .mark-content{
     padding: 0 24px 24px 24px;
     
     .new-target{
         display: flex;
         justify-content: space-between;
         height: 148px;
         margin-bottom: 24px;
         >li{
            width: 270px;
            height: 148px;
            background: linear-gradient(225deg, #1C66DE 0%, #98A0F9 100%);
            box-shadow: 2px 4px 10px 0px rgba(41, 59, 149, 0.3);
            border-radius: 8px;
         }
     } 

     .first-line{
         display: flex;
         justify-content: space-between;
         margin-bottom: 24px;
        .mark-overview,.tea-trend{
            width: calc( 50% - 12px);
            height: 460px;
            padding: 24px;
            box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            border: 1px solid #FFFFFF;
            background: url("../../assets/img/mark/colourfol.png") no-repeat center center / 100% 460px;
            .title{
                height: 24px;
                margin-bottom: 24px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
            }
        }
        .mark-overview{
            display: flex;
            flex-direction: column;
            .box-content{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .overview-echart{
                    width: calc(100% - 260px);
                    height: 100%;
                    .total{
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 40px;
                        font-size: 14px;
                        color: #242F57;
                    }
                    .t-number{
                        height: 40px;
                        font-size: 32px;
                        margin-left: 24px;
                        color: #34C724;
                        font-weight: 500;
                        font-family: HelveticaNeue-Medium, HelveticaNeue;
                        line-height: 40px;
                    }
                    .show-echart{
                        height: calc(100% - 40px);
                    }
                }
                .card-list{
                    width: 260px;
                    >li{
                        min-height: 56px;
                        margin-bottom: 6px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                }
            }
        }
        .tea-trend{
            display: flex;
            flex-direction: column;
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

 }
</style>