<template>
  <DefaultPage title="媒介画像">
    <div class="media-protrait">
      <div class="m-p-rank">
        <div class="m-p-rank-header">
          <ul class="h-name-list">
            <li>媒介声量排名</li>
            <li>媒介使用时长排名</li>
            <li>媒介口碑排名</li>
            <li>媒介价值贡献排名</li>
          </ul>
          <div class="h-right">
            <div class="h-tab">
              <div class="left">类型</div>
              <div class="right">渠道名称</div>
            </div>
            <div class="h-select">
              <Select style="width: 120px" placeholder="过去3天"></Select>
            </div>
          </div>
        </div>
        <div class="m-p-rank-echarts"></div>
      </div>
      <div class="m-p-filter">
          <div class="m-f-line">
              <div class="label">主投平台</div>
              <div class="f-list">
                <div class="f-item" :class="{'active':index==1}" v-for="(item,index) in list1" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label">领域</div>
              <div class="f-list">
                <div class="f-item" :class="{'active':index==0}" v-for="(item,index) in list2" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label"><span style="color:#FB343E">*</span>
              价格类型</div>
              <div class="f-list">
                <div class="f-item" :class="{'active':index==0}" v-for="(item,index) in list3" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
            <div class="m-p-third-line">
                <div class="m-p-t-title"></div>
                <div class="m-p-t-echarts"></div>
            </div>
      </div>

      <div class="m-p-target">
          <!-- 优化指标 -->
      </div>
      <div class="m-p-kol">
          <!-- KOL资源 -->
      </div>
    </div>
  </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";

export default {
  name: "index",
  components: { DefaultPage },
  data(){
      return{
          list1:["哔哩哔哩","抖音","快手","小红书","新浪微博","头条","大众点评","360kr"],
          list2:["不限","才艺技能","财经投资","测评","动画动漫","鬼畜","国潮国创","技术流","家居家装","教育","剧情搞笑",
          "科技数码","旅行","美食","美妆","萌宠","明星","母婴","汽车","情感","三农","生活日常",
          "时尚","舞蹈","艺术文化","个护","园艺","运动健身","奢侈品","新闻资讯","品牌组织"],
          list3:["按照最低刊例价组合","按照最高刊例价组合"]
      }
  }
};
</script>


<style scoped lang="scss">
.media-protrait {
  .m-p-rank {
    width: 100%;
    height: 339px;
    margin-bottom: 24px;
    background: url("../../assets/img/media/colourfol.png") no-repeat center
      center / 100% 339px;
    box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    .m-p-rank-header {
      display: flex;
      justify-content: space-between;
      padding: 20px 24px 0;
      .h-name-list {
        display: flex;
        align-items: center;
        margin-top: 4px;
        list-style: none;
        > li {
          height: 22px;
          margin-right: 32px;
          font-size: 14px;
          color: #636e95;
          line-height: 22px;
          cursor: pointer;
          &:first-child {
            position: relative;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #2373ff;
            &:after {
              position: absolute;
              top: 30px;
              left: 0;
              content: "";
              width: 76px;
              height: 2px;
              background: #2373ff;
              border-radius: 1px;
            }
          }
        }
      }
      .h-right {
        display: flex;
        cursor: pointer;
        .h-tab {
          display: flex;
          margin-right: 16px;
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          text-align: center;
          .left {
            width: 76px;
            height: 32px;
            border-radius: 8px 0px 0px 8px;
            border: 1px solid #2373ff;
            color: #2373ff;
            line-height: 30px;
          }
          .right {
            width: 76px;
            height: 32px;
            border-radius: 0px 8px 8px 0px;
            border: 1px solid #c6cbde;
            color: #636e95;
            line-height: 30px;
          }
        }
        .h-select {
        }
      }
    }
    .m-p-rank-echarts {
      width: 100%;
      height: 287px;
      padding: 0 24px;
    }
  }
  .m-p-filter{
    width: 100%;
    height: 1878px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 0px 0px 48px 0px rgba(255, 255, 255, 0.8);
    border-radius: 8px;
    opacity: 0.8;
    border: 1px solid;
    border-image: linear-gradient(141deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 1;
    background: url("../../assets/img/media/colourfol.png") no-repeat center center / 100% 1878px;
    .m-f-line{
        display: flex;
        width: 100%;
        margin-bottom: 8px;
        .label{
            width: 96px;
            height: 32px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
            line-height: 32px;
        }
        .f-list{
            width: calc(100% - 96px);
            display: flex;
            flex-wrap: wrap;
            .f-item{
                padding: 5px 16px;
                margin-right: 16px;
                margin-bottom: 16px;
                &.active{
                    background: linear-gradient(135deg, #FF8D0A 0%, #FFA733 100%);
                    box-shadow: 3px 3px 14px 0px rgba(148, 76, 46, 0.2), -3px -3px 14px 0px #FFFFFF, 1px 1px 2px 0px rgba(255, 247, 230, 0.6);
                    border-radius: 16px;
                    >p{
                        color: #FFFFFF;
                    }
                }
                >p{
                    height: 22px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;
                }
            }
        }
    }
    .m-p-third-line{
        width: 100%;
        height: 654px;
        padding: 16px;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #EAEDF7;
        .m-p-t-title{
            height: 24px;
            margin-bottom: 16px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            line-height: 24px;
        }
        .m-p-t-echarts{
            height: 614px;
        }
    }
  }

  .m-p-target{
    width: 100%;
    height: 510px;
    margin-bottom: 24px;
    background: #FFFFFF;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
  }
  .m-p-kol{
    width: 100%;
    height: 952px;
    background: #FFFFFF;
    box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
    border-radius: 8px;
  }
}
</style>