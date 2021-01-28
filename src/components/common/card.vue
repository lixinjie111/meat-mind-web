<template>
  <div class="card-container">
    <div class="card_title">{{cardData.title}}</div>
    <div class="time_range">{{cardData.timeRange}}</div>
    <div class="time">{{cardData.time}}</div>
    <div class="num_container">
      <div class="num_text">{{numTxt}}</div>
      <div class="unit_text">{{cardData.unitText}}</div>
    </div>
    <div class="per_contianer">
      <div class="per_left">
        <span class="per_title">{{cardData.leftText}}</span>
        <img :src="cardData.leftIcon" class="per_status" />
        <span class="per_num" :style="{color:cardData.leftPerColor}">{{cardData.leftPer}}</span>
      </div>
      <div class="per_right">
        <span class="per_title">{{cardData.rightText}}</span>
        <img :src="cardData.rightIcon" class="per_status" />
        <span class="per_num" :style="{color:cardData.rightPerColor}">{{cardData.rightPer}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      timer: null,
      numTxt: ""
    };
  },
  props: {
    cardData: {
      type: Object,
      default: {}
    }
  },
  created() {
    this.numTxt = this.cardData.numText;
  },
  mounted() {
    this.changeNum();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    changeNum() {
      var _this = this;
      this.timer = setInterval(() => {
        this.numTxt += 1;
      }, _this.cardData.timer);
    }
  }
};
</script>

<style scoped lang="scss">
.card-container {
  width: 19%;
  min-height: 156px;
  border: 1px solid #eaedf7;
  padding: 12px 11px;
  box-sizing: border-box;
  .card_title {
    width: 100%;
    margin-bottom: 8px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #242f57;
  }
  .time_range {
    width: 100%;
    margin-bottom: 1px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #97a0c3;
  }
  .time {
    width: 100%;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7c88b1;
  }
  .num_container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    margin-bottom: 7px;
    .num_text {
      margin-right: 12px;
      font-size: 30px;
      font-family: HelveticaNeue-Medium, HelveticaNeue;
      font-weight: 500;
      color: #242f57;
    }
    .unit_text {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #7c88b1;
    }
  }
  .per_contianer {
    width: 100%;
    display: flex;
    align-items: center;
    .per_left,
    .per_right {
      width: 50%;
      display: flex;
      .per_status {
        display: block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }
      .per_title {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #7c88b1;
        margin-right: 5px;
      }
      .per_num {
        font-size: 14px;
        font-family: HelveticaNeue;
      }
    }
  }
}
</style>