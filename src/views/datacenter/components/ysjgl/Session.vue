<template>
  <!-- <div class="fxmx-session">
      <img src="../../../../static/img/datacenter/ysjgl/session@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
  <DetailsPage title="session管理" backname="data-center-metax">
    <HeaderSearch>
      <div class="session-header-left">
        <div class="blue-btn">
          <i class="iconfont2 iconicon_addto1"></i>
          <div>新建Session</div>
        </div>

        <div class="total">当前条件共 7 个Session</div>
      </div>
      <div class="session-search" slot="text">
        <i class="iconfont iconsearch"></i>
        <span>请输入Session名或Session显示名</span>
      </div>
    </HeaderSearch>
    <TableModel :columns="columns" :tableData="tableData">
    </TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../../layouts/DetailsPage";
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
        },
        {
          title: "Session显示名",
          key: "show",
        },
        {
          title: "物品类型",
          key: "type",
          width: 140,
        },
        {
          title: "数据类型",
          key: "data",
          width: 140,
        },
        {
          title: "单位/格式",
          key: "format",
          width: 140,
        },
        {
          title: "显示状态",
          key: "status",
          width: 140,
        },
        {
          title: "预置",
          key: "target",
          width: 120,
        },
        // {
        //   title: "操作",
        //   slot: "operate",
        //   width: 120,
        // },
      ],
      tableData: [
        {
          name: "$is_valid",
          show: "是否封禁",
          data: "逻辑",
          status: "可见",
          type: "-",
          target: "否",
          format: "无",
          operate: "",
        },
        {
          name: "$receive_time",
          show: "到达时间",
          data: "逻辑",
          status: "隐藏",
          type: "-",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "$update_time",
          show: "更新时间",
          data: "逻辑",
          status: "隐藏 ",
          type: "-",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "site_language",
          show: "站点语言",
          data: "数值",
          status: "隐藏 ",
          type: "",
          target: "无",
          format: "无",
          operate: "",
        },
        {
          name: "site_id",
          show: "站点",
          data: "数值",
          status: "隐藏 ",
          type: "-",
          target: "无",
          format: "无",
          operate: "",
        },
        {
          name: "category_id",
          show: "类目ID",
          data: "数值",
          status: "隐藏",
          type: "-",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "commodity_spu",
          show: "商品SPU",
          data: "数值",
          status: "可见",
          type: "-",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "is_new",
          show: "是否新品",
          data: "数值",
          status: "可见",
          type: "-",
          target: "无",
          format: "无",
          operate: "",
        },
        {
          name: "share_content",
          show: "分享商品",
          data: "数值",
          status: "隐藏 ",
          type: "-",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "room_id",
          show: "直播间ID",
          data: "数值",
          status: "隐藏",
          type: "-",
          target: "无",
          format: "无",
          operate: "",
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