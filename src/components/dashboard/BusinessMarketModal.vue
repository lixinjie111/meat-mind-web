<template>
  <Modal class-name="modal" title="系统推荐获客方案" :value="show" footer-hide :closable="true" width="900" @on-cancel="cancel">
    <div slot="header" class="modal-title">系统推荐获客方案</div>
    <img :src="modal1" alt="" v-if="showComponent" />
    <img :src="modal2" alt="" v-if="showComponent1">
  </Modal>

</template>

<script>
  export default {
    props: ['show', 'type'],
    data(){
      return{
        modal1: require('../../assets/img/mark/target-modal1.png'),
        modal2: require('../../assets/img/mark/target-modal2.png'),
      }
    },
    methods:{
      cancel(){
        this.$emit('close')
      }
    },
    computed: {
      showComponent(){
        return ['bjsbz', 'qygg', 'bpyz', 'zyzz'].includes(this.type)
      },
      showComponent1(){
        return ['yxqn'].includes(this.type)
      },
    },
  }
</script>

<style scoped lang="less">
  .modal{
    .modal-title{
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
      line-height: 24px;
    }
    img{
      width: 100%;
    }
  }

</style>
