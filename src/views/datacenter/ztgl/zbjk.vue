<template>
    <div class="zbjk">
        <img src="../../../static/img/datacenter/data-center-main@2x.png" alt="">
        <div class="upload-btn" @click="uploadModal = true"></div>
        <Modal v-model="uploadModal">
            <div>

            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                uploadModal: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .zbjk {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }

        .upload-btn {
            position: absolute;
            right: 48px;
            top: 189px;
            width: 88px;
            height: 33px;
            background: transparent;
            cursor: pointer;
        }
    }
</style>
