<template>
  <div class="tool-model-filter">
    <div class="f-header">
      <div class="empty">
        <div class="blue-btn">
          <i class="iconfont icontianjia"></i>
          <div>新建</div>
        </div>
        <div class="group-admin">管理分组</div>
      </div>
      <div class="search">
        <Input prefix="ios-search" placeholder="请输入标签名进行搜索" />
      </div>
      <div class="filter">
        <i class="iconfont iconfilter"></i>
        <span>筛选</span>
        <i class="iconfont iconup"></i>
      </div>
    </div>
    <div class="filter-container">
      <div class="show-status">
        <p>选择分组</p>
        <Select v-model="model1" style="width:258px">
          <Option v-for="(item,index) in list1" :value="item" :key="index">{{ item }}</Option>
        </Select>
      </div>
      <div class="show-status">
        <p>标签状态</p>
        <Select v-model="model2" style="width:258px">
          <Option v-for="(item,index) in list2" :value="item" :key="index">{{ item }}</Option>
        </Select>
      </div>
      <div class="operate-box">
        <div class="left-btn">重置</div>
        <div class="right-btn">搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateLabel",
  data() {
    return {
      single: false,
      model1: "全部",
      list1: ["全部", "组1", "组2"],
      model2: "全部",
      list2: ["全部", "启用", "停用"]
    };
  }
};
</script>

<style scoped lang="scss">
.tool-model-filter {
  height: 155px;
  margin-bottom: 8px;
  background: #ffffff;
  box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
  border-radius: 8px;
  border: 1px solid #eaedf7;
  .f-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    .empty {
      display: flex;
      align-items: center;
      height: 55px;
      padding-left: 24px;
      flex: auto;
      border-bottom: 1px solid #eaedf7;
      line-height: 54px;
      .blue-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 76px;
        height: 32px;
        // padding: 0 16px;
        margin-right: 8px;
        background: #2373ff;
        border-radius: 4px;
        > i {
          width: 14px;
          height: 14px;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          margin-right: 4px;
          line-height: 14px;
        }
        > div {
          height: 14px;
          font-size: 14px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 14px;
        }
      }
      .group-admin {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #97A0C3;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
      }
    }
    .search,
    .download,
    .filter {
      display: flex;
      align-items: center;
      justify-content: center;
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
    .search {
      width: 246px;
      height: 55px;
      border-right: 2px solid #eaedf7;
      border-bottom: 1px solid #eaedf7;
      padding-right: 16px;
    }
    .download {
      width: 111px;
      height: 55px;
      border-right: 2px solid #eaedf7;
      border-bottom: 1px solid #eaedf7;
    }
    .filter {
      width: 117px;
      height: 55px;
    }
  }

  .filter-container {
    position: relative;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 24px;
    .show-status {
      margin-right: 24px;
      > p {
        height: 16px;
        margin-bottom: 4px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636e95;
        line-height: 16px;
      }
    }
    .operate-box {
      position: absolute;
      right: 26px;
      bottom: 24px;
      display: flex;
      .left-btn {
        width: 48px;
        height: 28px;
        margin-right: 8px;
        box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8),
          -2px -2px 7px 0px #fffefa;
        border-radius: 4px;
        border: 1px solid #c6cbde;
        cursor: pointer;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636e95;
        line-height: 26px;
        text-align: center;
      }
      .right-btn {
        width: 48px;
        height: 28px;
        background: #2373ff;
        border-radius: 4px;
        border: 1px solid #2373ff;
        cursor: pointer;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 26px;
        text-align: center;
      }
    }
  }
}
</style>