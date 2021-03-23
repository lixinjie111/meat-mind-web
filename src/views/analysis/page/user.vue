<template>
  <div class="user-container">
    <div class="header-nav">
      <p>用户分析</p>
    </div>
    <Card title="新增用户">
      <div>
        <Half
          lTitle="每日新增用户"
          subDateL="2020.12.01-2020.12.31"
          rTitle="新增用户7日留存量"
          subDateR="2020.12.01-2020.12.31"
        >
          <lineS
            slot="echarts"
            y-name="日活数"
            x-name="日期"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox9"
          />
          <lineS
            slot="rightEcharts"
            y-name="日活数"
            x-name="日期"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox10"
          />
        </Half>
        <Half
          lTitle="每周新增用户"
          subDateL="2020.12.01-2020.12.31"
          rTitle="月新增用户"
          subDateR="2020.12.01-2020.12.31"
        >
          <lineS
            slot="echarts"
            y-name="日活数"
            x-name="日期"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox11"
          />
          <lineS
            slot="rightEcharts"
            y-name="日活数"
            x-name="日期"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox12"
          />
        </Half>
      </div>
    </Card>
    <Card title="活跃用户">
      <div>
        <Half
          lTitle="新用户占比趋势"
          subDateL="2020.12.01-2020.12.31"
          rTitle="新老活跃用户结构"
          subDateR="2020.12.01-2020.12.31"
        >
          <barM
            slot="echarts"
            x-name="数量"
            y-name="人数"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox13"
          />
          <barM
            slot="rightEcharts"
            x-name="数量"
            y-name="人数"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox14"
          />
        </Half>
        <Half
          lTitle="周活跃用户"
          subDateL="2020.12.01-2020.12.31"
          rTitle="周新增用户占比趋势"
          subDateR="2020.12.01-2020.12.31"
        >
          <lineS
            slot="echarts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox15"
          />
          <barM
            slot="rightEcharts"
            x-name="数量"
            y-name="人数"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox16"
          />
        </Half>
      </div>
    </Card>
    <Card title="留存用户">
      <div>
        <Half
          lTitle="7日留存"
          subDateL="2020.12.01-2020.12.31"
          rTitle="7天流失"
          subDateR="2020.11.12-2020.11.25"
        >
          <lineM
            slot="echarts"
            y-name="日活数"
            x-name="日期"
            :hasAreaStyle="true"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox17"
          />

          <lineM
            slot="rightEcharts"
            y-name="日活数"
            x-name="日期"
            :hasAreaStyle="true"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox18"
          />
        </Half>
        <Half
          lTitle="新增用户8周留存"
          subDateL="2020.09.27-2020.11.25"
          rTitle="APP平均使用时长"
          subDateR="2020.12.01-2020.12.31"
        >
          <lineM
            slot="echarts"
            y-name="日活数"
            x-name="日期"
            :hasAreaStyle="true"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox19"
          />
          <lineS
            slot="rightEcharts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox20"
          />
        </Half>
      </div>
    </Card>
    <Card title="用户参与度">
      <div>
        <Half
          lTitle="人均启动次数"
          subDateL="2020.12.01-2020.12.31"
          rTitle="人均使用时长"
          subDateR="2020.12.01-2020.12.31"
        >
          <lineS
            slot="echarts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox21"
          />
          <lineS
            slot="rightEcharts"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox22"
          />
        </Half>
        <Half
          lTitle="平台使用次数"
          subDateL="2020.12.01-2020.12.31"
          rTitle="平台人均使用时长"
          subDateR="2020.12.01-2020.12.31"
        >
          <lineM
            slot="echarts"
            y-name="日活数"
            x-name="日期"
            :hasAreaStyle="true"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox23"
          />
          <lineM
            slot="rightEcharts"
            y-name="日活数"
            x-name="日期"
            :hasAreaStyle="true"
            :option="{ xAxis: { boundaryGap: false } }"
            :colorList="$ljEData.colorList"
            :myData="$ljEData.ljBox24"
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
export default {
  name: "user",
  components: { Card, DataCard, Half, Full, vCard2, lineS, lineM, barM },
};
</script>

<style scoped lang="scss">
.user-container {
  padding: 0 24px 24px 24px;
}
</style>