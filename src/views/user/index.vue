<template>
  <div class="user-protrait">
    <!-- 用户画像 -->
    <Side></Side>
    <div class="container">
      <Header :target="'用户画像'"></Header>
      <div class="show-content">
        <!--用户动线部分-->
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
                    <div class="top_l">
                        <div class="cer_icon"></div>
                        <div class="t_text">北京上班族</div>
                    </div>
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
                >
                  <div class="mo_title">
                    <div class="mo_title1">北京上班族</div>
                    <div class="mo_title2">28790人</div>
                  </div>
                  <div class="sex_per">
                    <div class="sex_tle">性别占比</div>
                    <div class="sex_per_num">男 65% 女 35%</div>
                  </div>
                  <div class="age_per">
                    <div class="age_item">年龄占比</div>
                    <div class="age_item">10-25岁 65%</div>
                    <div class="age_item">31-45岁 35%</div>
                    <div class="age_item">26-30岁 15%</div>
                  </div>
                  <div class="more">查看更多</div>
                </div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop2" @mouseleave="hidePop2">
                  <div class="top_t">
                    <div class="top_l">
                        <div class="cer_icon"></div>
                        <div class="t_text">企业高管</div>
                    </div>
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
                >
                  <div class="mo_title">
                    <div class="mo_title1">企业高管</div>
                    <div class="mo_title2">3204人</div>
                  </div>
                  <div class="sex_per">
                    <div class="sex_tle">性别占比</div>
                    <div class="sex_per_num">男 85% 女 15%</div>
                  </div>
                  <div class="age_per">
                    <div class="age_item">年龄占比</div>
                    <div class="age_item">10-25岁 65%</div>
                    <div class="age_item">31-45岁 35%</div>
                    <div class="age_item">26-30岁 15%</div>
                  </div>
                  <div class="more">查看更多</div>
                </div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop3" @mouseleave="hidePop3">
                  <div class="top_t">
                    <div class="top_l">
                        <div class="cer_icon"></div>
                        <div class="t_text">北漂一族</div>
                    </div>
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
                >
                  <div class="mo_title">
                    <div class="mo_title1">北漂一族</div>
                    <div class="mo_title2">18197人</div>
                  </div>
                  <div class="sex_per">
                    <div class="sex_tle">性别占比</div>
                    <div class="sex_per_num">男 55% 女 45%</div>
                  </div>
                  <div class="age_per">
                    <div class="age_item">年龄占比</div>
                    <div class="age_item">10-25岁 65%</div>
                    <div class="age_item">31-45岁 35%</div>
                    <div class="age_item">26-30岁 15%</div>
                  </div>
                  <div class="more">查看更多</div>
                </div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop4" @mouseleave="hidePop4">
                  <div class="top_t">
                    <div class="top_l">
                        <div class="cer_icon"></div>
                        <div class="t_text">研学青年</div>
                    </div>
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
                >
                  <div class="mo_title">
                    <div class="mo_title1">研学青年</div>
                    <div class="mo_title2">7930人</div>
                  </div>
                  <div class="sex_per">
                    <div class="sex_tle">性别占比</div>
                    <div class="sex_per_num">男 45% 女 55%</div>
                  </div>
                  <div class="age_per">
                    <div class="age_item">年龄占比</div>
                    <div class="age_item">10-25岁 65%</div>
                    <div class="age_item">31-45岁 35%</div>
                    <div class="age_item">26-30岁 15%</div>
                  </div>
                  <div class="more">查看更多</div>
                </div>
              </div>
              <div class="echarts_item">
                <div class="top_panel" @mouseenter="showPop5" @mouseleave="hidePop5">
                  <div class="top_t">
                    <div class="top_l">
                        <div class="cer_icon" style="background: #FF8800;"></div>
                        <div class="t_text">自由职业</div>
                    </div>
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
                >
                  <div class="mo_title">
                    <div class="mo_title1">自由职业</div>
                    <div class="mo_title2">28970人</div>
                  </div>
                  <div class="sex_per">
                    <div class="sex_tle">性别占比</div>
                    <div class="sex_per_num">男 49% 女 51%</div>
                  </div>
                  <div class="age_per">
                    <div class="age_item">年龄占比</div>
                    <div class="age_item">10-25岁 65%</div>
                    <div class="age_item">31-45岁 35%</div>
                    <div class="age_item">26-30岁 15%</div>
                  </div>
                  <div class="more">查看更多</div>
                </div>
              </div>
            </div>
          </div>

          <div class="map_container">
            <div class="map_content">
              <video
                class="player"
                width="100%"
                height="100%"
                autoplay
                loop
                muted
                src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"
              ></video>
            </div>
            <div class="map_desc_container">
              <div class="map_title">北京上班族出行场景</div>
              <div class="map_item">
                <img :src="icon1" class="item_icon" />
                <span class="item_txt">7:00-9:00</span>
              </div>
              <div class="map_item">
                <img :src="icon2" class="item_icon" />
                <span class="item_txt">写字楼、酒吧</span>
              </div>
              <div class="map_item">
                <img :src="icon3" class="item_icon" />
                <span class="item_txt">
                  出行软件、网易云音乐、
                  <br />地铁广告、公交广告
                </span>
              </div>
              <div class="map_item" style="margin-bottom:0;">
                <img :src="icon4" class="item_icon" />
                <span class="item_txt">交通、餐饮、娱乐</span>
              </div>
            </div>
          </div>

          <div class="radio_container">
            <div class="radiocontent">
              <div class="radiocontent_item">
                <div class="radiocontent_item_label1"></div>
                <div class="radiocontent_item_txt">娱乐APP</div>
              </div>
              <div class="radiocontent_item">
                <div class="radiocontent_item_label2"></div>
                <div class="radiocontent_item_txt">沟通APP</div>
              </div>
              <div class="radiocontent_item">
                <div class="radiocontent_item_label3"></div>
                <div class="radiocontent_item_txt">工作APP</div>
              </div>
              <div class="radiocontent_item">
                <div class="radiocontent_item_label4"></div>
                <div class="radiocontent_item_txt">新闻APP</div>
              </div>
              <div class="radiocontent_item">
                <div class="radiocontent_item_label5"></div>
                <div class="radiocontent_item_txt">视频APP</div>
              </div>
              <div class="radiocontent_item">
                <div class="radiocontent_item_label6"></div>
                <div class="radiocontent_item_txt">学术APP</div>
              </div>
            </div>
          </div>
        </div>

        <!--触达用户媒介-->
        <div class="cdyhmj_container">
          <div class="cdyhmj_title_container">
            <div class="cdyhmj_title">触达用户媒介</div>
            <div class="cdyhmj_title_desc">
              <span class="title_desc_txt">查看媒介画像详情</span>
              <img :src="toRIcon" class="toRIcon" />
            </div>
          </div>
          <div class="cdyhmj_content_container">
            <div class="cdyhmj_content_top">
              <div class="cdyhmj_content_top_lef">
                <div class="cdyhmj_content_item item1">自定义媒介投放预算 (元)</div>
                <div class="cdyhmj_content_item item2">
                  <div class="input_container">
                    <span class="input1">￥</span>
                    <span class="inpu2">15,000</span>
                  </div>
                  <div class="hg_txt"></div>
                  <div class="input_container">
                    <span class="input1">￥</span>
                    <span class="inpu23"></span>
                  </div>
                </div>
                <div class="cdyhmj_content_item item3">目标客群</div>
                <div class="cdyhmj_content_item item4">
                  <img :src="inputIcon" class="inputIcon" />
                </div>
                <div class="cdyhmj_content_item item1">营销关键词</div>
                <div class="cdyhmj_content_item item5">
                  <div class="item_xtt">青春</div>
                  <div class="item_xtt">活力</div>
                </div>
              </div>
              <div class="cdyhmj_content_top_ri">
                <div class="cdyhmj_content_top_ri_tel">选择投放媒介</div>
                <div class="cal_item_container">
                  <div class="cal_item">
                    <div class="cal_item_cal_item">
                      <img :src="toLIcon" class="toLIcon" />
                    </div>
                  </div>
                  <div class="cal_item2">
                    <div class="rt_choice"></div>
                    <div class="logo_container">
                      <img :src="ttIcon" class="logoImg" />
                      <span class="cal_txt">头条</span>
                    </div>
                    <div class="txt_area">
                      <div class="txt_area11">触达率</div>
                      <div>投放成本</div>
                    </div>
                    <div class="per_area">
                      <div class="per_area1">51%</div>
                      <div>¥2500/千人</div>
                    </div>
                  </div>
                  <div class="cal_item2">
                    <div class="rt_choice2">
                      <img :src="dhIcon" class="dhIcon" />
                    </div>
                    <div class="logo_container">
                      <img :src="xhsIcon" class="logoImg" />
                      <span class="cal_txt">小红书</span>
                    </div>
                    <div class="txt_area">
                      <div class="txt_area11">触达率</div>
                      <div>投放成本</div>
                    </div>
                    <div class="per_area">
                      <div class="per_area1">46%</div>
                      <div>¥2300/千人</div>
                    </div>
                  </div>
                  <div class="cal_item2">
                    <div class="rt_choice2">
                      <img :src="dhIcon" alt srcset class="dhIcon" />
                    </div>
                    <div class="logo_container">
                      <img :src="ksIcon" class="logoImg" />
                      <span class="cal_txt">快手</span>
                    </div>
                    <div class="txt_area">
                      <div class="txt_area11">触达率</div>
                      <div>投放成本</div>
                    </div>
                    <div class="per_area">
                      <div class="per_area1">43%</div>
                      <div>¥2300/千人</div>
                    </div>
                  </div>
                  <div class="cal_item2">
                    <div class="rt_choice2">
                      <img :src="dhIcon" alt srcset class="dhIcon" />
                    </div>
                    <div class="logo_container">
                      <img :src="dyI" class="logoImg" />
                      <span class="cal_txt">抖音</span>
                    </div>
                    <div class="txt_area">
                      <div class="txt_area11">触达率</div>
                      <div>投放成本</div>
                    </div>
                    <div class="per_area">
                      <div class="per_area1">69%</div>
                      <div>¥25000/千人</div>
                    </div>
                  </div>
                  <div class="cal_item cal_item1">
                    <div class="cal_item_cal_item">
                      <img :src="toRIcon1" class="toLIcon" />
                    </div>
                  </div>
                </div>
                <div class="cdyhmj_bom">
                  <div class="cdyhmj_bom_lef">
                    已选中
                    <span style="color:#242F57">2</span>个
                  </div>
                  <div class="cdyhmj_bom_rig">
                    <img :src="ksIcon" class="cdyhmj_bom_rig1" />
                    <img :src="xhsIcon" class="cdyhmj_bom_rig1" />
                  </div>
                </div>
              </div>
            </div>
            <div class="cdyhmj_content_bom">
              <div class="cdyhmj_content_bom_lef">
                <div class="cdyhmj_content_bom_lef_top">触达用户投放策略建议</div>
                <div class="cdyhmj_content_bom_lef_bom">
                  <div class="echarts1">
                    <lineM id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM>
                  </div>
                  <div class="echarts1">
                    <div class="echarts11">
                      <div class="echarts111">建议投放金额</div>
                      <div class="echarts112">￥19,000</div>
                    </div>
                    <div class="echarts12">
                      <div class="echarts121">目标客群触达率</div>
                      <div class="echarts122">89%</div>
                    </div>
                  </div>
                  <div class="echarts1 ec1">
                    <div class="echarts13">建议投放时间段</div>
                    <div class="echarts14">
                      <div class="echarts141">
                        <div class="ech_Icon"></div>
                        <div class="ech_txt">快手</div>
                        <div class="ech_time">22:00 - 22:30</div>
                      </div>
                    </div>
                    <div class="echarts15">
                      <div class="echarts142">
                        <div class="ech_Icon1"></div>
                        <div class="ech_txt">小红书</div>
                        <div class="ech_time">19:00 - 20:30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cdyhmj_content_bom_rig">
                <div class="cdyhmj_content_bom_rig_top">优化投放方案推荐</div>
                <div class="cdyhmj_content_bom_rig_bom">
                  <img :src="yhtIcon" class="yhtIcon" alt srcset />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--目标用户群-->
        <div class="mubiao_container">
          <div class="mub_titl_container">
            <div class="mub_titl_container1">目标用户群</div>
            <div class="mub_titl_container1">
              <img :src="input1" class="input1" />
            </div>
          </div>
          <div class="mb_echarts_container">
            <div class="mb_echarts1">
                <div class="mb_echarts1_lef">
                    <div class="mb_echarts1_lef_top">
                        <span class="span1">297,786</span>人
                    </div>
                    <div class="mb_echarts1_lef_bom">养生金融小白</div>
                </div>
                <div class="mb_echarts1_rig">
                    <img :src="tu75" alt="" srcset="" class="tu20">
                </div>
            </div>
            <div class="vscls">VS</div>
            <div class="mb_echarts2">
                <div class="mb_echarts1_lef">
                    <div class="mb_echarts1_lef_top">
                        <span class="span1" style="color:#FF8800;">97,673</span>人
                    </div>
                    <div class="mb_echarts1_lef_bom">养生金融小白</div>
                </div>
                <div class="mb_echarts1_rig">
                    <img :src="tu20" alt="" srcset="" class="tu20">
                </div>
            </div>
          </div>
        </div>

        <div class="jichuhuax_area_container">
          <div class="jichuhuax_area_til">基础画像</div>
          <div class="jichuhuax_echarts_container">

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">年龄结构</div>
                  <div class="range_titme">1-4当周</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                  <img :src="threeP" class="threeP" />
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                 <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">收入结构</div>
                  <div class="range_titme">1-4当周</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                 <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">职业结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <cLine id="box58" :colorList="$lxjData.colorList" :myData="$lxjData.box58Data"></cLine>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">行业结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <barC id="box7" :colorList="$lxjData.colorList" :myData="$lxjData.box7Data"></barC>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">教育背景结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <barEcharts id="box1" :colorList="$lxjData.colorList" :myData="$lxjData.box1Data"></barEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">性别结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">主要出行方式</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <barEcharts id="box11" :colorList="$lxjData.colorList" :myData="$lxjData.box11Data"></barEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">户籍籍贯结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <barEcharts id="box12" :colorList="$lxjData.colorList" :myData="$lxjData.box12Data"></barEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">婚育状态结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <barEcharts id="box13" :colorList="$lxjData.colorList" :myData="$lxjData.box13Data"></barEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">消费能力结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <barC id="box71" :colorList="$lxjData.colorList" :myData="$lxjData.box71Data"></barC>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">车辆保有结构</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box4Data"></PieEcharts>
              </div>
            </div>

            <div class="jichuhuax_echarts_item">
              <div class="jichuhuax_echarts_item_title">
                <div class="jichuhuax_echarts_item_title_lef">
                  <div class="nljg">居住地区</div>
                  <div class="range_titme">2020.12.01-2020.12.3</div>
                </div>
                <div class="jichuhuax_echarts_item_title_rig">
                    <img :src="threeP" class="threeP">
                </div>
              </div>
              <div class="jichuhuax_echarts_item_content">
                <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box3Data"></PieEcharts>
              </div>
            </div>

          </div>
        </div>

        <div class="xwfx_area_container">
          <div class="xwfx_area_til">行为分析</div>
          <div class="ditu_area">
            <video
              class="player"
              width="100%"
              height="100%"
              autoplay
              loop
              muted
              src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"
            ></video>
          </div>
          <div class="xwfx_area_til" style="margin-bottom:12px;">不同时段APP使用情况</div>
          <div class="use_app_area">
            <img :src="useApp" style="width:100%;" />
          </div>
          <div class="use_echart_item">
              <div class="use_echart_title">不同性别APP内容偏好</div>
              <div class="use_echart_cont">
                <lineM id="box6" :colorList="$lxjData.colorList" :myData="$lxjData.box6Data"></lineM>
              </div>
          </div>
          <div class="use_echart_item">
              <div class="use_echart_title">不同年龄APP内容偏好</div>
              <div class="use_echart_cont">
                <barM id="box3" :colorList="$lxjData.colorList" :myData="$lxjData.box3Data"></barM>
              </div>
          </div>
          <div class="use_echart_item1_container">
            <div class="use_echart_item1">
                <div class="use_echart_title">时间段内APP使用结构</div>
                <div class="use_echart_cont">
                  <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box7Data"></PieEcharts>
                </div>
            </div>
            <div class="use_echart_item1">
                <div class="use_echart_title">APP内容偏好结构</div>
                <div class="use_echart_cont">
                  <barLine id="box10" :colorList="$lxjData.colorList" :myData="$lxjData.box10Data"></barLine>
                </div>
            </div>
            <div class="use_echart_item1">
                <div class="use_echart_title">用户行为分布结构</div>
                <div class="use_echart_cont">
                  <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box8Data"></PieEcharts>
                </div>
            </div>
            <div class="use_echart_item1">
                <div class="use_echart_title">用户行为消费结构</div>
                <div class="use_echart_cont">
                  <cLine id="box52" :colorList="$lxjData.colorList" :myData="$lxjData.box52Data"></cLine>
                </div>
            </div>
          </div>
        </div>

        <div class="xzfx_area_container">
          <div class="xzfx_area_title">心智分析</div>
          <div class="yhsj_echarts">
             <div class="yhsj_echarts_item_title">
                用户视觉心智动态捕捉
              </div>
              <div class="yhsj_echarts_item_content">
                <barLine id="box8" :colorList="$lxjData.colorList" :myData="$lxjData.box8Data"></barLine>
              </div>
          </div>
          <div class="xzsk_echarts">
            <div class="yhsj_echarts_item_title">
                心智时空曲线
              </div>
              <div class="yhsj_echarts_item_content">
                <barT id="box9" :colorList="$lxjData.colorList" ></barT>
              </div>
          </div>
          <div class="xinzfb_container">
            <div class="xinzfb_container_lef">
              <div class="xinzfb_container_lef_tel">心智分布</div>
              <div class="xinzfb_container_lef_content">
                <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box6Data"></PieEcharts>
              </div>
            </div>
            <div class="xinzfb_container_rig">
              <div class="xinzfb_container_rig_tel">心智倾向</div>
              <div class="xinzfb_container_lef_content">
                <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box7Data"></PieEcharts>
              </div>
            </div>
          </div>
          <div class="ppxz_container">
            <div class="ppxz_title">品牌心智</div>
            <div class="ppxz_title_desc">分心品牌当前受众的不同阶段的数据</div>
            <div class="xinzfb_container_lef_content">
               <lineS id="box57" :colorList="$lxjData.colorList" :myData="$lxjData.box57Data"></lineS>
            </div>
          </div>
          <div class="xzcb_container">
            <div class="ppxz_title">心智传播网络</div>
            <div class="ppxz_title_desc">分析传播途径</div>
            <div class="xinzfb_container_lef_content">
              <cLine id="box51" :colorList="$lxjData.colorList" :myData="$lxjData.box51Data"></cLine>
            </div>
          </div>
        </div>

        <div class="smzqfx_area_container">
            <div class="smzqfx_title">生命周期分析</div>
            <div class="xfsmlcpg_container">
                <div class="xfsmlcpg_title">消费生命旅程评估</div>
                 <div class="xinzfb_container_lef_content1">
                  <funnel id="box111" :colorList="$lxjData.colorList" :myData="$lxjData.box111Data"></funnel>
                </div>
            </div>
            <div class="xfjzg_container">
                <div class="xfjzg_container_lef">
                    <div class="jichuhuax_echarts_item_title">
                        <div class="jichuhuax_echarts_item_title_lef">
                        <div class="nljg">消费者价值评估</div>
                        <div class="range_titme">2020.12.01-2020.12.31</div>
                        </div>
                        <div class="jichuhuax_echarts_item_title_rig">
                            <img :src="threeP" class="threeP">
                        </div>
                    </div>
                    <div class="jichuhuax_echarts_item_content">
                      <lineSp id="box112" :colorList="$lxjData.colorList"></lineSp>
                    </div>
                </div>
                <div class="xfjzg_container_rig">
                    <div class="jichuhuax_echarts_item_title">
                        <div class="jichuhuax_echarts_item_title_lef">
                        <div class="nljg">加之贡献度（按标签）</div>
                        <div class="range_titme">2020.12.01-2020.12.31</div>
                        </div>
                        <div class="jichuhuax_echarts_item_title_rig">
                            <img :src="threeP" class="threeP">
                        </div>
                    </div>
                    <div class="jichuhuax_echarts_item_content">
                      <cLine id="box53" :colorList="$lxjData.colorList" :myData="$lxjData.box52Data"></cLine>
                    </div>
                </div>
            </div>
            <div class="xfzsxjcfx_container">
                <div class="xfzsxjcfx_til">消费者时序行为决策分析</div>
                <div class="xfzsxjcfx_ech">
                    <barT id="box91" :colorList="$lxjData.colorList" ></barT>
                </div>
            </div>
            <div class="xfzsxjcfx_container">
                <div class="xfzsxjcfx_til">消费者行为决策预测</div>
                <div class="xfzsxjcfx_ech">
                  <barT id="box92" :colorList="$lxjData.colorList" ></barT>
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
import barEcharts from '../../components/echarts/common/barEcharts';
import barL from '../../components/echarts/common/barL';
import barM from '../../components/echarts/common/barM';
import cLine from '../../components/echarts/common/line';
import lineO from '../../components/echarts/common/lineO';
import lineS from '../../components/echarts/common/lineS';
import lineM from '../../components/echarts/common/lineM';
import barC from '../../components/echarts/common/barC';
import barCH from '../../components/echarts/common/barCH';
import barLine from '../../components/echarts/common/barLine';
import barT from '../../components/echarts/common/barT';
import funnel from '../../components/echarts/common/funnel';
import barHM from '../../components/echarts/common/barHM';
import lineSp from '../../components/echarts/common/lineSp';
import pieP from '../../components/echarts/common/pieP';

