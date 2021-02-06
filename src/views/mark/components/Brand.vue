<template>
  <div class="brand-position-impress">
    <div class="b-title">品牌定位与用户印象</div>
    <div class="b-sub-title">
      品牌常在亲友聚会、运动时被提及，建议推广品牌时聚焦该优势，重点强调、重复强调，强化客群品牌联想度。
      品牌代言方面需寻求有"时尚、活力、健康" 等相匹配人员进行代言。所匹配的公众人物样板为： 刘昊然 周冬雨 冯提莫
    </div>
    <div class="b-show-detail">
      <div class="b-show-item position">
        <div class="item-title">品牌定位</div>
        <ul class="item-content">
          <li>
            <p>品牌核心资产</p>
            <span>轻体养生</span>
          </li>
          <li>
            <p>品牌支撑点</p>
            <span>汉方</span>
            <span>国医</span>
            <span>草本</span>
          </li>
          <li>
            <p>品牌记忆点</p>
            <span>国医邓老</span>
            <span>健康奶茶</span>
            <span>龟苓膏</span>
          </li>
          <li>
            <p>品牌色彩</p>
            <span>绿色</span>
            <span>白色</span>
            <span>磨砂透明</span>
          </li>
          <li>
            <p>品牌形象</p>
            <span>简约</span>
            <span>轻奢</span>
          </li>
        </ul>
      </div>
      <div class="b-show-item impression">
        <div class="item-title">品牌的用户印象</div>
        <div class="echarts">
            <iframe src="/static/html/pphx/rdyc1.html" frameborder="0" scrolling="no" style="width:100%;height:100%"></iframe>
        </div>
      </div>
      <div class="b-show-item relation">
        <div class="item-title">品牌热度关联场景</div>
        <div class="echarts">
            <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box22Data" ></PieEcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieEcharts from "../../../components/echarts/common/PieEcharts"
export default {
    name:"Brand",
    components:{PieEcharts}
};
</script>

<style lang="scss" scoped>
.brand-position-impress {
  height: 430px;
  padding: 24px;
  background: #ffffff;
  box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
  border-radius: 12px;
  border: 1px solid #eaedf7;

  .b-title {
    height: 24px;
    margin-bottom: 8px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #242f57;
    line-height: 24px;
  }
  .b-sub-title {
    max-height: 44px;
    margin-bottom: 24px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636e95;
  }
  .b-show-detail {
    display: flex;
    justify-content: space-between;
    .b-show-item {
      width: 33.3%;
      height: 282px;
      padding: 16px;
      background: #ffffff;
      border-radius: 4px;
      border: 1px solid #eaedf7;
      .item-title {
        height: 22px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
        line-height: 22px;
      }
      .echarts{
          height: calc(100% - 22px);
      }
    }
    .position {
      margin-right: 24px;
      .item-title {
        margin-bottom: 16px;
      }
      .item-content {
        > li {
          display: flex;
          align-items: center;
          height: 40px;
          > p {
            height: 22px;
            margin-right: 8px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            line-height: 22px;
          }
          > span {
            display: inline-block;
            height: 24px;
            padding:0 8px;
            margin-right: 9px;
            background: rgba(221, 233, 255, 0.5);
            border-radius: 4px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2373ff;
            text-align: center;
            line-height: 24px;
          }
        }
      }
    }
  }
}
</style>