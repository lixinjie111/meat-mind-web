<template>
    <Card title="品牌价值传播链" class="card-five">
        <p class="card-five-desc">以区域目标用户（华北地区年轻上班族）真实需求为起点”，将品牌资源、品牌核心资产和品牌定位整合优化，打造满足用户消费期望的支撑性产品及服务，以品牌价值链条为载体有效传递给消费者、促成营销闭环的最佳实现链路。</p>
        <div class="card-five-top">
            <div class="card-five-top-img"><img src="../../../assets/img/mark/img_card_bg@2x.png" alt=""></div>
            <div class="card-five-top-list">
                <div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">01 传播核心理念</div>
                        <p class="item-desc">“现代人喝现代凉茶” <br/>
                            “天人相应，辨证施治，上工治未病”</p>
                    </div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">02 品牌目的</div>
                        <p class="item-desc">把“现代凉茶”打造成中国凉茶标准 </p>
                    </div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">03 品牌核心资产</div>
                        <p class="item-desc">国医邓老，六味组方，轻体养生</p>
                    </div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">04 产品支撑点</div>
                        <p class="item-desc">邓老凉茶，五味消毒饮/邓老清冠饮，凉茶研究所 </p>
                    </div>
                </div>
                <div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">05 品牌记忆点</div>
                        <p class="item-desc">“现代人喝现代凉茶”国医大师邓老 | 1-9号秘方国家级非物质文化遗产 | 抗击SARS“三个零”战绩</p>
                    </div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">06 传播创意</div>
                        <p class="item-desc">突出治愈、鲜活、新生等功效的同时，体现非遗级秘方的品牌调性；简约、专业、责任“纯天然”中草药0添加，“大道…</p>
                    </div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">07 内容类型</div>
                        <p class="item-desc">微信，微博，线下活动，新闻稿，深度营销推文，海报，广告Banner…</p>
                    </div>
                    <div class="card-five-top-list-item">
                        <div class="item-title">08 传播平台</div>
                        <p class="item-desc">APP，微信小程序，红人KOL微博/微信，自媒体，广告大屏，品牌公众号…</p>
                    </div>
                </div>


            </div>
        </div>
        <div class="card-five-box">
            <Half lTitle="品牌热度关联场景" rTitle="品牌实际用户印象">
                <SerachPoptip slot="left-operation" @submit="search"></SerachPoptip>
                <div slot="right-operation"></div>
                <PieEcharts5 slot="left" :myData="myData1"></PieEcharts5>
                <iframe slot="right" src="/static/html/pphx/rdyc.html" frameborder="0" scrolling="no" style="width:100%;height:100%"></iframe>
            </Half>


        </div>
        <div class="table-warp">
            <Table :columns="columns" :data="data" >
                <template slot-scope="{ row, index }" slot="goods">
                    <div class="" ><span>{{row.goods}}</span></div>
                </template>
                <template slot-scope="{ row, index }" slot="property">
                    <div class="table-ceil" ><span>{{row.property}}</span></div>
                </template>
                <template slot-scope="{ row, index }" slot="memory">
                    <div class="table-ceil" ><span>{{row.memory}}</span></div>
                </template>
                <template slot-scope="{ row, index }" slot="summary">
                    <div class="table-ceil" ><span>{{row.summary}}</span></div>
                </template>
                <div class="table-ceil" slot-scope="{ row, index }" slot="communicationMeans">
                    <div  v-for="(it, i) in row.communicationMeans" :key="`${index}-${i}`"><span>{{i + 1}}、{{it}}</span></div>
                </div>
                <template slot-scope="{ row, index }" slot="lightspot">
                    <div class="table-ceil"><span  class="dot"></span> {{row.lightspot}}</div>
                </template>
            </Table>
        </div>

    </Card>
</template>

