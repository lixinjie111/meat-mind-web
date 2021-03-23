<template>
  <div class="fxmx-keep">
      <div class="back" @click="back"></div>
    <MutableArray title="asdf">
      <template #item="itemProps">
        <FilterCondition v-bind="itemProps"/>
      </template>
    </MutableArray>
  </div>
</template>

<script>
  import FilterCondition from '../base/FilterCondition';
  import MutableArray from '../base/MutableArray';

export default {
    name:"Keep",
  components: {FilterCondition, MutableArray},
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-model"})
        }
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
