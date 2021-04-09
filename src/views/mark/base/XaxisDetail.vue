<template>
    <div class="xaxis-detail-card">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p>{{item.name}}</p>
                <div>{{item.num}}</div>
                <i class="iconfont" :class="item.icon"></i>
                <span :class="[item.icon=='iconshangsheng'?'green':'red']">{{item.pre}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"XaxisDetail",
    props:{
        list:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    data(){
        return {
            listA:[
                {name:"行业品牌影响力",num:"63.9",icon:"iconshangsheng",pre:"+17%"},
                {name:"季活跃用户量（QAU）",num:"12,136",icon:"iconxiajiang",pre:"-3.7%"},
                {name:"渠道平均投放回报率",num:"16.2%",icon:"iconshangsheng",pre:"+2.7%"},
                {name:"Q1计划营收完成度",num:"79%",icon:"",pre:""}
            ]
        }
    }
}
</script>
<style scoped lang="scss">
    .xaxis-detail-card{
        width: 246px;
        height: 126px;
        margin: 0 10px;
        background: url("../../../assets/img/mark/detail@2x.png") no-repeat center center / 100% 100%;
        ul{
            padding-top: 20px;
            padding-left: 8px;
            >li{
                display: flex;
                align-items: center;
                height: 22px;
                margin-bottom: 4px;
                p{
                    width: 124px;
                    height: 18px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    line-height: 18px;
                }
                div{
                    width: 44px;
                    height: 22px;
                    margin-left: 4px;
                    font-size: 14px;
                    font-family: HelveticaNeue;
                    color: #242F57;
                    line-height: 22px;
                    text-align: right;
                }
                i{
                    width: 10px;
                    height: 10px;
                    margin: 0 4px;
                    font-size: 10px;
                    line-height: 10px;
                    &.iconshangsheng{
                        color: #08BD6C;
                    }
                    &.iconxiajiang{
                        color: #FF4C60;
                    }
                }
                span{
                    width: 36px;
                    height: 18px;
                    font-size: 12px;
                    font-family: HelveticaNeue;
                    line-height: 18px;
                    &.red{
                        color: #FF4C60;
                    }
                    &.green{
                        color: #08BD6C;
                    }
                }

            }
        }
    }
</style>