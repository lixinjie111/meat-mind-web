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
			<barEcharts id="box14" :colorList="colorList" :myData="box14Data"></barEcharts>
		</div>
        <div class="box">
			<barEcharts id="box15" :colorList="colorList" :myData="box15Data"></barEcharts>
		</div>
		<div class="box">
			<barL id="box2" :colorList="colorList" :myData="box2Data"></barL>
		</div>
		<div class="box">
			<barL id="box21" :colorList="colorList" :myData="box21Data"></barL>
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
			<cLine id="box52" :colorList="colorList" :myData="box52Data"></cLine>
		</div>
		<div class="box">
			<lineS id="box53" :colorList="colorList" :myData="box53Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box54" :colorList="colorList" :myData="box54Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box55" :colorList="colorList" :myData="box55Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box56" :colorList="colorList" :myData="box56Data"></lineS>
		</div>
		<div class="box">
			<lineS id="box57" :colorList="colorList" :myData="box57Data"></lineS>
		</div>
		<div class="box">
			<cLine id="box58" :colorList="colorList" :myData="box58Data"></cLine>
		</div>
		<div class="box">
			<lineM id="box6" :colorList="colorList" :myData="box6Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box61" :colorList="colorList" :myData="box61Data"></lineM>
		</div>
		<div class="box">
			<lineM id="box62" :colorList="colorList" :myData="box62Data"></lineM>
		</div>
		<div class="box">
			<barC id="box7" :colorList="colorList" :myData="box7Data"></barC>
		</div>
		<div class="box">
			<barC id="box71" :colorList="colorList" :myData="box71Data"></barC>
		</div>
		<div class="box">
			<barLine id="box8" :colorList="colorList" :myData="box8Data"></barLine>
		</div>
		<div class="box">
			<barT id="box9" :colorList="colorList" ></barT>
		</div>
		<div class="box">
			<barLine id="box10" :colorList="colorList" :myData="box10Data"></barLine>
		</div>
		<div class="box">
			<funnel id="box111" :colorList="colorList" :myData="box111Data"></funnel>
		</div>
		<div class="box">
			<barLine id="box112" :colorList="colorList" :myData="box112Data"></barLine>
		</div>
        
    </div>
</template>

