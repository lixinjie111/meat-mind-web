<template>
  <DetailsPage title="事件分析" backname="analysis-tool-model">
    <div>
      <div class="filter-container">
        <div class="" slot="content">
          <div class="property nobt" v-for="(item, index) in propertyList" :key="index">
            <span class="mr12 property-label">任意事件的总次数</span>
            <Select v-model="item.event" class="mr12 w200">
              <Option v-for="ele in attributeList1" :value="ele" :key="ele">{{ ele }}</Option>
            </Select>
            <span class="mr12 property-label">的</span>
            <Select v-model="item.place" class="mr12 w200">
              <Option v-for="ele in placeList" :value="ele.value" :key="ele.value">{{ ele.label }}</Option>
            </Select>
          </div>
          <FilterIndice2 :button-text="['指标', '自定义指标']" button-css="ml0"></FilterIndice2>
          <FilterEvent buttonText="全局筛选" button-css="ml0"></FilterEvent>
          <div class="property">
            <span class="mr16 property-label">按</span>
            <Select v-model="attribute3" class="mr8 w100">
              <Option value="总体">总体</Option>
              <Option value="事件属性">事件属性</Option>
              <Option value="用户属性">用户属性</Option>
              <Option value="用户标签">用户标签</Option>
            </Select>
            <span class="property-label">查看</span>
          </div>

        </div>
      </div>
      <div class="show-container">
        <div class="top">
          <Select class="date-select" v-model="dateValue">
            <Option value="1">按天</Option>
            <Option value="2">按周</Option>
            <Option value="3">按月</Option>
            <Option value="4">按季度</Option>
            <Option value="5">按年</Option>
            <Option value="6">按小时</Option>
            <Option value="7">按分钟</Option>
          </Select>
          <DatePicker
            type="daterange"
            :value="dateRangeValue"
            class="date-range-select mr8"
            :options="dateOptions"
            placement="bottom-end"
            placeholder="请选择时间范围"
          ></DatePicker>
          <Button icon="md-add" class="btn">对比</Button>
        </div>
        <div class="bottom">
          <!-- <p>任意事件的总次数</p> -->
          <div class="chart-box">
            <barEcharts2 :key="iframeShow" :colorList="$fjData.colorList" :myData="myData"/>
          </div>
        </div>
      </div>
      <div class="show-container">
        <div class="top">
          <DatePicker
            type="daterange"
            :value="tableDateRangeValue"
            class="date-range-select"
            placement="bottom-end"
            placeholder="请选择时间范围"
          ></DatePicker>
        </div>
        <div class="bottom">
          <!-- <p>任意事件的总次数</p> -->
          <div class="table-warp">
            <Table :columns="tableInfo.columns" :data="tableInfo.list">
            </Table>
            <div class="table-page-warp"  v-if="tableInfo.totalPage>0">
              <Page
                  :current="tableInfo.currentPage"
                  :total="tableInfo.totalPage"
                  :page-size="tableInfo.pageSize"
                  show-total
                  show-sizer
                  class-name="pageS"
                  @on-change="(page)=>tableChangePage(page, tableInfo)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </DetailsPage>
</template>

<script>
import DetailsPage from "@/layouts/DetailsPage";
import barEcharts2 from "@/components/echarts/common/bar/barEcharts2";
import dayjs from "dayjs";
import FilterEvent from '../base/FilterEvent';
import FilterIndice2 from '../base/FilterIndice2';

