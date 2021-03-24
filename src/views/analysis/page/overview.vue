<template>
  <div class="overview-container">
    <div class="header-nav">
      <p>整体概览</p>
    </div>
    <div class="show-data">
      <vCard2
        v-for="(item, index) in gailanLixt"
        :key="index"
        :cardData="item"
      ></vCard2>
    </div>
    <Card title="整体趋势">
      <div>
        <Half
          lTitle="GMV近30天变化趋势"
          subDateL="2021.02.01-2021.02.28"
          rTitle="过去7天日活"
          subDateR="2021.02.22-2021.02.28"
        >
          <lineS
            slot="echarts"
            id="box60"
            y-name="GMV（万元）"
            :hasAreaStyle="true"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox1"
          />
          <lineM
            slot="rightEcharts"
            y-name="日活数"
            :hasAreaStyle="true"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox2"
          />
        </Half>
        <Half
          lTitle="周访问频次"
          subDateL="2021.02.22-2021.02.28"
          rTitle="APP平均使用时长"
          subDateR="2021.02.22-2021.02.28"
        >
          <barM
            slot="echarts"
            id="box57"
            y-name="人数"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox3"
          />
          <lineS
            slot="rightEcharts"
            id="box56"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox4"
          />
        </Half>
      </div>
    </Card>
    <Card title="增长态势">
      <Half
        lTitle="日活"
        subDateL="2021.02.22-2021.02.28"
        rTitle="商品详情页浏览的总次数"
        subDateR="2021.02.22-2021.02.28"
      >
        <lineM
          slot="echarts"
          id="box55"
          y-name="日活数"
          :hasAreaStyle="true"
          :option="{ xAxis: { boundaryGap: false } }"
          :colorList="$ljEData.colorList"
          :myData="$ljEData.ljBox5"
        />
        <lineM
          slot="rightEcharts"
          y-name="日活数"
          :hasAreaStyle="true"
          :option="{ xAxis: { boundaryGap: false } }"
          :colorList="$ljEData.colorList"
          :myData="$ljEData.ljBox6"
        />
      </Half>
      <Half
        lTitle="使用优惠券的用户数"
        subDateL="2021.02.22-2021.02.28"
        rTitle="推送转化的人均次数"
        subDateR="2021.02.22-2021.02.28"
      >
        <lineM
          slot="echarts"
          y-name="日活数"
          :hasAreaStyle="true"
          :option="{ xAxis: { boundaryGap: false } }"
          :colorList="$ljEData.colorList"
          :myData="$ljEData.ljBox7"
        />
        <Table
          slot="rightEcharts"
          :columns="columns"
          :data="tabData"
          style="margin-top: 60px"
        >
          <template slot-scope="{ row, index }" slot="index">
            <span class="operation">{{ index + 1 }}</span>
          </template>
        </Table>
      </Half>
    </Card>
    <Card title="用户旅程">
      <Full title="用户生命周期">
        <barM
          y-name="人数"
          :colorList="$ljEData.colorList"
          :myData="$ljEData.ljBox8"
        />
      </Full>
    </Card>
  </div>
</template>

