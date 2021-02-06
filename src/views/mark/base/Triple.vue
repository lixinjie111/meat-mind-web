TripleTriple<template>
  <div class="row">
    <div class="col br triple">
      <p class="title">{{title1}}</p>
      <p class="sub-title">{{ subDate }}</p>
      <div class="r-triple-echarts">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="col br triple">
      <p class="title">{{title2}}</p>
      <p class="sub-title">{{ subDate }}</p>
      <div class="r-triple-echarts">
        <slot name="mid"></slot>
      </div>
    </div>
    <div class="col triple">
      <p class="title">{{title3}}</p>
      <p class="sub-title">{{ subDate }}</p>
      <div class="r-triple-echarts">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Triple",
  props: {
    subDate: {
      type: String,
      default: "",
    },
    title1:{
        type:String
    },
    title2:{
        type:String
    },
    title3:{
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
  height: 275px;
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
    &.triple {
      width: 33.3%;
    }
    .title {
      height: 24px;
      margin-bottom: 4px;
      font-size: 14px;
      color: #242f57;
      line-height: 24px;
    }
    .sub-title {
      height: 18px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636e95;
      line-height: 18px;
    }

    &.br {
      margin-right: 24px;
    }
    .r-triple-echarts {
      width: 100%;
      height: calc(100% - 20px);
      margin-top: -20px;
    }
  }
}
</style>
