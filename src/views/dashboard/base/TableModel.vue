<template>
  <div class="table-model">
    <Table :columns="columns" :data="tableData">
        <template slot-scope="{row}" slot="name">
            <Poptip transfer-class-name="panel-poptip" placement="right" trigger="hover" :transfer="true">
              <span >{{row.name}}</span>
              <div slot="content">
                <img src="../../../assets/img/dashboard/kanban/bianji.png" alt="">
                <img src="../../../assets/img/dashboard/kanban/bianji.png" alt="">
              </div>
            </Poptip>
        </template>
        <template slot-scope="{row}" slot="status">
            <span style="color:#2373FF" v-if="row.type=='使用中'">{{row.type}}</span>
            <span v-else>{{row.type}}</span>
        </template>
        <template slot="operate" class="operate" slot-scope="{ row, index }">
            <div class="actionList" v-if="row.name=='系统默认看板'">
                <div class="detail" @click="look(row.name)">查看</div>
                <div class="detail">
                  <Dropdown trigger="click" style="margin-left: 20px" :transfer="true" @on-visible-change="edit1(row.name)" @on-click="edit">
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
                <div class="detail" @click="look(row.name)">查看</div>
                <div class="detail" v-if="row.type=='使用中'">
                  <Dropdown trigger="click" style="margin-left: 20px" :transfer="true"  @on-visible-change="edit1(row.name)" @on-click="edit">
                    <a class="detail">
                        更多
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="编辑">编辑</DropdownItem>
                        <DropdownItem name="复制">复制</DropdownItem>
                        <DropdownItem name="删除">删除</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div class="detail" v-else>
                  <Dropdown trigger="click" style="margin-left: 20px" :transfer="true" @on-visible-change="edit1(row.name)" @on-click="edit">
                    <a class="detail">
                        更多
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                        <DropdownMenu slot="list">
                          <DropdownItem name="编辑">编辑</DropdownItem>
                          <DropdownItem name="使用">使用</DropdownItem>
                          <DropdownItem name="复制">复制</DropdownItem>
                          <DropdownItem name="删除">删除</DropdownItem>
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
    <div class="cover" v-show="showCover">
      <div class="box">
        <div class="title-nav">
          <span>{{title}}</span>
          <div class="close" @click="closeModal"><img src="../../../assets/img/dashboard/kanban/close.png" alt=""></div>
        </div>
        <div class="boxImg"><img src="../../../assets/img/dashboard/kanban/bianji.png" alt=""></div>
      </div>
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
          title:'',
          title1:'',
          showCover:false,
          currentPage: 1,
          total: this.tableData.length,
          pageSize: 10,
      }
  },
  methods:{
    edit(val){
      if(val=='编辑'){
        this.$router.push({
          path:'/dashboard/editPanel?title='+this.title1
        })
      }
    },
    edit1(val){
      console.log(val)
      this.title1=val;
    },
    look(val){
      this.showCover=true;
      this.title=val;
    },
    changeSize(){},
    closeModal(){
      this.showCover=false;
    },
    change(page) {
      this.currentPage = page
    },
  }
};
</script>
<style  lang="scss">
.panel-poptip{
  max-width: 700px;
  height: 250px;
  overflow: scroll;
  .ivu-poptip-arrow{
    display: none;
  }
}
</style>
<style scoped lang="scss">
.cover{
  position: fixed;
  left:0;
  right: 0;
  top:0;
  bottom:0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  .box{
    width: 80%;
    height: 71%;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: auto;
    .title-nav{
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom:1px solid #E8E8E8;
      padding:0 24px;
      span{
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        line-height: 28px;
      }
      .close{
        width: 24px;
      }
    }
    .boxImg{
      padding:0 24px;
    }
  }
}
img{
  width: 100%;
  display: block;
}
// ::v-deep .ivu-table-wrapper{
//   overflow: auto;
// }

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