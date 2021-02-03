<template>
  <div class="datacenter-model-filter">
    <div class="f-header">
      <div class="search">
        <i class="iconfont iconsearch"></i>
        <span>请输入事件名或事件显示名</span>
      </div>
      <div class="download">
        <i class="iconfont iconxiazai"></i>
        <span>下载数据采集需求文档</span>
      </div>
      <div class="filter">
        <i class="iconfont icon_filter_line"></i>
        <span>筛选</span>
        <i class="iconfont iconshangjiantou"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped lang="scss">
.datacenter-model-filter {
  width: 1152px;
  height: 155px;
  background: #ffffff #d8d8d8;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 12px;
  border: 1px solid #eaedf7;
  .f-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    .search {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 246px;
      height: 55px;
      border-right: 2px solid #eaedf7;
      > i {
        color: #7c88b1;
        font-size: 24px;
        margin-right: 8px;
      }
      > span {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #97a0c3;
      }
    }
    .download {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 201;
      height: 55px;
      border-right: 2px solid #eaedf7;
      > i {
        color: #7c88b1;
        font-size: 24px;
        margin-right: 8px;
      }
      > span {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636e95;
      }
    }
  }
}
</style>