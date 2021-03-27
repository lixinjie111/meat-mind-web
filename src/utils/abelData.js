import echarts from 'echarts';

function mediaTooltip(medias, percents, dir='medias') {
  return `<div style="line-height: 24px; color: rgba(255,255,255,0.7);"><span style="display: inline-block;background: #4D94FF;font-size: 6px;border-radius: 6px;margin-right: 6px;width: 12px;height: 12px;vertical-align: top;margin-top: 6px;line-height: 1;text-align: center;">1</span><img style="width: 18px; display: inline-block; vertical-align: top; margin-top: 3px" src="/static/img/${dir}/logo${medias[0]}.png"> <span style="font-size: 12px;margin-left: 12px;">贡献占比：${percents[0]}%</span></div>
<div style="line-height: 24px; color: rgba(255,255,255,0.7);"><span style="display: inline-block;background: #A49DFA;font-size: 6px;border-radius: 6px;margin-right: 6px;width: 12px;height: 12px;vertical-align: top;margin-top: 6px;line-height: 1;text-align: center;">2</span><img style="width: 18px; display: inline-block; vertical-align: top; margin-top: 3px" src="/static/img/${dir}/logo${medias[1]}.png"> <span style="font-size: 12px;margin-left: 12px;">贡献占比：${percents[1]}%</span></div>
<div style="line-height: 24px; color: rgba(255,255,255,0.7);"><span style="display: inline-block;background: #FC809F;font-size: 6px;border-radius: 6px;margin-right: 6px;width: 12px;height: 12px;vertical-align: top;margin-top: 6px;line-height: 1;text-align: center;">3</span><img style="width: 18px; display: inline-block; vertical-align: top; margin-top: 3px" src="/static/img/${dir}/logo${medias[2]}.png"> <span style="font-size: 12px;margin-left: 12px;">贡献占比：${percents[2]}%</span></div>`;
}

const mediaHezuo = [
  {media: ['03', '01', '11', ], percent: [8, 6, 5]},
  {media: ['02', '06', '10', ], percent: [10, 8, 6]},
  {media: ['05', '01', '07', ], percent: [9, 7, 6]},
  {media: ['06', '02', '08', ], percent: [11, 8, 5]},
  {media: ['07', '04', '05', ], percent: [10, 9, 5]},
  {media: ['08', '05', '02', ], percent: [9, 6, 5]}];

const mediaKOL = [
  {media: ['01', '05', '07', ], percent: [9, 7, 6]},
  {media: ['02', '06', '08', ], percent: [11, 6, 5]},
  {media: ['05', '08', '02', ], percent: [9, 7, 5]},
  {media: ['04', '05', '07', ], percent: [10, 8, 5]},
  {media: ['01', '11', '03', ], percent: [9, 6, 5]},
  {media: ['06', '10', '02', ], percent: [10, 9, 7]},];

