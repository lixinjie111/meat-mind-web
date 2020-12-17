<template>
  <div class="fxmx-app">
      <img src="../../../../static/img/tool/fxmx/app@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div>
</template>

<script>
export default {
    name:"App",
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-fxmx"})
        }
    }
}
</script>

<style scoped lang="scss">
.fxmx-app{
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