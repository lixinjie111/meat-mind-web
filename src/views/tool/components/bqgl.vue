<template>
  <div class="bqgl">
      <img src="../../../static/img/tool/bqgl.png" alt="">
      <div class="create-target" @click="create"></div>
      <Modal
      title="通过哪种方式进行标签的创建"
      v-model="showModal"
      footer-hide
      class-name="create-target-modal">
      <div class="middle">
        <div class="create-target">
          <img src="../../../static/img/tool/bqgl/defined.png" alt="" @click="createTarget">
          <img src="../../../static/img/tool/bqgl/basic.png" alt="">
          <img src="../../../static/img/tool/bqgl/feature.png" alt="">
          <img src="../../../static/img/tool/bqgl/event.png" alt="">
          <img src="../../../static/img/tool/bqgl/behavior.png" alt="">
        </div>
        <div class="create-sql">
          <div>SQL创建</div>
          <img src="../../../static/img/tool/bqgl/sql.png" alt="">
        </div>
      </div>
    </Modal>   
    <Modal class-name="zbgl-modal" v-model="newModal" footer-hide :closable="false" width="460px">
      <div class="content">
        <div class="close-btn" @click="newModal = false"></div>
        <img src="../../../static/img/tool/bqgl/click-defined.png" alt="">
        <div class="next-btn" @click="newModal = false"></div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name:"bqgl",
  data(){
    return {
      showModal:false,
      newModal:false
    }
  },
  methods:{
    create(){
      this.showModal = true
    },
    createTarget(){
      this.showModal = false
      this.newModal = true
      
    }
  }
}
</script>

<style scoped lang="scss">
.bqgl{
  position: relative;
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    // height: 100%;
  }
  .create-target{
    position: absolute;
    top: 84px;
    left: 48px;
    width: 80px;
    height: 32px;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
  .create-target-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal {
      top: 0;
      width: 560px !important;
      min-height: 558px;
      background: #ffffff;
      border-radius: 4px;
      .ivu-modal-content {
        min-height: 558px;
        .ivu-modal-close{
          top: 16px;
          right: 24px;
          width: 24px;
          height: 24px;
        }
        .ivu-modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid #E8E8E8;
          .ivu-modal-header-inner {
            height: 16px;
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 400;
            color: #000000;
            line-height: 16px;
          }
        }
        .ivu-modal-body{
          padding: 32px 25px 27px;
          .middle{
            .create-target{
              margin-bottom: 37px;
            }
            img{
              width: 246px;
              height: 84px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss">
    .zbgl-modal {
          display: flex;
    align-items: center;
    justify-content: center;
        .ivu-modal {
                width: 560px !important;
      min-height: 620px;
      background: #ffffff;
      top: 0;
      }
        .ivu-modal-body {
            padding: 0;
        }

        .content {
            position: relative;
            width: 560px;
            height: 620px;

            img {
                width: 560px;
                height: 620px;
            }

            .close-btn {
                position: absolute;
                right: 10px;
                top: 10px;
                width: 20px;
                height: 20px;
                cursor: pointer;
            }
            .next-btn {
                position: absolute;
                right: 10px;
                bottom: 10px;
                width: 60px;
                height: 20px;
                cursor: pointer;
            }
        }
    }
</style>
