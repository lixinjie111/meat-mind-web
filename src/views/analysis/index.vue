<template>
  <div class="business-analysis">
      <!-- 经营分析 -->
      <Page :side="sides" :target="'经营分析'"></Page>
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
        {name:"整体概览",src:require("../../static/img/side/ztgl@2x.png"),meta:"/business-analysis",children:[
          {name:"指标监控",meta:"/business-analysis",path:"/business-analysis/zbjk"},
          {name:"整体趋势",meta:"/business-analysis",path:"/business-analysis/ztqs"},
          {name:"增长态势",meta:"/business-analysis",path:"/business-analysis/zzts"},
          {name:"用户旅程",meta:"/business-analysis",path:"/business-analysis/yhlc"}
        ]},
        {name:"用户分析",src:require("../../static/img/side/yhfx@2x.png"),meta:"business-analysis",children:[
          {name:"新增用户",meta:"/business-analysis",path:"/business-analysis/xzyh"},
          {name:"留存用户",meta:"/business-analysis",path:""},
          {name:"用户参与度",meta:"/business-analysis",path:""},
          {name:"目标用户对照",meta:"/business-analysis",path:""}
        ]},
        {name:"渠道分析",src:require("../../static/img/side/qdfx@2x.png"),meta:"business-analysis",children:[
          {name:"渠道实时",meta:"/business-analysis",path:""},
          {name:"渠道概况",meta:"/business-analysis",path:""},
          {name:"渠道质量评估",meta:"/business-analysis",path:""}

        ]},
        {name:"品牌运营分析",src:require("../../static/img/side/ppyyfx@2x.png"),meta:"business-analysis",children:[
          {name:"业务概览",meta:"/business-analysis",path:""},
          {name:"经营概览",meta:"/business-analysis",path:""},
          {name:"MRR分析",meta:"/business-analysis",path:""}
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