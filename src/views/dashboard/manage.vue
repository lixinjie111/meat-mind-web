<template>
  <div class="analyst-manage-box">
    <div class="header-nav">
      <div class="back" @click="goBack"><img src="../../assets/img/dashboard/back.png" /></div>
      <div class="dliver"></div>
      <p>看板管理</p>
      <div class="blue-btn" @click="create">
        <i class="iconfont icontianjia"></i>
        <div>新建看板</div>
      </div>
    </div>
    <TableModel :columns="columns" :tableData="tableData">
    </TableModel>
  </div>
</template>

<script>
import TableModel from "./base/TableModel";
export default {
    name: "manage",
    components:{TableModel},
    data() {
    return {
      columns: [
        {
          title: "看板名称",
          key: "name",
          slot: "name",
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
          type: "使用中",
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
          type: "未使用",
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
        create(){
          this.$router.push({
            path:'/dashboard/newManage'
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
