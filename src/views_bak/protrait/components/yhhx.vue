<template>
    <div class="yhhx">
        <img src="../../../static/img/protrait/yhhx5@2x.png" alt="">
        <div class="create" @click="toCreate"></div>
        <div class="detail" @click="toDetail"></div>
    </div>
</template>

<script>
    export default {
        name: 'yhhx',
        methods: {
            toCreate() {
                this.$router.push({name:"portrait-system-yhhx-create"})
            },
            toDetail() {
                this.$router.push({name:"portrait-system-yhhx-list"})
            }
        }
    }
</script>

<style scoped lang="scss">
    .yhhx {
        position: relative;
        width: 100%;
        height: 100%;

        > img {
            width: 100%;
        }

        .create {
            position: absolute;
            right: 45px;
            top: 95px;
            width: 122px;
            height: 34px;
            cursor: pointer;
        }

        .detail {
            position: absolute;
            left: 45px;
            top: 350px;
            width: 122px;
            height: 34px;
            cursor: pointer;
        }
    }
</style>
