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
        {name:"我的数据",src:require("../../static/img/datacenter/my@2x.png"),meta:"/data-center",path:"/data-center/my"},
        {name:"付费数据",src:require("../../static/img/datacenter/pay@2x.png"),meta:"/data-center",path:"/data-center/pay"},
        {name:"系统集成",src:require("../../static/img/datacenter/system@2x.png"),meta:"/data-center",path:"/data-center/system"},
        {name:"元数据管理",src:require("../../static/img/datacenter/metax@2x.png"),meta:"/data-center",path:"/data-center/metax"}
      ]
    }
  }
}
</script>

<style>

</style>