<template>
  <div>
    <div v-for="(item,index) of value" class="row">
        <slot name="item" v-bind="item"></slot>
        <i class="iconfont iconClose" @click="onDelete(index)"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MutableArray",
    props: {
      value: Array,
      initItem: Object,
      onDelete: Function
    }
  }
</script>

<style scoped lang="scss">
.row {
  display: flex;
  width: 600px;
  justify-content: space-between;
  align-items: center;

  .iconClose {
    cursor: pointer;
  }
}
</style>
