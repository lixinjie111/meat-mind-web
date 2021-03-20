import echarts from 'echarts';
const abelData = {
  colorList : ['#2373FF', '#FE774B', '#1DCEC3', '#F16E84', '#FDD352', '#7BABFF', '#FFAE93', '#77E1DB', '#F6A8B5', '#FEE597', '#BDD5FF', '#FFD7C9', '#BBF1ED', '#FBD4DA', '#FEF1CB', '#FF9F7F'],
  nest01Data:{
    inner: {
      name: ['男', '女',],
      value: [250, 110,],
    },
    outer: {
      name: ['男', '女',],
      value: [225, 135,],
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
  nest201Data:{
    value: [76, 51, 35,]
  },
  nest202Data:{
    value: [
      '7:00',	'9:00',
      '11:30',	'13:00',
      '18:00',	'21:00'
    ],
  },
  box67Data:{
    legName:['线下门店', '朋友圈广告', '360搜索', '百度','分享裂变','抖音',],
    name: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12','10-13','10-14','10-15','10-16','10-17','10-18','10-19','10-20','10-21','10-22','10-23','10-24','10-25','10-26','10-27','10-28','10-29','10-30','10-31'],
    value: [
      {
        name: '线下门店',
        type: 'line',
        data: [100, 182, 181, 234, 290, 130, 310, 301, 134, 90, 130, 210,220, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 101,50, 230, 434]
      },
      {
        name: '朋友圈广告',
        type: 'line',
        data: [320, 132, 101, 234, 90, 230, 210, 101, 134, 90, 230, 410,320, 132, 101, 534, 90, 230, 210, 101,320, 132, 101, 534, 90, 230, 210, 101,90, 230, 534]
      },
      {
        name: '360搜索',
        type: 'line',
        data:[100, 182, 181, 534, 290, 430, 310, 301, 134, 90, 630, 210,220, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 134, 70, 230, 610, 301,50, 230, 134]
      },
      {
        name: '百度',
        type: 'line',
        data: [200, 182, 181, 234, 290, 230, 310, 301, 134, 90, 230, 210,229, 132, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 301,50, 230, 434]
      },
      {
        name: '分享裂变',
        type: 'line',
        data: [300, 192, 141, 294, 280, 230, 310, 301, 184, 90, 230, 310,229, 162, 101, 514, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 610, 301,50, 230, 474]
      },
      {
        name: '抖音',
        type: 'line',
        data: [270, 182, 191, 234, 290, 230, 310, 381, 134, 90, 230, 210,229, 182, 101, 534, 90, 230, 210, 101,520, 132, 101, 534, 70, 230, 310, 301,50, 230, 414]
      },
    ]
  },
}
export default abelData;