const config = { '1': '一', '2': '二' , '3': '三' , '4': '四' , '5': '五' , '6': '六', '0': '日' }
export default {
  name: "Event",
  components: {
    DetailsPage, barEcharts2, FilterEvent, FilterIndice2
  },
  watch: {
    propertyList: {
      handler: function () {
        if (this.iframeShow >= 5 || this.iframeShow < 2) {
          this.dateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          this.tableDateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          this.iframeShow = 3;
        } else {
          this.dateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          this.tableDateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          this.iframeShow = this.iframeShow + 1;
        }
      },
      deep: true,
    },
    attribute3(val) {
      switch (val) {
        case "总体":
          this.iframeShow = 3;
          this.dateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          break;
        case "事件属性":
          this.iframeShow = 4;
          this.dateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          break;
        case "用户属性":
          this.iframeShow = 5;
          this.dateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          break;
        case "用户标签":
          this.iframeShow = 3;
          this.dateRangeValue = [
            new Date(
              new Date().getTime() - 3600 * 1000 * 24 * 7
            ).toLocaleString(),
            new Date().toLocaleString(),
          ];
          break;
      }
    },
  },
  data() {
    return {
      data3: [
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getMonth() +
          1 +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 7).getDate(),
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 6).getMonth() +
          1 +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 6).getDate(),
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 5).getMonth() +
          1 +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 5).getDate(),
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 4).getMonth() +
          1 +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 4).getDate(),
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 3).getMonth() +
          1 +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 3).getDate(),
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 2).getMonth() +
          1 +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 2).getDate(),
        new Date(new Date().getTime() - 3600 * 1000 * 24 * 1).getMonth() +
          1 +
          "-" +
          new Date(new Date().getTime() - 3600 * 1000 * 24 * 1).getDate(),
        new Date().getMonth() + 1 + "-" + new Date().getDate(),
      ],
      panelValue: [1, 2],
      propertyList: [{ event: "任意事件", place: "总次数" }],
      attributeList1: ["任意事件",
        "App崩溃",
        "领取权益",
        "完善资料",
        "收藏商品",
        "关注微信公众号",
        "评论",
        "Web 视区停留",
        "Web 元素点击",
        "微信客服消息终态信息",
        "微信公众号接收用户消息",
        "取关微信公众号",
        "扫描微信参数二维码",
        "上报微信用户地理位置",
        "小程序进入后台",
        "点击微信公众号菜单",
        "小程序首次启动",
        "点击微信菜单会话",
        "小程序分享",
        "小程序启动",
        "小程序页面浏览",
        "短链跳转",
        "推送打开",
        "推送送达",
        "选择分享方式",
        "高积分行为",
        "分享商品",
        "购买商品",
        "全端启动",
        "秒杀坑位",
        "猜你喜欢点击",
        "Banner点击",
        "会员等级提升",
        "首页点击事件",
        "App点击",
        "App 激活",
        "发起分享",
        "App页面浏览",
        "退出App",
        "启动App",
        "推送转化",
        "消息已发送",
        "消息已准备",
        "App浏览页面",
        "web浏览页面",
        "激活App",
        "Push 点击",
        "参与抽奖",
        "加入购物车",
        "参与活动",
        "点击坑位",
        "优惠券操作",
        "商品详情页浏览",
        "登录",
        "抽奖页面浏览",
        "抽奖结果",
        "支付订单",
        "支付订单详情",
        "注册",
        "注册成功",
        "搜索商品",
        "提交订单",
        "提交订单详情",],
      placeList: [
        {
          value: "总次数",
          label: "总次数",
        },
        {
          value: "用户数",
          label: "用户数",
        },
        {
          value: "人均次数",
          label: "人均次数",
        },
      ],
      attribute1: "任意事件",
      attribute2: "总次数",
      attribute3: "总体",
      iframeShow: 3,
      dateValue: "1",
      dateRangeValue: [
        new Date(dayjs('2021-02-21').valueOf()).toLocaleString(),
        new Date(dayjs('2021-03-19').valueOf()).toLocaleString(),
      ],
      tableDateRangeValue: [
        new Date(dayjs('2021-02-21').valueOf()).toLocaleString(),
        new Date(dayjs('2021-03-19').valueOf()).toLocaleString(),
      ],
      dateOptions: {
        shortcuts: [
          {
            text: "今日",
            value() {
              const end = new Date();
              const start = new Date();
              return [start, end];
            },
            onClick: () => {
              this.iframeShow = 1;
            },
          },
          {
            text: "昨日",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1);
              end.setTime(end.getTime() - 3600 * 1000 * 24 * 1);
              return [start, end];
            },
            onClick: () => {
              this.iframeShow = 2;
            },
          },
          {
            text: "过去7天",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            },
            onClick: () => {
              this.iframeShow = 3;
            },
          },
          {
            text: "过去30天",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            },
          },
          {
            text: "过去90天",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            },
          },
        ],
      },
      tableInfo: {
        columns: [
        ],
        currentPage: 1,
        totalPage: 15,
        pageSize: 10,
        allList: [],
        list: [],
      },
    };
  },
  methods: {
    add() {
      this.propertyList.push({ event: "任意事件", place: "总次数" });
    },
    del(index) {
      if (this.propertyList.length == 1) {
        return;
      }
      this.propertyList.splice(index, 1);
    },
    /**
     * 生成随机数
     * @param min
     * @param max
     * @param precise {Number}精准小数
     * @returns {*}
     */
    getRandom(min, max, precise) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!precise) {
        return num
      }
      let tmp = Math.random().toFixed(precise);
      let number = num + Number(tmp)
      return Number(number.toFixed(2))
    },
    generatePageData(total = this.tableInfo.totalPage){
      for (let i = 0; i < total; ++i){
        const row = {}
        let total = 0
        for (let i = 0, len = this.tableInfo.columns.length; i < len; ++i){
          const cur = this.tableInfo.columns[i];
          if(cur.key !== 'total'){
            const num = this.getRandom(8500, 8900)
            row[cur.key] = this.thousandsSwitch(num)
            total += num
          }
        }
        row.total = this.thousandsSwitch(total)
        this.tableInfo.allList.push(row)
      }
    },
    tableChangePage(page, pageObj) {
      pageObj.currentPage = page
      pageObj.list = pageObj.allList.slice((page - 1) * pageObj.pageSize, page * pageObj.pageSize)
    },
    generateColumns() {
      const start = dayjs(this.tableDateRangeValue[0])
      const stop = dayjs(this.tableDateRangeValue[1])
      const count = stop.diff(start, 'day')
      const width = 120 / 144 * window.rem
      for (let i = 0; i < count; ++i) {
        const _start = start.add(i, 'day')
        const day = _start.format('MM-DD')
        this.tableInfo.columns.push({ title: `${day} (${config[_start.day()]})`, key: dayjs(_start.format('YYYY-MM-DD')).valueOf(), width })
      }
      this.tableInfo.columns.unshift({ title: '合计', key: 'total', width })
    },
    /**
     * 把数字转换为以{separator}分割的字符串
     * @param num {String | Number} 要进行转换的数字，或者数字类型的字符串
     * @return {string}
     */
    thousandsSwitch (num) {
      return ("" + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,")
    }
  },
  mounted() {
    this.generateColumns()
    this.generatePageData()
    this.tableChangePage(1, this.tableInfo)
  },
  computed:{
    myData(){
      return {
        '1': this.$fjData.box44Data,
        '2': this.$fjData.box45Data,
        '3': this.$fjData.box46Data,
        '4': this.$fjData.box47Data,
        '5': this.$fjData.box48Data,
      }[this.iframeShow]
    }
  },
};
</script>

