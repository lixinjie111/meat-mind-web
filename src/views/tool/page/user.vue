<template>
  <div class="user-group">
    <div class="header-nav"><p>用户分群</p></div>
    <div class="list">
      <div class="show-header">
        <button class="btn-primary-middle blue-btn" @click="create">
          <i class="iconfont icontianjia"></i>
          <div>新建</div>
        </button>
      </div>
      <TableModel :columns="columns" :tableData="tableData"></TableModel>
    </div>
    <Modal title="通过哪种方式进行标签的创建" class-name="create-fq-modal" v-model="createModal" footer-hide>
      <img src="../../../static/img/tool/yhfq/create1@2x.png" alt @click="userBehavior" />
      <img class="img2" src="../../../static/img/tool/yhfq/create2@2x.png" alt @click="userId" />
    </Modal>
    <Modal v-model="byBehavior" class-name="create-by-behavior" footer-hide :closable="false">
      <div class="content">
        <div class="close-btn" @click="byBehavior = false"></div>
        <div class="behavior1" v-show="behavior1">
          <img src="../../../static/img/tool/yhfq/bybehavior2@2x.png" alt />
          <div class="next" @click="behavior1=false;behavior2=true"></div>
        </div>
        <div class="behavior2" v-show="behavior2">
          <img src="../../../static/img/tool/yhfq/bybehavior@2x.png" alt />
          <div class="confirm" @click="byBehavior = false"></div>
        </div>
        <div class="cancel" @click="byBehavior = false"></div>
      </div>
    </Modal>
    <Modal v-model="byUserId" class-name="create-by-userid" footer-hide :closable="false">
      <div class="content">
        <div class="close-btn" @click="byUserId = false"></div>
        <img src="../../../static/img/tool/yhfq/byuserId@2x.png" alt />
        <div class="cancel" @click="byUserId = false"></div>
        <div class="confirm" @click="byUserId = false"></div>
      </div>
    </Modal>
  </div>
</template>

<script>
import TableModel from "../base/TableModel1";
export default {
  name:"yhfq",
  components:{TableModel},
  data() {
    return {
      page1: true,
      page2: false,
      createModal: false,
      byBehavior: false,
      byUserId: false,
      behavior1: true,
      behavior2: false,
      currentPage: 1,
      totalPage: 25,
      pageSize: 15,
      columns: [
        {
          title: "分群",
          key: "name",
          tooltip: true
        },
        {
          title: "人数",
          key: "number",
        },
        {
          title: "创建方式",
          key: "type",
        },
        {
          title: "创建者",
          key: "user",
          width: 150/ 144 * window.rem,
        },
        {
          title: "更新方式",
          key: "change",
        },
        {
          title: "最近更新时间",
          key: "date",
           width: 180/ 144 * window.rem,
        },
        {
          title: "操作",
          slot: "operate",
           width: 130/ 144 * window.rem,
        }
      ],
      tableData: [
        {
          name:"分析结果6-112",
          number:"6,272",
          user: "138*****6180",
          change: "手动更新",
          type: "界面规则",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"分群5",
          number:"2,067",
          user: "138*****6180",
          change: "外部导入",
          type: "界面规则",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"分群3测试",
          number:"5,112",
          user: "138*****6180",
          change: "手动更新",
          type: "界面规则",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"分群-近7日没有启动app用户群画像1-265",
          number:"45",
          user: "138*****6180",
          change: "按天",
          type: "ID上传",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"分群2",
          number:"127",
          user: "138*****6180",
          change: "手动更新",
          type: "结果保存",
          date: "2021-02-08 09:21:03",
          deadline: "-",
          operate: ""
        },
        {
          name:"按30天支付次数大于1次-投放用",
          number:"2,164",
          user: "138*****6180",
          change: "手动更新",
          type: "界面规则",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"上传测试分群",
          number:"9",
          user: "138*****6180",
          change: "按天",
          type: "界面规则",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"中活跃用户",
          number:"19",
          user: "138*****6180",
          change: "手动更新",
          type: "结果保存",
          date: "2021-02-08 09:21:03",
          deadline: "-",
          operate: ""
        },
        {
          name:"低活跃用户",
          number:"22",
          user: "138*****6180",
          change: "手动更新",
          type: "界面规则",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name:"高活跃用户",
          number:"32",
          user: "138*****6180",
          change: "外部导入",
          type: "界面规则",
          date: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        }
      ]
    };
  },
  methods: {
    create() {
      // this.createModal = true;
    },
    userBehavior() {
      this.createModal = false;
      this.byBehavior = true;
      this.behavior1 = true;
      this.behavior2 = false;
      this.byUserId = false;
    },
    userId() {
      this.createModal = false;
      this.byBehavior = false;
      this.byUserId = true;
    }
  }
};
</script>

<style scoped lang="scss">
.user-group {
  width: 100%;
  height: 100%;
  padding: 0 24px;
  .yhfq-title {
    height: 64px;
    padding-left: 24px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #242f57;
    line-height: 64px;
  }
  .list {
    position: relative;
    .show-header {
        display: flex;
        align-items: center;
      height: 66px;
      margin-bottom: 8px;
      background: #FFFFFF;
      box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
      border-radius: 8px;
            .blue-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 76px;
        height: 32px;
        margin-left: 24px;

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
          height: 14px;
          font-size: 14px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #ffffff;
          line-height: 14px;
        }
      }
    }
    .create {
      position: absolute;
      top: 84px;
      left: 48px;
      width: 94px;
      height: 32px;
      // border: 1px solid red;
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss">
.create-fq-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
    width: 560px !important;
    height: 339px;
    background: #ffffff;
    border-radius: 4px;
  }
  .ivu-modal-body {
    padding: 25px;
    img {
      width: 511px;
      height: 97px;
      margin-bottom: 25px;
      cursor: pointer;
    }
    .img2 {
      height: 114px;
    }
  }
}
.create-by-behavior {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
    width: 560px !important;
    height: 618px;
    background: #ffffff;
    border-radius: 4px;
  }
  .content {
    position: relative;
    width: 560px;
    height: 618px;

    img {
      width: 560px;
      height: 618px;
      cursor: pointer;
    }
    .next,
    .confirm {
      position: absolute;
      bottom: 8px;
      right: 16px;
      width: 60px;
      height: 26px;
      cursor: pointer;
      // border: 1px solid red;
    }
    .cancel {
      position: absolute;
      bottom: 8px;
      right: 84px;
      width: 50px;
      height: 24px;
      cursor: pointer;
      // border: 1px solid green;
    }

    .close-btn {
      position: absolute;
      right: 12px;
      top: 10px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      // border: 1px solid red;
    }
  }
  .ivu-modal-body {
    padding: 0;
  }
}
.create-by-userid {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
    width: 560px !important;
    height: 618px;
    background: #ffffff;
    border-radius: 4px;
  }
  .ivu-modal-body {
    padding: 0;
  }
  .content {
    position: relative;
    width: 560px;
    height: 618px;

    img {
      width: 560px;
      height: 618px;
      cursor: pointer;
    }

    .confirm {
      position: absolute;
      bottom: 8px;
      right: 16px;
      width: 60px;
      height: 26px;
      cursor: pointer;
      // border: 1px solid red;
    }
    .cancel {
      position: absolute;
      bottom: 8px;
      right: 84px;
      width: 50px;
      height: 24px;
      cursor: pointer;
      // border: 1px solid green;
    }
    .close-btn {
      position: absolute;
      right: 12px;
      top: 10px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      // border: 1px solid red;
    }
  }
}
</style>