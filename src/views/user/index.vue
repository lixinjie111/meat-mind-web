<template>
  <div class="user-protrait">
    <!-- 用户画像 -->
    <Side></Side>
    <div class="container">
      <Header :target="'用户画像'"></Header>
      <div class="show-content">
        <div class="yhdx_container">
          <div class="top_title_container">
            <div class="left_text">
              <div class="left_title_text">用户动线</div>
              <div class="left_desc_text">分析品牌对应的不同用户群对应的在不同时间，不同场景，使用了哪些App/Web，以及详细的数据跟踪。</div>
            </div>
            <div class="right_btn">
              <img :src="manIcon" class="manIcon" />
              <span>自定义客群</span>
            </div>
          </div>

          <div class="echarts_container1">
            <div class="left_timer_container">
              <img :src="leftTimerImg" class="leftTimerImg" />
            </div>
            <div class="right_qipao_container">
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop1" @mouseleave="hidePop1">
                  <div class="top_t">
                    <div class="cer_icon"></div>
                    <div class="t_text">北京上班族</div>
                    <div class="edit_text">编辑</div>
                  </div>
                  <div class="cen_num">
                    <span>分群用户数：</span>
                    <span class="cen_num_txt">28790人</span>
                  </div>
                  <div class="tab_item">
                    <div class="home" style="background:rgba(138,230,199,0.2)">家</div>
                    <div class="ggjt" style="background:rgba(164,157,250,0.2)">公共交通</div>
                    <div class="gongsi" style="background:rgba(255,159,127,0.2)">公司</div>
                  </div>
                </div>
                <div class="bottom_echarts" id="btmEcharts1"></div>
                <div
                  class="model_pop"
                  v-if="ifShowPop1"
                  @mouseenter="showPop1"
                  @mouseleave="hidePop1"
                ></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop2" @mouseleave="hidePop2">
                  <div class="top_t">
                    <div class="cer_icon"></div>
                    <div class="t_text">企业高管</div>
                    <div class="edit_text">编辑</div>
                  </div>
                  <div class="cen_num">
                    <span>分群用户数：</span>
                    <span class="cen_num_txt">3204人</span>
                  </div>
                  <div class="tab_item">
                    <div class="home" style="background:rgba(77,148,255,0.2)">汽车</div>
                  </div>
                </div>
                <div class="bottom_echarts" id="btmEcharts2"></div>
                <div
                  class="model_pop"
                  v-if="ifShowPop2"
                  @mouseenter="showPop2"
                  @mouseleave="hidePop2"
                ></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop3" @mouseleave="hidePop3">
                  <div class="top_t">
                    <div class="cer_icon"></div>
                    <div class="t_text">北漂一族</div>
                    <div class="edit_text">编辑</div>
                  </div>
                  <div class="cen_num">
                    <span>分群用户数：</span>
                    <span class="cen_num_txt">18197人</span>
                  </div>
                  <div class="tab_item">
                    <div class="home" style="background:rgba(164,157,250,0.2)">公共交通</div>
                  </div>
                </div>
                <div class="bottom_echarts" id="btmEcharts3"></div>
                <div
                  class="model_pop"
                  v-if="ifShowPop3"
                  @mouseenter="showPop3"
                  @mouseleave="hidePop3"
                ></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop4" @mouseleave="hidePop4">
                  <div class="top_t">
                    <div class="cer_icon"></div>
                    <div class="t_text">研学青年</div>
                    <div class="edit_text">编辑</div>
                  </div>
                  <div class="cen_num">
                    <span>分群用户数：</span>
                    <span class="cen_num_txt">7930人</span>
                  </div>
                  <div class="tab_item">
                    <div class="home" style="background:rgba(255,159,127,0.2)">宿舍</div>
                    <div class="ggjt" style="background:rgba(164,157,250,0.2)">食堂</div>
                    <div class="gongsi" style="background:rgba(255,159,127,0.2)">公司</div>
                  </div>
                </div>
                <div class="bottom_echarts" id="btmEcharts4"></div>
                <div
                  class="model_pop"
                  v-if="ifShowPop4"
                  @mouseenter="showPop4"
                  @mouseleave="hidePop4"
                ></div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop5" @mouseleave="hidePop5">
                  <div class="top_t">
                    <div class="cer_icon" style="background: #FF8800;"></div>
                    <div class="t_text">自由职业</div>
                    <div class="edit_text">编辑</div>
                  </div>
                  <div class="cen_num">
                    <span>分群用户数：</span>
                    <span class="cen_num_txt">28970人</span>
                  </div>
                  <div class="tab_item">
                    <div class="home" style="background:rgba(138,230,199,0.2)">家</div>
                    <div class="ggjt" style="background:rgba(164,157,250,0.2)">公共交通</div>
                  </div>
                </div>
                <div class="bottom_echarts" id="btmEcharts5"></div>
                <div
                  class="model_pop"
                  v-if="ifShowPop5"
                  @mouseenter="showPop5"
                  @mouseleave="hidePop5"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Side from "../../components/Side";
