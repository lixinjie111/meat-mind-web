<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  name: "graphEcharts1",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    initEcharts() {
      let option = this.defaultOption();
      let myEchart = this.$echarts.init(document.getElementById(this.id));
      myEchart.setOption(option);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    defaultOption() {

      return option;
    },
  },
  mounted() {
    this.initEcharts();
  },
};
</script>

<style scoped lang="scss">
.echarts-box {
  width: 100%;
  height: 100%;
}
</style>