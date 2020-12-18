<template>
  <div class="fxmx-visualization">
      <img src="../../../../static/img/datacenter/ysjgl/visualization@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div>
</template>

<script>
export default {
    name:"Visualization",
    methods:{
        back(){
            this.$router.push({name:"data-center-metax"})
        }
    }
}
</script>

<style scoped lang="scss">
.fxmx-visualization{
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