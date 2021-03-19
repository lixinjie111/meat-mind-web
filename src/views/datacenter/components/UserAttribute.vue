<template>
  <DetailsPage title="用户属性" backname="data-center-metax">
    <HeaderNav>
        <div class="user-attr">
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
    name:"UserAttribute",
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
          name:"zone",
          show: "区域",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "否",
          target2: "无",
          operate: "",
        },
        {
          name: "vip_type",
          show: "成为会员方式",
          data: "有数据",
          status: "隐藏",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "user_type",
          show: "用户类型",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "oa_level",
          show: "主播等级",
          data: "有数据",
          status: "可见",
          type: "NUMBER",
          target: "无",
          target2: "无",
          operate: "",
        },
        {
          name: "member_level",
          show: "会员身份",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "无",
          target2: "无",
          operate: "",
        },
        {
          name: "inviter_phone",
          show: "邀请人手机号",
          data: "有数据",
          status: "隐藏",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "inviter_nickname",
          show: "邀请人昵称",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "inviter_id",
          show: "邀请码",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "无",
          target2: "无",
          operate: "",
        },
        {
          name: "inviter",
          show: "邀请人",
          data: "有数据",
          status: "可见",
          type: "STRING",
          target: "是",
          target2: "无",
          operate: "",
        },
        {
          name: "invite_vipreturn",
          show: "累积会员转化数",
          data: "有数据",
          status: "隐藏",
          type: "NUMBER",
          target: "无",
          target2: "无",
          operate: "",
        },
      ],
    };
  },    
}
</script>

<style scoped lang="scss">
.user-attr{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 152px;
    height: 55px;
      border-right: 2px solid #eaedf7;
      border-bottom: 1px solid #EAEDF7;
}
</style>