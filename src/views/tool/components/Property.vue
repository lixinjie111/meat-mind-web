<template>
  <DetailsPage title="属性分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div class="event">
        显示
        <Select v-model="show" class="item1">
          <Option v-for="(item,index) of showOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
      </div>
      <div class="event">
        按
        <Select v-model="vip" class="item1">
          <Option v-for="(item,index) of $abelData.vipTotalOptions" :value="index+1" :key="index+1">{{item}}</Option>
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
        showOptions: ['用户数',
          '年龄',
          '用户更新时间',
          '用户邀请粉丝数',
          '30天关注商品价格偏好',
          '30天内全平台访问天数分布',
          '30天内访问次数',
          '30天商品加购次数',
          '30天商详页访问次数',
          '30天消费总金额',
          '30天消费次数',
          '7天内全平台访问天数分布',
          '7天内访问次数',
          '7天商品加购次数',
          '7天商详页访问次数',
          'APP访问时段偏好',
          'test-行为分布',
          '优惠券使用次数',
          '优惠券领取次数分布',
          '分享商品数',
          '分享商品次数分布',
          '发送推送次数',
          '商城成单时段偏好',
          '总消费次数',
          '总消费金额',
          '推送打开次数',
          '末次消费时间飞鹤',
          '标签261',
          '用户发起搜索次数分布',
          '累计消费金额',
          '裂变-时段偏好',
          '购买时间间隔',
          '购买次数',
          '过去30天注册用户人数',
          '首购周期',
        ],
        show: 1,
        vip: 1,
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
