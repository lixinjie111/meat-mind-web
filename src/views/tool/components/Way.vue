<template>
  <DetailsPage title="用户路径分析" backname="analysis-tool-model">
    <div class="filter-container">
      <FilterIndice title="选择参与分析的事件" button-text="事件分组" :events="multiOptions" show-event></FilterIndice>
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
        multiOptions: ["选择全部",
          "App 激活",
          "App崩溃",
          "App浏览页面",
          "App点击",
          "App页面浏览",
          "Banner点击",
          "Push 点击",
          "Web 元素点击",
          "Web 视区停留",
          "web浏览页面",
          "x频道任意点击",
          "x频道有效点击",
          "上报微信用户地理位置",
          "优惠券操作",
          "会员等级提升",
          "全端启动",
          "关注微信公众号",
          "分享商品",
          "加入购物车",
          "参与抽奖",
          "参与活动",
          "发起分享",
          "取关微信公众号",
          "启动App",
          "商品详情页浏览",
          "完善资料",
          "小程序分享",
          "小程序启动",
          "小程序进入后台",
          "小程序页面浏览",
          "小程序首次启动",
          "微信公众号接收用户消息",
          "微信客服消息终态信息",
          "扫描微信参数二维码",
          "抽奖结果",
          "抽奖页面浏览",
          "推送打开",
          "推送转化",
          "推送送达",
          "提交订单",
          "提交订单详情",
          "搜索商品",
          "支付订单",
          "支付订单详情",
          "收藏商品",
          "注册",
          "注册成功",
          "消息已准备",
          "消息已发送",
          "激活App",
          "点击坑位",
          "点击微信公众号菜单",
          "点击微信菜单会话",
          "猜你喜欢点击",
          "登录",
          "短链跳转",
          "秒杀坑位",
          "评论",
          "购买商品",
          "退出App",
          "选择分享方式",
          "领取权益",
          "首页点击事件",
          "高积分行为",],
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
      margin-left: 16px;
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
