<template>
  <div class="card-container" @click="goData" :class="{'ifPointer':ifPointer}">
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
      ifPointer:false
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
  mounted() {
    this.setStyle();
  },
  methods: {
    setStyle(){
      if(this.cardData.title == '上传数据'||this.cardData.title == 'SDK埋点'||this.cardData.title == 'API采集'||this.cardData.title == '数据库直连'){
        this.ifPointer = true;
      }
    },
    goData(){
      if(this.cardData.title == '上传数据'||this.cardData.title == 'SDK埋点'||this.cardData.title == 'API采集'||this.cardData.title == '数据库直连'){
        this.$router.push({
          path:'/data-center/my'
        });
      }
    }
  },
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
      background: #2373FF;
    }
    .iconshangchuanshuju{
      background: #FE774B;
    }
    .iconSDKmaidian{
      background: #1DCEC3;
    }
    .iconAPIcaiji{
      background: #F16E84;
    }
    .iconshujukuzhilian{
      background: #FDD352;
    }
    .iconbangzhu{
      background: #75B1FF;
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
  &:hover{
    box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.1), 4px 6px 20px 0px rgba(134, 143, 191, 0.1);
    border: 1px solid #FFFFFF;
  }
}
.ifPointer{
  cursor: pointer;
}
</style>
