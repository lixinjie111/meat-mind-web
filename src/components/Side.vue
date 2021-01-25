<template>
  <div class="side">
    <div class="menu">
      <div class="logo"></div>
      <Menu
        ref="side_menu"
        theme="light"
        :active-name="activeName"
        :open-names="openName"
        @on-select="handleSelect"
        @on-open-change="openChange"
        width="auto"
        accordion>
        <div v-for="(item, index) in menu" :key="index">
          <Submenu v-if="item.children" :name="item.name">
            <template slot="title">
              <i class="icon iconfont" :class="item.icon"></i>
              <span class="title-name">{{ item.label }}</span>
            </template>
            <MenuItem
              v-for="(ele, i) in item.children"
              :to="ele.path"
              :name="ele.name"
              :key="i">
              <span class="sub-name">{{ ele.label }}</span>
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
  name: "Side",
  data() {
    return {
      menu: [
        {
          name: "dashboard",
          label:"Dashboard",
          icon: "icondashboard",
          path: "/dashboard",
        },
        {
          name:"user",
          label: "用户画像",
          icon: "iconyonghuhuaxiang",
          path: "/user",
        },
        {
          name:"mark",
          label: "品牌画像",
          icon: "iconpinpaihuaxiang",
          path: "/mark",
        },
        { 
          name:"media",
          label: "媒介画像",
          icon: "iconhuaxiangxitong",
          path: "/media",
        },
        {
          name:"business-analysis",
          label: "经营分析",
          icon: "iconjingyingfenxi",
          path: "/business-analysis",
          children:[
            {
              name:"business-analysis-ztgl",
              label: "整体概览",
              path: "/business-analysis/ztgl"
            },
            {
              name:"business-analysis-yhfx",
              label: "用户分析",
              path: "/business-analysis/yhfx"
            },
            {
              name:"business-analysis-qdfx",
              label: "渠道分析",
              path: "/business-analysis/qdfx"
            },
            {
              name:"business-analysis-ywgl",
              label: "品牌运营分析",
              path: "/business-analysis/ywgl"
            },
          ]
        },
        {
          name:"analysis-tool",
          label: "分析工具",
          icon: "iconfenxigongju",
          path: "/analysis-tool",
          children:[
            {
              name:"analysis-tool-fxmx",
              label: "分析模型",
              path: "/analysis-tool/fxmx",
            },
            {
              name:"analysis-tool-zbgl",
              label: "指标管理",
              path: "/analysis-tool/zbgl",
            },
            {
              name:"analysis-tool-bqgl",
              label: "标签管理",
              path: "/analysis-tool/",
            },
            {
              name:"analysis-tool-yhfq",
              label: "用户分群",
              path: "/analysis-tool/yhfq",
            },
            {
              name:"analysis-tool-qdzz",
              label: "渠道追踪",
              path: "/analysis-tool/qdzz",
            },
            {
              name:"analysis-tool-cjk",
              label: "场景库",
              path: "/analysis-tool/cjk",
            },
          ]
        },
        {
          name:"data-center",
          label: "数据管理",
          icon: "iconshujuguanli",
          path: "/data-center",
          children:[
            {
              name:"data-center-my",
              label: "我的数据",
              path: "/data-center/my",
            },
            {
              name:"data-center-market",
              label: "数据市场",
              path: "/data-center/market",
            },
            {
              name:"data-center-system",
              label: "系统集成",
              path: "/data-center/system",
            },
            {
              name:"data-center-metax",
              label: "元数据管理",
              path: "/data-center/metax",
            }
          ]
        },
      ],
      activeName: "dashboard",
      openName:[this.$route.meta.moduleName]
    };
  },
  methods: {
    checkItem(item) {
      if (item.path != this.$route.meta.moduleName) {
        this.$router.push({ name: item.path });
      }
    },
    // 选择menuItem
    handleSelect(name) {
      this.activeName = name;
    },
    // 打开subMenu
    openChange(ary) {
      if (!ary.length) {
        return;
      }
      let routeName = ary[0];
      if (routeName != this.$route.name) {
        this.openName.splice(0,1,ary[0]);
        let cur = this.menu.find(item=>{
          return item.name == ary[0]
        }).children;
        this.activeName = cur[0].name
        this.$router.push({ name: routeName });
      }
    }
  },
  created(){
    this.activeName = this.$route.name
  }
};
</script>

