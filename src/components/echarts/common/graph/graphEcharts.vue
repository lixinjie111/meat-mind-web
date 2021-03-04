<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
var baseName = "新浪财经";
var chartData = {
	'百度百家号' : [ '人员1', '人员2', '人员3','人员4', '人员5', '人员6' ],
	'知乎' : [ '机构1', '机构2', '机构3','机构4', '机构5', '机构6' ],
	'抖音' : [ '文献1', '文献2', '文献3','文献4', '文献5', '文献6' ],
	"快手":[],'微视':[],"西瓜视频":[],'梨视频':[],"小红书":[],'大众点评':[]
};
var datas = [ {
	name : baseName || '',
	draggable : true,
	symbolSize:100,
	itemStyle: {
                 normal: {
                     borderColor: "#ff8400",
                     borderWidth: 4,
                     shadowBlur: 20,
                     shadowColor: "#ff8400",
                     color: "#11213b",
                 }
             }
} ];
var lines = [];
var categoryIdx = 0;
var keyIndex = 0;
var dataIndex = 0;
// console.log(Object.keys(chartData))
Object.keys(chartData).forEach((key)=>{
	keyIndex = dataIndex;
	datas.push({name: key,category:categoryIdx,draggable: true});
	keyIndex ++ ;
	dataIndex ++ ;
	lines.push({
        source: 0,
        target: keyIndex,
        value :''
    });
    // console.log(chartData[key])
	chartData[key].forEach((idx,val)=>{
		datas.push({name: val,category:categoryIdx,draggable: true});
		dataIndex ++ ;
		lines.push({
            source: keyIndex,
            target: dataIndex,
            value :''
        });
	});
	categoryIdx++;
})

export default {
  name: "graphEcharts",
  props: {
    id: {
      type: String,
      default: "",
    },
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
            data :datas,
            links : lines,
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