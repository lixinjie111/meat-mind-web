<template>
  <div class="negative-content">
      <div class="ng-title">
          舆情综合指数
        <Poptip popper-class="saas-poptip" placement="right-start">
            <i class="iconfont iconguanyu tip-icon"></i>
            <div slot="content">
                <div class="soi"></div>
                <div class="soidesc"></div>
            </div>
        </Poptip>
      </div>
      <div class="ng-sub-title">
          将舆情综合指数（SOI）归一化处理后的舆情事件分布散点图：散点大小表示该舆情信息当前影响力指数。
      </div>
      <div class="echarts-data-desc">
          1.00>SOI>0.50视为营销机会，0.50>SOI>-0.50视为正常舆情，-0.50>SOI>-1.00视为风险公关事件，点击单个事件可以查看舆情传播链路解构详情分析及相应策略。
      </div>
      <div class="scatter-echarts">
        <ScatterEcharts id="scatter" :colorList="$linData.colorList"></ScatterEcharts>
      </div>
      <div class="cur-value">
          <div class="cur-left">
              <div class="cur-l-title">
                  <p>新浪财经</p>
                  <div class="cur-l-status">
                      <span>风险</span>
                  </div>
                  <div class="cur-l-data">
                      <i class="iconfont iconxiajiang"></i>
                      <span>-0.98%</span>
                  </div>
              </div>
              <p>和其正在凉茶巨头夹缝中迷失，同仁堂与邓老凉茶遭多重考验</p>
              <ul class="cur-l-target">
                  <li>自有品牌相关</li>
                  <li>紧急事件</li>
              </ul>
          </div>
          <div class="cur-right">
              <div class="cur-r-title">策略建议</div>
              <p>跟踪行业趋势和竞品动向；</p>
              <p>推广药企跨界凉茶品牌的产品优势。</p>
          </div>
      </div>
      <div class="view-container">
          <div class="graph-echarts">
              <div class="gh-echarts-l">
                  <p>传播关系</p>
                  <span>舆论场关系图展示，溯源舆情关键节点</span>
                  <div class="gh-echarts-view">
                      <graphEcharts id="graph" :graphDatas="$linData.graphData" :colorList="$linData.colorList"></graphEcharts>
                  </div>
              </div>
              <div class="gh-echarts-r">
                  <p>主要传播链路</p>
                  <span>解构单一舆情事件传播链路核心参与者</span>
                  <div class="tree-echarts-view">
                    <treeEcharts id="tree" :colorList="$linData.colorList"></treeEcharts>
                  </div>
              </div>
          </div>
          <div class="graph-echarts-sub">
              <div class="gh-echarts-sl">
                  <div class="sub-top">
                    <div class="sub-index-l">
                        <p>舆情关键传播点1</p>
                        <span>2021/1/22  15:03:09</span>
                        <div class="gh-sub-desc">【百度百家号】账号“安安科普”转发该篇新浪财经文章；</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEcharts1 id="graph2" :graphDatas="$linData.graphData1" :curColor="$linData.colorList[1]"></graphEcharts1>
                    </div>
                  </div>
                  <div class="sub-bot">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc">该账号影响力较小，公信度不高，无需回应，过度反击会引发负面舆论发酵。</div>
                  </div>
              </div>
              <div class="gh-echarts-sm">
                  <div class="sub-top">
                    <div class="sub-index-l">
                        <p>舆情关键传播点2</p>
                        <span>2021/1/22  19:36:13</span>
                        <div class="gh-sub-desc">【知乎】用户“疯狂中医”创建知乎热问：如何评价邓老跌出《2020五大凉茶品牌口碑榜》？</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEcharts2 id="graph3" :graphDatas="$linData.graphData" :curColor="$linData.colorList[2]"></graphEcharts2>
                    </div>
                  </div>
                  <div class="sub-bot">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc">该账号影响力较小，公信度不高，无需回应，过度反击会引发负面舆论发酵。</div>
                  </div>
              </div>
              <div class="gh-echarts-sr">
                  <div class="sub-top">
                    <div class="sub-index-l">
                        <p>舆情关键传播点3</p>
                        <span>2021/1/23  11:31:55</span>
                        <div class="gh-sub-desc">【抖音】账号“探店北上广”发布“邓老凉茶在京开ins风国潮店”的短视频；</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEcharts3 id="graph4" :graphDatas="$linData.graphData" :curColor="$linData.colorList[3]"></graphEcharts3>
                    </div>
                  </div>
                  <div class="sub-bot">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc">该账号影响力较小，公信度不高，无需回应，过度反击会引发负面舆论发酵。</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import ScatterEcharts from "../../../components/echarts/common/scatter/scatterEcharts"
