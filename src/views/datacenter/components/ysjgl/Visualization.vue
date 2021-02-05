<template>
  <!-- <div class="fxmx-visualization">
      <img src="../../../../static/img/datacenter/ysjgl/visualization@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
  <DetailsPage title="可视化全埋点" backname="data-center-metax">
    <VHeader></VHeader>
    <div class="vs-table">
      <!-- <Table :columns="columns" :data="tableData"></Table> -->
      <ul class="table-header">
          <li v-for="(item,index) in columns" :key="index">{{item.title}}</li>
      </ul>
      <div class="table-empty">
          <div class="nodata">
              <i class="iconfont iconwodeshuju"></i>
          </div>
          <div class="no-tip">暂无数据</div>
      </div>
    </div>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../../layouts/DetailsPage";
import VHeader from "../base/VHeader";
export default {
  name: "Visualization",
  components: { DetailsPage, VHeader },
  data() {
    return {
      columns: [
        {
          title: "显示名",
          key: "show",
          width: 80,
        },
        {
          title: "平台",
          key: "ios",
          width: 70,
        },
        {
          title: "事件类型",
          key: "type",
          width: 100,
        },
        {
          title: "显示状态",
          key: "status",
          width: 100,
        },

        {
          title: "过去30天匹配事件数",
          key: "target",
        },
        {
          title: "最后修改版本",
          slot: "update",
          width: 160,
        },
        {
          title: "最后更新人",
          slot: "change",
          width: 160,
        },
        {
          title: "更新时间",
          slot: "updateTime",
          width: 100,
        },
        {
          title: "创建人",
          slot: "creater",
          width: 80,
        },
        {
          title: "操作",
          slot: "operate",
          width: 70,
        },
      ],
      tableData: [],
    };
  },
};
</script>

<style scoped lang="scss">
.vs-table {
  height: 302px;
  padding: 16px 24px;
  background: #ffffff #d8d8d8;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 12px;
  border: 1px solid #eaedf7;
    .table-header{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 48px;
        background: #F4F7FC;
        border-radius: 2px;
        >li{
            height: 22px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 22px;
        }
    }
    .table-empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 238px;
        .nodata{
            width: 48px;
            height: 48px;
            border-radius: 24px;
            background: #C6CBDE;
            border: 1px solid #FFFFFF;
            text-align: center;
            line-height: 46px;
            >i{
                font-size: 26px;
                color: #FFFFFF;
            }
        }
        .no-tip{
            height: 20px;
            margin-top: 8px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
            line-height: 20px;
        }
    }
}
</style>