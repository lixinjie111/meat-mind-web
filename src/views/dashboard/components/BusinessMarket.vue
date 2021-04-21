<template>
    <div class="market-box">
<!--        <p class="tips">营销洞察助力智能获取精准目标客群，快速掌握市场趋势及竞对情报，发掘商业机会，借助热点打造爆款，提供海量营销创意、行业案例</p>-->
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
                        <p>量化营销过程中的信息传播全过程，评估</br>品牌、消费者、媒介之间的匹配度</p>
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
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>客群推荐</p>
                    <p>全渠道识别与获取客户数据，我们为您发现最有潜力的客群，精准定位重要用户的核心需求，并提供精细化的营销方案，提升用户全生命周期价值，实现低成本获客。</p>
                </div>
            </div>
            <div class="group-box" v-for="(item,index) in yhGroupList" :key="index"
                 v-if="yhGroupActive == index">
                <div class="group-map flex">
                    <div class="left">
                        <div class="left-top">
                            <div class="change-group flex">
                                <div class="pre" @click="groupPre(index)"><i class="iconfont iconright-arrow21"></i>
                                </div>
                                <div class="info">
                                    <div class="num">{{index+1}}/{{yhGroupList.length}}</div>
                                    <div class="rate flex">
                                        <div><img :src="item.picture"/></div>
                                        <div>
                                            <p>{{item.rate}}</p>
                                            <p>成交率</p>
                                        </div>
                                    </div>
                                    <p class="name">{{item.title}}</p>
                                    <p class="total">客群人数：{{item.userCount}}</p>
                                    <div class="self-latent flex">
                                        <div>
                                            <p>{{item.self}}%</p>
                                            <p>自有客户</p>
                                        </div>
                                        <div>
                                            <p>{{item.latent}}%</p>
                                            <p>高潜客户</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="next" @click="groupNext(index)"><i class="iconfont iconleft-arrow21"></i>
                                </div>
                            </div>
                        </div>
                        <div class="left-list">
                            <div class="left-item">
                                <div class="blue">身份类</div>
                                <p v-for="(desc,index) in item.desc1" :key="index">
                                    <span>{{desc.name}}：</span>
                                    <span>{{desc.value}}</span>
                                </p>
                            </div>
                            <div class="left-item">
                                <div class="green">偏好类</div>
                                <p v-for="(desc,index) in item.desc2" :key="index">
                                    <span>{{desc.name}}：</span>
                                    <span>{{desc.value}}</span>
                                </p>
                            </div>
                            <div class="left-item">
                                <div class="orange">消费类</div>
                                <p v-for="(desc,index) in item.desc3" :key="index">
                                    <span>{{desc.name}}：</span>
                                    <span>{{desc.value}}</span>
                                </p>
                            </div>
                            <div class="left-item">
                                <div class="yellow">行为类</div>
                                <p v-for="(desc,index) in item.desc4" :key="index">
                                    <span>{{desc.name}}：</span>
                                    <span>{{desc.value}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="time-line">
                            <img :src="item.infoUrl"/>
                            <div class="time-line-tip clearfix">
                                <div class="box-inner fl" v-for="(item1,index) in item.mediaUrls" :key="index">
                                    <div class="box-inner-left" :style="item1.bgcolor"></div>
                                    <div class="box-inner-right">{{item1.til}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="map-box" v-if="yhGroupList.length">
                            <vDxitem v-if="index == 0 && yhGroupActive == index" :onlyMap="true" :parm="yhGroupList[index]" :key="yhGroupList[index].id"></vDxitem>
                            <vDxitem1 v-if="index >0 && yhGroupActive == index" :onlyMap="true" :parm="yhGroupList[index]" :key="yhGroupList[index].id"></vDxitem1>
                        </div>
                    </div>
                </div>
                <Card title="营销内容方案">
                    <span slot="left" class="sub-title">|  预期销量增长{{item.market.num}}%</span>
                    <div class="group-content flex">
                        <div class="left">
                            <p v-html="item.market.title"></p>
                            <p>{{item.market.desc}}</p>
                            <div class="disabled">查看营销内容方案库</div>
                        </div>
                        <div class="right-content">
                            <img src="../../../assets/img/dashboard/market/group-content@2x.png"/>
                        </div>
                    </div>
                </Card>
                <Card title="渠道投放方案">
                    <span slot="left" class="sub-title">|  预期销量增长{{item.channel.num}}%</span>
                    <div class="group-content flex-start">
                        <div class="left">
                            <p v-html="item.channel.title"></p>
                            <p>{{item.channel.desc}}</p>
                            <div @click="toMedia">查看KOL带货详情</div>
                        </div>
                        <div class="right-top">
                            <p>快消品类带货达人TOP3</p>
                            <div class="right-top-item flex">
                                <div>
                                    <img src="../../../assets/img/dashboard/market/head1@2x.png"/>
                                    <div>
                                        <p>李子柒</p>
                                        <p>粉丝数：5428.8w | 作品数：718</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="../../../assets/img/dashboard/market/star@2x.png"/>
                                    <span>4.99 高</span>
                                </div>
                            </div>
                            <div class="right-top-item flex" style="background: #F4F7FC;">
                                <div>
                                    <img src="../../../assets/img/dashboard/market/head2@2x.png"/>
                                    <div>
                                        <p>疯产姐妹</p>
                                        <p>粉丝数：3608.3w | 作品数：111</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="../../../assets/img/dashboard/market/star@2x.png"/>
                                    <span>4.86 高</span>
                                </div>
                            </div>
                            <div class="right-top-item flex">
                                <div>
                                    <img src="../../../assets/img/dashboard/market/head3@2x.png"/>
                                    <div>
                                        <p>浪胃仙</p>
                                        <p>粉丝数：3811.7w | 作品数：83</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="../../../assets/img/dashboard/market/star@2x.png"/>
                                    <span>4.74 高</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
            <div class="content index-box">
                <NewEcharts></NewEcharts>
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
    import vDxitem from "@/views/user/dxItem";
    import vDxitem1 from "@/views/user/dxItem1";
    import Card from "@/components/Card"
    import barLine from '@/components/echarts/common/bar/barLine';
    import NewEcharts from "@/views/mark/components/NewEcharts";
    import PieNest2 from '@/components/echarts/common/pie/PieNest2';
    import api from "@/utils/api"

    export default {
        name: "BusinessMarket",
        components: {vDxitem, vDxitem1, NewEcharts, Card, barLine, PieNest2},
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
                yhGroupActive: 0,
                yhGroupList: []
            }
        },
        created() {
            this.getYhGroupList();
        },
        methods: {
            getYhGroupList(){
                api.getGroupsList().then(res=>{
                    if(res.code == 200){
                        var newObjList = [].concat(res.data);
                        newObjList.forEach(item=>{
                            var mediaList = [];
                            for(var i=0;i<item.mediaUrls.length;i++){
                                if(item.mediaUrls[i] == '工作'){
                                    mediaList.push({
                                        til:item.mediaUrls[i],
                                        bgcolor:{background:'#1DCEC3'}
                                    })
                                }
                                else if(item.mediaUrls[i] == '娱乐'){
                                    mediaList.push({
                                        til:item.mediaUrls[i],
                                        bgcolor:{background:'#F16E84'}
                                    })
                                }
                                else if(item.mediaUrls[i] == '沟通'){
                                    mediaList.push({
                                        til:item.mediaUrls[i],
                                        bgcolor:{background:'#FE774B'}
                                    })
                                }
                                else if(item.mediaUrls[i] == '学术'){
                                    mediaList.push({
                                        til:item.mediaUrls[i],
                                        bgcolor:{background:'#FDD352'}
                                    })
                                }
                                else if(item.mediaUrls[i] == '新闻'){
                                    mediaList.push({
                                        til:item.mediaUrls[i],
                                        bgcolor:{background:'#2373FF'}
                                    })
                                }
                                else if(item.mediaUrls[i] == '视频'){
                                    mediaList.push({
                                        til:item.mediaUrls[i],
                                        bgcolor:{background:'#7BABFF'}
                                    })
                                }
                            }
                            if(item.typeDesc == '推荐'){
                                item.lefbomSty = {
                                    background:'#FFE6DE',
                                    color:'#FE774B'
                                };
                            }
                            else{
                                item.lefbomSty = {
                                    background:'#DDE9FF',
                                    color:'#2373FF'
                                };
                            }
                            item.mediaUrls = mediaList;
                        });
                        this.yhGroupList = newObjList;
                    }
                    else{
                        this.$Message.error('获得用户分组数据失败！')
                    }
                }).catch(err=>{
                    this.$Message.error(err.msg)
                });
            },
            toMedia() {
                this.$router.push({ name:'media'});
            },
            groupPre(index) {
                if (index == 0) {
                    this.yhGroupActive = this.yhGroupList.length - 1;
                } else {
                    this.yhGroupActive = index - 1;
                }
            },
            groupNext(index) {
                if (index + 1 == this.yhGroupList.length) {
                    this.yhGroupActive = 0;
                } else {
                    this.yhGroupActive = index + 1;
                }
            }
        }
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

        .map-box {
            //覆盖地图组件样式
            .dx_Item_container {
                margin-top: 0;

                .test_container1 {
                    margin-top: 10px;
                }

                .conditions_container-box {
                    top: 74px;
                }

                .condition_content {
                    top: 116px;
                    width: 775px;
                    height: 461px;
                }

                .test_container {
                    height: 585px;
                    .mapContainer {
                        border-radius: 0 0 8px 8px;
                    }

                    .yhxw_container {
                        width: 774px;
                    }
                }

                .test_container.row {
                    margin-bottom: 0;
                    height: 585px;
                }
            }
        }
    }
