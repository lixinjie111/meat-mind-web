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
        {name:"整体概览",icon:"",path:"/data-center",children:[
          {name:"指标监控",path:"/data-center/zbjk"},
          {name:"整体趋势",path:"/data-center/ztqs"},
          {name:"增长态势",path:"/data-center/zzts"},
          {name:"用户旅程",path:"/data-center/yhlc"}
        ]},
        {name:"用户分析",icon:"",path:"data-center",children:[
          {name:"新增用户",path:"/data-center/yhlc"},
          {name:"留存用户",path:"/data-center/yhlc"},
          {name:"用户参与度",path:""},
          {name:"目标用户对照",path:""}
        ]},
        {name:"渠道分析",icon:"",path:"data-center",children:[
          {name:"渠道实时",path:""},
          {name:"渠道概况",path:""},
          {name:"渠道质量评估",path:""}

        ]},
        {name:"品牌运营分析",icon:"",path:"data-center",children:[
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