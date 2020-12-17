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
      </div>
    </Modal>   
  </div>
</template>

<script>
export default {
  name:"bqgl",
  data(){
    return {
      showModal:false
    }
  },
  methods:{
    create(){
      this.showModal = true
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
      width: 684px !important;
      min-height: 353px;
      background: #ffffff;
      border-radius: 4px;
      .ivu-modal-content {
        min-height: 353px;
        .ivu-modal-close{
          top: 16px;
          right: 16px;
        }
        .ivu-modal-header {
          padding: 14px 32px;
          border-bottom: 1px solid #f2f3f4;
          .ivu-modal-header-inner {
            height: 29px;
            font-size: 21px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #25272b;
            line-height: 29px;
          }
        }
        .ivu-modal-body{
          padding: 32px 32px 64px;
          .middle{
            .m-title{
              height: 20px;
              margin-bottom: 4px;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #B6BBC2;
              line-height: 20px;
            }
            .date,.time{
              display: inline-block;
              margin-top: 16px;
              vertical-align: top;
            }
            .date{
              width: 132px;
              margin-right: 12px;
            }
            .time{
              width: 224px;
            }
          }
        }
      }
    }
  }
</style>
