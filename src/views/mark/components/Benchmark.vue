<template>
  <div class="third-line">
      <div class="top">
          <div class="title">对标商品分析</div>
          <ul class="name-list">
              <li>红牛/250ml</li>
              <li>加多宝/250ml</li>
              <li>王老吉/250ml</li>
              <li>脉动/250ml</li>
          </ul>
      </div>
      <div class="mid">
          <div class="left">
              <div class="left-title">主要传播媒体</div>
              <div class="left-content">
                  <img src="../../../assets/img/mark/douyin.png" alt="">
                  <img src="../../../assets/img/mark/xiaohongshu.png" alt="">
                  <img src="../../../assets/img/mark/kuaishou.png" alt="">
                  <img src="../../../assets/img/mark/weibo.png" alt="">
                  <img src="../../../assets/img/mark/facebook.png" alt="">
                  <img src="../../../assets/img/mark/toutiao.png" alt="">
              </div>
          </div>
          <div class="right">
              <div class="title">客群特征</div>
              <div class="show-echart">
                  <div class="age">
                    <div class="s-title">年龄分布</div>
                    <div class="s-echart"></div>
                  </div>
                  <div class="sex">
                      <div class="s-title">性别分布</div>
                      <div class="s-echart"></div>
                  </div>
                  <div class="customer">
                      <div class="s-title">客群购买力分析</div>
                      <div class="s-echart"></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="bottom">
          <div class="pricle">
            <Card :title="'客单价'" :colourfol="'blue'" :number="'65'" :data="[-9.07,2.17]"></Card>
          </div>
          <div class="month">
            <Card :title="'月均销量'" :colourfol="'purple'" :number="'721,343'" :data="[-2.17,3.26]"></Card>
          </div>          
          <div class="view">
            <Card :title="'月浏览'" :colourfol="'pink'" :number="'54,566'" :data="[-1.67,2.78]"></Card>
          </div>          
          <div class="target">
            <Card :title="'口碑指数'" :colourfol="'orange'" :number="'4,534'" :data="[-1.47,4.47]"></Card>
          </div>  
      </div>
  </div>
</template>

<script>
import Card from "../base/Card"
export default {
    name:"Benchmark",
    components:{Card}
}
</script>

<style scoped lang="scss">
    .third-line{
        width: 100%;
        height: 474px;
        padding:0 24px 24px;
        margin-top: 24px;
        background: #FFFFFF;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        .top{
            display: flex;
            align-items: center;
            height: 72px;
            .title{
                height: 24px;
                margin-right: 40px;
                font-size: 16px;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
            }
            .name-list{
                list-style:none;
                display: flex;
                align-items: center;
                >li{
                    height: 22px;
                    margin-right: 32px;
                    font-size: 14px;
                    color: #636E95;
                    line-height: 22px;
                    cursor: pointer;
                    &:first-child{
                        position: relative;
                        font-weight: 500;
                        color: #2373FF;
                        &:after{
                            position: absolute;
                            top: 30px;
                            left: 0;
                            content: "";
                            width: 76px;
                            height: 2px;
                            background: #2373FF;
                            border-radius: 1px;
                        }
                    }
                }
            }
        }

        .mid{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 216px;
            .left,.right{
                display: flex;
                flex-direction: column;
                height: 216px;
                padding: 16px;
                background: #FFFFFF;
                border-radius: 8px;
                border: 1px solid #EAEDF7;
            }
            .left{
                width: 258px;
                padding-left: 0;
                .left-title{
                    height: 24px;
                    padding-left: 16px;
                    margin-bottom: 16px;
                    font-size: 14px;
                    color: #242F57;
                    line-height: 24px;
                }
                .left-content{
                    height: calc(100% - 40px);
                    img{
                        width: 32px;
                        height: 32px;
                        margin-left: 16px;
                        margin-bottom: 16px;
                        border-radius: 50%;
                    }
                }
            }
            .right{
                justify-content: space-between;
                width: calc(100% - 284px);
                .right-title{
                    height: 24px;
                    margin-bottom: 4px;
                    font-size: 14px;
                    color: #242F57;
                    line-height: 24px;
                }
                .show-echart{
                    display: flex;
                    width: 100%;
                    height: 156px;
                    .age,.sex,.customer{
                        width: 33%;
                        height: 156px;
                        .s-title{
                            height: 20px;
                            font-size: 12px;
                            color: #636E95;
                            line-height: 20px;
                        }
                        .s-echart{
                            width: 100%;
                            height: 136px;
                        }
                    }
                }
            }
        }

        .bottom{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 138px;
            margin-top: 24px;
            .pricle,.month,.view,.target{
                width: 24%;
                height: 138px;
            }
        }
    }
</style>