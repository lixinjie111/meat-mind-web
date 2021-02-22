<template>
    <div>
      <!--触达用户媒介-->
      <div class="cdyhmj_container">
        <div class="cdyhmj_title_container">
          <div class="cdyhmj_title">
            触达用户媒介
            <Poptip popper-class="saas-poptip" placement="right-start">
              <i class="iconfont2 iconguanyu tip-icon"></i>
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
                <div class="cal_item2 cal_item21">
                  <div class="rt_choice">
                    <Checkbox v-model="choice1" @on-change="changeNews"></Checkbox>
                  </div>
                  <div class="logo_container">
                    <img :src="ttIcon" class="logoImg" />
                    <span class="cal_txt">头条</span>
                  </div>
                  <div class="txt_area">
                    <div class="txt_area11">触达率</div>
                    <div>投放成本</div>
                  </div>
                  <div class="per_area">
                    <div class="per_area1">51%</div>
                    <div>¥2500/千人</div>
                  </div>
                </div>
                <div class="cal_item2">
                  <div class="rt_choice2">
                    <Checkbox v-model="choice2"></Checkbox>
                  </div>
                  <div class="logo_container">
                    <img :src="xhsIcon" class="logoImg" />
                    <span class="cal_txt">小红书</span>
                  </div>
                  <div class="txt_area">
                    <div class="txt_area11">触达率</div>
                    <div>投放成本</div>
                  </div>
                  <div class="per_area">
                    <div class="per_area1">46%</div>
                    <div>¥2300/千人</div>
                  </div>
                </div>
                <div class="cal_item2">
                  <div class="rt_choice2">
                    <Checkbox v-model="choice12"></Checkbox>
                  </div>
                  <div class="logo_container">
                    <img :src="ksIcon" class="logoImg" />
                    <span class="cal_txt">快手</span>
                  </div>
                  <div class="txt_area">
                    <div class="txt_area11">触达率</div>
                    <div>投放成本</div>
                  </div>
                  <div class="per_area">
                    <div class="per_area1">43%</div>
                    <div>¥2300/千人</div>
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
                  <span style="color:#242F57">2</span>个
                </div>
                <div class="cdyhmj_bom_rig">
                  <img :src="ksIcon" class="cdyhmj_bom_rig1" />
                  <img :src="xhsIcon" class="cdyhmj_bom_rig1" />
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
                    <div class="echarts112" v-if="choice1">￥21,800</div>
                    <div class="echarts112" v-else>￥19,000</div>
                  </div>
                  <div class="echarts12">
                    <div class="echarts121">目标客群触达率</div>
                    <div class="echarts122" v-if="choice1">93%</div>
                    <div class="echarts122" v-else>89%</div>
                  </div>
                </div>
                <div class="echarts1 ec1">
                  <div class="echarts13">建议投放时间段</div>
                   <div class="echarts15" v-if="choice1">
                    <div class="echarts142">
                      <div class="ech_Icon2"></div>
                      <div class="ech_txt">头条</div>
                      <div class="ech_time">20:00 - 21:00</div>
                    </div>
                  </div>
                  <div class="echarts14">
                    <div class="echarts141">
                      <div class="ech_Icon"></div>
                      <div class="ech_txt">快手</div>
                      <div class="ech_time">22:00 - 22:30</div>
                    </div>
                  </div>
                  <div class="echarts15">
                    <div class="echarts142">
                      <div class="ech_Icon1"></div>
                      <div class="ech_txt">小红书</div>
                      <div class="ech_time">19:00 - 20:30</div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="cdyhmj_content_bom_rig">
              <div class="cdyhmj_content_bom_rig_top">优化投放方案推荐</div>
              <div class="cdyhmj_content_bom_rig_bom">
                <img :src="yhtIcon" class="yhtIcon" alt srcset />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

import PieEcharts1 from '../../components/echarts/common/PieEcharts1';

