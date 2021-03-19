<template>
  <div class="qdlj">
    <img src="../../../static/img/tool/qdzz/qdlj/qdlj-header.png" alt=""/>
    <div class="qdlj-table">
      <Table :columns="columns" :data="data">
        <template slot-scope="" slot="operation">
          <div class="operation"><Icon type="ios-link" /><Icon type="ios-stats" /></div>
        </template>
      </Table>
      <div class="page-box">
        <Page :current="currentPage" :total="totalPage" :page-size="pageSize"
        @on-change="changePage"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qdlj",
  data() {
    return {
      currentPage:1,
      totalPage:25,
      pageSize:15,
      columns: [
        {
          title: "链接名称",
          key: "name",
          tooltip:true
        },
        {
          title: "渠道类型",
          key: "qd_type",
          tooltip:true
        },
        {
          title: "设备类型",
          key: "unit_type",
        },
        {
          title: "所属活动",
          key: "activity",
        },
        {
          title: "广告来源",
          key: "source",
        },
        {
          title: "广告媒介",
          key: "medium",
        },
        {
          title: "关键词",
          key: "keyword",
        },
        {
          title: "广告内容",
          key: "content",
        },
        {
          title: "操作",
          slot: "operation",
          width:120,
          align:"center"
        },
      ],
      data: [
        {
          name: "今日头条/抖音_20210114_6431",
          qd_type: "今日头条/抖音",
          unit_type: "iOS",
          activity: "APP推广",
          source: "头条",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "今日头条/抖音_20210114_0964",
          qd_type: "今日头条/抖音",
          unit_type: "Android",
          activity: "APP推广",
          source: "头条",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "小红书_APP推广_20210114_2983",
          qd_type: "小红书",
          unit_type: "iOS",
          activity: "APP推广",
          source: "小红书",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "小红书_APP推广_20210114_5303",
          qd_type: "小红书",
          unit_type: "通用",
          activity: "APP推广",
          source: "小红书",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "微信广告_20210112_6126",
          qd_type: "微信广告",
          unit_type: "通用",
          activity: "APP推广",
          source: "微信",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_20210112_9997",
          qd_type: "网页通用渠道",
          unit_type: "Android",
          activity: "APP推广",
          source: "新浪",
          medium:"banner",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_20210112_9371",
          qd_type: "APP 通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "搜狐",
          medium:"banner",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_活动1_20210112_5535",
          qd_type: "网页通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "百度",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "广点通_未知活动_20210112_3481",
          qd_type: "广点通",
          unit_type: "通用",
          activity: "测试",
          source: "百度",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_未知活动_20201222_9165",
          qd_type: "网页通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "百度",
          medium:"关键词",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"关键词",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "APP推广",
          source: "微博",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "APP推广",
          source: "新浪",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
      ],
            data1: [
        {
          name: "今日头条/抖音_20210114_6431",
          qd_type: "今日头条/抖音",
          unit_type: "iOS",
          activity: "APP推广",
          source: "头条",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "今日头条/抖音_20210114_0964",
          qd_type: "今日头条/抖音",
          unit_type: "Android",
          activity: "APP推广",
          source: "头条",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "小红书_APP推广_20210114_2983",
          qd_type: "小红书",
          unit_type: "iOS",
          activity: "APP推广",
          source: "小红书",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "小红书_APP推广_20210114_5303",
          qd_type: "小红书",
          unit_type: "通用",
          activity: "APP推广",
          source: "小红书",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "微信广告_20210112_6126",
          qd_type: "微信广告",
          unit_type: "通用",
          activity: "APP推广",
          source: "微信",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_20210112_9997",
          qd_type: "网页通用渠道",
          unit_type: "Android",
          activity: "APP推广",
          source: "新浪",
          medium:"banner",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_20210112_9371",
          qd_type: "APP 通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "搜狐",
          medium:"banner",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_活动1_20210112_5535",
          qd_type: "网页通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "百度",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "广点通_未知活动_20210112_3481",
          qd_type: "广点通",
          unit_type: "通用",
          activity: "测试",
          source: "百度",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_未知活动_20201222_9165",
          qd_type: "网页通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "百度",
          medium:"关键词",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"关键词",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "APP推广",
          source: "微博",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "APP推广",
          source: "新浪",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
      ],
            data2: [
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_未知活动_20201222_9165",
          qd_type: "网页通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "百度",
          medium:"关键词",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"关键词",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "APP推广",
          source: "微博",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "测试",
          source: "微博",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_充值_20210111_0600",
          qd_type: "APP 通用渠道",
          unit_type: "iOS",
          activity: "APP推广",
          source: "新浪",
          medium:"文章",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "今日头条/抖音_20210114_6431",
          qd_type: "今日头条/抖音",
          unit_type: "iOS",
          activity: "APP推广",
          source: "头条",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "今日头条/抖音_20210114_0964",
          qd_type: "今日头条/抖音",
          unit_type: "Android",
          activity: "APP推广",
          source: "头条",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "小红书_APP推广_20210114_2983",
          qd_type: "小红书",
          unit_type: "iOS",
          activity: "APP推广",
          source: "小红书",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "小红书_APP推广_20210114_5303",
          qd_type: "小红书",
          unit_type: "通用",
          activity: "APP推广",
          source: "小红书",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "微信广告_20210112_6126",
          qd_type: "微信广告",
          unit_type: "通用",
          activity: "APP推广",
          source: "微信",
          medium:"cpc",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_20210112_9997",
          qd_type: "网页通用渠道",
          unit_type: "Android",
          activity: "APP推广",
          source: "新浪",
          medium:"banner",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "APP 通用渠道_20210112_9371",
          qd_type: "APP 通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "搜狐",
          medium:"banner",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "网页通用渠道_活动1_20210112_5535",
          qd_type: "网页通用渠道",
          unit_type: "通用",
          activity: "APP推广",
          source: "百度",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        },
        {
          name: "广点通_未知活动_20210112_3481",
          qd_type: "广点通",
          unit_type: "通用",
          activity: "测试",
          source: "百度",
          medium:"品牌专区",
          keyword: "18",
          content: "39",
          operation: "0"
        }
      ],
    };
  },
  methods:{
    changePage(page){
      this.currentPage = page;
      page == 1 ? this.data = this.data1 : this.data = this.data2;
    }
  }
};
</script>

<style scoped lang="scss">
.qdlj {
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  img {
    width: 100%;
  }
  .qdlj-table{
    padding: 0 24px 24px;
    width: 100%;
      .page-box {
        margin-top: 10px;
        text-align: right;
      }
      .operation{
        display: flex;
        justify-content: space-around;
        color: #c0ccda;
      }
  }
}
</style>
