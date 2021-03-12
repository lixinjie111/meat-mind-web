<template>
    <div>
      <!--触达用户媒介-->
      <div class="cdyhmj_container">
        <div class="cdyhmj_title_container">
          <div class="cdyhmj_title">
            <span>触达用户媒介</span>
            <Poptip popper-class="saas-poptip" placement="right-start">
              <!-- <i class="iconfont iconguanyuline1 tip-icon"></i> -->
              <img class="gif" src="../../assets/img/user/tip.gif" alt="">
              <div slot="content">
                <p><span>触达能力= 触达率 * 平均接触频率：</span></p>
                <p><span>效果评估原则：</span>目的性原则；方向性原则；针对性原则；可测性原则；科学性原则；引导性原则</p>
                <p><span>效果评估内容：</span>评估对象接触媒介的效果；评估媒介影响传播对象的效果；评估目标实现的效果；评估受众需求满足的效果</p>
                <p><span>效果评估指标：</span>注意、兴趣、情趣、理解、记忆等心理活动的反应程度；接触媒介及信息人数的多寡；对传播媒介的接触频率和信赖程度</p>
              </div>
            </Poptip>
          </div>
          <div class="cdyhmj_title_desc" @click="goMidea">
            <span class="title_desc_txt">查看媒介画像详情</span>
            <img :src="toRIcon" class="toRIcon" />
          </div>
        </div>
        <div class="cdyhmj_content_container">
          <div class="cdyhmj_content_top">
            <div class="cdyhmj_content_top_ri">
              <div class="cdyhmj_content_top_ri_tel">选择投放媒介</div>
              <div class="cal_item_container">
                <div class="cal_item">
                  <div class="cal_item_cal_item">
                    <img :src="toLIcon" class="toLIcon" />
                  </div>
                </div>
                <div :class="['cal_item2', { cal_item21: !choiceObj[it.key] }]" v-for="(it, i) in list" :key="i">
                  <div class="rt_choice">
                    <Checkbox v-model="choiceObj[it.key]" @on-change="(checked)=>changeNews(it.key, checked)"></Checkbox>
                  </div>
                  <div class="logo_container">
                    <img :src="iconConfig[it.icon]" class="logoImg" />
                    <span class="cal_txt">{{it.name}}</span>
                  </div>
                  <div class="txt_area">
                    <div class="txt_area11">触达率</div>
                    <div>投放成本</div>
                  </div>
                  <div class="per_area">
                    <div class="per_area1">{{it.rate}}%</div>
                    <div>¥{{it.cost}}/千人</div>
                  </div>
                </div>
                <div class="cal_item cal_item1">
                  <div class="cal_item_cal_item">
                    <img :src="toRIcon1" class="toLIcon" />
                  </div>
                </div>
              </div>
              <div class="cdyhmj_bom">
                <div class="cdyhmj_bom_lef">
                  已选中
                  <span style="color:#242F57">{{checkedNum}}</span>个
                </div>
                <div class="cdyhmj_bom_rig">
                  <img :src="iconConfig[e.icon]" class="cdyhmj_bom_rig1" v-for="(e, i) in checkedIcons" :key="i"/>
                </div>
              </div>
            </div>
            <div class="cdyhmj_content_top_lef">
              <div class="cdyhmj_content_item item1">自定义媒介投放预算 (元)</div>
              <div class="cdyhmj_content_item item2">
                <div class="input_container">
                  <!-- <span class="input1">￥</span>
                  <span class="inpu2">15,000</span> -->
                  <Input placeholder="￥ 15,000" style="width:100%;"></Input>
                </div>
                <div class="hg_txt"></div>
                <div class="input_container">
                  <!-- <span class="input1">￥</span>
                  <span class="inpu23"></span> -->
                  <Input placeholder="￥ 25,000" style="width:100%;"></Input>
                </div>
              </div>
              <div class="cdyhmj_content_item item3">目标客群</div>
              <div class="cdyhmj_content_item item4">
                <!-- <img :src="inputIcon" class="inputIcon" /> -->
                <Select v-model="mbValue" style="width:100%;">
                    <Option v-for="item in mubiaoList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
              <div class="cdyhmj_content_item item1">营销关键词</div>
              <div class="cdyhmj_content_item item5">
                <div class="item_xtt">青春</div>
                <div class="item_xtt">活力</div>
              </div>
            </div>

          </div>
          <div class="cdyhmj_content_bom">
            <div class="cdyhmj_content_bom_lef">
              <div class="cdyhmj_content_bom_lef_top">触达用户投放策略建议</div>
              <div class="cdyhmj_content_bom_lef_bom">
                <div class="echarts1 echarts1box">
                  <PieEcharts1 :colorList="$fjData.colorList" :myData="chuData"></PieEcharts1>
                  <!-- <lineM id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM> -->
                </div>
                <div class="echarts1 echarts2box">
                  <div class="echarts11">
                    <div class="echarts111">建议投放金额</div>
                    <div class="echarts112" >￥{{money}}</div>
                  </div>
                  <div class="echarts12">
                    <div class="echarts121">目标客群触达率</div>
                    <div class="echarts122" >{{targetRate}}%</div>
                  </div>
                </div>
                <div class="echarts1 ec1">
                  <div class="echarts13">建议投放时间段</div>
                  <template v-for="(it, i) in _list" >
                    <div class="echarts15" v-if="choiceObj[it.key]" :key="i">
                      <div class="echarts142">
                        <div :class="iconClassObj[i]" :style="{ background: $fjData.colorList[i]}"></div>
                        <div class="ech_txt">{{it.name}}</div>
                        <div class="ech_time">{{it.timeRange}}</div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="cdyhmj_content_bom_rig">
              <div class="cdyhmj_content_bom_rig_top">优化投放方案推荐</div>
              <div class="cdyhmj_content_bom_rig_bom">
                <img :src="iconConfig.yhtIcon" class="yhtIcon" alt srcset />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import PieEcharts1 from '../../components/echarts/common/pie/PieEcharts1';
