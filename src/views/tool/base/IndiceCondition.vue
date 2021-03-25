<template>
  <div class="condition">
    <Select v-model="condition" class="item1">
      <Option v-for="(item,index) in conditionOptions" :value="index+1" :key="index+1">{{ item }}</Option>
    </Select>
    的
    <Select v-model="amount" class="item2">
      <Option v-for="(item,index) in compareOptions" :value="index+1" :key="index+1">{{ item }}</Option>
    </Select>
  </div>
</template>

<script>
  export default {
    name: "IndiceCondition",
    data() {
      return {
        conditionOptions: [
          "任意事件",
          "App崩溃",
          "领取权益",
          "完善资料",
          "收藏商品",
          "关注微信公众号",
          "评论",
          "x频道有效点击（只要是点击了页面任何位置都算有效点击）",
          "x频道任意点击",
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
          "提交订单详情",
        ],
        compareOptions: [
          '总次数',
          '用户数',
          '人均次数',
          '停留时长',
        ]
      }
    },
    props: {
        condition: {
          default: 0
        },
      amount: {
          default: 0
        },
    }
  }
</script>

<style lang="scss" scoped>
.condition {
  /*width: 500px;*/
  display: flex;
  /*justify-content: space-between;*/
  height: 42px;
  align-items: center;
  font-size: 14px;

  .item1 {
    width: 200px;
    margin-right: 16px;
  }
  .item2 {
    width: 100px;
    margin-left: 16px;
  }
}
</style>
