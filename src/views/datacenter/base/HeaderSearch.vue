<template>
  <div class="datacenter-model-search">
    <div class="empty">
      <slot></slot>
    </div>
    <slot name="text">
      <div class="search">
        <i class="iconfont iconSearch"></i>
        <span>请输入事件名或事件显示名</span> 
      </div>
    </slot> 
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
  margin-bottom: 8px;
  background: #ffffff;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 12px;
  border: 1px solid #eaedf7;
  .empty {
    height: 56px;
    flex: auto;
    border-right: 2px solid #eaedf7;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 246px;
    height: 56px;
    > i {
      width: 24px;
      height: 24px;
      color: #7c88b1;
      font-size: 24px;
      margin-right: 8px;
      line-height: 24px;
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