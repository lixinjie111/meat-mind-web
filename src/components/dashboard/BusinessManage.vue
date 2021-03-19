<template>
    <div class="manage-box">
<!--        <p class="tips">经营诊断可以智能监测营销活动效果，依据心智模型进行智能评测，针对性提出改进方案，提供海量新潮营销创意及案例</p>-->
	    <CardList />
	    <Card title="营业额总览">
		    <div class="overview_new">
			    <div class="overview_new_top">
				    <div class="overview_new_top_item">
					    <div class="name">去年 | 2020年</div>
					    <div class="legend_box">
						    <div class="legend" :style="{ backgroundColor: $lxjData.colorList[0] }"></div>
						    <div class="number">￥125,489</div>
					    </div>
				    </div>
				    <div class="overview_new_top_item">
					    <div class="name">今年 | 2021年</div>
					    <div class="legend_box">
						    <div class="legend" :style="{ backgroundColor: $lxjData.colorList[1] }"></div>
						    <div class="number">￥16,489
						      <span class="number_target">/ 目标 130,000</span>
						    </div>
					    </div>
				    </div>
				    <div class="overview_new_top_item">
					    <div class="name">经营状况</div>
					    <div class="tips">
						    <i class="iconfont iconjingshi"></i>
						    <span>低于预期</span>
					    </div>
				    </div>
			    </div>
			    <div class="overview_new_chart">
				    <lineM4 :hasAreaStyle="true" :colorList="$lxjData.colorList" :myData="$ljEData.ljBox37"/>
			    </div>
		    </div>

	    </Card>
        <!--<div class="manage-overview flex">-->
            <!--<div class="manage-overview-left flex-start">-->
                <!--<div class="manage-overview-chart">-->
                    <!--<div class="manage-overview-select">-->
                        <!--<Select class="w120" value="邓老凉茶">-->
                            <!--<Option value="邓老凉茶">邓老凉茶</Option>-->
                        <!--</Select>-->
                        <!--<Select class="w120" value="淘宝旗舰店">-->
                            <!--<Option value="淘宝旗舰店">淘宝旗舰店</Option>-->
                        <!--</Select>-->
                        <!--<Select class="w120" value="营收状况">-->
                            <!--<Option value="营收状况">营收状况</Option>-->
                        <!--</Select>-->
                    <!--</div>-->
                    <!--<div id="myChart" style="width:100%;height: 100%;"></div>-->
                    <!--<div class="chart-tooltip red">-->
                        <!--&lt;!&ndash;                        <span>￥</span>&ndash;&gt;-->
                        <!--<div class="value">6000万</div>-->
                        <!--<div class="month">2020年8月</div>-->
                    <!--</div>-->
                    <!--<div class="chart-tooltip blue">-->
