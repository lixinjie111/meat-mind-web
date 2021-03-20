<template>
    <div class="tabs-container">
        <div v-for="(item,index) in tabList" :key="index" :class="tabActive == index + 1 ? 'active' : ''" @click="changeTab(index+1)">{{item}}</div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data() {
            return {
                tabActive: 1
            }
        },
        props: {
            tabList: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            changeTab(index) {
                this.tabActive = index;
                this.$emit('change',index);
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-container {
        border-bottom: 1px solid #EAEDF7;

        > div {
            padding: 8px 12px;
            margin-right: 8px;
            display: inline-block;
            vertical-align: top;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #636E95;
            cursor: pointer;
            line-height: 14px;

            &.active {
                color: #2373FF;
                border-bottom: 2px solid #2373FF;
            }
        }
    }
</style>