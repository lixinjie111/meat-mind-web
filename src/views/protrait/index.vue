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
        {label:"用户画像",name:"portrait-system-yhhx",icon:"iconyonghuhuaxiang",meta:"portrait-system",path:"/portrait-system/yhhx"},
        {label:"品牌画像",name:"portrait-system-pphx",icon:"iconpinpaihuaxiang",meta:"portrait-system",path:"/portrait-system/pphx"},
        {label:"通道画像",name:"portrait-system-tdhx",icon:"icontongdaohuaxiang",meta:"portrait-system",children:[
          {label:"通道基础画像",name:"tdhx",meta:"/portrait-system",path:"/portrait-system/tdhx"},
          {label:"KOL属性",name:"kolsx",meta:"/portrait-system",path:"/portrait-system/kolsx"}
        ]}
      ]
    }
  }
}
</script>

<style>

</style>