<template>
    <div class="analyst-box">
        <div class="kanban_container">
            <div class="title_1container">
                <div class="title_1lef">
                    <span style="margin-right:10px;">经营情况概览</span>
                    <Poptip popper-class="saas-poptip small" trigger="hover" placement="right" style="margin-right:10px;">
                        <i class="iconfont iconguanyu tip-icon"></i>
                        <div slot="content">
                            <p>快速了解商业活动的经营状况，辅助决策调整。</p>
                        </div>
                    </Poptip>
                </div>
                <div class="title_1rig">
                    <button class="btn-primary-middle btn2">
                        <i class="iconfont iconxiazai"></i>
                        <span class="btntxt">下载报表</span>
                    </button>
                </div>
            </div>
        </div>
        <CardList />
        <Card title="营业额总览">
            <div class="overview_new">
                <div class="overview_new_top">
                    <div class="overview_new_top_item">
                        <div class="name">去年 | 2020年5月</div>
                        <div class="legend_box">
                            <div class="legend" :style="{ backgroundColor: $lxjData.colorList[0] }"></div>
                            <div class="number">￥760,000</div>
                        </div>
                    </div>
                    <div class="overview_new_top_item">
                        <div class="name">今年 | 2021年5月</div>
                        <div class="legend_box">
                            <div class="legend" :style="{ backgroundColor: $lxjData.colorList[1] }"></div>
                            <div class="number">￥600,000
                                <span class="number_target">/ 目标 800,000</span>
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
                    <lineM4 :colorList="$lxjData.colorList" :myData="$ljEData.ljBox37"/>
                </div>
            </div>
        </Card>
        <Card title="当前用户数量">
            <div class="kanban_item_container">
                <div class="kanban_item1">
                    <lineM :option="{ xAxis: { boundaryGap: false } }" :colorList="$lxjData.colorList" :myData="$ljEData.ljBox037"/>
                </div>
                <div class="kanban_item2">
                    <vCard2 v-for="(item,index) in jinyinLixt" :key="index" :cardData='item'></vCard2>
                </div>
            </div>
        </Card>
        <div class="xit_tab_container">
            <TabC :tab-list="['系统默认看板']"></TabC>
            <div class="tab_right">
                <div class="btn_container" @click="toManage">
                    <span class="btntxt btntxt1">看板管理</span>
                </div>
            </div>
        </div>
        <div class="pinpai_container">
            <div class="title_container">
                <div class="left_area">
                    <span>品牌运营概览</span>
                    <Poptip popper-class="saas-poptip small" trigger="hover" placement="right">
                        <i class="iconfont iconguanyu tip-icon"></i>
                        <div slot="content">
                            <p>关注运营关键指标，快速了解品牌运营现状</p>
                        </div>
                    </Poptip>
                    <div class="time_range_container">
                        <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 100%;"></Date-picker>
                    </div>
                </div>
                <div class="right_area" @click="goPinpai">
                    <span>前往品牌画像</span>
                    <img :src="trImg" class="trImg"/>
                </div>
            </div>
            <div class="content_container">
                <div class="pin_echarts_container">
                    <div class="pin_txt_container">
                        <div class="pin_txt_til">品牌测评得分</div>
                        <div class="pin_txt_intro">击败北京</div>
                        <div class="pin_num_con">
                            <div class="pin_num">52.3%</div>
                            <div class="pin_txt">的品牌</div>
                        </div>
                    </div>
                    <div class="pin_container">
                        <PieOne1 id="box301" :size="38" :value="72" title="品牌测评"></PieOne1>
                    </div>
                </div>
                <vCard1 v-for="item in ppCardList" :key="item.id" :cardData="item"></vCard1>
            </div>
        </div>
        <div class="pinpai_container">
            <div class="title_container">
                <div class="left_area">
                    <span>用户生命周期</span>
                    <Poptip popper-class="saas-poptip small" trigger="hover" placement="right">
                        <i class="iconfont iconguanyu tip-icon"></i>
                        <div slot="content">
                            <p>了解不同阶段的用户构成，寻找提升用户价值的切入点</p>
                        </div>
                    </Poptip>
                    <div class="time_range_container">
                        <Select v-model="timeRange" style="width: 100%">
                            <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </div>
                <div class="right_area" @click="goUser">
                    <span>前往用户画像</span>
                    <img :src="trImg" class="trImg"/>
                </div>
            </div>
            <div class="content_container">
                <vCard1 v-for="item in yhCardList" :key="item.id" :cardData="item"></vCard1>
            </div>
        </div>
        <div class="pinpai_container">
            <div class="title_container">
                <div class="left_area">
                    <span>媒介概览</span>
                    <Poptip popper-class="saas-poptip small" trigger="hover" placement="right">
                        <i class="iconfont iconguanyu tip-icon"></i>
                        <div slot="content">
                            <p>关注媒介核心指标，实时掌握媒介推广情况</p>
                        </div>
                    </Poptip>
                    <div class="time_range_container">
                    </div>
                </div>
                <div class="right_area" @click="goMedia">
                    <span>前往媒介画像</span>
                    <img :src="trImg" class="trImg"/>
                </div>
            </div>
            <div class="title1_container">
                <div class="til_label">整体流量评分</div>
                <div class="date_container">
                    <Date-picker type="date" placeholder="选择日期" style="width:100%;"></Date-picker>
                </div>
                <div class="til_label1">核心指标</div>
            </div>
            <div class="progress_content_container">
                <div class="pro_lef">
                    <div class="pie_pq_per_container">
                        <div class="pie_container">
                            <PieOne2 id="box302" :value="78" title="流量评分"></PieOne2>
                        </div>
                        <div class="per_container">
                            <span class="per_txt">排名 前</span>
                            <span class="per_num">86%</span>
                        </div>
                    </div>
                    <div class="pinjun_container">
                        <div class="star_container star1">
                            <img :src="star1" class="starimg">
                        </div>
                        <span class="label">平均分</span>
                        <span class="fen_text" style="color: #2373FF;">77.5</span>
                    </div>
                    <div class="zuigao_container">
                        <div class="star_container star2">
                            <img :src="star2" class="starimg">
                        </div>
                        <span class="label">最高分</span>
                        <span class="fen_text" style="color: #34C724;">95.5</span>
                    </div>
                    <div class="zuidi_container">
                        <div class="star_container star3">
                            <img :src="star3" class="starimg">
                        </div>
                        <span class="label">最低分</span>
                        <span class="fen_text" style="color: #FB343E;">54.3</span>
                    </div>
                </div>
                <div class="cont_rig">
                    <vCard1 v-for="item in hxzbCardList" :key="item.id" :cardData="item"></vCard1>
                </div>
            </div>
        </div>
        <div class="pinpai_container">
            <div class="title_container">
                <div class="left_area">
                    <span>产品数据评估</span>
                    <Poptip popper-class="saas-poptip small" trigger="hover" placement="right">
                        <i class="iconfont iconguanyu tip-icon"></i>
                        <div slot="content">
                            <p>了解产品在企业内部的使用情况，深化管理效果</p>
                        </div>
                    </Poptip>
                    <div class="time_range_container">
                        <Select v-model="timeRange" style="width: 100%">
                            <Option v-for="item in timeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div class="content_container" style=" display: flex;align-items: center;justify-content: space-between;flex-wrap: wrap;">
                <vCard1 v-for="item in proDataList" :key="item.id" :cardData="item"></vCard1>
            </div>
        </div>
        <div class="market-card">
            <div class="title">
                <div class="left">
                    <p>营销活动监测</p>
                </div>
            </div>
            <div class="active-box">
               <ActivityShowData></ActivityShowData>
               <div class="media-container">
                   <div class="media-btns">
                       <button class="btn-primary-middle" @click="showModal=true">一键投放</button>
                       <button class="btn-primary-middle" @click="goActivity">效果监测</button>
                   </div>
                   <Media></Media>
               </div>
            </div>
        </div>
        <Modal v-model="showModal"
               footer-hide
               :closable="false"
               class-name="launch-modal">
            <div class="launch-container">
                <div class="launch-title flex">
                    <p class="flex">智能投放<span>| 如需定制化投放，请联系客服888-5566-8899</span></p>
                    <div class="flex">
                        <div @click="showModal = false" class="down-btn">取消</div>
                        <button class="down-btn" @click="openSuccess">确定</button>
                    </div>
                </div>
               <Launch></Launch>
           </div>
        </Modal>
        <Modal v-model="showSuccessModal"
               footer-hide
               :closable="false"
               class-name="launch-success-modal">
            <div class="launch-success-container">
                <Icon type="ios-checkmark-circle-outline" color="#08BD6C" size="48"/>
                <p class="title">已成功为您安排广告投放</p>
                <p class="desc">{{seconds}}s后返回首页</p>
            </div>
        </Modal>
    </div>
