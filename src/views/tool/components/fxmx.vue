<template>
  <div class="fxmx">
      <!-- <img src="../../../static/img/tool/fxmx.png" alt=""> -->
      <div class="title">分析模型</div>
      <div class="container">
        <div class="m-title">选择模型</div>
        <div class="models">
          <img src="../../../static/img/tool/fxmx/click1-event@2x.png" alt="" @click="event">
          <img src="../../../static/img/tool/fxmx/click2-funnel@2x.png" alt="" @click="funnel">
          <img src="../../../static/img/tool/fxmx/click3-keep@2x.png" alt="" @click="keep">
          <img src="../../../static/img/tool/fxmx/click4-distribution@2x.png" alt="" @click="distribute">
          <img src="../../../static/img/tool/fxmx/click5-way@2x.png" alt="" @click="way">
          <img src="../../../static/img/tool/fxmx/click6-hot@2x.png" alt="" @click="hot">
          <img src="../../../static/img/tool/fxmx/click7-interval@2x.png" alt="" @click="interval">
          <img src="../../../static/img/tool/fxmx/click8-defined@2x.png" alt="" @click="defined">
          <img src="../../../static/img/tool/fxmx/click9-cause@2x.png" alt="" @click="cause">
          <img src="../../../static/img/tool/fxmx/click10-property@2x.png" alt="" @click="property">
          <img src="../../../static/img/tool/fxmx/click11-app@2x.png" alt="" @click="app">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"fxmx",
  data(){
    return {}
  },
  methods:{
    event(){
      this.$router.push({name:"analysis-tool-fxmx-event"})
    },
    funnel(){
      this.$router.push({name:"analysis-tool-fxmx-funnel"})
    },
    keep(){
      this.$router.push({name:"analysis-tool-fxmx-keep"})
    },
    distribute(){
      this.$router.push({name:"analysis-tool-fxmx-distribute"})
    },
    way(){
      this.$router.push({name:"analysis-tool-fxmx-way"})
    },
    hot(){
      this.$router.push({name:"analysis-tool-fxmx-hot"})
    },
    interval(){
      this.$router.push({name:"analysis-tool-fxmx-interval"})
    },
    defined(){
      this.$router.push({name:"analysis-tool-fxmx-defined"})
    },
    cause(){
      this.$router.push({name:"analysis-tool-fxmx-cause"})
    },
    property(){
      this.$router.push({name:"analysis-tool-fxmx-property"})
    },
    app(){
      this.$router.push({name:"analysis-tool-fxmx-app"})
    }
  }
}
</script>

<style scoped lang="scss">
.fxmx{
  width: 100%;
  height: 100%;
  padding: 0 24px 24px;
  background: #F5F5F5;
  .title{
    width: 100%;
    height: 72px;
    font-size: 20px;
    color: #212121;
    line-height: 72px;
  }
  .container{
    height: calc(100% - 72px);
    background: #FFFFFF;
    .m-title{
      height: 56px;
      padding: 0 24px;
      font-size: 16px;
      color: #212121;
      border-bottom: 1px solid #F0F0F0;
      line-height: 55px;
    }
    .models{
      display: flex;
      flex-wrap: wrap;
      img{
        width: 352px;
        height: 100px;
        margin-left: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
