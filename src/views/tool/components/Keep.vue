<template>
  <div class="fxmx-keep">
      <div class="back" @click="back"></div>
    <h2>留存分析</h2>
    <FilterEvent title="初始行为是"></FilterEvent>
    <FilterEvent title="后续行为是"></FilterEvent>
  </div>
</template>

<script>
  import FilterEvent from '../base/FilterEvent';
  import MutableArray from '../base/MutableArray';

export default {
    name:"Keep",
  data() {
      return {
        conditions: [{input: ''}],
        initItem: {input: ''},
      }
  },
  components: {FilterEvent, MutableArray},
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-model"})
        },
    }
}
</script>

<style scoped lang="scss">
.fxmx-keep{
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
