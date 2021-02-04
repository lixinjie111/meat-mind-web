<template>
  <div class="datacenter-model-filter">
    <div class="f-header">
      <div class="empty"></div>
      <div class="search">
        <i class="iconfont iconsearch"></i>
        <span>请输入事件名或事件显示名</span>
      </div>
      <!-- <div class="download">
        <i class="iconfont iconxiazai"></i>
        <span>下载数据采集需求文档</span>
      </div> -->
      <slot>
        <div class="download">
          <i class="iconfont iconxiazai"></i>
          <span>下载数据采集需求文档</span>
        </div>
      </slot>
      <div class="filter">
        <i class="iconfont iconicon_filter_line"></i>
        <span>筛选</span>
        <i class="iconfont iconshangjiantou"></i>
      </div>
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
        <div class="right-btn">搜索</div>
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
  margin-bottom: 8px;
  background: #ffffff;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 12px;
  border: 1px solid #eaedf7;
  .f-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    .empty{
      height: 54px;
      flex: auto;
      border-bottom: 1px solid #EAEDF7;
    }
    .search,.download,.filter{
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
      border-bottom: 1px solid #EAEDF7;
    }
    .download {
      width: 201px;
      height: 55px;
      border-right: 2px solid #eaedf7;
      border-bottom: 1px solid #EAEDF7;
    }
    .filter{
      width: 117px;
      height: 55px;
    }
  }

  .filter-container{
    position: relative;
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 24px;
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
      right: 26px;
      bottom: 24px;
      display: flex;
      .left-btn{
        width: 48px;
        height: 28px;
        margin-right: 8px;
        box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8), -2px -2px 7px 0px #FFFEFA;
        border-radius: 8px;
        border: 1px solid #C6CBDE;
        cursor: pointer;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        line-height: 26px;
        text-align: center;
      }
      .right-btn{
        width: 48px;
        height: 28px;
        background: #2373FF;
        border-radius: 8px;
        border: 1px solid #2373FF;
        cursor: pointer;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 26px;
        text-align: center;
      }
    }
  }
}
</style>