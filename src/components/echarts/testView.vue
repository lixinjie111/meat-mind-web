<template>
    <div class="box-content">
        <div class="box">
			<treeEcharts id="box1"></treeEcharts>
		</div>       
    </div>
</template>

<script>
	import echarts from 'echarts';
	import treeEcharts from './common/tree/treeEcharts';
    export default {
		components: {treeEcharts},
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
