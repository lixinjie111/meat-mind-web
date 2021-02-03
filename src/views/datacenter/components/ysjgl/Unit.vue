<template>
  <!-- <div class="fxmx-unit">
      <img src="../../../../static/img/datacenter/ysjgl/unit@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div> -->
  <DetailsPage title="元事件" backname="data-center-metax">
      <img src="../../../../static/img/datacenter/ysjgl/unit@2x.png" alt="">
      <div class="back" @click="back"></div>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../../layouts/DetailsPage"
export default {
    name:"Unit",
    components:{DetailsPage},
    methods:{
        back(){
            this.$router.push({name:"data-center-metax"})
        }
    }
}
</script>

<style scoped lang="scss">
.fxmx-unit{
    position: relative;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
    }
    .back{
        position: absolute;
        top: 22px;
        left: 24px;
        width: 26px;
        height: 26px;
        // border: 1px solid red;
        cursor: pointer;
    }
}
</style>