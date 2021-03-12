<template>
    <div class="dx_Item_container">
        <div :class="['test_container1', { width: !onlyMap }]">
            <div class="mapContainer">
                <div class="area_timer_choice_container">
                    <div class="choice_btn_area">
                        <div class="choice_btn_top" :class="{'activeBtn' : currentBtn == 1}" @click="choiceat(1)">位置区域</div>
                        <div class="choice_btn_bom" :class="{'activeBtn' : currentBtn == 2}" @click="choiceat(2)">研究时段</div>
                    </div>
                    <div class="choice_content_container">
                        <div class="timer12" v-if="ifShowTime">
                            <div class="timer12_top">
                                <div class="timeitem">06:00</div>
                                <div class="timeitem">08:00</div>
                                <div class="timeitem">10:00</div>
                                <div class="timeitem">12:00</div>
                                <div class="timeitem">14:00</div>
                                <div class="timeitem">16:00</div>
                                <div class="timeitem">18:00</div>
                                <div class="timeitem">20:00</div>
                                <div class="timeitem">22:00</div>
                                <div class="timeitem">24:00</div>
                            </div>
                            <div class="timer12_bom">
                                <div class="cirle_dian" :class="{'activeDian' : current == 6}" @click="clickTime(6)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 8}" @click="clickTime(8)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 10}" @click="clickTime(10)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 12}" @click="clickTime(12)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 14}" @click="clickTime(14)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 16}" @click="clickTime(16)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 18}" @click="clickTime(18)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 20}" @click="clickTime(20)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 22}" @click="clickTime(22)"></div>
                                <div class="cirle_dian" :class="{'activeDian' : current == 24}" @click="clickTime(24)"></div>
                            </div>
                        </div>
                        <div class="timer121" v-else>
                            <div class="timer121_item" :class="{'activetimer' : timerIdx == index}" v-for="(item,index) in districtList" :key="index" @click="clickTimeItem(index,item)">{{item}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="['conditions_container-box', { width: !onlyMap }]">
            <div :class="['conditions_container', { 'conditions_container_row': onlyMap }]">
                <div class="conditions_lef">
                    <div class="condition_label">条件筛选</div>
                    <div class="condition_item"><span>{{condiObj.label1}}</span>
                        <!--<i class="iconicon_close iconfont2" style="font-size: 12px;"></i>-->
                    </div>
                    <div class="condition_item"><span>{{condiObj.label2}}</span>
                        <!--<i class="iconicon_close iconfont2" style="font-size: 12px;"></i>-->
                    </div>
                    <div class="condition_item"><span>{{condiObj.label3}}</span>
                        <!--<i class="iconicon_close iconfont2" style="font-size: 12px;"></i>-->
                    </div>
                    <div class="condition_item"><span>{{condiObj.label4}}</span>
                        <!--<i class="iconicon_close iconfont2" style="font-size: 12px;"></i>-->
                    </div>
                </div>
                <div class="conditions_rig" @click="expandCond">更多筛选条件</div>
            </div>
        </div>

        <div class="condition_content" v-if="ifShowCon">
            <div class="condition_lef">
                <img :src="conditImg" alt="" srcset="" class="conditImg">
            </div>
            <div class="condition_rig">
                <div class="con_item_container">
                    <div class="con_item_label">年龄</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="ninlinItem" v-for="(item,index) in nilinList" :key="index" @click="nianlinClick(index,'ninlinItem')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">性别</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="xingbieItem" v-for="(item,index) in sexList" :key="index" @click="nianlinClick(index,'xingbieItem')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">有小孩</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="hasChild" v-for="(item,index) in hasChildList" :key="index" @click="nianlinClick(index,'hasChild')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">消费水平</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="xflevel" v-for="(item,index) in xiaofeiList" :key="index" @click="nianlinClick(index,'xflevel')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">婚姻</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="huny" v-for="(item,index) in huyList" :key="index" @click="nianlinClick(index,'huny')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container">
                    <div class="con_item_label">职业</div>
                    <div class="con_item_con">
                        <div class="con_item" ref="jobdom" v-for="(item,index) in jobList" :key="index" @click="nianlinClick(index,'jobdom')">{{item}}</div>
                    </div>
                </div>
                <div class="con_item_container queding_container">
                    <div class="quedingbtn" @click="submit">确定</div>
                </div>
            </div>
        </div>
        <div :class="['test_container', { row: onlyMap }]">
            <div class="mapContainer" id="mapContainer">
            </div>
            <div v-if="!onlyMap" class="per_info_container">
                <div class="yhdx_title">
                    <div class="yhdx_title_top">
                        用户动线分析结果
                    </div>
                    <div class="yhdx_title_bom">
                        2020/12/14
                    </div>
                </div>
                <div class="switch_container">
                    <div class="data_title">数据图表</div>
                    <div class="switch_contianer">
                        <i-switch v-model="switch1"></i-switch>
                    </div>
                    <div class="data_title" style="color: #97A0C3;">智能解读</div>
                </div>

                <div class="nl_card_container">
                    <div class="til_label">
                        用户状态
                        <Poptip popper-class="saas-poptip" placement="right-start">
                            <i class="iconfont iconguanyuline tip-icon"></i>
                            <div slot="content">
                                <p>用户群体主要处于通勤及工作状态，偏好社交娱乐类型的APP，时间段内对出行、外卖餐</p>
                                <p>饮类的生活服务APP需求显著，成为重要触点，情绪偏向紧张和烦躁</p>
                            </div>
                        </Poptip>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">放松</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat1" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">紧张</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat2" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">一般</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat3" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">烦躁</div>
                        <div class="pro"><Progress :percent="rightPanelData.userStatObj.stat4" status="active"></Progress></div>
                    </div>
                </div>

                <div class="chufa_card_container">
                    <div class="til_label">出发地</div>
                    <div class="chufadi_container">
                        <div class="diItem" v-if="rightPanelData.chufaObj.chufa1">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.chufaObj.chufa1}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.chufaObj.chufa2">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.chufaObj.chufa2}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.chufaObj.chufa3">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.chufaObj.chufa3}}</span>
                        </div>
                    </div>
                </div>

                <div class="mudd_container">
                    <div class="til_label">目的地</div>
                    <div class="chufadi_container">
                        <div class="diItem" v-if="rightPanelData.mudiObj.mudi1">
                            <img :src="locaIcon" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.mudiObj.mudi1}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.mudiObj.mudi2">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.mudiObj.mudi2}}</span>
                        </div>
                        <div class="diItem" v-if="rightPanelData.mudiObj.mudi3">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">{{rightPanelData.mudiObj.mudi3}}</span>
                        </div>
                    </div>
                </div>

                <div class="tqfs_container">
                    <div class="til_label">通勤方式</div>
                    <div class="cx_type_container">
                        <div class="cx_item" v-if="rightPanelData.tonqinTypeObj.tqType1">
                            <img :src="rightPanelData.tonqinTypeObj.tqType1Icon" alt="" srcset="" class="cxlogo">
                            <span class="cxtxt">{{rightPanelData.tonqinTypeObj.tqType1}}</span>
                        </div>
                        <div class="cx_item" v-if="rightPanelData.tonqinTypeObj.tqType2">
                            <img :src="drIcon" alt="" srcset="" class="cxlogo">
                            <span class="cxtxt">{{rightPanelData.tonqinTypeObj.tqType2}}</span>
                        </div>
                    </div>
                </div>

                <div class="tqsjylx_container">
                    <div class="til_label">通勤时间与路程</div>
                    <div class="haoshi_container">
                        <img :src="tbIcon" alt="" srcset="" class="timeBiao">
                        <span style="margin-right:16px;">平均耗时</span>
                        <span>{{rightPanelData.tongqinTimeObj.timeN}}分钟</span>
                    </div>
                </div>

                <div class="nl_card_container">
                    <div class="til_label">年龄占比</div>
                    <div class="pro_container">
                        <div class="pro_label">15-25岁</div>
                        <div class="pro"><Progress :percent="30" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">25-35岁</div>
                        <div class="pro"><Progress :percent="30" status="active"></Progress></div>
                    </div>
                    <div class="pro_container">
                        <div class="pro_label">35-45岁</div>
                        <div class="pro"><Progress :percent="20" status="active"></Progress></div>
                    </div>
                </div>

                <div class="sex_card_container">
                    <div class="til_label">性别占比</div>
                    <div class="sex_tu_container">
                        <div class="man"></div>
                        <div class="women"></div>
                    </div>
                    <div class="sex_per_container">
                        <div class="man_per">65%</div>
                        <div class="women_per">35%</div>
                    </div>
                    <div class="sex_per_container">
                        <div class="mansex">男性</div>
                        <div class="womensex">女性</div>
                    </div>
                </div>

            </div>
            <div class="yhxw_container">
                <div class="yhxw_title">用户行为</div>
                <div class="bqitm_container">
                    <div class="bqitm" v-for="(it, i) in bqitmList" :key="i">
                        <div class="bqitm_lef" :style="`color: ${colorConfig[it.name]}`">{{it.name}}</div>
                        <div class="bqitm_rig">
                            <img v-for="(item,index) in it.icons" :src="item.icon" :key="index" alt="" class="bqimg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const allBqitm = {
    xhs: {
      icon: require("../../assets/img/yhhx/xhs.png")
    },
    ks: {
      icon: require("../../assets/img/yhhx/ks.png")
    },
    wb: {
      icon: require("../../assets/img/yhhx/wb.png")
    },
    tt: {
      icon: require("../../assets/img/yhhx/tt.png")
    },
    zhIcon: {
      icon: require("../../assets/img/yhhx/zhIcon.png")
    },
    dyI: {
      icon: require("../../assets/img/yhhx/dyI.png")
    },
    dd: {
      icon: require("../../assets/img/yhhx/dd.jpg")
    },
    dc: {
      icon: require("../../assets/img/yhhx/dc.jpg")
    },
    bx: {
      icon: require("../../assets/img/yhhx/bx.jpeg")
    },
    wx: {
      icon: require("../../assets/img/yhhx/wx.jpeg")
    },
    qq: {
      icon: require("../../assets/img/yhhx/qq.jpg")
    },
    pyq: {
      icon: require("../../assets/img/yhhx/pyq.png")
    },
    mt: {
      icon: require("../../assets/img/yhhx/mt.jpeg")
    },
    elm: {
      icon: require("../../assets/img/yhhx/elm.jpeg")
    },
    dz: {
      icon: require("../../assets/img/yhhx/dz.jpg")
    },
    wy: {
      icon: require("../../assets/img/yhhx/wyIcon.png")
    },
    wzry: {
      icon: require("../../assets/img/yhhx/wzry.jpeg")
    },
    jdqs: {
      icon: require("../../assets/img/yhhx/jdqs.png")
    },
    xxl: {
      icon: require("../../assets/img/yhhx/xxl.jpg")
    },
  }
    export default {
        name: "dxItem",
        props: ['onlyMap'],
        data(){
            return{
                current:8,
                AMap: null,
                switch1:true,
                yhdxImg:require("../../assets/img/yhhx/yhdxImg.png"),
                closeIcon:require("../../assets/img/yhhx/icon_close.png"),
                locaIcon:require("../../assets/img/yhhx/dwIcon.png"),
                dtIcon:require("../../assets/img/yhhx/dtIcon.png"),
                drIcon:require("../../assets/img/yhhx/drIcon.png"),
                tbIcon:require("../../assets/img/yhhx/tbIcon.png"),
                // tbIcon:require("../../assets/img/yhhx/bgImg.png"),
                xhsIcon:require("../../assets/img/yhhx/xhs.png"),
                ksIcon:require("../../assets/img/yhhx/ks.png"),
                dyIcon:require("../../assets/img/yhhx/dyI.png"),
                wbIcon:require("../../assets/img/yhhx/wb.png"),
                ttIcon:require("../../assets/img/yhhx/tt.png"),
                wyIcon:require("../../assets/img/yhhx/wyIcon.png"),
                zhIcon:require("../../assets/img/yhhx/zhIcon.png"),
                bqitmList: [
                {
                  name: '出行',
                  icons: [
                    allBqitm.dd,
                    allBqitm.dc,
                    allBqitm.bx,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.xhs,
                    allBqitm.ks,
                    allBqitm.wb,
                  ]
                }
              ],
                districtList:[
                    '朝阳区','海淀区','丰台区','西城区','东城区','石景山区','昌平区','通州区','顺义区','房山区','门头沟区','大兴区','怀柔区','延庆区','平谷区','密云区'
                ],
                ifShowTime:true,
                timerIdx:0,
                timeType:8,
                currentBtn:2,
                ifShowCon:false,
                conditImg:require("../../assets/img/yhhx/conditImg.png"),
                nilinList:['18-24','35-44','45+'],
                sexList:['男','女'],
                hasChildList:['妈妈','母婴','二胎','中学生家长','0-3岁小孩父母','3-6岁小孩父母','孕期','备孕','小学生家长'],
                xiaofeiList:['高','中','低'],
                huyList:['约会','相亲','已婚','未婚'],
                jobList:['网约车司机','广告','大学生','医生','金融','IT','程序员','教师货车司机'],
                condiObj:{
                    label1:'开车',
                    label2:'25-35岁',
                    label3:'消费高',
                    label4:'已婚',
                },
                rightPanelData:{
                    userStatObj:{
                        stat1:16,
                        stat2:26,
                        stat3:39,
                        stat4:19
                    },
                    chufaObj:{
                        chufa1:'五道口',
                        chufa2:'西二旗',
                        chufa3:'上地'
                    },
                    mudiObj:{
                        mudi1:'中关村',
                        mudi2:'软件园',
                        mudi3:'龙泽'
                    },
                    tonqinTypeObj:{
                        tqType1:'地铁',
                        tqType1Icon:require("../../assets/img/yhhx/dtIcon.png"),
                        tqType2:'开车',
                    },
                    tongqinTimeObj:{
                        timeN:30
                    }
                },
                colorConfig: {
                  新闻: '#017AFF',
                  视频: '#5AC8FA',
                  娱乐: '#FF9502',
                  交流: '#a49dfa',
                  出行: '#CECE7E',
                  餐饮: '#8AE6C7',
                }
            }
        },
        mounted(){
            var path = [
                [116.321385,39.967151],
                [116.323101,39.95794],
                [116.325161,39.94307],
                [116.326534,39.938859],
                [116.37254,39.93978],
                [116.373913,39.899757],
                [116.513989,39.906605]
            ];
            var path1 = [
                [116.295124,39.932978],
                [116.433998,39.933768],
                [116.489959,39.933637],
                [116.490303,39.887024],
            ];
            var path2 = [
                [116.416903,39.969085],
                [116.418791,39.952349],
                [116.416388,39.950801],
                [116.416388,39.950801],
                [116.418019,39.91164],
                [116.418362,39.900843]
            ];
            var cir1 = [116.402394,39.937182];
            this.initMap(path,path1,path2,cir1,'西城区');
        },
        methods:{
            submit(){
                this.ifShowCon = false;
                this.condiObj = {
                    label1:'中学生家长',
                    label2:'低',
                    label3:'已婚',
                    label4:'广告',
                };
            },
            nianlinClick(arg,art){
                console.log(art)
                var itemDom = this.$refs[art] || [];
                for(var i=0;i<itemDom.length;i++){
                    if(i==arg){
                        itemDom[i].style="background: #2373FF;color: #FFFFFF;";
                    }
                    else{  //如果需要多选去掉else
                        itemDom[i].style="color: #636E95;background: none;";
                    }
                }
                console.log(itemDom,'itemDom')
            },
            expandCond(){
                this.ifShowCon = true;
            },
            clickTimeItem(arg,val){
                this.timerIdx = arg;
                var path = [
                    [116.321385,39.967151],
                    [116.323101,39.95794],
                    [116.325161,39.94307],
                    [116.326534,39.938859],
                    [116.37254,39.93978],
                    [116.373913,39.899757],
                    [116.513989,39.906605]
                ];
                var path1 = [
                    [116.295124,39.932978],
                    [116.433998,39.933768],
                    [116.489959,39.933637],
                    [116.490303,39.887024],
                ];
                var path2 = [
                    [116.416903,39.969085],
                    [116.418791,39.952349],
                    [116.416388,39.950801],
                    [116.416388,39.950801],
                    [116.418019,39.91164],
                    [116.418362,39.900843]
                ];
                var cir1 = [116.402394,39.937182];
                this.initMap(path,path1,path2,cir1,val);
            },
            choiceat(arg){
                this.currentBtn = arg;
                if(arg == 2){
                    this.ifShowTime = true;
                }
                else{
                    this.ifShowTime = false;
                    var path = [
                        [116.321385,39.967151],
                        [116.323101,39.95794],
                        [116.325161,39.94307],
                        [116.326534,39.938859],
                        [116.37254,39.93978],
                        [116.373913,39.899757],
                        [116.513989,39.906605]
                    ];
                    var path1 = [
                        [116.295124,39.932978],
                        [116.433998,39.933768],
                        [116.489959,39.933637],
                        [116.490303,39.887024],
                    ];
                    var path2 = [
                        [116.416903,39.969085],
                        [116.418791,39.952349],
                        [116.416388,39.950801],
                        [116.416388,39.950801],
                        [116.418019,39.91164],
                        [116.418362,39.900843]
                    ];
                    var cir1 = [116.402394,39.937182];
                    this.initMap(path,path1,path2,cir1,'朝阳区');
                }
            },
            clickTime(arg){
            this.current = arg;
            if(arg == 6 || arg == 8 || arg == 10 || arg == 22 || arg == 24){
                var path = [
                    [116.321385,39.967151],
                    [116.323101,39.95794],
                    [116.325161,39.94307],
                    [116.326534,39.938859],
                    [116.37254,39.93978],
                    [116.373913,39.899757],
                    [116.513989,39.906605]
                ];
                var path1 = [
                    [116.295124,39.932978],
                    [116.433998,39.933768],
                    [116.489959,39.933637],
                    [116.490303,39.887024],
                ];
                var path2 = [
                    [116.416903,39.969085],
                    [116.418791,39.952349],
                    [116.416388,39.950801],
                    [116.416388,39.950801],
                    [116.418019,39.91164],
                    [116.418362,39.900843]
                ];
                var cir1 = [116.402394,39.937182];
                this.initMap(path,path1,path2,cir1,'西城区');
                this.rightPanelData = {
                    userStatObj:{
                        stat1:16,
                        stat2:26,
                        stat3:39,
                        stat4:19
                    },
                    chufaObj:{
                        chufa1:'五道口',
                        chufa2:'西二旗',
                        chufa3:'上地'
                    },
                    mudiObj:{
                        mudi1:'中关村',
                        mudi2:'软件园',
                        mudi3:'龙泽'
                    },
                    tonqinTypeObj:{
                        tqType1:'地铁',
                        tqType1Icon:require("../../assets/img/yhhx/dtIcon.png"),
                        tqType2:'开车',
                    },
                    tongqinTimeObj:{
                        timeN:30
                    }
                };
            }
            else if(arg == 12 || arg == 14 || arg == 16){
                // this.timeType = arg;
                var path = [
                    [116.288917,39.965932],
                    [116.294281,39.958531],
                    [116.294925,39.957117],
                    [116.294538,39.952445],
                    [116.293809,39.948037],
                    [116.295311,39.933329]
                ];
                var path1 = [
                [116.275742,39.954518],
                [116.274883,39.924312],
                [116.355993,39.923719],
                // [116.384391,39.889724],
                // [116.41898,39.892688]
                ];
                var path2 = [
                [116.247761,39.947543],
                [116.27454,39.946754],
                [116.285612,39.946293],
                [116.309902,39.94274],
                [116.317799,39.939252],
                [116.339085,39.938331]
                ];
                var cir1 = [116.274969,39.92418];
                this.initMap(path,path1,path2,cir1,'海淀区');
                this.rightPanelData = {
                    userStatObj:{
                        stat1:37,
                        stat2:36,
                        stat3:22,
                        stat4:5
                    },
                    chufaObj:{
                        chufa1:'中关村',
                        chufa2:'软件园',
                        chufa3:'龙泽'
                    },
                    mudiObj:{
                        mudi1:'周边'
                    },
                    tonqinTypeObj:{
                        tqType1:'步行',
                        tqType1Icon:require("../../assets/img/yhhx/buxIcon.png"),
                    },
                    tongqinTimeObj:{
                        timeN:10
                    }
                };
            }
            else if(arg == 18 || arg == 20){
                var path = [
                    [116.320984,39.907571],
                    [116.374027,39.907374],
                    [116.434623,39.908691],
                    [116.433679,39.92054]
                ];
                var path1 = [
                    [116.372546,39.940415],
                    [116.374434,39.899602],
                    [116.384133,39.900129],
                    [116.384391,39.889724],
                    [116.41898,39.892688]
                ];
                var path2 = [
                    [116.416903,39.969085],
                    [116.418791,39.952349],
                    [116.416388,39.950801],
                    [116.416388,39.950801],
                    [116.418019,39.91164],
                    [116.418362,39.900843]
                ];
                var cir1 = [116.401235,39.907835];
                this.initMap(path,path1,path2,cir1,'西城区');
                this.rightPanelData = {
                    userStatObj:{
                        stat1:25,
                        stat2:28,
                        stat3:27,
                        stat4:20
                    },
                    chufaObj:{
                        chufa1:'中关村',
                        chufa2:'软件园',
                        chufa3:'龙泽'
                    },
                    mudiObj:{
                        mudi1:'五道口',
                        mudi2:'西二旗',
                        mudi3:'上地'
                    },
                    tonqinTypeObj:{
                        tqType1:'地铁',
                        tqType1Icon:require("../../assets/img/yhhx/dtIcon.png"),
                        tqType2:'开车',
                    },
                    tongqinTimeObj:{
                        timeN:30
                    }
                };
            }
              this.changeBqitm(arg)
            },
            initMap(p,p1,p2,c1,area){
            var that = this;
            var district = null;
            var polygons=[];
            var map = new AMap.Map('mapContainer', {
                resizeEnable: true, //是否监控地图容器尺寸变化
                zoom:11, //初始化地图层级
                center:[116.372883,39.933949],
                mapStyle: "amap://styles/whitesmoke"
            });

            //加载行政区划插件
            if(!district){
                //实例化DistrictSearch
                var opts = {
                    subdistrict: 0,   //获取边界不需要返回下级行政区
                    extensions: 'all',  //返回行政区边界坐标组等具体信息
                    level: 'district'  //查询行政级别为 市
                };
                district = new AMap.DistrictSearch(opts);
            }
            district.search(area, function(status, result) {
                map.remove(polygons)//清除上次结果
                polygons = [];
                var bounds = result.districtList[0].boundaries;
                if (bounds) {
                    for (var i = 0, l = bounds.length; i < l; i++) {
                        //生成行政区划polygon
                        var polygon = new AMap.Polygon({
                            strokeWeight: 1,
                            path: bounds[i],
                            fillOpacity: 0.4,
                            fillColor: '#80d8ff',
                            strokeColor: '#0091ea'
                        });
                        polygons.push(polygon);
                    }
                }
                map.add(polygons);
                map.setFitView(polygons);//视口自适应
            });

            var circle = new AMap.Circle({
                center: c1,
                radius: 1200, //半径
                borderWeight: 3,
                strokeColor: "#FF33FF",
                strokeOpacity: 1,
                strokeWeight: 6,
                strokeOpacity: 0.2,
                fillOpacity: 0.4,
                strokeStyle: 'dashed',
                strokeDasharray: [10, 10],
                // 线样式还支持 'dashed'
                fillColor: '#1791fc',
                zIndex: 50,
            })
            circle.setMap(map)

            var polyline = new AMap.Polyline({
                path: p,
                isOutline: true,
                outlineColor: '#ffeeff',
                borderWeight: 3,
                strokeColor: "#3366FF",
                strokeOpacity: 1,
                strokeWeight: 6,
                // 折线样式还支持 'dashed'
                strokeStyle: "solid",
                // strokeStyle是dashed时有效
                strokeDasharray: [10, 5],
                lineJoin: 'round',
                lineCap: 'round',
                zIndex: 50,
            });
            var polyline1 = new AMap.Polyline({
                path: p1,
                isOutline: true,
                // outlineColor: '#FF8800',
                outlineColor: '#ffeeff',
                borderWeight: 1,
                strokeColor: "#3366FF",
                // strokeColor: "#FF8800",
                strokeOpacity: 1,
                strokeWeight: 4,
                // 折线样式还支持 'dashed'
                strokeStyle: "solid",
                // strokeStyle是dashed时有效
                strokeDasharray: [10, 5],
                lineJoin: 'round',
                lineCap: 'round',
                zIndex: 50,
            })
            var polyline2 = new AMap.Polyline({
                path: p2,
                isOutline: true,
                // outlineColor: '#F383FF',
                outlineColor: '#ffeeff',
                 borderWeight: 1,
                strokeColor: "#3366FF",
                // strokeColor: "#F383FF",
                strokeOpacity: 1,
                strokeWeight: 4,
                // 折线样式还支持 'dashed'
                strokeStyle: "solid",
                // strokeStyle是dashed时有效
                strokeDasharray: [10, 5],
                lineJoin: 'round',
                lineCap: 'round',
                zIndex: 50,
            })
            polyline.setMap(map)
            polyline1.setMap(map)
            polyline2.setMap(map)
              const selectedOptions = {
                outlineColor: '#FF8800',
                strokeColor: "#FF8800",
              }
              const normalOptions = {
                outlineColor: '#ffeeff',
                strokeColor: "#3366FF",
              }
            polyline.on('click', function(event) {
              polyline.setOptions(selectedOptions)
              polyline1.setOptions(normalOptions)
              polyline2.setOptions(normalOptions)
              that.bqitmList = [
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.xhs,
                    allBqitm.wb,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.ks,
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },
                {
                  name: '视频',
                  icons: [
                    allBqitm.dyI,
                    allBqitm.wb,
                    allBqitm.ks,
                  ]
                }
              ]
            })
            polyline1.on('click', function(event) {
              polyline1.setOptions(selectedOptions)
              polyline.setOptions(normalOptions)
              polyline2.setOptions(normalOptions)
              that.bqitmList = [
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.ks,
                    allBqitm.xhs,
                    allBqitm.wb,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.ks,
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },
                {
                  name: '视频',
                  icons: [
                    allBqitm.dyI,
                    allBqitm.wb,
                  ]
                }
              ]
            })
            polyline2.on('click', function(event) {
              polyline2.setOptions(selectedOptions)
              polyline.setOptions(normalOptions)
              polyline1.setOptions(normalOptions)
              that.bqitmList = [
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.ks,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.ks,
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },
                {
                  name: '视频',
                  icons: [
                    allBqitm.dyI,
                    allBqitm.wb,
                    allBqitm.xhs,
                    allBqitm.wb,
                  ]
                }
              ]
            })
            },
            // 改变用户行为
            changeBqitm(time) {
            const morn = [6, 8, 10]
            const noon = [12, 14, 16]
            const night = [18, 20, 22, 24]
            if (morn.includes(time)) {
              this.bqitmList = [
                {
                  name: '出行',
                  icons: [
                    allBqitm.dd,
                    allBqitm.dc,
                    allBqitm.bx,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.xhs,
                    allBqitm.ks,
                    allBqitm.wb,
                  ]
                }
              ]
            } else if (noon.includes(time)) {
              this.bqitmList = [
                {
                  name: '交流',
                  icons: [
                    allBqitm.wx,
                    allBqitm.qq,
                    allBqitm.pyq,
                  ]
                },
                {
                  name: '餐饮',
                  icons: [
                    allBqitm.elm,
                    allBqitm.mt,
                    allBqitm.dz,
                  ],
                },
                {
                  name: '视频',
                  icons: [
                    allBqitm.dyI,
                    allBqitm.wb,
                    allBqitm.ks,
                  ]
                }
              ]
            } else if (night.includes(time)) {
              this.bqitmList = [
                {
                  name: '娱乐',
                  icons: [
                    allBqitm.wzry,
                    allBqitm.jdqs,
                    allBqitm.xxl,
                  ]
                },
                {
                  name: '视频',
                  icons: [
                    allBqitm.dyI,
                    allBqitm.wb,
                    allBqitm.ks,
                  ]
                },
                {
                  name: '新闻',
                  icons: [
                    allBqitm.tt,
                    allBqitm.wy,
                    allBqitm.zhIcon,
                  ],
                },

              ]
            }
          }
        }
    }
