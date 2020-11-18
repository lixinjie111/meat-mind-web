<template>
  <div class="intelligent_decision">
      <!-- 智能决策 -->
      <Header></Header>
      <div class="content">
        智能决策
      </div>
  </div>
</template>

<script>
import Header from "../../components/HeaderDefault"
export default {
  name:"index",
  components:{Header}
}
</script>

<style lang="scss" scoped>
.intelligent_decision{
  .content{
    min-height: calc(100vh - 56px);
  }
}
</style>