<template>
  <div class="card-container">
    <div class="til_icon_container">
      <i :class="['iconfont', cardData.iconfont]"></i>
      <span class="guide_til">{{ cardData.title }}</span>
    </div>
    <div class="guide_desc">{{ cardData.desc }}</div>
    <div class="guide_status_container">
      <span class="status_txt" :style="fontcolor">{{
        cardData.statusTxt
      }}</span>
      <img
        :src="cardData.statusIcon"
        alt=""
        srcset=""
        class="fished"
        v-if="cardData.statusTxt == '已完成'"
      />
      <img :src="cardData.statusIcon" alt="" srcset="" class="viewed" v-else />
    </div>
  </div>
</template>

<script>
export default {
  name: "card0",
  data() {
    return {
      timer: null,
      numTxt: "",
      fontcolor: null,
    };
  },
  props: {
    cardData: {
      type: Object,
      default: {},
    },
  },
  created() {
    if (this.cardData.statusTxt == "去查看") {
      this.fontcolor = "color:#2373FF;";
    } else {
      this.fontcolor = "color:#7C88B1;";
    }
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped lang="scss">
.card-container {
  width: 32%;
  margin-bottom: 16px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #eaedf7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .til_icon_container {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    .guidIcon {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      border: 1px solid #ffffff;
      margin-right: 8px;
    }
    .iconfont{
      width: 42px;
      height: 42px;
      border-radius: 8px;
      margin-right: 16px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
    }
    .iconxinrenlibao{
      background: #A49DFA;
      box-shadow: 2px 3px 8px 0 rgba(164, 157, 250, 0.5), -2px -2px 8px 0px #FFFFFF;
    }
    .iconshangchuanshuju{
      background: #FC809F;
      box-shadow: 2px 3px 8px 0 rgba(252, 128, 159, 0.5), -2px -2px 8px 0px #FFFFFF;
    }
    .iconSDKmaidian{
      background: #FFD98C;
      box-shadow: 2px 3px 8px 0px rgba(255, 217, 140, 0.5), -2px -2px 8px 0px #FFFFFF;
    }
    .iconAPIcaiji{
      background: #8AE6C7;
      box-shadow: 2px 3px 8px 0 rgba(138, 230, 199, 0.5), -2px -2px 8px 0px #FFFFFF;
    }
    .iconshujukuzhilian{
      background: #B380B6;
      box-shadow: 2px 3px 8px 0px rgba(179, 128, 182, 0.5), -2px -2px 8px 0px #FFFFFF;
    }
    .iconbangzhuzhongxin{
      background: #738AD4;
      box-shadow: 2px 3px 8px 0 rgba(115, 138, 212, 0.5), -2px -2px 8px 0px #FFFFFF;
    }
    .guide_til {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #242f57;
    }
  }
  .guide_desc {
    margin-bottom: 6px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7c88b1;
  }
  .guide_status_container {
    display: flex;
    align-items: center;
    .status_txt {
      margin-right: 5px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #7c88b1;
    }
    .fished {
      display: block;
      width: 14px;
      height: 14px;
    }
    .viewed {
      width: 10px;
      height: 10px;
      display: block;
    }
  }
}
</style>
