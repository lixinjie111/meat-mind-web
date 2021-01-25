<template>
  <div class="sass-header">
    <div class="target">{{target}}</div>
    <div class="control">
      <div class="search">
        <img src="../static/img/header/search@2x.png" alt="">
        <input class="input-search" type="text">
      </div>
      <div class="alarm">
        <img class="clock" src="../static/img/header/clock@2x.png" alt="">
        <img class="group" src="../static/img/header/group@2x.png" alt="">
      </div>
      <div class="avatar">
        <img class="user" src="../static/img/header/oval@2x.png" alt="">
        <span v-if="flag==1">企业主</span>
        <span v-else-if="flag==2">数据管理员</span>
        <span v-else>分析师</span>
        <img class="triangle" src="../static/img/new/header/triangle@2x.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultHeader",
  props:{
    target:{
      type:String
    }
  },
  data() {
    return {
      flag:localStorage.getItem("dashboard")
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.sass-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 24px;
  background: #F4F7FC;
  .target{
    height: 32px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #242F57;
    line-height: 32px;
  }
  .control{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
    .search{
      position: relative;
      cursor: pointer;
      .input-search{
        width: 280px;
        height: 40px;
        padding-left:40px;
        background: #F4F7FC ;
        box-shadow: inset 2px 2px 8px 0px rgba(210, 213, 225, 0.8), inset -2px -2px 8px 0px #FFFEFA;
        border-radius: 20px;
        border: 1px solid #D2D5E1;
        outline-style: none;
      }
      img{
        position: absolute;
        top: 8px;
        left: 12px;
        width: 24px;
        height: 24px;

      }
    }
    .alarm{
      position: relative;
      width: 56px;
      height: 56px;
      img{ 
        width: 24px;
        height: 24px;
        margin: 16px;
        cursor: pointer;
      }
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
      display: flex;
      align-items: center;
      height: 56px;
      padding-left:24px;
      cursor:pointer;
      .user{
        width: 42px;
        height: 42px;
        margin-right: 8px;
        border-radius: 50%;
      }
      span{
        display: inline-block;
        height: 26px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        line-height: 26px;
      }
      .triangle{
        width: 16px;
        height: 16px;
        margin-left: 12px;
      }
    }
  }
}
</style>
