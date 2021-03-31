<template>
  <DetailsPage title="间隔分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div class="switch">
        <div>
          选择事件
        </div>
        <div>
          设置关联属性
          <i-switch v-model="showRelation" size="small" class="margin16"/>
        </div>
      </div>
      <FilterEvent title="" show-event></FilterEvent>
      <FilterEvent title="" show-event></FilterEvent>
      <div class="event">
        按
        <Select v-model="event" class="item1">
          <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <span class="margin16">查看</span>
      </div>
      <FilterEvent title="且用户符合"></FilterEvent>
    </div>
    <div class="data-container">
      <div class="filter">
        <div class="title">
          间隔分析
        </div>
        <div>
          <Select v-model="date1" class="item2">
            <Option v-for="(item,index) of date1Options" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <Select v-model="date2" class="item2" placeholder="显示设置">
            <Option v-for="(item,index) of date2Options" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <DatePicker :value="dateRange" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="请选择日期" class="item3"></DatePicker>
        </div>
      </div>
      <EmptyTable :columns="columns">
      </EmptyTable>
    </div>
  </DetailsPage>
</template>

<script>
  import FilterEvent from '../base/FilterEvent';
  import FilterIndice from '../base/FilterIndice';
  import EmptyTable from '../base/EmptyTable';
  import DetailsPage from "@/layouts/DetailsPage";

  export default {
    name:"Keep",
    data() {
      return {
        conditions: [{input: ''}],
        initItem: {input: ''},
        showRelation: true,
        event: 1,
        conditionOptions: [
          '总体',
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
        funnelNames: ['原始页面','页面分组',],
        showFirstDay: true,
        date1: 1,
        date2: 1,
        dateRange: [new Date, new Date],
        date1Options: ['显示设置', '显示指标', '显示分组', ],
        date2Options: ['按天', '按周', '按月', ],
        columns: [
          {
            title: '文件名称',
            key: 'filename'
          },
        ],
      }
    },
    components: {FilterEvent, FilterIndice, EmptyTable, DetailsPage},
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

    .item1 {
      width: 200px;
      margin-left: 16px;
    }

    .margin16 {
      margin-left: 16px;
    }
  }

  .data-container {
    padding: 0 24px;
    margin-bottom: 20px;
    background: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
    display: block;

    .filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 64px;
      font-size: 14px;
    }

    .pager {
      line-height: 60px;
      display: flex;
      justify-content: flex-end;
    }
    .item1 {
      display: inline-block;
    }
    .item2 {
      width: 100px;
      margin-left: 16px;
    }
    .item3 {
      width: 240px;
      margin-left: 16px;
    }
    .item4 {
      margin-left: 16px;
      font-size: 14px;
      display: inline-block;
      span {
        &:first-child {
          color: #636E95;
        }
        &:last-child {
          color: #242F57;
        }
      }
    }
    .new_echart_box {
      width: 380px;
      height: 276px;
      background: #F7F9FD;
      border-radius: 4px;

      #box111 {
        margin: 0 auto;
        width: 300px;
        height: 276px;
      }
    }
    .box {
      width: 700px;
      height: 276px;
      border-radius: 4px;
      border: 1px solid #EAEDF7;
    }
    .charts {
      display: flex;
      margin-bottom: 24px;
    }
    .gap {
      width: 24px;
    }
  }
</style>
