<template>
  <div class="bqgl">
    <div class="header-nav"><p>标签管理</p></div>
    <Tab :tab-list="['全部标签','已启用','已停用',]" @change="changeTab"></Tab>
    <CreateLable  @create="create"></CreateLable>
    <TableModel :columns="columns" :tableData="tableData1"></TableModel>
    <Modal title="通过哪种方式进行标签的创建" v-model="showModal" footer-hide class-name="create-target-modal">
      <div class="middle">
        <div class="create-target">
          <img src="../../../static/img/tool/bqgl/defined.png" alt @click="createTarget" />
          <img src="../../../static/img/tool/bqgl/basic.png" alt />
          <img src="../../../static/img/tool/bqgl/feature.png" alt />
          <img src="../../../static/img/tool/bqgl/event.png" alt />
          <img src="../../../static/img/tool/bqgl/behavior.png" alt />
        </div>
        <div class="create-sql">
          <div>SQL创建</div>
          <img src="../../../static/img/tool/bqgl/sql.png" alt />
        </div>
      </div>
    </Modal>
    <Modal class-name="bqgl-modal" v-model="newModal" footer-hide :closable="false">
      <div class="content">
        <div class="close-btn" @click="newModal = false"></div>
        <img src="../../../static/img/tool/bqgl/click-defined.png" alt />
        <div class="next-btn" @click="newModal = false"></div>
      </div>
    </Modal>
  </div>
</template>

<script>
import TableModel from "../base/TableModel";
import CreateLable from "../base/CreateLable";
 import Tab from "@/components/Tab"
export default {
  name: "LabelAdmin",
  components: { CreateLable, TableModel ,Tab},
  data() {
    return {
      showModal: false,
      newModal: false,
      columns: [
        {
          title: "标签名",
          tooltip: true,
          key: "name"
        },
        {
          title: "标签用户数",
          key: "show",
        },
        {
          title: "标签状态",
          key: "data",
        },
        {
          title: "分组",
          key: "status",
        },
        {
          title: "计算状态",
          key: "type",
          width: 100 / 144 * window.rem,
        },
        {
          title: "更新时间",
          key: "target",
          width: 180/ 144 * window.rem,
        },
        {
          title: "完成时间",
          key: "deadline",
          width: 180/ 144 * window.rem,
        },
        {
          title: "操作",
          slot: "operate",
          width: 136 / 144 * window.rem,
        }
      ],
      tableData1:[],
      tableData: [
        {
          name: "电子产品偏好",
          show: "6,272",
          data: "启用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name: "生活服务偏好",
          show: "2,067",
          data: "启用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name: "手机游戏偏好",
          show: "5,112",
          data: "启用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name: "稳健性",
          show: "45",
          data: "停用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name: "亲子",
          show: "127",
          data: "启用",
          status: "默认分组",
          type: "计算中",
          target: "2021-02-08 09:21:03",
          deadline: "-",
          operate: ""
        },
        {
          name: "购物偏好",
          show: "2,164",
          data: "启用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name: "风险型",
          show: "9",
          data: "启用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name: "高价值",
          show: "19",
          data: "停用",
          status: "默认分组",
          type: "计算中",
          target: "2021-02-08 09:21:03",
          deadline: "-",
          operate: ""
        },
        {
          name: "直播",
          show: "22",
          data: "启用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        },
        {
          name: "女团",
          show: "32",
          data: "启用",
          status: "默认分组",
          type: "成功",
          target: "2021-02-08 09:21:03",
          deadline: "2021-02-10 12:01:07",
          operate: ""
        }
      ]
    };
  },
  created(){
     this.tableData1=this.tableData;
  },
  methods: {
    changeTab(index) {
      this.tableData1 =[];
        if(index==1){
          this.tableData1=this.tableData;
        }else if(index==2){
          this.tableData.forEach(item=>{
            if(item.data=='启用'){
               this.tableData1.push(item)
            }
          })
        }else{
          this.tableData.forEach(item=>{
            if(item.data=='停用'){
               this.tableData1.push(item)
            }
          })
        }
        //this.active = index;
    },
    create() {
      this.showModal = true;
    },
    createTarget() {
      this.showModal = false;
      this.newModal = true;
    }
  }
};
</script>

<style scoped lang="scss">
.bqgl {
  position: relative;
  padding: 0 24px 24px;
  .bqgl-title {
    height: 64px;
    padding-left: 24px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #242f57;
    line-height: 64px;
  }
  .create-target {
    position: absolute;
    top: 78px;
    left: 48px;
    width: 80px;
    height: 32px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.create-target-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
    width: 560px !important;
    min-height: 558px;
    background: #ffffff;
    border-radius: 4px;
    .ivu-modal-content {
      min-height: 558px;
      .ivu-modal-close {
        top: 16px;
        right: 24px;
        width: 24px;
        height: 24px;
      }
      .ivu-modal-header {
        padding: 20px 24px;
        border-bottom: 1px solid #e8e8e8;
        .ivu-modal-header-inner {
          height: 16px;
          font-size: 16px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 400;
          color: #000000;
          line-height: 16px;
        }
      }
      .ivu-modal-body {
        padding: 32px 25px 27px;
        .middle {
          .create-target {
            margin-bottom: 37px;
          }
          img {
            width: 246px;
            height: 84px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.bqgl-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    width: 560px !important;
    min-height: 620px;
    background: #ffffff;
    top: 0;
  }
  .ivu-modal-body {
    padding: 0;
  }

  .content {
    position: relative;
    width: 560px;
    height: 620px;

    img {
      width: 560px;
      height: 620px;
    }

    .close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .next-btn {
      position: absolute;
      right: 10px;
      bottom: 10px;
      width: 60px;
      height: 20px;
      cursor: pointer;
    }
  }
}
</style>