</template>
<script>
    import CardList from '@/components/common/CardList';
    import Card from "@/components/Card";
    import vCard1 from "@/components/common/card1";
    import vCard2 from "@/components/common/card2";
    import TabC from "@/components/TabC";
    import PieOne1 from '@/components/echarts/common/pie/PieOne1';
    import PieOne2 from '@/components/echarts/common/pie/PieOne2';
    import lineM from '@/components/echarts/common/line/lineM';
    import lineM4 from '@/components/echarts/common/line/lineM4';
    import ActivityShowData from "@/views/analysis/compoments/ActivityShowData";
    import Launch from "./Launch";
    import Media from "./Media";
    var dayjs = require('dayjs');

    export default {
        name: "Analyst",
        components: {Launch, CardList, Card, vCard1, vCard2, TabC, PieOne1, PieOne2, lineM, lineM4, ActivityShowData, Media},
        data() {
            return {
                seconds: 5,
                showModal: false,
                showSuccessModal: false,
                trImg: require("../../../assets/img/dashboard/toR.png"),
                ppCardList: [
                    {
                        id: 1,
                        width: "15%",
                        title: "GMV",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 1234,
                        unitText: "万",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 10000,
                    },
                    {
                        id: 2,
                        width: "15%",
                        title: "订单量",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 10376,
                        unitText: "个",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 15000,
                    },
                    {
                        id: 3,
                        width: "15%",
                        title: "下单人数",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 248,
                        unitText: "人",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 20000,
                    },
                    {
                        id: 4,
                        width: "15%",
                        title: "客单量",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 857,
                        unitText: "元",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 300000,
                    },
                ],
                yhCardList: [
                    {
                        id: 1,
                        width: "15%",
                        title: "新用户",
                        timeRange: dayjs(dayjs(new Date()).subtract(2, 'day')).format('YYYY-MM-DD') + '～' + dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "过去3天",
                        numText: 1234,
                        unitText: "人",
                        leftText: "",
                        leftIcon: "",
                        leftPer: "",
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 111000,
                    },
                    {
                        id: 2,
                        width: "15%",
                        title: "连续活跃用户",
                        timeRange: dayjs(dayjs(new Date()).subtract(2, 'day')).format('YYYY-MM-DD') + '～' + dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "过去3天",
                        numText: 101,
                        unitText: "人",
                        leftText: "",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: "",
                        rightPer: "",
                        rightPerColor: "#34C724",
                        timer: 111000,
                    },
                    {
                        id: 3,
                        width: "15%",
                        title: "回流用户",
                        timeRange: dayjs(dayjs(new Date()).subtract(2, 'day')).format('YYYY-MM-DD') + '～' + dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "过去3天",
                        numText: 1027,
                        unitText: "人",
                        leftText: "",
                        leftIcon: "",
                        leftPer: "",
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 112000,
                    },
                    {
                        id: 4,
                        width: "15%",
                        title: "沉默用户",
                        timeRange: dayjs(dayjs(new Date()).subtract(2, 'day')).format('YYYY-MM-DD') + '～' + dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "过去3天",
                        numText: 1290,
                        unitText: "人",
                        leftText: "",
                        leftIcon: "",
                        leftPer: "",
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 112000,
                    },
                    {
                        id: 5,
                        width: "15%",
                        title: "流失用户",
                        timeRange: dayjs(dayjs(new Date()).subtract(2, 'day')).format('YYYY-MM-DD') + '～' + dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "过去3天",
                        numText: 1089,
                        unitText: "人",
                        leftText: "",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: "",
                        rightPer: "",
                        rightPerColor: "#34C724",
                        timer: 111000,
                    },
                    {
                        id: 6,
                        width: "15%",
                        title: "流入流出比",
                        timeRange: dayjs(dayjs(new Date()).subtract(2, 'day')).format('YYYY-MM-DD') + '～' + dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "过去3天",
                        numText: 0.8,
                        unitText: "",
                        leftText: "",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: "",
                        rightPer: "",
                        rightPerColor: "#34C724",
                        timer: 1110000,
                    },
                ],
                hxzbCardList: [
                    {
                        id: 1,
                        width: "24%",
                        title: "今日 UV",
                        timeRange: "",
                        time: "",
                        numText: 799,
                        unitText: "",
                        leftText: "",
                        leftIcon: "",
                        leftPer: "",
                        leftPerColor: "#F54A45",
                        rightText: "同比上周",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 111300,
                    },
                    {
                        id: 2,
                        width: "24%",
                        title: "昨日 UV",
                        timeRange: "",
                        time: "",
                        numText: 1297,
                        unitText: "",
                        leftText: "同比上周",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: "",
                        rightPer: "",
                        rightPerColor: "#34C724",
                        timer: 111000,
                    },
                    {
                        id: 3,
                        width: "24%",
                        title: "新用户",
                        timeRange: "",
                        time: "",
                        numText: 104,
                        unitText: "",
                        leftText: "",
                        leftIcon: "",
                        leftPer: "",
                        leftPerColor: "#F54A45",
                        rightText: "同比上周",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 111500,
                    },
                    {
                        id: 4,
                        width: "24%",
                        title: "近7日 UV",
                        timeRange: "",
                        time: "",
                        numText: 3904,
                        unitText: "",
                        leftText: "同比上周",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: "",
                        rightPer: "",
                        rightPerColor: "#34C724",
                        timer: 1113000,
                    },
                    {
                        id: 5,
                        width: "24%",
                        title: "近30日 UV",
                        timeRange: "",
                        time: "",
                        numText: 19799,
                        unitText: "",
                        leftText: "",
                        leftIcon: "",
                        leftPer: "",
                        leftPerColor: "#F54A45",
                        rightText: "同比上周",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 1111700,
                    },
                    {
                        id: 6,
                        width: "24%",
                        title: "昨日 UV",
                        timeRange: "",
                        time: "",
                        numText: 1297,
                        unitText: "",
                        leftText: "同比上周",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: "",
                        rightPer: "",
                        rightPerColor: "#34C724",
                        timer: 1112000,
                    },
                    {
                        id: 7,
                        width: "24%",
                        title: "新用户",
                        timeRange: "",
                        time: "",
                        numText: 104,
                        unitText: "",
                        leftText: "",
                        leftIcon: "",
                        leftPer: "",
                        leftPerColor: "#F54A45",
                        rightText: "同比上周",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 1111800,
                    },
                    {
                        id: 8,
                        width: "24%",
                        title: "近7日 UV",
                        timeRange: "",
                        time: "",
                        numText: 3904,
                        unitText: "",
                        leftText: "同比上周",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer:this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "",
                        rightIcon: "",
                        rightPer: "",
                        rightPerColor: "#34C724",
                        timer: 1111900,
                    }
                ],
                timeList: [
                    {
                        value: "go3",
                        label: "过去三天",
                    },
                    {
                        value: "go7",
                        label: "过去七天",
                    },
                    {
                        value: "go15",
                        label: "过去十五天",
                    }
                ],
                proDataList: [
                    {
                        id: 1,
                        width: "24%",
                        title: "活跃次数",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 1847,
                        unitText: "人",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#34C724",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 1111000,
                        fnType: 5
                    },
                    {
                        id: 2,
                        width: "24%",
                        title: "活跃员工数",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 1847,
                        unitText: "人",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#F54A45",
                        timer: 111500,
                        fnType: 5
                    },
                    {
                        id: 3,
                        width: "24%",
                        title: "活跃企业数",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 1847,
                        unitText: "人",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#34C724",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 1111000,
                        fnType: 5
                    },
                    {
                        id: 4,
                        width: "24%",
                        title: "核心功能使用的总次数",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 1847,
                        unitText: "人",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 1111000,
                        fnType: 5
                    },
                    {
                        id: 5,
                        width: "24%",
                        title: "核心功能使用员工数",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 1847,
                        unitText: "人",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#34C724",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#F54A45",
                        timer: 1111000,
                        fnType: 5
                    },
                    {
                        id: 6,
                        width: "24%",
                        title: "核心功能的企业数",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 972,
                        unitText: "个",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#34C724",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 1111000,
                        fnType: 5
                    },
                    {
                        id: 7,
                        width: "24%",
                        title: "活跃用户中使用核心功能",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 92.47,
                        unitText: "%",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#F54A45",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#34C724",
                        timer: 11100000,
                        fnType: 5
                    },
                    {
                        id: 8,
                        width: "24%",
                        title: "核心功能渗透率",
                        timeRange: dayjs(new Date()).format('YYYY-MM-DD'),
                        time: "今日",
                        numText: 26.45,
                        unitText: "%",
                        leftText: "环比",
                        leftIcon: require("../../../assets/img/dashboard/upIcon.png"),
                        leftPer: this.getRandom(8,9,2) + '%',
                        leftPerColor: "#34C724",
                        rightText: "同比",
                        rightIcon: require("../../../assets/img/dashboard/downIcon.png"),
                        rightPer: this.getRandom(8,9,2) + '%',
                        rightPerColor: "#F54A45",
                        timer: 1200000,
                        fnType: 5
                    },
                ],
                timeRange: "go3",
                jinyinLixt: [
                    {
                        id: 0,
                        bgc: '#FFE6DE',
                        fColor: '#FE774B',
                        til: '访问店铺',
                        jyNum: '8,639',
                        jyUnit: '人',
                        ysIcon: 'bgi1',
                        upper: '9.72%',
                        downper: '3.54%',
                        jyIcon: require("../../../assets/img/dashboard/jyIcon1.png"),
                        type: 'dash'
                    },
                    {
                        id: 1,
                        bgc: '#D3E3FF',
                        fColor: '#2373FF',
                        til: '商品访客数',
                        jyNum: '125,740',
                        jyUnit: '次',
                        ysIcon: 'bgi2',
                        upper: '4.56%',
                        downper: '1.12%',
                        jyIcon: require("../../../assets/img/dashboard/jyIcon2.png"),
                        type: 'dash'
                    },
                    {
                        id: 2,
                        bgc: '#DFF8F6',
                        fColor: '#1DCEC3',
                        til: '平均停留时长',
                        jyNum: '15.67',
                        jyUnit: '分',
                        ysIcon: 'bgi3',
                        upper: '8.06%',
                        downper: '5.12%',
                        jyIcon: require("../../../assets/img/dashboard/jyIcon3.png"),
                        type: 'dash'
                    },
                    {
                        id: 3,
                        bgc: '#FFEBF3',
                        fColor: '#F16E84',
                        til: '支付买家数',
                        jyNum: '1,873',
                        jyUnit: '人',
                        ysIcon: 'bgi4',
                        upper: '2.56%',
                        downper: '9.12%',
                        jyIcon: require("../../../assets/img/dashboard/jyIcon4.png"),
                        type: 'dash'
                    }
                ],
                jylefImg: require('../../../assets/img/dashboard/jylefImg.png'),
                star1: require('../../../assets/img/dashboard/star1.png'),
                star2: require('../../../assets/img/dashboard/star2.png'),
                star3: require('../../../assets/img/dashboard/star3.png')
            };
        },
        methods: {
            /**
             * 生成随机数
             * @param min
             * @param max
             * @param precise {Number}精准小数
             * @returns {*}
             */
            getRandom(min, max, precise) {
                min = Math.ceil(min);
                max = Math.floor(max);
                const num = Math.floor(Math.random() * (max - min + 1)) + min;
                if (!precise) {
                    return num
                }
                let tmp = Math.random().toFixed(precise);
                return num + Number(tmp)
            },
            openSuccess() {
                this.showModal = false;
                this.showSuccessModal = true;
                let timer = null;
                timer = setInterval(() => {
                    if (this.seconds > 0) {
                        this.seconds--;
                    } else {
                        clearInterval(timer);
                        this.showSuccessModal = false;
                        this.seconds = 5;
                    }
                }, 1000);
            },
            toManage() {
                this.$router.push({
                    path: '/dashboard/manage'
                });
            },
            goPinpai() {
                this.$router.push({
                    path: '/mark'
                });
            },
            goUser() {
                this.$router.push({
                    path: '/user'
                });
            },
            goMedia() {
                this.$router.push({
                    path: '/media'
                });
            },
            goActivity() {
                this.$router.push({
                    path: '/business-analysis/activity'
                });
            }
        }
    };
