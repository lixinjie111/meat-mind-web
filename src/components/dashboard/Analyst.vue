<template>
  <div class="analyst-box">
    <div class="nav">
      <p class="nav-title">Dashboard</p>
      <div class="btn_container">
        <img :src="downLoad" class="btn_download" />
        <span class="btntxt">一键生成报告</span>
      </div>
    </div>
    <div class="welcome">
      <img class="user" src="../../static/img/header/oval@2x.png" alt="" />
      <div class="user_intro_container">
        <p>早安，分析师，欢迎使用 Meta-Mind-Marketing！</p>
        <p>
          轻松上手分析模型，探索不同业务中的关键行为，洞察指标背后的增长点。
        </p>
      </div>
      <img :src="infoIcon" alt="" srcset="" class="infoIcon" />
    </div>
    <div class="guide_container">
      <div class="guide_title_container">
        <div class="guide_title_lef">
          <span style="margin-right: 4px">新手导航</span>
          <img :src="infoIcon" alt="" srcset="" class="infoIcon" />
          <Progress :percent="45" status="active"></Progress>
          <span>(3/6)</span>
        </div>
        <div class="guide_title_rig">
          <div class="guide_title_rig_til">收起</div>
          <div class="guide_title_rig_icon"></div>
        </div>
      </div>
      <div class="card_container">
        <vCard0
          v-for="(item, index) in guideList"
          :key="index"
          :cardData="item"
        ></vCard0>
      </div>
    </div>
    <div class="kanban_container">
      <img :src="kanbanIcon" alt="" srcset="" class="kanbanIcon" />
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>品牌运营概览</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 100%;"></Date-picker>
          </div>
        </div>
        <div class="right_area">
          <span>前往品牌画像</span>
          <img :src="trImg" class="trImg" />
        </div>
      </div>
      <div class="content_container">
        <div class="pin_echarts_container">
          <div class="pin_title">品牌测评得分</div>
          <div class="pin_echarts_cont_container">
            <div class="pin_content">
                <iframe src="../../../public/static/html/dashboard/yibiao.html" frameborder="0" scrolling="no" style="width:100%;height:100%;"></iframe>
            </div>
            <div class="num_text">78</div>
            <div class="fen">分</div>
          </div>
          <div class="intro_container">
            <span class="span1">击败北京</span>
            <span class="span2" style="margin-right:10px;">12.3%</span>
            <span class="span3">品牌</span>
          </div>
        </div>

        <vCard1
          v-for="item in ppCardList"
          :key="item.id"
          :cardData="item"
        ></vCard1>
      </div>
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>用户生命周期</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
            <Select v-model="timeRange" style="width: 100%">
              <Option
                v-for="item in timeList"
                :value="item.value"
                :key="item"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
        <div class="right_area">
          <span>前往用户画像</span>
          <img :src="trImg" class="trImg" />
        </div>
      </div>
      <div class="content_container">
        <vCard1
          v-for="item in yhCardList"
          :key="item.id"
          :cardData="item"
        ></vCard1>
      </div>
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>媒介概览</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
          </div>
        </div>
        <div class="right_area">
          <span>前往媒介画像</span>
          <img :src="trImg" class="trImg" />
        </div>
      </div>
      <div class="title1_container">
          <div class="til_label">整体流量评分</div>
          <div class="date_container">
              <Date-picker type="date" placeholder="选择日期" style="width:100%;"></Date-picker>
          </div>
          <div class="til_label1">核心指标</div>
      </div>
      <div class="progress_content_container">
          <div class="pro_lef">
              <div class="fen_txt">86.2<span style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7C88B1;">分</span></div>
              <div class="pai_container">
                  <span class="paim">排名</span><span class="goper">前 89%</span>
              </div>
              <div class="progress_container">
                  <Progress :percent="85" status="active"></Progress>
              </div>
              <div class="pinjun_container">
                <span class="label">平均分</span>
                <span class="fen_text" style="color: #2373FF;">77.5</span>
              </div>
              <div class="zuigao_container">
                <span class="label">最高分</span>
                <span class="fen_text" style="color: #34C724;">95.5</span>
              </div>
              <div class="zuidi_container">
                <span class="label">最低分</span>
                <span class="fen_text" style="color: #FB343E;">54.3</span>
              </div>
          </div>
          <div class="cont_rig">
            <vCard1
            v-for="item in hxzbCardList"
            :key="item.id"
            :cardData="item"
            ></vCard1>
          </div>
      </div>
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>产品数据评估</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
            <Select v-model="timeRange" style="width: 100%">
              <Option
                v-for="item in timeList"
                :value="item.value"
                :key="item"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
      </div>
      <div class="content_container" style=" display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
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
import vCard0 from "../common/card0";
import vCard1 from "../common/card1";
export default {
  name: "Analyst",
  components: { vCard0, vCard1 },
  data() {
    return {
      guideList: [
        {
          tilIcon: require("../../assets/img/dashboard/newGif.png"),
          title: "领取新人礼包",
          desc:
            "根据您行业属性，我们为您精选出一些通用数据包及行业数据包，希望您会喜欢。",
          statusTxt: "已完成",
          statusIcon: require("../../assets/img/dashboard/checked.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/upData.png"),
          title: "上传数据",
          desc: "开启第一步，去上传你的第一个数据文件，列入EXCEL报表文件。",
          statusTxt: "已完成",
          statusIcon: require("../../assets/img/dashboard/checked.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/SDK.png"),
          title: "SDK埋点",
          desc:
            "使用 SDK 实现数据采集功能，添加跟踪代码即可完成 SDK 的集成，为数据采集和分析做好准备。",
          statusTxt: "已完成",
          statusIcon: require("../../assets/img/dashboard/checked.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/API.png"),
          title: "API采集",
          desc:
            "为满足广大客户更灵活管理需求，我们提供了一套可以直接调用的 API 接口。",
          statusTxt: "去查看",
          statusIcon: require("../../assets/img/dashboard/tor1.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/sjkzl.png"),
          title: "数据库直连",
          desc:
            "采用端口通信的方式进行客户端的数据库连接，安全有保障。连接数据库进行分析，实时性更高。",
          statusTxt: "去查看",
          statusIcon: require("../../assets/img/dashboard/tor1.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/help.png"),
          title: "帮助中心",
          desc: "查看功能说明，了解智慧营销平台。",
          statusTxt: "去查看",
          statusIcon: require("../../assets/img/dashboard/tor1.png"),
        },
      ],
      infoIcon: require("../../assets/img/dashboard/gdI.png"),
      downLoad: require("../../assets/img/dashboard/downLoad.png"),
      kanbanIcon: require("../../assets/img/dashboard/kbIcon.png"),
      gdImg: require("../../assets/img/dashboard/gdI.png"),
      trImg: require("../../assets/img/dashboard/toR.png"),
      ppCardList: [
        {
          id: 1,
          width: "19%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16 I 今日",
          time: "今日",
          numText: 134,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 2,
          width: "19%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16 I 今日",
          time: "今日",
          numText: 567,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 500,
        },
        {
          id: 3,
          width: "19%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16 I 今日",
          time: "今日",
          numText: 734,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 200,
        },
        {
          id: 4,
          width: "19%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16 I 今日",
          time: "今日",
          numText: 489,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 3000,
        },
      ],
      yhCardList:[
        {
          id: 1,
          width: "16%",
          title: "新用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1234,
          unitText: "人",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 2,
          width: "16%",
          title: "连续活跃用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 101,
          unitText: "人",
          leftText: "",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 3,
          width: "16%",
          title: "回流用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1027,
          unitText: "人",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 2000,
        },
        {
          id: 4,
          width: "16%",
          title: "沉默用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1290,
          unitText: "人",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 2000,
        },
        {
          id: 5,
          width: "16%",
          title: "流失用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1089,
          unitText: "人",
          leftText: "",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 6,
          width: "16%",
          title: "流入流出比",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 0.8,
          unitText: "",
          leftText: "",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 10000,
        },
      ],
      hxzbCardList:[
        {
          id: 1,
          width: "24%",
          title: "今日 UV",
          timeRange: "",
          time: "",
          numText: 799,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 300,
        },
        {
          id: 2,
          width: "24%",
          title: "昨日 UV",
          timeRange: "",
          time: "",
          numText: 1297,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 3,
          width: "24%",
          title: "新用户",
          timeRange: "",
          time: "",
          numText: 104,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 1500,
        },
        {
          id: 4,
          width: "24%",
          title: "近7日 UV",
          timeRange: "",
          time: "",
          numText: 3904,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 3000,
        },
        {
          id: 5,
          width: "24%",
          title: "近30日 UV",
          timeRange: "",
          time: "",
          numText: 19799,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 1700,
        },
        {
          id: 6,
          width: "24%",
          title: "昨日 UV",
          timeRange: "",
          time: "",
          numText: 1297,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 2000,
        },
        {
          id: 7,
          width: "24%",
          title: "新用户",
          timeRange: "",
          time: "",
          numText: 104,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 800,
        },
        {
          id: 8,
          width: "24%",
          title: "近7日 UV",
          timeRange: "",
          time: "",
          numText: 3904,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1900,
        }
      ],
      timeList: [
        {
          value: "go3",
          label: "过去三天",
        },
        {
          value: "go7",
          label: "过去七天",
        },
        {
          value: "go15",
          label: "过去十五天",
        }
      ],
      proDataList:[
        {
          id: 1,
          width: "24%",
          title: "活跃次数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 2,
          width: "24%",
          title: "活跃员工数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 500,
        },
        {
          id: 3,
          width: "24%",
          title: "活跃企业数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 4,
          width: "24%",
          title: "核心功能使用的总次数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 5,
          width: "24%",
          title: "核心功能使用员工数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon:require("../../assets/img/dashboard/upIcon.png"), 
          leftPer: "9.07%",
          leftPerColor:"#34C724", 
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1000,
        },
        {
          id: 6,
          width: "24%",
          title: "核心功能的企业数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 972,
          unitText: "个",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 7,
          width: "24%",
          title: "活跃用户中使用核心功能",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 92.47,
          unitText: "%",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 100000,
        },
        {
          id: 8,
          width: "24%",
          title: "核心功能渗透率",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 26.45,
          unitText: "%",
          leftText: "环比",
          leftIcon:require("../../assets/img/dashboard/upIcon.png"), 
          leftPer: "9.07%",
          leftPerColor:"#34C724", 
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 200000,
        },
      ],
      timeRange: "go3"
    };
  },
};
</script>

