<template>
  <div class="target-analyse">
    <div class="cur-situation">
      <!-- <img src="../../../assets/img/mark/situation@2x.png" alt /> -->
      <img src="../../../assets/img/yhhx/serIcon1.png" alt />
      <div class="content">
        <p>当前状况</p>
        <div class="desc">{{descL}}</div>
      </div>
    </div>
    <div class="suggestions">
      <img src="../../../assets/img/yhhx/serIcon2.png" alt />
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
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  .cur-situation,
  .suggestions {
    display: flex;
    width: 50%;
    height: 100%;
    padding: 16px 24px;
    border-radius: 8px;
    overflow: hidden;
    .content {
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
        color: #ffffff;
      }
    }
  }
  .cur-situation {
    margin-right: 24px;
    background: rgba(255, 136, 0, .7);
    img {
      width: 73px;
      height: 74px;
      margin-right: -7px;
      margin-top: -10px;
    }
    .content > p {
      color: #ad5d00;
    }
  }
  .suggestions {
    background: rgba(77, 148, 255, 0.7);
    img {
      width: 64px;
      height: 66px;
      // margin-right: 12px;
      margin-top: -6px;
    }
    .content > p {
      color: #0559d7;
    }
  }
}
</style>