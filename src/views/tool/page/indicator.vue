<template>
    <div class="zbgl">
        <div class="header-nav"><p>指标管理</p></div>
         <Tab :tab-list="['整体指标','客户指标']" @change="changeTab"></Tab>
         <div class="show-header">
            <button class="btn-primary-middle blue-btn" @click="newModal = true">
            <i class="iconfont icontianjia"></i>
            <div>新建</div>
            </button>
        </div>
        <div class="ztzb">
                <Table :columns="columns" :data="active == 1?data:data1">
                    <template slot-scope="" slot="action">
                        <div class="actionList">
                            <div class="detail mr16">编辑</div>
                            <div class="detail">删除</div>
                        </div>
                    </template>
                </Table>
                <div class="page">
                    <Page :total="total" :current="current" @on-change="change" @on-page-size-change="changeSize"
                            :pageSize="pageSize" show-total show-sizer class-name="pageS"/>
                </div>
        </div>
        
        <Modal class-name="zbgl-modal" v-model="newModal" title="新建指标">
            <div class="content">
                <div class="line">
                    <div class="target-name">
                        <div class="label">指标名</div>
                        <Input v-model="modalValue" placeholder="请输入指标名" />
                    </div>  
                    <div class="show-target">
                        <div class="label">显示指标</div>
                        <Select v-model="attValue" class="select-box">
                            <Option v-for="ele in attributeList1" :value="ele.value" :key="ele.value">{{ ele.label }}</Option>
                        </Select>
                        <span class="mr15">的</span>
                        <Select v-model="placeValue" class="select-box">
                            <Option v-for="ele in placeList" :value="ele.value" :key="ele.value">{{ ele.label }}</Option>
                        </Select>
                    </div>
                </div>
                <div class="line">
                    <div class="default-unit">
                        <div class="label">默认单位</div>
                        <Select v-model="unitValue" class="select-box">
                            <Option v-for="ele in unitList" :value="ele.value" :key="ele.value">{{ ele.label }}</Option>
                        </Select>
                    </div>
                    <div class="choose">
                        <div class="label">是否累计</div>
                        <div class="choose-radio">
                        <RadioGroup v-model="disabledGroup">
                            <Radio label="是"></Radio>
                            <Radio label="否"></Radio>
                        </RadioGroup>
                        </div>
                    </div>
                </div>
                <div class="textarea">
                    <div class="label">备注</div>
                    <!-- <div> -->
                        <Input v-model="textValue" type="textarea" :rows="4" placeholder="可输入备注信息" />
                    <!-- </div> -->
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>

  import Tab from "@/components/Tab"
    export default {
        components: {Tab,},
        data() {
            return {
                total: 10,
                pageSize: 10,
                current: 1,
                active: 1,
                newModal: false,
                columns:[
                    {
                        title:"指标名",
                        key:"name",
                    },
                    {
                        title:"操作",
                        slot:"action",
                        align:"left",
                        width: 110 / 144 * window.rem,
                    }
                ],
                data:[
                    {
                        name:"总客户数",
                        action:""
                    },{
                        name:"有效客户数",
                        action:""
                    },{
                        name:"周活跃客户数",
                        action:""
                    },{
                        name:"周活跃用户",
                        action:""
                    },{
                        name:"周报错次数",
                        action:""
                    },{
                        name:"月活跃客户数",
                        action:""
                    },{
                        name:"报错客户数",
                        action:""
                    },{
                        name:"使用初级功能客户",
                        action:""
                    },{
                        name:"使用高级功能客户",
                        action:""
                    } 
                ],
                columns1:[
                    {
                        title:"指标名",
                        key:"name",
                    },
                    {
                        title:"操作",
                        slot:"action",
                        align:"left",
                        width: 130 / 144 * window.rem,
                    }
                ],
                data1:[
                    {
                        name:"客户详情查看次数",
                        action:""
                    },{
                        name:"报表导出次数",
                        action:""
                    },{
                        name:"设置点击次数",
                        action:""
                    },{
                        name:"帮助点击次数",
                        action:""
                    },{
                        name:"PC端访问次数",
                        action:""
                    },{
                        name:"报错次数",
                        action:""
                    },{
                        name:"活跃用户数",
                        action:""
                    },{
                        name:"高级功能点击次数",
                        action:""
                    },{
                        name:"任意事件的总次数",
                        action:""
                    } 
                ],
                modalValue:"",
                attValue:"任意事件",
                placeValue:"总次数",
                unitValue:"周",
                attributeList1: [
                    {
                    value: "任意事件",
                    label: "任意事件",
                    },
                    {
                    value: "APP崩溃",
                    label: "APP崩溃",
                    },
                    {
                    value: "领取权益",
                    label: "领取权益",
                    },
                    {
                    value: "收藏商品",
                    label: "收藏商品",
                    },
                    {
                    value: "完善资料",
                    label: "完善资料",
                    },
                ],
                placeList: [
                    {
                    value: "总次数",
                    label: "总次数",
                    },
                    {
                    value: "用户数",
                    label: "用户数",
                    },
                    {
                    value: "人均次数",
                    label: "人均次数",
                    },
                ],
                unitList:[
                    {
                    value: "周",
                    label: "周",
                    },
                    {
                    value: "月",
                    label: "月",
                    },
                    {
                    value: "年",
                    label: "年",
                    },                    
                ],
                disabledGroup:"是",
                textValue:""
            }
        },
        mounted(){
            // this.changeTabCon(0);
        },
        methods:{
            change(current) {
                this.current = current
               // this.generateData()
            },
            changeSize(pageSize) {
                this.pageSize = pageSize
               // this.generateData()
            },
            changeTab(index) {
                this.active = index;
            },
        }
    }
