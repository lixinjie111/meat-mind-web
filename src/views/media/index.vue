<template>
  <div class="media-protrait">
      <!-- 媒介画像 -->
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