import graphEcharts from "../../../components/echarts/common/graph/graphEcharts"
import graphEcharts1 from "../../../components/echarts/common/graph/graphEcharts1"
import graphEcharts2 from "../../../components/echarts/common/graph/graphEcharts2"
import graphEcharts3 from "../../../components/echarts/common/graph/graphEcharts3"
import treeEcharts from "../../../components/echarts/common/tree/treeEcharts"
export default {
    name:"NewEcharts",
    components:{ScatterEcharts,graphEcharts,graphEcharts1,graphEcharts2,graphEcharts3,treeEcharts}
}
</script>

<style scoped lang="scss">
.negative-content{
    .ng-title{
        height: 26px;
        margin-bottom: 4px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        line-height: 26px;
        .soi{
            width: 194px;
            height: 24px;
            margin-bottom: 8px;
            background: url("../../../assets/img/mark/soi@2x.png") no-repeat center center / 100% 100%;
        }
        .soidesc{
            width: 332px;
            height: 90px;
            background: url("../../../assets/img/mark/soidesc@2x.png") no-repeat center center / 100% 100%;
        }
    }

    .ng-sub-title{
        height: 22px;
        margin-bottom: 4px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        line-height: 22px;
    }

    .echarts-data-desc{
        height: 22px;
        margin-bottom: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2373FF;
        line-height: 22px;
    }

    .scatter-echarts{
        width: 100%;
        height: 450px;
    }

    .cur-value{
        display: flex;
        height: 114px;
        padding: 16px;
        background: #FEDFE1;
        border-radius: 4px 4px 0px 0px;
        .cur-left{
            width: 50%;
            border-right: 1px solid #FFFFFF;
            .cur-l-title{
                display: flex;
                align-items: center;
                margin-bottom: 4px;
                >p{
                    height: 24px;
                    margin-right: 8px;
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FF4C60;
                    line-height: 24px;
                }
                .cur-l-status{
                    width: 44px;
                    height: 24px;
                    padding: 1px 8px;
                    background: rgba(255, 76, 96, 0.2);
                    border-radius: 4px;
                    >span{
                        display: inline-block;
                        height: 22px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #FF4C60;
                        line-height: 22px;
                    }
                }
                .cur-l-data{
                    margin-left: auto;
                    margin-right: 11px;
                    .iconfont{
                        width: 10px;
                        height: 10px;
                        margin-right: 2px;
                        font-size: 10px;
                        color:#FF4C60
                    }
                    >span{
                        height: 18px;
                        font-size: 12px;
                        font-family: HelveticaNeue;
                        color: #FF4C60;
                        line-height: 18px;
                    }
                }
            }

            >p{
                height: 22px;
                margin-bottom: 8px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                line-height: 22px;
            }

            .cur-l-target{
                display: flex;
                list-style: none;
                >li{
                    height: 24px;
                    padding: 1px 8px;
                    margin-right: 12px;
                    background: rgba(255,255,255,.5);
                    border-radius: 4px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                }
            }
        }

        .cur-right{
            width: 50%;
            padding-left: 15px;
            .cur-r-title{
                height: 24px;
                margin-bottom: 4px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
            }
            >p{
                margin-bottom: 2px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                line-height: 22px;
            }
        }
    }

    .view-container{
         border: 1px solid #ECEFF8;
        .graph-echarts{
            display: flex;
            height: 300px;
            padding: 16px;
            border-bottom: 1px solid #ECEFF8;
            .gh-echarts-l,.gh-echarts-r{
                width: 50%;
                >p{
                    height: 22px;
                    margin-bottom: 4px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;
                }
                >span{
                    display: inline-block;
                    height: 18px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    line-height: 18px;
                }
                .gh-echarts-view,.tree-echarts-view{
                    height: 228px;
                }
            }

            .gh-echarts-l{
                padding-right: 16px;
                border-right: 1px solid #ECEFF8;
            }

            .gh-echarts-r{
                padding-left: 16px;
            }
        }

        .graph-echarts-sub{
            display: flex;
            height: 260px;
            padding: 16px;
            .gh-echarts-sl,.gh-echarts-sm,.gh-echarts-sr{
                .gh-sub-desc{
                   font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    line-height: 18px; 
                }
                .sub-top{
                    display: flex;
                    .sub-index-l{
                        width: 50%;
                        height: 150px;
                        >p{
                            height: 22px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #242F57;
                            line-height: 22px;
                        }
                        >span{
                            display: inline-block;
                            height: 18px;
                            margin-bottom: 6px;
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636E95;
                            line-height: 18px;
                        }
                    }
                    .sub-index-r{
                        width: 50%;
                        height: 140px;
                    }
                }

                .sub-bot{
                    height: 80px;
                    >p{
                        height: 22px;
                        margin-bottom: 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        line-height: 22px;
                    }
                }
            }

            .gh-echarts-sl{
                padding-right: 16px;
                border-right: 1px solid #ECEFF8;
            }
            .gh-echarts-sm{
                padding:0 16px;
                border-right: 1px solid #ECEFF8;
            }
            .gh-echarts-sr{
                padding-left: 16px;
            }

        }
    }
}


</style>