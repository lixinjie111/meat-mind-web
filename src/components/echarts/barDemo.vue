<template>
    <div class="box-content">
      <div class="box barMediaGroup">
          <p>barMediaGroup</p>
          <div class="view">
              <barMediaGroup :id="'barMediaGroup'+index" :colorList="$lxjData.colorList" :myData='$lxjData["box1149"+ index + "Data"]'></barMediaGroup>
          </div>
      </div>
      <div class="box barC">
          <p>barC</p>
          <div class="view">
              <barC id="barC" :colorList="$lxjData.colorList" :myData="$lxjData.box7Data"></barC>
          </div>
      </div>
      <div class="box barCH">
          <p>barCH</p>
          <div class="view">
              <barCH id="barCH" :colorList="$lxjData.colorList" :myData="$lxjData.box113Data"></barCH>
          </div>
      </div>
      <div class="box barEcharts">
          <p>barEcharts</p>
          <div class="view">
              <barEcharts id="barEcharts" :colorList="$lxjData.colorList" :myData="$lxjData.box15Data"></barEcharts>
          </div>
      </div>
      <div class="box barEcharts1">
          <p>barEcharts1</p>
          <div class="view">
              <barEcharts1 :colorList="$fjData.colorList" :myData="$ljEData.ljBox40" ></barEcharts1>
          </div>
      </div>
      <div class="box barEcharts2">
          <p>barEcharts2</p>
          <div class="view">
              <barEcharts2 :key="3" :colorList="$fjData.colorList" :myData="$fjData.box46Data"/>
          </div>
      </div>
      <div class="box barEchartsMark">
          <p>barEchartsMark</p>
          <div class="view">
              <barEchartsMark id="barEchartsMark" :colorList="$lxjData.colorList" :myData="$lxjData.box1Data"></barEchartsMark>
          </div>
      </div>
      <div class="box barHM">
          <p>barHM</p>
          <div class="view">
              <barHM id="barHM" :colorList="$lxjData.colorList" :myData="$lxjData.box114Data"></barHM>
          </div>
      </div>
      <div class="box barHM2">
          <p>barHM2</p>
          <div class="view">
              <barHM2 id="barHM2" :colorList="$lxjData.colorList" :myData="$lxjData.box11411Data"></barHM2>
          </div>
      </div>
      <div class="box barHM4">
          <p>barHM4</p>
          <div class="view">
              <barHM4 id="barHM4" :colorList="$abelData.colorList" :myData="$abelData.barStack01"></barHM4>
          </div>
      </div>
      <div class="box barL">
          <p>barL</p>
          <div class="view">
              <barL id="barL" :colorList="$lxjData.colorList" :myData="$lxjData.box2Data"></barL>
          </div>
      </div>
      <div class="box barLine">
          <p>barLine</p>
          <div class="view">
              <barLine id="barLine" :colorList="$lxjData.colorList" :myData="$lxjData.box8Data"></barLine>
          </div>
      </div>
      <div class="box barLine2">
          <p>barLine2</p>
          <div class="view">
              <barLine2 id="barLine2" :colorList="$abelData.colorList" :myData="$abelData.barLine"></barLine2>
          </div>
      </div>
      <div class="box barM">
          <p>barM</p>
          <div class="view">
              <barM id="barM" :colorList="$lxjData.colorList" :myData="$lxjData.box31Data"></barM>
          </div>
      </div>
      <div class="box barM1">
          <p>barM1</p>
          <div class="view">
              <barM1 id="barM1" :colorList="$lxjData.colorList" :myData="$lxjData.box4Data"></barM1>
          </div>
      </div>
      <div class="box barM2">
          <p>barM2</p>
          <div class="view">
              <barM2 :color-list="['red', 'green']"  :colorList="$ljEData.colorList" :myData="$ljEData.ljBox36"/>
          </div>
      </div>
    </div>
</template>    
<script>
// 按照bar文件列表顺序
    import barMediaGroup from "./common/bar/alone/barMediaGroup"
	import barC from './common/bar/barC';
	import barCH from './common/bar/barCH';
	import barEcharts from './common/bar/barEcharts';
	import barEcharts1 from './common/bar/barEcharts1';
	import barEcharts2 from './common/bar/barEcharts2';
	import barEchartsMark from './common/bar/barEchartsMark';
	import barHM from './common/bar/barHM';
	import barHM2 from './common/bar/barHM2';
	import barHM4 from './common/bar/barHM4';
	import barL from './common/bar/barL';
	import barLine from './common/bar/barLine';
	import barLine2 from './common/bar/barLine2';
	import barM from './common/bar/barM';
	import barM1 from './common/bar/barM1';
	import barM2 from './common/bar/barM2';
    export default {
        name:"barDemo",
        components:{ barMediaGroup, barC, barCH, barEcharts, barEcharts1, barEcharts2, barEchartsMark, barHM, barHM2, barHM4, barL, barLine, barLine2, barM, barM1, barM2},
        data(){
            return {
                index:0
            }
        }
    }
</script>
    
<style scoped lang="scss">
    .box-content{
		display: flex;
		flex-wrap: wrap;
		.box{
			width: 30%;
			height: 330px;
			margin: 3px;
			border: 1px solid #f00;
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            .view{
                height: 300px;
                margin: 3px;
                border: 1px solid rgb(0, 132, 255);
            }
		}
	}
</style>