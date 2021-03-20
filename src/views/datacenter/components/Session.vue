<template>
  <!-- <div class="fxmx-session">
      <img src="../../../../static/img/datacenter/ysjgl/session@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
  <DetailsPage title="Session管理" backname="data-center-metax">
    <HeaderSearch>
      <div class="session-header-left">
        <div class="blue-btn">
          <i class="iconfont icontianjia"></i>
          <div>新建Session</div>
        </div>

        <div class="total">当前条件共 10 个Session</div>
      </div>
      <div class="session-search" slot="text">
        <i class="iconfont iconSearch"></i>
        <span>请输入Session名或Session显示名</span>
      </div>
    </HeaderSearch>
    <TableModel :columns="columns" :tableData="tableData">
    </TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../layouts/DetailsPage";
import HeaderSearch from "../base/HeaderSearch";
import TableModel from "../base/TableModel";
export default {
  name: "Session",
  components: { DetailsPage, HeaderSearch, TableModel },
  data() {
    return {
      columns: [
        {
          title: "Session名",
          slot: "name",
          width: 180,
        },
        {
          title: "Session显示名",
          key: "show",
        //   width: 140,
        },
        {
          title: "包含事件",
          key: "include",
        },
        {
          title: "切割规则",
          key: "cut",
          width: 160,
        },
        {
          title: "备注",
          key: "format",
          width: 160,
        },
      ],
      tableData: [
        {
          name: "WEBsession",
          show: "网站基础指标-默认Session",
          include:"Web 元素点击,Web 浏览页面,Web 视区停留",
          cut:"5分钟",
          format:""
        },
        {
          name: "app_length",
          show: "APP浏览时长",
          include:"$退出APP",
          cut:"30分钟",
          format:""
        },
        {
          name: "app_page_view",
          show: "app页面浏览",
          include:"App 浏览页面,浏览商品详情页",
          cut:"1分钟",
          format:""          
        },
        {
          name: "app_details",
          show: "app浏览商品详情页",
          include:"浏览商品详情页",
          cut:"60分钟",
          format:""  
        },
        {
          name: "appall",
          show: "app 端行为",
          include:"$启动APP,$退出APP,App 元素点击,App 浏览页面",
          cut:"20分钟",
          format:""  
        },
        {
          name: "session-web",
          show: "session-web",
          include:"Web 浏览页面",
          cut:"10分钟",
          format:""  
        },
        {
          name: "commodity",
          show: "首页跳出",
          include:"Web 元素点击,Web 浏览页面,Web 视区停留",
          cut:"10分钟",
          format:""  
        },
        {
          name: "is_new",
          show: "是否新品",
          include:"Web 浏览页面",
          cut:"10分钟",
          format:""  
        },
        {
          name: "share_content",
          show: "分享商品",
          include:"Web 浏览页面",
          cut:"10分钟",
          format:""  
        },
        {
          name: "room_id",
          show: "直播间ID",
          include:"Web 浏览页面",
          cut:"10分钟",
          format:""  
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.session-header-left {
  display: flex;
  align-items: center;
  height: 55px;
  padding-left: 24px;
  flex: auto;
  border-bottom: 1px solid #eaedf7;
  line-height: 54px;
  .blue-btn {
    display: flex;
    align-items: center;
    width: 140px;
    height: 32px;
    padding: 0 16px;
    margin-right: 8px;
    background: #2373ff;
    border-radius: 8px;
    > i {
      width: 14px;
      height: 14px;
      font-size: 12px;
      font-weight: 600;
      color: #ffffff;
      margin-right: 4px;
      line-height: 14px;
    }
    > div {
      height: 14px;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 14px;
    }
  }
  .total {
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #97a0c3;
    line-height: 20px;
  }
}
  .session-search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 267px;
    height: 56px;
    > i {
      width: 24px;
      height: 24px;
      color: #7c88b1;
      font-size: 24px;
      margin-right: 8px;
      line-height: 24px;
    }
    > span {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #97a0c3;
    }
  }
</style>