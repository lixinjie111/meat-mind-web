<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  name: "graphEcharts",
  props: {
    id: {
      type: String,
      default: "",
    },
    lines:{
        type:Array
    },
    datas:{
        type:Array
    }
  },
  data(){
      return {}
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
    let option = {
        title : {
            text : ''
        },
        tooltip : {},
        animationDurationUpdate : 1500,
        label : {
            normal : {
                show : true,
                textStyle : {
                    fontSize : 12
                },
            }
        },
        series : [ {
            type : 'graph',
            layout : 'force',//采用力引导布局
            symbolSize : 45,
            legendHoverLink : true,//启用图例 hover 时的联动高亮。
            focusNodeAdjacency : true,//在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            roam : true,
            label : {
                normal : {
                    show : true,
                    position : 'inside',
                    textStyle : {
                        fontSize : 12
                    },
                }
            },
            force : {
                repulsion : 1000
            },
            edgeSymbolSize : [ 4, 50 ],
            edgeLabel : {
                normal : {
                    show : true,
                    textStyle : {
                        fontSize : 10
                    },
                    formatter : "{c}"
                }
            },
            categories : [ {
                itemStyle : {
                    normal : {
                        color : "#BB8FCE",
                    }
                }
            }, {
                itemStyle : {
                    normal : {
                        color : "#0099FF",
                    }
                }
            }, {
                itemStyle : {
                    normal : {
                        color : "#5DADE2",
                    }
                }
            } ],
            data :this.datas,
            links : this.lines,
            lineStyle : {
                normal : {
                    opacity : 0.9,
                    width : 1,
                    curveness : 0
                }
            }
        } ]
    }
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