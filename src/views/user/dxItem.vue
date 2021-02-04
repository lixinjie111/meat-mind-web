<template>
    <div class="dx_Item_container">
        <div class="test_container1">
            <div class="mapContainer">
            <div class="timer12">
                <div class="timer12_top">
                <div class="timeitem">00:00</div>
                <div class="timeitem">02:00</div>
                <div class="timeitem">04:00</div>
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
                <div class="cirle_dian" :class="{'activeDian' : current == 1}" @click="clickTime(1)"></div>
                <div class="cirle_dian" :class="{'activeDian' : current == 2}" @click="clickTime(2)"></div>
                <div class="cirle_dian" :class="{'activeDian' : current == 4}" @click="clickTime(4)"></div>
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
            </div>
            <div class="per_info_container"></div>
        </div>
        <div class="test_container">
            <div class="mapContainer" id="mapContainer">
            </div>
            <div class="per_info_container">
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

                <div class="chufa_card_container">
                    <div class="til_label">出发地</div>
                    <div class="chufadi_container">
                        <div class="diItem">
                        <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                        <span class="addresstxt">五道口</span>
                        </div>
                        <div class="diItem">
                        <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                        <span class="addresstxt">西二旗</span>
                        </div>
                        <div class="diItem">
                        <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                        <span class="addresstxt">上地</span>
                        </div>
                    </div>
                </div>

                <div class="mudd_container">
                    <div class="til_label">目的地</div>
                    <div class="chufadi_container">
                        <div class="diItem">
                            <img :src="locaIcon" srcset="" class="addressIcon">
                            <span class="addresstxt">中关村</span>
                        </div>
                        <div class="diItem">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">软件园</span>
                        </div>
                        <div class="diItem">
                            <img :src="locaIcon" alt="" srcset="" class="addressIcon">
                            <span class="addresstxt">龙泽</span>
                        </div>
                    </div>
                </div>

                <div class="tqfs_container">
                    <div class="til_label">通勤方式</div>
                    <div class="cx_type_container">
                        <div class="cx_item">
                            <img :src="dtIcon" alt="" srcset="" class="cxlogo">
                            <span class="cxtxt">地铁</span>
                        </div>
                        <div class="cx_item">
                            <img :src="drIcon" alt="" srcset="" class="cxlogo">
                            <span class="cxtxt">开车</span>
                        </div>
                    </div>
                </div>

                <div class="tqsjylx_container">
                    <div class="til_label">通勤时间与路程</div>
                    <div class="haoshi_container">
                        <img :src="tbIcon" alt="" srcset="" class="timeBiao">
                        <span style="margin-right:16px;">平均耗时</span>
                        <span>30分钟</span>
                    </div>
                </div>

            </div>
            <div class="yhxw_container">
                <div class="yhxw_title">用户行为</div>
                <div class="bqitm_container">
                    <div class="bqitm">
                        <div class="bqitm_lef">娱乐</div>
                        <div class="bqitm_rig">
                            <img v-for="(item,index) in bqitmList.yl" :src="item.icon" :key="index" alt="" class="bqimg">
                        </div>
                    </div>
                    <div class="bqitm">
                        <div class="bqitm_lef" style="color: #017AFF;">新闻</div>
                        <div class="bqitm_rig">
                            <img v-for="(item,index) in bqitmList.xw" :src="item.icon" :key="index" alt="" class="bqimg">
                        </div>
                    </div>
                    <div class="bqitm">
                        <div class="bqitm_lef" style="color: #5AC8FA;">视频</div>
                        <div class="bqitm_rig">
                            <img v-for="(item,index) in bqitmList.sp" :src="item.icon" :key="index" alt="" class="bqimg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dxItem",
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
                bqitmList:{
                    yl:[
                        {
                            icon:require("../../assets/img/yhhx/xhs.png")
                        },
                        {
                            icon:require("../../assets/img/yhhx/ks.png")
                        },
                        {
                            icon:require("../../assets/img/yhhx/wb.png")
                        }
                    ],
                    xw:[
                        {
                            icon:require("../../assets/img/yhhx/tt.png")
                        },
                        {
                            icon:require("../../assets/img/yhhx/wyIcon.png")
                        },
                        {
                            icon:require("../../assets/img/yhhx/zhIcon.png")
                        }
                    ],
                    sp:[
                        {
                            icon:require("../../assets/img/yhhx/dyI.png"),
                        },
                        {
                            icon:require("../../assets/img/yhhx/wb.png")
                        },
                        {
                            icon:require("../../assets/img/yhhx/ks.png")
                        }
                    ]
                }
            }
        },
        mounted(){
            var path = [
                [116.294134,39.958747],
                [116.295593,39.947957],
                [116.296881,39.93236],
                [116.310356,39.932426],
                [116.310013,39.924265],
                [116.355932,39.923606],
                [116.355847,39.932295],
                [116.433952,39.933874],
                [116.433952,39.933874],
                [116.489751,39.93361]
            ];
            var path1 = [
            [116.354029,39.967758],
            [116.357291,39.944046],
            [116.355402,39.940888],
            [116.356776,39.907845],
            [116.349222,39.896783],
            [116.348879,39.873073]
            ];
            var path2 = [
            [116.416903,39.969085],
            [116.418791,39.952349],
            [116.416388,39.950801],
            [116.416388,39.950801],
            [116.418019,39.91164],
            [116.418362,39.900843]
            ];
            var cir1 = [116.310356,39.932426];
            var cir2 = [116.433529,39.941237];
            this.initMap(path,path1,path2,cir1,cir2);
        },
        methods:{
            clickTime(arg){
            this.current = arg;
            if(arg == 8){
                var path = [
                    [116.294134,39.958747],
                    [116.295593,39.947957],
                    [116.296881,39.93236],
                    [116.310356,39.932426],
                    [116.310013,39.924265],
                    [116.355932,39.923606],
                    [116.355847,39.932295],
                    [116.433952,39.933874],
                    [116.433952,39.933874],
                    [116.489751,39.93361]
                ];
                var path1 = [
                [116.354029,39.967758],
                [116.357291,39.944046],
                [116.355402,39.940888],
                [116.356776,39.907845],
                [116.349222,39.896783],
                [116.348879,39.873073]
                ];
                var path2 = [
                [116.416903,39.969085],
                [116.418791,39.952349],
                [116.416388,39.950801],
                [116.416388,39.950801],
                [116.418019,39.91164],
                [116.418362,39.900843]
                ];
                var cir1 = [116.310356,39.932426];
                var cir2 = [116.433529,39.941237];
                this.initMap(path,path1,path2,cir1,cir2);
            }
            else if(arg == 18){
                var path = [
                    [116.355294,39.940546],
                    [116.356839,39.907306],
                    [116.434687,39.908425],
                    [116.433829,39.934294],
                    [116.461467,39.933636]
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
                var cir1 = [116.373332,39.924206];
                var cir2 = [116.427341,39.902842];
                this.initMap(path,path1,path2,cir1,cir2);
            }
            },
            initMap(p,p1,p2,c1,c2){
                var that = this;
                var map = new AMap.Map('mapContainer', {
                    resizeEnable: true, //是否监控地图容器尺寸变化
                    zoom:12, //初始化地图层级
                    center:[116.372883,39.933949],
                    mapStyle: "amap://styles/whitesmoke"
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

                var circle1 = new AMap.Circle({
                    center: c2,   //    116.427341,39.902842
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
                circle1.setMap(map)
                // 缩放地图到合适的视野级别
                // map.setFitView([ circle ])
                // map.setFitView([ circle1 ])
                
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
                    outlineColor: '#FF8800',
                    borderWeight: 1,
                    strokeColor: "#FF8800", 
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
                    outlineColor: '#F383FF',
                    borderWeight: 1,
                    strokeColor: "#F383FF", 
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
                // map.setFitView([ polyline ])
                // map.setFitView([ polyline1 ])
                // map.setFitView([ polyline2 ])
                polyline.on('click', function(event) {
                    that.bqitmList = {
                        yl:[
                            {
                                icon:require("../../assets/img/yhhx/xhs.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/wb.png")
                            }
                        ],
                        xw:[
                            {
                                icon:require("../../assets/img/yhhx/ks.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/tt.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/wyIcon.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/zhIcon.png")
                            }
                        ],
                        sp:[
                            {
                                icon:require("../../assets/img/yhhx/dyI.png"),
                            },
                            {
                                icon:require("../../assets/img/yhhx/wb.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/ks.png")
                            }
                        ]
                    }
                })
                polyline1.on('click', function(event) {
                    that.bqitmList = {
                        yl:[
                            {
                                icon:require("../../assets/img/yhhx/ks.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/xhs.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/wb.png")
                            }
                        ],
                        xw:[
                            {
                                icon:require("../../assets/img/yhhx/ks.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/tt.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/wyIcon.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/zhIcon.png")
                            }
                        ],
                        sp:[
                            {
                                icon:require("../../assets/img/yhhx/dyI.png"),
                            },
                            {
                                icon:require("../../assets/img/yhhx/wb.png")
                            }
                        ]
                    }
                })
                polyline2.on('click', function(event) {
                    that.bqitmList = {
                        yl:[
                            {
                                icon:require("../../assets/img/yhhx/ks.png")
                            }
                        ],
                        xw:[
                            {
                                icon:require("../../assets/img/yhhx/ks.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/tt.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/wyIcon.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/zhIcon.png")
                            }
                        ],
                        sp:[
                            {
                                icon:require("../../assets/img/yhhx/dyI.png"),
                            },
                            {
                                icon:require("../../assets/img/yhhx/wb.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/xhs.png")
                            },
                            {
                                icon:require("../../assets/img/yhhx/wb.png")
                            }
                        ]
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
.dx_Item_container{
    width: 100%;
    .test_container1{
        width: 100%;
        height: 82px;
        display: flex;
        align-items: center;
        margin-bottom: -119px;
        margin-top: 19px;
        .mapContainer{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            .timer12{
                width: 95%;
                height: 80px;           
                background: #FFFFFF;
                box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.04);
                border-radius: 4px;
                z-index: 9999;
                padding: 10px;
                padding-bottom: 0;
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
                margin-top: 8px;
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
        }
        .per_info_container{
            width: 270px;
            height: 100%;
        }
    }
    .test_container{
        margin-top: 20px;
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
            z-index: 9999;
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
                margin-top: 8px;
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
                top: 50px;
                left: 25px;
                min-width: 400px;
                height: 60px;
                display: flex;
                align-items: center;
                .bqitm{
                    width: 180px;
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
                        }
                    }
                }
            }
        }
    }
}
</style>