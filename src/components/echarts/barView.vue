<template>
    <div class="box-content">
        <div class="box">
			<barEcharts id="box1" :colorList="$lxjData.colorList" :myData="$lxjData.box1Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box11" :colorList="$lxjData.colorList" :myData="$lxjData.box11Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box12" :colorList="$lxjData.colorList" :myData="$lxjData.box12Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box13" :colorList="$lxjData.colorList" :myData="$lxjData.box13Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box14" :colorList="$lxjData.colorList" :myData="$lxjData.box14Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box15" :colorList="$lxjData.colorList" :myData="$lxjData.box15Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box16" :colorList="$lxjData.colorList" :myData="$lxjData.box16Data"></barEcharts>
		</div>
		<div class="box">
			<barL id="box2" :colorList="$lxjData.colorList" :myData="$lxjData.box2Data"></barL>
		</div>
		<div class="box">
			<barL id="box21" :colorList="$lxjData.colorList" :myData="$lxjData.box21Data"></barL>
		</div>
		<div class="box">
			<barL id="box22" :colorList="$lxjData.colorList" :myData="$lxjData.box22Data"></barL>
		</div>
		<div class="box">
			<barL id="box23" :colorList="$lxjData.colorList" :myData="$lxjData.box23Data"></barL>
		</div>
		<div class="box">
			<barL id="box24" :colorList="$lxjData.colorList" :myData="$lxjData.box24Data"></barL>
		</div>
		<div class="box">
			<barL id="box240" :colorList="$lxjData.colorList" :myData="$lxjData.box240Data"></barL>
		</div>
		<div class="box">
			<barL id="box241" :colorList="$lxjData.colorList" :myData="$lxjData.box241Data"></barL>
		</div>
		<div class="box">
			<barL id="box25" :colorList="$lxjData.colorList" :myData="$lxjData.box25Data"></barL>
		</div>
		<div class="box">
			<barL id="box26" :colorList="$lxjData.colorList" :myData="$lxjData.box26Data"></barL>
		</div>
		<div class="box">
			<barL id="box27" :colorList="$lxjData.colorList" :myData="$lxjData.box27Data"></barL>
		</div>
		<div class="box">
			<barL id="box28" :colorList="$lxjData.colorList" :myData="$lxjData.box28Data"></barL>
		</div>
		<div class="box">
			<barL id="box29" :colorList="$lxjData.colorList" :myData="$lxjData.box29Data"></barL>
		</div>
		<div class="box barM">
			<barM id="box31" :colorList="$lxjData.colorList" :myData="$lxjData.box31Data"></barM>
		</div>
		<div class="box">
			<barM id="box32" :colorList="$lxjData.colorList" :myData="$lxjData.box32Data"></barM>
		</div>
		<div class="box">
			<barM id="box4" :colorList="$lxjData.colorList" :myData="$lxjData.box4Data"></barM>
		</div>
		<div class="box">
			<barM id="box40" :colorList="$lxjData.colorList" :myData="$lxjData.box40Data"></barM>
		</div>
		<div class="box">
			<barM id="box41" :colorList="$lxjData.colorList" :myData="$lxjData.box41Data"></barM>
		</div>
		<div class="box">
			<barM id="box42" :colorList="$lxjData.colorList" :myData="$lxjData.box42Data"></barM>
		</div>
		<div class="box">
			<barM id="box43" :colorList="$lxjData.colorList" :myData="$lxjData.box43Data"></barM>
		</div>
		<div class="box">
			<barM id="box44" :colorList="$lxjData.colorList" :myData="$lxjData.box44Data"></barM>
		</div>
		<div class="box">
			<barM id="box45" :colorList="$lxjData.colorList" :myData="$lxjData.box45Data"></barM>
		</div>
		<div class="box">
			<barM id="box46" :colorList="$lxjData.colorList" :myData="$lxjData.box46Data"></barM>
		</div>
		<div class="box">
			<cLine id="box5" :colorList="$lxjData.colorList" :myData="$lxjData.box5Data"></cLine>
		</div>
		<div class="box">
			<cLine id="box51" :colorList="$lxjData.colorList" :myData="$lxjData.box51Data"></cLine>
		</div>
		<div class="box">
			<cLine id="box52" :colorList="$lxjData.colorList" :myData="$lxjData.box52Data"></cLine>
		</div>
		<div class="box">
			<lineS id="box53" :colorList="$lxjData.colorList" :myData="$lxjData.box53Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box54" :colorList="$lxjData.colorList" :myData="$lxjData.box54Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box55" :colorList="$lxjData.colorList" :myData="$lxjData.box55Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box56" :colorList="$lxjData.colorList" :myData="$lxjData.box56Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box57" :colorList="$lxjData.colorList" :myData="$lxjData.box57Data"></lineS>
		</div>
		<div class="box">
			<cLine id="box58" :colorList="$lxjData.colorList" :myData="$lxjData.box58Data"></cLine>
		</div>
		<div class="box">
			<lineO id="box59" :colorList="$lxjData.colorList" :myData="$lxjData.box59Data"></lineO>
		</div>
		<div class="box">
			<lineM id="box6" :colorList="$lxjData.colorList" :myData="$lxjData.box6Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box61" :colorList="$lxjData.colorList" :myData="$lxjData.box61Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box62" :colorList="$lxjData.colorList" :myData="$lxjData.box62Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box63" :colorList="$lxjData.colorList" :myData="$lxjData.box63Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box64" :colorList="$lxjData.colorList" :myData="$lxjData.box64Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box65" :colorList="$lxjData.colorList" :myData="$lxjData.box65Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box67" :colorList="$lxjData.colorList" :myData="$lxjData.box67Data"></lineM>
		</div>
		<div class="box">
			<lineM3 id="box68" :colorList="$lxjData.colorList" :myData="$lxjData.box68Data"></lineM3>
		</div>
		<div class="box box7">
			<barC id="box7" :colorList="$lxjData.colorList" :myData="$lxjData.box7Data"></barC>
		</div>
		<div class="box box71">
			<barC id="box71" :colorList="$lxjData.colorList" :myData="$lxjData.box71Data"></barC>
		</div>
		<div class="box">
			<barLine id="box8" :colorList="$lxjData.colorList" :myData="$lxjData.box8Data"></barLine>
		</div>
		<div class="box">
			<lineAreaPieces id="box9" :colorList="$lxjData.colorList" ></lineAreaPieces>
		</div>
		<div class="box">
			<lineAreaPieces id="box91" :colorList="$lxjData.colorList" ></lineAreaPieces>
		</div>
		<div class="box">
			<lineAreaPieces id="box92" :colorList="$lxjData.colorList" ></lineAreaPieces>
		</div>
		<div class="box">
			<barLine id="box10" :colorList="$lxjData.colorList" :myData="$lxjData.box10Data"></barLine>
		</div>
		<div class="box">
			<funnel id="box111" :colorList="$lxjData.colorList1" :myData="$lxjData.box111Data"></funnel>
		</div>
		<div class="box">
			<lineSp id="box112" :colorList="$lxjData.colorList"></lineSp>
		</div>
		<div class="box">
			<barCH id="box113" :colorList="$lxjData.colorList" :myData="$lxjData.box113Data"></barCH>
		</div>
		<div class="box barHM">
			<barHM id="box114" :colorList="$lxjData.colorList" :myData="$lxjData.box114Data"></barHM>
		</div>
		<div class="box">
			<div class="box1">
				<barHM id="box1141" :colorList="$lxjData.colorList" :myData="$lxjData.box1141Data"></barHM>
			</div>
			<div class="box1">
				<barHM id="box1142" :colorList="$lxjData.colorList" :myData="$lxjData.box1142Data"></barHM>
			</div>
			<div class="box1">
				<barHM id="box1143" :colorList="$lxjData.colorList" :myData="$lxjData.box1143Data"></barHM>
			</div>
		</div>
		<div class="box">
			<div class="box1">
				<barHM id="box11410" :colorList="$lxjData.colorList" :myData="$lxjData.box11410Data"></barHM>
			</div>
			<div class="box1">
				<barHM id="box11420" :colorList="$lxjData.colorList" :myData="$lxjData.box11420Data"></barHM>
			</div>
			<div class="box1">
				<barHM id="box11430" :colorList="$lxjData.colorList" :myData="$lxjData.box11430Data"></barHM>
			</div>
		</div>
		<div class="box">
			<div class="box1">
				<barHM id="box11411" :colorList="$lxjData.colorList" :myData="$lxjData.box11411Data"></barHM>
			</div>
			<div class="box1">
				<barHM id="box11421" :colorList="$lxjData.colorList" :myData="$lxjData.box11421Data"></barHM>
			</div>
			<div class="box1">
				<barHM id="box11431" :colorList="$lxjData.colorList" :myData="$lxjData.box11431Data"></barHM>
			</div>
		</div>


		<div class="box">
			<barLine id="box101" :colorList="$lxjData.colorList" :myData="$lxjData.box101Data"></barLine>
		</div>

		<div class="box">
			<PieNest1 id="box201" :colorList="$abelData.colorList" :myData="$abelData.nest01Data" title="匹配度" value="92"></PieNest1>
		</div>

		<div class="box">
			<PieNest1 id="box202" :colorList="$abelData.colorList" :myData="$abelData.nest02Data" title="匹配度" value="88"></PieNest1>
		</div>

		<div class="box">
			<PieNest1 id="box203" :colorList="$abelData.colorList" :myData="$abelData.nest03Data" title="匹配度" value="90"></PieNest1>
		</div>

		<div class="box">
			<PieNest1 id="box204" :colorList="$abelData.colorList" :myData="$abelData.nest04Data" title="匹配度" value="80"></PieNest1>
		</div>

		<div class="box">
			<PieNest1 id="box205" :colorList="$abelData.colorList" :myData="$abelData.nest05Data" title="匹配度" value="87"></PieNest1>
		</div>

		<div class="box">
			<PieNest1 id="box206" :colorList="$abelData.colorList" :myData="$abelData.nest06Data" title="匹配度" value="87"></PieNest1>
		</div>
			<div class="box">
				<PieOne1 id="box301" :value="72" title="品牌测评"></PieOne1>
			</div>
			<div class="box">
				<PieOne2 id="box302" :value="78" title="流量评分"></PieOne2>
			</div>


			<div class="box">
				<PieNest2 id="303" :myData="$abelData.nest201Data" title="综合指数" value="72"></PieNest2>
			</div>

			<div class="box">
				<PieOne3 id="304" :myData="$abelData.nest202Data" title="未来7日"></PieOne3>
			</div>

			<div class="box">
				<BarLine2 id="305" :colorList="$abelData.colorList" :myData="$abelData.barLine"></BarLine2>
			</div>

			<div class="box">
				<BarHM4 id="306" :colorList="$abelData.colorList" :myData="$abelData.barStack01"></BarHM4>
			</div>

			
		</div>