import PieEcharts from '../../components/echarts/common/PieEcharts';
import RotateChart from '../../components/echarts/common/RotateChart';
import LeidaEcharts from '../../components/echarts/common/LeidaEcharts';
import MatchEcharts from '../../components/echarts/common/MatchEcharts';
import Yibiao1Echarts from '../../components/echarts/common/Yibiao1Echarts';
import YibiaoCharts2 from '../../components/echarts/common/YibiaoCharts2';
import Yuanhuan1 from '../../components/echarts/common/Yuanhuan1';
import Leida2Echarts from '../../components/echarts/common/Leida2Echarts';
export default {
  components: {
   pieP, barEcharts,barL,barM,cLine,lineM,barC,barLine,barT,lineS,funnel,barCH,barHM,lineO,lineSp,Side, Header, PieEcharts, RotateChart, LeidaEcharts, MatchEcharts, Yibiao1Echarts, YibiaoCharts2, Yuanhuan1, Leida2Echarts,
  },
  name: "index",
  data() {
    return {
      manIcon: require("../../assets/img/yhhx/man.png"),
      leftTimerImg: require("../../assets/img/yhhx/leftTimerImg.png"),
      ifShowPop1: false,
      ifShowPop2: false,
      ifShowPop3: false,
      ifShowPop4: false,
      ifShowPop5: false,
      icon1: require("../../assets/img/yhhx/map1.png"),
      icon2: require("../../assets/img/yhhx/map2.png"),
      icon3: require("../../assets/img/yhhx/map3.png"),
      icon4: require("../../assets/img/yhhx/map4.png"),
      toRIcon: require("../../assets/img/yhhx/toR.png"),
      toRIcon1: require("../../assets/img/yhhx/toR1.png"),
      inputIcon: require("../../assets/img/yhhx/input.png"),
      toLIcon: require("../../assets/img/yhhx/toL.png"),
      dhIcon: require("../../assets/img/yhhx/dhIcon.png"),
      yhtIcon: require("../../assets/img/yhhx/yht.png"),
      input1: require("../../assets/img/yhhx/input1.png"),
      useApp: require("../../assets/img/yhhx/useApp.png"),
      threeP: require("../../assets/img/yhhx/threeP.png"),
      ttIcon:require("../../assets/img/yhhx/tt.png"),
      xhsIcon:require("../../assets/img/yhhx/xhs.png"),
      ksIcon:require("../../assets/img/yhhx/ks.png"),
      dyIcon:require("../../assets/img/yhhx/ks.png"),
      dyI:require("../../assets/img/yhhx/dyI.png"),
      tu20:require("../../assets/img/yhhx/tu20.png"),
      tu75:require("../../assets/img/yhhx/tu75.png")
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
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
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
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
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
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
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
                    borderWidth: 0,
                    
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
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
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
            label: {
              normal: {
                show: true,
                fontWeight:600,
                fontFamily:'PingFangSC-Semibold, PingFang SC',
                fontSize:14
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
                    borderWidth: 4,
                    
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
};
</script>

<style scoped lang="scss">
.user-protrait {
  display: flex;
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
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
                  justify-content: space-between;
                  .cer_icon {
                    width: 12px;
                    height: 12px;
                    background: #2373ff;
                    border-radius: 50%;
                    margin-right: 5px;
                  }
                  .top_l{
                    display: flex;
                    align-items: center;
                    .t_text {
                        font-size: 16px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242f57;
                    }
                    .edit_text {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #2373ff;
                    }
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
                    padding: 1px 6px;
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
                top: 20px;
                left: 20px;
                width: 175px;
                height: 268px;
                background: rgba(255, 255, 255, 0.9);
                box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
                border-radius: 4px;
                padding: 16px;
                box-sizing: border-box;
                .mo_title {
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  margin-bottom: 16px;
                  .mo_title1 {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242f57;
                  }
                  .mo_title2 {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #2373ff;
                  }
                }
                .sex_per,
                .age_per {
                  width: 100%;
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242f57;
                  margin-bottom: 16px;
                  .sex_tle,
                  .sex_per_num,
                  .age_item {
                    width: 100%;
                  }
                }
                .age_per {
                  margin-bottom: 27px;
                }
                .more {
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #2373ff;
                }
              }
            }
          }
        }
        .map_container {
          width: 100%;
          min-height: 302px;
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          background-color: rgba(166, 171, 189, 0.08);
          margin-bottom: 12px;
          .map_desc_container {
            width: 313px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .map_title {
              width: 290px;
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242f57;
              margin-bottom: 12px;
            }
            .map_item {
              width: 290px;
              height: 46px;
              background: #feffff;
              border-radius: 8px;
              display: flex;
              align-items: center;
              padding: 13px 16px;
              box-sizing: border-box;
              margin-bottom: 14px;
              .item_icon {
                display: block;
                width: 18px;
                height: 18px;
                margin-right: 4px;
              }
              .item_txt {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242f57;
              }
            }
          }
          .map_content {
            flex: 1;
            height: 100%;
          }
        }
        .radio_container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .radiocontent {
            width: 500px;
            height: 17px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .radiocontent_item {
              display: flex;
              align-items: center;
              width: 60px;
              height: 100%;
              .radiocontent_item_label1,
              .radiocontent_item_label2,
              .radiocontent_item_label3,
              .radiocontent_item_label4,
              .radiocontent_item_label5,
              .radiocontent_item_label6 {
                width: 8px;
                height: 8px;
                background: #4d94ff;
                margin-right: 4px;
                border-radius: 50%;
              }
              .radiocontent_item_label2 {
                background: #ff9f7f;
              }
              .radiocontent_item_label3 {
                background: #a49dfa;
              }
              .radiocontent_item_label4 {
                background: #8ae6c7;
              }
              .radiocontent_item_label5 {
                background: #ffd98c;
              }
              .radiocontent_item_label6 {
                background: #91c2f2;
              }
              .radiocontent_item_txt {
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636e95;
              }
            }
          }
        }
      }

      .cdyhmj_container {
        width: 100%;
        min-height: 592px;
        background: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        margin-top: 24px;
        padding: 20px 24px 24px 24px;
        box-sizing: border-box;
        .cdyhmj_title_container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 24px;
          .cdyhmj_title {
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
          }
          .cdyhmj_title_desc {
            display: flex;
            align-items: center;
            .title_desc_txt {
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #7c88b1;
              margin-right: 4px;
            }
            .toRIcon {
              display: block;
              width: 16px;
              height: 16px;
            }
          }
        }
        .cdyhmj_content_container {
          width: 100%;
          min-height: 507px;
          border-radius: 8px;
          border: 1px solid #eaedf7;
          margin-top: 20px;
          .cdyhmj_content_top {
            width: 100%;
            min-height: 290px;
            border-bottom: 1px solid #eaedf7;
            display: flex;
            align-items: center;
            .cdyhmj_content_top_lef {
              width: 376px;
              height: 100%;
              padding: 24px;
              box-sizing: border-box;
              border-right: 1px solid #eaedf7;
              .cdyhmj_content_item {
                width: 100%;
              }
              .item1 {
                margin-bottom: 8px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
              }
              .item2 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .hg_txt {
                  width: 12px;
                  height: 1px;
                  background: #c6cbde;
                  border-radius: 2px;
                }
                .input_container {
                  width: 144px;
                  height: 40px;
                  box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8),
                    -2px -2px 7px 0px #fffefa;
                  border-radius: 8px;
                  border: 1px solid #c6cbde;
                  padding: 4px;
                  box-sizing: border-box;
                  display: flex;
                  align-items: center;
                  .input1 {
                    font-size: 24px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #c5cadf;
                  }
                  .inpu2 {
                    font-size: 24px;
                    font-family: HelveticaNeue-Bold, HelveticaNeue;
                    font-weight: bold;
                    color: #242f57;
                  }
                  .inpu23 {
                    display: block;
                    width: 6px;
                    height: 32px;
                    font-size: 24px;
                    font-family: HelveticaNeue;
                    color: #4488ff;
                    line-height: 32px;
                  }
                }
              }
              .item3 {
                margin-top: 16px;
                margin-bottom: 8px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
              }
              .item4 {
                height: 40px;
                margin-bottom: 16px;
                .inputIcon {
                  width: 100%;
                  height: 100%;
                }
              }
              .item5 {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .item_xtt {
                  padding: 9px 16px;
                  background: #ecf3ff;
                  border-radius: 8px;
                  border: 1px solid #2373ff;
                  font-size: 18px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #2373ff;
                  margin-right: 8px;
                }
              }
            }
            .cdyhmj_content_top_ri {
              flex: 1;
              height: 100%;
              padding: 24px 25px;
              box-sizing: border-box;
              .cdyhmj_content_top_ri_tel {
                width: 100%;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
                margin-bottom: 8px;
              }
              .cal_item_container {
                width: 100%;
                height: 168px;
                background: #f7f9fd;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .cal_item,
                .cal_item1 {
                  width: 80px;
                  height: 120px;
                  background: #ffffff;
                  border-radius: 0 8px 8px 0;
                  border: 1px solid #eaedf7;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  .cal_item_cal_item {
                    width: 30px;
                    height: 50px;
                    background: #eaedf7;
                    border-radius: 0 8px 8px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .toLIcon {
                      width: 19px;
                      height: 19px;
                    }
                  }
                }
                .cal_item1 {
                  display: flex;
                  align-items: center;
                  justify-content: flex-end;
                  .cal_item_cal_item {
                    border-radius: 8px 0 0 8px;
                  }
                }
                .cal_item2 {
                  width: 18%;
                  height: 120px;
                  background: #ffffff;
                  border-radius: 8px;
                  border: 1px solid #eaedf7;
                  padding: 12px;
                  box-sizing: border-box;
                  position: relative;
                  .rt_choice {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 16px;
                    height: 16px;
                    box-shadow: 1px 1px 1px 0px #a6abbd,
                      -1px -1px 1px 0px #fafbff;
                    border-radius: 2px;
                    border: 1px solid rgba(255, 255, 255, 0.4);
                  }
                  .rt_choice2 {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 16px;
                    height: 16px;
                    background: #2373ff;
                    box-shadow: 1px 1px 3px 0px rgba(166, 171, 190, 0.4),
                      -1px -1px 3px 0px rgba(250, 251, 255, 0.4);
                    border-radius: 2px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .dhIcon {
                      display: block;
                      width: 9px;
                      height: 7px;
                    }
                  }
                  .logo_container {
                    width: 100%;
                    height: 40px;
                    margin-bottom: 12px;
                    display: flex;
                    align-items: center;
                    .logoImg {
                      width: 40px;
                      height: 40px;
                      display: block;
                      border: 1px solid #eaedf7;
                      border-radius: 51%;
                      margin-right: 8px;
                    }
                    .cal_txt {
                      font-size: 14px;
                      font-family: PingFangSC-Medium, PingFang SC;
                      font-weight: 500;
                      color: #242f57;
                    }
                  }
                  .txt_area {
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #97a0c3;
                    display: flex;
                    align-items: center;
                    .txt_area11 {
                      margin-right: 11px;
                    }
                  }
                  .per_area {
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242f57;
                    .per_area1 {
                      margin-right: 10px;
                    }
                  }
                }
              }
              .cdyhmj_bom {
                margin-top: 22px;
                width: 100%;
                height: 24px;
                display: flex;
                align-items: center;
                .cdyhmj_bom_lef {
                  width: 88px;
                  height: 22px;
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #636e95;
                  line-height: 22px;
                }
                .cdyhmj_bom_rig {
                  flex: 1;
                  display: flex;
                  .cdyhmj_bom_rig1 {
                    display: block;
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                    border-radius: 50%;
                  }
                }
              }
            }
          }
          .cdyhmj_content_bom {
            width: 100%;
            min-height: 217px;
            background: #f7f9fd;
            padding: 16px 24px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .cdyhmj_content_bom_lef {
              flex: 1;
              height: 100%;
              .cdyhmj_content_bom_lef_top {
                width: 100%;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;
                margin-bottom: 16px;
              }
              .cdyhmj_content_bom_lef_bom {
                width: 100%;
                display: flex;
                align-items: center;
                padding-right: 24px;
                justify-content: space-between;
                .echarts1 {
                  width: 30%;
                  height: 136px;
                  padding: 6px 12px;
                  box-sizing: border-box;
                  border-radius: 8px;
                  .echarts11 {
                    width: 100%;
                    min-height: 64px;
                    background: #ffffff;
                    border-radius: 8px;
                    margin-bottom: 8px;
                    padding: 6px 12px;
                    box-sizing: border-box;
                    .echarts111,
                    .echarts112 {
                      width: 100%;
                      font-size: 12px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #97a0c3;
                    }
                    .echarts112 {
                      font-size: 24px;
                      font-family: PingFangSC-Semibold, PingFang SC;
                      font-weight: 600;
                      color: #242f57;
                    }
                  }
                  .echarts12 {
                    widows: 100%;
                    min-height: 64px;
                    background: #ffffff;
                    border-radius: 2px;
                    padding: 6px 12px;
                    box-sizing: border-box;
                    .echarts121,
                    .echarts122 {
                      width: 100%;
                      font-size: 12px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #97a0c3;
                    }
                    .echarts122 {
                      height: 32px;
                      font-size: 24px;
                      font-family: HelveticaNeue-Bold, HelveticaNeue;
                      font-weight: bold;
                      color: #242f57;
                    }
                  }
                  .echarts13 {
                    width: 100%;
                    margin-bottom: 8px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #97a0c3;
                  }
                  .echarts14,
                  .echarts15 {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 8px;
                    .echarts141,
                    .echarts142 {
                      display: flex;
                      align-items: center;
                      .ech_Icon,
                      .ech_Icon1 {
                        width: 8px;
                        height: 8px;
                        background: rgba(68, 136, 255, 0.85);
                        border-radius: 50%;
                        margin-right: 5px;
                      }
                      .ech_Icon1 {
                        background: rgba(164, 157, 250, 0.85);
                      }
                      .ech_time,
                      .ech_txt {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242f57;
                      }
                      .ech_txt {
                        margin-right: 40px;
                      }
                    }
                  }
                }
                .ec1 {
                  background: #ffffff;
                }
              }
            }
            .cdyhmj_content_bom_rig {
              width: 421px;
              height: 100%;
              padding-left: 24px;
              box-sizing: border-box;
              border-left: 1px solid #eaedf7;
              .cdyhmj_content_bom_rig_top {
                width: 100%;
                margin-bottom: 16px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242f57;
              }
              .cdyhmj_content_bom_rig_bom {
                width: 100%;
                height: 136px;
                .yhtIcon {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }

      .mubiao_container {
        width: 100%;
        min-height: 244px;
        background: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        margin-top: 24px;
        padding: 24px;
        box-sizing: border-box;
        margin-bottom: 24px;
        .mub_titl_container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          .mub_titl_container1 {
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
            display: flex;
            align-items: center;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
            .input1 {
              display: block;
              width: 473px;
              height: 32px;
            }
          }
        }
        .mb_echarts_container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .mb_echarts1,
          .mb_echarts2 {
            width: 48%;
            height: 148px;
            border-radius: 8px;
            border: 1px solid #2373ff;
            padding: 29px 35px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .mb_echarts1_lef{
                .mb_echarts1_lef_top{
                    margin-bottom: 8px;
                    .span1{
                        font-size: 32px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #2373FF;
                    }
                }
                .mb_echarts1_lef_bom{
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                }
            }
            .mb_echarts1_rig{
                width: 90px;
                height: 90px;
                .tu20{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
          }
          .vscls {
            font-size: 24px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
          }
          .mb_echarts2 {
            border: 1px solid #ff8800;
          }
        }
      }

      .row_title {
        width: 100%;
        text-align: center;
        margin-top: 24px;
        margin-bottom: 24px;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
      }

      .jichuhuax_area_container {
        width: 100%;
        background: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        padding: 24px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .jichuhuax_area_til {
          width: 100%;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          margin-bottom: 24px;
        }
        .jichuhuax_echarts_container {
          width: 100%;
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .jichuhuax_echarts_item {
            width: 49%;
            height: 446px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #eaedf7;
            margin-bottom: 24px;
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .jichuhuax_echarts_item_title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .jichuhuax_echarts_item_title_lef {
                .nljg {
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242f57;
                }
                .range_titme {
                  margin-top: 4px;
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #7c88b1;
                }
              }
              .jichuhuax_echarts_item_title_rig {
                width: 16px;
                height: 16px;
                .threeP {
                  display: block;
                  width: 100%;
                }
              }
            }
            .jichuhuax_echarts_item_content{
              flex:1
            }
          }
        }
      }

      .xwfx_area_container {
        width: 100%;
        background: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        padding: 24px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        .xwfx_area_til {
          width: 100%;
          margin-bottom: 24px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
        }
        .ditu_area {
          width: 100%;
          background-color: silver;
          margin-bottom: 24px;
        }
        .use_app_area {
          width: 100%;
          margin-bottom: 24px;
        }
        .use_echart_item {
          width: 100%;
          height: 400px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #eaedf7;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          .use_echart_title{
            padding:10px
          }
          .use_echart_cont{
           flex:1
         }
        }
        .use_echart_item1_container {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .use_echart_item1 {
            width: 49%;
            height: 427px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #eaedf7;
            margin-bottom: 24px;
             display: flex;
              flex-direction: column;
              .use_echart_title{
                padding:10px
              }
              .use_echart_cont{
              flex:1
            }
          }
        }
      }

      .xzfx_area_container {
        width: 100%;
        background: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        padding: 24px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        .xzfx_area_title {
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
        }
        .yhsj_echarts,
        .xzsk_echarts {
          width: 100%;
          height: 336px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #eaedf7;
          margin-bottom: 24px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          .yhsj_echarts_item_title{
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242f57;
          }
          .yhsj_echarts_item_content{
            flex:1
          }
        }
        .xinzfb_container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .xinzfb_container_lef,
          .xinzfb_container_rig {
            width: 49%;
            height: 393px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #eaedf7;
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .xinzfb_container_lef_tel {
              width: 100%;
            }
            .xinzfb_container_lef_content {
              flex:1
            }
          }
        }
        .ppxz_container {
          margin-top: 24px;
          width: 100%;
          height: 523px;
          padding: 16px;
          box-sizing: border-box;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #eaedf7;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          .ppxz_title {
            width: 100%;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242f57;
            margin-bottom: 4px;
          }
          .ppxz_title_desc {
            width: 100%;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
          }
          .xinzfb_container_lef_content{
            flex:1
          }
        }
        .xzcb_container {
          width: 100%;
          height: 292px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #eaedf7;
          padding: 16px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          .ppxz_title {
            width: 100%;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242f57;
            margin-bottom: 4px;
          }
          .ppxz_title_desc {
            width: 100%;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
          }
          .xinzfb_container_lef_content{
            flex:1
          }
        }
      }

      .smzqfx_area_container{
        width: 100%;
        min-height: 1505px;
        background: #FFFFFF;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        margin-top: 24px;
        padding: 24px;
        box-sizing: border-box;
        .smzqfx_title{
            width: 100%;
            margin-bottom: 24px;        
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
        }
        .xfsmlcpg_container{
            width: 100%;
            height: 336px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            padding: 16px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .xfsmlcpg_title{
                width: 100%;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
            }
            .xinzfb_container_lef_content{
              flex:1
            }
            .xinzfb_container_lef_content1{
              width:40%;
              margin:auto;
              flex:1
            }
        }
        .xfjzg_container{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 24px;
            .xfjzg_container_lef,.xfjzg_container_rig{
                width: 49%;
                height: 377px;
                background: #FFFFFF;
                border-radius: 8px;
                border: 1px solid #EAEDF7;
                padding: 16px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                .jichuhuax_echarts_item_title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .jichuhuax_echarts_item_title_lef {
                        .nljg {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242f57;
                        }
                        .range_titme {
                        margin-top: 4px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #7c88b1;
                        }
                    }
                    .jichuhuax_echarts_item_title_rig {
                        width: 16px;
                        height: 16px;
                        .threeP {
                        display: block;
                        width: 100%;
                        }
                    }
                }
                .jichuhuax_echarts_item_content{
                  flex:1
                }
            }
        }
        .xfzsxjcfx_container{
            width: 100%;
            min-height: 312px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            margin-top: 24px;
            padding: 16px;
            box-sizing: border-box;
            display:flex;
            flex-direction: column;
            .xfzsxjcfx_til{
                width: 100%;
                height: 21px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                margin-bottom: 18px;
            }
            .xfzsxjcfx_ech{
              flex:1;
               height: 290px;
            }
        }
      }
    }
  }
}
</style>