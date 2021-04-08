<template>
  <div class="datacenter-model-filter">
    <div class="f-header">
      <div class="empty"></div>
      <div class="search">
        <i class="iconfont iconSearch"></i>
        <span>请输入事件名或事件显示名</span>
      </div>
      <slot>
        <div class="download">
          <i class="iconfont iconxiazai"></i>
          <span>下载数据采集需求文档</span>
        </div>
      </slot>
      <!-- <div class="filter">
        <i class="iconfont iconfilter"></i>
        <span>筛选</span>
        <i class="iconfont iconup"></i>
      </div> -->
    </div>
    <div class="filter-container">
      <div class="show-status">
        <p>显示状态</p>
        <Select v-model="model1" style="width:258px">
            <Option v-for="(item,index) in list1" :value="item" :key="index">{{ item }}</Option>
        </Select>
      </div>
      <div class="mid">
        <p>应埋点平台</p>
        <Select v-model="model2" style="width:258px">
            <Option v-for="(item,index) in list2" :value="item" :key="index">{{ item }}</Option>
        </Select>
      </div>
      <div class="target-filter">
        <p>标签筛选</p>
        <Select v-model="model3" style="width:258px">
            <Option v-for="(item,index) in list3" :value="item" :key="index">{{ item }}</Option>
        </Select>
      </div>
      <div class="operate-box">
        <div class="left-btn">重置</div>
        <button class="btn-primary-middle right-btn">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data(){
    return{
      model1:'全部',
      list1:["全部","显示","隐藏"],
      model2:'全部',
      list2:['全部',"IOS","Android","小程序"],
      model3:'全部',
      list3:['全部',"预置事件","1","2"],
    }
  }
};
</script>

<style scoped lang="scss">
.datacenter-model-filter {
  height: 155px;
  margin-bottom: 16px;
  background: #ffffff;
  box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
  border-radius: 8px;
  // border: 1px solid #eaedf7;
  .f-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    margin:0 24px;
    border-bottom: 1px solid #EAEDF7;
    .empty{
      height: 55px;
      flex: auto;
      // border-bottom: 1px solid #EAEDF7;
    }
    .search,.download,.filter{
      display: flex;
      align-items: center;
      // justify-content: center;
      > span {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
      }
    }
    .search {
      width: 260px;
      height: 32px;
      padding-left: 12px;
      background: #FFFFFF;
      border-radius: 4px;
      border: 1px solid #97A0C3;
      > i {
        width: 20px;
        height: 20px;
        color: #7c88b1;
        font-size: 20px;
        margin-right: 8px;
        line-height: 20px;
      }
      >span{
        color: #97A0C3;
      }
    }
    .download {
      // width: 201px;
      height: 55px;
      margin-left: 24px;
      // margin-right: 16px;
      // border-right: 2px solid #eaedf7;
      // border-bottom: 1px solid #EAEDF7;
      > i {
        width: 16px;
        height: 16px;
        color: #7c88b1;
        font-size: 16px;
        margin-right: 4px;
        line-height: 16px;
      }
    }
    .filter{
      // width: 117px;
      height: 55px;
      > i {
        width: 18px;
        height: 18px;
        color: #7c88b1;
        font-size: 18px;
        margin-right: 4px;
        line-height: 18px;
      }
      > .iconup {
        width: 12px;
        height: 12px;
        color: #7c88b1;
        margin-left: 11px;
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  .filter-container{
    position: relative;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 24px;
   ::v-deep .ivu-select-selection{
      color: #97A0C3;
    }
    .show-status,.mid,.target-filter{
      margin-right: 24px;
      >p{
        height: 16px;
        margin-bottom: 4px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        line-height: 16px;
      }
    }
    .operate-box{
      position: absolute;
      right: 24px;
      bottom: 24px;
      display: flex;
      .left-btn{
        width: 76px;
        height: 32px;
        margin-right: 8px;
        // box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8), -2px -2px 7px 0px #FFFEFA;
        border-radius: 4px;
        border: 1px solid #97A0C3;
        cursor: pointer;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        line-height: 30px;
        text-align: center;
      }
      .right-btn{
        width: 76px;
        height: 32px;
        line-height: 32px;
        text-align: center;
      }
    }
  }
}
</style>