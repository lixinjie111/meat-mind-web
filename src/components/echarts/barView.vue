<template>
    <div class="box-content">
        <div class="box">
			<barEcharts id="box1" :colorList="colorList" :myData="box1Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box11" :colorList="colorList" :myData="box11Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box12" :colorList="colorList" :myData="box12Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box13" :colorList="colorList" :myData="box13Data"></barEcharts>
		</div>
		<div class="box">
			<barL id="box2" :colorList="colorList" :myData="box2Data"></barL>
		</div>
		<div class="box">
			<barM id="box3" :colorList="colorList" :myData="box3Data"></barM>
		</div>
		<div class="box">
			<barM id="box4" :colorList="colorList" :myData="box4Data"></barM>
		</div>
		<div class="box">
			<cLine id="box5" :colorList="colorList" :myData="box5Data"></cLine>
		</div>
		<div class="box">
			<cLine id="box51" :colorList="colorList" :myData="box51Data"></cLine>
		</div>
		<div class="box">
			<lineM id="box6" :colorList="colorList" :myData="box6Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box61" :colorList="colorList" :myData="box61Data"></lineM>
		</div>
		<div class="box">
			<barC id="box7" :colorList="colorList" :myData="box7Data"></barC>
		</div>
		<div class="box">
			<barC id="box71" :colorList="colorList" :myData="box71Data"></barC>
		</div>

    </div>
</template>

