<template>
    <div class="create-container">
        <div class="nav">
            <p>
                <Icon type="md-arrow-back" color="#212121" style="cursor: pointer;" class="mr16" @click="back"/>
                创建用户画像
            </p>
        </div>
        <div class="content">
            <p class="title">选择画像人群的筛选条件</p>
            <Collapse v-model="panelValue">
                <Panel name="1">
                    用户属性满足
                    <div class="" slot="content">
                        <div class="property" v-for="(item,index) in propertyList" :key="index">
                            <Select v-model="item.select1" class="mr12 w200">
                                <i class="iconfont iconchengyuan" slot="prefix" size="small"/>
                                <Option v-for="item in attributeList1" :value="item.value" :key="item.value" :disabled="item.disabled">{{ item.label }}</Option>
                            </Select>
                            <Select v-model="item.select2" class="mr12 w200">
                                <Option value="属于">属于</Option>
                                <Option value="等于">等于</Option>
                            </Select>
                            <Input v-model="item.inputVal" class="mr12 w200"/>
                            <div>
                                <i class="add iconfont iconicon_more2" @click="add">
                                    新增</i>
                            </div>
                            <i class="del iconfont iconicon_close" @click="del(index)"></i>
                        </div>
                    </div>
                </Panel>
                <Panel name="2">
                    用户行为满足
                    <div class="" slot="content">
                        <div class="behavior" v-for="(item,index) in behaviorList" :key="index">
                            <div>
                                <DatePicker :value="item.date" format="yyyy/MM/dd" type="daterange" placement="right-end" placeholder="开始日期 - 结束日期" class="mr12 w200"></DatePicker>
                                <Select v-model="item.action1" class="mr12 w200">
                                    <Option value="做过">做过</Option>
                                </Select>
                                <Select v-model="item.action2" class="mr12 w200">
                                    <Option v-for="item in actionList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                            <div class="mt8">
                                <Select v-model="item.action3" class="mr12 w200">
                                    <Option value="总次数">总次数</Option>
                                </Select>
                                <Select v-model="item.action4" class="mr12 w80">
                                    <Option value="≥">≥</Option>
                                </Select>
                                <Input v-model="item.action5" class="mr12 w60"/> 次
                            </div>
                            <div>
                                <i class="add iconfont iconicon_more2" @click="behaviorAdd">
                                    新增</i>
                            </div>
                            <i class="del iconfont iconicon_close" @click="behaviorDel(index)"></i>
                        </div>
                    </div>
                </Panel>
            </Collapse>
            <div class="search-box">
                <div class="search-btn" @click="toList">查询</div>
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
                        label: '性别',
                        disabled: true
                    },
                    {
                        value: '年龄',
                        label: '年龄',
                        disabled: true
                    },
                    {
                        value: '收入',
                        label: '收入',
                        disabled: false
                    },
                    {
                        value: '受教育程度',
                        label: '受教育程度',
                        disabled: true
                    },
                    {
                        value: '地区',
                        label: '地区',
                        disabled: false
                    }
                ],
                attribute1: "收入",
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
                // date: [],
                // action1: "做过",
                // action2: "APP元素点击",
                // action3: "总次数",
                // action4: "≥",
                // action5: "1",
                propertyList:[{select1:"收入",select2:"等于",inputVal:""}],
                behaviorList:[{
                    date: [],
                    action1: "做过",
                    action2: "APP元素点击",
                    action3: "总次数",
                    action4: "≥",
                    action5: "1"
                }]

            }
        },
        methods: {
            back() {
                this.$router.push({name: "portrait-system-yhhx"})
            },
            toList() {
                this.$router.push({name: "portrait-system-yhhx-list"})
            },
            add(){
                this.propertyList.push({select1:"收入",select2:"等于",inputVal:""})
            },
            del(index){
                if(this.propertyList.length==1){
                    return
                }
                this.propertyList.splice(index,1)
            },
            behaviorAdd(){
                this.behaviorList.push({
                    date: [],
                    action1: "做过",
                    action2: "APP元素点击",
                    action3: "总次数",
                    action4: "≥",
                    action5: "1"
                })
            },
            behaviorDel(index){
                if(this.behaviorList.length==1){
                    return
                }
                this.behaviorList.splice(index,1)
            }
        }
    }
</script>

<style scoped lang="scss">
    .create-container {
        padding: 24px;

        .mt8 {
           margin-top: 8px;
        }

        .mr16 {
            margin-right: 16px;
        }

        .mr12 {
            margin-right: 12px;
        }

        .w200 {
            width: 200px;
        }

        .w80 {
            width: 80px;
        }

        .w60 {
            width: 60px;
        }

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

            .property,.behavior{
                position: relative;
                padding: 10px 0;
                .add{
                    position: absolute;
                    top: 6px;
                    right: 66px;
                    color: #2373FF;
                    font-size: 14px;
                    cursor: pointer;
                }
                .del{
                    position: absolute;
                    top: 7px;
                    right: 24px;
                    width: 18px;
                    height: 18px;
                    font-size: 18px;
                    color: #999999;
                    line-height: 18px;
                    cursor: pointer;
                }
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
                    cursor: pointer;
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