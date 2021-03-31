<template>
  <div class="row">
    <div class="col all">
      <p class="title">{{title}}</p>
      <p class="subTile" v-if="subTile">{{subTile}}</p>
      <div class="r-all-echarts">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Full",
  props:{
      title:{
          type:String
      },
      subTile:{
          type:String,
          default:''
      }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 536px;
  margin-bottom: 24px;
  .col {
    height: 100%;
    padding: 16px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eaedf7;
    &.all {
      width: 100%;
    }
    .title {
      height: 24px;
      margin-bottom: 4px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #242f57;
      line-height: 24px;
    }
    .subTile{
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636E95;
      line-height: 18px;
    }
    .r-all-echarts {
      width: 100%;
      height: calc(100% - 40px);  
    }
  }
}
</style>
