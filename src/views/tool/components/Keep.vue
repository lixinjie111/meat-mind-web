<template>
  <div class="fxmx-keep">
      <div class="back" @click="back"></div>
    <MutableArray :value="conditions" :init-item="initItem" :on-delete="handleDelete">
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
  data() {
      return {
        conditions: [{input: ''}],
        initItem: {input: ''},
      }
  },
  components: {FilterCondition, MutableArray},
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-model"})
        },
      handleDelete(index) {
        this.conditions.splice(index, 1);
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
