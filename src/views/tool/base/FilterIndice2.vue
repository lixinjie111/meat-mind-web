<template>
  <div class="filter-event">
    <div class="event">
      {{title}}
      <Select v-model="event" class="item1" v-if="showEvent">
        <Option v-for="(item,index) of events" :value="index+1" :key="index+1">{{item}}</Option>
      </Select>
      <Button v-if="!isArray" @click="handleAddCondition" class="item2" :disabled="conditions.length > 0">
        <i class="iconfont icontianjia"></i>
        {{buttonText}}</Button>
      <template v-if="isArray">
        <Button  v-for="(it, i) in buttonText" @click="handleAddCondition(i)" :class="['item2', buttonCss]" :disabled="conditionsDisabled[i].length > 0">
          <i class="iconfont icontianjia"></i>
          {{it}}</Button>
      </template>
      <span style="margin-left: 16px;">{{suffix}}</span>
    </div>
    <div class="array">
      <MutableArray :value="conditions" :init-item="initItem" :on-delete="handleDelete">
        <template #item="itemProps">
            <IndiceCondition v-bind="itemProps" />
        </template>
      </MutableArray>
    </div>
  </div>
</template>

<script>
  import IndiceCondition from '../base/IndiceCondition';
  import MutableArray from '../base/MutableArray';

  export default {
    name: "FilterEvent",
    data() {
      const conditionsDisabled = Array.isArray(this.buttonText) ? this.buttonText.map(()=>([])) : {}
      console.log('conditionsDisabled', conditionsDisabled)
      return {
        event: 1,
        events: ["任意事件",
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
        conditions: [],
        conditionsDisabled,
        initItem: {condition: 1, amount: 1},
      }
    },
    components: {IndiceCondition, MutableArray},
    props: {
      title: String,
      suffix: String,
      showEvent: Boolean,
      buttonText: {
        type: [String, Array],
        default: '筛选条件'
      },
      buttonCss: {
        type: String,
        default: ''
      },
    },
    methods: {
      handleAddCondition(i) {
        this.conditions.push(Object.assign({}, this.initItem));
        this.conditionsDisabled[i].push(this.conditions.length - 1)
      },
      handleDelete(index) {
        this.conditions.splice(index, 1);
        this.delEveryItem(index)
      },
      delEveryItem(index){
        for (let i = 0, len = this.conditionsDisabled.length; i < len; ++i){
          const _i = this.conditionsDisabled[i].indexOf(index)
          if(_i !== -1){
            this.conditionsDisabled[i].splice(_i, 1);
          }
        }
      },
    },
    computed:{
      isArray(){
        return Array.isArray(this.buttonText)
      },
    },
  }
</script>

<style lang="scss" scoped>
.filter-event {
  border-top: 1px solid #DEE2EE;

  .event {
    display: flex;
    align-items: center;
    height: 64px;
    font-size: 14px;
    color: #636E95;
  }

  .array {
    margin-left: 72px;
  }
  .item1 {
    width: 200px;
    margin-left: 16px;
  }
  .item2 {
    margin-left: 16px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #97A0C3;
  }
  .item2.ml0:first-child{
    margin-left: 0;
  }
}
</style>