</script>

<style scoped lang="scss">
    .zbgl {
        margin-bottom: 24px;
        padding:0 24px;
        position: relative;
        width: 100%;
        height: 100%;

         .show-header {
            margin-top: 16px;
            display: flex;
            align-items: center;
            height: 64px;
            margin-bottom: 8px;
            background: #FFFFFF;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;
            .blue-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 74px;
                height: 32px;
                margin-left: 24px;
                > i {
                    width: 14px;
                    height: 14px;
                    font-size: 12px;
                    font-weight: 600;
                    color: #ffffff;
                    margin-right: 4px;
                    line-height: 14px;
                }
                > div {
                    height: 14px;
                    font-size: 14px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 14px;
                }
            }
            }
        img {
            width: 100%;
            // height: 100%;
        }
        .page {
            padding-top: 16px;
            .pageS {
            text-align: right;
            ::v-deep .ivu-page-options {
                float: left;
            }
            }
        }

        .change1 {
            position: absolute;
            left: 30px;
            top: 80px;
            width: 100px;
            height: 40px;
            cursor: pointer;
        }

        .change2 {
            position: absolute;
            left: 130px;
            top: 80px;
            width: 100px;
            height: 40px;
            cursor: pointer;
        }

        .new {
            position: absolute;
            right: 40px;
            top: 81px;
            width: 100px;
            height: 34px;
            cursor: pointer;
        }
        .ztzb{
            margin-top: 16px;
            padding: 16px 24px;
            background: #FFFFFF;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;
                .ivu-table{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
    }
    ::v-deep .ivu-table-header thead tr th{
        height: 48px;
        background: #F6F9FF;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
    }
    ::v-deep .ivu-table th,::v-deep .ivu-table td{
        height: 56px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #242F57;
        border-bottom: 1px solid #EAEDF7;
    }
                .actionList {
                    display: flex;
                    .detail {
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 400;
                        color: #2373FF;
                        line-height: 22px;
                    }
                    .mr16{
                        margin-right: 16px;
                    }
                }
        }
    }
</style>
<style lang="scss">
    .zbgl-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
            ::v-deep .ivu-modal-content{
                ::v-deep .ivu-modal-footer{
                    border-top: none;
                }
                ::v-deep .ivu-btn-text{
                    border-radius: 4px;
                    border: 1px solid #97A0C3;
                    &:hover{
                        border-radius: 4px;
                        border: 1px solid #97A0C3; 
                    }
                }
            }

        }
    }
    .zbgl-modal {
        .ivu-modal{
            width: 700px!important;
        }
        .ivu-modal-body {
            padding: 0;
        }

        .content {
            display: flex;
            flex-direction: column;
            padding: 24px;
            .line{
                display: flex;
                justify-content: space-between;
                margin-bottom: 32px;
                .label{
                    height: 20px;
                    margin-bottom: 8px;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    line-height: 20px;
                }
                .target-name{
                    width: 50%;
                    margin-right: 40px;
                }
                .show-target{
                    width: 50%;
                    .select-box{
                        width: 130px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                    }
                    .mr15{
                        width: 14px;
                        height: 22px;
                        margin: 0 15px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                        line-height: 22px;
                    }
                }
                .default-unit{
                    width: 50%;
                    margin-right: 40px;
                }
                .choose{
                    width: 50%;
                    .ivu-radio-wrapper{
                        margin-right: 48px;
                    }
                }
            }
            .textarea{
                .label{
                    height: 20px;
                    margin-bottom: 8px;
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #242F57;
                    line-height: 20px;
                }
            }
        }


    }
</style>