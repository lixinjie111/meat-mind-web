<template>
    <div class="echarts-box" :id="id"></div>
</template>

<script>
    import echarts from 'echarts'
    import lodash from 'lodash'

    let id = 0
    export default {
        props: {
            myData: {
                default: () => {
                    return {};
                },
            },
            option: {
                default: () => {
                    return {};
                },
            },
            id: {
                type: String,
                default: () => {
                    ++id
                    return `lineM4-${id}`;
                },
            },
            colorList: {
                type: Array,
                default: () => {
                    return ['#4D94FF', '#A49DFA', '#FC809F', '#FFD98C', '#8AE6C7', '#E19564', '#BF6E9B', '#CECE7E', '#91C2F2', '#B7C8EA', '#FF9F7F', '#91C2F2', '#B380B6', '#EDA8AD', '#738AD4', '#FF9F7F'];
                },
            },
        },
        data() {
            return {}
        },
        mounted() {
            this.myData.value.forEach((item)=>{
                item.lineStyle = {
                    width: 2 / 144 * window.rem,
                }
            });
            console.log(this.myData.data);
            this.initEcharts();
        },
        methods: {
            initEcharts() {
                let _option = this.defaultOption();
                let myChart = this.$echarts.init(document.getElementById(this.id));
                myChart.setOption(_option);
                window.addEventListener('resize', () => {
                    myChart.resize();
                })
            },
            defaultOption() {
                var option = {
                    color: this.colorList,
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        top: '10%',
                        left: 20,
                        right: 20,
                        bottom: 25,
                        containLabel: true,
                    },
                    xAxis: {
                        type: 'category',
                        data: this.myData.name,
                        boundaryGap: true,
                        //设置轴线的属性
                        axisLine: {
                            lineStyle: {
                                color: '#EAEDF7',
                                type: "dashed"
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#97A0C3",   //这里用参数代替了
                                fontSize: '12'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#EAEDF7',
                                type: 'dashed',
                            }
                        },
                        axisPointer: {
                            type: "shadow",
                            shadowStyle: {
                                color: "rgba(124,136,177,0.1)"
                            }
                        },

                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: (value, b, c) => {
                                const v = `${(value || '0')}`
                                return v.replace(/0000$/, '万')
                            },
                            textStyle: {
                                color: "#97A0C3",   //这里用参数代替了
                                fontSize: '12'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        splitLine: {
                            show: false,
                        },
                    },
                    series:	this.myData.value
                };
                return lodash.merge({}, option, this.option);
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

