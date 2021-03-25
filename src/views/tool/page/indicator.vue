<template>
    <div class="zbgl">
        <div class="header-nav"><p>指标管理</p></div>
         <Tab :tab-list="['整体指标','客户指标']" @change="changeTab"></Tab>
         <div class="show-header">
            <div class="blue-btn" @click="newModal = true">
            <i class="iconfont icontianjia"></i>
            <div>新建</div>
            </div>
        </div>
        <div class="ztzb">
                <Table :columns="columns" :data="active == 1?data:data1">
                    <template slot-scope="" slot="action">
                        <div class="actionList">
                            <div class="detail">编辑</div>
                            <div class="detail">删除</div>
                        </div>
                    </template>
                </Table>
                <div class="page">
                    <Page :total="total" :current="current" @on-change="change" @on-page-size-change="changeSize"
                            :pageSize="pageSize" show-total show-sizer class-name="pageS"/>
                </div>
        </div>
        
        <Modal class-name="zbgl-modal" v-model="newModal" footer-hide :closable="false">
            <div class="content">
                <div class="close-btn" @click="newModal = false"></div>
                <img src="../../../static/img/tool/zbgl/xjzb@2x.png" alt="">
                <div class="close-btn1" @click="newModal = false"></div>
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
                        width: 130 / 144 * window.rem,
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
                ]
            }
        },
        mounted(){
            this.changeTabCon(0);
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
                console.log(index)
                this.active = index;
            },
        }
    }
</script>

<style scoped lang="scss">
    .zbgl {
        padding:0 24px;
        position: relative;
        width: 100%;
        height: 100%;

         .show-header {
            margin-top: 16px;
            background: #fff;
            display: flex;
            align-items: center;
            height: 64px;
            margin-bottom: 8px;
            box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
            border-radius: 8px;
            border: 1px solid #eaedf7;
            .blue-btn {
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 74px;
                height: 32px;
                margin-left: 24px;
                background: #2373ff;
                border-radius: 4px;
                box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
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
            background: #fff;
            padding: 16px 24px;
                .actionList {
                    display: flex;
                    //justify-content: flex-end;
                    .detail {
                        margin-right: 16px;
                        cursor: pointer;
                        font-size: 14px;
                        font-weight: 400;
                        color: #2373FF;
                        line-height: 22px;
                    }
                }
        }
    }
</style>
<style lang="scss">
    .zbgl-modal {
        .ivu-modal{
            width: 460px!important;
        }
        .ivu-modal-body {
            padding: 0;
        }

        .content {
            position: relative;
            width: 460px;
            height: 600px;

            img {
                width: 460px;
                height: 600px;
            }

            .close-btn {
                position: absolute;
                right: 15px;
                top: 20px;
                width: 16px;
                height: 16px;
                cursor: pointer;
            }
            .close-btn1 {
                position: absolute;
                right: 75px;
                bottom: 10px;
                width: 50px;
                height: 30px;
                cursor: pointer;
            }
        }
    }
</style>