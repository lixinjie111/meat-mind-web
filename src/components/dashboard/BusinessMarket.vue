<template>
    <div class="market-box">
        <p class="tips">营销洞察助力智能获取精准目标客群，快速掌握市场趋势及竞对情报，发掘商业机会，借助热点打造爆款，提供海量营销创意、行业案例</p>
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>MeMart元气值</p>
                    <p>通过将信息在品牌、消费者之间通过媒介传播的全过程进行量化和动态拟合，智能评估营销活动三要素的综合表现与营销活动中出现的问题，提醒企业及时规避风险。</p>
                </div>
            </div>
            <div class="me-mart-box flex">
                <div class="left">
                    <div class="top"></div>
                    <div class="bottom">
                        <p>Powered by <span>元知智能研究院</span></p>
                        <p>量化营销过程中的信息传播全过程，评估</br>品牌、消费者、媒介之间的匹配度</p>
                    </div>
                </div>
                <div class="right flex">
                    <div class="right-item">
                        <div class="right-item-top">

                        </div>
                        <div class="right-item-bottom">

                        </div>
                    </div>
                    <div class="right-item">
                        <div class="right-item-top">

                        </div>
                        <div class="right-item-bottom">

                        </div>
                    </div>
                    <div class="right-item">
                        <div class="right-item-top">

                        </div>
                        <div class="right-item-bottom">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>客群推荐</p>
                    <p>全渠道识别与获取客户数据，我们为您发现最有潜力的客群，精准定位重要用户的核心需求，并提供精细化的营销方案，提升用户全生命周期价值，实现低成本获客。</p>
                </div>
            </div>
            <div class="group-box">
                <Card title="营销内容方案">
                    <span slot="left" class="sub-title">|  预期销量增长16%</span>
                </Card>
                <Card title="渠道投放方案">
                    <span slot="left" class="sub-title">|  预期销量增长56%</span>
                </Card>
            </div>
        </div>
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>市场趋势与竞品行情</p>
                </div>
            </div>
            <div class="trend-box flex">
                <Card title="快消品市场趋势" class="left">
                    <div slot="right" class="trend-box-select">
                        <!--                        <Select value="快消品">-->
                        <!--                            <Option value="快消品">快消品</Option>-->
                        <!--                        </Select>-->
                        <Select value="5年">
                            <Option value="5年">5年</Option>
                        </Select>
                    </div>
                    <div class="chart">
                        <barM id="box32" :colorList="$lxjData.colorList" :myData="$lxjData.box32Data"></barM>
                    </div>
                </Card>
                <Card title="竞品行情" class="right">
                    <div slot="right" class="date">
                        <DatePicker type="daterange" :value="['2020-1-1','2020-2-29']" show-week-numbers
                                    placement="bottom-end" placeholder="请选择时间"></DatePicker>
                    </div>
                    <div class="right-content flex-start">
                        <div class="right-content-left">
                            <div :class="['right-content-left-item',threeActive == 1 ?'active':'']"
                                 @click="threeActive=1">
                                <img src="../../assets/img/dashboard/market/icon-redbull@2x.png"/>
                                <p>红牛<span>·250ml</span></p>
                            </div>
                            <div :class="['right-content-left-item',threeActive == 2 ?'active':'']"
                                 @click="threeActive=2">
                                <img src="../../assets/img/dashboard/market/icon-jiaduobao@2x.png"/>
                                <p>加多宝<span>·250ml</span></p>
                            </div>
                            <div :class="['right-content-left-item',threeActive == 3 ?'active':'']"
                                 @click="threeActive=3">
                                <img src="../../assets/img/dashboard/market/icon-wanglaoji@2x.png"/>
                                <p>王老吉<span>·250ml</span></p>
                            </div>
                            <div :class="['right-content-left-item',threeActive == 4 ?'active':'']"
                                 @click="threeActive=4">
                                <img src="../../assets/img/dashboard/market/icon-maidong@2x.png"/>
                                <p>脉动<span>·250ml</span></p>
                            </div>
                            <div class="right-content-left-btn">
                                <Icon type="md-add" size="16"/>
                                添加竞品
                            </div>
                        </div>
                        <div class="right-content-right">
                            <div class="right-content-right-item">
                                <p>月均销量</p>
                                <p>4,265,322</p>
                            </div>
                            <div class="right-content-right-item">
                                <p>客单价</p>
                                <p>¥ 6.5</p>
                            </div>
                            <div class="right-content-right-item">
                                <p>销量平台TOP3</p>
                                <p>京东/淘宝/美团</p>
                            </div>
                            <div class="right-content-right-item">
                                <p>营销渠道TOP3</p>
                                <p>抖音/小红书/头条</p>
                            </div>
                            <div class="right-content-right-item">
                                <p>舆情热度</p>
                                <p>1,554,192 </p>
                            </div>
                            <div class="right-content-right-item">
                                <p>舆情风向</p>
                                <p>积极</p>
                            </div>
                        </div>
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
                        <p>追加关联词汇</p>
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
                    <img src="../../assets/img/dashboard/market/report@2x.png"/>
                    <p>行业分析报告营销创意及案例</p>
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
    import Card from "../../components/Card"
    import barM from '../echarts/common/bar/barM';

    export default {
        name: "BusinessMarket",
        components: {Card, barM},
        data() {
            return {
                threeActive: 1
            }
        },
        methods: {},
        computed: {}
    }
</script>

<style lang="scss">
    .market-box {
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
</style>
<style scoped lang="scss">
    .market-box {
        padding: 0 24px 24px 24px;

        .tips {
            margin-top: 8px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7C88B1;
        }

        .market-card {
            .title {
                margin: 24px 0 16px;

                .left {
                    > p {
                        font-size: 18px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;

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
                box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
                border-radius: 8px;
                border: 1px solid #EAEDF7;
            }
        }

        .me-mart-box {
            .left {
                padding-top: 30px;
                width: 396px;
                height: 415px;
                background: #ffffff;
                border-radius: 8px;
                text-align: center;

                .top {
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
                    .right-item-top {
                        min-width: 228px;
                        height: 320px;
                        background: #FFFFFF;
                        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                        border-radius: 8px;
                    }

                    .right-item-bottom {
                        min-width: 228px;
                        height: 79px;
                        background: #D3E3FF;
                        border: 1px solid #2373FF
                    }
                }
            }
        }

        .group-box {
            .sub-title {
                margin-left: 12px;
                font-size: 14px !important;
                font-weight: 400 !important;
                color: #7C88B1 !important;
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

        .hot-box {
            padding-bottom: 24px;

            .left {
                display: inline-block;
                vertical-align: top;
                width: 248px;
                margin-right: 48px;

                .left-item {
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
                        margin-right: 24px;
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
            background: url("../../assets/img/dashboard/market/report-box-bg@2x.png") #ffffff no-repeat left center / 614px 560px !important;

            .left {
                width: 296px;
                height: 442px;
                box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                background: url("../../assets/img/dashboard/market/report-box-left-bg@2x.png") no-repeat center center / 100% 100%;

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

                .left-btn {
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
