<template>
  <div class="side">
    <Menu ref="side_menu" :theme="theme" :active-name="activeName" :open-names="openNames">
      <div v-for="(item, index) in sideList" :key="index">
        <Submenu v-if="item.children" :name="item.name">
          <template slot="title">
            <!--          <Icon type="ios-paper" />-->
            <img class="icon" :src="item.src" alt="" />
            <span class="title-name">{{ item.name }}</span>
          </template>
          <MenuItem
            :name="ele.name"
            :to="ele.path"
            v-for="(ele, i) in item.children"
            :key="i">
            <!-- <router-link class="sub-name" v-if="ele.path" :to="ele.path">{{ele.name}}</router-link> -->
            <!-- <span class="sub-name" v-else>{{ele.name}}</span> -->
            <span class="sub-name">{{ele.name}}</span>
          </MenuItem>
        </Submenu>
        <MenuItem v-else :name="item.name" :to="item.path">
          <img class="icon" :src="item.src" alt="" />
          <span class="sub-name">{{ item.name }}</span>
        </MenuItem>
      </div>
    </Menu>
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
//   watch:{
// openNames() {
//       this.$nextTick(() => {
//         this.$refs.side_menu.updateOpened();
//         this.$refs.side_menu.updateActiveName();
//       })
//     }
//   },
  data() {
    return {
      theme: "light",
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.side {
  width: 240px;
  height: 100%;
  min-height: calc(100vh - 56px);
  background: #ffffff;
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
      }
      &:hover {
        background: #f0f0f0;
        .sub-name {
          color: #333333;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
