<template>
    <div class="mark-negative">
        <div class="header-nav"><p>舆情应对</p></div>
        <div class="show">
            <NewEcharts></NewEcharts>
        </div>
    </div>
</template>
<script>
import  NewEcharts from "../components/NewEcharts"
import api from "@/utils/api"
export default {
    name:"negative",
    components:{NewEcharts},
    data(){
        return {} 
    },
    methods:{
        getList(){
            api.getMarkList({}).then(res=>{

            }).catch(err=>{
                this.$Message.error(err.msg)
            })
        },
        getDetail(){
            let params = {
                id:"200027"
            }   
            api.getMarkDetail(params).then(res=>{
                
            }).catch(err=>{
                this.$Message.error(err.msg)
            })
        }
    },
    mounted(){
        // this.getDetail()
    }
}
</script>
<style scoped lang="scss">
.mark-negative{
    height: 100%;
    overflow-y: scroll;
    padding: 0 24px 24px;
    .title{
        height: 64px;
        padding: 16px 24px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
    }
    .show{
        padding: 24px;
        background: #FFFFFF;
        border-radius: 8px;
    }
}
</style>