import Header from "../../components/DefaultHeader";
export default {
  name: "index",
  data() {
    return {
      manIcon: require("../../assets/img/yhhx/man.png"),
      leftTimerImg: require("../../assets/img/yhhx/leftTimerImg.png"),
      ifShowPop1: false,
      ifShowPop2: false,
      ifShowPop3: false,
      ifShowPop4: false,
      ifShowPop5: false
    };
  },
  mounted() {
    this.initPopEcharts();
  },
  methods: {
    initPopEcharts() {
      var echartsData1 = [];
      var echartsData2 = [];
      var echartsData3 = [];
      var echartsData4 = [];
      var echartsData5 = [];
      var echartsId1 = "btmEcharts1";
      var echartsId2 = "btmEcharts2";
      var echartsId3 = "btmEcharts3";
      var echartsId4 = "btmEcharts4";
      var echartsId5 = "btmEcharts5";
      this.initEcharts1(echartsData1, echartsId1);
      this.initEcharts2(echartsData2, echartsId2);
      this.initEcharts3(echartsData3, echartsId3);
      this.initEcharts4(echartsData4, echartsId4);
      this.initEcharts5(echartsData5, echartsId5);
    },
    initEcharts1(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                x: 10,
                y: 10,
                symbolSize: 40,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#8AE6C7",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "#8AE6C7",
                    color: "#8AE6C7"
                  }
                }
              },
              {
                x: 10,
                y: 20,
                name: "娱乐APP",
                value: 6181,
                symbolSize: 120,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 40,
                symbolSize: 103,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(255,217,140,0.2)",
                    borderWidth: 0,
                    shadowBlur: 100,
                    shadowColor: "rgba(255,217,140,0.2)",
                    color: "rgba(255,217,140,0.2)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(255,159,127,0.7)",
                    borderWidth: 0,
                    shadowBlur: 100,
                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 58,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(77,148,255,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                name: "工作APP",
                value: 2244,
                symbolSize: 104,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(164,157,250,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts2(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                x: 10,
                y: 10,
                symbolSize: 50,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "#FF9F7F",
                    color: "#FF9F7F"
                  }
                }
              },
              {
                x: 10,
                y: 16,
                value: 6181,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 22,
                name: "新闻APP",
                value: 5055,
                symbolSize: 103,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(138,230,199,0.7)",
                    borderWidth: 0,
                    shadowBlur: 100,
                    shadowColor: "rgba(138,230,199,0.7)",
                    color: "rgba(138,230,199,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 31,
                name: "学术APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(183,200,234,0.7)",
                    borderWidth: 0,
                    shadowBlur: 100,
                    shadowColor: "rgba(183,200,234,0.7)",
                    color: "rgba(183,200,234,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 37,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(164,157,250,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 42,
                symbolSize: 29,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(252,128,159,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(252,128,159,0.7)",
                    color: "rgba(252,128,159,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 60,
                name: "工作APP",
                value: 2244,
                symbolSize: 102,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(164,157,250,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                symbolSize: 33,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(255,159,127,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts3(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                x: 10,
                y: 12,
                symbolSize: 40,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(138,230,199,0.7)",
                    color: "rgba(138,230,199,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 20,
                symbolSize: 80,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(252,128,159,0.7)",
                    color: "rgba(252,128,159,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 17,
                symbolSize: 38,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 27,
                name: "娱乐APP",
                value: 6181,
                symbolSize: 102,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 33,
                name: "外卖APP",
                value: 6181,
                symbolSize: 82,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(252,128,159,0.7)",
                    color: "rgba(252,128,159,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(255,159,127,0.7)",
                    borderWidth: 0,
                    shadowBlur: 100,
                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 58,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(77,148,255,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                name: "工作APP",
                value: 2244,
                symbolSize: 104,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(164,157,250,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts4(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                x: 10,
                y: 30,
                name: "视频APP",
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 37,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(255,159,127,0.7)",
                    borderWidth: 0,
                    shadowBlur: 100,
                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 52,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(77,148,255,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    initEcharts5(data, id) {
      var myChart = this.$echarts.init(document.getElementById(id));
      var option = {
        backgroundColor: "#fff",
        tooltip: {},
        animationDurationUpdate: function(idx) {
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "none",
            symbolSize: 50,
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                x: 10,
                y: 10,
                symbolSize: 40,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "#8AE6C7",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "#8AE6C7",
                    color: "#8AE6C7"
                  }
                }
              },
              {
                x: 10,
                y: 15,
                name: "娱乐APP",
                value: 6181,
                symbolSize: 90,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 22,
                name: "视频APP",
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    shadowBlur: 100,
                    shadowColor: "rgba(255,217,140,0.7)",
                    color: "rgba(255,217,140,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 50,
                name: "沟通APP",
                value: 4055,
                symbolSize: 88,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(255,159,127,0.7)",
                    borderWidth: 0,
                    shadowBlur: 100,
                    shadowColor: "rgba(255,159,127,0.7)",
                    color: "rgba(255,159,127,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 58,
                symbolSize: 30,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(77,148,255,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(77,148,255,0.7)",
                    color: "rgba(77,148,255,0.7)"
                  }
                }
              },
              {
                x: 10,
                y: 70,
                name: "工作APP",
                value: 2244,
                symbolSize: 104,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgba(164,157,250,0.7)",
                    shadowBlur: 100,
                    shadowColor: "rgba(164,157,250,0.7)",
                    color: "rgba(164,157,250,0.7)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    showPop1() {
      this.ifShowPop1 = true;
    },
    hidePop1() {
      this.ifShowPop1 = false;
    },
    showPop2() {
      this.ifShowPop2 = true;
    },
    hidePop2() {
      this.ifShowPop2 = false;
    },
    showPop3() {
      this.ifShowPop3 = true;
    },
    hidePop3() {
      this.ifShowPop3 = false;
    },
    showPop4() {
      this.ifShowPop4 = true;
    },
    hidePop4() {
      this.ifShowPop4 = false;
    },
    showPop5() {
      this.ifShowPop5 = true;
    },
    hidePop5() {
      this.ifShowPop5 = false;
    }
  },
  components: { Side, Header }
};
</script>

<style scoped lang="scss">
.user-protrait {
  display: flex;
  .container {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 240px);
    .show-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 80px);
      overflow-y: scroll;
      padding: 24px;
      .yhdx_container {
        width: 100%;
        background: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 4px;
        padding: 24px;
        box-sizing: border-box;
        .top_title_container {
          width: 100%;
          height: 51px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          .left_text {
            .left_title_text {
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 7px;
            }
            .left_desc_text {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #636e95;
            }
          }
          .right_btn {
            width: 128px;
            height: 48px;
            background: #f4f7fc;
            box-shadow: 4px 4px 8px 0px rgba(55, 84, 170, 0.16),
              -4px -4px 8px 0px #ffffff;
            border-radius: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
            .manIcon {
              display: block;
              width: 24px;
              height: 24px;
            }
          }
        }
        .echarts_container1 {
          width: 100%;
          height: 720px;
          display: flex;
          align-items: center;
          .left_timer_container {
            width: 140px;
            height: 100%;
            display: flex;
            align-items: center;
            .leftTimerImg {
              display: block;
              width: 95px;
              height: 703px;
            }
          }
          .right_qipao_container {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .echarts_item {
              width: 19%;
              height: 100%;
              display: flex;
              flex-direction: column;
              position: relative;
              .top_panel {
                width: 100%;
                min-height: 100px;
                border-radius: 8px;
                border: 1px solid #eaedf7;
                padding: 11px 12px;
                box-sizing: border-box;
                &:hover {
                  box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                }
                .top_t {
                  width: 100%;
                  padding-bottom: 10px;
                  box-sizing: border-box;
                  border-bottom: 1px solid #c6cbde;
                  display: flex;
                  align-items: center;
                  .cer_icon {
                    width: 12px;
                    height: 12px;
                    background: #2373ff;
                    border-radius: 50%;
                    margin-right: 5px;
                  }
                  .t_text {
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242f57;
                    margin-right: 144px;
                  }
                  .edit_text {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #2373ff;
                  }
                }
                .cen_num {
                  margin-top: 6px;
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636e95;
                  line-height: 17px;
                  .cen_num_txt {
                    color: #2373ff;
                  }
                }
                .tab_item {
                  display: flex;
                  align-items: center;
                  margin-top: 8px;
                  .home,
                  .ggjt,
                  .gongsi {
                    padding: 1px 16px;
                    box-sizing: border-box;
                    border-radius: 11px;
                    margin-right: 8px;
                  }
                }
              }
              .bottom_echarts {
                width: 100%;
                flex: 1;
              }
              .model_pop {
                position: absolute;
                top: 10px;
                left: 10px;
                width: 175px;
                height: 268px;
                background-color: deeppink;
              }
            }
          }
        }
      }
    }
  }
}
</style>