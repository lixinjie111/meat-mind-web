<template>
  <div class="fxmx-event">
      <!-- <img src="../../../../static/img/tool/fxmx/event@2x.png" alt=""> -->
      <div class="title">事件分析</div>
      <div class="event-content">
          <div class="filter-container">

          </div>
          <div class="show-container">

          </div>
      </div>
      <div class="back" @click="back">back</div>
  </div>
</template>

<script>
export default {
    name:"Event",
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-fxmx"})
        }
    }
}
</script>

<style scoped lang="scss">
.fxmx-event{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 24px 24px;
    background: #F5F5F5;
    img{
        width: 100%;
    }
    .title{
        width: 100%;
        height: 72px;
        font-size: 20px;
        color: #212121;
        line-height: 72px;
    }
    .event-content{
        min-height: calc(100% - 72px);
        .filter-container{
            background: #FFFFFF;
            border: 1px solid red;
            padding: 20px 0;
            margin-bottom: 20px;
        }
        .show-container{
            background: #FFFFFF;
            border: 1px solid blue;
            padding: 20px 0;
        }
    }

    .back{
        position: absolute;
        top: 22px;
        left: 24px;
        width: 26px;
        height: 26px;
        border: 1px solid red;
        cursor: pointer;
    }
}
</style>