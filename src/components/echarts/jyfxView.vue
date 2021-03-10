<template>
   <div>
    <div class="container">
        <div class="half">
            <div>GMV近30天变化趋势</div>
            <lineS id="box60" y-name="GMV（万元）" x-name="日期" :hasAreaStyle="true" :myData="$ljEData.ljBox1"/>
        </div>
        <div class="half">
            <div>过去7天日活</div>
            <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
                   :myData="$ljEData.ljBox2"/>
        </div>
        <div class="half">
            <div>周访问频次</div>
            <barM id="box57" x-name="数量" y-name="人数" :myData="$ljEData.ljBox3"/>
        </div>
        <div class="half">
            <div>APP平均使用时长</div>
            <lineS id="box56" :myData="$ljEData.ljBox4"/>
        </div>
        <div class="half">
            <div>日活</div>
            <lineM id="box55" y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
                   :myData="$ljEData.ljBox5"/>
        </div>
        <div class="half">
            <div>商品详情页浏览总次数</div>
            <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
                   :myData="$ljEData.ljBox6"/>
        </div>
        <div class="half">
            <div>使用优惠券的用户数</div>
            <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
                   :myData="$ljEData.ljBox7"/>
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
            <barM x-name="数量" y-name="人数" :myData="$ljEData.ljBox8"/>
        </div>
        <div class="half">
            <div>每日新增用户</div>
            <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :myData="$ljEData.ljBox9"/>
        </div>
        <div class="half">
            <div>新增用户7日留存量</div>
            <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :myData="$ljEData.ljBox10"/>
        </div>
        <div class="half">
            <div>每周新增用户</div>
            <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :myData="$ljEData.ljBox11"/>
        </div>
        <div class="half">
            <div>每日新增用户</div>
            <lineS y-name="日活数" x-name="日期" :option="{ xAxis: { boundaryGap: false } }" :myData="$ljEData.ljBox12"/>
        </div>
        <div class="half">
            <div>新用户占比趋势</div>
            <barM x-name="数量" y-name="人数" :myData="$ljEData.ljBox13"/>
        </div>
        <div class="half">
            <div>新老活跃用户结构</div>
            <barM x-name="数量" y-name="人数" :myData="$ljEData.ljBox14"/>
        </div>
        <div class="half">
            <div>周活跃用户</div>
            <lineS :myData="$ljEData.ljBox15"/>
        </div>
        <div class="half">
            <div>周新增用户占比趋势</div>
            <barM x-name="数量" y-name="人数" :myData="$ljEData.ljBox16"/>
        </div>
        <div class="half">
            <div>7日留存</div>
            <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
                   :myData="$ljEData.ljBox17"/>
        </div>
        <div class="half">
            <div>7天流失</div>
            <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
                   :myData="$ljEData.ljBox18"/>
        </div>
        <div class="half">
            <div>新增用户8周留存</div>
            <lineM y-name="日活数" x-name="日期" :hasAreaStyle="true" :option="{ xAxis: { boundaryGap: false } }"
                   :myData="$ljEData.ljBox19"/>
        </div>

    </div>
    <div class="title">图形组件展示区</div>
    <div class="container">
        <!--***********-->
        <div class="half">
            <div>组件文件名：lineM</div>
            <lineM id="box61" :colorList="$lxjData.colorList" :myData="$lxjData.box66Data"/>
        </div>
        <div class="half">
            <div>组件文件名：lineM1</div>
            <lineM1 id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"/>
        </div>
        <div class="half">
            <div>组件文件名：lineM2</div>
            <lineM2 id="box63" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"/>
        </div>
        <div class="half">
            <div>组件文件名：lineM3</div>
            <lineM3 id="box64" :colorList="$lxjData.colorList" :myData="$lxjData.box68Data"/>
        </div>
        <div class="half">
            <div>组件文件名：lineO</div>
            <lineO id="box65" :colorList="$lxjData.colorList" :myData="$lxjData.box59Data"/>
        </div>
        <div class="half">
            <div>组件文件名：lineS</div>
            <lineS id="box66" :colorList="$lxjData.colorList" :myData="$lxjData.box53Data"/>
        </div>
        <div class="half">
            <div>组件文件名：lineSp</div>
            <lineSp id="box67" :colorList="$lxjData.colorList"/>
        </div>
        <div class="half">
            <div>组件文件名：barM</div>
            <barM id="box68" :colorList="$lxjData.colorList" :myData="$lxjData.box40Data"/>
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

    export default {
        name: "index",
        components: {lineM, lineM1, lineM2, lineM3, lineO, lineS, lineSp, barM,},
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
    }

    .title {
        width: 100%;
        margin: 50px 0 0 0;
        border-bottom: 1px solid;
    }

</style>
