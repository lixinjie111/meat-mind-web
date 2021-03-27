<template>
  <!--  媒介画像-->
  <div class="media-protrait">
    <div class="header-nav">
      <p>媒介画像</p>
    </div>
    <div class="new_media_panel1">
      <div class="new_media_item1">
        <div class="title">媒介现状与趋势</div>
        <div class="new_media_box">
          <div class="left">
            <div class="subTitle">媒介现状与趋势</div>
            <div class="subDesc">头部KOL投放成本过高，销售转化与上一季度持平。</div>
            <div class="new_echart_box">
              <BarLine2 id="305" :colorList="$abelData.colorList" :myData="$abelData.barLine"></BarLine2>
            </div>
          </div>
          <div class="rt">
            <div class="subTitle">媒介现状与趋势</div>
            <div class="subDesc">短视频类媒介呈现上升趋势（品牌合作意愿强） 新闻门户类热度下降（投放回报率低）</div>
            <div class="new_echart_box">
              <BarHM4 id="306" :colorList="$abelData.colorList" :myData="$abelData.barStack01"></BarHM4>
            </div>
          </div>
        </div>
      </div>
      <div class="new_media_item2">
        <div class="title">优化建议</div>
        <div class="box">
          <div class="title">
            <div class="boxIcon">
              <img src="../../assets/img/yhhx/xunh1.png" alt="">
            </div> 媒介扩容
          </div>
          <div class="boxDesc">
            增加媒介类型选择，加入新渠道（如垂直兴趣社区APP）合作计划；
          </div>
        </div>
        <div class="box box_panel1">
          <div class="title">
            <div class="boxIcon">
              <img src="../../assets/img/yhhx/sp.png" alt="">
            </div> KOL组合优化
          </div>
          <div class="boxDesc">
            下一期头部KOL投放预算降低15%，以增加腰部KOL的合作（品牌匹配度TOP3+用户匹配度TOP3），预期ROI提升8.5%。
          </div>
        </div>
        <div class="box box_panel2">
          <div class="title">
            <div class="boxIcon">
              <img src="../../assets/img/yhhx/laba.png" alt="">
            </div> 话题丰富
          </div>
          <div class="boxDesc">
            增加“健康饮品”话题的知识分享内容投放，向职场白领细分客群重点曝光。
          </div>
        </div>
      </div>
    </div>
    <div class="media_sec_panel">
      <div class="media_sec_panel_rig">
        <div class="media_til">自有品牌媒介价值评估</div>
        <div class="media_desc">基于自有品牌媒介通用评估指数、媒介回报指数和用户媒介匹配指数的综合价值评估</div>
        <div class="media_cont">
          <div class="media_cont1 media_box">
            <div class="info_lef">
              <img src="../../assets/img/yhhx/time1.png" alt="" srcset="" class="jyIcon">
            </div>
            <div class="txt_rig">
                <div class="til_txt">综合曝光度</div>
                <div class="til_desc">
                    <span class="til_num">2,500</span>
                    <span class="til_unit">W</span>
                </div>
            </div>
            <Poptip popper-class="saas-poptip small" trigger="hover">
              <i :class="['iconfont','icongengduo']"></i>
              <div slot="content">
                  <p>环比<i :class="['iconfont','iconshangsheng','upnumIcon']"></i><span class="upnum">3.46%</span></p >
                  <p>同比<i :class="['iconfont','iconxiajiang','downnumIcon']"></i><span class="downnum">2.23%</span></p >
              </div>
            </Poptip>
          </div>
          <div class="media_cont2 media_box">
            <div class="info_lef">
              <img src="../../assets/img/yhhx/xunh.png" alt="" srcset="" class="jyIcon">
            </div>
            <div class="txt_rig">
                <div class="til_txt">综合互动量/互动率</div>
                <div class="til_desc">
                    <span class="til_num">548</span>
                    <span class="til_unit">W</span>
                    <span class="til_unit1">/</span>
                    <span class="til_num">10</span>
                    <span class="til_unit">%</span>
                </div>
            </div>
            <Poptip popper-class="saas-poptip small" trigger="hover">
              <i :class="['iconfont','icongengduo']"></i>
              <div slot="content">
                  <p>环比<i :class="['iconfont','iconshangsheng','upnumIcon']"></i><span class="upnum">3.54%</span></p >
                  <p>同比<i :class="['iconfont','iconxiajiang','downnumIcon']"></i><span class="downnum">1.11%</span></p >
              </div>
            </Poptip>
          </div>
          <div class="media_cont3 media_box">
            <div class="info_lef">
              <img src="../../assets/img/yhhx/bag.png" alt="" srcset="" class="jyIcon">
            </div>
            <div class="txt_rig">
                <div class="til_txt">转化量/销售转化率</div>
                <div class="til_desc">
                    <span class="til_num">443</span>
                    <span class="til_unit">W</span>
                    <span class="til_unit1">/</span>
                    <span class="til_num">26</span>
                    <span class="til_unit">%</span>
                </div>
            </div>
            <Poptip popper-class="saas-poptip small" trigger="hover">
              <i :class="['iconfont','icongengduo']"></i>
              <div slot="content">
                  <p>环比<i :class="['iconfont','iconshangsheng','upnumIcon']"></i><span class="upnum">3.53%</span></p >
                  <p>同比<i :class="['iconfont','iconxiajiang','downnumIcon']"></i><span class="downnum">12.4%</span></p >
              </div>
            </Poptip>
          </div>
          <div class="media_cont4 media_box">
            <div class="info_lef">
              <img src="../../assets/img/yhhx/rtou.png" alt="" srcset="" class="jyIcon">
            </div>
            <div class="txt_rig">
                <div class="til_txt">月新增用户数</div>
                <div class="til_desc">
                    <span class="til_num">57</span>
                    <span class="til_unit">W</span>
                </div>
            </div>
            <Poptip popper-class="saas-poptip small" trigger="hover">
              <i :class="['iconfont','icongengduo']"></i>
              <div slot="content">
                  <p>环比<i :class="['iconfont','iconshangsheng','upnumIcon']"></i><span class="upnum">4.27%</span></p >
                  <p>同比<i :class="['iconfont','iconxiajiang','downnumIcon']"></i><span class="downnum">5.2%</span></p >
              </div>
            </Poptip>
          </div>
          <div class="media_cont5 media_box">
            <div class="info_lef">
              <img src="../../assets/img/yhhx/xin.png" alt="" srcset="" class="jyIcon">
            </div>
            <div class="txt_rig">
                <div class="til_txt">真粉用户比</div>
                <div class="til_desc">
                    <span class="til_num">33</span>
                    <span class="til_unit">%</span>
                </div>
            </div>
            <Poptip popper-class="saas-poptip small" trigger="hover">
              <i :class="['iconfont','icongengduo']"></i>
              <div slot="content">
                  <p>环比<i :class="['iconfont','iconshangsheng','upnumIcon']"></i><span class="upnum">2.12%%</span></p >
                  <p>同比<i :class="['iconfont','iconxiajiang','downnumIcon']"></i><span class="downnum">6.67%</span></p >
              </div>
            </Poptip>
          </div>
          <div class="media_cont6 media_box">
            <div class="info_lef">
              <img src="../../assets/img/yhhx/star.png" alt="" srcset="" class="jyIcon">
            </div>
            <div class="txt_rig">
                <div class="til_txt">活跃用户比</div>
                <div class="til_desc">
                    <span class="til_num">11</span>
                    <span class="til_unit">%</span>
                </div>
            </div>
            <Poptip popper-class="saas-poptip small" trigger="hover">
              <i :class="['iconfont','icongengduo']"></i>
              <div slot="content">
                  <p>环比<i :class="['iconfont','iconshangsheng','upnumIcon']"></i><span class="upnum">7.17%</span></p >
                  <p>同比<i :class="['iconfont','iconxiajiang','downnumIcon']"></i><span class="downnum">4.43%</span></p >
              </div>
            </Poptip>
          </div>
        </div>
      </div>
      <div class="media_sec_panel_lef">
        <div class="media_sec_panel_lef1">
          <div class="media_sec_panel_lef1_top">自有品牌合作媒介</div>
          <div class="selectList">
            <Select v-model="model2" @on-change="change1">
              <Option v-for="item in optionList" :value="item.value" :key="item.value">{{ item.name }}</Option>
            </Select>
          </div>
          <div class="media_sec_panel_lef1_bom">
            <div class="sec_pan_con1" v-for="(item,index) in mediaList" :key="index">
              <div class="sec_pan_con1_lef">
                <div class="sec_pan_con1_pic">
                  <div class="headerPic" :class="'headerPic'+index">
                    <img :src="item.icon" alt="" srcset="" class="tenxIcon">
                  </div>
                </div>
                <div class="sec_pan_con1_num">
                  {{item.numTxt1}}
                </div>
              </div>
              <div class="sec_pan_con1_rig">
                <div class="sec_pan_con1_rig_lef">
                  <div class="sec_pan_con1_rig_lef_top">环比</div>
                  <div class="sec_pan_con1_rig_lef_bom" >
                      <span v-if="item.isUp" >
                         <i class="iconfont iconxiajiang domnIconArr"></i>
                          {{item.numTxt2}}
                      </span>
                    <span v-else style="color:#34C724;">
                         <i class="iconfont iconshangsheng domnIconArr"></i>
                          {{item.numTxt2}}
                      </span>
                  </div>
                </div>
                <div class="sec_pan_con1_rig_rig">
                  <div class="sec_pan_con1_rig_lef_top">同比</div>
                  <div class="sec_pan_con1_rig_lef_bom" >
                       <span v-if="item.isUp1" style="color:#34C724;">
                         <i class="iconfont iconshangsheng domnIconArr"></i>
                          {{item.numTxt3}}
                      </span>
                    <span v-else >
                         <i class="iconfont iconxiajiang domnIconArr"></i>
                          {{item.numTxt3}}
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media_sec_panel_lef2">
          <div class="media_sec_panel_lef1_top">自有品牌合作KOL</div>
          <div class="selectList">
            <Select v-model="model3"  @on-change="change2">
              <Option v-for="item in optionList" :value="item.value" :key="item.value">{{ item.name }}</Option>
            </Select>
          </div>
          <div class="media_sec_panel_lef1_bom">
            <div class="sec_pan_con1" v-for="(item,index) in mediaHlist" :key="index">
              <div class="sec_pan_con1_lef">
                <div class="sec_pan_con1_pic">
                  <div class="headerPic" :class="'headerPic'+index">
                    <img :src="item.icon" alt="" srcset="" class="tenxIcon">
                  </div>
                </div>
                <div class="sec_pan_con1_num">
                  {{item.numTxt1}}
                </div>
              </div>
              <div class="sec_pan_con1_rig">
                <div class="sec_pan_con1_rig_lef">
                  <div class="sec_pan_con1_rig_lef_top">环比</div>
                  <div class="sec_pan_con1_rig_lef_bom">
                       <span v-if="item.isUp" >
                         <i class="iconfont iconxiajiang domnIconArr"></i>
                          {{item.numTxt2}}
                      </span>
                    <span v-else style="color:#34C724;">
                         <i class="iconfont iconshangsheng domnIconArr"></i>
                          {{item.numTxt2}}
                      </span>
                  </div>
                </div>
                <div class="sec_pan_con1_rig_rig">
                  <div class="sec_pan_con1_rig_lef_top">同比</div>
                  <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;">
                       <span v-if="item.isUp1" style="color:#34C724;">
                         <i class="iconfont iconshangsheng domnIconArr"></i>
                          {{item.numTxt3}}
                      </span>
                    <span v-else >
                         <i class="iconfont iconxiajiang domnIconArr"></i>
                          {{item.numTxt3}}
                      </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="media_three_panel">
      <div class="media_three_panel_title">竞品媒介策略洞察</div>
      <div class="media_three_panel_box">
        <div class="media_three_item">
          <div class="media_three_item_top">
            <div class="media_three_item_til">王老吉</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree1" :myData="$zjjData.TreeMapData1"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom">
            <div class="media_three_con"><span >策略: </span><span>主要使用电视渠道投放，投放内容 单一，重复性高；</span></div>
            <div class="media_three_con"><span >优势: </span><span>容易形成品牌记忆</span></div>
            <div class="media_three_con"><span >威胁: </span><span>受众心智中凉茶行业的第一提及品 牌；</span></div>
          </div>
        </div>
        <div class="media_three_item">
          <div class="media_three_item_top">
            <div class="media_three_item_til">和其正</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree2" :myData="$zjjData.TreeMapData2"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom media_three_item_bom2">
            <div class="media_three_con"><span>策略: </span><span>侧重体育类媒介，布局各类媒介渠道的体育类KOL和内容；</span></div>
            <div class="media_three_con"><span>优势: </span><span>形成体育兴趣受众的强用户粘性（凉茶消费者类型TOP3之一)；</span></div>
            <div class="media_three_con"><span>威胁: </span><span>体育兴趣受众难以转化；</span></div>
          </div>
        </div>
        <div class="media_three_item">
          <div class="media_three_item_top">
            <div class="media_three_item_til">白云山</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree3" :myData="$zjjData.TreeMapData3"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom">
            <div class="media_three_con"><span>策略: </span><span>侧重与年轻消费人群关注的KOL，不计投放成本；</span></div>
            <div class="media_three_con"><span>优势: </span><span>打造品牌年轻化，消费者复购频率高；</span></div>
            <div class="media_three_con"><span>威胁: </span><span>媒介组合优势明显，难以形成差异化竞争；</span></div>
          </div>
        </div>
        <div class="media_three_item media_three_item2">
          <div class="media_three_item_top">
            <div class="media_three_item_til">同仁堂</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree4" :myData="$zjjData.TreeMapData4"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom media_three_item_bom2">
            <div class="media_three_con"><span>策略: </span><span>主要与养生专家类KOL合作， 以健康讲堂形式的内容进行投放；</span></div>
            <div class="media_three_con"><span>优势: </span><span>医学健康专家的合作，提升品牌信服力；</span></div>
            <div class="media_three_con"><span>威胁: </span><span>在老年群体中形成护城河，品牌竞争优势巨大；</span></div>
          </div>
        </div>
      </div>
    </div>
    <Tab :tab-list="['媒介策略','媒介剖析']" @change="changeTab"></Tab>
    <template v-if="tabActive == 1">
      <div class="zuhetitle">媒介组合推荐方案</div>
      <div class="media_zuhe_panel">
        <div class="title">媒介组合方案</div>
        <div class="subTitle">基于品牌画像和用户画像，建议以短视频作为主要信息传播媒介，垂直媒介为辅的媒介组合，并辅以多KOL多内容类型的投放策略），预算建议在50～75万之间。</div>
        <div class="navBox">
          <div class="navItem" :class="currentIndex==1?'navActive':''" @click="changeIndex(1)">
            <div class="navItem_left">
              <div class="headerIcon"><img src="../../assets/img/yhhx/headerBg.png" alt=""></div>
            </div>
            <div class="navItem_rt">
              <div class="navItem_title1">
                策略1
              </div>
              <div class="navItem_title2">
                快速拉新获客策略
              </div>
            </div>
          </div>
          <div class="navItem navItem2" :class="currentIndex==2?'navActive':''" @click="changeIndex(2)">
            <div class="navItem_left">
              <div class="headerIcon"><img src="../../assets/img/yhhx/xunh.png" alt=""></div>
            </div>
            <div class="navItem_rt">
              <div class="navItem_title1">
                策略2
              </div>
              <div class="navItem_title2">
                低成本高转化策略
              </div>
            </div>
          </div>
          <div class="navItem navItem3" :class="currentIndex==3?'navActive':''" @click="changeIndex(3)">
            <div class="navItem_left">
              <div class="headerIcon"><img src="../../assets/img/yhhx/timeIc.png" alt=""></div>
            </div>
            <div class="navItem_rt">
              <div class="navItem_title1">
                策略3
              </div>
              <div class="navItem_title2">
                持续转化策略
              </div>
            </div>
          </div>
        </div>
        <div class="navContent">
          <div class="navContentBox">
            <div class="navContentTop">
              <div class="navContentItem">
                <div class="navTitle">媒介选择</div>
                <div class="navSubTitle">短视频作为主要信息传播媒介</div>
                <div class="list" v-for="(item,index) in mediaList1" :key="index">
                  <div class="logoPic"><img :src="item.icon" alt=""></div>
                  <div class="navMid1">
                    <div class="navtop">
                      目标受众数
                    </div>
                    <div class="navBm">
                      {{item.numTxt1}}人
                    </div>
                  </div>
                  <div class="navMid1">
                    <div class="navtop">
                      投放预算
                    </div>
                    <div class="navBm">
                      {{item.numTxt2}}人
                    </div>
                  </div>
                </div>
              </div>
              <div class="navContentItem">
                <div class="navTitle">KOL组合</div>
                <div class="navSubTitle">头部KOL组合</div>
                <div class="list" v-for="(item,index) in mediaHlist1" :key="index">
                  <div class="logoPic"><img :src="item.icon" alt=""></div>
                  <div class="navMid1">
                    <div class="navtop">
                      目标受众数
                    </div>
                    <div class="navBm">
                      {{item.numTxt1}}人
                    </div>
                  </div>
                  <div class="navMid1">
                    <div class="navtop">
                      投放预算
                    </div>
                    <div class="navBm">
                      {{item.numTxt2}}人
                    </div>
                  </div>
                </div>
              </div>
              <div class="navContentItem">
                <div class="navTitle">最优曝光时间</div>
                <div class="navSubTitle">未来7日，每日12-13点/18-23点；</div>
                <div class="new_echart_box">
                  <PieOne3 id="304" :myData="myChartData5" title="未来7日"></PieOne3>
                </div>
              </div>
              <div class="navContentItem">
                <div class="navTitle">投放预算</div>
                <div class="navSubTitle"></div>
                <div class="new_echart_box">
                  <PieEcharts9 :colorList="$fjData.colorList" :myData="myChartData0" ></PieEcharts9>
                </div>
              </div>
            </div>
            <div class="navContentBm">
              <div class="navContentLf">
                <div class="navbmTitle">投放内容和形式</div>
                <div class="navbmList">
                  <div class="navbmItem" v-for="item in contList" :key="item">{{item}}</div>
                </div>
              </div>
              <div class="navContentRt">
                <div class="navbmTitle">目标受众</div>
                <div class="navbmList">
                  <div class="navbmItem1"  v-for="item in contList1" :key="item" v-html="item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zuhe_echarts">
          <div class="zuhe_echarts_left">
            <div class="zuhe_echarts_title">预期投放效果</div>
            <div class="zuhe_echarts_Box">
              <div class="zuhe_echarts_leftBox">
                <div class="zuhe_echarts_subtitle">目标覆盖用户</div>
                <div class="zuhe_echarts_num">800万</div>
              </div>
              <div class="new_echart_box">
                <funnel id="box111" :colorList="$lxjData.colorList" :myData="$lxjData.box119Data"></funnel>
              </div>
            </div>

          </div>
          <div class="zuhe_echarts_rt">
            <div class="zuhe_echarts_list">
              <div class="zuhe_echarts_Item">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">真实CPE(去水军）</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  0.39
                </div>
              </div>
              <div class="zuhe_echarts_Item zuhe_echarts_Item1">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">综合互动数</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  800,000 <span class="zuhe_echarts_danwei">次</span>
                </div>
              </div>
            </div>
            <div class="zuhe_echarts_list zuhe_echarts_list1">
              <div class="zuhe_echarts_Item zuhe_echarts_Item2">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">新增粉丝数</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  30,000<span class="zuhe_echarts_danwei">人</span>
                </div>
              </div>
              <div class="zuhe_echarts_Item zuhe_echarts_Item3">
                <div class="zuhe_echarts_Item_title">
                  <span class="zuhe_echarts_Item_title1">销售达成</span>
                  <i class="iconfont icongengduo"></i>
                </div>
                <div class="zuhe_echarts_Item_num">
                  1.2<span class="zuhe_echarts_danwei">亿元</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zuhe_echarts1">
          <div class="zuhe_echarts_left">
            <div class="zuhe_echarts_title">媒介曝光触达</div>
            <div class="new_echart_box">
              <PieEcharts2 :colorList="$fjData.colorList" :myData="$fjData.box0Data"></PieEcharts2>
            </div>
          </div>
          <div class="zuhe_echarts_rt">
            <div class="zuhe_echarts_title">媒介转化效率</div>
            <div class="new_echart_box1">
              <div class="new_echart_list_box">
                <div class="m-rank-lf-list" v-for="(item,index) in rankList1" :key="index">
                  <div class="m-rank-item-lf">
                    <div class="m-rank-icon">
                      <img :src="item.icon" alt="">
                    </div>
                    <div class="m-rank-text">
                      {{item.text}}
                    </div>
                  </div>
                  <div class="m-rank-progress">
                    <barMediaGroup :id="'box1141'+index" :colorList="$lxjData.colorList" :myData='$lxjData["box1149"+ index + "Data"]'></barMediaGroup>
                  </div>
                </div>
              </div>
              <ul class="new_echart_legend">
                <li><div class="circle"></div> 转化率</li>
                <li><div class="circle circleBox"></div> 销售额</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="m-p-rank">
        <div class="m-p-rank-header">
          <ul class="h-name-list">
            <li :class="{'h-name-active':index==act}" v-for="(item,index) in target" :key="index" @click="targetClick(index)">{{item}}</li>
            <!-- <li>媒介声量排名</li>
                <li>媒介使用时长排名</li>
                <li>媒介口碑排名</li>
                <li>媒介价值贡献排名</li> -->
          </ul>
          <div class="h-right">
            <div class="h-tab">
              <div class="left" :class="{'act':cur==0}" @click="cur=0">类型</div>
              <div class="right" :class="{'act':cur==1}" @click="cur=1">渠道名称</div>
            </div>
            <!-- <div class="h-select"> -->
            <Select v-model="model1" style="width: 120px" placeholder="过去3天">
              <Option v-for="item in dateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <!-- </div> -->
          </div>
        </div>
        <div class="m-p-rank-echarts">
          <div class="m-rank-lf">
            <div class="m-rank-lf-list" @click="changeIndex1(index)" :class="currentIndex1==index?'m-rank-lf-active':''" v-for="(item,index) in rankList" :key="index">
              <div class="m-rank-item-lf">
                <div class="m-rank-num">
                  {{index+1}}
                </div>
                <div class="m-rank-icon">
                  <img :src="item.icon" alt="">
                </div>
                <div class="m-rank-text">
                  {{item.text}}
                </div>
              </div>
              <div class="m-rank-progress">
                <Progress :percent="item.per" status="active" :stroke-width="9"/>
              </div>
            </div>
          </div>
          <div class="m-rank-rt">
            <div class="m-rank-tp">
              <div class="m-rank-tp-title">
                媒介声量趋势图
              </div>
              <div class="new_echart_box">
                <cLine id="box58" :colorList="$lxjData.colorList" :myData="myChartData1"></cLine>
              </div>
            </div>
            <div class="m-rank-bm">
              <div class="m-rank-bm-lf">
                <div class="m-rank-tp-title">
                  用户总数和新增用户
                </div>
                <div class="new_echart_box">
                  <barLine id="box101" :colorList="$lxjData.colorList" :myData="myChartData2"></barLine>
                </div>
              </div>
              <div class="m-rank-bm-rt">
                <div class="m-rank-tp-title">
                  使用时长和次数
                </div>
                <div class="new_echart_box">
                  <barLine id="box102" :colorList="$lxjData.colorList" :myData="myChartData3"></barLine>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PortraitMatching />
    </template>
    <template v-if="tabActive == 2">
      <div class="zuhetitle">媒介剖析</div>
      <MediaAnalysis />
      <KOLResource />
    </template>
  </div>
