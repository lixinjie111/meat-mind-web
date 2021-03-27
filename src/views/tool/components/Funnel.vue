<template>
  <DetailsPage title="漏斗分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div class="switch">
        <div>
          显示漏斗
        <Select v-model="event" class="item1">
          <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
        </Select>
        <span class="margin16">按</span>
          <Select v-model="event" class="item1">
            <Option v-for="(item,index) of conditionOptions" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
          <span class="margin16">查看</span>
        </div>
        <div>
          <Button type="primary">新建漏斗</Button>
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
          <funnel id="box111" :colorList="$lxjData.colorList2" :myData="$lxjData.box119Data"></funnel>
        </div>
        <div class="gap"></div>
        <div class="box">
          <lineS id="box55" :colorList="$lxjData.colorList" :myData="$lxjData.box55Data"></lineS>
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
              return h('div', [h('div', params.row[params.column.key]), h('div', (params.row[params.column.key]/params.row['day0'] * 100).toFixed(2) + '%')]);
            }
          },
          {
            title: '提交订单详情',
            key: 'day0',
            render: (h, params) => {
              console.log(params)
              return h('span', (params.row[params.column.key] * 100).toFixed(2) + '%');
            }
          },
          {
            title: '第1步转化',
            key: 'day1',
            render: (h, params) => {
              return h('div', [h('div', params.row[params.column.key]), h('div', (params.row[params.column.key]/params.row['day0'] * 100).toFixed(2) + '%')]);
            }
          },
        ],
        data: [{
          id: 1,
          empty: '',
          total: '总体',
          amount: 4049,
          day0: 0.974,
          day1: 0.075,
          day2: 0.0738,
          day3: 0.0719,
          _showChildren: true,
          children: [
            {
              id: 3,
              total: '12-14（一）',
              amount: 4049,
              day0: 0.976,
              day1: 0.0778,
              day2: 0.0731,
              day3: 0.0711,
            },
            {
              id: 4,
              total: '12-14（二）',
              amount: 4049,
              day0: 0.9735,
              day1: 0.0798,
              day2: 0.0785,
              day3: 0.071,
            },
            {
              id: 5,
              total: '12-15（一）',
              amount: 4049,
              day0: 0.9664,
              day1: 0.0736,
              day2: 0.0709,
              day3: 0.075,
            },
            {
              id: 6,
              total: '12-15（二）',
              amount: 4049,
              day0: 0.9764,
              day1: 0.0715,
              day2: 0.0779,
              day3: 0.0709,
            },
            {
              id: 7,
              total: '12-16（一）',
              amount: 4049,
              day0: 0.935,
              day1: 0.0735,
              day2: 0.0766,
              day3: 0.0732,
            },
            {
              id: 8,
              total: '12-16（二）',
              amount: 4049,
              day0: 0.98,
              day1: 0.075,
              day2: 0.0717,
              day3: 0.0702,
            },
            {
              id: 9,
              total: '12-17（一）',
              amount: 4049,
              day0: 0.978,
              day1: 0.0756,
              day2: 0.0716,
              day3: 0.0792,
            },
            {
              id: 10,
              total: '12-17（二）',
              amount: 4049,
              day0: 0.9767,
              day1: 0.0755,
              day2: 0.0742,
              day3: 0.0765,
            },
            {
              id: 2,
              total: '12-18（一）',
              amount: 4049,
              day0: 0.9633,
              day1: 0.0765,
              day2: 0.0713,
              day3: 0.0723,
            },
          ]
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
  }
</style>
