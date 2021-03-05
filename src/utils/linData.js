const linData = {
    colorList: ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564', '#BF6E9B', '#CECE7E', '#91C2F2', '#B7C8EA', '#FF9F7F', '#91C2F2', '#B380B6', '#EDA8AD', '#738AD4', '#FF9F7F'],
    box1Data:{
        name:['02-01', '02-06', '02-11', '02-16', '02-21','02-26'],
        legName:['微博', '微信', '百度', '今日头条', '地推',],
        value:[
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
                    normal: {
                        barBorderRadius:[30,30,0,0]
                    },
                },
                data: [320, 302, 301, 334, 290, 390]
            },
        ]
    },
    box2Data:{
        name:['12月上半月', '12月下半月', '1月上半月', '1月下半月', '2月上半月','2月下半月'],
        legName:['微博', '微信', '百度', '今日头条', '地推',],
        value:[
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
                    normal: {
                        barBorderRadius:[30,30,0,0]
                    },
                },
                data: [5200, 5020, 5001, 5304, 5500, 5673]
            },
        ]
    },
    box3Data:{
        legName:['今日头条', '朋友圈广告', '360搜索', '百度','分享裂变','抖音',],
        name: ['02-01', '02-02', '02-03', '02-04', '02-05', '02-06', '02-07', '02-08', '02-09', '02-10', '02-11', '02-12','02-13','02-14','02-15','02-16','02-17','02-18','02-19','02-20','02-21','02-22','02-23','02-24','02-25','02-26','02-27','02-28'],
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
                data:[258, 229, 211, 221, 255, 248, 239, 228, 240, 249, 233, 209, 218, 232, 239, 227, 230, 248, 230, 258, 216, 238, 212,249, 233, 209, 218, 232]
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
    box4Data:{
        legName:['今日头条', '朋友圈广告', '360搜索', '百度','分享裂变','抖音',],
        name: ["12月上半月","12月下半月","1月上半月","1月下半月","2月上半月","2月下半月"],
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
                data:[258, 209, 218, 232, 238, 212]
            },
            {
                name: '百度',
                type: 'line',
                data: [404, 409, 410, 407, 400, 395]
            },
            {
                name: '分享裂变',
                type: 'line',
                data: [471,488, 482, 478, 479, 475]
            },
            {
                name: '抖音',
                type: 'line',
                data: [578,551, 567, 554, 564, 555]
            },
        ]
    },    
}

var baseName = "新浪财经";
var chartData = {
	'百度百家号' : [ '人员1', '人员2', '人员3','人员4', '人员5', '人员6' ],
	'知乎' : [ '机构1', '机构2', '机构3','机构4', '机构5', '机构6' ],
	'抖音' : [ '文献1', '文献2', '文献3','文献4', '文献5', '文献6' ],
	"快手":[],'微视':[],"西瓜视频":[],'梨视频':[],"小红书":[],'大众点评':[]
};
var datas = [ {
	name : baseName || '',
	draggable : true,
	symbolSize:100,
	itemStyle: {
                 normal: {
                     borderColor: "#ff8400",
                     borderWidth: 4,
                     shadowBlur: 20,
                     shadowColor: "#ff8400",
                     color: "#11213b",
                 }
             }
} ];
var lines = [];
var categoryIdx = 0;
var keyIndex = 0;
var dataIndex = 0;
console.log(Object.keys(chartData))
Object.keys(chartData).forEach((key,index)=>{
	keyIndex = index;
	datas.push({name: key,category:categoryIdx,draggable: true});
	keyIndex ++ ;
	dataIndex ++ ;
	lines.push({
        source: 0,
        target: keyIndex,
        value :''
    });
    console.log(chartData[key])
    if(chartData[key].length){
        chartData[key].forEach((idx,val)=>{
            datas.push({name: val,category:categoryIdx,draggable: true});
            dataIndex ++ ;
            lines.push({
                source: keyIndex,
                target: dataIndex,
                value :''
            });
        });
    }

	categoryIdx++;
})
linData.datas = datas
linData.lines= lines
export default linData;