</script>
<style lang="scss">
    .ivu-modal-mask {
        background-color: rgba(0, 0, 0, .6) !important;
    }

    .launch-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 1036px !important;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid #EAEDF7;

            .ivu-modal-content {
                .ivu-modal-body {
                    padding: 0;
                }
            }
        }

        .launch-container {

            .launch-title {
                padding: 18px 24px;

                > p {
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: rgba(0, 0, 0, 0.85);

                    > span {
                        margin-left: 6px;
                        font-size: 14px;
                        font-weight: 400;
                        color: #7C88B1;
                    }
                }

                > div {
                    .down-btn {
                        width: 76px;
                        height: 32px;
                        line-height: 32px;
                        background: #FFFFFF;
                        border-radius: 4px;
                        border: 1px solid #97A0C3;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        text-align: center;
                        cursor: pointer;

                        &:last-child {
                            margin-left: 16px;
                            background: #2373FF;
                            box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
                            border: none;
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }
    }

    .launch-success-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 480px !important;
            background: #FFFFFF;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid #EAEDF7;

            .ivu-modal-content {
                .ivu-modal-body {
                    padding: 0;
                }
            }
        }

        .launch-success-container {
            padding: 60px 0;
            text-align: center;

            .desc {
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #7C88B1;
            }

            .title {
                margin: 24px 0 16px;
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.85);
            }
        }
    }
