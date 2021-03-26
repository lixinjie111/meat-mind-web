<template>
    <!-- <div class="cjk">
        <div class="change1" @click="change(1)"></div>
        <div class="change2" @click="change(2)"></div>
        <div class="change3" @click="change(3)"></div>
        <img v-if="index == 1" src="../../../static/img/tool/cjk.png" alt="">
        <img v-else-if="index == 2" src="../../../static/img/tool/cjk1.png" alt="">
        <img v-else src="../../../static/img/tool/cjk2.png" alt="">
    </div> -->
    <div class="tool-scene">
        <div class="header-nav">
            <p>场景库</p>
        </div>
        <div class="introduce">
            <div class="int-title">介绍</div>
            <p>场景库中汇集了元知分析师根据近千家客户，积累和沉淀的专业分析方法；让您掌握场景分析方法的同时，一键创建概览，持续观测数据变化</p>
            <div class="step-title">使用方法</div>
            <ul>
                <li>
                    <div class="icon"><i class="iconfont iconxiazaichangjingline"></i></div>
                    <div class="content">
                        下载《事件设计》<br/>
                        进行埋点
                    </div>
                    <div class="num">01</div>
                </li>
                <li>
                    <div class="icon"><i class="iconfont icontianjiachangjingline"></i></div>
                    <div class="content">
                        点击<br/>
                        <div>「添加概览场景」</div> 
                    </div>
                    <div class="num">02</div>
                </li>
                <li>
                    <div class="icon"><i class="iconfont iconchuangjianchangjingline"></i></div>
                    <div class="content">
                        自动<br/>
                        创建场景概览
                    </div>
                    <div class="num">03</div>
                </li>
            </ul>
        </div>
        <div class="base-eg">
            <div class="eg-title">示例（基础数据概览）</div>
            <p>在系统搭建之初，所有数据处于原始明细状态，想要知道用户数据，需要开始搭建一系列的指标。而对于初接触系统的您来说，从头开始搭建实在倍感麻烦。为了减轻您在重复创建指标的工作负担，我们准备了一套标准的基础概览，让您在系统就绪时就拥有整套完善的数据监控体系，将更多时间投入到实现数据驱动的工作中。基础概览将向您综合展示整体的规模和趋势、活跃用户留存和参与度、设备终端分布三大方面的常用指标，便于您快速获取大盘数据动向，90%的元知用户配置了当前场景。</p>
            <p>数据概览:即数据可视化看板,用来展示企业的核心业务指标。元知分析的数据概览集合了多种分析模型,支持多尺寸表,多指标表格的灵活展示方式,便于您实时查询业务数据。元知分析上线之初,所有数据概览都处于原始状态,想要查看用户行为数据,需要您手动添加相应的数据指标,生成一份完整的数据概览。</p>
            <div class="image"></div>
            <p>帮助您快速生成各平台的基础数据概览为了帮助您快速接入,减轻您在创建指标的工作负担,提高利用数据的效率,我们准备了一套标准的预置概览,自动生成一系列常见指标,让您在系统就绪时即可拥有整套完善的数据监控体系,将更多时间投入到数据探索与分析的工作中。
其中包括常见的三个平台:App,web,小程序,向您综合展示时效、规模、趋势、分布相关的常用指标,便于您快速获取大盘数据动向,90%的元知用户配置了当前场景。</p>
        </div>
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
    .tool-scene{
        padding: 0 24px 24px;
        .introduce{
            // width: 1152px;
            height: 252px;
            padding: 20px 24px 24px;
            margin-bottom: 24px;
            background: #FFFFFF;
            box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
            border-radius: 12px;
            border: 1px solid #EAEDF7;
            .int-title{
                height: 24px;
                margin-bottom: 12px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
            }
            >p{
                height: 24px;
                margin-bottom: 16px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #7C88B1;
                line-height: 22px;
            }
            .step-title{
                height: 24px;
                margin-bottom: 6px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                line-height: 22px;
            }
            ul{
                display: flex;
                justify-content: space-between;
                list-style: none;
                >li{
                    display: flex;
                    align-items: center;
                    width: 352px;
                    height: 102px;
                    padding: 25px 20px;
                    border-radius: 8px;
                    &:nth-child(1){
                        background: #D3E3FF;
                        color: #2373FF;
                    }
                    &:nth-child(2){
                        background: #FFE6DE;
                        color: #FE774B;
                    }
                    &:nth-child(3){
                        background: #FFEBF3;
                        color: #F16E84;
                    }
                    .icon{
                        width: 48px;
                        height: 52px;
                        margin-right: 16px;
                        background: #FFFFFF;
                        border-radius: 8px;
                        text-align: center;
                        line-height: 52px;
                        // cursor: pointer;
                        >i{
                            font-size: 24px;
                        }
                    }
                    .content{
                        flex:1;
                        height: 44px;
                        font-size: 16px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        line-height: 22px;
                        >div{
                            margin-left: -7px;
                        }
                    }
                    .num{
                        height: 48px;
                        font-size: 48px;
                        font-family: Helvetica-Bold, Helvetica;
                        font-weight: bold;
                        line-height: 48px;
                    }
                }
            }
        }

        .base-eg{
            height: 670px;
            padding: 20px 24px;
            background: #FFFFFF;
            box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
            border-radius: 12px;
            border: 1px solid #EAEDF7;
            .eg-title{
                height: 24px;
                margin-bottom: 14px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
            }
            >p{
                margin-bottom: 24px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #7C88B1;
                line-height: 1.6;
                &:last-child{
                    margin-bottom: 0;
                }
            }
            .image{
                width: 100%;
                height: 342px;
                margin-bottom: 14px;
                background: url("../../../assets/img/tool/show@2x.png") no-repeat center center / 702px 342px;
            }
        }
    }
</style>
