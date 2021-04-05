<template>
  <DetailsPage title="属性分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div class="event">
        显示
        <Select v-model="event" class="item1">
          <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
      </div>
      <div class="event">
        按
        <Select v-model="event" class="item1">
          <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <span class="margin16">查看</span>
      </div>
      <FilterEvent title=""></FilterEvent>
    </div>
    <div class="data-container">
      <Table row-key="id" :columns="columns" :data="data">
      </Table>
    </div>
  </DetailsPage>
</template>

<script>
  import FilterEvent from '../base/FilterEvent';
  import FilterIndice from '../base/FilterIndice';
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
        showFirstDay: true,
        date1: 1,
        date2: 1,
        date3: 1,
        dateRange: [new Date, new Date],
        date1Options: ['按天', '按周', '按月', ],
        date2Options: ['默认', '8周', '12周', '24周', ],
        date3Options: ['留存', '流失', ],
        columns: [
          {
            title: '用户数',
            key: 'total',
          },
        ],
        data: [{
          id: 1,
          total: '406,332',
        }]
      }
    },
    components: {FilterEvent, FilterIndice, MutableArray, DetailsPage},
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
    padding: 24px;
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
      width: 100px;
    }
    .item2 {
      width: 100px;
      margin-left: 16px;
    }
    .item3 {
      width: 240px;
      margin-left: 16px;
    }
  }
</style>
