<template>
  <div class="zbCard">
    <div class="til_con">{{ zObj.til }}</div>
    <div class="it_con">
      <div
        class="it_con_item"
        v-for="(item, index) in zObj.zbList"
        :key="index"
        :class="{'remb':item.id == 6 || item.id == 7 || item.id == 8 || item.id == 9 || item.id == 10,'remmr':item.id == 5}"
      >
        <div class="it_con_item_top">
          <div class="it_til">{{ item.til }}</div>
          <i class="iconfont iconbangzhu"></i>
        </div>
        <div class="it_con_item_bom">
          <div class="it_num">{{ item.num }}</div>
          <div class="it_unit">{{ item.unit }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    zObj: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.zbCard {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #eaedf7;
  padding: 16px;
  box-sizing: border-box;
  .til_con {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #242f57;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .it_con {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .it_con_item {
      margin-right: 120px;
      margin-bottom: 67px;
      .it_con_item_top {
        width: 100%;
        display: flex;
        align-items: baseline;
        .it_til {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7c88b1;
          line-height: 22px;
          margin-right: 6px;
        }
        .iconbangzhu{
            font-size: 14px;
        }
      }
      .it_con_item_bom {
        width: 100%;
        display: flex;
        align-items: baseline;
        .it_num {
          font-size: 30px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #242f57;
          line-height: 38px;
          margin-right: 4px;
        }
        .it_unit {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #7c88b1;
        }
      }
    }
    .remb{
        margin-bottom: 0px;
    }
    .remmr{
        margin-right: 0px;
    }
  }
}
</style>
