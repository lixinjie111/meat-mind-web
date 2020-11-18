<template>
  <div class="page">
    <HeaderDefault></HeaderDefault>
    <div class="layout">
      <Side :sideList="side"></Side>
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDefault from "./HeaderDefault";
import Side from "./Side";
export default {
  name: "default",
  components: {
    HeaderDefault,
    Side
  },
  props:{
    side:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
};
</script>

<style scoped lang="scss">
.page {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 2px;
}
.layout {
  display: flex;
  min-height: calc(100vh - 56px);
  .content{
      width: calc(100% - 240px);
  }
}
</style>