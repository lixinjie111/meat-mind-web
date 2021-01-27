<template>
    <div class="mark-detail">
        <div class="mark-detail-header">
            <div class="title">品牌详情</div>
            <div class="operate">
                <div>
                    <img src="../../../assets/img/mark/add@2x.png" alt="">
                    <p>添加卡片</p>
                </div>
                <div>
                    <img src="../../../assets/img/mark/download@2x.png" alt="">
                    <p>下载卡片</p>
                </div>
                <div>
                    <img src="../../../assets/img/mark/download@2x.png" alt="">
                    <p>一键下载报告</p>
                </div>
            </div>
        </div>
        <div class="details-compare">
            <div class="d-c-left">
                <div class="d-c-l-title">当前品牌</div>
                <div class="d-c-l-content">
                    <img src="../../../assets/img/mark/tea.png" alt="">
                    <div class="d-c-l-name">邓老凉茶</div>
                </div>
            </div>
            <div class="d-c-mid">vs</div>
            <div class="d-c-right">
                <div class="d-c-l-title">对标品牌</div>
                <div class="d-c-r-select">
                   <Select style="width:160px" placeholder="请选择对标品牌">
                        <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
                    </Select>
                </div>
                <div class="d-c-l-content">
                    <img src="../../../assets/img/mark/question.png" alt="">
                    <div class="d-c-l-empty">暂无品牌</div>
                </div>
            </div>
        </div>
        <Accept :title="'品牌受众分析'"></Accept>
        <Accept :title="'品牌舆情洞察'"></Accept>
        <Accept :title="'品牌市场情况'"></Accept>
    </div>
</template>

<script>
import Accept from "./Accept"
export default {
    name:"Details",
    components:{Accept}
}
</script>  

<style lang="scss" scoped>
    .mark-detail{
        width: 100%;
        padding: 0 24px 24px;
        margin-top: 24px;
        background: #FFFFFF;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        .mark-detail-header{
            display: flex;
            align-items: center;
            width: 100%;
            height: 72px;
            .title{
                height: 24px;
                font-size: 16px;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
            }
            .operate{
                display: flex;
                align-items: center;
                margin-left: auto;
                margin-right: 8px;
                >div{
                    display: flex;
                    align-items: center;
                    height: 22px;
                    margin-left: 28px;
                    cursor: pointer;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-right: 4px;
                    }
                    >p{
                        font-size: 14px;
                        color: #636E95;
                    }
                }
            }
        }

        .details-compare{
            display: flex;
            width: 100%;
            height: 176px;
            margin-bottom: 24px;
            .d-c-left,.d-c-right{
                width: 47%;
                height: 176px;
                padding: 24px;
                background: #FFFFFF;
                border-radius: 8px;
                border: 1px solid #EAEDF7;
                .d-c-l-title{
                    height: 24px;
                    margin-bottom: 24px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #242F57;
                    line-height: 24px;
                }
                .d-c-l-content{
                    display: flex;
                    align-items: center;
                    height: 80px;
                    img{
                        width: 80px;
                        height: 80px;
                        margin-right: 16px;
                    }
                    .d-c-l-name{
                        height: 32px;
                        font-size: 24px;
                        color: #242F57;
                        line-height: 32px;
                    }
                    .d-c-l-empty{
                        height: 32px;
                        font-size: 24px;
                        color: #C6CBDE;
                        line-height: 32px;
                    }
                }
            }
            .d-c-mid{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 6%;
                height: 100%;
                font-size: 24px;
                font-weight: 500;
                color: #242F57;
            }
            .d-c-right{
                position: relative;
                .d-c-r-select{
                    position: absolute;
                    top: 20px;
                    right: 24px;
                }
            }
        }
    }
</style>