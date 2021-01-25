<template>
  <div class="business-analysis">
      <!-- 经营分析 -->
        <Side></Side>
        <div class="container">
          <Header :target="'经营分析'"></Header>
          <div class="show-content">
            <router-view></router-view>
          </div>
        </div>
  </div>
</template>

<script>
import Side from "../../components/Side"
import Header from "../../components/DefaultHeader"
export default {
  name:"index",
  components:{Side, Header},
  data(){
    return {
      sides:[
        {label:"整体概览",name:"business-analysis-ztgl",icon:"iconzhinengjuece",meta:"business-analysis",children:[
          {label:"指标监控",name:"ztgl",meta:"/business-analysis",path:"/business-analysis/ztgl"},
          {label:"整体趋势",name:"ztqs",meta:"/business-analysis",path:"/business-analysis/ztgl"},
          {label:"增长态势",name:"zzts",meta:"/business-analysis",path:"/business-analysis/ztgl"},
          {label:"用户旅程",name:"yhlc",meta:"/business-analysis",path:"/business-analysis/ztgl"}
        ]},
        {label:"用户分析",name:"business-analysis-yhfx",icon:"iconyonghufenxi",meta:"business-analysis",children:[
          {label:"新增用户",name:"yhfx",meta:"/business-analysis",path:"/business-analysis/yhfx"},
          {label:"活跃用户",name:"hyyh",meta:"/business-analysis",path:"/business-analysis/yhfx"},
          {label:"留存用户",name:"lcyh",meta:"/business-analysis",path:"/business-analysis/yhfx"},
          {label:"用户参与度",name:"yhcyd",meta:"/business-analysis",path:"/business-analysis/yhfx"}
        ]},
        {label:"渠道分析",name:"business-analysis-qdfx",icon:"iconqudaofenxi",meta:"business-analysis",children:[
          {label:"渠道实时",name:"qdfx",meta:"/business-analysis",path:"/business-analysis/qdfx"},
          {label:"渠道概况",name:"qdgk",meta:"/business-analysis",path:"/business-analysis/qdfx"},
          {label:"渠道质量评估",name:"qdzlpg",meta:"/business-analysis",path:"/business-analysis/qdfx"}
        ]},
        {label:"品牌运营分析",name:"business-analysis-ywgl",icon:"iconpinpaiyunyingfenxi",meta:"business-analysis",children:[
          {label:"业务概览",name:"ywgl",meta:"/business-analysis",path:"/business-analysis/ywgl"},
          {label:"经营概览",name:"jygl",meta:"/business-analysis",path:"/business-analysis/ywgl"},
          {label:"MRR分析",name:"mrrfx",meta:"/business-analysis",path:"/business-analysis/ywgl"}
        ]}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
    .business-analysis {
        display: flex;

        .container {
            display: flex;
            flex-direction: column;
            width: calc(100vw - 240px);

            .show-content{
                display: flex;
                flex-direction: column;
                width: 100%;
                height: calc(100vh - 80px);
                overflow-y:scroll;
            }
        }
    } 
</style>