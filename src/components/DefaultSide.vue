<template>
  <div class="side">
    <div class="target">
      <div class="logo"></div>
      <div class="route-item" :class="{'active':active==item.path}" v-for="(item,index) in routes" :key="index" @click="checkItem(item,index)">
        <i class="iconfont" :class="item.icon"></i>
        <div class="label">{{item.name}}</div>
      </div>
    </div>
    <div class="menu"  v-show="sideList.length">
      <div class="menu-name">{{targetName}}</div>
    <Menu ref="side_menu" theme="light" 
    :active-name="activeName" 
    :open-names="openName" 
    @on-select="handleSelect"
    @on-open-change="openChange"
    width="auto" accordion>
      <div v-for="(item, index) in sideList" :key="index">
        <Submenu v-if="item.children" :name="item.name">
          <template slot="title">
            <i class="icon iconfont" :class="item.icon"></i>
            <span class="title-name">{{ item.label }}</span>
          </template>
          <MenuItem
            :to="ele.path"
            :name="ele.name"
            v-for="(ele, i) in item.children"
            :key="i">
            <span class="sub-name">{{ele.label}}</span>
          </MenuItem>
        </Submenu>
        <MenuItem v-else :name="item.name" :to="item.path">
          <i class="icon iconfont" :class="item.icon"></i>
          <span class="title-name">{{ item.label }}</span> 
        </MenuItem>
      </div>
    </Menu>

    </div>

  </div>
</template>

<script>
export default {
  name: "DefaultSide",
  props: {
    sideList: {
      type: Array,
      default: () => {
        return [];
      },
    }
  },
  computed:{
    // subMenu name
    openSubMenu:{
      get(){
        return this.openName
      },
      set(val){
        return val
      }
    },
    targetName:{
      get(){
        let obj = this.routes.find(item=>{
          return item.path==this.active
        })
        return obj.name
      },
      set(val){
        return val
      }
    }
  },
  data() {
    return {
      routes: [
        {
          name: "Dashboard",
          icon:"icondashboard",
          path:"dashboard"
        },
        // {
        //   name: "智能决策",
        //   icon:"iconzhinengjuece",
        //   path:"intelligent-decision"
        // },
        {
          name: "用户画像",
          icon:"iconzhinengjuece",
          path:"user"
        },
                {
          name: "品牌画像",
          icon:"iconzhinengjuece",
          path:"mark"
        },
                {
          name: "媒介画像",
          icon:"iconzhinengjuece",
          path:"media"
        },
        {
          name: "经营分析",
          icon:"iconjingyingfenxi",
          path:"business-analysis"
        },
        // {
        //   name: "画像系统",
        //   icon:"iconhuaxiangxitong",
        //   path:"portrait-system"
        // },
        {
          name: "分析工具",
          icon:"iconfenxigongju",
          path:"analysis-tool"
        },
        {
          name: "数据管理",
          icon:"iconshujuguanli",
          path:"data-center"
        }
      ],
      active: this.$route.meta.moduleName,
      activeName:"",
      openName:[this.$route.name],//subMenu
    };
  },
  methods: {
    checkItem(item) {
      this.active = item.path;
      this.targetName = item.name
      if(item.path!=this.$route.meta.moduleName){
        this.$router.push({name:item.path})
      }
    },
    // 选择menuItem
    handleSelect(name){
      this.activeName = name
    },
    // 打开subMenu
    openChange(ary){
      if(!ary.length){return}
      let routeName = ary[0]
      let name = routeName+"-"+this.activeName
      if(name!=this.$route.name){
          let cur = this.sideList.find(item=>{
              return item.name == routeName
          }).children
        this.openName = ary
        this.activeName = cur[0].name
        this.$router.push({name:routeName+"-"+this.activeName})
      }
    }
  },
  created(){
    let arr = this.$route.name.split("-")
    if(arr.length>3){
        this.openName = [arr[0]+"-"+arr[1]+"-"+arr[2]]
        this.activeName = arr[arr.length-1]
    }else{
        this.activeName = this.$route.name
    }
  }
};
</script>

