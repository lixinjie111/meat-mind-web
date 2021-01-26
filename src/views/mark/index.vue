<template>
    <DefaultPage title="品牌画像">
        <div class="mark-content">
            <div class="first-line">
                <div class="mark-overview">
                    <div class="title">品牌总体概览</div>
                    <div class="box-content">
                        <div class="echart"></div>
                        <ul class="card-list blue-card-ul">
                            <li><div><b>覆盖度：</b>品牌行业市场占有率</div></li>
                            <li><div><b>认可度：</b>品牌对当前目标定位的适配程度</div></li>
                            <li><div><b>匹配度：</b>品牌与目标受众（标签集）的契合度</div></li>
                            <li><div><b>占据力：</b>占据力：品牌在消费者心智空间中的行业阶梯</div></li>
                            <li><div><b>忠诚度：</b>忠诚度：品牌的市场口碑好坏及认可度</div></li>
                            <li><div><b>传播度：</b>传播度：品牌在全渠道传播中的辐射力（渠道类型）</div></li>
                        </ul>
                    </div>
                </div>
                <div class="tea-trend">
                    <div class="title">2016-2021年中国凉茶产量规模增长</div>
                </div>
            </div>
            <div class="second-line">
                <div class="title">负面舆情的处理意见</div>
                <div class="second-content">
                    <div class="box1">
                        <div class="name">信息来源占比（%）</div>
                    </div>
                    <div class="box2">
                        <div class="name">敏感占比图</div>
                        <ul class="red-card-ul">
                            <li>敏感信息<p>443</p></li>
                            <li>邓老凉茶在凉茶巨头夹缝中迷失 同仁堂等遭</li>
                            <li>凉茶风光不再:负面新闻频发 高糖饮品销售</li>
                            <li>凉茶怎么“凉”的:潜规则、边缘化、互撕……_西药</li>
                            <li>申请挂牌新三板 邓老凉茶年销售收入不及行业龙头2%</li>
                        </ul>
                    </div>
                    <div class="box3">
                        <div class="name">负面舆情应对说明</div>
                    </div>
                    <div class="box4">
                        <div class="name">舆情处理建议</div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";
export default {
    name:"index",
    components:{DefaultPage}
}
</script>

<style scoped lang="scss">
 .mark-content{
     .first-line{
         display: flex;
         justify-content: space-between;
         margin-bottom: 24px;
        .mark-overview,.tea-trend{
            width: calc( 50% - 12px);
            height: 460px;
            padding: 24px;
            box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
            border-radius: 8px;
            border: 1px solid #FFFFFF;
            background: url("../../assets/img/mark/colourfol.png") no-repeat center center / 100% 460px;
            .title{
                height: 24px;
                margin-bottom: 24px;
                font-size: 16px;
                font-weight: 500;
                color: #242F57;
                line-height: 24px;
            }
        }
        .mark-overview{
            display: flex;
            flex-direction: column;
            .box-content{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .echart{
                    width: calc(100% - 260px);
                    height: 100%;
                }
                .card-list{
                    width: 260px;
                    >li{
                        min-height: 56px;
                        margin-bottom: 6px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }
                }
            }
        }
     }

     .second-line{
         width: 100%;
         height: 838px;
         padding: 24px;
         box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
         border-radius: 8px;
         opacity: 0.8;
         border: 1px solid #FFFFFF;
         background: url("../../assets/img/mark/colourfol.png") no-repeat center center / 1100% 838px;
        .title{
            height: 24px;
            margin-bottom: 24px;
            font-size: 16px;
            font-weight: 500;
            color: #242F57;
            line-height: 24px;
        }
        .second-content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .box1,.box2{
                width: calc(50% - 12px);
                height: 328px;
                padding: 16px;
                margin-bottom: 24px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
            }  
            .box3,.box4{
                width: calc(50% - 12px);
                height: 390px;
                padding: 16px;
                margin-bottom: 24px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 8px;
                border: 1px solid #FFFFFF;
            }
        }
  
     }

 }
</style>