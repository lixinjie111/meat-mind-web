<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="number" :class="colourfol">{{ number }}</div>
  </div>
</template>

<script>
import Compare from "../../../components/Compare";
export default {
  name: "Card",
  components: { Compare },
  props: {
    title: {
      type: String,
    },
    colourfol: {
      type: String,
      default: "blue",
    },
    number: {
      type: String,
      default: "0",
    },
  },
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
  .title {
    height: 26px;
    font-size: 16px;
    margin-bottom: 8px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636e95;
    line-height: 26px;
  }
  .number {
    height: 32px;
    font-size: 32px;
    font-family: HelveticaNeue-Medium, HelveticaNeue;
    font-weight: 500;
    line-height: 32px;
    &.blue {
      color: #4d94ff;
    }
    &.purple {
      color: #a49dfa;
    }
    &.pink {
      color: #fc809f;
    }
    &.orange {
      color: #ffd98c;
    }
  }
}
</style>