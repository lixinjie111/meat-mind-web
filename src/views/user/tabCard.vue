<template>
    <div class="tabPanl_container">
        <div class="tabpan_lef">
        <div class="tabpan_lef_lef">
            <img :src="serImg1" alt="" srcset="" class="serImg1">
        </div>
        <div class="tabpan_lef_rig">
            <div class="tabpan_lef_rig_top">{{tabData.lefData.til}}</div>
            <div class="tabpan_lef_rig_bom">{{tabData.lefData.subTil}}</div>
        </div>
        </div>
        <div class="tabpan_rig">
            <div class="tabpan_lef_lef">
                <img :src="serImg2" alt="" srcset="" class="serImg1">
            </div>
            <div class="tabpan_lef_rig">
                <div class="tabpan_lef_rig_top">{{tabData.rigData.til}}</div>
                <div class="tabpan_lef_rig_bom">{{tabData.rigData.subTil}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabCard",
        data(){
            return{
                serImg1:require("../../assets/img/yhhx/serIcon1.png"),
                serImg2:require("../../assets/img/yhhx/serIcon2.png"),
            }
        },
        props:['tabData']
    }
</script>
<style lang="scss" scoped>
    .tabPanl_container{
      width: 100%;
      margin-top: 16px;
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .tabpan_lef{
        width: 48%;
        min-height: 106px;
        background: rgba(255,136,0, 0.7);
        border-radius: 8px;
        padding: 18px 24px;
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        .tabpan_lef_lef{
          width: 42px;
          height: 42px;
          margin-right: 12px;
          .serImg1{
            width: 100%;
          }
        }
        .tabpan_lef_rig{
          flex: 1;
          .tabpan_lef_rig_top{
            width: 100%;
            margin-bottom: 4px;
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #AD5D00;
          }
          .tabpan_lef_rig_bom{
            width: 404px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 26px;
          }
        }
      }
      .tabpan_rig{
        width: 48%;
        min-height: 106px;
        background: rgba(77,148,255, 0.7);
        border-radius: 8px;
        padding: 18px 24px;
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
        .tabpan_lef_lef{
          width: 42px;
          height: 42px;
          margin-right: 12px;
          .serImg1{
            width: 100%;
          }
        }
        .tabpan_lef_rig{
            flex: 1;
            .tabpan_lef_rig_top{
                width: 100%;
                margin-bottom: 4px;
                font-size: 18px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #0559D7;
            }
            .tabpan_lef_rig_bom{
                width: 404px;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 26px;
            }
        }
      }
    }
</style>