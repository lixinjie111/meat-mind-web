<template>
    <div class="details-page-model">
        <div class="title" v-if="title">
            <div class="icon"><i @click="back" class="iconfont iconleft-arrow"></i></div>
            {{title}}
        </div>
        <div class="details-page-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailsPage",
        props:{
            title:{
                type:String
            },
            backname:{
                type:String
            }
        },
        methods: {
            back() {
                this.$router.push({name: this.backname})
            },
        }
    }
</script>

<style scoped lang="scss">
    .details-page-model {
        width: 100%;
        height: 100%;
        padding: 0 24px 24px;
        // background: #F4F7FC;

        .title {
            display: flex;
            align-items: center;
            height: 72px;
            font-size: 24px;
            color: #242F57;
            .icon{
                padding-left:16px;
                height: 24px;
                margin-right: 16px;
                transform: rotate(180deg);
                line-height: 24px;
                text-align: center;
                border-left: 1px solid #EAEDF7;
            }
            .iconfont{
                font-size: 24px;
                color: #7C88B1;
                cursor: pointer;
            }
        }

        .details-page-content {
            min-height: calc(100% - 64px);
        }
    }
</style>