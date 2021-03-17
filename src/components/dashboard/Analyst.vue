<template>
  <div class="analyst-box">
    <div class="nav">
      <p class="nav-title">Dashboard</p>
      <div class="btn_container">
        <img :src="downLoad" class="btn_download" />
        <span class="btntxt">一键生成报告</span>
      </div>
    </div>
    <div class="wel_guid_container">
      <div class="welcome">
        <img class="user" src="../../assets/img/login/head1.png" alt="" />
        <div class="user_intro_container">
          <p class="til_img_container"><span>早安，分析师，欢迎使用 Meta-Mind-Marketing！</span><img :src="infoIcon" alt="" srcset="" class="infoIcon-img"/></p>
          <p>
            轻松上手分析模型，探索不同业务中的关键行为，洞察指标背后的增长点。
          </p>
        </div>

          <span class="infoIcon">
              <div class="infoIcon-desc">
                  <div class="infoIcon-desc-item">
                      <i class="iconshujuguanli iconfont"></i>
                      <span>迅速掌握各项数据情报</span>
                  </div>
                  <div class="infoIcon-desc-item">
                      <i class="iconzhinengjuece iconfont"></i>
                      <span>定制化的展示看板</span>
                  </div>
                  <div class="infoIcon-desc-item">
                      <i class="iconbiaoqiantixi iconfont"></i>
                      <span>灵活可配置的分析纬度及标签</span>
                  </div>
                  <div class="infoIcon-desc-item">
                      <i class="iconzhengtigailan iconfont"></i>
                      <span>海量新潮分析模板素材</span>
                  </div>
              </div>
          </span>
      </div>
      <div class="guide_container">
        <div class="guide_title_container">
          <div class="guide_title_lef">
            <span style="margin-right: 4px">新手导航</span>
            <img :src="infoIcon" alt="" srcset="" class="infoIcon" />
            <Progress :percent="45" status="active"></Progress>
            <span>(3/6)</span>
          </div>
          <div class="guide_title_rig" @click="exppandFn">
            <div class="guide_title_rig_til">{{szTxt}}</div>
            <div class="guide_title_rig_icon">
               <i class="iconfont iconup" v-if="ifShowCard"></i>
               <i class="iconfont icondown" v-else></i>
            </div>
          </div>
        </div>
        <div class="card_container" v-show="ifShowCard">
          <vCard0
            v-for="(item, index) in guideList"
            :key="index"
            :cardData="item"
          ></vCard0>
        </div>
      </div>
    </div>
    <div class="kanban_container">
        <div class="title_1container">
            <div class="title_1lef">
                <span>经营情况概览</span>
                <img :src="infoIcon" alt="" srcset="" class="infoIcon" />
                <!-- <span style="color: #2373FF;">系统默认看板</span> -->
            </div>
            <div class="title_1rig">
                <div class="btn_container" style="margin-right:24px;">
                    <!-- <img :src="tvIcon" class="btn_download" /> -->
                    <span class="btntxt btntxt1">看板管理</span>
                </div>
                <div class="btn_container btn2">
                    <!-- <i class="iconxiazai iconfont"></i> -->
                    <span class="btntxt">下载报表</span>
                </div>
            </div>
        </div>
        <div class="kanban_item_container">
            <div class="kanban_item1">
              <img :src="jylefImg" class="jylefImg">
            </div>
            <div class="kanban_item2">
              <vCard2 v-for="(item,index) in jinyinLixt" :key="index" :cardData='item'></vCard2>
            </div>
            <!-- <div class="kanbanitem1">
                <div class="kan_title">分析看板总数</div>
                <div class="kanNum">15<span class="unit">个</span></div>
            </div>
            <div class="kanbanitem2">
                <div class="kan_title">自定义看板</div>
                <div class="kanNum">3<span class="unit">个</span></div>
            </div>
            <div class="kanbanitem3">
                <div class="kan_title">模板素材库</div>
                <div class="kanNum">234<span class="unit">个</span></div>
                <div class="shangsheng"><i class="iconfont iconshangsheng"></i>35</div>
            </div>
            <div class="kanbanitem4">
                <div class="kan_title">行业报告市场</div>
                <div class="kanNum">125<span class="unit">个</span></div>
               <div class="shangsheng"><i class="iconfont iconshangsheng"></i>12</div>
            </div> -->
        </div>
    </div>

    <div class="xit_tab_container">
      <div class="xit_item1">系统默认看板</div>
      <div class="xit_item2">自定义看板一</div>
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>品牌运营概览</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 100%;"></Date-picker>
          </div>
        </div>
        <div class="right_area" @click="goPinpai">
          <span>前往品牌画像</span>
          <img :src="trImg" class="trImg" />
        </div>
      </div>
      <div class="content_container">
        <div class="pin_echarts_container">
          <!-- <div class="pin_title">品牌测评得分</div>
          <div class="pin_echarts_cont_container">
            <div class="pin_content" id="pinId">

            </div>
            <div class="num_text">78</div>
            <div class="fen">分</div>
          </div>
          <div class="intro_container">
            <span class="span1">击败北京</span>
            <span class="span2" style="margin-right:10px;">12.3%</span>
            <span class="span3">品牌</span>
          </div> -->
          <div class="pin_txt_container">
            <div class="pin_txt_til">品牌测评得分</div>
            <div class="pin_txt_intro">击败北京</div>
            <div class="pin_num_con">
              <div class="pin_num">52.3%</div>
              <div class="pin_txt">的品牌</div>
            </div>
          </div>
          <div class="pin_container">
            <i-circle :percent="72" :stroke-color="['rgba(35,115,255,0.3)','#2373FF',]">
                <span style="font-size: 46px;font-family: PingFangSC-Light, PingFang SC;font-weight: 300;color: #242F57;">72</span><br>
                <span style="font-size: 10px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #636E95;">品牌测评</span>
            </i-circle>
          </div>
        </div>

        <vCard1
          v-for="item in ppCardList"
          :key="item.id"
          :cardData="item"
        ></vCard1>
      </div>
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>用户生命周期</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
            <Select v-model="timeRange" style="width: 100%">
              <Option
                v-for="item in timeList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
        <div class="right_area" @click="goUser">
          <span>前往用户画像</span>
          <img :src="trImg" class="trImg" />
        </div>
      </div>
      <div class="content_container">
        <vCard1
          v-for="item in yhCardList"
          :key="item.id"
          :cardData="item"
        ></vCard1>
      </div>
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>媒介概览</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
          </div>
        </div>
        <div class="right_area" @click="goMedia">
          <span>前往媒介画像</span>
          <img :src="trImg" class="trImg" />
        </div>
      </div>
      <div class="title1_container">
          <div class="til_label">整体流量评分</div>
          <div class="date_container">
              <Date-picker type="date" placeholder="选择日期" style="width:100%;"></Date-picker>
          </div>
          <div class="til_label1">核心指标</div>
      </div>
      <div class="progress_content_container">
          <div class="pro_lef">
              <!-- <div class="fen_txt">86.2<span style="font-size: 14px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #7C88B1;">分</span></div>
              <div class="pai_container">
                  <span class="paim">排名</span><span class="goper">前 89%</span>
              </div>
              <div class="progress_container">
                  <Progress :percent="85" status="active"></Progress>
              </div> -->
              <div class="pie_pq_per_container">
                <div class="pie_container">
                  <div class="progrs_con">
                    <i-circle :percent="78" :stroke-color="['rgba(35,115,255,0.3)','#2373FF',]">
                        <span style="font-size: 10px;font-family: PingFangSC-Regular, PingFang SC;font-weight: 400;color: #636E95;">流量评分</span><br>
                        <span style="font-size: 28px;font-family: PingFangSC-Light, PingFang SC;font-weight: 300;color: #242F57;">78</span>
                    </i-circle>
                  </div>
                </div>
                <div class="per_container">
                  <span class="per_txt">排名 前</span>
                  <span class="per_num">86%</span>
                </div>
              </div>
              <div class="pinjun_container">
                <div class="star_container star1">
                  <img :src="star1" class="starimg">
                </div>
                <span class="label">平均分</span>
                <span class="fen_text" style="color: #2373FF;">77.5</span>
              </div>
              <div class="zuigao_container">
                <div class="star_container star2">
                  <img :src="star2" class="starimg">
                </div>
                <span class="label">最高分</span>
                <span class="fen_text" style="color: #34C724;">95.5</span>
              </div>
              <div class="zuidi_container">
                <div class="star_container star3">
                  <img :src="star3" class="starimg">
                </div>
                <span class="label">最低分</span>
                <span class="fen_text" style="color: #FB343E;">54.3</span>
              </div>
          </div>
          <div class="cont_rig">
            <vCard1
            v-for="item in hxzbCardList"
            :key="item.id"
            :cardData="item"
            ></vCard1>
          </div>
      </div>
    </div>

    <div class="pinpai_container">
      <div class="title_container">
        <div class="left_area">
          <span>产品数据评估</span>
          <img :src="gdImg" class="gdImg" />
          <div class="time_range_container">
            <Select v-model="timeRange" style="width: 100%">
              <Option
                v-for="item in timeList"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
      </div>
      <div class="content_container" style=" display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
        <vCard1
          v-for="item in proDataList"
          :key="item.id"
          :cardData="item"
        ></vCard1>
      </div>
    </div>

  </div>
