<template>
  <!-- <div class="fxmx-item">
      <img src="../../../../static/img/datacenter/ysjgl/item@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
  <DetailsPage title="物品属性" backname="data-center-metax">
    <HeaderSearch></HeaderSearch>
    <TableModel :columns="columns" :tableData="tableData">
      <div class="more-opterate">
        <div class="more-opterate-title">批量操作：</div>
        <div class="reset-btn">批量重命名</div>
      </div>
    </TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../layouts/DetailsPage";
import HeaderSearch from "../base/HeaderSearch";
import TableModel from "../base/TableModel";
export default {
  name: "ItemAttribute",
  components: { DetailsPage, HeaderSearch, TableModel },
  data() {
    return {
      columns: [
          {
              type:"selection",
              width:60 / 144 * window.rem,
              align:"center"
          },
        {
          title: "属性名",
          slot: "name",
        },
        {
          title: "显示名",
          key: "show",
        },
        {
          title: "物品类型",
          key: "type",
          width: 140 / 144 * window.rem,
        },
        {
          title: "数据类型",
          key: "data",
          width: 140 / 144 * window.rem,
        },
        {
          title: "单位/格式",
          key: "format",
          width: 140 / 144 * window.rem,
        },
        {
          title: "显示状态",
          key: "status",
          width: 140 / 144 * window.rem,
        },
        {
          title: "预置",
          key: "target",
          width: 120 / 144 * window.rem,
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
// .fxmx-item{
//     position: relative;
//     width: 100%;
//     height: 100%;
//     img{
//         width: 100%;
//     }
//     .back{
//         position: absolute;
//         top: 22px;
//         left: 24px;
//         width: 26px;
//         height: 26px;
//         // border: 1px solid red;
//         cursor: pointer;
//     }
// }
.more-opterate {
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #eaedf7;
  .more-opterate-title {
    width: 70px;
    height: 20px;
    margin-right: 8px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 20px;
  }
  .reset-btn {
    width: 90px;
    height: 28px;
    // box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8), -2px -2px 7px 0px #fffefa;
    border-radius: 4px;
    border: 1px solid #97A0C3;
    line-height: 26px;
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #242F57;
  }
}
</style>