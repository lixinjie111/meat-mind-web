<template>
    <div class="create-container">
        <div class="nav">
            <p><Icon type="md-arrow-back" color="#212121" style="margin-right: 16px;cursor: pointer;" @click="back"/>创建用户画像</p>
        </div>
        <div class="content">
            <p class="title">选择画像人群的筛选条件</p>
            <Collapse v-model="panelValue">
                <Panel name="1">
                    用户属性满足
                    <div class="" slot="content">
                        <Select v-model="model1" style="width:200px">
                            <i class="iconfont iconyonghuhuaxiang" slot="prefix" size="small" />
                            <Option v-for="item in attributeList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                        <Select v-model="model1" style="width:200px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </div>
                </Panel>
                <Panel name="2">
                    用户行为满足
                    <div class="" slot="content">

                    </div>
                </Panel>
            </Collapse>
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
                    },
                ],
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        },
        methods: {
            back() {
                this.$router.push({name:"portrait-system-yhhx"})
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