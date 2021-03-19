<template>
    <div class="zbgl">
        <div class="change1" @click="active = 1"></div>
        <div class="change2" @click="active = 2"></div>
        <div class="new" @click="newModal = true"></div>
        <div class="ztzb" v-if="active == 1">
            <img src="../../../static/img/tool/zbgl/ztzb-header@2x.png" alt="">
            <div class="ztzb-table">
                <Table :columns="columns" :data="data">
                    <template slot-scope="" slot="operate">
                        <div class="operation"><Icon type="md-create" color="#778ca2" class="icon-create"/><Icon type="ios-trash-outline" color="#f35a3d"/></div>
                    </template>
                </Table>
            </div>
        </div>
        <div class="ztzb" v-else>
            <img src="../../../static/img/tool/zbgl/khzb-header@2x.png" alt="">
            <div class="ztzb-table">
                <Table :columns="columns1" :data="data1">
                    <template slot-scope="" slot="operate">
                        <div class="operation"><Icon type="md-create" color="#778ca2" class="icon-create"/><Icon type="ios-trash-outline" color="#f35a3d"/></div>
                    </template>
                </Table>
            </div>
        </div> 
        <Modal class-name="zbgl-modal" v-model="newModal" footer-hide :closable="false">
            <div class="content">
                <div class="close-btn" @click="newModal = false"></div>
                <img src="../../../static/img/tool/zbgl/xjzb@2x.png" alt="">
            </div>
        </Modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 1,
                newModal: false,
                columns:[
                    {
                        title:"指标名",
                        key:"name",
                    },
                    {
                        title:"操作",
                        slot:"operate",
                        align:"center"
                    }
                ],
                data:[
                    {
                        name:"总客户数",
                        operate:""
                    },{
                        name:"有效客户数",
                        operate:""
                    },{
                        name:"周活跃客户数",
                        operate:""
                    },{
                        name:"周活跃用户",
                        operate:""
                    },{
                        name:"周报错次数",
                        operate:""
                    },{
                        name:"月活跃客户数",
                        operate:""
                    },{
                        name:"报错客户数",
                        operate:""
                    },{
                        name:"使用初级功能客户",
                        operate:""
                    },{
                        name:"使用高级功能客户",
                        operate:""
                    } 
                ],
                columns1:[
                    {
                        title:"指标名",
                        key:"name",
                    },
                    {
                        title:"操作",
                        slot:"operate",
                        align:"center"
                    }
                ],
                data1:[
                    {
                        name:"客户详情查看次数",
                        operate:""
                    },{
                        name:"报表导出次数",
                        operate:""
                    },{
                        name:"设置点击次数",
                        operate:""
                    },{
                        name:"帮助点击次数",
                        operate:""
                    },{
                        name:"PC端访问次数",
                        operate:""
                    },{
                        name:"报错次数",
                        operate:""
                    },{
                        name:"活跃用户数",
                        operate:""
                    },{
                        name:"高级功能点击次数",
                        operate:""
                    },{
                        name:"任意事件的总次数",
                        operate:""
                    } 
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .zbgl {
        position: relative;
        width: 100%;
        height: 100%;
        background: #f5f5f5;

        img {
            width: 100%;
            // height: 100%;
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
            display: flex;
            flex-direction: column;
            .ztzb-table{
                padding: 0 24px 24px;
                .operation{
                    font-size: 16px;
                    cursor: pointer;
                    .icon-create{
                        margin-right: 10px;
                    }
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
        }
    }
</style>