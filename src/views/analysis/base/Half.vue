<template>
  <div class="row">
    <div class="col br half">
      <p class="title">{{lTitle}}</p>
      <p class="sub-title">{{ subDateL }}</p>
      <div class="r-half-echarts">
        <slot name="day"></slot>
        <slot name="left"></slot>
        <slot name='echarts'></slot>
      </div>
    </div>
    <div class="col half">
      <p class="title">{{rTitle}}</p>
      <p class="sub-title">{{ subDateR }}</p>
      <div class="r-half-echarts">
        <slot name="right"></slot>
        <slot name="rightEcharts"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Half",
  props: {
    subDateL: {
      type: String,
      default: "",
    },
    subDateR: {
      type: String,
      default: "",
    },
    lTitle:{
        type:String
    },
    rTitle:{
        type:String
    }
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 516px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  .col {
    height: 100%;
    padding: 16px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eaedf7;
    &.half {
      width: 50%;
    }
    .title {
      height: 24px;
      margin-bottom: 4px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #242f57;
      line-height: 24px;
    }
    .sub-title {
      height: 22px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636e95;
      line-height: 22px;
    }

    &.br {
      margin-right: 24px;
    }
    .r-half-echarts {
      width: 100%;
      height: calc(100% - 40px);
    }
    iframe{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
