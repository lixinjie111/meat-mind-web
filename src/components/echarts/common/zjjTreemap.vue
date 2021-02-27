<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  props: {
    myData: {
      default: () => {
        return [];
      },
    },
    id: {
      type: String,
      default: () => {
        return "";
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let _option = this.defaultOption();
      let myChart = this.$echarts.init(document.getElementById(this.id));
      myChart.setOption(_option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    defaultOption() {
      var option = (option = {
        tooltip: {
          show: true,
        },
        geid:{
            width:'100%',
            height:'100%'
        },
        series: [
          {
            breadcrumb: { show: false},
            type: "treemap",
            data:this.myData,
          },
        ],
      });
      return option;
    },
  },
};
</script>
<style lang="scss" scoped>
.echarts-box {
  width: 100%;
  height: 100%;
}
</style>

