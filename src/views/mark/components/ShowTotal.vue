<template>
  <div class="show-total-container">
    <div class="s-t-top">
      <div class="panel1">
        <div class="title">
          <div class="left">
            <div class="top">综合评价指数</div>
            <div class="bm">截至2020/12/14</div>
          </div>
          <div class="rt">92</div>
        </div>
        <div class="nav1">
          <div class="left">
            <div class="top">77</div>
            <div class="bm">近6月最高分</div>
          </div>
          <div class="rt">
            <img src="../../../assets/img/media/line1.png" alt />
          </div>
        </div>
        <div class="nav2">
          <div class="left">
            <div class="top">69</div>
            <div class="bm">近6月最低分</div>
          </div>
          <div class="rt">
            <img src="../../../assets/img/media/line2.png" alt />
          </div>
        </div>
      </div>
      <div class="panel2">
        <div class="text1">
          <div class="circle1">
            <div class="circle"></div>
          </div>
          <div class="text">品牌综合评估在同行业排名为前7%</div>
        </div>
        <div class="text1">
          <div class="circle1">
            <div class="circle"></div>
          </div>
          <div class="text">“品牌心智占据力”和“品牌忠诚度”需要重点提升</div>
        </div>
        <div class="text1">
          <div class="circle1">
            <div class="circle"></div>
          </div>
          <div class="text">核心竞对品牌黄振龙和潘高寿增长态势显著，需要密切关注</div>
        </div>
        <!-- <div class="text1">
          <div class="circle1">
            <div class="circle"></div>
          </div>
          <div class="text">近期负面舆情影响力较小，无需反击</div>
        </div>-->
      </div>
    </div>
    <div class="panel3">
      <div class="left">
        <LeidaEcharts :colorList="$fjData.colorList" :myData="$fjData.box14Data" titleText="92"></LeidaEcharts>
      </div>
      <div class="rt">
        <div class="detail-info">
          <div class="detail-info-item">
            <div class="detail-info-left">
              <p>营销覆盖度</p>
              <i class="iconfont2 iconjieshou"></i>
            </div>
            <div class="detail-info-rt">
              <p>认可度</p>
              <i class="iconfont2 iconguanyu1"></i>
            </div>
          </div>
          <div class="detail-info-item">
            <div class="detail-info-left">
              <p>匹配度</p>
              <i class="iconfont2 iconguanyu1"></i>
            </div>
            <div class="detail-info-rt">
              <p>占据力</p>
              <i class="iconfont2 iconjieshou"></i>
            </div>
          </div>
          <div class="detail-info-item">
            <div class="detail-info-left">
              <p>忠诚度</p>
              <i class="iconfont2 iconguanyu1"></i>
            </div>
            <div class="detail-info-rt">
              <p>传播度</p>
              <i class="iconfont2 iconjieshou"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeidaEcharts from "../../../components/echarts/common/LeidaEcharts"
export default {
  name: "ShowTotal",
  components:{LeidaEcharts}
};
</script>

<style lang="scss" scoped>
.show-total-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .s-t-top {
    height: 166px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    .panel1 {
      width: 50%;
      height: 166px;
      margin-right: 16px;
      background: url("../../../assets/img/mark/total-bg@2x.png") no-repeat
        center center / 100% 166px;
      box-shadow: 4px -4px 24px 0px rgba(31, 58, 109, 0.55);
      border-radius: 8px;
      position: relative;
      .title {
        margin-left: 16px;
        margin-top: 6px;
        // height: 70px;
        margin-right: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          .top {
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #ffffff;
            line-height: 24px;
          }
          .bm {
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            line-height: 20px;
          }
        }
        .rt {
          font-size: 48px;
          font-family: Archivo-Bold, Archivo;
          font-weight: bold;
          color: #ffffff;
          line-height: 56px;
          text-shadow: 2px 2px 4px #144bd4;
        }
      }
      .nav1 {
        position: absolute;
        bottom: 48px;
        left: 0;
        width: 100%;
        padding: 8px 0 8px 16px;
        height: 47px;
        background: rgba(20, 85, 217, 0.6);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          flex-direction: column;
          width: 50%;
          height: 32px;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          .top {
            font-size: 18px;
            font-family: Helvetica;
            color: #4fee3e;
            line-height: 18px;
          }
          .bm {
            margin-top: -2px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            line-height: 20px;
          }
        }
        .rt {
          width: 50%;
          display: flex;
          justify-content: center;
          img {
            width: 66px;
            display: block;
          }
        }
      }
      .nav2 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 47px;
        padding: 8px 0 8px 16px;
        background: rgba(20, 85, 217, 0.6);
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          display: flex;
          flex-direction: column;
          width: 50%;
          height: 32px;
          border-right: 1px solid rgba(255, 255, 255, 0.3);
          .top {
            font-size: 18px;
            font-family: Helvetica;
            color: #ff9200;
            line-height: 18px;
          }
          .bm {
            margin-top: -2px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            line-height: 20px;
          }
        }
        .rt {
          width: 50%;
          display: flex;
          justify-content: center;
          img {
            width: 66px;
            display: block;
          }
        }
      }
    }
    .panel2 {
      width: 50%;
      height: 166px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #242f57;
      background: rgba(219, 234, 255, 0.8);
      border-radius: 8px;
      border: 1px solid #4d94ff;
      .text1 {
        display: flex;
        .circle1 {
          .circle {
            width: 5px;
            height: 5px;
            margin-top: 5px;
            display: inline-block;
            background: #ff9200;
            border-radius: 50%;
            margin-right: 6px;
          }
        }
        .text {
          flex: 1;
        }
      }
    }
  }
  .panel3 {
    height: 206px;
    background: rgba(237, 235, 254, 0.6);
    border-radius: 8px;
    border: 1px solid #a49dfa;
    padding: 16px;
    display: flex;

    .left {
      width: 50%;
      height: 100%;
      border-right: 1px solid rgba(255, 255, 255, 0.3);
    }

    .rt {
      width: 50%;
      height: 100%;
      padding-left:16px;
      display: flex;
      align-items: center;
      justify-content: center;
      .detail-info {
        width: 100%;
        .detail-info-item {
          display: flex;
          height: 32px;
          margin-bottom: 8px;
          .detail-info-left,
          .detail-info-rt {
            width: 50%;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242f57;
            }
            > i {
              font-size: 16px;
              border-radius: 50%;
              &.iconjieshou {
                color: rgba(52, 199, 36, 1);
              }
              &.iconguanyu1 {
                color: rgba(255, 146, 0, 1);
              }
            }
          }
          .detail-info-left{
              margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>