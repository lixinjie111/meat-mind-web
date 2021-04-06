<template>
  <DetailsPage title="用户路径分析" backname="analysis-tool-model">
    <div class="filter-container">
      <FilterIndice3 title="选择参与分析的事件" button-text="事件分组" :events="$abelData.appOptions" show-event></FilterIndice3>
      <div class="event">
        设置
        <Select v-model="event" class="item1">
          <Option v-for="(item,index) of eventOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        为
        <Select v-model="app" class="item1">
          <Option v-for="(item,index) of $abelData.appOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <Button @click="handleAddCondition" class="item2">
          <i class="iconfont icontianjia"></i>
          筛选条件</Button>
      </div>
      <div class="array">
        <MutableArray :value="conditions" :init-item="initItem" :on-delete="handleDelete">
          <template #item="itemProps">
            <FilterCondition v-bind="itemProps"/>
          </template>
        </MutableArray>
      </div>
      <FilterEvent title="且用户符合" :events="$abelData.vipTotalOptions"></FilterEvent>
      <div class="switch">
        <div>
          设置 Session 间隔
          <ComplexInput class="item1" :value="20" :select="2" :options="unitOptions">
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
  import FilterIndice3 from '../base/FilterIndice3';
  import MutableArray from '../base/MutableArray';
  import ComplexInput from '../base/ComplexInput';
  import EmptyTable from '../base/EmptyTable';
  import FilterCondition from '../base/FilterCondition';
  import DetailsPage from "@/layouts/DetailsPage";

  export default {
    name:"Keep",
    data() {
      return {
        conditions: [],
        initItem: {input: ''},
        showRelation: true,
        showFirstDay: true,
        event: 1,
        app: 1,
        date1: 1,
        date2: 1,
        date3: 1,
        dateRange: [new Date, new Date],
        eventOptions: ['起始事件', '结束事件', ],
        unitOptions: ['秒','分钟','小时',],
        unit: 2,
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
    components: {FilterEvent, FilterIndice, FilterIndice3, MutableArray, ComplexInput, DetailsPage, EmptyTable, FilterCondition},
    methods:{
      back(){
        this.$router.push({name:"analysis-tool-model"})
      },
      handleAddCondition() {
        this.conditions.push(Object.assign({}, this.initItem));
      },
      handleDelete(i) {
        this.conditions.splice(i, 1)
      }
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
