<template>
    <div class="data-market-container">
        <div class="header-nav">
            <p>数据市场</p>
        </div>
        <div class="data-card">
            <div class="data-card-title"><p>为您推荐</p></div>
            <div class="data-card-content">
                <div class="item" v-for="(item,index) in recommendList" :key="index">
                    <img :src="item.img"/>
                    <div>
                        <div class="top flex">
                            <div class="info">{{item.title}}
                                <div v-if="item.new" class="new">
                                    <div><span>New</span></div>
                                </div>
                            </div>
                            <p class="detail" @click="toDetail(index)">详情</p>
                        </div>
                        <div class="middle">
                            <p>{{item.price}}</p>
                        </div>
                        <div class="bottom">
                            <div class="try-btn" v-if="item.try">试用三天</div>
                            <div class="blue-btn">购入</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="data-card mt-24">
            <div class="data-card-title flex">
                <p>热门推荐</p>
                <Input class="data-card-title-right" placeholder="输入关键词搜索">
                    <i class="iconfont iconSearch" slot="prefix" />
                </Input>
            </div>
            <div class="data-card-content hot-data">
                <div class="item" v-for="(item,index) in hotList" :key="index">
                    <img :src="item.img"/>
                    <div>
                        <div class="top flex">
                            <div class="info">{{item.title}}
                                <div v-if="item.new" class="new">
                                    <div><span>New</span></div>
                                </div>
                            </div>
                            <p class="detail">详情</p>
                        </div>
                        <div class="middle">
                            <p>{{item.price}}</p>
                        </div>
                        <div class="bottom">
                            <div class="try-btn" v-if="item.try">试用三天</div>
                            <div class="blue-btn">购入</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="data-card-page">
                <Page :current="currentPage" :total="totalPage" :page-size="pageSize" show-total
                      @on-change="changePage"/>
            </div>
        </div>
        <Modal class-name="data-market-modal" v-model="detailModal" footer-hide :closable="false">
            <div class="download">
                <img v-if="detail1" src="../../../assets/img/datacenter/market/detail1@2x.png" alt="">
                <img v-if="detail2" src="../../../assets/img/datacenter/market/detail2@2x.png" alt="">
                <div class="close-btn" @click="closeDetail"></div>
            </div>
        </Modal>
    </div>
</template>

