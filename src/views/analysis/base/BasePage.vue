<template>
  <div class="base-page">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.base-page{
    height: 100%;
    overflow-y: scroll;
    img{
        width:100%
    }
}
</style>