<template>
    <div class="xtjc">
        <div class="header-nav">
            <p>集成数据</p>
        </div>
        <div class="content">
            <div class="top">
               <div class="topzi">
                    尚未接入开通该功能，请联系我们的<br>
                    <span class="link">技术人员</span> 为您开通
                </div>
                <button class="btn-primary-middle btn">了解详情</button>
            </div>
            <div class="bottom">
                <div class="bottom-title">您可以接入系统集成</div>
                <Row  :gutter="24">
                    <Col span="6" v-for='(item,index) in imgList' :key="index">
                        <div class="boximg" @mouseenter="showBg(index)" @mouseleave="closeBg()">
                            <img :src="item.img" alt="">
                            <div class="detail" v-show="currentIndex==index">
                            <div class="detailct">{{item.desc}}</div>
                            <span>详情</span>
                            </div>
                        </div>
                        <div class="img-title">{{item.title}}</div>
                    </Col>
                </Row>
            </Form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"System",
        data(){
            return{
                currentIndex:-1,
                imgList:[
                    {
                        img:require('../../../assets/img/xtjc/1.png'),
                        title:'与经颅电刺激系统集成',
                        desc:`PhysioLAB 无线生理仪是德国 ERGONEERS 
                                公司新推出的无线人体生理数据记录系统，可以记录所有的人体生理相关的数据，
                                包括配 ECG 心电、EEG 脑电、EMG 肌电、
                                Temp 温度、Resp 呼吸、ACC 加速度、眼电 EOG、EGG 胃电、血压 BPR、
                                Handgrip 抓握力等传感器，被广泛应用于
                                心理认知、人因工程、用户体验、运动科学、医疗康复等领域...`
                    },
                    {
                        img:require('../../../assets/img/xtjc/2.png'),
                        title:'与桌面式眼动追踪系统集成',
                        desc:``
                    },
                    {
                        img:require('../../../assets/img/xtjc/3.png'),
                        title:'与Sophia系统集成',
                        desc:``
                    },
                    {
                        img:require('../../../assets/img/xtjc/4.png'),
                        title:'与外呼系统集成',
                        desc:``
                    },
                    {
                        img:require('../../../assets/img/xtjc/5.png'),
                        title:'与推荐系统集成',
                        desc:``
                    },
                    {
                        img:require('../../../assets/img/xtjc/6.png'),
                        title:'与CRM系统集成',
                        desc:``
                    },
                    {
                        img:require('../../../assets/img/xtjc/7.png'),
                        title:'与Meta-X系统集成',
                        desc:``
                    },
                    {
                        img:require('../../../assets/img/xtjc/8.png'),
                        title:'与近红外脑成像系统集成',
                        desc:``
                    },
                ]
            }
        },
        //  methods:{
        //     click1(){
        //         this.$router.push({name:"data-center-metax-rule"})
        //     },
        //  }
        methods:{
            showBg(index){
                if(index==0){
                    this.currentIndex=0;
                }
            },
            closeBg(){
                this.currentIndex=-1;
            }
        }
    }
</script>

<style scoped lang="scss">
    img{
        width: 100%;
        display: block;
        }
    .xtjc {
        padding: 0 24px;

        .content{
            background: #FFFFFF;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;
            padding: 0 24px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
            line-height: 20px;
            .top{
                padding:40px 0;
                border-bottom:1px solid #EAEDF7;
                text-align: center;
                .topzi{
                    text-align: center;
                    .link{
                        color:#2373FF;
                        cursor: pointer;
                    }
                }
                .btn{
                    margin: 16px auto 0;
                    width: 104px;
                    height: 32px;
                    line-height: 32px;
                }
            }
            .bottom{
                margin-bottom: 8px;
                .bottom-title{
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    padding: 22px 0;
                }
                .boximg{
                    position: relative;
                    cursor: pointer;
                    .detail{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 8px;
                        cursor: pointer;
                        padding: 10px;
                        color:#FFFFFF;
                        background: rgba(0, 0, 0, 0.6);
                        border-radius: 4px;
                        .detailct{
                            text-align: justify;
                             display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 5;
                            overflow: hidden;
                        }
                        span{
                            float: right;
                            margin-top: 25px;
                            margin-right: 4px;
                            color: #10eee6;
                        }
                    }
                }
                .img-title{
                    margin-top: 12px;
                    margin-bottom: 24px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                }
            }
        }
        img {
            width: 100%;
            // height: 100%;
        }
        
    }
</style>
