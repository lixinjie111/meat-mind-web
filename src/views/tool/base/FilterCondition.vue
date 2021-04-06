<template>
  <div class="condition">
    <Select v-model="condition" class="item1">
      <Option v-for="(item,index) in conditionOptions" :value="index+1" :key="index+1">{{ item }}</Option>
    </Select>
    <Select v-model="compare" class="item2">
      <Option v-for="item in compareOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Input v-model="input" class="item3"/>
  </div>
</template>

<script>
  export default {
    name: "FilterCondition",
    data() {
      return {
        conditionOptions: this.$abelData.distinctOptions,
        compareOptions: [
          {value: 'equal', label: '等于'},
          {value: 'notEqual', label: '不等于'},
          {value: 'contain', label: '包含'},
          {value: 'notContain', label: '不包含'},
          {value: 'isSet', label: '有值'},
          {value: 'notSet', label: '没值'},
          {value: 'isEmpty', label: '为空'},
          {value: 'isNotEmpty', label: '不为空'},
          {value: 'rlike', label: '正则匹配'},
          {value: 'notrlike', label: '正则不匹配'},
        ]
      }
    },
    props: {
        condition: {
          default: 0
        },
        compare: {
          default: 0
        },
        input: {
          default: ''
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
  align-items: flex-start;

  .item1 {
    width: 200px;
  }
  .item2 {
    width: 100px;
    margin-left: 16px;
  }
  .item3 {
    width: 200px;
    margin-left: 16px;
  }
}
</style>
