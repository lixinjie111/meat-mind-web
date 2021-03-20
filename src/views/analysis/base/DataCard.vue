<template>
  <div class="data-card" :class="colourful">
    <div class="item-title">{{title}}</div>
    <div class="item-target">
      <span class="num">{{num}}</span>
      <span class="text">{{text}}</span>
    </div>
    <div class="item-details">
      <Compare :data="data"></Compare>
    </div>
  </div>
</template>

<script>
import Compare from "./Compare";
export default {
  name: "DataCard",
  components: { Compare },
  props: {
    colourful: {
      type: String,
      default: "blue",
    },
    data:{
        type:Array,
        default:()=>{
            return [9.07,9.07]
        }
    },
    title:{
        type:String
    },
    num:{
        type:String
    },
    text:{
        type:String
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.data-card {
  width: 276px;
  height: 102px;
  padding: 16px 0 10px 20px;
  margin-bottom: 16px;
  color: #ffffff;
  box-shadow: 2px 4px 10px 0px rgba(41, 59, 149, 0.3);
  border-radius: 8px;
  &.blue {
    background: linear-gradient(225deg, #1c66de 0%, #98a0f9 100%);
  }
  &.green {
    background: linear-gradient(221deg, #03a8c8 0%, #8bd5ae 100%);
  }
  &.orange {
    background: linear-gradient(224deg, #f36763 0%, #fab698 100%);
  }
  &.purple {
    background: linear-gradient(224deg, #8378f9 0%, #c392e4 100%);
  }

  .item-title {
    height: 20px;
    margin-bottom: 4px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
  }
  .item-target {
      display: flex;
      align-items: flex-end;
    .num {
      height: 28px;
      margin-right: 5px;
      font-size: 24px;
      font-family: HelveticaNeue-Bold, HelveticaNeue;
      font-weight: bold;
      color: #ffffff;
      line-height: 29px;
    }
    .text {
      height: 20px;
      margin-bottom: 1px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
    }
  }
  .item-details {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
}
</style>