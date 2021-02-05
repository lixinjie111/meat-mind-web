<template>
  <div class="new-target">
    <ul>
      <li>
        <div class="item-title">品牌行业排名</div>
        <div class="item-target">前 6.52%</div>
        <div class="item-details">
          用户印象与品牌定位契合度良好，处于行业中等偏上水平
        </div>
        <img src="../../../assets/img/mark/nth1@2x.png" alt="" />
      </li>
      <li>
        <div class="item-title">品牌核心优势</div>
        <div class="item-target">用户认可度</div>
        <div class="item-details">
          草本、汉方、国医邓老等品牌标签得到用户高度认同
        </div>
        <img src="../../../assets/img/mark/nth2@2x.png" alt="" />
      </li>
      <li>
        <div class="item-title">品牌能力</div>
        <div class="item-target">有待提升</div>
        <div class="item-details">
          品牌占据力、传播度待提升（当前排名4/68）。忠诚度整体偏低，存在占比约
          32%的摇摆顾客
        </div>
        <img src="../../../assets/img/mark/nth3@2x.png" alt="" />
      </li>
      <li>
        <div class="item-title">细分领域标杆</div>
        <div class="item-target">王老吉</div>
        <div class="item-details">
          当前软饮料销售榜首为元气森林，凉茶销售榜首为王老吉，品牌竞对品牌定位为和其正、黄振龙、潘高寿
        </div>
        <img src="../../../assets/img/mark/nth4@2x.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Target",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.new-target {
  height: 148px;
  padding: 0 24px;
  margin-bottom: 24px;
  > ul {
    display: flex;
    justify-content: space-between;
    > li {
      position: relative;
      width: 270px;
      height: 148px;
      padding: 16px 24px;
      border-radius: 8px;
      &:nth-child(1) {
        background: linear-gradient(225deg, #1c66de 0%, #98a0f9 100%);
        box-shadow: 2px 4px 10px 0px rgba(41, 59, 149, 0.3);
      }
      &:nth-child(2) {
        background: linear-gradient(221deg, #03a8c8 0%, #8bd5ae 100%);
        box-shadow: 2px 4px 10px 0px rgba(45, 120, 134, 0.3);
      }
      &:nth-child(3) {
        background: linear-gradient(224deg, #f36763 0%, #fab698 100%);
        box-shadow: 2px 4px 10px 0px rgba(109, 57, 143, 0.3);
      }
      &:nth-child(4) {
        background: linear-gradient(224deg, #8378f9 0%, #c392e4 100%);
        box-shadow: 2px 4px 10px 0px rgba(109, 57, 143, 0.3);
      }
      .item-title {
        height: 22px;
        margin-bottom: 4px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 22px;
      }
      .item-target {
        height: 32px;
        margin-bottom: 4px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ffffff;
        line-height: 32px;
        text-shadow: 2px 2px 4px rgba(43, 74, 158, 0.5);
      }
      .item-details {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
      img {
        position: absolute;
        top: 16px;
        right: 24px;
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>