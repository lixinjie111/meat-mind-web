<template>
    <!-- 数据管理 -->
<div class="data-center">
  <!-- 分析工具 -->
  <Side></Side>
  <div class="container">
    <Header></Header>
    <div class="data-content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Side from "../../components/DefaultSide"
import Header from "../../components/DefaultHeader"
    export default {
        name: "indexOld",
        components:{
           Side, Header
        },
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
.data-center{
 display: flex;
 .container{
   display: flex;
   flex-direction: column;
   width: calc(100% - 240px);
   .data-content{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 64px);
   }
 }
}
</style>