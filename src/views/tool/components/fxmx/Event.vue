<template>
  <div class="fxmx-event">
      <!-- <img src="../../../../static/img/tool/fxmx/event@2x.png" alt=""> -->
      <div class="title">
        <!-- <div class="back" @click="back"></div> -->
        <img class="back" @click="back" src="../../../../static/img/tool/fxmx/back@2x.png" alt="">
        事件分析
      </div>
      <div class="event-content">
          <div class="filter-container">
            <p class="c-title">事件</p>
            <Collapse v-model="panelValue">
                <Panel name="1">
                    任意事件的总次数
                    <div class="" slot="content">
                        <div class="property" v-for="(item,index) in propertyList" :key="index">
                            <Select v-model="attribute1" class="mr12 w200">
                                <i class="iconfont iconchengyuan" slot="prefix" size="small"/>
                                <Option v-for="item in attributeList1" :value="item.value" :key="item.value" :disabled="item.disabled">{{ item.label }}</Option>
                            </Select>
                            <span class="mr12">的</span>
                            <Select v-model="attribute2" class="mr12 w200">
                                <Option value="总次数">总次数</Option>
                                <Option value="用户数">用户数</Option>
                                <Option value="人均次数">人均次数</Option>
                                <Option value="预定义指标">预定义指标</Option>
                            </Select>
                            <div>
                                <i class="add iconfont iconicon_more2" @click="add">
                                    新增</i>
                            </div>
                            <i class="del iconfont iconicon_close" @click="del(index)"></i>
                        </div>
                    </div>
                </Panel>
                <!-- <Panel name="2">
                    用户行为满足
                    <div class="" slot="content">
                        <div class="behavior" v-for="(item,index) in behaviorList" :key="index">
                            <div>
                                <DatePicker :value="date" format="yyyy/MM/dd" type="daterange" placement="right-end" placeholder="开始日期 - 结束日期" class="mr12 w200"></DatePicker>
                                <Select v-model="action1" class="mr12 w200">
                                    <Option value="做过">做过</Option>
                                </Select>
                                <Select v-model="action2" class="mr12 w200">
                                    <Option v-for="item in actionList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                            </div>
                            <div class="mt8">
                                <Select v-model="action3" class="mr12 w200">
                                    <Option value="总次数">总次数</Option>
                                </Select>
                                <Select v-model="action4" class="mr12 w80">
                                    <Option value="≥">≥</Option>
                                </Select>
                                <Input v-model="action5" class="mr12 w60"/> 次
                            </div>
                            <div>
                                <i class="add iconfont iconicon_more2" @click="behaviorAdd">
                                    新增</i>
                            </div>
                            <i class="del iconfont iconicon_close" @click="behaviorDel(index)"></i>
                        </div>
                    </div>
                </Panel> -->
            </Collapse>
            <div class="filter-show">
                按
                <Select v-model="attribute3" class="mr12 w100">
                    <Option value="总体">总体</Option>
                    <Option value="事件属性">事件属性</Option>
                    <Option value="用户属性">用户属性</Option>
                    <Option value="用户标签">用户标签</Option>
                </Select>
                查看
            </div>
          </div>
          <div class="show-container">

          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Event",
    data() {
        return {
            panelValue: [1, 2],
            attributeList1: [
                {
                    value: '任意事件',
                    label: '任意事件',
                },
                {
                    value: 'APP崩溃',
                    label: 'APP崩溃',
                },
                {
                    value: '领取权益',
                    label: '领取权益',
                },
                {
                    value: '收藏商品',
                    label: '收藏商品',
                },
                {
                    value: '完善资料',
                    label: '完善资料',
                }
            ],
            attribute1: "任意事件",
            attribute2: "总次数",
            attribute3: "总体",
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
            action5: "1",
            propertyList:[0],
            behaviorList:[0]
        }
    },
    methods:{
        back(){
            this.$router.push({name:"analysis-tool-fxmx"})
        },
        add(){
            this.propertyList.push({})
        },
        del(index){
            if(this.propertyList.length==1){
                return
            }
            this.propertyList.splice(index,1)
        },
        behaviorAdd(){
            this.behaviorList.push(0)
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
.fxmx-event{
    // position: relative;
    width: 100%;
    height: 100%;
    padding: 0 24px 24px;
    background: #F5F5F5;
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
        .w100 {
            width: 100px;
        }
        .w80 {
            width: 80px;
        }

        .w60 {
            width: 60px;
        }

    // img{
    //     width: 100%;
    // }
    .title{
        width: 100%;
        height: 72px;
        font-size: 20px;
        color: #212121;
        line-height: 72px;
            img{
                width: 24px;
                height: 24px;
                vertical-align: middle;
            }
    }
    .event-content{
        min-height: calc(100% - 72px);
        .filter-container{
            background: #FFFFFF;
            border: 1px solid red;
            padding: 20px 24px;
            margin-bottom: 20px;
            width: 1152px;
                .c-title {
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
                        top: 12px;
                        right: 66px;
                        color: #2373FF;
                        font-size: 14px;
                        cursor: pointer;
                    }
                    .del{
                        position: absolute;
                        top: 12px;
                        right: 24px;
                        width: 18px;
                        height: 18px;
                        font-size: 18px;
                        color: #999999;
                        line-height: 18px;
                        cursor: pointer;
                    }
                }
            
        }
        .show-container{
            background: #FFFFFF;
            border: 1px solid blue;
            padding: 20px 0;
        }
        .filter-show{
            margin-top:20px
        }
    }

    .back{
        // position: absolute;
        // top: 22px;
        // left: 24px;
        width: 26px;
        height: 26px;
        border: 1px solid red;
        cursor: pointer;
    }
}
</style>
<style lang="scss">
    .fxmx-event {
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