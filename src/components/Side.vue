<template>
  <div class="side">
    <div class="target">
      <div class="logo"></div>
      <div
        class="route-item"
        :class="{'active':active==item.path}"
        v-for="(item,index) in routes"
        :key="index"
        @click="checkItem(item,index)">
        <i class="iconfont" :class="item.icon"></i>
        <div class="label">{{item.name}}</div>
      </div>
    </div>
    <div class="menu" v-if="sideList.length">
      <a-menu ref="side_menu" 
        :default-selected-keys="['0']"
        :default-open-keys="['0']" width="152">
        <div v-for="(item, index) in sideList" :key="index">
          <a-sub-menu v-if="item.children" :name="item.name">
            <template slot="title">
              <!--          <Icon type="ios-paper" />-->
              <img class="icon" :src="item.src" alt="" />
              <span class="title-name">{{ item.name }}</span>
            </template>
            <a-menu-item
              :name="ele.name"
              :to="ele.path"
              v-for="(ele, i) in item.children"
              :key="i">
              <!-- <router-link class="sub-name" v-if="ele.path" :to="ele.path">{{ele.name}}</router-link> -->
              <!-- <span class="sub-name" v-else>{{ele.name}}</span> -->
              <span class="sub-name">{{ele.name}}</span>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item v-else :name="item.name" :to="item.path">
            <img class="icon" :src="item.src" alt="" />
            <span class="title-name">{{ item.name }}</span> 
          </a-menu-item>
        </div>
      </a-menu>
    </div>

  </div>
</template>

<script>
export default {
  name: "Side",
  props: {
    sideList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed:{
    activeName(){
      if(this.sideList[0].children){
        return this.sideList[0].children[0].name
      }else{
        return this.sideList[0].name
      }
    },
    openNames(){
      if(this.sideList[0].children){
        let ary = []
        ary.push(this.sideList[0].name)
        return ary
      }else{
        return []
      }
    }
  },
  data() {
    return {
      routes: [
        {
          src: require("../static/img/header/home@2x.png"),
          name: "首页",
          icon:"iconshouye",
          path:"home"
        },
        {
          src: require("../static/img/header/intelligent-decision@2x.png"),
          name: "智能决策",
          icon:"iconzhinengjuece",
          path:"intelligent-decision"
        },
        {
          src: require("../static/img/header/business-analysis@2x.png"),
          name: "经营分析",
          icon:"iconjingyingfenxi",
          path:"business-analysis"
        },
        {
          src: require("../static/img/header/analysis-tool@2x.png"),
          name: "分析工具",
          icon:"iconfenxigongju",
          path:"analysis-tool"
        },
        {
          src: require("../static/img/header/portrait-system@2x.png"),
          name: "画像系统",
          icon:"iconhuaxiangxitong",
          path:"portrait-system"
        },
        {
          src: require("../static/img/header/data-center@2x.png"),
          name: "数据管理",
          icon:"iconshujuguanli",
          path:"data-center"
        }
      ],
      active: this.$route.meta.moduleName
    };
  },
  methods: {
    checkItem(item) {
      this.active = item.path;
      this.$router.push({name:item.path})
    }
  },
};
</script>

<style scoped lang="scss">
.side {
  height: 100%;
  display: flex;
  .target{
    width: 88px;
    height: 100%;
    background: #253BA0;
    .logo{
      height: 56px;
      margin-bottom: 16px;
      background:center no-repeat url("../static/img/side/logo@2x.png");
      background-size: 32px 32px ;
    }
    .route-item{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 88px;
      height: 72px;
      color: #ffffff;
      &.active{
        color: #253BA0;
        background: url("../static/img/side/active@2x.png") no-repeat left center / 88px 72px;
        &:hover{
          background: url("../static/img/side/hover1@2x.png") no-repeat left center / 88px 72px;
        }
      }
      &:hover{
        background: url("../static/img/side/hover1@2x.png") no-repeat left center / 88px 72px;
      }
      >i{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-bottom: 4px;
      }
      .label{
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 22px;
      }
    }
  }
  .menu{
    width: 152px;
    border-top: 1px solid #F0F0F0;
  }
  .ivu-menu-submenu-title {
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      vertical-align: text-bottom;
    }
    .title-name {
      height: 22px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;
      line-height: 22px;
    }
  }
  .ivu-menu {
    .ivu-menu-item {
      .icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
        vertical-align: text-bottom;
      }
      .title-name {
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 22px;
      }
      .sub-name {
        font-size: 14px;
        color: #666666;
        margin-left: 20px;
      }
      &:hover {
        background: #f0f0f0;
        .sub-name {
          color: #333333;
          font-weight: 500;
        }
        .title-name{
          color: #333333;
          font-weight: 500;
        }
      }
    }
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    background:#F0F0F0;
    .sub-name {
      color: #333333;
      font-weight: 500;
    }
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
    background:#F0F0F0;
  }
  .ivu-menu-vertical.ivu-menu-light:after{
    width: 0;
  }

}
</style>
