<template>
    <!-- 数据管理 -->
<DefaultPage>
      <router-view></router-view>
</DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage"
    export default {
        name: "index",
        components:{
           DefaultPage
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