</script>

<style lang="scss" scoped>
.dx_Item_container{
    width: 100%;
    position: relative;
    .test_container1.width{
        width: 792px;
    }
    .test_container1{
        height: 80px;
        display: flex;
        align-items: center;
        // margin-bottom: -119px;
        margin-top: 19px;
        position: absolute;
        /*margin-left: 20px;*/
        right: 20px;
        left: 20px;
        .mapContainer{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            .area_timer_choice_container{
                width: 100%;
                height: 96px;
                display: flex;
                align-items: center;
                background: #FFFFFF;
                box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
                border-radius: 4px;
                border: 1px solid #EAEDF7;
                z-index: 999;
                .choice_btn_area{
                    width: 88px;
                    height: 100%;
                    border-right: 1px solid #EAEDF7;
                    .choice_btn_top,.choice_btn_bom{
                        width: 100%;
                        height: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        &:hover{
                            cursor: pointer;
                        }
                    }
                    .activeBtn{
                        color: #2373FF;
                    }
                }
                .choice_content_container{
                    flex: 1;
                    height: 100%;
                    .timer12{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 0 16px;
                        box-sizing: border-box;
                        .timer12_top{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                        .timer12_bom{
                            width: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            background-color: #F4F7FC;
                            margin-top: 4px;
                            border-radius: 10px;
                            .cirle_dian{
                                width: 20px;
                                height: 20px;
                                border-radius: 50%;
                                background: #C6CBDE;
                                &:hover{
                                 cursor: pointer;
                                }
                            }
                            .activeDian{
                                background-color: #2373FF;
                                box-shadow: 0px 2px 4px 0px #C6CBDE;
                                border: 2px solid #FFFFFF;
                            }
                        }
                    }
                    .timer121{
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        padding: 6px 16px;
                        box-sizing: border-box;
                        .timer121_item{
                            width: 62px;
                            height: 24px;
                            background: #FFFFFF;
                            border-radius: 4px;
                            border: 1px solid #EAEDF7;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-right: 12px;
                            cursor: pointer;
                        }
                        .activetimer{
                            border: 1px solid #2373FF;
                            color: #2373FF;
                        }
                    }
                }
            }
        }
        .per_info_container{
            width: 270px;
            height: 100%;
        }
    }
    .conditions_container-box.width{
        width: 792px;
    }
    .conditions_container-box{
        position: absolute;
        z-index: 999;
        top: 115px;
        display: flex;
        left: 20px;
        right: 20px
    }
    .conditions_container{
        flex: 1;
        height: 48px;
        background: #F4F7FC;
        border-radius: 0px 0px 4px 4px;
        padding: 15px 6px;
        padding-right: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .conditions_lef{
            height: 100%;
            display: flex;
            align-items: center;
            .condition_label,.condition_item{
                width: 75px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 12px;
            }
            .condition_label{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
            }
            .condition_item{
                width: 91px;
                height: 24px;
                background: #FFFFFF;
                border-radius: 4px;
                border: 1px solid #EAEDF7;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .conditions_rig{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2373FF;
        }
        .conditions_rig:hover{
            cursor: pointer;
        }
    }
    .condition_content{
        position: absolute;
        left: 1.9%;
        top: 168px;
        width: 787.06px;
        z-index: 1000;
        height: 557px;
        background: #FFF;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        border: 1px solid #EAEDF7;
        display: flex;
        align-items: center;
        .condition_lef{
            width: 186px;
            .conditImg{
                display: block;
                width: 100%;
            }
        }
        .condition_rig{
            flex: 1;
            height: 100%;
            padding: 55px 22px;
            box-sizing: border-box;
            .con_item_container{
                width: 100%;
                display: flex;
                align-items: flex-start;
                margin-bottom: 8px;
                .con_item_label{
                    width: 106px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                }
                .con_item_con{
                    flex: 1;
                    display: flex;
                    flex-wrap: wrap;
                    .con_item{
                        padding: 2px 9px;
                        margin-bottom: 16px;
                        border-radius: 8px;
                        margin-right: 43px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        background-color: none;
                    }
                    .con_item:hover{cursor: pointer;}
                }
            }
            .queding_container{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 30px;
                .quedingbtn{
                    padding: 4px 20px;
                    border-radius: 8px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    background: rgb(35, 115, 255);
                    color: rgb(255, 255, 255);
                }
                .quedingbtn:hover{
                    cursor: pointer;
                }
            }
        }

    }
    .mianban_container{
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-63%,-50%);
        width: 200px;
        height: 300px;
        z-index: 999;
        .quyResult{
            display: block;
            width: 100%;
        }
    }
    .test_container{
        /*margin-top: 20px;*/
        width: 100%;
        height: 600px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        position: relative;
        .mapContainer{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            .timer12{
            width: 95%;
            height: 80px;
            margin-top: 15px;
            background-color: yellowgreen;
            z-index: 999;
            padding: 10px;
            box-sizing: border-box;
            .timer12_top{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .timeitem{

                }
            }
            .timer12_bom{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #c6cbde;
                margin-top: 4px;
                border-radius: 10px;
                .cirle_dian{
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: #a49dfa;
                }
                .activeDian{
                background-color: brown;
                }
            }
            }
        }
        .per_info_container{
            width: 270px;
            height: 100%;
            padding:13px 12px;
            box-sizing: border-box;
            background: #EAEDF7;
            overflow-y: scroll;
            .yhdx_title{
                width: 100%;
                height: 72px;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                padding-left: 16px;
                box-sizing: border-box;
                background-image: url("../../assets/img/yhhx/river.png");
                background-size: cover;
                .yhdx_title_top{
                    width: 100%;
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FFFFFF;
                }
                .yhdx_title_bom{
                    width: 100%;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }
            .switch_container{
                width: 100%;
                padding: 12px 20px;
                box-sizing: border-box;
                border-bottom: 1px solid #fdfdfd;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
            }
            .nl_card_container{
                width: 100%;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
                padding: 12px 14px;
                box-sizing: border-box;
                margin-bottom: 8px;
                .til_label{
                    width: 100%;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    margin-bottom: 10px;
                }
                .pro_container{
                    width: 100%;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    .pro_label{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #97A0C3;
                        margin-right: 12px;
                    }
                    .pro{
                        flex: 1;
                    }
                }
            }

            .sex_card_container{
                width: 100%;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
                padding: 12px 14px;
                box-sizing: border-box;
                margin-bottom: 8px;
                .til_label{
                    width: 100%;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    margin-bottom: 10px;
                }
                .sex_tu_container{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 4px;
                    .man{
                        width: 64%;
                        height: 16px;
                        background: #2373FF;
                        border-radius: 2px;
                    }
                    .women{
                        width: 34%;
                        height: 16px;
                        background: #FE763D;
                        border-radius: 2px;
                    }
                }
                .sex_per_container{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    .man_per{
                        color: #2373FF;
                    }
                    .women_per{
                        color: #FE763D;
                    }
                    .mansex,.womensex{
                        font-size: 12px;
                        font-weight: 400;
                        color: #97A0C3;
                    }
                }
            }

            .chufa_card_container{
                width: 100%;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
                padding: 12px 14px;
                box-sizing: border-box;
                margin-bottom: 8px;
                .til_label{
                    width: 100%;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    margin-bottom: 10px;
                }
                .chufadi_container{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 8px;
                    .diItem{
                        width: 32%;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        padding: 2px 7px;
                        box-sizing: border-box;
                        background: #F4F7FC;
                        border-radius: 4px;
                        .addressIcon{
                        display: block;
                        width: 11px;
                        margin-right: 6px;
                        }
                        .addresstxt{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        }
                    }
                }
            }

            .mudd_container{
                width: 100%;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
                padding: 12px 14px;
                box-sizing: border-box;
                margin-bottom: 8px;
                .til_label{
                    width: 100%;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    margin-bottom: 10px;
                }
                .chufadi_container{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: 8px;
                    .diItem{
                        width: 32%;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        padding: 2px 7px;
                        box-sizing: border-box;
                        background: #F4F7FC;
                        border-radius: 4px;
                        .addressIcon{
                        display: block;
                        width: 11px;
                        margin-right: 6px;
                        }
                        .addresstxt{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        }
                    }
                }
            }

            .tqfs_container{
                width: 100%;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
                padding: 12px 14px;
                box-sizing: border-box;
                margin-bottom: 8px;
                .til_label{
                    width: 100%;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    margin-bottom: 10px;
                }
                .cx_type_container{
                    width: 100%;
                    margin-top: 16px;
                    display: flex;
                    align-items: center;
                    .cx_item{
                        display: flex;
                        align-items: center;
                        margin-right: 25px;
                        .cxlogo{
                        display: block;
                        width: 16px;
                        margin-right: 4px;
                        }
                        .cxtxt{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        }
                    }
                }
            }

            .tqsjylx_container{
                width: 100%;
                background: rgba(255, 255, 255, 0.8);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
                padding: 12px 14px;
                box-sizing: border-box;
                margin-bottom: 8px;
                .til_label{
                    width: 100%;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    margin-bottom: 10px;
                }
                .haoshi_container{
                    margin-top: 17px;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    .timeBiao{
                        display: block;
                        width: 16px;
                        height: 16px;
                        margin-right: 4px;
                    }
                }
            }
        }
        .yhxw_container{
            position: absolute;
            width: 700px;
            height: 139px;
            background-image: url(/img/bgImg.a22ae601.png);
            bottom: -1px;
            left: 35px;
            background-size: cover;
            z-index: 999;
            .yhxw_title{
                position: absolute;
                top: 18px;
                left: 25px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #636E95;
            }
            .bqitm_container{
                position: absolute;
                top: 55px;
                left: 25px;
                min-width: 400px;
                height: 60px;
                display: flex;
                align-items: center;
                .bqitm{
                    width: 165px;
                    height: 100%;
                    background: #FFFFFF;
                    border-radius: 8px;
                    margin-right: 16px;
                    padding: 16px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    .bqitm_lef{
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #FF9502;
                    }
                    .bqitm_rig{
                        display: flex;
                        .bqimg{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
    .test_container.row{
      height: 442px;
    }
}
</style>
