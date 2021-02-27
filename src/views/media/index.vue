<template>
  <DefaultPage title="媒介画像">
    <div class="media-protrait">
      <!-- <div class="m-p-panel">
        <div class="panel1">
          <div class="title">
            <div class="left">
              <div class="top">综合评价指数</div>
              <div class="bm">截至2020/12/14</div>
            </div>
            <div class="rt">72</div>
          </div>
          <div class="nav1">
            <div class="left">
              <div class="top">77</div>
              <div class="bm">近6月最高分</div>
            </div>
            <div class="rt"><img src="../../assets/img/media/line1.png" alt=""></div>
          </div>
          <div class="nav2">
            <div class="left">
              <div class="top">69</div>
              <div class="bm">近6月最低分</div>
            </div>
            <div class="rt"><img src="../../assets/img/media/line2.png" alt=""></div>
          </div>
        </div>
        <div class="panel2">
          <div class="text1">
            <div class="circle1">
              <div class="circle"></div>
             </div>
            <div class="text">推荐首选短视频类媒介，辅以垂直兴趣类媒介的投放组合方案；</div>
          </div>
          <div class="text1">
            <div class="circle1">
              <div class="circle"></div>
            </div>
            <div class="text">媒介资源推荐“邓荣”（顶流）和“李刚”（性价比）；</div>
          </div>
          <div class="text1">
            <div class="circle1">
              <div class="circle"></div>
            </div>
            <div class="text">预期媒介投放效果：150万的7日曝光，5%的转化率</div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="panel3">
          <Icon type="ios-alert-outline" color="#7C88B1"/>
          <div class="left">
            <div class="title">当前媒介：快手</div>
            <div class="hr1"></div>
            <div class="detail-info">
                  <div class="detail-info-item">
                      <div class="detail-info-left">
                         <p>信息量<i class="iconfont2 iconjieshou"></i></p>
                      </div>
                      <div class="detail-info-rt">
                         <p>专业度<i class="iconfont2 iconguanyu1"></i></p>
                      </div>
                  </div>
                  <div class="detail-info-item">
                      <div class="detail-info-left">
                         <p>友好度<i class="iconfont2 iconguanyu1"></i></p>
                      </div>
                      <div class="detail-info-rt">
                         <p>公信力<i class="iconfont2 iconjieshou"></i></p>
                      </div>
                  </div>
                  <div class="detail-info-item">
                      <div class="detail-info-left">
                        <p>转化度<i class="iconfont2 iconguanyu1"></i></p>
                      </div>
                      <div class="detail-info-rt">
                        <p>ROI<i class="iconfont2 iconjieshou"></i></p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="rt"><LeidaEcharts :colorList="$fjData.colorList" :myData="$fjData.box30Data" titleText="92"></LeidaEcharts></div>
        </div>
      </div> -->
      <!-- <div class="m-p-panel1">
        <Row :gutter="24">
                <Col span="8">
                  <div class="box1">
                    <div class="m-p-panel1-title">
                      <div class="left">
                        <div class="title-icon"><img src="../../assets/img/yhhx/serIcon2.png"/></div>
                        <span>媒介类型契合</span>
                      </div>
                      <div class="rt">短视频</div>
                    </div>
                    <div class="content">
                     基于品牌画像和用户画像，建议以短视频作为主要信息传播媒介（抖音：效果最优，快手：成本相对较低），垂直媒介为辅（小红书在15-25岁女性人群中的传播效果优于短视频）
                    </div>
                  </div>
                </Col>
                <Col span="8">
                  <div class="box2">
                    <div class="m-p-panel1-title">
                      <div class="left">
                        <div class="title-icon"><img src="../../assets/img/yhhx/serIcon2.png"/></div>
                        <span>最优推广时间</span>
                      </div>
                      <div class="rt">18:40-22:00</div>
                    </div>
                    <div class="content">
                     抖音用户，以26-45岁的女性自由职业者居多，整体收入水平偏中上等，约有1/3来自于三口之家，使用时间多分布于中午和晚间
                    </div>
                  </div>
                </Col>
                <Col span="8">
                  <div class="box3">
                    <div class="m-p-panel1-title">
                      <div class="left">
                        <div class="title-icon"><img src="../../assets/img/yhhx/serIcon2.png"/></div>
                        <span>媒介KOL资源</span>
                      </div>
                      <div class="rt"></div>
                    </div>
                    <div class="content">
                     抖音媒介资源是品牌投放的最优选择，KOL资源中“邓荣”投放效果最优，“李刚”性价比最高
                    </div>
                  </div>
                </Col>
            </Row>
      </div> -->

      <div class="media_first_panel">
        <div class="media_first_panel_item1">
          <div class="logo_til_container">
            <div class="logo_container">
              <img :src="leflogoIcon" alt="" srcset="" class="logo_icon">
            </div>
            <div class="til_con">品牌媒介现状及趋势</div>
          </div>
          <div class="labl_txt_container">
            <div class="labl_cir"></div>
            <div class="labl_txt">上一季度合作媒介TOP3为腾讯、头条、抖音；</div>
          </div>
          <div class="labl_txt_container">
            <div class="labl_cir"></div>
            <div class="labl_txt">合作KOL的TOP3为雪梨、王瑶、titi；</div>
          </div>
          <div class="labl_txt_container">
            <div class="labl_cir"></div>
            <div class="labl_txt" style="width:330px;">短视频类媒介呈现上升趋势，品牌合作意愿强；新闻门户类热度下降，投放回报率降低；头部KOL投放成本高居不下，销售转化与上一季度持平</div>
          </div>
        </div>
        <div class="media_first_panel_item2">
          <div class="logo_til_container">
            <div class="logo_container">
              <img :src="riglogoIcon" alt="" srcset="" class="logo_icon">
            </div>
            <div class="til_con">优化建议</div>
          </div>
          <div class="labl_txt_container">
            <div class="labl_cir"></div>
            <div class="labl_txt">增加媒介类型选择，加入新渠道（如垂直兴趣社区APP）合作计划；</div>
          </div>
          <div class="labl_txt_container">
            <div class="labl_cir"></div>
            <div class="labl_txt" style="width:357px;">减少头部KOL投放预算15%，以增加腰部KOL的合作（品牌匹配度TOP3+用户匹配度TOP3），预期ROI增加8.5%；</div>
          </div>
          <div class="labl_txt_container">
            <div class="labl_cir"></div>
            <div class="labl_txt" style="width:357px;">增加“健康饮品”话题的知识分享内容投放，向职场白领细分客群重点曝光；</div>
          </div>
        </div>
      </div>

      <div class="media_sec_panel">
        <div class="media_sec_panel_lef">
          <div class="media_sec_panel_lef1">
            <div class="media_sec_panel_lef1_top">合作媒介</div>
            <div class="icon_container">
              <div class="tenx" @click="meijieFn(1)">
                <img :src="tenxIcon" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="tout" @click="meijieFn(2)">
                <img :src="ttIcon" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="douy" @click="meijieFn(3)">
                <img :src="dyIcon" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="ke36" @click="meijieFn(4)">
                <img :src="ke36Icon" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="weib" @click="meijieFn(5)">
                <img :src="wbIcon" alt="" srcset="" class="tenxIcon">
              </div>
              <i class="iconfont2 iconxiangqian"></i>
            </div>  
            <div class="media_sec_panel_lef1_bom">
              <div class="sec_pan_con1">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>综合曝光度</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{meijieObj.meijie1.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie1.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie1.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con2">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>综合互动量/互动率</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{meijieObj.meijie2.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie2.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie2.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con3">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>销售转化率/转化量</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{meijieObj.meijie3.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie3.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie3.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con4">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>新增留存用户数</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{meijieObj.meijie4.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie4.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie4.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con5">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>媒介正负情感分布比</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{meijieObj.meijie5.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie5.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{meijieObj.meijie5.numTxt3}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="media_sec_panel_lef2">
            <div class="media_sec_panel_lef1_top">合作KOL</div>  
            <div class="icon_container">
              <div class="tenx" @click="kolFn(1)">
                <img :src="touxIcon1" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="tout" @click="kolFn(2)">
                <img :src="touxIcon2" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="douy" @click="kolFn(3)">
                <img :src="touxIcon3" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="ke36" @click="kolFn(4)">
                <img :src="touxIcon4" alt="" srcset="" class="tenxIcon">
              </div>
              <div class="weib" @click="kolFn(5)">
                <img :src="touxIcon5" alt="" srcset="" class="tenxIcon">
              </div>
              <i class="iconfont2 iconxiangqian"></i>
            </div>  
            <div class="media_sec_panel_lef1_bom">
              <div class="sec_pan_con1">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>综合曝光度</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{kolObj.meijie1.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie1.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie1.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con2">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>综合互动量/互动率</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{kolObj.meijie2.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie2.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie2.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con3">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>销售转化率/转化量</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{kolObj.meijie3.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie3.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie3.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con4">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>新增留存用户数</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{kolObj.meijie4.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie4.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie4.numTxt3}}</div>
                  </div>
                </div>
              </div>
              <div class="sec_pan_con5">
                <div class="sec_pan_con1_lef">
                  <div class="sec_pan_con1_lef_til"><span class="circie"></span><span>媒介正负情感分布比</span></div>
                  <div class="sec_pan_con1_lef_numtxt">{{kolObj.meijie5.numTxt1}}</div>
                </div>
                <div class="sec_pan_con1_rig">
                  <div class="sec_pan_con1_rig_lef">
                    <div class="sec_pan_con1_rig_lef_top">环比</div>
                    <div class="sec_pan_con1_rig_lef_bom"><img :src="domnIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie5.numTxt2}}</div>
                  </div>
                  <div class="sec_pan_con1_rig_rig">
                    <div class="sec_pan_con1_rig_lef_top">同比</div>
                    <div class="sec_pan_con1_rig_lef_bom" style="color:#34C724;"><img :src="upIconArr" alt="" srcset="" class="domnIconArr">{{kolObj.meijie5.numTxt3}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="media_sec_panel_rig">
          <div class="media_til">媒介价值评估</div>
          <div class="media_cont">
            <div class="media_cont1">
              <div class="media_cont_til">综合曝光度</div>
              <div class="media_cont_num_container"><span class="spanNum">1500</span>w</div>
              <div class="media_cont_three_container">环比<img :src="upIcon" alt="" class="upIcon"><span style="margin-right:15px;">9.07%</span>同比<img :src="upIcon" alt="" class="upIcon">9.07%</div>
            </div>
            <div class="media_cont2">
              <div class="media_cont_til">综合互动量/互动率：</div>
              <div class="media_cont_num_container"><span class="spanNum">150</span>w<span class="spanNum">/10</span>%</div>
              <div class="media_cont_three_container">环比<img :src="downIcon" alt="" class="upIcon"><span style="margin-right:15px;">9.07%</span>同比<img :src="upIcon" alt="" class="upIcon">9.07%</div>
            </div>
            <div class="media_cont3">
              <div class="media_cont_til">综合互动量/互动率：</div>
              <div class="media_cont_num_container"><span class="spanNum">150</span>w<span class="spanNum">/10</span>%</div>
              <div class="media_cont_three_container">环比<img :src="downIcon" alt="" class="upIcon"><span style="margin-right:15px;">9.07%</span>同比<img :src="upIcon" alt="" class="upIcon">9.07%</div>
            </div>
            <div class="media_cont4">
              <div class="media_cont_til">综合互动量/互动率：</div>
              <div class="media_cont_num_container"><span class="spanNum">150</span>w<span class="spanNum">/10</span>%</div>
              <div class="media_cont_three_container">环比<img :src="downIcon" alt="" class="upIcon"><span style="margin-right:15px;">9.07%</span>同比<img :src="upIcon" alt="" class="upIcon">9.07%</div>
            </div>
            <div class="media_cont5">
              <div class="media_cont_til">综合互动量/互动率：</div>
              <div class="media_cont_num_container"><span class="spanNum">150</span>w<span class="spanNum">/10</span>%</div>
              <div class="media_cont_three_container">环比<img :src="downIcon" alt="" class="upIcon"><span style="margin-right:15px;">9.07%</span>同比<img :src="upIcon" alt="" class="upIcon">9.07%</div>
            </div>
            <div class="media_cont6">
              <div class="media_cont_til">综合互动量/互动率：</div>
              <div class="media_cont_num_container"><span class="spanNum">150</span>w<span class="spanNum">/10</span>%</div>
              <div class="media_cont_three_container">环比<img :src="downIcon" alt="" class="upIcon"><span style="margin-right:15px;">9.07%</span>同比<img :src="upIcon" alt="" class="upIcon">9.07%</div>
            </div>
          </div>
        </div>
      </div>

      <div class="media_three_panel">
        <div class="media_three_item">
          <div class="media_three_item_top">
            <div class="media_three_item_til">竞品媒介洞察：王老吉</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree1" :myData="$zjjData.TreeMapData1"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom">
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">策略: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">主要使用电视渠道投放，投放内容 单一，重复性高；</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">优势: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">容易形成品牌记忆</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">威胁: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">受众心智中凉茶行业的第一提及品 牌；</span></div>
          </div>
        </div>
        <div class="media_three_item">
          <div class="media_three_item_top">
            <div class="media_three_item_til">竞品媒介洞察：和其正</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree2" :myData="$zjjData.TreeMapData2"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom media_three_item_bom2">
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">策略: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">侧重体育类媒介，布局各类媒介渠道的体育类KOL和内容；</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">优势: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">形成体育兴趣受众的强用户粘性（凉茶消费者类型TOP3之一)；</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">威胁: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">体育兴趣受众难以转化；</span></div>
          </div>
        </div>
        <div class="media_three_item">
          <div class="media_three_item_top">
            <div class="media_three_item_til">竞品媒介洞察：白云山</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree3" :myData="$zjjData.TreeMapData3"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom">
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">策略: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">侧重与年轻消费人群关注的KOL，不计投放成本；</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">优势: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">打造品牌年轻化，消费者复购频率高；</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">威胁: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">媒介组合优势明显，难以形成差异化竞争；</span></div>
          </div>
        </div>
        <div class="media_three_item media_three_item2">
          <div class="media_three_item_top">
            <div class="media_three_item_til">竞品媒介洞察：同仁堂</div>
            <div class="media_three_item_echarts">
              <vTree id="vTree4" :myData="$zjjData.TreeMapData4"></vTree>
            </div>
          </div>
          <div class="media_three_item_bom media_three_item_bom2">
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">策略: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">主要与养生专家类KOL合作， 以健康讲堂形式的内容进行投放；</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">优势: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">医学健康专家的合作，提升品牌信服力；</span></div>
            <div class="media_three_con"><span style="color:#242F57;font-size: 13px;margin-right:4px;width:43px;">威胁: </span><span style="display: inline-block;width:209.2px;font-size: 12px;">在老年群体中形成护城河，品牌竞争优势巨大；</span></div>
          </div>
        </div>
      </div>

      <div class="media_four_panel">
        <div class="media_four_panel_lef">
          <div class="media_four_panel_title">新增用户</div>
          <div class="media_four_panel_select">
            <Select v-model="modelUserL" style="width: 120px" placeholder="过去一个月" @on-change="mediaFourChange">
              <Option value="过去一个月" :key="1">过去一个月</Option>
              <Option value="过去一个季度" :key="2">过去一个季度</Option>
            </Select>
          </div>
          <div v-show="modelUserL=='过去一个月'">
            <div class="media_four_panel_lef_day">
              <div class="today">2020.02.26</div>
              <ul>
                <li>
                  <div class="today-num">390<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend1"></i>
                    <span>微信</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">1,290<span class="text">人</span>
                  </div>
                  <div class="target-name">
                    <i class="legend2"></i>
                    <span>微博</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">190<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend3"></i>
                    <span>百度</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">290<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend4"></i>
                    <span>今日头条</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">390<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend5"></i>
                    <span>地推</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="modelUserL=='过去一个季度'">
            <div class="media_four_panel_lef_day">
              <div class="today">2月下半月</div>
              <ul>
                <li>
                  <div class="today-num">5,923<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend1"></i>
                    <span>微信</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">20,201<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend2"></i>
                    <span>微博</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">2,832<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend3"></i>
                    <span>百度</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">4,350<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend4"></i>
                    <span>今日头条</span>
                  </div>
                </li>
                <li>
                  <div class="today-num">5,673<span class="text">人</span></div>
                  <div class="target-name">
                    <i class="legend5"></i>
                    <span>地推</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="media_four_panel_echarts">
            <barM id="box46" :colorList="$lxjData.colorList" :myData="userData"></barM>
          </div>
        </div>
        <div class="media_four_panel_rig">
          <div class="media_four_panel_title">平均使用时长</div>
          <div class="media_four_panel_select">
            <Select v-model="modelUserR" style="width: 120px" placeholder="过去一个月" @on-change="mediaFourChangeR">
              <Option value="过去一个月" :key="1">过去一个月</Option>
              <Option value="过去一个季度" :key="2">过去一个季度</Option>
            </Select>
          </div>
          <div v-if="modelUserR=='过去一个月'" class="media_four_panel_lef_day">
            <div class="today">2020.02.26</div>
            <ul>
              <li>
                <div class="today-num">314</div>
                <div class="target-name">
                  <i class="legend1"></i>
                  <span>线下门店</span>
                </div>
              </li>
              <li>
                <div class="today-num">570</div>
                <div class="target-name">
                  <i class="legend2"></i>
                  <span>朋友广告圈</span>
                </div>
              </li>
              <li>
                <div class="today-num">232</div>
                <div class="target-name">
                  <i class="legend3"></i>
                  <span>360搜索</span>
                </div>
              </li>
              <li>
                <div class="today-num">384</div>
                <div class="target-name">
                  <i class="legend4"></i>
                  <span>百度</span>
                </div>
              </li>
              <li>
                <div class="today-num">478</div>
                <div class="target-name">
                  <i class="legend5"></i>
                  <span>分享裂变</span>
                </div>
              </li>
              <li>
                <div class="today-num">579</div>
                <div class="target-name">
                  <i class="legend6"></i>
                  <span>抖音</span>
                </div>
              </li>
            </ul>
          </div>
          <div v-else class="media_four_panel_lef_day">
            <div class="today">2月下半月</div>
            <ul>
              <li>
                <div class="today-num">308</div>
                <div class="target-name">
                  <i class="legend1"></i>
                  <span>线下门店</span>
                </div>
              </li>
              <li>
                <div class="today-num">571</div>
                <div class="target-name">
                  <i class="legend2"></i>
                  <span>朋友广告圈</span>
                </div>
              </li>
              <li>
                <div class="today-num">212</div>
                <div class="target-name">
                  <i class="legend3"></i>
                  <span>360搜索</span>
                </div>
              </li>
              <li>
                <div class="today-num">395</div>
                <div class="target-name">
                  <i class="legend4"></i>
                  <span>百度</span>
                </div>
              </li>
              <li>
                <div class="today-num">475</div>
                <div class="target-name">
                  <i class="legend5"></i>
                  <span>分享裂变</span>
                </div>
              </li>
              <li>
                <div class="today-num">555</div>
                <div class="target-name">
                  <i class="legend6"></i>
                  <span>抖音</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="media_four_panel_echarts">
            <lineM id="box67" :colorList="$lxjData.colorList" :myData="averageData"></lineM>
          </div>
        </div>
      </div>

      <div class="media_five_panel">
        <div class="media_five_tab_top">
          <div class="media_five_tab_item" ref="mediaFiveTabItem" v-for="(item,index) in tabListArr" :key="index" @click="changeTabCon(index)">{{item}}</div>
        </div>
        <div class="media_five_tab_bom">
          <div class="media_five_tab_bom1" v-if="ifShowTabCon == 0">
              <span style="color:#242F57;">媒介选择：</span>微博，电商APP直播；<br>
              <span style="color:#242F57;">KOL组合：</span>头部KOL组合（李子柒，西木西木，辣目洋子）；<br>
              <span style="color:#242F57;">投放预算：</span>204万元（88万，58万，58万）；<br>
              <span style="color:#242F57;">最优曝光时间：</span>未来7日，每日12-13点/18-23点；<br>
              <span style="color:#242F57;">目标受众：</span>KOL自有粉丝，品牌核心目标消费人群（北京上班族/年轻白领），品牌忠诚消费者；<br>
              <span style="color:#242F57;">投放内容和形式：</span>品牌官方产品发布，营销季活动详情，节日礼品上新；微博博文，直播；<br>
              <span style="color:#242F57;">预期投放效果：</span>目标覆盖800万用户，预期获得18%的曝光，12%的互动和3%销售转化；
          </div>
          <div class="media_five_tab_bom1" v-else-if="ifShowTabCon == 1">
              <span style="color:#242F57;">媒介选择：</span>短视频平台（抖音，快手），垂直兴趣APP（小红书，KEEP，大众点评）；<br>
              <span style="color:#242F57;">KOL组合：</span>腰部KOL组合（李芮，Angel真真，胖猫小森）；<br>
              <span style="color:#242F57;">投放预算：</span>84万元（38万，28万，18万）；<br>
              <span style="color:#242F57;">最优曝光时间：</span>未来14日，每日7-9点/11-13点/19-23点；<br>
              <span style="color:#242F57;">目标受众：</span>KOL自有粉丝，品牌核心目标消费人群（北京上班族/年轻白领），品牌忠诚消费者；<br>
              <span style="color:#242F57;">投放内容和形式：</span>品牌产品种草视频，品牌产品介绍/体验笔记；<br>
              <span style="color:#242F57;">预期投放效果：</span>目标覆盖300万用户，预期获得15%的曝光，9%的互动和6%销售转化；
          </div>
          <div class="media_five_tab_bom1" v-else>
              <span style="color:#242F57;">媒介选择：</span>娱乐频道，新闻门户，微博热点话题；<br>
              <span style="color:#242F57;">KOL组合：</span>头部KOL组合（邓荣，王瑶，吴轩豪）；<br>
              <span style="color:#242F57;">投放预算：</span>134万元（58万，38万，38万）；<br>
              <span style="color:#242F57;">最优曝光时间：</span>未来29日，每日6-8点/12-13点/17-20点；<br>
              <span style="color:#242F57;">目标受众：</span>KOL自有粉丝，品牌核心目标消费人群（北京上班族/年轻白领），品牌忠诚消费者；<br>
              <span style="color:#242F57;">投放内容和形式：</span>行业趋势（品牌/产品露出），生活指南，好物推荐；<br>
              <span style="color:#242F57;">预期投放效果：</span>目标覆盖1000万用户，预期获得11%的曝光，8%的互动和2%销售转化；
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
            <barL id="box27" :colorList="$lxjData.colorList" :myData="myEData"></barL>
        </div>
      </div>
      <div class="m-p-filter">
          <div class="m-f-line">
              <div class="label">主投平台</div>
              <div class="f-list">
                <div class="f-item" @click="list1Act=index" :class="{'active':index==list1Act}" v-for="(item,index) in list1" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label">领域</div>
              <div class="f-list">
                <div class="f-item" @click="list2Act=index" :class="{'active':index==list2Act}" v-for="(item,index) in list2" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label"><span style="color:#FB343E">*</span>
              价格类型</div>
              <div class="f-list">
                <div class="f-item" @click="list3Act=index" :class="{'active':index==list3Act}" v-for="(item,index) in list3" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-p-pie">
              <div class="m-pie-title">
				  媒介用户画像 
			  <Poptip popper-class="saas-poptip small" placement="right-start">
			    <i class="iconfont2 iconguanyu tip-icon"></i>
			    <div slot="content">
			      <p>展示各个媒介的用户属性特征，深度洞察媒介使用者的人群画像，以及比较不同媒介的偏好人群的差异</p>
			    </div>
			  </Poptip>  
<!-- 			  <span @mouseenter="showTip"  @mouseleave="NshowTip" class="m-p-toolTip"><Icon type="ios-alert-outline" color="#7C88B1"/>
                <div class="m-pie-tip" v-show="isShowTip">
                  展示各个媒介的用户属性特征，深度洞察媒介使用者的人群画像，以及比较不同媒介的偏好人群的差异
                </div>
              </span> -->
			  </div>
              <div class="subTitle">抖音用户，以26-45岁的女性自由职业者居多，整体收入水平偏中上等，约有1/3来自于三口之家，使用时间多分布于中午和晚间。</div>
              <div class="m-pie-echarts">
                  <Triple :title1="'性别分布'" :title2="'年龄分布'" :title3="'职业分布'">
                        <PieCaseEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieCaseEcharts>
                        <PieCaseEcharts slot="mid" :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieCaseEcharts>
                        <PieCaseEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box3Data" roseType="radius"></PieCaseEcharts>
                  </Triple>
                  <Triple :title1="'收入分布'" :title2="'家庭情况'" :title3="'网龄结构'">
                        <PieCaseEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieCaseEcharts>
                        <PieCaseEcharts slot="mid" :colorList="$fjData.colorList" :myData="$fjData.box11Data"></PieCaseEcharts>
                        <PieCaseEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box12Data"></PieCaseEcharts>
                  </Triple>
              </div>
          </div>
      </div>
      <div class="m-p-zuhe">
              <div class="m-pie-title">媒介组合方案</div>
              <div class="subTitle">基于品牌画像和用户画像，建议以短视频作为主要信息传播媒介（其中抖音整体传播效果最优，快手成本投入相对较低），垂直媒介为辅（小红书在15-25岁女性人群中的传播效果优于短视频）的媒介组合，并辅以多KOL多内容类型的投放策略，预算建议5-10万之间，预计能获得150万的曝光量（是上一次投放效果的3倍）。</div>
              <div class="m-p-third-module">
                  <div class="m-p-t-left">
                      <Full :title="'媒介领域热度排名'">
                        <barL id="box28" :colorList="$lxjData.colorList" :myData="$lxjData.box28Data"></barL>
                      </Full>
                  </div>
                  <div class="m-p-t-right">
                      <div class="m-p-right-top">
                          <div class="m-p-right-push">
                              <div class="m-p-r-title">
                                触达方案推荐
								<Poptip popper-class="saas-poptip small" placement="right-start">
								  <i class="iconfont2 iconguanyu tip-icon"></i>
								  <div slot="content">
								    <p>展示各个媒介传播效果的评估和预测，结合品牌投放目标，对投放效果做预测，给出媒介综合使用方案建议</p>
								  </div>
								</Poptip>
<!--                                <span @mouseenter="showTip2" class="m-p-toolTip" @mouseleave="NshowTip2"><Icon type="ios-alert-outline" color="#7C88B1"/>
                                  <div class="m-pie-tip" v-show="isShowTip2">
                                    展示各个媒介传播效果的评估和预测，结合品牌投放目标，对投放效果做预测，给出媒介综合使用方案建议
                                  </div>
                                </span> -->
                              </div>
                              <div>
                                  <p>方案一</p>
                                  <img src="../../assets/img/mark/douyin.png" alt="">+
                                  <img src="../../assets/img/mark/xiaohongshu.png" alt="">+
                                  <img src="../../assets/img/mark/kuaishou.png" alt="">
                              </div>
                              <div>
                                  <p>方案二</p>
                                  <img src="../../assets/img/mark/douyin.png" alt="">+
                                  <img src="../../assets/img/mark/weibo.png" alt="">
                              </div>
                          </div>
                          <div class="m-p-right-media">
                              <div class="m-p-r-title">组合媒介曝光量预期 </div>
                              <div class="m-p-r-num">324,343</div>
                              <div class="m-p-r-echarts">
                                <funnel id="box111" :colorList="$lxjData.colorList" :myData="$lxjData.box111Data"></funnel>
                              </div>
                          </div>
                      </div>
                      <div class="m-p-right-bottom">
                          <p>相关指标预期</p>
                          <div>
                              <div style="margin-right:16px"><Card :title="'综合预期CPE'" :colourfol="'blue'" :number="'0.35'"></Card></div>
                              <div><Card :title="'组合互动总数'" :colourfol="'purple'" :number="'427,260'"></Card></div>  
                          </div>
                          <div>
                            <div style="margin-right:16px"><Card :title="'组合粉丝数'" :colourfol="'pink'" :number="'6,968,580'"></Card></div>    
                              <div><Card :title="'组合预算（元）'" :colourfol="'orange'" :number="'29,986'"></Card></div> 
                          </div>
                      </div>
                  </div>
              </div>
              <div class="m-p-last">
                  <Half :lTitle="'媒介曝光触达'" :rTitle="'媒介传播效率'">
                    <div class="m-p-last-touch" slot="left">
                      <PieEcharts2 :colorList="$fjData.colorList" :myData="$fjData.box0Data"></PieEcharts2>
                    </div>
                    <barL slot="right" id="box29" :colorList="$lxjData.colorList" :myData="$lxjData.box29Data"></barL>
                  </Half>
              </div>
      </div>
      <div class="m-p-target">
          <!-- 优化指标 -->
          <div class="m-p-target-title">优化指标</div>
          <Form :model="formTop" label-position="top"  :rules="ruleValidate">
            <Row  :gutter="42">
                <Col span="8">
                  <FormItem label="项目预算（不高于)" prop="budget">
                      <Input v-model="formTop.budget"  placeholder="请输入项目预算(元)"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="优化表现指标" prop="quota">
                        <Select v-model="formTop.quota" placeholder="请选择指标">
                            <Option value="1">组合预期CPE最低</Option>
                            <Option value="2">组合互动数最高</Option>
                            <Option value="3">组合粉丝数最高</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="8"></Col>
            </Row>
           <div class="m-p-target-title">其他限定条件</div>
           <Row  :gutter="42">
                <Col span="8">
                  <FormItem label="单一 KOL 平均互动数不低于">
                      <Input v-model="formTop.kolNum"  placeholder="请输入平均互动数"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem label="单一 KOL 粉丝数不低于">
                      <Input v-model="formTop.kolFs"  placeholder="请输入粉丝数"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="包含 KOL">
                       <Input v-model="formTop.contain"  placeholder="请输入包含 KOL"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="排除 KOL">
                        <Input v-model="formTop.exclude"  placeholder="请输入排除 KOL"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                   <FormItem label="KOL 数量">
                     <Row  :gutter="16">
                       <Col span="12">
                        <Select v-model="formTop.compare" placeholder="请选择类型">
                            <Option value="1">等于</Option>
                            <Option value="2">大于等于</Option>
                            <Option value="3">小于等于</Option>
                            <Option value="4">小于</Option>
                        </Select>
                        </Col>
                        <Col span="12">
                          <Input v-model="formTop.num"  placeholder="请输入数量"></Input>
                        </Col>
                      </Row>
                  </FormItem>
                </Col>
            </Row>
          </Form>
          <div class="btnList">
            <div class="submit">生产组合</div>
            <div class="reset">重置条件</div>
          </div>
          <div class="relative-data">
            暂无相关数据
          </div>
      </div>
        <div class="m-p-kol-strategy">
            <div class="strategy-title">
                推荐KOL组合策略
            </div>
            <div class="strategy-top">
                <div class="top-left">
                    <p><span class="top-title">推荐的KOL组合</span><span class="top-blue">李子柒 + 西木西木 + 辣目洋子</span></p>
                    <p class="mt12"><span class="top-title">方案效果</span><span>预期以12600元的成本吸引潜客432341人</span></p>
                </div>
                <div class="top-right">
                    <p class="top-title">推荐缘由</p>
                    <p><span>李子柒为头部KOL，在曝光率及用户影响率上对于品牌推广能起到快速起效。但鉴于李子柒非垂直领域KOL，专业引流不足，故补充垂直类KOL西木西木和泛娱乐类KOL辣目洋子，三者配合投放可使收益达到最高</span></p>
                </div>
            </div>
            <div class="strategy-bottom">
                <div></div>
                <div>
                    <div class="bottom-title">用户量</div>
                </div>
                <div>
                    <div class="bottom-title light">曝光率</div>
                </div>
                <div>
                    <div class="bottom-title">销售分布</div>
                </div>
                <div>
                    <div class="bottom-title light">内容方向</div>
                </div>
                <div>
                    <div class="bottom-card">
                        <img src="../../assets/img/mark/head1.jpg" />
                        <div class="card-box">
                            <p>头部KOL</p>
                            <p>李子柒</p>
                        </div>
                        <div class="card-tip">
                            <Poptip popper-class="saas-poptip" placement="right-start">
                                <i class="iconfont2 iconguanyu tip-icon"></i>
                                <div slot="content">
                                    <p>快速拉新策略KOL，占整体投放预算的55%，投放时间为未来7日投放（2日达到投放预期的80%），预期获得18%的曝光，12%的互动和3%销售转化；</p>
                                    <p>头部KOL，粉丝基数大，影响力高，能够带来高互动和高转化，适合快速拉新需求的投放策略；</p>
                                    <p>与品牌所属行业关联度为中等水平，但该KOL口碑极好，具有极高的影响力和覆盖范围，能够实现快速拉新的投放效果；</p>
                                </div>
                            </Poptip>
                        </div>
                    </div>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box34Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box37Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box40Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box31Data" ></PieEcharts6>
                </div>
                <div>
                    <div class="bottom-card">
                        <img src="../../assets/img/mark/head2.jpeg" />
                        <div class="card-box">
                            <p>垂直类KOL</p>
                            <p>西木西木</p>
                        </div>
                    </div>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box35Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box38Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box41Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box32Data" ></PieEcharts6>
                </div>
                <div>
                    <div class="bottom-card">
                        <img src="../../assets/img/mark/head3.jpeg" />
                        <div class="card-box">
                            <p>泛娱乐类KOL</p>
                            <p>辣目洋子</p>
                        </div>
                    </div>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box36Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box39Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box42Data" ></PieEcharts6>
                </div>
                <div>
                    <PieEcharts6 :colorList="$fjData.colorList" :myData="$fjData.box33Data" ></PieEcharts6>
                </div>
            </div>
        </div>
        <div class="m-p-kol">
          <div class="m-p-target-title">
              KOL资源 
			  <Poptip popper-class="saas-poptip small" placement="right-start">
			    <i class="iconfont2 iconguanyu tip-icon"></i>
			    <div slot="content">
			      <p>媒介资源库，提供具体媒介资源的详细信息，包括基础数据、历史投放效果和合作方案等，以供品牌方比较分析并联系合作</p>
			    </div>
			  </Poptip>
<!--              <span @mouseenter="showTip1"  @mouseleave="NshowTip1" class="m-p-toolTip"><Icon type="ios-alert-outline" color="#7C88B1"/>
                <div class="m-pie-tip" v-show="isShowTip1">
                  媒介资源库，提供具体媒介资源的详细信息，包括基础数据、历史投放效果和合作方案等，以供品牌方比较分析并联系合作
                </div>
              </span> -->
          </div>
          <div class="subTitle">抖音媒介资源是品牌本次投放方案的最优选择，“邓荣”的投放效果表现最优。基于分析，“李刚”性价比最高，可作为比较和备选方案。</div>
          <Tabs value="name1" @on-click="getTab">
              <TabPane label="短视频" name="name1">
                <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1"  mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                       <div class="m-f-line">
                           <div class="label">类别</div>
                           <div class="f-list">
                               <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                   <p>{{item}}</p>
                               </div>
                           </div>
                       </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="社交传媒" name="name2">
                <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="大众传媒" name="name3">
               <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
               </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="体验事件" name="name4">
                <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="促销" name="name5">
              <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
              </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="在线社交媒体" name="name6">
               <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
               </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="公共关系和宣传" name="name7">
                <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="网站" name="name8">
                <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="其他" name="name9">
               <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
               </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                   <div class="m-f-line">
                       <div class="label">类别</div>
                       <div class="f-list">
                           <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                               <p>{{item}}</p>
                           </div>
                       </div>
                   </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
          </Tabs>
      </div>
    </div>
  </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";
import Triple from "./base/Triple"
import Half from "./base/Half"
import Full from "./base/Full"
import Card from "./base/Card"
import PieCaseEcharts from '../../components/echarts/common/PieCaseEcharts';
import barL from '../../components/echarts/common/barL';
import funnel from '../../components/echarts/common/funnel';
import PieEcharts6 from '../../components/echarts/common/PieEcharts6';
import PieEcharts2 from '../../components/echarts/common/PieEcharts2';
import LeidaEcharts from '../../components/echarts/common/LeidaEcharts';
import vGraph from '../../components/echarts/common/zjjGraph';
import vTree from '../../components/echarts/common/zjjTreemap';
import lineM from '../../components/echarts/common/lineM';
import barM from '../../components/echarts/common/barM';

export default {
  name: "index",
  components: { DefaultPage, Triple, Full, Card, Half, PieCaseEcharts, barL, funnel,PieEcharts6,PieEcharts2,LeidaEcharts,vGraph,vTree,lineM,barM},
  data(){
      return{
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

          list4:["综合","抖音","快手","微视","梨视频","西瓜视频"],
          list5:["全部","娱乐","才艺","萌宠","搞笑","二次元","游戏","家具","美食","旅游","企业","体育",
          "教育","科技","汽车","情感","时尚","文化","社会","实事",],
          myEData:[],
          columns1: [
                    {
                        title: '排名',
                        slot: 'paiming',
                        width: 70/144*window.rem,
                    },
                    {
                        title: '抖音号',
                        key: 'name',
                        slot: 'douhao',
                        width: 200/144*window.rem,
                    },
                    {
                        title: '带货量',
                         tooltip:true,
                        ellipsis:true,
                        key: 'huo'
                    },
                    {
                        title: '品牌曝光数',
                         tooltip:true,
                        ellipsis:true,
                        key: 'bao'
                    },
                    {
                        title: '粉丝数/真粉量',
                         tooltip:true,
                        ellipsis:true,
                        key: 'fensi'
                    },
                    {
                        title: 'KOL品牌匹配度',
                         tooltip:true,
                        ellipsis:true,
                        key: 'zan'
                    },
                    {
                        title: 'KOL用户匹配度',
                         tooltip:true,
                        ellipsis:true,
                        key: 'zuopin'
                    },
                    {
                        title: 'KOL影响力指数',
                        tooltip:true,
                        ellipsis:true,
                        key: 'yxiang',
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150/144*window.rem,
                    },
                ],
              data1: [
                  {
                      name: '邓荣',
                      huo: '418.5w',
                      bao: 15,
                      fensi:'6418.5w',
                      zan:'5.32亿',
                      zuopin:1296,
                      yxiang:1098,
                      header:require("../../assets/img/yhhx/header.png"),
                      num:"14440078798"
                  },
                  {
                      name: '李芮',
                      huo: '398.5w',
                      bao: 17,
                      fensi: '8418.5w',
                      zan:'4.18亿',
                      zuopin:1954,
                      yxiang:128,
                      header:require("../../assets/img/yhhx/header1.png"),
                      num:"18540757560"
                  },
                  {
                      name: '李刚',
                      huo: '227.5w',
                      bao: 12,
                      fensi: '4418.5w',
                      zan:'7.32亿',
                      zuopin:6954,
                      yxiang:1218,
                      header:require("../../assets/img/yhhx/header2.png"),
                      num:"18191959422"
                  },
                  {
                      name: '钱迪',
                      huo: '115.5w',
                      bao: 19,
                      fensi: '7418.5w',
                      zan:'2.22亿',
                      zuopin:1354,
                      yxiang:1286,
                      header:require("../../assets/img/yhhx/header3.png"),
                      num:"13875139883"
                  },
                  {
                      name: '李星',
                      huo: '114.5w',
                      bao: 29,
                      fensi: '3418.5w',
                      zan:'2.92亿',
                      zuopin:1394,
                      yxiang:1280,
                      header:require("../../assets/img/yhhx/header4.png"),
                      num:"15305619958"
                  },
                  {
                      name: '叶春龙',
                      huo: '110.5w',
                      bao: 99,
                      fensi: '7018.5w',
                      zan:'1.22亿',
                      zuopin:154,
                      yxiang:126,
                      header:require("../../assets/img/yhhx/header5.png"),
                      num:"14881800609"
                  },
                  {
                      name: '吕若盛',
                      huo: '109.5w',
                      bao: 299,
                      fensi: '7418.5w',
                      zan:'1.92亿',
                      zuopin:1254,
                      yxiang:1296,
                      header:require("../../assets/img/yhhx/header6.png"),
                      num:"18748796447"
                  },
                  {
                      name: '王瑶',
                      huo: '89.5w',
                      bao: 2992,
                      fensi: '7438.5w',
                      zan:'1.99亿',
                      zuopin:1252,
                      yxiang:1294,
                      header:require("../../assets/img/yhhx/header7.png"),
                      num:"18748796487"
                  },
                  {
                      name: '吴轩豪',
                      huo: '87.5w',
                      bao: 3992,
                      fensi: '1438.5w',
                      zan:'1.79亿',
                      zuopin:1752,
                      yxiang:1214,
                      header:require("../../assets/img/yhhx/header8.png"),
                      num:"15622585340"
                  },
                  {
                      name: '雷晓云',
                      huo: '57.5w',
                      bao: 3692,
                      fensi: '7428.5w',
                      zan:'1.19亿',
                      zuopin:1758,
                      yxiang:1294,
                      header:require("../../assets/img/yhhx/header9.png"),
                      num:"14628678533"
                  },
              ],
              upIcon:require("../../assets/img/yhhx/upIcon.png"),
              downIcon:require("../../assets/img/yhhx/down_arro_Icon.png"),
              tabListArr:['策略1: 快速拉新获客策略','策略2: 低成本高转化策略','策略3: 持续转化策略'],
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
                  numTxt1:'39%/ 17%',
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
                  numTxt1:'39%/ 17%',
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
                  numTxt1:'15%/211w',
                  numTxt2:'2.01%',
                  numTxt3:'1.84%',
                },
                meijie4:{
                  numTxt1:'22w',
                  numTxt2:'1.99%',
                  numTxt3:'2.39%',
                },
                meijie5:{
                  numTxt1:'40%/ 33%',
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
                  numTxt1:'21%/256w',
                  numTxt2:'1.06%',
                  numTxt3:'2.22%',
                },
                meijie4:{
                  numTxt1:'40w',
                  numTxt2:'3.38%',
                  numTxt3:'1.15%',
                },
                meijie5:{
                  numTxt1:'36%/ 21%',
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
                  numTxt1:'36%/847w',
                  numTxt2:'1.06%',
                  numTxt3:'2.22%',
                },
                meijie4:{
                  numTxt1:'33w',
                  numTxt2:'3.38%',
                  numTxt3:'1.15%',
                },
                meijie5:{
                  numTxt1:'27%/ 29%',
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
                  numTxt1:'27%/443w',
                  numTxt2:'1.06%',
                  numTxt3:'2.22%',
                },
                meijie4:{
                  numTxt1:'34w',
                  numTxt2:'3.38%',
                  numTxt3:'1.15%',
                },
                meijie5:{
                  numTxt1:'54%/ 33%',
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
                  numTxt1:'26%/435w',
                  numTxt2:'2.1%',
                  numTxt3:'1.45%',
                },
                meijie4:{
                  numTxt1:'67w',
                  numTxt2:'1.32%',
                  numTxt3:'2.23%',
                },
                meijie5:{
                  numTxt1:'47%/ 19%',
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
                  numTxt1:'26%/435w',
                  numTxt2:'2.1%',
                  numTxt3:'1.45%',
                },
                meijie4:{
                  numTxt1:'67w',
                  numTxt2:'1.32%',
                  numTxt3:'2.23%',
                },
                meijie5:{
                  numTxt1:'47%/ 19%',
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
                  numTxt1:'22%/232w',
                  numTxt2:'2.34%',
                  numTxt3:'3.54%',
                },
                meijie4:{
                  numTxt1:'37w',
                  numTxt2:'2.30%',
                  numTxt3:'2.45%',
                },
                meijie5:{
                  numTxt1:'29%/ 21%',
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
                  numTxt1:'31%/454w',
                  numTxt2:'1.06%',
                  numTxt3:'2.22%',
                },
                meijie4:{
                  numTxt1:'38w',
                  numTxt2:'3.38%',
                  numTxt3:'1.15%',
                },
                meijie5:{
                  numTxt1:'28%/ 22%',
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
                  numTxt1:'20%/558w',
                  numTxt2:'1.06%',
                  numTxt3:'2.22%',
                },
                meijie4:{
                  numTxt1:'43w',
                  numTxt2:'3.38%',
                  numTxt3:'1.15%',
                },
                meijie5:{
                  numTxt1:'28%/ 33%',
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
                  numTxt1:'22%/58w',
                  numTxt2:'1.06%',
                  numTxt3:'2.22%',
                },
                meijie4:{
                  numTxt1:'67w',
                  numTxt2:'3.38%',
                  numTxt3:'1.15%',
                },
                meijie5:{
                  numTxt1:'34%/ 20%',
                  numTxt2:'7.2%',
                  numTxt3:'3.09%',
                }
              }
      }
  },
  created(){
    this.myEData=this.$lxjData.box27Data;
    this.userData=this.$linData.box1Data;
    this.averageData=this.$linData.box3Data;
  },
  mounted(){
    this.changeTabCon(0);
  },
  methods:{
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
      console.log(name)
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
      if(index==0){
        this.myEData=this.$lxjData.box27Data;
      }else{
        this.myEData=this.$lxjData[`box27${index-1}Data`];
      }
    }
  }
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
  .media_first_panel{
    width: 100%;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 12px;
    margin-bottom: 24px;
    padding: 22px 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url('../../assets/img/yhhx/media1.png');
    background-size: 100% 100%;
    .media_first_panel_item1,.media_first_panel_item2{
      width: 48.913%;
      background: linear-gradient(225deg, #1C66DE 0%, #98A0F9 100%);
      box-shadow: 4px -4px 24px 0px rgba(41, 59, 149, 0.55);
      border-radius: 8px;
      padding: 16px;
      box-sizing: border-box;
      .logo_til_container{
        display: flex;
        align-items: center;
        margin-bottom: 18px;
        .logo_container{
          width: 24px;
          height: 24px;
          margin-right: 8px;
          .logo_icon{
            display: block;
            width: 100%;
          }
        }
        .til_con{
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #FFFFFF;
        }
      }
      .labl_txt_container{
        display: flex;
        align-items: baseline;
        margin-bottom: 9px;
        .labl_cir{
          width: 4px;
          height: 4px;
          background-color: #fff;
          border-radius: 50%;
          margin-right: 10px;
        }
        .labl_txt{
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #fff;
        }
      }
    }
    .media_first_panel_item1{
      background-image: url('../../assets/img/yhhx/media9.png');
      background-size: 100% 100%;
    }
    .media_first_panel_item2{
      background-image: url('../../assets/img/yhhx/media8.png');
      background-size: 100% 100%;
    }
  }
  .media_sec_panel{
    width: 100%;
    height: 462px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .media_sec_panel_lef{
      width: 57%;
      height: 100%;
      border-radius: 12px;
      padding: 24px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-image: url('../../assets/img/yhhx/media2.png');
      background-size: 100% 100%;
      .media_sec_panel_lef1,.media_sec_panel_lef2{
        width: 48%;
        border-radius: 8px;
        border: 1px solid #FFFFFF;
        .media_sec_panel_lef1_top{
          width: 100%;
          padding: 16px;
          box-sizing: border-box;
          margin-bottom: 11px;
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242F57;
          padding-bottom: 0;
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
          height: 274px;
          background: #F7F9FD;
          border-radius: 0px 0px 8px 8px;
          padding: 14px 13px;
          box-sizing: border-box;
          .sec_pan_con1{
            padding-bottom: 7px;
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
      width: 42%;
      height: 100%;
      border-radius: 12px;
      padding: 24px;
      box-sizing: border-box;
      background-image: url('../../assets/img/yhhx/media3.png');
      background-size: 100% 100%;
      .media_til{
        width: 100%;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        margin-bottom: 24px;
      }
      .media_cont{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .media_cont1,.media_cont2,.media_cont3,.media_cont4,.media_cont5,.media_cont6{
          width: 49%;
          background: linear-gradient(225deg, #1C66DE 0%, #98A0F9 100%);
          box-shadow: 2px 4px 10px 0px rgba(41, 59, 149, 0.3);
          border-radius: 8px;
          padding: 14px;
          box-sizing: border-box;
          margin-bottom: 16px;
          .media_cont_til{
            width: 100%;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            margin-bottom: 4px;
          }
          .media_cont_num_container{
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            margin-bottom: 4px;
            .spanNum{
              font-size: 24px;
              font-family: HelveticaNeue-Bold, HelveticaNeue;
              font-weight: bold;
              margin-right: 5px;
            }
          }
          .media_cont_three_container{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            .upIcon{
              display: inline-block;
              width: 12px;
              height: 12px;
            }
          }
        }
        .media_cont1,.media_cont6{
          background-image: url('../../assets/img/yhhx/media4.png');
          background-size: 100% 100%;
        }
        .media_cont2,.media_cont5{
          background-image: url('../../assets/img/yhhx/media5.png');
          background-size: 100% 100%;
        }
        .media_cont3{
          background-image: url('../../assets/img/yhhx/media6.png');
          background-size: 100% 100%;
        }
        .media_cont4{
          background-image: url('../../assets/img/yhhx/media7.png');
          background-size: 100% 100%;
        }
        .media_cont5,.media_cont6{
          margin-bottom: 0;
        }
      }
    }
  }
  .media_three_panel{
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    background: #FFFFFF #D8D8D8;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
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
          width: 100%;
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
        background: rgba(255, 241, 244, 0.3);
        border-radius: 0px 0px 8px 8px;
        .media_three_con{
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242F57;
          margin-bottom: 12px;
          display: flex;
          align-items: baseline;
        }
      }
      .media_three_item_bom2{
        background: rgba(219, 234, 255, 0.3);
      }
    }
  }

  .media_four_panel{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    .media_four_panel_lef,.media_four_panel_rig{
      position: relative;
      width: 50%;
      height: 507px;
      padding: 24px;
      background: #FFFFFF #6371c0;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      .media_four_panel_title{
        height: 24px;
        margin-bottom: 3px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        line-height: 24px;
      }
      .media_four_panel_select{
        position: absolute;
        top: 24px;
        right: 24px;
      }
      .media_four_panel_lef_day{
        .today{
          height: 22px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7C88B1;
          line-height: 22px;
        }
        ul{
          display: flex;
          // justify-content: space-between;
          list-style: none;
          >li{
            margin-right: 20px;
            .today-num{
              height: 38px;
              font-size: 24px;
              font-family: HelveticaNeue-Medium, HelveticaNeue;
              font-weight: 500;
              color: #242F57;
              line-height: 38px;
              .text{
                margin-left: 3px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #7C88B1;
              }
            }
            .target-name{
              display: flex;
              align-items: center;
              >i{
                width: 6px;
                height: 6px;
                margin-right: 6px;
                border-radius: 50%;
                &.legend1{
                  background: #4D94FF;
                }
                &.legend2{
                  background: #A49DFA;
                }
                &.legend3{
                  background: #FC809F;
                }
                &.legend4{
                  background: #FFD98C;
                }
                &.legend5{
                  background: #8AE6C7;
                }                
                &.legend6{
                  background: #E19564;
                }                
              }
              >span{
                height: 20px;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97A0C3;
                line-height: 20px;
              }
            }
          }
        }
      }

      .media_four_panel_echarts{
        height: calc(100% - 100px);
      }
    }
    .media_four_panel_lef{
      margin-right: 24px;
    }
  }

  .media_five_panel{
    width: 100%;
    height: 250px;
    margin-bottom: 24px;
    padding: 24px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
    .media_five_tab_top{
      width: 100%;
      display: flex;
      margin-bottom: 16px;
      .media_five_tab_item{
        margin-right: 32px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        padding-bottom: 8px;
        box-sizing: border-box;
      }
      .media_five_tab_item:hover{
        cursor: pointer;
      }
    }
    .media_five_tab_bom{
      width: 100%;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636E95;
      .media_five_tab_bom1{
        >span{
          height: 22px;
          line-height: 22px;
        }
      }
    }
  }

  .m-p-rank {
    width: 100%;
    height: 339px;
    margin-bottom: 24px;
    background:  #fff;
    // background: url("../../assets/img/media/colourfol.png") no-repeat center
    //   center / 100% 339px;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
    .m-p-rank-header {
      display: flex;
      justify-content: space-between;
      padding: 20px 24px 0;
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
            width: 76px;
            height: 32px;
            border-radius: 8px 0px 0px 8px;
            border: 1px solid #c6cbde;
            color: #636e95;
            line-height: 30px;
                      &.act{
            border: 1px solid #2373ff;
            color: #2373ff;
          }
          }
          .right {
            width: 76px;
            height: 32px;
            border-radius: 0px 8px 8px 0px;
            border: 1px solid #c6cbde;
            color: #636e95;
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
      height: 287px;
      padding: 0 24px;
    }
  }
  .m-p-filter{
    width: 100%;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
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
                        height: 200px;
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
  .m-p-kol-strategy {
        margin-bottom: 24px;
        width: 100%;
        background: #FFFFFF;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        border: 1px solid #EAEDF7;
        padding:24px;
        .strategy-title {
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
        }
        .strategy-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
            margin-top: 24px;
            width: 100%;
            height: 95px;
            background: #F7F9FD;
            border-radius: 8px;
            border: 1px solid #EAEDF7;

            >div {
                width: 45%;

                &.top-right {
                    width: 52%;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;

                    >p {
                        &:nth-child(1) {
                            width: 160px;
                            margin-right: 24px;
                        }
                    }
                }

                .mt12 {
                    margin-top: 12px;
                }

                .top-title {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                }

                span {
                    margin-right: 24px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;

                    &.top-blue {
                        color: #2373FF;
                    }
                }
            }
        }

        .strategy-bottom {
            margin-top: 24px;
            display: grid;
            grid-template-columns: 15% 19% 19% 19% 19%;
            grid-template-rows: 48px 150px 150px 150px;
            grid-row-gap: 24px;
            grid-column-gap: 24px;

            .bottom-title {
                width: 100%;
                height: 48px;
                line-height: 48px;
                background: #73A0FA;
                border-radius: 8px;
                text-align: center;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FFFFFF;

                &.light {
                    color: #242F57;
                    background: #DBE7FF;
                }
            }

            .bottom-card {
                position: relative;
                text-align: center;

                > img {
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                }

                .card-box {
                    margin-top: -30px;
                    width: 100%;
                    min-width: 140px;
                    height: 116px;
                    background: #FFFFFF;
                    box-shadow: 5px 8px 16px 0px rgba(121, 131, 168, 0.15);
                    border-radius: 8px;
                    border: 2px solid #EAEDF7;

                    >p {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;

                        &:nth-child(1) {
                            margin-top: 48px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                        }
                    }
                }

                .card-tip {
                    position: absolute;
                    right: -15px;
                    top: 30px;
                    text-align: left;
                }
            }
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
    .listBox{
      border-radius: 8px;
      border: 1px solid #EAEDF7;
      display: flex;
      margin-bottom: 1px;
      padding-bottom: 2px;

      .listBox-left{
        ::v-deep .ivu-menu{
          width:120px !important;
          height: 100%;
          padding-top: 10px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #636E95;
          .ivu-menu-item{
            text-align: right;
            padding-right: 16px;
            padding-left:0;
          }
         
        }
        ::v-deep .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
            background: #fff;
        }
      }
      .listBox-right{
        flex: 1;
        padding:24px;
        padding-top: 16px;
        .page{
          padding-top: 16px;
          .pageS{
            text-align: right;
            ::v-deep .ivu-page-options{
              float: left;
            }
          }
        }
        .paiming1{
          width: 18px;
          height: 18px;
          background: #4D94FF;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .paiming2{
          width: 18px;
          height: 18px;
          background:#A49DFA;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .paiming3{
          width: 18px;
          height: 18px;
          background: #FC809F;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .paiming4{
          width: 18px;
          height: 18px;
          background: #D9D9D9;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .personal{
          display: flex;
          align-items: center;
          .left{
            width: 32px;
          }
          .right{
            margin-left: 3px;
            .name{
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242F57;
              line-height: 22px;
            }
            .hao{
              font-size: 12px;
              font-family: HelveticaNeue;
              color: #636E95;
              line-height: 18px;
            }
          }
          .detail{
            cursor: pointer;
          }
        }
        .actionList{
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #2373FF;
          line-height: 20px;
          .detail{
            cursor: pointer;
          }
        }
        .m-f-line{
            display: flex;
            margin-bottom: 8px;
            .label{
                width: 52px;
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
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        line-height: 22px;
                    }
                }
            }
        }
      }
    }
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
    
    .f-list{
            width: 100%;
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
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;
                }
            }
        }
    // background: url("../../assets/img/media/kol@2x.png") no-repeat center center / 100% 100%;
  }
}
</style>