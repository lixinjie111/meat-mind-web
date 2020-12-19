<template>
    <div class="tdhx">
        <img src="../../../static/img/protrait/tdhx/content-title@2x.png" alt="">
        <div class="select-box1">
            <Select v-model="model1" class="select1">
                <Option v-for="item in selectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
        <div class="select-box2">
            <Select v-model="model2" class="select2">
                <Option v-for="item in selectList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>

        <div class="part1">
            <img src="../../../static/img/protrait/tdhx/mediatype-rank01@2x.png" alt="" v-show="model1=='volume'">
            <img src="../../../static/img/protrait/tdhx/mediatype-rank02@2x.png" alt="" v-show="model1=='duration'">
            <img src="../../../static/img/protrait/tdhx/mediatype-rank03@2x.png" alt="" v-show="model1=='mouth'">
            <img src="../../../static/img/protrait/tdhx/mediatype-rank04@2x.png" alt="" v-show="model1=='cost'">
            <img src="../../../static/img/protrait/tdhx/medianame-rank01@2x.png" alt="" v-show="model2=='volume2'">
            <img src="../../../static/img/protrait/tdhx/medianame-rank02@2x.png" alt="" v-show="model2=='duration2'">
            <img src="../../../static/img/protrait/tdhx/medianame-rank03@2x.png" alt="" v-show="model2=='mouth2'">
            <img src="../../../static/img/protrait/tdhx/medianame-rank04@2x.png" alt="" v-show="model2=='cost2'">
        </div>
        <!-- <img src="../../../static/img/protrait/tdhx1@2x.png" alt=""> -->
        <img src="../../../static/img/protrait/tdhx2@2x.png" alt="">
        <img src="../../../static/img/protrait/tdhx3@2x.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "tdhx",
        data(){
            return{
                model1:"volume",
                selectList:[
                    {value:"volume",label:"按通道声量"},
                    {value:"duration",label:"按通道使用时长"},
                    {value:"mouth",label:"按通道口碑"},
                    {value:"cost",label:"按通道价值"}
                ],
                model2:"volume2",
                selectList2:[
                    {value:"volume2",label:"按通道声量"},
                    {value:"duration2",label:"按通道使用时长"},
                    {value:"mouth2",label:"按通道口碑"},
                    {value:"cost2",label:"按通道价值"}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tdhx {
        position: relative;
        width: 100%;
        height: 100%;
        .select-box1{
            position: absolute;
            top: 90px;
            left: 290px;
            width: 160px;
            height: 55px;
            background: #FFFFFF;
        }
        .select-box2{
            position: absolute;
            top: 90px;
            left: 870px;
            width: 160px;
            height: 55px;
            background: #FFFFFF;
        }
        .select1{
            // position: absolute;
            // top: 90px;
            // left: 290px;
            width: 160px;
        }
        .select2{
            // position: absolute;
            // top: 90px;
            // left: 870px;
            width: 160px;
        }
        .part1{
            display: flex;
            justify-content: space-between;
            margin: 0 24px 24px;
            img{
                width: 564px;
                height: 413px;
            }
        }
        > img {
            width: 100%;
        }
    }
</style>