</template>
<script>
import vCard0 from "../common/card0";
import vCard1 from "../common/card1";
import vCard2 from "../common/card2";
export default {
  name: "Analyst",
  components: { vCard0, vCard1,vCard2 },
  data() {
    return {
      guideList: [
        {
          tilIcon: require("../../assets/img/dashboard/newGif.png"),
          title: "领取新人礼包",
          iconfont: "iconxinrenlibao",
          desc:
            "根据您行业属性，我们为您精选出一些通用数据包及行业数据包，希望您会喜欢。",
          statusTxt: "已完成",
          statusIcon: require("../../assets/img/dashboard/checked.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/upData.png"),
          title: "上传数据",
          iconfont: 'iconshangchuanshuju',
          desc: "开启第一步，去上传你的第一个数据文件，列入EXCEL报表文件。",
          statusTxt: "已完成",
          statusIcon: require("../../assets/img/dashboard/checked.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/SDK.png"),
          title: "SDK埋点",
          iconfont: 'iconSDKmaidian',
          desc:
            "使用 SDK 实现数据采集功能，添加跟踪代码即可完成 SDK 的集成，为数据采集和分析做好准备。",
          statusTxt: "已完成",
          statusIcon: require("../../assets/img/dashboard/checked.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/API.png"),
          title: "API采集",
          iconfont: 'iconAPIcaiji',
          desc:
            "为满足广大客户更灵活管理需求，我们提供了一套可以直接调用的 API 接口。",
          statusTxt: "去查看",
          statusIcon: require("../../assets/img/dashboard/tor1.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/sjkzl.png"),
          title: "数据库直连",
          iconfont: 'iconshujukuzhilian',
          desc:
            "采用端口通信的方式进行客户端的数据库连接，安全有保障。连接数据库进行分析，实时性更高。",
          statusTxt: "去查看",
          statusIcon: require("../../assets/img/dashboard/tor1.png"),
        },
        {
          tilIcon: require("../../assets/img/dashboard/help.png"),
          title: "帮助中心",
          iconfont: 'iconbangzhu',
          desc: "查看功能说明，了解智慧营销平台。",
          statusTxt: "去查看",
          statusIcon: require("../../assets/img/dashboard/tor1.png"),
        },
      ],
      infoIcon: require("../../assets/img/dashboard/infoIcon.png"),
      downLoad: require("../../assets/img/dashboard/downLoad.png"),
      whitedownload:require("../../assets/img/dashboard/whitedownload.png"),
      tvIcon:require("../../assets/img/dashboard/tv.png"),
      kanbanIcon: require("../../assets/img/dashboard/kbIcon.png"),
      gdImg: require("../../assets/img/dashboard/infoIcon.png"),
      trImg: require("../../assets/img/dashboard/toR.png"),
      ppCardList: [
        {
          id: 1,
          width: "15%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16",
          time: "今日",
          numText: 134,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 2,
          width: "15%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16",
          time: "今日",
          numText: 567,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 500,
        },
        {
          id: 3,
          width: "15%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16",
          time: "今日",
          numText: 734,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 200,
        },
        {
          id: 4,
          width: "15%",
          title: "GMV",
          timeRange: "2020.10.16～2020.10.16",
          time: "今日",
          numText: 489,
          unitText: "万",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 3000,
        },
      ],
      yhCardList:[
        {
          id: 1,
          width: "15%",
          title: "新用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1234,
          unitText: "人",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 2,
          width: "15%",
          title: "连续活跃用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 101,
          unitText: "人",
          leftText: "",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 3,
          width: "15%",
          title: "回流用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1027,
          unitText: "人",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 2000,
        },
        {
          id: 4,
          width: "15%",
          title: "沉默用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1290,
          unitText: "人",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 2000,
        },
        {
          id: 5,
          width: "15%",
          title: "流失用户",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 1089,
          unitText: "人",
          leftText: "",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 6,
          width: "15%",
          title: "流入流出比",
          timeRange: "2020.10.16～2020.10.16",
          time: "过去3天",
          numText: 0.8,
          unitText: "",
          leftText: "",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 10000,
        },
      ],
      hxzbCardList:[
        {
          id: 1,
          width: "24%",
          title: "今日 UV",
          timeRange: "",
          time: "",
          numText: 799,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 300,
        },
        {
          id: 2,
          width: "24%",
          title: "昨日 UV",
          timeRange: "",
          time: "",
          numText: 1297,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1000,
        },
        {
          id: 3,
          width: "24%",
          title: "新用户",
          timeRange: "",
          time: "",
          numText: 104,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 1500,
        },
        {
          id: 4,
          width: "24%",
          title: "近7日 UV",
          timeRange: "",
          time: "",
          numText: 3904,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 3000,
        },
        {
          id: 5,
          width: "24%",
          title: "近30日 UV",
          timeRange: "",
          time: "",
          numText: 19799,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 1700,
        },
        {
          id: 6,
          width: "24%",
          title: "昨日 UV",
          timeRange: "",
          time: "",
          numText: 1297,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 2000,
        },
        {
          id: 7,
          width: "24%",
          title: "新用户",
          timeRange: "",
          time: "",
          numText: 104,
          unitText: "",
          leftText: "",
          leftIcon: "",
          leftPer: "",
          leftPerColor: "#F54A45",
          rightText: "同比上周",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "8.04",
          rightPerColor: "#34C724",
          timer: 800,
        },
        {
          id: 8,
          width: "24%",
          title: "近7日 UV",
          timeRange: "",
          time: "",
          numText: 3904,
          unitText: "",
          leftText: "同比上周",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "8.04",
          leftPerColor: "#F54A45",
          rightText: "",
          rightIcon: "",
          rightPer: "",
          rightPerColor: "#34C724",
          timer: 1900,
        }
      ],
      timeList: [
        {
          value: "go3",
          label: "过去三天",
        },
        {
          value: "go7",
          label: "过去七天",
        },
        {
          value: "go15",
          label: "过去十五天",
        }
      ],
      proDataList:[
        {
          id: 1,
          width: "24%",
          title: "活跃次数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
          fnType:5
        },
        {
          id: 2,
          width: "24%",
          title: "活跃员工数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 500,
          fnType:5
        },
        {
          id: 3,
          width: "24%",
          title: "活跃企业数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
          fnType:5
        },
        {
          id: 4,
          width: "24%",
          title: "核心功能使用的总次数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
          fnType:5
        },
        {
          id: 5,
          width: "24%",
          title: "核心功能使用员工数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 1847,
          unitText: "人",
          leftText: "环比",
          leftIcon:require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor:"#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 1000,
          fnType:5
        },
        {
          id: 6,
          width: "24%",
          title: "核心功能的企业数",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 972,
          unitText: "个",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 1000,
          fnType:5
        },
        {
          id: 7,
          width: "24%",
          title: "活跃用户中使用核心功能",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 92.47,
          unitText: "%",
          leftText: "环比",
          leftIcon: require("../../assets/img/dashboard/downIcon.png"),
          leftPer: "9.07%",
          leftPerColor: "#F54A45",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/upIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#34C724",
          timer: 100000,
          fnType:5
        },
        {
          id: 8,
          width: "24%",
          title: "核心功能渗透率",
          timeRange: "2020.10.16～2020.10.16 | 本周",
          time: "今日",
          numText: 26.45,
          unitText: "%",
          leftText: "环比",
          leftIcon:require("../../assets/img/dashboard/upIcon.png"),
          leftPer: "9.07%",
          leftPerColor:"#34C724",
          rightText: "同比",
          rightIcon: require("../../assets/img/dashboard/downIcon.png"),
          rightPer: "9.07%",
          rightPerColor: "#F54A45",
          timer: 200000,
          fnType:5
        },
      ],
      timeRange: "go3",
      ifShowCard:true,
      szTxt:'收起详情',
      jinyinLixt:[
        {
          id:0,
          bgc:'#FFE6DE',
          fColor:'#FE774B',
          til:'访问店铺',
          jyNum:'8,639',
          jyUnit:'人',
          ysIcon:require("../../assets/img/dashboard/jyic1.png"),
          jyIcon:require("../../assets/img/dashboard/jyIcon1.png")
        },
        { 
          id:1,
          bgc:'#D3E3FF',
          fColor:'#2373FF',
          til:'商品访客数',
          jyNum:'125,740',
          jyUnit:'次',
          ysIcon:require("../../assets/img/dashboard/jyic2.png"),
          jyIcon:require("../../assets/img/dashboard/jyIcon2.png")
        },
        {
          id:2,
          bgc:'#DFF8F6',
          fColor:'#1DCEC3',
          til:'平均停留时长',
          jyNum:'15.67',
          jyUnit:'分',
          ysIcon:require("../../assets/img/dashboard/jyic3.png"),
          jyIcon:require("../../assets/img/dashboard/jyIcon3.png")
        },
        {
          id:3,
          bgc:'#FFEBF3',
          fColor:'#F16E84',
          til:'支付买家数',
          jyNum:'1,873',
          jyUnit:'人',
          ysIcon:require("../../assets/img/dashboard/jyic4.png"),
          jyIcon:require("../../assets/img/dashboard/jyIcon4.png")
        }
      ],
      jylefImg:require('../../assets/img/dashboard/jylefImg.png'),
      star1:require('../../assets/img/dashboard/star1.png'),
      star2:require('../../assets/img/dashboard/star2.png'),
      star3:require('../../assets/img/dashboard/star3.png'),
    };
  },
  methods:{
      goPinpai(){
        this.$router.push({
            path:'/mark'
        });
      },
      goUser(){
        this.$router.push({
            path:'/user'
        });
      },
      goMedia(){
        this.$router.push({
            path:'/media'
        });
      },
      initEcharts(){
        var that = this;
        setTimeout(() => {
            var value = 12;
            var color = new that.$echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [{
                    offset: 0,
                    color: "rgba(3, 110, 255, .5)",
                },
                    {
                        offset: 1,
                        color: "rgba(3, 110, 255, 1)",
                    }
                ]
            );
            const center = ['28%', '65%']
            var option = {
                grid:{
                    width:'100%',
                    height:'100%',
                    left:0,
                    bottom:0
                },
                series: [
                    {
                        type: 'gauge',
                        startAngle: 180,
                        endAngle: 0,
                        min: 0,
                        max: 100,
                        radius: '70%',
                        center,
                        title: {
                            show: false
                        },
                        detail: {
                            width: '100%',
                            offsetCenter: ['170%', '-10%'],
                            formatter: function (value) {
                                return '';
                            },
                            rich: {
                                value: {
                                    fontSize: 50,
                                    fontWeight: 'bolder',
                                    color: '#4992FF'
                                },
                                unit: {
                                    fontSize: 20,
                                    color: '#999',
                                    padding: [0, 0, 15, 6]
                                },
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            length: 0,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        splitNumber: 5,
                        splitLine: {
                            length: 0,
                            lineStyle: {
                                color: '#999',
                                width: 3
                            }
                        },
                        axisLabel: {
                            color: '#999'
                        },
                        itemStyle: {
                            color: color,
                            shadowColor: 'rgba(0,138,255,0.45)',
                            shadowBlur: 10,
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        },
                        markPoint: {
                            data: [{
                                x: center[0],
                                y: center[1],
                                symbol: 'circle',
                                symbolSize: 4,
                                itemStyle: {
                                    color: "#fff"
                                },
                            }]
                        },
                        data: [{
                            value: value,
                        },]
                    },
                    {
                        type: 'gauge',
                        radius: '80%',
                        startAngle: 180,
                        endAngle: 0,
                        center,
                        min: 0,
                        max: 100,
                        title: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                color: [
                                    [
                                        value / value, color
                                    ],
                                    [
                                        1, 'rgba(225,225,225,0.4)'
                                    ]
                                ],
                            }
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            show: false,
                        },
                        itemStyle: {
                            normal: {
                                color: '#54F200',
                            }
                        },
                    }
                ]

            }
            let myBarChart = that.$echarts.init(document.getElementById("pinId"));
            myBarChart.setOption(option);
            window.onresize = ()=>{
                myBarChart.resize();
            }
        }, 500)
      },
      exppandFn(){
        this.ifShowCard = !this.ifShowCard;
        if(this.ifShowCard){
          this.szTxt = '收起详情';
        }
        else{
          this.szTxt = '展开详情';
        }
      }
  },
  mounted(){
    this.initEcharts()
  }
};
</script>

