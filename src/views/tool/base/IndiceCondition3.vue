<template>
  <div class="condition">
    <Select v-model="condition" class="item1">
      <Option v-for="(item,index) in conditionOptions" :value="index+1" :key="index+1">{{ item }}</Option>
    </Select>
    按
    <Select v-model="amount" class="item2">
      <Option v-for="(item,index) in compareOptions" :value="index+1" :key="index+1">{{ item }}</Option>
    </Select>
    查看
  </div>
</template>

<script>
  export default {
    name: "IndiceCondition",
    data() {
      return {
        conditionOptions: this.$abelData.appOptions,
        compareOptions: this.$abelData.distinctOptions,
      }
    },
    props: {
        condition: {
          default: 0
        },
      amount: {
          default: 0
        },
    }
  }
</script>

<style lang="scss" scoped>
.condition {
  /*width: 500px;*/
  display: flex;
  /*justify-content: space-between;*/
  height: 42px;
  align-items: center;
  font-size: 14px;

  .item1 {
    width: 200px;
    margin-right: 16px;
  }
  .item2 {
    width: 200px;
    margin-left: 16px;
    margin-right: 16px;
  }
}
</style>
