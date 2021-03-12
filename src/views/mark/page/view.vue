<template>
    <div class="mark-overview">
        <div class="title">品牌概览</div>
        
    </div>
</template>
<script>
export default {
    name:"view",
    data(){
        return {} 
    }
}
</script>
<style scoped lang="scss">
.mark-overview{
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