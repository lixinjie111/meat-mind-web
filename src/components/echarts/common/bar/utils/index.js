// 设置bar宽度
export function setBarWidth(opt){
    opt.series.forEach(item=>{
        if(item.type=='bar'){
            item.barWidth  =  14 / 144 * window.rem
            item.barMaxWidth = 20
        }
    })
    return opt
}
// 设置柱状图 xAxis yAxis
export function setAxis(opt){
    opt.xAxis.axisLine.lineStyle = { color: '#EAEDF7',type: "dashed"}
    opt.xAxis.axisLine.splitLine = { color: '#EAEDF7',type: "dashed"}
    opt.xAxis.axisLabel.textStyle = { color: "#97A0C3",fontSize: '12'}
    opt.xAxis.axisPointer.textStyle = { color: "#97A0C3",fontSize: '12'}
    return opt
}