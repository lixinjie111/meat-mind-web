<template>
  <DetailsPage title="元事件" backname="data-center-metax">
    <HeaderNav></HeaderNav>
    <TableModel :columns="columns" :tableData="tableData"></TableModel>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../layouts/DetailsPage";
import HeaderNav from "../base/HeaderNav";
import TableModel from "../base/TableModel";
export default {
  name: "Unit",
  components: { DetailsPage, HeaderNav, TableModel },
  data(){
      return {
          columns:[
              {
                  title:"事件名",
                  slot:"name",
              },
              {
                  title:"事件显示名",
                  key:"show",
              },
              {
                  title:"上报数据",
                  key:"data",
                  width:120 / 144 * window.rem
              },
              {
                  title:"显示状态",
                  key:"status",
                  width:120 / 144 * window.rem
              },
              {
                  title:"应埋店平台",
                  key:"type",
                  width:140 / 144 * window.rem
              },
              {
                  title:"标签",
                  key:"target",
                  width:120 / 144 * window.rem
              },
              {
                  title:"操作",
                  slot:"operate",
                  width:120 / 144 * window.rem
              },
              
          ],
          tableData:[
              {
                  name:"ProductExposure",
                  show:"商品曝光",
                  data:"有数据",
                  status:"可见",
                  type:"-",
                  target:"预置事件",
                  operate:""
              },
              {
                  name:"$SignUp",
                  show:"关联 ID",
                  data:"有数据",
                  status:"隐藏",
                  type:"iOS",
                  target:"预置事件",
                  operate:""
              },
              {
                  name:"inRoom",
                  show:"进入直播间",
                  data:"有数据",
                  status:"可见",
                  type:"iOS",
                  target:"预置事件",
                  operate:""
              },
              {
                  name:"joinGroupFail",
                  show:"拼团失败",
                  data:"有数据",
                  status:"可见",
                  type:"iOS",
                  target:"1",
                  operate:""
              },
              {
                  name:"joinGroupFinish",
                  show:"拼团成功",
                  data:"有数据",
                  status:"可见",
                  type:"Android",
                  target:"2",
                  operate:""
              },
              {
                  name:"leaveRoom",
                  show:"退出直播间",
                  data:"有数据",
                  status:"隐藏",
                  type:"Android",
                  target:"预置事件",
                  operate:""
              },
              {
                  name:"payGroupOrder",
                  show:"拼团支付订单",
                  data:"有数据",
                  status:"可见",
                  type:"Android",
                  target:"预置事件",
                  operate:""
              },
              {
                  name:"pullNew",
                  show:"拉新成功",
                  data:"有数据",
                  status:"可见",
                  type:"Android",
                  target:"1",
                  operate:""
              },
              {
                  name:"roomaddToCart",
                  show:"直播间-加入购物车",
                  data:"有数据",
                  status:"可见",
                  type:"小程序",
                  target:"预置事件",
                  operate:""
              },
              {
                  name:"roombeginLive",
                  show:"开播",
                  data:"有数据",
                  status:"隐藏",
                  type:"小程序",
                  target:"2",
                  operate:""
              },
          ]
      }
  }
};
</script>

<style scoped lang="scss">
</style>