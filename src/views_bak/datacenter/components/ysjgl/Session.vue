<template>
  <div class="fxmx-session">
      <img src="../../../../static/img/datacenter/ysjgl/session@2x.png" alt="">
      <div class="back" @click="back"></div>
  </div>
</template>

<script>
export default {
    name:"Session",
    methods:{
        back(){
            this.$router.push({name:"data-center-metax"})
        }
    }
}
</script>

<style scoped lang="scss">
.fxmx-session{
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