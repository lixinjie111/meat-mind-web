<template>
  <Input class="complex-input">
    <template #append>
      <Select v-model="event">
        <Option v-for="(item,index) of options" :value="index+1" :key="index+1">{{item}}</Option>
      </Select>
    </template>
  </Input>
</template>

<script>
  export default {
    name: "ComplexInput",
    props: {
      options: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style lang="scss">
.complex-input {
  width: 200px;
  display: flex;
  &.ivu-input-group {
    .ivu-input {
      width: 80px;
    }
    .ivu-input-group-append {
      width: 120px;
      background: #F4F7FC;
      border-radius: 0px 4px 4px 0px;
      border-top: 1px solid #97A0C3;
      border-bottom: 1px solid #97A0C3;
      border-right: 1px solid #97A0C3;
      /*border-left: none;*/
      .ivu-select-dropdown-list {
        text-align: left;
      }
    }
  }
}
</style>
