<template>
  <div class="table-model">
      <slot></slot>
    <Table :columns="columns" :data="tableData">
        <template slot-scope="{row}" slot="name">
            <span style="color:#2373FF">{{row.name}}</span>
        </template>
        <template slot="operate" class="operate">
            <span style="color:#2373FF;margin-right:8px">编辑</span>
            <span style="color:#2373FF;margin-left:8px">删除</span>
        </template>
    </Table>
    <div class="table-page-warp" v-if="total > 0">
      <Select v-model="pageSize" style="width: 100px">
        <Option v-for="item in [10, 20, 30, 40]" :value="item" :key="item">每页{{ item }}/条</Option>
      </Select>
      <Page
        :current="currentPage"
        :total="total"
        :page-size="pageSize"
        show-total
        @on-change="tableChangePage"
      />
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
       tableChangePage(page) {
        this.currentPage = page
      },
  }
};
</script>

<style scoped lang="scss">
.table-model {
//   height: 686px;
  padding: 16px 24px;
  background: #ffffff #d8d8d8;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 12px;
  border: 1px solid #eaedf7;
  cursor: pointer;
    .ivu-table{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        ::v-deep .name{
        color:#2373FF
    }
    }
    ::v-deep .ivu-table-header thead tr th{
        height: 48px;
        background: #F4F7FC;
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
    .table-page-warp{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
    }

}
</style>