<template>
  <div class="home">
      <!-- 首页 -->
      <Header></Header>
      <img src="../../../static/header/header-main@2x.png" alt="">
  </div>
</template>

<script>
import Header from "../../components/HeaderDefault"
export default {
    name:"index",
    components:{Header}
}
</script>

<style scoped lang="scss">
    .home{}
</style>