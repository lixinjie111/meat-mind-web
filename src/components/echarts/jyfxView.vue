<template>
  <div>
    <div class="container">
      <div class="half">
        <div>GMV近30天变化趋势</div>
        <lineS id="box60" y-name="GMV（万元）" x-name="日期" :hasAreaStyle="true" :colorList="$ljEData.colorList"
               :myData="$ljEData.ljBox1"/>
      </div>
      <div class="half">
        <div>过去7天日活</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox2"/>
      </div>
      <div class="half">
        <div>周访问频次</div>
        <barM id="box57" x-name="数量" y-name="人数" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox3"/>
      </div>
      <div class="half">
        <div>APP平均使用时长</div>
        <lineS id="box56" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox4"/>
      </div>
      <div class="half">
        <div>日活</div>
        <lineM id="box55" y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox5"/>
      </div>
      <div class="half">
        <div>商品详情页浏览总次数</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox6"/>
      </div>
      <div class="half">
        <div>使用优惠券的用户数</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox7"/>
      </div>
      <div class="half">
        <div>推送转化的人均次数</div>
        <Table :columns="columns" :data="data">
          <template slot-scope="{ row, index }" slot="index">
            <span class="operation">{{ index + 1}}</span>
          </template>
        </Table>
      </div>
      <div class="half">
        <div>用户生命周期</div>
        <barM x-name="数量" y-name="人数" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox8"/>
      </div>
      <div class="half">
        <div>每日新增用户</div>
        <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :colorList="$ljEData.colorList"
               :myData="$ljEData.ljBox9"/>
      </div>
      <div class="half">
        <div>新增用户7日留存量</div>
        <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :colorList="$ljEData.colorList"
               :myData="$ljEData.ljBox10"/>
      </div>
      <div class="half">
        <div>每周新增用户</div>
        <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :colorList="$ljEData.colorList"
               :myData="$ljEData.ljBox11"/>
      </div>
      <div class="half">
        <div>每日新增用户</div>
        <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :colorList="$ljEData.colorList"
               :myData="$ljEData.ljBox12"/>
      </div>
      <div class="half">
        <div>新用户占比趋势</div>
        <barM x-name="数量" y-name="人数" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox13"/>
      </div>
      <div class="half">
        <div>新老活跃用户结构</div>
        <barM x-name="数量" y-name="人数" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox14"/>
      </div>
      <div class="half">
        <div>周活跃用户</div>
        <lineS :colorList="$ljEData.colorList" :myData="$ljEData.ljBox15"/>
      </div>
      <div class="half">
        <div>周新增用户占比趋势</div>
        <barM x-name="数量" y-name="人数" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox16"/>
      </div>
      <div class="half">
        <div>7日留存</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox17"/>
      </div>
      <div class="half">
        <div>7天流失</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox18"/>
      </div>
      <div class="half">
        <div>新增用户留存</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox19"/>
      </div>
      <div class="half">
        <div>APP平均使用时长</div>
        <lineS :colorList="$ljEData.colorList" :myData="$ljEData.ljBox20"/>
      </div>
      <div class="half">
        <div>人均启动次数</div>
        <lineS :colorList="$ljEData.colorList" :myData="$ljEData.ljBox21"/>
      </div>
      <div class="half">
        <div>人均使用时长</div>
        <lineS :colorList="$ljEData.colorList" :myData="$ljEData.ljBox22"/>
      </div>
      <div class="half">
        <div>平台使用次数</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox23"/>
      </div>
      <div class="half">
        <div>平台人均使用时长</div>
        <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox24"/>
      </div>
      <div class="half">
        <div>分时新增用户</div>
        <barM :colorList="$ljEData.colorList" :myData="$ljEData.ljBox25"/>
      </div>
      <div class="half">
        <div>新增用户</div>
        <lineM y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }"
               :colorList="$ljEData.colorList" :myData="$ljEData.ljBox26"/>
      </div>
      <div class="half">
        <div>活跃用户</div>
        <barM :colorList="$ljEData.colorList" :myData="$ljEData.ljBox27"/>
      </div>
      <div class="half">
        <div>活跃用户分布</div>
        <PieCaseEcharts :colorList="$ljEData.colorList" :myData="$ljEData.ljBox28"/>
      </div>
      <div class="half">
        <div>平均使用时长</div>
        <lineM :option="{ xAxis: { boundaryGap: false } }" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox29"/>
      </div>
      <div class="half">
        <div>科学分析方法</div>
        <Table :columns="columns1" :data="data1">
          <template slot-scope="{ row, index }" slot="index">
            <span class="operation">{{ index + 1}}</span>
          </template>
        </Table>
      </div>
      <div class="half">
        <div>用户留存</div>
        <Table :columns="columns2" :data="data2">
          <template slot-scope="{ row, index }" slot="index">
            <span class="operation">{{ index + 1}}</span>
          </template>
        </Table>
      </div>
      <div class="half">
        <div>流量去向占比</div>
        <PieCaseEcharts :colorList="$ljEData.colorList" :myData="$ljEData.ljBox30"/>
      </div>
      <div class="half">
        <div>各端过去7天日活</div>
        <lineM :option="{ xAxis: { boundaryGap: false } }" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox31"/>
      </div>
      <div class="half">
        <div>健康状态分布</div>
        <PieCaseEcharts :colorList="$ljEData.colorList" :myData="$ljEData.ljBox32"/>
      </div>
      <div class="half">
        <div>最近业务主题</div>
        <PieCaseEcharts :colorList="$ljEData.colorList" :myData="$ljEData.ljBox33"/>
      </div>
      <div class="half">
        <div>MRR</div>
        <barEcharts :colorList="$ljEData.colorList" :myData="$ljEData.ljBox34"/>
      </div>
      <div class="half">
        <div>MRR构成</div>
        <barM :colorList="$ljEData.colorList" :myData="$ljEData.ljBox35"/>
      </div>
      <div class="half">
        <div>Quick Ratio</div>
        <barM2 :color-list="['red', 'green']" :colorList="$ljEData.colorList" :myData="$ljEData.ljBox36"/>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <Table :columns="columns3" :data="data3">
        </Table>
      </div>

    </div>
  </div>
