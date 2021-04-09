<template>
  <div class="negative-content">
      <div class="ng-title">
          舆情综合指数
        <Poptip popper-class="saas-poptip" trigger="hover" placement="right">
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
          1.00>SOI>0.50视为营销机会，0.50>=SOI>=-0.50视为正常舆情，-0.50>SOI>-1.00视为风险公关事件，点击单个事件可以查看舆情传播链路解构详情分析及相应策略。
      </div>
      <div class="scatter-echarts">
        <ScatterEcharts v-if="flag" id="scatter" @changeSeries="changeSeries" :colorList="$linData.scatterData.colorList" :scatterData="$linData.scatterData" :xData="xData" :starr="starr" :chance="chance" :risk="risk" :selectItem="selectItem"></ScatterEcharts>
      </div>
      <div class="cur-value" :class="[detailData.status==3?'red':'green']">
          <div class="cur-left">
              <div class="cur-l-title" :class="[detailData.status==3?'risk':'chance']">
                  <p>{{detailData.title}}</p>
                  <div class="cur-l-status" :class='[detailData.status==3?"status1":"status2"]'>
                      <span>{{seriesName}}</span>
                  </div>
                  <div class="cur-l-data">
                      <!-- <i class="iconfont iconxiajiang"></i> -->
                      <!-- <span>-0.98%</span> -->
                  </div>
              </div>
              <p>{{detailData.content}}</p>
              <ul class="cur-l-target">
                  <li v-for="(item,index) in detailData.tags" :key="index">{{item}}</li>
              </ul>
          </div>
          <div class="cur-right">
              <div class="cur-r-title">策略建议</div>
              <p v-for="(item,index) in detailData.suggestion" :key="index">{{item}}</p>
          </div>
      </div>
