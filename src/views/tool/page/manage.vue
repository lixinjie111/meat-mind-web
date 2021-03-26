<template>
  <div class="qdgl">
      <div class="header-nav"><p>渠道管理</p></div>
      <div class="qdgl-panel">
        <div class="qdgl-title">
          <span class="title-left">渠道设置</span>
          <span class="title-rt">设置</span>
        </div>
        <div class="qdgl-box">
          <div class="qdgl-item">
            <span class="item-title">激活归因窗口期</span>
            <span class="item-desc">1小时</span>
          </div>
          <div class="qdgl-item">
            <span class="item-title">深度回传归因窗口期</span>
            <span class="item-desc">30天</span>
          </div>
        </div>
      </div>
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
            <!-- <div class="operation">
              <div><Icon type="md-create" />编辑回传事件</div>
              <div><Icon type="md-settings" />配置账号</div>
            </div> -->
            <div class="actionList">
              <div class="detail">配置</div>
              <div class="detail">编辑</div>
          </div>
          </template>
        </Table>
       <div class="page">
          <Page :total="totalPage" :page-size-opts="[10, 15, 20, 25]" :current="currentPage" @on-change="changePage" @on-page-size-change="changeSize"
                  :pageSize="pageSize" show-total show-sizer class-name="pageS"/>
        </div>
        <!-- <div class="page-box">
          <Page :current="currentPage" :total="totalPage" :page-size="pageSize"
          @on-change="changePage"/>
      </div> -->
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
          // align: "center",
          width: 130 / 144 * window.rem,
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
    },
    changeSize(pageSize) {
      this.pageSize = pageSize
    },
  }
}
</script>

<style scoped lang="scss">
.qdgl{
  width: 100%;
  padding:0 24px;
  padding-bottom: 24px;
  // display: flex;
  // flex-direction: column;
  .qdgl-panel{
    height: 144px;
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    border-radius: 8px;
    padding: 16px 24px;
    margin-bottom: 16px;
    .qdgl-title{
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      .title-left{
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
      }
      .title-rt{
        width: 76px;
        height: 32px;
        background: #2373FF;
        box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
        border-radius: 4px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 32px;
        text-align: center;
        cursor: pointer;
      }
    }
    .qdgl-box{
      display: flex;
      .qdgl-item{
        display: flex;
        flex-direction: column;
        .item-title{
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
          line-height: 16px;
          margin-bottom: 16px;
        }
        .item-desc{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242F57;
          line-height: 14px;
        }
      }
      .qdgl-item:last-child{
        margin-left: 205px;
      }
    }
  }
  img{
    width: 100%;
    // height: 100%;
  }
  .qdgl-table{
    width: 100%;
    padding: 16px 24px;
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    border-radius: 8px;
      // .page-box {
      //   margin-top: 10px;
      //   text-align: right;
      // }
              ::v-deep .ivu-table-header thead tr th{
            height: 48px;
            background: #F6F9FF;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
        }
        ::v-deep .ivu-table th,::v-deep .ivu-table td{
            height: 56px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            border-bottom: 1px solid #EAEDF7;
        }
      .page {
            padding-top: 16px;
            .pageS {
            text-align: right;
            ::v-deep .ivu-page-options {
                float: left;
            }
            }
        }
      .status{
        height: auto;
        margin: 0 8px 0 0;
        padding: 1px 7px;
        font-size: 12px;
        line-height: 22px;
        background: #fafafa;
        border: 1px solid #d3dce6;
        border-radius: 2px;
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
      // .operation{
      //   display: flex;
      //   align-items: center;
      //   justify-content: space-around;
      //   font-size: 12px;
      //   color: #c0ccda;
      // }
      .actionList {
                  display: flex;
                    //justify-content: flex-end;
            .detail {
                margin-right: 16px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 400;
                color: #2373FF;
                line-height: 22px;
            }
        }
  }
}
</style>


<style lang="scss">
.qdgl-table {
    .ivu-table{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
    }

    .table-page-warp{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
    }

}
</style>