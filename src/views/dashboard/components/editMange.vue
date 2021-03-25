<template>
  <div class="analyst-manage-box">
    <div class="header-nav">
      <div class="back" @click="goBack"><img src="../../../assets/img/dashboard/back.png" /></div>
      <div class="dliver"></div>
      <p>编辑看板</p>
    </div>
    <div class="header-title">
      <div class="left">
        <Input v-model="value" placeholder="2020年上半年XX电商会" />
      </div>
      <div class="right">
        <span>创建日期：2020/01/01</span>
        <span>更新日期：2020/03/01</span>
        <div class="btn btn1" @click="down">下载报表</div>
        <div class="btn" @click="add">添加报表</div>
      </div>
    </div>
    <div><img src="../../../assets/img/dashboard/kanban/bianji.png" alt=""></div>
  </div>
</template>

<script>
import TableModel from "../base/TableModel";
export default {
    name: "manage",
    components:{TableModel},
    data() {
    return {
      value:'',
      columns: [
        {
          title: "看板名称",
          key: "name",
        },
        {
          title: "创建时间",
          key: "date",
        },
        {
          title: "更新时间",
          key: "deadline",
        },
        {
          title: "状态",
          key: "type",
          slot: "status",
        },
        {
          title: "操作",
          slot: "operate",
        }
      ],
      tableData: [
        {
          name:"系统默认看板",
          number:"6,272",
          user: "138*****6180",
          change: "手动更新",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"集团管理看板",
          number:"2,067",
          user: "138*****6180",
          change: "外部导入",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"门店产品销售看板",
          number:"5,112",
          user: "138*****6180",
          change: "手动更新",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"区域经营状况看板",
          number:"45",
          user: "138*****6180",
          change: "按天",
          type: "使用中",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"物流运送量分析看板",
          number:"127",
          user: "138*****6180",
          change: "手动更新",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"在职职工管理看板",
          number:"2,164",
          user: "138*****6180",
          change: "手动更新",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"年度财政收入看板",
          number:"9",
          user: "138*****6180",
          change: "按天",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"五险一金业务看板",
          number:"19",
          user: "138*****6180",
          change: "手动更新",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "-",
          operate: ""
        },
        {
          name:"原材料采购分析看板",
          number:"22",
          user: "138*****6180",
          change: "手动更新",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"生产情况监控看板",
          number:"32",
          user: "138*****6180",
          change: "外部导入",
          type: "未使用",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        }
      ]
    };
    },
    methods:{
        down(){
          this.$router.push({
            path:'/dashboard/editDown'
          })
        },
        add(){
          this.$router.push({
            path:'/dashboard/addManage'
          })
        },
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  display: block;
}
.analyst-manage-box {
  padding: 24px;
  padding-top: 0;
  .header-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .left{
      width: 352px;
    }
    .right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        margin-left: 24px;
      }
      .btn{
        width: 96px;
        height: 32px;
        background: #2373FF;
        box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
        border-radius: 4px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 32px;
        text-align: center;
        cursor: pointer;
        margin-left: 12px;
        &.btn1{
          background: #FFFFFF;
          border: 1px solid #97A0C3;
          color: #242F57;
          margin-left: 24px;
        }
      }
    }
  }
  .header-nav {
    display: flex;
    align-items: center;
    position: relative;
    .back {
      width: 24px;
      cursor: pointer;
    }
    .dliver {
      width: 1px;
      height: 21px;
      background: #eaedf7;
      margin: 0 16px;
    }
    .blue-btn {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 102px;
        height: 32px;
        // padding: 0 16px;
        margin-right: 8px;
        background: #2373ff;
        border-radius: 4px;
        > i {
          width: 14px;
          height: 14px;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          margin-right: 4px;
          line-height: 14px;
        }
        > div {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
  }
}
</style>
