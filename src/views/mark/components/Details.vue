<template>
    <div class="mark-detail">
        <div class="mark-detail-header">
            <div class="title">品牌详情</div>
            <div class="operate">
                <div>
                    <img src="../../../assets/img/mark/add@2x.png" alt="">
                    <p>添加卡片</p>
                </div>
                <div>
                    <img src="../../../assets/img/mark/download@2x.png" alt="">
                    <p>下载卡片</p>
                </div>
                <div>
                    <img src="../../../assets/img/mark/download@2x.png" alt="">
                    <p>一键下载报告</p>
                </div>
            </div>
            <div class="d-c-r-select">
                <Select style="width:160px" placeholder="请选择对标品牌" @on-change="selectEl" v-model="pinpai">
                    <Option value="红牛" :key="1">红牛</Option>
                    <Option value="加多宝" :key="2">加多宝</Option>
                    <Option value="王老吉" :key="3">王老吉</Option>
                    <Option value="脉动" :key="4">脉动</Option>
                </Select>
            </div>
        </div>
        <div class="details-compare">
            <div class="d-c-left">
                <div class="d-c-l-title">当前品牌</div>
                 <div class="d-c-l-hr"></div>
                <div class="d-c-l-content">
                    <img src="../../../assets/img/mark/tea.png" alt="">
                </div>
                <div class="d-c-l-name">邓老凉茶</div>
            </div>
            <div class="d-c-mid">vs</div>
            <div class="d-c-right">
                <div class="d-c-l-title">对标品牌</div>
                <div class="d-c-l-hr"></div>
                <div class="d-c-l-content">
                    <img :src="pic1" alt="">
                </div>
                 <div class="d-c-l-empty" :class="{'ck':pinpai=='暂无品牌'}">{{pinpai}}</div>
            </div>
        </div>
        <!-- -->
        <div class="mark-detail-anchor">
            <Anchor show-ink :offset-top="64">
                <AnchorLink href="#m-d-accept-header" title="品牌受众分析" />
                <AnchorLink href="#mark-details-market" title="品牌舆情洞察" />
                <AnchorLink href="#mark-details-public" title="行业态势分析" />
            </Anchor>
        </div>
        <Accept :title="'品牌受众分析'" ></Accept>
        <Market :title="'品牌舆情洞察'" ></Market>
        <Public :title="'行业态势分析'" ></Public>
    </div>
</template>

<script>
import Accept from "./Accept"
import Market from "./Market"
import Public from "./Public"
export default {
    name:"Details",
    components:{Accept,Market,Public},
     data() {
            return {
                pinpai: '暂无品牌',
                pic1:require('../../../assets/img/mark/question.png'),
            }
        },
        methods: {
            anchorP(item,aa){
                console.log(item,aa)
                //document.getElementById('mark-details-public').scrollIntoView();
            },
            selectEl() {
                if(this.pinpai=='红牛'){
                    this.pic1=require('../../../assets/img/mark/hniu.png');
                }else{
                    this.pic1=require('../../../assets/img/mark/question.png');
                }
            }
        }

}
</script>  
<style lang="scss">
.mark-detail-anchor{
    position: relative;
    width:100%;
    .ivu-affix{
        left:288px !important;
        top:48px  !important;
        z-index: 1001;
    }
}
.ivu-anchor-wrapper{
    overflow: visible;
    padding-left: 0;
    margin-left: 0;
    max-height: 36px !important;
    height: 36px;
    background: #fff;
    border-bottom:1px solid #DEE2EE;
    .ivu-anchor{
        height: 100%;
        display: flex;
        padding-left: 0;
        .ivu-anchor-ink{
            width: 100%;
            height: 1px;
            bottom: 0;
            top:auto;
            &::before{
                display: none;
                background-color: #DEE2EE;
            }
        }
        .ivu-anchor-link{
            padding: 0;
            margin-right: 32px;
            height: 36px;
            line-height: 36px;
        }
        .ivu-anchor-ink-ball{
            display: none;
            width: 84px;
            height: 2px;
            background-color:#2373FF;
            border: none;
            border-radius: unset;
        }
        .ivu-anchor-link-active{
            border-bottom: 2px solid #2373FF;
            >.ivu-anchor-link-title{
                color:#2373FF;
            }
        }
        .ivu-anchor-link-title{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
        }
    }
}
</style>
<style lang="scss" scoped>
    .mark-detail{
        width: 100%;
        padding: 0 24px 24px;
        margin-top: 24px;
        background: #FFFFFF;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
        .mark-detail-header{
            display: flex;
            align-items: center;
            width: 100%;
            height: 72px;
            position: relative;
            .title{
                height: 26px;
                font-size: 18px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 26px;
            }
            .operate{
                display: flex;
                align-items: center;
                margin-left: 24px;
                >div{
                    display: flex;
                    align-items: center;
                    margin-right: 12px;
                    background: #FFFFFF;
                    box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8) inset;
                    border-radius: 8px;
                    opacity: 0.6;
                    border: 1px solid #C6CBDE;
                    padding:5px 8px;
                    cursor: pointer;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-right: 4px;
                    }
                    >p{
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                    }
                }
            }
            .d-c-r-select{
                position: absolute;
                top: 20px;
                right: 0;
            }
        }

        .details-compare{
            display: flex;
            width: 100%;
            height: 112px;
            margin-bottom: 32px;
            justify-content: space-between;
            align-items: center;
            .d-c-left,.d-c-right{
                width: 432px;
                height: 100%;
                padding: 9px 24px;
                background: url("../../../assets/img/mark/jubg.png") no-repeat center center / 100% 100%;
                border-radius: 8px;
                border: 1px solid #EAEDF7;
                display: flex;
                align-items: center;
                .d-c-l-title{
                    background: rgba(77,148,255,0.2);
                    border-radius: 4px;
                    padding:4px 8px;
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #2A68C5;
                    line-height: 24px;
                }
                .d-c-l-hr{
                    width: 1px;
                    height: 100%;
                    margin: 0 24px;
                    background: #C1DAFE;
                }
                .d-c-l-content{
                    width:82px;
                    margin-right: 15px;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                       width: 100%;
                       display: block;
                    }
                }
                .d-c-l-name{
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                }
                .d-c-l-empty{
                    font-size: 24px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color:#242F57;
                    &.ck{
                        color: #C6CBDE;
                    }
                }
            }
            .d-c-mid{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 80px;
                height: 80px;
                border-radius: 50%;
                border: 1px solid #FFFFFF;
                background: #F1F6FF;
                box-shadow: 9px 9px 14px 0px rgba(36, 47, 87, 0.06) inset;
                box-sizing: border-box;
                //box-shadow:-11px -11px 24px 0px rgba(255, 255, 255, 0.6) inset;
                font-size: 24px;
                font-family: Helvetica;
                color: #636E95;
                line-height: 32px;
                text-shadow: 1px 1px 1px #242F57;
                // -webkit-background-clip: text;
                // -webkit-text-fill-color: transparent;
            }
        }
    }
</style>