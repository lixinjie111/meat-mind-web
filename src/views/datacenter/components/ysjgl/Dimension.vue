<template>
  <DetailsPage title="维度表" backname="data-center-metax">
    <HeaderNav></HeaderNav>
    <TableModel :columns="columns" :tableData="tableData"></TableModel>
  </DetailsPage>
  <!-- <div class="fxmx-dimension">
      <img src="../../../../static/img/datacenter/ysjgl/dimension@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
</template>

<script>
import DetailsPage from "../../../../layouts/DetailsPage";
import HeaderNav from "../base/HeaderNav";
import TableModel from "../base/TableModel";
export default {
    name:"Dimension",
    components: { DetailsPage, HeaderNav, TableModel },
  data() {
    return {
      columns: [
        {
          title: "表名称",
          slot: "name",
        },
        {
          title: "创建类型",
          key: "type",
        },
        {
            title:"备注",
            key:"remark"
        },
        // {
        //   title: "操作",
        //   slot: "operate",
        //   width: 120,
        // },
      ],
      tableData: [
        {
          name:"items",
          type:"系统默认",
          remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "vip_type",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "user_type",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "oa_level",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "member_level",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "inviter_phone",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "inviter_nickname",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "inviter_id",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "inviter",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
        {
          name: "invite_vipreturn",
          type:"系统默认",
           remark: "通过SDK提供的itemSet接口进行Item信息的上报",
          operate: "",
        },
      ],
    };
  },       
}
</script>

<style scoped lang="scss">
// .fxmx-dimension{
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