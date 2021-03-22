<template>
  <DetailsPage title="虚拟属性" backname="data-center-metax">
    <HeaderSearch>
      <div class="use-state">
        <div>查看使用说明</div>
      </div>
    </HeaderSearch>
    <TableModel :columns="columns" :tableData="tableData"></TableModel>
  </DetailsPage>
  <!-- <div class="fxmx-virtual">
      <img src="../../../../static/img/datacenter/ysjgl/virtual@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
</template>

<script>
import DetailsPage from "../../../layouts/DetailsPage";
import HeaderSearch from "../base/HeaderSearch";
import TableModel from "../base/TableModel";
export default {
  name: "VirtualAttribute",
  components: { DetailsPage, HeaderSearch, TableModel },
  data() {
    return {
      single: false,
      columns: [
        {
          title: "属性名",
          slot: "name",
           width: 120,
        },
        {
          title: "属性显示名",
          key: "show",
           width: 120,
        },
        {
          title: "属性分类",
          key: "data",
          width: 120,
        },
        {
          title: "数据类型",
          key: "type",
          width: 110,
        },
        {
          title: "字典",
          key: "diction",
          width: 70,
        },
        {
          title: "可用此属性的事件要求",
          key: "available",
        },
        {
          title: "操作",
          slot: "operate",
          width: 110,
        },
      ],
      tableData: [
        {
          name: "$user_agent",
          show: "UserAgent",
          data: "事件属性",
          type: "STRING",
          diction: "否",
          available: "涵盖 SQL 表达式涉及的所有属性的事件，方可使用此虚拟属性",
          operate: "",
        },
        {
          name: "local_time",
          show: "当地时间",
          data: "用户属性",
          diction:"无",
          type: "DATETIME",
          target: "是",
          available: "所有事件均可使用此用户虚拟属性进行分析与查询",
          operate: "",
        },
        {
          name: "monetary",
          show: "货币",
          data: "事件属性",
          diction:"无",
          type: "STRING",
          target: "是",
          available: "涵盖 SQL 表达式涉及的所有属性的事件，方可使用此虚拟属性",
          operate: "",
        },
        {
          name: "language",
          show: "站点语言",
          data: "用户属性",
          diction:"无",
          type: "NUMBER",
          target: "无",
          available: "所有事件均可使用此用户虚拟属性进行分析与查询",
          operate: "",
        },
        {
          name: "site_id",
          show: "站点",
          data: "事件属性",
          diction:"无",
          type: "STRING",
          target: "无",
          available: "涵盖 SQL 表达式涉及的所有属性的事件，方可使用此虚拟属性",
          operate: "",
        },
        {
          name: "category_id",
          show: "类目ID",
          data: "事件属性",
          diction:"无",
          type: "STRING",
          target: "是",
          available: "所有事件均可使用此用户虚拟属性进行分析与查询",
          operate: "",
        },
        {
          name: "commodity",
          show: "商品SPU",
          data: "用户属性",
          diction:"无",
          type: "DATETIME",
          target: "是",
          available: "涵盖 SQL 表达式涉及的所有属性的事件，方可使用此虚拟属性",
          operate: "",
        },
        {
          name: "is_new",
          show: "是否新品",
          data: "事件属性",
          diction:"无",
          type: "STRING",
          target: "无",
          available: "所有事件均可使用此用户虚拟属性进行分析与查询",
          operate: "",
        },
        {
          name: "share",
          show: "分享商品",
          data: "事件属性",
          diction:"无",
          type: "STRING",
          target: "是",
          available: "涵盖 SQL 表达式涉及的所有属性的事件，方可使用此虚拟属性",
          operate: "",
        },
        {
          name: "room_id",
          show: "直播间ID",
          data: "事件属性",
          diction:"无",
          type: "STRING",
          target: "无",
          available: "涵盖 SQL 表达式涉及的所有属性的事件，方可使用此虚拟属性",
          operate: "",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.use-state {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
  padding: 0 16px;
  color: #ffffff;
  cursor: pointer;
  > div {
      width: 114px;
      height: 32px;
      background: #2373FF;
      box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
      border-radius: 4px;
      line-height: 32px;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
  }
}
</style>