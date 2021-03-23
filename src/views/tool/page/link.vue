<template>
  <div class="qdlj">
    <div class="header-nav"><p>渠道链接</p></div>
    <CreateLable></CreateLable>
    <!-- <img src="../../../static/img/tool/qdzz/qdlj/qdlj-header.png" alt=""/> -->
    <div class="qdlj-table">
      <Table :columns="columns" :data="data">
        <template slot-scope="" slot="operation">
           <div class="actionList">
              <div class="detail">链接</div>
              <div class="detail">
                 <Dropdown trigger="click" style="margin-left: 20px">
                  <a class="detail">
                      更多
                      <Icon type="ios-arrow-down"></Icon>
                  </a>
                  <DropdownMenu slot="list">
                      <DropdownItem>查看</DropdownItem>
                      <DropdownItem>编辑</DropdownItem>
                      <DropdownItem>删除</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
              </div>
          </div>
        </template>
      </Table>
      <div class="page">
          <Page :total="totalPage" :current="currentPage" :page-size-opts="[10, 15, 20, 25]"  @on-change="changePage" @on-page-size-change="changeSize"
                  :pageSize="pageSize" show-total show-sizer class-name="pageS"/>
      </div>
    </div>
  </div>
</template>

<script>
import CreateLable from "../base/CreateLable1";
export default {
  components: { CreateLable },
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
          fixed: 'left',
          width: 300 / 144 * window.rem,
        },
        {
          title: "渠道类型",
          key: "qd_type",
          width: 150 / 144 * window.rem,
        },
        {
          title: "设备类型",
          key: "unit_type",
           width: 150 / 144 * window.rem,
        },
        {
          title: "所属活动",
          key: "activity",
           width: 150 / 144 * window.rem,
        },
        {
          title: "广告来源",
          key: "source",
           width: 150 / 144 * window.rem,
        },
        {
          title: "广告媒介",
          key: "medium",
           width: 130 / 144 * window.rem,
        },
        {
          title: "关键词",
          key: "keyword",
           width: 130 / 144 * window.rem,
        },
        {
          title: "广告内容",
          key: "content",
           width: 130 / 144 * window.rem,
        },
        {
          title: "操作",
          slot: "operation",
          fixed: 'right',
          width: 180 / 144 * window.rem,
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
        // {
        //   name: "网页通用渠道_未知活动_20201222_9165",
        //   qd_type: "网页通用渠道",
        //   unit_type: "通用",
        //   activity: "APP推广",
        //   source: "百度",
        //   medium:"关键词",
        //   keyword: "18",
        //   content: "39",
        //   operation: "0"
        // },
        // {
        //   name: "APP 通用渠道_充值_20210111_0600",
        //   qd_type: "APP 通用渠道",
        //   unit_type: "iOS",
        //   activity: "测试",
        //   source: "微博",
        //   medium:"关键词",
        //   keyword: "18",
        //   content: "39",
        //   operation: "0"
        // },
        // {
        //   name: "APP 通用渠道_充值_20210111_0600",
        //   qd_type: "APP 通用渠道",
        //   unit_type: "iOS",
        //   activity: "APP推广",
        //   source: "微博",
        //   medium:"文章",
        //   keyword: "18",
        //   content: "39",
        //   operation: "0"
        // },
        // {
        //   name: "APP 通用渠道_充值_20210111_0600",
        //   qd_type: "APP 通用渠道",
        //   unit_type: "iOS",
        //   activity: "测试",
        //   source: "微博",
        //   medium:"文章",
        //   keyword: "18",
        //   content: "39",
        //   operation: "0"
        // },
        // {
        //   name: "APP 通用渠道_充值_20210111_0600",
        //   qd_type: "APP 通用渠道",
        //   unit_type: "iOS",
        //   activity: "APP推广",
        //   source: "新浪",
        //   medium:"文章",
        //   keyword: "18",
        //   content: "39",
        //   operation: "0"
        // },
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
  padding:0 24px;
   padding-bottom: 24px;
  img {
    width: 100%;
  }
  .qdlj-table{
    margin-top: 16px;
    padding: 16px 24px;
    background: #fff;
    width: 100%;
     .page {
            padding-top: 16px;
            .pageS {
            text-align: right;
            ::v-deep .ivu-page-options {
                float: left;
            }
            }
        }
      // .page-box {
      //   margin-top: 10px;
      //   text-align: right;
      // }
       .actionList {
                  display: flex;
                    justify-content: flex-end;
            .detail {
                margin-right: 16px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 400;
                color: #2373FF;
                line-height: 22px;
            }
        }
      // .operation{
      //   display: flex;
      //   justify-content: space-around;
      //   color: #c0ccda;
      // }
  }
}
</style>