<!--&lt;!&ndash;                        <span>￥</span>&ndash;&gt;-->
                        <!--<div class="value">7200万</div>-->
                        <!--<div class="month">目标</div>-->
                    <!--</div>-->
                    <!--<div class="manage-overview-list clearfix">-->
                        <!--<div class="manage-overview-item fl">-->
                            <!--<p>访问店铺</p>-->
                            <!--<p>8,639<span>人</span></p>-->
                            <!--<Compare :data="[-12.73,3.16]"></Compare>-->
                            <!--<div class="icon">-->
                               <!--<i class="iconfont iconxianshangshangdian"></i>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="manage-overview-item fr">-->
                            <!--<p>商品访客数</p>-->
                            <!--<p>126,470<span>次</span></p>-->
                            <!--<Compare :data="[-13.14,11.45]"></Compare>-->
                            <!--<div class="icon">-->
                                <!--<i class="iconfont iconyonghuline"></i>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="manage-overview-item fl">-->
                            <!--<p>支付买家数</p>-->
                            <!--<p>1,509<span>人</span></p>-->
                            <!--<Compare :data="[-8.62,3.16]"></Compare>-->
                            <!--<div class="icon">-->
                                <!--<i class="iconfont iconyonghu"></i>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="manage-overview-item fr">-->
                            <!--<p>平均停留时长</p>-->
                            <!--<p>16.17<span>分</span></p>-->
                            <!--<Compare :data="[-11.45,1.15]"></Compare>-->
                            <!--<div class="icon">-->
                                <!--<i class="iconfont iconshijian"></i>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="manage-overview-info">-->
                    <!--<p>当前经营状况</p>-->
                    <!--<div class="manage-overview-result">-->
                        <!--<img src="../../assets/img/dashboard/manage/icon1@2x.png"/>-->
                        <!--<p>低于预期</p>-->
                    <!--</div>-->
                    <!--<p>呈现问题</p>-->
                    <!--<ul class="orange-card-ul">-->
                        <!--<li>新增消费者数量下降</li>-->
                        <!--<li>已有渠道扩展乏力，品牌营销卖点接受度下降，微博平台上品牌负面舆情呈上升趋势</li>-->
                    <!--</ul>-->
                    <!--<p>策略建议</p>-->
                    <!--<ul class="blue-card-ul">-->
                        <!--<li>及时进行引流，放宽对获客目标群体的年龄限制，增大对中低收入人群的覆盖</li>-->
                        <!--<li>扩充抖音、快手短视频平台的推广力度；优化KOL投放结构，以主播类、时尚类为主</li>-->
                        <!--<li>打造“年轻时尚”营销卖点，及时在微博平台进行公关，并监控效果</li>-->
                    <!--</ul>-->
                    <!--<div class="manage-overview-btn" @click="goTo"><img  src="../../assets/img/dashboard/manage/icon3@2x.png"/>查看全部经营分析</div>-->
                <!--</div>-->
            <!--</div>-->
            <!--<div class="manage-overview-right">-->
                <!--<p>心智模型智能指标评测<Icon type="ios-alert-outline" color="#7C88B1"/></p>-->
                <!--<div class="overview-right-top">-->
                   <!--<video class="info-player" width="100%" height="100%" autoplay loop muted-->
                           <!--src="../../assets/video/model.mp4"></video>-->
                   <!--<div class="info-content">-->
                       <!--<div class="info-top flex">-->
                           <!--<div>-->
                               <!--<p>综合评价指数</p>-->
                               <!--<p>截至2020/12/14</p>-->
                           <!--</div>-->
                           <!--<div>-->
                               <!--72-->
                           <!--</div>-->
                       <!--</div>-->
                       <!--<div class="info-bottom flex">-->
                           <!--<div>-->
                               <!--<div>-->
                                   <!--<p>77</p>-->
                                   <!--<p>近6月最高分</p>-->
                               <!--</div>-->
                               <!--<img src="../../assets/img/dashboard/manage/line1@2x.png"/>-->
                           <!--</div>-->
                           <!--<div>-->
                               <!--<div>-->
                                   <!--<p>69</p>-->
                                   <!--<p>近6月最低分</p>-->
                               <!--</div>-->
                               <!--<img src="../../assets/img/dashboard/manage/line2@2x.png"/>-->
                           <!--</div>-->
                       <!--</div>-->
                   <!--</div>-->
                <!--</div>-->
                <!--<div class="overview-right-middle">-->
                   <!--<div class="detail-chart flex">-->
                       <!--<div>-->
                          <!--<i-circle :percent="80" trail-color="#fff" :size="54" :stroke-color="['#F80069','#FF7F50']">-->
                             <!--<span class="circle-inner circle-inner1">良好</span>-->
                          <!--</i-circle>-->
                          <!--<p>客群定位</p>-->
                       <!--</div>-->
                       <!--<div>-->
                           <!--<i-circle :percent="80" trail-color="#fff" :size="54" :stroke-color="['#F59808','#F9C544','#FDE772','#FFD28E']">-->
                               <!--<span class="circle-inner circle-inner2">异常</span>-->
                           <!--</i-circle>-->
                           <!--<p>媒介评测</p>-->
                       <!--</div>-->
                       <!--<div>-->
                           <!--<i-circle :percent="80" trail-color="#fff" :size="54" :stroke-color="['#46C2F4','#BBEB63']">-->
                               <!--<span class="circle-inner circle-inner3">普通</span>-->
                           <!--</i-circle>-->
                           <!--<p>品牌评价</p>-->
                       <!--</div>-->
                   <!--</div>-->
                   <!--<div class="detail-info">-->
                      <!--<div class="detail-info-item">-->
                          <!--<p>营销覆盖度<i class="iconfont iconduigou1"></i></p>-->
                      <!--</div>-->
                       <!--<div class="detail-info-item">-->
                           <!--<p>用户增长趋势<i class="iconfont iconguanyuline1"></i></p>-->
                       <!--</div>-->
                       <!--<div class="detail-info-item">-->
                           <!--<p>目标客群心智拟合<i class="iconfont iconguanyuline1"></i></p>-->
                       <!--</div>-->
                       <!--<div class="detail-info-item">-->
                           <!--<p>品牌联想度<i class="iconfont iconduigou1"></i></p>-->
                       <!--</div>-->
                       <!--<div class="detail-info-item">-->
                           <!--<p>媒介传播能力<i class="iconfont iconguanyuline1"></i></p>-->
                       <!--</div>-->
                       <!--<div class="detail-info-item">-->
                           <!--<p>网站成交金额<i class="iconfont iconduigou1"></i></p>-->
                       <!--</div>-->
                   <!--</div>-->
                <!--</div>-->
                <!--<div class="overview-right-bottom">-->
                    <!--<p>客群心智模型评测结果</p>-->
                    <!--<div class="result-btn"><img src="../../assets/img/dashboard/manage/icon2@2x.png"/>客群定位较为准确</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
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
                        <cLine id="box5" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box5Data" style="height: 185px"></cLine>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>月活跃用户 | 上线至今</p>
                        <cLine id="box51" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box51Data" style="height: 185px"></cLine>
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
                              :myData="$lxjData.box4Data" style="height: 185px"></barM1>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>渠道 | 新增用户</p>
                        <lineM2 id="box6" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box6Data" style="height: 185px"></lineM2>
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
                              :myData="$lxjData.box2Data" style="height: 220px"></barL>
                    </div>
                    <div class="manage-card-right-chart">
                        <p>品牌负面舆情监控</p>
                        <lineM2 id="box61" :colorList="$lxjData.colorList"
                               :myData="$lxjData.box61Data" style="height: 220px"></lineM2>
                    </div>
                </div>
            </div>
        </Card>
        <Card title="经营过程风险预警" class="last-card">
            <div slot="right" class="card-right" @click="toDetail4">更多<i class="iconfont icongengduo"></i></div>
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
    </div>
