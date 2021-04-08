<template>
  <DetailsPage title="漏斗分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div class="switch">
        <div>
          显示漏斗
        <Select v-model="opt1" class="item1">
          <Option v-for="(item,index) of funnelNames" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <span class="margin16">按</span>
          <Select v-model="opt2" class="item1">
            <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <span class="margin16">查看</span>
        </div>
        <div>
          <button class="btn-primary-middle new-btn">新建漏斗</button>
        </div>
      </div>
      <FilterEvent title=""></FilterEvent>
    </div>
    <div class="data-container">
      <div class="filter">
        <div class="title">test转化漏斗</div>
        <div>
          <RadioGroup v-model="date1" type="button" class="item1">
            <Radio value="1" label="趋势"></Radio>
            <Radio value="2" label="对比"></Radio>
          </RadioGroup>
          <Select v-model="date2" class="item2" placeholder="显示设置">
            <Option v-for="(item,index) of date2Options" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <DatePicker :value="dateRange" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="请选择日期" class="item3"></DatePicker>
          <div class="item4">
            <span>窗口期：</span>
            <span>24小时</span>
          </div>
        </div>
      </div>
      <div class="charts">
        <div class="new_echart_box">
          <funnel id="box111" :colorList="$lxjData.colorList2" :myData="$abelData.box119Data"></funnel>
        </div>
        <div class="gap"></div>
        <div class="box">
          <lineS id="box55" :colorList="$lxjData.colorList" :myData="$abelData.box55Data"></lineS>
        </div>
      </div>
      <Table row-key="id" :columns="columns" :data="data">
      </Table>
      <div class="pager">
        <Page :total="data.length" size="small" show-total show-sizer />
      </div>
    </div>
  </DetailsPage>
</template>

<script>
  import FilterEvent from '../base/FilterEvent';
  import FilterIndice from '../base/FilterIndice';
  import MutableArray from '../base/MutableArray';
  import DetailsPage from "@/layouts/DetailsPage";
  import funnel from '../../../components/echarts/common/funnel/funnel';
  import lineS from '../../../components/echarts/common/line/lineS';

  const detailData = [
    {
      id: 3,
      total: '2-1（一）',
      amount: 6,
      day0: 9,
      day1: 5,
    },
    {
      id: 4,
      total: '2-2（二）',
      amount: 4,
      day0: 8,
      day1: 5,
    },
    {
      id: 5,
      total: '2-3（三）',
      amount: 7,
      day0: 10,
      day1: 6,
    },
    {
      id: 6,
      total: '2-4（四）',
      amount: 6,
      day0: 9,
      day1: 4,
    },
    {
      id: 7,
      total: '2-5（五）',
      amount: 5,
      day0: 8,
      day1: 3,
    },
    {
      id: 8,
      total: '2-6（六）',
      amount: 4,
      day0: 6,
      day1: 3,
    },
    {
      id: 9,
      total: '2-7（七）',
      amount: 3,
      day0: 7,
      day1: 2,
    },
  ];

  export default {
    name:"Keep",
    data() {
      let amount = 0;
      let day0 = 0;
      let day1 = 0;
      detailData.forEach(item => {
        amount += item.amount;
        day0 += item.day0;
        day1 += item.day1;
      });

      return {
        conditions: [{input: ''}],
        initItem: {input: ''},
        showRelation: true,
        opt1: 1,
        opt2: 1,
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
        funnelNames: ['test','坑位总转化率','Banner转化率','圣诞活动转化率','参与抽奖 - KClZQ2M','抽奖活动注册转化漏斗','全局注册漏斗','线下参与活动漏斗','线上参与活动漏斗','满100减10使用漏斗','访客转化漏斗','近七日某优惠券的转化漏斗（复购时不用券） - KClZQ2M','购买','普通月复购率 - KClZQ2M','用券后月复购率 - KClZQ2M','全局转化','裂变用户转化','接通体验转化','[场景库] Push 启动购买','坑位总转化率 - KClZQ2M2','购买-收藏',],
        showFirstDay: true,
        date1: '趋势',
        date2: 0,
        dateRange: [new Date, new Date],
        date2Options: ['总体转化', '第 1 步转化', ],
        columns: [
          {
            title: ' ',
            key: 'total',
            tree: true,
          },
          {
            title: '总体转化',
            key: 'amount',
            render: (h, params) => {
              return h('div', [h('div', {'class': 'blue'}, params.row[params.column.key] + '人'), h('div', (params.row[params.column.key]/params.row['day0'] * 100).toFixed(2) + '%')]);
            }
          },
          {
            title: '提交订单详情',
            key: 'day0',
            render: (h, params) => {
              console.log(params)
              return h('span', {'class': 'blue'}, params.row[params.column.key] + '人');
            }
          },
          {
            title: '第1步转化',
            key: 'day1',
            render: (h, params) => {
              return h('div', [h('div', {'class': 'blue'}, params.row[params.column.key] + '人'), h('div', (params.row[params.column.key]/params.row['day0'] * 100).toFixed(2) + '%')]);
            }
          },
        ],
        data: [{
          id: 1,
          empty: '',
          total: '总体',
          amount,
          day0,
          day1,
          _showChildren: true,
          children: detailData
        }]
      }
    },
    components: {FilterEvent, FilterIndice, MutableArray, DetailsPage, funnel, lineS},
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
      .new-btn{
        width: 80px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
      }
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
<style lang="scss">
  .data-container {
    .ivu-icon-ios-add, .ivu-icon-ios-remove {
      &:before {
        content: '\F11F';
      }
    }
    .ivu-icon-ios-remove {
      transform: rotate(90deg);
    }
    .blue {
      color: #2373FF;
    }
  }
</style>
