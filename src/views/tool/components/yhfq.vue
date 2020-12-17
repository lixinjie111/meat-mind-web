<template>
  <div class="yhfq">
      <div class="list" v-if="page1" @click="toPage2">
        <img src="../../../static/img/tool/yhfq/list1.png" alt="">
        <div class="page2"></div>
      </div>
      <div class="list" v-if="page2" @click="toPage1">
        <img src="../../../static/img/tool/yhfq/list2.png" alt="">
        <div class="page1"></div>
      </div>
  </div>
</template>

<script>
export default {
  name:"yhfq",
  data(){
    return {
      page1:true,
      page2:false
    }
  },
  methods:{
    toPage1(){
      this.page1=true
      this.page2=false
    },
    toPage2(){
      this.page1=false
      this.page2=true
    }
  }
}
</script>

<style scoped lang="scss">
.yhfq{
  width: 100%;
  height: 100%;
  .list{
    position: relative;
    img{
      width: 100%;
      // height: 100%;
    }
    .page1{
      position: absolute;
      width: 80px;
      height: 46px;
      right: 46px;
      bottom: 200px;
      cursor: pointer;
    }
    .page2{
      position: absolute;
      width: 80px;
      height: 46px;
      right: 50px;
      bottom: 42px;
      cursor: pointer;
    }
  }
}
</style>
