<template>
  <Modal title="提示" :width="modalWidth" :value="visible" :mask-closable="false" footer-hide :closable="false">
    <div class="tip">
      <div v-if="active === 1">您上传的是结构化数据，正在尝试结构化处理中…</div>
      <div v-else>您上传的是非结构化数据，正在尝试结构化处理中…</div>
      <i-circle :percent="80" dashboard :size="size">
        <span class="circle-inner" >80%</span>
      </i-circle>
    </div>
  </Modal>
</template>

<script>
export default {
  props: ['visible', 'active'],
  data(){
    console.log('visible', this.visible)
    return{
    }
  },
  methods: {

  },
  $watch:{
    visible(v){
      console.log('-------------------', v)
    }
  },
  computed: {
    modalWidth(){
      return 400 / 144 * window.rem
    },
    size(){
      return 30 / 144 * window.rem
    },
  }
}
</script>

<style scoped lang="scss">
  .tip{
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #242F57;
    line-height: 22px;
    position: relative;
    .circle-inner{
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translate(-31%, 10px);
    }
  }
</style>
