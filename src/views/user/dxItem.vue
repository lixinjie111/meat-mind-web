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
        <div class="condition_total_con">
          <div class="condition_label">条件筛选</div>
          <div class="conditions_lef">
            <div
              class="condition_item"
              v-for="(itm, inx) in condiList"
              :key="inx"
            >
              <span>{{ itm }}</span>
            </div>
          </div>
        </div>
        <div class="conditions_rig" @click="expandCond">更多筛选条件</div>
      </div>
    </div>

    <div class="condition_content" v-if="ifShowCon">
      <div class="target-left">
        <div class="l-item">
          <div class="l-item-label">常用标签</div>
          <div class="item-list" v-for="(item, index) in target" :key="index">
            <div class="item-con">
              <div
                class="name"
                :class="{ act: item == cur }"
                @click="cur = item"
              >
                {{ item }}
              </div>
              <i class="iconfont iconleft-arrow21"></i>
            </div>
          </div>
        </div>
        <div class="l-item">
          <div class="l-item-label">属性维度</div>
          <div class="item-list" v-for="(item, index) in property" :key="index">
            <div class="item-con">
              <div
                class="name"
                :class="{ act: item == cur }"
                @click="cur = item"
              >
                {{ item }}
              </div>
              <i class="iconfont iconleft-arrow21"></i>
            </div>
          </div>
        </div>
        <div class="l-item">
          <div class="l-item-label">用户行为</div>
          <div class="item-list" v-for="(item, index) in behavior" :key="index">
            <div class="item-con">
              <div
                class="name"
                :class="{ act: item == cur }"
                @click="cur = item"
              >
                {{ item }}
              </div>
              <i class="iconfont iconleft-arrow21"></i>
            </div>
          </div>
        </div>
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
          <div class="con_item_label">亲子</div>
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
          <button class="btn-primary-small" @click="submit">确定</button>
        </div>
      </div>
    </div>
    <div class="mianban_container" v-if="ifShowMb" @mouseout="hideMe">
      <img :src="quyResult" alt="" srcset="" class="quyResult" />
    </div>
    <div :class="['test_container', { row: onlyMap }]">
      <div class="mapContainer" id="mapContainer"></div>
      <div v-if="!onlyMap" class="per_info_container">
        <div class="person_til">用户触达策略</div>
        <div class="person_con_con" ref="person_con_con">
          <div class="perxon_tab_con">
            <div class="perxon_tab_con_lef" @click="clickPerTab(1)">
              投放方案推荐
            </div>
            <div class="perxon_tab_con_rig" @click="clickPerTab(0)">
              自定义媒介投放
            </div>
          </div>
          <div class="person_tffatj_con" v-if="ifShowtffatj">
            <div class="top_img_con">
              <div
                class="top_img_con_lef"
                v-for="(item, index) in fanganObj.deliveryMedias"
                :key="index"
              >
                <img :src="item.picture" class="douyIcon" />
                <div class="con_lef_label">{{ item.title }}</div>
                <div class="con_lef_num">{{ item.price }}</div>
                <div class="con_lef_label">触达率</div>
                <div class="con_lef_num1">{{ item.reachRate }}</div>
              </div>
            </div>
            <div class="tf_time">建议投放时间段</div>
            <div
              class="tf_time_txt1"
              v-for="(item, index) in fanganObj.deliveryMedias"
              :key="index"
            >
              <div class="cir_txt_con">
                <div class="cir_con"></div>
                <div class="qu_dao_name">{{ item.title }}</div>
              </div>
              <div class="tim_txt_con">{{ item.deliveryTimeScope }}</div>
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
          <div class="person_tffatj_con" v-else>
            <div class="tf_time">投放预算 (元)</div>
            <div class="tfys_input_con">
              <i :class="['iconfont', 'iconjine']" class="cmon"></i>
              <Input
                v-model="tfys"
                placeholder="请输入价格"
                class="input_con"
                :maxlength="9"
                type="number"
                @on-blur="formitInput"
              />
              <span class="zhi">至</span>
            </div>
            <div class="tfys_input_con">
              <i :class="['iconfont', 'iconjine']" class="cmon"></i>
              <Input
                v-model="tfys1"
                placeholder="请输入价格"
                class="input_con"
                :maxlength="9"
                type="number"
                @on-blur="formitInput1"
              />
            </div>
            <div class="tf_time">选择投放媒介</div>
            <div class="tfmjchoice_con">
              <div
                class="meijie_item"
                :class="{ actBor: itm.selectFlag }"
                v-for="(itm, inx) in meijieList"
                :key="inx"
              >
                <Checkbox
                  v-model="itm.selectFlag"
                  @on-change="changeNews(itm)"
                ></Checkbox>
                <img :src="itm.picture" class="srcIMG" />
                <div class="qudtil" :title="itm.name">{{ itm.name }}</div>
              </div>
            </div>
            <div class="tf_time tfjy1">投放建议</div>
            <div class="touf_pie">
              <div class="touf_pie_con">
                <div class="touf_pie_til">投放金额</div>
                <div class="touf_pie_con_con">
                  <PieEcharts1
                    :colorList="$fjData.colorList"
                    :myData="chuData"
                  ></PieEcharts1>
                </div>
              </div>
            </div>
            <div class="tfjyq_con">
              <div class="yqxg_con_con yqxg_con_con1">
                <div class="yqxg_con_con2">
                  <div class="yqxg_con_con1_tilm">投放时间</div>
                  <div
                    class="yqxg_con_con1_con"
                    v-for="(item, index) in rangetList"
                    :key="index"
                  >
                    <div class="time_rang">{{ item.time }}</div>
                    <div class="meij_name">{{ item.name }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tfjyq_con">
              <div class="yqxg_con_con">
                <div
                  class="yqxg_con_con_item"
                  v-for="(itm, inx) in yqxgList1"
                  :key="inx"
                >
                  <div class="yqxg_til">{{ itm.til }}</div>
                  <div class="yqxg_num_desc yqxg_num_desc1">{{ itm.desc }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="yhxw_container">
        <div class="tab_item">
          <div class="tab_item_item mbitem1" @click="changMbItem(0)">
            基础画像
          </div>
          <div class="tab_item_item mbitem2" @click="changMbItem(1)">
            行为分析
          </div>
          <div class="tab_item_item mbitem3" @click="changMbItem(2)">
            心智分析
          </div>
          <div class="tab_item_item mbitem4" @click="changMbItem(3)">
            生命周期分析
          </div>
        </div>
        <div class="tab_con" ref="tab_con">
          <div class="tab_content" v-if="ifShowtcon">
            <div
              class="tab_content_item"
              ref="tab_content_item"
              v-for="(item, index) in tabconList"
              :key="index"
              :class="{ remb: index == 5 || index == 6 }"
            >
              <div class="tab_content_item_top">{{ item.til }}</div>
              <div class="tab_content_item_bom" v-if="item.descList">
                <div
                  class="tab_content_item_bom_item"
                  v-for="(itm1, inx) in item.descList"
                  :key="inx"
                >
                  {{ itm1 }}
                </div>
              </div>
              <div class="icon_contai" v-if="item.ticList">
                <div
                  class="icon_contai_itm"
                  v-for="(itm1, inx) in item.ticList"
                  :key="inx"
                >
                  <img :src="itm1.ic" class="icon_im" />
                  <div class="imitro">{{ itm1.txt }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab_content" v-else>
            <div class="tab_content_item1" v-for="(item,index) in lifeCycleDesc" :key="index">
              <div class="tab_content_item1_cir"></div>
              <div class="tab_content_item1_con">
                {{item}}
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
import PieEcharts1 from "@/components/echarts/common/pie/PieEcharts1";
export default {
  name: "dxItem",
  props: ["onlyMap", "parm"],
  data() {
    return {
      current: '08:00',
      currentBtn: 2,
      AMap: null,
      drIcon: require("../../assets/img/yhhx/drIcon.png"),
      quyResult: require("../../assets/img/yhhx/quyResult.png"),
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
      ifShowMb: false,
      ifShowCon: false,
      cur: "基本信息",
      target: ["自定义标签", "基本信息", "兴趣爱好", "设备属性"],
      property: ["用户维度", "媒介维度", "品牌维度"],
      behavior: ["线上行为", "线下行为"],
      nilinList: ["18-24", "25-34", "35+"],
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
        "推广人员",
        "大学生",
        "医生",
        "金融",
        "IT",
        "程序员",
        "教师",
        "货车司机"
      ],
      condiObj: {
        label1: "开车",
        label2: "25-35岁",
        label3: "消费高",
        label4: "已婚",
      },
      tabconList: [],
      tabconList0: [],
      tabconList1: [],
      tabconList2: [],
      ifShowtcon: true,
      yqxgList: [],
      yqxgList1: [
        {
          til: "触达率",
          desc: "46%",
        },
        {
          til: "投放成本",
          desc: "¥2300/千人",
        },
      ],
      ifShowtffatj: true,
      tfys: "10000",
      tfys1: "25000",
      meijieList: [],
      fanganObj: {},
      condiList: [],
      nlList: [],
      xingbieList: [],
      hasChList: [],
      xiaoFList: [],
      huyiList: [],
      zhYList: [],
      chuData: {
        name: ["快手", "小红书"],
        value: [4000, 6000],
      },
      rangetList: [
        {
          time: "19:00 - 20:30",
          name: "小红书",
        },
        {
          time: "22:00 - 22:30",
          name: "快手",
        },
      ],
      street: "中国",
      lifeCycleDesc:['早期客户留存转化率较低，需要加大投放力度；','成熟期及休眠期的用户消费潜力巨大，品牌方应充分挖掘其价值；','用户在餐饮百货品类价值贡献度高，可迎合其偏好制定策略。']
    };
  },
  components: {
    PieEcharts1,
  },
  mounted() {
    var propData = this.parm;
    var resParm = {
      id: propData.id,
      time: "08:00",
    };
    this.getMoveLineDetail(resParm, this.street);
  },
  methods: {
    formitInput(e){
      var inValue = this.tfys;
      if(inValue.length > 9){
        this.tfys = inValue.slice(0,9)
      }
    },
    formitInput1(e){
      var inValue = this.tfys1;
      if(inValue.length > 9){
        this.tfys1 = inValue.slice(0,9)
      }
    },
    async getMoveLineDetail(resParm, street) {
      try {
        let res = await api.getUserMoveLineDetail(resParm);
        if (res.code == 200) {
          var detailData = res.data || [];
          console.log(detailData, "detailData");
          if (detailData[0]) {
            var firstData = detailData[0];
            this.fanganObj = firstData.recommendDeliveryPlan || {};
            var idList = [];
            var travaList = [];
            var travaData = firstData.travelTools || [];
            var mediaData = firstData.medias || [];
            travaData.forEach(item=>{
              travaList.push({
                ic:item.url,
                txt:item.title
              });
            });
            this.meijieList = mediaData;
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
            this.tabconList0 = [
              {
                til: "年龄结构",
                descList: [firstData.ageScope],
                ticList: null,
              },
              {
                til: "收入结构",
                descList: [firstData.income],
                ticList: null,
              },
              {
                til: "职业结构",
                descList: [firstData.career],
                ticList: null,
              },
              {
                til: "行业结构",
                descList: [firstData.professionStructure],
                ticList: null,
              },
              {
                til: "教育背景",
                descList: [firstData.educationBackground],
                ticList: null,
              },
              {
                til: "居住地区",
                descList: [firstData.locationArea],
                ticList: null,
              },
              {
                til: "主要出行方式",
                descList: null,
                ticList:travaList
              },
            ];
            this.tabconList1 = [
              {
                til: "APP使用结构",
                descList: [firstData.appUse],
                ticList: null,
              },
              {
                til: "内容偏好结构",
                descList: [firstData.contentPreference],
                ticList: null,
              },
              {
                til: "用户行为分布结构",
                descList: [firstData.behaviorStructure],
                ticList: null,
              },
              {
                til: "不同性别APP内容偏好",
                descList: [firstData.differentGenderAppContentPreference],
                ticList: null,
              },
            ],
            this.tabconList2 = [
              {
                til: "敏感/厌恶",
                descList: firstData.sensitiveLabel,
                ticList: null,
              },
              {
                til: "风格偏好",
                descList: firstData.stylePreference,
                ticList: null,
              },
              {
                til: "话题偏好",
                descList: firstData.topicPreference,
                ticList: null,
              },
              {
                til: "个人标签",
                descList: firstData.personalLabel,
                ticList: null,
              },
           ],
           this.lifeCycleDesc = firstData.lifeCycleDesc;
            mediaData.forEach((item) => {
              if (item.selectFlag) {
                idList.push(item.id);
              }
            });
            var pieParm = {
              minBudget: this.tfys,
              maxBudget: this.tfys1,
              ids: idList,
            };
            this.getPieData(pieParm);
            setTimeout(() => {
              this.clickPerTab(1);
              this.changMbItem(0);
              this.initMap(detailData,street);
            }, 500);
          }
        } else {
          this.$Message.error("获得用户分组动线详情失败！");
        }
      } catch (err) {
        console.log(">>>>>", err);
      }
    },
    getPieData(pieParm) {
      var self = this;
      this.rangetList = [];
      api
        .getCalcMediaBudget(pieParm)
        .then((res) => {
          console.log(res, "饼图数据");
          if (res.code == 200) {
            var pieData = res.data || {};
            var pieList = pieData.medias || [];
            var nameList = [];
            var valueList = [];
            pieList.forEach((item) => {
              self.rangetList.push({
                time: item.time,
                name: item.name,
              });
              nameList.push(item.name);
              valueList.push(item.cost);
            });
            this.chuData = {
              name: nameList,
              value: valueList,
            };
            this.yqxgList1 = [
              {
                til: "触达率",
                desc: pieData.reachRate,
              },
              {
                til: "投放成本",
                desc: pieData.cost,
              },
            ];
          } else {
            this.$Message.error("获取饼图部分数据失败！");
          }
        })
        .catch((err) => {
          console.log("---饼图接口数据---", err);
        });
    },
    changeNews() {
      var myDataList = this.meijieList || [];
      var idList = [];
      myDataList.forEach((item) => {
        if (item.selectFlag) {
          idList.push(item.id);
        }
      });
      var pieParm = {
        minBudget: this.tfys,
        maxBudget: this.tfys1,
        ids: idList,
      };
      this.getPieData(pieParm);
    },
    clickPerTab(arg) {
      var conDom = this.$refs.person_con_con;
      let actLef = require("../../assets/img/yhhx/actLef.png");
      let actrig = require("../../assets/img/yhhx/actRig.png");
      if (conDom) {
        if (arg == 1) {
          conDom.style = `background-image: url(${actLef});background-size: cover;`;
        } else {
          conDom.style = `background-image: url(${actrig});background-size: contain;background-repeat:no-repeat;`;
        }
      }
      this.ifShowtffatj = arg;
    },
    changMbItem(arg) {
      var tabDom = this.$refs.tab_con;
      var tabDom1 = this.$refs.tab_content_item || [];
      var bgc0 = "#F0F8FF";
      var bgc1 = "#D3E3FF";
      var bgc2 = "#9ECBFF";
      var bgc3 = "#4488FF";
      if (arg == 0) {
        this.ifShowtcon = true;
        tabDom.style = ` background:${bgc0};`;
        this.tabconList = this.tabconList0;
        setTimeout(() => {
          for (var i = 0; i < tabDom1.length; i++) {
            tabDom1[i].style = " margin-right: 75px;";
          }
        }, 100);
      } else if (arg == 1) {
        this.ifShowtcon = true;
        tabDom.style = ` background: ${bgc1};`;
        this.tabconList = this.tabconList1;
        setTimeout(() => {
          for (var i = 0; i < tabDom1.length; i++) {
            tabDom1[i].style = "margin-right: 27px;";
          }
        }, 100);
      } else if (arg == 2) {
        this.ifShowtcon = true;
        tabDom.style = ` background: ${bgc2};`;
        this.tabconList = this.tabconList2;
        setTimeout(() => {
          for (var i = 0; i < tabDom1.length; i++) {
            tabDom1[i].style = " margin-right: 87px;";
          }
        }, 50);
      } else if (arg == 3) {
        this.ifShowtcon = false;
        tabDom.style = ` background: ${bgc3};`;
      }
    },
    submit() {
      this.ifShowCon = false;
      this.condiObj = {
        label1: "中学生家长",
        label2: "低",
        label3: "已婚",
        label4: "广告",
      };
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
          itemDom[i].style =
            "background: #2373FF;color: #FFFFFF;border-radius: 4px;";
        } else {
          //如果需要多选去掉else
          itemDom[i].style = "color: #636E95;background: none;";
        }
      }
    },
    expandCond() {
      this.nlList = [];
      this.xingbieList = [];
      this.hasChList = [];
      this.xiaoFList = [];
      this.huyiList = [];
      this.zhYList = [];
      this.condiList = [];
      this.ifShowCon = !this.ifShowCon;
    },
    hideMe() {
      this.ifShowMb = false;
    },
    clickTimeItem(arg, val) {
      this.timerIdx = arg;
      this.street = val;
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
      this.getMoveLineDetail(resParm, this.street);
    },
    choiceat(arg) {
      this.currentBtn = arg;
      this.ifShowMb = false;
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
        if (this.street == "中国") {
          this.street = "朝阳区";
        }
        setTimeout(() => {
          this.timerIdx = this.districtList.indexOf(this.street);
          this.getMoveLineDetail(resParm,this.street);
        }, 1000);
      }
    },
    clickTime(arg) {
      this.current = arg;
      this.ifShowMb = false;
      var propData = this.parm;
      var resParm = {
        id:propData.id,
        time:arg
      };
      this.getMoveLineDetail(resParm,this.street)
    },
    initMap(pList,area) {
      var that = this;
      var district = null;
      var polygons = [];
      var pList1 = [];
      pList1 = pList;

      //初始化地图实例
      var map = new AMap.Map("mapContainer", {
        resizeEnable: true,
        center: [108.688763, 38.084088], //地图中心点
        zoom: 4, //地图显示的缩放级别
        mapStyle: "amap://styles/whitesmoke",
      });
      map.setDefaultCursor("pointer");

      //加载行政区划插件,以及行政区域查询部分
      if (!district) {
        //实例化DistrictSearch
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
            if(detailData[0]){
              var firstData = detailData[0];
              console.log(firstData,'第一条线数据')
              that.fanganObj = firstData.recommendDeliveryPlan || {};
              var idList = [];
              var travaList = [];
              var travaData = firstData.travelTools || [];
              var mediaData = firstData.medias || [];
              travaData.forEach(item=>{
                travaList.push({
                  ic:item.url,
                  txt:item.title
                });
              });
              that.meijieList = mediaData;
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
              that.tabconList0 = [
                {
                  til: "年龄结构",
                  descList: [firstData.ageScope],
                  ticList: null,
                },
                {
                  til: "收入结构",
                  descList: [firstData.income],
                  ticList: null,
                },
                {
                  til: "职业结构",
                  descList: [firstData.career],
                  ticList: null,
                },
                {
                  til: "行业结构",
                  descList: [firstData.professionStructure],
                  ticList: null,
                },
                {
                  til: "教育背景",
                  descList: [firstData.educationBackground],
                  ticList: null,
                },
                {
                  til: "居住地区",
                  descList: [firstData.locationArea],
                  ticList: null,
                },
                {
                  til: "主要出行方式",
                  descList: null,
                  ticList:travaList
                },
              ];
              that.tabconList1 = [
                {
                  til: "APP使用结构",
                  descList: [firstData.appUse],
                  ticList: null,
                },
                {
                  til: "内容偏好结构",
                  descList: [firstData.contentPreference],
                  ticList: null,
                },
                {
                  til: "用户行为分布结构",
                  descList: [firstData.behaviorStructure],
                  ticList: null,
                },
                {
                  til: "不同性别APP内容偏好",
                  descList: [firstData.differentGenderAppContentPreference],
                  ticList: null,
                },
              ],
              that.tabconList2 = [
                {
                  til: "敏感/厌恶",
                  descList: firstData.sensitiveLabel,
                  ticList: null,
                },
                {
                  til: "风格偏好",
                  descList: firstData.stylePreference,
                  ticList: null,
                },
                {
                  til: "话题偏好",
                  descList: firstData.topicPreference,
                  ticList: null,
                },
                {
                  til: "个人标签",
                  descList: firstData.personalLabel,
                  ticList: null,
                },
              ],
              that.lifeCycleDesc = firstData.lifeCycleDesc;
              that.clickPerTab(1);
              that.changMbItem(0);
              mediaData.forEach((item) => {
                if (item.selectFlag) {
                  idList.push(item.id);
                }
              });
              var pieParm = {
                minBudget: that.tfys,
                maxBudget: that.tfys1,
                ids: idList,
              };
              that.getPieData(pieParm);
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
            if(detailData[1]){
              var firstData = detailData[1];
              console.log(firstData,'第二条线数据')
              that.fanganObj = firstData.recommendDeliveryPlan || {};
              var idList = [];
              var travaList = [];
              var travaData = firstData.travelTools || [];
              var mediaData = firstData.medias || [];
              travaData.forEach(item=>{
                travaList.push({
                  ic:item.url,
                  txt:item.title
                });
              });
              that.meijieList = mediaData;
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
              that.tabconList0 = [
                {
                  til: "年龄结构",
                  descList: [firstData.ageScope],
                  ticList: null,
                },
                {
                  til: "收入结构",
                  descList: [firstData.income],
                  ticList: null,
                },
                {
                  til: "职业结构",
                  descList: [firstData.career],
                  ticList: null,
                },
                {
                  til: "行业结构",
                  descList: [firstData.professionStructure],
                  ticList: null,
                },
                {
                  til: "教育背景",
                  descList: [firstData.educationBackground],
                  ticList: null,
                },
                {
                  til: "居住地区",
                  descList: [firstData.locationArea],
                  ticList: null,
                },
                {
                  til: "主要出行方式",
                  descList: null,
                  ticList:travaList
                },
              ];
              that.tabconList1 = [
                {
                  til: "APP使用结构",
                  descList: [firstData.appUse],
                  ticList: null,
                },
                {
                  til: "内容偏好结构",
                  descList: [firstData.contentPreference],
                  ticList: null,
                },
                {
                  til: "用户行为分布结构",
                  descList: [firstData.behaviorStructure],
                  ticList: null,
                },
                {
                  til: "不同性别APP内容偏好",
                  descList: [firstData.differentGenderAppContentPreference],
                  ticList: null,
                },
              ],
              that.tabconList2 = [
                {
                  til: "敏感/厌恶",
                  descList: firstData.sensitiveLabel,
                  ticList: null,
                },
                {
                  til: "风格偏好",
                  descList: firstData.stylePreference,
                  ticList: null,
                },
                {
                  til: "话题偏好",
                  descList: firstData.topicPreference,
                  ticList: null,
                },
                {
                  til: "个人标签",
                  descList: firstData.personalLabel,
                  ticList: null,
                },
              ],
              that.lifeCycleDesc = firstData.lifeCycleDesc;
              that.clickPerTab(1);
              that.changMbItem(0);
              mediaData.forEach((item) => {
                if (item.selectFlag) {
                  idList.push(item.id);
                }
              });
              var pieParm = {
                minBudget: that.tfys,
                maxBudget: that.tfys1,
                ids: idList,
              };
              that.getPieData(pieParm);
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
            if(detailData[2]){
              var firstData = detailData[2];
              console.log(firstData,'第三条线数据')
              that.fanganObj = firstData.recommendDeliveryPlan || {};
              var idList = [];
              var travaList = [];
              var travaData = firstData.travelTools || [];
              var mediaData = firstData.medias || [];
              travaData.forEach(item=>{
                travaList.push({
                  ic:item.url,
                  txt:item.title
                });
              });
              that.meijieList = mediaData;
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
              that.tabconList0 = [
                {
                  til: "年龄结构",
                  descList: [firstData.ageScope],
                  ticList: null,
                },
                {
                  til: "收入结构",
                  descList: [firstData.income],
                  ticList: null,
                },
                {
                  til: "职业结构",
                  descList: [firstData.career],
                  ticList: null,
                },
                {
                  til: "行业结构",
                  descList: [firstData.professionStructure],
                  ticList: null,
                },
                {
                  til: "教育背景",
                  descList: [firstData.educationBackground],
                  ticList: null,
                },
                {
                  til: "居住地区",
                  descList: [firstData.locationArea],
                  ticList: null,
                },
                {
                  til: "主要出行方式",
                  descList: null,
                  ticList:travaList
                },
              ];
              that.tabconList1 = [
                {
                  til: "APP使用结构",
                  descList: [firstData.appUse],
                  ticList: null,
                },
                {
                  til: "内容偏好结构",
                  descList: [firstData.contentPreference],
                  ticList: null,
                },
                {
                  til: "用户行为分布结构",
                  descList: [firstData.behaviorStructure],
                  ticList: null,
                },
                {
                  til: "不同性别APP内容偏好",
                  descList: [firstData.differentGenderAppContentPreference],
                  ticList: null,
                },
              ],
              that.tabconList2 = [
                {
                  til: "敏感/厌恶",
                  descList: firstData.sensitiveLabel,
                  ticList: null,
                },
                {
                  til: "风格偏好",
                  descList: firstData.stylePreference,
                  ticList: null,
                },
                {
                  til: "话题偏好",
                  descList: firstData.topicPreference,
                  ticList: null,
                },
                {
                  til: "个人标签",
                  descList: firstData.personalLabel,
                  ticList: null,
                },
              ],
              that.lifeCycleDesc = firstData.lifeCycleDesc;
              that.clickPerTab(1);
              that.changMbItem(0);
              mediaData.forEach((item) => {
                if (item.selectFlag) {
                  idList.push(item.id);
                }
              });
              var pieParm = {
                minBudget: that.tfys,
                maxBudget: that.tfys1,
                ids: idList,
              };
              that.getPieData(pieParm);
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
            if(detailData[3]){
              var firstData = detailData[3];
              console.log(firstData,'第四条线数据')
              that.fanganObj = firstData.recommendDeliveryPlan || {};
              var idList = [];
              var travaList = [];
              var travaData = firstData.travelTools || [];
              var mediaData = firstData.medias || [];
              travaData.forEach(item=>{
                travaList.push({
                  ic:item.url,
                  txt:item.title
                });
              });
              that.meijieList = mediaData;
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
              that.tabconList0 = [
                {
                  til: "年龄结构",
                  descList: [firstData.ageScope],
                  ticList: null,
                },
                {
                  til: "收入结构",
                  descList: [firstData.income],
                  ticList: null,
                },
                {
                  til: "职业结构",
                  descList: [firstData.career],
                  ticList: null,
                },
                {
                  til: "行业结构",
                  descList: [firstData.professionStructure],
                  ticList: null,
                },
                {
                  til: "教育背景",
                  descList: [firstData.educationBackground],
                  ticList: null,
                },
                {
                  til: "居住地区",
                  descList: [firstData.locationArea],
                  ticList: null,
                },
                {
                  til: "主要出行方式",
                  descList: null,
                  ticList:travaList
                },
              ];
              that.tabconList1 = [
                {
                  til: "APP使用结构",
                  descList: [firstData.appUse],
                  ticList: null,
                },
                {
                  til: "内容偏好结构",
                  descList: [firstData.contentPreference],
                  ticList: null,
                },
                {
                  til: "用户行为分布结构",
                  descList: [firstData.behaviorStructure],
                  ticList: null,
                },
                {
                  til: "不同性别APP内容偏好",
                  descList: [firstData.differentGenderAppContentPreference],
                  ticList: null,
                },
              ],
              that.tabconList2 = [
                {
                  til: "敏感/厌恶",
                  descList: firstData.sensitiveLabel,
                  ticList: null,
                },
                {
                  til: "风格偏好",
                  descList: firstData.stylePreference,
                  ticList: null,
                },
                {
                  til: "话题偏好",
                  descList: firstData.topicPreference,
                  ticList: null,
                },
                {
                  til: "个人标签",
                  descList: firstData.personalLabel,
                  ticList: null,
                },
              ],
              that.lifeCycleDesc = firstData.lifeCycleDesc;
              that.clickPerTab(1);
              that.changMbItem(0);
              mediaData.forEach((item) => {
                if (item.selectFlag) {
                  idList.push(item.id);
                }
              });
              var pieParm = {
                minBudget: that.tfys,
                maxBudget: that.tfys1,
                ids: idList,
              };
              that.getPieData(pieParm);
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
            if(detailData[4]){
              var firstData = detailData[4];
              console.log(firstData,'第五条线数据')
              that.fanganObj = firstData.recommendDeliveryPlan || {};
              var idList = [];
              var travaList = [];
              var travaData = firstData.travelTools || [];
              var mediaData = firstData.medias || [];
              travaData.forEach(item=>{
                travaList.push({
                  ic:item.url,
                  txt:item.title
                });
              });
              that.meijieList = mediaData;
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
              that.tabconList0 = [
                {
                  til: "年龄结构",
                  descList: [firstData.ageScope],
                  ticList: null,
                },
                {
                  til: "收入结构",
                  descList: [firstData.income],
                  ticList: null,
                },
                {
                  til: "职业结构",
                  descList: [firstData.career],
                  ticList: null,
                },
                {
                  til: "行业结构",
                  descList: [firstData.professionStructure],
                  ticList: null,
                },
                {
                  til: "教育背景",
                  descList: [firstData.educationBackground],
                  ticList: null,
                },
                {
                  til: "居住地区",
                  descList: [firstData.locationArea],
                  ticList: null,
                },
                {
                  til: "主要出行方式",
                  descList: null,
                  ticList:travaList
                },
              ];
              that.tabconList1 = [
                {
                  til: "APP使用结构",
                  descList: [firstData.appUse],
                  ticList: null,
                },
                {
                  til: "内容偏好结构",
                  descList: [firstData.contentPreference],
                  ticList: null,
                },
                {
                  til: "用户行为分布结构",
                  descList: [firstData.behaviorStructure],
                  ticList: null,
                },
                {
                  til: "不同性别APP内容偏好",
                  descList: [firstData.differentGenderAppContentPreference],
                  ticList: null,
                },
              ],
              that.tabconList2 = [
                {
                  til: "敏感/厌恶",
                  descList: firstData.sensitiveLabel,
                  ticList: null,
                },
                {
                  til: "风格偏好",
                  descList: firstData.stylePreference,
                  ticList: null,
                },
                {
                  til: "话题偏好",
                  descList: firstData.topicPreference,
                  ticList: null,
                },
                {
                  til: "个人标签",
                  descList: firstData.personalLabel,
                  ticList: null,
                },
              ],
              that.lifeCycleDesc = firstData.lifeCycleDesc;
              that.clickPerTab(1);
              that.changMbItem(0);
              mediaData.forEach((item) => {
                if (item.selectFlag) {
                  idList.push(item.id);
                }
              });
              var pieParm = {
                minBudget: that.tfys,
                maxBudget: that.tfys1,
                ids: idList,
              };
              that.getPieData(pieParm);
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
            if(detailData[5]){
              var firstData = detailData[5];
              console.log(firstData,'第六条线数据')
              that.fanganObj = firstData.recommendDeliveryPlan || {};
              var idList = [];
              var travaList = [];
              var travaData = firstData.travelTools || [];
              var mediaData = firstData.medias || [];
              travaData.forEach(item=>{
                travaList.push({
                  ic:item.url,
                  txt:item.title
                });
              });
              that.meijieList = mediaData;
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
              that.tabconList0 = [
                {
                  til: "年龄结构",
                  descList: [firstData.ageScope],
                  ticList: null,
                },
                {
                  til: "收入结构",
                  descList: [firstData.income],
                  ticList: null,
                },
                {
                  til: "职业结构",
                  descList: [firstData.career],
                  ticList: null,
                },
                {
                  til: "行业结构",
                  descList: [firstData.professionStructure],
                  ticList: null,
                },
                {
                  til: "教育背景",
                  descList: [firstData.educationBackground],
                  ticList: null,
                },
                {
                  til: "居住地区",
                  descList: [firstData.locationArea],
                  ticList: null,
                },
                {
                  til: "主要出行方式",
                  descList: null,
                  ticList:travaList
                },
              ];
              that.tabconList1 = [
                {
                  til: "APP使用结构",
                  descList: [firstData.appUse],
                  ticList: null,
                },
                {
                  til: "内容偏好结构",
                  descList: [firstData.contentPreference],
                  ticList: null,
                },
                {
                  til: "用户行为分布结构",
                  descList: [firstData.behaviorStructure],
                  ticList: null,
                },
                {
                  til: "不同性别APP内容偏好",
                  descList: [firstData.differentGenderAppContentPreference],
                  ticList: null,
                },
              ],
              that.tabconList2 = [
                {
                  til: "敏感/厌恶",
                  descList: firstData.sensitiveLabel,
                  ticList: null,
                },
                {
                  til: "风格偏好",
                  descList: firstData.stylePreference,
                  ticList: null,
                },
                {
                  til: "话题偏好",
                  descList: firstData.topicPreference,
                  ticList: null,
                },
                {
                  til: "个人标签",
                  descList: firstData.personalLabel,
                  ticList: null,
                },
              ],
              that.lifeCycleDesc = firstData.lifeCycleDesc;
              that.clickPerTab(1);
              that.changMbItem(0);
              mediaData.forEach((item) => {
                if (item.selectFlag) {
                  idList.push(item.id);
                }
              });
              var pieParm = {
                minBudget: that.tfys,
                maxBudget: that.tfys1,
                ids: idList,
              };
              that.getPieData(pieParm);
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
            if(detailData[6]){
              var firstData = detailData[6];
              console.log(firstData,'第七条线数据')
              that.fanganObj = firstData.recommendDeliveryPlan || {};
              var idList = [];
              var travaList = [];
              var travaData = firstData.travelTools || [];
              var mediaData = firstData.medias || [];
              travaData.forEach(item=>{
                travaList.push({
                  ic:item.url,
                  txt:item.title
                });
              });
              that.meijieList = mediaData;
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
              that.tabconList0 = [
                {
                  til: "年龄结构",
                  descList: [firstData.ageScope],
                  ticList: null,
                },
                {
                  til: "收入结构",
                  descList: [firstData.income],
                  ticList: null,
                },
                {
                  til: "职业结构",
                  descList: [firstData.career],
                  ticList: null,
                },
                {
                  til: "行业结构",
                  descList: [firstData.professionStructure],
                  ticList: null,
                },
                {
                  til: "教育背景",
                  descList: [firstData.educationBackground],
                  ticList: null,
                },
                {
                  til: "居住地区",
                  descList: [firstData.locationArea],
                  ticList: null,
                },
                {
                  til: "主要出行方式",
                  descList: null,
                  ticList:travaList
                },
              ];
              that.tabconList1 = [
                {
                  til: "APP使用结构",
                  descList: [firstData.appUse],
                  ticList: null,
                },
                {
                  til: "内容偏好结构",
                  descList: [firstData.contentPreference],
                  ticList: null,
                },
                {
                  til: "用户行为分布结构",
                  descList: [firstData.behaviorStructure],
                  ticList: null,
                },
                {
                  til: "不同性别APP内容偏好",
                  descList: [firstData.differentGenderAppContentPreference],
                  ticList: null,
                },
              ],
              that.tabconList2 = [
                {
                  til: "敏感/厌恶",
                  descList: firstData.sensitiveLabel,
                  ticList: null,
                },
                {
                  til: "风格偏好",
                  descList: firstData.stylePreference,
                  ticList: null,
                },
                {
                  til: "话题偏好",
                  descList: firstData.topicPreference,
                  ticList: null,
                },
                {
                  til: "个人标签",
                  descList: firstData.personalLabel,
                  ticList: null,
                },
              ],
              that.lifeCycleDesc = firstData.lifeCycleDesc;
              that.clickPerTab(1);
              that.changMbItem(0);
              mediaData.forEach((item) => {
                if (item.selectFlag) {
                  idList.push(item.id);
                }
              });
              var pieParm = {
                minBudget: that.tfys,
                maxBudget: that.tfys1,
                ids: idList,
              };
              that.getPieData(pieParm);
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
      var marker = new AMap.Marker({
        icon: new AMap.Icon({
          image:
            "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
          size: new AMap.Size(52, 52),
          imageSize: new AMap.Size(26, 36),
        }),
        position: c2,
      });
      marker.on("click", function () {
        that.ifShowMb = true;
        setTimeout(() => {
          that.ifShowMb = false;
        }, 4000);
      });
      marker.setMap(map);
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
        border-radius: 4px 4px 0 0;
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
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242f57;
            &:hover {
              cursor: pointer;
            }
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
              height: 24px;
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
    width: 805px;
  }
  .conditions_container-box {
    position: absolute;
    z-index: 999;
    top: 84px;
    display: flex;
    left: 21px;
    right: 20px;
  }
  .conditions_container {
    flex: 1;
    height: 40px;
    background: #ffffff;
    border-radius: 0px 0px 4px 4px;
    padding: 8px 16px 8px 12px;
    /*box-sizing: border-box;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f0f8ff;
    .condition_total_con{
      display: flex;
      align-items: center;
      .condition_label {
        padding-left: 8px;
        padding-right: 22px;
        box-sizing: border-box;
        margin-right: 0;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242f57;
      }
      .conditions_lef {
        height: 100%;
        display: flex;
        align-items: center;
        .condition_item {
          width: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 10px;
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
    }
    .conditions_rig {
      font-size: 12px;
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
    left: 20px;
    top: 128px;
    width: 806px;
    z-index: 1000;
    height: 402px;
    background: #fff;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 4px;
    border: 1px solid #eaedf7;
    display: flex;
    align-items: center;
    // .condition_lef{
    //     width: 186px;
    //     .conditImg{
    //         display: block;
    //         width: 100%;
    //     }
    // }
    .target-left {
      width: 186px;
      height: 100%;
      padding: 12px 0 0 12px;
      border-right: 1px solid #eaedf7;
      .l-item {
        margin-bottom: 9px;
        .l-item-label {
          width: 58px;
          height: 16px;
          margin-bottom: 9px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          line-height: 16px;
        }
        .item-list {
          .item-con {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 160px;
            height: 32px;
            padding: 0 16px;
            margin-right: 1px;
            /*margin-bottom: 8px;*/
            .name {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #636e95;
              cursor: pointer;
              &.act {
                color: #2373ff;
              }
            }
            > i {
              font-size: 12px;
              color: #98a2c2;
            }
          }
        }
      }
    }
    .condition_rig {
      // flex: 1;
      height: 100%;
      padding: 45px 22px 0 22px;
      box-sizing: border-box;
      .con_item_container {
        // width: 100%;
        display: flex;
        // align-items: flex-start;
        margin-bottom: 8px;
        .con_item_label {
          width: 98px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242f57;
        }
        .con_item_con {
          // flex: 1;
          width: calc(100% - 106px);
          display: flex;
          flex-wrap: wrap;
          .con_item {
            height: 24px;
            padding: 0 9px;
            line-height: 24px;
            margin-bottom: 5px;
            border-radius: 8px;
            margin-right: 24px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            background-color: none;
            cursor: pointer;
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
        margin-top: 20px;
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
      align-items: center;
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
            padding: 30px 16px 10px 16px;
            box-sizing: border-box;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242f57;
            background-color: #fff;
          }
          .tfjy1 {
            background-color: #fff;
            padding-top: 24px;
            box-sizing: border-box;
          }
          .touf_pie {
            width: 100%;
            padding: 0 16px;
            padding-top: 10px;
            box-sizing: border-box;
            background-color: #ffffff;
            .touf_pie_con {
              width: 100%;
              background: #f0f8ff;
              border-radius: 4px;
              .touf_pie_til {
                width: 100%;
                padding: 7px 10px;
                box-sizing: border-box;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636e95;
              }
              .touf_pie_con_con {
                margin-top: 3px;
                width: 100%;
                height: 220px;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
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
                width: 131px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
          .tfmjchoice_con {
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            background-color: #fff;
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
                width: 31px;
                margin-left: 10px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
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
            .cmon {
              position: absolute;
              color: #97a0c3;
              left: 25px;
              z-index: 999;
            }
            .input_con {
              width: 200px !important;
            }
            ::v-deep .input_con .ivu-input-default {
              padding-left: 30px !important;
            }
            ::v-deep .input_con input::-webkit-outer-spin-button,::v-deep .input_con input::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }
            ::v-deep .input_con input[type="number"]{
              -moz-appearance: textfield;
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
          .tfjyq_con {
            width: 100%;
            background-color: #ffffff;
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
              padding-bottom: 17px;
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
            .yqxg_con_con1 {
              width: 100%;
              padding: 7px 16px;
              box-sizing: border-box;
              .yqxg_con_con2 {
                width: 100%;
                background: #f0f8ff;
                border-radius: 4px;
                padding: 7px 16px;
                box-sizing: border-box;
                .yqxg_con_con1_tilm {
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636e95;
                  line-height: 22px;
                  margin-right: 2px;
                }
                .yqxg_con_con1_con {
                  width: 100%;
                  margin-bottom: 7px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  .time_rang {
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #2373ff;
                    line-height: 22px;
                  }
                  .meij_name {
                    font-size: 12px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242f57;
                    line-height: 22px;
                  }
                }
              }
            }
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
      // .switch_container{
      //     width: 100%;
      //     padding: 12px 20px;
      //     box-sizing: border-box;
      //     border-bottom: 1px solid #fdfdfd;
      //     display: flex;
      //     align-items: center;
      //     justify-content: space-between;
      //     font-size: 14px;
      //     font-family: PingFangSC-Medium, PingFang SC;
      //     font-weight: 500;
      //     color: #242F57;
      // }
      // .nl_card_container{
      //     width: 100%;
      //     background: rgba(255, 255, 255, 0.8);
      //     border-radius: 8px;
      //     border: 1px solid #FFFFFF;
      //     padding: 12px 14px;
      //     box-sizing: border-box;
      //     margin-bottom: 8px;
      //     .til_label{
      //         width: 100%;
      //         font-size: 14px;
      //         font-family: PingFangSC-Medium, PingFang SC;
      //         font-weight: 500;
      //         color: #242F57;
      //         margin-bottom: 10px;
      //         // ::v-deep .saas-poptip{
      //         //     left: 628px !important;
      //         //     .ivu-poptip-content{
      //         //         width: 270px !important;
      //         //     }
      //         // }
      //     }
      //     .pro_container{
      //         width: 100%;
      //         margin-bottom: 8px;
      //         display: flex;
      //         align-items: center;
      //         .pro_label{
      //             font-size: 12px;
      //             font-family: PingFangSC-Regular, PingFang SC;
      //             font-weight: 400;
      //             color: #97A0C3;
      //             margin-right: 12px;
      //         }
      //         .pro{
      //             flex: 1;
      //         }
      //     }
      // }

      // .sex_card_container{
      //     width: 100%;
      //     background: rgba(255, 255, 255, 0.8);
      //     border-radius: 8px;
      //     border: 1px solid #FFFFFF;
      //     padding: 12px 14px;
      //     box-sizing: border-box;
      //     margin-bottom: 8px;
      //     .til_label{
      //         width: 100%;
      //         font-size: 14px;
      //         font-family: PingFangSC-Medium, PingFang SC;
      //         font-weight: 500;
      //         color: #242F57;
      //         margin-bottom: 10px;
      //     }
      //     .sex_tu_container{
      //         width: 100%;
      //         display: flex;
      //         align-items: center;
      //         justify-content: space-between;
      //         margin-bottom: 4px;
      //         .man{
      //             width: 64%;
      //             height: 16px;
      //             background: #2373FF;
      //             border-radius: 2px;
      //         }
      //         .women{
      //             width: 34%;
      //             height: 16px;
      //             background: #FE763D;
      //             border-radius: 2px;
      //         }
      //     }
      //     .sex_per_container{
      //         width: 100%;
      //         display: flex;
      //         align-items: center;
      //         justify-content: space-between;
      //         font-size: 18px;
      //         font-family: PingFangSC-Medium, PingFang SC;
      //         font-weight: 500;
      //         .man_per{
      //             color: #2373FF;
      //         }
      //         .women_per{
      //             color: #FE763D;
      //         }
      //         .mansex,.womensex{
      //             font-size: 12px;
      //             font-weight: 400;
      //             color: #97A0C3;
      //         }
      //     }
      // }

      // .chufa_card_container{
      //     width: 100%;
      //     background: rgba(255, 255, 255, 0.8);
      //     border-radius: 8px;
      //     border: 1px solid #FFFFFF;
      //     padding: 12px 14px;
      //     box-sizing: border-box;
      //     margin-bottom: 8px;
      //     .til_label{
      //         width: 100%;
      //         font-size: 14px;
      //         font-family: PingFangSC-Medium, PingFang SC;
      //         font-weight: 500;
      //         color: #242F57;
      //         margin-bottom: 10px;
      //     }
      //     .chufadi_container{
      //         width: 100%;
      //         display: flex;
      //         align-items: center;
      //         justify-content: space-between;
      //         margin-top: 8px;
      //         .diItem{
      //             width: 32%;
      //             height: 24px;
      //             display: flex;
      //             align-items: center;
      //             padding: 2px 7px;
      //             box-sizing: border-box;
      //             background: #F4F7FC;
      //             border-radius: 4px;
      //             .addressIcon{
      //             display: block;
      //             width: 11px;
      //             margin-right: 6px;
      //             }
      //             .addresstxt{
      //             font-size: 12px;
      //             font-family: PingFangSC-Regular, PingFang SC;
      //             font-weight: 400;
      //             color: #242F57;
      //             }
      //         }
      //     }
      // }

      // .mudd_container{
      //     width: 100%;
      //     background: rgba(255, 255, 255, 0.8);
      //     border-radius: 8px;
      //     border: 1px solid #FFFFFF;
      //     padding: 12px 14px;
      //     box-sizing: border-box;
      //     margin-bottom: 8px;
      //     .til_label{
      //         width: 100%;
      //         font-size: 14px;
      //         font-family: PingFangSC-Medium, PingFang SC;
      //         font-weight: 500;
      //         color: #242F57;
      //         margin-bottom: 10px;
      //     }
      //     .chufadi_container{
      //         width: 100%;
      //         display: flex;
      //         align-items: center;
      //         justify-content: space-between;
      //         margin-top: 8px;
      //         .diItem{
      //             width: 32%;
      //             height: 24px;
      //             display: flex;
      //             align-items: center;
      //             padding: 2px 7px;
      //             box-sizing: border-box;
      //             background: #F4F7FC;
      //             border-radius: 4px;
      //             .addressIcon{
      //             display: block;
      //             width: 11px;
      //             margin-right: 6px;
      //             }
      //             .addresstxt{
      //             font-size: 12px;
      //             font-family: PingFangSC-Regular, PingFang SC;
      //             font-weight: 400;
      //             color: #242F57;
      //             }
      //         }
      //     }
      // }

      // .tqfs_container{
      //     width: 100%;
      //     background: rgba(255, 255, 255, 0.8);
      //     border-radius: 8px;
      //     border: 1px solid #FFFFFF;
      //     padding: 12px 14px;
      //     box-sizing: border-box;
      //     margin-bottom: 8px;
      //     .til_label{
      //         width: 100%;
      //         font-size: 14px;
      //         font-family: PingFangSC-Medium, PingFang SC;
      //         font-weight: 500;
      //         color: #242F57;
      //         margin-bottom: 10px;
      //     }
      //     .cx_type_container{
      //         width: 100%;
      //         margin-top: 16px;
      //         display: flex;
      //         align-items: center;
      //         .cx_item{
      //             display: flex;
      //             align-items: center;
      //             margin-right: 25px;
      //             .cxlogo{
      //             display: block;
      //             width: 16px;
      //             margin-right: 4px;
      //             }
      //             .cxtxt{
      //             font-size: 12px;
      //             font-family: PingFangSC-Regular, PingFang SC;
      //             font-weight: 400;
      //             color: #242F57;
      //             }
      //         }
      //     }
      // }

      // .tqsjylx_container{
      //     width: 100%;
      //     background: rgba(255, 255, 255, 0.8);
      //     border-radius: 8px;
      //     border: 1px solid #FFFFFF;
      //     padding: 12px 14px;
      //     box-sizing: border-box;
      //     margin-bottom: 8px;
      //     .til_label{
      //         width: 100%;
      //         font-size: 14px;
      //         font-family: PingFangSC-Medium, PingFang SC;
      //         font-weight: 500;
      //         color: #242F57;
      //         margin-bottom: 10px;
      //     }
      //     .haoshi_container{
      //         margin-top: 17px;
      //         width: 100%;
      //         display: flex;
      //         align-items: center;
      //         font-size: 12px;
      //         font-family: PingFangSC-Regular, PingFang SC;
      //         font-weight: 400;
      //         color: #242F57;
      //         .timeBiao{
      //             display: block;
      //             width: 16px;
      //             height: 16px;
      //             margin-right: 4px;
      //         }
      //     }
      // }
    }
    .yhxw_container {
      position: absolute;
      width: 806px;
      bottom: 20px;
      left: 20px;
      z-index: 999;
      .tab_item {
        width: 100%;
        display: flex;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #242f57;
        .tab_item_item {
          padding: 5px 16px;
          box-sizing: border-box;
          &:hover {
            cursor: pointer;
          }
        }
        .mbitem1 {
          background: #f0f8ff;
          border-radius: 4px 0px 0px 0px;
        }
        .mbitem2 {
          background: #d3e3ff;
        }
        .mbitem3 {
          color: #ffffff;
          background: #9ecbff;
        }
        .mbitem4 {
          color: #ffffff;
          border-radius: 0px 4px 0px 0px;
          background: #4488ff;
        }
      }
      .tab_con {
        width: 100%;
        padding: 20px 16px;
        box-sizing: border-box;
        .tab_content {
          width: 100%;
          height: 152.82px;
          overflow-y: hidden;
          padding: 12px 23px;
          box-sizing: border-box;
          background: #ffffff;
          border-radius: 4px;
          display: flex;
          flex-wrap: wrap;
          overflow-y: auto;
          .tab_content_item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 18px;
            margin-right: 75px;
            .tab_content_item_top {
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 8px;
            }
            .tab_content_item_bom {
              display: flex;
              align-items: center;
              .tab_content_item_bom_item {
                padding: 2px 10px;
                box-sizing: border-box;
                background: #f0f8ff;
                border-radius: 4px;
                border: 1px solid #ffffff;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242f57;
              }
            }
            .icon_contai {
              display: flex;
              align-items: center;
              .icon_contai_itm {
                margin-right: 23px;
                display: flex;
                align-items: center;
                .icon_im {
                  margin-right: 4px;
                  width: 16px;
                  height: 16px;
                }
                .imitro {
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242f57;
                }
              }
            }
          }
          .tab_content_item1 {
            display: flex;
            align-items: center;
            width: 100%;
            .tab_content_item1_cir {
              width: 8px;
              height: 8px;
              background-color: #2373ff;
              margin-right: 6px;
              border-radius: 50%;
            }
            .tab_content_item1_con {
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242f57;
              line-height: 27px;
            }
          }
          .remb {
            margin-bottom: 0px;
          }
        }
      }
      // .yhxw_title{
      //     position: absolute;
      //     top: 18px;
      //     left: 25px;
      //     font-size: 14px;
      //     font-family: PingFangSC-Medium, PingFang SC;
      //     font-weight: 500;
      //     color: #636E95;
      // }
      // .bqitm_container{
      //     position: absolute;
      //     top: 55px;
      //     left: 25px;
      //     min-width: 400px;
      //     height: 60px;
      //     display: flex;
      //     align-items: center;
      //     .bqitm{
      //         width: 180px;
      //         height: 100%;
      //         background: #FFFFFF;
      //         border-radius: 8px;
      //         margin-right: 16px;
      //         padding: 16px;
      //         box-sizing: border-box;
      //         display: flex;
      //         align-items: center;
      //         justify-content: space-between;
      //         .bqitm_lef{
      //             font-size: 14px;
      //             font-family: PingFangSC-Medium, PingFang SC;
      //             font-weight: 500;
      //             color: #FF9502;
      //         }
      //         .bqitm_rig{
      //             display: flex;
      //             .bqimg{
      //                 width: 24px;
      //                 height: 24px;
      //                 border-radius: 50%;
      //             }
      //         }
      //     }
      // }
    }
  }
  .test_container.row {
    height: 442px;
  }
}
</style>
