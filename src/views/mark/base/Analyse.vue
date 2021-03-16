<template>
  <div class="target-analyse">
    <div class="cur-situation">
      <!-- <img src="../../../assets/img/mark/situation@2x.png" alt /> -->
      <div class="image">
        <img src="../../../assets/img/mark/warning-new@2x.png" alt />
      </div>
      <div class="content">
        <p>当前状况</p>
        <div class="desc">{{descL}}</div>
      </div>
    </div>
    <div class="suggestions">
      <div class="image">
        <img src="../../../assets/img/mark/suggestion-new@2x.png" alt />
      </div>
      <div class="content">
        <p>策略建议</p>
        <div class="desc">{{descR}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Analyse",
  props: {
    descL: {
      type: String,
      default: ""
    },
    descR: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="scss">
.target-analyse {
  width: 100%;
  height: 106px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  .cur-situation,
  .suggestions {
    display: flex;
    width: 50%;
    height: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    .image{
      flex-shrink:0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 58px;
      margin-right: 16px;
      background: #FFFFFF;
      border-radius: 8px;
      >img{
        width: 42px;
        height: 42px;
      }
    }
    .content {
      // width: calc(100% - 92px);
      display: flex;
      flex-direction: column;
      > p {
        height: 22px;
        margin-bottom: 4px;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        line-height: 22px;
      }
      .desc {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        // overflow: hidden;
      }
    }
  }
  .cur-situation {
    margin-right: 24px;
    background: #FEDFE1;
    // img {
    //   width: 73px;
    //   height: 74px;
    //   margin-right: -7px;
    //   margin-top: -10px;
    // }
    .content {
      color: #FF4C60;
    }
  }
  .suggestions {
    background: #D3E3FF;
    // img {
    //   width: 64px;
    //   height: 66px;
    //   // margin-right: 12px;
    //   margin-top: -6px;
    // }
    .content {
      color: #2373FF;
    }
  }
}
</style>