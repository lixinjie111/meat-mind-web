<template>
  <div class="sub-module">
      <div class="sub-title">{{title}}</div>
      <div class="sub-date">
        <DatePicker type="daterange" show-week-numbers
            placement="bottom-end" placeholder="请选择时间"></DatePicker>
      </div>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"Card",
    props:{
        title:{
            type:String,
            default:"SubTitle"
        }
    }
}
</script>

<style scoped lang="scss">
    .sub-module{
        position: relative;
        padding: 24px;
        margin-top: 24px;
        background: #FFFFFF;
        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
        border-radius: 8px;
        .sub-title{
            height: 24px;
            margin-bottom: 24px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 24px;
        }
        .sub-date{
            width: 214px;
            position: absolute;
            top: 24px;
            right: 24px;
            ::v-deep .ivu-date-picker{
                min-width: 213px !important;
            }
            ::v-deep .ivu-date-picker .ivu-date-picker-rel{
                width: 100%;
            }
        }
    }
</style>