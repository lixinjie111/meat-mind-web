<template>
  <div class="sass-header">
    <div class="nav">
      <img src="../static/img/header/fold@2x.png" alt />
    </div>
    <div class="logo">
      <img src="../static/img/header/bg@2x.png" alt />
    </div>
    <div class="route">
      <div
        class="route-item"
        :class="{'active':active==item.path}"
        v-for="(item,index) in routes"
        :key="index"
        @click="checkItem(item,index)">
        <img :src="item.src" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
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
        <span>分析师</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderDefault",
  data() {
    return {
      routes: [
        {
          src: require("../static/img/header/home@2x.png"),
          name: "首页",
          path:"home"
        },
        {
          src: require("../static/img/header/intelligent-decision@2x.png"),
          name: "智能决策",
          path:"intelligent-decision"
        },
        {
          src: require("../static/img/header/business-analysis@2x.png"),
          name: "经营分析",
          path:"business-analysis"
        },
        {
          src: require("../static/img/header/analysis-tool@2x.png"),
          name: "分析工具",
          path:"analysis-tool"
        },
        {
          src: require("../static/img/header/portrait-system@2x.png"),
          name: "画像系统",
          path:"portrait-system"
        },
        {
          src: require("../static/img/header/data-center@2x.png"),
          name: "数据管理",
          path:"data-center"
        }
      ],
      active: this.$route.name
    };
  },
  methods: {
    checkItem(item) {
      this.active = item.path;
      this.$router.push({name:item.path})
    }
  }
};
</script>

<style lang="scss" scoped>
.sass-header {
  width: 100%;
  height: 56px;
  background: #333333;
  display: flex;
  .nav {
    width: 56px;
    height: 56px;
    background: #212121;
    img {
      width: 24px;
      height: 24px;
      margin: 16px;
    }
  }
  .logo {
    width: 184px;
    height: 56px;
    padding: 16px 40px 16px 24px;
    img {
      width: 120px;
      height: 24px;
    }
  }
  .route {
    display: flex;
    .route-item {
      height: 56px;
      padding: 0 20px;
      line-height: 56px;
      cursor: pointer;
      img {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        vertical-align: text-bottom;
      }
      > span {
        display: inline-block;
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
      }
      &:hover {
        background: #2373ff;
      }
      &.active {
        background: #2373ff;
      }
    }
  }
  .control{
    display: flex;
    width: 274px;
    height: 56px;
    margin-left: auto;
    .search,.help,.alarm{
      width: 48px;
      height: 56px;
      img{
        width: 16px;
        height: 16px;
        margin: 20px 16px;
        cursor: pointer;
      }
    }
    .alarm{
      position: relative;
      .group{
        position: absolute;
        top: 17px;
        right: 12px;
        width: 10.5px;
        height: 10.5px;
        margin: 0;
      }
    }
    .avatar{
      width: 130px;
      height: 56px;
      padding: 0 24px;
      line-height: 56px;
      cursor:pointer;
      img{
        width: 32px;
        height: 32px;
        margin-right: 8px;
        vertical-align: middle;
      }
      span{
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
      }
    }
  }
}
</style>
