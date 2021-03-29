<template>
  <!-- <div class="fxmx-session">
      <img src="../../../../static/img/datacenter/ysjgl/session@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
  <DetailsPage title="Session管理" backname="data-center-metax">
    <div class="session-header">
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
    </div>
    <TableModel :columns="columns" :tableData="tableData">
    </TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../layouts/DetailsPage";
import TableModel from "../base/TableModel";
export default {
  name: "Session",
  components: { DetailsPage, TableModel },
  data() {
    return {
      columns: [
        {
          title: "Session名",
          slot: "name",
          width: 180 / 144 * window.rem,
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
          width: 160 / 144 * window.rem,
        },
        {
          title: "备注",
          key: "format",
          width: 160 / 144 * window.rem,
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
.session-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  margin-bottom: 16px;
  background: #FFFFFF;
  box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
  border-radius: 8px;
  .session-header-left {
    display: flex;
    align-items: center;
    height: 55px;
    padding-left: 24px;
    flex: auto;
    line-height: 54px;
    .blue-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 125px;
      height: 32px;
      margin-right: 16px;
      background: #2373FF;
      box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
      border-radius: 4px;
      cursor: pointer;
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
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 22px;
      }
    }
    .total {
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #97A0C3;
        line-height: 20px;
    }
  }
  .session-search {
    display: flex;
    align-items: center;
    width: 300px;
    height: 32px;
    padding-left: 12px;
    margin-right: 24px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #97A0C3;
    > i {
      width: 20px;
      height: 20px;
      color: #7c88b1;
      font-size: 20px;
      margin-right: 8px;
      line-height: 20px;
    }
    > span {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #97a0c3;
    }
  }
}


</style>