<!--       <div class="cur-value green" v-if="seriesName=='机会'">
          <div class="cur-left">
              <div class="cur-l-title chance">
                  <p>人民网</p>
                  <div class="cur-l-status status2">
                      <span>机会</span>
                  </div>
                  <div class="cur-l-data">
                      <i class="iconfont iconshangsheng"></i>
                      <span>+0.77%</span>
                  </div>
              </div>
              <p>【人民网】凉茶“红罐之争”，加多宝广告停用王老吉获赔300万</p>
              <ul class="cur-l-target">
                  <li>行业相关</li>
                  <li>非紧急事件</li>
                  <li>品牌口碑提升机会</li>
              </ul>
          </div>
          <div class="cur-right">
              <div class="cur-r-title">策略建议</div>
              <p>紧跟凉茶行业热度，提高自有品牌曝光和品牌口碑；</p>
          </div>
      </div> -->
      <div class="view-container">
          <div class="graph-echarts">
              <div class="gh-echarts-l">
                  <p>传播关系</p>
                  <span>舆论场关系图展示，溯源舆情关键节点</span>
                  <div class="gh-echarts-view">
                    <graphEcharts v-if="seriesName=='风险'&&detailFlag" id="graph" :graphDatas="$linData.graphData" :detail="detailData" :colorList="$linData.colorList"></graphEcharts>
                    <graphEchartsChance v-if="seriesName=='机会'&&detailFlag" id="graph11" :graphDatas="$linData.graphDataChance" :detail="detailData" :colorList="$linData.colorList"></graphEchartsChance>
                  </div>
              </div>
              <div class="gh-echarts-r">
                  <p>主要传播链路</p>
                  <span>解构单一舆情事件传播链路核心参与者</span>
                  <div class="tree-echarts-view">
                    <treeEcharts v-if="detailFlag" id="tree" :colorList="$linData.colorList" :detail="detailData"></treeEcharts>
                  </div>
              </div>
          </div>
          <div class="graph-echarts-sub">
              <div class="gh-echarts-sl">
                  <div class="sub-top">
                    <div class="sub-index-l">
                        <p>舆情关键传播点1</p>
                        <!-- <span>2021/1/22  15:03:09</span> -->
                        <!-- <div class="gh-sub-desc">【百度百家号】账号“安安科普”转发该篇新浪财经文章；</div> -->
                        <span v-if="detailData.subPublicList">{{detailData.subPublicList[0].createTime}}</span>
                        <div v-if="detailData.subPublicList" class="gh-sub-desc">{{detailData.subPublicList[0].content}}</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEcharts1 v-if="seriesName=='风险'&&detailFlag" id="graph2" :graphDatas="$linData.graphData1" :detail="detailData"  :curColor="$linData.colorList[1]"></graphEcharts1>
                        <graphEchartsChance1 v-if="seriesName=='机会'&&detailFlag" id="graph22" :graphDatas="$linData.graphDataChance1"  :detail="detailData" :curColor="$linData.colorList[1]"></graphEchartsChance1>
                    </div>
                  </div>
                  <div class="sub-bot" v-if="detailData.subPublicList">
                      <p>舆情应对策略建议：</p>
                      <!-- <div class="gh-sub-desc">该账号影响力较小，公信度不高，无需回应，过度反击会引发负面舆论发酵。</div> -->
                      <div class="gh-sub-desc" v-for="(item,index) in detailData.subPublicList[0].suggestion" :key="index">{{item}}</div>
                  </div>
              </div>
              <div class="gh-echarts-sm">
                  <div class="sub-top">
                    <div class="sub-index-l" v-if="detailData.subPublicList">
                        <p>舆情关键传播点2</p>
                        <span>{{detailData.subPublicList[1].createTime}}</span>
                        <div class="gh-sub-desc">{{detailData.subPublicList[1].content}}</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEcharts2 v-if="seriesName=='风险'&&detailFlag" id="graph3" :graphDatas="$linData.graphData" :detail="detailData" :curColor="$linData.colorList[2]"></graphEcharts2>
                        <graphEchartsChance2 v-if="seriesName=='机会'&&detailFlag" id="graph33" :graphDatas="$linData.graphDataChance"  :detail="detailData" :curColor="$linData.colorList[2]"></graphEchartsChance2>
                    </div>
                  </div>
                  <div class="sub-bot" v-if="detailData.subPublicList">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc" v-for="(item,index) in detailData.subPublicList[1].suggestion" :key="index">{{item}}</div>
                  </div>
              </div>
              <div class="gh-echarts-sr">
                  <div class="sub-top">
                    <div class="sub-index-l" v-if="detailData.subPublicList">
                        <p>舆情关键传播点3</p>
                        <span>{{detailData.subPublicList[2].createTime}}</span>
                        <div class="gh-sub-desc">{{detailData.subPublicList[2].content}}</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEcharts3 v-if="seriesName=='风险'&&detailFlag" id="graph4" :graphDatas="$linData.graphData" :detail="detailData"  :curColor="$linData.colorList[3]"></graphEcharts3>
                        <graphEchartsChance3 v-if="seriesName=='机会'&&detailFlag" id="graph44" :graphDatas="$linData.graphDataChance" :detail="detailData" :curColor="$linData.colorList[3]"></graphEchartsChance3>
                    </div>
                  </div>
                  <div class="sub-bot" v-if="detailData.subPublicList">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc" v-for="(item,index) in detailData.subPublicList[2].suggestion" :key="index">{{item}}</div>
                  </div>
              </div>
          </div>
      </div>
<!--       <div class="view-container" v-show="seriesName=='机会'">
          <div class="graph-echarts">
              <div class="gh-echarts-l">
                  <p>传播关系</p>
                  <span>舆论场关系图展示，溯源舆情关键节点</span>
                  <div class="gh-echarts-view">
                      <graphEchartsChance v-if="seriesName=='机会'" id="graph11" :graphDatas="$linData.graphDataChance" :colorList="$linData.colorList"></graphEchartsChance>
                  </div>
              </div>
              <div class="gh-echarts-r">
                  <p>主要传播链路</p>
                  <span>解构单一舆情事件传播链路核心参与者</span>
                  <div class="tree-echarts-view">
                    <treeEcharts1 v-if="seriesName=='机会'" id="tree2" :colorList="$linData.colorList"></treeEcharts1>
                  </div>
              </div>
          </div>
          <div class="graph-echarts-sub">
              <div class="gh-echarts-sl">
                  <div class="sub-top">
                    <div class="sub-index-l">
                        <p>舆情关键传播点1</p>
                        <span>2021/1/22  15:03:09</span>
                        <div class="gh-sub-desc">【知乎】账号“猪猪雪源”创建知乎热问：凉茶两大品牌之争，留给后来者的机会还有多少？</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEchartsChance1 v-if="seriesName=='机会'" id="graph22" :graphDatas="$linData.graphDataChance1" :curColor="$linData.colorList[1]"></graphEchartsChance1>
                    </div>
                  </div>
                  <div class="sub-bot">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc">该知乎问题探讨行业格局，可见消费者对各大品牌的产品特点和品牌地位的认知是模糊的；
