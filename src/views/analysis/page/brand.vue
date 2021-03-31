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
    <Card title="经营概览">
      <Full title="MRR" subTile="单位：万元">
       <barEcharts  :colorList="$ljEData.colorList" :myData="$ljEData.ljBox34"/>
      </Full>
      <Full title="MRR构成" subTile="单位：万元">
        <barM  :colorList="$ljEData.colorList" :myData="$ljEData.ljBox35"/>
      </Full>
    </Card>
    <Card title="Quick Ratio" style="border:none">
      <Full>
        <barM2 :color-list="['red', 'green']"  :colorList="$ljEData.colorList" :myData="$ljEData.ljBox36"/>
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
import PieCaseEcharts from "../../../components/echarts/common/pie/PieCaseEcharts";
import vzbcard from "../base/zbCard";
import barEcharts from '../../../components/echarts/common/bar/barEcharts';
  import barM2 from '../../../components/echarts/common/bar/barM2';
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
            til: "有效客户数",
            num: 76,
            unit: "家",
          },
          {
            id: 2,
            til: "周活跃客户数",
            num: 42,
            unit: "个",
          },
          {
            id: 3,
            til: "周活跃用户",
            num: 1028,
            unit: "个",
          },
          {
            id: 4,
            til: "月活跃客户数",
            num: 44,
            unit: "个",
          },
          {
            id: 5,
            til: "已完成任务",
            num: 5298,
            unit: "个",
          },
          {
            id: 6,
            til: "待办任务",
            num: 26165,
            unit: "个",
          },
          {
            id: 7,
            til: "任务完成率",
            num: 16.84,
            unit: "%",
          },
          {
            id: 8,
            til: "全部任务",
            num: 31482,
            unit: "个",
          },
          {
            id: 9,
            til: "撤销任务",
            num: 19,
            unit: "个",
          },
          {
            id: 10,
            til: "有效任务",
            num: 31463,
            unit: "个",
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
    barEcharts,
    barM2
  },
};
</script>

<style scoped lang="scss">
.brand-container {
  padding: 0 24px 24px 24px;
  .header-nav{
    padding-bottom: 0;
  }
}
</style>
