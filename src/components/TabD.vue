<template>
    <div class="tabs-container">
        <template v-for="(item,index) in tabList">
            <div class="item disabled" v-if="item.disabled" :key="index">{{item.name}}</div>
            <div class="item" :class="tabActive == index + 1 ? 'active' : ''" @click="changeTab(index+1)" :key="index" v-else>
                {{item.name}}
            </div>
        </template>
        <div class="line"></div>
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
                this.$emit('change', index);
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-container {
        position: relative;

        .line {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background: #DEE2EE;
        }

        .item {
            position: relative;
            z-index: 10;
            padding: 8px 0 6px 0;
            margin-right: 32px;
            display: inline-block;
            vertical-align: top;
            font-size: 20px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97A0C3;
            cursor: pointer;
            line-height: 28px;

            &.active {
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #2373FF;
                border-bottom: 2px solid #2373FF;
            }

            &.disabled {
                color: #C6CBDE;
                cursor: default;
            }
        }
    }
</style>