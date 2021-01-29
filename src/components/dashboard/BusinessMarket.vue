<template>
    <div class="market-box">
        <p class="tips">营销洞察助力智能获取精准目标客群，快速掌握市场趋势及竞对情报，发掘商业机会，借助热点打造爆款，提供海量营销创意、行业案例</p>
        <div class="market-target flex-start">
            <div class="target-left">
                <div class="target-left-title flex">
                    <p>推荐目标客群</p>
                    <p>查看全部<i class="iconfont iconarrowRight"></i></p>
                </div>
                <div class="target-left-content">
                    <Select class="target-left-select" value="北漂一族">
                        <Option value="北漂一族">北漂一族</Option>
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
                    <ul class="target-left-sub-ul">
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
                       src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"></video>
            </div>
        </div>
        <div class="card card-one">
            <div class="card-one-left">
                <div class="card-one-left-info">
                    <div class="flex">
                        <p><span></span>北漂一族</p>
                        <p>分群用户数：<span>18197人</span></p>
                    </div>
                    <ul>
                        <li>公共交通</li>
                        <li>家</li>
                        <li>公司</li>
                    </ul>
                </div>
                <div class="card-one-left-img">
                    <img src="../../assets/img/dashboard/market/timeline@2x.png"/>
                </div>
            </div>
            <div class="card-one-right">
                <div class="card-one-right-item">
                    <div class="item-line"></div>
                    <div class="item-box">
                        <p><img src="../../assets/img/dashboard/market/icon-commute@2x.png"/>休息/通勤</p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-time" size="16" color="#636E95"/>
                            7:00 - 9:00
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="ios-phone-portrait" size="16" color="#636E95"/>
                            头条/微博/小红书
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-happy" size="16" color="#636E95"/>
                            一般: 35% 紧张: 29%
                        </p>
                    </div>
                    <div class="item-box">
                        <p>用户群体处于休息及通勤状态，偏好浏览新闻资讯及社交娱乐类型的APP，处理工作相关信息，情绪分布较为平均</p>
                    </div>
                </div>
                <div class="card-one-right-item active">
                    <div class="item-line"></div>
                    <div class="item-box">
                        <p><img src="../../assets/img/dashboard/market/icons-working@2x.png"/>工作/休息</p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-time" size="16" color="#2373FF"/>
                            12:00 - 13:00
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="ios-phone-portrait" size="16" color="#2373FF"/>
                            大众点评/新浪微博/抖音
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-happy" size="16" color="#2373FF"/>
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
                        <p><img src="../../assets/img/dashboard/market/icon-relax@2x.png"/>休息/放松</p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-time" size="16" color="#636E95"/>
                            20:00 - 22:00
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="ios-phone-portrait" size="16" color="#636E95"/>
                            抖音/小红书/快手
                        </p>
                    </div>
                    <div class="item-box">
                        <p>
                            <Icon type="md-happy" size="16" color="#636E95"/>
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
                    <barEcharts id="box14" :colorList="$lxjData.colorList" :myData="$lxjData.box14Data"></barEcharts>
                </div>
            </Card>
            <Card title="对标商品行情" class="card-three-right">
                <div slot="right" class="card-three-date">
                    <DatePicker type="daterange" :value="['2020-1-1','2020-2-29']" show-week-numbers
                                placement="bottom-end" placeholder="请选择时间"></DatePicker>
                </div>
                <div class="card-three-right-content flex-start">
                    <div class="card-three-right-content-left">
                        <div :class="['card-three-right-content-item',threeActive == 1 ?'active':'']"
                             @click="threeActive=1">
                            <img src="../../assets/img/dashboard/market/icon-redbull@2x.png"/>
                            <p>红牛<span>·250ml</span></p>
                        </div>
                        <div :class="['card-three-right-content-item',threeActive == 2 ?'active':'']"
                             @click="threeActive=2">
                            <img src="../../assets/img/dashboard/market/icon-jiaduobao@2x.png"/>
                            <p>加多宝<span>·250ml</span></p>
                        </div>
                        <div :class="['card-three-right-content-item',threeActive == 3 ?'active':'']"
                             @click="threeActive=3">
                            <img src="../../assets/img/dashboard/market/icon-wanglaoji@2x.png"/>
                            <p>王老吉<span>·250ml</span></p>
                        </div>
                        <div :class="['card-three-right-content-item',threeActive == 4 ?'active':'']"
                             @click="threeActive=4">
                            <img src="../../assets/img/dashboard/market/icon-maidong@2x.png"/>
                            <p>脉动<span>·250ml</span></p>
                        </div>
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
                            <div>查看全部</div>
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
                            <div>查看全部</div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="负面舆情的处理意见" class="card-five">
            <div class="card-five-box">
                <div class="box1">
                    <div class="name">信息来源占比（%）</div>
                    <div class="box1-echart">
                        <barEcharts id="box15" :colorList="$lxjData.colorList"
                                    :myData="$lxjData.box15Data"></barEcharts>
                    </div>
                </div>
                <div class="box2">
                    <div class="box2-left">
                        <div class="name">敏感占比图</div>
                        <div class="box2-echart">
                            <YibiaoCharts2 :colorList="$fjData.colorList" :myData="$fjData.box17Data"></YibiaoCharts2>
                        </div>
                    </div>
                    <ul class="second-list red-card-ul">
                        <li class="warning">
                            <img src="../../assets/img/mark/warning@2x.png" alt="">
                            敏感信息
                            <p class="strong">443</p>
                        </li>
                        <li>邓老凉茶在凉茶巨头夹缝中迷失 同仁堂等遭</li>
                        <li>凉茶风光不再:负面新闻频发 高糖饮品销售</li>
                        <li>凉茶怎么“凉”的:潜规则、边缘化、互撕……_西药</li>
                        <li>申请挂牌新三板 邓老凉茶年销售收入不及行业龙头2%</li>
                    </ul>
                </div>
                <div class="box3">
                    <div class="name">负面舆情应对说明</div>
                    <div class="box3-echart">
                        <lineM id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM>
                    </div>
                </div>
                <div class="box4">
                    <div class="name">舆情处理建议</div>
                    <div class="box4-echart">
                        <Leida2Echarts :colorList="$fjData.colorList" :myData="$fjData.box19Data"></Leida2Echarts>
                    </div>
                    <div class="box4-desc">鉴于数据搜集显示负面新闻曝光量不足，
                        没有形成爆点和舆论热点，不需要过度采取媒体公关和舆论反击，否则容易造成二次传播，
                        增加负面传播强度及扩散时间，预计6-7周后可回归平静
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
                    </div>
                    <div class="card-six-right-item fl">
                        <p>合生通商业报告</p>
                        <p>专业商场案例<br>启迪营销灵感</p>
                        <p>元知智能研究院</p>
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>

