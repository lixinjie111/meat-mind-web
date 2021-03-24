<template>
  <div class="row">
    <div class="col br half">
      <p class="title">{{lTitle}}</p>
      <p class="sub-title">{{ subDate }}</p>
        <div class="operation">
            <slot  name="left-operation">
                <img src="../../../assets/img/mark/more.png" alt="" />
            </slot>
        </div>
      <div class="r-half-echarts">
        <slot name="left"></slot>
      </div>
    </div>
    <div class="col half">
      <p class="title">{{rTitle}}</p>
      <p class="sub-title">{{ subDate }}</p>
        <div class="operation">
            <slot  name="right-operation">
                <img src="../../../assets/img/mark/more.png" alt="" />
            </slot>
        </div>
      <div class="r-half-echarts">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: "Half",
  props: {
    subDate: {
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
  height: 400px;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  .col {
    position: relative;
    height: 100%;
    padding: 16px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eaedf7;
    &.half {
      width: 50%;
    }
    .title {
      height: 22px;
      margin-bottom: 4px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
      line-height: 22px;
    }
    .sub-title {
      height: 18px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636e95;
      line-height: 18px;
    }
    img, .operation {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 16px;
      height: 16px;
    }
      .operation{
          z-index: 2;
      }

    &.br {
      margin-right: 24px;
    }
    .r-half-echarts {
      width: 100%;
      height: calc(100% - 20px);
      margin-top: -20px;
    }
    iframe{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