建议创建知乎问题：邓老品牌的成长之路，细数品牌发展和成功背后的技术积累，增强品牌可信度，提升品牌曝光度；</div>
                  </div>
              </div>
              <div class="gh-echarts-sm">
                  <div class="sub-top">
                    <div class="sub-index-l">
                        <p>舆情关键传播点2</p>
                        <span>2021/1/22  19:36:13</span>
                        <div class="gh-sub-desc">【微博】账号“犀牛财经”发布《中国十大凉茶品牌》的内容；（邓老排名第7）</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEchartsChance2 v-if="seriesName=='机会'" id="graph33" :graphDatas="$linData.graphDataChance" :curColor="$linData.colorList[2]"></graphEchartsChance2>
                    </div>
                  </div>
                  <div class="sub-bot">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc">该微博带来8000+的转发和500+的评论；建议邓老官方微博开启一个#谁才是中国凉茶的TOP玩家#的热门话题，参与消费者的讨论，提升品牌认知度；</div>
                  </div>
              </div>
              <div class="gh-echarts-sr">
                  <div class="sub-top">
                    <div class="sub-index-l">
                        <p>舆情关键传播点3</p>
                        <span>2021/1/23  11:31:55</span>
                        <div class="gh-sub-desc">【小红书】多个账号发布“凉茶如何搭配美食”相关话题的笔记；</div>
                    </div>
                    <div class="sub-index-r">
                        <graphEchartsChance3 v-if="seriesName=='机会'" id="graph44" :graphDatas="$linData.graphDataChance" :curColor="$linData.colorList[3]"></graphEchartsChance3>
                    </div>
                  </div>
                  <div class="sub-bot">
                      <p>舆情应对策略建议：</p>
                      <div class="gh-sub-desc">这些笔记内容讨论了消费者吃各类美食时搭配的凉茶品牌，热度中等，对品牌口碑影响较小；
建议保持事件关注，现阶段无需做出回应</div>
                  </div>
              </div>
          </div>
      </div> -->
  </div>
</template>

