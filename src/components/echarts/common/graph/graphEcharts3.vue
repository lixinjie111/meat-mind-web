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
    },
    colorList:{
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
        animationDuration:1500,
        animationDurationUpdate : 'quinticInOut',
        label : {
            normal : {
                show : true,
                textStyle : {
                    fontSize : 12
                },
            }
        },
        grid:{
            top:0,
            left:0,
            right:0,
            bottom:0
        },
        series : [ {
            type : 'graph',
            layout : 'force',//采用力引导布局
            symbolSize : 45,
            legendHoverLink : true,//启用图例 hover 时的联动高亮。
            focusNodeAdjacency : true,//在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            roam : true,
            force : {
                repulsion : 100,
                 edgeLength : [30,100]
            },
            edgeSymbolSize : [ 4, 10 ],
            itemStyle:{
                color:this.colorList[0]
            },
            lineStyle : {
                normal : {
                    color:"#EAEDF7",
                    opacity : 0.9,
                    width : 1,
                    curveness : 0
                }
            },
            label : {
                normal : {
                    show : true,
                    position : 'inside',
                    textStyle : {
                        fontSize : 10
                    },
                }
            },
            edgeLabel : {
                normal : {
                    show : false,
                    textStyle : {
                        fontSize : 10
                    },
                    formatter : "{a}{b}{c}"
                }
            },
            categories : [ {
                itemStyle : {
                    normal : {
                        color : this.colorList[1],
                    }
                }
            }, {
                itemStyle : {
                    normal : {
                        color : this.colorList[2],
                    }
                }
            }, {
                itemStyle : {
                    normal : {
                        color : this.colorList[3],
                    }
                }
            } ],
            data :this.datas,
            links : this.lines,
            left:20,
            right:20,
            top:0,
            bottom:0
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