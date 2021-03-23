<template>
  <div class="channel-container">
    <div class="header-nav">
      <p>渠道分析</p>
    </div>
    <Card title="用户旅程">
      <Full title="分时新增用户" subTile="2020.12.01-2020.12.31">
        <barM :colorList="$ljEData.colorList" :myData="$ljEData.ljBox25" />
      </Full>
      <Full title="app渠道对比组件" subTile="2020.12.01-2020.12.31" style="height:600px;">
        <Table
          :columns="columns3"
          :data="data3"
          style="margin-top: 30px"
        ></Table>
      </Full>
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
const renderHeader = (h, params) => {
  return h("span", [
    h("strong", params.column.title),
    h(
      "Poptip",
      {
        props: {
          placement: "bottom-end",
          popperClass: "saas-poptip",
          transfer: true,
        },
      },
      [
        h("i", {
          class: "iconfont iconbangzhuzhongxin tip-icon",
          style: { marginLeft: "4px" },
        }),
      ]
    ),
  ]);
};
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
      columns3: [
        {
          title: "App通道",
          align: "center",
          children: [
            {
              title: "名称",
              key: "appName",
              align: "center",
              sortable: true,
            },
          ],
        },
        {
          title: "用户规模",
          align: "center",
          children: [
            {
              title: "激活用户数(万)",
              key: "huoyue",
              align: "center",
              sortable: true,
              renderHeader,
            },
            {
              title: "新用户7日使用次数",
              key: "count",
              align: "center",
              sortable: true,
              renderHeader,
            },
          ],
        },
        {
          title: "用户质量",
          align: "center",
          children: [
            {
              title: "新用户人均使用时长",
              key: "time",
              align: "center",
              sortable: true,
              renderHeader,
            },
            {
              title: "新用户次日留存",
              key: "chuliu",
              align: "center",
              sortable: true,
              renderHeader,
            },
          ],
        },
      ],
      data3: [
        {
          appName: "抖音",
          huoyue: "55.3",
          count: "32",
          time: "82",
          chuliu: "78%",
        },
        {
          appName: "快手",
          huoyue: "32.1",
          count: "34",
          time: "56",
          chuliu: "89%",
        },
        {
          appName: "今日头条",
          huoyue: "41.4",
          count: "22",
          time: "57",
          chuliu: "77%",
        },
        {
          appName: "腾讯微博",
          huoyue: "52.9",
          count: "42",
          time: "73",
          chuliu: "89%",
        },
        {
          appName: "小红书",
          huoyue: "42.6",
          count: "28",
          time: "78",
          chuliu: "67%",
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
  .header-nav {
    padding-bottom: 0;
  }
}
</style>