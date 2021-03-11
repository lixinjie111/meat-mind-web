<template>
  <div class="box-content">
    <!-- 教育背景结构 -->
    <div class="box box1">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieEcharts>
    </div>
    <div class="box box2">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieEcharts>
    </div>
    <div class="box box3">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box3Data" roseType="radius"></PieEcharts>
    </div>
    <div class="box box4">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box4Data"></PieEcharts>
    </div>
    <div class="box box5">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieEcharts>
    </div>
    <div class="box box6">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box6Data"></PieEcharts>
    </div>
    <div class="box box7">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box7Data"></PieEcharts>
    </div>
    <div class="box box8">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box8Data"></PieEcharts>
    </div>
    <div class="box box9">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box9Data"></PieEcharts>
    </div>
    <div class="box box10">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box10Data"></PieEcharts>
    </div>
    <div class="box box11">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box11Data"></PieEcharts>
    </div>
    <div class="box box12">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box12Data"></PieEcharts>
    </div>
    <div class="box box13">
      <RotateChart :colorList="$fjData.colorList" :myData="$fjData.box13Data"></RotateChart>
    </div>
    <div class="box box14">
      <LeidaEcharts :rgbaColor="rgbaList" :colorList="$fjData.colorList" :myData="$fjData.box14Data" titleText="92"></LeidaEcharts>
    </div>
    <div class="box box15">
      <MatchEcharts :colorList="$fjData.colorList" :myData="$fjData.box15Data" ></MatchEcharts>
    </div>
    <div class="box box16">
      <Yibiao1Echarts :colorList="$fjData.colorList" :myData="$fjData.box16Data" ></Yibiao1Echarts>
    </div>
    <div class="box box17">
      <YibiaoCharts2 :colorList="$fjData.colorList" :myData="$fjData.box17Data" ></YibiaoCharts2>
    </div>
    <div class="box box18">
      <Yuanhuan1 :colorList="$fjData.colorList" :myData="$fjData.box18Data" ></Yuanhuan1>
    </div>
    <div class="box box19">
      <Leida2Echarts :colorList="$fjData.colorList" :myData="$fjData.box19Data" ></Leida2Echarts>
    </div>
     <div class="box box20">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box20Data" ></PieEcharts>
    </div>
    <div class="box box31">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box31Data" ></PieEcharts>
    </div>
    <div class="box box32">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box32Data" ></PieEcharts>
    </div>
    <div class="box box33">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box33Data" ></PieEcharts>
    </div>
    <div class="box box34">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box34Data" ></PieEcharts>
    </div>
    <div class="box box35">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box35Data" ></PieEcharts>
    </div>
    <div class="box box36">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box36Data" ></PieEcharts>
    </div>
    <div class="box box37">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box37Data" ></PieEcharts>
    </div>
    <div class="box box38">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box38Data" ></PieEcharts>
    </div>
    <div class="box box39">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box39Data" ></PieEcharts>
    </div>
    <div class="box box40">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box40Data" ></PieEcharts>
    </div>
    <div class="box box41">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box41Data" ></PieEcharts>
    </div>
    <div class="box box42">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box42Data" ></PieEcharts>
    </div>
    <div class="box">
      <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box21Data" roseType="radius"></PieEcharts>
    </div>
  </div>
</template>

<script>
// import echarts from 'echarts';
  import PieEcharts from './common/pie/PieEcharts';
  import RotateChart from './common/custom/RotateChart';
  import LeidaEcharts from './common/radar/LeidaEcharts';
  import MatchEcharts from './common/radar/MatchEcharts';
  import Yibiao1Echarts from './common/gauge/Yibiao1Echarts';
  import YibiaoCharts2 from './common/gauge/YibiaoCharts2';
  import Yuanhuan1 from './common/sunburst/Yuanhuan1';
  import Leida2Echarts from './common/radar/Leida2Echarts';

  export default {
    components: {
      PieEcharts, RotateChart, LeidaEcharts, MatchEcharts, Yibiao1Echarts, YibiaoCharts2, Yuanhuan1, Leida2Echarts,
    },
    data(){
      return{
        rgbaList:[["rgba(35,115,255,0.3)","rgba(35,115,255,0)"],["rgba(254, 119, 75, 0.3)","rgba(254, 119, 75, 0)"]]
      }
    }
  }
</script>

<style scoped lang="scss">
  .box-content {
    display: flex;
    flex-wrap: wrap;
    .box {
      width: 30%;
      height: 300px;
      margin: 3px;
      border: 1px solid #f00;
    }
    .big.box {
      width: 800px;
      height: 800px;
      margin: 3px;
      border: 1px solid #f00;
    }
  }

</style>