</style>
<style scoped lang="scss">
    .market-box {
        /*padding: 0 24px 24px 24px;*/

        .tips {
            margin-top: 8px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #7C88B1;
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

        .group-box {
            .sub-title {
                margin-left: 12px;
                font-size: 14px !important;
                font-weight: 400 !important;
                color: #7C88B1 !important;
            }

            .group-map {
                width: 100%;
                height: 690px;
                margin-bottom: 24px;

                .left {
                    width: 320px;
                    height: 690px;
                    background: #FFFFFF;
                    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                    border-radius: 8px;

                    .left-top {
                        .change-group {
                            border-radius: 8px;

                            .pre, .next {
                                width: 24px;
                                height: 40px;
                                line-height: 40px;
                                background: #F4F7FC;
                                border-radius: 8px 0px 0px 8px;
                                text-align: center;
                                cursor: pointer;
                            }

                            .pre {
                                border-radius: 0px 8px 8px 0px;
                            }

                            .info {
                                position: relative;

                                .num {
                                    position: absolute;
                                    top: 14px;
                                    left: 0;
                                    width: 40px;
                                    height: 24px;
                                    line-height: 24px;
                                    border-radius: 4px;
                                    border: 1px solid #EAEDF7;
                                    font-size: 14px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #7C88B1;
                                    text-align: center;
                                }

                                .rate {
                                    width: 128px;
                                    height: 64px;
                                    background: #FFFFFF;
                                    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
                                    border-radius: 4px;
                                    // border: 1px solid #EAEDF7;
                                    margin: 48px auto 8px;

                                    >div {
                                      &:first-child {
                                          display: flex;
                                          justify-content: center;
                                          align-items: center;
                                          width: 64px;
                                          height: 64px;
                                          /*background: #DBE9FF;*/
                                          /*font-size: 38px;*/
                                          /*font-family: PingFangSC-Medium, PingFang SC;*/
                                          /*font-weight: 500;*/
                                          /*color: #2373FF*/

                                          >img {
                                              border-radius: 4px 0 0 4px;
                                              width: 64px;
                                              height: 64px;
                                          }
                                      }

                                      &:last-child {
                                          width: 64px;
                                          height: 64px;
                                          text-align: center;

                                          > p {
                                              font-size: 12px;
                                              font-family: PingFangSC-Medium, PingFang SC;
                                              font-weight: 500;
                                              color: #97A0C3;

                                              &:first-child {
                                                  margin-top: 7px;
                                                  font-size: 24px;
                                                  font-family: PingFangSC-Medium, PingFang SC;
                                                  font-weight: 500;
                                                  color: #1DCEC3;
                                                  line-height: 31px;
                                              }
                                          }
                                      }
                                    }
                                }

                                .name {
                                    font-size: 18px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #242F57;
                                    text-align: center;
                                }

                                .total {
                                    font-size: 12px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #97A0C3;
                                    text-align: center;
                                }

                                .self-latent {
                                    margin-top: 12px;

                                    >div {
                                        width: 140px;
                                        text-align: center;

                                        >p {
                                            font-size: 12px;
                                            font-family: PingFangSC-Regular, PingFang SC;
                                            font-weight: 400;
                                            color: #97A0C3;

                                            &:first-child {
                                                font-size: 16px;
                                                font-family: PingFangSC-Medium, PingFang SC;
                                                font-weight: 500;
                                                color: #242F57;
                                            }
                                        }

                                        &:first-child {
                                            border-right: 1px solid #EAEDF7;
                                        }
                                    }
                                }
                            }
                        }
                    }

                    .left-list {
                        padding: 12px;

                        .left-item {
                            padding: 4px 8px;
                            margin-top: 8px;
                            width: 296px;
                            background: #F4F7FC;
                            border-radius: 4px;

                            > p {
                                display: inline-block;
                                margin-top: 4px;
                                margin-right: 16px;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #97A0C3;
                                line-height: 20px;
                            }

                            > div {
                                position: relative;
                                margin-bottom: 4px;
                                font-size: 12px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #242F57;
                                line-height: 20px;

                                &:before {
                                    position: absolute;
                                    left: -8px;
                                    top: 3px;
                                    content: '';
                                    width: 4px;
                                    height: 12px;
                                }

                                &.blue {
                                    &:before {
                                        background: #2373FF;
                                    }
                                }

                                &.orange {
                                    &:before {
                                        background: #FE774B;
                                    }
                                }

                                &.green {
                                    &:before {
                                        background: #1DCEC3;
                                    }
                                }

                                &.yellow {
                                    &:before {
                                        background: #FDD352;
                                    }
                                }
                            }
                        }
                    }
                }

                .right {
                    display: block;
                    height: 690px;
                    margin-left: 16px;
                    background: #FFFFFF;
                    border-radius: 8px;

                    .time-line {
                        display: flex;
                        justify-content: space-between;
                        height: 105px;
                        border-radius: 8px 8px 0 0;
                        background: #FFFFFF;

                        >img {
                            border-radius: 8px 8px 0 0;
                            width: 688px;
                            height: 105px;
                        }

                        .time-line-tip {
                            padding: 17px 15px 0 15px;

                            .box-inner {
                                width: 37px;
                                margin-right: 10px;
                                margin-bottom: 10px;

                                .box-inner-left {
                                    display: inline-block;
                                    width: 8px;
                                    height: 8px;
                                    border-radius: 2px;
                                    margin-right: 4px;
                                }

                                .box-inner-right {
                                    display: inline-block;
                                    font-size: 12px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: #242F57;
                                }
                            }
                        }
                    }

                    .map-box {
                       width: 816px;
                       height: 585px;
                    }
                }
            }

            .group-content {
                padding-bottom: 24px;

                > div {
                    width: 50%;
                }

                .left {
                    > p {
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #7C88B1;

                        &:first-child {
                            margin-bottom: 8px;
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #242F57;

                            > span {
                                color: #2373FF;
                            }
                        }
                    }

                    > div {
                        margin-top: 44px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #2373FF;
                        cursor: pointer;

                        &.disabled {
                            color: #C6CBDE;
                        }
                    }
                }

                .right-content {
                    margin-top: -36px;
                    margin-left: 34px;

                    > img {
                        width: 540px;
                        height: 170px;
                    }
                }

                .right-top {
                    margin-top: -36px;
                    margin-left: 24px;

                    > p {
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #7C88B1;
                    }

                    .right-top-item {
                        padding: 8px;

                        > div {
                            &:nth-child(1) {
                                > img {
                                    width: 32px;
                                    height: 32px;
                                }

                                > div {
                                    margin-left: 8px;
                                    display: inline-block;
                                    vertical-align: top;

                                    > p {
                                        font-size: 12px;
                                        font-family: PingFangSC-Medium, PingFang SC;
                                        font-weight: 500;
                                        color: #7C88B1;

                                        &:last-child {
                                            margin-left: -14px;
                                            transform: scale(0.83);
                                        }
                                    }
                                }
                            }

                            &:nth-child(2) {
                                > img {
                                    width: 116px;
                                    height: 24px;
                                }

                                > span {
                                    margin-left: 16px;
                                    display: inline-block;
                                    vertical-align: 7px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #F16E84;
                                }
                            }
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

        .index-box {
            margin-top: 24px;
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
