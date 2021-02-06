import echarts from 'echarts';
const lxjEData = {
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
    box16Data:{
        name:['微博转发', '微信点赞', '线下社交活动', '新闻稿件', '深度营销稿件', '海报', '趣图', '漫画', 'KOL/KOC分享'],
        value:[17, 15, 14, 7, 1, 7, 9, 10, 20],
    },
    box2Data:{
        name:['视频', '外媒', '报刊', '政务', '博客', '论坛','微博','网站','微信',],
        value:[4, 20, 30, 26, 15, 5,26, 15, 5],
    },
    box21Data:{
        name:['0-20岁', '21-24岁', '25-30岁', '31-50岁', '50-100岁',],
        value:[54, 80, 90, 126, 55, ],
    },
    box22Data:{
        name:['感知度', '联想度', '关注度', '共鸣感', ],
        value:[54, 80, 90, 26, ],
    },
    box23Data:{
        name:['感知度', '联想度', '关注度', '共鸣感', ],
        value:[54, 80, 90, 26, ],
    },
    box24Data:{
        name:['退费', '电话骚扰', '投诉量', '价格贵', '口味差'],
        value:[14, 20, 40, 36,86, ],
    },
    box25Data:{
        name:['社会影响力', '稀缺性', '品牌亲和力', '创造性'],
        value:[6.2, 5, 6.3, 8]
    },
    box26Data:{
        name:['糖分高', '价格贵', '排队时间长', '品牌同质化严重', '水果不新鲜'],
        value:[120,62,36,15,7]
    },
    box27Data:{
        name:['短视频', '社交网络', '大众传媒', '体验事件', '促销'],
        value:[7921,6436,5445,5279,4667]
    },
    box270Data:{
        name:['短视频', '社交网络', '大众传媒', '体验事件', '促销'],
        value:[6921,5436,5045,5279,3667]
    },
    box271Data:{
        name:['短视频', '社交网络', '大众传媒', '体验事件', '促销'],
        value:[7821,6036,5145,5079,1167]
    },
    box272Data:{
        name:['短视频', '社交网络', '大众传媒', '体验事件', '促销'],
        value:[9921,7436,5445,4279,1667]
    },
    box28Data:{
        name:['短视频', '社交网络', '大众传媒', '体验事件', '促销','电视广告','在线社交媒体','公共关系和宣传','网站','其他',],
        value:[7921,6436,5445,5279,4667,4567,4467,4367,4267,4167,]
    },
    box29Data:{
        name:['快手','小红书','新浪微博','抖音',],
        value:[400,500,600,1200,]
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
    box31Data:{
        legName:['敏感', '非敏感',],
        name:['邓老凉茶', '竞品A', '竞品B', '竞品C'],
        value:[
            {
                name: '非敏感',
                type: 'bar',
                stack: '总量',
                barWidth: '10',
                data: [67, 83, 84, 67,]
            },
            {
                name: '敏感',
                type: 'bar',
                stack: '总量',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        barBorderRadius:[30,30,0,0]
                    },
                },
                 data: [33, 17, 16, 33,]
            },
        ]
    },
    box32Data:{
        legName:['产量', '市场需求量',],
        name:[2016,	2017,	2018,	2019,	2020,	2021],
        value:[
            {
                name: '产量',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        barBorderRadius:[30,30,0,0]
                    },
                },
                data: [763,	785,	826,	879,	932,	1011                ],
            },
            {
                name: '市场需求量',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        barBorderRadius:[30,30,0,0]
                    },
                },
                 data: [402,	548,	708,	808,	880,	972 ],
            },
        ]
    },
    box33Data:{
        legName:['饮料整体市场规模及预测', '茶饮料整体市场规模及预测',],
        name:['2015', '2020', '2025'],
        value:[
            {
                name: '饮料整体市场规模及预测',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        barBorderRadius:[30,30,0,0]
                    },
                },
                data: [7433, 9914, 13230],
            },
            {
                name: '茶饮料整体市场规模及预测',
                type: 'bar',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        barBorderRadius:[30,30,0,0]
                    },
                },
                 data: [2980, 3757, 6031],
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
    box59Data:{
        name: ['2020-7-13', '2020-7-17', '2020-7-21', '2020-7-25', '2020-7-29', '2020-08-02', '2020-08-06', '2020-08-10',],
        value: [0, 507, 541, 444, 649, 872, 1006, 910],
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
    box63Data:{
        legName:['成单数', '搜索数',],
        name: ['12月21日', '12月22日', '12月23日', '12月24日', '12月25日', '12月26日', '12月27日'],
        value: [
            {
                name: '成单数',
                type: 'line',
                data: [2440, 2755, 2310, 3405, 3100, 2440, 2755,],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4D94FF',
                        }, {
                            offset: 1,
                            color: '#fff'
                        }])
                    }
                },
            },
            {
                name: '搜索数',
                type: 'line',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#A49DFA',
                        }, {
                            offset: 1,
                            color: '#fff'
                        }])
                    }
                },
                data: [ 8900,10500,9730,13000,12850,8990,10800 ]
            },
        ]
    },
    box64Data:{
        legName:['曝光量', '曝光人数', '点击量', '点击人数'],
        name:  ['2020年12月21日', '2020年12月22日', '2020年12月23日', '2020年12月24日', '2020年12月25日', '2020年12月26日', '2020年12月27日',],
        value: [
             {
                name: '点击人数',
                type: 'line',
                data: [5327, 5037, 6158, 4937, 6784, 4770, 5550]
            },
            {
                name: '曝光量',
                type: 'line',
                data: [41579, 47315, 49250, 45315, 47330, 39510, 40030]
            },
            {
                name: '曝光人数',
                type: 'line',
                data: [20013, 24510, 27250, 24440, 22500, 17530, 19975]
            },
            {
                name: '点击量',
                type: 'line',
                data: [22740, 23159, 24924, 22370, 21150, 18547, 18940]
            },
        ]
    },
    box66Data:{
        legName:['元气森林', '和其正', '加多宝', '王老吉'],
        name:  ['2020年12月21日', '2020年12月22日', '2020年12月23日', '2020年12月24日', '2020年12月25日', '2020年12月26日', '2020年12月27日',],
        value: [
             {
                name: '王老吉',
                type: 'line',
                data: [5327, 5037, 6158, 4937, 6784, 4770, 5550]
            },
            {
                name: '元气森林',
                type: 'line',
                data: [41579, 47315, 49250, 45315, 57330, 39510, 40030]
            },
            {
                name: '和其正',
                type: 'line',
                data: [20013, 24510, 27250, 24440, 22500, 17530, 19975]
            },
            {
                name: '加多宝',
                type: 'line',
                data: [22740, 23159, 24924, 22370, 21150, 18547, 18940]
            },
        ]
    },
    box65Data:{
        legName:['邓老凉茶', '竞品A', '竞品B'],
        name:  ['2020年12月11日', '2020年12月12日', '2020年12月13日', '2020年12月14日', '2020年12月15日', '2020年12月16日', '2020年12月17日', '2020年12月18日', '2020年12月19日', '2020年12月20日'],
        value: [
            {
                name: '邓老凉茶',
                type: 'line',
                data: [572, 530, 393, 391, 470, 451, 440, 402, 670, 531]
            },
            {
                name: '竞品A',
                type: 'line',
                data: [631, 607, 605, 581, 671, 645, 351, 390, 490, 450]
            },
            {
                name: '竞品B',
                type: 'line',
                data: [230, 270, 290, 291, 254, 307, 310, 257, 245, 259]
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
    box113Data:{
        name:  ['营养热餐', '面包糕点', '休闲食品', '饮料饮品', '个人护理'],
        value:[
            {
                value: 35548,
                label: '20.13'
            }, 
            {
                value: 35484,
                label: '20.09'
            }, 
            {
                value: 35251,
                label: '19.96'
            },
            {
                value: 35185,
                label: '19.92'
            },
            {
                value: 35125,
                label: '19.89'
            }
        ]
    },
    box114Data:{
        legName:['短视频', '社交网络', '大众传媒', '体验事件', '促销活动', '其他'],
        name:  ['邓老凉茶', '竞品A', '竞品B', '竞品C'],
        value:[
            {
                name: '短视频',
                type: 'bar',
                stack: '总量',
                barWidth: '10',
                // itemStyle: {
                // 	normal: {
                // 		barBorderRadius:[0,30,30,0]
                // 	},
                // },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                },
                data: [30, 23, 35, 20]
            },
            {
                name: '社交网络',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                },
                data: [23, 30, 15, 19]
            },
            {
                name: '大众传媒',
                type: 'bar',
                barWidth: 40,
                stack: '总量',
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                },
                data: [15, 15, 14, 7]
            },
            {
                name: '体验事件',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                },
                data: [14, 14, 8, 7]
            },
            {
                name: '促销活动',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                },
                data: [10, 4, 10, 42]
            },
            {
                name: '其他',
                type: 'bar',
                stack: '总量',
                barWidth: '10',
                itemStyle: {
                    normal: {
                        barBorderRadius:[0,30,30,0]
                    },
                },
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%',
                },
                data: [8, 14, 18, 5]
            },
        ]
    },
}
export default lxjEData;