</template>

<script>
  import lineM from "./common/line/lineM";
  import lineM1 from "./common/line/lineM1";
  import lineM2 from "./common/line/lineM2";
  import lineM3 from "./common/line/lineM3";
  import lineO from "./common/line/lineO";
  import lineS from "./common/line/lineS";
  import lineSp from "./common/line/lineSp";
  import barM from "./common/bar/barM";
  import PieCaseEcharts from './common/pie/PieCaseEcharts';
  import barEcharts from './common/bar/barEcharts';
  import barM2 from './common/bar/barM2';

  const renderHeader = (h, params) => {
    return h("span", [
      h('strong', params.column.title),
      h("Poptip",
        {
          props: {
            placement: "bottom-end",
            popperClass: "saas-poptip",
            transfer: true
          },
        },
        [
          h("i", {
            class: "iconfont iconbangzhuzhongxin tip-icon",
            style: { marginLeft: '4px' }
          }),
          // h("div", {
          //   slot: "content"
          // }, [
          //   h("p", "影响力指数是系统基于账号粉丝量、真粉率、日均推广时长、代言品牌数、品牌匹配度、用户匹配度以及代言品牌数和带货量等数据分析得出的综合评分。其公式为"),
          //   h("p", "F = [(粉丝量*真粉率)/10W * 0.27 + 日均推广时长(分钟) * (代言品牌数/100) * 0.23 + 10*用户匹配度*0.26 + 10*品牌匹配度 * 0.24 ] * θ(带货量)")
          // ])
        ])
    ])
  }
  export default {
    components: {lineM, lineM1, lineM2, lineM3, lineO, lineS, lineSp, barM, PieCaseEcharts, barEcharts, barM2},
    data() {
      return {
        columns: [
          {
            title: "序号",
            slot: "index",
          },
          {
            title: "意向",
            key: "intention",
          },
          {
            title: "2021/2/1",
            key: "time1",
          },
          {
            title: "2021/2/1",
            key: "time1",
          },
          {
            title: "2021/2/6",
            key: "time2",
          },
          {
            title: "2021/2/11",
            key: "time3",
          },
          {
            title: "2021/2/16",
            key: "time4",
          },
          {
            title: "2021/2/21",
            key: "time5",
          },
          {
            title: "2021/2/26",
            key: "time6",
          },
        ],
        data: [
          {
            intention: '高意向',
            time1: 1.34,
            time2: 1.27,
            time3: 1.23,
            time4: 1.24,
            time5: 1.29,
            time6: 1.34,
          },
          {
            intention: '低意向',
            time1: 1.34,
            time2: 0.72,
            time3: 0.61,
            time4: 0.81,
            time5: 0.73,
            time6: 0.88,
          },
          {
            intention: '无意向',
            time1: 0.04,
            time2: 0.02,
            time3: 0.03,
            time4: 0.01,
            time5: 0.09,
            time6: 0.04,
          },
        ],
        columns1: [
          {
            title: "序号",
            slot: "index",
          },
          {
            title: "进入路径",
            key: "key1",
          },
          {
            title: "下载APP的用户数",
            key: "key2",
          },
          {
            title: "注册会员的用户数",
            key: "key3",
          },
          {
            title: "下单的用户数",
            key: "key4",
          },
          {
            title: "支付完成的用户数",
            key: "key5",
          },
        ],
        data1: [
          {
            key1: '二维码扫码',
            key2: 465,
            key3: 345,
            key4: 149,
            key5: 102,
          },
          {
            key1: '抖音广告',
            key2: 675,
            key3: 322,
            key4: 155,
            key5: 121,
          },
          {
            key1: '头条广告',
            key2: 634,
            key3: 432,
            key4: 186,
            key5: 149,
          },
          {
            key1: '朋友圈',
            key2: 687,
            key3: 455,
            key4: 192,
            key5: 143,
          },
          {
            key1: '百度搜索',
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
          },
          {
            title: "进入路径",
            key: "key1",
          },
          {
            title: "总人数",
            key: "key2",
          },
          {
            title: "第一周流失人数",
            key: "key3",
          },
          {
            title: "第一周流失占比",
            key: "key4",
          },
          {
            title: "第二周流失人数",
            key: "key5",
          },
          {
            title: "第二周留失占比",
            key: "key6",
          },
          {
            title: "第三周流失人数",
            key: "key7",
          },
          {
            title: "第三周留失占比",
            key: "key8",
          },
        ],
        data2: [
          {
            key1: '二维码扫码',
            key2: 6685,
            key3: 488,
            key4: '6.55%',
            key5: 575,
            key6: '8.35%',
            key7: 353,
            key8: '6.43%',
          },
          {
            key1: '抖音广告',
            key2: 4896,
            key3: 327,
            key4: '6.01%',
            key5: 410,
            key6: '8.19%',
            key7: 277,
            key8: '6.86%',
          },
          {
            key1: '头条广告',
            key2: 3254,
            key3: 235,
            key4: '6.60%',
            key5: 289,
            key6: '8.32%',
            key7: 172,
            key8: '6.15%',
          },
          {
            key1: '朋友圈',
            key2: 1634,
            key3: 119,
            key4: '6.53%',
            key5: 143,
            key6: '8.05%',
            key7: 74,
            key8: '5.18%',
          },
        ],
        columns3: [
          {
            title: 'App通道',
            align: 'center',
            children: [
              {
                title: '名称',
                key: 'name',
                align: 'center',
                sortable: true
              }
            ]
          },
          {
            title: '用户规模',
            align: 'center',
            children: [
              {
                title: '激活用户数(万)',
                key: 'huoyue',
                align: 'center',
                sortable: true,
                renderHeader,
              },
              {
                title: '新用户7日使用次数',
                key: 'count',
                align: 'center',
                sortable: true,
                renderHeader,
              }
            ]
          },
          {
            title: '用户质量',
            align: 'center',
            children: [
              {
                title: '新用户人均使用时长',
                key: 'time',
                align: 'center',
                sortable: true,
                renderHeader,
              },
              {
                title: '新用户次日留存',
                key: 'chuliu',
                align: 'center',
                sortable: true,
                renderHeader,
              }
            ]
          },
        ],
        data3: [
          {
            name: '抖音',
            huoyue: '55.3',
            count: '32',
            time: '82',
            chuliu: '78%',
          },
          {
            name: '快手',
            huoyue: '32.1',
            count: '34',
            time: '56',
            chuliu: '89%',
          },
          {
            name: '今日头条',
            huoyue: '41.4',
            count: '22',
            time: '57',
            chuliu: '77%',
          },
          {
            name: '腾讯微博',
            huoyue: '52.9',
            count: '42',
            time: '73',
            chuliu: '89%',
          },
          {
            name: '小红书',
            huoyue: '42.6',
            count: '28',
            time: '78',
            chuliu: '67%',
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .half {
      width: 48%;
      height: 400px;
      margin-top: 30px;
    }
    .row{
      width: 100%;
      margin-top: 30px;
    }
  }

  .title {
    width: 100%;
    margin: 50px 0 0 0;
    border-bottom: 1px solid;
  }

</style>
