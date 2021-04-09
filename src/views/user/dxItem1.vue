<template>
  <div class="dx_Item_container">
    <div :class="['test_container1', { width: !onlyMap }]">
      <div class="mapContainer">
        <div class="area_timer_choice_container">
          <div class="choice_btn_area">
            <div
              class="choice_btn_top"
              :class="{ activeBtn: currentBtn == 1 }"
              @click="choiceat(1)"
            >
              位置区域
            </div>
            <div
              class="choice_btn_bom"
              :class="{ activeBtn: currentBtn == 2 }"
              @click="choiceat(2)"
            >
              研究时段
            </div>
          </div>
          <div class="choice_content_container">
            <div class="timer12" v-if="ifShowTime">
              <div class="timer12_top">
                <div class="timeitem">06:00</div>
                <div class="timeitem">08:00</div>
                <div class="timeitem">10:00</div>
                <div class="timeitem">12:00</div>
                <div class="timeitem">14:00</div>
                <div class="timeitem">16:00</div>
                <div class="timeitem">18:00</div>
                <div class="timeitem">20:00</div>
                <div class="timeitem">22:00</div>
                <div class="timeitem">24:00</div>
              </div>
              <div class="timer12_bom">
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '06:00' }"
                  @click="clickTime('06:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '08:00' }"
                  @click="clickTime('08:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '10:00' }"
                  @click="clickTime('10:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '12:00' }"
                  @click="clickTime('12:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '14:00' }"
                  @click="clickTime('14:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '16:00' }"
                  @click="clickTime('16:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '18:00' }"
                  @click="clickTime('18:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '20:00' }"
                  @click="clickTime('20:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '22:00' }"
                  @click="clickTime('22:00')"
                ></div>
                <div
                  class="cirle_dian"
                  :class="{ activeDian: current == '24:00' }"
                  @click="clickTime('24:00')"
                ></div>
              </div>
            </div>
            <div class="timer121" v-else>
              <div
                class="timer121_item"
                :class="{ activetimer: timerIdx == index }"
                v-for="(item, index) in districtList"
                :key="index"
                @click="clickTimeItem(index, item)"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="['conditions_container-box', { width: !onlyMap }]">
      <div
        :class="['conditions_container', { conditions_container_row: onlyMap }]"
      >
        <div class="conditions_lef">
          <div class="condition_label">条件筛选</div>
          <div
            class="condition_item"
            v-for="(itm, inx) in condiList"
            :key="inx"
          >
            <span>{{ itm }}</span>
          </div>
        </div>
        <div class="conditions_rig" @click="expandCond">更多筛选条件</div>
      </div>
    </div>

    <div class="condition_content" v-if="ifShowCon">
      <div class="condition_lef">
        <img :src="conditImg" alt="" srcset="" class="conditImg" />
      </div>
      <div class="condition_rig">
        <div class="con_item_container">
          <div class="con_item_label">年龄</div>
          <div class="con_item_con">
            <div
              class="con_item"
              ref="ninlinItem"
              v-for="(item, index) in nilinList"
              :key="index"
              @click="nianlinClick(index, 'ninlinItem')"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="con_item_container">
          <div class="con_item_label">性别</div>
          <div class="con_item_con">
            <div
              class="con_item"
              ref="xingbieItem"
              v-for="(item, index) in sexList"
              :key="index"
              @click="nianlinClick(index, 'xingbieItem')"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="con_item_container">
          <div class="con_item_label">有小孩</div>
          <div class="con_item_con">
            <div
              class="con_item"
              ref="hasChild"
              v-for="(item, index) in hasChildList"
              :key="index"
              @click="nianlinClick(index, 'hasChild')"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="con_item_container">
          <div class="con_item_label">消费水平</div>
          <div class="con_item_con">
            <div
              class="con_item"
              ref="xflevel"
              v-for="(item, index) in xiaofeiList"
              :key="index"
              @click="nianlinClick(index, 'xflevel')"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="con_item_container">
          <div class="con_item_label">婚姻</div>
          <div class="con_item_con">
            <div
              class="con_item"
              ref="huny"
              v-for="(item, index) in huyList"
              :key="index"
              @click="nianlinClick(index, 'huny')"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="con_item_container">
          <div class="con_item_label">职业</div>
          <div class="con_item_con">
            <div
              class="con_item"
              ref="jobdom"
              v-for="(item, index) in jobList"
              :key="index"
              @click="nianlinClick(index, 'jobdom')"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="con_item_container queding_container">
          <div class="quedingbtn" @click="submit">确定</div>
        </div>
      </div>
    </div>
    <div :class="['test_container', { row: onlyMap }]">
      <div class="mapContainer" id="mapContainer"></div>
      <div v-if="!onlyMap" class="per_info_container">
        <div class="person_til">用户触达策略</div>
        <div class="person_con_con" ref="person_con_con">
          <div class="perxon_tab_con">
            <div class="perxon_tab_con_lef" @click="clickPerTab(1)">
              用户动线分析
            </div>
            <div class="perxon_tab_con_rig" @click="clickPerTab(0)">
              投放方案推荐
            </div>
          </div>
          <div class="person_tffatj_con" v-if="ifShowtffatj">
            <div class="nl_card_container">
              <div class="til_label">
                用户状态
              </div>
              <div class="pro_container" v-for="(item,index) in rightPanelData.userStatObj" :key="index">
                <div class="pro_label">{{item.title}}</div>
                <div class="pro">
                  <Progress
                    :percent="Number(item.percentage)"
                    status="active"
                  ></Progress>
                </div>
              </div>
            </div>

            <div class="chufa_card_container">
              <div class="til_label">偏好媒介类型</div>
              <div class="bqitm_container">
                <div class="bqitm" v-for="(it, i) in rightPanelData.bqitmList" :key="i">
                  <div class="bqitm_lef">{{ it.name }}</div>
                  <div class="bqitm_rig">
                    <img
                      v-for="(item, index) in it.mediaIcons"
                      :src="item"
                      :key="index"
                      alt=""
                      class="bqimg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="chufa_card_container">
              <div class="til_label">出发地</div>
              <div class="chufadi_container">
                <div class="diItem" v-for="(item,index) in rightPanelData.chufaObj" :key="index">
                  <img :src="locaIcon" alt="" srcset="" class="addressIcon" />
                  <span class="addresstxt">{{
                    item
                  }}</span>
                </div>
              </div>
            </div>

            <div class="mudd_container">
              <div class="til_label">目的地</div>
              <div class="chufadi_container">
                <div class="diItem" v-for="(item,index) in rightPanelData.mudiObj" :key="index">
                  <img :src="locaIcon" srcset="" class="addressIcon" />
                  <span class="addresstxt">{{
                    item
                  }}</span>
                </div>
              </div>
            </div>

            <div class="tqfs_container">
              <div class="til_label">通勤方式</div>
              <div class="cx_type_container">
                <div
                  class="cx_item"
                  v-for="(item,index) in rightPanelData.tonqinTypeObj"
                  :key="index"
                >
                  <img
                    :src="item.url"
                    alt=""
                    srcset=""
                    class="cxlogo"
                  />
                  <span class="cxtxt">{{
                    item.title
                  }}</span>
                </div>
              </div>
            </div>

            <div class="tqsjylx_container">
              <div class="til_label">通勤时间与路程</div>
              <div class="haoshi_container">
                <img :src="tbIcon" alt="" srcset="" class="timeBiao" />
                <span style="margin-right: 16px">平均耗时</span>
                <span>{{ rightPanelData.tongqinTimeObj}}</span>
              </div>
            </div>

            <div class="nobgi_con">
              <div class="nl_card_container">
                <div class="til_label">年龄占比</div>
                <div class="pro_container" v-for="(item,index) in rightPanelData.agePercentage" :key="index">
                  <div class="pro_label">{{item.title}}</div>
                  <div class="pro">
                    <Progress :percent="Number(item.percentage)" status="active"></Progress>
                  </div>
                </div>
              </div>

              <div class="sex_card_container">
                <div class="til_label">性别占比</div>
                <div class="sex_tu_container">
                  <div class="man" :style="rightPanelData.manWidthobj"></div>
                  <div class="women" :style="rightPanelData.womenWidthobj"></div>
                </div>
                <div class="sex_per_container">
                  <div class="man_per">{{rightPanelData.sexPercentage[0].percentage?rightPanelData.sexPercentage[0].percentage+'%':''}}</div>
                  <div class="women_per">{{rightPanelData.sexPercentage[1].percentage?rightPanelData.sexPercentage[1].percentage+'%':''}}</div>
                </div>
                <div class="sex_per_container">
                  <div class="mansex">{{rightPanelData.sexPercentage[0].title}}</div>
                  <div class="womensex">{{rightPanelData.sexPercentage[1].title}}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="person_tffatj_con" v-else>
            <div class="top_img_con">
              <div class="top_img_con_lef" v-for="(item,index) in fanganObj.deliveryMedias" :key="index">
                <img :src="item.picture" class="douyIcon" />
                <div class="con_lef_label">{{ item.title }}</div>
                <div class="con_lef_num">{{ item.price }}</div>
                <div class="con_lef_label">触达率</div>
                <div class="con_lef_num1">{{ item.reachRate}}</div>
              </div>
            </div>
            <div class="tf_time">建议投放时间段</div>
            <div class="tf_time_txt1" v-for="(item,index) in fanganObj.deliveryMedias" :key="index">
              <div class="cir_txt_con">
                <div class="cir_con"></div>
                <div class="qu_dao_name">{{item.title}}</div>
              </div>
              <div class="tim_txt_con">{{item.deliveryTimeScope}}</div>
            </div>
            <div class="tf_time">预期效果</div>
            <div class="yqxg_con_con">
              <div
                class="yqxg_con_con_item"
                v-for="(itm, inx) in yqxgList"
                :key="inx"
              >
                <div class="yqxg_til">{{ itm.til }}</div>
                <div class="yqxg_num_desc">{{ itm.desc }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/utils/api";
export default {
  name: "dxItem",
  props: ["onlyMap", "parm"],
  data() {
    return {
      current: '08:00',
      AMap: null,
      switch1: true,
      yhdxImg: require("../../assets/img/yhhx/yhdxImg.png"),
      closeIcon: require("../../assets/img/yhhx/icon_close.png"),
      locaIcon: require("../../assets/img/yhhx/dwIcon.png"),
      dtIcon: require("../../assets/img/yhhx/dtIcon.png"),
      drIcon: require("../../assets/img/yhhx/drIcon.png"),
      tbIcon: require("../../assets/img/yhhx/tbIcon.png"),
      xhsIcon: require("../../assets/img/yhhx/xhs.png"),
      ksIcon: require("../../assets/img/yhhx/ks.png"),
      dyIcon: require("../../assets/img/yhhx/dyI.png"),
      wbIcon: require("../../assets/img/yhhx/wb.png"),
      ttIcon: require("../../assets/img/yhhx/tt.png"),
      wyIcon: require("../../assets/img/yhhx/wyIcon.png"),
      zhIcon: require("../../assets/img/yhhx/zhIcon.png"),
      districtList: [
        "朝阳区",
        "海淀区",
        "丰台区",
        "西城区",
        "东城区",
        "石景山区",
        "昌平区",
        "通州区",
        "顺义区",
        "房山区",
        "门头沟区",
        "大兴区",
        "怀柔区",
        "延庆区",
        "平谷区",
        "密云区",
      ],
      ifShowTime: true,
      timerIdx: 0,
      timeType: 8,
      currentBtn: 2,
      ifShowCon: false,
      conditImg: require("../../assets/img/yhhx/conditImg.png"),
      nilinList: ["18-24",'25-34', "35-44", "45+"],
      sexList: ["男", "女"],
      hasChildList: [
        "妈妈",
        "母婴",
        "二胎",
        "中学生家长",
        "0-3岁小孩父母",
        "3-6岁小孩父母",
        "孕期",
        "备孕",
        "小学生家长",
      ],
      xiaofeiList: ["高", "中", "低"],
      huyList: ["约会", "相亲", "已婚", "未婚"],
      jobList: [
        "网约车司机",
        "广告",
        "大学生",
        "医生",
        "金融",
        "IT",
        "程序员",
        "教师货车司机",
      ],
      rightPanelData: {},
      colorConfig: {
        新闻: "#017AFF",
        视频: "#5AC8FA",
        娱乐: "#FF9502",
        交流: "#a49dfa",
        出行: "#CECE7E",
        餐饮: "#8AE6C7",
      },
      ifShowtffatj: true,
      fanganObj: {},
      yqxgList: [
        {
          til: "触达用户：",
          desc: "28万",
        },
        {
          til: "互动量提升：",
          desc: "12%",
        },
        {
          til: "品牌印象提升：",
          desc: "7%",
        },
        {
          til: "销售转化率：",
          desc: "3%",
        },
      ],
      condiList: [],
      nlList: [],
      xingbieList: [],
      hasChList: [],
      xiaoFList: [],
      huyiList: [],
      zhYList: [],
      street:'朝阳区'
    };
  },
  mounted() {
    var propData = this.parm;
    var resParm = {
      id:propData.id,
      time:'08:00'
    };
    this.getMoveLineDetail(resParm,this.street);
  },
  methods: {
    async getMoveLineDetail(resParm,street) {
      try{
        let res = await api.getUserMoveLineDetail(resParm);
        if(res.code == 200){
          var detailData = res.data || [];
          if(detailData[0]){
            var moveLineObj = detailData[0].moveLineInfo || {};
            this.rightPanelData = {
              userStatObj: moveLineObj.userStatus || [{}],
              bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
              chufaObj:moveLineObj.departures || [], 
              mudiObj:moveLineObj.destination || [], 
              tonqinTypeObj:moveLineObj.travelTools || [{}],
              tongqinTimeObj:moveLineObj.journeyTime || '',
              agePercentage:moveLineObj.agePercentage || [],
              sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
              manWidthobj:{
                width:(Number(moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage[0].percentage : '1') -1) + '%'
              },
              womenWidthobj:{
                width:(Number(moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage[1].percentage :'1') -1) + '%'
              }
            }
            console.log(detailData[0].recommendDeliveryPlan,'投放方案！')
            this.fanganObj = detailData[0].recommendDeliveryPlan || {};
            this.yqxgList = [
              {
                til: "触达用户：",
                desc: this.fanganObj.reachUserCount,
              },
              {
                til: "互动量提升：",
                desc: this.fanganObj.interactionIncrease,
              },
              {
                til: "品牌印象提升：",
                desc: this.fanganObj.brandPromotion,
              },
              {
                til: "销售转化率：",
                desc: this.fanganObj.saleConversionRate,
              },
            ];
            setTimeout(()=>{
              this.clickPerTab(1);
              this.initMap(detailData,street);
            },500);
          }
        }else{
          this.$Message.error('获得用户分组动线详情失败！')
        }
      }catch(err){
        console.log('>>>>>',err)
      };
    },
    clickPerTab(arg) {
      var conDom = this.$refs.person_con_con;
      let actLef = require("../../assets/img/yhhx/actLef.png");
      let actrig = require("../../assets/img/yhhx/actRig.png");
      if(conDom){
        if (arg == 1) {
          conDom.style = `background-image: url(${actLef});background-size:contain;background-repeat:no-repeat;`;
        } else {
          conDom.style = `background-image: url(${actrig});background-size: cover;`;
        }
      }
      if (arg == 1) {
        this.ifShowtffatj = true;
      } else {
        this.ifShowtffatj = false;
      }
    },
    submit() {
      this.ifShowCon = false;
      var itemDom1 = this.$refs["ninlinItem"] || [];
      var itemDom2 = this.$refs["xingbieItem"] || [];
      var itemDom3 = this.$refs["hasChild"] || [];
      var itemDom4 = this.$refs["xflevel"] || [];
      var itemDom5 = this.$refs["huny"] || [];
      var itemDom6 = this.$refs["jobdom"] || [];

      for (var i = 0; i < itemDom1.length; i++) {
        if (itemDom1[i].style.background == "rgb(35, 115, 255)") {
          this.nlList.push(itemDom1[i].innerText);
        }
      }

      for (var i = 0; i < itemDom2.length; i++) {
        if (itemDom2[i].style.background == "rgb(35, 115, 255)") {
          this.xingbieList.push(itemDom2[i].innerText);
        }
      }

      for (var i = 0; i < itemDom3.length; i++) {
        if (itemDom3[i].style.background == "rgb(35, 115, 255)") {
          this.hasChList.push(itemDom3[i].innerText);
        }
      }

      for (var i = 0; i < itemDom4.length; i++) {
        if (itemDom4[i].style.background == "rgb(35, 115, 255)") {
          this.xiaoFList.push(itemDom4[i].innerText);
        }
      }

      for (var i = 0; i < itemDom5.length; i++) {
        if (itemDom5[i].style.background == "rgb(35, 115, 255)") {
          this.huyiList.push(itemDom5[i].innerText);
        }
      }

      for (var i = 0; i < itemDom6.length; i++) {
        if (itemDom6[i].style.background == "rgb(35, 115, 255)") {
          this.zhYList.push(itemDom6[i].innerText);
        }
      }
      this.condiList = this.nlList.concat(
        this.xingbieList,
        this.hasChList,
        this.xiaoFList,
        this.huyiList,
        this.zhYList
      );
      var propData = this.parm;
      var resParm = {
        id:propData.id,
        time:this.current,
        age:this.nlList[0],
        sex:this.xingbieList[0],
        childFlag:this.hasChList[0],
        consumptionLevel:this.xiaoFList[0],
        marriage:this.huyiList[0],
        career:this.zhYList[0]
      };
      this.getMoveLineDetail(resParm,this.street)
    },
    nianlinClick(arg, art) {
      var itemDom = this.$refs[art] || [];
      for (var i = 0; i < itemDom.length; i++) {
        if (i == arg) {
          itemDom[i].style = "background: #2373FF;color: #FFFFFF;";
        } else {
          //如果需要多选去掉else
          itemDom[i].style = "color: #636E95;background: none;";
        }
      }
    },
    expandCond() {
      this.ifShowCon = !this.ifShowCon;
      this.nlList = [];
      this.xingbieList = [];
      this.hasChList = [];
      this.xiaoFList = [];
      this.huyiList = [];
      this.zhYList = [];
      this.condiList = [];
    },
    clickTimeItem(arg, val) {
      this.timerIdx = arg;
      var propData = this.parm;
      var resParm = {
        id:propData.id,
        time:this.current,
        age:this.nlList[0],
        sex:this.xingbieList[0],
        childFlag:this.hasChList[0],
        consumptionLevel:this.xiaoFList[0],
        marriage:this.huyiList[0],
        career:this.zhYList[0]
      };
      this.street = val;
      this.getMoveLineDetail(resParm,this.street)
    },
    choiceat(arg) {
      this.currentBtn = arg;
      if (arg == 2) {
        this.ifShowTime = true;
      } else {
        this.ifShowTime = false;
        var propData = this.parm;
        var resParm = {
          id:propData.id,
          time:this.current,
          age:this.nlList[0],
          sex:this.xingbieList[0],
          childFlag:this.hasChList[0],
          consumptionLevel:this.xiaoFList[0],
          marriage:this.huyiList[0],
          career:this.zhYList[0]
        };
        this.getMoveLineDetail(resParm,this.street)
      }
    },
    clickTime(arg) {
      this.current = arg;
      var propData = this.parm;
      if (arg == '06:00' || arg == '08:00' || arg == '10:00' || arg == '12:00' || arg == '24:00') {
        var resParm = {
          id:propData.id,
          time:arg
        };
        this.getMoveLineDetail(resParm,this.street)
      } else if (arg == '12:00' || arg == '14:00' || arg == '16:00') {
        var resParm = {
          id:propData.id,
          time:arg
        };
        this.getMoveLineDetail(resParm,this.street)
      } else if (arg == '18:00' || arg == '20:00') {
        var resParm = {
          id:propData.id,
          time:arg
        };
        this.getMoveLineDetail(resParm,this.street)
      }
      // this.changeBqitm(arg);
    },
    initMap(pList,area) {
      var map = null;
      var district = null;
      var polygons = [];
      var pList1 = [];
      pList1 = pList;
      map = new AMap.Map("mapContainer", {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 11, //初始化地图层级
        center: [116.372883, 39.933949],
        mapStyle: "amap://styles/whitesmoke",
      });

      //加载行政区划插件,以及行政区域查询部分
      console.log(area,'areaareaarea')
      if (!district) {
        var opts = {
          subdistrict: 0, //获取边界不需要返回下级行政区
          extensions: "all", //返回行政区边界坐标组等具体信息
          level: "district", //查询行政级别为 市
        };
        district = new AMap.DistrictSearch(opts);
      }
      district.search(area, function (status, result) {
        map.remove(polygons); //清除上次结果
        polygons = [];
        var bounds = result.districtList[0].boundaries;
        if (bounds) {
          for (var i = 0, l = bounds.length; i < l; i++) {
            //生成行政区划polygon
            var polygon = new AMap.Polygon({
              strokeWeight: 1,
              path: bounds[i],
              fillOpacity: 0.4,
              fillColor: "#80d8ff",
              strokeColor: "#0091ea",
            });
            polygons.push(polygon);
          }
        }
        map.add(polygons);
        map.setFitView(polygons); //视口自适应
      });
      
      //地图动态路线部分
      const selectedOptions = {
        outlineColor: "#FF8800",
        strokeColor: "#FF8800",
      };
      const normalOptions = {
        outlineColor: "#ffeeff",
        strokeColor: "#3366FF",
      };
      var polyObj={};
      var that = this;
      for(var i=0;i<pList1.length;i++){
        var borderwiNum=0,strokeWeNum = 0;
        var polyline = 'polyline'+i;
        if(i==0){
          borderwiNum = 3;
          strokeWeNum = 6;
        }
        else if(i == 1 || i == 2){
          borderwiNum = 1;
          strokeWeNum = 4;
        }
        else{
          borderwiNum = 3;
          strokeWeNum = 4;
        }
        polyObj[polyline] = new AMap.Polyline({
          path:pList1[i].coordinate ? JSON.parse(pList1[i].coordinate) :[],
          isOutline: true,
          outlineColor: "#ffeeff",
          borderWeight:borderwiNum,
          strokeColor: "#3366FF",
          strokeOpacity: 1,
          strokeWeight: strokeWeNum,
          strokeStyle: "solid",
          strokeDasharray: [10, 5],
          lineJoin: "round",
          lineCap: "round",
          zIndex: 50,
        });        
        polyObj[polyline].setMap(map);
        var cirList = JSON.parse(pList1[i].locationCoordination);
        var radius = pList1[i].locationRadius ? pList1[i].locationRadius : 0; //半径
        console.log(cirList,'圆圈圆心！！')
        console.log(radius,'圆圈半径')
        if(cirList.length != 0){
          var circle = new AMap.Circle({
            center: pList1[i].locationCoordination ? JSON.parse(pList1[i].locationCoordination) : [],
            radius: radius,
            borderWeight: 3,
            strokeColor: "#FF33FF",
            strokeOpacity: 1,
            strokeWeight: 6,
            strokeOpacity: 0.2,
            fillOpacity: 0.4,
            strokeStyle: "dashed",
            strokeDasharray: [10, 10],
            // 线样式还支持 'dashed'
            fillColor: "#1791fc",
            zIndex: 50,
          });
          circle.setMap(map);
        }
      }
      polyObj['polyline0'].on("click", function (event) {
        for(var attr in polyObj){
          if(attr == 'polyline0'){
            polyObj['polyline0'].setOptions(selectedOptions);
            var detailData = pList1 || [];
            var moveLineObj = detailData[0].moveLineInfo || {};
            console.log(moveLineObj.userStatus,'线1用户状态')
            if(detailData[0]){
              that.rightPanelData = {
                userStatObj: moveLineObj.userStatus || [{}],
                bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
                chufaObj:moveLineObj.departures || [], 
                mudiObj:moveLineObj.destination || [], 
                tonqinTypeObj:moveLineObj.travelTools || [{}],
                tongqinTimeObj:moveLineObj.journeyTime || '',
                agePercentage:moveLineObj.agePercentage || [],
                sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
                manWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[0].percentage:'1') -1) + '%'
                },
                womenWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage[1].percentage : '1') -1) + '%'
                }
              }
              that.fanganObj = detailData[0].recommendDeliveryPlan || {};
              that.yqxgList = [
                {
                  til: "触达用户：",
                  desc: that.fanganObj.reachUserCount,
                },
                {
                  til: "互动量提升：",
                  desc: that.fanganObj.interactionIncrease,
                },
                {
                  til: "品牌印象提升：",
                  desc: that.fanganObj.brandPromotion,
                },
                {
                  til: "销售转化率：",
                  desc: that.fanganObj.saleConversionRate,
                },
              ];
            }
          }
          else{
            polyObj[attr].setOptions(normalOptions);
          }
        }
      });
      polyObj['polyline1'].on("click", function (event) {
        for(var attr in polyObj){
          if(attr == 'polyline1'){
            polyObj['polyline1'].setOptions(selectedOptions);
            var detailData = pList1 || [];
            var moveLineObj = detailData[1].moveLineInfo || {};
            console.log(moveLineObj.userStatus,'线2用户状态')
            if(detailData[1]){
              that.rightPanelData = {
                userStatObj: moveLineObj.userStatus || [{}],
                bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
                chufaObj:moveLineObj.departures || [], 
                mudiObj:moveLineObj.destination || [], 
                tonqinTypeObj:moveLineObj.travelTools || [{}],
                tongqinTimeObj:moveLineObj.journeyTime || '',
                agePercentage:moveLineObj.agePercentage || [],
                sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
                manWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[0].percentage:'1') -1) + '%'
                },
                womenWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[1].percentage:'1') -1) + '%'
                }
              }
              that.fanganObj = detailData[1].recommendDeliveryPlan || {};
              that.yqxgList = [
                {
                  til: "触达用户：",
                  desc: that.fanganObj.reachUserCount,
                },
                {
                  til: "互动量提升：",
                  desc: that.fanganObj.interactionIncrease,
                },
                {
                  til: "品牌印象提升：",
                  desc: that.fanganObj.brandPromotion,
                },
                {
                  til: "销售转化率：",
                  desc: that.fanganObj.saleConversionRate,
                },
              ];
            }
          }
          else{
            polyObj[attr].setOptions(normalOptions);
          }
        }
      });
      polyObj['polyline2'].on("click", function (event) {
        for(var attr in polyObj){
          if(attr == 'polyline2'){
            polyObj['polyline2'].setOptions(selectedOptions);
            var detailData = pList1 || [];
            var moveLineObj = detailData[2].moveLineInfo || {};
            console.log(moveLineObj.userStatus,'线3用户状态')
            if(detailData[2]){
              that.rightPanelData = {
                userStatObj: moveLineObj.userStatus || [{}],
                bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
                chufaObj:moveLineObj.departures || [], 
                mudiObj:moveLineObj.destination || [], 
                tonqinTypeObj:moveLineObj.travelTools || [{}],
                tongqinTimeObj:moveLineObj.journeyTime || '',
                agePercentage:moveLineObj.agePercentage || [],
                sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
                manWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[0].percentage:'1')-1) + '%'
                },
                womenWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[1].percentage:'1') -1) + '%'
                }
              }
              that.fanganObj = detailData[2].recommendDeliveryPlan || {};
              that.yqxgList = [
                {
                  til: "触达用户：",
                  desc: that.fanganObj.reachUserCount,
                },
                {
                  til: "互动量提升：",
                  desc: that.fanganObj.interactionIncrease,
                },
                {
                  til: "品牌印象提升：",
                  desc: that.fanganObj.brandPromotion,
                },
                {
                  til: "销售转化率：",
                  desc: that.fanganObj.saleConversionRate,
                },
              ];
            }
          }
          else{
            polyObj[attr].setOptions(normalOptions);
          }
        }
      });
      polyObj['polyline3'].on("click", function (event) {
        for(var attr in polyObj){
          if(attr == 'polyline3'){
            polyObj['polyline3'].setOptions(selectedOptions);
            var detailData = pList1 || [];
            var moveLineObj = detailData[3].moveLineInfo || {};
            console.log(moveLineObj.userStatus,'线4用户状态')
            if(detailData[3]){
              that.rightPanelData = {
                userStatObj: moveLineObj.userStatus || [{}],
                bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
                chufaObj:moveLineObj.departures || [], 
                mudiObj:moveLineObj.destination || [], 
                tonqinTypeObj:moveLineObj.travelTools || [{}],
                tongqinTimeObj:moveLineObj.journeyTime || '',
                agePercentage:moveLineObj.agePercentage || [],
                sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
                manWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[0].percentage:'1') -1) + '%'
                },
                womenWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[1].percentage:'1') -1) + '%'
                }
              }
              that.fanganObj = detailData[3].recommendDeliveryPlan || {};
              that.yqxgList = [
                {
                  til: "触达用户：",
                  desc: that.fanganObj.reachUserCount,
                },
                {
                  til: "互动量提升：",
                  desc: that.fanganObj.interactionIncrease,
                },
                {
                  til: "品牌印象提升：",
                  desc: that.fanganObj.brandPromotion,
                },
                {
                  til: "销售转化率：",
                  desc: that.fanganObj.saleConversionRate,
                },
              ];
            }
          }
          else{
            polyObj[attr].setOptions(normalOptions);
          }
        }
      });
      polyObj['polyline4'].on("click", function (event) {
        for(var attr in polyObj){
          if(attr == 'polyline4'){
            polyObj['polyline4'].setOptions(selectedOptions);
            var detailData = pList1 || [];
            var moveLineObj = detailData[4].moveLineInfo || {};
            console.log(moveLineObj.userStatus,'线5用户状态')
            if(detailData[4]){
              that.rightPanelData = {
                userStatObj: moveLineObj.userStatus || [{}],
                bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
                chufaObj:moveLineObj.departures || [], 
                mudiObj:moveLineObj.destination || [], 
                tonqinTypeObj:moveLineObj.travelTools || [{}],
                tongqinTimeObj:moveLineObj.journeyTime || '',
                agePercentage:moveLineObj.agePercentage || [],
                sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
                manWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[0].percentage:'1') -1) + '%'
                },
                womenWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[1].percentage:'1') -1) + '%'
                }
              }
              that.fanganObj = detailData[4].recommendDeliveryPlan || {};
              that.yqxgList = [
                {
                  til: "触达用户：",
                  desc: that.fanganObj.reachUserCount,
                },
                {
                  til: "互动量提升：",
                  desc: that.fanganObj.interactionIncrease,
                },
                {
                  til: "品牌印象提升：",
                  desc: that.fanganObj.brandPromotion,
                },
                {
                  til: "销售转化率：",
                  desc: that.fanganObj.saleConversionRate,
                },
              ];
            }
          }
          else{
            polyObj[attr].setOptions(normalOptions);
          }
        }
      });
      polyObj['polyline5'].on("click", function (event) {
        for(var attr in polyObj){
          if(attr == 'polyline5'){
            polyObj['polyline5'].setOptions(selectedOptions);
            var detailData = pList1 || [];
            var moveLineObj = detailData[5].moveLineInfo || {};
            console.log(moveLineObj.userStatus,'线6用户状态')
            if(detailData[5]){
              that.rightPanelData = {
                userStatObj: moveLineObj.userStatus || [{}],
                bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
                chufaObj:moveLineObj.departures || [], 
                mudiObj:moveLineObj.destination || [], 
                tonqinTypeObj:moveLineObj.travelTools || [{}],
                tongqinTimeObj:moveLineObj.journeyTime || '',
                agePercentage:moveLineObj.agePercentage || [],
                sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
                manWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[0].percentage:'1') -1) + '%'
                },
                womenWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[1].percentage:'1') -1) + '%'
                }
              }
              that.fanganObj = detailData[5].recommendDeliveryPlan || {};
              that.yqxgList = [
                {
                  til: "触达用户：",
                  desc: that.fanganObj.reachUserCount,
                },
                {
                  til: "互动量提升：",
                  desc: that.fanganObj.interactionIncrease,
                },
                {
                  til: "品牌印象提升：",
                  desc: that.fanganObj.brandPromotion,
                },
                {
                  til: "销售转化率：",
                  desc: that.fanganObj.saleConversionRate,
                },
              ];
            }
          }
          else{
            polyObj[attr].setOptions(normalOptions);
          }
        }
      });
      polyObj['polyline6'].on("click", function (event) {
        for(var attr in polyObj){
          if(attr == 'polyline6'){
            polyObj['polyline6'].setOptions(selectedOptions);
            var detailData = pList1 || [];
            var moveLineObj = detailData[6].moveLineInfo || {};
            console.log(moveLineObj.userStatus,'线7用户状态')
            if(detailData[6]){
              that.rightPanelData = {
                userStatObj: moveLineObj.userStatus || [{}],
                bqitmList:moveLineObj.mediaTypes || [{name:'',mediaIcons:[{}]}],
                chufaObj:moveLineObj.departures || [], 
                mudiObj:moveLineObj.destination || [], 
                tonqinTypeObj:moveLineObj.travelTools || [{}],
                tongqinTimeObj:moveLineObj.journeyTime || '',
                agePercentage:moveLineObj.agePercentage || [],
                sexPercentage:moveLineObj.sexPercentage.length !=0 ? moveLineObj.sexPercentage : [{},{}],
                manWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[0].percentage:'1') -1) + '%'
                },
                womenWidthobj:{
                  width:(Number(moveLineObj.sexPercentage.length !=0?moveLineObj.sexPercentage[1].percentage:'1') -1) + '%'
                }
              }
              that.fanganObj = detailData[6].recommendDeliveryPlan || {};
              that.yqxgList = [
                {
                  til: "触达用户：",
                  desc: that.fanganObj.reachUserCount,
                },
                {
                  til: "互动量提升：",
                  desc: that.fanganObj.interactionIncrease,
                },
                {
                  til: "品牌印象提升：",
                  desc: that.fanganObj.brandPromotion,
                },
                {
                  til: "销售转化率：",
                  desc: that.fanganObj.saleConversionRate,
                },
              ];
            }
          }
          else{
            polyObj[attr].setOptions(normalOptions);
          }
        }
      });
      for(var i=0;i<pList1.length;i++){
        var cirList = JSON.parse(pList1[i].locationCoordination);
        var radius = pList1[i].locationRadius ? pList1[i].locationRadius : 0; 
        console.log(cirList,'圆圈圆心！！')
        console.log(radius,'圆圈半径')
        if(cirList.length != 0){
          var circle = new AMap.Circle({
            center: pList1[i].locationCoordination ? JSON.parse(pList1[i].locationCoordination) : [],
            radius: radius,
            borderWeight: 3,
            strokeColor: "#FF33FF",
            strokeOpacity: 1,
            strokeWeight: 6,
            strokeOpacity: 0.2,
            fillOpacity: 0.4,
            strokeStyle: "dashed",
            strokeDasharray: [10, 10],
            // 线样式还支持 'dashed'
            fillColor: "#1791fc",
            zIndex: 50,
          });
          circle.setMap(map);
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.dx_Item_container {
  width: 100%;
  position: relative;
  margin-top: -16px;
  .test_container1.width {
    width: 806px;
  }
  .test_container1 {
    height: 80px;
    display: flex;
    align-items: center;
    // margin-bottom: -119px;
    margin-top: 19px;
    position: absolute;
    /*margin-left: 20px;*/
    right: 20px;
    left: 20px;
    .mapContainer {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      .area_timer_choice_container {
        width: 100%;
        height: 66px;
        display: flex;
        align-items: center;
        background: #ffffff;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border: 1px solid #eaedf7;
        z-index: 999;
        .choice_btn_area {
          width: 88px;
          height: 100%;
          border-right: 1px solid #eaedf7;
          .choice_btn_top,
          .choice_btn_bom {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242f57;
            &:hover {
              cursor: pointer;
            }
          }
          .choice_btn_top {
            padding-top: 10px;
          }
          .activeBtn {
            color: #2373ff;
          }
        }
        .choice_content_container {
          flex: 1;
          height: 100%;
          .timer12 {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
            box-sizing: border-box;
            .timer12_top {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .timer12_bom {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              background-color: #f4f7fc;
              margin-top: 4px;
              border-radius: 10px;
              .cirle_dian {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #c6cbde;
                &:hover {
                  cursor: pointer;
                }
              }
              .activeDian {
                background-color: #2373ff;
                box-shadow: 0px 2px 4px 0px #c6cbde;
                border: 2px solid #ffffff;
              }
            }
          }
          .timer121 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            padding: 6px 16px;
            box-sizing: border-box;
            .timer121_item {
              width: 62px;
              height: 20px;
              background: #ffffff;
              border-radius: 4px;
              border: 1px solid #eaedf7;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 12px;
              cursor: pointer;
            }
            .activetimer {
              border: 1px solid #2373ff;
              color: #2373ff;
            }
          }
        }
      }
    }
    .per_info_container {
      width: 310px;
      height: 100%;
    }
  }
  .conditions_container-box.width {
    width: 806px;
  }
  .conditions_container-box {
    position: absolute;
    z-index: 999;
    top: 84px;
    display: flex;
    left: 20px;
    right: 20px;
  }
  .conditions_container {
    flex: 1;
    height: 48px;
    background: #f4f7fc;
    border-radius: 0px 0px 4px 4px;
    padding: 15px 6px;
    padding-right: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .conditions_lef {
      height: 100%;
      display: flex;
      align-items: center;
      .condition_label,
      .condition_item {
        width: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
      }
      .condition_label {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242f57;
      }
      .condition_item {
        width: 91px;
        height: 24px;
        background: #d3e3ff;
        border-radius: 4px;
        border: 1px solid #eaedf7;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #2373ff;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .conditions_rig {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #2373ff;
    }
    .conditions_rig:hover {
      cursor: pointer;
    }
  }
  .condition_content {
    position: absolute;
    left: 1.9%;
    top: 132px;
    width: 806px;
    z-index: 1000;
    height: 557px;
    background: #fff;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #eaedf7;
    display: flex;
    align-items: center;
    .condition_lef {
      width: 186px;
      .conditImg {
        display: block;
        width: 100%;
      }
    }
    .condition_rig {
      flex: 1;
      height: 100%;
      padding: 55px 22px;
      box-sizing: border-box;
      .con_item_container {
        width: 100%;
        display: flex;
        align-items: flex-start;
        margin-bottom: 8px;
        .con_item_label {
          width: 106px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242f57;
        }
        .con_item_con {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          .con_item {
            padding: 2px 9px;
            margin-bottom: 16px;
            border-radius: 8px;
            margin-right: 43px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            background-color: none;
          }
          .con_item:hover {
            cursor: pointer;
          }
        }
      }
      .queding_container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        .quedingbtn {
          padding: 4px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          background: rgb(35, 115, 255);
          color: rgb(255, 255, 255);
        }
        .quedingbtn:hover {
          cursor: pointer;
        }
      }
    }
  }
  .mianban_container {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-63%, -50%);
    width: 200px;
    height: 300px;
    z-index: 999;
    .quyResult {
      display: block;
      width: 100%;
    }
  }
  .test_container {
    /*margin-top: 20px;*/
    width: 100%;
    height: 600px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    position: relative;
    .mapContainer {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      .timer12 {
        width: 95%;
        height: 80px;
        margin-top: 15px;
        background-color: yellowgreen;
        z-index: 999;
        padding: 10px;
        box-sizing: border-box;
        .timer12_top {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .timeitem {
          }
        }
        .timer12_bom {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #c6cbde;
          margin-top: 4px;
          border-radius: 10px;
          .cirle_dian {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #a49dfa;
          }
          .activeDian {
            background-color: brown;
          }
        }
      }
    }
    .per_info_container {
      width: 300px;
      height: 100%;
      padding: 17px 16px;
      box-sizing: border-box;
      background: #eaedf7;
      overflow-y: scroll;

      .person_til {
        width: 100%;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
        margin-bottom: 15px;
      }
      .person_con_con {
        width: 100%;
        .perxon_tab_con {
          display: flex;
          .perxon_tab_con_lef,
          .perxon_tab_con_rig {
            width: 50%;
            height: 40px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              cursor: pointer;
            }
          }
        }
        .person_tffatj_con {
          width: 100%;
          border-radius: 0px 12px 12px 12px;
          padding-bottom: 17px;
          box-sizing: border-box;
          .top_img_con {
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .top_img_con_lef,
            .top_img_con_rig {
              width: 48%;
              margin-top: 30px;
              display: flex;
              flex-direction: column;
              align-items: center;
              background: rgba(235, 236, 240, 0.4);
              border-radius: 8px;
              .douyIcon {
                display: block;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-top: -16px;
                margin-bottom: 4px;
              }
              .con_lef_label {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636e95;
              }
              .con_lef_num {
                font-size: 18px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #242f57;
                margin-bottom: 14px;
              }
              .con_lef_num1 {
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;
                margin-bottom: 15px;
              }
            }
          }
          .tf_time {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242f57;
          }
          .tfmjchoice_con {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .meijie_item {
              display: flex;
              align-items: center;
              width: 49%;
              padding: 10px 7px;
              box-sizing: border-box;
              border-radius: 4px;
              border: 1px solid #d3e3ff;
              margin-bottom: 9px;
              .srcIMG {
                margin-left: 7px;
                display: block;
                width: 24px;
                height: 24px;
                margin-right: 3px;
              }
              .qudtil {
                font-size: 12px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;
              }
            }
            .actBor {
              border: 1px solid #2373ff;
            }
          }
          .tfys_input_con {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
            margin-bottom: 13px;
            display: flex;
            align-items: center;
            position: relative;
            ::v-deep
              .ivu-poptip
              .ivu-poptip-rel
              .ivu-input-type-text
              .ivu-input-default {
              padding-left: 30px !important;
            }
            .cmon {
              position: absolute;
              color: #97a0c3;
              left: 25px;
              z-index: 999;
            }
            .zhi {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #97a0c3;
              margin-left: 6px;
            }
          }
          .tf_time_txt1,
          .tf_time_txt2 {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242f57;
            .cir_txt_con {
              display: flex;
              align-items: center;
              .cir_con {
                width: 8px;
                height: 8px;
                background: #2373ff;
                border-radius: 50%;
                margin-right: 7px;
              }
            }
          }
          .radio_txt_con {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 16px;
            box-sizing: border-box;
            margin-bottom: 7px;
            .radio_cir {
              display: block;
              width: 8px;
              height: 8px;
              background: #2373ff;
              border-radius: 50%;
              margin-right: 7px;
            }
            .radio_txt {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242f57;
            }
          }
          .yqxg_con_con {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0px 16px;
            box-sizing: border-box;
            .yqxg_con_con_item {
              width: 48%;
              margin-bottom: 8px;
              background: #f0f8ff;
              border-radius: 4px;
              padding: 7px 10px;
              box-sizing: border-box;
              .yqxg_til {
                width: 100%;
                font-size: 11px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636e95;
              }
              .yqxg_num_desc {
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #2373ff;
              }
              .yqxg_num_desc1 {
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #2373ff;
              }
            }
          }
          // .yhdx_title{
          //     width: 100%;
          //     height: 72px;
          //     border-radius: 8px;
          //     display: flex;
          //     flex-direction: column;
          //     align-items: flex-start;
          //     justify-content: center;
          //     padding-left: 16px;
          //     box-sizing: border-box;
          //     background-image: url("../../assets/img/yhhx/river.png");
          //     background-size: cover;
          //     .yhdx_title_top{
          //         width: 100%;
          //         font-size: 18px;
          //         font-family: PingFangSC-Medium, PingFang SC;
          //         font-weight: 500;
          //         color: #FFFFFF;
          //     }
          //     .yhdx_title_bom{
          //         width: 100%;
          //         font-size: 12px;
          //         font-family: PingFangSC-Regular, PingFang SC;
          //         font-weight: 400;
          //         color: #FFFFFF;
          //     }
          // }
          .switch_container {
            width: 100%;
            padding: 12px 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #fdfdfd;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
          }
          .nl_card_container {
            width: 100%;
            padding: 12px 14px;
            box-sizing: border-box;
            margin-bottom: 8px;
            .til_label {
              width: 100%;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 10px;
            }
            .pro_container {
              width: 100%;
              margin-bottom: 8px;
              display: flex;
              align-items: center;
              .pro_label {
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
                margin-right: 12px;
              }
              .pro {
                flex: 1;
              }
            }
          }
          .chufa_card_container {
            width: 100%;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            border: 1px solid #ffffff;
            padding: 12px 14px;
            padding-top: 0px;
            box-sizing: border-box;
            .til_label {
              width: 100%;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 10px;
            }
            .bqitm_container {
              display: flex;
              flex-direction: column;
              align-items: center;
              .bqitm {
                width: 100%;
                background: #ffffff;
                border-radius: 8px;
                margin-right: 16px;
                padding: 16px;
                padding: 0 16px 14px 10px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .bqitm_lef {
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #7c88b1;
                }
                .bqitm_rig {
                  display: flex;
                  .bqimg {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    margin-right: 6px;
                  }
                }
              }
            }
            .chufadi_container {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 8px;
              .diItem {
                width: 32%;
                height: 24px;
                display: flex;
                align-items: center;
                padding: 2px 7px;
                box-sizing: border-box;
                background: #f4f7fc;
                border-radius: 4px;
                .addressIcon {
                  display: block;
                  width: 11px;
                  margin-right: 6px;
                }
                .addresstxt {
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242f57;
                }
              }
            }
          }
          .mudd_container {
            width: 100%;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            border: 1px solid #ffffff;
            padding: 12px 14px;
            box-sizing: border-box;
            margin-bottom: 8px;
            .til_label {
              width: 100%;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 10px;
            }
            .chufadi_container {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 8px;
              .diItem {
                width: 32%;
                height: 24px;
                display: flex;
                align-items: center;
                padding: 2px 7px;
                box-sizing: border-box;
                background: #f4f7fc;
                border-radius: 4px;
                .addressIcon {
                  display: block;
                  width: 11px;
                  margin-right: 6px;
                }
                .addresstxt {
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242f57;
                }
              }
            }
          }
          .tqfs_container {
            width: 100%;
            background: #fff;
            padding: 12px 14px;
            box-sizing: border-box;
            .til_label {
              width: 100%;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 10px;
            }
            .cx_type_container {
              width: 100%;
              margin-top: 16px;
              display: flex;
              align-items: center;
              .cx_item {
                display: flex;
                align-items: center;
                margin-right: 25px;
                .cxlogo {
                  display: block;
                  width: 16px;
                  margin-right: 4px;
                }
                .cxtxt {
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242f57;
                }
              }
            }
          }
          .tqsjylx_container {
            width: 100%;
            background: #fff;
            border: 1px solid #ffffff;
            padding: 12px 14px;
            box-sizing: border-box;
            .til_label {
              width: 100%;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 10px;
            }
            .haoshi_container {
              margin-top: 17px;
              width: 100%;
              display: flex;
              align-items: center;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242f57;
              .timeBiao {
                display: block;
                width: 16px;
                height: 16px;
                margin-right: 4px;
              }
            }
          }
          .nobgi_con {
            width: 100%;
            background: white;
            .sex_card_container {
              width: 100%;
              padding: 12px 14px;
              box-sizing: border-box;
              margin-bottom: 8px;
              .til_label {
                width: 100%;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;
                margin-bottom: 10px;
              }
              .sex_tu_container {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 4px;
                .man {
                  width: 64%;
                  height: 16px;
                  background: #2373ff;
                  border-radius: 2px;
                }
                .women {
                  width: 34%;
                  height: 16px;
                  background: #fe763d;
                  border-radius: 2px;
                }
              }
              .sex_per_container {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 18px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                .man_per {
                  color: #2373ff;
                }
                .women_per {
                  color: #fe763d;
                }
                .mansex,
                .womensex {
                  font-size: 12px;
                  font-weight: 400;
                  color: #97a0c3;
                }
              }
            }
          }
        }
      }
    }
    .yhxw_container {
      position: absolute;
      width: 700px;
      height: 139px;
      background-image: url(/img/bgImg.a22ae601.png);
      bottom: -1px;
      left: 35px;
      background-size: cover;
      z-index: 999;
      .yhxw_title {
        position: absolute;
        top: 18px;
        left: 25px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #636e95;
      }
      .bqitm_container {
        position: absolute;
        top: 55px;
        left: 25px;
        min-width: 400px;
        height: 60px;
        display: flex;
        align-items: center;
        .bqitm {
          width: 165px;
          height: 100%;
          background: #ffffff;
          border-radius: 8px;
          margin-right: 16px;
          padding: 16px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .bqitm_lef {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #ff9502;
          }
          .bqitm_rig {
            display: flex;
            .bqimg {
              width: 24px;
              height: 24px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
  .test_container.row {
    height: 442px;
  }
}
</style>