<style scoped lang="scss">
.analyst-box {
  width: 100%;
  .nav {
    width: 100%;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn_container {
      padding: 14px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(139deg, #f0f3f6 0%, #ffffff 100%);
      box-shadow: 4px 4px 16px 0px rgba(55, 84, 170, 0.16),
        -4px -4px 16px 0px #ffffff, 1px 1px 2px 0px #ffffff;
      border-radius: 32px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
      .btn_download {
        display: block;
        width: 18px;
        height: 18px;
        margin-right: 11px;
      }
    }
  }
  .welcome {
    padding: 24px;
    width: 100%;
    height: 122px;
    background: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
    position: relative;
    .infoIcon {
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .user {
      margin-right: 24px;
      width: 72px;
      height: 72px;
      box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2),
        -6px -6px 12px 0px #ffffff;
      border: 1px solid #ffffff;
      border-radius: 50%;
    }

    .user_intro_container {
      display: inline-block;
      vertical-align: top;
      > p {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242f57;
        &:first-child {
          margin-bottom: 12px;
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
        }
      }
    }
  }

  .guide_container {
    width: 100%;
    min-height: 404px;
    background: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
    padding: 24px;
    padding-bottom: 8px;
    box-sizing: border-box;
    margin-top: 24px;
    .guide_title_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      .guide_title_lef {
        width: 50%;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
        .infoIcon {
          display: block;
          width: 16px;
          height: 16px;
          margin-right: 12px;
        }
        ::v-deep .ivu-progress {
          width: 30%;
        }
        ::v-deep .ivu-progress .ivu-progress-text {
          display: none;
        }
        ::v-deep .ivu-progress .ivu-progress-outer {
          padding-right: 10px;
        }
      }
      .guide_title_rig {
        display: flex;
        align-items: center;
        .guide_title_rig_til {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636e95;
          margin-right: 4px;
        }
        .guide_title_rig_icon {
          width: 18px;
          height: 18px;
        }
      }
    }
    .card_container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  .kanban_container {
    margin-top: 24px;
    width: 100%;
    .kanbanIcon {
      width: 100%;
    }
  }

  .pinpai_container,
  .yonghu_container,
  .meijie_container,
  .chanpin_container {
    width: 100%;
    min-height: 252px;
    background: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
    margin-bottom: 24px;
    padding: 24px;
    box-sizing: border-box;
    .title_container {
      width: 100%;
      height: 32px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left_area {
        display: flex;
        align-items: center;
        span {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          margin-right: 4px;
        }
        .gdImg {
          display: block;
          width: 16px;
          height: 16px;
          margin-right: 40px;
        }
        .time_range_container {
          width: 276px;
          height: 32px;
        }
      }
      .right_area {
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #7c88b1;
          margin-right: 4px;
        }
        .trImg {
          display: block;
          width: 16px;
          height: 16px;
        }
      }
    }
    .title1_container{
        width: 100%;
        height:32px;
        margin-top: 6px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        .til_label{
           margin-right: 48px; 
        }
        .date_container{
            width: 200px;
            height: 32px;
            margin-right: 29px;
        }
    }
    .progress_content_container{
        width: 100%;
        height:266px;
        display: flex;
        align-items: center;
        .pro_lef{
            width: 345px;
            height: 100%;
            margin-right: 30px;
            .fen_txt{
                width: 100%;
                font-size: 30px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                color: #2373FF;
                margin-bottom: 10px;
            }
            .pai_container{
                width: 100%;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                margin-bottom: 24px;
                .paim{
                    color: #242F57;
                    margin-right: 3px;
                }
                .goper{ 
                    color: #34C724;
                }
            }
            .progress_container{
                width: 100%;
                height: 8px;
                padding-bottom:32px;
                box-sizing: border-box;
                border-bottom: 1px solid #EAEDF7;
                margin-bottom: 33px;
                ::v-deep .ivu-progress {
                    width: 101%;
                }
                ::v-deep .ivu-progress .ivu-progress-text {
                    display: none;
                }
                ::v-deep .ivu-progress .ivu-progress-outer {
                    padding-right: 10px;
                }
            }
            .pinjun_container,.zuigao_container,.zuidi_container{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 10px;
                .label,.fen_text{
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #2373FF;
                }
            }
        }
        .cont_rig{
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
  }
  .pinpai_container {
    .content_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pin_echarts_container {
        width: 19%;
        min-height: 156px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid #eaedf7;
        padding: 12px;
        box-sizing: border-box;
        .pin_title {
          width: 100%;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242f57;
          margin-bottom: 24px;
        }
        .pin_echarts_cont_container {
          width: 100%;
          display: flex;
          align-items: flex-end;
          .pin_content {
            width: 109px;
            height: 59px;
            opacity: 0.8;
            margin-right: 19px;
            // border: 2px solid #4d94ff;
          }
          .num_text {
            margin-right: 8px;
            font-size: 30px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #34c724;
          }
          .fen {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7c88b1;
          }
        }
        .intro_container {
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7c88b1;
          line-height: 18px;
          margin-top: 12px;
          .span2 {
            color: #ff2744;
          }
        }
      }
    }
  }
}
</style>