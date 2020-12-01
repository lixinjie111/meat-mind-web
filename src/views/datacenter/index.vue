<template>
  <div class="data-center">
      <!-- 数据管理 -->
      <Page :side="sides"></Page>
  </div>
</template>

<script>
import Page from "../../components/DefaultIndex"
export default {
  name:"index",
  components:{Page},
    data(){
    return {
      sides:[
        {label:"我的数据",name:"data-center-my",icon:"iconwodeshuju",meta:"/data-center",path:"/data-center/my"},
        {label:"付费数据",name:"data-center-pay",icon:"iconfufeishuju",meta:"/data-center",path:"/data-center/pay"},
        {label:"系统集成",name:"data-center-system",icon:"iconxitongjicheng",meta:"/data-center",path:"/data-center/system"},
        {label:"元数据管理",name:"data-center-metax",icon:"iconyuanshujubeifen",meta:"/data-center",path:"/data-center/metax"}
      ]
    }
  }
}
</script>

<style>

</style>