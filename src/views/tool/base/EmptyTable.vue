<template>
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
      border-radius: 2px;
      >li{
        height: 22px;
        font-size: 14px;
        font-weight: 500;
        color: #242F57;
        line-height: 22px;
        padding-left: 10px;
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
      .no-tip{
        height: 20px;
        margin-top: 4px;
        font-size: 14px;
        font-weight: 400;
        color: #636E95;
        line-height: 20px;
      }
    }
  }
</style>
