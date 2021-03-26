<template>
  <div class="table-model">
      <slot></slot>
      <Table :columns="columns" :data="tableData">
        <template slot-scope="{row}" slot="name">
            <span style="color:#2373FF">{{row.name}}</span>
        </template>
        <template slot="operate" class="operate">
            <span style="color:#2373FF;margin-right:8px">查看</span>
            <span style="color:#2373FF;margin-right:8px">编辑</span>
            <span style="color:#2373FF">删除</span>
        </template>
    </Table>
    <div class="page">
        <Page :total="tableData.length" :current="currentPage" @on-change="change" @on-page-size-change="changeSize"
                :pageSize="pageSize" show-total show-sizer class-name="pageS"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableModel",
  props: {
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data(){
      return{
          currentPage: 1,
          total: this.tableData.length,
          pageSize: 10,
      }
  },
  methods:{
    changeSize(){},
       change(page) {
        this.currentPage = page
      },
  }
};
</script>

<style scoped lang="scss">
.table-model {
//   height: 686px;
  padding: 16px 24px;
  background: #ffffff;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 8px;
  border: 1px solid #eaedf7;
  cursor: pointer;
    .ivu-table{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
    }
    ::v-deep .ivu-table-header thead tr th{
        height: 48px;
        background: #F6F9FF;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
    }
    ::v-deep .ivu-table th,::v-deep .ivu-table td{
        height: 56px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        border-bottom: 1px solid #EAEDF7;
    }
    .page {
            padding-top: 16px;
            .pageS {
            text-align: right;
            ::v-deep .ivu-page-options {
                float: left;
            }
            }
        }
    // .table-page-warp{
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-between;
    //   padding: 10px 0;
    // }

}
</style>