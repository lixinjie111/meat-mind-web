<template>
    <div class="index-container">
        <div class="header-box">
         <img :src="logoImg" class="logoImg">
         <div class="tab-list">
             <div class="tab-item" v-for="(item,index) in tabList" :key="index" :class="{'activTab' : currentInx == index}" @click="changePanel(index)">{{item}}</div>
         </div>
        </div>
        <div class="index_container" v-if="currentInx == 0">
            <div class="title-box">
                <div class="info">
                    <div class="title">
                        <img class="top" src="../assets/img/index/title@2x.png">
                        <div class="bottom" @click="go">体验DEMO <i class="iconfont iconleft-arrow"></i></div>
                    </div>
                    <div class="video">
                        <video class="player" width="100%" height="100%" autoplay loop muted :src="src"></video>
                    </div>
                </div>
            </div>
            <div class="content-top-box">
                <img src="../../src/assets/img/index/content1@2x.png"/>
            </div>
            <div class="content-bottom-box">
                <img src="../../src/assets/img/index/content2@2x.png"/>
            </div>
            <div class="footer-box">
                <img src="../../src/assets/img/index/footer@2x.png"/>
            </div>
        </div>
        <div class="pinpai_container" v-else-if="currentInx == 1">
            <img :src="imgCont2" class="imgCont">
        </div>
        <div class="yonghu_container" v-else-if="currentInx == 2">
            <img :src="imgCont1" class="imgCont">
        </div>
        <div class="meijie_container" v-else-if="currentInx == 3">
             <img :src="imgCont3" class="imgCont">
        </div>
        <div class="jyfx_container" v-else-if="currentInx == 4">
             <img :src="imgCont4" class="imgCont">
        </div>
        <div class="sjglzx_container" v-else>
             <img :src="imgCont5" class="imgCont">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                src: require('../../src/static/video/video.mp4'),
                logoImg:require('../assets/img/side/logo-colour@2x.png'),
                imgCont1:require('../assets/img/index/imgCont1.png'),
                imgCont2:require('../assets/img/index/imgCont2.png'),
                imgCont3:require('../assets/img/index/imgCont3.png'),
                imgCont4:require('../assets/img/index/imgCont4.png'),
                imgCont5:require('../assets/img/index/imgCont5.png'),
                tabList:['首页','用户深度画像','品牌深度画像','媒介深度画像','经营分析','数据管理中心'],
                currentInx:0
            }
        },
        methods: {
            go() {
                this.$router.push({name: "login"})
            },
            changePanel(arg){
                this.currentInx = arg;
            }
        }
    }
</script>

<style scoped lang="scss">
    .index-container {
        width: 100%;
        .header-box {
            width: 100%;
            height: 60px;
            border-bottom: 1px solid #EBECF0;
            display: flex;
            align-items: center;
            .logoImg{
                display: block;
                width: 90px;
                margin-left: 244px;
            }
            .tab-list{
                display: flex;
                align-items: center;
                height: 60px;
                margin-left: 94px;
                box-sizing:border-box;
                .tab-item{
                    height: 60px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    margin-right: 32px;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    border-bottom: 2px solid #FFFFFF;
                    // &:hover{
                    //     font-family: PingFangSC-Medium, PingFang SC;
                    //     // font-weight: 500;
                    //     cursor: pointer;
                    // }
                }
                .activTab{
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #2373FF;
                    border-bottom: 2px solid #2373FF;
                }
            }
        }
        .index_container{
            width: 100%;

            .title-box {
                background: linear-gradient(to right, #FFFFFF 50%, #F8FAFD 50%);
                width: 100%;
                height: 605px;
                .info {
                    position: relative;
                    margin: 0 auto;
                    width: 1440px;
                    height: 605px;
                    .title {
                        position: absolute;
                        z-index: 10;
                        margin-left: 214px;
                        width: 381px;
                        .top {
                            margin-top: 107px;
                            width: 381px;
                            height: 332px;
                        }
                        .bottom {
                            margin-top: 33px;
                            width: 158px;
                            height: 48px;
                            line-height: 48px;
                            background: #2373FF;
                            box-shadow: 4px 6px 12px 1px rgba(35, 115, 255, 0.3);
                            border-radius: 4px;
                            font-size: 16px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #FFFFFF;
                            text-align: center;
                            cursor: pointer;
                        }
                    }

                    .video {
                        position: absolute;
                        top: 0;
                        right: 0;
                        width: 937px;
                        height: 605px;
                        background: #F8FAFD;

                        .player {
                            margin: 51px 0 0 69px;
                            width: 868px;
                            height: 504px;
                        }
                    }
                }
            }
            .content-top-box {
                width: 100%;
                height: 100%;
                text-align: center;
                background: #FFFFFF;
                > img {
                    width: 1440px;
                    height: 665px;
                }
            }
            .content-bottom-box {
                width: 100%;
                height: 100%;
                text-align: center;
                background: #F8FAFD;
                > img {
                    width: 1440px;
                    height: 1245px;
                }
            }
            .footer-box {
                width: 100%;
                height: 80px;
                text-align: center;
                background: #FFFFFF;
                > img {
                    width: 1440px;
                    height: 80px;
                }
            }
        }
        .pinpai_container,.yonghu_container,.meijie_container,.jyfx_container,.sjglzx_container{
            width: 100%;
            .imgCont{
                display: block;
                width: 100%;
            }
        }
    }
</style>