<script>
	import barEcharts from './common/barEcharts';
	import barL from './common/barL';
	import barM from './common/barM';
	import cLine from './common/line';
	import lineS from './common/lineS';
	import lineM from './common/lineM';
	import barC from './common/barC';
	import barLine from './common/barLine';
	import barT from './common/barT';
	import funnel from './common/funnel';
    export default {
		components: {barEcharts,barL,barM,cLine,lineM,barC,barLine,barT,lineS,funnel},
        data() {
            return {
				colorList : ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564','#BF6E9B','#CECE7E','#91C2F2','#B7C8EA','#FF9F7F','#91C2F2','#B380B6','#EDA8AD','#738AD4','#FF9F7F'],
				colorList1 : ['#8AE6C7','#4D94FF',  '#FC809F'],
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
				box14Data:{
					name:['2016','2017','2018','2019','2020',],
					value:[ 24,34,7,48,7],
				},
				box15Data:{
					name:['政务','外媒','博客','报刊','新闻','视频','网站','微信','论坛','客户端','微博',],
					value:[ 24,34,7,48,7,4, 20, 30, 26, 15, 5,],
				},
				box2Data:{
					name:['视频', '外媒', '报刊', '政务', '博客', '论坛','微博','网站','微信',],
					value:[4, 20, 30, 26, 15, 5,26, 15, 5],
				},
				box21Data:{
					name:['0-20岁', '21-24岁', '25-30岁', '31-50岁', '50-100岁',],
					value:[54, 80, 90, 126, 55, ],
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
							itemStyle: {
								normal: {
									barBorderRadius:[30,30,0,0]
								},
							},
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
							itemStyle: {
								normal: {
									barBorderRadius:[30,30,0,0]
								},
							},
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
				box52Data:{
					name: ['餐饮', '交通出行', '休闲购物', '日用百货', '其他', ],
					value:[400, 182, 181,  150, 230, ]
				},
				box53Data:{
					name: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月', ],
					value:[300, 182, 181,  150, 230,400, 382, 181,  350, 230,400, 182,  ]
				},
				box54Data:{
					name: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月', ],
					value:[300, 182, 181,  150, 130,400, 382, 181,  350, 230,400, 182,  ]
				},
				box55Data:{
					name: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月', ],
					value:[300, 182, 181,  450, 230,400, 382, 181,  250, 230,400, 182,  ]
				},
				box56Data:{
					name: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月', ],
					value:[300, 182, 181,  150, 230,400, 382, 181,  350, 130,400, 182,  ]
				},
				box57Data:{
					name: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月', ],
					value:[300, 182, 181,  150, 430,400, 382, 181,  350, 230,400, 182,  ]
				},
				box58Data:{
					name: ['中层管理者', '公司白领', '自由职业者', '全职太太', '高级管理','其他',],
					value:[300, 182, 181,  150, 430,10 ]
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
				box62Data:{
					legName:[],
					name: ['1周', '2周', '3周', '4周', '5周', '6周', '7周'],
					value: [
						{
							name: '',
							type: 'line',
							data: [0, 10, 20, 30, 20, 10, 0, ],
							smooth:true,
						},
						{
							name: '',
							type: 'line',
							smooth:true,
							data: [0, 20, 40, 50, 40, 20, 0, ]
						},
						{
							name: '',
							type: 'line',
							smooth:true,
							data:[0, 30, 60, 90, 60, 30, 0, ]
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
				box8Data:{
					formatter:'E-08',
					legName: ['Emo.I', 'SCL'],
					name: ['5', '10', '15', '20', '25', '30', '35', '40', '45','50','55','60'],
					value:  [
						{
							name: 'Emo.I',
							type: 'bar',
							barWidth: '10',
							itemStyle: {
								normal: {
									barBorderRadius:30
								},
								emphasis:{
									color:'#FF9F7F'
								}
							},
							data: [0.02, 0.03, 0.01, 0.02, 0.025, 0.013, -0.015, -0.01, 0.025, -0.06, -0.03, -0.02]
						},
						{
							name: 'SCL',
							type: 'line',
							yAxisIndex: 1,
							data: [0.15, 0.08, 0.19,0.31, 0.58, 0.27, 0.7, 0.86, 0.64, 0.34, 0.23, 0.08]
						},
						
					]
				},
				box10Data:{
					formatter:'%',
					legName: ['覆盖率', 'TGL'],
					name: ['通讯社交', '新闻', '音乐', '出行', '游戏', '汽车服务',],
					value:  [
						{
							name: '覆盖率',
							type: 'bar',
							barWidth: '10',
							itemStyle: {
								normal: {
									barBorderRadius:30
								},
								emphasis:{
									color:'#FF9F7F'
								}
							},
							data: [17, 9, 7, 20, 8, 14,]
						},
						{
							name: 'TGL',
							type: 'line',
							yAxisIndex: 1,
							data: [9, 8, 4, 7, 8, 6,]
						},
						
					]
				},
				box111Data:{
					name: ['潜在用户','新增用户','留存用户','活跃用户','忠实用户','流失'],
					value:  [
						{value: 60, name: '留存用户'},
						{value: 40, name: '活跃用户'},
						{value: 20, name: '忠实用户'},
						{value: 80, name: '新增用户'},
						{value: 10, name: '流失'},
						{value: 100, name: '潜在用户'}
					]
				},
				box112Data:{
					formatter:'%',
					legName: ['时期', '价值'],
					name: ['引入期', '成长期', '成熟期', '休眠期', '流失期'],
					value:  [
						{
							name: '时期',
							type: 'bar',
							barWidth: '10',
							itemStyle: {
								normal: {
									barBorderRadius:30
								},
								emphasis:{
									color:'#FF9F7F'
								}
							},
							data: [17, 9, 7, 20, 8, ]
						},
						{
							name: '价值',
							type: 'line',
							yAxisIndex: 0,
							smooth:true,
							data: [0, 5, 20, 5, 0, ]
						},
						
					]
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
