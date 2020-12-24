<template>
    <div class="wdsj">
        <div v-if="resultShow">
            <div class="result-box">
                <div class="title">查看数据</div>
                <div class="list">
                    <div class="back-btn" @click="resultShow = false">返回数据列表</div>
                    <Table border :columns="columns" :data="data"></Table>
                    <div class="page-box">
                        <Page :current="currentPage" :total="totalPage" :page-size="pageSize" simple
                              @on-change="changePage"/>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="upload-btn" @click="uploadModal1 = true"></div>
            <div class="change-box">
                <div @click="changeIndex = 1"></div>
                <div @click="changeIndex = 2"></div>
                <div @click="changeIndex = 3"></div>
                <div @click="changeIndex = 4"></div>
            </div>
            <img v-if="changeIndex == 1" src="../../../static/img/datacenter/wdsj/wscdsj@2x.png" alt="">
            <img v-else-if="changeIndex == 2" src="../../../static/img/datacenter/wdsj/sdk@2x.png" alt="">
            <img v-else-if="changeIndex == 3" src="../../../static/img/datacenter/wdsj/api@2x.png" alt="">
            <img v-else src="../../../static/img/datacenter/wdsj/sjkzl@2x.png" alt="">
        </div>
        <Modal class-name="upload-modal1" v-model="uploadModal1" footer-hide :closable="false">
            <div class="upload1">
                <div class="left-btn" @click="isUpload4 = false"></div>
                <div class="right-btn" @click="isUpload4 = true"></div>
                <div class="close1-btn" @click="uploadModal1 = false"></div>
                <div v-if="isUpload4">
                    <img src="../../../static/img/datacenter/wdsj/upload4@2x.png" alt="">
                    <div class="upload4-btn" @click="uploadChange1"></div>
                    <div class="upload5-btn" @click="uploadChange3"></div>
                </div>
                <div v-else>
                    <img src="../../../static/img/datacenter/wdsj/upload1@2x.png" alt="">
                    <div class="upload1-btn" @click="uploadChange1"></div>
                    <div class="upload3-btn" @click="uploadChange3"></div>
                </div>
            </div>
        </Modal>
        <Modal class-name="upload-modal2" v-model="uploadModal2" footer-hide :closable="false">
            <div class="upload2">
                <img v-if="isUpload4" src="../../../static/img/datacenter/wdsj/upload5.jpeg" alt="">
                <img v-else src="../../../static/img/datacenter/wdsj/upload2.png" alt="">
                <div class="upload2-btn" @click="uploadChange2"></div>
            </div>
        </Modal>
        <Modal class-name="upload-modal3" v-model="uploadModal3" footer-hide :closable="false">
            <div class="upload3">
                <img src="../../../static/img/datacenter/wdsj/upload3@2x.png" alt="">
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uploadModal1: false,
                uploadModal2: false,
                uploadModal3: false,
                isUpload4: false,
                resultShow: false,
                changeIndex: 1,
                currentPage: 1,
                totalPage: 25,
                pageSize: 15,
                columns: [
                    {
                        title: '产品ID',
                        key: 'pid'
                    },
                    {
                        title: '产品名称',
                        key: 'name'
                    },
                    {
                        title: '供应商ID',
                        key: 'vid'
                    },
                    {
                        title: '类别ID',
                        key: 'cid'
                    },
                    {
                        title: '单位数量',
                        key: 'num'
                    },
                    {
                        title: '单价',
                        key: 'price'
                    },
                    {
                        title: '库存量',
                        key: 'inventory'
                    },
                    {
                        title: '订购量',
                        key: 'order'
                    },
                    {
                        title: '再订购量',
                        key: 'orderA'
                    }
                ],
                data: [
                    {
                        pid: '1',
                        name: '苹果汁',
                        vid: '1',
                        cid: '1',
                        num: '每箱24瓶',
                        price: '18',
                        inventory: '39',
                        order: '0',
                        orderA: '10'
                    },
                    {
                        pid: '2',
                        name: '牛奶',
                        vid: '1',
                        cid: '1',
                        num: '每箱24瓶',
                        price: '19',
                        inventory: '17',
                        order: '40',
                        orderA: '25'
                    },
                    {
                        pid: '3',
                        name: '蕃茄酱',
                        vid: '1',
                        cid: '2',
                        num: '每箱12瓶',
                        price: '10',
                        inventory: '13',
                        order: '70',
                        orderA: '25'
                    },
                    {
                        pid: '4',
                        name: '盐',
                        vid: '2',
                        cid: '2',
                        num: '每箱12包',
                        price: '22',
                        inventory: '53',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '5',
                        name: '麻油',
                        vid: '2',
                        cid: '2',
                        num: '每箱12瓶',
                        price: '21.35',
                        inventory: '0',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '6',
                        name: '酱油',
                        vid: '3',
                        cid: '2',
                        num: '每箱12瓶',
                        price: '25',
                        inventory: '120',
                        order: '0',
                        orderA: '25'
                    },
                    {
                        pid: '7',
                        name: '海鲜粉',
                        vid: '3',
                        cid: '7',
                        num: '每箱30盒',
                        price: '30',
                        inventory: '15',
                        order: '0',
                        orderA: '10'
                    },
                    {
                        pid: '8',
                        name: '胡椒粉',
                        vid: '3',
                        cid: '2',
                        num: '每箱30盒',
                        price: '40',
                        inventory: '6',
                        order: '1',
                        orderA: '0'
                    },
                    {
                        pid: '9',
                        name: '鸡',
                        vid: '4',
                        cid: '6',
                        num: '每袋500克',
                        price: '97',
                        inventory: '29',
                        order: '3',
                        orderA: '0'
                    },
                    {
                        pid: '10',
                        name: '蟹',
                        vid: '4',
                        cid: '8',
                        num: '每袋500克',
                        price: '31',
                        inventory: '31',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '11',
                        name: '大众奶酪',
                        vid: '5',
                        cid: '4',
                        num: '每袋6克',
                        price: '21',
                        inventory: '22',
                        order: '30',
                        orderA: '30'
                    },
                    {
                        pid: '12',
                        name: '德国奶酪',
                        vid: '5',
                        cid: '4',
                        num: '每箱12瓶',
                        price: '38',
                        inventory: '86',
                        order: '3',
                        orderA: '0'
                    },
                    {
                        pid: '13',
                        name: '龙虾',
                        vid: '6',
                        cid: '8',
                        num: '每袋500克',
                        price: '6',
                        inventory: '24',
                        order: '0',
                        orderA: '5'
                    },
                    {
                        pid: '14',
                        name: '沙茶',
                        vid: '6',
                        cid: '7',
                        num: '每箱12瓶',
                        price: '23.25',
                        inventory: '35',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '15',
                        name: '味精',
                        vid: '6',
                        cid: '2',
                        num: '每箱30盒',
                        price: '15.5',
                        inventory: '39',
                        order: '0',
                        orderA: '5'
                    }
                ],
                data1: [
                    {
                        pid: '1',
                        name: '苹果汁',
                        vid: '1',
                        cid: '1',
                        num: '每箱24瓶',
                        price: '18',
                        inventory: '39',
                        order: '0',
                        orderA: '10'
                    },
                    {
                        pid: '2',
                        name: '牛奶',
                        vid: '1',
                        cid: '1',
                        num: '每箱24瓶',
                        price: '19',
                        inventory: '17',
                        order: '40',
                        orderA: '25'
                    },
                    {
                        pid: '3',
                        name: '蕃茄酱',
                        vid: '1',
                        cid: '2',
                        num: '每箱12瓶',
                        price: '10',
                        inventory: '13',
                        order: '70',
                        orderA: '25'
                    },
                    {
                        pid: '4',
                        name: '盐',
                        vid: '2',
                        cid: '2',
                        num: '每箱12包',
                        price: '22',
                        inventory: '53',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '5',
                        name: '麻油',
                        vid: '2',
                        cid: '2',
                        num: '每箱12瓶',
                        price: '21.35',
                        inventory: '0',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '6',
                        name: '酱油',
                        vid: '3',
                        cid: '2',
                        num: '每箱12瓶',
                        price: '25',
                        inventory: '120',
                        order: '0',
                        orderA: '25'
                    },
                    {
                        pid: '7',
                        name: '海鲜粉',
                        vid: '3',
                        cid: '7',
                        num: '每箱30盒',
                        price: '30',
                        inventory: '15',
                        order: '0',
                        orderA: '10'
                    },
                    {
                        pid: '8',
                        name: '胡椒粉',
                        vid: '3',
                        cid: '2',
                        num: '每箱30盒',
                        price: '40',
                        inventory: '6',
                        order: '1',
                        orderA: '0'
                    },
                    {
                        pid: '9',
                        name: '鸡',
                        vid: '4',
                        cid: '6',
                        num: '每袋500克',
                        price: '97',
                        inventory: '29',
                        order: '3',
                        orderA: '0'
                    },
                    {
                        pid: '10',
                        name: '蟹',
                        vid: '4',
                        cid: '8',
                        num: '每袋500克',
                        price: '31',
                        inventory: '31',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '11',
                        name: '大众奶酪',
                        vid: '5',
                        cid: '4',
                        num: '每袋6克',
                        price: '21',
                        inventory: '22',
                        order: '30',
                        orderA: '30'
                    },
                    {
                        pid: '12',
                        name: '德国奶酪',
                        vid: '5',
                        cid: '4',
                        num: '每箱12瓶',
                        price: '38',
                        inventory: '86',
                        order: '3',
                        orderA: '0'
                    },
                    {
                        pid: '13',
                        name: '龙虾',
                        vid: '6',
                        cid: '8',
                        num: '每袋500克',
                        price: '6',
                        inventory: '24',
                        order: '0',
                        orderA: '5'
                    },
                    {
                        pid: '14',
                        name: '沙茶',
                        vid: '6',
                        cid: '7',
                        num: '每箱12瓶',
                        price: '23.25',
                        inventory: '35',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '15',
                        name: '味精',
                        vid: '6',
                        cid: '2',
                        num: '每箱30盒',
                        price: '15.5',
                        inventory: '39',
                        order: '0',
                        orderA: '5'
                    }
                ],
                data2: [
                    {
                        pid: '16',
                        name: '饼干',
                        vid: '7',
                        cid: '3',
                        num: '每箱30盒',
                        price: '17.45',
                        inventory: '29',
                        order: '0',
                        orderA: '10'
                    },
                    {
                        pid: '17',
                        name: '猪肉',
                        vid: '7',
                        cid: '6',
                        num: '每袋500克',
                        price: '39',
                        inventory: '0',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '18',
                        name: '墨鱼',
                        vid: '9',
                        cid: '8',
                        num: '每袋500克',
                        price: '62.5',
                        inventory: '42',
                        order: '4',
                        orderA: '0'
                    },
                    {
                        pid: '19',
                        name: '糖果',
                        vid: '8',
                        cid: '3',
                        num: '每箱30盒',
                        price: '9.2',
                        inventory: '25',
                        order: '0',
                        orderA: '5'
                    },
                    {
                        pid: '20',
                        name: '桂花糕',
                        vid: '8',
                        cid: '3',
                        num: '每箱30盒',
                        price: '81',
                        inventory: '40',
                        order: '0',
                        orderA: '6'
                    },
                    {
                        pid: '21',
                        name: '花生',
                        vid: '8',
                        cid: '3',
                        num: '每箱30包',
                        price: '10',
                        inventory: '3',
                        order: '40',
                        orderA: '5'
                    },
                    {
                        pid: '22',
                        name: '糯米',
                        vid: '9',
                        cid: '5',
                        num: '每袋3公斤',
                        price: '21',
                        inventory: '104',
                        order: '0',
                        orderA: '25'
                    },
                    {
                        pid: '23',
                        name: '燕麦',
                        vid: '9',
                        cid: '5',
                        num: '每袋3公斤',
                        price: '9',
                        inventory: '61',
                        order: '0',
                        orderA: '25'
                    },
                    {
                        pid: '24',
                        name: '汽水',
                        vid: '10',
                        cid: '1',
                        num: '每箱12瓶',
                        price: '4.5',
                        inventory: '20',
                        order: '0',
                        orderA: '0'
                    },
                    {
                        pid: '25',
                        name: '巧克力',
                        vid: '11',
                        cid: '3',
                        num: '每箱30盒',
                        price: '14',
                        inventory: '76',
                        order: '0',
                        orderA: '30'
                    }
                ]
            }
        },
        methods: {
            uploadChange1() {
                this.uploadModal1 = false;
                this.uploadModal2 = true;
            },
            uploadChange2() {
                this.uploadModal1 = true;
                this.uploadModal2 = false;
            },
            uploadChange3() {
                if (this.isUpload4) {
                    this.uploadModal1 = false;
                    this.uploadModal3 = false;
                    this.resultShow = true;
                } else {
                    this.uploadModal1 = false;
                    this.uploadModal3 = true;
                    setTimeout(() => {
                        this.uploadModal3 = false;
                        this.resultShow = true;
                    }, 1000);
                }
            },
            changePage(page) {
                this.currentPage = page;
                page == 1 ? this.data = this.data1 : this.data = this.data2;
            }
        }
    }
