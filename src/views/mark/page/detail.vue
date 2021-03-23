<template>
    <div class="mark-detail">
        <div class="header-nav title">
            <p>品牌详情</p>
            <div class="operate">
                <div>
                    <img src="../../../assets/img/mark/add@2x.png" alt="">
                    <p>添加卡片</p>
                </div>
                <!-- <div>
                    <img src="../../../assets/img/mark/download@2x.png" alt="">
                    <p>下载卡片</p>
                </div> -->
                <div>
                    <img src="../../../assets/img/mark/download@2x.png" alt="">
                    <p>一键下载报告</p>
                </div>
                <div class="com-btn" @click="toComparison">
                    <i class="iconfont icontianjia"></i>对标品牌
                </div>
            </div>
        </div>
        <!-- <div class="mark-detail-anchor">
            <Anchor show-ink :offset-top="80">
                <AnchorLink href="#m-d-accept-header" title="品牌受众分析" :scroll-offset="120"/>
                <AnchorLink href="#mark-details-market" title="品牌舆情洞察" :scroll-offset="120"/>
                <AnchorLink href="#mark-details-public" title="行业态势分析" :scroll-offset="120"/>
            </Anchor>
        </div> -->
        <div class="details"><Details></Details></div>
    </div>
</template>
<script>
import Details from "../components/Details"
export default {
    name:"detail",
    components:{Details},
    data(){
        return {} 
    },
    methods: {
        toComparison (){
            this.$router.push({name:"mark-comparison"})
        },
    }
}
</script>
<style scoped lang="scss">
.mark-detail{
    height: 100%;
    overflow-y: scroll;
    // padding: 0 24px 24px;
    .title{
        position: relative;
        // height: 64px;
        // padding: 16px 24px;
        margin: 0 24px;
        // font-size: 20px;
        // font-family: PingFangSC-Medium, PingFang SC;
        // font-weight: 500;
        // color: #242F57;
            .operate{
                position: absolute;
                top: 22px;
                right: -10px;
                display: flex;
                align-items: center;
                // margin-left: 24px;
                >div{
                    display: flex;
                    align-items: center;
                    margin-right: 12px;
                    background: #FFFFFF;
                    // box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8) inset;
                    border-radius: 4px;
                    // opacity: 0.6;
                    border: 1px solid #97A0C3;
                    padding:4px 8px;
                    cursor: pointer;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-right: 4px;
                    }
                    >p{
                        height: 22px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        line-height: 22px;
                    }
                }

                .com-btn {
                    width: 92px;
                    height: 32px;
                    line-height: 32px;
                    background: #2373FF;
                    box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
                    border-radius: 4px;
                    border: none;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                    text-align: center;
                    cursor: pointer;

                    >i {
                        font-size: 13px;
                        margin-top: -1px;
                        margin-right: 3px;
                    }
                }
            }        
    }
    .mark-detail-anchor{
        position: relative;
        width:100%;
        height: 60px;
        // padding-left: 48px;
        // .ivu-affix{
        //     left:288px !important;
        //     top:48px  !important;
        //     z-index: 1001;
        // }
    }
    .details{
        margin: 0 24px 24px;
    }
}
</style>