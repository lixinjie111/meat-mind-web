<template>
    <div class="ysjgl">
        <img src="../../../static/img/datacenter/ysjgl/ysjgl@2x.png" alt="">
        <div class="click-modal">
            <img src="../../../static/img/datacenter/ysjgl/click1.png" alt="" @click="click1">
            <img src="../../../static/img/datacenter/ysjgl/click2.png" alt="" @click="click2">
            <img src="../../../static/img/datacenter/ysjgl/click3.png" alt="" @click="click3">
            <img src="../../../static/img/datacenter/ysjgl/click4.png" alt="" @click="click4">
            <img src="../../../static/img/datacenter/ysjgl/click5.png" alt="" @click="click5">
            <img src="../../../static/img/datacenter/ysjgl/click6.png" alt="" @click="click6">
            <img src="../../../static/img/datacenter/ysjgl/click7.png" alt="" @click="click7">
            <img src="../../../static/img/datacenter/ysjgl/click8.png" alt="" @click="click8">
            <img src="../../../static/img/datacenter/ysjgl/click9.png" alt="" @click="click9">
            <img src="../../../static/img/datacenter/ysjgl/click10.png" alt="" @click="click10">
        </div>
    </div>
</template>

<script>
    export default {
        name:"ysjgl",
        data(){
            return {}
        },
        methods:{
            click1(){
                this.$router.push({name:"data-center-metax-rule"})
            },
            click2(){
                this.$router.push({name:"data-center-metax-unit"})
            },
            click3(){
                this.$router.push({name:"data-center-metax-event"})
            },
            click4(){
                this.$router.push({name:"data-center-metax-user"})
            },
            click5(){
                this.$router.push({name:"data-center-metax-dimension"})
            },
            click6(){
                this.$router.push({name:"data-center-metax-item"})
            },
            click7(){
                this.$router.push({name:"data-center-metax-virtual"})
            },
            click8(){
                this.$router.push({name:"data-center-metax-virtualEvent"})
            },
            click9(){
                this.$router.push({name:"data-center-metax-session"})
            },
            click10(){
                this.$router.push({name:"data-center-metax-visualization"})
            }
        }
    }
</script>

<style scoped lang="scss">
    .ysjgl {
        position: relative;
        width: 100%;
        height: 100%;
        .click-modal{
            // display: flex;
            // flex-wrap: wrap;
            position: absolute;
            top: 192px;
            left: 27px;
            right: 32px;
            height: calc(100% - 156px);
            background: #F7F9FA;
            img{
                width: 564px;
                height: 89px;
                cursor: pointer;
            }
        }
        img {
            width: 100%;
            // height: 100%;
        }
    }
</style>
