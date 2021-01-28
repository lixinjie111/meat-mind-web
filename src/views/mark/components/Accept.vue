<template>
    <div class="mark-details-accept">
        <div class="m-d-accept-header">
            <div class="a-h-title">{{title}}</div>
            <div class="a-h-arrow"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Accept",
    props:{
        title:{
            type:String
        }
    }
};
</script>

<style scoped lang="scss">
.mark-details-accept{
    padding: 0 24px 24px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #EAEDF7;
    .m-d-accept-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        padding: 0 24px;
        .a-h-title{
            height: 24px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 24px;
        }
        .a-h-arrow{
            width: 16px;
            height: 16px;
            background: url("../../../assets/img/mark/arrow@2x.png") no-repeat center center / 16px 16px;
        }
    }
}
</style>