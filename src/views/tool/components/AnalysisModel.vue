<template>
  <div class="analysis-model">
      <div class="title">分析模型</div>
      <div class="choose-model">
          <div class="choose-model-title">选择模型</div>
          <ul>
              <li class="model-item" v-for="(item,index) in modelList" :key="index" @click="modelClick(item.type)">
                  <div class="icon" :class="item.type"></div>
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
                type:"event",
                title:"事件分析",
                desc:"可进行筛选、分组、聚合的灵活多维度数据分析"
            },{
                type:"funnel",
                title:"漏斗分析",
                desc:"分析多步骤行为之间的转化与流失情况"
            },{
                type:"keep",
                title:"留存分析",
                desc:"分析用户参与情况和活跃程度"
            },{
                type:"distribute",
                title:"分布分析",
                desc:"分析用户行为在一段时间内的频次和指标分析"
            },{
                type:"way",
                title:"用户途径分析",
                desc:"分析用户实际行为的流向变化"
            },{
                type:"hot",
                title:"网页热力分析",
                desc:"分析元素点击的分布占比逾用户浏览深度"
            },{
                type:"interval",
                title:"间隔分析",
                desc:"分析用户在两个事件之间的间隔时长"
            },{
                type:"defined",
                title:"自定义查询",
                desc:"支持对全量数进行 SQL 查询，结果可视化"
            },{
                type:"cause",
                title:"归因分析",
                desc:"分析产品运营与目标转化的贡献关系"
            },{
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
      this.$router.push({name:"analysis-tool-fxmx-event"})
    },
    funnel(){
      this.$router.push({name:"analysis-tool-fxmx-funnel"})
    },
    keep(){
      this.$router.push({name:"analysis-tool-fxmx-keep"})
    },
    distribute(){
      this.$router.push({name:"analysis-tool-fxmx-distribute"})
    },
    way(){
      this.$router.push({name:"analysis-tool-fxmx-way"})
    },
    hot(){
      this.$router.push({name:"analysis-tool-fxmx-hot"})
    },
    interval(){
      this.$router.push({name:"analysis-tool-fxmx-interval"})
    },
    defined(){
      this.$router.push({name:"analysis-tool-fxmx-defined"})
    },
    cause(){
      this.$router.push({name:"analysis-tool-fxmx-cause"})
    },
    property(){
      this.$router.push({name:"analysis-tool-fxmx-property"})
    },
    app(){
      this.$router.push({name:"analysis-tool-fxmx-app"})
    }
  }  

}
</script>

<style scoped lang="scss">
.analysis-model{
    .title{
        height: 64px;
        padding-left: 48px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
        line-height: 64px;
    }
    .choose-model{
        height: 740px;
        padding: 24px 0 24px 24px;
        margin:0 24px 24px;
        background: #FFFFFF;
        box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
        border-radius: 8px;
        .choose-model-title{
            height: 24px;
            margin-bottom: 16px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 24px;
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
                box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16);
            }
            .icon{
                width: 50px;
                height: 50px;
                border-radius: 25px;
                border: 1px solid #FFFFFF;
                &.event{
                    background: #4D94FF;
                    box-shadow: 2px 3px 8px 0px rgba(77, 148, 255, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.funnel{
                    background: #FFD98C;
                    box-shadow: 2px 3px 8px 0px rgba(255, 217, 140, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.keep{
                    background: #FC809F;
                    box-shadow: 2px 3px 8px 0px rgba(252, 128, 159, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.distribute{
                    background: #A49DFA;
                    box-shadow: 2px 3px 8px 0px rgba(164, 157, 250, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.way{
                    background: #95E9ED;
                    box-shadow: 2px 3px 8px 0px rgba(149, 233, 237, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.hot{
                    background: #4D94FF;
                    box-shadow: 2px 3px 8px 0px rgba(77, 148, 255, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.interval{
                    background: #FC809F;
                    box-shadow: 2px 3px 8px 0px rgba(252, 128, 159, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.defined{
                    background: #A49DFA;
                    box-shadow: 2px 3px 8px 0px rgba(164, 157, 250, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.cause{
                    background: #95E9ED;
                    box-shadow: 2px 3px 8px 0px rgba(149, 233, 237, 0.5), -2px -2px 8px 0px #FFFFFF;
                }
                &.property{
                    background: #FFD98C;
                    box-shadow: 2px 3px 8px 0px rgba(255, 217, 140, 0.5), -2px -2px 8px 0px #FFFFFF;
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
