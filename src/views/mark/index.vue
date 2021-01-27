<template>
    <DefaultPage title="品牌画像">
        <div class="mark-content">
            <div class="first-line">
                <div class="mark-overview">
                    <div class="title">品牌总体概览</div>
                    <div class="box-content">
                        <div class="overview-echart">
                            <div class="total">
                                品牌综合评估
                                <p class="t-number">92</p>
                            </div>
                            <div class="show-echart"></div>
                        </div>
                        <ul class="card-list blue-card-ul">
                            <li><div><b>覆盖度：</b>品牌行业市场占有率</div></li>
                            <li><div><b>认可度：</b>品牌对当前目标定位的适配程度</div></li>
                            <li><div><b>匹配度：</b>品牌与目标受众（标签集）的契合度</div></li>
                            <li><div><b>占据力：</b>占据力：品牌在消费者心智空间中的行业阶梯</div></li>
                            <li><div><b>忠诚度：</b>忠诚度：品牌的市场口碑好坏及认可度</div></li>
                            <li><div><b>传播度：</b>传播度：品牌在全渠道传播中的辐射力（渠道类型）</div></li>
                        </ul>
                    </div>
                </div>
                <div class="tea-trend">
                    <div class="title">2016-2021年中国凉茶产量规模增长</div>
                    <div class="tea-echart"></div>
                </div>
            </div>
            <div class="second-line">
                <div class="title">负面舆情的处理意见</div>
                <div class="second-content">
                    <div class="box1">
                        <div class="name">信息来源占比（%）</div>
                        <div class="box1-echart"></div>
                    </div>
                    <div class="box2">
                        <div class="box2-left">
                            <div class="name">敏感占比图 </div>
                            <div class="box2-echart"></div>
                        </div>
                        <ul class="second-list red-card-ul">
                            <li class="warning">敏感信息
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
                        <div class="box3-echart"></div>
                    </div>
                    <div class="box4">
                        <div class="name">舆情处理建议</div>
                        <div class="box4-echart"></div>
                        <div class="box4-desc">鉴于数据搜集显示负面新闻曝光量不足，
                            没有形成爆点和舆论热点，不需要过度采取媒体公关和舆论反击，否则容易造成二次传播，
                            增加负面传播强度及扩散时间，预计6-7周后可回归平静</div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";
export default {
    name:"index",
    components:{DefaultPage}
}
</script>

<style scoped lang="scss">
 .mark-content{
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
                            background: rgba(252,128,159,.2);
                            color: #FB343E;
                            .strong{
                                margin-left: 8px;
                                font-size: 32px;
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

 }
</style>