<template>
  <DetailsPage title="留存分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div class="switch">
        <div>显示满足如下行为模式的用户留存情况：</div>
        <div>
          设置关联属性
          <Switch v-model="showRelation" size="small" style="margin-left: 16px;"/>
        </div>
      </div>
      <FilterEvent title="初始行为是" show-event></FilterEvent>
      <FilterEvent title="后续行为是" show-event></FilterEvent>
      <FilterEvent title="同时显示" button-text="添加指标"></FilterEvent>
      <div class="event">
        按
        <Select v-model="event" style="width: 200px; margin-left: 16px;">
          <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <span style="margin-left: 16px;">查看</span>
      </div>
      <FilterEvent title="且用户符合"></FilterEvent>
    </div>
    <div class="data-container">
      <div class="filter">
        <div><Checkbox v-model="showFirstDay">显示第0日</Checkbox></div>
        <div>
          <Select v-model="date1" style="width: 100px;">
            <Option v-for="(item,index) of date1Options" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <Select v-model="date2" style="width: 100px; margin-left: 16px;">
            <Option v-for="(item,index) of date2Options" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <Select v-model="date3" style="width: 100px; margin-left: 16px;">
            <Option v-for="(item,index) of date3Options" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <DatePicker :value="dateRange" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="请选择日期" style="width: 240px; margin-left: 16px;"></DatePicker>
        </div>
      </div>
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
        showRelation: true,
        conditionOptions: [
          'Distinct ID',
          'IP',
          'SDK版本',
          '停留时长',
          '元素位置',
          '分享时的 distinct_id',
          '分享时的层级',
          '分享时的页面路径',
          '前向地址',
          '受众 ID',
          '启动场景',
          '失败原因',
          '定向跳转页面',
          '广告系列内容',
          '广告系列名称',
          '广告系列媒介',
          '广告系列字词',
          '广告系列来源',
          '推送ID',
          '推送内容',
          '推送服务商',
          '推送类型',
          '推送通道 ID',
          '操作系统，例如iOS',
          '设备型号，例如iphone6',
          '用户 ID',
          '运营策略ID',
          '运营计划ID',
          '页面参数',
          '页面名称',
          '页面标题',
          '崩溃原因',
        ],
        showFirstDay: true,
        date1: 1,
        date2: 1,
        date3: 1,
        dateRange: [new Date, new Date],
        date1Options: ['按天', '按周', '按月', ],
        date2Options: ['默认', '8周', '12周', '24周', ],
        date3Options: ['留存', '流失', ],
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
  padding: 0 24px;
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

  .switch {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    font-size: 14px;
    color: #636E95;
  }
}

.data-container {
  padding: 0 24px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
  border-radius: 8px;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    font-size: 14px;
  }
}
</style>