</template>

<script>
	import barC from './common/bar/barC';
	import barCH from './common/bar/barCH';
	import barEcharts from './common/bar/barEcharts';
	import barHM from './common/bar/barHM';
	import barL from './common/bar/barL';
	import barLine from './common/bar/barLine';
	import barM from './common/bar/barM';
	import lineAreaPieces from './common/line/lineAreaPieces';	
	import cLine from './common/line/line';
	import lineO from './common/line/lineO';
	import lineS from './common/line/lineS';
	import lineM from './common/line/lineM';
	import lineM3 from './common/line/lineM3';
	import funnel from './common/funnel/funnel';
	import BarHM4 from './common/bar/barHM4';
	import lineSp from './common/line/lineSp';
	import PieOne1 from './common/pie/PieOne1';
	import PieOne2 from './common/pie/PieOne2';
	import PieOne3 from './common/pie/PieOne3';
	import PieNest1 from './common/pie/PieNest1';
	import PieNest2 from './common/pie/PieNest2';
	import BarLine2 from "./common/bar/barLine2";
    export default {
		name:"barView",
		components: { BarLine2, BarHM4,
		  lineM3,barEcharts,barL,barM,cLine,lineM,barC,barLine,lineAreaPieces,lineS,funnel,barCH,barHM,lineO,lineSp,PieOne1,PieOne2,PieOne3,PieNest1,PieNest2
		}
    }
</script>

<style scoped lang="scss">
    .box-content{
		display: flex;
		flex-wrap: wrap;
		.box{
			width: 30%;
			height: 300px;
			margin: 3px;
			border: 1px solid #f00;
			.box1{
				height: 30%;
			}
		}
	}

</style>
