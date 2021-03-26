<template>
  <div class="portrait-matching-item">
    <div class="f-list">
      <div class="f-item" @click="changeModel(index)" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
    <div class="subTitle1" v-if="list4Act === 0">抖音用户，以22-30岁的女性自由职业者居多，占比80%以上。整体收入水平中等，使用时间多分布于中午和晚间。</div>
    <div class="subTitle1" v-else-if="list4Act === 1">快手用户，以二三线城市居多，28岁以下用户占比82%，偏好休闲娱乐类应用，使用时间多分布于中午和晚间。</div>
    <div class="subTitle1" v-else-if="list4Act === 2">微视用户，用户多为中年，25-35岁用户居多，男女比例相对均衡，使用时间多分布于中午和晚间。</div>
    <div class="subTitle1" v-else-if="list4Act === 3">梨视频用户，用户多为中年，整体收入水平偏中上等，男女比例相对均衡，使用时间多分布于早上和中午。</div>
    <div class="subTitle1" v-else-if="list4Act === 4">西瓜视频用户，用户多为中年，整体收入水平偏中等，男性占比较高，使用时间多分布于中午和晚间。</div>
    <div class="chart-container">
      <div class="chart-box-title">内圈为自身品牌用户画像，外圈为不同媒介用户画像。</div>
      <div class="chart-box">
        <div>
          <div class="chart-item-title">性别分布</div>
          <PieNest1 :colorList="$abelData.colorList" :myData="nest01Data" :key="`1-${index}`" title="匹配度" :value="index === 1 ? 92 : 85"></PieNest1>
        </div>
        <div>
          <div class="chart-item-title">年龄分布</div>
          <PieNest1 :colorList="$abelData.colorList" :myData="nest02Data" :key="`2-${index}`" title="匹配度" :value="index === 1 ? 92 : 85"></PieNest1>
        </div>
        <div>
          <div class="chart-item-title">职业分布</div>
          <PieNest1 :colorList="$abelData.colorList" :myData="nest03Data" :key="`3-${index}`" title="匹配度" :value="index === 1 ? 90 : 85"></PieNest1>
        </div>
        <div>
          <div class="chart-item-title">收入分布</div>
          <PieNest1 :colorList="$abelData.colorList" :myData="nest04Data" :key="`4-${index}`" title="匹配度" :value="index === 1 ? 80 : 74"></PieNest1>
        </div>
        <div>
          <div class="chart-item-title">家庭情况</div>
          <PieNest1 :colorList="$abelData.colorList" :myData="nest05Data" :key="`5-${index}`" title="匹配度" :value="index === 1 ? 87 : 30"></PieNest1>
        </div>
        <div>
          <div class="chart-item-title">网龄结构</div>
          <PieNest1 :colorList="$abelData.colorList" :myData="nest06Data" :key="`6-${index}`" title="匹配度" :value="index === 1 ? 87 : 45"></PieNest1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PieNest1 from '../../../components/echarts/common/pie/PieNest1';
  export default {
    components: { PieNest1 },
    props: ['name', 'label'],
    data() {
      // console.log('pppppppppppppppp')
      return {
        list4Act: 0,
        list4: ["抖音", "快手", "微视", "梨视频", "西瓜视频"],
        tabs: ['短视频','社交传媒', '大众传媒' , '体验事件' , '促销' , '在线社交媒体' , '公共关系和宣传' , '网站'  , '其他' ],
        nest01Data: this.$abelData.nest01Data,
        nest02Data: this.$abelData.nest02Data,
        nest03Data: this.$abelData.nest03Data,
        nest04Data: this.$abelData.nest04Data,
        nest05Data: this.$abelData.nest05Data,
        nest06Data: this.$abelData.nest06Data,
        index: 0,
      }
    },
    mounted() {
    },
    methods: {
      changeModel(current) {
        this.list4Act = current
        this.refreshData()
      },
      refreshData(){
        if(this.index === 0){
          this.nest01Data = this.$abelData.nest01Data;
          this.nest02Data = this.$abelData.nest02Data;
          this.nest03Data = this.$abelData.nest03Data;
          this.nest04Data = this.$abelData.nest04Data;
          this.nest05Data = this.$abelData.nest05Data;
          this.nest06Data = this.$abelData.nest06Data;
          this.index = 1
        }else {
          this.nest01Data = this.$abelData.nest01_cloneData;
          this.nest02Data = this.$abelData.nest02_cloneData;
          this.nest03Data = this.$abelData.nest03_cloneData;
          this.nest04Data = this.$abelData.nest04_cloneData;
          this.nest05Data = this.$abelData.nest05_cloneData;
          this.nest06Data = this.$abelData.nest06_cloneData;
          this.index = 0
        }
      },
      clickMoreType() {
        this.moreOpen = !this.moreOpen
      },
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  .portrait-matching-item{
    margin-top: 16px;
  }
  .m-p-target-title {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #242F57;
    margin-bottom: 16px;
    span {
      cursor: pointer;
      position: relative;
      .m-pie-tip {
        position: absolute;
        left: 22px;
        top: 0;
        width: 200px;
        background: rgba(219, 234, 255, 0.94);
        border-radius: 8px;
        border: 1px solid #4D94FF;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        line-height: 17px;
        padding: 16px;
        text-align: justify;
      }
    }
  }
  .subTitle{
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    color: #636E95;
    line-height: 20px;
  }
  .subTitle1{
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 400;
    color: #636E95;
    line-height: 20px;
  }
  .f-list {
    width: calc(100% - 96px);
    display: flex;
    flex-wrap: wrap;
    .f-item {
      margin-right: 16px;
      margin-bottom: 16px;
      cursor: pointer;
      /*width: 68px;*/
      height: 28px;
      font-size: 14px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.active {
        background: #2373FF;
        border-radius: 4px;
        > p {
          color: #FFFFFF;
        }
      }
      > p {
        height: 22px;
        font-size: inherit;
        font-weight: 400;
        color: #242F57;
        /*line-height: 22px;*/
      }
    }
  }
  .chart-container{
    border: 1px solid #EAEDF7;
    border-radius: 8px;
    overflow: hidden;
    .chart-box-title{
      font-size: 12px;
      font-weight: 400;
      color: #97A0C3;
      margin: 8px 10px 0 10px;
    }
    .chart-box{
      width: 100%;
      height: 637px;
      background: #FFFFFF;

      /*padding: 16px 15px;*/
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-wrap: wrap;
      &>div{
        width: 352px;
        height: 270px;
        min-height: 262px;;
        margin-right: 10px;
        position: relative;
        &:last-child{
          margin-right: 0;
        }
        .chart-item-title{
          position: absolute;
          left: 12px;
          font-size: 12px;
          font-weight: 400;
          color: #636E95;
          line-height: 20px;
        }
      }


    }
  }

</style>
