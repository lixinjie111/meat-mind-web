<template>
  <div class="vs-table">
    <!-- <Table :columns="columns" :data="tableData"></Table> -->
    <ul class="table-header">
      <li v-for="(item,index) in columns" :key="index" :style="item.width ? 'width: '+item.width+'px;' : ''">{{item.title}}</li>
    </ul>
    <div class="table-empty">
        <div class="th">没有查找到数据</div>
        <div class="td">请尝试调整时间段或筛选条件</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EmptyTable",
    props: {
      columns: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped lang="scss">
  .vs-table {
    height: 302px;
    // border: 1px solid #eaedf7;
    .table-header{
      display: flex;
      align-items: center;
      justify-content: stretch;
      height: 48px;
      background: #F4F7FC;
      /*border-radius: 2px;*/
      border-top: 1px solid #EAEDF7;
      border-bottom: 1px solid #EAEDF7;
      >li{
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        line-height: 22px;
        padding-left: 10px;
        flex-grow: 1;
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
        border-radius: 4px;
        background: #C6CBDE;
        // border: 1px solid #FFFFFF;
        text-align: center;
        line-height: 48px;
        >i{
          font-size: 26px;
          color: #FFFFFF;
        }
      }
        .th {
          font-size: 14px;
          font-weight: 500;
          color: #242F57;
          line-height: 26px;
        }

        .td {
          font-size: 14px;
          font-weight: 400;
          color: #7C88B1;
          line-height: 20px;
        }
    }
  }
</style>
