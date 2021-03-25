<template>
    <div class="dx_Item_container">
        <div :class="['test_container1', { width: !onlyMap }]">
            <div class="mapContainer">
                <div class="area_timer_choice_container">
                    <div class="choice_btn_area">
                        <div class="choice_btn_top" :class="{'activeBtn' : currentBtn == 1}" @click="choiceat(1)">位置区域</div>
                        <div class="choice_btn_bom" :class="{'activeBtn' : currentBtn == 2}" @click="choiceat(2)">研究时段</div>
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
                                <div class="cirle_dian" :class="{'activeDian' : current == 6}" @click="clickTime(6)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 8}" @click="clickTime(8)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 10}" @click="clickTime(10)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 12}" @click="clickTime(12)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 14}" @click="clickTime(14)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 16}" @click="clickTime(16)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 18}" @click="clickTime(18)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 20}" @click="clickTime(20)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 22}" @click="clickTime(22)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 24}" @click="clickTime(24)"></div>
                            </div>
                        </div>
                        <div class="timer121" v-else>
                            <div class="timer121_item" :class="{'activetimer' : timerIdx == index}" v-for="(item,index) in districtList" :key="index" @click="clickTimeItem(index,item)">{{item}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="['conditions_container-box', { width: !onlyMap }]">
            <div :class="['conditions_container', { 'conditions_container_row': onlyMap }]">
                <div class="conditions_lef">
                    <div class="condition_label">条件筛选</div>
                    <div class="condition_item" v-for="(itm,inx) in condiList" :key="inx"><span>{{itm}}</span>
                        <!--<i class="iconfont iconClose" style="font-size: 12px;"></i>-->
                    </div>

                    <!-- <div class="condition_item"><span>{{condiObj.label2}}</span> -->
                        <!--<i class="iconfont iconClose" style="font-size: 12px;"></i>-->
                    <!-- </div> -->
                    <!-- <div class="condition_item"><span>{{condiObj.label3}}</span> -->
                        <!--<i class="iconfont iconClose" style="font-size: 12px;"></i>-->
                    <!-- </div> -->
                    <!-- <div class="condition_item"><span>{{condiObj.label4}}</span> -->
                        <!--<i class="iconfont iconClose" style="font-size: 12px;"></i>-->
                    <!-- </div> -->
                </div>
                <div class="conditions_rig" @click="expandCond">更多筛选条件</div>
            </div>
        </div>

        <div class="condition_content" v-if="ifShowCon">
            <!-- <div class="condition_lef">
                <img :src="conditImg" alt="" srcset="" class="conditImg">
            </div> -->
          <div class="target-left">
            <div class="l-item">
              <div class="l-item-label">常用标签</div>
              <div class="item-list" v-for="(item, index) in target" :key="index">
                <div class="item-con">
                  <div class="name" :class="{'act':item==cur}" @click="cur=item">{{ item }}</div>
                  <i class="iconfont iconleft-arrow21"></i>
                </div>
              </div>
            </div>
            <div class="l-item">
              <div class="l-item-label">属性维度</div>
              <div class="item-list" v-for="(item, index) in property" :key="index" >
                <div class="item-con">
                  <div class="name" :class="{'act':item==cur}" @click="cur=item">{{ item }}</div>
                  <i class="iconfont iconleft-arrow21"></i>
                </div>
              </div>
            </div>
            <div class="l-item">
              <div class="l-item-label">用户行为</div>
              <div class="item-list" v-for="(item, index) in behavior" :key="index" >
                <div class="item-con">
                  <div class="name" :class="{'act':item==cur}" @click="cur=item">{{ item }}</div>
                  <i class="iconfont iconleft-arrow21"></i>
                </div>
              </div>
            </div>
          </div>
            <div class="condition_rig">
                <div class="con_item_container">
                    <div class="con_item_label">年龄</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="ninlinItem" v-for="(item,index) in nilinList" :key="index" @click="nianlinClick(index,'ninlinItem')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">性别</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="xingbieItem" v-for="(item,index) in sexList" :key="index" @click="nianlinClick(index,'xingbieItem')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">有小孩</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="hasChild" v-for="(item,index) in hasChildList" :key="index" @click="nianlinClick(index,'hasChild')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">消费水平</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="xflevel" v-for="(item,index) in xiaofeiList" :key="index" @click="nianlinClick(index,'xflevel')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">婚姻</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="huny" v-for="(item,index) in huyList" :key="index" @click="nianlinClick(index,'huny')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">职业</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="jobdom" v-for="(item,index) in jobList" :key="index" @click="nianlinClick(index,'jobdom')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container queding_container">
                    <div class="quedingbtn" @click="submit">确定</div>
                </div>
            </div>
        </div>
        <div class="mianban_container" v-if="ifShowMb" @mouseout="hideMe">
            <img :src="quyResult" alt="" srcset="" class="quyResult">
        </div>
        <div :class="['test_container', { row: onlyMap }]">
            <div class="mapContainer" id="mapContainer">

            </div>
            <div v-if="!onlyMap" class="per_info_container">
                <!-- <div class="yhdx_title">
                    <div class="yhdx_title_top">
                        用户动线分析结果
                    </div>
                    <div class="yhdx_title_bom">
                        2020/12/14
                    </div>
                </div> -->
                <!-- <div class="switch_container">
                    <div class="data_title">数据图表</div>
                    <div class="switch_contianer">
                        <i-switch v-model="switch1"></i-switch>
                    </div>
                    <div class="data_title" style="color: #97A0C3;">智能解读</div>
                </div> -->

                <!-- <div class="nl_card_container">
                    <div class="til_label">
                        用户状态
                        <Poptip popper-class="saas-poptip" placement="right-start">
                            <i class="iconfont iconguanyuline1 tip-icon"></i>
                            <div slot="content">
                                <p v-if="[6, 8, 10].includes(current)">用户群体主要处于通勤及工作状态，偏好社交娱乐类型的APP，时间段内对出行、外卖餐饮类的生活服务APP需求显著，成为重要触点，情绪偏向紧张和烦躁</p>
                                <p v-if="[12, 14, 16].includes(current)">用户群体处于工作午间休整状态，偏好浏览美食餐饮、外卖服务类的APP，处理工作相关信息，情绪主要表现为紧张和一般</p>
                                <p v-if="[18, 20, 22, 24].includes(current)">用户群体处于通勤及加班工作状态，部分用户仍然在处理工作事务，其他用户处于通勤途中，浏览新闻及娱乐信息，情绪分布较为平均</p>
                            </div>
                        </Poptip>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">放松</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat1" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">紧张</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat2" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">一般</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat3" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">烦躁</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat4" status="active"></Progress></div>
                    </div>
                </div> -->

                <!-- <div class="chufa_card_container">
                    <div class="til_label">出发地</div>
                    <div class="chufadi_container">
                        <div class="diItem" v-if="rightPanelData.chufaObj.chufa1">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.chufaObj.chufa1}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.chufaObj.chufa2">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.chufaObj.chufa2}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.chufaObj.chufa3">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.chufaObj.chufa3}}</span>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="mudd_container">
                    <div class="til_label">目的地</div>
                    <div class="chufadi_container">
                        <div class="diItem" v-if="rightPanelData.mudiObj.mudi1">
                            <img :src="locaIcon" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.mudiObj.mudi1}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.mudiObj.mudi2">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.mudiObj.mudi2}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.mudiObj.mudi3">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.mudiObj.mudi3}}</span>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="tqfs_container">
                    <div class="til_label">通勤方式</div>
                    <div class="cx_type_container">
                        <div class="cx_item" v-if="rightPanelData.tonqinTypeObj.tqType1">
                            <img :src="rightPanelData.tonqinTypeObj.tqType1Icon" alt="" srcset="" class="cxlogo">
                            <span class="cxtxt">{{rightPanelData.tonqinTypeObj.tqType1}}</span>
                        </div>
                        <div class="cx_item" v-if="rightPanelData.tonqinTypeObj.tqType2">
                            <img :src="drIcon" alt="" srcset="" class="cxlogo">
                            <span class="cxtxt">{{rightPanelData.tonqinTypeObj.tqType2}}</span>
                        </div>
                    </div>
                </div> -->

                <!-- <div class="tqsjylx_container">
                    <div class="til_label">通勤时间与路程</div>
                    <div class="haoshi_container">
                        <img :src="tbIcon" alt="" srcset="" class="timeBiao">
                        <span style="margin-right:16px;">平均耗时</span>
                        <span>{{rightPanelData.tongqinTimeObj.timeN}}分钟</span>
                    </div>
                </div> -->

                <!-- <div class="nl_card_container">
                    <div class="til_label">年龄占比</div>
                    <div class="pro_container">
                        <div class="pro_label">15-25岁</div>
                        <div class="pro"><Progress :percent="30" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">25-35岁</div>
                        <div class="pro"><Progress :percent="30" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">35-45岁</div>
                        <div class="pro"><Progress :percent="20" status="active"></Progress></div>
                    </div>
                </div> -->

                <!-- <div class="sex_card_container">
                    <div class="til_label">性别占比</div>
                    <div class="sex_tu_container">
                        <div class="man"></div>
                        <div class="women"></div>
                    </div>
                    <div class="sex_per_container">
                        <div class="man_per">65%</div>
                        <div class="women_per">35%</div>
                    </div>
                    <div class="sex_per_container">
                        <div class="mansex">男性</div>
                        <div class="womensex">女性</div>
                    </div>
                </div> -->

                <div class="person_til">用户触达策略</div>
                <div class="person_con_con" ref="person_con_con">
                  <div class="perxon_tab_con">
                    <div class="perxon_tab_con_lef" @click="clickPerTab(1)">投放方案推荐</div>
                    <div class="perxon_tab_con_rig" @click="clickPerTab(0)">自定义媒介投放</div>
                  </div>
                  <div class="person_tffatj_con" v-if="ifShowtffatj">
                    <div class="top_img_con">
                      <div class="top_img_con_lef">
                        <img :src="fanganObj.qdObj1.icon" class="douyIcon">
                        <div class="con_lef_label">{{fanganObj.qdObj1.name}}</div>
                        <div class="con_lef_num">{{fanganObj.qdObj1.money}}</div>
                        <div class="con_lef_label">触达率</div>
                        <div class="con_lef_num1">{{fanganObj.qdObj1.vdlNum}}</div>
                      </div>
                      <div class="top_img_con_rig">
                        <img :src="fanganObj.qdObj2.icon" class="douyIcon">
                        <div class="con_lef_label">{{fanganObj.qdObj2.name}}</div>
                        <div class="con_lef_num">{{fanganObj.qdObj2.money}}</div>
                        <div class="con_lef_label">触达率</div>
                        <div class="con_lef_num1">{{fanganObj.qdObj2.vdlNum}}</div>
                      </div>
                    </div>
                    <div class="tf_time">建议投放时间段</div>
                    <div class="tf_time_txt1">
                      <div class="cir_txt_con">
                        <div class="cir_con"></div>
                        <div class="qu_dao_name">{{fanganObj.qdObj1.name}}</div>
                      </div>
                      <div class="tim_txt_con">{{fanganObj.qdObj1.timeRang}}</div>
                    </div>
                    <div class="tf_time_txt2">
                      <div class="cir_txt_con">
                        <div class="cir_con" style="background:#FE774B;"></div>
                        <div class="qu_dao_name">{{fanganObj.qdObj2.name}}</div>
                      </div>
                      <div class="tim_txt_con">{{fanganObj.qdObj2.timeRang}}</div>
                    </div>
                    <div class="tf_time">预期效果</div>
                    <div class="yqxg_con_con">
                      <div class="yqxg_con_con_item" v-for="(itm,inx) in yqxgList" :key="inx">
                        <div class="yqxg_til">{{itm.til}}</div>
                        <div class="yqxg_num_desc">{{itm.desc}}</div>
                      </div>
                    </div>
                  </div>
                  <div class="person_tffatj_con" v-else>
                    <div class="tf_time">投放预算 (元)</div>
                    <div class="tfys_input_con">
                      <i :class="['iconfont','iconjine']" class="cmon"></i>
                      <Input v-model="tfys" placeholder="请输入价格" class="input_con"/>
                      <span class="zhi">至</span>
                    </div>
                    <div class="tfys_input_con">
                      <i :class="['iconfont','iconjine']" class="cmon"></i>
                      <Input v-model="tfys1" placeholder="请输入价格" class="input_con" />
                    </div>
                    <div class="tf_time">选择投放媒介</div>
                    <div class="tfmjchoice_con">
                      <div class="meijie_item" :class="{'actBor':itm.check}" v-for="(itm,inx) in meijieList" :key="inx">
                        <Checkbox v-model="itm.check" @on-change="changeNews(itm)"></Checkbox>
                        <img :src="itm.srcIm" class="srcIMG">
                        <div class="qudtil">{{itm.til}}</div>
                      </div>
                    </div>
                    <div class="tf_time tfjy1">投放建议</div>
                    <div class="touf_pie">
                      <div class="touf_pie_con">
                        <div class="touf_pie_til">投放金额</div>
                        <div class="touf_pie_con_con">
                          <PieEcharts1 :colorList="$fjData.colorList" :myData="chuData"></PieEcharts1>
                        </div>
                      </div>
                    </div>
                    <div class="tfjyq_con">
                      <div class="yqxg_con_con yqxg_con_con1">
                        <div class="yqxg_con_con2">
                          <div class="yqxg_con_con1_tilm">投放时间</div>
                          <div class="yqxg_con_con1_con" v-for="(item,index) in rangetList" :key="index">
                            <div class="time_rang">{{item.time}}</div>
                            <div class="meij_name">{{item.name}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tfjyq_con">
                      <div class="yqxg_con_con">
                        <div class="yqxg_con_con_item" v-for="(itm,inx) in yqxgList1" :key="inx">
                          <div class="yqxg_til">{{itm.til}}</div>
                          <div class="yqxg_num_desc yqxg_num_desc1">{{itm.desc}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="yhxw_container">
                <!-- <div class="yhxw_title">用户行为</div>
                <div class="bqitm_container">
                    <div class="bqitm" v-for="(it, i) in bqitmList" :key="i">
                        <div class="bqitm_lef" :style="`color: ${colorConfig[it.name]}`">{{it.name}}</div>
                        <div class="bqitm_rig">
                            <img v-for="(item,index) in it.icons" :src="item.icon" :key="index" alt="" class="bqimg">
                        </div>
                    </div>
                </div> -->
                <div class="tab_item">
                  <div class="tab_item_item mbitem1" @click="changMbItem(0)">基础画像</div>
                  <div class="tab_item_item mbitem2" @click="changMbItem(1)">行为分析</div>
                  <div class="tab_item_item mbitem3" @click="changMbItem(2)">心智分析</div>
                  <div class="tab_item_item mbitem4" @click="changMbItem(3)">生命周期分析</div>
                </div>
                <div class="tab_con" ref="tab_con">
                  <div class="tab_content" v-if="ifShowtcon">
                    <div class="tab_content_item" ref="tab_content_item" v-for="(item,index) in tabconList" :key="index" :class="{'remb':((index==5 || index==6))}">
                      <div class="tab_content_item_top">{{item.til}}</div>
                      <div class="tab_content_item_bom" v-if="item.descList">
                         <div class="tab_content_item_bom_item" v-for="(itm1,inx) in item.descList" :key="inx">{{itm1}}</div>
                      </div>
                      <div class="icon_contai" v-if="item.ticList">
                        <div class="icon_contai_itm" v-for="(itm1,inx) in item.ticList" :key="inx">
                          <img :src="itm1.ic" class="icon_im">
                          <div class="imitro">{{itm1.txt}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab_content" v-else>
                    <div class="tab_content_item1">
                      <div class="tab_content_item1_cir"></div>
                      <div class="tab_content_item1_con">早期客户留存转化率较低，需要加大投放力度；</div>
                    </div>
                    <div class="tab_content_item1">
                      <div class="tab_content_item1_cir"></div>
                      <div class="tab_content_item1_con">成熟期及休眠期的用户消费潜力巨大，品牌方应充分挖掘其价值；</div>
                    </div>
                    <div class="tab_content_item1">
                      <div class="tab_content_item1_cir"></div>
                      <div class="tab_content_item1_con">用户在餐饮百货品类价值贡献度高，可迎合其偏好制定策略。</div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PieEcharts1 from '@/components/echarts/common/pie/PieEcharts1';
    const allBqitm = {
    xhs: {
      icon: require("../../assets/img/yhhx/xhs.png")
    },
    ks: {
      icon: require("../../assets/img/yhhx/ks.png")
    },
    wb: {
      icon: require("../../assets/img/yhhx/wb.png")
    },
    tt: {
      icon: require("../../assets/img/yhhx/tt.png")
    },
    zhIcon: {
      icon: require("../../assets/img/yhhx/zhIcon.png")
    },
    dyI: {
      icon: require("../../assets/img/yhhx/dyI.png")
    },
    dd: {
      icon: require("../../assets/img/yhhx/dd.jpg")
    },
    dc: {
      icon: require("../../assets/img/yhhx/dc.jpg")
    },
    bx: {
      icon: require("../../assets/img/yhhx/bx.jpeg")
    },
    wx: {
      icon: require("../../assets/img/yhhx/wx.jpeg")
    },
    qq: {
      icon: require("../../assets/img/yhhx/qq.jpg")
    },
    pyq: {
      icon: require("../../assets/img/yhhx/pyq.png")
    },
    mt: {
      icon: require("../../assets/img/yhhx/mt.jpeg")
    },
    elm: {
      icon: require("../../assets/img/yhhx/elm.jpeg")
    },
    dz: {
      icon: require("../../assets/img/yhhx/dz.jpg")
    },
    wy: {
      icon: require("../../assets/img/yhhx/wyIcon.png")
    },
    wzry: {
      icon: require("../../assets/img/yhhx/wzry.jpeg")
    },
    jdqs: {
      icon: require("../../assets/img/yhhx/jdqs.png")
    },
    xxl: {
      icon: require("../../assets/img/yhhx/xxl.jpg")
    },
  }
    export default {
        name: "dxItem",
        props: ['onlyMap'],
        data(){
            return{
                current:8,
                currentBtn:2,
                AMap: null,
                switch1:true,
                yhdxImg:require("../../assets/img/yhhx/yhdxImg.png"),
                closeIcon:require("../../assets/img/yhhx/icon_close.png"),
                locaIcon:require("../../assets/img/yhhx/dwIcon.png"),
                // dtIcon:require("../../assets/img/yhhx/dtIcon.png"),
                drIcon:require("../../assets/img/yhhx/drIcon.png"),
                tbIcon:require("../../assets/img/yhhx/tbIcon.png"),
                // tbIcon:require("../../assets/img/yhhx/bgImg.png"),
                xhsIcon:require("../../assets/img/yhhx/xhs.png"),
                quyResult:require("../../assets/img/yhhx/quyResult.png"),
                bqitmList: [
                {
                  name: '出行',
                  icons: [
                    allBqitm.dd,
                    allBqitm.dc,
                    allBqitm.bx,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.xhs,
                    allBqitm.ks,
                    allBqitm.wb,
                  ]
                }
                ],
                districtList:[
                    '朝阳区','海淀区','丰台区','西城区','东城区','石景山区','昌平区','通州区','顺义区','房山区','门头沟区','大兴区','怀柔区','延庆区','平谷区','密云区'
                ],
                ifShowTime:true,
                timerIdx:0,
                // timeType:8,
                ifShowMb:false,
                ifShowCon:false,
                // conditImg:require("../../assets/img/yhhx/conditImg.png"),
                cur:"基本信息",
                target: ["自定义标签", "基本信息", "兴趣爱好", "设备属性"],
                property: ["用户维度", "媒介维度", "品牌维度"],
                behavior: ["线上行为", "线下行为"],
                nilinList:['18-24','35-44','45+'],
                sexList:['男','女'],
                hasChildList:['妈妈','母婴','二胎','中学生家长','0-3岁小孩父母','3-6岁小孩父母','孕期','备孕','小学生家长'],
                xiaofeiList:['高','中','低'],
                huyList:['约会','相亲','已婚','未婚'],
                jobList:['网约车司机','广告','大学生','医生','金融','IT','程序员','教师货车司机'],
                condiObj:{
                    label1:'开车',
                    label2:'25-35岁',
                    label3:'消费高',
                    label4:'已婚',
                },
                rightPanelData:{
                    userStatObj:{
                        stat1:16,
                        stat2:26,
                        stat3:39,
                        stat4:19
                    },
                    chufaObj:{
                        chufa1:'五道口',
                        chufa2:'西二旗',
                        chufa3:'上地'
                    },
                    mudiObj:{
                        mudi1:'中关村',
                        mudi2:'软件园',
                        mudi3:'龙泽'
                    },
                    tonqinTypeObj:{
                        tqType1:'地铁',
                        tqType1Icon:require("../../assets/img/yhhx/dtIcon.png"),
                        tqType2:'开车',
                    },
                    tongqinTimeObj:{
                        timeN:30
                    }
                },
                colorConfig: {
                  新闻: '#017AFF',
                  视频: '#5AC8FA',
                  娱乐: '#FF9502',
                  交流: '#a49dfa',
                  出行: '#CECE7E',
                  餐饮: '#8AE6C7',
               },
               tabconList:[
                 {
                  til:'年龄结构',
                  descList:['20-29岁'],
                  ticList:null
                 },
                 {
                  til:'收入结构',
                  descList:['15-25k'],
                  ticList:null
                 },
                 {
                  til:'职业结构',
                  descList:['白领'],
                  ticList:null
                 },
                 {
                  til:'行业结构',
                  descList:['互联网'],
                  ticList:null
                 },
                 {
                  til:'教育背景',
                  descList:['本科以上'],
                  ticList:null
                 },
                 {
                  til:'居住地区',
                  descList:['一线城市'],
                  ticList:null
                 },
                 {
                  til:'主要出行方式',
                  descList:null,
                  ticList:[
                    {
                      ic:require("../../assets/img/yhhx/ditieIcon.png"),
                      txt:'地铁（5号线、10号线、13号线）'
                    },
                    {
                      ic:require("../../assets/img/yhhx/drIcon.png"),
                      txt:'自驾'
                    }
                  ]
                 }
               ],
               tabconList0:[
                 {
                  til:'年龄结构',
                  descList:['20-29岁'],
                  ticList:null
                 },
                 {
                  til:'收入结构',
                  descList:['15-25k'],
                  ticList:null
                 },
                 {
                  til:'职业结构',
                  descList:['白领'],
                  ticList:null
                 },
                 {
                  til:'行业结构',
                  descList:['互联网'],
                  ticList:null
                 },
                 {
                  til:'教育背景',
                  descList:['本科以上'],
                  ticList:null
                 },
                 {
                  til:'居住地区',
                  descList:['一线城市'],
                  ticList:null
                 },
                 {
                  til:'主要出行方式',
                  descList:null,
                  ticList:[
                    {
                      ic:require("../../assets/img/yhhx/ditieIcon.png"),
                      txt:'地铁（5号线、10号线、13号线）'
                    },
                    {
                      ic:require("../../assets/img/yhhx/drIcon.png"),
                      txt:'自驾'
                    }
                  ]
                 }
               ],
               tabconList1:[
                 {
                  til:'APP使用结构',
                  descList:['用户对短视频类APP偏好明显，微博成为重要社交平台'],
                  ticList:null
                 },
                 {
                  til:'内容偏好结构',
                  descList:['通讯社交及交通出行类覆盖度高，各种类型内容均能吸引一定的忠实用户'],
                  ticList:null
                 },
                 {
                  til:'用户行为分布结构',
                  descList:['用户群体工作休闲两不误，放松休闲活动较多，需求强烈'],
                  ticList:null
                 },
                 {
                  til:'不同性别APP内容偏好',
                  descList:['85%的女性喜欢开箱测评类内容；60%的男性喜欢深度测评类内容'],
                  ticList:null
                 }
               ],
               tabconList2:[
                 {
                  til:'敏感/厌恶',
                  descList:['添加剂','卫生条件差','糖分超标'],
                  ticList:null
                 },
                 {
                  til:'风格偏好',
                  descList:['INS风','性冷淡风'],
                  ticList:null
                 },
                 {
                  til:'话题偏好',
                  descList:['健康运动','金融理财','育儿亲子'],
                  ticList:null
                 },
                 {
                  til:'个人标签',
                  descList:['新锐白领','宝藏浪姐','潮酷女孩'],
                  ticList:null
                 }
               ],
               ifShowtcon:true,
               yqxgList:[
                 {
                   til:'触达用户：',
                   desc:'28万'
                 },
                 {
                   til:'互动量提升：',
                   desc:'12%'
                 },
                 {
                   til:'品牌印象提升：',
                   desc:'7%'
                 },
                 {
                   til:'销售转化率：',
                   desc:'3%'
                 },
               ],
               yqxgList1:[
                 {
                   til:'触达率',
                   desc:'46%'
                 },
                 {
                   til:'投放成本',
                   desc:'¥2300/千人'
                 }
               ],
               ifShowtffatj:true,
               tfys:'10000元',
               tfys1:'25000元',
               meijieList:[
                 {
                   check:true,
                   srcIm:require("../../assets/img/yhhx/xhs.png"),
                   til:'小红书',
                   num:6000
                 },
                 {
                   check:false,
                   srcIm:require("../../assets/img/yhhx/tt.png"),
                   til:'头条',
                   num:3000
                 },
                 {
                   check:true,
                   srcIm:require("../../assets/img/yhhx/ks.png"),
                   til:'快手',
                   num:4000
                 },
                 {
                   check:false,
                   srcIm:require("../../assets/img/yhhx/weib1.png"),
                   til:'微博',
                   num:4000
                 }
               ],
               fanganObj:{
                 qdObj1:{
                  icon: require("../../assets/img/yhhx/tt.png"),
                  name:'今日头条',
                  money:'￥9200',
                  vdlNum:'53%',
                  timeRang:'8:00 - 9:30'
                 },
                 qdObj2:{
                  icon: require("../../assets/img/yhhx/wyIcon.png"),
                  name:'网易',
                  money:'￥3200',
                  vdlNum:'43%',
                  timeRang:'7:40 - 8:30'
                 }
               },
               fanganObj1:{
                 qdObj1:{
                  icon: require("../../assets/img/yhhx/tt.png"),
                  name:'今日头条',
                  money:'￥9200',
                  vdlNum:'53%',
                  timeRang:'8:00 - 9:30'
                 },
                 qdObj2:{
                  icon: require("../../assets/img/yhhx/wyIcon.png"),
                  name:'网易',
                  money:'￥3200',
                  vdlNum:'43%',
                  timeRang:'7:40 - 8:30'
                 }
               },
               fanganObj2:{
                 qdObj1:{
                  icon: require("../../assets/img/yhhx/wx.jpeg"),
                  name:'微信',
                  money:'￥7200',
                  vdlNum:'43%',
                  timeRang:'12:00 - 1:00'
                 },
                 qdObj2:{
                  icon: require("../../assets/img/yhhx/dz.jpg"),
                  name:'大众点评',
                  money:'￥2200',
                  vdlNum:'30%',
                  timeRang:'11:20 - 12:30'
                 }
               },
               fanganObj3:{
                 qdObj1:{
                  icon: require("../../assets/img/yhhx/dyI.png"),
                  name:'抖音',
                  money:'￥17200',
                  vdlNum:'73%',
                  timeRang:'19:00 - 23:00'
                 },
                 qdObj2:{
                  icon: require("../../assets/img/yhhx/weib1.png"),
                  name:'新浪微博',
                  money:'￥5200',
                  vdlNum:'40%',
                  timeRang:'19:20 - 22:30'
                 }
               },
               condiList:[],
               nlList:[],
               xingbieList:[],
               hasChList:[],
               xiaoFList:[],
               huyiList:[],
               zhYList:[],
               chuData:{
                name: ['快手', '小红书'],
                value: [4000, 6000]
               },
               rangetList:[
                 {
                   time:'19:00 - 20:30',
                   name:'小红书'
                 },
                 {
                   time:'22:00 - 22:30',
                   name:'快手'
                 }
               ]
            }
        },
        components:{
          PieEcharts1
        },
        mounted(){
            var path = [
                [116.294134,39.958747],
                [116.295593,39.947957],
                [116.296881,39.93236],
                [116.310356,39.932426],
                [116.310013,39.924265],
                [116.355932,39.923606],
                [116.355847,39.932295],
                [116.433952,39.933874],
                [116.433952,39.933874],
                [116.489751,39.93361]
            ];
            var path1 = [
            [116.354029,39.967758],
            [116.357291,39.944046],
            [116.355402,39.940888],
            [116.356776,39.907845],
            [116.349222,39.896783],
            [116.348879,39.873073]
            ];
            var path2 = [
            [116.416903,39.969085],
            [116.418791,39.952349],
            [116.416388,39.950801],
            [116.416388,39.950801],
            [116.418019,39.91164],
            [116.418362,39.900843]
            ];
            var cir1 = [116.310356,39.932426];
            var cir2 = [116.433529,39.941237];
            this.initMap(path,path1,path2,cir1,cir2,'中国');
            this.changMbItem(0);
            this.clickPerTab(1);
        },
        methods:{
            changeNews(){
              var that = this;
              var myDataList = this.meijieList;
              var nameList = [];
              var valueList = [];
              this.rangetList = [];
              for(var i=0;i<myDataList.length;i++){
                if(myDataList[i].check){
                  nameList.push(myDataList[i].til);
                  valueList.push(myDataList[i].num);
                }
              }
              nameList.forEach((item,index)=>{
                if(item == '小红书'){
                  this.rangetList.push({
                    name:'小红书',
                    time:'19:00 - 20:30'
                  });
                }
                else if(item == '快手'){
                  this.rangetList.push({
                    name:'快手',
                    time:'22:00 - 22:30'
                  });
                }
                else if(item == '头条'){
                  this.rangetList.push({
                    name:'头条',
                    time:'20:00 - 21:00'
                  });
                }
                else if(item == '微博'){
                  this.rangetList.push({
                    name:'微博',
                    time:'11:30 - 13:30'
                  });
                }
              });
              this.chuData = { name:nameList, value:valueList };
            },
            clickPerTab(arg){
              var conDom = this.$refs.person_con_con;
              let actLef = require('../../assets/img/yhhx/actLef.png');
              let actrig = require('../../assets/img/yhhx/actRig.png');
              if(arg == 1){
                conDom.style=`background-image: url(${actLef});background-size: cover;`;
              }
              else{
                conDom.style=`background-image: url(${actrig});background-size: contain;background-repeat:no-repeat;`;
              }
              
              this.ifShowtffatj = arg;
            },
            changMbItem(arg){
              var tabDom = this.$refs.tab_con;
              var tabDom1 = this.$refs.tab_content_item || [];
              var bgc0 = '#F0F8FF';
              var bgc1 = '#D3E3FF';
              var bgc2 = '#9ECBFF';
              var bgc3 = '#4488FF';
              console.log(tabDom1,'tabDom')
              if(arg == 0){
                this.ifShowtcon = true;
                tabDom.style=` background:${bgc0};`;
                this.tabconList = this.tabconList0;
                setTimeout(()=>{
                  for(var i=0;i<tabDom1.length;i++){
                    tabDom1[i].style=" margin-right: 75px;";
                  }
                },100);
              }
              else if(arg == 1){
                this.ifShowtcon = true;
                tabDom.style=` background: ${bgc1};`;
                this.tabconList = this.tabconList1;
                setTimeout(()=>{
                  for(var i=0;i<tabDom1.length;i++){
                    tabDom1[i].style="margin-right: 27px;";
                  }
                },100);
              }
              else if(arg == 2){
                this.ifShowtcon = true;
                tabDom.style=` background: ${bgc2};`;
                this.tabconList = this.tabconList2;
                setTimeout(()=>{
                  for(var i=0;i<tabDom1.length;i++){
                    tabDom1[i].style=" margin-right: 87px;";
                  }
                },50);
              }
              else if(arg == 3){
                this.ifShowtcon = false;
                tabDom.style=` background: ${bgc3};`;
              }
            },
            submit(){
                this.ifShowCon = false;
                this.condiObj = {
                    label1:'中学生家长',
                    label2:'低',
                    label3:'已婚',
                    label4:'广告',
                };
                var itemDom1 = this.$refs['ninlinItem'] || [];
                var itemDom2 = this.$refs['xingbieItem'] || [];
                var itemDom3 = this.$refs['hasChild'] || [];
                var itemDom4 = this.$refs['xflevel'] || [];
                var itemDom5 = this.$refs['huny'] || [];
                var itemDom6 = this.$refs['jobdom'] || [];

                for(var i=0;i<itemDom1.length;i++){
                    if(itemDom1[i].style.background == 'rgb(35, 115, 255)'){
                      this.nlList.push(itemDom1[i].innerText)
                    }
                }


                for(var i=0;i<itemDom2.length;i++){
                    if(itemDom2[i].style.background == 'rgb(35, 115, 255)'){
                      this.xingbieList.push(itemDom2[i].innerText)
                    }
                }


                for(var i=0;i<itemDom3.length;i++){
                    if(itemDom3[i].style.background == 'rgb(35, 115, 255)'){
                      this.hasChList.push(itemDom3[i].innerText)
                    }
                }


                for(var i=0;i<itemDom4.length;i++){
                    if(itemDom4[i].style.background == 'rgb(35, 115, 255)'){
                      this.xiaoFList.push(itemDom4[i].innerText)
                    }
                }


                for(var i=0;i<itemDom5.length;i++){
                    if(itemDom5[i].style.background == 'rgb(35, 115, 255)'){
                      this.huyiList.push(itemDom5[i].innerText)
                    }
                }

                for(var i=0;i<itemDom6.length;i++){
                    if(itemDom6[i].style.background == 'rgb(35, 115, 255)'){
                      this.zhYList.push(itemDom6[i].innerText)
                    }
                }

                this.condiList = this.nlList.concat(this.xingbieList,this.hasChList,this.xiaoFList,this.huyiList,this.zhYList)
            },
            nianlinClick(arg,art){
              var itemDom = this.$refs[art] || [];
              for(var i=0;i<itemDom.length;i++){
                  if(i==arg){
                      itemDom[i].style="background: #2373FF;color: #FFFFFF;";
                  }
                  else{  //如果需要多选去掉else
                      itemDom[i].style="color: #636E95;background: none;";
                  }
              }
            },
            expandCond(){
                this.nlList = [];
                this.xingbieList = [];
                this.hasChList = [];
                this.xiaoFList = [];
                this.huyiList = [];
                this.zhYList = [];
                this.condiList = [];
                this.ifShowCon = true;
            },
            hideMe(){
                this.ifShowMb = false;
            },
            clickTimeItem(arg,val){
                this.timerIdx = arg;
                var path = [
                    [116.294134,39.958747],
                    [116.295593,39.947957],
                    [116.296881,39.93236],
                    [116.310356,39.932426],
                    [116.310013,39.924265],
                    [116.355932,39.923606],
                    [116.355847,39.932295],
                    [116.433952,39.933874],
                    [116.433952,39.933874],
                    [116.489751,39.93361]
                ];
                var path1 = [
                [116.354029,39.967758],
                [116.357291,39.944046],
                [116.355402,39.940888],
                [116.356776,39.907845],
                [116.349222,39.896783],
                [116.348879,39.873073]
                ];
                var path2 = [
                [116.416903,39.969085],
                [116.418791,39.952349],
                [116.416388,39.950801],
                [116.416388,39.950801],
                [116.418019,39.91164],
                [116.418362,39.900843]
                ];
                var cir1 = [116.310356,39.932426];
                var cir2 = [116.433529,39.941237];
                this.initMap(path,path1,path2,cir1,cir2,val);
            },
            choiceat(arg){
                this.currentBtn = arg;
                this.ifShowMb = false;
                if(arg == 2){
                    this.ifShowTime = true;
                }
                else{
                    this.ifShowTime = false;
                    var path = [
                        [116.294134,39.958747],
                        [116.295593,39.947957],
                        [116.296881,39.93236],
                        [116.310356,39.932426],
                        [116.310013,39.924265],
                        [116.355932,39.923606],
                        [116.355847,39.932295],
                        [116.433952,39.933874],
                        [116.433952,39.933874],
                        [116.489751,39.93361]
                    ];
                    var path1 = [
                    [116.354029,39.967758],
                    [116.357291,39.944046],
                    [116.355402,39.940888],
                    [116.356776,39.907845],
                    [116.349222,39.896783],
                    [116.348879,39.873073]
                    ];
                    var path2 = [
                    [116.416903,39.969085],
                    [116.418791,39.952349],
                    [116.416388,39.950801],
                    [116.416388,39.950801],
                    [116.418019,39.91164],
                    [116.418362,39.900843]
                    ];
                    var cir1 = [116.310356,39.932426];
                    var cir2 = [116.433529,39.941237];
                    this.initMap(path,path1,path2,cir1,cir2,'中国');
                    setTimeout(()=>{
                      this.initMap(path,path1,path2,cir1,cir2,'朝阳区');
                    },1000);
                }
            },
            clickTime(arg){
              this.current = arg;
              this.ifShowMb = false;
              if (arg == 6 || arg == 8 || arg == 10 || arg == 22 || arg == 24) {
                // this.timeType = arg;
                var path = [
                  [116.294134, 39.958747],
                  [116.295593, 39.947957],
                  [116.296881, 39.93236],
                  [116.310356, 39.932426],
                  [116.310013, 39.924265],
                  [116.355932, 39.923606],
                  [116.355847, 39.932295],
                  [116.433952, 39.933874],
                  [116.433952, 39.933874],
                  [116.489751, 39.93361]
                ];
                var path1 = [
                  [116.354029, 39.967758],
                  [116.357291, 39.944046],
                  [116.355402, 39.940888],
                  [116.356776, 39.907845],
                  [116.349222, 39.896783],
                  [116.348879, 39.873073]
                ];
                var path2 = [
                  [116.416903, 39.969085],
                  [116.418791, 39.952349],
                  [116.416388, 39.950801],
                  [116.416388, 39.950801],
                  [116.418019, 39.91164],
                  [116.418362, 39.900843]
                ];
                var cir1 = [116.310356, 39.932426];
                var cir2 = [116.433529, 39.941237];
                this.initMap(path, path1, path2, cir1, cir2, '中国');
                this.rightPanelData = {
                  userStatObj: {
                    stat1: 16,
                    stat2: 26,
                    stat3: 39,
                    stat4: 19
                  },
                  chufaObj: {
                    chufa1: '五道口',
                    chufa2: '西二旗',
                    chufa3: '上地'
                  },
                  mudiObj: {
                    mudi1: '中关村',
                    mudi2: '软件园',
                    mudi3: '龙泽'
                  },
                  tonqinTypeObj: {
                    tqType1: '地铁',
                    tqType1Icon: require("../../assets/img/yhhx/dtIcon.png"),
                    tqType2: '开车',
                  },
                  tongqinTimeObj: {
                    timeN: 30
                  }
                };
                this.fanganObj = this.fanganObj1;
                this.yqxgList = [
                 {
                   til:'触达用户：',
                   desc:'28万'
                 },
                 {
                   til:'互动量提升：',
                   desc:'12%'
                 },
                 {
                   til:'品牌印象提升：',
                   desc:'7%'
                 },
                 {
                   til:'销售转化率：',
                   desc:'3%'
                 },
                ];
              }
              else if (arg == 12 || arg == 14 || arg == 16) {
                // this.timeType = arg;
                var path = [
                  [116.288917, 39.965932],
                  [116.294281, 39.958531],
                  [116.294925, 39.957117],
                  [116.294538, 39.952445],
                  [116.293809, 39.948037],
                  [116.295311, 39.933329]
                ];
                var path1 = [
                  [116.275742, 39.954518],
                  [116.274883, 39.924312],
                  [116.355993, 39.923719],
                  // [116.384391,39.889724],
                  // [116.41898,39.892688]
                ];
                var path2 = [
                  [116.247761, 39.947543],
                  [116.27454, 39.946754],
                  [116.285612, 39.946293],
                  [116.309902, 39.94274],
                  [116.317799, 39.939252],
                  [116.339085, 39.938331]
                ];
                var cir1 = [116.274969, 39.92418];
                var cir2 = [116.288616, 39.965768];
                this.initMap(path, path1, path2, cir1, cir2, '中国');
                this.rightPanelData = {
                  userStatObj: {
                    stat1: 37,
                    stat2: 36,
                    stat3: 22,
                    stat4: 5
                  },
                  chufaObj: {
                    chufa1: '中关村',
                    chufa2: '软件园',
                    chufa3: '龙泽'
                  },
                  mudiObj: {
                    mudi1: '周边'
                  },
                  tonqinTypeObj: {
                    tqType1: '步行',
                    tqType1Icon: require("../../assets/img/yhhx/buxIcon.png"),
                  },
                  tongqinTimeObj: {
                    timeN: 10
                  }
                };
                this.fanganObj = this.fanganObj2;
                this.yqxgList = [
                 {
                   til:'触达用户：',
                   desc:'20万'
                 },
                 {
                   til:'互动量提升：',
                   desc:'10%'
                 },
                 {
                   til:'品牌印象提升：',
                   desc:'5%'
                 },
                 {
                   til:'销售转化率：',
                   desc:'3%'
                 },
                ];
              }
              else if (arg == 18 || arg == 20) {
                // this.timeType = arg;
                var path = [
                  [116.355294, 39.940546],
                  [116.356839, 39.907306],
                  [116.434687, 39.908425],
                  [116.433829, 39.934294],
                  [116.461467, 39.933636]
                ];
                var path1 = [
                  [116.372546, 39.940415],
                  [116.374434, 39.899602],
                  [116.384133, 39.900129],
                  [116.384391, 39.889724],
                  [116.41898, 39.892688]
                ];
                var path2 = [
                  [116.416903, 39.969085],
                  [116.418791, 39.952349],
                  [116.416388, 39.950801],
                  [116.416388, 39.950801],
                  [116.418019, 39.91164],
                  [116.418362, 39.900843]
                ];
                var cir1 = [116.373332, 39.924206];
                var cir2 = [116.427341, 39.902842];
                this.initMap(path, path1, path2, cir1, cir2, '中国');
                this.rightPanelData = {
                  userStatObj: {
                    stat1: 25,
                    stat2: 28,
                    stat3: 27,
                    stat4: 20
                  },
                  chufaObj: {
                    chufa1: '中关村',
                    chufa2: '软件园',
                    chufa3: '龙泽'
                  },
                  mudiObj: {
                    mudi1: '五道口',
                    mudi2: '西二旗',
                    mudi3: '上地'
                  },
                  tonqinTypeObj: {
                    tqType1: '地铁',
                    tqType1Icon: require("../../assets/img/yhhx/dtIcon.png"),
                    tqType2: '开车',
                  },
                  tongqinTimeObj: {
                    timeN: 30
                  }
                };
                this.fanganObj = this.fanganObj3;
                this.yqxgList = [
                 {
                   til:'触达用户：',
                   desc:'60万'
                 },
                 {
                   til:'互动量提升：',
                   desc:'20%'
                 },
                 {
                   til:'品牌印象提升：',
                   desc:'9%'
                 },
                 {
                   til:'销售转化率：',
                   desc:'6%'
                 },
                ];
              }
              this.changeBqitm(arg)
            },
            initMap(p,p1,p2,c1,c2,area){
                var that = this;
                var district = null;
                var polygons=[];
                var map = new AMap.Map('mapContainer', {
                    resizeEnable: true,
                    center: [108.688763,38.084088],//地图中心点
                    zoom: 4, //地图显示的缩放级别
                    mapStyle: "amap://styles/whitesmoke"
                });
                map.setDefaultCursor("pointer");

                //加载行政区划插件
                if(!district){
                    //实例化DistrictSearch
                    var opts = {
                        subdistrict: 0,   //获取边界不需要返回下级行政区
                        extensions: 'all',  //返回行政区边界坐标组等具体信息
                        level: 'district'  //查询行政级别为 市
                    };
                    district = new AMap.DistrictSearch(opts);
                }
                district.search(area, function(status, result) {
                    map.remove(polygons)//清除上次结果
                    polygons = [];
                    var bounds = result.districtList[0].boundaries;
                    if (bounds) {
                        for (var i = 0, l = bounds.length; i < l; i++) {
                            //生成行政区划polygon
                            var polygon = new AMap.Polygon({
                                strokeWeight: 1,
                                path: bounds[i],
                                fillOpacity: 0.4,
                                fillColor: '#80d8ff',
                                strokeColor: '#0091ea'
                            });
                            polygons.push(polygon);
                        }
                    }
                    map.add(polygons);
                    map.setFitView(polygons);//视口自适应
                });

                var circle = new AMap.Circle({
                    center: c1,
                    radius: 1200, //半径
                    borderWeight: 3,
                    strokeColor: "#FF33FF",
                    strokeOpacity: 1,
                    strokeWeight: 6,
                    strokeOpacity: 0.2,
                    fillOpacity: 0.4,
                    strokeStyle: 'dashed',
                    strokeDasharray: [10, 10],
                    // 线样式还支持 'dashed'
                    fillColor: '#1791fc',
                    zIndex: 50,
                })

                var circle1 = new AMap.Circle({
                    center: c2,   //    116.427341,39.902842
                    radius: 1200, //半径
                    borderWeight: 3,
                    strokeColor: "#FF33FF",
                    strokeOpacity: 1,
                    strokeWeight: 6,
                    strokeOpacity: 0.2,
                    fillOpacity: 0.4,
                    strokeStyle: 'dashed',
                    strokeDasharray: [10, 10],
                    // 线样式还支持 'dashed'
                    fillColor: '#1791fc',
                    zIndex: 50,
                })

                circle.setMap(map)
                circle1.setMap(map)
                // 缩放地图到合适的视野级别
                // map.setFitView([ circle ])
                // map.setFitView([ circle1 ])

                var polyline = new AMap.Polyline({
                    path: p,
                    isOutline: true,
                    outlineColor: '#ffeeff',
                    borderWeight: 3,
                    strokeColor: "#3366FF",
                    strokeOpacity: 1,
                    strokeWeight: 6,
                    // 折线样式还支持 'dashed'
                    strokeStyle: "solid",
                    // strokeStyle是dashed时有效
                    strokeDasharray: [10, 5],
                    lineJoin: 'round',
                    lineCap: 'round',
                    zIndex: 50,
                });
                var polyline1 = new AMap.Polyline({
                    path: p1,
                    isOutline: true,
                  // outlineColor: '#FF8800',
                  outlineColor: '#ffeeff',
                    borderWeight: 1,
                  strokeColor: "#3366FF",
                  // strokeColor: "#FF8800",
                    strokeOpacity: 1,
                    strokeWeight: 4,
                    // 折线样式还支持 'dashed'
                    strokeStyle: "solid",
                    // strokeStyle是dashed时有效
                    strokeDasharray: [10, 5],
                    lineJoin: 'round',
                    lineCap: 'round',
                    zIndex: 50,
                })
                var polyline2 = new AMap.Polyline({
                    path: p2,
                    isOutline: true,
                  // outlineColor: '#F383FF',
                  outlineColor: '#ffeeff',
                    borderWeight: 1,
                  strokeColor: "#3366FF",
                  // strokeColor: "#F383FF",
                    strokeOpacity: 1,
                    strokeWeight: 4,
                    // 折线样式还支持 'dashed'
                    strokeStyle: "solid",
                    // strokeStyle是dashed时有效
                    strokeDasharray: [10, 5],
                    lineJoin: 'round',
                    lineCap: 'round',
                    zIndex: 50,
                })
                polyline.setMap(map)
                polyline1.setMap(map)
                polyline2.setMap(map)
                // map.setFitView([ polyline ])
                // map.setFitView([ polyline1 ])
                // map.setFitView([ polyline2 ])
              const selectedOptions = {
                outlineColor: '#FF8800',
                strokeColor: "#FF8800",
              }
              const normalOptions = {
                outlineColor: '#ffeeff',
                strokeColor: "#3366FF",
              }
                polyline.on('click', function(event) {
                  polyline.setOptions(selectedOptions)
                  polyline1.setOptions(normalOptions)
                  polyline2.setOptions(normalOptions)
                  that.bqitmList = [
                    {
                      name: '娱乐',
                      icons: [
                        allBqitm.xhs,
                        allBqitm.wb,
                      ]
                    },
                    {
                      name: '新闻',
                      icons: [
                        allBqitm.ks,
                        allBqitm.tt,
                        allBqitm.wy,
                        allBqitm.zhIcon,
                      ],
                    },
                    {
                      name: '视频',
                      icons: [
                        allBqitm.dyI,
                        allBqitm.wb,
                        allBqitm.ks,
                      ]
                    }
                  ]
                })
                polyline1.on('click', function(event) {
                  polyline1.setOptions(selectedOptions)
                  polyline.setOptions(normalOptions)
                  polyline2.setOptions(normalOptions)
                  that.bqitmList = [
                    {
                      name: '娱乐',
                      icons: [
                        allBqitm.ks,
                        allBqitm.xhs,
                        allBqitm.wb,
                      ]
                    },
                    {
                      name: '新闻',
                      icons: [
                        allBqitm.ks,
                        allBqitm.tt,
                        allBqitm.wy,
                        allBqitm.zhIcon,
                      ],
                    },
                    {
                      name: '视频',
                      icons: [
                        allBqitm.dyI,
                        allBqitm.wb,
                      ]
                    }
                  ]
                })
                polyline2.on('click', function(event) {
                  polyline2.setOptions(selectedOptions)
                  polyline.setOptions(normalOptions)
                  polyline1.setOptions(normalOptions)
                  that.bqitmList = [
                    {
                      name: '娱乐',
                      icons: [
                        allBqitm.ks,
                      ]
                    },
                    {
                      name: '新闻',
                      icons: [
                        allBqitm.ks,
                        allBqitm.tt,
                        allBqitm.wy,
                        allBqitm.zhIcon,
                      ],
                    },
                    {
                      name: '视频',
                      icons: [
                        allBqitm.dyI,
                        allBqitm.wb,
                        allBqitm.xhs,
                        allBqitm.wb,
                      ]
                    }
                  ]
                });
                var marker = new AMap.Marker({
                    icon:new AMap.Icon({
                        image:  "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                        size: new AMap.Size(52, 52),
                        imageSize: new AMap.Size(26,36)
                    }),
                    position:c2
                });
                marker.on('click',function(){
                    that.ifShowMb = true;
                    setTimeout(()=>{
                        that.ifShowMb = false;
                    },4000);
                })
                marker.setMap(map);
            },
          // 改变用户行为
          changeBqitm(time) {
            const morn = [6, 8, 10]
            const noon = [12, 14, 16]
            const night = [18, 20, 22, 24]
            if (morn.includes(time)) {
              this.bqitmList = [
                {
                  name: '出行',
                  icons: [
                    allBqitm.dd,
                    allBqitm.dc,
                    allBqitm.bx,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.xhs,
                    allBqitm.ks,
                    allBqitm.wb,
                  ]
                }
              ]
            } else if (noon.includes(time)) {
              this.bqitmList = [
                {
                  name: '交流',
                  icons: [
                    allBqitm.wx,
                    allBqitm.qq,
                    allBqitm.pyq,
                  ]
                },
                {
                  name: '餐饮',
                  icons: [
                    allBqitm.elm,
                    allBqitm.mt,
                    allBqitm.dz,
                  ],
                },
                {
                  name: '视频',
                  icons: [
                    allBqitm.dyI,
                    allBqitm.wb,
                    allBqitm.ks,
                  ]
                }
              ]
            } else if (night.includes(time)) {
              this.bqitmList = [
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.wzry,
                    allBqitm.jdqs,
                    allBqitm.xxl,
                  ]
                },
                {
                  name: '视频',
                  icons: [
                    allBqitm.dyI,
                    allBqitm.wb,
                    allBqitm.ks,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },

              ]
            }
          },
        }
    }
</script>

<style lang="scss" scoped>
.dx_Item_container{
    width: 100%;
    position: relative;
    margin-top: -16px;
    .test_container1.width{
        width: 806px;
    }
    .test_container1{
        height: 80px;
        display: flex;
        align-items: center;
        // margin-bottom: -119px;
        margin-top: 19px;
        position: absolute;
        /*margin-left: 20px;*/
        right: 20px;
        left: 20px;
        .mapContainer{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            .area_timer_choice_container{
                width: 100%;
                height: 66px;
                display: flex;
                align-items: center;
                background: #FFFFFF;
                box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
                border-radius: 4px 4px 0 0;
                border: 1px solid #EAEDF7;
                z-index: 999;
                .choice_btn_area{
                    width: 88px;
                    height: 100%;
                    border-right: 1px solid #EAEDF7;
                    .choice_btn_top,.choice_btn_bom{
                        width: 100%;
                        height: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        &:hover{
                            cursor: pointer;
                        }
                    }
                    .choice_btn_top{
                      padding-top: 10px;
                    }
                    .activeBtn{
                        color: #2373FF;
                    }
                }
                .choice_content_container{
                    flex: 1;
                    height: 100%;
                    .timer12{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 0 16px;
                        box-sizing: border-box;
                        .timer12_top{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                        .timer12_bom{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            background-color: #F4F7FC;
                            margin-top: 4px;
                            border-radius: 10px;
                            .cirle_dian{
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                background: #C6CBDE;
                                &:hover{
                                 cursor: pointer;
                                }
                            }
                            .activeDian{
                                background-color: #2373FF;
                                box-shadow: 0px 2px 4px 0px #C6CBDE;
                                border: 2px solid #FFFFFF;
                            }
                        }
                    }
                    .timer121{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        padding: 6px 16px;
                        box-sizing: border-box;
                        .timer121_item{
                            width: 62px;
                            height: 20px;
                            background: #FFFFFF;
                            border-radius: 4px;
                            border: 1px solid #EAEDF7;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-right: 12px;
                            cursor: pointer;
                        }
                        .activetimer{
                            border: 1px solid #2373FF;
                            color: #2373FF;
                        }
                    }
                }
            }
        }
        .per_info_container{
            width: 310px;
            height: 100%;
        }
    }
    .conditions_container-box.width{
        width: 806px;
    }
    .conditions_container-box{
        position: absolute;
        z-index: 999;
        top: 84px;
        display: flex;
        left: 20px;
        right: 20px
    }
    .conditions_container{
        flex: 1;
        height: 48px;
        background: #F4F7FC;
        border-radius: 0px 0px 4px 4px;
        padding: 15px 6px;
        padding-right: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .conditions_lef{
            height: 100%;
            display: flex;
            align-items: center;
            .condition_label,.condition_item{
                width: 75px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
            }
            .condition_label{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
            }
            .condition_item{
                width: 91px;
                height: 24px;
                background: #D3E3FF;
                border-radius: 4px;
                border: 1px solid #EAEDF7;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #2373FF;
                overflow:hidden;
                text-overflow:ellipsis;
                -o-text-overflow:ellipsis;
                white-space:nowrap;
            }
        }
        .conditions_rig{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2373FF;
        }
        .conditions_rig:hover{
            cursor: pointer;
        }
    }
    .condition_content{
        position: absolute;
        left: 1.9%;
        top: 132px;
        width: 806px;
        z-index: 1000;
        height: 557px;
        background: #FFF;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        border: 1px solid #EAEDF7;
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
      padding: 24px 0 0 24px;
      border-right: 1px solid #eaedf7;
      .l-item {
        margin-bottom: 24px;
        .l-item-label {
          width: 58px;
          height: 16px;
          margin-bottom: 15px;
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
            margin-bottom: 8px;
            .name{
              height: 14px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #333333;
              line-height: 14px;
              cursor: pointer;
              &.act{
                color: #2373FF;
              }
            }
            > i {
              font-size: 12px;
              color: #7c88b1;
            }
          }
        }
      }
    }
        .condition_rig{
            // flex: 1;
            height: 100%;
            padding: 55px 0 0 22px;
            box-sizing: border-box;
            .con_item_container{
                // width: 100%;
                display: flex;
                // align-items: flex-start;
                margin-bottom: 8px;
                .con_item_label{
                    width: 106px;
                    height: 24px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 24px;
                }
                .con_item_con{
                    // flex: 1;
                    width: calc(100% - 106px);
                    display: flex;
                    flex-wrap: wrap;
                    .con_item{
                        height: 24px;
                        padding: 0 9px;
                        line-height: 24px;
                        margin-bottom: 16px;
                        border-radius: 8px;
                        margin-right: 24px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        background-color: none;
                        cursor: pointer;
                    }
                    .con_item:hover{cursor: pointer;}
                }
            }
            .queding_container{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 30px;
                .quedingbtn{
                    padding: 4px 20px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    background: rgb(35, 115, 255);
                    color: rgb(255, 255, 255);
                }
                .quedingbtn:hover{
                    cursor: pointer;
                }
            }
        }

    }
    .mianban_container{
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-63%,-50%);
        width: 200px;
        height: 300px;
        z-index: 999;
        .quyResult{
            display: block;
            width: 100%;
        }
    }
    .test_container{
        /*margin-top: 20px;*/
        width: 100%;
        height: 600px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        position: relative;
        .mapContainer{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .per_info_container{
            width: 300px;
            height: 100%;
            padding:17px 16px;
            box-sizing: border-box;
            background: #EAEDF7;
            overflow-y: scroll;
            .person_til{
              width: 100%;
              font-size: 18px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242F57;
              margin-bottom: 15px;
            }
            .person_con_con{
              width: 100%;
              .perxon_tab_con{
                display: flex;
                .perxon_tab_con_lef,.perxon_tab_con_rig{
                  width: 50%;
                  height: 40px;
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636E95;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  &:hover{
                    cursor: pointer;
                  }
                }
              }
              .person_tffatj_con{
                width: 100%;
                border-radius: 0px 12px 12px 12px;
                padding-bottom: 20px;
                box-sizing: border-box;
                .top_img_con{
                  padding: 0 16px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  .top_img_con_lef,.top_img_con_rig{
                    width: 48%;
                    margin-top: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background: rgba(235,236,240,.4);
                    border-radius: 8px;
                    .douyIcon{
                      display: block;
                      width: 40px;
                      height: 40px;
                      border-radius: 50%;
                      margin-top: -16px;
                      margin-bottom: 4px;
                    }
                    .con_lef_label{
                      font-size: 14px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #636E95;
                    }
                    .con_lef_num{
                      font-size: 18px;
                      font-family: PingFangSC-Semibold, PingFang SC;
                      font-weight: 600;
                      color: #242F57;
                      margin-bottom: 14px;
                    }
                    .con_lef_num1{
                      font-size: 16px;
                      font-family: PingFangSC-Medium, PingFang SC;
                      font-weight: 500;
                      color: #242F57;
                      margin-bottom: 15px;
                    }
                  }
                }
                .tf_time{
                  width: 100%;
                  padding: 0 16px;
                  box-sizing: border-box;
                  margin-top: 30px;
                  margin-bottom: 10px;
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242F57;
                }
                .tfjy1{
                  margin-top: 24px;
                }
                .touf_pie{
                  width: 100%;
                  margin-top: 10px;
                  padding: 0 16px;
                  box-sizing: border-box;
                  background-color: #FFFFFF;
                  .touf_pie_con{
                    width: 100%;
                    background: #F0F8FF;
                    border-radius: 4px;
                    .touf_pie_til{
                      width: 100%;
                      padding: 7px 10px;
                      box-sizing: border-box;
                      font-size: 12px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #636E95;
                    }
                    .touf_pie_con_con{
                      margin-top: 3px;
                      width: 100%;
                      height: 220px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    }
                  }
                }
                .yqxg_con_con{
                  display: flex;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  padding: 0px 16px;
                  box-sizing: border-box;
                  .yqxg_con_con_item{
                    width: 48%;
                    margin-bottom:8px;
                    background: #F0F8FF;
                    border-radius: 4px;
                    padding: 7px 10px;
                    box-sizing: border-box;
                    .yqxg_til{
                      width: 100%;
                      font-size: 11px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #636E95;
                    }
                    .yqxg_num_desc{
                      font-size: 16px;
                      font-family: PingFangSC-Medium, PingFang SC;
                      font-weight: 500;
                      color: #2373FF;
                    }
                    .yqxg_num_desc1{
                      font-size: 14px;
                      font-family: PingFangSC-Medium, PingFang SC;
                      font-weight: 500;
                      color: #2373FF;
                    }
                  }
                }
                .tfmjchoice_con{
                  width: 100%;
                  padding: 0 16px;
                  box-sizing: border-box;
                  display: flex;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  .meijie_item{
                    display: flex;
                    align-items: center;
                    width: 49%;
                    padding: 10px 7px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    border: 1px solid #D3E3FF;
                    margin-bottom: 9px;
                    .srcIMG{
                      margin-left: 7px;
                      display: block;
                      width: 24px;
                      height: 24px;
                      margin-right: 3px;
                    }
                    .qudtil{
                      font-size: 12px;
                      font-family: PingFangSC-Medium, PingFang SC;
                      font-weight: 500;
                      color: #242F57;
                    }
                  }
                  .actBor{
                    border: 1px solid #2373FF;
                  }
                }
                .tfys_input_con{
                  width: 100%;
                  padding: 0 16px;
                  box-sizing: border-box;
                  margin-bottom: 13px;
                  display: flex;
                  align-items: center;
                  position: relative;
                  .cmon{
                    position: absolute;
                    color: #97A0C3;
                    left: 25px;
                    z-index: 999;
                  }
                  .input_con{
                    width: 200px !important;
                  }
                  ::v-deep .input_con .ivu-input-default{
                      padding-left: 30px !important;
                  }
                  .zhi{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #97A0C3;
                    margin-left: 6px;
                  }
                }
                .tf_time_txt1,.tf_time_txt2{
                  width: 100%;
                  padding: 0 16px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242F57;
                  .cir_txt_con{
                    display: flex;
                    align-items: center;
                    .cir_con{
                      width: 8px;
                      height: 8px;
                      background: #2373FF;
                      border-radius: 50%;
                      margin-right: 7px;
                    }
                  }
                }
                .tfjyq_con{
                  width: 100%;
                  background-color: #FFFFFF;
                  .radio_txt_con{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 0 16px;
                    box-sizing: border-box;
                    margin-bottom: 7px;
                    .radio_cir{
                      display: block;
                      width: 8px;
                      height: 8px;
                      background: #2373FF;
                      border-radius: 50%;
                      margin-right: 7px;
                    }
                    .radio_txt{
                      font-size: 14px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #242F57;
                    }
                  }
                  .yqxg_con_con{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    padding: 0px 16px;
                    padding-bottom: 17px;
                    box-sizing: border-box;
                    .yqxg_con_con_item{
                      width: 48%;
                      margin-bottom:8px;
                      background: #F0F8FF;
                      border-radius: 4px;
                      padding: 7px 10px;
                      box-sizing: border-box;
                      .yqxg_til{
                        width: 100%;
                        font-size: 11px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                      }
                      .yqxg_num_desc{
                        font-size: 16px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #2373FF;
                      }
                      .yqxg_num_desc1{
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #2373FF;
                      }
                    }
                  }
                  .yqxg_con_con1{
                    width: 100%;
                    padding: 7px 16px;
                    box-sizing: border-box;
                    .yqxg_con_con2{
                      width: 100%;
                      background: #F0F8FF;
                      border-radius: 4px;
                      padding: 7px 16px;
                      box-sizing: border-box;
                      .yqxg_con_con1_tilm{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        line-height: 22px;
                        margin-right: 2px;
                      }
                      .yqxg_con_con1_con{
                        width: 100%;
                        margin-bottom: 7px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .time_rang{
                          font-size: 14px;
                          font-family: PingFangSC-Medium, PingFang SC;
                          font-weight: 500;
                          color: #2373FF;
                          line-height: 22px;
                        }
                        .meij_name{
                          font-size: 12px;
                          font-family: PingFangSC-Medium, PingFang SC;
                          font-weight: 500;
                          color: #242F57;
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
        .yhxw_container{
            position: absolute;
            width: 806px;
            bottom: 20px;
            left: 20px;
            z-index: 999;
            .tab_item{
              width: 100%;
              display: flex;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              color: #242F57;
              .tab_item_item{
                padding: 5px 16px;
                box-sizing: border-box;
                &:hover{
                  cursor: pointer;
                }
              }
              .mbitem1{
                background: #F0F8FF;
                border-radius: 4px 0px 0px 0px;
              }
              .mbitem2{
                background: #D3E3FF;
              }
              .mbitem3{
                color: #FFFFFF;
                background: #9ECBFF;
              }
              .mbitem4{
                color: #FFFFFF;
                border-radius: 0px 4px 0px 0px;
                background:#4488FF;
              }
            }
            .tab_con{
              width: 100%;
              padding: 20px 16px;
              box-sizing: border-box;
              .tab_content{
                width: 100%;
                height: 152.82px;
                overflow-y: hidden;
                padding: 12px 23px;
                box-sizing: border-box;
                background: #FFFFFF;
                border-radius: 4px;
                display: flex;
                flex-wrap: wrap;
                overflow-y: auto;
                .tab_content_item{
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  margin-bottom: 18px;
                  .tab_content_item_top{
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    margin-bottom: 8px;
                  }
                  .tab_content_item_bom{
                    display: flex;
                    align-items: center;
                    .tab_content_item_bom_item{
                      padding: 2px 10px;
                      box-sizing: border-box;
                      background: #F0F8FF;
                      border-radius: 4px;
                      border: 1px solid #FFFFFF;
                      font-size: 12px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #242F57;
                    }
                  }
                  .icon_contai{
                    display: flex;
                    align-items: center;
                    .icon_contai_itm{
                      margin-right: 23px;
                      display: flex;
                      align-items: center;
                      .icon_im{
                        margin-right: 4px;
                        width: 16px;
                        height: 16px;
                      }
                      .imitro{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                      }
                    }
                  }
                }
                .tab_content_item1{
                  display: flex;
                  align-items: center;
                  width: 100%;
                  .tab_content_item1_cir{
                    width: 8px;
                    height: 8px;
                    background-color: #2373FF;
                    margin-right: 6px;
                    border-radius: 50%;
                  }
                  .tab_content_item1_con{
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 27px;
                  }
                }
                .remb{
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
    .test_container.row{
      height: 442px;
    }
}
</style>
