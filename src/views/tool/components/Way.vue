<template>
  <DetailsPage title="用户路径分析" backname="analysis-tool-model">
    <div class="filter-container">
      <FilterIndice title="选择参与分析的事件" button-text="事件分组" :events="$abelData.appOptions" show-event></FilterIndice>
      <div class="event">
        设置
        <Select v-model="event" class="item1">
          <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        为
        <Select v-model="event" class="item1">
          <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <Button @click="handleAddCondition" :class="['item2', buttonCss]">
          <i class="iconfont icontianjia"></i>
          筛选条件</Button>
      </div>
      <FilterEvent title="且用户符合"></FilterEvent>
      <div class="switch">
        <div>
          设置 Session 间隔
          <ComplexInput class="item1" :options="conditionOptions">
          </ComplexInput>
        </div>
        <Button type="primary">查询</Button>
      </div>
    </div>
    <div class="data-container">
      <div class="filter">
        <DatePicker :value="dateRange" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="请选择日期" class="item3"></DatePicker>
        每层最多显示
        <Input class="small" />
        个节点
      </div>
      <EmptyTable :columns="columns">
      </EmptyTable>
    </div>
  </DetailsPage>
</template>

<script>
  import FilterEvent from '../base/FilterEvent';
  import FilterIndice from '../base/FilterIndice';
  import MutableArray from '../base/MutableArray';
  import ComplexInput from '../base/ComplexInput';
  import EmptyTable from '../base/EmptyTable';
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
            title: '文件名称',
            key: 'filename'
          },
        ],
        data: []
      }
    },
    components: {FilterEvent, FilterIndice, MutableArray, ComplexInput, DetailsPage, EmptyTable},
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

    .filter-event {
      border-top: none;
    }

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
      >div {
        display: flex;
        align-items: center;
      }
    }

    .item1 {
      width: 200px;
      margin: 0 16px;
      /*display: inline-block;*/
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
      justify-content: flex-end;
      align-items: center;
      height: 64px;
      font-size: 14px;

      .small {
        width: 60px;
        margin: 0 16px;
      }
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
      margin-right: 16px;
    }
  }
</style>
