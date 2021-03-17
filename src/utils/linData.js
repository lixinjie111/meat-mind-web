let colorList = ['#2373FF', '#FE774B', '#1DCEC3', '#F16E84', '#FDD352', '#7BABFF', '#FFAE93', '#77E1DB', '#F6A8B5', '#FEE597', '#BDD5FF', '#FFD7C9', '#BBF1ED', '#FBD4DA', '#FEF1CB', '#FF9F7F'];
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
                barWidth: '10',
                data: [320, 302, 301, 334, 330, 390]
            },
            {
                name: '微信',
                type: 'bar',
                stack: '总量',
                barWidth: '10',
                data: [820, 832, 901, 934, 1100, 1290]
            },
            {
                name: '百度',
                type: 'bar',
                barWidth: '10',
                stack: '总量',
                data: [150, 212, 201, 154, 190, 190]
            },
            {
                name: '今日头条',
                type: 'bar',
                barWidth: '10',
                stack: '总量',
                data: [220, 182, 191, 234, 190, 290]
            },
            {
                name: '地推',
                type: 'bar',
                barWidth: '10',
                stack: '总量',
                itemStyle: {
                    
                        // barBorderRadius: [30, 30, 0, 0]
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
                barWidth: '10',
                data: [5200, 5020, 5010, 5340, 5300, 5923]
            },
            {
                name: '微信',
                type: 'bar',
                stack: '总量',
                barWidth: '10',
                data: [18200, 18320, 19010, 19340, 21000, 20201]
            },
            {
                name: '百度',
                type: 'bar',
                barWidth: '10',
                stack: '总量',
                data: [2100, 2220, 2410, 2540, 2900, 2832]
            },
            {
                name: '今日头条',
                type: 'bar',
                barWidth: '10',
                stack: '总量',
                data: [4200, 4102, 3901, 4340, 3900, 4350]
            },
            {
                name: '地推',
                type: 'bar',
                barWidth: '10',
                stack: '总量',
                itemStyle: {
                    
                        // barBorderRadius: [30, 30, 0, 0]
                    
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
    graphData:{
        nodes: [
            {
              id: "1",
              name: "MlleBaptistine",
              symbolSize: 6.323809333333333,
              x: -42.552713999999995,
              y: 49.058352,
              value: 9.485714,
              category: 0,
            },
            {
              id: "2",
              name: "MmeMagloire",
              symbolSize: 6.323809333333333,
              x: -48.564808,
              y: 47.052566,
              value: 9.485714,
              category: 0,
            },
            {
              id: "3",
              name: "Labarre",
              symbolSize: 2.6666666666666665,
              x: -17.868214000000002,
              y: 46.912256,
              value: 4,
              category: 0,
            },
            {
              id: "4",
              name: "新浪财经",
              symbolSize: 66.66666666666667,
              x: -17.586058,
              y: -1.3624113,
              value: 100,
              category: 0,
            },
            {
              id: "5",
              name: "Marguerite",
              symbolSize: 4.495239333333333,
              x: -67.955816,
              y: -36.938278000000004,
              value: 6.742859,
              category: 0,
            },
            {
              id: "6",
              name: "MmeDeR",
              symbolSize: 2.6666666666666665,
              x: -38.862626,
              y: 35.710602,
              value: 4,
              category: 0,
            },
            {
              id: "7",
              name: "Isabeau",
              symbolSize: 2.6666666666666665,
              x: -31.610336,
              y: 40.399536,
              value: 4,
              category: 0,
            },
            {
              id: "8",
              name: "Gervais",
              symbolSize: 2.6666666666666665,
              x: -25.5403092,
              y: 48.510114,
              value: 4,
              category: 0,
            },
            {
              id: "9",
              name: "Cosette",
              symbolSize: 20.95238266666667,
              x: 15.729292000000001,
              y: -6.3025494,
              value: 31.428574,
              category: 2,
            },
            {
              id: "10",
              name: "百度百家号",
              symbolSize: 20.466666666666666,
              x: -77.13683999999999,
              y: -4.0413372,
              value: 23.2,
              category: 1,
            },
            {
              id: "11",
              name: "Scaufflaire",
              symbolSize: 2.6666666666666665,
              x: -24.482696,
              y: 42.075006,
              value: 4,
              category: 0,
            },
            {
              id: "12",
              name: "Woman1",
              symbolSize: 4.495239333333333,
              x: -46.92002,
              y: -22.630134,
              value: 6.742859,
              category: 0,
            },
            {
              id: "13",
              name: "Judge",
              symbolSize: 11.809524666666666,
              x: -77.56983,
              y: 11.74118,
              value: 17.714287,
              category: 1,
            },
            {
              id: "14",
              name: "Champmathieu",
              symbolSize: 11.809524666666666,
              x: -67.64614,
              y: 17.49681,
              value: 17.714287,
              category: 1,
            },
            {
              id: "15",
              name: "Brevet",
              symbolSize: 11.809524666666666,
              x: -90.653748,
              y: 11.789296,
              value: 17.714287,
              category: 1,
            },
            {
              id: "16",
              name: "Chenildieu",
              symbolSize: 11.809524666666666,
              x: -77.28980800000001,
              y: 28.011874,
              value: 17.714287,
              category: 1,
            },
            {
              id: "17",
              name: "Cochepaille",
              symbolSize: 11.809524666666666,
              x: -89.35752,
              y: 24.676009999999998,
              value: 17.714287,
              category: 1,
            },
            {
              id: "18",
              name: "Pontmercy",
              symbolSize: 6.323809333333333,
              x: 67.299476,
              y: -53.911828,
              value: 9.485714,
              category: 2,
            },
            {
              id: "19",
              name: "Woman2",
              symbolSize: 6.323809333333333,
              x: -37.400836,
              y: -29.005326000000003,
              value: 9.485714,
              category: 2,
            },
            {
              id: "20",
              name: "抖音",
              symbolSize: 41.06667066666667,
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
              symbolSize: 4.495239333333333,
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
              symbolSize: 4.495239333333333,
              x: 70.73283,
              y: -41.17833,
              value: 6.742859,
              category: 2,
            },
            {
              id: "25",
              name: "MlleVaubois",
              symbolSize: 2.6666666666666665,
              x: 33.087878,
              y: 67.95472,
              value: 4,
              category: 2,
            },
            {
              id: "26",
              name: "LtGillenormand",
              symbolSize: 8.152382000000001,
              x: 27.538695999999998,
              y: 39.221379999999996,
              value: 12.228573,
              category: 2,
            },
            {
              id: "27",
              name: "知乎",
              symbolSize: 35.58095333333333,
              x: 41.289373999999995,
              y: -2.7610821999999997,
              value: 53.37143,
              category: 2,
            },
            {
              id: "28",
              name: "BaronessT",
              symbolSize: 4.495239333333333,
              x: 38.965986,
              y: 44.956072,
              value: 6.742859,
              category: 2,
            },
            {
              id: "29",
              name: "Mabeuf",
              symbolSize: 20.95238266666667,
              x: 119.53236,
              y: 27.036962,
              value: 31.428574,
              category: 3,
            },
            {
              id: "30",
              name: "Enjolras",
              symbolSize: 28.266666666666665,
              x: 71.156732,
              y: -14.976490799999998,
              value: 42.4,
              category: 3,
            },
            {
              id: "31",
              name: "Combeferre",
              symbolSize: 20.95238266666667,
              x: 103.05922000000001,
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
              symbolSize: 20.95238266666667,
              x: 110.03833999999999,
              y: -25.635073999999996,
              value: 31.428574,
              category: 3,
            },
            {
              id: "34",
              name: "Courfeyrac",
              symbolSize: 24.609526666666667,
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
              symbolSize: 24.609526666666667,
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
              symbolSize: 2.6666666666666665,
              x: 133.79136,
              y: 40.930976,
              value: 4,
              category: 3,
            },
            {
              id: "40",
              name: "Toussaint",
              symbolSize: 6.323809333333333,
              x: 8.1884506,
              y: 22.756543999999998,
              value: 9.485714,
              category: 0,
            },
            {
              id: "41",
              name: "Child1",
              symbolSize: 4.495239333333333,
              x: 87.5878,
              y: 58.316468,
              value: 6.742859,
              category: 3,
            },
            {
              id: "42",
              name: "Child2",
              symbolSize: 4.495239333333333,
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
                y: 24.676009999999998,
                value: 17.714287,
                category: 1
            },
            {
                id:"5",
                name: "人员5",
                symbolSize: 10,
                x: -77.28980800000001,
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
        nodes2: [
            {
                name: "知乎",
            },
            {
                name: "机构1",
                category: 1,
                symbolSize:30,
                draggable: true
            },
            {
                name: "机构2",
                category: 1,
                draggable: true
            },
            {
                name: "机构3",
                category: 1,
                symbolSize:30,
                draggable: true
            },
            {
                name: "机构4",
                category: 1,
                draggable: true
            },
            {
                name: "机构5",
                category: 1,
                symbolSize:30,
                draggable: true
            },
            {
                name: "机构6",
                category: 1,
                draggable: true
            }
        ],  
        nodes3: [
            {
                name: "抖音",
                draggable: true,
                symbolSize: 60,
                // x: 200,
                // y: 200,
                // fixed:true, 
                value: 100,
                itemStyle: {
                    borderColor: colorList[2],
                    borderWidth: 4,
                    shadowBlur: 20,
                    shadowColor: colorList[2],
                    color: colorList[2]
                }
            },
            // {
            //     name: "抖音",
            //     x:600,
            //     y:100,
            //     fixed:true,
            //     category: 2,
            //     draggable: true
            // },
            {
                name: "文献1",
                category: 2,
                draggable: true
            },
            {
                name: "文献2",
                category: 2,
                symbolSize:30,
                draggable: true
            },
            {
                name: "文献3",
                category: 2,
                symbolSize:30,
                draggable: true
            },
            {
                name: "文献4",
                category: 2,
                draggable: true
            },
            {
                name: "文献5",
                category: 2,
                symbolSize:30,
                draggable: true
            },
            {
                name: "文献6",
                category: 2,
                draggable: true
            }
        ],   
    },
}
export default linData;