</template>

<script>
    import Card from "../../components/Card";
    import Compare from "../../components/Compare";
    import barM1 from '../echarts/common/bar/barM1';
    import lineM2 from '../echarts/common/line/lineM2';
    import lineM4 from '../echarts/common/line/lineM4';
    import barL from '../echarts/common/bar/barL';
    import cLine from '../echarts/common/line/line';
    import CardList from '../common/CardList';

    export default {
        name: "BusinessManage",
        components: {Compare, Card, barL, barM1, cLine, lineM2, CardList, lineM4},
        data() {
            return {}
        },
        mounted() {
            //this.initChart();
            this.initChart2();
            window.onresize = () => {
               // this.myChart.resize();
                this.myChart2.resize();
            }
        },
        methods: {
            initChart() {
                // 初始化echarts实例
                this.myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                let min = 35; //Y轴最小值
                let max = 80; //Y轴最大值
                let dataAxis = ['0月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
                let data = [48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72]; //目标
                let data2 = [max - 48, max - 50, max - 52, max - 54, max - 56, max - 58, max - 60, max - 62, max - 64, max - 66, max - 68, max - 70, max - 72]; //正常区域
                let data3 = [48, 51, 52, 53, 55, 59, 64, 61, 60]; //实际数据
                let data4 = [50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74]; //上边界
                let data5 = [46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70]; //下边界
                let effectValues = [
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 60,
                        symbolSize: 5
                    }
                ]; //实际数据预警点
                let effectValues1 = [
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 72,
                        symbolSize: 5
                    }
                ]; //目标最后点
                let effectValues2 = [
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 64,
                        symbolSize: 10
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    },
                    {
                        value: 0,
                        symbolSize: 0
                    }
                ]; //6月份点
                let option = {
                    // backgroundColor: "#fff",
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                type: 'solid',
                                width: 1,
                                color: '#E9E9E9'
                            }
                        },
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        formatter: (params) => {
                            let style = "";
                            if (params[0].data < params[2].data || params[0].seriesName != '实际') {
                                style = "display:none"
                            } else {
                                style = "display:block"
                            }
                            // + '<span>￥</span>'
                            let str = '<div class="chart-tooltip" style="' + style + '">' +
                                '<div class="value">' + params[0].data * 100 + '万</div>' +
                                '<div class="month"> ' + '2020年' + params[0].name + ' </div>' +
                                '</div>';
                            return str;
                        }
                    },
                    grid: {
                        left: '24px',
                        right: '24px',
                        top: '40px',
                        bottom: '24px',
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: dataAxis,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#97A0C3",
                                fontSize:'12'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                type: 'solid',
                                color: '#E9EBF1',
                                width: 1,
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        name: '百万',
                        nameTextStyle: {
                            color: "#97A0C3",
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#97A0C3",
                                fontSize:'12'
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#E9EBF1',
                                width: 1,
                            },
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed',
                                color: '#E9EBF1'
                            }
                        },
                        min: min,
                        max: max
                    }],
                    series: [
                        {
                            name: '实际',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                    lineStyle: {
                                        width: 4,
                                        type: 'solid',
                                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: 'rgba(187, 134, 252, 1)'
                                        }, {
                                            offset: 1,
                                            color: 'rgba(94, 139, 255, 1)'
                                        }]),
                                        shadowColor: 'rgba(3, 13, 41, .3)',
                                        shadowBlur: 6,
                                        shadowOffsetY: 8,
                                    }
                            },
                            zlevel: 1,
                            data: data3
                        },
                        {
                            name: '上边界',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                lineStyle: {
                                    width: 1,
                                    type: 'dashed',
                                    color: "rgba(35, 115, 255, .5)"
                                }
                            },
                            data: data4
                        },
                        {
                            name: '下边界',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            itemStyle: {
                                lineStyle: {
                                    width: 1,
                                    type: 'dashed',
                                    color: "rgba(245, 74, 69, .5)"
                                }
                            },
                            data: data5
                        },
                        {
                            name: '目标',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            stack: 100,
                            itemStyle: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(252, 212, 201, 0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(252, 212, 201, .5)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(252, 212, 201, .8)'
                                    }]),
                                    lineStyle: {
                                        width: 1,
                                        type: 'dashed',
                                        color: "#DFDBDD"
                                    }
                            },
                            data: data,
                        },
                        {
                            name: '正常',
                            type: 'line',
                            smooth: true,
                            symbol: "none",
                            stack: 100,
                            itemStyle: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(184, 205, 251, 0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(184, 205, 251, .5)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(184, 205, 251, .8)'
                                    }]),
                                    lineStyle: {
                                        width: 0,
                                        type: 'solid',
                                        color: "#FFFFFF"
                                    }
                            },
                            data: data2,
                        },
                        {
                            name: "预警",
                            type: 'effectScatter',
                            coordinateSystem: 'cartesian2d',
                            data: effectValues,
                            symbol: 'circle',
                            effectType: 'ripple',
                            showEffectOn: 'render',
                            cursor: 'pointer',
                            rippleEffect: {
                                period: 5,
                                scale: 5,
                                brushType: 'fill',
                            },
                            itemStyle: {
                                    color: '#F54A45',
                                    shadowBlur: 5,
                                    shadowColor: '#F54A45'
                                
                            },
                            zlevel: 1
                        },
                        {
                            name: "最终目标",
                            type: 'effectScatter',
                            coordinateSystem: 'cartesian2d',
                            data: effectValues1,
                            symbol: 'circle',
                            effectType: 'ripple',
                            showEffectOn: 'render',
                            cursor: 'pointer',
                            rippleEffect: {
                                period: 5,
                                scale: 5,
                                brushType: 'fill',
                            },
                            itemStyle: {
                               
                                    color: '#2373FF',
                                    shadowBlur: 5,
                                    shadowColor: '#2373FF'
                            
                            },
                            zlevel: 1
                        },
                        {
                            name: "6月点",
                            type: 'scatter',
                            symbol: 'circle',
                            data: effectValues2,
                            itemStyle: {
                              
                                    borderWidth: '2',
                                    borderType: 'solid',
                                    borderColor: '#ffffff',
                                    color: '#999999',
                                    shadowColor: '#515a6e',
                                    shadowBlur: 10
                              
                            },
                            cursor: 'pointer',
                            zlevel: 1
                        }
                    ]
                };
                this.myChart.setOption(option);
            },
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

                            html += `<div style="color: #666;font-size: 14px;line-height: 24px; width: 156px">
                                        <div style="color: #333;font-weight:700;">Q${v.name}: <span style=";font-size: 18px">${v.value}%</span></div>
                                        <div style="color: red;">风险预警：</div>
                                        <div style="color: #999;font-size: 12px">${text}</div>
                                    </div>`;
                            return html
                        },
                        extraCssText: 'background: rgba(255, 255, 255, .9); border-radius: 8px;box-shadow: 0 0 10px rgba(0, 0, 0, .2);color: red;padding: 12px;',
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
                      
                                width: 4,
                                // shadowBlur: 3,
                                // shadowColor: 'rgba(3, 13, 41, .2)',
                                // shadowOffsetY: 8,
                                type: 'solid',
                                color: '#4488FF',

                            
                        },
                        areaStyle: {
                         
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: hexToRgba('#4488FF', 0.8)
                                        },
                                        {
                                            offset: .5,
                                            color: hexToRgba('#4488FF', 0.5)
                                        },
                                        {
                                            offset: 1,
                                            color: hexToRgba('#4488FF', 0)
                                        }
                                    ], false),
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
                this.$router.push({name:"business-analysis-ztgl"})
            },
            goTo(){
              this.$router.push({path:"/business-analysis/ztgl"})
            }
        }
    }
