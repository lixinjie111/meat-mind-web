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
    :open-names="openNames" 
    @on-select="handleSelect"
    @on-open-change="openChange"
    width="auto" accordion>
      <div v-for="(item, index) in sideList" :key="index">
        <Submenu v-if="item.children" :name="index">
          <template slot="title">
            <i class="icon iconfont" :class="item.icon"></i>
            <span class="title-name">{{ item.name }}</span>
          </template>
          <MenuItem
            :to="ele.path"
            :name="index+'-'+i"
            v-for="(ele, i) in item.children"
            :key="i">
            <span class="sub-name">{{ele.name}}</span>
          </MenuItem>
        </Submenu>
        <MenuItem v-else :name="index" :to="item.path">
          <i class="icon iconfont" :class="item.icon"></i>
          <span class="title-name">{{ item.name }}</span> 
        </MenuItem>
      </div>
    </Menu>

    </div>

  </div>
</template>

<script>
import { EventBus} from "@/utils/eventbus"
export default {
  name: "Side",
  props: {
    sideList: {
      type: Array,
      default: () => {
        return [];
      },
    }
  },
  computed:{
    // menuItem name
    activeName:{
      get(){
        return this.activeN
      },
      set(val){
        return val
      }
      
    },
    // subMenu name
    openNames:{
      get(){
        return this.openN
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
  watch:{
    act(val){
      this.activeN = '0-'+val
    }
  },
  data() {
    return {
      routes: [
        {
          // src: require("../static/img/header/home@2x.png"),
          name: "Dashboard",
          icon:"icondashboard",
          path:"home"
        },
        {
          // src: require("../static/img/header/intelligent-decision@2x.png"),
          name: "智能决策",
          icon:"iconzhinengjuece",
          path:"intelligent-decision"
        },
        {
          // src: require("../static/img/header/business-analysis@2x.png"),
          name: "经营分析",
          icon:"iconjingyingfenxi",
          path:"business-analysis"
        },
        {
          // src: require("../static/img/header/analysis-tool@2x.png"),
          name: "分析工具",
          icon:"iconfenxigongju",
          path:"analysis-tool"
        },
        {
          // src: require("../static/img/header/portrait-system@2x.png"),
          name: "画像系统",
          icon:"iconhuaxiangxitong",
          path:"portrait-system"
        },
        {
          // src: require("../static/img/header/data-center@2x.png"),
          name: "数据管理",
          icon:"iconshujuguanli",
          path:"data-center"
        }
      ],
      active: this.$route.meta.moduleName,
      act:0,
      activeN:this.$route.path=="/business-analysis/ztgl"?"0-0":0,
      openN:[0]

    };
  },
  methods: {
    checkItem(item) {
      this.active = item.path;
      this.targetName = item.name
      this.$router.push({name:item.path})
    },
    // 选择menuItem
    handleSelect(name){
      this.activeN = name
      this.scrollTo(name)
    },
    // 打开subMenu
    openChange(ary){
      console.log(ary)
      this.openN = ary
    },
    scrollTo(name){
      let index = 0
      let ary = ["0-0","0-1","0-2","0-3"]
      index = ary.indexOf(name)
      if(index>-1){
        this.$emit('handleScroll',index)
        EventBus.$emit("index",index)
      }
    }
  },
  created(){
    EventBus.$on('activeTarget',(navIndex)=>{
      this.act = navIndex
    })
  },
  mounted(){
    this.$nextTick(()=>{
      this.$refs.side_menu.updateOpened()
      this.$refs.side_menu.updateActiveName()
    })
  }
};
</script>

<style scoped lang="scss">
.side {
  min-height: 100vh;
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
      // cursor: pointer;
    }
    .route-item{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 88px;
      height: 72px;
      color: #ffffff;
      cursor: pointer;
      &.active{
        color: #253BA0;
        background: url("../static/img/side/active@2x.png") no-repeat left center / 88px 72px;
        &:hover{
          color: #253BA0;
          background: url("../static/img/side/active@2x.png") no-repeat left center / 88px 72px;
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
