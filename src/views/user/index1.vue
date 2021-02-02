<template>
  <div class="user-protrait">
    <!-- 用户画像 -->
    <Side></Side>
    <div class="container">
      <Header :target="'用户画像'"></Header>
      <div class="show-content">
        <div class="pinpai_container">
          <div class="title_container">
            <div class="left_area">
              <span>品牌运营概览</span>
              <img :src="gdImg" class="gdImg" />
              <div class="time_range_container"></div>
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
                <div class="pin_content"></div>
                <div class="num_text">78</div>
                <div class="fen">分</div>
              </div>
              <div class="intro_container">
                <span class="span1">击败北京</span>
                <span class="span2">12.3%</span>
                <span class="span3">品牌</span>
              </div>
            </div>

            <vCard1
              v-for="item in cardList"
              :key="item.id"
              :cardData="item"
            ></vCard1>
          </div>
        </div>
        <div class="yonghu_container">
          <div class="title_container"></div>
        </div>
        <div class="meijie_container"></div>
        <div class="chanpin_container"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "../../components/Side";
import Header from "../../components/DefaultHeader";
import vCard1 from "../../components/common/card1";
export default {
  name: "index",
  data() {
    return {
      gdImg: require("../../assets/img/dashboard/gdI.png"),
      trImg: require("../../assets/img/dashboard/toR.png"),
      cardList: [
        {
          id: 1,
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
    };
  },
  components: { Side, Header, vCard1 },
};
</script>

<style scoped lang="scss">
.user-protrait {
  display: flex;
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    .show-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 80px);
      overflow-y: scroll;
      padding: 24px;
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
      .yonghu_container {
        min-height: 244px;
      }
      .meijie_container {
        min-height: 414px;
      }
      .chanpin_container {
        min-height: 416px;
      }
    }
  }
}
</style>