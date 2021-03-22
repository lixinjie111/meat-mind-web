<template>
  <div class="brand-container">
    <div class="header-nav">
      <p>品牌运营分析</p>
    </div>
    <Card title="业务概览">
      <div>
        <Half
          lTitle="健康状态分布"
          subDateL="90家已流失，未参与统计"
          rTitle="最近业务主题"
          subDateR=""
        >
          <PieCaseEcharts
            slot="echarts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox32"
          />
          <PieCaseEcharts
            slot="rightEcharts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox33"
          />
        </Half>
        <vzbcard :zObj="zcObj"></vzbcard>
      </div>
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
import PieCaseEcharts from "../../../components/echarts/common/pie/PieCaseEcharts";
import vzbcard from "../base/zbCard";
export default {
  name: "brand",
  data() {
    return {
      zcObj: {
        til: "整体指标",
        zbList: [
          {
            id: 0,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 1,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 2,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 3,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 4,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 5,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 6,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 7,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 8,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 9,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
          {
            id: 10,
            til: "总客户数",
            num: 102,
            unit: "家",
          },
        ],
      },
    };
  },
  components: {
    Card,
    DataCard,
    Half,
    Full,
    vCard2,
    lineS,
    lineM,
    barM,
    PieCaseEcharts,
    vzbcard,
  },
};
</script>

<style scoped lang="scss">
.brand-container {
  padding: 0 24px 24px 24px;
}
</style>
