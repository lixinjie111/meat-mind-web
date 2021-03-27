<template>
  <div class="match_degree">
    <div class="title">{{title}}</div>
    <div class="show-container">
      <div class="row"  v-for="(it, i) in data" :key="i">
        <span class="name">{{it.name}}</span>
        <span :class="['bar']">
          <div :class="['bar_color', colourfol]" :style="{ width: getWidth(it.value) }"></div>
        </span>
        <span :class="['number', colourfol]">{{it.value}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      title:{
          type:String
      },
      colourfol:{
          type:String,
          default:"blue"
      },
      number:{
          type:String,
          default:'0'
      },
      data:{
          type:Array,
      }
  },
  computed: {
    maxValue(){
      return Math.max(...this.data.map(e=>e.value))
    },
  },
  methods:{
    getWidth(value){
      if(value === this.maxValue){
        return '100%'
      }
      return value / this.maxValue * 50 + 'px'
    }
  }
};
</script>

<style scoped lang="scss">
  $color: #1DCEC3;
  $green: #F16E84;
.match_degree {
  width: 100%;
  height: 100%;
  box-shadow: none;
  &:hover{
    /*box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16);*/
  }
  .title {
    font-size: 12px;
    font-weight: 500;
    color: #242F57;
    line-height: 21px;
  }
  .show-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      height: 56px;
      margin-bottom: 8px;
    .row{
      display: flex;
      flex: 1 0 50%;
      margin-top: 16px;
      .name{
        display: inline-block;
        width: 50px;
        text-align: right;
      }
      .bar{
        /*width: 50px;*/
        display: flex;
        align-items: center;
        margin: 0 6px;
        .bar_color{
          border-radius: 0 5px 5px 0;
          height: 10px;
        }
        .bar_color.blue{
          background: $color;
        }
        .bar_color.green{
          background: $green;
        }
      }
      .bar.blue{
        background: $color;
      }
      .number{}
      .number.green{
        color: $green;
      }
      .number.blue{
        color: $color;
      }
    }
  }
}
</style>