<script>
    import Img1 from "../../../assets/img/datacenter/market/1.png"
    import Img2 from "../../../assets/img/datacenter/market/2.png"
    import Img3 from "../../../assets/img/datacenter/market/3.png"
    import Img4 from "../../../assets/img/datacenter/market/4.png"
    import Img5 from "../../../assets/img/datacenter/market/5.png"
    import Img6 from "../../../assets/img/datacenter/market/6.png"
    import Img7 from "../../../assets/img/datacenter/market/7.png"
    import Img9 from "../../../assets/img/datacenter/market/9.png"
    import Img10 from "../../../assets/img/datacenter/market/10.png"
    import Img14 from "../../../assets/img/datacenter/market/14.png"
    import Img15 from "../../../assets/img/datacenter/market/15.png"
    import Img21 from "../../../assets/img/datacenter/market/21.jpeg"
    import Img22 from "../../../assets/img/datacenter/market/22.jpeg"
    import Img23 from "../../../assets/img/datacenter/market/23.jpeg"
    import Img24 from "../../../assets/img/datacenter/market/24.jpeg"
    import Img25 from "../../../assets/img/datacenter/market/25.jpeg"
    import Img26 from "../../../assets/img/datacenter/market/26.jpeg"
    import Img27 from "../../../assets/img/datacenter/market/27.jpeg"
    import Img28 from "../../../assets/img/datacenter/market/28.jpg"
    import Img29 from "../../../assets/img/datacenter/market/29.jpeg"
    import Img30 from "../../../assets/img/datacenter/market/30.jpeg"
    import Img31 from "../../../assets/img/datacenter/market/31.jpeg"
    import Img32 from "../../../assets/img/datacenter/market/32.jpeg"
    import Img33 from "../../../assets/img/datacenter/market/33.jpeg"
    import Img34 from "../../../assets/img/datacenter/market/34.jpeg"
    import Img35 from "../../../assets/img/datacenter/market/35.jpeg"

    export default {
        name: "Market",
        data() {
            return {
                currentPage: 1,
                totalPage: 24,
                pageSize: 9,
                detailModal: false,
                detail1: false,
                detail2: false,
                recommendList: [
                    {
                        img: Img1,
                        title: '脑电波测试-消费场景数据包',
                        price: '¥3,200/月'
                    },
                    {
                        img: Img2,
                        title: '视觉捕捉教育场景数据包',
                        price: '¥5,600/月',
                        new: true
                    },
                    {
                        img: Img3,
                        title: '用户消费场景心智测试数据包',
                        price: '¥5,999/月'
                    },
                    {
                        img: Img4,
                        title: '重大事件记忆联想测试数据包',
                        price: '¥4,999/月'
                    },
                    {
                        img: Img5,
                        title: '青少年课堂应激行为测试数据包',
                        price: '¥5,999/月'
                    },
                    {
                        img: Img6,
                        title: '女性色彩感知测试数据包 ',
                        price: '¥3,999/月'
                    }
                ],
                hotList1: [
                    {
                        img: Img7,
                        title: '中关村人群数据包',
                        price: '¥2,060/月',
                        new: true,
                        try: true
                    },
                    {
                        img: Img7,
                        title: '北京市海淀区大学城人群数据包',
                        price: '¥4,599/月',
                        try: true
                    },
                    {
                        img: Img9,
                        title: '美妆行业数据包-2020年度',
                        price: '¥1,099/月',
                        new: true,
                        try: true
                    },
                    {
                        img: Img10,
                        title: '健身娱乐行业数据包',
                        price: '¥1,099/月',
                        try: true
                    },
                    {
                        img: Img7,
                        title: '北京市朝阳区九龙山人群数据包',
                        price: '¥4,599/月'
                    },
                    {
                        img: Img7,
                        title: '北京市昌平区回龙观人群数据包',
                        price: '¥4,599/月'
                    },
                    {
                        img: Img7,
                        title: '北京市天通苑人群数据包',
                        price: '¥4,599/月'
                    },
                    {
                        img: Img14,
                        title: '智能城市行业数据包',
                        price: '¥2,599/月'
                    },
                    {
                        img: Img15,
                        title: '产品金融行业数据包',
                        price: '¥2,099/月'
                    }
                ],
                hotList2: [
                    {
                        img: Img21,
                        title: '快销行业数据包',
                        price: '¥2,599/月'
                    },
                    {
                        img: Img22,
                        title: '文化旅游行业数据包',
                        price: '¥1,099/月'
                    },
                    {
                        img: Img23,
                        title: '电商零售行业数据包',
                        price: '¥1，099/月'
                    },
                    {
                        img: Img24,
                        title: '房地产行业数据包',
                        price: '¥3,099/月'
                    },
                    {
                        img: Img25,
                        title: '汽车行业数据包',
                        price: '¥2,599/月'
                    },
                    {
                        img: Img26,
                        title: '互联网金融行业数据包',
                        price: '¥1,099/月'
                    },
                    {
                        img: Img27,
                        title: '金融征信风控数据包',
                        price: '¥2,099/月'
                    },
                    {
                        img: Img28,
                        title: 'OTT供应商数据包',
                        price: '¥1,599/月'
                    },
                    {
                        img: Img29,
                        title: '电信运营商数据包',
                        price: '¥1,099/月'
                    }
                ],
                hotList3: [
                    {
                        img: Img30,
                        title: '酒店航空数据包',
                        price: '¥1,599/月'
                    },
                    {
                        img: Img31,
                        title: '保险行业数据包',
                        price: '¥1,599/月'
                    },
                    {
                        img: Img32,
                        title: '连锁品牌零售行业数据包',
                        price: '¥1,599/月'
                    },
                    {
                        img: Img33,
                        title: '融合媒体行业数据包',
                        price: '¥1,099/月'
                    },
                    {
                        img: Img34,
                        title: '游戏行业数据包',
                        price: '¥2,099/月'
                    },
                    {
                        img: Img35,
                        title: '通用数字化媒体数据包',
                        price: '¥2,099/月'
                    }
                ],
                hotList: []
            }
        },
        created() {
           this.hotList = this.hotList1;
        },
        methods: {
            changePage(page) {
                if(page == 2){
                    this.hotList = this.hotList2;
                }else if(page == 3){
                    this.hotList = this.hotList3;
                }else {
                    this.hotList = this.hotList1;
                }
            },
            toDetail(index) {
                if (index == 0) {
                    this.detailModal = true
                    this.detail1 = true
                    this.detail2 = false
                }
                if (index == 1) {
                    this.detailModal = true
                    this.detail1 = false
                    this.detail2 = true
                }
            },
            closeDetail() {
                this.detailModal = false
                this.detail1 = false
                this.detail2 = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .data-market-container {
        padding: 0 24px 24px;
        height: 100%;

        .mt-24 {
            margin-top: 24px;
        }

        .data-card {
            padding: 15px 0 16px 24px;
            background: #FFFFFF;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;

            .data-card-title {
                margin: 0 0 23px 6px;

                > p {
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                }

                .data-card-title-right {
                    padding-right: 24px;
                    width: 200px;

                    ::v-deep .ivu-input {
                        padding: 9px 24px;
                    }
                }
            }

            .data-card-content {
                //解决滚动条影响页面宽度
                //margin-right: -10px;

                &.hot-data {
                   height: 376px;
                }

                .item {
                    margin: 0 16px 16px 0;
                    display: inline-block;
                    vertical-align: top;
                    padding: 16px;
                    width: 357px;
                    height: 114px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #C6CBDE;

                    > img {
                        margin-right: 8px;
                        width: 82px;
                        height: 82px;
                        border-radius: 8px;
                    }

                    > div {
                        width: 230px;
                        display: inline-block;
                        vertical-align: top;

                        .top {
                            .info {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;

                                .new {
                                    display: inline-block;
                                    width: 26px;
                                    height: 12px;
                                    line-height: 10px;
                                    background: rgba(255, 180, 176, 0.5);
                                    border-radius: 1px;
                                    border: 1px solid #FB343E;
                                    transform: skewX(-10deg);

                                    > div {
                                        transform: skewX(10deg);

                                        > span {
                                            display: inline-block;
                                            font-size: 12px;
                                            font-family: Helvetica-Oblique, Helvetica;
                                            font-weight: normal;
                                            color: #FB343E;
                                            text-align: center;
                                            transform: scale(0.7);
                                        }
                                    }
                                }
                            }

                            .detail {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #2373FF;
                                cursor: pointer;
                            }
                        }

                        .middle {
                            margin-top: 4px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #2373FF;
                        }

                        .bottom {
                            display: flex;
                            justify-content: flex-end;
                            align-items: center;
                            margin-top: 4px;

                            .try-btn {
                                margin-right: 8px;
                                width: 68px;
                                height: 28px;
                                line-height: 28px;
                                background: #FFFFFF;
                                border-radius: 4px;
                                border: 1px solid #97A0C3;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #242F57;
                                text-align: center;
                            }

                            .blue-btn {
                                width: 56px;
                                height: 28px;
                                line-height: 28px;
                                background: #2373FF;
                                box-shadow: 2px 4px 8px 0px rgba(35, 115, 255, 0.3);
                                border-radius: 4px;
                                font-size: 12px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #FFFFFF;
                                text-align: center;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

            .data-card-page {
                margin-top: 16px;
                padding: 0 24px;
                text-align: right;
            }
        }
    }
</style>
<style lang="scss">
    .data-market-modal {
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal {
            top: 0;
            width: 600px !important;
            height: 460px;
            background: #ffffff;
            border-radius: 4px;
        }

        .ivu-modal-body {
            padding: 0;
        }

        .download {
            position: relative;
            margin: 0 auto;
            width: 600px;

            > img {
                width: 600px;
                border-radius: 10px;
            }

            .close-btn {
                position: absolute;
                top: 17px;
                right: 20px;
                width: 180px;
                height: 30px;
                background: transparent;
                cursor: pointer;
                /*border: 1px solid red;*/
            }
        }
    }
</style>
