<template>
  <div class="fourth-right-desc-colourfol">
      <p class="title">感知度（整体有效性）：</p>
      <ul class="colour-list">
          <li :class="[index<num?color:'']" v-for="(item,index) in list" :key="index"></li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"Colourfol",
    props:{
        color:{
            type:String,
            default:"#FFD98C"
        },
        num:{
            type:String,
            default:'1'
        }
    },
    data(){
        return{
            list:[
                "#FFD98C","#FFD98C","#FFD98C","#FFD98C","#FFD98C","#FFD98C","#FFF7E6","#FFF7E6","#FFF7E6","#FFF7E6"
            ]
        }
    }

}
</script>

<style scoped lang="scss">
.fourth-right-desc-colourfol{
    display: flex;
    flex-direction: column;
    .title{
        display: flex;
        flex-direction: column;
        height: 22px;
        margin-bottom: 6px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        line-height: 22px;
    }
    .colour-list{
        width: calc(100% - 34px);
        margin-bottom: 4px;
        list-style: none;
        display: flex;
        // justify-content: space-between;
        >li{
            width:calc(10% - 8px);
            height: 16px;
            margin-right: 8px;
            background: #FFF7E6;
            border-radius: 2px;
            &.active1{
                background: #FFD98C;
            }
            &.active2{
                background: #8AE6C7;
            }
            &.active3{
                background: #E19564;
            }
            &.active4{
                background: #E44C7F;
            }
        }
    }

}
</style>