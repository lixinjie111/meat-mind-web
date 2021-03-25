<template>
  <div class="echarts-box" :id="chartID"></div>
</template>

<script>
  let id = 0;
  const COLORS = ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564', '#E44C7F', '#CECE7E', '#CECE7E', '#B7C8EA', '#95E9ED', '#91C2F2', '#B380B6', '#EDA8AD', '#738AD4']
  export default {
    // roseType 默认为 false，代表圆环图， radius:圆环南丁格尔图， area: 区域南丁格尔图
    props: {
      myData: { default: ()=>{}},
      colorList: { default: COLORS },
      roseType: { default: false },
    },
    data() {
      id++
      return {
        chartID: `pie1-${id}`,
        myChart: null
      }
    },
    mounted() {
      this.getChart();
      this.initEcharts(this.myData);
    },
    watch: {
      myData(myData){
        this.initEcharts(myData)
      },
    },
    methods: {
    formatNumber(n){
      var b=parseInt(n).toString();
      var len=b.length;
      if(len<=3){return b;}
      var r=len%3;
      return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
    },
      getChart(){
        this.myChart = this.$echarts.init(document.getElementById(this.chartID));
       window.addEventListener('resize',()=>{
                this.myChart.resize();
            })
      },
      initEcharts(myData) {
        if(!myData || !myData.name){
          return
        }
        let _option = this.defaultOption(myData);
        this.myChart.setOption(_option);
      },
      defaultOption(myData) {
        let tolNum = 0;
        const { name, value } = myData || { name: [], value: [] };
        let list = [];
        console.log(myData,'myData')
        myData['name'].forEach((item,index)=>{
          list.push({
            name:item,
            value:myData['value'][index]
          });
        });
        myData['value'].forEach(element => {
          tolNum+=element;
        });
        const option = {
          color: this.colorList || COLORS,
          grid: {
            left: 0,
            top:0,
            containLabel: true
          },
          title: {
            show: true,
            text: this.formatNumber(tolNum),
            left:'center',
            top:'26%',
            textStyle: {
              color: '#242F57',
              fontSize: 20,
              fontWeight: 'normal',
              fontFamily:'HelveticaNeue' 
            },
          },
          legend: {
            icon: 'circle',
            bottom:50,
            left:'center',
            data: name,
            align:'auto',
            icon:'circle', 
            itemGap:20,
            orient: 'horizontal', //设置图例排列纵向显示
            formatter:function(name){  //该函数用于设置图例显示后的百分比
                var total = 0;
                var value;
                list.forEach((item)=>{
                    total += item.value;
                    if (item.name == name) {
                        value = item.value;
                    }
                })
                var p = ((value / total) * 100).toFixed(2); //求出百分比
                return `${name}  ${p}%`;  //返回出图例所显示的内容是名称+百分比
            },
            textStyle: { 
              color: '#636E95',
              fontSize: 12
            }
          },
          tooltip: {
            trigger: 'item'
          },
          series: [{
            type: 'pie',
            radius: ['37%', '57%'],
            center:['50%', '30%'],
            roseType: this.roseType,
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            label: {
              show: false
            },
            labelLine: {
            
                length: 10,
                length2: 20,
                lineStyle: {
                  width: 1
                }
              
            },
            data: name.map((e, i)=>({ name: e, value: value[i] })),
          }]
        };
        return option;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .echarts-box {
    width: 100%;
    height: 100%;
  }
</style>

