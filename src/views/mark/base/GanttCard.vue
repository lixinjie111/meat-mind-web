<template>
    <div class="gantt-card" :class="curColor">
        <div class="top">
            <p>{{title[0]}}</p>
            <ul>
                <li v-for="(item,index) in listT" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="bottom">
            <p>{{title[1]}}</p>
            <ul>
                <li v-for="(item,index) in listB" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"GanttCard",
    props:{
        title:{
            type:Array,
            default:()=>{
                return []
            }
        },
        listT:{
            type:Array,
            default:()=>{
                return []
            }
        },
        listB:{
            type:Array,
            default:()=>{
                return []
            }
        },
        curColor:{
            type:String
        }
    }
}
</script>
<style scoped lang="scss">
    .gantt-card{
        height: 60px;
        padding: 6px;
        border-radius: 4px;
        &.blue{
            background: #D3E3FF;
            border: 1px solid #2373FF;
            color: #2373FF;
        }
        &.orange{
            background: #FFE6DE;
            border: 1px solid #FE774B;
            color: #FE774B;
        }
        &.green{
            background: #DFF8F6;
            border: 1px solid #1DCEC3;
            color: #1DCEC3;
        }
        .top{
            margin-bottom: 4px;
        }
        .top,.bottom{
            display: flex;
            height: 22px;
            line-height: 22px;
            >p{
                margin-right: 4px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
            }
            >ul{
                display: flex;
                li{
                    height: 22px;
                    padding: 0 6px;
                    margin-left: 4px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 4px;
                    line-height: 22px;
                }
            } 

        }
    }
</style>
