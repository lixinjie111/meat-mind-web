<template>
    <div class="manage-box">
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>MeMart元气值</p>
                    <p>通过将信息在品牌、消费者之间通过媒介传播的全过程进行量化和动态拟合，智能评估营销活动三要素的综合表现与营销活动中出现的问题，提醒企业及时规避风险。</p>
                </div>
            </div>
            <div class="me-mart-box flex">
                <div class="left">
                    <div class="top">
                        <PieNest2 id="303" :myData="$abelData.nest201Data" title="综合指数" value="72"></PieNest2>
                    </div>
                    <div class="bottom">
                        <p>Powered by <span>元知智能研究院</span></p>
                        <p>量化营销过程中的信息传播全过程,评估<br/>品牌、消费者、媒介之间的匹配度</p>
                    </div>
                </div>
                <div class="right flex">
                    <div class="right-item">
                        <div class="right-item-top">
                            <div class="top">
                                <div class="top-icon blue"><i class="iconfont iconyonghu"></i></div>
                                <div class="top-title">
                                    <p class="p-blue">78</p>
                                    <p>客群定位</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="bottom-item flex">
                                    <p>客群覆盖度</p><i class="iconfont iconduigou1"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>目标客群心智拟合度</p><i class="iconfont iconguanyu"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>用户增长趋势</p><i class="iconfont iconduigou1"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right-item-bottom bg1">
                            <p>客群定位 <span class="p-blue">较为准确</span></p>
                        </div>
                    </div>
                    <div class="right-item">
                        <div class="right-item-top">
                            <div class="top">
                                <div class="top-icon orange"><i class="iconfont iconxingxing"></i></div>
                                <div class="top-title">
                                    <p class="p-orange">46</p>
                                    <p>媒介评测</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="bottom-item flex">
                                    <p>媒介匹配度</p><i class="iconfont iconduigou1"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>媒介传播效率</p><i class="iconfont iconguanyu"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>品牌媒介分布</p><i class="iconfont iconguanyu"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right-item-bottom bg2">
                            <p>媒介评测 <span class="p-orange">存在问题</span></p>
                        </div>
                    </div>
                    <div class="right-item">
                        <div class="right-item-top">
                            <div class="top">
                                <div class="top-icon green"><i class="iconfont iconpinpaihuaxiang"></i></div>
                                <div class="top-title">
                                    <p class="p-green">32</p>
                                    <p>品牌评价</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="bottom-item flex">
                                    <p>品牌受众匹配度</p><i class="iconfont iconduigou1"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>品牌心智占有率</p><i class="iconfont iconguanyu"></i>
                                </div>
                                <div class="bottom-item flex">
                                    <p>公关事件响应策略</p><i class="iconfont iconguanyu"></i>
                                </div>
                            </div>
                        </div>
                        <div class="right-item-bottom bg3">
                            <p>品牌评价 <span class="p-red">有待提升</span></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Card title="客群诊断">
            <div slot="right" class="card-right" @click="toDetail1">查看用户画像详情<i class="iconfont iconleft-arrow"></i></div>
            <div class="manage-card flex-start">
                <div class="manage-card-left">
                    <p>诊断结果</p>
                    <ul class="red-ul">
                        <li>新增消费者数量下降，10月下降明显，后续持续低迷</li>
                        <li>消费者整体活跃度下降，转化率持续走低</li>
                    </ul>
                    <p class="mt-24 mb-8">建议</p>
                    <ul>
                        <li class="red-text-li">及时进行引流，与理想目标客群比对结果显示应放宽对获客目
                            标群体的年龄限制，增大对中低收入人群的覆盖，以扩大客群
                        </li>
                        <li class="blue-text-li">应加大活动力度和推广度，提高消费者活跃度和转化率</li>
                    </ul>
                </div>
                <div class="manage-card-right">
                    <div class="manage-card-right-chart">
                        <p>每日新增用户 | 过去30天</p>
                        <cLine id="box5" class="h185" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box5Data"></cLine>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>月活跃用户 | 上线至今</p>
                        <cLine id="box51" class="h185" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box51Data"></cLine>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="媒介诊断">
            <div slot="right" class="card-right" @click="toDetail2">查看媒介画像详情<i class="iconfont iconleft-arrow"></i></div>
            <div class="manage-card flex-start">
                <div class="manage-card-left">
                    <p>诊断结果</p>
                    <ul class="red-ul">
                        <li>已有渠道扩展乏力，已投放的渠道如微信、微博、百度、今日头条月内触达率成连续下降趋势</li>
                    </ul>
                    <p class="mt-24 mb-8">建议</p>
                    <ul>
                        <li class="red-text-li">客群渠道匹配分析显示应扩充抖音、快手短视频平台的推广力度</li>
                        <li class="red-text-li">优化KOL投放结构，以主播类、时尚类为主</li>
                        <li class="blue-text-li">微信公众号推广时间由工作时间向休闲时间倾斜</li>
                    </ul>
                </div>
                <div class="manage-card-right">
                    <div class="manage-card-right-chart">
                        <p>渠道 | 新增用户</p>
                        <barM1 id="box4" :colorList="$lxjData.colorList"
                              :myData="$lxjData.box4Data" class="h185"></barM1>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>渠道 | 新增用户</p>
                        <lineM2 id="box6" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box6Data" class="h185"></lineM2>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="品牌诊断">
            <div slot="right" class="card-right" @click="toDetail3">查看品牌画像详情<i class="iconfont iconleft-arrow"></i></div>
            <div class="manage-card flex-start">
                <div class="manage-card-left">
                    <p>诊断结果</p>
                    <ul class="red-ul">
                        <li>品牌营销卖点接受度下降；</li>
                        <li>微博平台上，品牌负面舆情呈上升趋势</li>
                        <li>B站平台上，品牌热度下降明显，没有引起二次元群体的品牌认同</li>
                    </ul>
                    <p class="mt-24 mb-8">建议</p>
                    <ul>
                        <li class="red-text-li">品牌认知度分析显示应重点打造“年轻时尚”营销卖点</li>
                        <li class="red-text-li">及时在微博平台进行公关，并监控效果，适时进行二次公关</li>
                        <li class="blue-text-li">增加产品个性化、感性化的内容推广</li>
                    </ul>
                </div>
                <div class="manage-card-right">
                    <div class="manage-card-right-chart">
                        <p>B站热度下降</p>
                        <barL id="box2" :colorList="$lxjData.colorList"
                              :myData="$lxjData.box2Data" class="h220"></barL>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>品牌负面舆情监控</p>
                        <lineM2 id="box61" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box61Data" class="h220"></lineM2>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="经营过程风险预警" class="last-card">
            <div slot="right" class="card-right" @click="toDetail4">更多<i class="iconfont iconleft-arrow"></i></div>
            <div class="manage-card2">
                <div class="manage-card2-top flex">
                    <div id="myChart2"></div>
                    <div class="manage-card2-top-info">
                        <div class="manage-card2-top-item">
                            <p>传播理念</p>
                            <p>消费者心智洞察<span>120,111</span>条数据，<span>10,873</span>人</p>
                        </div>
                        <div class="manage-card2-top-item">
                            <p>传播目的</p>
                            <p>消费者需求分析<span>210,111</span>条数据，<span>30,123</span>人</p>
                        </div>
                        <div class="manage-card2-top-item">
                            <p>传播支撑点</p>
                            <p>品牌核心资产挖掘<span>210,550</span>条数据，<span>20,233</span>人</p>
                        </div>
                        <div class="manage-card2-top-item">
                            <p>传播策略</p>
                            <p>传播策略分析<span>570,283</span>条数据，<span>35,866</span>人</p>
                        </div>
                    </div>
                </div>
                <div class="manage-card2-bottom flex">
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q1</span>48.88%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>市场占有率有小幅下降趋势</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>品牌定位不清晰，有陷入同质化竞争的前兆</li>
                            <li>传播渠道和传播内容单一，无法形成差异化品牌核心资产</li>
                        </ul>
                    </div>
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q2</span>32.33%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>舆论话题热度下降</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>目标消费者需求的改变没有及时发现</li>
                            <li>传播渠道和传播内容单一，无法形成差异化品牌核心资产</li>
                        </ul>
                    </div>
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q3</span>31.22%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>品牌负面舆情增加，口碑出现小幅负向增长</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>传播渠道成本投入减少且渠道监测管理不到位，在主要的品牌信息传播平台上有恶意刷差评的现象</li>
                        </ul>
                    </div>
                    <div class="manage-card2-bottom-item">
                        <p class="manage-card2-bottom-item-title"><span>Q4</span>68.81%</p>
                        <p class="manage-card2-bottom-item-sub-title">风险预警</p>
                        <ul class="red-ul">
                            <li>用户线上互动量减少，个别渠道用户增长率接近峰值</li>
                        </ul>
                        <p class="manage-card2-bottom-item-sub-title">诊断分析</p>
                        <ul class="blue-ul">
                            <li>品牌宣传活动隐晦含有”中药“、”老方”类型的关键词，触及消费者“是药三分毒”、“良药苦口”的群体创伤</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Card>
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>市场趋势与竞品行情</p>
                </div>
            </div>
            <div class="trend-box flex">
                <Card title="快消品市场趋势" class="left">
                    <div slot="right" class="trend-box-select">
                        <Select value="4年">
                            <Option value="4年">4年</Option>
                        </Select>
                    </div>
                    <div class="chart">
                        <barLine id="bar" :colorList="$linData.colorList" :myData="$linData.barLine"></barLine>
                    </div>
                </Card>
                <Card title="竞品行情" class="right">
                    <div slot="right" class="date">
                        <DatePicker type="daterange" :value="['2020-1-1','2020-2-29']" show-week-numbers
                                    placement="bottom-end" placeholder="请选择时间"></DatePicker>
                    </div>
                    <div class="right-content flex-start">
                        <div class="right-content-left">
                            <div :class="['right-content-left-item',goodsActive == 1 ?'active':'']"
                                 @click="goodsActive=1">
                                <img src="../../../assets/img/dashboard/market/icon-redbull@2x.png"/>
                                <p>红牛<span>·250ml</span></p>
                            </div>
                            <div :class="['right-content-left-item',goodsActive == 2 ?'active':'']"
                                 @click="goodsActive=2">
                                <img src="../../../assets/img/dashboard/market/icon-jiaduobao@2x.png"/>
                                <p>加多宝<span>·250ml</span></p>
                            </div>
                            <div :class="['right-content-left-item',goodsActive == 3 ?'active':'']"
                                 @click="goodsActive=3">
                                <img src="../../../assets/img/dashboard/market/icon-wanglaoji@2x.png"/>
                                <p>王老吉<span>·250ml</span></p>
                            </div>
                            <div :class="['right-content-left-item',goodsActive == 4 ?'active':'']"
                                 @click="goodsActive=4">
                                <img src="../../../assets/img/dashboard/market/icon-maidong@2x.png"/>
                                <p>脉动<span>·250ml</span></p>
                            </div>
                            <div class="right-content-left-btn">
                                <Icon type="md-add" class="ft16"/>
                                添加竞品
                            </div>
                        </div>
                        <template v-for="(item,index) in goodsList" v-if="goodsActive == index + 1">
                            <div class="right-content-right" :key="index">
                                <div class="right-content-right-item">
                                    <p>月均销量</p>
                                    <p><span>{{item.sales}}</span></p>
                                </div>
                                <div class="right-content-right-item">
                                    <p>客单价</p>
                                    <p><span>¥ {{item.price}}</span></p>
                                </div>
                                <div class="right-content-right-item">
                                    <p>销量平台</p>
                                    <p>{{item.platform}}</p>
                                </div>
                                <div class="right-content-right-item">
                                    <p>营销渠道</p>
                                    <p>{{item.channel}}</p>
                                </div>
                                <div class="right-content-right-item">
                                    <p>舆情热度</p>
                                    <p><span>{{item.hot}}</span></p>
                                </div>
                                <div class="right-content-right-item">
                                    <p>舆情风向</p>
                                    <p>{{item.direction}}</p>
                                </div>
                            </div>
                        </template>
                    </div>
                </Card>
            </div>
        </div>
        <div class="market-card">
            <div class="title flex">
                <div class="left">
                    <p>舆情热点与营销机会</p>
                </div>
                <div class="right">
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
            </div>
            <div class="content hot-box">
                <div class="left">
                    <div class="left-item">
                        <p>行业关键词</p>
                        <ul>
                            <li>凉茶</li>
                            <li>功能饮料</li>
                        </ul>
                    </div>
                    <div class="left-line"></div>
                    <div class="left-item">
                        <p>关联关键词</p>
                        <ul>
                            <li>降火</li>
                            <li>养生</li>
                            <li>滋润</li>
                        </ul>
                    </div>
                    <div class="left-item">
                        <p class="mt">追加关联词汇</p>
                        <ul>
                            <li>礼品</li>
                        </ul>
                    </div>
                    <div class="left-line"></div>
                    <div class="left-item">
                        <p>负向关联词</p>
                        <ul class="orange">
                            <li>上火</li>
                            <li>暴躁</li>
                            <li>虚脱</li>
                        </ul>
                    </div>
                </div>
                <div class="right">
                    <div class="right-box">
                        <div class="right-title">热点事件</div>
                        <div class="right-list">
                            <div class="right-item">
                                <div class="index one">1</div>
                                <div class="desc">黄晓明发文退出《浪姐2》，自曝心悸脾…</div>
                                <div class="time">2021/1/10</div>
                            </div>
                            <div class="right-item">
                                <div class="index two">2</div>
                                <div class="desc">暴躁老哥抢茅台成瘾，期待茅台价格继…</div>
                                <div class="time">2021/1/10</div>
                            </div>
                            <div class="right-item">
                                <div class="index three">3</div>
                                <div class="desc">王阳明:常快乐,便是功夫。心态好,亦是养生</div>
                                <div class="time">2021/1/9</div>
                            </div>
                            <div class="right-item">
                                <div class="index">4</div>
                                <div class="desc">互联网打工人不懂养生?这份年度白皮书…</div>
                                <div class="time">2021/1/8</div>
                            </div>
                            <div class="right-item">
                                <div class="index">5</div>
                                <div class="desc">暖心礼物!扬州一高校学生为上完最后一…</div>
                                <div class="time">2021/1/5</div>
                            </div>
                            <div class="right-item">
                                <div class="index">6</div>
                                <div class="desc">最北教师:无声滋润最北国土</div>
                                <div class="time">2021/1/2</div>
                            </div>
                            <div class="right-btn">
                                <div>查看全部<i class="iconfont iconleft-arrow21"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="right-box">
                        <div class="right-title">近期机会</div>
                        <div class="right-list">
                            <div class="right-item">
                                <div class="index one">1</div>
                                <div class="desc1">迎春大促</div>
                                <div class="time1">2021/2/1 - 2021/2/28</div>
                            </div>
                            <div class="right-item right-item-desc">
                                <div class="index"></div>
                                <div class="desc2">春节喜庆欢乐气氛大大刺激了人们消费的欲望和冲动,春节促销活动,所参与促销的商品面广，数量多，力度大，容易形成连带销售。</div>
                            </div>
                            <div class="right-item">
                                <div class="index two">2</div>
                                <div class="desc1">赏灯品诗喝茶</div>
                                <div class="time1">2021/2/20 - 2021/2/28</div>
                            </div>
                            <div class="right-item">
                                <div class="index three">3</div>
                                <div class="desc1">二月二，龙抬头</div>
                                <div class="time1">2021/3/14 - 2021/3/20</div>
                            </div>
                            <div class="right-btn">
                                <div>查看全部<i class="iconfont iconleft-arrow21"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>行业分析报告、营销创意及案例</p>
                </div>
            </div>
            <div class="content report-box flex-start">
                <div class="left">
                    <img src="../../../assets/img/dashboard/market/report@2x.png"/>
                    <p>行业分析报告<br/>营销创意及案例</p>
                    <div class="left-btn">查看全部案例</div>
                </div>
                <div class="right">
                    <a target="_blank" href="/static/pdf/2020年快消品行业内容营销报告.pdf">
                        <div class="right-item fl">
                            <p>北京快销品<br>行业分析报告</p>
                            <p>年度/季度/月度报告</p>
                            <p>元知智能研究院</p>
                        </div>
                    </a>
                    <div class="right-item">
                        <p>北京软饮料<br>市场规模跟踪</p>
                        <p>重点市场规模<br>数据跟踪及提取</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="right-item">
                        <p>店铺分析选址<br>方法论</p>
                        <p>宝贝优化<br>竞品分析<br>备货指导</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="right-item">
                        <p>正负面情绪提取</p>
                        <p>分析销售场<br>优化品牌定位</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="right-item">
                        <p>消费者关注点提取</p>
                        <p>提取关键评论属性<br>热销宝贝备货指导</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="right-item">
                        <p>心智剖析产品<br>SWOT</p>
                        <p>竞品优势对比<br>查漏补缺</p>
                        <p>元知智能研究院</p>
                    </div>
                    <div class="right-item">
                        <p>合生汇商场报告</p>
                        <p>专业商场案例<br>启迪营销灵感</p>
                        <p>元知智能研究院</p>
                        <p>付费</p>
                    </div>
                    <div class="right-item">
                        <p>合生通商业报告</p>
                        <p>专业商场案例<br>启迪营销灵感</p>
                        <p>元知智能研究院</p>
                        <p>付费</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/Card";
    import Compare from "@/components/Compare";
    import barM1 from '@/components/echarts/common/bar/barM1';
    import lineM2 from '@/components/echarts/common/line/lineM2';
    import lineM4 from '@/components/echarts/common/line/lineM4';
    import barL from '@/components/echarts/common/bar/barL';
    import cLine from '@/components/echarts/common/line/line';
    import barLine from '@/components/echarts/common/bar/barLine';
    import PieNest2 from '@/components/echarts/common/pie/PieNest2';

    export default {
        name: "BusinessManage",
        components: {Compare, Card, barL, barM1, cLine, lineM2, lineM4, barLine, PieNest2},
        data() {
            return {
                goodsActive: 1,
                goodsList: [
                    {
                        sales: '665,382',
                        price: '7.0',
                        platform: '淘宝/美团/拼多多',
                        channel: '抖音/头条/朋友圈',
                        hot: '2,192',
                        direction: '积极'
                    },
                    {
                        sales: '3,112,923',
                        price: '6.5',
                        platform: '淘宝/京东/美团',
                        channel: '抖音/公众号',
                        hot: '8,835',
                        direction: '一般'
                    },
                    {
                        sales: '3,369,562',
                        price: '6.5',
                        platform: '京东/淘宝/美团',
                        channel: '快手/抖音/头条',
                        hot: '9,080',
                        direction: '一般'
                    },
                    {
                        sales: '745,892',
                        price: '4.5',
                        platform: '饿了么/拼多多',
                        channel: '抖音/快手',
                        hot: '3,553',
                        direction: '积极'
                    }
                ],
            }
        },
        mounted() {
            this.initChart2();
            window.onresize = () => {
                this.myChart2.resize();
            }
        },
        methods: {
            initChart2() {
                this.myChart2 = this.$echarts.init(document.getElementById('myChart2'));
                let echartData = [{
                        name: "1",
                        value: "48.88",
                    },
                    {
                        name: "2",
                        value: "32.33",
                    },
                    {
                        name: "3",
                        value: "31.22",
                    },
                    {
                        name: "4",
                        value: "68.81",
                    }
                ];

                let xAxisData = echartData.map(v => v.name);
                let yAxisData = echartData.map(v => v.value);
                const hexToRgba = (hex, opacity) => {
                    let rgbaColor = "";
                    let reg = /^#[\da-f]{6}$/i;
                    if (reg.test(hex)) {
                        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
                            "0x" + hex.slice(3, 5)
                        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
                    }
                    return rgbaColor;
                }
                let option = {
                    tooltip: {
                        trigger: "axis",
                        formatter: function (params) {
                            let html = '';
                            const v = params[0];
                            let text = '';
                            switch (v.data) {
                                case '48.88':
                                    text = '市场占有率有小幅下降趋势';
                                    break;
                                case '32.33':
                                    text = '舆论话题热度下降';
                                    break;
                                case '31.22':
                                    text = '品牌负面舆情增加，口碑出现<br/>小幅负向增长';
                                    break;
                                case '68.81':
                                    text = '用户线上互动量减少，个别渠<br>道用户增长率接近峰值';
                                    break;
                            }

                            html += `<div class="tips-box">
                                        <div class="tips-title" >Q${v.name}: <span class="tips-title-value">${v.value}%</span></div>
                                        <div style="color: red;">风险预警！</div>
                                        <div class="tips-desc" >${text}</div>
                                        <div class="tips-btn">监控该风险</div>
                                    </div>`;
                            return html
                        },
                        extraCssText: 'background: rgba(0, 0, 0, 0.7); border-radius: 8px;box-shadow: 0 0 10px rgba(0, 0, 0, .2);padding: 12px;',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                type: 'solid',
                                width: 1,
                                color: '#E9E9E9'
                            }
                        }
                    },
                    grid: {
                        left: '10px',
                        right: '10px',
                        top: '20px',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: [{
                        type: "category",
                        boundaryGap: false,
                        //设置轴线的属性
                        axisLine:{
                            lineStyle:{
                                color:'#E9EBF1',
                            }
                        } ,
                        axisLabel: {
                            formatter: 'Q{value}',
                            textStyle: {
                                color: "#97A0C3",   //这里用参数代替了
                                fontSize:'12'
                            }
                        },
                        data: xAxisData
                    }],
                    yAxis: [{
                        type: "value",
                        name: '品牌信息传播效率',
                        axisLabel: {
                            formatter: '{value}%',
                            textStyle: {
                                color: "#97A0C3",
                                fontSize:'12'
                            }
                        },
                        nameTextStyle: {
                            color: "#E9EBF1",
                            fontSize: 12,
                            lineHeight: 40
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#E9EBF1"
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        }
                    }],
                    series: [{
                        name: "2019",
                        type: "line",
                        smooth: true,
                        showSymbol: false,
                        symbolSize: 5,
                        zlevel: 30,
                        itemStyle: {
                                color: '#FF9F7F',
                                shadowBlur: 5,
                                shadowColor: '#FF9F7F'

                        },
                        lineStyle: {
                                width: 2 / 144 * window.rem,
                                // shadowBlur: 3,
                                // shadowColor: 'rgba(3, 13, 41, .2)',
                                // shadowOffsetY: 8,
                                type: 'solid',
                                color: '#2373FF',
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(35, 155, 255, 0.3)',
                                },{
                                    offset: 0.6,
                                    color: 'rgba(35, 155, 255, 0.2)',
                                },{
                                    offset: 1,
                                    color: 'rgba(255, 255, 255, 0)'
                                }],
                                global: false // 缺省为 false
                            }
                            // shadowColor: hexToRgba('#0090FF', 0.1),
                            // shadowBlur: 10
                        },
                        data: yAxisData
                    }]
                };
                this.myChart2.setOption(option);
                //设置默认选中高亮部分
                this.myChart2.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: 3
                });
            },
            toDetail1(){
                this.$router.push({name:"user"})
            },
            toDetail2(){
                this.$router.push({name:"media"})
            },
            toDetail3(){
                this.$router.push({name:"mark"})
            },
            toDetail4(){
                this.$router.push({name:"business-analysis-overview"})
            },
            goTo(){
              this.$router.push({path:"/business-analysis/overview"})
            }
        }
    }