<style scoped lang="scss">
    .mt8 {
        margin-top: 8px;
    }
    .mr16 {
        margin-right: 16px;
    }
    .mr8 {
        margin-right: 8px;
    }
    .ml8 {
        margin-left: 8px;
    }

    .mr12 {
        margin-right: 12px;
    }

    .w200 {
        width: 200px;
    }

    .w100 {
        width: 100px;
    }

    .w80 {
        width: 80px;
    }

    .w60 {
        width: 60px;
    }
  .filter-container {
    // width: 1152px;
    padding: 0 24px 16px;
    margin-bottom: 20px;
    background: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;

    .c-title {
      margin-bottom: 16px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #212121;
    }

    .property,
    .behavior {
      position: relative;
      padding: 10px 0;

      .add {
        position: absolute;
        top: 12px;
        right: 66px;
        color: #2373ff;
        font-size: 14px;
        cursor: pointer;
      }

      .del {
        position: absolute;
        top: 12px;
        right: 24px;
        width: 18px;
        height: 18px;
        font-size: 18px;
        color: #999999;
        line-height: 18px;
        cursor: pointer;
      }
    }
    .property{
      border-top: 1px solid #DEE2EE;
      padding-top: 16px;
      padding-bottom: 16px;
      display: flex;
      align-items: center;
      &:first-child{
        border-top: none;
      }
      .property-label{
        font-size: 14px;
        font-weight: 400;
        color: #636E95;
        line-height: 22px;
      }
      .btn{
        border-radius: 4px;
        border: 1px solid #97A0C3;
      }
    }
    .property.nobt{
      border-bottom: 0;
    }
    .filter-show {
      margin-top: 20px;
    }
  }

  .show-container {
    padding: 12px 24px;
    background: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
    margin-bottom: 16px;
    .top {
      text-align: right;
      margin-bottom: 12px;
      .date-select {
        width: 80px;
      }

      .date-range-select {
        margin-left: 20px;
        width: 220px;
      }
      .btn{
        border-radius: 4px;
        border: 1px solid #97A0C3;
      }
    }

    .bottom {
      > p {
        padding-top: 20px;
      }

      .chart-box {
        width: 100%;
        height: 360px;
        .iframe {
          width: 100%;
          height: 360px;
        }
      }
      .table-warp{
        ::v-deep .ivu-table {
          th{
            height: 48px;
            background: #F4F7FC;

            .ivu-table-cell {
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242F57;
            }
          }
        }

        .table-page-warp{
          margin-top: 10px;
          text-align: right;
          .pageS {
            text-align: right;
            ::v-deep .ivu-page-options {
              float: left;
            }
          }
        }
      }
    }
  }
</style>
