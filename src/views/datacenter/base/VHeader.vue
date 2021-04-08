<template>
  <div class="datacenter-model-search">
    <div class="s-header">
      <div class="search">
        <i class="iconfont iconSearch"></i>
        <span>请输入显示名进行搜索</span>
      </div>
    </div>
    <div class="filter-container">
      <div class="show-status">
        <p>平台</p>
        <Select v-model="model1" style="width:258px">
            <Option v-for="(item,index) in list1" :value="item" :key="index">{{ item }}</Option>
        </Select>
      </div>
      <div class="mid">
        <p>事件类型</p>
        <Select v-model="model2" style="width:258px">
            <Option v-for="(item,index) in list2" :value="item" :key="index">{{ item }}</Option>
        </Select>
      </div>
      <div class="target-filter">
        <p>显示状态</p>
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
      list1:['全部',"IOS","Android","小程序"],
      model2:'全部',
      list2:['全部',"预置事件","1","2"],
      model3:'全部',
      list3:['全部',"可见","隐藏"],
    }
  }
};
</script>

<style scoped lang="scss">
.datacenter-model-search {
  height: 155px;
  margin-bottom: 16px;
  background: #ffffff;
  box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
  border-radius: 8px;
  // border: 1px solid #eaedf7;
  .s-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 55px;
    margin: 0 24px;
    border-bottom: 1px solid #EAEDF7;
    .search{
      display: flex;
      align-items: center;
      // justify-content: center;
      width: 300px;
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
      > span {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #97a0c3;
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
      right: 26px;
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
      }
    }
  }
}
</style>