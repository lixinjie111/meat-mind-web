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
        {label:"分析模型",name:"analysis-tool-fxmx",icon:"iconzidingyifenxi",meta:"analysis-tool",path:"/analysis-tool/fxmx"},
        {label:"指标管理",name:"analysis-tool-zbgl",icon:"iconzhibiaoguanli",meta:"analysis-tool",path:"/analysis-tool/zbgl"},
        {label:"标签管理",name:"analysis-tool-bqgl",icon:"iconbiaoqiantixi",meta:"analysis-tool",path:"/analysis-tool/bqgl"},
        {label:"用户分群",name:"analysis-tool-yhfq",icon:"iconyonghufenqun",meta:"analysis-tool",path:"/analysis-tool/yhfq"},
        {label:"渠道追踪",name:"analysis-tool-qdzz",icon:"iconqudaozhuizong",meta:"analysis-tool",children:[
          {label:"渠道链接",name:"qdlj",meta:"analysis-tool",path:"/analysis-tool/qdzz/qdlj"},
          {label:"渠道管理",name:"qdgl",meta:"analysis-tool",path:"/analysis-tool/qdzz/qdgl"}
        ]},
        {label:"场景库",name:"analysis-tool-cjk",icon:"iconchangjingku",meta:"/analysis-tool",path:"/analysis-tool/cjk"},
      ]
    }
  }
}
</script>

<style>

</style>