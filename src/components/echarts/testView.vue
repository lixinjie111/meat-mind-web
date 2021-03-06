<template>
    <div class="box-content">
        <div class="box">
			<treeEcharts id="box1" :colorList="$linData.colorList"></treeEcharts>
		</div>       
        <div class="box">
			<graphEcharts id="graph" :datas="$linData.graphData" :lines="$linData.graphLinks" :colorList="$linData.colorList"></graphEcharts>
		</div>       
        <!-- <div class="box"> -->
			<!-- <graphEchartsDemo id="graph1"></graphEchartsDemo> -->
		<!-- </div>       -->
		<div class="box1">
			<graphEcharts1 id="graph2" :datas="$linData.graphData1" :lines="$linData.graphLinks1" :curColor="$linData.colorList[0]"></graphEcharts1>
		</div>  
		<div class="box1">
			<graphEcharts1 id="graph3" :datas="$linData.graphData2" :lines="$linData.graphLinks1" :curColor="$linData.colorList[1]"></graphEcharts1>
		</div>  
		<div class="box1">
			<graphEcharts1 id="graph4" :datas="$linData.graphData3" :lines="$linData.graphLinks1" :curColor="$linData.colorList[2]"></graphEcharts1>
		</div>     		 
        <div class="row">
			<scatterEcharts id="scatter" :colorList="$linData.colorList"></scatterEcharts>
		</div>   
    </div>
</template>

<script>
	import treeEcharts from './common/tree/treeEcharts';
	import graphEcharts from './common/graph/graphEcharts';
	import graphEcharts1 from './common/graph/graphEcharts1';
	import graphEcharts2 from './common/graph/graphEcharts2';
	import graphEcharts3 from './common/graph/graphEcharts3';
	import graphEchartsDemo from './common/graph/graphEchartsDemo';
	import scatterEcharts from './common/scatter/scatterEcharts';
    export default {
		components: {treeEcharts,graphEcharts,graphEcharts1,graphEcharts2,graphEcharts3,graphEchartsDemo,scatterEcharts},
    }
</script>

<style scoped lang="scss">
    .box-content{
		display: flex;
		flex-wrap: wrap;
		overflow-y: scroll;
		.box{
			width: 50%;
			height: 300px;
			border: 1px solid #f00;
		}
		.box1{
			width: 30%;
			height: 300px;
			border: 1px solid #f00;
		}
		.row{
			width: 100%;
			height: 300px;
			border: 1px solid red;
		}
		.heigh{
			width: 100%;
			height: 300px;
			border: 1px solid red;
		}
	}
	
</style>
