<template>
  <Modal class-name="uploading-modal" :value="visible" footer-hide :closable="true" @on-visible-change="change">
    <div class="upload2">
      <img src="../../../assets/img/datacenter/myData/uploading.png" alt="">
      <div class="upload2-btn" @click="uploadChange2"></div>
    </div>

  </Modal>
</template>

<script>
export default {
  props: ['visible'],
  data() {
    return {
      uploading: false,
    }
  },
  methods: {
    uploadChange2(v) {
      this.$emit('select', v)
    },
    change(boolean){
      if(!boolean){
        this.$emit('select')
      }
    }
  },
  computed: {
    modalWidth() {
      return 400 / 144 * window.rem
    },
  }
}
</script>

<style lang="scss">
.uploading-modal {
  .ivu-modal-body {
    padding: 0;
  }

  .ivu-modal {
    width: 640px !important;
    height: 400px;
  }

  .upload2 {
    position: relative;
    width: 640px;
    height: 400px;

    > img {
      width: 640px;
      height: 400px;
    }

    .upload2-btn {
      position: absolute;
      left: 150px;
      top: 60px;
      width: 170px;
      height: 80px;
      background: transparent;
      cursor: pointer;
    }
  }
}

</style>
