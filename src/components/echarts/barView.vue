<template>
    <div class="box-content">
		<!-- 教育背景结构 -->
        <div class="box"><barEcharts id="box1" :colorList="colorList" :myData="box1Data"></barEcharts></div>
		<!-- 教育背景结构 -->
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
        
    </div>
</template>

<script>
	import barEcharts from './common/barEcharts';
    export default {
		components: {
		  barEcharts,
		},
        data() {
            return {
				colorList : ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564','#BF6E9B','#CECE7E','#91C2F2','#B7C8EA','#FF9F7F',],
				box1Data:{
					name:['研究生及以上', '本科', '大专', '职高', '高中', '初中及以下',],
					value:[4, 20, 30, 26, 15, 5],
				}
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
			height: 300px;
			margin: 3px;
			border: 1px solid #f00;
		}
	}
	
</style>
