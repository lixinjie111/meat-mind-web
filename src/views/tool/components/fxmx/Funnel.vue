<template>
  <div class="fxmx-funnel">
      <img src="../../../../static/img/tool/fxmx/funnel@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div>
</template>

<script>
export default {
    name:"Funnel",
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-fxmx"})
        }
    }
}
</script>

<style scoped lang="scss">
.fxmx-funnel{
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