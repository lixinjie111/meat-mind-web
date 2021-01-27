<template>
  <div class="user-protrait">
    <!-- 用户画像 -->
    <Side></Side>
    <div class="container">
      <Header :target="'用户画像'"></Header>
      <div class="show-content">
        <div class="yhdx_container">
          <div class="top_title_container">
            <div class="left_text">
              <div class="left_title_text">用户动线</div>
              <div class="left_desc_text">分析品牌对应的不同用户群对应的在不同时间，不同场景，使用了哪些App/Web，以及详细的数据跟踪。</div>
            </div>
            <div class="right_btn">
              <img :src="manIcon" class="manIcon" />
              <span>自定义客群</span>
            </div>
          </div>

          <div class="echarts_container1">
            <div class="left_timer_container">
              <img :src="leftTimerImg" class="leftTimerImg" />
            </div>
            <div class="right_qipao_container">
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop1" @mouseleave="hidePop1"></div>
                <div class="bottom_echarts"></div>
                <div class="model_pop" v-if="ifShowPop1" @mouseenter="showPop1" @mouseleave="hidePop1"></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop2" @mouseleave="hidePop2"></div>
                <div class="bottom_echarts"></div>
                <div class="model_pop" v-if="ifShowPop2" @mouseenter="showPop2" @mouseleave="hidePop2"></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop3" @mouseleave="hidePop3"></div>
                <div class="bottom_echarts"></div>
                <div class="model_pop" v-if="ifShowPop3" @mouseenter="showPop3" @mouseleave="hidePop3"></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop4" @mouseleave="hidePop4"></div>
                <div class="bottom_echarts"></div>
                <div class="model_pop" v-if="ifShowPop4" @mouseenter="showPop4" @mouseleave="hidePop4"></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop5" @mouseleave="hidePop5"></div>
                <div class="bottom_echarts"></div>
                <div class="model_pop" v-if="ifShowPop5" @mouseenter="showPop5" @mouseleave="hidePop5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "../../components/Side";
import Header from "../../components/DefaultHeader";
export default {
  name: "index",
  data() {
    return {
      manIcon: require("../../assets/img/yhhx/man.png"),
      leftTimerImg: require("../../assets/img/yhhx/leftTimerImg.png"),
      ifShowPop1: false,
      ifShowPop2:false,
      ifShowPop3:false,
      ifShowPop4:false,
      ifShowPop5:false,
    };
  },
  methods: {
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
  components: { Side, Header }
};
</script>

<style scoped lang="scss">
.user-protrait {
  display: flex;
  .container {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 240px);
    .show-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 80px);
      overflow-y: scroll;
      padding: 24px;
      .yhdx_container {
        width: 100%;
        background: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 4px;
        padding: 24px;
        box-sizing: border-box;
        .top_title_container {
          width: 100%;
          height: 51px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          .left_text {
            .left_title_text {
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 7px;
            }
            .left_desc_text {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #636e95;
            }
          }
          .right_btn {
            width: 128px;
            height: 48px;
            background: #f4f7fc;
            box-shadow: 4px 4px 8px 0px rgba(55, 84, 170, 0.16),
              -4px -4px 8px 0px #ffffff;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
            .manIcon {
              display: block;
              width: 24px;
              height: 24px;
            }
          }
        }
        .echarts_container1 {
          width: 100%;
          height: 720px;
          display: flex;
          align-items: center;
          .left_timer_container {
            width: 140px;
            height: 100%;
            display: flex;
            align-items: center;
            .leftTimerImg {
              display: block;
              width: 95px;
              height: 703px;
            }
          }
          .right_qipao_container {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .echarts_item {
              width: 19%;
              height: 100%;
              background-color: darkgreen;
              display: flex;
              flex-direction: column;
              position: relative;
              .top_panel {
                width: 100%;
                height: 100px;
                background-color: darkorange;
                padding: 11px 12px;
                box-sizing: border-box;
              }
              .bottom_echarts {
                width: 100%;
                flex: 1;
                background-color: darkviolet;
              }
              .model_pop {
                position: absolute;
                top: 10px;
                left: 10px;
                width: 175px;
                height: 268px;
                background-color: deeppink;
              }
            }
          }
        }
      }
    }
  }
}
</style>