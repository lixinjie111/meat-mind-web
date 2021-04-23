<template>
   <div class="launch-content">
       <div class="launch-item" v-for="(item,index) in launchList" :key="index">
           <div class="launch-item-title">{{item.date}}</div>
           <div class="launch-item-content">
               <AddLaunch :item="item1" v-for="(item1,index1) in item.list" :key="index1"></AddLaunch>
           </div>
       </div>
   </div>
</template>

<script>
    import AddLaunch from "./AddLaunch";
    var dayjs = require('dayjs');

    export default {
        name: "Launch",
        components: {AddLaunch},
        data() {
            return {
                launchList: [
                    {
                        date: dayjs(new Date()).format('MM/DD'),
                        list: [
                            {
                                time: '12:05 pm',
                                img: require("../../../assets/img/dashboard/weibo@2x.png"),
                                title: '开屏广告位',
                                size: '960*400',
                                top: 8 / 144 * window.rem
                            },
                            {
                                time: '18:40 pm',
                                img: require("../../../assets/img/dashboard/xiaohongshu@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '640*640',
                                top: 310 / 144 * window.rem
                            }
                        ]
                    },
                    {
                        date: dayjs(dayjs(new Date()).add(1, 'day')).format('MM/DD'),
                        list: [
                            {
                                time: '12:20 pm',
                                img: require("../../../assets/img/dashboard/weibo@2x.png"),
                                title: '开屏广告位',
                                size: '960*400',
                                top: 8 / 144 * window.rem
                            },
                            {
                                time: '12:40 pm',
                                img: require("../../../assets/img/dashboard/tictok@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '500*500',
                                top: 270 / 144 * window.rem
                            }
                        ]
                    },
                    {
                        date: dayjs(dayjs(new Date()).add(2, 'day')).format('MM/DD'),
                        list: [
                            {
                                time: '12:10 pm',
                                img: require("../../../assets/img/dashboard/tictok@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '500*500',
                                top: 8 / 144 * window.rem
                            },
                            {
                                time: '19:05 pm',
                                img: require("../../../assets/img/dashboard/xiaohongshu@2x.png"),
                                title: '开屏广告位',
                                size: '960*400',
                                top: 360 / 144 * window.rem
                            }
                        ]
                    },
                    {
                        date: dayjs(dayjs(new Date()).add(3, 'day')).format('MM/DD'),
                        list: [
                            {
                                time: '12:23 pm',
                                img: require("../../../assets/img/dashboard/tictok@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '500*500',
                                top: 8 / 144 * window.rem
                            },
                            {
                                time: '12:40 pm',
                                img: require("../../../assets/img/dashboard/xiaohongshu@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '500*500',
                                top: 270 / 144 * window.rem
                            }
                        ]
                    },
                    {
                        date: dayjs(dayjs(new Date()).add(4, 'day')).format('MM/DD'),
                        list: [
                            {
                                time: '12:50 pm',
                                img: require("../../../assets/img/dashboard/tictok@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '500*500',
                                top: 150 / 144 * window.rem
                            }
                        ]
                    },
                    {
                        date: dayjs(dayjs(new Date()).add(5, 'day')).format('MM/DD'),
                        list: [
                            {
                                time: '12:42 pm',
                                img: require("../../../assets/img/dashboard/weibo@2x.png"),
                                title: '开屏广告位',
                                size: '960*400',
                                top: 8 / 144 * window.rem
                            },
                            {
                                time: '19:10 pm',
                                img: require("../../../assets/img/dashboard/tictok@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '640*640',
                                top: 350 / 144 * window.rem
                            }
                        ]
                    },
                    {
                        date: dayjs(dayjs(new Date()).add(6, 'day')).format('MM/DD'),
                        list: [
                            {
                                time: '12:05 pm',
                                img: require("../../../assets/img/dashboard/xiaohongshu@2x.png"),
                                title: '搜索结果信息流广告',
                                size: '500*500',
                                top: 8
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .launch-content {
        width: 1034px;
        display: flex;
        justify-content: space-between;
        border: 1px solid #EAEDF7;
        border-radius: 0px 0px 8px 8px;

        .launch-item {
            width: 148px;

            .launch-item-title {
                height: 64px;
                line-height: 64px;
                font-size: 18px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #636E95;
                text-align: center;
                border-bottom: 1px solid #EAEDF7;
                border-right: 1px solid #EAEDF7;
            }

            .launch-item-content {
                position: relative;
                padding: 8px;
                border-right: 1px solid #EAEDF7;
                min-height: 600px;
            }
        }
    }
</style>