</template>

<script>
  import Tab from "@/components/Tab"
  import Triple from "./base/Triple"
  import Half from "./base/Half"
  import Full from "./base/Full"
  import Card from "./base/Card"
  import KOLResource from "./base/KOLResource"
  import PieCaseEcharts from '../../components/echarts/common/pie/PieCaseEcharts';
  import barL from '../../components/echarts/common/bar/barL';
  import barLine from '../../components/echarts/common/bar/barLine';
  import funnel from '../../components/echarts/common/funnel/funnel';
  import PieEcharts2 from '../../components/echarts/common/pie/PieEcharts2';
  import PieEcharts from '../../components/echarts/common/pie/PieEcharts';
  import LeidaEcharts from '../../components/echarts/common/radar/LeidaEcharts';
  import vTree from '../../components/echarts/common/treemap/zjjTreemap';
  import lineM from '../../components/echarts/common/line/lineM3';
  import cLine from '../../components/echarts/common/line/line';
  import PieOne3 from '../../components/echarts/common/pie/PieOne3';
  import barM from '../../components/echarts/common/bar/barM';
  import BarLine2 from '../../components/echarts/common/bar/barLine2';
  import BarHM4 from '../../components/echarts/common/bar/barHM4';
  import barHM2 from '../../components/echarts/common/bar/barHM3';
  import barMediaGroup from '../../components/echarts/common/bar/alone/barMediaGroup';
  import MediaAnalysis from './base/MediaAnalysis';
  import PieEcharts9 from '../../components/echarts/common/pie/PieEcharts9';
  import PortraitMatching from './base/PortraitMatching';
  

  let counter = 0
  export default {
    name: "index",
    components: {BarHM4,BarLine2,PieOne3,Tab, PieEcharts9,cLine,barLine,barHM2,PieEcharts,Triple, Full, Card, Half, PieCaseEcharts, barL, funnel,PieEcharts2,LeidaEcharts,vTree,lineM,barM, KOLResource,barMediaGroup, MediaAnalysis, PortraitMatching},
    data(){
      return{
        tabActive: 1,
        myChartData0:null,
        myChartData1:this.$lxjData.box581Data,
        myChartData2:this.$lxjData.box102Data,
        myChartData3:this.$lxjData.box103Data,
        myChartData5:this.$abelData.nest202Data,
        currentIndex:1,
        currentIndex1:0,
        model2:"1",
        model3:"1",
        optionList:[
          {
            name:"综合曝光度",
            value:"1",
          },
          {
            name:"综合互动量/互动率",
            value:"2",
          },
          {
            name:"转化量/销售转化率",
            value:"3",
          },
          {
            name:"新增留存用户数",
            value:"4",
          },
          {
            name:"真粉用户比",
            value:"5",
          },
          {
            name:"活跃用户比",
            value:"6",
          },
        ],
        modelUserL:"过去一个月",
        modelUserR:"过去一个月",
        userData:[],
        averageData:[],
        isShowTip1:false,
        isShowTip:false,
        isShowTip2:false,
        formTop: {
          budget: '',
          quota: '',
          kolNum: '',
          kolFs: '',
          contain: '',
          compare: '',
          num: '',
        },
        ruleValidate: {
          budget: [
            { required: true, message:'请输入项目预算', trigger: 'blur' }
          ],
          quota: [
            { required: true, message:' 请选择指标',trigger: 'change' }
          ],
          // kolNum: [
          //     { required: true, trigger: 'blur' }
          // ],
          // kolFs: [
          //     { required: true, trigger: 'blur' }
          // ],
          // contain: [
          //     { required: true, trigger: 'change' }
          // ],
        },
        act:0,
        target:["媒介声量排名","媒介使用时长排名","媒介口碑排名","媒介价值贡献排名"],
        cur:0,
        dateList: [
          {
            value: '过去3天',
            label: '过去3天'
          },
          {
            value: '过去7天',
            label: '过去7天'
          },
          {
            value: '过去一个月',
            label: '过去一个月'
          }
        ],
        model1: '过去3天',
        list1:["不限","哔哩哔哩","抖音","快手","小红书","新浪微博","头条","大众点评","360kr"],
        list1Act:1,
        list2Act:0,
        list3Act:0,
        list4Act:0,
        list5Act:0,
        list2:["不限","才艺技能","财经投资","测评","动画动漫","鬼畜","国潮国创","技术流","家居家装","教育","剧情搞笑",
          "科技数码","旅行","美食","美妆","萌宠","明星","母婴","汽车","情感","三农","生活日常",
          "时尚","舞蹈","艺术文化","个护","园艺","运动健身","奢侈品","新闻资讯","品牌组织","颜值达人","知识科普","番剧","游戏","品牌组织"],
        list3:["不限","按照最低刊例价组合","按照最高刊例价组合"],
        progressData: {
          value: [528, 464, 958, 423],
          value1: [52, 464, 958, 423],
          legName:['微博','淘宝直播','抖音直播','小红书直播'],
          iconList:["http://localhost:8080/img/toux4.8e9bfdb4.png",],
        },
        myEData:[],
        upIcon:require("../../assets/img/yhhx/upIcon.png"),
        downIcon:require("../../assets/img/yhhx/down_arro_Icon.png"),
        tabListArr:['推荐策略: 快速拉新获客策略','备选策略1: 低成本高转化策略','备选策略2: 持续转化策略'],
        ifShowTabCon:0,
        leflogoIcon:require("../../assets/img/yhhx/dLefIcon.png"),
        riglogoIcon:require("../../assets/img/yhhx/dRigIcon.png"),
        domnIconArr:require("../../assets/img/yhhx/jiantou.png"),
        upIconArr:require("../../assets/img/yhhx/upGreen.png"),
        tenxIcon:require("../../assets/img/yhhx/txxw.png"),
        ttIcon:require("../../assets/img/yhhx/tt.png"),
        dyIcon:require("../../assets/img/yhhx/dyI.png"),
        ke36Icon:require("../../assets/img/yhhx/ke36.png"),
        wbIcon:require("../../assets/img/yhhx/weib1.png"),
        touxIcon1:require("../../assets/img/yhhx/toux1.png"),
        touxIcon2:require("../../assets/img/yhhx/toux2.png"),
        touxIcon3:require("../../assets/img/yhhx/toux3.png"),
        touxIcon4:require("../../assets/img/yhhx/toux4.png"),
        touxIcon5:require("../../assets/img/yhhx/toux5.png"),
        xhsIcon:require("../../assets/img/yhhx/xhs.png"),
        mediaList:[],
        mediaList1:[],
        mediaHlist:[],
        mediaHlist1:[],
        meijieObj:{
          meijie1:{
            numTxt1:'8000w',
            numTxt2:'2.8%',
            numTxt3:'1.05%',
          },
          meijie2:{
            numTxt1:'724w/38%',
            numTxt2:'1.9%',
            numTxt3:'2.25%',
          },
          meijie3:{
            numTxt1:'17%/123w',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{
            numTxt1:'18w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'39%/17%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },

        meijieObj1:{
          meijie1:{
            numTxt1:'8000w',
            numTxt2:'2.8%',
            numTxt3:'1.05%',
          },
          meijie2:{
            numTxt1:'724w/38%',
            numTxt2:'1.9%',
            numTxt3:'2.25%',
          },
          meijie3:{
            numTxt1:'123w/17%',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{

            numTxt1:'18w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'39%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },

        meijieObj2:{
          meijie1:{
            numTxt1:'5870w',
            numTxt2:'2.35%',
            numTxt3:'1.44%',
          },
          meijie2:{
            numTxt1:'823w/29%',
            numTxt2:'2.5%',
            numTxt3:'3.09%',
          },
          meijie3:{
            numTxt1:'211w/15%',
            numTxt2:'2.01%',
            numTxt3:'1.84%',
          },
          meijie4:{
            numTxt1:'22w',
            numTxt2:'1.99%',
            numTxt3:'2.39%',
          },
          meijie5:{
            numTxt1:'40%',
            numTxt2:'6.5%',
            numTxt3:'5.87%',
          }
        },

        meijieObj3:{
          meijie1:{
            numTxt1:'3256w',
            numTxt2:'2.2%',
            numTxt3:'2.33%',
          },
          meijie2:{
            numTxt1:'724w/38%',
            numTxt2:'3.04%',
            numTxt3:'1.87%',
          },
          meijie3:{
            numTxt1:'256w/21%',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{
            numTxt1:'40w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'36%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },

        meijieObj4:{
          meijie1:{
            numTxt1:'1892w',
            numTxt2:'2.8%',
            numTxt3:'1.05%',
          },
          meijie2:{
            numTxt1:'648w/29%',
            numTxt2:'1.9%',
            numTxt3:'2.25%',
          },
          meijie3:{
            numTxt1:'847w/36%',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{
            numTxt1:'33w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'27%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },

        meijieObj5:{
          meijie1:{
            numTxt1:'744w',
            numTxt2:'2.8%',
            numTxt3:'1.05%',
          },
          meijie2:{
            numTxt1:'648w/50%',
            numTxt2:'1.9%',
            numTxt3:'2.25%',
          },
          meijie3:{
            numTxt1:'443w/27%',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{
            numTxt1:'34w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'54%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },

        kolObj:{
          meijie1:{
            numTxt1:'6834w',
            numTxt2:'1.87%',
            numTxt3:'2.33%',
          },
          meijie2:{
            numTxt1:'848w/29%',
            numTxt2:'2.23%',
            numTxt3:'4.64%',
          },
          meijie3:{
            numTxt1:'435w/26%',
            numTxt2:'2.1%',
            numTxt3:'1.45%',
          },
          meijie4:{
            numTxt1:'67w',
            numTxt2:'1.32%',
            numTxt3:'2.23%',
          },
          meijie5:{
            numTxt1:'47%',
            numTxt2:'2.45%',
            numTxt3:'2.45%',
          }
        },

        kolObj1:{
          meijie1:{
            numTxt1:'6834w',
            numTxt2:'1.87%',
            numTxt3:'2.33%',
          },
          meijie2:{
            numTxt1:'848w/29%',
            numTxt2:'2.23%',
            numTxt3:'4.64%',
          },
          meijie3:{
            numTxt1:'435w/26%',
            numTxt2:'2.1%',
            numTxt3:'1.45%',
          },
          meijie4:{
            numTxt1:'67w',
            numTxt2:'1.32%',
            numTxt3:'2.23%',
          },
          meijie5:{
            numTxt1:'47%',
            numTxt2:'2.45%',
            numTxt3:'2.45%',
          }
        },


        kolObj2:{
          meijie1:{
            numTxt1:'3238w',
            numTxt2:'3.84%',
            numTxt3:'2.44%',
          },
          meijie2:{
            numTxt1:'668w/22%',
            numTxt2:'2.45%',
            numTxt3:'3.65%',
          },
          meijie3:{
            numTxt1:'232w/22%',
            numTxt2:'2.34%',
            numTxt3:'3.54%',
          },
          meijie4:{
            numTxt1:'37w',
            numTxt2:'2.30%',
            numTxt3:'2.45%',
          },
          meijie5:{
            numTxt1:'29%',
            numTxt2:'4.24%',
            numTxt3:'2.54%',
          }
        },

        kolObj3:{
          meijie1:{
            numTxt1:'2189w',
            numTxt2:'2.8%',
            numTxt3:'1.05%',
          },
          meijie2:{
            numTxt1:'983w/34%',
            numTxt2:'1.9%',
            numTxt3:'2.25%',
          },
          meijie3:{
            numTxt1:'454w/31%',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{
            numTxt1:'38w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'28%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },

        kolObj4:{
          meijie1:{
            numTxt1:'1082w',
            numTxt2:'2.8%',
            numTxt3:'1.05%',
          },
          meijie2:{
            numTxt1:'594w/10%',
            numTxt2:'1.9%',
            numTxt3:'2.25%',
          },
          meijie3:{
            numTxt1:'558w/20%',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{
            numTxt1:'43w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'28%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },

        kolObj5:{
          meijie1:{
            numTxt1:'789w',
            numTxt2:'2.8%',
            numTxt3:'1.05%',
          },
          meijie2:{
            numTxt1:'764w/23%',
            numTxt2:'1.9%',
            numTxt3:'2.25%',
          },
          meijie3:{
            numTxt1:'58w/22%',
            numTxt2:'1.06%',
            numTxt3:'2.22%',
          },
          meijie4:{
            numTxt1:'67w',
            numTxt2:'3.38%',
            numTxt3:'1.15%',
          },
          meijie5:{
            numTxt1:'34%',
            numTxt2:'7.2%',
            numTxt3:'3.09%',
          }
        },
        config: {},
        currentNum:0,
        currentNum1:0,
        currentNum2:0,
        rankList:[],
        rankList1:[],
        contList:['品牌官方产品发布','直播','微博博文','节日礼品上新',],
        contList1:['KOL自有粉丝','品牌核心目标消费人群<br>(北京上班族/年轻白领)','品牌忠诚消费者',],
      }
    },
    created(){
      this.myChartData0=this.$fjData.box51Data;
      this.myEData=this.$lxjData.box27Data;
      this.userData=this.$linData.box1Data;
      this.averageData=this.$linData.box3Data;
      this.rankList1=[
        {
          text:'微博',
          icon:this.wbIcon,
        },
        {
          text:'淘宝直播',
          icon:require("../../assets/img/yhhx/taoicon.png"),
        },
        {
          text:'抖音',
          icon:this.dyIcon,
        },
        {
          text:'小红书',
          icon:this.xhsIcon,
        },

      ];
      this.rankList=[
        {
          per:23,
          text:'抖音',
          icon:this.dyIcon,
        },
        {
          per:22,
          text:'微博',
          icon:this.wbIcon,
        },
        {
          per:18,
          text:'小红书',
          icon:this.xhsIcon,
        },
        {
          per:11,
          text:'今日头条',
          icon:this.ttIcon,
        },
        {
          per:8,
          text:'微信',
          icon:require("../../assets/img/yhhx/weiicon.png"),
        },
        {
          per:7,
          text:'大众点评',
          icon:require("../../assets/img/yhhx/daicon.png"),
        },
        {
          per:5,
          text:'人民日报',
          icon:require("../../assets/img/yhhx/renicon.png"),
        },
        {
          per:3,
          text:'虎嗅',
          icon:require("../../assets/img/yhhx/huicon.png"),
        },
        {
          per:3,
          text:'第一财经',
          icon:require("../../assets/img/yhhx/caiicon.png"),
        },
      ];
      this.mediaList1=[
        {
          numTxt1:'150W',
          numTxt2:'30W',
          icon:this.wbIcon,
        },
        {
          numTxt1:'90W',
          numTxt2:'200W',
          icon:this.dyIcon,
        },
        {
          numTxt1:'30W',
          numTxt2:'60W',
          icon:this.xhsIcon,
        },
      ]
      this.mediaHlist1=[
        {
          numTxt1:'30W',
          numTxt2:'15W',
          icon:this.touxIcon1,
        },
        {
          numTxt1:'15W',
          numTxt2:'10W',
          icon:this.touxIcon2,
        },
        {
          numTxt1:'9W',
          numTxt2:'5W',
          icon:this.touxIcon3,
        },
      ]
      this.mediaList=[
        {
          numTxt1:this.meijieObj1.meijie1.numTxt1,
          numTxt2:this.meijieObj1.meijie1.numTxt2,
          numTxt3:this.meijieObj1.meijie1.numTxt3,
          icon:this.dyIcon,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.meijieObj2.meijie1.numTxt1,
          numTxt2:this.meijieObj2.meijie1.numTxt2,
          numTxt3:this.meijieObj2.meijie1.numTxt3,
          icon:this.wbIcon,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.meijieObj3.meijie1.numTxt1,
          numTxt2:this.meijieObj3.meijie1.numTxt2,
          numTxt3:this.meijieObj3.meijie1.numTxt3,
          icon:this.xhsIcon,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.meijieObj4.meijie1.numTxt1,
          numTxt2:this.meijieObj4.meijie1.numTxt2,
          numTxt3:this.meijieObj4.meijie1.numTxt3,
          icon:this.ttIcon,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.meijieObj5.meijie1.numTxt1,
          numTxt2:this.meijieObj5.meijie1.numTxt2,
          numTxt3:this.meijieObj5.meijie1.numTxt3,
          icon:this.tenxIcon,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
      ]
      this.mediaHlist=[
        {
          numTxt1:this.kolObj1.meijie1.numTxt1,
          numTxt2:this.kolObj1.meijie1.numTxt2,
          numTxt3:this.kolObj1.meijie1.numTxt3,
          icon:this.touxIcon1,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.kolObj2.meijie1.numTxt1,
          numTxt2:this.kolObj2.meijie1.numTxt2,
          numTxt3:this.kolObj2.meijie1.numTxt3,
          icon:this.touxIcon2,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.kolObj3.meijie1.numTxt1,
          numTxt2:this.kolObj3.meijie1.numTxt2,
          numTxt3:this.kolObj3.meijie1.numTxt3,
          icon:this.touxIcon3,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.kolObj4.meijie1.numTxt1,
          numTxt2:this.kolObj4.meijie1.numTxt2,
          numTxt3:this.kolObj4.meijie1.numTxt3,
          icon:this.touxIcon4,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
        {
          numTxt1:this.kolObj5.meijie1.numTxt1,
          numTxt2:this.kolObj5.meijie1.numTxt2,
          numTxt3:this.kolObj5.meijie1.numTxt3,
          icon:this.touxIcon5,
          isUp:Math.random().toFixed(1)>0.5?true:false,
          isUp1:Math.random().toFixed(1)>0.5?true:false,
        },
      ]
    },
    mounted(){
      this.changeTabCon(0);
    },
    methods:{
      changeTab(index) {
        this.tabActive = index;
      },
      changeIndex1(arg){
        this.currentIndex1=arg;
        this.currentNum1++;
        if(this.currentNum1%2==0){
          this.myChartData1=this.$lxjData.box581Data;
          this.myChartData2=this.$lxjData.box102Data;
          this.myChartData3=this.$lxjData.box103Data;
         
        }else{
          this.myChartData1=this.$lxjData.box582Data;
          this.myChartData2=this.$lxjData.box1021Data;
          this.myChartData3=this.$lxjData.box1031Data;
         
        }
      },
      changeIndex(arg){
        this.currentIndex=arg;
        if(arg==1){
          this.myChartData0=this.$fjData.box51Data;
          this.contList=['品牌官方产品发布','直播','微博博文','节日礼品上新',];
          this.contList1=['KOL自有粉丝','品牌核心目标消费人群<br>(北京上班族/年轻白领)','品牌忠诚消费者',];
          this.mediaList1=[
            {
              numTxt1:'150W',
              numTxt2:'30W',
              icon:this.wbIcon,
            },
            {
              numTxt1:'90W',
              numTxt2:'200W',
              icon:this.dyIcon,
            },
            {
              numTxt1:'30W',
              numTxt2:'60W',
              icon:this.xhsIcon,
            },
          ]
          this.mediaHlist1=[
            {
              numTxt1:'30W',
              numTxt2:'15W',
              icon:this.touxIcon1,
            },
            {
              numTxt1:'15W',
              numTxt2:'10W',
              icon:this.touxIcon2,
            },
            {
              numTxt1:'9W',
              numTxt2:'5W',
              icon:this.touxIcon3,
            },
          ]
           this.myChartData5=this.$abelData.nest202Data;
        }else if(arg==2){
           this.myChartData5=this.$abelData.nest203Data;
          this.myChartData0=this.$fjData.box52Data;
          this.mediaList1=[
            {
              numTxt1:'500W',
              numTxt2:'30W',
              icon:this.ttIcon,
            },
            {
              numTxt1:'300W',
              numTxt2:'50W',
              icon:this.dyIcon,
            },
            {
              numTxt1:'150W',
              numTxt2:'10W',
              icon:this.xhsIcon,
            },
          ]
          this.mediaHlist1=[
            {
              numTxt1:'50W',
              numTxt2:'15W',
              icon:this.touxIcon1,
            },
            {
              numTxt1:'45W',
              numTxt2:'10W',
              icon:this.touxIcon2,
            },
            {
              numTxt1:'35W',
              numTxt2:'5W',
              icon:this.touxIcon3,
            },
          ]
          this.contList=['品牌产品种草短视频','品牌产品介绍视频	','品牌产品体验笔记',];
          this.contList1=['KOL自有粉丝','品牌核心目标消费人群<br>(北京上班族/年轻白领)','品牌忠诚消费者',];
        }else{
           this.myChartData5=this.$abelData.nest204Data;
          this.myChartData0=this.$fjData.box53Data;
          this.mediaList1=[
            {
              numTxt1:'2200W',
              numTxt2:'80W',
              icon:require("../../assets/img/yhhx/taoicon.png"),
            },
            {
              numTxt1:'1700W',
              numTxt2:'70W',
              icon:require("../../assets/img/yhhx/daicon.png"),
            },
            {
              numTxt1:'1500W',
              numTxt2:'30W',
              icon:this.xhsIcon,
            },
          ]
          this.mediaHlist1=[
            {
              numTxt1:'200W',
              numTxt2:'35W',
              icon:this.touxIcon4,
            },
            {
              numTxt1:'150W',
              numTxt2:'15W',
              icon:this.touxIcon5,
            },
            {
              numTxt1:'80W',
              numTxt2:'10W',
              icon:this.touxIcon3,
            },
          ]
          this.contList=['行业趋势(品牌/产品露出)','生活指南','好物推荐',];
          this.contList1=['KOL自有粉丝','品牌核心目标消费人群<br>(北京上班族/年轻白领)','品牌忠诚消费者',];
        }
      },
      change2(arg){
        if(arg == 1){
          this.mediaHlist=[
            {
              numTxt1:this.kolObj1.meijie1.numTxt1,
              numTxt2:this.kolObj1.meijie1.numTxt2,
              numTxt3:this.kolObj1.meijie1.numTxt3,
              icon:this.touxIcon1,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj2.meijie1.numTxt1,
              numTxt2:this.kolObj2.meijie1.numTxt2,
              numTxt3:this.kolObj2.meijie1.numTxt3,
              icon:this.touxIcon2,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj3.meijie1.numTxt1,
              numTxt2:this.kolObj3.meijie1.numTxt2,
              numTxt3:this.kolObj3.meijie1.numTxt3,
              icon:this.touxIcon3,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj4.meijie1.numTxt1,
              numTxt2:this.kolObj4.meijie1.numTxt2,
              numTxt3:this.kolObj4.meijie1.numTxt3,
              icon:this.touxIcon4,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj5.meijie1.numTxt1,
              numTxt2:this.kolObj5.meijie1.numTxt2,
              numTxt3:this.kolObj5.meijie1.numTxt3,
              icon:this.touxIcon5,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 2){
          this.mediaHlist=[
            {
              numTxt1:this.kolObj1.meijie2.numTxt1,
              numTxt2:this.kolObj1.meijie2.numTxt2,
              numTxt3:this.kolObj1.meijie2.numTxt3,
              icon:this.touxIcon1,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj2.meijie2.numTxt1,
              numTxt2:this.kolObj2.meijie2.numTxt2,
              numTxt3:this.kolObj2.meijie2.numTxt3,
              icon:this.touxIcon3,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj3.meijie2.numTxt1,
              numTxt2:this.kolObj3.meijie2.numTxt2,
              numTxt3:this.kolObj3.meijie2.numTxt3,
              icon:this.touxIcon2,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj4.meijie2.numTxt1,
              numTxt2:this.kolObj4.meijie2.numTxt2,
              numTxt3:this.kolObj4.meijie2.numTxt3,
              icon:this.touxIcon4,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj5.meijie2.numTxt1,
              numTxt2:this.kolObj5.meijie2.numTxt2,
              numTxt3:this.kolObj5.meijie2.numTxt3,
              icon:this.touxIcon5,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 3){
          this.mediaHlist=[
            {
              numTxt1:this.kolObj1.meijie3.numTxt1,
              numTxt2:this.kolObj1.meijie3.numTxt2,
              numTxt3:this.kolObj1.meijie3.numTxt3,
              icon:this.touxIcon1,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj2.meijie3.numTxt1,
              numTxt2:this.kolObj2.meijie3.numTxt2,
              numTxt3:this.kolObj2.meijie3.numTxt3,
              icon:this.touxIcon5,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj3.meijie3.numTxt1,
              numTxt2:this.kolObj3.meijie3.numTxt2,
              numTxt3:this.kolObj3.meijie3.numTxt3,
              icon:this.touxIcon2,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj4.meijie3.numTxt1,
              numTxt2:this.kolObj4.meijie3.numTxt2,
              numTxt3:this.kolObj4.meijie3.numTxt3,
              icon:this.touxIcon4,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj5.meijie3.numTxt1,
              numTxt2:this.kolObj5.meijie3.numTxt2,
              numTxt3:this.kolObj5.meijie3.numTxt3,
              icon:this.touxIcon3,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 4){
          this.mediaHlist=[
            {
              numTxt1:this.kolObj1.meijie4.numTxt1,
              numTxt2:this.kolObj1.meijie4.numTxt2,
              numTxt3:this.kolObj1.meijie4.numTxt3,
              icon:this.touxIcon1,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj2.meijie4.numTxt1,
              numTxt2:this.kolObj2.meijie4.numTxt2,
              numTxt3:this.kolObj2.meijie4.numTxt3,
              icon:this.touxIcon3,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj3.meijie4.numTxt1,
              numTxt2:this.kolObj3.meijie4.numTxt2,
              numTxt3:this.kolObj3.meijie4.numTxt3,
              icon:this.touxIcon4,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj4.meijie4.numTxt1,
              numTxt2:this.kolObj4.meijie4.numTxt2,
              numTxt3:this.kolObj4.meijie4.numTxt3,
              icon:this.touxIcon5,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj5.meijie4.numTxt1,
              numTxt2:this.kolObj5.meijie4.numTxt2,
              numTxt3:this.kolObj5.meijie4.numTxt3,
              icon:this.touxIcon2,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 5){
          this.mediaHlist=[
            {
              numTxt1:this.kolObj1.meijie5.numTxt1,
              numTxt2:this.kolObj1.meijie5.numTxt2,
              numTxt3:this.kolObj1.meijie5.numTxt3,
              icon:this.touxIcon5,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj2.meijie5.numTxt1,
              numTxt2:this.kolObj2.meijie5.numTxt2,
              numTxt3:this.kolObj2.meijie5.numTxt3,
              icon:this.touxIcon3,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj3.meijie5.numTxt1,
              numTxt2:this.kolObj3.meijie5.numTxt2,
              numTxt3:this.kolObj3.meijie5.numTxt3,
              icon:this.touxIcon2,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj4.meijie5.numTxt1,
              numTxt2:this.kolObj4.meijie5.numTxt2,
              numTxt3:this.kolObj4.meijie5.numTxt3,
              icon:this.touxIcon1,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.kolObj5.meijie5.numTxt1,
              numTxt2:this.kolObj5.meijie5.numTxt2,
              numTxt3:this.kolObj5.meijie5.numTxt3,
              icon:this.touxIcon4,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 6){
          this.mediaHlist=[
            {
              numTxt1:'23%',
              numTxt2:'2.81%',
              numTxt3:'1.74%',
              icon:this.touxIcon3,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'21%',
              numTxt2:'2.76%',
              numTxt3:'1.74%',
              icon:this.touxIcon2,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'18%',
              numTxt2:'1.75%',
              numTxt3:'1.74%',
              icon:this.touxIcon1,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'13%',
              numTxt2:'1.79%',
              numTxt3:'1.84%',
              icon:this.touxIcon4,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'23%',
              numTxt2:'1.41%',
              numTxt3:'3.74%',
              icon:this.touxIcon5,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
      },
      change1(arg){
        if(arg == 1){
          this.mediaList=[
            {
              numTxt1:this.meijieObj1.meijie1.numTxt1,
              numTxt2:this.meijieObj1.meijie1.numTxt2,
              numTxt3:this.meijieObj1.meijie1.numTxt3,
              icon:this.dyIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj2.meijie1.numTxt1,
              numTxt2:this.meijieObj2.meijie1.numTxt2,
              numTxt3:this.meijieObj2.meijie1.numTxt3,
              icon:this.wbIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj3.meijie1.numTxt1,
              numTxt2:this.meijieObj3.meijie1.numTxt2,
              numTxt3:this.meijieObj3.meijie1.numTxt3,
              icon:this.xhsIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj4.meijie1.numTxt1,
              numTxt2:this.meijieObj4.meijie1.numTxt2,
              numTxt3:this.meijieObj4.meijie1.numTxt3,
              icon:this.ttIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj5.meijie1.numTxt1,
              numTxt2:this.meijieObj5.meijie1.numTxt2,
              numTxt3:this.meijieObj5.meijie1.numTxt3,
              icon:this.tenxIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ];
        }
        else if(arg == 2){
          this.mediaList=[
            {
              numTxt1:this.meijieObj1.meijie2.numTxt1,
              numTxt2:this.meijieObj1.meijie2.numTxt2,
              numTxt3:this.meijieObj1.meijie2.numTxt3,
              icon:this.dyIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj2.meijie2.numTxt1,
              numTxt2:this.meijieObj2.meijie2.numTxt2,
              numTxt3:this.meijieObj2.meijie2.numTxt3,
              icon:this.wbIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj3.meijie2.numTxt1,
              numTxt2:this.meijieObj3.meijie2.numTxt2,
              numTxt3:this.meijieObj3.meijie2.numTxt3,
              icon:this.tenxIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj4.meijie2.numTxt1,
              numTxt2:this.meijieObj4.meijie2.numTxt2,
              numTxt3:this.meijieObj4.meijie2.numTxt3,
              icon:this.ttIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj5.meijie2.numTxt1,
              numTxt2:this.meijieObj5.meijie2.numTxt2,
              numTxt3:this.meijieObj5.meijie2.numTxt3,
              icon:this.xhsIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 3){
          this.mediaList=[
            {
              numTxt1:this.meijieObj1.meijie3.numTxt1,
              numTxt2:this.meijieObj1.meijie3.numTxt2,
              numTxt3:this.meijieObj1.meijie3.numTxt3,
              icon:this.dyIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj2.meijie3.numTxt1,
              numTxt2:this.meijieObj2.meijie3.numTxt2,
              numTxt3:this.meijieObj2.meijie3.numTxt3,
              icon:this.xhsIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj3.meijie3.numTxt1,
              numTxt2:this.meijieObj3.meijie3.numTxt2,
              numTxt3:this.meijieObj3.meijie3.numTxt3,
              icon:this.tenxIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj4.meijie3.numTxt1,
              numTxt2:this.meijieObj4.meijie3.numTxt2,
              numTxt3:this.meijieObj4.meijie3.numTxt3,
              icon:this.wbIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj5.meijie3.numTxt1,
              numTxt2:this.meijieObj5.meijie3.numTxt2,
              numTxt3:this.meijieObj5.meijie3.numTxt3,
              icon:this.ttIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 4){
          this.mediaList=[
            {
              numTxt1:this.meijieObj1.meijie4.numTxt1,
              numTxt2:this.meijieObj1.meijie4.numTxt2,
              numTxt3:this.meijieObj1.meijie4.numTxt3,
              icon:this.dyIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj2.meijie4.numTxt1,
              numTxt2:this.meijieObj2.meijie4.numTxt2,
              numTxt3:this.meijieObj2.meijie4.numTxt3,
              icon:this.ttIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj3.meijie4.numTxt1,
              numTxt2:this.meijieObj3.meijie4.numTxt2,
              numTxt3:this.meijieObj3.meijie4.numTxt3,
              icon:this.tenxIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj4.meijie4.numTxt1,
              numTxt2:this.meijieObj4.meijie4.numTxt2,
              numTxt3:this.meijieObj4.meijie4.numTxt3,
              icon:this.wbIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj5.meijie4.numTxt1,
              numTxt2:this.meijieObj5.meijie4.numTxt2,
              numTxt3:this.meijieObj5.meijie4.numTxt3,
              icon:this.xhsIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 5){
          this.mediaList=[
            {
              numTxt1:this.meijieObj1.meijie5.numTxt1,
              numTxt2:'2.71%',
              numTxt3:this.meijieObj1.meijie5.numTxt3,
              icon:this.dyIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj2.meijie5.numTxt1,
              numTxt2:this.meijieObj2.meijie5.numTxt2,
              numTxt3:this.meijieObj2.meijie5.numTxt3,
              icon:this.tenxIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj3.meijie5.numTxt1,
              numTxt2:this.meijieObj3.meijie5.numTxt2,
              numTxt3:this.meijieObj3.meijie5.numTxt3,
              icon:this.ttIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj4.meijie5.numTxt1,
              numTxt2:this.meijieObj4.meijie5.numTxt2,
              numTxt3:this.meijieObj4.meijie5.numTxt3,
              icon:this.wbIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:this.meijieObj5.meijie5.numTxt1,
              numTxt2:this.meijieObj5.meijie5.numTxt2,
              numTxt3:this.meijieObj5.meijie5.numTxt3,
              icon:this.xhsIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
        else if(arg == 6){
          this.mediaList=[
            {
              numTxt1:'33%',
              numTxt2:'2.71%',
              numTxt3:'1.74%',
              icon:this.ttIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'31%',
              numTxt2:'2.76%',
              numTxt3:'3.74%',
              icon:this.tenxIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'13%',
              numTxt2:'1.75%',
              numTxt3:'2.74%',
              icon:this.dyIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'13%',
              numTxt2:'1.79%',
              numTxt3:'1.84%',
              icon:this.wbIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
            {
              numTxt1:'23%',
              numTxt2:'1.41%',
              numTxt3:'3.74%',
              icon:this.xhsIcon,
              isUp:Math.random().toFixed(1)>0.5?true:false,
              isUp1:Math.random().toFixed(1)>0.5?true:false,
            },
          ]
        }
      },
      meijieFn(arg){
        if(arg == 1){
          this.meijieObj = this.meijieObj1;
        }
        else if(arg == 2){
          this.meijieObj = this.meijieObj2;
        }
        else if(arg == 3){
          this.meijieObj = this.meijieObj3;
        }
        else if(arg == 4){
          this.meijieObj = this.meijieObj4;
        }
        else if(arg == 5){
          this.meijieObj = this.meijieObj5;
        }
      },
      kolFn(arg){
        if(arg == 1){
          this.kolObj = this.kolObj1;
        }
        else if(arg == 2){
          this.kolObj = this.kolObj2;
        }
        else if(arg == 3){
          this.kolObj = this.kolObj3;
        }
        else if(arg == 4){
          this.kolObj = this.kolObj4;
        }
        else if(arg == 5){
          this.kolObj = this.kolObj5;
        }
      },
      mediaFourChange(value){
        this.modelUserL = value
        if(value == '过去一个月'){
          this.userData = this.$linData.box1Data
        }else{
          this.userData = this.$linData.box2Data
        }
      },
      mediaFourChangeR(value){
        this.modelUserR = value
        if(value == '过去一个月'){
          this.averageData = this.$linData.box3Data
        }else{
          this.averageData = this.$linData.box4Data
        }
      },
      changeTabCon(arg){
        this.ifShowTabCon = arg;
        var tabDom = this.$refs.mediaFiveTabItem || [];
        for(var i=0;i<tabDom.length;i++){
          if(i == arg){
            tabDom[i].style="color: #2373FF;font-weight:500;border-bottom:2px solid #2373FF;";
          }
          else{
            tabDom[i].style="color: #636E95;border-bottom:none;";
          }
        }
      },
      getTab(name){
        // console.log(name)
      },
      showTip(name){
        this.isShowTip=true;
      },
      NshowTip(name){
        this.isShowTip=false;
      },
      showTip1(name){
        this.isShowTip1=true;
      },
      NshowTip1(name){
        this.isShowTip1=false;
      },
      showTip2(name){
        this.isShowTip2=true;
      },
      NshowTip2(name){
        this.isShowTip2=false;
      },
      targetClick(index){
        this.act = index;
        this.currentNum1++;
        if(this.currentNum1%2==0){
          this.myChartData1=this.$lxjData.box581Data,
            this.myChartData2=this.$lxjData.box102Data,
            this.myChartData3=this.$lxjData.box103Data,
            this.rankList=[
              {
                per:23,
                text:'抖音',
                icon:this.dyIcon,
              },
              {
                per:22,
                text:'微博',
                icon:this.wbIcon,
              },
              {
                per:18,
                text:'小红书',
                icon:this.xhsIcon,
              },
              {
                per:11,
                text:'今日头条',
                icon:this.ttIcon,
              },
              {
                per:8,
                text:'微信',
                icon:require("../../assets/img/yhhx/weiicon.png"),
              },
              {
                per:7,
                text:'大众点评',
                icon:require("../../assets/img/yhhx/daicon.png"),
              },
              {
                per:5,
                text:'人民日报',
                icon:require("../../assets/img/yhhx/renicon.png"),
              },
              {
                per:3,
                text:'虎嗅',
                icon:require("../../assets/img/yhhx/huicon.png"),
              },
              {
                per:3,
                text:'第一财经',
                icon:require("../../assets/img/yhhx/caiicon.png"),
              },
            ];
        }else{
          this.myChartData1=this.$lxjData.box582Data,
            this.myChartData2=this.$lxjData.box1021Data,
            this.myChartData3=this.$lxjData.box1031Data,
            this.rankList=[
              {
                per:35,
                text:'抖音',
                icon:this.dyIcon,
              },
              {
                per:32,
                text:'今日头条',
                icon:this.ttIcon,
              },
              {
                per:27,
                text:'微博',
                icon:this.wbIcon,
              },
              {
                per:18,
                text:'小红书',
                icon:this.xhsIcon,
              },
              {
                per:10,
                text:'大众点评',
                icon:require("../../assets/img/yhhx/daicon.png"),
              },
              {
                per:9,
                text:'第一财经',
                icon:require("../../assets/img/yhhx/caiicon.png"),
              },
              {
                per:8,
                text:'微信',
                icon:require("../../assets/img/yhhx/weiicon.png"),
              },

              {
                per:5,
                text:'人民日报',
                icon:require("../../assets/img/yhhx/renicon.png"),
              },
              {
                per:3,
                text:'虎嗅',
                icon:require("../../assets/img/yhhx/huicon.png"),
              },

            ];

        }
        if(index==0){
          this.myEData=this.$lxjData.box27Data;
        }else{
          this.myEData=this.$lxjData[`box27${index-1}Data`];
        }
      }
    },
    computed: {
      keyNum() {
        if(this.list1Act + this.list2Act + this.list3Act + 1){
          counter = (counter + 1)
          const i = counter  % 2
          return [0, 1][i]
        }
        return 0
      },
      sixData() {
        return this.keyNum ? this.$fjData.box5Data : {name: ['女', '男'], value: [46, 54]}
      },
      ageData() {
        return this.keyNum
          ? this.$fjData.box1Data
          : {
            name: ['26-30岁', '31-35岁', '41-45岁', '21-25岁', '18-20岁', '36-40岁'],
            value: [100, 400, 800, 700, 189, 563]
          }
      },
      professioneData() {
        return this.keyNum
          ? this.$fjData.box3Data
          : {
            name: ['中层管理者', '公司白领', '自由职业者', '全职太太', '高层管理', '其他'],
            value: [50, 29, 78, 31, 23, 1],
          }
      },
      incomeData() {
        return this.keyNum
          ? this.$fjData.box2Data
          : {
            name: ["11001-13000元", "10001-11001元", "13001-15000元", "7001-10000元", "5000元以下", "5000-7000元", "15001-17000元", "17001-20000元", "20001-30000元", "30001-50000元", "50000元以上",],
            value: [30, 44, 89, 21, 48, 45, 34, 55, 100, 0, 47],
          }
      },
      familyData() {
        return this.keyNum
          ? this.$fjData.box11Data
          : {
            name: ['四口之家', '五口之家', '单身与父母一起住', '俩口之家', '三口之家'],
            value: [54, 89, 18, 10, 35],
          }
      },
      netetworkAgeData() {
        return this.keyNum
          ? this.$fjData.box12Data
          : {
            name: ['<25岁', '35-45岁', '>56岁', '26-34岁', '46-55岁'],
            value: [100, 58, 10, 8, 5],
          }
      },
    },
  };
</script>

<style scoped lang="scss">
  .m-p-toolTip{
    cursor: pointer;
    position: relative;
    margin-left: 3px;
    .m-pie-tip{
      position: absolute;
      left:22px;
      top:0;
      width: 200px;
      background: rgba(219, 234, 255, 0.94);
      border-radius: 8px;
      border: 1px solid #4D94FF;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636E95;
      line-height: 17px;
      padding:16px;
      text-align: justify;
    }
  }
  .subTitle{
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636E95;
    line-height: 20px;
  }
  .media-protrait {
    padding: 0 24px 24px 24px;
    .new_echart_box{
      flex:1;
    }
    .new_media_panel1{
      display: flex;
      margin-bottom: 24px;
      justify-content: space-between;
      .new_media_item1{
        width: 853px;
        height: 426px;
        padding: 24px;
        background: #FFFFFF;
        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        .title{
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242F57;
          line-height: 26px;
          margin-bottom: 8px;
        }
        .new_media_box{
          display: flex;
          justify-content: space-between;
          flex:1;
          .left{
            width:486px;
            display: flex;
            flex-direction: column;
            .subTitle{
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242F57;
              line-height: 24px;
              margin:0;
            }
            .subDesc{
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #97A0C3;
              line-height: 18px;
              margin:0;
              margin-bottom: 8px;
            }
          }
          .rt{
            margin-left: 24px;
            flex:1;
            display: flex;
            flex-direction: column;
            .subTitle{
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242F57;
              line-height: 24px;
              margin:0;
            }
            .subDesc{
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #97A0C3;
              line-height: 18px;
              margin:0;
              margin-bottom: 8px;
            }
          }
        }

      }
      .new_media_item2{
        margin-left: 24px;
        flex:1;
        padding: 24px;
        height: 426px;
        background: #FFFFFF;
        box-shadow: 4px 6px 21px 0px rgba(79, 88, 136, 0.15);
        border-radius: 8px;
        .title{
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242F57;
          line-height: 26px;
          margin-bottom: 17px;
        }
        .box{
          background: #FF7F55;
          border-radius: 8px;
          padding:10px 12px;
          margin-bottom: 16px;
          &.box_panel1{
            background: #4488FF;
          }
          &.box_panel2{
            background: #1DCEC3;
            margin-bottom: 0;
          }
          .title{
            display: flex;
            align-items: center;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            margin-bottom: 3px;

            .boxIcon{
              width: 28px;
              height: 28px;
              padding:6px;
              background:#fff;
              border-radius: 8px;
              margin-right: 10px;
              img{
                width:100%;display: block;
              }
            }

          }
          .boxDesc{
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 18px;
          }
        }
      }
    }
    .m-p-panel{
      width: 100%;
      background: url("../../assets/img/media/bg.png") no-repeat center center / 100% 100%;
      border-radius: 12px;
      padding:24px;
      display: flex;
      .panel1{
        overflow: hidden;
        width:245px;
        height: 215px;
        background: url("../../assets/img/media/bg2.png") no-repeat center center / 100% 100%;
        box-shadow: 4px -4px 24px 0px rgba(31, 58, 109, 0.55);
        border-radius: 8px;
        position: relative;
        .title{
          margin-left:16px;
          margin-top: 34px;
          margin-right: 51px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left{
            .top{
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #FFFFFF;
              line-height: 24px;
            }
            .bm{
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.5);
              line-height: 17px;
            }
          }
          .rt{
            font-size: 48px;
            font-family: Archivo-Bold, Archivo;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 56px;
            text-shadow: 2px 2px 4px #144BD4;
          }
        }
        .nav1{
          position: absolute;
          bottom:49px;
          left:0;
          width:100%;
          padding-left: 17px;
          padding-right: 43px;
          padding-top: 4px;
          padding-bottom: 4px;
          height: 48px;
          background: rgba(20, 85, 217, 0.6);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left{
            .top{
              font-size: 18px;
              font-family: Helvetica;
              color: #4FEE3E;
            }
            .bm{
              margin-top: -2px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.5);
            }
          }
          .rt{
            width:66px;
            img{
              width:100%;
              display:block;
            }
          }
        }
        .nav2{
          position: absolute;
          bottom:0;
          left:0;
          width:100%;
          height: 48px;
          padding-left: 17px;
          padding-right: 43px;
          padding-top: 4px;
          padding-bottom: 4px;
          background: rgba(20, 85, 217, 0.6);
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left{
            .top{
              font-size: 18px;
              font-family: Helvetica;
              color: #FF9200;
            }
            .bm{
              margin-top: -2px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.5);
            }
          }
          .rt{
            width:66px;
            img{
              width:100%;
              display:block;
            }
          }
        }
      }
      .panel2{
        margin-left: 17px;
        width:296px;
        height: 215px;
        padding:16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        line-height: 20px;
        background: rgba(219, 234, 255, 0.8);
        border-radius: 8px;
        border: 1px solid #4D94FF;
        .text1{
          display: flex;
          .circle1{
            .circle{
              width: 8px;
              height: 8px;
              margin-top: 5px;
              display: inline-block;
              background: #FF9200;
              border-radius: 50%;
              margin-right: 10px;
            }
          }
          .text{
            flex:1;
          }
        }

      }
      .hr{
        width: 1px;
        height: 215px;
        background: #fff;
        margin: 0 22px;

      }
      .panel3{
        flex:1;
        height: 215px;
        background: rgba(237, 235, 254, 0.8);
        border-radius: 8px;
        border: 1px solid #A49DFA;
        padding:16px;
        display: flex;
        position: relative;
        >i{
          position: absolute;
          right: 16px;
          top:16px;
          font-size: 16px;
          border-radius: 50%;
        }
        .left{
          width: 200px;
          height: 100%;
          .title{
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
          }
          .hr1{
            width: 100%;
            height: 1px;
            background: #fff;
            margin-top: 19px;
            margin-bottom: 29px;
          }
          .detail-info {
            .detail-info-item {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 32px;
              margin-bottom: 8px;
              p {
                position: relative;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                >i {
                  margin-left: 20px;
                  font-size: 16px;
                  border-radius: 50%;
                  &.iconjieshou{
                    color: rgba(52, 199, 36, 1);
                  }
                  &.iconguanyu1{
                    color: rgba(255, 146, 0, 1);
                  }
                }
              }
              .left{

              }
              .rt{

              }
            }
          }
        }
        .rt{
          margin-left: 51px;
          flex:1;
          height: 100%;
        }
      }
    }
    .m-p-panel1{
      height: 208px;
      margin-top: 24px;
      padding:24px;
      background: url("../../assets/img/media/bg1.png") no-repeat center center / 100% 100%;
      border-radius: 12px;
      margin-bottom: 24px;
      ::v-deep .ivu-row{
        height: 100%;
        .ivu-col{
          height: 100%;
        }
      }
      .box1{
        height: 100%;
        background: linear-gradient(225deg, #1C66DE 0%, #98A0F9 100%);
        box-shadow: 4px -4px 24px 0px rgba(41, 59, 149, 0.55);
        border-radius: 8px;
        padding:16px;
        .m-p-panel1-title{
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          .left{
            display: flex;
            align-items: center;
            .title-icon{
              width: 30px;
              margin-top: 3px;
              img{
                width: 100%;
                display: block;
              }

            }
          }
        }
        .content{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fff;
          line-height: 20px;
        }
      }
      .box2{
        height: 100%;
        background: linear-gradient(221deg, #03A8C8 0%, #8BD5AE 100%);
        box-shadow: 4px -4px 24px 0px rgba(45, 120, 134, 0.55);
        border-radius: 8px;
        padding:16px;
        .m-p-panel1-title{
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          .left{
            display: flex;
            align-items: center;
            .title-icon{
              width: 30px;
              margin-top: 3px;
              img{
                width: 100%;
                display: block;
              }

            }
          }
        }
        .content{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fff;
          line-height: 20px;
        }
      }
      .box3{
        height: 100%;
        background: linear-gradient(224deg, #8378F9 0%, #F0908F 100%);
        box-shadow: 4px -4px 24px 0px rgba(109, 57, 143, 0.55);
        border-radius: 8px;
        padding:16px;
        .m-p-panel1-title{
          margin-bottom: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          .left{
            display: flex;
            align-items: center;
            .title-icon{
              width: 30px;
              margin-top: 3px;
              img{
                width: 100%;
                display: block;
              }

            }
          }
        }
        .content{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fff;
          line-height: 20px;
        }
      }
    }
    .media_sec_panel{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      background: #FFFFFF;
      box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
      border-radius: 8px;
      padding: 24px;
      .media_sec_panel_lef{
        flex:1;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background-image: #ccc;
        .media_sec_panel_lef1,.media_sec_panel_lef2{
          width: 292px;
          border: 1px solid #FFFFFF;
          .media_sec_panel_lef1_top{
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            margin-bottom: 37px;
          }
          .selectList{
            height: 40px;
            margin-bottom: 24px;
          }
          .icon_container{
            width: 100%;
            padding: 0 24px 11px 24px;
            box-sizing: border-box;
            display: flex;
            align-items:baseline;
            position: relative;
            .tenx,.tout,.douy,.ke36,.weib{
              .tenxIcon{
                display: block;
                width: 100%;
              }
              &:hover{
                cursor: pointer;
              }
            }
            .tenx{
              width: 50px;
              height: 50px;
              border-radius: 50%;
              margin-right: 7px;
              .tenxIcon{
                display: block;
                width: 100%;
              }
            }
            .tout{
              width: 45px;
              height: 45px;
              border-radius: 50%;
              margin-right: 7px;
            }
            .douy{
              width: 40px;
              height: 40px;
              border-radius: 50%;
              margin-right: 7px;
            }
            .ke36{
              width: 35px;
              height: 35px;
              border-radius: 50%;
              margin-right: 7px;
            }
            .weib{
              width: 30px;
              height: 30px;
              border-radius: 50%;
              margin-right: 10px;
            }
            .iconxiangqian{
              position: absolute;
              right: 20px;
              bottom: 20px;
              width: 7px;
              height: 12px;
            }
            .iconxiangqian::before{
              width: 7px;
              height: 12px;
            }
          }
          .media_sec_panel_lef1_bom{
            width: 100%;
            background: #F7F9FD;
            border-radius: 8px;
            padding: 0px 15px;
            box-sizing: border-box;
            .sec_pan_con1{
              padding:11px 0px 11px 0;
              box-sizing: border-box;
              border-bottom: 1px solid #EAEDF7;
              display: flex;
              align-items: center;
              .sec_pan_con1_lef,.sec_pan_con1_rig{
                width: 50%;
                height: 100%;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                display: flex;
                align-items: center;
                .sec_pan_con1_pic{
                  width: 44px;
                  .headerPic{
                    width: 44px;
                    &.headerPic1{
                      width: 40px;
                    }
                    &.headerPic2{
                      width: 36px;
                    }
                    &.headerPic3{
                      width: 32px;
                    }
                    &.headerPic4{
                      width: 28px;
                    }
                    img{
                      width: 100%;
                      display: block;
                    }
                  }
                }

                .sec_pan_con1_num{
                  text-align: center;
                  flex:1;
                  font-size: 12px;
                  font-family: HelveticaNeue-Bold, HelveticaNeue;
                  font-weight: bold;
                  color: #242F57;
                }
              }
              .sec_pan_con1_rig{
                display: flex;
                align-items: center;
                .sec_pan_con1_rig_lef,.sec_pan_con1_rig_rig{
                  width: 50%;
                  .sec_pan_con1_rig_lef_top,.sec_pan_con1_rig_lef_bom{
                    width: 100%;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #7C88B1;
                    .domnIconArr{
                      font-size: 10px;
                    }
                  }
                  .sec_pan_con1_rig_lef_bom{
                    font-size: 14px;
                    font-family: HelveticaNeue;
                    color: #F54A45;
                  }
                }
              }
            }
            .sec_pan_con2,.sec_pan_con3,.sec_pan_con4,.sec_pan_con5{
              padding: 7px 0;
              box-sizing: border-box;
              border-bottom: 1px solid #EAEDF7;
              display: flex;
              align-items: center;
              .sec_pan_con1_lef,.sec_pan_con1_rig{
                width: 50%;
                height: 100%;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                .sec_pan_con1_lef_til{
                  display: flex;
                  align-items: center;
                  .circie{
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background-color:  #242F57;
                    margin-right: 4px;
                  }
                }
                .sec_pan_con1_lef_numtxt{
                  margin-left: 8px;
                }
              }
              .sec_pan_con1_rig{
                display: flex;
                align-items: center;
                .sec_pan_con1_rig_lef,.sec_pan_con1_rig_rig{
                  width: 50%;
                  .sec_pan_con1_rig_lef_top,.sec_pan_con1_rig_lef_bom{
                    width: 100%;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #7C88B1;
                    .domnIconArr{
                      width: 12px;
                      height: 12px;
                    }
                  }
                  .sec_pan_con1_rig_lef_bom{
                    font-size: 14px;
                    font-family: HelveticaNeue;
                    color: #F54A45;
                  }
                }
              }
            }
            .sec_pan_con5{
              border-bottom: none;
            }
          }
        }
      }
      .media_sec_panel_rig{
        width:483px;
        margin-right: 24px;
        .media_til{
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242F57;
          margin-bottom: 4px;
        }
        .media_desc{
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
          line-height: 17px;
          margin-bottom: 24px;
        }
        .media_cont{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .media_box{
            width:233px;
            height: 113px;
            border-radius: 8px;
            padding: 25px 16px;
            // box-sizing: border-box;
            margin-bottom: 16px;
            background: #DFF8F6;
            display: flex;
            align-items: center;
            position: relative;
            .info_lef{
                width: 48px;
                height: 52px;
                background: #FFFFFF;
                border-radius: 8px;
                margin-right: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                .jyIcon{
                    display: block;
                    width:24px;
                }
            }
            .txt_rig{
                flex: 1;
                .til_txt{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    margin-bottom: 6px;
                }
                .til_desc{
                    display: flex;
                    align-items: baseline;
                    .til_num{
                      font-size: 24px;
                      font-family: HelveticaNeue-Bold, HelveticaNeue;
                      font-weight: bold;
                      margin-right: 5px;
                      line-height: 29px;
                    }
                    .til_unit{
                        font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        line-height: 22px;
                    }
                    .til_unit1{
                       font-size: 16px;
                       margin: 0 3px;
                    }
                }
            }
            .ivu-poptip{
                position: absolute;
                top: 12px;
                right: 12px;
            }
            &.media_cont1{
              background: #DFF8F6;
              color: #1DCEC3;
            }
            &.media_cont2{
              background: #FFE6DE;
              color: #FE774B;
            }
            &.media_cont3{
              background: rgba(253,240,242,1);
              color: #F16E84;
            }
            &.media_cont4{
              background: #D3E3FF;
              color: #2373FF;
            }
            &.media_cont5{
              background: #DFF8F6;
              color: #1DCEC3;
            }
            &.media_cont6{
              background: #FFE6DE;;
              color: #FE774B;
            }
            .media_cont_til{
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              line-height: 20px;
              margin-bottom: 4px;
            }
            .media_cont_num_container{
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              line-height: 29px;
              margin-bottom: 5px;
              .spanNum{
                font-size: 24px;
                font-family: HelveticaNeue-Bold, HelveticaNeue;
                font-weight: bold;
                line-height: 29px;
                margin-right: 5px;
              }
            }
            .media_cont_three_container{
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              line-height: 20px;
              .iconshangsheng{
                color:#08BD6C;
              }
              .shangsheng{
                color:#08BD6C;
              }
              .iconxiajiang{
                color:#FF4C60;
              }
              .xiajiang{
                color:#FF4C60;
              }
              i{
                font-size: 12px;
              }
            }
          }
          .media_cont5,.media_cont6{
            margin-bottom: 0;
          }
        }
      }
    }
    .media_three_panel{
      padding: 24px;
      margin-bottom: 35px;
      background: #FFFFFF;
      box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
      border-radius: 8px;
      padding: 24px;
      border: 1px solid #EAEDF7;
      .media_three_panel_title{
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        margin-bottom: 23px;
      }
      .media_three_panel_box{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .media_three_item{
          width: 24%;
          background: #FFFFFF;
          border-radius: 8px;
          border: 1px solid #EAEDF7;
          .media_three_item_top{
            width: 100%;
            height: 264px;
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .media_three_item_til{
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242F57;
            }
            .media_three_item_echarts{
              width: 100%;
              flex: 1;
            }
          }
          .media_three_item_bom{
            width: 100%;
            height: 164px;
            padding: 16px;
            box-sizing: border-box;
            background: #F4F7FC;
            border-radius: 0px 0px 8px 8px;
            .media_three_con{
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              margin-bottom: 12px;
              display: flex;
              align-items: baseline;
              span:nth-child(1){
                color:#242F57;
                font-size: 13px;
                margin-right:4px;
                width:35px;
              }
              span:nth-child(2){
                font-size: 12px;
                text-align: justify;
                flex:1;
                color:#636E95;
              }
            }
          }
          // .media_three_item_bom2{
          //   background: rgba(219, 234, 255, 0.3);
          // }
        }
      }
    }
    .zuhetitle{
      margin: 18px 0;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
    }
    .media_zuhe_panel{
      background: #FFFFFF;
      box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
      border-radius: 8px;
      padding:24px;
      margin-bottom: 24px;
      .title{
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        margin-bottom: 7px;
      }
      .subTitle{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        margin-bottom: 24px;
      }
      .navBox{
        display: flex;
        .navItem{
          width: 208px;
          padding-left:24px;
          padding-top:16px;
          padding-bottom: 13px;
          display: flex;
          align-items: center;
          cursor: pointer;
          &.navActive{
            background:#F4F7FC;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            .navItem_rt{
              color: #2373FF;
            }
          }
          &.navItem2{
            .navItem_left{
              .headerIcon{ background: #FFE6DE;}
            }
          }
          &.navItem3{
            .navItem_left{
              .headerIcon{ background: #DFF8F6;}
            }
          }
          .navItem_left{
            .headerIcon{
              width:34px;
              box-sizing: border-box;
              padding:5px;
              background: #D3E3FF;
              border-radius: 8px;

              img{
                width: 100%;
                display: block;
              }
            }
          }
          .navItem_rt{
            margin-left: 12px;
            color: #242F57;
            .navItem_title1{
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
            }
            .navItem_title2{
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
            }
          }
        }
      }
      .navContent{
        background:#F4F7FC;
        padding:24px;
        .navContentBox{
          padding:16px;
          background: #FFFFFF;
          border-radius: 8px;
          .navContentTop{
            padding-bottom: 16px;
            border-bottom: 1px solid #EAEDF7;
            display: flex;
            .navContentItem{
              flex:1;
              padding: 0 16px;
              border-right: 1px solid #EAEDF7;
              display: flex;
              flex-direction: column;
              .navTitle{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                margin-bottom: 7px;
              }
              .navSubTitle{
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                height: 16px;
                margin-bottom: 26px;
              }
              .list{
                flex:1;
                border-bottom: 1px solid #EAEDF7;
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .logoPic{
                  width: 32px;
                  img{
                    width: 100%;
                    display: block;
                  }
                }
                .navMid1{
                  .navtop{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #97A0C3;
                    line-height: 20px;
                  }
                  .navBm{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 20px;
                  }
                }
              }
              .list:last-child{
                border-bottom: none;
              }
            }
            .navContentItem:last-child{
              border-right: none;
            }
          }
          .navContentBm{
            padding-top: 16px;
            display: flex;
            .navContentLf{
              flex:1;
              border-right: 1px solid #EAEDF7;
              padding-right: 16px;
              .navbmTitle{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                margin-bottom: 14px;
              }
              .navbmList{
                display: flex;
                flex-flow: wrap;
                .navbmItem{
                  margin-right: 16px;
                  margin-bottom: 12px;
                  width: 148px;
                  height: 40px;
                  background: #F0F8FF;
                  border-radius: 4px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636E95;
                }
              }
            }
            .navContentRt{
              flex:1;
              padding-left: 16px;
              .navbmTitle{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                margin-bottom: 14px;
              }
              .navbmList{
                display: flex;
                flex-flow: wrap;
                .navbmItem1{
                  padding:0 8px;
                  margin-right: 16px;
                  margin-bottom: 12px;
                  width: 153px;
                  height: 58px;
                  background: #F0F8FF;
                  border-radius: 4px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636E95;
                }
                .navbmItem1:last-child{
                  margin-right: 0
                }
              }
            }
          }
        }
      }
      .zuhe_echarts1{
        height: 241px;
        display: flex;
        .zuhe_echarts_left{
          flex:1;
          display: flex;
          flex-direction: column;
          padding-right: 24px;
          padding-bottom: 0;
          border-right: 1px solid #EAEDF7;
          box-sizing: border-box;
          .zuhe_echarts_title{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            line-height: 22px;
            margin-bottom: 10px;
          }
        }
        .zuhe_echarts_rt{
          padding-left: 24px;
          flex:1;
          display: flex;
          flex-direction: column;
          .zuhe_echarts_title{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            line-height: 22px;
            margin-bottom: 10px;
          }
          .new_echart_box1{
            flex:1;
            display: flex;
            .new_echart_list_box{
              flex:1;
              .m-rank-lf-list{
                display: flex;
                margin-bottom: 21px;
                height: 28px;
                align-items: center;
                padding:0 8px;
                border-left: 1px solid #fff;
                cursor: pointer;
                .m-rank-item-lf{
                  width: 115px;
                  display: flex;
                  align-items: center;
                  .m-rank-icon{
                    width:28px;
                    height: 28px;
                    img{
                      width: 100%;
                      display: block;
                    }
                  }
                  .m-rank-text{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #97A0C3;
                    margin-left: 5px;
                  }
                }

                .m-rank-progress{
                  flex:1;
                  height: 50px;
                }
              }
            }
            .new_echart_legend{
              width: 100px;
              display: flex;
              flex-direction: column;
              li{
                text-align: right;
                padding-right: 30px;
                margin-bottom: 20px;
                .circle{
                  &.circleBox{
                    background:#FE774B ;
                  }
                  display: inline-block;
                  width: 6px;
                  height: 6px;
                  background:#2373FF ;
                  border-radius: 50%;
                  margin-right: 3px;
                }
              }
            }
            .m-rank-lf-list:last-child{
              margin-bottom: 0;
            }
          }
        }

      }
      .zuhe_echarts{
        margin-top: 24px;
        height: 220px;
        display: flex;
        margin-bottom: 38px;
        .zuhe_echarts_left{
          flex:1;
          background: #F0F8FF;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          padding: 24px;
          padding-bottom: 0;
          .zuhe_echarts_title{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            line-height: 22px;
            margin-bottom: 10px;
          }
          .zuhe_echarts_Box{
            flex:1;
            display: flex;
            .zuhe_echarts_leftBox{
              width:100px;
              .zuhe_echarts_subtitle{
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                line-height: 20px;
              }
              .zuhe_echarts_num{
                font-size: 32px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                color: #2373FF;
                line-height: 32px;
              }
            }
            // .zuhe_echarts_leftBox{
            //   flex:1;
            // }
          }

        }
        .zuhe_echarts_rt{
          flex:1;
          margin-left: 24px;
          border-radius: 8px;
          .zuhe_echarts_list{
            display: flex;
            justify-content: space-between;
            &.zuhe_echarts_list1{
              margin-top: 24px;
            }
            .zuhe_echarts_Item{
              width: 48%;
              background: rgba(241,110,132,.1);
              border-radius: 8px;
              padding:16px;
              color: #F16E84;
              &.zuhe_echarts_Item1{
                color: #1DCEC3;;
                background: rgba(29,206,195,.1);
              }
              &.zuhe_echarts_Item2{
                color: #FE774B;
                background: rgba(254,119,75,.1);
              }
              &.zuhe_echarts_Item3{
                color: #2373FF;
                background: rgba(35,115,255,.1);
              }
              .zuhe_echarts_Item_title{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .zuhe_echarts_Item_title1{
                  font-size: 16px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  line-height: 26px;
                }
              }
              .zuhe_echarts_Item_num{
                font-size: 32px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                line-height: 32px;
                margin-top: 8px;
                .zuhe_echarts_danwei{
                  font-size: 14px;
                  margin-left: 8px;
                  line-height: 20px;
                }
              }
            }
          }
        }

      }
    }


    .m-p-rank {
      width: 100%;
      margin-bottom: 24px;
      background: #FFFFFF;
      box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
      border-radius: 8px;
      padding:24px;
      margin-bottom: 24px;
      .m-p-rank-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        .h-name-list {
          display: flex;
          align-items: center;
          margin-top: 4px;
          list-style: none;
          > li {
            height: 22px;
            margin-right: 32px;
            font-size: 14px;
            color: #636e95;
            line-height: 22px;
            cursor: pointer;
            &.h-name-active {
              position: relative;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #2373ff;
              &:after {
                position: absolute;
                top: 30px;
                left: 0;
                content: "";
                width: 100%;
                height: 2px;
                background: #2373ff;
                border-radius: 1px;
              }
            }
          }
        }
        .h-right {
          display: flex;
          cursor: pointer;
          .h-tab {
            display: flex;
            margin-right: 16px;
            font-size: 12px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            text-align: center;
            .left {
              width: 80px;
              height: 32px;
              background: #FFFFFF;
              border-radius: 4px 0px 0px 4px;
              border: 1px solid #2373FF;
              color: #636e95;
              line-height: 30px;
              &.act{
                border: 1px solid #2373ff;
                color: #2373ff;
              }
            }
            .right {
              width: 80px;
              height: 32px;
              border-radius: 0px 4px 4px 0px;
              border: 1px solid #97A0C3;
              color: #242F57;
              line-height: 30px;
              &.act{
                border: 1px solid #2373ff;
                color: #2373ff;
              }
            }
          }
        }
      }
      .m-p-rank-echarts {
        width: 100%;
        height: 636px;
        background: #F4F7FC;
        display: flex;
        .m-rank-lf{
          width: 306px;
          background: #fff;
          .m-rank-lf-list{
            height: 60px;
            display: flex;
            align-items: center;
            padding:0 8px;
            border-left: 1px solid #fff;
            cursor: pointer;
            &.m-rank-lf-active{
              background: #F4F7FC;
              border-left: 2px solid #2373FF;
              .m-rank-item-lf{
                .m-rank-text{
                  color: #2373FF;
                }
              }
            }
            .m-rank-item-lf{
              width: 135px;
              display: flex;
              align-items: center;
              .m-rank-num{
                width:18px;
                height: 18px;
                background: #C6CBDE;
                font-size: 12px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                color: #FFFFFF;
                text-align: center;
                line-height: 18px;
                margin-right: 10px;
                border-radius: 50%;
              }
              .m-rank-icon{
                width:28px;
                height: 28px;
                img{
                  width: 100%;
                  display: block;
                }
              }
              .m-rank-text{
                margin-left: 5px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
              }
            }

            .m-rank-progress{
              flex:1;

            }
          }
          .m-rank-lf-list:nth-child(1){
            .m-rank-item-lf{
              .m-rank-num{
                background: #4D94FF;
              }
            }
          }
          .m-rank-lf-list:nth-child(2){
            .m-rank-num{
              background: #FE774B;
            }
          }
          .m-rank-lf-list:nth-child(3){
            .m-rank-num{
              background: #FDD352;
            }
          }
        }
        .m-rank-rt{
          flex:1;
          display: flex;
          flex-direction: column;
          padding:16px;
          .m-rank-tp{
            height: 302px;
            margin-bottom: 16px;
            background: #fff;
            border-radius: 8px;
            padding:16px;
            display: flex;
            flex-direction: column;
            .m-rank-tp-title{
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242F57;
              line-height: 22px;
            }
          }
          .m-rank-bm{
            flex:1;
            background: #fff;
            border-radius: 8px;
            display: flex;
            padding:16px;
            .m-rank-bm-lf{
              flex:1;
              display: flex;
              flex-direction: column;
              padding-right: 12px;
              .m-rank-tp-title{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 22px;
              }
            }
            .m-rank-bm-rt{
              flex:1;
              display: flex;
              flex-direction: column;
              padding-left: 12px;
              .m-rank-tp-title{
                font-size: 14px;
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
    .m-p-filter{
      width: 100%;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      background: #fff;
      .m-f-line{
        display: flex;
        width: 100%;
        margin-bottom: 8px;
        .label{
          width: 96px;
          height: 32px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
          line-height: 32px;
        }
        .f-list{
          width: calc(100% - 96px);
          display: flex;
          flex-wrap: wrap;
          .f-item{
            padding: 5px 16px;
            margin-right: 16px;
            margin-bottom: 16px;
            cursor: pointer;
            &.active{
              background: linear-gradient(135deg, #FF8D0A 0%, #FFA733 100%);
              box-shadow: 3px 3px 14px 0px rgba(148, 76, 46, 0.2), -3px -3px 14px 0px #FFFFFF, 1px 1px 2px 0px rgba(255, 247, 230, 0.6);
              border-radius: 16px;
              >p{
                color: #FFFFFF;
              }
            }
            >p{
              height: 22px;
              margin:0;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242F57;
              line-height: 22px;
            }
          }
        }
      }
      .m-p-pie{
        width: 100%;
        padding: 16px;
        margin-bottom: 24px;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #EAEDF7;
        border-radius: 8px;
        .m-pie-title{
          height: 24px;
          margin-bottom: 16px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242F57;
          line-height: 24px;

        }
        .m-pie-echarts{
          height: 596px;
        }
      }

    }
    .m-p-zuhe{
      width: 100%;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      background: #fff;
      .m-pie-title{
        height: 24px;
        margin-bottom: 16px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        line-height: 24px;
      }
      .m-p-third-module{
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        .m-p-t-left{
          width: 50%;
          height: 552px;
          margin-right: 24px;
          background: #FFFFFF;
          border-radius: 8px;
          border: 1px solid #EAEDF7;
        }
        .m-p-t-right{
          width: 50%;
          height: 552px;
          .m-p-right-top{
            display: flex;
            justify-content: space-between;
            .m-p-right-push,.m-p-right-media{
              width: 50%;
              height: 244px;
              padding: 16px;
              background: #FFFFFF;
              border-radius: 8px;
              border: 1px solid #EAEDF7;
              .m-p-r-title{
                height: 24px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                line-height: 24px;
              }
            }
            .m-p-right-push{
              margin-right: 24px;
              .m-p-r-title{
                margin-bottom: 16px;
              }
              >div{
                display: flex;
                align-items: center;
                margin-bottom: 24px;
                >p{
                  height: 20px;
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636E95;
                  line-height: 20px;
                }
                >img{
                  width: 24px;
                  height: 24px;
                  border-radius: 50%;
                  margin: 0 12px;
                }
              }
            }
            .m-p-right-media{
              .m-p-r-title{
                margin-bottom: 4px;
              }
              .m-p-r-num{
                height: 32px;
                font-size: 24px;
                font-family: HelveticaNeue-Medium, HelveticaNeue;
                font-weight: 500;
                color: #4D94FF;
                line-height: 32px;
              }
              .m-p-r-echarts{
                width: 100%;
                height: 240px;
                margin-top: -50px;
              }
            }
          }
          .m-p-right-bottom{
            height: 284px;
            padding: 16px;
            margin-top: 24px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            >p{
              height: 24px;
              margin-bottom: 16px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242F57;
              line-height: 24px;
            }
            >div{
              display: flex;
              justify-content: space-between;
              >div{
                width: 50%;
                height: 98px;
                margin-bottom: 16px;
              }
            }
          }
        }
      }
      .m-p-last{
        display: flex;
        justify-content: space-between;
        .m-p-last-touch{
          width: 100%;
          height: 210px;
        }
      }
    }
    .m-p-target{
      width: 100%;
      padding:24px;
      margin-bottom: 24px;
      background: #FFFFFF;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      .m-p-target-title{
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        margin-bottom: 16px;
      }
      .btnList{
        display: flex;
        justify-content: center;
        margin-bottom: 24px;
        .submit{
          width:85px;
          height: 32px;
          font-size: 14px;
          background: #2373FF;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          cursor: pointer;
        }
        .reset{
          border: 1px solid #C6CBDE;
          margin-left: 16px;
          width:85px;
          height: 32px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #636E95;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          box-shadow: 2px 2px 7px 0px rgb(210 213 225 / 80%) inset;
          cursor: pointer;
        }
      }
      .relative-data{
        border-top:1px solid #EAEDF7;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        padding:40px 0;
        padding-bottom: 16px;
        text-align: center;
      }
    }
    .m-p-kol{
      width: 100%;
      img{
        width: 100%;
        display: block;
      }
      // height: 952px;
      background: #FFFFFF;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      padding:24px;
      .m-p-target-title{
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        margin-bottom: 16px;
        span{
          cursor: pointer;
          position: relative;
          .m-pie-tip{
            position: absolute;
            left:22px;
            top:0;
            width: 200px;
            background: rgba(219, 234, 255, 0.94);
            border-radius: 8px;
            border: 1px solid #4D94FF;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
            line-height: 17px;
            padding:16px;
            text-align: justify;
          }
        }
      }
      // background: url("../../assets/img/media/kol@2x.png") no-repeat center center / 100% 100%;
    }
  }
</style>
