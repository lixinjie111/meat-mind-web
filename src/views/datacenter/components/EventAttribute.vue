<template>
  <DetailsPage title="事件属性" backname="data-center-metax">
    <HeaderNav>
        <div class="piblic-attr">
            <Checkbox v-model="single">只显示公共属性</Checkbox>
        </div>
    </HeaderNav>
    <TableModel :columns="columns" :tableData="tableData"></TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../layouts/DetailsPage";
import HeaderNav from "../base/HeaderNav";
import TableModel from "../base/TableModel";
export default {
  name: "EventAttribute",
  components: { DetailsPage, HeaderNav, TableModel },
  data() {
    return {
         single: false,
      columns: [
        {
          title: "属性名",
          slot: "name",
        },
        {
          title: "属性显示名",
          key: "show",
        },
        {
          title: "数据类型",
          key: "type",
          width: 140,
        },
        {
          title: "上报数据",
          key: "data",
          width: 120,
        },
        {
          title: "显示状态",
          key: "status",
          width: 120,
        },
        {
          title: "预置",
          key: "target",
          width: 80,
        },
        {
          title: "字典",
          key: "target2",
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
          name: "$user_agent",
          show: "UserAgent",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "否",
          target2: "无",
          operate: "",
        },
        {
          name: "local_time",
          show: "当地时间",
          data: "有数据",
          status: "隐藏",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "monetary",
          show: "货币",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "site_language",
          show: "站点语言",
          data: "有数据",
          status: "可见",
          type: "NUMBER",
          target: "无",
          target2: "无",
          operate: "",
        },
        {
          name: "site_id",
          show: "站点",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "无",
          target2: "无",
          operate: "",
        },
        {
          name: "category_id",
          show: "类目ID",
          data: "有数据",
          status: "隐藏",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "commodity_spu",
          show: "商品SPU",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "is_new",
          show: "是否新品",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "无",
          target2: "无",
          operate: "",
        },
        {
          name: "share_content",
          show: "分享商品",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "room_id",
          show: "直播间ID",
          data: "有数据",
          status: "隐藏",
          type: "STRING",
          target: "无",
          target2: "无",
          operate: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.piblic-attr{
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 152px;
    height: 55px;
    padding-left: 24px;
      // border-right: 2px solid #eaedf7;
      // border-bottom: 1px solid #EAEDF7;
      ::v-deep .ivu-checkbox-wrapper{
        margin-right: 0;
      }      
}
</style>