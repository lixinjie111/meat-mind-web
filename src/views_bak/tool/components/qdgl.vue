<template>
  <div class="qdgl">
      <img src="../../../static/img/tool/qdzz/qdgl.png" alt="">
      <div class="qdgl-table">
        <Table :columns="columns" :data="data">
          <template slot-scope="{row}" slot="event">
            <span class="status status0" v-if="row.event==0">未配置</span>
            <span class="status status1" v-if="row.event==1">已配置</span>
            <span class="status status2" v-if="row.event==2">无需配置</span>
          </template>
          <template slot-scope="{row}" slot="account">
            <span class="status status0" v-if="row.account==0">未配置</span>
            <span class="status status1" v-if="row.account==1">已配置</span>
            <span class="status status2" v-if="row.account==2">无需配置</span>
          </template>
          <template slot-scope="" slot="operation">
            <div class="operation">
              <div><Icon type="md-create" />编辑回传事件</div>
              <div><Icon type="md-settings" />配置账号</div>
            </div>
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
  name:"qdgl",
  data(){
    return {
      currentPage:1,
      totalPage:25,
      pageSize:15,
      columns:[
        {
          title: "渠道名称",
          key: "name",
        },
        {
          title: "深度回传事件配置状态",
          slot: "event",
        },
        {
          title: "账号配置状态",
          slot: "account",
        },
        {
          title: "操作",
          slot: "operation",
          align: "center"
        },
      ],
      data:[
        {
          name:"APP通用渠道",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"APP通用渠道(包含Deeplink能力)",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"今日头条/抖音",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"微博粉丝通",
          event:"2",
          account:"0",
          operation:""
        },
        {
          name:"百度信息流",
          event:"1",
          account:"0",
          operation:""
        },
        {
          name:"广点通",
          event:"2",
          account:"0",
          operation:""
        },
        {
          name:"知乎",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"微信朋友圈",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"Bilibili",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"阿里汇川",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"快手",
          event:"0",
          account:"0",
          operation:""
        },
        {
          name:"爱奇艺",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"新浪",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"今日头条海外",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"网易有道",
          event:"2",
          account:"1",
          operation:""
        },
      ],
      data1:[
        {
          name:"APP通用渠道",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"APP通用渠道(包含Deeplink能力)",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"今日头条/抖音",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"微博粉丝通",
          event:"2",
          account:"0",
          operation:""
        },
        {
          name:"百度信息流",
          event:"1",
          account:"0",
          operation:""
        },
        {
          name:"广点通",
          event:"2",
          account:"0",
          operation:""
        },
        {
          name:"知乎",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"微信朋友圈",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"Bilibili",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"阿里汇川",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"快手",
          event:"0",
          account:"0",
          operation:""
        },
        {
          name:"爱奇艺",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"新浪",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"今日头条海外",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"网易有道",
          event:"2",
          account:"1",
          operation:""
        },
      ],
      data2:[
        {
          name:"APP通用渠道",
          event:"1",
          account:"0",
          operation:""
        },
        {
          name:"APP通用渠道(包含Deeplink能力)",
          event:"0",
          account:"0",
          operation:""
        },
        {
          name:"今日头条/抖音",
          event:"0",
          account:"0",
          operation:""
        },
        {
          name:"微博粉丝通",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"百度信息流",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"广点通",
          event:"2",
          account:"0",
          operation:""
        },
        {
          name:"知乎",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"微信朋友圈",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"Bilibili",
          event:"0",
          account:"0",
          operation:""
        },
        {
          name:"阿里汇川",
          event:"0",
          account:"0",
          operation:""
        },
        {
          name:"快手",
          event:"0",
          account:"0",
          operation:""
        },
        {
          name:"爱奇艺",
          event:"0",
          account:"2",
          operation:""
        },
        {
          name:"新浪",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"今日头条海外",
          event:"2",
          account:"2",
          operation:""
        },
        {
          name:"网易有道",
          event:"2",
          account:"1",
          operation:""
        },
      ],
    }
  },
  methods:{
    changePage(page){
      this.currentPage = page;
      page == 1 ? this.data = this.data1 : this.data = this.data2;
    }
  }
}
</script>

<style scoped lang="scss">
.qdgl{
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
    // height: 100%;
  }
  .qdgl-table{
    padding: 0 24px 24px;
    width: 100%;
      .page-box {
        margin-top: 10px;
        text-align: right;
      }
      .status{
        height: auto;
        margin: 0 8px 0 0;
        padding: 2px 7px;
        font-size: 12px;
        line-height: 22px;
        background: #fafafa;
        border: 1px solid #d3dce6;
        border-radius: 3px;
        cursor: default;
      }
      .status0{
        background-color: rgb(255, 236, 217);
        color: rgb(234, 123, 10);
        border-color: rgb(255, 236, 217);
      }
      .status1{
        background-color: rgb(224, 250, 243);
        color: rgb(25, 181, 137);
        border-color: rgb(224, 250, 243);
      }
      .status2{
        background-color: rgb(224, 240, 255);
        color: rgb(2, 115, 249);
        border-color: rgb(224, 240, 255);
      }
      .operation{
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 12px;
        color: #c0ccda;
      }
  }
}
</style>
