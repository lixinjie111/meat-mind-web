<template>
  <div class="mark-protrait">
      <!-- 品牌画像 -->
        <Side></Side>
        <Header></Header>
  </div>
</template>

<script>
import Side from "../../components/Side"
import Header from "../../components/DefaultHeader"
export default {
    name:"index",
    components:{Side,Header}
}
</script>

<style scoped lang="scss">

</style>