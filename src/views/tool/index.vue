<template>
  <div class="analysis-tool">
      <!-- 分析工具 -->
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
        {name:"分析模型",icon:"iconzidingyifenxi",meta:"/analysis-tool",path:"/analysis-tool/fxmx"},
        {name:"指标管理",icon:"iconzhibiaoguanli",meta:"/analysis-tool",path:"/analysis-tool/zbgl"},
        {name:"标签管理",icon:"iconbiaoqiantixi",meta:"/analysis-tool",path:"/analysis-tool/bqgl"},
        {name:"用户分群",icon:"iconyonghufenqun",meta:"/analysis-tool",path:"/analysis-tool/yhfq"},
        {name:"渠道追踪",icon:"iconqudaozhuizong",meta:"/analysis-tool",path:"",children:[
          {name:"渠道链接",meta:"/analysis-tool",path:"/analysis-tool/qdlj"},
          {name:"渠道管理",meta:"/analysis-tool",path:""}
        ]},
        {name:"场景库",icon:"iconchangjingku",meta:"/analysis-tool",path:"/analysis-tool/cjk"},
      ]
    }
  }
}
</script>

<style>

</style>