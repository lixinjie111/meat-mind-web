<template>
  <!-- <div class="fxmx-item">
      <img src="../../../../static/img/datacenter/ysjgl/item@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
    <DetailsPage title="物品属性" backname="data-center-metax">
    <HeaderNav></HeaderNav>
    <TableModel :columns="columns" :tableData="tableData"></TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../../layouts/DetailsPage";
import HeaderNav from "../base/HeaderNav";
import TableModel from "../base/TableModel";
export default {
    name:"ItemAttribute",
    components: { DetailsPage, HeaderNav, TableModel },
  data() {
    return {
      columns: [
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
          width: 100,
        },
        {
          title: "数据类型",
          key: "data",
          width: 100,
        },
        {
          title: "单位/格式",
          key: "format",
          width: 100,
        },
        {
          title: "显示状态",
          key: "status",
          width: 100,
        },
        {
          title: "预置",
          key: "target",
          width: 80,
        },
        {
          title: "操作",
          slot: "operate",
          width: 120,
        },
      ],
      tableData: [
        {
          name: "$is_valid",
          show: "是否封禁",
          data: "逻辑",
          status: "可见",
          stype: "",
          target: "否",
          format: "无",
          operate: "",
        },
        {
          name: "$receive_time",
          show: "到达时间",
          data: "逻辑",
          status: "隐藏",
          stype: "",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "$update_time",
          show: "更新时间",
          data: "逻辑",
          status: "隐藏 ",
          stype: "",
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
          stype: "",
          target: "无",
          format: "无",
          operate: "",
        },
        {
          name: "category_id",
          show: "类目ID",
          data: "数值",
          status: "隐藏",
          stype: "",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "commodity_spu",
          show: "商品SPU",
          data: "数值",
          status: "可见",
          stype: "",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "is_new",
          show: "是否新品",
          data: "数值",
          status: "可见",
          stype: "",
          target: "无",
          format: "无",
          operate: "",
        },
        {
          name: "share_content",
          show: "分享商品",
          data: "数值",
          status: "隐藏 ",
          stype: "",
          target: "是",
          format: "无",
          operate: "",
        },
        {
          name: "room_id",
          show: "直播间ID",
          data: "数值",
          status: "隐藏",
          stype: "",
          target: "无",
          format: "无",
          operate: "",
        },
      ],
    };
  },    
}
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
</style>