<template>
    <div class="mark-detail">
        <div class="title">品牌详情</div>
        <Details></Details>
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
    padding: 0 24px 24px;
    .title{
        height: 64px;
        padding: 16px 24px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
    }
}
</style>