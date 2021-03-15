<template>
    <div class="mark-detail">
        <div class="title">品牌详情</div>
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
        height: 64px;
        padding: 16px 24px;
        margin: 0 24px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
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