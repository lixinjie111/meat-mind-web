<template>
  <div class="datacenter-model-search">
    <div class="left"></div>
    <slot name="text">
      <div class="search">
        <i class="iconfont iconSearch"></i>
        <span>请输入事件名或事件显示名</span> 
      </div>
    </slot> 
    <div class="empty">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.datacenter-model-search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 56px;
  margin-bottom: 4px;
  // background: #FFFFFF;
  // box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
  // border-radius: 8px;
  .left{
    flex:auto
  }
  .empty {
    display: flex;
    height: 56px;
    align-items: center;
    // flex: auto;
    // border-right: 2px solid #eaedf7;
  }
  .search {
    display: flex;
    align-items: center;
    // justify-content: center;
    width: 260px;
    height: 32px;
    padding-left: 12px;
    background: #FFFFFF;
    border-radius: 4px;
    > i {
      width: 20px;
      height: 20px;
      color: #7c88b1;
      font-size: 20px;
      margin-right: 8px;
      line-height: 20px;
    }
    > span {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #97a0c3;
    }
  }
}
</style>