</style>
<style scoped lang="scss">
    .analyst-box {
        width: 100%;

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
                display: flex;
                align-items: center;

                .legend{
                    width: 8px;
                    height: 8px;
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
                display: flex;
                align-items: center;
                justify-content: center;
                width: 160px;
                height: 40px;
                background: #FEDFE1;
                border-radius: 4px;
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FF4C60;
                margin-top: 0;

                .iconfont{
                    width: 24px;
                    height: 24px;
                    font-size: 24px;
                    margin-right: 4px;
                    line-height: 24px;
                }
            }
          }
          .overview_new_chart{
            height: 320px;
            width: 100%;
          }
        }

        .kanban_container {
            margin-top: 32px;
            width: 100%;
            margin-bottom: 24px;
            border-radius: 12px;

            .title_1container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 21px;

                .title_1lef {
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    display: flex;
                    align-items: center;

                    .infoIcon {
                        display: block;
                        margin-left: 4px;
                        width: 16px;
                    }
                }

                .title_1rig {
                    display: flex;
                    align-items: center;

                    .btn2 {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        width: 130px;
                        margin-left: 12px;

                        .iconxiazai {
                            font-size: 14px;
                            color: #FFFFFF;
                            margin-right: 8px;
                        }
                    }
                }
            }
        }

        .kanban_item_container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
            padding-bottom: 24px;

            .kanban_item1, .kanban_item2 {
                width: 49%;
            }

            .kanban_item1 {
                height: 284px;

            }

            .kanban_item2 {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }

        .xit_tab_container {
            position: relative;
            width: 100%;
            margin-bottom: 16px;

            .tab_right {
                position: absolute;
                right: 0;
                top: 6px;
                display: flex;
                justify-content: flex-end;
                align-items: center;

                .btn_container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    background: #FFFFFF;
                    border-radius: 4px;
                    border: 1px solid #97A0C3;
                    color: #242f57;
                    width: 90px;
                    height: 32px;
                    cursor: pointer;

                    .btn_download {
                        display: block;
                        width: 18px;
                        height: 18px;
                        margin-right: 11px;
                    }

                    .iconfont {
                        font-size: 14px;
                        font-weight: 500;
                        color: #357ffe;
                        line-height: 20px;
                    }
                }
            }
        }

        .pinpai_container {
            width: 100%;
            min-height: 252px;
            background: #FFFFFF;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;
            margin-bottom: 24px;
            padding: 24px;
            box-sizing: border-box;

            .title_container {
                width: 100%;
                height: 32px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .left_area {
                    display: flex;
                    align-items: center;

                    span {
                        font-size: 16px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #242f57;
                        margin-right: 4px;
                    }

                    .gdImg {
                        display: block;
                        width: 16px;
                        height: 16px;
                        margin-right: 40px;
                    }

                    .time_range_container {
                        width: 276px;
                        height: 32px;
                    }

                    .ivu-poptip {
                        margin-right: 16px;
                        margin-left: 8px;
                    }
                }

                .right_area {
                    display: flex;
                    align-items: center;

                    &:hover {
                        cursor: pointer;
                    }

                    span {
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #7c88b1;
                        margin-right: 4px;
                    }

                    .trImg {
                        display: block;
                        width: 16px;
                        height: 16px;
                    }
                }
            }

            .title1_container {
                width: 100%;
                height: 32px;
                margin-top: 6px;
                margin-bottom: 16px;
                display: flex;
                align-items: center;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;

                .til_label {
                    margin-right: 48px;
                }

                .date_container {
                    width: 200px;
                    height: 32px;
                    margin-right: 29px;
                }
            }

            .progress_content_container {
                width: 100%;
                height: 266px;
                display: flex;
                align-items: center;

                .pro_lef {
                    width: 345px;
                    height: 100%;
                    margin-right: 30px;

                    .fen_txt {
                        width: 100%;
                        font-size: 30px;
                        font-family: HelveticaNeue-Medium, HelveticaNeue;
                        font-weight: 500;
                        color: #2373FF;
                        margin-bottom: 10px;
                    }

                    .pai_container {
                        width: 100%;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        margin-bottom: 24px;

                        .paim {
                            color: #242F57;
                            margin-right: 3px;
                        }

                        .goper {
                            color: #34C724;
                        }
                    }

                    .progress_container {
                        width: 100%;
                        height: 8px;
                        padding-bottom: 32px;
                        box-sizing: border-box;
                        border-bottom: 1px solid #EAEDF7;
                        margin-bottom: 33px;

                        ::v-deep .ivu-progress {
                            width: 101%;
                        }

                        ::v-deep .ivu-progress .ivu-progress-text {
                            display: none;
                        }

                        ::v-deep .ivu-progress .ivu-progress-outer {
                            padding-right: 10px;
                        }
                    }

                    .pie_pq_per_container {
                        width: 100%;
                        padding-bottom: 10px;
                        box-sizing: border-box;
                        border-bottom: 1px #EAEDF7 solid;
                        display: flex;
                        align-items: baseline;
                        justify-content: space-between;

                        .pie_container {
                            width: 120px;
                            height: 120px;
                        }

                        .per_container {
                            .per_txt {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;
                                margin-right: 7px;
                            }

                            .per_num {
                                font-size: 30px;
                                font-family: HelveticaNeue-Medium, HelveticaNeue;
                                font-weight: 500;
                                color: #2373FF;
                            }
                        }
                    }

                    .pinjun_container, .zuigao_container, .zuidi_container {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        position: relative;
                        margin-top: 21px;

                        .star_container {
                            width: 20px;
                            height: 20px;
                            border-radius: 4px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-right: 8px;

                            .starimg {
                                display: block;
                                width: 12px;
                            }
                        }

                        .star1 {
                            background: #D3E3FF;
                        }

                        .star2 {
                            background: #DFF8F6;
                        }

                        .star3 {
                            background: #FFE6DE;
                        }

                        .label, .fen_text {
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636E95;
                        }

                        .fen_text {
                            position: absolute;
                            right: 0;
                        }
                    }
                }

                .cont_rig {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }
            }

            .content_container {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .pin_echarts_container {
                    width: 366px;
                    display: flex;
                    align-items: center;
                    padding-right: 20px;
                    box-sizing: border-box;

                    .pin_txt_container {
                        flex: 1;

                        .pin_txt_til {
                            width: 100%;
                            font-size: 16px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #242F57;
                            margin-bottom: 46px;
                        }

                        .pin_txt_intro {
                            width: 100%;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636E95;
                        }

                        .pin_num_con {
                            width: 100%;
                            display: flex;
                            align-items: baseline;

                            .pin_num {
                                font-size: 30px;
                                font-family: HelveticaNeue-Medium, HelveticaNeue;
                                font-weight: 500;
                                color: #2373FF;
                            }

                            .pin_txt {
                                margin-left: 4px;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #636E95;
                            }
                        }
                    }

                    .pin_container {
                        width: 140px;
                        height: 140px;
                    }
                }
            }
        }

        .active-box {
            .media-container {
               margin-top: 24px;
               position: relative;

               .media-btns {
                   position: absolute;
                   right: 24px;
                   top: 36px;

                   >button {
                       &:first-child {
                           margin-right: 10px;
                       }
                   }
               }
            }
        }
    }
</style>
