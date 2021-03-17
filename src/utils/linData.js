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
    graphData: [
        {
            name: "新浪财经",
            draggable: true,
            symbolSize: 60,
            x: 200,
            y: 200,
            fixed:true,
            value: 100,
            itemStyle: {
                borderColor: colorList[0],
                borderWidth: 4,
                shadowBlur: 20,
                shadowColor: colorList[0],
                color: colorList[0]
            }
        },
        {
            name: "百度百家号",
            symbolSize: 40,
            x: 70,
            y: 100,
            fixed:true,
            value: 20,
            category: 0,
            draggable: true
        },
        {
            name: "人员1",
            x: 120,
            y: 60,
            fixed:true,
            value:20,
            symbolSize:20,
            category: 0,
            draggable: true
        },
        {
            name: "人员2",
            x: 100,
            y: 170,
            fixed:true,
            value:20,
            symbolSize:25,
            category: 0,
            draggable: true
        },
        {
            name: "人员3",
            category: 0,
            draggable: true
        },
        {
            name: "人员4",
            symbolSize:30,
            category: 0,
            draggable: true
        },
        {
            name: "人员5",
            category: 0,
            value:25,
            symbolSize:20,
            draggable: true
        },
        {
            name: "人员6",
            symbolSize:35,
            category: 0,
            draggable: true
        },
        {
            name: "知乎",
            symbolSize: 45,
            x: 362,
            y: 300,
            value: 45,
            category: 1,
            draggable: true
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
        },
        {
            name: "抖音",
            x:600,
            y:100,
            fixed:true,
            category: 2,
            draggable: true
        },
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
        },
        {
            name: "快手",
            symbolSize: 25,
            x: 15,
            y: -6,
            value: 31,
            category: 3,
            draggable: true
        },
        {
            name: "微视",
            symbolSize: 25,
            x: 15,
            y: -6,
            value: 31,
            category: 4,
            draggable: true
        },
        {
            name: "西瓜视频",
            symbolSize: 40,
            x: 15,
            y: -6,
            value: 31,
            category: 5,
            draggable: true
        },
        {
            name: "梨视频",
            symbolSize: 30,
            x: 15,
            y: -6,
            value: 31,
            category: 6,
            draggable: true
        },
        {
            name: "小红书",
            symbolSize: 30,
            x: 15,
            y: -6,
            value: 32,
            category: 7,
            draggable: true
        },
        {
            name: "大众点评",
            symbolSize: 40,
            x: 15,
            y: -6,
            value: 31,
            category: 8,
            draggable: true
        }
    ],
    graphLinks: [
        {
            source: 0,
            target: 1,
            value: ""
        },
        {
            source: 1,
            target: 2,
            value: ""
        },
        {
            source: 1,
            target: 3,
            value: ""
        },
        {
            source: 1,
            target: 4,
            value: ""
        },
        {
            source: 1,
            target: 5,
            value: ""
        },
        {
            source: 1,
            target: 6,
            value: ""
        },
        {
            source: 1,
            target: 7,
            value: ""
        },
        {
            source: 0,
            target: 8,
            value: ""
        },
        {
            source: 8,
            target: 9,
            value: ""
        },
        {
            source: 8,
            target: 10,
            value: ""
        },
        {
            source: 8,
            target: 11,
            value: ""
        },
        {
            source: 8,
            target: 12,
            value: ""
        },
        {
            source: 8,
            target: 13,
            value: ""
        },
        {
            source: 8,
            target: 14,
            value: ""
        },
        {
            source: 0,
            target: 15,
            value: ""
        },
        {
            source: 15,
            target: 16,
            value: ""
        },
        {
            source: 15,
            target: 17,
            value: ""
        },
        {
            source: 15,
            target: 18,
            value: ""
        },
        {
            source: 15,
            target: 19,
            value: ""
        },
        {
            source: 15,
            target: 20,
            value: ""
        },
        {
            source: 15,
            target: 21,
            value: ""
        },
        {
            source: 0,
            target: 22,
            value: ""
        },
        {
            source: 0,
            target: 23,
            value: ""
        },
        {
            source: 0,
            target: 24,
            value: ""
        },
        {
            source: 0,
            target: 25,
            value: ""
        },
        {
            source: 0,
            target: 26,
            value: ""
        },
        {
            source: 0,
            target: 27,
            value: ""
        }
    ],
    graphData1: [
        {
            name: "百度百家号",
            draggable: true,
            symbolSize: 60,
            // x: 200,
            // y: 200,
            // fixed:true,
            value: 100,
            itemStyle: {
                borderColor: colorList[0],
                borderWidth: 4,
                shadowBlur: 20,
                shadowColor: colorList[0],
                color: colorList[0]
            }
        },
        // {
        //     name: "百度百家号",
        //     symbolSize: 40,
        //     x: 70,
        //     y: 100,
        //     fixed:true,
        //     value: 20,
        //     category: 0,
        //     draggable: true
        // },
        {
            name: "人员1",
            // x: 120,
            // y: 60,
            // fixed:true,
            value:20,
            symbolSize:20,
            category: 0,
            draggable: true
        },
        {
            name: "人员2",
            // x: 100,
            // y: 170,
            // fixed:true,
            value:20,
            symbolSize:25,
            category: 0,
            draggable: true
        },
        {
            name: "人员3",
            category: 0,
            draggable: true
        },
        {
            name: "人员4",
            symbolSize:30,
            category: 0,
            draggable: true
        },
        {
            name: "人员5",
            category: 0,
            value:25,
            symbolSize:20,
            draggable: true
        },
        {
            name: "人员6",
            symbolSize:35,
            category: 0,
            draggable: true
        }
    ],    
    graphData2: [
        {
            name: "知乎",
            draggable: true,
            symbolSize: 60,
            // x: 200,
            // y: 200,
            // fixed:true,
            value: 100,
            itemStyle: {
                borderColor: colorList[1],
                borderWidth: 4,
                shadowBlur: 20,
                shadowColor: colorList[1],
                color: colorList[1]
            }
        },
        // {
        //     name: "知乎",
        //     symbolSize: 45,
        //     x: 362,
        //     y: 300,
        //     value: 45,
        //     category: 1,
        //     draggable: true
        // },
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
    graphData3: [
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
    graphLinks1: [
        {
            source: 0,
            target: 1,
            value: ""
        },
        {
            source: 0,
            target: 2,
            value: ""
        },
        {
            source: 0,
            target: 3,
            value: ""
        },
        {
            source: 0,
            target: 4,
            value: ""
        },
        {
            source: 0,
            target: 5,
            value: ""
        },
        {
            source: 0,
            target: 6,
            value: ""
        },
        {
            source: 0,
            target: 7,
            value: ""
        },
    ] 
}
export default linData;
