<template>
  <div class="analysis-model">
      <div class="header-nav">
          <p>分析模型</p>
      </div>
      <div class="choose-model">
          <div class="choose-model-title">选择模型</div>
          <ul>
              <li class="model-item" v-for="(item,index) in modelList" :key="index" @click="modelClick(item.type)">
                  <div class="icon" :class="item.type"><i class="iconfont" :class="item.icon"></i></div>
                  <div class="right">
                      <p>{{item.title}}</p>
                      <div class="desc">{{item.desc}}</div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name:"AnalysisModel",
  data(){
    return {
        modelList:[
            {   
                icon:"iconshijianfenxi",
                type:"event",
                title:"事件分析",
                desc:"可进行筛选、分组、聚合的灵活多维度数据分析"
            },{
                icon:"iconloudoufenxi",
                type:"funnel",
                title:"漏斗分析",
                desc:"分析多步骤行为之间的转化与流失情况"
            },{
                icon:"iconliucunfenxi",
                type:"keep",
                title:"留存分析",
                desc:"分析用户参与情况和活跃程度"
            },{
                icon:"iconfenbufenxi",
                type:"distribute",
                title:"分布分析",
                desc:"分析用户行为在一段时间内的频次和指标分析"
            },{
                icon:"iconyonghutujingfenxi",
                type:"way",
                title:"用户途径分析",
                desc:"分析用户实际行为的流向变化"
            },{
                icon:"iconwangyerelifenxi",
                type:"hot",
                title:"网页热力分析",
                desc:"分析元素点击的分布占比逾用户浏览深度"
            },{
                icon:"iconjiangefenxi",
                type:"interval",
                title:"间隔分析",
                desc:"分析用户在两个事件之间的间隔时长"
            },{
                icon:"iconzidingyichaxun",
                type:"defined",
                title:"自定义查询",
                desc:"支持对全量数进行 SQL 查询，结果可视化"
            },{
                icon:"iconguiyinfenxi",
                type:"cause",
                title:"归因分析",
                desc:"分析产品运营与目标转化的贡献关系"
            },{
                icon:"iconshuxingfenxi",
                type:"property",
                title:"属性分析",
                desc:"基于用户的属性快捷分析用户特征"
            }]
    }
  },
  methods:{
    modelClick(name){
        this[name]()
    },
    event(){
      this.$router.push({name:"analysis-tool-model-event"})
    },
    funnel(){
      this.$router.push({name:"analysis-tool-model-funnel"})
    },
    keep(){
      this.$router.push({name:"analysis-tool-model-keep"})
    },
    distribute(){
      this.$router.push({name:"analysis-tool-model-distribute"})
    },
    way(){
      this.$router.push({name:"analysis-tool-model-way"})
    },
    hot(){
      this.$router.push({name:"analysis-tool-model-hot"})
    },
    interval(){
      this.$router.push({name:"analysis-tool-model-interval"})
    },
    defined(){
      this.$router.push({name:"analysis-tool-model-defined"})
    },
    cause(){
      this.$router.push({name:"analysis-tool-model-cause"})
    },
    property(){
      this.$router.push({name:"analysis-tool-model-property"})
    },
    app(){
      this.$router.push({name:"analysis-tool-model-app"})
    }
  }
}
</script>

<style scoped lang="scss">
.analysis-model{
    padding: 0 24px;
    .choose-model{
        height: 740px;
        padding: 24px 0 24px 24px;
        background: #FFFFFF;
        box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
        border-radius: 8px;

        .choose-model-title{
            margin-bottom: 24px;
            height: 26px;
            line-height: 26px;
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
        }

        >ul {
            //解决滚动条影响页面宽度
            margin-right: -10px;
        }

        .model-item{
            display: inline-flex;
            width: 352px;
            height: 88px;
            padding: 19px;
            margin-right: 24px;
            margin-bottom: 24px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            cursor: pointer;
            &:hover{
                box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16), 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
                border-radius: 4px;
            }
            .icon{
                width: 48px;
                height: 48px;
                line-height: 48px;
                border-radius: 8px;
                text-align: center;

                > i {
                    font-size: 32px;
                    color: #ffffff;
                }

                &.event{
                    background: #2373FF;
                }
                &.funnel{
                    background: #FE774B;
                }
                &.keep{
                    background: #1DCEC3;
                }
                &.distribute{
                    background: #F16E84;
                }
                &.way{
                    background: #FDD352;
                }
                &.hot{
                    background: #2373FF;
                }
                &.interval{
                    background: #FE774B;
                }
                &.defined{
                    background: #1DCEC3;
                }
                &.cause{
                    background: #F16E84;
                }
                &.property{
                    background: #FDD352;
                }
            }
            .right{
                margin-left: 14px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                >p{
                    height: 22px;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    line-height: 22px;
                }
                .desc{
                    width: 246px;
                    // height: 16px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    // line-height: 16px;
                }
            }

        }
    }
}
</style>
