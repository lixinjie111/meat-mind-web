<template>
    <!--  用户画像-->
    <div class="user-protrait">
      <!--用户动线部分-->
      <div class="yhdx_container">
        <div class="top_title_container">
          <div class="left_text">
            <div class="left_title_text">
              <span>用户动线</span>
              <Poptip popper-class="saas-poptip" placement="right-start">
                <!-- <i class="iconfont2 iconguanyu tip-icon"></i> -->
                <img class="gif" src="../../assets/img/user/tip.gif" alt="">
                <div slot="content">
                  <p><span>出行计算公式：</span>出行总人次/出行总人次*100%</p>
                  <p><span>空间数据化：</span>对空间进行量化，通过数字化语言，将空间进行尺度划分和重新定义，再利用技术手段来评价空间质量。在商业空间中，意味着可以分析其周边环境对消费者的使用感受影响，以及对商业运营的影响</p>
                  <p><span>用户动线：</span>依靠计算机快速模拟人流出行行为轨迹，依靠轨迹判断动线布置当中出现可达性、可见性与店铺通行概率问题，通过验证的方法再次修正动线设计</p>
                </div>
              </Poptip>
            </div>
            <div class="left_desc_text">分析品牌对应的不同用户群对应的在不同时间，不同场景，使用了哪些App/Web，以及详细的数据跟踪。</div>
          </div>
          <div class="right_btn" @click="formatUser">
            <img :src="manIcon" class="manIcon" />
            <span>自定义客群</span>
          </div>
        </div>

        <div class="bjsbz_container">
          <div class="lef_area">
            <div class="lef_area_top">
              <div class="actImg_container">
                <img :src="sbAvatImg" alt="" srcset="" class="avatImg">
              </div>
              <div class="perinfo">
                <div class="perinfo_t">北京上班族</div>
                <div class="perinfo_b">用户数 28790人</div>
              </div>
            </div>
            <div class="lef_area_bom" @click="expandfn(1)">{{vDxtxt1}}</div>
          </div>
          <div class="cen_area">
            <img :src="bjsbzImgTime" alt="" srcset="" class="cen_areaImg">
          </div>
          <div class="rig_area">
            <div class="yl_container">
              <div class="yl_lef" style="background: #FF9502;"></div>
              <div class="yl_rig">娱乐</div>
            </div>
            <div class="gz_container">
              <div class="yl_lef" style="background: #A49DFA;"></div>
              <div class="yl_rig">工作</div>
            </div>
            <div class="xw_container">
              <div class="yl_lef" style="background: #017AFF;"></div>
              <div class="yl_rig">新闻</div>
            </div>
            <div class="sp_container">
              <div class="yl_lef" style="background: #2EB1FF;"></div>
              <div class="yl_rig">视频</div>
            </div>
            <div class="xs_container">
              <div class="yl_lef" style="background: #F383FF;"></div>
              <div class="yl_rig">学术</div>
            </div>
          </div>
        </div>
        <vDxitem v-if="ifShowDx1"></vDxitem>

        <div class="bjsbz_container">
          <div class="lef_area">
            <div class="lef_area_top">
              <div class="actImg_container">
                <img :src="avatImg" alt="" srcset="" class="avatImg">
              </div>
              <div class="perinfo">
                <div class="perinfo_t">研学青年</div>
                <div class="perinfo_b">用户数 7930人</div>
              </div>
            </div>
            <div class="lef_area_bom" @click="expandfn(2)">{{vDxtxt2}}</div>
          </div>
          <div class="cen_area">
            <img :src="yxqnImgTime" alt="" srcset="" class="cen_areaImg">
          </div>
          <div class="rig_area">
            <div class="gt_container">
              <div class="yl_lef" style="background: #36D67B;"></div>
              <div class="yl_rig">沟通</div>
            </div>
            <div class="gz_container">
              <div class="yl_lef" style="background: #A49DFA;"></div>
              <div class="yl_rig">工作</div>
            </div>
            <div class="xw_container">
              <div class="yl_lef" style="background: #017AFF;"></div>
              <div class="yl_rig">新闻</div>
            </div>
            <div class="xs_container">
              <div class="yl_lef" style="background: #F383FF;"></div>
              <div class="yl_rig">学术</div>
            </div>
          </div>
        </div>
        <vDxitem1 v-if="ifShowDx2"></vDxitem1>

        <div class="bjsbz_container">
          <div class="lef_area">
            <div class="lef_area_top">
              <div class="actImg_container"> 
                <img :src="qyggImg" alt="" srcset="" class="avatImg">
              </div>
              <div class="perinfo">
                <div class="perinfo_t">企业高管</div>
                <div class="perinfo_b">用户数 3204人</div>
              </div>
            </div>
            <div class="lef_area_bom" @click="expandfn(3)">{{vDxtxt3}}</div>
          </div>
          <div class="cen_area">
            <img :src="qyggImgTime" alt="" srcset="" class="cen_areaImg">
          </div>
          <div class="rig_area">
            <div class="gz_container">
              <div class="yl_lef" style="background: #A49DFA;"></div>
              <div class="yl_rig">工作</div>
            </div>
            <div class="xs_container">
              <div class="yl_lef" style="background: #F383FF;"></div>
              <div class="yl_rig">学术</div>
            </div>
          </div>
        </div>
        <vDxitem v-if="ifShowDx3"></vDxitem>

        <div class="bjsbz_container">
          <div class="lef_area">
            <div class="lef_area_top">
              <div class="actImg_container">
                <img :src="bpyzImg" alt="" srcset="" class="avatImg">
              </div>
              <div class="perinfo">
                <div class="perinfo_t">北漂一族</div>
                <div class="perinfo_b">用户数 18197人</div>
              </div>
            </div>
            <div class="lef_area_bom" @click="expandfn(4)">{{vDxtxt4}}</div>
          </div>
          <div class="cen_area">
            <img :src="bjsbzImgTime" alt="" srcset="" class="cen_areaImg">
          </div>
          <div class="rig_area">
            <div class="yl_container">
              <div class="yl_lef" style="background: #FF9502;"></div>
              <div class="yl_rig">娱乐</div>
            </div>
            <div class="gt_container">
              <div class="yl_lef" style="background: #36D67B;"></div>
              <div class="yl_rig">沟通</div>
            </div>
            <div class="gz_container">
              <div class="yl_lef" style="background: #A49DFA;"></div>
              <div class="yl_rig">工作</div>
            </div>
            <div class="xw_container">
              <div class="yl_lef" style="background: #017AFF;"></div>
              <div class="yl_rig">新闻</div>
            </div>
            <div class="xs_container">
              <div class="yl_lef" style="background: #F383FF;"></div>
              <div class="yl_rig">学术</div>
            </div>
          </div>
        </div>
        <vDxitem v-if="ifShowDx4"></vDxitem>

        <div class="bjsbz_container">
          <div class="lef_area">
            <div class="lef_area_top">
              <div class="actImg_container">
                <img :src="zyzyImg" alt="" srcset="" class="avatImg">
              </div>
              <div class="perinfo">
                <div class="perinfo_t">自由职业</div>
                <div class="perinfo_b">用户数 28790人</div>
              </div>
            </div>
            <div class="lef_area_bom" @click="expandfn(5)">{{vDxtxt5}}</div>
          </div>
          <div class="cen_area">
            <img :src="zyzyImgTime" alt="" srcset="" class="cen_areaImg">
          </div>
          <div class="rig_area">
            <div class="yl_container">
              <div class="yl_lef" style="background: #FF9502;"></div>
              <div class="yl_rig">娱乐</div>
            </div>
            <div class="gt_container">
              <div class="yl_lef" style="background: #36D67B;"></div>
              <div class="yl_rig">沟通</div>
            </div>
            <div class="sp_container">
              <div class="yl_lef" style="background: #2EB1FF;"></div>
              <div class="yl_rig">视频</div>
            </div>
            <div class="xs_container">
              <div class="yl_lef" style="background: #F383FF;"></div>
              <div class="yl_rig">学术</div>
            </div>
          </div>
        </div>
        <vDxitem v-if="ifShowDx5"></vDxitem>

        <!-- <div class="echarts_container1">
          <div class="left_timer_container">
            <img :src="leftTimerImg" class="leftTimerImg" />
          </div>
          <div class="right_qipao_container">
            <div class="echarts_item">
              <div class="top_panel" @mouseenter="showPop1" @mouseleave="hidePop1" @click="clickTab(1)">
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
              <div class="top_panel" @mouseenter="showPop2" @mouseleave="hidePop2" @click="clickTab(2)">
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
              <div class="top_panel" @mouseenter="showPop3" @mouseleave="hidePop3" @click="clickTab(3)">
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
              <div class="top_panel" @mouseenter="showPop4" @mouseleave="hidePop4" @click="clickTab(4)">
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
              <div class="top_panel" @mouseenter="showPop5" @mouseleave="hidePop5" @click="clickTab(5)">
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
        </div> -->

        <!-- <div class="map_container">
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
        </div> -->

        <!-- <div class="radio_container">
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
        </div> -->

      </div>

      <!--触达用户媒介-->
     <chuDa></chuDa>

      <!--目标用户群-->
      <div class="da_container">
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
                <span class="span1">28,790</span>人
              </div>
              <div class="mb_echarts1_lef_bom">北京上班族</div>
            </div>
            <div class="mb_echarts1_rig">
              <img :src="tu75" alt="" srcset="" class="tu20">
            </div>
          </div>
          <div class="vscls">VS</div>
          <div class="mb_echarts2">
            <div class="mb_echarts1_lef">
              <div class="mb_echarts1_lef_top">
                <div class="mb_echarts2_empty_box1"></div>
              </div>
              <div class="mb_echarts2_empty_box2"></div>
            </div>
            <div class="mb_echarts1_rig">
              <img :src="tu20" alt="" srcset="" class="tu20">
            </div>
          </div>
        </div>
      </div>
      <div class="mark-detail-anchor">
      <Anchor show-ink :offset-top="64">
            <AnchorLink href="#jichuhuax_area_container" title="基础画像" />
            <AnchorLink href="#xwfx_area_container" title="行为分析" />
            <AnchorLink href="#xzfx_area_container" title="心智分析" />
            <AnchorLink href="#smzqfx_area_container" title="生命周期分析" />
        </Anchor>
      </div>
      <div class="jichuhuax_area_container" id="jichuhuax_area_container">
        <div class="jichuhuax_area_til">基础画像</div>
        <vTabCard :tabData="jchxData"></vTabCard>
        <div class="jichuhuax_echarts_container">

          <div class="jichuhuax_echarts_item">
            <div class="jichuhuax_echarts_item_title">
              <div class="jichuhuax_echarts_item_title_lef">
                <div class="nljg">年龄结构</div>
                <div class="range_titme">1-4当周</div>
                <div class="range_data">
                  <div class="range_data_left">
                     <span>682</span>人
                   </div>
                  <div class="range_data_right">
                    合计<span>7557</span>人
                  </div>
                </div>
                <div class="range_data1">
                  <div class="range_data_left">
                    <div class="range_data_box1">
                      环比
                    <div class="pic"> 
                      <img src="../../assets/img/yhhx/jiantou.png" alt="">
                    </div> 
                    <span>1.47%</span>
                    </div> 
                    <div class="range_data_box1"> 
                      同比
                      <div class="pic"> 
                        <img src="../../assets/img/yhhx/jiantou.png" alt="">
                      </div> 
                      <span>4.47%</span>
                    </div> 
                   </div>
                  <div class="range_data_right">
                    均值<span>839.67</span>人
                  </div>
                </div>
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
                 <div class="range_data">
                  <div class="range_data_left">
                     <span>782</span>人
                   </div>
                  <div class="range_data_right">
                    合计<span>3557</span>人
                  </div>
                </div>
                <div class="range_data1">
                  <div class="range_data_left">
                    <div class="range_data_box1">
                      环比
                    <div class="pic"> 
                      <img src="../../assets/img/yhhx/jiantou.png" alt="">
                    </div> 
                    <span>3.47%</span>
                    </div> 
                    <div class="range_data_box1"> 
                      同比
                      <div class="pic"> 
                        <img src="../../assets/img/yhhx/jiantou.png" alt="">
                      </div> 
                      <span>8.47%</span>
                    </div> 
                   </div>
                  <div class="range_data_right">
                    均值<span>139.67</span>人
                  </div>
                </div>
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

      <div class="xwfx_area_container" id="xwfx_area_container">
        <div class="xwfx_area_til">
          <span>行为分析</span>
          <Poptip popper-class="saas-poptip" placement="right-start">
            <!-- <i class="iconfont2 iconguanyu tip-icon"></i> -->
            <img class="gif" src="../../assets/img/user/tip.gif" alt="">
            <div slot="content">
              <p><span>基于群体智能的客户行为分析算法：</span>算法主要思路是首先将客户的消费模式作为平面上的一个点随机分布于一个平面区域内 ; 然后测量当前个体对象在局部环境的群体相似度 ,并通过概率转换函数得到拾起或放下对象的概率 ,以这个概率行动 ,经过群体大量的相互作用 ,最终得到若干聚类中心 ;最后 ,在平面区域内采用递归算法收集聚类结果 ,获得不同消费特征的客户群体</p>
              <p>
                <span>群体相似度的基本测量公式为:</span>
                <img class="small" src="../../assets/img/yhhx/tip1.png"/>
              </p>
              <p>其中 Neigh ( r) 表示局部环境 ,在两维网格环境中通常表示以 r 为半径的圆形区域. d ( oi , oj ) 表示对象属性空间里的对象 o i与 o j之间的距离 , 常用方法是 ij 欧氏距离和街市距离等.α定义为群体相似系数. 它是群体相似度测量的关键系数 , 它直接影响聚类中心的个数 ,同时也影响聚类算法的收敛速度. </p>
              <p><span>算法的基本过程描述如下:</span></p>
              <p>1.程序初始化,初始化α, number,k,R,size,最大循环次数n等参数,随机赋给每一个模式一对(x,y)坐标 , 赋初始模式值 , 初始状态为无负载 ;</p>
              <p>2.for i=1,2,⋯,n;</p>
              <p>（1）对于一组中的每一只个体 ,以R为观察半径 ,利用式(1)计算群体相似度；</p>
              <p>（2）以一定的步长调整α;</p>
              <p>3.聚类编号serial- no初始为0;</p>
              <p>4.在聚类结果平面上,选定一个未标记聚类编号的模式 p为种子;</p>
              <p>5.用同一编号递归标记所有与模式 p 相距小于 dist的模式 , 即收集所有属于该聚类中心的模式。</p>
            </div>
          </Poptip>
        </div>
        <vTabCard :tabData="xwfxData"></vTabCard>
        <!--          <div class="ditu_area">-->
        <!--            <video-->
        <!--              class="player"-->
        <!--              width="100%"-->
        <!--              height="100%"-->
        <!--              autoplay-->
        <!--              loop-->
        <!--              muted-->
        <!--              src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"-->
        <!--            ></video>-->
        <!--          </div>-->
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

      <div class="xzfx_area_container" id="xzfx_area_container">
        <div class="xzfx_area_title">
          <span>心智分析</span>
          <Poptip popper-class="saas-poptip" placement="right-start">
            <!-- <i class="iconfont2 iconguanyu tip-icon"></i> -->
            <img class="gif" src="../../assets/img/user/tip.gif" alt="">
            <div slot="content">
              <p><span>心理模型</span>在人机交互和交互设计中起着重要的作用。它们与用户感知周围世界的方式有关，并且基于信念，而不是一个事实概念。但是，如果你能理解用户的心理模型，你就可以在设计中模拟这些模型，使它们更加实用和直观。 心理模型是信念的人工制品。它们是用户对任何给定系统或交互所持有的信念。在大多数情况下，信念在一定程度上会与现实生活模式相似。这一点很重要，因为用户会根据他们的心理模型来计划和预测系统内未来的行为。</p>
              <p><span>客户需求智能化处理</span></p>
              <p>设不完备客户需求信息系统是需求决策系统，其中 是非空的客户需求信息集，表示客户需求属性的非空有限集，表示客户需求映射决策的非空有限集，为特征属性值域，f是U和V关系集，也称为需求决策规则集。其中，f(ui,pj)=vij表示某个用户需求ui在需求特征属性pj下的属性量值是vij。令Vi(xj)是对象xj在条件属性Ci上的取值。当∀Ci( X j) = * 时，表明I中含有缺失值。根据粗糙集理论，当不同客户对相同需求的选择一致时，则具有一定的概率选择其他不同的属性值。即当c(x,b)= * 时，使用需求映射系统中在属性集b下出现概率最高的属性值代替。若存在属性值出现概率最高的次数不唯一时，则选用其他属性中相同属性值最高的替代。</p>
              <p>定义经扩充的可辨识矩阵M为:<img class="small" src="../../assets/img/yhhx/tip2.png"/></p>
              <p>其中:M(i,j)是可辨识矩阵中第i行第j列元素，i,j=1,2,...,n ; *表示缺失值。</p>
              <p>设MASi为对象xi的缺失属性集，即:<img class="small" src="../../assets/img/yhhx/tip3.png"/></p>
              <p>设NSi为 xi的对象集:<img class="small" src="../../assets/img/yhhx/tip4.png"/></p>
              <p>设MOS 为需求决策表S的缺失对象集，即:<img class="small" src="../../assets/img/yhhx/tip5.png"/></p>
              <p>输入：不完备信息决策表 I *= (U* , C* UD) ;</p>
              <p>输出：完备的信息决策表 Ir =(Ur,CrUD) 。</p>
              <img src="../../assets/img/yhhx/tip6.png"/>
            </div>
          </Poptip>
        </div>
        <vTabCard :tabData="xzfxData"></vTabCard>
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

      <div class="smzqfx_area_container" id="smzqfx_area_container">
        <div class="smzqfx_title" >生命周期分析</div>
        <vTabCard :tabData="smzqfxData"></vTabCard>
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
            <barT1 id="box91" :colorList="$lxjData.colorList" ></barT1>
          </div>
        </div>
        <div class="xfzsxjcfx_container">
          <div class="xfzsxjcfx_til">消费者行为决策预测</div>
          <div class="xfzsxjcfx_ech">
            <barT2 id="box92" :colorList="$lxjData.colorList" ></barT2>
          </div>
        </div>
      </div>
      </div>



    </div>
