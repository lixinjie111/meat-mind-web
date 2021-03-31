<template>
  <DetailsPage title="网页热力分析" backname="analysis-tool-model">
    <div class="filter-container">
      <div class="switch">
        <div>
          显示内容
          <Select v-model="opt1" class="item1">
            <Option v-for="(item,index) of funnelNames" :value="index+1" :key="index+1">{{item}}</Option>
          </Select>
        </div>
      </div>
      <FilterEvent title="事件满足"></FilterEvent>
      <FilterEvent title="用户符合"></FilterEvent>
    </div>
    <div class="data-container">
      <div class="filter">
        <DatePicker :value="dateRange" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="请选择日期" class="item3"></DatePicker>
      </div>
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
  import funnel from '../../../components/echarts/common/funnel/funnel';
  import lineS from '../../../components/echarts/common/line/lineS';

  const detailData = [
    {
      "values": [
        [
          3343,
          0,
          0,
          "返券活动"
        ]
      ],
      "by_values": [
        null
      ]
    },
    {
      "values": [
        [
          509,
          68,
          509,
          "神策数据 | Sensors Data - 国内领先的用户行为分析产品（这个链接可以看热力效果，效果演示请点我！！！）"
        ]
      ],
      "by_values": [
        "https://heatmap.sensorsdata.cn/index.html?server=http%3A%2F%2F10.10.1.78%3A8106%2Fsa%3Fproject%3DNewRetailDemo"
      ]
    },
    {
      "values": [
        [
          184,
          64,
          184,
          "神策分析|Sensors Analytics-帮你实现数据驱动－demo（这个链接可以看热力效果，效果演示请点我！！！）"
        ]
      ],
      "by_values": [
        "https://heatmap.sensorsdata.cn/demo.html?server=http%3A%2F%2F10.10.1.78%3A8106%2Fsa%3Fproject%3DNewRetailDemo"
      ]
    },
    {
      "values": [
        [
          176,
          62,
          176,
          "神策分析|Sensors Analytics-帮你实现数据驱动－B轮融资发布会（这个链接可以看热力效果，效果演示请点我！！！）"
        ]
      ],
      "by_values": [
        "https://heatmap.sensorsdata.cn/b-round.html?server=http%3A%2F%2F10.10.1.78%3A8106%2Fsa%3Fproject%3DNewRetailDemo"
      ]
    },
    {
      "values": [
        [
          151,
          62,
          150,
          "神策分析|Sensors Analytics-帮你实现数据驱动－产品（这个链接可以看热力效果，效果演示请点我！！！）"
        ]
      ],
      "by_values": [
        "https://heatmap.sensorsdata.cn/product.html?server=http%3A%2F%2F10.10.1.78%3A8106%2Fsa%3Fproject%3DNewRetailDemo"
      ]
    }
  ];

  export default {
    name:"Keep",
    data() {
      let amount = 0;
      let day0 = 0;
      let day1 = 0;
      let data = detailData.map(item => {
        return {
          name: item.values[0][3],
          url: item.by_values[0],
          day0: item.values[0][0],
          day1: item.values[0][1],
          day2: item.values[0][2],
      }
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
        funnelNames: ['原始页面','页面分组',],
        showFirstDay: true,
        date1: '趋势',
        date2: 0,
        dateRange: [new Date, new Date],
        date2Options: ['总体转化', '第 1 步转化', ],
        columns: [
          {
            title: '页面名',
            key: 'name',
            width: 600,
            render: (h, params) => {
              return h('div', [h('div', params.row[params.column.key]), h('div', params.row['url'])]);
            }
          },
          {
            title: '浏览总次数',
            key: 'day0',
          },
          {
            title: '元素点击用户数',
            key: 'day1',
          },
          {
            title: '元素点击总次数',
            key: 'day2',
          },
        ],
        data: data,
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
      justify-content: flex-end;
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