<script>
    import Card from "../../components/Card"
    import barEcharts from '../../components/echarts/common/barEcharts';
    import YibiaoCharts2 from '../../components/echarts/common/YibiaoCharts2';
    import lineM from '../../components/echarts/common/lineM';
    import Leida2Echarts from '../../components/echarts/common/Leida2Echarts';

    export default {
        name: "BusinessMarket",
        components: {Card, barEcharts, YibiaoCharts2, lineM, Leida2Echarts},
        data() {
            return {
                threeActive: 1
            }
        }
    }
</script>

<style lang="scss">
    .market-box {
        .ivu-select-selection, .ivu-input {
            background: transparent;
            box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8) inset;
            border-radius: 8px;
            border: 1px solid #C6CBDE;
        }

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
        .tips {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97A0C3;
        }

        .market-target {
            margin-top: 24px;

            .target-left {
                margin-right: 16px;
                padding: 20px 24px;
                width: 320px;
                height: 442px;
                box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
                background: url("../../assets/img/dashboard/market/target-bg@2x.png") no-repeat center / 100% 100%;
                border-radius: 8px;

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
                    }
                }

                .target-left-content {
                    .target-left-select {
                        margin: 20px 0 0;
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
                            padding: 0 10px;
                            height: 24px;
                            line-height: 24px;
                            border-radius: 8px;
                            border: 1px solid #97A0C3;
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
                border-radius: 8px;

                video {
                    object-fit: fill;
                    border-radius: 8px;
                }
            }
        }

        .card-one {
            margin-top: 24px;
            width: 100%;
            height: 480px;

            .card-one-left {
                display: inline-block;
                vertical-align: top;
                padding: 16px;
                width: 336px;
                height: 480px;
                border-right: 1px solid #EAEDF7;

                .card-one-left-info {
                    padding: 10px 12px;
                    width: 303px;
                    height: 72px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;

                    > div {
                        > p {
                            &:nth-child(1) {
                                font-size: 16px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;

                                > span {
                                    display: inline-block;
                                    vertical-align: middle;
                                    margin-right: 5px;
                                    width: 12px;
                                    height: 12px;
                                    border-radius: 50%;
                                    background: #2373FF;
                                }
                            }

                            &:nth-child(2) {
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;

                                > span {
                                    color: #2373FF;
                                }
                            }
                        }
                    }

                    > ul {
                        margin-top: 6px;

                        li {
                            display: inline-block;
                            vertical-align: top;
                            margin-right: 8px;
                            width: 55px;
                            height: 20px;
                            line-height: 20px;
                            background: rgba(164, 157, 250, .2);
                            border-radius: 8px;
                            font-size: 10px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #242F57;
                            text-align: center;

                            &:nth-child(2) {
                                background: rgba(138, 230, 199, .2);
                            }

                            &:nth-child(3) {
                                background: rgba(255, 159, 127, .2);
                            }
                        }
                    }
                }

                .card-one-left-img {
                    height: 380px;
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
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #636E95;
                        z-index: 2;

                        &:first-child {
                            font-size: 16px;
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
                            background: #FFFFFF;
                            box-shadow: 0px 4px 16px 0px rgba(55, 84, 170, 0.12);
                        }
                    }
                }
            }
        }

        .card-two {
            margin-top: 24px;
        }

        .card-three {
            margin-top: 24px;

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

                    .card-three-right-content-left {
                        width: 30%;

                        .card-three-right-content-item {
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
            margin-top: 24px;

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
                            display: flex;
                            justify-content: space-between;
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
                                    width: 270px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                }

                                &.desc1 {
                                    width: 180px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                }

                                &.desc2 {
                                    width: 343px;
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
            margin-top: 24px;

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
                }

                .box1, .box2 {
                    height: 328px;
                }

                .box3, .box4 {
                    height: 390px;
                }

                .box1, .box3 {
                    .box1-echart, .box3-echart {
                        width: 100%;
                        height: calc(100% - 24px);
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

                        > li {
                            height: 56px;
                            margin-bottom: 4px;
                            display: flex;
                            flex-direction: row;
                            align-items: center;

                            &:first-child {
                                background: rgba(252, 128, 159, .2);
                                color: #FB343E;

                                &:before {
                                    display: none;
                                }

                                img {
                                    width: 24px;
                                    height: 24px;
                                }

                                .strong {
                                    margin-left: 8px;
                                    font-size: 32px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
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

                    .box4-desc {
                        height: 64px;
                        font-size: 14px;
                        color: #636E95;
                        line-height: 22px;
                    }
                }
            }
        }

        .card-six {
            margin-top: 24px;
            height: 560px;
            background: url("../../assets/img/dashboard/market/card-six-bg@2x.png") no-repeat left center / 100% 100%;

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
                    background: url("../../assets/img/dashboard/market/card-six-bg2@2x.png") no-repeat center center / 100% 100%;

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
                    }
                }
            }
        }
    }
</style>