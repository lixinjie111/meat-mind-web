<template>
    <div class="box-content">
        <div class="box">
			<treeEcharts id="box1"></treeEcharts>
		</div>       
        <div class="heigh">
			<graphEcharts id="box2" :datas="$linData.datas" :lines="$linData.lines"></graphEcharts>
		</div>       
        <div class="row">
			<scatterEcharts id="box3"></scatterEcharts>
		</div>       
    </div>
</template>

<script>
	import echarts from 'echarts';
	import treeEcharts from './common/tree/treeEcharts';
	import graphEcharts from './common/graph/graphEcharts';
	import scatterEcharts from './common/scatter/scatterEcharts';
    export default {
		components: {treeEcharts,graphEcharts,scatterEcharts},
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
		}
		.row{
			width: 100%;
			height: 300px;
			border: 1px solid red;
		}
		.heigh{
			width: 100%;
			height: 500px;
			border: 1px solid red;
		}
	}
	
</style>
