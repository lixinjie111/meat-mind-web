<template>
  <DetailsPage title="分布分析" backname="analysis-tool-model">
    <div>
      <div class="filter-container">
        <div class="" slot="content">
          <div class="property" v-for="(item, index) in propertyList" :key="index">
            <span class="mr12 property-label">用户进行</span>
            <Select v-model="item.event" class="mr12 w200">
              <Option v-for="ele in attributeList1" :value="ele" :key="ele">{{ ele }}</Option>
            </Select>
            <span class="mr12 property-label">的</span>
            <Select v-model="item.place" class="mr12 w200">
              <Option v-for="ele in placeList" :value="ele.value" :key="ele.value">{{ ele.label }}</Option>
            </Select>
            <i class="iconfont iconsetup mr12"></i>
            <i class="iconfont iconbangzhuzhongxin"></i>
          </div>
          <FilterEvent title="事件满足" buttonText="筛选条件" ></FilterEvent>
          <FilterEvent title="用户符合" buttonText="筛选条件" ></FilterEvent>
        </div>
      </div>
      <div class="show-container">
        <div class="top">
          <span></span>
          <span>
            <Select v-model="tableInfo.search.selected" class="mr12 w120">
            <Option v-for="ele in tableInfo.search.selectOptions" :value="ele.value" :key="ele.value">{{ ele.name }}</Option>
          </Select>
          <DatePicker class="date-range-select" type="daterange" :value="tableDateRangeValue" placeholder="请选择时间范围" placement="bottom-end"></DatePicker>
          </span>

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
import FilterEvent from "../base/FilterEvent";
import dayjs from "dayjs";
export default {
  name: "Event",
  components: {
    DetailsPage, FilterEvent
  },
  watch: {
    propertyList: {
      handler: function () {
        if (this.iframeShow >= 5 || this.iframeShow < 2) {
          this.tableDateRangeValue = [
            new Date(dayjs('2021-03-12').valueOf()).toLocaleString(),
            new Date(dayjs('2021-03-13').valueOf()).toLocaleString(),
          ];
          this.iframeShow = 3;
        } else {
          this.tableDateRangeValue = [
            new Date(dayjs('2021-03-12').valueOf()).toLocaleString(),
            new Date(dayjs('2021-03-13').valueOf()).toLocaleString(),
          ];
          this.iframeShow = this.iframeShow + 1;
        }
      },
      deep: true,
    },
  },
  data() {
    return {
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
      iframeShow: 3,
      tableDateRangeValue: [
        new Date(dayjs('2021-03-12').valueOf()).toLocaleString(),
        new Date(dayjs('2021-03-13').valueOf()).toLocaleString(),
      ],
      tableInfo: {
        columns: [
          {
            title: "文件名称",
            key: "name",

          },
          {
            title: "更新时间",
            key: "updateTime",
            width: 200 / 144 * window.rem
          },
          {
            title: "操作",
            key: "operation",
            width: 200 / 144 * window.rem
          },
        ],
        currentPage: 1,
        totalPage: 0,
        pageSize: 10,
        allList: [],
        list: [],
        search: {
          selected: 1,
          selectOptions: [{ name: '一天内', value: 1 }],
        },
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
      return num + Number(tmp)
    },
    generatePageData(total = this.tableInfo.totalPage){
      for (let i = 0; i < total; ++i){
        this.tableInfo.allList.push({ })
      }
    },
    tableChangePage(page, pageObj) {
      pageObj.currentPage = page
      pageObj.list = pageObj.allList.slice((page - 1) * pageObj.pageSize, page * pageObj.pageSize)
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
    // this.generatePageData()
    // this.tableChangePage(1, this.tableInfo)
  },
  computed:{
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

.w120 {
  width: 120px;
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
    border-bottom: 1px solid #DEE2EE;
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    &:last-child{
      border-bottom: none;
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
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
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
      .ivu-table th{
        height: 48px;
        background: #F4F7FC;
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
