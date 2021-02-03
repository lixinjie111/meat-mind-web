<template>
  <DefaultPage title="媒介画像">
    <div class="media-protrait">
      <div class="m-p-rank">
        <div class="m-p-rank-header">
          <ul class="h-name-list">
            <li :class="{'h-name-active':index==act}" v-for="(item,index) in target" :key="index" @click="targetClick(index)">{{item}}</li>
            <!-- <li>媒介声量排名</li>
            <li>媒介使用时长排名</li>
            <li>媒介口碑排名</li>
            <li>媒介价值贡献排名</li> -->
          </ul>
          <div class="h-right">
            <div class="h-tab">
              <div class="left" :class="{'act':cur==0}" @click="cur=0">类型</div>
              <div class="right" :class="{'act':cur==1}" @click="cur=1">渠道名称</div>
            </div>
            <div class="h-select">
              <Select v-model="model1" style="width: 120px" placeholder="过去3天">
                <Option v-for="item in dateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="m-p-rank-echarts">
            <barL id="box27" :colorList="$lxjData.colorList" :myData="myEData"></barL>
        </div>
      </div>
      <div class="m-p-filter">
          <div class="m-f-line">
              <div class="label">主投平台</div>
              <div class="f-list">
                <div class="f-item" @click="list1Act=index" :class="{'active':index==list1Act}" v-for="(item,index) in list1" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label">领域</div>
              <div class="f-list">
                <div class="f-item" @click="list2Act=index" :class="{'active':index==list2Act}" v-for="(item,index) in list2" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label"><span style="color:#FB343E">*</span>
              价格类型</div>
              <div class="f-list">
                <div class="f-item" @click="list3Act=index" :class="{'active':index==list3Act}" v-for="(item,index) in list3" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
            <div class="m-p-pie">
                <div class="m-pie-title">媒介用户画像</div>
                <div class="m-pie-echarts">
                    <Triple :title1="'性别分布'" :title2="'年龄分布'" :title3="'职业分布'">
                          <PieCaseEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="mid" :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box3Data" roseType="radius"></PieCaseEcharts>
                    </Triple>
                    <Triple :title1="'收入分布'" :title2="'家庭情况'" :title3="'网龄结构'">
                          <PieCaseEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="mid" :colorList="$fjData.colorList" :myData="$fjData.box11Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box12Data"></PieCaseEcharts>
                    </Triple>
                </div>
            </div>
            <div class="m-p-third-module">
                <div class="m-p-t-left">
                    <Full :title="'媒介领域热度排名'">
                      <barL id="box28" :colorList="$lxjData.colorList" :myData="$lxjData.box28Data"></barL>
                    </Full>
                </div>
                <div class="m-p-t-right">
                    <div class="m-p-right-top">
                        <div class="m-p-right-push">
                            <div class="m-p-r-title">触达方案推荐</div>
                            <div>
                                <p>方案一</p>
                                <img src="../../assets/img/mark/douyin.png" alt="">+
                                <img src="../../assets/img/mark/xiaohongshu.png" alt="">+
                                <img src="../../assets/img/mark/kuaishou.png" alt="">
                            </div>
                            <div>
                                <p>方案二</p>
                                <img src="../../assets/img/mark/douyin.png" alt="">+
                                <img src="../../assets/img/mark/weibo.png" alt="">
                            </div>
                        </div>
                        <div class="m-p-right-media">
                            <div class="m-p-r-title">组合媒介曝光量预期 </div>
                            <div class="m-p-r-num">324,343</div>
                            <div class="m-p-r-echarts">
                              <funnel id="box111" :colorList="$lxjData.colorList" :myData="$lxjData.box111Data"></funnel>
                            </div>
                        </div>
                    </div>
                    <div class="m-p-right-bottom">
                        <p>相关指标预期</p>
                        <div>
                            <div style="margin-right:16px"><Card :title="'综合预期CPE'" :colourfol="'blue'" :number="'0.35'"></Card></div>
                            <div><Card :title="'组合互动总数'" :colourfol="'purple'" :number="'427,260'"></Card></div>  
                        </div>
                        <div>
                           <div style="margin-right:16px"><Card :title="'组合粉丝数'" :colourfol="'pink'" :number="'6,968,580'"></Card></div>    
                            <div><Card :title="'组合预算（元）'" :colourfol="'orange'" :number="'29,986'"></Card></div> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-p-last">
                <Half :lTitle="'媒介曝光触达'" :rTitle="'媒介传播效率'">
                  <div class="m-p-last-touch" slot="left"></div>
                  <barL slot="right" id="box29" :colorList="$lxjData.colorList" :myData="$lxjData.box29Data"></barL>
                </Half>
            </div>
      </div>

      <div class="m-p-target">
          <!-- 优化指标 -->
          <div class="m-p-target-title">优化指标</div>
          <Form :model="formTop" label-position="top"  :rules="ruleValidate">
            <Row  :gutter="42">
                <Col span="8">
                  <FormItem label="项目预算（不高于)" prop="budget">
                      <Input v-model="formTop.budget"  placeholder="请输入项目预算(元)"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="优化表现指标" prop="quota">
                        <Select v-model="formTop.quota" placeholder="请选择指标">
                            <Option value="1">组合预期CPE最低</Option>
                            <Option value="2">组合互动数最高</Option>
                            <Option value="3">组合粉丝数最高</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="8"></Col>
            </Row>
           <div class="m-p-target-title">其他限定条件</div>
           <Row  :gutter="42">
                <Col span="8">
                  <FormItem label="单一 KOL 平均互动数不低于">
                      <Input v-model="formTop.kolNum"  placeholder="请输入平均互动数"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem label="单一 KOL 粉丝数不低于">
                      <Input v-model="formTop.kolFs"  placeholder="请输入粉丝数"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="包含 KOL">
                       <Input v-model="formTop.contain"  placeholder="请输入包含 KOL"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="排除 KOL">
                        <Input v-model="formTop.exclude"  placeholder="请输入排除 KOL"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                   <FormItem label="KOL 数量">
                     <Row  :gutter="16">
                       <Col span="12">
                        <Select v-model="formTop.compare" placeholder="请选择类型">
                            <Option value="1">等于</Option>
                            <Option value="2">大于等于</Option>
                            <Option value="3">小于等于</Option>
                            <Option value="4">小于</Option>
                        </Select>
                        </Col>
                        <Col span="12">
                          <Input v-model="formTop.num"  placeholder="请输入数量"></Input>
                        </Col>
                      </Row>
                  </FormItem>
                </Col>
            </Row>
          </Form>
          <div class="btnList">
            <div class="submit">生产组合</div>
            <div class="reset">重置条件</div>
          </div>
          <div class="relative-data">
            暂无相关数据
          </div>
      </div>
      <div class="m-p-kol">
          <img src="../../assets/img/media/kol@2x.png" alt="">
      </div>
    </div>
  </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";
