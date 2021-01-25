<template>
    <div class="tdhx">
        <img src="../../../static/img/protrait/tdhx/content-title@2x.png" alt="">
        <div class="container">
            <img src="../../../static/img/protrait/tdhx/content@2x.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "tdhx",
    }
</script>

<style lang="scss" scoped>
    .tdhx {
        position: relative;
        width: 100%;
        height: 100%;
        > img {
            width: 100%;
        }
        .container{
            padding: 0 24px 24px;
            img{
                width: 100%;
            }
        }
    }
</style>