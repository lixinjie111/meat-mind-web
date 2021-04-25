<template>
  <div class="activity-show-data">
    <div class="first-line">
        <div class="f-title">成本与转化</div>
        <div class="f-sub-title">头部KOL投放成本过高，销售转化与上一季度持平。</div>
        <div class="f-echarts-box">
            <div class="zuhe_echarts_left">
                <BarLine2 id="305" :colorList="$abelData.colorList" :myData="$abelData.barLine"></BarLine2>
            </div>
            <div class="zuhe_echarts_rt">
            <div class="zuhe_echarts_list">
              <div class="zuhe_echarts_Item">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">活动曝光数(去水军)</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  39<span class="zuhe_echarts_danwei">万</span>
                </div>
              </div>
              <div class="zuhe_echarts_Item zuhe_echarts_Item1">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">综合互动数</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  823,112 <span class="zuhe_echarts_danwei">次</span>
                </div>
              </div>
            </div>
            <div class="zuhe_echarts_list zuhe_echarts_list1">
              <div class="zuhe_echarts_Item zuhe_echarts_Item2">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">新增粉丝数</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  29,483<span class="zuhe_echarts_danwei">人</span>
                </div>
              </div>
              <div class="zuhe_echarts_Item zuhe_echarts_Item3">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">销售达成</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  246<span class="zuhe_echarts_danwei">万元</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="second-line">
        <div class="container-filter">
        <div class="left">
            <div>时间:</div>
            <ul>
            <li
                v-for="(item, index) in dateList"
                :key="index"
                :class="{ active: active == index }"
                @click="clickDate(index)">
                {{ item }}
            </li>
            </ul>
        </div>
        <div class="right">
            <Select v-model="channel" @on-change="changeChannel" class="w120 mr24">
            <Option
                v-for="item in channelList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
            >
            </Select>
            <Select v-model="program" @on-change="changeProgram" class="w150">
            <Option
                v-for="item in programList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
            >
            </Select>
        </div>
        </div>
        <div class="ac-container-data">
        <vCard1
            v-for="item in proDataList"
            :key="item.id"
            :cardData="item"
        ></vCard1>
        </div>
    </div>      
  </div>
</template>
<script>
import BarLine2 from '../../../components/echarts/common/bar/barLine2';
import vCard1 from "@/components/common/card1";
import {getRandom} from "@/utils/func"
var dayjs = require("dayjs");
export default {
  name: "ActivityShowData",
  components: { vCard1, BarLine2},
  watch:{
      active(){
          this.changeData()
      }
  },
  data() {
    return {
      active: 0,
      dateList: ["今天", "近7天", "近30天", "近60天"],
      channel: "1",
      channelList: [
        { value: "1", label: "全渠道" },
        { value: "2", label: "抖音" },
        { value: "3", label: "微博" },
        { value: "4", label: "虎嗅" },
        { value: "5", label: "大众点评" },
        { value: "6", label: "今日头条" },
        { value: "7", label: "微信" },
      ],
      program: "1",
      programList: [
        { value: "1", label: "降本保质推广方案" },
        { value: "2", label: "低成本高转化方案" },
        { value: "3", label: "保质持续转化方案" },
      ],
      proDataList: [
        {
          id: 1,
          width: "24%",
          title: "GMV",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 47,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1111000,
          fnType: 5,
        },
        {
          id: 2,
          width: "24%",
          title: "品牌总曝光数",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 1847,
          unitText: "",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 111500,
          fnType: 5,
        },
        {
          id: 3,
          width: "24%",
          title: "触达用户数",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 4847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1111000,
          fnType: 5,
        },
        {
          id: 4,
          width: "24%",
          title: "成交用户数",
          brShow:true,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1111000,
          fnType: 5,
        },
        {
          id: 5,
          width: "24%",
          title: "询单转化率",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 90,
          unitText: "%",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1111000,
          fnType: 5,
        },
        {
          id: 6,
          width: "24%",
          title: "互动率",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 97,
          unitText: "%",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1111000,
          fnType: 5,
        },
        {
          id: 7,
          width: "24%",
          title: "复购率",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 92.47,
          unitText: "%",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 11100000,
          fnType: 5,
        },
        {
          id: 8,
          width: "24%",
          title: "渠道声量",
          brShow:true,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 1645,
          unitText: "",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1200000,
          fnType: 5,
        },
        {
          id: 9,
          width: "24%",
          title: "活跃用户数",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 2645,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1200000,
          fnType: 5,
        },
        {
          id: 10,
          width: "24%",
          title: "新增用户数",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 945,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1200000,
          fnType: 5,
        },
        {
          id: 11,
          width: "24%",
          title: "流失用户数",
          brShow:false,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 300,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1200000,
          fnType: 5,
        },
        {
          id: 12,
          width: "24%",
          title: "舆情事件数",
          brShow:true,
        //   timeRange: dayjs(new Date()).format("YYYY-MM-DD"),
          time: "今日",
          numText: 1511,
          unitText: "",
          leftText: "环比",
          leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1200000,
          fnType: 5,
        },
      ],
    };
  },
  methods: {
    changeChannel(val) {
      this.channel = val;
      this.changeData()
    },
    changeProgram(val) {
      this.program = val;
      this.changeData()
    },
    clickDate(val) {
      this.active = val;
    },
    changeData(){
        this.proDataList = this.proDataList.map((item,index)=>{
            if(index==0){
                item.numText = getRandom(30,50)
            }else if(index==2){
                item.numText = getRandom(4000,5000)
            }else if(index==1||index==3||index==7||index==11){
                item.numText = getRandom(1800,2000)
            }else if(index==4||index==5||index==6){
                item.numText = getRandom(80,95)
            }else if(index==8){
                item.numText = getRandom(2500,3000)
            }else if(index==9){
                item.numText = getRandom(900,1000)
            }else{
                item.numText = getRandom(280,350)
            }
            item.leftPer = getRandom(2,9,2).toFixed(2)+"%"
            item.rightPer = getRandom(2,9,2).toFixed(2)+"%"
            return item
        })
    }
  },
  created(){
      this.changeData()
  }
};
</script>

