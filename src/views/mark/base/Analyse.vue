<template>
  <div class="target-analyse">
    <div class="cur-situation">
      <img src="../../../assets/img/mark/situation@2x.png" alt />
      <div class="content">
        <p>当前状况</p>
        <div class="desc">{{descL}}</div>
      </div>
    </div>
    <div class="suggestions">
      <img src="../../../assets/img/mark/suggestion@2x.png" alt />
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
    opacity: 0.7;
    overflow: hidden;
    img {
      width: 42px;
      height: 42px;
      margin-right: 12px;
    }
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
    background: #ff8800;
    .content > p {
      color: #ad5d00;
    }
  }
  .suggestions {
    background: #4d94ff;
    .content > p {
      color: #0559d7;
    }
  }
}
</style>