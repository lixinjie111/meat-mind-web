<template>
    <div class="market-box">
        <p class="tips">营销洞察助力智能获取精准目标客群，快速掌握市场趋势及竞对情报，发掘商业机会，借助热点打造爆款，提供海量营销创意、行业案例</p>
        <div class="market-target flex-start">
            <div class="target-left">
                <div class="target-left-title flex">
                    <p>推荐目标客群</p>
                    <p @click="toUser" class="check-btn">查看全部<i class="iconfont iconarrowRight"></i></p>
                </div>
                <div class="target-left-content">
                    <Select class="target-left-select" value="北京上班族">
                        <Option value="北京上班族">北京上班族</Option>
                    </Select>
                    <p class="target-left-sub-title">基本特点</p>
                    <ul class="target-left-sub-ul">
                        <li>未婚</li>
                        <li>20-29岁</li>
                        <li>本科以上</li>
                        <li>白领</li>
                        <li>15-25k</li>
                        <li>一线城市</li>
                    </ul>
                    <p class="target-left-sub-title">关注话题</p>
                    <ul class="target-left-sub-ul follow-ul">
                        <li>秋天的第一杯奶茶</li>
                        <li>燃烧我的卡路里</li>
                    </ul>
                    <p class="target-left-sub-title">心智特点</p>
                    <div class="target-left-group">
                        <div>
                            <p>品牌力偏好</p>
                            <p>强势品牌</p>
                        </div>
                        <div>
                            <p>内容偏好</p>
                            <p>促进型</p>
                        </div>
                        <div>
                            <p>消费态度</p>
                            <p>个性化/颜值…</p>
                        </div>
                        <div>
                            <p>品牌形象偏好</p>
                            <p>具象化/简洁</p>
                        </div>
                        <div>
                            <p>厌恶</p>
                            <p>性别歧视</p>
                        </div>
                        <div>
                            <p>创伤</p>
                            <p>996/晚高峰</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="target-right">
                <video class="player" width="100%" height="100%" autoplay loop muted
                       src="../../assets/video/video1.mp4"></video>
            </div>
        </div>
        <div class="card card-one">
            <div class="card-one-left">
                <div class="card-one-left-info">
                    <div class="flex">
                        <p>北漂一族</p>
                        <p>分群用户数：28790人</p>
                    </div>
                    <ul>
                        <li><span>公共交通</span></li>
                        <li><span>家</span></li>
                        <li><span>公司</span></li>
                    </ul>
                </div>
                <div class="card-one-left-img-top">
                    <img src="../../assets/img/dashboard/market/timeline1@2x.png"/>
                </div>
                <div class="card-one-left-img-bottom">
                    <img src="../../assets/img/dashboard/market/timeline2@2x.png"/>
                </div>
            </div>
            <div class="card-one-right">
                <div class="card-one-right-item">
                    <div class="item-line"></div>
                    <div class="item-box">
                        <p class="first-p"><img src="../../assets/img/dashboard/market/icon-commute@2x.png"/>休息/通勤</p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-time" size="18" color="#636E95"/>
                            7:00 - 9:00
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="ios-phone-portrait" size="18" color="#636E95"/>
                            头条/微博/小红书
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-happy" size="18" color="#636E95"/>
                            一般: 35% 紧张: 29%
                        </p>
                    </div>
                    <div class="item-box">
                        <p>用户群体处于休息及通勤状态，偏好浏览新闻资讯及社交娱乐类型的APP，处理工作相关信息，情绪分布较为平均</p>
                    </div>
                </div>
                <div class="card-one-right-item active">
                    <div class="item-line"></div>
                    <div class="item-box item-box-active">
                        <p class="first-p"><img src="../../assets/img/dashboard/market/icons-working@2x.png"/>工作/休息</p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-time" size="18" color="#2373FF"/>
                            12:00 - 13:00
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="ios-phone-portrait" size="18" color="#2373FF"/>
                            大众点评/新浪微博/抖音
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-happy" size="18" color="#2373FF"/>
                            放松: 37% 一般: 36%
                        </p>
                    </div>
                    <div class="item-box">
                        <p>用户群体主要处于午间休息状态，偏好浏览新闻资讯及社交娱乐类型的APP，情绪分布较为放松</p>
                    </div>
                </div>
                <div class="card-one-right-item">
                    <div class="item-line"></div>
                    <div class="item-box">
                        <p class="first-p"><img src="../../assets/img/dashboard/market/icon-relax@2x.png"/>休息/放松</p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-time" size="18" color="#636E95"/>
                            20:00 - 22:00
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="ios-phone-portrait" size="18" color="#636E95"/>
                            抖音/小红书/快手
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-happy" size="18" color="#636E95"/>
                            放松: 48% 一般: 26%
                        </p>
                    </div>
                    <div class="item-box">
                        <p>用户群体处于休息及休闲状态，偏好社交娱乐、电商购物类型的APP，情绪分布较为放松</p>
                    </div>
                </div>
                <div class="card-one-right-line"></div>
            </div>
        </div>
        <Card title="触达用户媒介" class="card-two">
            <div class="cdyhmj_content_container">
                <div class="cdyhmj_content_top">
                    <div class="cdyhmj_content_top_lef">
                        <div class="cdyhmj_content_item item1">自定义媒介投放预算 (元)</div>
                        <div class="cdyhmj_content_item item2">
                            <div class="input_container">
                                <!-- <span class="input1">￥</span>
                                <span class="inpu2">15,000</span> -->
                                <Input placeholder="￥ 15,000" style="width:100%;">15,000</Input>
                            </div>
                            <div class="hg_txt"></div>
                            <div class="input_container">
                                <!-- <span class="input1">￥</span>
                                <span class="inpu23"></span> -->
                                <Input placeholder="￥" style="width:100%;"></Input>
                            </div>
                        </div>
                        <div class="cdyhmj_content_item item3">目标客群</div>
                        <div class="cdyhmj_content_item item4">
                            <!-- <img :src="inputIcon" class="inputIcon" /> -->
                            <Select v-model="mbValue" style="width:100%;">
                                <Option v-for="item in mubiaoList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
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
                            <div class="cal_item2 cal_item21">
                                <div class="rt_choice">
                                    <Checkbox></Checkbox>
                                </div>
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
                                    <Checkbox v-model="choice2"></Checkbox>
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
                                    <Checkbox v-model="choice12"></Checkbox>
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
                            <div class="echarts1 echarts2box">
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
                            <div class="echarts1 echarts1box">
                                <PieEcharts1 :colorList="$fjData.colorList" :myData="$fjData.box0Data"></PieEcharts1>
                                <!-- <lineM id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM> -->
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
        </Card>
        <div class="card-three flex">
            <Card title="市场趋势" class="card-three-left">
                <div slot="right" class="card-three-select">
                    <Select value="快消品">
                        <Option value="快消品">快消品</Option>
                    </Select>
                    <Select value="5年">
                        <Option value="5年">5年</Option>
                    </Select>
                </div>
                <div class="card-three-chart">
                    <barM id="box32" :colorList="$lxjData.colorList" :myData="$lxjData.box32Data"></barM>
                </div>
            </Card>
            <Card title="对标商品行情" class="card-three-right">
                <div slot="right" class="card-three-date">
                    <DatePicker type="daterange" :value="['2020-1-1','2020-2-29']" show-week-numbers
                                placement="bottom-end" placeholder="请选择时间"></DatePicker>
                </div>
                <div class="card-three-right-content flex-start">
                    <div class="card-three-right-content-left">
                        <div :class="['card-three-right-content-left-item',threeActive == 1 ?'active':'']"
                             @click="threeActive=1">
                            <img src="../../assets/img/dashboard/market/icon-redbull@2x.png"/>
                            <p>红牛<span>·250ml</span></p>
                        </div>
                        <div :class="['card-three-right-content-left-item',threeActive == 2 ?'active':'']"
                             @click="threeActive=2">
                            <img src="../../assets/img/dashboard/market/icon-jiaduobao@2x.png"/>
                            <p>加多宝<span>·250ml</span></p>
                        </div>
                        <div :class="['card-three-right-content-left-item',threeActive == 3 ?'active':'']"
                             @click="threeActive=3">
                            <img src="../../assets/img/dashboard/market/icon-wanglaoji@2x.png"/>
                            <p>王老吉<span>·250ml</span></p>
                        </div>
                        <div :class="['card-three-right-content-left-item',threeActive == 4 ?'active':'']"
                             @click="threeActive=4">
                            <img src="../../assets/img/dashboard/market/icon-maidong@2x.png"/>
                            <p>脉动<span>·250ml</span></p>
                        </div>
                        <div class="card-three-right-content-left-btn"><Icon type="md-add" size="16"/>添加竞品</div>
                    </div>
                    <div class="card-three-right-content-right">
                        <div class="card-three-right-content-right-item">
                            <p>月均销量</p>
                            <p>4,265,322</p>
                        </div>
                        <div class="card-three-right-content-right-item">
                            <p>客单价</p>
                            <p>¥ 6.5</p>
                        </div>
                        <div class="card-three-right-content-right-item">
                            <p>销量平台TOP3</p>
                            <p>京东/淘宝/美团</p>
                        </div>
                        <div class="card-three-right-content-right-item">
                            <p>营销渠道TOP3</p>
                            <p>抖音/小红书/头条</p>
                        </div>
                        <div class="card-three-right-content-right-item">
                            <p>舆情热度</p>
                            <p>1,554,192 </p>
                        </div>
                        <div class="card-three-right-content-right-item">
                            <p>舆情风向</p>
                            <p>积极</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        <Card title="舆情热点与营销机会" class="card-four">
            <div slot="right" class="card-four-select">
                <Select value="全国">
                    <Option value="全国">全国</Option>
                </Select>
                <Select value="近3个月">
                    <Option value="近3个月">近3个月</Option>
                </Select>
                <Select value="百度">
                    <Option value="百度">百度</Option>
                </Select>
            </div>
            <div class="card-four-left">
                <div class="card-four-left-item">
                    <p>行业关键词</p>
                    <ul>
                        <li>凉茶</li>
                        <li>功能饮料</li>
                    </ul>
                </div>
                <div class="card-four-left-line"></div>
                <div class="card-four-left-item">
                    <p>关联关键词</p>
                    <ul>
                        <li>降火</li>
                        <li>养生</li>
                        <li>滋润</li>
                    </ul>
                </div>
                <div class="card-four-left-item">
                    <p>追加关联词汇</p>
                    <ul>
                        <li>礼品</li>
                    </ul>
                </div>
                <div class="card-four-left-line"></div>
                <div class="card-four-left-item">
                    <p>负向关联词</p>
                    <ul class="orange">
                        <li>上火</li>
                        <li>暴躁</li>
                        <li>虚脱</li>
                    </ul>
                </div>
            </div>
            <div class="card-four-right">
                <div class="card-four-right-box">
                    <div class="card-four-right-title">热点事件</div>
                    <div class="card-four-right-list">
                        <div class="card-four-right-item">
                            <div class="index one">1</div>
                            <div class="desc">黄晓明发文退出《浪姐2》，自曝心悸脾…</div>
                            <div class="time">2021/1/10</div>
                        </div>
                        <div class="card-four-right-item">
                            <div class="index two">2</div>
                            <div class="desc">暴躁老哥抢茅台成瘾，期待茅台价格继…</div>
                            <div class="time">2021/1/10</div>
                        </div>
                        <div class="card-four-right-item">
                            <div class="index three">3</div>
                            <div class="desc">王阳明:常快乐,便是功夫。心态好,亦是养生</div>
                            <div class="time">2021/1/9</div>
                        </div>
                        <div class="card-four-right-item">
                            <div class="index">4</div>
                            <div class="desc">互联网打工人不懂养生?这份年度白皮书…</div>
                            <div class="time">2021/1/8</div>
                        </div>
                        <div class="card-four-right-item">
                            <div class="index">5</div>
                            <div class="desc">暖心礼物!扬州一高校学生为上完最后一…</div>
                            <div class="time">2021/1/5</div>
                        </div>
                        <div class="card-four-right-item">
                            <div class="index">6</div>
                            <div class="desc">最北教师:无声滋润最北国土</div>
                            <div class="time">2021/1/2</div>
                        </div>
                        <div class="card-four-right-btn">
                            <div>查看全部<Icon type="ios-arrow-forward" color="#97A0C3" size="16" style="margin-left: 4px;"/></div>
                        </div>
                    </div>
                </div>
                <div class="card-four-right-box">
                    <div class="card-four-right-title">近期机会</div>
                    <div class="card-four-right-list">
                        <div class="card-four-right-item">
                            <div class="index one">1</div>
                            <div class="desc1">迎春大促</div>
                            <div class="time1">2021/2/1 - 2021/2/28</div>
                        </div>
                        <div class="card-four-right-item card-four-right-item-desc">
                            <div class="index"></div>
                            <div class="desc2">春节喜庆欢乐气氛大大刺激了人们消费的欲望和冲动,春节促销活动,所参与促销的商品面广，数量多，力度大，容易形成连带销售。</div>
                        </div>
                        <div class="card-four-right-item">
                            <div class="index two">2</div>
                            <div class="desc1">赏灯品诗喝茶</div>
                            <div class="time1">2021/2/20 - 2021/2/28</div>
                        </div>
                        <div class="card-four-right-item">
                            <div class="index three">3</div>
                            <div class="desc1">二月二，龙抬头</div>
                            <div class="time1">2021/3/14 - 2021/3/20</div>
                        </div>
                        <div class="card-four-right-btn">
                            <div>查看全部<Icon type="ios-arrow-forward" color="#97A0C3" size="16" style="margin-left: 4px;"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="负面舆情的处理意见" class="card-five">
            <p class="card-five-desc">当前<span>存在</span>负面舆情。该舆情起于<span>新闻</span>；传播媒介最多的是<span>微博  论坛</span>；事件负面级别为 <span>6</span> (影响一般)；根据负面舆情应对模型，推荐的应对方式是<span>逐步降低反击力度</span></p>
            <div class="card-five-box">
                <div class="box1">
                    <div class="name">信息来源占比（%）</div>
                    <div class="box1-echart">
                        <barEcharts id="box15" :colorList="$lxjData.colorList" :myData="$lxjData.box15Data"></barEcharts>
                    </div>
                </div>
                <div class="box2">
                    <div class="box2-left">
                        <div class="name">敏感占比图</div>
                        <div class="box2-echart">
                            <YibiaoCharts2 :colorList="$fjData.colorList" :myData="$fjData.box17Data"></YibiaoCharts2>
                        </div>
                    </div>
                    <div class="second-list">
                        <div class="warning">
                            <img src="../../assets/img/mark/warning@2x.png" alt="">
                            <span>敏感信息</span>
                            <span class="strong">443</span>
                        </div>
                        <ul>
                            <li>邓老凉茶在凉茶巨头夹缝中迷失 同仁堂等遭</li>
                            <li>凉茶风光不再:负面新闻频发 高糖饮品销售</li>
                            <li>凉茶怎么“凉”的:潜规则、边缘化、互撕……_西药</li>
                            <li>申请挂牌新三板 邓老凉茶年销售收入不及行业龙头2%</li>
                        </ul>
                    </div>
                </div>
                <div class="box3">
                    <div class="name">负面舆情应对说明</div>
                    <div class="desc">已错过了最佳反击时间。<br>当前负面舆情已呈现随时间下降趋势，不宜过度反击，否则将造成二次传播扩散</div>
                    <div class="box3-echart">
                        <lineM1 id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM1>
                    </div>
                </div>
                <div class="box4">
                    <div class="name">舆情处理建议</div>
                    <div class="desc">负面舆情没有新的爆点和舆论热点，当前反击力度已足够。<br>应当随负面舆情热度走势逐步降低反击力度，预计3-4周后可回归平静。</div>
                    <div class="box4-echart">
                        <Leida2Echarts :colorList="$fjData.colorList" :myData="$fjData.box19Data"></Leida2Echarts>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="行业分析报告、营销创意及案例" class="card-six">
            <div class="flex-start">
                <div class="card-six-left">
                    <img src="../../assets/img/dashboard/market/card-six-report@2x.png"/>
                    <p>行业分析报告营销创意及案例</p>
                    <div class="card-six-left-btn">查看全部案例</div>
                </div>
                <div class="card-six-right clearfix">
                    <div class="card-six-right-item fl">
                        <p>北京快销品<br>行业分析报告</p>
                        <p>年度/季度/月度报告</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="card-six-right-item fl">
                        <p>北京软饮料<br>市场规模跟踪</p>
                        <p>重点市场规模<br>数据跟踪及提取</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="card-six-right-item fl">
                        <p>店铺分析选址<br>方法论</p>
                        <p>宝贝优化<br>竞品分析<br>备货指导</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="card-six-right-item fl">
                        <p>正负面情绪提取</p>
                        <p>分析销售场<br>优化品牌定位</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="card-six-right-item fl">
                        <p>消费者关注点提取</p>
                        <p>提取关键评论属性<br>热销宝贝备货指导</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="card-six-right-item fl">
                        <p>心智剖析产品<br>SWOT</p>
                        <p>竞品优势对比<br>查漏补缺</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="card-six-right-item fl">
                        <p>合生汇商场报告</p>
                        <p>专业商场案例<br>启迪营销灵感</p>
                        <p>元知智能研究院</p>
                        <p>付费</p>
                    </div>
                    <div class="card-six-right-item fl">
                        <p>合生通商业报告</p>
                        <p>专业商场案例<br>启迪营销灵感</p>
                        <p>元知智能研究院</p>
                        <p>付费</p>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    import Card from "../../components/Card"
    import barEcharts from '../../components/echarts/common/barEcharts';
    import barM from '../../components/echarts/common/barM';
    import YibiaoCharts2 from '../../components/echarts/common/YibiaoCharts2';
    import lineM from '../../components/echarts/common/lineM';
    import lineM1 from '../../components/echarts/common/lineM1';
    import Leida2Echarts from '../../components/echarts/common/Leida2Echarts';
    import PieEcharts1 from '../../components/echarts/common/PieEcharts1';

    export default {
        name: "BusinessMarket",
        components: {Card, barEcharts, barM, YibiaoCharts2, lineM, lineM1, Leida2Echarts, PieEcharts1},
        data() {
            return {
                threeActive: 1,
                toRIcon: require("../../assets/img/yhhx/toR.png"),
                toRIcon1: require("../../assets/img/yhhx/toR1.png"),
                inputIcon: require("../../assets/img/yhhx/input.png"),
                toLIcon: require("../../assets/img/yhhx/toL.png"),
                yhtIcon: require("../../assets/img/yhhx/yht.png"),
                input1: require("../../assets/img/yhhx/input1.png"),
                ttIcon:require("../../assets/img/yhhx/tt.png"),
                xhsIcon:require("../../assets/img/yhhx/xhs.png"),
                ksIcon:require("../../assets/img/yhhx/ks.png"),
                choice2:true,
                choice12:true,
                mbValue:'bjsbz',
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
            }
        },
        methods: {
            toUser() {
                this.$router.push({name:"user"})
            }
        }
    }