export default {
  components: {
   PieEcharts1
  },
  name: "index",
  data() {
    return {
      ttIcon:require("../../assets/img/yhhx/tt.png"),
      toRIcon: require("../../assets/img/yhhx/toR.png"),
      toLIcon: require("../../assets/img/yhhx/toL.png"),
      choice1:false,
      choice2:true,
      choice12:true,
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
      xhsIcon:require("../../assets/img/yhhx/xhs.png"),
      ksIcon:require("../../assets/img/yhhx/ks.png"),
      yhtIcon: require("../../assets/img/yhhx/yht.png"),

      manIcon: require("../../assets/img/yhhx/man.png"),
      leftTimerImg: require("../../assets/img/yhhx/leftTimerImg.png"),
      ifShowPop1: false,
      ifShowPop2: false,
      ifShowPop3: false,
      ifShowPop4: false,
      ifShowPop5: false,
      icon1: require("../../assets/img/yhhx/map1.png"),
      icon2: require("../../assets/img/yhhx/map2.png"),
      icon3: require("../../assets/img/yhhx/map3.png"),
      icon4: require("../../assets/img/yhhx/map4.png"),
      
      toRIcon1: require("../../assets/img/yhhx/toR1.png"),
      inputIcon: require("../../assets/img/yhhx/input.png"),
      
      dhIcon: require("../../assets/img/yhhx/dhIcon.png"),
     
      input1: require("../../assets/img/yhhx/input1.png"),
      useApp: require("../../assets/img/yhhx/useApp.png"),
      threeP: require("../../assets/img/yhhx/threeP.png"),
      
      
      dyIcon:require("../../assets/img/yhhx/ks.png"),
      dyI:require("../../assets/img/yhhx/dyI.png"),
      tu20:require("../../assets/img/yhhx/tu20.png"),
      tu75:require("../../assets/img/yhhx/tu75.png"),
      descTitle:'北京上班族出行场景',
      avatImg:require("../../assets/img/yhhx/avat.png"),
      sbAvatImg:require("../../assets/img/yhhx/sbAvat.png"),
      qyggImg:require("../../assets/img/yhhx/sbAvat.png"),
      bpyzImg:require("../../assets/img/yhhx/bpAvat.png"),
      zyzyImg:require("../../assets/img/yhhx/zyAvat.png"),
      bjsbzImgTime:require("../../assets/img/yhhx/bjsbzImg.png"),
      yxqnImgTime:require("../../assets/img/yhhx/yxqnImg.png"),
      qyggImgTime:require("../../assets/img/yhhx/qyggImg.png"),
      bpyzImgTime:require("../../assets/img/yhhx/bpyzImg.png"),
      zyzyImgTime:require("../../assets/img/yhhx/zyzyImg.png"),
      ifShowDx1:true,
      vDxtxt1:'收起用户动线',
      ifShowDx2:false,
      vDxtxt2:'展开用户动线',
      ifShowDx3:false,
      vDxtxt3:'展开用户动线',
      ifShowDx4:false,
      vDxtxt4:'展开用户动线',
      ifShowDx5:false,
      vDxtxt5:'展开用户动线',
      jchxData:{
        lefData:{
          til:'当前状况',
          subTil:'受众群体年龄覆盖范围窄，核心受众20 -25 岁行业覆盖不够深入，只覆盖高收入人群'
        },
        rigData:{
          til:'策略建议',
          subTil:'扩大受众群体的年龄范围，从15岁 - 40岁。行业覆盖宜深入打通渠道'
        }
      },
      xwfxData:{
        lefData:{
          til:'当前状况',
          subTil:'用户行为特征与年龄、职业等基本属性高度相关。重要的线上触点是生活服务、视频娱乐、社交通讯类应用'
        },
        rigData:{
          til:'策略建议',
          subTil:'结合用户使用习惯及使用场景差异，在19:00 - 22:30时间段使用娱乐场景APP（如抖音）进行品牌推广为佳'
        }
      },
      xzfxData:{
        lefData:{
          til:'当前状况',
          subTil:'用户对营销信息呈现波动性情绪反馈，注意力集中时间有限；日间情绪随时间波动大，对短视频APP偏好明显。'
        },
        rigData:{
          til:'策略建议',
          subTil:'选取用户心情愉悦的时间段进行品牌推广，结合场景优化用户触达方案。'
        }
      },
      smzqfxData:{
        lefData:{
          til:'当前状况',
          subTil:'早期客户留存转化率较低，成熟期及休眠期的用户消费潜力巨大，用户在餐饮百货品类价值贡献度高。'
        },
        rigData:{
          til:'策略建议',
          subTil:'对于早期顾客加大投放力度，对于成熟期及休眠期顾客挖掘其用户价值，迎合用户偏好制定策略。'
        }
      },
      
    };
  },
  mounted() {
    //this.initPopEcharts();
  },
  methods: {
    changeNews(val){
      console.log(val)
      if(val){
        this.chuData=this.$fjData.box01Data;
      }else{
        this.chuData=this.$fjData.box0Data;
      }
    },
    formatUser(){
      this.$router.push({name:"user-defined"})
    },
    goMidea(){
      this.$router.push({
        path:"/media"
      });
    },
    expandfn(arg){
      if(arg == 1){
        if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx1 = !this.ifShowDx1;
        if(this.ifShowDx1){
          this.vDxtxt1 = '收起用户动线';
        }
        else{
          this.vDxtxt1 = '展开用户动线';
        }
      }
      else if(arg == 2){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx2 = !this.ifShowDx2;
        if(this.ifShowDx2){
          this.vDxtxt2 = '收起用户动线';
        }
        else{
          this.vDxtxt2 = '展开用户动线';
        }
      }
      else if(arg == 3){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx3 = !this.ifShowDx3;
        if(this.ifShowDx3){
          this.vDxtxt3 = '收起用户动线';
        }
        else{
          this.vDxtxt3 = '展开用户动线';
        }
      }
      else if(arg == 4){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx4 = !this.ifShowDx4;
        if(this.ifShowDx4){
          this.vDxtxt4 = '收起用户动线';
        }
        else{
          this.vDxtxt4 = '展开用户动线';
        }
      }
      else if(arg == 5){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        this.ifShowDx5 = !this.ifShowDx5;
        if(this.ifShowDx5){
          this.vDxtxt5 = '收起用户动线';
        }
        else{
          this.vDxtxt5 = '展开用户动线';
        }
      }
    },
    clickTab(arg){
      if(arg == 1){
        this.descTitle = '北京上班族出行场景';
      }
      else if(arg == 2){
        this.descTitle = '企业高管出行场景';
      }
      else if(arg == 3){
        this.descTitle = '北漂一族出行场景';
      }
      else if(arg == 4){
        this.descTitle = '研学青年出行场景';
      }
      else if(arg == 5){
        this.descTitle = '自由职业出行场景';
      }
    },
    initPopEcharts() {
      var echartsData1 = [];
      var echartsData2 = [];
      var echartsData3 = [];
      var echartsData4 = [];
      var echartsData5 = [];
      var echartsId1 = "btmEcharts1";
      var echartsId2 = "btmEcharts2";
      var echartsId3 = "btmEcharts3";
      var echartsId4 = "btmEcharts4";
      var echartsId5 = "btmEcharts5";
      this.initEcharts1(echartsData1, echartsId1);
      this.initEcharts2(echartsData2, echartsId2);
      this.initEcharts3(echartsData3, echartsId3);
      this.initEcharts4(echartsData4, echartsId4);
      this.initEcharts5(echartsData5, echartsId5);
    },
    initEcharts1(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
              }
            },
            data: [
              {
                x: 10,
                y: 10,
                symbolSize: 40,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "#8AE6C7",
                    color: "#8AE6C7"
                  }
                }
              },
              {
                x: 10,
                y: 20,
                name: "娱乐APP",
                value: 6181,
                symbolSize: 120,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 40,
                symbolSize: 103,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,217,140,0.2)",
                    color: "rgba(255,217,140,0.2)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 58,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                name: "工作APP",
                value: 2244,
                symbolSize: 104,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts2(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
              }
            },
            data: [
              {
                x: 10,
                y: 10,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "#FF9F7F",
                    color: "#FF9F7F"
                  }
                }
              },
              {
                x: 10,
                y: 16,
                value: 6181,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 22,
                name: "新闻APP",
                value: 5055,
                symbolSize: 103,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(138,230,199,0.7)",
                    color: "rgba(138,230,199,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 31,
                name: "学术APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(183,200,234,0.7)",
                    color: "rgba(183,200,234,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 37,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 42,
                symbolSize: 29,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(252,128,159,0.7)",
                    color: "rgba(252,128,159,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 60,
                name: "工作APP",
                value: 2244,
                symbolSize: 102,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                symbolSize: 33,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts3(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
              }
            },
            data: [
              {
                x: 10,
                y: 12,
                symbolSize: 40,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(138,230,199,0.7)",
                    color: "rgba(138,230,199,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 20,
                symbolSize: 80,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(252,128,159,0.7)",
                    color: "rgba(252,128,159,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 17,
                symbolSize: 38,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 27,
                name: "娱乐APP",
                value: 6181,
                symbolSize: 102,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 33,
                name: "外卖APP",
                value: 6181,
                symbolSize: 82,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(252,128,159,0.7)",
                    color: "rgba(252,128,159,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderWidth: 0,

                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 58,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                name: "工作APP",
                value: 2244,
                symbolSize: 104,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts4(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
              }
            },
            data: [
              {
                x: 10,
                y: 30,
                name: "视频APP",
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 37,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 52,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts5(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
              }
            },
            data: [
              {
                x: 10,
                y: 10,
                symbolSize: 40,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderWidth: 4,

                    shadowColor: "#8AE6C7",
                    color: "#8AE6C7"
                  }
                }
              },
              {
                x: 10,
                y: 15,
                name: "娱乐APP",
                value: 6181,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 22,
                name: "视频APP",
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 58,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                name: "工作APP",
                value: 2244,
                symbolSize: 104,
                draggable: true,
                itemStyle: {
                  normal: {

                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    showPop1() {
      this.ifShowPop1 = true;
    },
    hidePop1() {
      this.ifShowPop1 = false;
    },
    showPop2() {
      this.ifShowPop2 = true;
    },
    hidePop2() {
      this.ifShowPop2 = false;
    },
    showPop3() {
      this.ifShowPop3 = true;
    },
    hidePop3() {
      this.ifShowPop3 = false;
    },
    showPop4() {
      this.ifShowPop4 = true;
    },
    hidePop4() {
      this.ifShowPop4 = false;
    },
    showPop5() {
      this.ifShowPop5 = true;
    },
    hidePop5() {
      this.ifShowPop5 = false;
    }
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
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
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