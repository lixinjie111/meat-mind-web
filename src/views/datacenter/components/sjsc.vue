<template>
    <div class="ffsj">
        <div class="recommend">
            <img src="../../../static/img/datacenter/ffsj@2x.png" alt="">
        </div>
        <div class="hot">
            <div class="page1" @click="page = 1"></div>
            <div class="page2" @click="page = 2"></div>
            <img src="../../../static/img/datacenter/ffsj1@2x.png" alt="" v-if="page == 1">
            <img src="../../../static/img/datacenter/ffsj2@2x.png" alt="" v-else>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                page: 1
            }
        }
    }
</script>

<style scoped lang="scss">
    .ffsj {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            // height: 100%;
        }

        .hot {
            position: relative;

            .page1 {
                position: absolute;
                right: 120px;
                bottom: 54px;
                width: 28px;
                height: 28px;
                cursor: pointer;
            }

            .page2 {
                position: absolute;
                right: 85px;
                bottom: 54px;
                width: 28px;
                height: 28px;
                cursor: pointer;
            }
        }
    }
</style>
