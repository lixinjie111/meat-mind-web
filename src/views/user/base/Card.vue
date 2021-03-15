<template>
  <div class="card">
    <div class="title">{{title}}</div>
    <div class="show-container">
      <div class="number" :class="colourfol">{{number}}</div>
      <div class="card-echarts" :class="colourfol">
      </div>
    </div>
    <Compare :data="data"></Compare>
  </div>
</template>

<script>
import Compare from "../../../components/Compare1";
export default {
  name: "Card",
  components: { Compare },
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
  }
};
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  height: 100%;
  padding: 16px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #eaedf7;
  box-shadow: none;
  &:hover{
    box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16);
  }
  .title {
    height: 22px;
    font-size: 16px;
    color: #636e95;
    line-height: 22px;
  }
  .show-container {
      display: flex;
      align-items: center;
      width: 100%;
      height: 56px;
      margin-bottom: 8px;
      .number{
        width: 50%;
        height: 32px;
        font-size: 32px;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: 500;
        line-height: 32px;
        &.blue{
            color: #4D94FF;
        }
        &.purple{
            color: #A49DFA;
        }
        &.pink{
            color: #FC809F;
        }
        &.orange{
            color: #FFD98C;
        }
      }
      .card-echarts{
        width: 50%;
        height: 56px;
        background: linear-gradient(#FFFFFF 0%, #4D94FF 100%);
        &.blue{
            background: url("../../../assets/img/mark/blue.png") no-repeat center center / 100% 56px;
        }
        &.purple{
            background: url("../../../assets/img/mark/purple.png") no-repeat center center / 100% 56px;
        }
        &.pink{
            background: url("../../../assets/img/mark/pink.png") no-repeat center center / 100% 56px;
        }
        &.orange{
            background: url("../../../assets/img/mark/orange.png") no-repeat center center / 100% 56px;
        }
      }
  }
}
</style>
