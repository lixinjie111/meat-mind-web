<template>
  <div class="table-model">
      <Table :columns="columns" :data="tableData">
        <template slot-scope="{row}" slot="status">
            <span style="color:#2373FF" v-if="row.type=='使用中'">{{row.type}}</span>
            <span v-else>{{row.type}}</span>
        </template>
        <template slot="operate" class="operate" slot-scope="{ row, index }">
            <div class="actionList" v-if="row.name=='系统默认看板'">
                <div class="detail">查看</div>
                <div class="detail">
                  <Dropdown trigger="click" style="margin-left: 20px">
                    <a class="detail">
                        更多
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>使用</DropdownItem>
                        <DropdownItem>复制</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                </div>
            </div>
            <div class="actionList" v-else>
                <div class="detail">查看</div>
                <div class="detail" v-if="row.type=='使用中'">
                  <Dropdown trigger="click" style="margin-left: 20px">
                    <a class="detail">
                        更多
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>编辑</DropdownItem>
                        <DropdownItem>复制</DropdownItem>
                        <DropdownItem>删除</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="detail" v-else>
                  <Dropdown trigger="click" style="margin-left: 20px">
                    <a class="detail">
                        更多
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>编辑</DropdownItem>
                        <DropdownItem>使用</DropdownItem>
                        <DropdownItem>复制</DropdownItem>
                        <DropdownItem>删除</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <!-- <span style="color:#2373FF;margin-right:8px">查看</span>
            <span style="color:#2373FF;margin-right:8px">编辑</span>
            <span style="color:#2373FF;margin-left:8px">删除</span> -->
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
.actionList {
                  display: flex;
                   // justify-content: flex-end;
            .detail {
                margin-right: 16px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 400;
                color: #2373FF;
                line-height: 22px;
            }
        }
.table-model {
//   height: 686px;
  padding: 16px 24px;
  background: #ffffff;
  box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
  border-radius: 8px;
  cursor: pointer;
  .table-head{
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    margin-bottom: 16px;
    .delete{
      display: inline-block;
      width: 56px;
      height: 28px;
      background: #FFFFFF;
      border-radius: 4px;
      border: 1px solid #97A0C3;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #242F57;
      line-height: 28px;
      text-align: center;
      margin-left: 8px;
      cursor: pointer;
    }
  }
    // .ivu-table{
    //     font-size: 14px;
    //     font-family: PingFangSC-Regular, PingFang SC;
    //     font-weight: 400;
    //     color: #242F57;
    // }
    // ::v-deep .ivu-table-header thead tr th{
    //     height: 48px;
    //     background: #F4F7FC;
    //     font-size: 14px;
    //     font-family: PingFangSC-Medium, PingFang SC;
    //     font-weight: 500;
    //     color: #242F57;
    // }
    // ::v-deep .ivu-table th,::v-deep .ivu-table td{
    //     height: 56px;
    //     font-size: 14px;
    //     font-family: PingFangSC-Regular, PingFang SC;
    //     font-weight: 400;
    //     color: #242F57;
    //     border-bottom: 1px solid #EAEDF7;
    // }
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