</script>

<style lang="scss">
    .manage-box {
      .chart-tooltip {
        padding: 4px 8px;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 5px 4px 14px 0px rgba(55, 84, 170, 0.16), 1px 1px 0px 0px #FFFFFF;
        border-radius: 8px;

        .value {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #636E95;
            line-height: 18px;
        }

        .month {
            margin-top: 4px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97A0C3;
            line-height: 16px;
            text-align: left;
        }

        /*&.red {*/
        /*    background: rgba(255, 255, 255, 0.8);*/
        /*    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);*/
        /*    border-radius: 8px;*/
        /*}*/

        /*&.blue {*/
        /*    padding: 3px 4px;*/
        /*    background: rgba(255, 255, 255, 0.8);*/
        /*    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);*/
        /*    border-radius: 8px;*/

        /*    .value {*/
        /*        font-size: 14px;*/
        /*        line-height: 18px;*/

        /*        > span {*/
        /*            font-size: 16px;*/
        /*        }*/
        /*    }*/

        /*    .month {*/
        /*        margin-top: 1px;*/
        /*        font-size: 12px;*/
        /*        line-height: 18px;*/
        /*    }*/
        /*}*/
    }
    }
</style>
<style scoped lang="scss">
    .manage-box {
        /*padding: 0 24px 24px 24px;*/

        .tips {
            margin-top: 24px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97A0C3;
        }

        .manage-overview {
            margin: 24px 0;

            .manage-overview-left {
                width: calc(100% - 388px);
                height: 618px;
                border-radius: 12px;
                background: #E5F5FF;
                //background: url("../../assets/img/dashboard/manage/overview-bg1.png") no-repeat center center / 100% 100%;
                box-shadow: 0px 0px 8px 0px rgba(166, 171, 189, 0.3);

                .manage-overview-chart {
                    width: calc(100% - 236px);
                    height: 310px;
                    position: relative;

                    .red {
                        position: absolute;
                        right: 85px;
                        top: 200px;
                    }

                    .blue {
                        position: absolute;
                        right: 20px;
                        top: 160px;
                    }

                    .manage-overview-select {
                        padding: 24px 24px 12px 24px;
                        display: flex;

                        .w120 {
                            margin-right: 16px;
                            width: 120px;
                            background: rgba(255, 255, 255, .6);
                            border-radius: 8px;
                        }


                        ::v-deep .ivu-select-selection {
                            background: rgba(255, 255, 255, .6);
                            box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.5) inset, -2px -2px 7px 0px #FFFEFA inset;
                            border-radius: 8px;
                            border: 1px solid #C6CBDE;
                        }
                    }

                    .manage-overview-list {
                        padding: 0 24px 24px 24px;
                        /*border-top: 1px solid #F4F7FC;*/

                        .manage-overview-item {
                            position: relative;
                            margin-bottom: 12px;
                            padding: 16px;
                            width: calc(50% - 6px);
                            height: 102px;
                            border-radius: 8px;

                            > p {
                                &:nth-child(1) {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #636E95;
                                }

                                &:nth-child(2) {
                                    font-size: 24px;
                                    font-family: HelveticaNeue-Bold, HelveticaNeue;
                                    font-weight: bold;
                                    color: #242F57;

                                    > span {
                                        margin-left: 4px;
                                        font-size: 14px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: #636E95;
                                    }
                                }
                            }

                            .icon {
                                position: absolute;
                                right: 24px;
                                top: 16px;
                                width: 24px;
                                height: 24px;
                                line-height: 24px;
                                background: rgba(255, 255, 255, 0.6);
                                box-shadow: 2px 2px 5px 0px rgba(36, 47, 87, 0.06), -1px -1px 2px 0px rgba(255, 255, 255, 0.59);
                                border-radius: 4px;
                                border: 1px solid #FFFFFF;
                                text-align: center;
                            }

                            &:nth-child(1) {
                                background: rgba(219, 234, 255, 0.8);
                                border: 1px solid #4D94FF;

                                .icon {
                                    >i {
                                        color: #4D94FF;
                                    }
                                }
                            }

                            &:nth-child(2) {
                                background: rgba(237, 235, 254, 0.8);
                                border: 1px solid #A49DFA;

                                .icon {
                                    >i {
                                        color: #A49DFA;
                                    }
                                }
                            }

                            &:nth-child(3) {
                                background: rgba(255, 241, 244, 0.8);
                                border: 1px solid #FC809F;

                                .icon {
                                    >i {
                                        color: #FC809F;
                                    }
                                }
                            }

                            &:nth-child(4) {
                                background: rgba(255, 250, 241, 0.8);
                                border: 1px solid #FFD98C;

                                .icon {
                                    >i {
                                        color: #FFD98C;
                                    }
                                }
                            }
                        }
                    }
                }

                .manage-overview-info {
                    margin: 24px 0;
                    padding: 0 22px;
                    width: 236px;
                    border-left: 1px solid #FFFFFF;

                    > p {
                        padding: 24px 0 8px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #212121;

                        &:first-child {
                            padding-top: 0;
                            font-size: 18px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;
                        }
                    }

                    > ul {
                        padding: 8px 0;
                        border-radius: 8px;
                        border: 1px dashed rgba(67, 99, 146, 0.5);
                    }

                    .manage-overview-result {
                        padding: 0 16px;
                        width: 100%;
                        height: 49px;
                        line-height: 49px;
                        background: linear-gradient(135deg, #FB5961 0%, #FF8054 100%);
                        box-shadow: 3px 4px 8px 0px rgba(148, 63, 66, 0.3);
                        border-radius: 8px;
                        border: 1px solid #FE9393;

                        > p {
                            display: inline-block;
                            font-size: 20px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #FFFFFF;
                        }

                        > img {
                           vertical-align: -3px;
                           margin-right: 5px;
                           width: 20px;
                           height: 22px;
                        }
                    }

                    .manage-overview-btn {
                        margin-top: 39px;
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        background: #FFFFFF linear-gradient(148deg, rgba(220, 225, 236, 0.2) 0%, rgba(255, 255, 255, 0.76) 100%);
                        box-shadow: 3px 4px 8px 0px rgba(36, 47, 87, 0.1);
                        border-radius: 8px;
                        border: 1px solid rgba(255, 255, 255, 0.4);
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                        text-align: center;
                        cursor: pointer;

                        > img {
                            vertical-align: -5px;
                            margin-right: 12px;
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }

            .manage-overview-right {
                padding: 24px;
                width: 368px;
                height: 618px;
                background:#E5F5FF;
                //background: url("../../assets/img/dashboard/manage/overview-bg2.png") no-repeat center center / 100% 100%;
                border-radius: 12px;
                box-shadow: 0px 0px 8px 0px rgba(166, 171, 189, 0.3);

                >p {
                    height: 22px;
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;

                    >i {
                        margin-left: 4px;
                    }
                }

                .overview-right-top {
                    position: relative;
                    margin: 24px 0 20px;
                    width: 320px;
                    height: 144px;

                    .info-player {
                       position: absolute;
                       left: 0;
                       top: 0;
                       border-radius: 8px;
                       z-index: 1;
                    }

                    .info-content {
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 2;

                        .info-top {
                            padding: 0 26px 0 21px;
                            width: 100%;
                            height: 96px;

                            >div {
                                &:nth-child(1) {
                                    margin-left: 90px;
                                    width: 120px;

                                    >p {
                                        font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: rgba(255, 255, 255, 0.65);

                                        &:first-child {
                                            font-size: 16px;
                                            font-family: PingFangSC-Medium, PingFang SC;
                                            font-weight: 500;
                                            color: rgba(255, 255, 255, 1);
                                        }
                                    }
                                }

                                &:nth-child(2) {
                                    font-size: 48px;
                                    font-family: Archivo-Bold, Archivo;
                                    font-weight: bold;
                                    color: #FFFFFF;
                                    line-height: 56px;
                                    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
                                }
                            }
                        }

                        .info-bottom {
                            width: 100%;
                            height: 48px;
                            background: rgba(33, 101, 227);
                            border-radius: 0 0 8px 8px;

                            > div {
                                padding: 0 10px 0 16px;
                                height: 32px;

                                > div {
                                    margin-right: 16px;
                                    display: inline-block;

                                    >p {
                                        font-size: 12px;
                                        font-family: PingFangSC-Regular, PingFang SC;
                                        font-weight: 400;
                                        color: rgba(255, 255, 255, 0.65);
                                        line-height: 16px;

                                        &:first-child {
                                            font-size: 18px;
                                            font-family: Helvetica;
                                            color: #4FEE3E;
                                        }
                                    }
                                }

                                &:nth-child(1) {
                                    border-right: 1px solid rgba(255, 255, 255, 0.3);
                                }

                                &:nth-child(2) {
                                    >div {
                                        >p {
                                            &:first-child {
                                                color: #FF9200;
                                            }
                                        }
                                    }
                                }

                                > img {
                                    width: 50px;
                                    height: 32px;
                                }
                            }
                        }
                    }
                }

                .overview-right-middle {
                    padding: 0 19px;
                    width: 320px;
                    height: 262px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 8px;
                    border: 1px solid #FFFFFF;

                    .detail-chart {
                       padding: 19px 0 16px 0;
                       width: 100%;
                       border-bottom: 1px solid #FFFFFF;

                       >div {
                         height: 78px;

                         > p {
                             font-size: 14px;
                             font-family: PingFangSC-Medium, PingFang SC;
                             font-weight: 500;
                             color: #242F57;
                             line-height: 22px;
                         }

                        .circle-inner {
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                        }

                        .circle-inner1 {
                            color: #FB343E;
                        }

                        .circle-inner2 {
                            color: #FF9200;
                        }

                        .circle-inner3 {
                            color: #4BC905;
                        }
                       }
                    }

                    .detail-info {
                        .detail-info-item {
                            margin: 21px 16px 0 0;
                            display: inline-block;
                            width: calc(50% - 8px);

                            >p {
                                position: relative;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;

                                >i {
                                    position: absolute;
                                    top: 0;
                                    right: 0;
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

                            &:nth-child(2n+2) {
                                margin-right: 0;
                            }
                        }
                    }
                }

                .overview-right-bottom {
                    > p {
                        margin: 20px 0 8px 0;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242F57;
                    }

                    .result-btn {
                        padding: 0 12px;
                        width: 320px;
                        height: 48px;
                        line-height: 48px;
                        background: linear-gradient(144deg, rgba(12, 194, 115, .6) 0%, rgba(153, 242, 209, .6) 100%);
                        box-shadow: 0px 0px 8px 0px rgba(68, 135, 121, 0.2);
                        border-radius: 8px;
                        border: 1px solid #9DE5CB;
                        font-size: 20px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #FFFFFF;

                        >img {
                            vertical-align: -4px;
                            margin-right: 5px;
                            width: 20px;
                            height: 22px;
                        }
                    }
                }
            }
        }

	    .overview_new{
					.overview_new_top_item{
						display: inline-block;
						margin-right: 40px;
						&:last-child{
							margin-right: 0;
						}
						.name{
							font-size: 16px;
							font-weight: 400;
							color: #7C88B1;
							padding-left: 16px;
						}
						.legend_box{
							.legend{
								width: 16px;
								height: 16px;
								border-radius: 50%;
								display: inline-block;
								margin-right: 4px;
							}
							.number{
								display: inline-block;
								font-size: 24px;
								font-weight: 500;
								color: #242F57;
								.number_target{
									font-size: 16px;
									font-weight: 400;
									color: #7C88B1;
								}
							}
						}
						.tips{
							width: 160px;
							height: 40px;
							background: #FEDFE1;
							border-radius: 8px;
							font-size: 24px;
							font-weight: 500;
							color: #FF4C60;
							display: flex;
							align-items: center;
							justify-content: center;
							margin-top: 0;
							.iconfont{
								font-size: 24px;
								margin-right: 4px;
							}
						}
					}
		      .overview_new_chart{
						height: 320px;
			      width: 100%;
		      }
	      }

        .last-card {
            margin-bottom: 0;
        }

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
                                color: #242F57;
                            }

                            &:nth-child(2) {
                                margin-top: 5px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;
                            }

                            >span {
                                margin: 0 2px;
                                font-family: Helvetica Neue;
                                font-weight: Bold;
                            }
                        }

                        &:nth-child(1) {
                            background: url("../../assets/img/dashboard/manage/gradient-bg1@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(2) {
                            background: url("../../assets/img/dashboard/manage/gradient-bg2@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(3) {
                            background: url("../../assets/img/dashboard/manage/gradient-bg3@2x.png") no-repeat center / 100% 100%;
                        }

                        &:nth-child(4) {
                            margin-bottom: 0;
                            background: url("../../assets/img/dashboard/manage/gradient-bg4@2x.png") no-repeat center / 100% 100%;
                        }

                        &:hover {
                            background: #FFFFFF;
                            box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16), 1px 1px 0px 0px #FFFFFF;
                        }
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
    }
</style>