<style scoped lang="scss">
.side {
  min-height: 100vh;
  display: flex;
  .target{
    width: 240px;
    height: 100%;
    background: #FFFFFF;
    .logo{
      width: 144px;
      height: 32px;
      margin: 24px auto 40px;
      background:url("../static/img/new/side/logo-colour@2x.png") no-repeat center / 144px 32px;
    }
    .route-item{
      display: flex;
      align-items: center;
      width: 192px;
      height: 48px;
      margin: 24px 32px 0;
      padding-left: 24px;
      color: #97A0C3;
      cursor: pointer;
      &.active{
        color: #FFFFFF;
        background: linear-gradient(71deg,  #2AC4F6 10%,#1B74FF 38%, #2373FF 50%,  #20A5F8 55%,#2AC5F6 61%, #2395FC 94%);
        border-radius: 30px;
        // color: #253BA0;
        // background: url("../static/img/side/active@2x.png") no-repeat left center / 88px 72px;
        &:hover{
          background: linear-gradient(71deg,  #2AC4F6 10%,#1B74FF 38%, #2373FF 50%,  #20A5F8 55%,#2AC5F6 61%, #2395FC 94%);
          border-radius: 30px;
          // color: #253BA0;
          // background: url("../static/img/side/active@2x.png") no-repeat left center / 88px 72px;
        }
      }
      &:hover{
        background: linear-gradient(71deg,  #2AC4F6 10%,#1B74FF 38%, #2373FF 50%,  #20A5F8 55%,#2AC5F6 61%, #2395FC 94%);
        border-radius: 30px;
        // background: url("../static/img/side/hover1@2x.png") no-repeat left center / 88px 72px;
      }
      >i{
        display: inline-block;
        width: 24px;
        height: 24px;
      }
      .label{
        height: 26px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 26px;
      }
    }
  }
  .menu{
    width: 152px;
    background: #FFFFFF;
    .menu-name{
      width: 152px;
      height: 56px;
      padding-left: 36px;
      border-right: 1px solid #F0F0F0;
      border-bottom: 1px solid #F0F0F0;
      background: #FFFFFF;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 56px;
    }
    .ivu-menu{
      padding-top:24px;
    }
  }
}
</style>
<style lang="scss">

  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    width: 152px;
    height: 40px;
    padding: 9px 12px;
  }

  .ivu-menu-vertical .ivu-menu-submenu-title-icon{
    right: 8px;
    // color:#666666
  }

  .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item{
    padding-left: 36px!important;
    >a{
      color:inherit
    }
  }

  .ivu-menu {

    .ivu-menu-submenu{
      .active{
        color: red;
        background: red;
      }
      .ivu-menu-submenu-title {
        width: 152px;
        height: 40px;
        color: #666666;
        &:hover{
          color: #253BA0;
        }
        span>i, >i{
          margin-right: 0;
        }
        .icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          // color: #666666;
        }
        .title-name {
            display: inline-block;
            min-width: 84px;
            height: 22px;
            // margin-right: 8px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            // color: #666666;
            line-height: 22px;
        }
      }
      &.ivu-menu-opened{
        .ivu-menu-submenu-title{
          color: #253BA0;
        }
      }
    }

    .ivu-menu-item {
      color: #666666;
      .icon {
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
      .title-name {
        display: inline-block;
        width: 84px;
        height: 22px;
        // margin-right: 8px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        // color: #666666;
        line-height: 22px;
      }
      &:hover {
         color: #253BA0;
        .title-name{
          color: #253BA0;
        }
      }
    }
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    color: #253BA0;
    background:url("../static/img/side/hover2@2x.png") no-repeat left center / 152px 40px;
    .sub-name {
      color: #253BA0;
      font-weight: 500;
    }
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
    // background:#DDE9FF;
    background: rgba(221,233,255,0.4);
    // opacity:0.1
  }
  .ivu-menu-vertical.ivu-menu-light:after{
    width: 0;
  }
</style>