<script>
	import barEcharts from './common/barEcharts';
	import barL from './common/barL';
	import barM from './common/barM';
	import cLine from './common/line';
	import lineM from './common/lineM';
	import barC from './common/barC';
    export default {
		components: {barEcharts,barL,barM,cLine,lineM,barC},
        data() {
            return {
				colorList : ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564','#BF6E9B','#CECE7E','#91C2F2','#B7C8EA','#FF9F7F','#91C2F2','#B380B6','#EDA8AD','#738AD4','#FF9F7F'],
				box1Data:{
					name:['研究生及以上', '本科', '大专', '职高', '高中', '初中及以下',],
					value:[4, 20, 30, 26, 15, 5],
				},
				box11Data:{
					name:['公共交通', '自驾车', '出租车', '步行', '自行车'],
					value:[38, 19, 17, 16, 10]
				},
				box12Data:{
					name:['一线城市','新一线城市','二线城市', '三线城市','四线城市','五线城市',],
					value:[22,35,30,8,3,2],
				},
				box13Data:{
					name:['单身/独身','未婚（恋爱）','已婚未育','已婚已育','离异',],
					value:[ 24,14,7,48,7],
				},
				box2Data:{
					name:['视频', '外媒', '报刊', '政务', '博客', '论坛','微博','网站','微信',],
					value:[4, 20, 30, 26, 15, 5,26, 15, 5],
				},
				box3Data:{
					name:['10-26', '11-2当周', '11-9当周', '11-16当周', '11-23当周',],
					legName:['连续活跃用户', '流失用户', '沉默用户', '新用户', '回流用户'],
					value:[
						{
							name: '连续活跃用户',
							type: 'bar',
							stack: '总量',
							barWidth: '10',
							data: [320, 302, 301, 334, 390, ]
						},
						{
							name: '流失用户',
							type: 'bar',
							stack: '总量',
							barWidth: '10',
							data: [120, 132, 101, 134, 90, ]
						},
						{
							name: '沉默用户',
							type: 'bar',
							barWidth: '10',
							stack: '总量',
							data: [220, 182, 191, 234, 290, ]
						},
						{
							name: '新用户',
							type: 'bar',
							barWidth: '10',
							stack: '总量',
							data: [150, 212, 201, 154, 190, ]
						},
						{
							name: '回流用户',
							type: 'bar',
							barWidth: '10',
							stack: '总量',
							// itemStyle: {
							// 	normal: {
							// 		barBorderRadius:[30,30,0,0]
							// 	},
							// },
							data: [820, 832, 901, 934, 1290, ]
						},
					]
				},
				box4Data:{
					name:['10-26', '11-2', '11-9', '11-16', '11-23',],
					legName:['微博', '百度', '微信', '今日头条', '地图'],
					value:[
						{
							name: '微博',
							type: 'bar',
							stack: '总量',
							barWidth: '10',
							data: [320, 302, 301, 334, 390, ]
						},
						{
							name: '百度',
							type: 'bar',
							stack: '总量',
							barWidth: '10',
							data: [120, 132, 101, 134, 90, ]
						},
						{
							name: '微信',
							type: 'bar',
							barWidth: '10',
							stack: '总量',
							data: [220, 182, 191, 234, 290, ]
						},
						{
							name: '今日头条',
							type: 'bar',
							barWidth: '10',
							stack: '总量',
							data: [150, 212, 201, 154, 190, ]
						},
						{
							name: '地图',
							type: 'bar',
							barWidth: '10',
							stack: '总量',
							// itemStyle: {
							// 	normal: {
							// 		barBorderRadius:[30,30,0,0]
							// 	},
							// },
							data: [820, 832, 901, 934, 1290, ]
						},
					]
				},
				box5Data:{
					name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12','10-13','10-14','10-15','10-16','10-17','10-18','10-19','10-20','10-21','10-22','10-23','10-24','10-25','10-26','10-27','10-28','10-29','10-30','10-31'],
					value:[200, 182, 181,  150, 230, 224, 218, 135, 147, 260, 230, 210,220, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 301,50, 230, 434]
				},
				box51Data:{
					name: ['11-01', '11-02', '11-03', '11-04', '11-05', '11-06', '11-07', '11-08', '11-09', '11-10', '11-11', '11-12','11-13','11-14','11-15','11-16','11-17','11-18','11-19','11-20','11-21','11-22','11-23','11-24','11-25','11-26','11-27','11-28','11-29','11-30','11-31'],
					value:[400, 182, 181,  150, 230, 224, 218, 235, 147, 260, 230, 210,220, 132, 101, 134, 90, 230, 210, 101,220, 132, 101, 134, 70, 230, 210, 301,50, 230, 134]
				},
				box6Data:{
					legName:['36Kr', '百度', '微信', '今日头条', '地推'],
					name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12','10-13','10-14','10-15','10-16','10-17','10-18','10-19','10-20','10-21','10-22','10-23','10-24','10-25','10-26','10-27','10-28','10-29','10-30','10-31'],
					value: [
						{
							name: '36Kr',
							type: 'line',
							data: [100, 182, 181, 234, 290, 930, 310, 301, 134, 90, 130, 210,220, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 101,50, 230, 434]
						},
						{
							name: '百度',
							type: 'line',
							data: [320, 132, 101, 534, 90, 230, 210, 101, 134, 90, 230, 410,320, 132, 101, 534, 90, 230, 210, 101,320, 132, 101, 534, 90, 230, 210, 101,90, 230, 534]
						},
						{
							name: '微信',
							type: 'line',
							data: [420, 132, 101, 534, 90, 230, 210, 151, 134, 90, 230, 210,320, 132, 101, 534, 90, 230, 210, 101,320, 132, 101, 534, 90, 230, 210, 201,90, 230, 534]
						},
						{
							name: '今日头条',
							type: 'line',
							data: [200, 182, 181, 234, 290, 930, 310, 301, 534, 90, 230, 210,229, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 301,50, 230, 434]
						},
						{
							name: '地推',
							type: 'line',
							data: [100, 182, 181, 534, 290, 430, 310, 301, 134, 90, 630, 210,220, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 134, 70, 230, 610, 301,50, 230, 134]
						}
					]
				},
				box61Data:{
					legName:['字节跳动', '西瓜视频', '微博', '小红书',],
					name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12','10-13','10-14','10-15','10-16','10-17','10-18','10-19','10-20','10-21','10-22','10-23','10-24','10-25','10-26','10-27','10-28','10-29','10-30','10-31'],
					value: [
						{
							name: '字节跳动',
							type: 'line',
							data: [100, 182, 181, 234, 290, 130, 310, 301, 134, 90, 130, 210,220, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 101,50, 230, 434]
						},
						{
							name: '西瓜视频',
							type: 'line',
							data: [320, 132, 101, 234, 90, 230, 210, 101, 134, 90, 230, 410,320, 132, 101, 534, 90, 230, 210, 101,320, 132, 101, 534, 90, 230, 210, 101,90, 230, 534]
						},
						{
							name: '微博',
							type: 'line',
							data:[100, 182, 181, 534, 290, 430, 310, 301, 134, 90, 630, 210,220, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 134, 70, 230, 610, 301,50, 230, 134]
						},
						{
							name: '小红书',
							type: 'line',
							data: [200, 182, 181, 234, 290, 230, 310, 301, 134, 90, 230, 210,229, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 301,50, 230, 434]
						},
					]
				},
				box7Data:{
					name: ['互联网', '计算机软件', '电子游戏', '教育培训', '法律', '咨询分析', '学生', '电子商务', '机械设备'],
					value: [{
						value: 74052,
						label: '23.7'
					}, {
						value: 53165,
						label: '14.4'
					}, {
						value: 17089,
						label: '6.0'
					}, {
						value: 13291,
						label: '4.8'
					}, {
						value: 11393,
						label: '4.4'
					}, {
						value: 20886,
						label: '3.6'
					}, {
						value: 20886,
						label: '3.2'
					}, {
						value: 20886,
						label: '2.4'
					}, {
						value: 20886,
						label: '2.3'
					}, {
						value: 20886,
						label: '2.1'
					}, ],
				},
				box71Data:{
					name: ['中', '高', '低'],
					value: [{
							value: 7849,
							label: '48'
						}, {
							value: 2614,
							label: '20'
						}, {
							value: 2296,
							label: '18'
						},
					],
				},
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