<style scoped lang="scss">
.activity-show-data {
  margin-top: 24px;
  .first-line{
    padding: 24px;
    background: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
      .f-title{
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242F57;
              line-height: 24px;
      }
      .f-sub-title{
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #97A0C3;
              line-height: 18px;
              margin:0;
              margin-bottom: 8px;
      }
      .f-echarts-box{
          display: flex;
          height: 300px;
        .zuhe_echarts_left{
          flex:1;
        //   background: #F0F8FF;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
        //   padding: 24px;
          padding-bottom: 0;
          }
        .zuhe_echarts_rt{
          flex:1;
          margin: auto;
          margin-left: 24px;
          border-radius: 8px;
          .zuhe_echarts_list{
            display: flex;
            justify-content: space-between;
            &.zuhe_echarts_list1{
              margin-top: 24px;
            }
            .zuhe_echarts_Item{
              width: 48%;
              background: rgba(241,110,132,.1);
              border-radius: 8px;
              padding:16px;
              color: #F16E84;
              &.zuhe_echarts_Item1{
                color: #1DCEC3;;
                background: rgba(29,206,195,.1);
              }
              &.zuhe_echarts_Item2{
                color: #FE774B;
                background: rgba(254,119,75,.1);
              }
              &.zuhe_echarts_Item3{
                color: #2373FF;
                background: rgba(35,115,255,.1);
              }
              .zuhe_echarts_Item_title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .zuhe_echarts_Item_title1{
                  font-size: 16px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  line-height: 26px;
                }
              }
              .zuhe_echarts_Item_num{
                font-size: 32px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                line-height: 32px;
                margin-top: 8px;
                .zuhe_echarts_danwei{
                  font-size: 14px;
                  margin-left: 8px;
                  line-height: 20px;
                }
              }
            }
          }
        }
      }
  }  
  .second-line{
  padding: 24px 24px 0 24px;
  margin-top: 24px;
  background: #ffffff;
  box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
  border-radius: 8px;      
    .container-filter {
        display: flex;
        justify-content: space-between;
        .left {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
        > div {
            margin-right: 12px;
        }
        > ul {
            display: flex;
            > li {
            height: 28px;
            padding: 6px 12px;
            line-height: 16px;
            cursor: pointer;
            &.active {
                color: #ffffff;
                background: #2373ff;
                border-radius: 4px;
            }
            }
        }
        }
        .right {
        display: flex;
        .w120 {
            width: 120px;
        }
        .w150 {
            width: 150px;
        }
        .mr24 {
            margin-right: 24px;
        }
        }
    }

    .ac-container-data {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 24px;
    }
  }

}
</style>