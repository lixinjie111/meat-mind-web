<template>
  <div class="sass-header">
    <!-- <div class="target">{{target}}</div> -->
    <div class="search">
      <img src="../static/img/header/search@2x.png" alt="">
      <input class="input-search" type="text" placeholder="输入关键词进行搜索...">
    </div>
    <div class="control">
        <div class="service">
          <i class="iconfont iconbangzhuline"></i>
          <div class="group"></div>
        </div>
        <div class="alarm">
          <i class="iconfont icontixing"></i>
          <div class="group"></div>
        </div>

      <div class="column"></div>
      <div class="avatar">
        <template v-if="flag==1">
          <img class="user" src="../assets/img/login/head2.png" alt="">
          <span>企业主</span>
        </template>
        <template v-else-if="flag==2">
          <img class="user" src="../assets/img/login/head3.png" alt="">
          <span>数据管理员</span>
        </template>
        <template v-else>
          <img class="user" src="../assets/img/login/head1.png" alt="">
          <span>分析师</span>
        </template>
        <img class="triangle" src="../assets/img/header/triangle@2x.png" alt="">
      </div>
    </div>
    <BackTop></BackTop>
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
  // position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /*width: 100%;*/
  height: 64px;
  padding: 0 24px;
  background: #fff;

  .target{
    height: 32px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #242F57;
    line-height: 32px;
  }
  .search{
    position: relative;
    cursor: pointer;
    .input-search{
      width: 360px;
      height: 32px;
      padding-left:44px;
      box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8) inset, -2px -2px 7px 0px #FFFEFA inset;
      border-radius: 8px;
      border: 0.88px solid #C6CBDE;
      outline-style: none;
      /*&:hover{*/
      /*  border: 1px solid #C6CBDE;*/
      /*}*/
    }
    input::-webkit-input-placeholder{
      color: #97A0C3;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
    }
    img{
      position: absolute;
      top: 4px;
      left: 16px;
      width: 24px;
      height: 24px;
      padding: 2px;
      opacity: 0.4;
      color:  #242F57;
    }
  }  
  .control{
    display: flex;
    // justify-content: flex-end;
    align-items: center;
    .service,.alarm{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      margin-left: 16px;
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 4px 4px 8px 0px rgba(36, 47, 87, 0.06), -4px -4px 9px 0px rgba(255, 255, 255, 0.59);
      border: 1px solid #FFFFFF;
      border-radius: 50%;
      cursor: pointer;
      >i{ 
        color: #7C88B1;
        font-size: 24px;    
      }
      &:hover{
        color: #2373FF;
      }
    }
    .alarm{
      position: relative;
      .group{
        position: absolute;
        width: 5px;
        height: 5px;
        background: #F54A45;
        border-radius: 50%;
        top: 8px;
        right: 8px;
      }
    }
    .column{
      width: 1px;
      height: 32px;
      margin: 0 20px;
      background: #EAEDF7;
    }
    .avatar{
      display: flex;
      align-items: center;
      height: 40px;
      cursor:pointer;
      .user{
        width: 40px;
        height: 40px;
        margin-right: 10px;
        box-shadow: 4px 4px 8px 0px rgba(36, 47, 87, 0.2);
        border-radius: 28px;
        border: 1px solid #FFFFFF;
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
