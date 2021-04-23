<template>
  <div class="activity-container">
    <div class="header-nav">
      <p>活动运营分析</p>
    </div>
    <ActivityShowData></ActivityShowData>
    <div class="data-container">
      <div class="filter">
        <div class="title">test转化漏斗</div>
        <div>
          <ul class="radio">
            <li :class="{ cur: curRadio == '1' }" @click="curRadio = '1'">
              趋势
            </li>
            <li :class="{ cur: curRadio == '2' }" @click="curRadio = '2'">
              对比
            </li>
          </ul>
          <Select v-model="date2" class="item2" placeholder="显示设置">
            <Option
              v-for="(item, index) of date2Options"
              :value="index + 1"
              :key="index + 1"
              >{{ item }}</Option
            >
          </Select>
          <DatePicker
            :value="dateRange"
            format="yyyy-MM-dd"
            type="daterange"
            placement="bottom-end"
            placeholder="请选择日期"
            class="item3"
          ></DatePicker>
          <div class="item4">
            <span>窗口期：</span>
            <span>24小时</span>
          </div>
        </div>
      </div>
      <div class="charts">
        <div class="new_echart_box">
          <funnel
            id="box111"
            :colorList="$lxjData.colorList1"
            :myData="$linData.funnelData"
          ></funnel>
        </div>
        <div class="gap"></div>
        <div class="box">
          <lineS
            id="box55"
            :colorList="$lxjData.colorList"
            :myData="$abelData.box55Data"
          ></lineS>
        </div>
      </div>
      <Table row-key="id" :columns="columns" :data="data"> </Table>
      <div class="pager">
        <Page :total="data.length" size="small" show-total show-sizer />
      </div>
    </div>
  </div>
</template>

<script>
import ActivityShowData from "../compoments/ActivityShowData";
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
  name: "activity",
  components: { ActivityShowData, funnel, lineS},
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
        curRadio:'1',
        date2: 0,
        dateRange: [new Date, new Date],
        date2Options: ['总体转化', '第 1 步转化'], 
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
    };
  },
};
</script>

<style scoped lang="scss">
.activity-container {
  padding: 0 24px 24px 24px;
  .header-nav {
    padding-bottom: 0;
  }
  .data-container {
    padding: 0 24px;
    margin-top: 20px;
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
      .item1 {
        display: inline-block;
      }
      .radio {
        display: inline-flex;
        cursor: pointer;
        > li {
          width: 60px;
          height: 32px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242f57;
          background: #ffffff;
          border-radius: 4px 0px 0px 4px;
          border: 1px solid #97a0c3;
          text-align: center;
          line-height: 30px;
          &:nth-child(1) {
            border-right: 1px solid transparent;
          }
          &:nth-child(2) {
            border-left: 1px solid transparent;
            border-radius: 0px 4px 4px 0px;
          }
          &.cur {
            color: #2373ff;
            border: 1px solid #2373ff;
          }
        }
      }
    }

    .pager {
      line-height: 60px;
      display: flex;
      justify-content: flex-end;
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
          color: #636e95;
        }
        &:last-child {
          color: #242f57;
        }
      }
    }
    .new_echart_box {
      width: 380px;
      height: 276px;
      background: #f7f9fd;
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
      border: 1px solid #eaedf7;
    }
    .charts {
      display: flex;
      margin-bottom: 24px;
    }
    .gap {
      width: 24px;
    }
  }
}
</style>
<style lang="scss">
.data-container {
  .ivu-table {
    th {
      height: 48px;
      background: #f4f7fc;

      .ivu-table-cell {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
      }
    }
  }

  .ivu-icon-ios-add,
  .ivu-icon-ios-remove {
    &:before {
      content: "\F11F";
    }
  }
  .ivu-icon-ios-remove {
    transform: rotate(90deg);
  }
  .blue {
    color: #2373ff;
  }
}
</style>