<script>
import ScatterEcharts from "../../../components/echarts/common/scatter/scatterEcharts"
import graphEcharts from "../../../components/echarts/common/graph/graphEcharts"
import graphEcharts1 from "../../../components/echarts/common/graph/graphEcharts1"
import graphEcharts2 from "../../../components/echarts/common/graph/graphEcharts2"
import graphEcharts3 from "../../../components/echarts/common/graph/graphEcharts3"
import graphEchartsChance from "../../../components/echarts/common/graph/graphEcharts"
import graphEchartsChance1 from "../../../components/echarts/common/graph/graphEcharts1"
import graphEchartsChance2 from "../../../components/echarts/common/graph/graphEcharts2"
import graphEchartsChance3 from "../../../components/echarts/common/graph/graphEcharts3"
import treeEcharts from "../../../components/echarts/common/tree/treeEcharts"
import treeEcharts1 from "../../../components/echarts/common/tree/treeEcharts1"
import api from "@/utils/api"
export default {
    name:"NewEcharts",
    components:{ScatterEcharts,graphEcharts,graphEcharts1,graphEcharts2,graphEcharts3,graphEchartsChance,graphEchartsChance1,graphEchartsChance2,graphEchartsChance3,treeEcharts,treeEcharts1},
    data(){
        return {
            flag:false,
            selectItem:{},
            seriesName:'风险',
            xData:[],
            starr:[],
            chance:[],
            risk:[],
            detailData:{},
            detailFlag:false
        }
    },
    methods:{
        changeSeries(params){
            this.seriesName = params.seriesName
            this.detailFlag = false
            this.getDetail(params.data.id)
        },
        getListA(){
            api.getMarkDetail({id:"200027"}).then(res=>{
                console.log("res",res)
            }).catch(err=>{
                console.log('catch',err)
            })
        },
        async getList(){
            try{
                let res = await api.getMarkList({})
                if(res.code == 200){
                    this.starr=[]
                    this.chance=[]
                    this.risk=[]
                    this.xData = res.data.timeScales
                    res.data.timeScales.forEach(ele=>{
                        let ary = res.data.list.filter(item => item.time==ele)
                        let arr1 = ary.find(element => element.status==1)
                        let arr2 = ary.find(element => element.status==2)
                        let arr3 = ary.find(element => element.status==3)
                        arr1?this.chance.push({value:arr1.index,content:arr1.content,id:arr1.id}):this.chance.push({value:0,content:""})
                        arr2?this.starr.push({value:arr2.index,content:arr2.content,id:arr2.id}):this.starr.push({vlaue:0,content:""})
                        arr3?this.risk.push({value:arr3.index,content:arr3.content,id:arr3.id}):this.risk.push({value:0,content:''})
                    })
                    this.selectItem = res.data.list.filter(item => item.selectFlag==1)[0]
                    this.seriesName = this.selectItem.status==1?'机会':this.selectItem.status==2?'正常':'风险'
                    this.flag=true
                }else{
                    this.$Message.error(err.msg)
                } 
            }catch(err){
                this.$Message.error(err.msg)
            }
        },
       async getDetail(id){
            let params = {
                id:id
            }   
            try{
                let res = await api.getMarkDetail(params)
                if(res.code==200){
                    this.detailData = res.data
                    this.detailFlag=true
                }else{
                    this.$Message.error(err.msg)
                }                
            }catch(err){
                    this.$Message.error(err.msg)
            }
            // api.getMarkDetail(params).then(res=>{
            //     if(res.code==200){
            //         this.detailData = res.data
            //     }else{
            //         this.$Message.error(err.msg)
            //     }
            // }).catch(err=>{
            //     this.$Message.error(err.msg)
            // })
        }
    },
    mounted(){
        this.getListA()
        Promise.all([this.getList()]).then(res=>{
            this.getDetail(this.selectItem.id)
        })
    }    
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
        margin-bottom: 16px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2373FF;
        line-height: 22px;
    }

    .scatter-echarts{
        width: 100%;
        height: 450px;
        margin-bottom: 16px;
    }

    .cur-value{
        display: flex;
        height: 114px;
        padding: 16px;
        border-radius: 8px 8px 0px 0px;
        &.red{
            background: #FEDFE1;
        }
        &.green{
            background: #D8F3E7;
        }
        .cur-left{
            width: 50%;
            border-right: 1px solid #FFFFFF;
            .cur-l-title{
                display: flex;
                align-items: center;
                margin-bottom: 4px;
                &.chance{
                    color: #08BD6C;
                }
                &.risk{
                    color: #FF4C60;
                }
                >p{
                    height: 24px;
                    margin-right: 8px;
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    // color: #FF4C60;
                    line-height: 24px;
                }
                .cur-l-status{
                    // width: 44px;
                    height: 24px;
                    padding: 1px 8px;
                    border-radius: 4px;
                    &.status1{
                        background: rgba(255, 76, 96, 0.2);
                    }
                    &.status2{
                        background: rgba(8, 189, 108, 0.2);
                    }
                    >span{
                        display: inline-block;
                        height: 22px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        // color: #FF4C60;
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
                        // color:#FF4C60
                    }
                    >span{
                        height: 18px;
                        font-size: 12px;
                        font-family: HelveticaNeue;
                        // color: #FF4C60;
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
         border-radius: 0 0 8px 8px;
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