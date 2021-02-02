<template>
<div class="analysis-tool">
  <!-- 分析工具 -->
  <Side></Side>
  <div class="container">
    <Header target="Dashboard"></Header>
    <div class="tool-content">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import Side from "../../components/Side"
import Header from "../../components/DefaultHeader"
export default {
  name: "index",
  components: { Side, Header},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.analysis-tool{
 display: flex;
 .container{
   display: flex;
   flex-direction: column;
   width: calc(100% - 240px);
   .tool-content{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 64px);
   }
 }
}
</style>