<script>
import Card from "../base/Card";
import DataCard from "../base/DataCard";
import Half from "../base/Half";
import Full from "../base/Full";
import vCard2 from "../../../components/common/card2";
import lineS from "../../../components/echarts/common/line/lineS";
import lineM from "../../../components/echarts/common/line/lineM";
import barM from "../../../components/echarts/common/bar/barM";
export default {
  name: "overview",
  data() {
    return {
      gailanLixt: [
        {
          id: 0,
          bgc: "#D3E3FF",
          fColor: "#2373FF",
          til: "全站流量（当日）",
          jyNum: "8,639",
          jyUnit: "次",
          ysIcon: "bgi2",
          upper: "9.72%",
          downper: "3.54%",
          jyIcon: require("../../../assets/img/analysis/tab1.png"),
          type: "jyfx",
        },
        {
          id: 1,
          bgc: "#FFE6DE",
          fColor: "#FE774B",
          til: "全站日活",
          jyNum: "1,500",
          jyUnit: "人",
          ysIcon: "bgi1",
          upper: "4.56%",
          downper: "1.12%",
          jyIcon: require("../../../assets/img/analysis/tab2.png"),
          type: "jyfx",
        },
        {
          id: 2,
          bgc: "#DFF8F6",
          fColor: "#1DCEC3",
          til: "注册用户数（当日）",
          jyNum: "162",
          jyUnit: "人",
          ysIcon: "bgi3",
          upper: "8.06%",
          downper: "5.12%",
          jyIcon: require("../../../assets/img/analysis/tab3.png"),
          type: "jyfx",
        },
        {
          id: 3,
          bgc: "rgba(241,110,132,.1)",
          fColor: "#F16E84",
          til: "GMV",
          jyNum: "146.6",
          jyUnit: "万",
          ysIcon: "bgi4",
          upper: "2.56%",
          downper: "9.12%",
          jyIcon: require("../../../assets/img/analysis/tab4.png"),
          type: "jyfx",
        },
        {
          id: 4,
          bgc: "rgba(241,110,132,.1)",
          fColor: "#F16E84",
          til: "订单量（当日）",
          jyNum: "2,337",
          jyUnit: "次",
          ysIcon: "bgi4",
          upper: "2.56%",
          downper: "9.12%",
          jyIcon: require("../../../assets/img/analysis/tab5.png"),
          type: "jyfx",
        },
        {
          id: 5,
          bgc: "#DFF8F6",
          fColor: "#1DCEC3",
          til: "下单人数（当日）",
          jyNum: "341",
          jyUnit: "人",
          ysIcon: "bgi3",
          upper: "8.06%",
          downper: "5.12%",
          jyIcon: require("../../../assets/img/analysis/tab6.png"),
          type: "jyfx",
        },
        {
          id: 6,
          bgc: "#D3E3FF",
          fColor: "#2373FF",
          til: "下单转化率（当日）",
          jyNum: "23.6",
          jyUnit: "%",
          ysIcon: "bgi2",
          upper: "9.72%",
          downper: "3.54%",
          jyIcon: require("../../../assets/img/analysis/tab7.png"),
          type: "jyfx",
        },
        {
          id: 7,
          bgc: "#FFE6DE",
          fColor: "#FE774B",
          til: "客单价（当日）",
          jyNum: "1,214",
          jyUnit: "元",
          ysIcon: "bgi1",
          upper: "4.56%",
          downper: "1.12%",
          jyIcon: require("../../../assets/img/analysis/tab8.png"),
          type: "jyfx",
        },
      ],
      columns: [
        {
          title: "序号",
          slot: "index",
          width: 100,
        },
        {
          title: "意向",
          key: "intention",
          width: 200,
        },
        {
          title: "2021/2/1",
          key: "time1",
          width: 200,
        },
        {
          title: "2021/2/1",
          key: "time1",
          width: 200,
        },
        {
          title: "2021/2/6",
          key: "time2",
          width: 200,
        },
        {
          title: "2021/2/11",
          key: "time3",
          width: 200,
        },
        {
          title: "2021/2/16",
          key: "time4",
          width: 200,
        },
        {
          title: "2021/2/21",
          key: "time5",
          width: 200,
        },
        {
          title: "2021/2/26",
          key: "time6",
          width: 200,
        },
      ],
      tabData: [
        {
          intention: "高意向",
          time1: 1.34,
          time2: 1.27,
          time3: 1.23,
          time4: 1.24,
          time5: 1.29,
          time6: 1.34,
        },
        {
          intention: "低意向",
          time1: 1.34,
          time2: 0.72,
          time3: 0.61,
          time4: 0.81,
          time5: 0.73,
          time6: 0.88,
        },
        {
          intention: "无意向",
          time1: 0.04,
          time2: 0.02,
          time3: 0.03,
          time4: 0.01,
          time5: 0.09,
          time6: 0.04,
        },
      ],
    };
  },
  components: { Card, DataCard, Half, Full, vCard2, lineS, lineM, barM },
};
</script>

<style scoped lang="scss">
.overview-container {
  padding: 0 24px 24px 24px;
  .show-data {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 0 10px 0;
    box-sizing: border-box;
    border-radius: 12px;
    margin-bottom: -24px;
  }
}
</style>