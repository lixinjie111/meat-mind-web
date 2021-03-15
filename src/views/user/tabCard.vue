<template>
    <div class="tabPanl_container">
        <div class="tabpan_lef">
	        <div class="tabpan_lef_lef">
	            <!--<img :src="serImg1" alt="" srcset="" class="serImg1">-->
							<div class="icon_box">
								<i class="iconfont iconjingshi"></i>
							</div>

	        </div>
	        <div class="tabpan_lef_rig">
	            <div class="tabpan_lef_rig_top">{{tabData.lefData.til}}</div>
	            <div class="tabpan_lef_rig_bom">{{tabData.lefData.subTil}}</div>
	        </div>
        </div>
        <div class="tabpan_rig">
            <div class="tabpan_rig_lef">
                <!--<img :src="serImg2" alt="" srcset="" class="serImg1">-->
	            <div class="icon_box">
		            <i class="iconfont iconqueren"></i>
	            </div>
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
        width: 49%;
        min-height: 106px;
        background: #FEDFE1;
        border-radius: 8px;
        padding: 18px 24px;
        box-sizing: border-box;
	      display: flex;
	      align-items: center;
        .tabpan_lef_lef{
          /*width: 73px;*/
          /*height: 74px;*/
          // margin-top: -10px;
          // margin-right: -7px;
	        margin-right: 16px;
          .serImg1{
            width: 100%;
          }
	        .icon_box{
		        width: 52px;
		        height: 58px;
		        background: #FFFFFF;
		        border-radius: 8px;
		        text-align: center;
		        overflow: hidden;
		        .iconfont{
			        height: 100%;
			        width: 100%;
			        display: inline-block;
			        text-align: center;
			        color: #ff4c60;
			        font-size: 40px;
		        }
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
            color: #FF4C60;
          }
          .tabpan_lef_rig_bom{
            width: 404px;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FF4C60;
            line-height: 26px;
          }
        }
      }
      .tabpan_rig{
        width: 49%;
        min-height: 106px;
        background: #D3E3FF;
        border-radius: 8px;
        padding: 18px 24px;
        box-sizing: border-box;
	      display: flex;
	      align-items: center;
        .tabpan_rig_lef{
	        margin-right: 0.11111rem;
          .serImg1{
            width: 100%;
          }
	        .icon_box{
		        width: 52px;
		        height: 58px;
		        background: #FFFFFF;
		        border-radius: 8px;
		        text-align: center;
		        overflow: hidden;
		        .iconfont{
			        height: 100%;
			        width: 100%;
			        display: inline-block;
			        text-align: center;
			        color: #2373ff;
			        font-size: 40px;
		        }
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
                color: #2373FF;
            }
            .tabpan_lef_rig_bom{
                width: 404px;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #2373FF;
                line-height: 26px;
            }
        }
      }
    }
</style>