</script>

<style lang="scss">
    .manage-box {
        .trend-box {
            .right {
                &.card-container {
                    .title {
                        padding: 0 24px;
                    }
                }
            }
        }
    }
    .tips-box{
        font-size: 14px;
        line-height: 24px;
        width: 200px;

        .tips-title{
            font-weight:700;
            color: #FFFFFF;

            .tips-title-value{
                font-size: 18px
            }
        }

        .tips-desc{
            font-size: 12px;
            color: #FFFFFF;
            line-height: 17px;
        }

        .tips-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 28px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 4px;
            font-size: 14px;
            font-weight: 400;
            color: #FFFFFF;
            margin-top: 16px;
        }
    }
</style>
<style scoped lang="scss">
    .manage-box {
        .card-right {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #7C88B1;
            cursor: pointer;

            >i {
              margin-left: 4px;
              vertical-align: -1px;
            }
        }

        .manage-card {
            padding-bottom: 20px;

            p {
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
            }

            .manage-card-left {
                padding-right: 15px;
                width: 40%;
            }

            .manage-card-right {
                width: 60%;

                .manage-card-right-chart {
                    display: inline-block;
                    vertical-align: top;
                    width: 50%;
                    height: 95%;
                    border-left: 1px solid #F0F0F0;

                    > p {
                        padding: 0 15px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }
                    .h185{
                        height: 185px;
                    }
                    .h220{
                        height: 220px;
                    }
                }
            }
        }

        .manage-card2 {
            padding-bottom: 20px;

            .manage-card2-top {

                #myChart2 {
                    width: calc(100% - 407px);
                    height: 311px;
                }

                .manage-card2-top-info {
                    width: 382px;
                    height: 311px;

                    .manage-card2-top-item {
                        margin-bottom: 8px;
                        padding: 12px 24px;
                        width: 100%;
                        box-shadow: 0px 0px 16px 0px rgba(255, 255, 255, 0.5);
                        border-radius: 8px;

                        > p {
                            &:nth-child(1) {
                                font-size: 16px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                            }

                            &:nth-child(2) {
                                margin-top: 5px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                            }

                            >span {
                                margin: 0 2px;
                                font-family: Helvetica Neue;
                                font-weight: Bold;
                            }
                        }

                        &:nth-child(1) {
                            color:#2373FF;
                            background: rgb(211, 227, 255);
                            // background: url("../../../assets/img/dashboard/manage/gradient-bg1@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(2) {
                            color: #FE774B;
                            background: rgb(255, 230, 222);
                            // background: url("../../../assets/img/dashboard/manage/gradient-bg2@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(3) {
                            color: #1DCEC3;
                            background: rgb(223, 248, 246);
                            // background: url("../../../assets/img/dashboard/manage/gradient-bg3@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(4) {
                            color: #F16E84;
                            background: rgb(255, 235, 243);
                            margin-bottom: 0;
                            // background: url("../../../assets/img/dashboard/manage/gradient-bg4@2x.png") no-repeat center / 100% 100%;
                        }

                        // &:hover {
                        //     background: #FFFFFF;
                        //     box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16), 1px 1px 0px 0px #FFFFFF;
                        // }
                    }
                }
            }

            .manage-card2-bottom {
                margin-top: 20px;

                .manage-card2-bottom-item {
                    padding: 16px;
                    width: calc(25% - 6px);
                    height: 256px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;

                    .manage-card2-bottom-item-title {
                        font-size: 24px;
                        font-family: HelveticaNeue-Bold, HelveticaNeue;
                        font-weight: bold;
                        color: #242F57;

                        > span {
                            margin-right: 8px;
                            color: #97A0C3;
                        }
                    }

                    .manage-card2-bottom-item-sub-title {
                        margin: 12px 0 5px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    &:hover {
                        background: #F7F9FD;
                        border: 1px solid #F7F9FD;

                        .manage-card2-bottom-item-title {
                            color: #4D94FF;
                        }
                    }
                }
            }
        }

        .market-card {
            .title {
                margin: 32px 0 16px;

                .left {
                    > p {
                        height: 24px;
                        font-size: 18px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                        line-height: 24px;

                        &:nth-child(2) {
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #97A0C3;
                        }
                    }
                }

                .right {
                    > div {
                        margin-left: 16px;
                        width: 140px;
                    }
                }
            }

            .content {
                padding: 24px;
                width: 100%;
                background: #FFFFFF;
                box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                border-radius: 8px;
            }
            &:last-child{
                .content{
                    border: none;
                }
            }
        }

        .me-mart-box {
            margin-bottom: 24px;

            .left {
                padding-top: 30px;
                width: 396px;
                height: 415px;
                background: #ffffff;
                box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                border-radius: 8px;
                text-align: center;

                .top {
                    margin: 0 auto;
                    width: 278px;
                    height: 278px;
                }

                .bottom {
                    > p {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;

                        &:first-child {
                            margin-bottom: 8px;
                            font-weight: 500;

                            > span {
                                font-family: PingFangSC-Medium, PingFang SC;
                            }
                        }
                    }
                }
            }

            .right {
                margin-left: 24px;
                width: calc(100% - 420px);

                .right-item {
                    .p-blue {
                        color: #2373FF!important;
                    }

                    .p-orange {
                        color: #FE774B!important;
                    }

                    .p-red {
                        color: #FF4C60!important;
                    }

                    .p-green {
                        color: #1DCEC3!important;
                    }

                    .right-item-top {
                        padding: 24px;
                        min-width: 228px;
                        height: 320px;
                        background: #FFFFFF;
                        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                        border-radius: 8px;

                        .top {
                            display: flex;

                            .top-icon {
                                width: 72px;
                                height: 72px;
                                line-height: 72px;
                                border-radius: 12px;
                                text-align: center;

                                > i {
                                    font-size: 40px;
                                }

                                &.blue {
                                    background: rgba(211, 227, 255, .3);

                                    > i {
                                        color: #2373FF;
                                    }
                                }

                                &.orange {
                                    background: rgba(255, 230, 222, .3);

                                    > i {
                                        color: #FE774B;
                                    }
                                }

                                &.green {
                                    background: rgba(223,248,246, .3);

                                    > i {
                                        color: #1DCEC3;
                                    }
                                }
                            }

                            .top-title {
                                margin-left: 8px;

                                > p {
                                    margin-top: 5px;
                                    font-size: 18px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #7C88B1;
                                    line-height: 25px;

                                    &:first-child {
                                        font-size: 32px;
                                        font-family: PingFangSC-Medium, PingFang SC;
                                        font-weight: 500;
                                        line-height: 32px;
                                    }
                                }
                            }
                        }

                        .bottom {
                            margin-top: 32px;

                            .bottom-item {
                                margin-top: 8px;
                                padding: 14px 12px;
                                width: 180px;
                                height: 48px;
                                background: rgba(211, 227, 255, .3);
                                border-radius: 8px;

                                > p {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                }

                                > i {
                                    &.iconduigou1 {
                                        color: #08BD6C;
                                    }

                                    &.iconguanyu {
                                        color: #FF8359;
                                    }
                                }
                            }
                        }
                    }

                    .right-item-bottom {
                        margin-top: 16px;
                        min-width: 228px;
                        height: 79px;
                        line-height: 95px;

                        > p {
                            font-size: 18px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            text-align: center;
                        }

                        &.bg1 {
                            background: url("../../../assets/img/dashboard/market/mart1@2x.png") no-repeat center center / 100% 100%;
                        }

                        &.bg2 {
                            background: url("../../../assets/img/dashboard/market/mart1@2x.png") no-repeat center center / 100% 100%;
                        }

                        &.bg3 {
                            background: url("../../../assets/img/dashboard/market/mart1@2x.png") no-repeat center center / 100% 100%;
                        }
                    }
                }
            }
        }

        .trend-box {
            .trend-box-select {
                display: flex;

                > div {
                    margin-left: 16px;
                    width: 120px;
                }
            }

            .date {
                > div {
                    width: 240px;
                }
            }

            .card-container {
                margin-bottom: 0px;
            }

            .left {
                width: calc(50% - 12px);
                height: 384px;

                .chart {
                    width: 100%;
                    height: 310px;
                }
            }

            .right {
                padding: 0;
                width: calc(50% - 12px);
                height: 384px;

                .right-content {
                    position: relative;
                    .right-content-left {
                        width: 30%;
                        .right-content-left-item {
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

                        .right-content-left-btn {
                            position: absolute;
                            left: 36px;
                            bottom: 24px;
                            width: 97px;
                            height: 32px;
                            color: #C6CBDE;
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 400;
                            line-height: 30px;
                            border: 1px solid #C6CBDE;
                            border-radius: 4px;
                            text-align: center;
                            cursor: pointer;
                            .ft16{
                                font-size: 16px;
                            }
                        }
                    }

                    .right-content-right {
                        padding: 16px 22px;
                        width: 70%;
                        height: 320px;
                        background: #F7F9FD;

                        .right-content-right-item {
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
                                    margin-top: 5px;
                                    height: 26px;
                                    line-height: 26px;
                                    font-size: 18px;
                                    font-family: PingFangSC-Semibold, PingFang SC;
                                    font-weight: 600;
                                    color: #242F57;

                                    > span {
                                        font-size: 24px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        .hot-box {
            padding-bottom: 24px;

            .left {
                display: inline-block;
                vertical-align: top;
                width: 248px;
                margin-right: 48px;

                .left-item {
                    > p {
                        height: 22px;
                        margin-bottom: 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #97A0C3;
                        line-height: 22px;
                        &.mt {
                            margin-top: 16px;
                        }
                    }

                    > ul {
                        > li {
                            height: 32px;
                            line-height: 32px;
                            display: inline-block;
                            vertical-align: middle;
                            padding: 0 16px;
                            margin-right: 6px;
                            background: #ECF3FF;
                            border-radius: 4px;
                            font-size: 16px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #2373FF;
                            text-align: center;
                        }

                        &.orange {
                            > li {
                                color: #FF4C60;
                                background: #FEDFE1;
                            }
                        }
                    }
                }

                .left-line {
                    margin: 16px 0;
                    width: 248px;
                    height: 1px;
                    background: #EAEDF7;
                }
            }

            .right {
                display: inline-block;
                vertical-align: top;
                width: calc(100% - 296px);

                .right-box {
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
                        margin-right: 23px;
                    }

                    .right-title {
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

                    .right-list {
                        padding: 0 15px;

                        .right-item {
                            width: 100%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            padding: 15px 0;
                            border-bottom: 1px solid #F4F7FC;

                            &.right-item-desc {
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
                                    width: calc(100% - 180px);
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

                        .right-btn {
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

                            i {
                                font-size: 14px;
                                margin-left: 9px;
                            }
                        }
                    }
                }
            }
        }

        .report-box {
            padding: 40px 40px 24px 24px !important;
            background: #FFFFFF;
            box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            // background: url("../../../assets/img/dashboard/market/report-box-bg@2x.png") #ffffff no-repeat left center / 614px 560px !important;

            .left {
                width: 296px;
                height: 442px;
                background: #F0F8FF;
                border-radius: 8px;
                // background: url("../../../assets/img/dashboard/market/report-box-left-bg@2x.png") no-repeat center center / 100% 100%;

                > img {
                    width: 296px;
                    height: 230px;
                }

                > p {
                    margin: 24px auto 42px;
                    // width: 168px;
                    height: 64px;
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    line-height: 32px;
                    text-align: center;
                }

                .left-btn {
                    margin: 0 auto;
                    width: 232px;
                    height: 40px;
                    line-height: 40px;
                    background: #FFFFFF;
                    border-radius: 4px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;;
                    font-weight: 400;
                    color: #242F57;
                    text-align: center;
                }
            }

            .right {
                width: calc(100% - 336px);
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .right-item {
                    position: relative;
                    margin-bottom: 16px;
                    padding: 16px;
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
                        background: url("../../../assets/img/dashboard/market/report-bg1@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(2) {
                        background: url("../../../assets/img/dashboard/market/report-bg2@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(3) {
                        background: url("../../../assets/img/dashboard/market/report-bg3@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(4) {
                        background: url("../../../assets/img/dashboard/market/report-bg4@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(5) {
                        background: url("../../../assets/img/dashboard/market/report-bg5@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(6) {
                        background: url("../../../assets/img/dashboard/market/report-bg6@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(7) {
                        background: url("../../../assets/img/dashboard/market/report-bg7@2x.png") no-repeat center center / 100% 100%;
                    }

                    &:nth-child(8) {
                        background: url("../../../assets/img/dashboard/market/report-bg8@2x.png") no-repeat center center / 100% 100%;
                    }
                }
            }
        }
    }
</style>