const abelData = {
  colorList : ['#2373FF', '#FE774B', '#1DCEC3', '#F16E84', '#FDD352', '#7BABFF', '#FFAE93', '#77E1DB', '#F6A8B5', '#FEE597', '#BDD5FF', '#FFD7C9', '#BBF1ED', '#FBD4DA', '#FEF1CB', '#FF9F7F'],
  nest01Data:{
    inner: {
      name: ['男', '女',],
      value: [110, 250,],
    },
    outer: {
      name: ['男', '女',],
      value: [135, 225,],
    },
  },
  nest01_cloneData:{
    inner: {
      name: ['男', '女',],
      value: [100, 90,],
    },
    outer: {
      name: ['男', '女',],
      value: [500, 135,],
    },
  },
  nest02Data:{
    inner: {
      name: ['18-20岁', '21-25岁','26-30岁','31-35岁','36-40岁','41-45岁',],
      value: [45, 95,40,90,46,44],
    },
    outer: {
      name: ['18-20岁', '21-25岁','26-30岁','31-35岁','36-40岁','41-45岁',],
      value: [50, 100,40,50,60,60],
    },
  },
  nest02_cloneData:{
    inner: {
      name: ['18-20岁', '21-25岁','26-30岁','31-35岁','36-40岁','41-45岁',],
      value: [65, 105,30,90,46,44],
    },
    outer: {
      name: ['18-20岁', '21-25岁','26-30岁','31-35岁','36-40岁','41-45岁',],
      value: [90, 20, 30,50,60,60],
    },
  },
  nest03Data:{
    inner: {
      name: ['中层管理者', '自由职业者', '高级管理', '公司白领', '全职太太', '其他'],
      value: [85, 105, 80, 45, 21, 24],
    },
    outer: {
      name: ['中层管理者', '自由职业者', '高级管理', '公司白领', '全职太太', '其他'],
      value: [100, 90, 80, 40, 30, 20],
    },
  },
  nest03_cloneData:{
    inner: {
      name: ['中层管理者', '自由职业者', '高级管理', '公司白领', '全职太太', '其他'],
      value: [10, 82, 80, 45, 21, 60],
    },
    outer: {
      name: ['中层管理者', '自由职业者', '高级管理', '公司白领', '全职太太', '其他'],
      value: [200, 90, 80, 40, 30, 20],
    },
  },
  nest04Data:{
    inner: {
      name: ["5000元以下", "5000-7000元", "7001-10000元", "10001-11000元", "11001-13000元", "13001-15000元", "15001-17000元", "17001-20000元", "20001-30000元", "30001-50000元", "50000元以上", ],
      value: [35, 45, 21, 24, 20, 12, 15, 8, 2, 3, 2],
    },
    outer: {
      name: ["5000元以下", "5000-7000元", "7001-10000元", "10001-11000元", "11001-13000元", "13001-15000元", "15001-17000元", "17001-20000元", "20001-30000元", "30001-50000元", "50000元以上", ],
      value: [95, 44, 31, 20, 18, 10, 9, 8, 2, 3, 2],
    },
  },
  nest04_cloneData:{
    inner: {
      name: ["5000元以下", "5000-7000元", "7001-10000元", "10001-11000元", "11001-13000元", "13001-15000元", "15001-17000元", "17001-20000元", "20001-30000元", "30001-50000元", "50000元以上", ],
      value: [50, 45, 21, 24, 20, 12, 15, 8, 2, 3, 10],
    },
    outer: {
      name: ["5000元以下", "5000-7000元", "7001-10000元", "10001-11000元", "11001-13000元", "13001-15000元", "15001-17000元", "17001-20000元", "20001-30000元", "30001-50000元", "50000元以上", ],
      value: [10, 44, 31, 20, 18, 10, 9, 8, 2, 3, 20],
    },
  },
  nest05Data:{
    inner: {
      name: ['四口之家', '五口之家', '单身/与父母一起住', '俩口之家', '三口之家'],
      value: [54, 89, 18, 10, 35],
    },
    outer: {
      name: ['四口之家', '五口之家', '单身/与父母一起住', '俩口之家', '三口之家'],
      value: [17, 10, 18, 30, 35],
    },
  },
  nest05_cloneData:{
    inner: {
      name: ['四口之家', '五口之家', '单身/与父母一起住', '俩口之家', '三口之家'],
      value: [100, 89, 18, 10, 50],
    },
    outer: {
      name: ['四口之家', '五口之家', '单身/与父母一起住', '俩口之家', '三口之家'],
      value: [95, 20, 20, 30, 80],
    },
  },
  nest06Data:{
    inner: {
      name: ['<25岁', '35-45岁', '>56岁', '26-34岁', '46-55岁'],
      value: [100, 58, 10, 8, 5],
    },
    outer: {
      name: ['<25岁', '35-45岁', '>56岁', '26-34岁', '46-55岁'],
      value: [57, 20, 10, 8, 5],
    },
  },
  nest06_cloneData:{
    inner: {
      name: ['<25岁', '35-45岁', '>56岁', '26-34岁', '46-55岁'],
      value: [12, 58, 10, 8, 115],
    },
    outer: {
      name: ['<25岁', '35-45岁', '>56岁', '26-34岁', '46-55岁'],
      value: [20, 20, 10, 8, 156],
    },
  },
  nest201Data:{
    value: [32, 46, 78,]
  },
  nest202Data:{
    value: [
      '7:00',	'9:00',
      '11:30',	'13:00',
      '18:00',	'21:00'
    ],
  },
  nest203Data:{
    value: [
      '6:00',	'8:00',
      '10:30',	'13:00',
      '17:00',	'20:00'
    ],
  },
  nest204Data:{
    value: [
      '5:00',	'7:00',
      '10:30',	'12:00',
      '18:00',	'21:00'
    ],
  },
barLine:{
    formatter:'',
    legName: ['投放成本','销售转化','合作媒介','合作KOL'],
    name: ['2-10', '2-17', '2-24', '3-3', '3-10', '3-17'],
    value:  [
      {
        name: '投放成本',
        type: 'bar',
        barWidth: '10%',
        barMinWidth:10,
        barMaxWidth:40,
        yAxisIndex: 1,
        itemStyle: {
          // barBorderRadius:3,
          emphasis:{
            color:'#FF9F7F'
          }
        },
        tooltip: {show: false},
        data: [220, 368, 264, 496, 242, 385]
      },
      {
        name: '销售转化',
        type: 'bar',
        barWidth: '10%',
        barMinWidth:10,
        barMaxWidth:40,
        yAxisIndex: 1,
        itemStyle: {
          // barBorderRadius:3,
          emphasis:{
            color:'#FF9F7F'
          }
        },
        tooltip: {show: false},
        data: [438, 653, 565, 778, 620, 699]
      },
      {
        name: '合作媒介',
        type: 'line',
        // smooth:true,
        // areaStyle: {
        //   color: {
        //     type: 'linear',
        //     x: 0,
        //     y: 0,
        //     x2: 0,
        //     y2: 0.6,
        //     colorStops: [{
        //       offset: 0, color: '#1DCEC3' // 0% 处的颜色
        //     }, {
        //       offset: 1, color: 'rgba(255,255,255, 0)' // 100% 处的颜色
        //     }],
        //     global: false // 缺省为 false
        //   }
        // },
        tooltip: {
          show: true,
          formatter: (params) => {
            console.log(params.dataIndex)
            return mediaTooltip(mediaHezuo[params.dataIndex].media, mediaHezuo[params.dataIndex].percent);
          }
        },
        data: [6.3, 7.9, 6.5, 7.1, 7.2, 9.3]
      },
      {
        name: '合作KOL',
        type: 'line',
        // smooth:true,
        // areaStyle: {
        //   color: {
        //     type: 'linear',
        //     x: 0,
        //     y: 0,
        //     x2: 0,
        //     y2: .8,
        //     colorStops: [{
        //       offset: 0, color: '#FE774B' // 0% 处的颜色
        //     }, {
        //       offset: 1, color: 'rgba(255,255,255, 0)' // 100% 处的颜色
        //     }],
        //     global: false // 缺省为 false
        //   }
        // },
        tooltip: {
          show: true,
          formatter: (params) => {
            return mediaTooltip(mediaKOL[params.dataIndex].media, mediaKOL[params.dataIndex].percent, 'heads');
          }
        },
        data: [4.9, 5.2, 3.6, 4.7, 4.8, 7.1]
      }
    ]
  },
  barStack01:{
    legName:['短视频', '社交传媒', '新媒体网站', '新闻门户'],
    name: ['2-10', '2-17', '2-24', '3-3', '3-10', '3-17'],
    value:[
      {
        name: '短视频',
        type: 'bar',
        stack: '总量',
        barWidth: 14,
        // itemStyle: {
        //   barBorderRadius: 3,
        // },
        data: [20.2, 23.1, 20.5, 22.6, 21.8, 24.2,]
      },
      {
        name: '社交传媒',
        type: 'bar',
        stack: '总量',
        barWidth: 14,
        // itemStyle: {
        //   barBorderRadius: 3,
        // },
        data: [15.1, 18.6, 17.8, 18.5, 15.0, 17.1,]
      },
      {
        name: '新媒体网站',
        type: 'bar',
        stack: '总量',
        barWidth: 14,
        // itemStyle: {
        //   barBorderRadius: 3,
        // },
        data: [14.7, 13.2, 14.2, 13.4, 13.6, 14.5,]
      },
      {
        name: '新闻门户',
        type: 'bar',
        stack: '总量',
        barWidth: 14,
        // itemStyle: {
        //   barBorderRadius: 3,
        // },
        data: [12.4, 12.6, 12.9, 12.2, 10.1, 11.7,]
      },
      {
        name: '其它',
        type: 'bar',
        stack: '总量',
        barWidth: 14,
        // itemStyle: {
        //   barBorderRadius: 3,
        // },
        data: [37.6, 32.5, 34.6, 33.3, 39.5, 32.5,]
      },
    ]
  },
  box119Data:{
    name: ['提交订单详情','参与抽奖',],
    value:  [
      {value: 100, name: '提交订单详情'},
      {value: 66.67, name: '参与抽奖'},
    ]
  },
  box55Data:{
    name: ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9', '2-10', '2-11', '2-12', '2-13', '2-14', '2-15', '2-16', '2-17', '2-18', '2-19', '2-20', '2-21', '2-22', '2-23', '2-2', '2-24', '2-25', '2-26', '2-27', '2-28', ],
    value:[55, 58, 60, 48, 63, 50, 71, 65,  68, 59, 63, 57, 55, 58, 60, 48, 55, 58, 60, 48, 63, 50, 71, 65,  68, 59, 63, 57, 57, 62 ]
  },
}
export default abelData;
