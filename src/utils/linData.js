let colorList = ['#2373FF', '#FE774B', '#1DCEC3', '#F16E84', '#FDD352', '#7BABFF', '#FFAE93', '#77E1DB', '#F6A8B5', '#FEE597', '#BDD5FF', '#FFD7C9', '#BBF1ED', '#FBD4DA', '#FEF1CB', '#FF9F7F'];
// scatterData 30个随机数
let starr = [],chance=[],risk=[]
for(let i=0;i<31;i++){
  let num = Math.random()*(1-0.5)+0.5
  num>0.9?num=0:null
  num<0.6?num=0:null;
  let num2 = Math.random() - 0.5
  num2>0&&num2<0.1?num2+=0.1:null
  let num3 = Math.random() * 0.5 -1
  num3>-0.6?num3=0:null
  num3<-0.9?num3=0:null
  starr.push(num)
  chance.push(num2)
  risk.push(num3)
}
risk[14] = -0.6
const linData = {
    colorList: ['#2373FF', '#FE774B', '#1DCEC3', '#F16E84', '#FDD352', '#7BABFF', '#FFAE93', '#77E1DB', '#F6A8B5', '#FEE597', '#BDD5FF', '#FFD7C9', '#BBF1ED', '#FBD4DA', '#FEF1CB', '#FF9F7F'],
    box1Data: {
        name: ['02-01', '02-06', '02-11', '02-16', '02-21', '02-26'],
        legName: ['微博', '微信', '百度', '今日头条', '地推',],
        value: [
            {
                name: '微博',
                type: 'bar',
                stack: '总量',
                
                data: [320, 302, 301, 334, 330, 390]
            },
            {
                name: '微信',
                type: 'bar',
                stack: '总量',
                
                data: [820, 832, 901, 934, 1100, 1290]
            },
            {
                name: '百度',
                type: 'bar',
                
                stack: '总量',
                data: [150, 212, 201, 154, 190, 190]
            },
            {
                name: '今日头条',
                type: 'bar',
                
                stack: '总量',
                data: [220, 182, 191, 234, 190, 290]
            },
            {
                name: '地推',
                type: 'bar',
                
                stack: '总量',
                itemStyle: {
                    
                        //barBorderRadius:[2 / 144 * window.rem,2 / 144 * window.rem,0,0]
                    },
                
                data: [320, 302, 301, 334, 290, 390]
            },
        ]
    },
    box2Data: {
        name: ['12月上半月', '12月下半月', '1月上半月', '1月下半月', '2月上半月', '2月下半月'],
        legName: ['微博', '微信', '百度', '今日头条', '地推',],
        value: [
            {
                name: '微博',
                type: 'bar',
                stack: '总量',
                
                data: [5200, 5020, 5010, 5340, 5300, 5923]
            },
            {
                name: '微信',
                type: 'bar',
                stack: '总量',
                
                data: [18200, 18320, 19010, 19340, 21000, 20201]
            },
            {
                name: '百度',
                type: 'bar',
                
                stack: '总量',
                data: [2100, 2220, 2410, 2540, 2900, 2832]
            },
            {
                name: '今日头条',
                type: 'bar',
                
                stack: '总量',
                data: [4200, 4102, 3901, 4340, 3900, 4350]
            },
            {
                name: '地推',
                type: 'bar',
                
                stack: '总量',
                itemStyle: {
                    
                        //barBorderRadius:[2 / 144 * window.rem,2 / 144 * window.rem,0,0]
                    
                },
                data: [5200, 5020, 5001, 5304, 5500, 5673]
            },
        ]
    },
    box3Data: {
        legName: ['今日头条', '朋友圈广告', '360搜索', '百度', '分享裂变', '抖音',],
        name: ['02-01', '02-02', '02-03', '02-04', '02-05', '02-06', '02-07', '02-08', '02-09', '02-10', '02-11', '02-12', '02-13', '02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20', '02-21', '02-22', '02-23', '02-24', '02-25', '02-26', '02-27', '02-28'],
        value: [
            {
                name: '今日头条',
                type: 'line',
                data: [293, 299, 305, 279, 320, 278, 298, 264, 316, 319, 279, 293, 292, 305, 303, 308, 260, 291, 293, 271, 315, 262, 306, 285, 314, 262, 285, 314]
            },
            {
                name: '朋友圈广告',
                type: 'line',
                data: [574, 566, 567, 575, 568, 566, 580, 577, 574, 566, 560, 569, 571, 578, 570, 564, 572, 566, 577, 572, 579, 565, 563, 572, 570, 561, 572, 570]
            },
            {
                name: '360搜索',
                type: 'line',
                data: [258, 229, 211, 221, 255, 248, 239, 228, 240, 249, 233, 209, 218, 232, 239, 227, 230, 248, 230, 258, 216, 238, 212, 249, 233, 209, 218, 232]
            },
            {
                name: '百度',
                type: 'line',
                data: [404, 395, 406, 408, 391, 406, 391, 392, 387, 384, 401, 380, 404, 403, 384, 393, 389, 396, 409, 410, 407, 400, 395, 401, 380, 404, 403, 384]
            },
            {
                name: '分享裂变',
                type: 'line',
                data: [471, 488, 483, 480, 484, 484, 487, 490, 470, 478, 482, 474, 485, 475, 488, 482, 478, 481, 475, 479, 488, 479, 475, 484, 487, 490, 470, 478]
            },
            {
                name: '抖音',
                type: 'line',
                data: [578, 579, 562, 555, 578, 570, 554, 556, 577, 579, 555, 571, 557, 552, 580, 562, 551, 567, 565, 553, 554, 564, 555, 570, 554, 556, 577, 579]
            },
        ]
    },
    box4Data: {
        legName: ['今日头条', '朋友圈广告', '360搜索', '百度', '分享裂变', '抖音',],
        name: ["12月上半月", "12月下半月", "1月上半月", "1月下半月", "2月上半月", "2月下半月"],
        value: [
            {
                name: '今日头条',
                type: 'line',
                data: [319, 279, 293, 292, 305, 308]
            },
            {
                name: '朋友圈广告',
                type: 'line',
                data: [574, 574, 566, 560, 569, 571]
            },
            {
                name: '360搜索',
                type: 'line',
                data: [258, 209, 218, 232, 238, 212]
            },
            {
                name: '百度',
                type: 'line',
                data: [404, 409, 410, 407, 400, 395]
            },
            {
                name: '分享裂变',
                type: 'line',
                data: [471, 488, 482, 478, 479, 475]
            },
            {
                name: '抖音',
                type: 'line',
                data: [578, 551, 567, 554, 564, 555]
            },
        ]
    },
    barLine:{
      formatter:'',
      legName: ['市场供应量','市场需求量','销售额（行业）','销售额（自身）'],
      name: ['2018', '2019', '2020', '2021E(预测)'],
      value:  [
          {
              name: '市场供应量',
              type: 'bar',
              itemStyle: {
                 //barBorderRadius:2 / 144 * window.rem
              },
              data: [2800, 3000, 3800, 4150]
          },
          {
              name: '市场需求量',
              type: 'bar',
              itemStyle: {
                 //barBorderRadius:2 / 144 * window.rem
              },
              data: [3000, 2300, 3500, 4250]
          },
          {
              name: '销售额（行业）',
              type: 'line',
              smooth:true,
              yAxisIndex: 1,
              data: [650, 510, 780, 850]
          },
          {
              name: '销售额（自身）',
              type: 'line',
              smooth:true,
              yAxisIndex: 1,
              data: [320, 200, 300, 380]
          }
      ]      
    },
    pieData:{
      name: ['邓老凉茶', '王老吉', '和其正', '加多宝', '其他'],
      value: ['20','18','22','20','20'],   
    },
    graphData:{
        nodes: [
            {
              id: "1",
              name: "MlleBaptistine",
              symbolSize: 6.32380,
              x: -42.552713,
              y: 49.058352,
              value: 9.485714,
              category: 0,
            },
            {
              id: "2",
              name: "MmeMagloire",
              symbolSize: 6.32380,
              x: -48.564808,
              y: 47.052566,
              value: 9.485714,
              category: 0,
            },
            {
              id: "3",
              name: "Labarre",
              symbolSize: 2.6666665,
              x: -17.86821,
              y: 46.912256,
              value: 4,
              category: 0,
            },
            {
              id: "4",
              name: "新浪财经",
              symbolSize: 66.66667,
              x: -17.586058,
              y: -1.3624113,
              value: 100,
              category: 0,
            },
            {
              id: "5",
              name: "Marguerite",
              symbolSize: 4.49523,
              x: -67.955816,
              y: -36.93827,
              value: 6.742859,
              category: 0,
            },
            {
              id: "6",
              name: "MmeDeR",
              symbolSize: 2.6666665,
              x: -38.862626,
              y: 35.710602,
              value: 4,
              category: 0,
            },
            {
              id: "7",
              name: "Isabeau",
              symbolSize: 2.6666665,
              x: -31.610336,
              y: 40.399536,
              value: 4,
              category: 0,
            },
            {
              id: "8",
              name: "Gervais",
              symbolSize: 2.6666665,
              x: -25.5403092,
              y: 48.510114,
              value: 4,
              category: 0,
            },
            {
              id: "9",
              name: "Cosette",
              symbolSize: 20.952382,
              x: 15.72929,
              y: -6.3025494,
              value: 31.428574,
              category: 2,
            },
            {
              id: "10",
              name: "百度百家号",
              symbolSize: 20.466666,
              x: -77.13683999999999,
              y: -4.0413372,
              value: 23.2,
              category: 1,
            },
            {
              id: "11",
              name: "Scaufflaire",
              symbolSize: 2.6666665,
              x: -24.482696,
              y: 42.075006,
              value: 4,
              category: 0,
            },
            {
              id: "12",
              name: "Woman1",
              symbolSize: 4.49523,
              x: -46.92002,
              y: -22.630134,
              value: 6.742859,
              category: 0,
            },
            {
              id: "13",
              name: "Judge",
              symbolSize: 11,
              x: -77.56983,
              y: 11.74118,
              value: 17.714287,
              category: 1,
            },
            {
              id: "14",
              name: "Champmathieu",
              symbolSize: 11,
              x: -67.64614,
              y: 17.49681,
              value: 17.714287,
              category: 1,
            },
            {
              id: "15",
              name: "Brevet",
              symbolSize: 11,
              x: -90.653748,
              y: 11.789296,
              value: 17.714287,
              category: 1,
            },
            {
              id: "16",
              name: "Chenildieu",
              symbolSize: 11,
              x: -77.289,
              y: 28.011874,
              value: 17.714287,
              category: 1,
            },
            {
              id: "17",
              name: "Cochepaille",
              symbolSize: 11,
              x: -89.35752,
              y: 24.,
              value: 17.714287,
              category: 1,
            },
            {
              id: "18",
              name: "Pontmercy",
              symbolSize: 6.32380,
              x: 67.299476,
              y: -53.911828,
              value: 9.485714,
              category: 2,
            },
            {
              id: "19",
              name: "Woman2",
              symbolSize: 6.32380,
              x: -37.400836,
              y: -29.005326000000003,
              value: 9.485714,
              category: 2,
            },
            {
              id: "20",
              name: "抖音",
              symbolSize: 41.066670,
              x: 77.579144,
              y: 22.0924652,
              value: 61.600006,
              category: 3,
            },
            {
              id: "21",
              name: "Gillenormand",
              symbolSize: 13.638097333333334,
              x: 25.296619999999997,
              y: 13.621243999999999,
              value: 20.457146,
              category: 2,
            },
            {
              id: "22",
              name: "Magnon",
              symbolSize: 4.49523,
              x: 25.41473,
              y: -22.611846,
              value: 6.742859,
              category: 2,
            },
            {
              id: "23",
              name: "MlleGillenormand",
              symbolSize: 13.638097333333334,
              x: 32.527118,
              y: 23.531299999999998,
              value: 20.457146,
              category: 2,
            },
            {
              id: "24",
              name: "MmePontmercy",
              symbolSize: 4.49523,
              x: 70.73283,
              y: -41.17833,
              value: 6.742859,
              category: 2,
            },
            {
              id: "25",
              name: "MlleVaubois",
              symbolSize: 2.6666665,
              x: 33.087878,
              y: 67.95472,
              value: 4,
              category: 2,
            },
            {
              id: "26",
              name: "LtGillenormand",
              symbolSize: 8.15238,
              x: 27.538695999999998,
              y: 39.221379999999996,
              value: 12.228573,
              category: 2,
            },
            {
              id: "27",
              name: "知乎",
              symbolSize: 35.58095333333333,
              x: 41.289373,
              y: -2.7610821999999997,
              value: 53.37143,
              category: 2,
            },
            {
              id: "28",
              name: "BaronessT",
              symbolSize: 4.49523,
              x: 38.965986,
              y: 44.956072,
              value: 6.742859,
              category: 2,
            },
            {
              id: "29",
              name: "Mabeuf",
              symbolSize: 20.952382,
              x: 119.53236,
              y: 27.036962,
              value: 31.428574,
              category: 3,
            },
            {
              id: "30",
              name: "Enjolras",
              symbolSize: 28.266665,
              x: 71.156732,
              y: -14.976490799999998,
              value: 42.4,
              category: 3,
            },
            {
              id: "31",
              name: "Combeferre",
              symbolSize: 20.952382,
              x: 103.0592,
              y: -9.2335128,
              value: 31.428574,
              category: 3,
            },
            {
              id: "32",
              name: "Prouvaire",
              symbolSize: 17.295237333333332,
              x: 122.85857000000001,
              y: -13.86208,
              value: 25.942856,
              category: 3,
            },
            {
              id: "33",
              name: "Feuilly",
              symbolSize: 20.952382,
              x: 110.03833999999999,
              y: -25.635073999999996,
              value: 31.428574,
              category: 3,
            },
            {
              id: "34",
              name: "Courfeyrac",
              symbolSize: 24.609527,
              x: 87.23436799999999,
              y: -2.5457365,
              value: 36.91429,
              category: 3,
            },
            {
              id: "35",
              name: "Bahorel",
              symbolSize: 22.780953333333332,
              x: 120.51044999999999,
              y: 3.2842854000000003,
              value: 34.17143,
              category: 3,
            },
            {
              id: "36",
              name: "Bossuet",
              symbolSize: 24.609527,
              x: 91.16391,
              y: -23.091652,
              value: 36.91429,
              category: 3,
            },
            {
              id: "37",
              name: "Joly",
              symbolSize: 22.780953333333332,
              x: 103.281568,
              y: 9.4484466,
              value: 34.17143,
              category: 3,
            },
            {
              id: "38",
              name: "Grantaire",
              symbolSize: 19.12381,
              x: 129.28626,
              y: -30.212662,
              value: 28.685715,
              category: 3,
            },
            {
              id: "39",
              name: "MotherPlutarch",
              symbolSize: 2.6666665,
              x: 133.79136,
              y: 40.930976,
              value: 4,
              category: 3,
            },
            {
              id: "40",
              name: "Toussaint",
              symbolSize: 6.32380,
              x: 8.1884506,
              y: 22.756543999999998,
              value: 9.485714,
              category: 0,
            },
            {
              id: "41",
              name: "Child1",
              symbolSize: 4.49523,
              x: 87.5878,
              y: 58.316468,
              value: 6.742859,
              category: 3,
            },
            {
              id: "42",
              name: "Child2",
              symbolSize: 4.49523,
              x: 93.209844,
              y: 56.67211999999999,
              value: 6.742859,
              category: 3,
            },
            {
              id: "43",
              name: "MmeHucheloup",
              symbolSize: 13.638097333333334,
              x: 142.43670600000001,
              y: 0.9626298999999999,
              value: 20.457146,
              category: 3,
            },
        ],
        links: [
            {
              source: 3,//nodes数组的index
              target: 0,
            },
            {
              source: 3,
              target: 1,
            },
            {
              source: 3,
              target: 2,
            },
            {
              source: 4,
              target: 3,
            },
            {
              source: 5,
              target: 3,
            },
            {
              source: 11,
              target: 3,
            },
            {
              source: 18,
              target: 3,
            },
            {
              source: 39,
              target: 3,
            },
            {
              source: 39,
              target: 3,
            },
            {
              source: 6,
              target: 3,
            },
            {
              source: 10,
              target: 3,
            },
            {
              source: 7,
              target: 3,
            },
            {
              source: 8,
              target: 3,
            },
            {
              source: 9,
              target: 3,
            },
            {
              source: 12,
              target: 3,
            },
            {
              source: 13,
              target: 3,
            },
            {
              source: 14,
              target: 3,
            },
            {
              source: 15,
              target: 3,
            },
            {
              source: 16,
              target: 3,
            },
            {
              source: 18,
              target: 8,
            },
            {
              source: 19,
              target: 3,
            },
            {
              source: 20,
              target: 3,
            },
            {
              source: 22,
              target: 3,
            },
            {
              source: 26,
              target: 3,
            },
            {
              source: 29,
              target: 3,
            },
            {
              source: 35,
              target: 3,
            },
            {
              source: 20,
              target: 8,
            },
            {
              source: 22,
              target: 8,
            },
            {
              source: 25,
              target: 8,
            },
            {
              source: 26,
              target: 8,
            },
            {
              source: 39,
              target: 8,
            },
            {
              source: 21,
              target: 20,
            },
            {
              source: 26,
              target: 17,
            },
            {
              source: 22,
              target: 25,
            },
            {
              source: 27,
              target: 20,
            },
            {
              source: 25,
              target: 20,
            },
            {
              source: 22,
              target: 24,
            },
            {
              source: 23,
              target: 17,
            },
            {
              source: 23,
              target: 22,
            },
            {
              source: 26,
              target: 20,
            },
            {
              source: 26,
              target: 22,
            },
            {
              source: 26,
              target: 27,
            },
            {
              source: 26,
              target: 25,
            },
            {
              source: 12,
              target: 9,
            },
            {
              source: 13,
              target: 9,
            },
            {
              source: 14,
              target: 9,
            },
            {
              source: 15,
              target: 9,
            },
            {
              source: 16,
              target: 9,
            },
            {
              source: 40,
              target: 19,
            },
            {
              source: 41,
              target: 19,
            },
            {
              source: 28,
              target: 19,
            },
            {
              source: 29,
              target: 19,
            },
            {
              source: 30,
              target: 19,
            },
            {
              source: 31,
              target: 19,
            },
            {
              source: 32,
              target: 19,
            },
            {
              source: 33,
              target: 19,
            },
            {
              source: 34,
              target: 19,
            },
            {
              source: 35,
              target: 19,
            },
            {
              source: 36,
              target: 19,
            },
            {
              source: 37,
              target: 19,
            },
            {
              source: 42,
              target: 19,
            },
            {
              source: 38,
              target: 28,
            },
        ],
        categories:[
          {name: "新浪财经"},
          {name: "百度百家号"},
          {name: "知乎"},
          {name: "抖音"}
        ],
    },
    graphData1:{
        nodes: [
            {
                id:"0",
                name: "百度百家号",
                symbolSize: 20,
                x: -77,
                y: -4,
                value: 60,
                category:1,
            },
            {
                id:"1",
                name: "人员1",
                symbolSize: 18,
                x: -91,
                y: 12,
                value: 18,
                category: 1
            },
            {
                id:"2",
                name: "人员2",
                symbolSize: 18,
                x: -78,
                y: 12,
                value: 18,
                category: 1
            },
            {
                id:"3",
                name: "人员3",
                symbolSize: 16,
                x: -67.64614,
                y: 17.49681,
                value: 17.714287,
                category: 1
            },
            {
                id:"4",
                name: "人员4",
                symbolSize: 12,
                x: -89.35752,
                y: 24.,
                value: 17.714287,
                category: 1
            },
            {
                id:"5",
                name: "人员5",
                symbolSize: 10,
                x: -77.289,
                y: 28.011874,
                value: 17.714287,
                category: 1
            }
        ], 
        links: [
            {
                source: 1,
                target: 0,
            },
            {
                source: 2,
                target: 0,
            },
            {
                source: 3,
                target: 0,
            },
            {
                source: 4,
                target: 0,
            },
            {
                source: 5,
                target: 0,
            }
        ],
        categories:[{name: "百度百家号"}]  
    },
    graphDataChance:{
      nodes: [
          {
            id: "1",
            name: "MlleBaptistine",
            symbolSize: 6.32380,
            x: -42.552713,
            y: 49.058352,
            value: 9.485714,
            category: 0,
          },
          {
            id: "2",
            name: "MmeMagloire",
            symbolSize: 6.32380,
            x: -48.564808,
            y: 47.052566,
            value: 9.485714,
            category: 0,
          },
          {
            id: "3",
            name: "Labarre",
            symbolSize: 2.6666665,
            x: -17.86821,
            y: 46.912256,
            value: 4,
            category: 0,
          },
          {
            id: "4",
            name: "人民网",
            symbolSize: 66.66667,
            x: -17.586058,
            y: -1.3624113,
            value: 100,
            category: 0,
          },
          {
            id: "5",
            name: "Marguerite",
            symbolSize: 4.49523,
            x: -67.955816,
            y: -36.93827,
            value: 6.742859,
            category: 0,
          },
          {
            id: "6",
            name: "MmeDeR",
            symbolSize: 2.6666665,
            x: -38.862626,
            y: 35.710602,
            value: 4,
            category: 0,
          },
          {
            id: "7",
            name: "Isabeau",
            symbolSize: 2.6666665,
            x: -31.610336,
            y: 40.399536,
            value: 4,
            category: 0,
          },
          {
            id: "8",
            name: "Gervais",
            symbolSize: 2.6666665,
            x: -25.5403092,
            y: 48.510114,
            value: 4,
            category: 0,
          },
          {
            id: "9",
            name: "Cosette",
            symbolSize: 20.952382,
            x: 15.72929,
            y: -6.3025494,
            value: 31.428574,
            category: 2,
          },
          {
            id: "10",
            name: "知乎",
            symbolSize: 20.466666,
            x: -77.13683999999999,
            y: -4.0413372,
            value: 23.2,
            category: 1,
          },
          {
            id: "11",
            name: "Scaufflaire",
            symbolSize: 2.6666665,
            x: -24.482696,
            y: 42.075006,
            value: 4,
            category: 0,
          },
          {
            id: "12",
            name: "Woman1",
            symbolSize: 4.49523,
            x: -46.92002,
            y: -22.630134,
            value: 6.742859,
            category: 0,
          },
          {
            id: "13",
            name: "Judge",
            symbolSize: 11,
            x: -77.56983,
            y: 11.74118,
            value: 17.714287,
            category: 1,
          },
          {
            id: "14",
            name: "Champmathieu",
            symbolSize: 11,
            x: -67.64614,
            y: 17.49681,
            value: 17.714287,
            category: 1,
          },
          {
            id: "15",
            name: "Brevet",
            symbolSize: 11,
            x: -90.653748,
            y: 11.789296,
            value: 17.714287,
            category: 1,
          },
          {
            id: "16",
            name: "Chenildieu",
            symbolSize: 11,
            x: -77.289,
            y: 28.011874,
            value: 17.714287,
            category: 1,
          },
          {
            id: "17",
            name: "Cochepaille",
            symbolSize: 11,
            x: -89.35752,
            y: 24.,
            value: 17.714287,
            category: 1,
          },
          {
            id: "18",
            name: "Pontmercy",
            symbolSize: 6.32380,
            x: 67.299476,
            y: -53.911828,
            value: 9.485714,
            category: 2,
          },
          {
            id: "19",
            name: "Woman2",
            symbolSize: 6.32380,
            x: -37.400836,
            y: -29.005326000000003,
            value: 9.485714,
            category: 2,
          },
          {
            id: "20",
            name: "小红书",
            symbolSize: 41.066670,
            x: 77.579144,
            y: 22.0924652,
            value: 61.600006,
            category: 3,
          },
          {
            id: "21",
            name: "Gillenormand",
            symbolSize: 13.638097333333334,
            x: 25.296619999999997,
            y: 13.621243999999999,
            value: 20.457146,
            category: 2,
          },
          {
            id: "22",
            name: "Magnon",
            symbolSize: 4.49523,
            x: 25.41473,
            y: -22.611846,
            value: 6.742859,
            category: 2,
          },
          {
            id: "23",
            name: "MlleGillenormand",
            symbolSize: 13.638097333333334,
            x: 32.527118,
            y: 23.531299999999998,
            value: 20.457146,
            category: 2,
          },
          {
            id: "24",
            name: "MmePontmercy",
            symbolSize: 4.49523,
            x: 70.73283,
            y: -41.17833,
            value: 6.742859,
            category: 2,
          },
          {
            id: "25",
            name: "MlleVaubois",
            symbolSize: 2.6666665,
            x: 33.087878,
            y: 67.95472,
            value: 4,
            category: 2,
          },
          {
            id: "26",
            name: "LtGillenormand",
            symbolSize: 8.15238,
            x: 27.538695999999998,
            y: 39.221379999999996,
            value: 12.228573,
            category: 2,
          },
          {
            id: "27",
            name: "微博",
            symbolSize: 35.58095333333333,
            x: 41.289373,
            y: -2.7610821999999997,
            value: 53.37143,
            category: 2,
          },
          {
            id: "28",
            name: "BaronessT",
            symbolSize: 4.49523,
            x: 38.965986,
            y: 44.956072,
            value: 6.742859,
            category: 2,
          },
          {
            id: "29",
            name: "Mabeuf",
            symbolSize: 20.952382,
            x: 119.53236,
            y: 27.036962,
            value: 31.428574,
            category: 3,
          },
          {
            id: "30",
            name: "Enjolras",
            symbolSize: 28.266665,
            x: 71.156732,
            y: -14.976490799999998,
            value: 42.4,
            category: 3,
          },
          {
            id: "31",
            name: "Combeferre",
            symbolSize: 20.952382,
            x: 103.0592,
            y: -9.2335128,
            value: 31.428574,
            category: 3,
          },
          {
            id: "32",
            name: "Prouvaire",
            symbolSize: 17.295237333333332,
            x: 122.85857000000001,
            y: -13.86208,
            value: 25.942856,
            category: 3,
          },
          {
            id: "33",
            name: "Feuilly",
            symbolSize: 20.952382,
            x: 110.03833999999999,
            y: -25.635073999999996,
            value: 31.428574,
            category: 3,
          },
          {
            id: "34",
            name: "Courfeyrac",
            symbolSize: 24.609527,
            x: 87.23436799999999,
            y: -2.5457365,
            value: 36.91429,
            category: 3,
          },
          {
            id: "35",
            name: "Bahorel",
            symbolSize: 22.780953333333332,
            x: 120.51044999999999,
            y: 3.2842854000000003,
            value: 34.17143,
            category: 3,
          },
          {
            id: "36",
            name: "Bossuet",
            symbolSize: 24.609527,
            x: 91.16391,
            y: -23.091652,
            value: 36.91429,
            category: 3,
          },
          {
            id: "37",
            name: "Joly",
            symbolSize: 22.780953333333332,
            x: 103.281568,
            y: 9.4484466,
            value: 34.17143,
            category: 3,
          },
          {
            id: "38",
            name: "Grantaire",
            symbolSize: 19.12381,
            x: 129.28626,
            y: -30.212662,
            value: 28.685715,
            category: 3,
          },
          {
            id: "39",
            name: "MotherPlutarch",
            symbolSize: 2.6666665,
            x: 133.79136,
            y: 40.930976,
            value: 4,
            category: 3,
          },
          {
            id: "40",
            name: "Toussaint",
            symbolSize: 6.32380,
            x: 8.1884506,
            y: 22.756543999999998,
            value: 9.485714,
            category: 0,
          },
          {
            id: "41",
            name: "Child1",
            symbolSize: 4.49523,
            x: 87.5878,
            y: 58.316468,
            value: 6.742859,
            category: 3,
          },
          {
            id: "42",
            name: "Child2",
            symbolSize: 4.49523,
            x: 93.209844,
            y: 56.67211999999999,
            value: 6.742859,
            category: 3,
          },
          {
            id: "43",
            name: "MmeHucheloup",
            symbolSize: 13.638097333333334,
            x: 142.43670600000001,
            y: 0.9626298999999999,
            value: 20.457146,
            category: 3,
          },
      ],
      links: [
          {
            source: 3,//nodes数组的index
            target: 0,
          },
          {
            source: 3,
            target: 1,
          },
          {
            source: 3,
            target: 2,
          },
          {
            source: 4,
            target: 3,
          },
          {
            source: 5,
            target: 3,
          },
          {
            source: 11,
            target: 3,
          },
          {
            source: 18,
            target: 3,
          },
          {
            source: 39,
            target: 3,
          },
          {
            source: 39,
            target: 3,
          },
          {
            source: 6,
            target: 3,
          },
          {
            source: 10,
            target: 3,
          },
          {
            source: 7,
            target: 3,
          },
          {
            source: 8,
            target: 3,
          },
          {
            source: 9,
            target: 3,
          },
          {
            source: 12,
            target: 3,
          },
          {
            source: 13,
            target: 3,
          },
          {
            source: 14,
            target: 3,
          },
          {
            source: 15,
            target: 3,
          },
          {
            source: 16,
            target: 3,
          },
          {
            source: 18,
            target: 8,
          },
          {
            source: 19,
            target: 3,
          },
          {
            source: 20,
            target: 3,
          },
          {
            source: 22,
            target: 3,
          },
          {
            source: 26,
            target: 3,
          },
          {
            source: 29,
            target: 3,
          },
          {
            source: 35,
            target: 3,
          },
          {
            source: 20,
            target: 8,
          },
          {
            source: 22,
            target: 8,
          },
          {
            source: 25,
            target: 8,
          },
          {
            source: 26,
            target: 8,
          },
          {
            source: 39,
            target: 8,
          },
          {
            source: 21,
            target: 20,
          },
          {
            source: 26,
            target: 17,
          },
          {
            source: 22,
            target: 25,
          },
          {
            source: 27,
            target: 20,
          },
          {
            source: 25,
            target: 20,
          },
          {
            source: 22,
            target: 24,
          },
          {
            source: 23,
            target: 17,
          },
          {
            source: 23,
            target: 22,
          },
          {
            source: 26,
            target: 20,
          },
          {
            source: 26,
            target: 22,
          },
          {
            source: 26,
            target: 27,
          },
          {
            source: 26,
            target: 25,
          },
          {
            source: 12,
            target: 9,
          },
          {
            source: 13,
            target: 9,
          },
          {
            source: 14,
            target: 9,
          },
          {
            source: 15,
            target: 9,
          },
          {
            source: 16,
            target: 9,
          },
          {
            source: 40,
            target: 19,
          },
          {
            source: 41,
            target: 19,
          },
          {
            source: 28,
            target: 19,
          },
          {
            source: 29,
            target: 19,
          },
          {
            source: 30,
            target: 19,
          },
          {
            source: 31,
            target: 19,
          },
          {
            source: 32,
            target: 19,
          },
          {
            source: 33,
            target: 19,
          },
          {
            source: 34,
            target: 19,
          },
          {
            source: 35,
            target: 19,
          },
          {
            source: 36,
            target: 19,
          },
          {
            source: 37,
            target: 19,
          },
          {
            source: 42,
            target: 19,
          },
          {
            source: 38,
            target: 28,
          },
      ],
      categories:[
        {name: "人民网"},
        {name: "知乎"},
        {name: "微博"},
        {name: "小红书"}
      ],
    },
    graphDataChance1:{
      nodes: [
          {
              id:"0",
              name: "知乎",
              symbolSize: 20,
              x: -77,
              y: -4,
              value: 60,
              category:1,
          },
          {
              id:"1",
              name: "人员1",
              symbolSize: 18,
              x: -91,
              y: 12,
              value: 18,
              category: 1
          },
          {
              id:"2",
              name: "人员2",
              symbolSize: 18,
              x: -78,
              y: 12,
              value: 18,
              category: 1
          },
          {
              id:"3",
              name: "人员3",
              symbolSize: 16,
              x: -67.64614,
              y: 17.49681,
              value: 17.714287,
              category: 1
          },
          {
              id:"4",
              name: "人员4",
              symbolSize: 12,
              x: -89.35752,
              y: 24.,
              value: 17.714287,
              category: 1
          },
          {
              id:"5",
              name: "人员5",
              symbolSize: 10,
              x: -77.289,
              y: 28.011874,
              value: 17.714287,
              category: 1
          }
      ], 
      links: [
          {
              source: 1,
              target: 0,
          },
          {
              source: 2,
              target: 0,
          },
          {
              source: 3,
              target: 0,
          },
          {
              source: 4,
              target: 0,
          },
          {
              source: 5,
              target: 0,
          }
      ],
      categories:[{name: "知乎"}] 
    },        
    scatterData:{
      colorList:['#08BD6C','#FF4C60','#2373FF'],
      legend:['机会','风险','正常'],
      name:['03-01','03-02','03-03','03-04','03-05','03-06','03-07','03-08','03-09','03-10',
      '03-11','03-12','03-13','03-14','03-15','03-16','03-17','03-18','03-19','03-20',
      '03-21','03-22','03-23','03-24','03-25','03-26','03-27','03-28','03-29','03-30','03-31'],
      starr,
      chance,
      risk,
      common:["手机凤凰网：现代凉茶要走高端功能路线",
        "东方财富网：抢滩大健康产业蓝海 邓老金方品牌崭新亮相",
        "金融界：助抗疫守健康,邓老药业幸福列车顺利发车!",
        "金羊网：冬季养生|中医食疗养生",
        "大众要闻：王老吉公布凉茶技术标准,展现角逐国际市场的决心",
        "东方财富网：泸州老窖也卖凉茶了",
        "睿本数字经济学：百年邓老凉茶数字化上岸之道 敢打敢拼敢闯",
        "环球网：邓老凉茶药业携手兄弟集团捐赠5000万邓老清冠饮深度抗疫",
        "腾讯网：凉茶营销还能这样玩!邓老凉茶如何通过微博营销脱颖而出",
        "北京商报：邓老凉茶全新国潮店面形象亮相",
        "中山网：中山首家邓老凉茶健康便利店正式投入运营",
        "中国网财经：邓老凉茶:做中国最好的凉茶",
        "中华网：邓老凉茶荣登“国潮榜”并成为南都健康联盟新成员",
        "腾讯网：邓老凉茶金伟岳:网络媒体对白领大有影响力",
        "开箱分享：国医大师邓铁涛104岁!百岁老人长寿秘笈是这个,简单但贵在坚持",
        "乐乐影视：五花祛湿茶:具有祛湿清热功效,特别适合身体湿气重饮用!",
        "金融界：邓老药业捐赠超6000万助力抗疫",
        "百家号：清凉解暑龟苓膏,夏日必备,快来看看",
        "本市热点：冬暖春晖大爱同行—融通高科公益专项基金捐赠仪式举行",
        "小红周报:中国红基会持续多举措支援河北",
        "百家号：有刮痧排毒之功的凉茶,了解一下?",
        "羊城派：广东驰援:穿云箭千里相见,倾所能战“疫”湖北!",
        "美通社：广东营销年会暨大湾区营销峰会成功举办",
        "金融界：凉茶纷争未了局:被判赔王老吉14.4亿 加多宝仍将上诉",
        "投资界：90后女董事长携邓老凉茶要来新三板，凉茶品牌进入“三国时代”?",
        "个人图书馆：“国医大师”邓铁涛和他的邓老凉茶",
        "华夏致富网：邓老凉茶加盟费少到想不到,3.5万你就能开家店了",
        "中国政协：中医药企业献爱心 邓老凉茶进北京校园助力疫情防控",
        "新浪网：邓铁涛抗击非典为中医立功 研发邓老凉茶为人民造福",
        "搜狐新闻：老品牌诞生新基因 「邓老凉茶」打造茶饮养生服务新体验",
        ]
    }
}

export default linData;
