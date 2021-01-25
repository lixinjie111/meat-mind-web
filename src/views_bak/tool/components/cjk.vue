<template>
    <div class="cjk">
        <div class="change1" @click="change(1)"></div>
        <div class="change2" @click="change(2)"></div>
        <div class="change3" @click="change(3)"></div>
        <img v-if="index == 1" src="../../../static/img/tool/cjk.png" alt="">
        <img v-else-if="index == 2" src="../../../static/img/tool/cjk1.png" alt="">
        <img v-else src="../../../static/img/tool/cjk2.png" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                index: 1
            }
        },
        methods: {
            change(index) {
                this.index = index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .cjk {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            padding-bottom: 20px;
            width: 100%;
            // height: 100%;
        }

        .change1 {
            position: absolute;
            left: 40px;
            top: 410px;
            width: 110px;
            height: 38px;
            cursor: pointer;
        }

        .change2 {
            position: absolute;
            left: 170px;
            top: 410px;
            width: 80px;
            height: 38px;
            cursor: pointer;
        }

        .change3 {
            position: absolute;
            left: 270px;
            top: 410px;
            width: 80px;
            height: 38px;
            cursor: pointer;
        }
    }
</style>
