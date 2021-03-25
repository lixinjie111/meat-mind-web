<template>
  <div class="card-container" :style="{width:cardData.width}" 
  :class="{'rerb':cardData.title == '客单量' || cardData.title == '流入流出比' || cardData.title =='近7日 UV'|| cardData.title =='核心功能使用的总次数'|| cardData.title =='核心功能渗透率'}">
    <div class="card_title">{{cardData.title}}</div>
    <div class="time_range">{{cardData.timeRange}}</div>
    <div class="time">{{cardData.time}}</div>
    <div class="num_container">
      <div class="num_text">{{formNum}}</div>
      <div class="unit_text">{{cardData.unitText}}</div>
    </div>
    <div class="per_contianer">
      <div class="per_left">
        <span class="per_title" v-if="cardData.leftText">{{cardData.leftText}}</span>
        <img v-if="cardData.leftIcon" :src="cardData.leftIcon" class="per_status" />
        <span v-if="cardData.leftPer" class="per_num" :style="{color:cardData.leftPerColor}" style="margin-right:10px;">{{cardData.leftPer}}</span>
      </div>
      <div class="per_right" ref="per_right">
        <span class="per_title" v-if="cardData.rightText">{{cardData.rightText}}</span>
        <img v-if="cardData.rightIcon" :src="cardData.rightIcon" class="per_status" />
        <span v-if="cardData.rightPer" class="per_num" :style="{color:cardData.rightPerColor}">{{cardData.rightPer}}</span>
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
    this.setStyle();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  computed:{
    formNum(){
      return this.formatNumber(this.numTxt);
    }
  },
  methods: {
    formatNumber(n){
      var b=parseInt(n).toString();
      var len=b.length;
      if(len<=3){return b;}
      var r=len%3;
      return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
    },
    changeNum() {
      var _this = this;
      this.timer = setInterval(() => {
        this.numTxt += 1;
      }, _this.cardData.timer);
    },
    setStyle(){
      var riDom = this.$refs.per_right;
      if(this.cardData.fnType == 5){
        riDom.style="margin-left:56px;";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.card-container {
  min-height: 125px;
  border-right: 1px solid #eaedf7;
  margin-bottom: 28px;
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
    align-items: baseline;
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
    flex-wrap: wrap;
    align-items: center;
    .per_left,
    .per_right {
      display: flex;
      align-items: center;
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
.rerb{
  border-right: none;
}
</style>