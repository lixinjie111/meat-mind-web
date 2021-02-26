<template>
	<div class="echarts-box" :id="id"></div>
</template>

<script>
import echarts from 'echarts'
export default {
	props: {
		myData:{
			default:()=>{
				return [];
			},
		},
		id:{
			type:String,
			default:()=>{
				return '';
			},
		},
		colorList:{
			type:Array,
			default:()=>{
				return  ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564','#BF6E9B','#CECE7E','#91C2F2','#B7C8EA','#FF9F7F','#91C2F2','#B380B6','#EDA8AD','#738AD4','#FF9F7F'];
			},
		},
	},
	data () {
		return {
			
		}
	},
    mounted() {
        	this.initEcharts();
    },
	methods: {
		initEcharts() {
			let _option = this.defaultOption();
			let myChart = this.$echarts.init(document.getElementById(this.id));
			myChart.setOption(_option);
			window.addEventListener('resize',()=>{
				myChart.resize();
			})
		},
		defaultOption() {
			var option = {
            color: this.colorList,
            tooltip: {
                trigger: 'axis',
				formatter:function(val){
					console.log(val)
					var msg='';
					//var msg='<div style="width:200px;height:auto">';
					// msg+=val[0].axisValue+"<br/>"
					val.forEach(item=>{
						if(item.data==670){
							msg+=item.marker+`<span style="color:#4D94FF">促销事件</span><br/><span style="color:#fff">邓老凉茶健康守护攻略在6日和11日两度登上微博热搜，<br>引发其他品牌蓝V、健康/资讯类KOL和网友的热议，<br/>最终话题阅读量突破3700万，讨论量达1.2万。<br/>营销事件为邓老凉茶实现销售转化，<br/>其天猫旗舰店产品“邓老凉茶颗粒冲剂”在11日的访问人<br/>数是日常访问数的一百多倍</span>`
						}else if(item.data==671){
							msg+=item.marker+`<span style="color:#A49DFA">公共事件</span><br/><span style="color:#fff">加多宝力压王老吉 恶斗影响两巨头口碑</span>`
						}else{
							//msg+=item.marker+item.seriesName+":"+item.data+"<br/>"
						}
					})
					//msg+='</div>';
					return msg
				},
			},
			legend: {
				bottom:0,
				data:this.myData.legName,
			},
            grid: {
                left: 14,
                right: '6%',
                bottom: 25,
                top: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
				data: this.myData.name,
				//设置轴线的属性
				axisLine:{
					lineStyle:{
						color:'#E9EBF1',
					}
				} ,
				axisLabel: {
					show: true,
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:'12'
					}
				},

            },
            yAxis: {
                type: 'value',
                axisLabel: {
					formatter: '{value} ',
					textStyle: {
						color: "#97A0C3",   //这里用参数代替了
						fontSize:'12'
					}
                },
				axisLine:{
					lineStyle:{
						color:'#E9EBF1',
						//width:8,//这里是为了突出显示加上的
					}
				},
                splitLine: {
                    lineStyle: {
						color:'#E9EBF1',
                        //type: 'dashed',
                    }
                },
            },
            series: this.myData.value
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