<style scoped lang="scss">
.side {
  min-height: 100vh;
  display: flex;
  .menu {
    width: 240px;
    height: 100%;
    background: #ffffff;
    .logo {
      width: 144px;
      height: 32px;
      margin: 24px auto 40px;
      background: url("../static/img/new/side/logo-colour@2x.png") no-repeat
        center / 144px 32px;
    }
    .ivu-menu > div{
      width: 240px;
      // height: 48px;
      padding: 0 24px;
      margin: 16px 0;
      line-height: 48px;
      >a{
        display: flex;
        align-items: center;
        width: 192px;
        height: 48px;
        border-radius: 30px;
        padding-left: 24px;
        i {
          font-size: 24px;
          margin-right: 12px;
        }
        .label {
          height: 26px;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          line-height: 26px;
        }
        &.ivu-menu-item-active{
          i{
            margin-right: 21px;
          }
        }
      } 
    }
  }
}
</style>
<style lang="scss">
.ivu-menu-vertical .ivu-menu-item,
.ivu-menu-vertical .ivu-menu-submenu-title {
  font-size: 18px;
  color: #97A0C3;
  padding: 0;
}

// .ivu-menu-vertical .ivu-menu-submenu-title-icon {
//   right: 8px;
//   // color:#666666
// }

// .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
//   padding-left: 36px !important;
//   > a {
//     color: inherit;
//   }
// }

// .ivu-menu {
//   .ivu-menu-submenu {
//     .active {
//       color: red;
//       background: red;
//     }
//     .ivu-menu-submenu-title {
//       width: 152px;
//       height: 40px;
//       color: #666666;
//       &:hover {
//         color: #253ba0;
//       }
//       span > i,
//       > i {
//         margin-right: 0;
//       }
//       .icon {
//         width: 16px;
//         height: 16px;
//         margin-right: 8px;
//         // color: #666666;
//       }
//       .title-name {
//         display: inline-block;
//         min-width: 84px;
//         height: 22px;
//         // margin-right: 8px;
//         font-size: 14px;
//         font-family: PingFangSC-Regular, PingFang SC;
//         font-weight: 400;
//         // color: #666666;
//         line-height: 22px;
//       }
//     }
//     &.ivu-menu-opened {
//       .ivu-menu-submenu-title {
//         color: #253ba0;
//       }
//     }
//   }

//   .ivu-menu-item {
//     color: #666666;
//     .icon {
//       width: 16px;
//       height: 16px;
//       margin-right: 8px;
//     }
//     .title-name {
//       display: inline-block;
//       width: 84px;
//       height: 22px;
//       // margin-right: 8px;
//       font-size: 14px;
//       font-family: PingFangSC-Regular, PingFang SC;
//       font-weight: 400;
//       // color: #666666;
//       line-height: 22px;
//     }
//     &:hover {
//       color: #253ba0;
//       .title-name {
//         color: #253ba0;
//       }
//     }
//   }
// }
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  // color: #97A0C3;
  // background: none;
  color: #FFFFFF;
  background: url("../static/img/new/side/rectangle@2x.png") no-repeat
        center / 192px 48px;
  border-radius: 30px;
  font-size: 18px;
  .sub-name {
    color: #FFFFFF;
    // color:#97A0C3;
    font-size: 18px;
  }
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
  background:none
}
.ivu-menu-vertical.ivu-menu-light:after {
  width: 0;
}
.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover{
  color: #2373FF;
}
</style>