</template>
<script>
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
import barT from '../../components/echarts/common/barT1';
import barT1 from '../../components/echarts/common/barT2';
import barT2 from '../../components/echarts/common/barT';
import funnel from '../../components/echarts/common/funnel';
import barHM from '../../components/echarts/common/barHM';
import lineSp from '../../components/echarts/common/lineSp';
import pieP from '../../components/echarts/common/pieP';

import PieEcharts from '../../components/echarts/common/PieEcharts';
import PieEcharts1 from '../../components/echarts/common/PieEcharts1';
import RotateChart from '../../components/echarts/common/RotateChart';
import LeidaEcharts from '../../components/echarts/common/LeidaEcharts';
import MatchEcharts from '../../components/echarts/common/MatchEcharts';
import Yibiao1Echarts from '../../components/echarts/common/Yibiao1Echarts';
import YibiaoCharts2 from '../../components/echarts/common/YibiaoCharts2';
import Yuanhuan1 from '../../components/echarts/common/Yuanhuan1';
import Leida2Echarts from '../../components/echarts/common/Leida2Echarts';
import vDxitem from "./dxItem";
import vDxitem1 from "./dxItem1";
import vTabCard from "./tabCard";
import chuDa from "./chuDa";
export default {
  components: {
   PieEcharts1,barT1,barT2,pieP, barEcharts,barL,barM,cLine,lineM,barC,barLine,barT,lineS,funnel,barCH,barHM,lineO,lineSp, PieEcharts, RotateChart, LeidaEcharts, MatchEcharts, Yibiao1Echarts, YibiaoCharts2, Yuanhuan1, Leida2Echarts,
   vDxitem,vDxitem1,vTabCard,chuDa
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
      tu75:require("../../assets/img/yhhx/tu75.png"),
      descTitle:'北京上班族出行场景',
      avatImg:require("../../assets/img/yhhx/avat.png"),
      sbAvatImg:require("../../assets/img/yhhx/sbAvat.png"),
      qyggImg:require("../../assets/img/yhhx/sbAvat.png"),
      bpyzImg:require("../../assets/img/yhhx/bpAvat.png"),
      zyzyImg:require("../../assets/img/yhhx/zyAvat.png"),
      bjsbzImgTime:require("../../assets/img/yhhx/bjsbzImg.png"),
      yxqnImgTime:require("../../assets/img/yhhx/yxqnImg.png"),
      qyggImgTime:require("../../assets/img/yhhx/qyggImg.png"),
      bpyzImgTime:require("../../assets/img/yhhx/bpyzImg.png"),
      zyzyImgTime:require("../../assets/img/yhhx/zyzyImg.png"),
      ifShowDx1:true,
      vDxtxt1:'收起用户动线',
      ifShowDx2:false,
      vDxtxt2:'展开用户动线',
      ifShowDx3:false,
      vDxtxt3:'展开用户动线',
      ifShowDx4:false,
      vDxtxt4:'展开用户动线',
      ifShowDx5:false,
      vDxtxt5:'展开用户动线',
      jchxData:{
        lefData:{
          til:'当前状况',
          subTil:'受众群体年龄覆盖范围窄，核心受众20 -25 岁行业覆盖不够深入，只覆盖高收入人群'
        },
        rigData:{
          til:'策略建议',
          subTil:'扩大受众群体的年龄范围，从15岁 - 40岁。行业覆盖宜深入打通渠道'
        }
      },
      xwfxData:{
        lefData:{
          til:'当前状况',
          subTil:'用户行为特征与年龄、职业等基本属性高度相关。重要的线上触点是生活服务、视频娱乐、社交通讯类应用'
        },
        rigData:{
          til:'策略建议',
          subTil:'结合用户使用习惯及使用场景差异，在19:00 - 22:30时间段使用娱乐场景APP（如抖音）进行品牌推广为佳'
        }
      },
      xzfxData:{
        lefData:{
          til:'当前状况',
          subTil:'用户对营销信息呈现波动性情绪反馈，注意力集中时间有限；日间情绪随时间波动大，对短视频APP偏好明显。'
        },
        rigData:{
          til:'策略建议',
          subTil:'选取用户心情愉悦的时间段进行品牌推广，结合场景优化用户触达方案。'
        }
      },
      smzqfxData:{
        lefData:{
          til:'当前状况',
          subTil:'早期客户留存转化率较低，成熟期及休眠期的用户消费潜力巨大，用户在餐饮百货品类价值贡献度高。'
        },
        rigData:{
          til:'策略建议',
          subTil:'对于早期顾客加大投放力度，对于成熟期及休眠期顾客挖掘其用户价值，迎合用户偏好制定策略。'
        }
      },
      choice1:false,
      choice2:true,
      choice12:true,
      mbValue:'bjsbz',
      chuData:this.$fjData.box0Data,
      mubiaoList:[
        {
          label:'北京上班族',
          value:'bjsbz'
        },
        {
          label:'研学青年',
          value:'yxqn'
        },
        {
          label:'企业高管',
          value:'qygg'
        },
        {
          label:'北漂一族',
          value:'bpyz'
        },
        {
          label:'自由职业',
          value:'zyzz'
        }
      ]
    };
  },
  mounted() {
    this.initPopEcharts();
  },
  methods: {
    changeNews(val){
      console.log(val)
      if(val){
        this.chuData=this.$fjData.box01Data;
      }else{
        this.chuData=this.$fjData.box0Data;
      }
    },
    formatUser(){
      this.$router.push({name:"user-defined"})
    },
    goMidea(){
      this.$router.push({
        path:"/media"
      });
    },
    expandfn(arg){
      if(arg == 1){
        if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx1 = !this.ifShowDx1;
        if(this.ifShowDx1){
          this.vDxtxt1 = '收起用户动线';
        }
        else{
          this.vDxtxt1 = '展开用户动线';
        }
      }
      else if(arg == 2){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx2 = !this.ifShowDx2;
        if(this.ifShowDx2){
          this.vDxtxt2 = '收起用户动线';
        }
        else{
          this.vDxtxt2 = '展开用户动线';
        }
      }
      else if(arg == 3){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx3 = !this.ifShowDx3;
        if(this.ifShowDx3){
          this.vDxtxt3 = '收起用户动线';
        }
        else{
          this.vDxtxt3 = '展开用户动线';
        }
      }
      else if(arg == 4){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '展开用户动线';
        }
        this.ifShowDx4 = !this.ifShowDx4;
        if(this.ifShowDx4){
          this.vDxtxt4 = '收起用户动线';
        }
        else{
          this.vDxtxt4 = '展开用户动线';
        }
      }
      else if(arg == 5){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '展开用户动线';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '展开用户动线';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '展开用户动线';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '展开用户动线';
        }
        this.ifShowDx5 = !this.ifShowDx5;
        if(this.ifShowDx5){
          this.vDxtxt5 = '收起用户动线';
        }
        else{
          this.vDxtxt5 = '展开用户动线';
        }
      }
    },
    clickTab(arg){
      if(arg == 1){
        this.descTitle = '北京上班族出行场景';
      }
      else if(arg == 2){
        this.descTitle = '企业高管出行场景';
      }
      else if(arg == 3){
        this.descTitle = '北漂一族出行场景';
      }
      else if(arg == 4){
        this.descTitle = '研学青年出行场景';
      }
      else if(arg == 5){
        this.descTitle = '自由职业出行场景';
      }
    },
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
<style lang="scss">
.mark-detail-anchor{
    position: relative;
    width:100%;
    .ivu-affix{
        left:288px !important;
        top:48px  !important;
        z-index: 1001;
    }
}
.ivu-anchor-wrapper{
    overflow: visible;
    padding-left: 0;
    margin-left: 0;
    max-height: 36px !important;
    height: 36px;
    background: #fff;
    border-bottom:1px solid #DEE2EE;
    .ivu-anchor{
        height: 100%;
        display: flex;
        padding-left: 0;
        .ivu-anchor-ink{
            width: 100%;
            height: 1px;
            bottom: 0;
            top:auto;
            &::before{
                display: none;
                background-color: #DEE2EE;
            }
        }
        .ivu-anchor-link{
            padding: 0;
            margin-right: 32px;
            height: 36px;
            line-height: 36px;
        }
        .ivu-anchor-ink-ball{
            display: none;
            width: 84px;
            height: 2px;
            background-color:#2373FF;
            border: none;
            border-radius: unset;
        }
        .ivu-anchor-link-active{
            border-bottom: 2px solid #2373FF;
            >.ivu-anchor-link-title{
                color:#2373FF;
            }
        }
        .ivu-anchor-link-title{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
        }
    }
}
</style>
<style scoped lang="scss">
.user-protrait {
  padding: 0 24px 24px 24px;

  .yhdx_container {
    width: 100%;
    background: #ffffff;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
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
          height: 24px;
          display: flex;
          align-items: center;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          margin-bottom: 4px;
          ::v-deep .ivu-poptip{
            height: 24px;
          }
          .gif{
            width: 24px;
            height: 24px;
            cursor: pointer;
          }
        }
        .left_desc_text {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636e95;
        }
      }
      .right_btn {
        width: 126px;
        height: 40px;
        background: #FFFFFF linear-gradient(148deg, rgba(220, 225, 236, 0.2) 0%, rgba(255, 255, 255, 0.76) 100%);
        box-shadow: 3px 4px 8px 0px rgba(36, 47, 87, 0.1);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
        cursor:pointer;
        .manIcon {
          display: block;
          width: 24px;
          height: 24px;
        }
      }
    }
    .bjsbz_container{
      width: 100%;
      height: 110px;
      display: flex;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #EAEDF7;
      margin-bottom: 16px;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      .lef_area{
        width: 334px;
        height: 100%;
        border-right:1px solid #EAEDF7;
        .lef_area_top{
          width: 100%;
          height: 64px;
          display: flex;
          align-items: center;
          .actImg_container{
            width: 64px;
            height: 64px;
            .avatImg{
              width: 100%;
            }
          }
          .perinfo{
            flex: 1;
            height: 100%;
            padding: 8px 4px;
            box-sizing: border-box;
            .perinfo_t{
              width: 100%;
              font-size: 16px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #242F57;
              margin-bottom: 4px;
            }
            .perinfo_b{
              width: 100%;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #636E95;
            }
          }
        }
        .lef_area_bom{
          width: 100%;
          height: 44px;
          background: #F4F7FC;
          border-radius: 8px 0 0 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
          &:hover{
            cursor: pointer;
          }
        }
      }
      .cen_area{
        flex-grow: 1;
        height: 100%;
        .cen_areaImg{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .rig_area{
        width: 440px;
        height: 100%;
        border-left:1px solid #EAEDF7;
        padding: 28px 31px;
        padding-right: 5px;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        .yl_container,.gt_container,.gz_container,.xw_container,.sp_container,.xs_container{
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          margin-right: 20px;
          .yl_lef{
            width: 8px;
            height: 8px;
            border-radius: 2px;
            margin-right: 4px;
          }
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
                padding: 1px 4px;
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
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
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
        &:hover{
          cursor: pointer;
        }
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
          border-left: 1px solid #eaedf7;
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
              // box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8),
              // -2px -2px 7px 0px #fffefa;
              // border-radius: 8px;
              // border: 1px solid #c6cbde;
              // padding: 4px;
              // box-sizing: border-box;
              // display: flex;
              // align-items: center;
              // .input1 {
              //   font-size: 24px;
              //   font-family: PingFangSC-Semibold, PingFang SC;
              //   font-weight: 600;
              //   color: #c5cadf;
              // }
              // .inpu2 {
              //   font-size: 24px;
              //   font-family: HelveticaNeue-Bold, HelveticaNeue;
              //   font-weight: bold;
              //   color: #242f57;
              // }
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
              width: 52px;
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
              border-radius: 8px 0 0 8px;
              .cal_item_cal_item {
                border-radius: 8px 0 0 8px;
              }
            }
            .cal_item2 {
              width: 24%;
              height: 120px;
              background: #ffffff;
              border-radius: 8px;
              border: 1px solid #2373FF;
              padding: 12px;
              box-sizing: border-box;
              position: relative;
              .rt_choice {
                position: absolute;
                top: 6px;
                right: 10px;
                width: 16px;
                height: 16px;
              }
              .rt_choice2 {
                position: absolute;
                top: 6px;
                right: 10px;
                width: 16px;
                height: 16px;
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
                  margin-right: 20px;
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
                  margin-right: 32px;
                }
              }
            }
            .cal_item21{
              border: 1px solid #EAEDF7;
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
          width:auto;
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
              &.echarts1box{
                width: 197px;
                margin-right: 24px;
              }
              &.echarts2box{
                width: 160px;
                margin-right: 8px;
              }
              height: 136px;
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
                  color: #2373FF;
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
                  color: #2373FF;
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
                  .ech_Icon1,.ech_Icon2 {
                    width: 8px;
                    height: 8px;
                    background: rgba(68, 136, 255, 0.85);
                    border-radius: 50%;
                    margin-right: 5px;
                  }
                  .ech_Icon1 {
                    background: rgba(164, 157, 250, 0.85);
                  }
                  .ech_Icon2 {
                    background: #FC809F;
                  }
                  .ech_time,
                  .ech_txt {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242f57;
                   
                  }
                  .ech_txt {
                     width:70px;
                    // margin-right: 40px;
                  }
                }
              }
            }
            .ec1 {
              width:201px;
              background: #ffffff;
              padding:6px 12px;
            }
          }
        }
        .cdyhmj_content_bom_rig {
          flex:1;
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
            overflow: hidden;
            border-radius: 8px;
            .yhtIcon {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
    .da_container {
      width: 100%;
      min-height: 244px;
      background: #ffffff;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      margin-top: 24px;
      padding: 24px;
      box-sizing: border-box;
      margin-bottom: 24px;
  }
  .mubiao_container {
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
     margin-bottom: 24px;
    .mub_titl_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      .mub_titl_container1 {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
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
        width: 42%;
        height: 124px;
        background: #DFEDFE;
        border-radius: 8px;
        border: 1px solid #FFFFFF;
        padding: 0 29px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .mb_echarts1_lef{
          .mb_echarts1_lef_top{
            margin-bottom: 6px;
            .span1{
              line-height: 30px;
              font-size: 32px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #2373FF;
            }
          }
          .mb_echarts1_lef_bom{
            padding: 4px 0;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #4D94FF;
            background: rgba(77, 148, 255, .2);
            border-radius: 4px;
            text-align: center;
            width: 100px;
          }
        }
        .mb_echarts2_empty_box1 {
          width: 147px;
          height: 38px;
          background: rgba(255, 136, 0, .2);
          border-radius: 3px;
        }
        .mb_echarts2_empty_box2 {
          width: 112px;
          height: 32px;
          background: rgba(255, 136, 0, .2);
          border-radius: 3px;
        }
        .mb_echarts1_rig{
          width: 160px;
          height: 90px;
          border-left: 1px solid rgba(131, 181, 255, .2);

          .tu20{
            margin-left: 71px;
            display: block;
            width: 90px;
            height: 90px;
          }
        }
      }
      .vscls {
        width: 80px;
        height: 80px;
        background: #F1F6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        border-radius: 50%;
        font-size: 24px;
        font-family: Archivo-Bold, Archivo;
        font-weight: bold;
        color: #636E95;
        line-height: 32px;
        text-shadow: 1px 1px 1px #242F57;
        -webkit-text-fill-color: transparent;
      }
      .mb_echarts2 {
        background: rgba(255, 136, 0, 0.1);
        border-radius: 8px;
        border: 1px solid #FFFFFF;
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
    padding-top: 24px;
    // box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    // border-radius: 12px;
    border-bottom: 1px solid #EAEDF7;
    //padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .jichuhuax_area_til {
      width: 100%;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
    }
    .jichuhuax_echarts_container {
      width: 100%;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .jichuhuax_echarts_item {
        position: relative;
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
            .range_data{
              width: 340px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .range_data_left{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #7C88B1;
                span{
                  font-size: 30px;
                  font-family: HelveticaNeue-Medium, HelveticaNeue;
                  font-weight: 500;
                  color: #242F57;
                }
              }
              .range_data_right{
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242F57;
              }
            }
            .range_data1{
              width: 340px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .range_data_left{
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #7C88B1;
                  display: flex;
                  align-items: center;
                  .range_data_box1{
                    display: flex;
                    align-items: center;
                    margin-right: 13px;
                    .pic{
                      width: 14px;
                    }
                    span{
                      color:#FB343E
                    }
                  }
                // span{
                //   font-size: 30px;
                //   font-family: HelveticaNeue-Medium, HelveticaNeue;
                //   font-weight: 500;
                //   color: #242F57;
                // }
              }
              .range_data_right{
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242F57;
              }
            }
          }
          .jichuhuax_echarts_item_title_rig {
            position: absolute;
            width: 16px;
            height: 16px;
            right:16px;
            top:16px;
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
    // box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    // border-radius: 12px;
    border-bottom: 1px solid #EAEDF7;
    // padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    .xwfx_area_til {
      display: flex;
      align-items: center;
      width: 100%;
      height: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
      ::v-deep .ivu-poptip{
        height: 24px;
      }
      .gif{
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
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
      // box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    // border-radius: 12px;
    border-bottom: 1px solid #EAEDF7;
    // padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    .xzfx_area_title {
      display: flex;
      align-items: center;
      height: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
      ::v-deep .ivu-poptip{
        height: 24px;
      }
      .gif{
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
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
    background: #FFFFFF;
    // box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    // border-radius: 12px;
    //border: 1px solid #EAEDF7;
    padding-top: 24px;
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
      height: 500px;
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
img{
  width: 100%;
  display: block;
}
</style>