<template>
    <div class="mark-negative">
        <div class="title">负面舆情</div>
        <div class="show">

        </div>
    </div>
</template>
<script>
export default {
    name:"negative",
    data(){
        return {} 
    }
}
</script>
<style scoped lang="scss">
.mark-negative{
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
    .show{
        
    }
}
</style>