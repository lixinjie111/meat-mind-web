<template>
  <div class="echarts-box" :id="id"></div>
</template>

<script>
export default {
  name: "treeEcharts1",
  props: {
    id: {
      type: String,
      default: "",
    },
    colorList:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  methods: {
    initEcharts() {
      let option = this.defaultOption();
      let myEchart = this.$echarts.init(document.getElementById(this.id));
      myEchart.setOption(option,true);
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    },
    defaultOption() {
      let option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove",
        },
        series: [
          {
            type: "tree",
            roam: false,
            layout: "orthogonal",
            orient: "LR",
            symbol: "circle",
            symbolSize: 14,
            left: 70,
            right: 80,
            label: {
              show: true,
              // offset: [10, 0],
              align: "left",
              color:"#97A0C3"
            },
            lineStyle:{
              color:"#EAEDF7",
              curveness:0.6
            },
            tooltip: {
              formatter: function (params) {
                return params.value.replace("/r/n", "<br />");
              },
            },
            data: [
              {
                name: "人民网",
                value: "发布消息《和其正在凉茶巨头夹缝中迷失，同仁堂与邓老遭多重考验》\n2021/1/21",
                itemStyle:{
                  color:this.colorList[0],
                  borderWidth:0,
                },
                label: {
                  offset: [-60, 1],
                },
                children: [
                {
                    name: "知乎",
                    value: "知乎上出现热问，该热问提及品牌负面新闻\n2021/1/22",
                    itemStyle:{
                      color:this.colorList[1],
                      borderWidth:0,
                    },
                    label: {
                      offset: [-30, -15],
                    },
                    children: [
                      {
                        name:
                          "搜狐号",
                        value: "转发了百度百家号的文章",
                        itemStyle:{
                          color:this.colorList[1],
                          borderWidth:0,
                        },
                        label: {
                          offset: [10, 0],
                        },
                      }
                    ],
                  },
                  {
                    name: "微博",
                    value: "安安科普转发消息\n2021/1/22",
                    itemStyle:{
                      color:this.colorList[2],
                      borderWidth:0,
                    },

                    label: {
                      offset: [-30, 15],
                    },
                    children: [
                      {
                        name:
                          "新浪微博",
                        value: "对于提问作出官方回应",
                        itemStyle:{
                          color:this.colorList[2],
                          borderWidth:0,
                        },
                        label: {
                          offset: [10, 0],
                        },
                      },
                      {
                        name: "网易自媒体",
                        value: "对于提问作出官方回应",
                        itemStyle:{
                          color:this.colorList[2],
                          borderWidth:0,
                        },
                        label: {
                          offset: [10, 0],
                        },
                      },
                    ],
                  },
                  {
                    name: "小红书",
                    value: "热门短视频提升了品牌讨论热度 \n 2021/1/23",
                    itemStyle:{
                      color:this.colorList[3],
                      borderWidth:0,
                    },
                    label: {
                      offset: [-30, 15],
                    },
                    children: [
                      {
                        name: "微信公众号",
                        value: "讨论了消费者吃各类美食时搭配的凉茶品牌",
                        itemStyle:{
                          color:this.colorList[3],
                          borderWidth:0,
                        },
                        label: {
                          offset: [10, 0],
                        },
                      },
                      {
                        name: "一点资讯",
                        value: "简要描述了该事件：百万级的点赞量及万余计的转发",
                        itemStyle:{
                          color:this.colorList[3],
                          borderWidth:0,
                        },
                        label: {
                          offset: [10, 0],
                        },
                      },
                      {
                        name:"企鹅号",
                        value:"讨论了消费者吃各类美食时搭配的凉茶品牌",
                        itemStyle:{
                          color:this.colorList[3],
                          borderWidth:0,
                        },
                        label: {
                          offset: [10, 0],
                        },
                      },
                      {
                        name:"头条号",
                        value: "简要描述了该事件：百万级的点赞量及万余计的转发",
                        itemStyle:{
                          color:this.colorList[3],
                          borderWidth:0,
                        },
                        label: {
                          offset: [10, 0],
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      };
      return option
    },
  },
  mounted(){
      this.initEcharts()
  }
};
</script>

<style scoped lang="scss">
.echarts-box{
    width: 100%;
    height:100%;
}
</style>