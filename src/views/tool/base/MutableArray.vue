<template>
  <div>
    <div v-for="i of [1,2,3,4]">
      <div>
        <slot name="item" :condition="1" :compare="2" input="test"></slot>
        <i class="iconfont icontianjia"></i>
        <i class="iconfont iconClose"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MutableArray"
  }
</script>

<style scoped>

</style>
