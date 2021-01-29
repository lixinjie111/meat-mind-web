<template>
  <div class="sass-header">
    <!-- <div class="target">{{target}}</div> -->
    <div class="search">
      <img src="../static/img/header/search@2x.png" alt="">
      <input class="input-search" type="text" placeholder="输入关键词进行搜索...">
    </div>
    <div class="control">
      <Tooltip content="消息通知" theme="light">
        <div class="alarm">
          <i class="iconfont iconzhong"></i>
          <div class="group"></div>
        </div>
      </Tooltip>

      <div class="column"></div>
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  background: #F4F7FC;
  &:after{
    position: absolute;
    left: 0;
    bottom: 0;
    content:"";
    width: 100%;
    height: 4px;
    background: #FAFCFF;
    box-shadow:inset 0px 1px 1px 0px rgba(211,213,217,0.63);
  }
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
      background: #F4F7FC ;
      box-shadow: inset 2px 2px 8px 0px rgba(210, 213, 225, 0.8), inset -2px -2px 8px 0px #FFFEFA;
      border-radius: 20px;
      // border: 1px solid #D2D5E1;
      border: none;
      outline-style: none;
      &:hover{
        border: 1px solid #D2D5E1;
      }
    }
    input::-webkit-input-placeholder{
      color: #97A0C3;
      font-size: 14px;
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
    .alarm{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #FFFFFF;
      cursor: pointer;
      &:hover{
        color: #2373FF;
      }
      i{ 
        font-size: 24px;    
      }
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
        border-radius: 50%;
      }
      span{
        display: inline-block;
        height: 26px;
        font-size: 18px;
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
