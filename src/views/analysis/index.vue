<template>
  <div class="business-analysis">
      <!-- 经营分析 -->
      <Page :side="sides" :target="'经营分析'"></Page>
  </div>
</template>

<script>
import Page from "../../components/AnchorIndex"
export default {
  name:"index",
  components:{Page},
  data(){
    return {
      sides:[
        {name:"整体概览",icon:"iconzhinengjuece",meta:"business-analysis",children:[
          {name:"指标监控",meta:"/business-analysis",path:"/business-analysis/ztgl",href:"#zbjk"},
          {name:"整体趋势",meta:"/business-analysis",path:"/business-analysis/ztgl",href:"#ztqs"},
          {name:"增长态势",meta:"/business-analysis",path:"/business-analysis/ztgl",href:"#zzts"},
          {name:"用户旅程",meta:"/business-analysis",path:"/business-analysis/ztgl",href:"#yhlc"}
        ]},
        {name:"用户分析",icon:"iconyonghufenxi",meta:"business-analysis",children:[
          {name:"新增用户",meta:"/business-analysis",path:"/business-analysis/xzyh"},
          {name:"留存用户",meta:"/business-analysis",path:"/business-analysis/xzyh"},
          {name:"用户参与度",meta:"/business-analysis",path:"/business-analysis/xzyh"},
          {name:"目标用户对照",meta:"/business-analysis",path:"/business-analysis/xzyh"}
        ]},
        {name:"渠道分析",icon:"iconqudaofenxi",meta:"business-analysis",children:[
          {name:"渠道实时",meta:"/business-analysis",path:"/business-analysis/qdss"},
          {name:"渠道概况",meta:"/business-analysis",path:"/business-analysis/qdss"},
          {name:"渠道质量评估",meta:"/business-analysis",path:"/business-analysis/qdss"}
        ]},
        {name:"品牌运营分析",icon:"iconpinpaiyunyingfenxi",meta:"business-analysis",children:[
          {name:"业务概览",meta:"/business-analysis",path:"/business-analysis/ywgl"},
          {name:"经营概览",meta:"/business-analysis",path:"/business-analysis/ywgl"},
          {name:"MRR分析",meta:"/business-analysis",path:"/business-analysis/ywgl"}
        ]}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.business-analysis{

}
</style>