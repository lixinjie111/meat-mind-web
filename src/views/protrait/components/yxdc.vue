<template>
    <div class="yxdc">
        <div class="part1">
            <img src="../../../static/img/protrait/yxdc/active1.png" alt="" v-show="active==1">
            <img src="../../../static/img/protrait/yxdc/active2.png" alt="" v-show="active==2">
            <img src="../../../static/img/protrait/yxdc/active3.png" alt="" v-show="active==3">
            <img src="../../../static/img/protrait/yxdc/active4.png" alt="" v-show="active==4">
            <div class="target1" @click="active=1"></div>
            <div class="target2" @click="active=2"></div>
            <div class="target3" @click="active=3"></div>
            <div class="target4" @click="active=4"></div>
        </div>
        <img src="../../../static/img/protrait/yxdc/img2.png" alt="">
<!--        <iframe class="iframe iframe1" src="/static/html/lxj2/bar2.html" frameborder="0" scrolling="no"></iframe>-->
        <img src="../../../static/img/protrait/yxdc/img3.png" alt="">
        <img src="../../../static/img/protrait/yxdc/img4.png" alt="">
        <img src="../../../static/img/protrait/yxdc/img5.png" alt="">
        <img src="../../../static/img/protrait/yxdc/img6.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'yxdc',
        data(){
            return {
                active:1
            }
        }
    }
</script>

<style scoped lang="scss">
    .yxdc {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        > img {
            width: 100%;
        }
        .part1{
            position: relative;
            img{
                width: 100%;
            }
            .target1{
                position: absolute;
                top: 160px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }
            .target2{
                position: absolute;
                top: 184px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }
            .target3{
                position: absolute;
                top: 206px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }
            .target4{
                position: absolute;
                top: 226px;
                left: 226px;
                width: 160px;
                height: 18px;
                cursor: pointer;
            }
        }
    }
</style>
