<template>
  <div class="channel-container">
    <div class="header-nav">
      <p>渠道分析</p>
    </div>
    <Card title="用户旅程">
      <Full title="分时新增用户" subTile="2020.12.01-2020.12.31">
        <barM :colorList="$ljEData.colorList" :myData="$ljEData.ljBox25" />
      </Full>
      <Full title="app渠道对比组件" subTile="2020.12.01-2020.12.31"> </Full>
    </Card>
    <Card title="渠道概况">
      <div>
        <Half
          lTitle="新增用户"
          subDateL="2020.12.01-2020.12.31"
          rTitle="活跃用户"
          subDateR="2020.12.01-2020.12.31"
        >
          <lineM
            slot="echarts"
            y-name="日活数"
            x-name="日期"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox26"
          />
          <barM
            slot="rightEcharts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox27"
          />
        </Half>
        <Half
          lTitle="活跃用户分布"
          subDateL="2020.12.01-2020.12.31"
          rTitle="平均使用时长"
          subDateR="2020.12.01-2020.12.31"
        >
          <PieCaseEcharts
            slot="echarts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox28"
          />
          <lineM
            slot="rightEcharts"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox29"
          />
        </Half>
      </div>
    </Card>
    <Card title="渠道质量评估">
      <div>
        <Half
          lTitle="科学分析方法"
          subDateL="2020.12.01-2020.12.31"
          rTitle="用户留存"
          subDateR="2020.12.01-2020.12.31"
        >
          <Table slot="echarts" :columns="columns1" :data="data1">
            <template slot-scope="{ row, index }" slot="index">
              <span class="operation">{{ index + 1 }}</span>
            </template>
          </Table>
          <Table slot="rightEcharts" :columns="columns2" :data="data2">
            <template slot-scope="{ row, index }" slot="index">
              <span class="operation">{{ index + 1 }}</span>
            </template>
          </Table>
        </Half>
        <Half
          lTitle="流量去向占比"
          subDateL="2020.12.01-2020.12.31"
          rTitle="各端过去7天日活"
          subDateR="2020.12.01-2020.12.31"
        >
          <PieCaseEcharts
            slot="echarts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox30"
          />
          <lineM
            slot="rightEcharts"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox31"
          />
        </Half>
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
export default {
  name: "channel",
  data() {
    return {
      columns1: [
        {
          title: "序号",
          slot: "index",
          width: 70,
        },
        {
          title: "进入路径",
          key: "key1",
          width: 170,
        },
        {
          title: "下载APP的用户数",
          key: "key2",
          width: 170,
        },
        {
          title: "注册会员的用户数",
          key: "key3",
          width: 170,
        },
        {
          title: "下单的用户数",
          key: "key4",
          width: 170,
        },
        {
          title: "支付完成的用户数",
          key: "key5",
          width: 170,
        },
      ],
      data1: [
        {
          key1: "二维码扫码",
          key2: 465,
          key3: 345,
          key4: 149,
          key5: 102,
        },
        {
          key1: "抖音广告",
          key2: 675,
          key3: 322,
          key4: 155,
          key5: 121,
        },
        {
          key1: "头条广告",
          key2: 634,
          key3: 432,
          key4: 186,
          key5: 149,
        },
        {
          key1: "朋友圈",
          key2: 687,
          key3: 455,
          key4: 192,
          key5: 143,
        },
        {
          key1: "百度搜索",
          key2: 345,
          key3: 248,
          key4: 156,
          key5: 127,
        },
      ],
      columns2: [
        {
          title: "序号",
          slot: "index",
          width: 100,
        },
        {
          title: "进入路径",
          key: "key1",
          width: 170,
        },
        {
          title: "总人数",
          key: "key2",
          width: 170,
        },
        {
          title: "第一周流失人数",
          key: "key3",
          width: 190,
        },
        {
          title: "第一周流失占比",
          key: "key4",
          width: 190,
        },
        {
          title: "第二周流失人数",
          key: "key5",
          width: 190,
        },
        {
          title: "第二周留失占比",
          key: "key6",
          width: 190,
        },
        {
          title: "第三周流失人数",
          key: "key7",
          width: 190,
        },
        {
          title: "第三周留失占比",
          key: "key8",
          width: 190,
        },
      ],
      data2: [
        {
          key1: "二维码扫码",
          key2: 6685,
          key3: 488,
          key4: "6.55%",
          key5: 575,
          key6: "8.35%",
          key7: 353,
          key8: "6.43%",
        },
        {
          key1: "抖音广告",
          key2: 4896,
          key3: 327,
          key4: "6.01%",
          key5: 410,
          key6: "8.19%",
          key7: 277,
          key8: "6.86%",
        },
        {
          key1: "头条广告",
          key2: 3254,
          key3: 235,
          key4: "6.60%",
          key5: 289,
          key6: "8.32%",
          key7: 172,
          key8: "6.15%",
        },
        {
          key1: "朋友圈",
          key2: 1634,
          key3: 119,
          key4: "6.53%",
          key5: 143,
          key6: "8.05%",
          key7: 74,
          key8: "5.18%",
        },
      ],
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
  },
};
</script>

<style scoped lang="scss">
.channel-container {
  padding: 0 24px 24px 24px;
}
</style>