import Triple from "./base/Triple"
import Half from "./base/Half"
import Full from "./base/Full"
import Card from "./base/Card"
import PieCaseEcharts from '../../components/echarts/common/PieCaseEcharts';
import barL from '../../components/echarts/common/barL';
import funnel from '../../components/echarts/common/funnel';
export default {
  name: "index",
  components: { DefaultPage, Triple, Full, Card, Half, PieCaseEcharts, barL, funnel},
  data(){
      return{
          formTop: {
              budget: '',
              quota: '',
              kolNum: '',
              kolFs: '',
              contain: '',
              compare: '',
              num: '',
          },
          ruleValidate: {
              budget: [
                  { required: true, message:'请输入项目预算', trigger: 'blur' }
              ],
              quota: [
                  { required: true, message:' 请选择指标',trigger: 'change' }
              ],
              // kolNum: [
              //     { required: true, trigger: 'blur' }
              // ],
              // kolFs: [
              //     { required: true, trigger: 'blur' }
              // ],
              // contain: [
              //     { required: true, trigger: 'change' }
              // ],
          },
          act:0,
          target:["媒介声量排名","媒介使用时长排名","媒介口碑排名","媒介价值贡献排名"],
          cur:0,
              dateList: [
                    {
                        value: '过去3天',
                        label: '过去3天'
                    },
                    {
                        value: '过去7天',
                        label: '过去7天'
                    },
                    {
                        value: '过去一个月',
                        label: '过去一个月'
                    }
                ],
                model1: '过去3天',
          list1:["哔哩哔哩","抖音","快手","小红书","新浪微博","头条","大众点评","360kr"],
          list1Act:1,
          list2Act:0,
          list3Act:0,
          list2:["不限","才艺技能","财经投资","测评","动画动漫","鬼畜","国潮国创","技术流","家居家装","教育","剧情搞笑",
          "科技数码","旅行","美食","美妆","萌宠","明星","母婴","汽车","情感","三农","生活日常",
          "时尚","舞蹈","艺术文化","个护","园艺","运动健身","奢侈品","新闻资讯","品牌组织","颜值达人","知识科普","番剧","游戏","品牌组织"],
          list3:["按照最低刊例价组合","按照最高刊例价组合"],
          myEData:[],
      }
  },
  created(){
    this.myEData=this.$lxjData.box27Data;
  },
  methods:{
    targetClick(index){
      this.act = index;
      if(index==0){
        this.myEData=this.$lxjData.box27Data;
      }else{
        this.myEData=this.$lxjData[`box27${index-1}Data`];
      }
      console.log(this.myEData)
    }
  }
};
</script>