<style scoped lang="scss">
.analyst-box {
  width: 100%;
  padding: 0 24px;

  .nav {
    width: 100%;
    padding: 16px 0 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn_container {
      padding: 14px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        width: 164px;
        height: 40px;
        background: #FFFFFF linear-gradient(148deg, rgba(220, 225, 236, 0.2) 0%, rgba(255, 255, 255, 0.76) 100%);
        box-shadow: 3px 4px 8px 0px rgba(36, 47, 87, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        cursor: pointer;
      .btn_download {
        display: block;
        width: 18px;
        height: 18px;
        margin-right: 11px;
      }
    }
  }
  .wel_guid_container{
    width: 100%;
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    border-radius: 8px;
    .welcome {
      padding: 24px;
      width: 100%;
      height: 122px;
      position: relative;
      .infoIcon {
        display: block;
        width: 16px;
        height: 16px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }
        .infoIcon:hover .infoIcon-desc {
            display: block;
        }
        .infoIcon-desc {
            display: none;
            position: absolute;
            top: 0;
            right: 20px;
            width: 198px;
            height: 96px;
            padding: 8px;
            background: rgba(219, 234, 255, 0.94);

            box-shadow: 0 0 3px 0 rgba(219, 234, 255, 0.94);
            border-radius: 5px;
            border: 1px solid #4D94FF;
            .infoIcon-desc-item {
                font-size: 12px;
                font-weight: 400;
                color: #636E95;
                line-height: 20px;
                display: flex;
                .iconfont {
                    margin-right: 8px;
                }
            }
        }

      .user {
        margin-right: 24px;
        width: 72px;
        height: 72px;
        box-shadow: 6px 6px 12px 0px rgba(99, 110, 149, 0.2),
          -6px -6px 12px 0px #ffffff;
        border: 1px solid #ffffff;
        border-radius: 50%;
      }

      .user_intro_container {
        display: inline-block;
        vertical-align: top;
        > p {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242f57;
          &:first-child {
            margin-bottom: 12px;
            font-size: 24px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
          }
        }
        .til_img_container{
          display: flex;
          align-items: center;
          :nth-child(1){
            margin-right: 4px;
          }
          .infoIcon-img {
              width: 16px;
              height: 16px;
          }
        }
      }
    }
    .guide_container {
      width: 100%;
      padding: 24px;
      padding-bottom: 8px;
      box-sizing: border-box;
      .guide_title_container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        .guide_title_lef {
          width: 50%;
          display: flex;
          align-items: center;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          .infoIcon {
            display: block;
            width: 16px;
            height: 16px;
            margin-right: 12px;
          }
          ::v-deep .ivu-progress {
            width: 30%;
          }
          ::v-deep .ivu-progress .ivu-progress-text {
            display: none;
          }
          ::v-deep .ivu-progress .ivu-progress-outer {
            padding-right: 10px;
          }
        }
        .guide_title_rig {
          display: flex;
          &:hover{
            cursor: pointer;
          }
          .guide_title_rig_til {
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            margin-right: 4px;
          }
          .guide_title_rig_icon {
            width: 12px;
            height: 6px;
            .iconshouqi{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .card_container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }


  .kanban_container {
    margin-top: 32px;
    width: 100%;
    margin-bottom: 24px;
    border-radius: 12px;
    .title_1container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 21px;
        .title_1lef{
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            display: flex;
            align-items: center;
            .infoIcon{
              display: block;
              margin-left: 4px;
              width: 16px;
            }
        }
        .title_1rig{
            display: flex;
            align-items: center;
            .btn_container {
                padding: 14px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;
                border-radius: 4px;
                border: 1px solid #97A0C3;
                width: 90px;
                height: 32px;
                cursor: pointer;
                .btn_download {
                    display: block;
                    width: 18px;
                    height: 18px;
                    margin-right: 11px;
                }
                .iconfont {
                    font-size: 14px;
                    font-weight: 500;
                    color: #357ffe;
                    line-height: 20px;
                }
            }
            .btn2{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                width: 90px;
                height: 32px;
                background: #2373FF;
                box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
                border-radius: 4px;
                border: 1px solid rgba(255, 255, 255, 0.4);
            }
        }
    }
    .kanban_item_container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 32px;
        .kanban_item1,.kanban_item2{
          width: 49%;
          .jylefImg{
            display: block;
            width: 100%;
            border-radius: 8px;
          }
        }
        .kanban_item2{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        // .kanbanitem1,.kanbanitem2,.kanbanitem3,.kanbanitem4{
        //     width: 24%;
        //     display: flex;
        //     flex-direction: column;
        //     align-items: flex-end;
        //     padding: 24px 0;
        //     box-sizing: border-box;
        //     background: rgba(255, 255, 255, 0.5);
        //     background-size: 100% 100%;
        //     border-radius: 8px;
        //     height: 144px;
        //     // .kan_title{
        //     //     margin-bottom: 12px;
        //     //     font-family: PingFangSC-Medium, PingFang SC;
        //     //     font-weight: 500;
        //     //     margin-right: 24px;
        //     //     font-size: 18px;
        //     //     color: #fff;
        //     // }
        //     // .kanNum{
        //     //     font-size: 48px;
        //     //     margin-right: 24px;
        //     //     color: #fff;
        //     //     font-family: HelveticaNeue-CondensedBold, HelveticaNeue;
        //     //     font-weight: normal;
        //     //     line-height: 48px;
        //     //     .unit {
        //     //         margin-left: 4px;
        //     //         font-size: 18px;
        //     //         font-weight: 500;
        //     //         color: #FFFFFF;
        //     //         line-height: 24px;
        //     //     }
        //     // }
        //     // .shangsheng{
        //     //   font-size: 16px;
        //     //   font-family: PingFangSC-Medium, PingFang SC;
        //     //   font-weight: 500;
        //     //   color: rgba(255, 255, 255, 0.5);
        //     //   margin-right: 24px;
        //     //   display: flex;
        //     //   align-items: center;
        //     //     margin-top: 6px;
        //     //   .iconfont{
        //     //     margin-right: 6px;
        //     //     font-size: 12px;
        //     //   }
        //     // }
        // }
      // .kanbanitem1{
      //   box-shadow: 4px -4px 24px 0px rgba(56, 88, 148, 0.55);
      //   border-radius: 8px;
      //     background-image: url("../../assets/img/dashboard/kanban1.png");
      // }
      // .kanbanitem2{
      //     background-image: url("../../assets/img/dashboard/kanban2.png");
      //   box-shadow: 4px -4px 24px 0px rgba(45, 120, 134, 0.55);
      // }
      // .kanbanitem3{
      //     background-image: url("../../assets/img/dashboard/kanban3.png");
      //   box-shadow: 4px -4px 24px 0px rgba(109, 57, 143, 0.55);
      // }
      // .kanbanitem4{
      //     background-image: url("../../assets/img/dashboard/kanban4.png");
      //   box-shadow: 4px -4px 24px 0px rgba(41, 59, 149, 0.55);
      // }
    }
  }
    .xit_tab_container{
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      .xit_item1,.xit_item2{
        width: 132px;
        height: 48px;
        box-shadow: 4px 5px 10px 0px rgba(134, 143, 191, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
      }
      .xit_item2{
        background: #FFFFFF;
        border-radius: 0px 4px 4px 0px;
      }
      .xit_item1{
        background: #2373FF;
        color: #FFFFFF;
        border-radius: 4px 0px 0px 4px;
      }
    }
  .pinpai_container,
  .yonghu_container,
  .meijie_container,
  .chanpin_container {
    width: 100%;
    min-height: 252px;
    background: #ffffff;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
    margin-bottom: 24px;
    padding: 24px;
    box-sizing: border-box;
    .title_container {
      width: 100%;
      height: 32px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left_area {
        display: flex;
        align-items: center;
        span {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          margin-right: 4px;
        }
        .gdImg {
          display: block;
          width: 16px;
          height: 16px;
          margin-right: 40px;
        }
        .time_range_container {
          width: 276px;
          height: 32px;
        }
      }
      .right_area {
        display: flex;
        align-items: center;
        &:hover{
            cursor: pointer;
        }
        span {
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #7c88b1;
          margin-right: 4px;
        }
        .trImg {
          display: block;
          width: 16px;
          height: 16px;
        }
      }
    }
    .title1_container{
        width: 100%;
        height:32px;
        margin-top: 6px;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        .til_label{
           margin-right: 48px;
        }
        .date_container{
            width: 200px;
            height: 32px;
            margin-right: 29px;
        }
    }
    .progress_content_container{
        width: 100%;
        height:266px;
        display: flex;
        align-items: center;
        .pro_lef{
            width: 345px;
            height: 100%;
            margin-right: 30px;
            .fen_txt{
                width: 100%;
                font-size: 30px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                color: #2373FF;
                margin-bottom: 10px;
            }
            .pai_container{
                width: 100%;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                margin-bottom: 24px;
                .paim{
                    color: #242F57;
                    margin-right: 3px;
                }
                .goper{
                    color: #34C724;
                }
            }
            .progress_container{
                width: 100%;
                height: 8px;
                padding-bottom:32px;
                box-sizing: border-box;
                border-bottom: 1px solid #EAEDF7;
                margin-bottom: 33px;
                ::v-deep .ivu-progress {
                    width: 101%;
                }
                ::v-deep .ivu-progress .ivu-progress-text {
                    display: none;
                }
                ::v-deep .ivu-progress .ivu-progress-outer {
                    padding-right: 10px;
                }
            }
            .pie_pq_per_container{
              width: 100%;
              padding-bottom: 10px;
              box-sizing: border-box;
              border-bottom: 1px #EAEDF7 solid;
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              .pie_container{
                width: 120px;
                height: 120px;
                border-radius: 50%;
                background: #EAEDF7;
                display: flex;
                align-items: center;
                justify-content: center;
                .progrs_con{
                  width: 90px;
                  height: 90px;
                  ::v-deep .ivu-chart-circle{
                    width: 100% !important;
                    height: 100% !important;
                  }
                }
              }
              .per_container{
                .per_txt{
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636E95;
                  margin-right: 7px;
                }
                .per_num{
                  font-size: 30px;
                  font-family: HelveticaNeue-Medium, HelveticaNeue;
                  font-weight: 500;
                  color: #2373FF;
                }
              }
            }
            .pinjun_container,.zuigao_container,.zuidi_container{
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                position: relative;
                margin-top: 21px;
                .star_container{
                  width: 20px;
                  height: 20px;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-right: 8px;
                  .starimg{
                    display: block;
                    width: 12px;
                  }
                }
                .star1{
                  background: #D3E3FF;
                }
                .star2{
                  background: #DFF8F6;
                }
                .star3{
                  background: #FFE6DE;
                }
                .label,.fen_text{
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636E95;
                }
                .fen_text{
                  position: absolute;
                  right: 0;
                }
            }
        }
        .cont_rig{
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
  }
  .pinpai_container {
    .content_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pin_echarts_container {
        width: 366px;
        display: flex;
        align-items: center;
        padding-right: 20px;
        box-sizing: border-box;
        .pin_txt_container{
          flex: 1;
          .pin_txt_til{
            width: 100%;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            margin-bottom: 46px;
          }
          .pin_txt_intro{
            width: 100%;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
          }
          .pin_num_con{
            width: 100%;
            display: flex;
            align-items: baseline;
            .pin_num{
              font-size: 30px;
              font-family: HelveticaNeue-Medium, HelveticaNeue;
              font-weight: 500;
              color: #2373FF;
            }
            .pin_txt{
              margin-left: 4px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #636E95;
            }
          }
        }
        .pin_container{
          width: 140px;
          height: 140px;
          ::v-deep .ivu-chart-circle{
            width: 100% !important;
            height: 100% !important;
          }
        }
        // border-radius: 8px;
        // border: 1px solid #eaedf7;
        // padding: 12px;
        // box-sizing: border-box;
        //  position: relative;
        // .pin_title {
        //   width: 100%;
        //   font-size: 14px;
        //   font-family: PingFangSC-Regular, PingFang SC;
        //   font-weight: 400;
        //   color: #242f57;
        //   margin-bottom: 24px;
        // }
        // .pin_echarts_cont_container {
        //   width: 100%;
        //   display: flex;
        //   align-items: flex-end;
        //   .pin_content {
        //     position: absolute;
        //     width: calc(100% - 24px);
        //     height: calc(100% - 24px);
        //     opacity: 0.8;
        //     // left: -10px;
        //     left: 20px;
        //      top: 18px;
        //     // border: 2px solid #4d94ff;
        //   }
        //   .num_text {
        //     font-size: 30px;
        //     font-family: PingFangSC-Medium, PingFang SC;
        //     font-weight: 500;
        //     color: #34c724;
        //     position: absolute;
        //     right: 32px;
        //     bottom: 31px;
        //     line-height: 38px;
        //   }
        //   .fen {
        //     font-size: 14px;
        //     font-family: PingFangSC-Regular, PingFang SC;
        //     font-weight: 400;
        //     color: #7c88b1;
        //     position: absolute;
        //     right: 13px;
        //     bottom: 31px;
        //   }
        // }
        // .intro_container {
        //   position: absolute;
        //   top: 111px;
        //   left: 18px;
        //   width: 100%;
        //   display: flex;
        //   align-items: center;
        //   font-size: 12px;
        //   font-family: PingFangSC-Regular, PingFang SC;
        //   font-weight: 400;
        //   color: #7c88b1;
        //   line-height: 18px;
        //   margin-top: 12px;
        //   .span2 {
        //     color: #ff2744;
        //   }
        // }
      }
    }
  }
}
</style>
