<template>
  <DetailsPage title="留存分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div>
        <div>显示满足如下行为模式的用户留存情况：</div>
        <div>
          设置关联属性
          <Switch size="small"/>
        </div>
      </div>
      <FilterEvent title="初始行为是" show-event></FilterEvent>
      <FilterEvent title="后续行为是" show-event></FilterEvent>
      <FilterEvent title="同时显示" button-text="添加指标"></FilterEvent>
      <div class="event">
        按
        <Select v-model="event" style="width: 200px; margin-left: 16px;">
          <Option v-for="(item,index) of events" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <span style="margin-left: 16px;">查看</span>
      </div>
      <FilterEvent title="且用户符合"></FilterEvent>
    </div>
  </DetailsPage>
</template>

<script>
  import FilterEvent from '../base/FilterEvent';
  import MutableArray from '../base/MutableArray';
  import DetailsPage from "@/layouts/DetailsPage";

export default {
    name:"Keep",
  data() {
      return {
        conditions: [{input: ''}],
        initItem: {input: ''},
      }
  },
  components: {FilterEvent, MutableArray, DetailsPage},
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-model"})
        },
    }
}
</script>

<style scoped lang="scss">
.filter-container {
  // width: 1152px;
  padding: 24px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
  border-radius: 8px;

    .event {
      display: flex;
      align-items: center;
      height: 64px;
      font-size: 14px;
      color: #636E95;
      border-top: 1px solid #DEE2EE;
    }
  }
</style>
