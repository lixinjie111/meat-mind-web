<template>
    <div class="mark-detail">
        <div class="title">
            品牌详情
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
                
            </div>
        </div>
        <div class="mark-detail-anchor">
            <Anchor show-ink :offset-top="80">
                <AnchorLink href="#m-d-accept-header" title="品牌受众分析" :scroll-offset="120"/>
                <AnchorLink href="#mark-details-market" title="品牌舆情洞察" :scroll-offset="120"/>
                <AnchorLink href="#mark-details-public" title="行业态势分析" :scroll-offset="120"/>
            </Anchor>
        </div>
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
        height: 64px;
        padding: 16px 24px;
        margin: 0 24px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
            .operate{
                position: absolute;
                top: 16px;
                right: -10px;
                display: flex;
                align-items: center;
                // margin-left: 24px;
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