<script>
  import Card from "../../../components/Card"
  import Half from "../base/Half"
  import PieEcharts5 from '../../../components/echarts/common/PieEcharts5';
  import SerachPoptip from '../../../components/common/SerachPoptip';
  export default {
    name: "brand-value",
    components: { Card, Half, PieEcharts5, SerachPoptip },
    data(){
      return{
        myData1: {
          name: ['亲友聚会', '运动', '过节送礼'],
          value: [38, 5, 42],
        },
        columns: [
          {
            title: '竞品',
            slot: 'goods',
            width: 0.75*window.rem,
          },
          {
            title: '属性',
            slot: 'property',
            width: 0.75*window.rem,
          },
          {
            title: '传播手段',
            slot: 'communicationMeans',
          },
          {
            title: '传播亮点',
            slot: 'lightspot',
          },
          {
            title: '传播记忆点',
            slot: 'memory',
          },
          {
            title: '传播总结点',
            slot: 'summary',
          },
        ],
        data: [
          {
            goods: '和其正',
            property: '民间传统配方草本植物材料老少皆宜',
            communicationMeans: ['明星代言', '全国铺货'],
            lightspot: '包装仿照行业老大，站在巨人的肩膀上，让消费者似曾相识',
            memory: '熬夜伤神后补充"元气"',
            summary: '跟随策略无法真正替代行业老大，渠道单一化，把握凉茶饮料的产品本质突出差异化优势',
          },
          {
            goods: '白云山',
            property: '由口炎e清凉茶华丽蜕变',
            communicationMeans: ['品牌背书', '网红式营销'],
            lightspot: '改良配方，清爽可口，果味凉茶',
            memory: '熬夜一族必备',
            summary: '营销宣传力度过低，难以形成品牌记忆，目标人群单一',
          },
          {
            goods: '王老吉',
            property: '红罐凉茶 预防上火 清火解毒',
            communicationMeans: ['传统户外广告', '电视广告'],
            lightspot: '配合餐饮渠道宣传，促成裂变',
            memory: '“怕上火，喝王老吉”洗脑式品牌广告',
            summary: '-',
          },
          {
            goods: '同仁堂',
            property: '草本功能茶饮',
            communicationMeans: ['线上入驻京东商城', '线下开设同仁堂茶饮店'],
            lightspot: '产品及服务还原药煮凉茶所有步骤',
            memory: '百年老字号药方',
            summary: '品牌及产品风格设计正在往年轻化转型',
          },
        ],
        params: {}
      }
    },
    methods:{
      search(params){

        const key = JSON.stringify(params)
        if(!this.params[key]){
          const value1 = this.randomValue()
          const value2 = this.randomValue()
          const value3 = this.randomValue()
          this.myData1.value = [value1, value2, value3]
          this.params[key] = [value1, value2, value3]
        }else {
          this.myData1.value = this.params[key]
        }
        this.myData1 = JSON.parse(JSON.stringify(this.myData1))
      },
      randomValue(){
        return Math.ceil(Math.random() * 100)
      }
    }
  }
</script>

<style scoped lang="less">
    .card-five {
        margin-top: 24px;
        ::v-deep .title .left > p{font-size: 18px;}

        .card-five-desc {
            margin: -15px 0 24px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;

            > span {
                color: #FB343E;
            }
        }
        .card-five-top{
            height: 440px;
            margin-top: 24px;
            margin-bottom: 20px;
            display: flex;

            .card-five-top-img{
                width: 264px;
                height: 448px;
                flex: 0 1 264px;
                img{
                    width: 100%;
                }
            }
            .card-five-top-list{
                margin-left: 16px;
                display: flex;
                flex-wrap: wrap;
                flex: 0 1 850px;
                justify-content: space-between;
                .card-top-list-container{
                    display: flex;
                    flex-wrap: wrap;
                }
                .card-five-top-list-item{
                    width: 400px;
                    height: 96px;
                    background: linear-gradient(90deg, #F8FBFF 0%, #E3EFFF 100%);
                    border-radius: 4px;
                    margin-bottom: 18px;
                    overflow: hidden;
                    /*pa*/
                    /*margin-right: 14px;*/
                }
                .item-title{
                    font-size: 16px;
                    font-weight: 500;
                    color: #2373FF;
                    line-height: 22px;
                    position: relative;
                    border-left: 3px solid #2373FF;
                    padding: 0 16px;
                    margin-top: 16px;
                    display: flex;
                    align-items: center;
                }
                .item-desc{
                    margin-top: 8px;
                    height: 40px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #7C88B1;
                    line-height: 20px;
                    padding: 0 16px;
                }
            }
        }
        .card-five-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: relative;
            margin-bottom: 16px;


        }
        .table-warp{
            padding-bottom: 24px;
            ::v-deep .ivu-table {
                .ivu-table-header thead tr th{
                    height: 54px;
                }
             }
            .dot{
                display: inline-block;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background: #636E95;
            }
            .noPadding{
                padding: 0 !important;
            }
            .table-ceil{
                /*height: 66px;*/
                padding: 20px 0;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                line-height: 22px;
            }
        }
    }

</style>