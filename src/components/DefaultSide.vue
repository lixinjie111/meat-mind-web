<template>
  <div class="side">
    <div class="menu"  v-show="sideList.length">
      <div class="logo"></div>
    <Menu ref="side_menu" theme="light" 
    :active-name="activeName" 
    :open-names="openName" 
    @on-select="handleSelect"
    @on-open-change="openChange"
    width="auto" accordion>
      <div v-for="(item, index) in menu" :key="index">
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
        let obj = this.menu.find(item=>{
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
       menu: [
        {
          name: "dashboard",
          label:"Dashboard",
          icon: "icondashboard",
          path: "dashboard",
        },
        {
          name:"user",
          label: "用户画像",
          icon: "iconyonghuhuaxiang",
          path: "user",
        },
        {
          name:"mark",
          label: "品牌画像",
          icon: "iconpinpaihuaxiang",
          path: "mark",
        },
        { 
          name:"media",
          label: "媒介画像",
          icon: "iconhuaxiangxitong",
          path: "media",
        },
        {
          name:"business-analysis",
          label: "经营分析",
          icon: "iconjingyingfenxi",
          path: "business-analysis",
          children:[
            {
              name:"business-analysis-overview",
              label: "整体概览",
              path: "business-analysis"
            },
            {
              name:"business-analysis-yhfx",
              label: "用户分析",
              path: "business-analysis"
            },
            {
              name:"business-analysis-qdfx",
              label: "渠道分析",
              path: "business-analysis"
            },
            {
              name:"business-analysis-ywgl",
              label: "品牌运营分析",
              path: "business-analysis"
            },
          ]
        },
        {
          name:"analysis-tool",
          label: "分析工具",
          icon: "iconfenxigongju",
          path: "analysis-tool",
          children:[
            {
              name:"analysis-tool",
              label: "分析模型",
              path: "analysis-tool",
            },
            {
              name:"analysis-tool",
              label: "指标管理",
              path: "analysis-tool",
            },
            {
              name:"analysis-tool",
              label: "标签管理",
              path: "analysis-tool",
            },
            {
              name:"analysis-tool",
              label: "用户分群",
              path: "analysis-tool",
            },
            {
              name:"analysis-tool",
              label: "渠道追踪",
              path: "analysis-tool",
            },
            {
              name:"analysis-tool",
              label: "场景库",
              path: "analysis-tool",
            },
          ]
        },
        {
          name:"data-center",
          label: "数据管理",
          icon: "iconshujuguanli",
          path: "data-center",
          children:[
            {
              name:"data-center",
              label: "我的数据",
              path: "data-center",
            },
            {
              name:"data-center",
              label: "数据市场",
              path: "data-center",
            },
            {
              name:"data-center",
              label: "系统集成",
              path: "data-center",
            },
            {
              name:"data-center",
              label: "元数据管理",
              path: "data-center",
            }
          ]
        },
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
      console.log(ary)
      if(!ary.length){return}
      let routeName = ary[0]
      let name = routeName+"-"+this.activeName
      if(name!=this.$route.name){
          let cur = this.sideList.find(item=>{
              return item.name == routeName
          }).children
        this.openName = ary
        this.activeName = cur[0].name
        console.log("open submenu>>>>",ary,this.openName,this.activeName)
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
    console.log(this.$router.options)
  }
};
</script>

<style scoped lang="scss">
.side {
  min-height: 100vh;
  display: flex;
  .menu{
    width: 240px;
    height: 100%;
    background: #ffffff;
    .logo{
      width: 144px;
      height: 32px;
      margin: 24px auto 40px;
      background: url("../assets/img/side/logo-colour@2x.png") no-repeat
        center / 144px 32px;
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
