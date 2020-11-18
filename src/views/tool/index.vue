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
        {name:"整体概览",icon:"",path:"/analysis-tool",children:[
          {name:"指标监控",path:"/analysis-tool/zbjk"},
          {name:"整体趋势",path:"/analysis-tool/ztqs"},
          {name:"增长态势",path:"/analysis-tool/zzts"},
          {name:"用户旅程",path:"/analysis-tool/yhlc"}
        ]},
        {name:"用户分析",icon:"",path:"analysis-tool",children:[
          {name:"新增用户",path:"/analysis-tool/yhlc"},
          {name:"留存用户",path:"/analysis-tool/yhlc"},
          {name:"用户参与度",path:""},
          {name:"目标用户对照",path:""}
        ]},
        {name:"渠道分析",icon:"",path:"analysis-tool",children:[
          {name:"渠道实时",path:""},
          {name:"渠道概况",path:""},
          {name:"渠道质量评估",path:""}

        ]},
        {name:"品牌运营分析",icon:"",path:"analysis-tool",children:[
          {name:"业务概览",path:""},
          {name:"经营概览",path:""},
          {name:"MRR分析",path:""}
        ]}
      ]
    }
  }
}
</script>

<style>

</style>