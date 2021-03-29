// 设置bar宽度
export function setBarWidth(opt,bar){
    opt.series.forEach(item=>{
        if(item.type=='bar'){
            item.barWidth  =  14 / 144 * window.rem
            item.barMaxWidth = 20
            if(item.itemStyle){
                item.itemStyle.barBorderRadius = bar=="row"?[0, 2 / 144 * window.rem, 2 / 144 * window.rem, 0]:bar=='col'?[2 / 144 * window.rem, 2 / 144 * window.rem, 0, 0]:2 / 144 * window.rem
            }else{
                item.itemStyle = {
                    barBorderRadius:bar=="row"?[0, 2 / 144 * window.rem, 2 / 144 * window.rem, 0]:bar=='col'?[2 / 144 * window.rem, 2 / 144 * window.rem, 0, 0]:2 / 144 * window.rem
                }
            }
            
        }
    })
    if(bar=='col2'){
        opt.series[0].itemStyle = {
            barBorderRadius:[2 / 144 * window.rem, 2 / 144 * window.rem, 0, 0]
        }
        opt.series[1].itemStyle = {
            barBorderRadius:[0, 0, 2 / 144 * window.rem, 2 / 144 * window.rem]
        }
    }
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