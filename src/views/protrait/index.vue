<template>
  <div class="portrait-system">
      <!-- 画像系统 -->
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
        {name:"用户画像",icon:"iconyonghuhuaxiang",meta:"/portrait-system",path:"/portrait-system/yhhx"},
        {name:"品牌画像",icon:"iconpinpaihuaxiang",meta:"portrait-system",path:"",children:[
          {name:"品牌基础画像",meta:"/portrait-system",path:"/portrait-system/ppjchx"},
          {name:"品牌舆情",meta:"/portrait-system",path:"/portrait-system/ppyq"}
        ]},
        {name:"通道画像",icon:"icontongdaohuaxiang",meta:"portrait-system",path:"",children:[
          {name:"通道基础画像",meta:"/portrait-system",path:"/portrait-system/tdjchx"},
          {name:"KOL属性",meta:"/portrait-system",path:"/portrait-system/kolsx"}
        ]}
      ]
    }
  }
}
</script>

<style>

</style>