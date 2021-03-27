<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
	import {timeValue} from "@/utils/func";

	const color = {
				type: 'linear',
				x: 0,
				y: 0,
				x2: 0,
				y2: 1,
				colorStops: [{
					offset: 0, color: '#8CB6FF' // 0% 处的颜色
				}, {
					offset: 1, color: '#2373FF' // 100% 处的颜色
				}]};

export default {
	props: {
		myData:{
			type: Object,
			default:()=>{
				return {};
			},
		},
		id:{
			type:String,
			default:()=>{
				return '';
			},
		},
		title:{
			type:String,
			default:()=>{
				return '';
			},
		},
		colorList:{
			type:Array,
			default:()=>{
				return  [
					'#fff',
					'transparent',
						color,
					'transparent',
						color,
					'transparent',
						color,
					'transparent',
						color,
					'transparent',
						color,
					'transparent',
						color,
					'transparent',
						color,
					'transparent'];
			},
		},
	},
	data () {
		return {

		}
	},
	watch: {
      myData(myData){
        this.initEcharts()
      },
    },
    mounted(){this.initEcharts()},
	methods: {
		initEcharts() {
			let _option = this.defaultOption(this.myData.value);
			let myChart = echarts5.init(document.getElementById(this.id));
			myChart.setOption(_option);
			window.addEventListener('resize',()=>{
				myChart.resize();
			})
		},
		defaultOption(value) {
			let data = [{value: 0}];
			let prev = 0;
			for (let i=0; i<value.length/2; i++) {
				data.push({value: timeValue(value[ i*2 ]) - prev, label: {show: false}}, {name: value[ i*2 ] +' - '+ value[ i*2+1 ], value: timeValue(value[ i*2+1 ]) - timeValue(value[ i*2 ]),label: {show: false}});
				prev = timeValue(value[ i*2+1 ]);
			}
			if (prev < 24)
				data.push({value: 24 - prev});

			var option = {
				color:this.colorList,
				title: {
					text: this.title,
					top: 'center',
					left: 'center',
					textStyle: {
						fontSize: 16,
						fontWeight: 500,
						color: 'black'
					},
					itemGap: 20
				},
				series: [{
					name: 'shadow1',
					type: 'pie',
					z: 1,
					radius: [0, '80%'],
					hoverAnimation: false,
					labelLine: {
						show: false
					},
					itemStyle: {
						shadowBlur: 20,
						shadowColor: 'rgba(134, 143, 191, 0.3)',
					},
					data: [
						{value: 1},
					]
				},
				{
					name: 'shadow2',
					type: 'pie',
					z: 2,
					radius: [0, '60%'],
					hoverAnimation: false,
					labelLine: {
						show: false
					},
					itemStyle: {
						shadowBlur: 20,
						shadowColor: 'rgba(134, 143, 191, 0.3)',
					},
					data: [
						{value: 1},
					]
				},
					{
						name: 'Pressure',
						type: 'gauge',
						silent: true,
						z: 4,
						animation: false,
						axisTick: {
							distance: 0,
							length: 4,
							lineStyle: {
								width: 1,
								color: '#EAEDF7',
							}
						},
						detail: {
							show: false,
						},
						progress: {
							show: false,
						},
						axisLabel: {
							show: false,
						},
						axisLine: {
							show: false,
							lineStyle: {
								width: 0,
							}
						},
						splitLine: {
							length: 7,
							distance: 0,
							lineStyle: {
								width: 1,
								color: '#EAEDF7',
							}
						},
						radius: '78.5%',
						splitNumber: 24,
						startAngle: 90,
						endAngle: 90+360,
					},
					{
						name: '最优曝光时间',
						type: 'pie',
						z: 3,
						radius: ['60%', '78.5%'],
						avoidLabelOverlap: false,
						// hoverAnimation: false,
						// label: {
						// 	show: true,
						// 	formatter: params => {
						// 		if (params.name)
						// 			return `${params.seriesName}\n${params.name}`;
						// 	},
						// 	color: '#97A0C3'
						// },
						// labelLine: {
						// 	show: true
						// },
						data
					},

				],
            };
			return option;
		}
	}
}
</script>
<style lang="scss" scoped>
.echarts-box{
    width: 100%;
    height:100%;
}
</style>

