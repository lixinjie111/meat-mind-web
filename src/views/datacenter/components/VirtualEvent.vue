<template>
  <!-- <div class="fxmx-virtual-event">
      <img src="../../../../static/img/datacenter/ysjgl/virtualEvent@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
  <DetailsPage title="虚拟事件" backname="data-center-metax">
    <VirtualHeader></VirtualHeader>
    <TableModel :columns="columns" :tableData="tableData"></TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../layouts/DetailsPage";
import VirtualHeader from "../base/VirtualHeader";
import TableModel from "../base/TableModel";
export default {
  name: "VirtualEvent",
  components: { DetailsPage, VirtualHeader, TableModel },
  data() {
    return {
      single: false,
      columns: [
        {
          title: "虚拟事件名",
          slot: "name",
          width: 140 / 144 * window.rem,
        },
        {
          title: "虚拟事件显示名",
          key: "show",
          width: 140 / 144 * window.rem,
        },
        {
          title: "标签",
          key: "target",
          width: 140 / 144 * window.rem,
        },
        {
          title: "包含事件",
          key: "include",
        //   width: 110,
        },
        {
          title: "备注",
          key: "diction",
          width: 140 / 144 * window.rem,
        }
      ],
      tableData: [
        {
          name: "AppAll",
          show: "App端事件",
          target:"1",
          include:"$启动APP,App 元素点击,App 浏览页面",
          diction:"无",
        },
        {
          name: "X_wrong",
          show: "页面报销",
          target:"1",
          include:"APP元素点击",
          diction: "无",
        },
        {
          name: "Zapp",
          show: "Zapp访问量",
          target:"预置事件",
          diction: "无",
          include:"$启动APP",
        },
        {
          name: "language",
          show: "站点语言",
          target:"2",
          diction: "无",
          include:"加入购物车",
        },
        {
          name: "site_id",
          show: "站点",
          target:"预置事件",
          diction: "无",
          include:"$启动APP，Web浏览页面",
        },
        {
          name: "category_id",
          show: "类目ID",
          target:"2",
          diction: "无",
          include:"Web 浏览页面",
        },
        {
          name: "commodity",
          show: "商品SPU",
          target:"预置事件",
          diction: "无",
          include:"$启动APP,App 元素点击,App 浏览页面",
        },
        {
          name: "is_new",
          show: "是否新品",
          target:"2",
          diction: "无",
          include:"$启动APP,Web 浏览页面",
        },
        {
          name: "share",
          show: "分享商品",
          target:"1",
          diction: "无",
          include:"加入购物车,立即购买",
        },
        {
          name: "room_id",
          show: "直播间ID",
          target:"1",
          diction: "无",
          include:"	App 元素点击,Web 浏览页面,Web 视区停留",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">

</style>