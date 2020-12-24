<template>
  <div class="sass-header">
    <!-- <div class="target">{{target}}</div> -->
    <div class="control">
      <div class="search">
        <img src="../static/img/header/search@2x.png" alt="">
      </div>
      <div class="help">
        <img src="../static/img/header/help-doc@2x.png" alt="">
      </div>
      <div class="alarm">
        <img class="clock" src="../static/img/header/clock@2x.png" alt="">
        <img class="group" src="../static/img/header/group@2x.png" alt="">
      </div>
      <div class="avatar">
        <img src="../static/img/header/oval@2x.png" alt="">
        <span v-if="flag==1">企业主</span>
        <span v-else-if="flag==2">数据管理员</span>
        <span v-else>分析师</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderDefault",
  data() {
    return {
      flag:sessionStorage.getItem("dashboard")
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.sass-header {
  width: 100%;
  height: 56px;
  background: #FFFFFF;
  // .target{
  //   width: 151px;
  //   height: 56px;
  //   padding-left: 36px;
  //   border-right: 1px solid #F0F0F0;
  //   background: #FFFFFF;
  //   font-size: 14px;
  //   font-family: PingFangSC-Medium, PingFang SC;
  //   font-weight: 500;
  //   color: #333333;
  //   line-height: 56px;
  // }
  .control{
    display: flex;
    justify-content: flex-end;
    width: 340px;
    height: 56px;
    padding-right: 24px;
    margin-left: auto;
    .search,.help,.alarm{
      width: 56px;
      height: 56px;
      img{ 
        width: 24px;
        height: 24px;
        margin: 16px;
        cursor: pointer;
      }
    }
    .alarm{
      position: relative;
      .group{
        position: absolute;
        top: 12px;
        right: 12px;
        width: 16px;
        height: 16px;
        margin: 0;
      }
    }
    .avatar{
      // width: 130px;
      height: 56px;
      padding-left:24px;
      line-height: 56px;
      cursor:pointer;
      img{
        width: 32px;
        height: 32px;
        margin-right: 8px;
        vertical-align: middle;
      }
      span{
        display: inline-block;
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 22px;
      }
    }
  }
}
</style>
