<template>
    <div class="create-container">
        <div class="nav">
            <p>
                <Icon type="md-arrow-back" color="#212121" style="margin-right: 16px;cursor: pointer;" @click="back"/>
                创建用户画像
            </p>
        </div>
        <div class="content">
            <p class="title">选择画像人群的筛选条件</p>
            <Collapse v-model="panelValue">
                <Panel name="1">
                    用户属性满足
                    <div class="" slot="content">
                        <Select v-model="attribute1" style="width:200px">
                            <i class="iconfont iconchengyuan" slot="prefix" size="small"/>
                            <Option v-for="item in attributeList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="attribute2" style="width:200px;margin-left:12px;">
                            <Option value="属于">属于</Option>
                            <Option value="等于">等于</Option>
                        </Select>
                        <Input v-model="attribute3" style="width: 200px;margin-left:12px;"/>
                    </div>
                </Panel>
                <Panel name="2">
                    用户行为满足
                    <div class="" slot="content">
                        <div>
                            <DatePicker :value="date" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="开始日期 - 结束日期" style="width: 200px"></DatePicker>
                            <Select v-model="action1" style="width:200px;margin-left:12px;">
                                <Option value="做过">做过</Option>
                            </Select>
                            <Select v-model="action2" style="width:200px;margin-left:12px;">
                                <Option v-for="item in actionList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>
                        <div style="margin-top: 8px;">
                            <Select v-model="action3" style="width:200px;">
                                <Option value="总次数">总次数</Option>
                            </Select>
                            <Select v-model="action4" style="width:80px;margin-left:12px;">
                                <Option value="≥">≥</Option>
                            </Select>
                            <Input v-model="action5" style="width: 60px;margin-left:12px;"/> 次
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <div class="search-box">
                <div class="search-btn">查询</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "create",
        data() {
            return {
                panelValue: [1, 2],
                attributeList1: [
                    {
                        value: '性别',
                        label: '性别'
                    },
                    {
                        value: '年龄',
                        label: '年龄'
                    },
                    {
                        value: '收入',
                        label: '收入'
                    },
                    {
                        value: '受教育程度',
                        label: '受教育程度'
                    },
                    {
                        value: '地区',
                        label: '地区'
                    }
                ],
                attribute1: "性别",
                attribute2: "等于",
                attribute3: "",
                actionList1: [
                    {
                        value: '小程序签到',
                        label: '小程序签到'
                    },
                    {
                        value: 'APP元素点击',
                        label: 'APP元素点击'
                    },
                    {
                        value: '商品购买',
                        label: '商品购买'
                    },
                    {
                        value: '加入购物车',
                        label: '加入购物车'
                    },
                    {
                        value: '评论',
                        label: '评论'
                    },
                    {
                        value: '线下店访问',
                        label: '线下店访问'
                    }
                ],
                date: [],
                action1: "做过",
                action2: "APP元素点击",
                action3: "总次数",
                action4: "≥",
                action5: "1"

            }
        },
        methods: {
            back() {
                this.$router.push({name: "portrait-system-yhhx"})
            }
        }
    }
</script>

<style scoped lang="scss">
    .create-container {
        padding: 24px;

        .nav {
            > p {
                font-size: 20px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #212121;
            }
        }

        .content {
            margin-top: 22px;
            padding: 16px 24px;
            width: 1152px;
            background: #FFFFFF;

            .title {
                margin-bottom: 16px;
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #212121;
            }

            .search-box {
                margin-top: 16px;
                display: flex;
                justify-content: flex-end;

                .search-btn {
                    width: 80px;
                    height: 32px;
                    line-height: 32px;
                    background: #2965FF;
                    border-radius: 2px;
                    text-align: center;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #FFFFFF;
                }
            }
        }
    }
</style>
<style lang="scss">
    .create-container {
        .ivu-collapse {
            border: none;

            .ivu-collapse-item {
                border: none;

                .ivu-collapse-header {
                    height: 52px;
                    line-height: 52px;
                    border: none !important;
                    background: #FAFAFA;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #333333;
                }

                .ivu-collapse-content {
                    padding: 16px 42px;
                    width: 100%;
                    background: #FFFFFF;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                }
            }
        }
    }
</style>