<style scoped lang="scss">
.media-protrait {
  padding: 0 24px 24px 24px;

  .m-p-rank {
    width: 100%;
    height: 339px;
    margin-bottom: 24px;
    background: url("../../assets/img/media/colourfol.png") no-repeat center
      center / 100% 339px;
    box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    .m-p-rank-header {
      display: flex;
      justify-content: space-between;
      padding: 20px 24px 0;
      .h-name-list {
        display: flex;
        align-items: center;
        margin-top: 4px;
        list-style: none;
        > li {
          height: 22px;
          margin-right: 32px;
          font-size: 14px;
          color: #636e95;
          line-height: 22px;
          cursor: pointer;
          &.h-name-active {
            position: relative;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #2373ff;
            &:after {
              position: absolute;
              top: 30px;
              left: 0;
              content: "";
              width: 100%;
              height: 2px;
              background: #2373ff;
              border-radius: 1px;
            }
          }
        }
      }
      .h-right {
        display: flex;
        cursor: pointer;
        .h-tab {
          display: flex;
          margin-right: 16px;
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          text-align: center;
          .left {
            width: 76px;
            height: 32px;
            border-radius: 8px 0px 0px 8px;
            border: 1px solid #c6cbde;
            color: #636e95;
            line-height: 30px;
                      &.act{
            border: 1px solid #2373ff;
            color: #2373ff;
          }
          }
          .right {
            width: 76px;
            height: 32px;
            border-radius: 0px 8px 8px 0px;
            border: 1px solid #c6cbde;
            color: #636e95;
            line-height: 30px;
                      &.act{
            border: 1px solid #2373ff;
            color: #2373ff;
          }
          }
        }
        .h-select {
        }
      }
    }
    .m-p-rank-echarts {
      width: 100%;
      height: 287px;
      padding: 0 24px;
    }
  }
  .m-p-filter{
    width: 100%;
    // height: 1878px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    opacity: 0.8;
    border: 1px solid;
    border-image: linear-gradient(141deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 1;
    background: url("../../assets/img/media/colourfol.png") no-repeat center center / 100% 100%;
    .m-f-line{
        display: flex;
        width: 100%;
        margin-bottom: 8px;
        .label{
            width: 96px;
            height: 32px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
            line-height: 32px;
        }
        .f-list{
            width: calc(100% - 96px);
            display: flex;
            flex-wrap: wrap;
            .f-item{
                padding: 5px 16px;
                margin-right: 16px;
                margin-bottom: 16px;
                cursor: pointer;
                &.active{
                    background: linear-gradient(135deg, #FF8D0A 0%, #FFA733 100%);
                    box-shadow: 3px 3px 14px 0px rgba(148, 76, 46, 0.2), -3px -3px 14px 0px #FFFFFF, 1px 1px 2px 0px rgba(255, 247, 230, 0.6);
                    border-radius: 16px;
                    >p{
                        color: #FFFFFF;
                    }
                }
                >p{
                    height: 22px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;
                }
            }
        }
    }
    .m-p-pie{
        width: 100%;
        height: 654px;
        padding: 16px;
        margin-bottom: 24px;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #EAEDF7;
        .m-pie-title{
            height: 24px;
            margin-bottom: 16px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            line-height: 24px;
        }
        .m-pie-echarts{
            height: 596px;
        }
    }
    .m-p-third-module{
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        .m-p-t-left{
            width: 50%;
            height: 552px;
            margin-right: 24px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
        }
        .m-p-t-right{
            width: 50%;
            height: 552px;
            .m-p-right-top{
                display: flex;
                justify-content: space-between;
                .m-p-right-push,.m-p-right-media{
                    width: 50%;
                    height: 244px;
                    padding: 16px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;
                    .m-p-r-title{
                        height: 24px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        line-height: 24px;
                    }
                }
                .m-p-right-push{
                    margin-right: 24px;
                    .m-p-r-title{
                        margin-bottom: 16px;
                    }
                    >div{
                        display: flex;
                        align-items: center;
                        margin-bottom: 24px;
                        >p{
                            height: 20px;
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636E95;
                            line-height: 20px;
                        }
                        >img{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            margin: 0 12px;
                        }
                    }
                }
                .m-p-right-media{
                    .m-p-r-title{
                        margin-bottom: 4px;
                    }
                    .m-p-r-num{
                        height: 32px;
                        font-size: 24px;
                        font-family: HelveticaNeue-Medium, HelveticaNeue;
                        font-weight: 500;
                        color: #4D94FF;
                        line-height: 32px;
                    }
                    .m-p-r-echarts{
                        width: 100%;
                        height: 200px;
                        margin-top: -50px;
                    }
                }
            }
            .m-p-right-bottom{
                height: 284px;
                padding: 16px;
                margin-top: 24px;
                background: #FFFFFF;
                border-radius: 8px;
                border: 1px solid #EAEDF7;
                >p{
                    height: 24px;
                    margin-bottom: 16px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 24px;
                }
                >div{
                    display: flex;
                    justify-content: space-between;
                    >div{
                        width: 50%;
                        height: 98px;
                        margin-bottom: 16px;
                    }
                }
            }
        }
    }

    .m-p-last{
        display: flex;
        justify-content: space-between;
        .m-p-last-touch{
          width: 100%;
          height: 210px;
          background: url("../../assets/img/media/touch@2x.png") no-repeat center center / 100% 210px;
        }
    }
  }

  .m-p-target{
    width: 100%;
    padding:24px;
    margin-bottom: 24px;
    background: #FFFFFF;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
    .m-p-target-title{
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
      margin-bottom: 16px;
    }
    .btnList{
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
      .submit{
        width:85px;
        height: 32px;
        font-size: 14px;
        background: #2373FF;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        cursor: pointer;
      }
      .reset{
        border: 1px solid #C6CBDE;
        margin-left: 16px;
        width:85px;
        height: 32px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #636E95;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        box-shadow: 2px 2px 7px 0px rgb(210 213 225 / 80%) inset;
        cursor: pointer; 
      }
    }
    .relative-data{
      border-top:1px solid #EAEDF7;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636E95;
      padding:40px 0;
      padding-bottom: 16px;
      text-align: center;
    }
  }
  .m-p-kol{
    width: 100%;
    img{
      width: 100%;
      display: block;
    }
    // height: 952px;
    // background: #FFFFFF;
    // box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    // border-radius: 8px;
    // background: url("../../assets/img/media/kol@2x.png") no-repeat center center / 100% 100%;
  }
}
</style>