</script>

<style scoped lang="scss">
    .wdsj {
        position: relative;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            // height: 100%;
        }

        .change-box {
            position: absolute;
            top: 70px;
            left: 20px;
            width: 1155px;
            height: 100px;

            > div {
                display: inline-block;
                width: 25%;
                height: 100px;
                cursor: pointer;
            }
        }

        .upload-btn {
            position: absolute;
            right: 48px;
            top: 189px;
            width: 88px;
            height: 33px;
            background: transparent;
            cursor: pointer;
        }

        .result-box {
            padding: 24px;

            .title {
                font-size: 24px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #212121;
            }

            .list {
                margin-top: 24px;
                padding: 24px;
                background: #FFFFFF;
                border-radius: 4px;

                .back-btn {
                    margin-bottom: 30px;
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 400;
                    color: #497CFF;
                    cursor: pointer;
                }

                .page-box {
                    margin-top: 10px;
                    text-align: right;
                }
            }
        }
    }
</style>
<style lang="scss">
    .upload-modal1 {
        .ivu-modal {
            width: 488px !important;
            height: 616px;
        }

        .ivu-modal-body {
            padding: 0;

            .upload1 {
                position: relative;
                width: 488px !important;
                height: 616px;

                img {
                    width: 488px !important;
                    height: 616px;
                }

                .close1-btn {
                    position: absolute;
                    right: 15px;
                    top: 20px;
                    width: 16px;
                    height: 16px;
                    background: transparent;
                    cursor: pointer;
                }

                .upload1-btn {
                    position: absolute;
                    left: 280px;
                    top: 340px;
                    width: 80px;
                    height: 30px;
                    background: transparent;
                    cursor: pointer;
                }

                .upload3-btn {
                    position: absolute;
                    right: 24px;
                    bottom: 10px;
                    width: 90px;
                    height: 30px;
                    background: transparent;
                    cursor: pointer;
                }

                .upload4-btn {
                    position: absolute;
                    left: 150px;
                    top: 390px;
                    width: 60px;
                    height: 30px;
                    background: transparent;
                    cursor: pointer;
                }

                .upload5-btn {
                    position: absolute;
                    right: 24px;
                    bottom: 10px;
                    width: 90px;
                    height: 30px;
                    background: transparent;
                    cursor: pointer;
                }

                .left-btn {
                    position: absolute;
                    left: 24px;
                    top: 100px;
                    width: 212px;
                    height: 90px;
                    background: transparent;
                    cursor: pointer;
                }

                .right-btn {
                    position: absolute;
                    right: 24px;
                    top: 100px;
                    width: 212px;
                    height: 90px;
                    background: transparent;
                    cursor: pointer;
                }
            }
        }


    }

    .upload-modal2 {
        .ivu-modal-body {
            padding: 0;
        }

        .ivu-modal {
            width: 640px !important;
            height: 400px;
        }

        .upload2 {
            position: relative;
            width: 640px;
            height: 400px;

            > img {
                width: 640px;
                height: 400px;
            }

            .upload2-btn {
                position: absolute;
                left: 120px;
                top: 50px;
                width: 160px;
                height: 80px;
                background: transparent;
                cursor: pointer;
            }
        }
    }

    .upload-modal3 {
        .ivu-modal {
            width: 500px !important;
            height: 206px;
        }

        .ivu-modal-body {
            padding: 0;
        }

        .upload3 {
            position: relative;
            width: 500px;
            height: 206px;

            > img {
                width: 500px;
                height: 206px;
            }
        }
    }
</style>