const arr = [
  {name: '头条', value: 78, rate: '51', cost: '2500', timeRange: '20:00 - 21:00', key: 'choice1', icon: 'ttIcon' },
  {name: '小红书', value: 45, rate: '46', cost: '2300', timeRange: '19:00 - 20:30', key: 'choice2', icon: 'xhsIcon' },
  {name: '快手', value: 55, rate: '43', cost: '2300', timeRange: '22:00 - 22:30', key: 'choice12', icon: 'ksIcon'},
]
export default {
  components: {
   PieEcharts1
  },
  name: "index",
  data() {
    return {
      toRIcon: require("../../assets/img/yhhx/toR.png"),
      toLIcon: require("../../assets/img/yhhx/toL.png"),
      toRIcon1: require("../../assets/img/yhhx/toR1.png"),
      list: arr,
      choiceObj: {
        choice1:false,
        choice2:true,
        choice12:true,
      },
      iconClassObj: ['ech_Icon', 'ech_Icon2', 'ech_Icon1'],
      mbValue:'bjsbz',
      chuData:this.$fjData.box0Data,
      mubiaoList:[
        {
          label:'北京上班族',
          value:'bjsbz'
        },
        {
          label:'研学青年',
          value:'yxqn'
        },
        {
          label:'企业高管',
          value:'qygg'
        },
        {
          label:'北漂一族',
          value:'bpyz'
        },
        {
          label:'自由职业',
          value:'zyzz'
        }
      ],
      iconConfig: {
        ttIcon:require("../../assets/img/yhhx/tt.png"),
        xhsIcon:require("../../assets/img/yhhx/xhs.png"),
        ksIcon:require("../../assets/img/yhhx/ks.png"),
        yhtIcon: require("../../assets/img/yhhx/yht.png"),
      },
    };
  },
  mounted() {
  },
  methods: {
    changeNews(key, checked){
      this.choiceObj[key] = checked;
      const keys = ['choice1', 'choice2', 'choice12'];
      const name = []
      const value = []
      keys.forEach((it)=>{
        if(this.choiceObj[it]){
          const cur = arr.find(e=>e.key === it)
          name.push(cur.name)
          value.push(cur.value)
        }
      })
      this.chuData = { name, value }
    },
    goMidea(){
      this.$router.push({
        path:"/media"
      });
    },
  },
  computed:{
    _list(){
      return this.list.filter(e=>this.choiceObj[e.key])
    },
    checkedIcons(){
      return this.list.filter(e=>this.choiceObj[e.key])
    },
    checkedNum(){
      return Object.values(this.choiceObj).filter(e=>e).length
    },
    targetRate(){
      const len = Object.values(this.choiceObj).filter(e=>e).length
      if(len === 3){
        return '99'
      }else if(len === 2){
        return '89'
      }else if(len === 1){
        return '65'
      }else {
        return  ''
      }
    },
    money(){
      const len = Object.values(this.choiceObj).filter(e=>e).length
      if(len === 3){
        return '23,000'
      }else if(len === 2){
        return '19,000'
      }else if(len === 1){
        return '11,000'
      }else {
        return  ''
      }
    },
  },
};
</script>
<style lang="scss">
.mark-detail-anchor{
    position: relative;
    width:100%;
    .ivu-affix{
        left:288px !important;
        top:48px  !important;
        z-index: 1001;
    }
}
.ivu-anchor-wrapper{
    overflow: visible;
    padding-left: 0;
    margin-left: 0;
    max-height: 36px !important;
    height: 36px;
    background: #fff;
    border-bottom:1px solid #DEE2EE;
    .ivu-anchor{
        height: 100%;
        display: flex;
        padding-left: 0;
        .ivu-anchor-ink{
            width: 100%;
            height: 1px;
            bottom: 0;
            top:auto;
            &::before{
                display: none;
                background-color: #DEE2EE;
            }
        }
        .ivu-anchor-link{
            padding: 0;
            margin-right: 32px;
            height: 36px;
            line-height: 36px;
        }
        .ivu-anchor-ink-ball{
            display: none;
            width: 84px;
            height: 2px;
            background-color:#2373FF;
            border: none;
            border-radius: unset;
        }
        .ivu-anchor-link-active{
            border-bottom: 2px solid #2373FF;
            >.ivu-anchor-link-title{
                color:#2373FF;
            }
        }
        .ivu-anchor-link-title{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
        }
    }
}
</style>
<style scoped lang="scss">
.cdyhmj_container {
  width: 100%;
  min-height: 592px;
  background: #ffffff;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 12px;
  border: 1px solid #EAEDF7;
  margin-top: 24px;
  padding: 20px 24px 24px 24px;
  box-sizing: border-box;
  .cdyhmj_title_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 24px;
    .cdyhmj_title {
      height: 24px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
      ::v-deep .ivu-poptip{height:24px}
      .gif{
        width: 24px;
        height: 24px;
        cursor:pointer
      }
    }
    .cdyhmj_title_desc {
      display: flex;
      align-items: center;
      &:hover{
        cursor: pointer;
      }
      .title_desc_txt {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #7c88b1;
        margin-right: 4px;
      }
      .toRIcon {
        display: block;
        width: 16px;
        height: 16px;
      }
    }
  }
  .cdyhmj_content_container {
    width: 100%;
    min-height: 507px;
    border-radius: 8px;
    border: 1px solid #eaedf7;
    margin-top: 20px;
    .cdyhmj_content_top {
      width: 100%;
      min-height: 290px;
      border-bottom: 1px solid #eaedf7;
      display: flex;
      align-items: center;
      .cdyhmj_content_top_lef {
        width: 376px;
        height: 100%;
        padding: 24px;
        box-sizing: border-box;
        border-left: 1px solid #eaedf7;
        .cdyhmj_content_item {
          width: 100%;
        }
        .item1 {
          margin-bottom: 8px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #97a0c3;
        }
        .item2 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .hg_txt {
            width: 12px;
            height: 1px;
            background: #c6cbde;
            border-radius: 2px;
          }
          .input_container {
            width: 144px;
            height: 40px;
            // box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8),
            // -2px -2px 7px 0px #fffefa;
            // border-radius: 8px;
            // border: 1px solid #c6cbde;
            // padding: 4px;
            // box-sizing: border-box;
            // display: flex;
            // align-items: center;
            // .input1 {
            //   font-size: 24px;
            //   font-family: PingFangSC-Semibold, PingFang SC;
            //   font-weight: 600;
            //   color: #c5cadf;
            // }
            // .inpu2 {
            //   font-size: 24px;
            //   font-family: HelveticaNeue-Bold, HelveticaNeue;
            //   font-weight: bold;
            //   color: #242f57;
            // }
            .inpu23 {
              display: block;
              width: 6px;
              height: 32px;
              font-size: 24px;
              font-family: HelveticaNeue;
              color: #4488ff;
              line-height: 32px;
            }
          }
        }
        .item3 {
          margin-top: 16px;
          margin-bottom: 8px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #97a0c3;
        }
        .item4 {
          height: 40px;
          margin-bottom: 16px;
          .inputIcon {
            width: 100%;
            height: 100%;
          }
        }
        .item5 {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .item_xtt {
            padding: 9px 16px;
            background: #ecf3ff;
            border-radius: 8px;
            border: 1px solid #2373ff;
            font-size: 18px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2373ff;
            margin-right: 8px;
          }
        }
      }
      .cdyhmj_content_top_ri {
        flex: 1;
        height: 100%;
        padding: 24px 25px;
        box-sizing: border-box;
        .cdyhmj_content_top_ri_tel {
          width: 100%;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #97a0c3;
          margin-bottom: 8px;
        }
        .cal_item_container {
          width: 100%;
          height: 168px;
          background: #f7f9fd;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .cal_item,
          .cal_item1 {
            width: 52px;
            height: 120px;
            background: #ffffff;
            border-radius: 0 8px 8px 0;
            border: 1px solid #eaedf7;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .cal_item_cal_item {
              width: 30px;
              height: 50px;
              background: #eaedf7;
              border-radius: 0 8px 8px 0;
              display: flex;
              align-items: center;
              justify-content: center;
              .toLIcon {
                width: 19px;
                height: 19px;
              }
            }
          }
          .cal_item1 {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            border-radius: 8px 0 0 8px;
            .cal_item_cal_item {
              border-radius: 8px 0 0 8px;
            }
          }
          .cal_item2 {
            width: 24%;
            height: 120px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #2373FF;
            padding: 12px;
            box-sizing: border-box;
            position: relative;
            .rt_choice {
              position: absolute;
              top: 6px;
              right: 10px;
              width: 16px;
              height: 16px;
            }
            .rt_choice2 {
              position: absolute;
              top: 6px;
              right: 10px;
              width: 16px;
              height: 16px;
            }
            .logo_container {
              width: 100%;
              height: 40px;
              margin-bottom: 12px;
              display: flex;
              align-items: center;
              .logoImg {
                width: 40px;
                height: 40px;
                display: block;
                border: 1px solid #eaedf7;
                border-radius: 51%;
                margin-right: 8px;
              }
              .cal_txt {
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;
              }
            }
            .txt_area {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #97a0c3;
              display: flex;
              align-items: center;
              .txt_area11 {
                margin-right: 20px;
              }
            }
            .per_area {
              display: flex;
              align-items: center;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242f57;
              .per_area1 {
                margin-right: 32px;
              }
            }
          }
          .cal_item21{
            border: 1px solid #EAEDF7;
          }
        }
        .cdyhmj_bom {
          margin-top: 22px;
          width: 100%;
          height: 24px;
          display: flex;
          align-items: center;
          .cdyhmj_bom_lef {
            width: 88px;
            height: 22px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            line-height: 22px;
          }
          .cdyhmj_bom_rig {
            flex: 1;
            display: flex;
            .cdyhmj_bom_rig1 {
              display: block;
              width: 24px;
              height: 24px;
              margin-right: 8px;
              border-radius: 50%;
            }
          }
        }
      }
    }
    .cdyhmj_content_bom {
      width: 100%;
      min-height: 217px;
      background: #f7f9fd;
      padding: 16px 24px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cdyhmj_content_bom_lef {
        width:auto;
        height: 100%;
        .cdyhmj_content_bom_lef_top {
          width: 100%;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          margin-bottom: 16px;
        }
        .cdyhmj_content_bom_lef_bom {
          width: 100%;
          display: flex;
          align-items: center;
          padding-right: 24px;
          justify-content: space-between;

          .echarts1 {
            &.echarts1box{
              width: 197px;
              margin-right: 24px;
            }
            &.echarts2box{
              width: 160px;
              margin-right: 8px;
            }
            height: 136px;
            box-sizing: border-box;
            border-radius: 8px;
            .echarts11 {
              width: 100%;
              min-height: 64px;
              background: #ffffff;
              border-radius: 8px;
              margin-bottom: 8px;
              padding: 6px 12px;
              box-sizing: border-box;
              .echarts111,
              .echarts112 {
                width: 100%;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
              }
              .echarts112 {
                font-size: 24px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #2373FF;
              }
            }
            .echarts12 {
              widows: 100%;
              min-height: 64px;
              background: #ffffff;
              border-radius: 2px;
              padding: 6px 12px;
              box-sizing: border-box;
              .echarts121,
              .echarts122 {
                width: 100%;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
              }
              .echarts122 {
                height: 32px;
                font-size: 24px;
                font-family: HelveticaNeue-Bold, HelveticaNeue;
                font-weight: bold;
                color: #2373FF;
              }
            }
            .echarts13 {
              width: 100%;
              margin-bottom: 8px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #97a0c3;
            }
            .echarts14,
            .echarts15 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 8px;
              .echarts141,
              .echarts142 {
                display: flex;
                align-items: center;
                .ech_Icon,
                .ech_Icon1,.ech_Icon2 {
                  width: 8px;
                  height: 8px;
                  background: rgba(68, 136, 255, 0.85);
                  border-radius: 50%;
                  margin-right: 5px;
                }
                .ech_Icon1 {
                  background: rgba(164, 157, 250, 0.85);
                }
                .ech_Icon2 {
                  background: #FC809F;
                }
                .ech_time,
                .ech_txt {
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242f57;

                }
                .ech_txt {
                    width:70px;
                  // margin-right: 40px;
                }
              }
            }
          }
          .ec1 {
            width:201px;
            background: #ffffff;
            padding:6px 12px;
          }
        }
      }
      .cdyhmj_content_bom_rig {
        flex:1;
        height: 100%;
        padding-left: 24px;
        box-sizing: border-box;
        border-left: 1px solid #eaedf7;
        .cdyhmj_content_bom_rig_top {
          width: 100%;
          margin-bottom: 16px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
        }
        .cdyhmj_content_bom_rig_bom {
          width: 100%;
          height: 136px;
          overflow: hidden;
          border-radius: 8px;
          .yhtIcon {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}
img{
  width: 100%;
  display: block;
}
</style>