</script>

<style lang="scss">
    .market-box {
        .card-three-right {
            &.card-container {
                .title {
                    padding: 0 24px;
                }
            }
        }
    }
</style>
<style scoped lang="scss">
    .market-box {
        padding: 0 24px 24px 24px;

        .tips {
            margin-top: 24px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97A0C3;
        }

        .market-target {
            margin: 24px 0;

            .target-left {
                margin-right: 16px;
                padding: 20px 16px;
                width: 320px;
                height: 442px;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                background: url("../../assets/img/dashboard/market/target-bg@2x.png") no-repeat center / 100% 100%;
                border-radius: 12px;

                .target-left-title {
                    > p {
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #7C88B1;

                        &:first-child {
                            font-size: 16px;
                            color: #242F57;
                        }

                        &.check-btn {
                            cursor: pointer;

                            > i {
                                margin-left: 2px;
                            }
                        }
                    }
                }

                .target-left-content {
                    .target-left-select {
                        margin: 20px 0 0;

                        ::v-deep .ivu-select-selection {
                            height: 48px;
                            background: rgba(255, 255, 255, .6);
                            box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8), -2px -2px 7px 0px #FFFEFA;
                            border-radius: 8px;
                            border: 1px solid #C6CBDE;

                            .ivu-select-selected-value {
                                height: 48px;
                                line-height: 48px;
                                font-size: 18px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;
                            }
                        }

                        ::v-deep .ivu-select-dropdown-list {
                            .ivu-select-item {
                                font-size: 18px!important;
                            }
                        }
                    }

                    .target-left-sub-title {
                        margin: 16px 0 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    .target-left-sub-ul {
                        display: flex;
                        flex-wrap: wrap;

                        li {
                            margin: 0 4px 8px 0;
                            min-width: 68px;
                            height: 24px;
                            line-height: 24px;
                            background: rgba(255, 255, 255, 0.3);
                            border-radius: 8px;
                            border: 1px solid #FFFFFF;
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #242F57;
                            text-align: center;
                        }

                        &.follow-ul {
                            li {
                                padding: 0 16px;
                            }
                        }
                    }

                    .target-left-group {
                        display: flex;
                        flex-wrap: wrap;

                        > div {
                            margin-bottom: 8px;
                            width: 33.3%;

                            > p {
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #97A0C3;

                                &:last-child {
                                    color: #242F57;
                                }
                            }
                        }
                    }
                }
            }

            .target-right {
                width: calc(100% - 336px);
                height: 442px;
                background: #FFFFFF;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                border-radius: 12px;

                video {
                    object-fit: fill;
                    border-radius: 8px;
                }
            }
        }

        .card-one {
            height: 480px;

            .card-one-left {
                display: inline-block;
                vertical-align: top;
                width: 320px;
                height: 480px;
                background: url("../../assets/img/dashboard/market/card-one-bg2@2x.png") no-repeat center center / 100% 100%;
                border-right: 1px solid #EAEDF7;
                border-radius: 12px 0 0 12px;

                .card-one-left-info {
                    margin: 16px;
                    padding: 10px 12px;
                    width: 287px;
                    height: 72px;
                    background: url("../../assets/img/dashboard/market/card-one-bg@2x.png") no-repeat center center / 100% 100%;

                    > div {
                        > p {
                            &:nth-child(1) {
                                font-size: 16px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                            }

                            &:nth-child(2) {
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                            }
                        }
                    }

                    > ul {
                        margin-top: 12px;

                        li {
                            display: inline-block;
                            vertical-align: top;
                            margin-right: 8px;
                            width: 55px;
                            height: 16px;
                            line-height: 14px;
                            text-align: center;
                            background: rgba(255, 255, 255, 0.3);
                            border-radius: 8px;
                            border: 1px solid #FFFFFF;

                            > span {
                                display: inline-block;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                                transform: scale(0.8);
                            }
                        }
                    }
                }

                .card-one-left-img-top {
                    width: 320px;
                    height: 55px;

                    > img {
                        width: 100%;
                    }
                }

                .card-one-left-img-bottom {
                    width: 320px;
                    height: 320px;
                    overflow-y: auto;

                    > img {
                        width: 100%;
                    }
                }
            }

            .card-one-right {
                width: calc(100% - 336px);
                display: inline-block;
                vertical-align: top;
                padding: 16px 0 16px 24px;

                .card-one-right-line {
                    width: 40px;
                    height: 4px;
                    background: #4D94FF;
                    border-radius: 5px;
                    margin: 24px auto;
                }

                .card-one-right-item {
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 24px;
                    width: calc(33.3% - 24px);

                    &:last-child {
                        margin-right: 0;
                    }

                    .item-line {
                        position: absolute;
                        left: 24px;
                        top: 0;
                        width: 2px;
                        height: calc(100% - 24px);
                        background: #EAEDF7;
                        z-index: 1;
                    }

                    .item-box {
                        position: relative;
                        margin-bottom: 16px;
                        padding: 16px;
                        background: #F7F9FD;
                        border-radius: 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        z-index: 2;

                        .first-p {
                            font-size: 16px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                        }

                        &:last-child {
                            height: 120px;
                        }

                        i {
                            margin-right: 4px;
                        }

                        img {
                            margin-right: 4px;
                            width: 24px;
                            height: 24px;
                            vertical-align: -6px;
                        }
                    }

                    &.active {
                        .item-line {
                            background: #C7E3FF;
                        }

                        .item-box {
                            color: #242F57;
                            background: #DBEAFF;
                            box-shadow: 0px 4px 16px 0px rgba(55, 84, 170, 0.12);
                            color: #242F57;

                            &.item-box-active {
                                color: #FFFFFF;
                                background: linear-gradient(225deg, #1C66DE 0%, #98A0F9 100%);
                            }
                        }
                    }
                }
            }
        }

        .card-two {
            padding-bottom: 24px;

            .cdyhmj_content_container {
                width: 100%;
                min-height: 507px;
                border-radius: 8px;
                border: 1px solid #eaedf7;

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
                                    margin-left: 24px;
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

        .card-three {
            .card-three-select {
                display: flex;

                > div {
                    margin-left: 16px;
                    width: 120px;
                }
            }

            .card-three-date {
                > div {
                    width: 240px;
                }
            }

            .card-three-left {
                width: calc(50% - 12px);
                height: 384px;

                .card-three-chart {
                    width: 100%;
                    height: 310px;
                }
            }

            .card-three-right {
                padding: 0;
                width: calc(50% - 12px);
                height: 384px;

                .card-three-right-content {
                    position: relative;

                    .card-three-right-content-left {

                        width: 30%;

                        .card-three-right-content-left-item {
                            position: relative;
                            padding: 12px 16px;
                            background: #FFFFFF;
                            cursor: pointer;

                            > img {
                                display: inline-block;
                                vertical-align: middle;
                                margin-right: 8px;
                                width: 24px;
                                height: 24px;
                                border-radius: 50%;
                            }

                            > p {
                                display: inline-block;
                                vertical-align: middle;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;

                                > span {
                                    color: #97A0C3;
                                }
                            }

                            &.active {
                                background: #F7F9FD;

                                > p {
                                    color: #2373FF;

                                    > span {
                                        color: #2373FF;
                                    }
                                }

                                &:before {
                                    content: '';
                                    position: absolute;
                                    left: 0;
                                    top: 0;
                                    width: 2px;
                                    height: 48px;
                                    background: #2373FF;
                                }
                            }
                        }

                        .card-three-right-content-left-btn {
                            position: absolute;
                            left: 16px;
                            bottom: 16px;
                            width: 128px;
                            height: 32px;
                            line-height: 32px;
                            border-radius: 8px;
                            border: 1px solid #2373FF;
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #2373FF;
                            text-align: center;
                            cursor: pointer;
                        }
                    }

                    .card-three-right-content-right {
                        padding: 16px 22px;
                        width: 70%;
                        height: 320px;
                        background: #F7F9FD;

                        .card-three-right-content-right-item {
                            display: inline-block;
                            width: calc(50% - 4px);
                            height: 64px;
                            padding: 6px 12px;
                            margin-bottom: 8px;
                            background: #FFFFFF;
                            border-radius: 8px;
                            margin-right: 8px;

                            &:nth-child(2n+2) {
                                margin-right: 0;
                            }

                            > p {
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #97A0C3;

                                &:last-child {
                                    font-size: 18px;
                                    font-family: PingFangSC-Semibold, PingFang SC;
                                    font-weight: 600;
                                    color: #242F57;
                                }
                            }
                        }
                    }
                }
            }
        }

        .card-four {
            padding-bottom: 24px;

            .card-four-select {
                display: flex;

                > div {
                    margin-left: 16px;
                    width: 120px;
                }
            }

            .card-four-left {
                display: inline-block;
                vertical-align: top;
                width: 248px;
                margin-right: 48px;

                .card-four-left-item {
                    > p {
                        margin-bottom: 16px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #97A0C3;
                    }

                    > ul {
                        > li {
                            display: inline-block;
                            vertical-align: middle;
                            padding: 4px 16px;
                            margin-right: 8px;
                            background: #ECF3FF;
                            border-radius: 8px;
                            border: 1px solid #2373FF;
                            font-size: 16px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #2373FF;
                            text-align: center;
                        }

                        &.orange {
                            > li {
                                color: #FF8800;
                                background: #FFF7E6;
                                border: 1px solid #FFA53D;
                            }
                        }
                    }
                }

                .card-four-left-line {
                    margin: 16px 0;
                    width: 248px;
                    height: 1px;
                    background: #EAEDF7;
                }
            }

            .card-four-right {
                display: inline-block;
                vertical-align: top;
                width: calc(100% - 296px);

                .card-four-right-box {
                    position: relative;
                    display: inline-block;
                    vertical-align: top;
                    padding-bottom: 16px;
                    width: calc(50% - 12px);
                    height: 453px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;

                    &:first-child {
                        margin-right: 24px;
                    }

                    .card-four-right-title {
                        width: 100%;
                        height: 72px;
                        padding: 15px 0 0 15px;
                        background: linear-gradient(180deg, #FFF5EB 0%, rgba(255, 245, 235, 0) 100%);
                        border-radius: 8px 8px 0px 0px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    .card-four-right-list {
                        padding: 0 15px;

                        .card-four-right-item {
                            width: 100%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            padding: 15px 0;
                            border-bottom: 1px solid #F4F7FC;

                            &.card-four-right-item-desc {
                                padding: 0 0 15px 0;
                                margin-top: -7px;
                                background: #FFFFFF;
                                border-bottom: 1px solid #F4F7FC;
                            }

                            > div {
                                display: inline-block;
                                vertical-align: middle;

                                &.index {
                                    width: 20px;
                                    font-size: 18px;
                                    font-family: Staatliches-Regular, Staatliches;
                                    font-weight: 400;
                                    color: #97A0C3;

                                    &.one {
                                        color: #FA343E;
                                    }

                                    &.two {
                                        color: #FF8800;
                                    }

                                    &.three {
                                        color: #FFBA52;
                                    }
                                }

                                &.desc {
                                    /*width: 270px;*/
                                    width: calc(100% - 90px);
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                }

                                &.desc1 {
                                    /*width: 180px;*/
                                    width: calc(100% - 160px);
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                }

                                &.desc2 {
                                    /*width: 343px;*/
                                    width: calc(100% - 20px);
                                    font-size: 12px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #97A0C3;
                                }

                                &.time {
                                    width: 70px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #97A0C3;
                                    text-align: right;
                                }

                                &.time1 {
                                    width: 170px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #97A0C3;
                                    text-align: right;
                                }
                            }

                            &:first-child {
                                margin-top: -17px;
                            }

                            &:last-child {
                                border-bottom: 0px solid #F4F7FC;
                            }
                        }

                        .card-four-right-btn {
                            position: absolute;
                            left: 16px;
                            bottom: 16px;
                            width: calc(100% - 32px);
                            height: 32px;
                            line-height: 32px;
                            background: #F4F7FC;
                            border-radius: 8px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #97A0C3;
                            text-align: center;
                        }
                    }
                }
            }
        }

        .card-five {

            .card-five-desc {
                margin: -15px 0 24px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;

                > span {
                    color: #FB343E;
                }
            }
            .card-five-box {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .box1, .box2, .box3, .box4 {
                    width: calc(50% - 12px);
                    padding: 16px;
                    margin-bottom: 24px;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;

                    .name {
                        height: 24px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                    }

                    .desc {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                    }
                }

                .box1, .box2 {
                    height: 328px;
                }

                .box3, .box4 {
                    height: 390px;
                }

                .box1, .box3 {
                    .box1-echart {
                        width: 100%;
                        height: calc(100% - 24px);
                    }

                    .box3-echart {
                        width: 100%;
                        height: calc(100% - 64px);
                    }
                }

                .box2 {
                    display: flex;
                    justify-content: space-between;

                    .box2-left {
                        width: calc(100% - 260px);
                        height: 100%;

                        .box2-echart {
                            width: 100%;
                            height: calc(100% - 24px);
                        }
                    }

                    .second-list {
                        width: 260px;

                        .warning {
                            padding: 0 16px;
                            width: 260px;
                            height: 56px;
                            line-height: 56px;
                            border-radius: 8px;
                            background: rgba(252, 128, 159, .2);
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #FB343E;

                            img {
                                margin-right: 8px;
                                vertical-align: -8px;
                                width: 24px;
                                height: 24px;
                            }

                            > span {
                                vertical-align: middle;

                                &.strong {
                                    margin-left: 8px;
                                    font-size: 32px;
                                    font-family: Archivo-Bold, Archivo;
                                    font-weight: bold;
                                }
                            }
                        }

                        >ul {
                            > li {
                                display: flex;
                                align-items: baseline;
                                padding: 8px 16px;
                                margin-bottom: 4px;
                                border-radius: 8px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;

                                &:before {
                                    content: '•';
                                    margin-right: 8px;
                                    font-size: 14px;
                                    font-weight: 400;
                                    color: #FC809F;
                                }

                                &:hover {
                                    box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16), 1px 1px 0px 0px #FFFFFF;
                                }
                            }
                        }
                    }
                }

                .box4 {
                    .box4-echart {
                        width: 100%;
                        height: calc(100% - 88px);
                    }
                }
            }
        }

        .card-six {
            height: 560px;
            background: url("../../assets/img/dashboard/market/card-six-bg@2x.png") #ffffff no-repeat left center / 560px 100%;

            .card-six-left {
                width: 296px;
                height: 442px;
                box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                background: url("../../assets/img/dashboard/market/card-six-bg1@2x.png") no-repeat center center / 100% 100%;

                > img {
                    width: 296px;
                    height: 230px;
                }

                > p {
                    margin: 24px auto 42px;
                    width: 168px;
                    height: 64px;
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    line-height: 32px;
                    text-align: center;
                }

                .card-six-left-btn {
                    margin: 0 auto;
                    width: 232px;
                    height: 40px;
                    line-height: 40px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #2373FF;
                    text-align: center;
                }
            }

            .card-six-right {
                width: calc(100% - 282px);
                margin-left: 24px;

                .card-six-right-item {
                    position: relative;
                    padding: 16px;
                    margin: 0 0 16px 16px;
                    width: 176px;
                    height: 213px;

                    > p {
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #FFFFFF;

                        &:nth-child(1) {
                            font-size: 18px;
                            font-family: PingFangSC-Semibold, PingFang SC;
                            font-weight: 600;
                        }

                        &:nth-child(2) {
                            margin: 12px 0 0;
                            font-size: 14px;
                            color: rgba(255, 255, 255, 0.7);
                        }

                        &:nth-child(3) {
                            position: absolute;
                            bottom: 16px;
                        }

                        &:nth-child(4) {
                            position: absolute;
                            right: 16px;
                            bottom: 16px;
                            width: 32px;
                            height: 18px;
                            line-height: 18px;
                            background: #FFFFFF;
                            border-radius: 4px;
                            text-align: center;
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #2373FF;
                        }
                    }

                    &:nth-child(1) {
                        background: url("../../assets/img/dashboard/market/report-bg1@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(2) {
                        background: url("../../assets/img/dashboard/market/report-bg2@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(3) {
                        background: url("../../assets/img/dashboard/market/report-bg3@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(4) {
                        background: url("../../assets/img/dashboard/market/report-bg4@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(5) {
                        background: url("../../assets/img/dashboard/market/report-bg5@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(6) {
                        background: url("../../assets/img/dashboard/market/report-bg6@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(7) {
                        background: url("../../assets/img/dashboard/market/report-bg7@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(8) {
                        background: url("../../assets/img/dashboard/market/report-bg8@2x.png") no-repeat center center / 100% 100%;
                    }
                }
            }
        }
    }
</style>