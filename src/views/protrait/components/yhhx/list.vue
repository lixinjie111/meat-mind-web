<template>
    <div class="yhhx">
        <div class="back" @click="back"></div>
        <Select class="group-select" v-model="groupValue">
            <Option value="1">无</Option>
            <Option value="2">用户组2</Option>
        </Select>
        <template v-if="groupValue == 1">
            <img src="../../../../static/img/protrait/yhhx1@2x.png" alt="">
            <div class="content">
                <div class="card">
                    <div class="top">
                        <div class="tabs">
                            <div v-for="(item,index) in tabList" :key="index" :class="item.id == tabActive ? 'active tab' : 'tab'" @click="changeTab(item.id)">{{item.value}} </div>
                        </div>
                        <div class="subtabs" v-if="tabActive<2">
                            <div class="subtab" :class="{'cur':i==cur}" v-for="(ele,i) in sub[tabActive-1]" :key="i" @click="changeSubTab(i)">{{ele}}</div>
                        </div>
                        <!--                    <div class="btns">-->
                        <!--                        <div class="report-btn">一键生成报告</div>-->
                        <!--                        <div class="add-btn"><Icon type="md-add-circle" color="#FFFFFF" size="18" style="vertical-align: -3px;margin-right: 9px;"/>添加卡片</div>-->
                        <!--                    </div>-->
                    </div>
                    <div class="bottom">
                        <div class="tab-content" v-if="tabActive==1">
                            <div v-if="cur==0">
                                <div class="line">
                                    <div class="col">
                                        <p class="title">年龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-1.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">收入结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-2.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">职业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-3.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">行业结构</p>
                                         <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-10.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">教育背景结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-5.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">性别结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-6.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">用户出行结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-7.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">居住地区结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-8.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">户籍籍贯结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-9.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">婚育状态结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-10.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">消费能力结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-11.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">车辆保有结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-12.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>  
                            </div>
                            <div v-else>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">会员性别结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-6.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">会员年龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-2.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">会员活跃度结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-3.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">会员会龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-4.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">消费能力结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-5.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">会员收入结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-2.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">会员来源地结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-7.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">居住地区结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-8.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="col">
                                        <p class="title">会员职业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-9.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="col br">
                                        <p class="title">会员行业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-10.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="tab-content" v-else-if="tabActive==2">
                            <img src="../../../../static/img/protrait/yhhx3@2x.png" alt="">
                            <video class="player" width="100%" height="100%" autoplay loop muted src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"></video>
                        </div>
                        <div class="tab-content1" v-else>
                            <iframe class="iframe13" src="/static/html/yxdc/xzdc1-1.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe14" src="/static/html/yxdc/xzdc2.html" frameborder="0" scrolling="no"></iframe>
                            <img src="../../../../static/img/protrait/yhhx4@2x.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <img src="../../../../static/img/protrait/yhhx7@2x.png" alt="">
            <div class="content">
                <div class="card">
                    <div class="top">
                        <div class="tabs">
                            <div v-for="(item,index) in tabList" :key="index" :class="item.id == tabActive ? 'active tab' : 'tab'" @click="changeTab(item.id)">{{item.value}}</div>
                        </div>
                        <div class="subtabs" v-if="tabActive<2">
                            <div class="subtab" :class="{'cur':i==cur}" v-for="(ele,i) in sub[tabActive-1]" :key="i" @click="changeSubTab(i)">{{ele}}</div>
                        </div>
                        <!--                    <div class="btns">-->
                        <!--                        <div class="report-btn">一键生成报告</div>-->
                        <!--                        <div class="add-btn"><Icon type="md-add-circle" color="#FFFFFF" size="18" style="vertical-align: -3px;margin-right: 9px;"/>添加卡片</div>-->
                        <!--                    </div>-->
                    </div>
                    <div class="bottom">
                        <div class="tab-content" v-if="tabActive==1">
                            <div v-if="cur==0">
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">年龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-1.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:年龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-1-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">收入结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-2.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:收入结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-2-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">职业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-3.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:职业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-3-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">行业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-10.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:行业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-vip-10-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">教育背景结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-5.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:教育背景结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/ck/basic-1-5-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">性别结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-6.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:性别结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/ck/basic-1-6-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">用户出行结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-7.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:用户出行结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/ck/basic-1-7-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">居住地区结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-8.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:居住地区结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/ck/basic-1-8-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">户籍籍贯结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-9.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:户籍籍贯结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-9-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">婚育状态结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-10.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:婚育状态结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-10-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">消费能力结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-11.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:消费能力结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-11-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>  
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">车辆保有结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-12.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:车辆保有结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-12-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>  
                            </div>
                            <div v-else>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员性别结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-1-6.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员性别结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-6-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员年龄结构</p>
                                        <iframe class="iframe iframe4" src="/static/html/yhhx/basic/basic-vip-2.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员年龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-vip-2-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员活跃度结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-3.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员活跃度结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-vip-3-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员会龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-4.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员会龄结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-vip-4-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">消费能力结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-11.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:消费能力结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-5.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员收入结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-2.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员收入结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-1-2-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员来源地结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-7.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员来源地结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-vip-7-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">居住地区结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-8.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:居住地区结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-1-8.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div>
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员职业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-9.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员职业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-vip-9-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div> 
                                <div class="group">
                                    <div class="ele">
                                        <p class="title">会员行业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/basic-vip-10.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                    <div class="ele ck">
                                        <p class="title">对照组:会员行业结构</p>
                                        <iframe class="iframe" src="/static/html/yhhx/basic/ck/basic-vip-10-ck.html" frameborder="0" scrolling="no"></iframe>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="tab-content" v-else-if="tabActive==2">
                            <img src="../../../../static/img/protrait/yhhx3@2x.png" alt="">
                            <video class="player" width="100%" height="100%" autoplay loop muted src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"></video>
                        </div>
                        <div class="tab-content1" v-else>
                            <iframe class="iframe13" src="/static/html/yxdc/xzdc1-1.html" frameborder="0" scrolling="no"></iframe>
                            <iframe class="iframe14" src="/static/html/yxdc/xzdc2.html" frameborder="0" scrolling="no"></iframe>
                            <img src="../../../../static/img/protrait/yhhx4@2x.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cur:0,
                tabActive: 1,
                sub:[["通用用户画像","品牌用户画像"],["宏观行为分析","宏观消费行为","行业行为分析","品牌用户行为"]],
                tabList: [
                    {
                        id: 1,
                        value: '用户基础画像'
                    },
                    {
                        id: 2,
                        value: '用户行为分析'
                    },
                    {
                        id: 3,
                        value: '心智分析'
                    }
                ],
                groupValue: '1'
            }
        },
        methods: {
            back() {
                this.$router.push({name: "portrait-system-yhhx"})
            },
            changeTab(active) {
                this.tabActive = active;
                this.cur = 0
            },
            changeSubTab(index){
                this.cur = index
            }
        }
    }
</script>

<style scoped lang="scss">
    .yhhx {
        position: relative;
        width: 100%;
        height: 100%;

        .back {
            position: absolute;
            left: 24px;
            top: 24px;
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

        .group-select {
            position: absolute;
            right: 40px;
            top: 84px;
            width: 210px;
        }

        >img {
            width: 100%;
        }

        .content {
            padding: 0 24px 24px;

            .card {
                width: 100%;
                background: #FFFFFF;
                border-radius: 4px;

                .top {
                    display: flex;
                    // justify-content: space-between;
                    // align-items: center;
                    flex-direction: column;
                    border-bottom: 1px solid #F0F0F0;
                    margin:0 24px;
                    .tabs {
                        // display: inline-block;
                        // vertical-align: top;

                        .tab {
                            display: inline-block;
                            padding: 16px 0;
                            margin-right: 34px;
                            font-size: 16px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #666666;
                            cursor: pointer;

                            &.active {
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #2965FF;
                                border-bottom: 2px solid #2965FF;
                            }
                        }
                    }

                    .subtabs{
                        display: flex;
                        padding: 16px 0;
                        .subtab{
                            width: 88px;
                            height: 32px;
                            font-size: 12px;
                            color: #666666;
                            font-weight: 500;
                            background: rgba(255, 255, 255, 0.1);
                            border: 1px solid #D9D9D9;
                            line-height: 30px;
                            text-align: center;
                            cursor: pointer;
                            &.cur{
                                color: #2373FF;
                                background: #FFFFFF;
                                border: 1px solid #2373FF;
                            }
                        }
                    }

                    .btns {
                        padding-right: 24px;

                        > div{
                            display: inline-block;
                            vertical-align: top;
                            width: 114px;
                            height: 32px;
                            line-height: 32px;
                            border-radius: 2px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            text-align: center;

                            &.report-btn {
                                background: #FFFFFF;
                                border: 1px solid #D9D9D9;
                                color: #666666;
                            }

                            &.add-btn {
                                margin-left: 24px;
                                background: #2965FF;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #FFFFFF;
                            }
                        }
                    }
                }

                .bottom {

                    .tab-content {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        .line {
                            padding: 24px;
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            height: 379px;
                            border-bottom: 1px solid #F0F0F0;

                            &:last-child {
                                border-bottom: none;
                            }

                            .col {
                                width: 50%;
                                height: 100%;

                                .title {
                                    height: 22px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #333333;
                                    line-height: 22px;
                                }

                                &.br {
                                    border-left: 1px solid #F0F0F0;
                                    padding-left: 24px;
                                }
                                .iframe{
                                    width: 100%;
                                    height: 100%;
                                    // height: calc(100% - 22px);
                                }
                            }
                        }

                        .group{
                            padding-left:24px;
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            height: 379px;
                            border-bottom: 1px solid #F0F0F0;
                            &:last-child {
                                border-bottom: none;
                            }
                            .ele{
                                width: 50%;
                                height: 100%;
                                padding: 24px 0;
                                .title {
                                    height: 22px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Medium, PingFang SC;
                                    font-weight: 500;
                                    color: #333333;
                                    line-height: 22px;
                                }

                                &.ck {
                                    border-left: 1px solid #F0F0F0;
                                    padding-left: 24px;
                                    background: #FAFAFA;
                                }
                                .iframe{
                                    width: 100%;
                                    height: 100%;
                                    // height: calc(100% - 22px);
                                }
                            }
                        }
                        >img {
                            width: 100%;
                        }

                        // .iframe {
                        //     position: absolute;
                        //     width: 49%;
                        //     height: 350px;
                        //     background: #FFFFFF;
                        // }

                        .iframe1 {
                            left: 0;
                            top: 42px;
                        }

                        .iframe2 {
                            width: 40%;
                            right: 60px;
                            top: 42px;
                        }

                        .iframe3 {
                            height: 336px;
                            left: 0;
                            top: 452px;
                        }

                        .iframe4 {
                            height: 330px;
                            right: 0;
                            top: 452px;
                        }

                        .iframe5 {
                            left: 0;
                            top: 42px;
                        }

                        .iframe6 {
                            left: 0;
                            top: 444px;
                            height: 344px;
                        }

                        .iframe7 {
                            left: 0;
                            top: 842px;
                            height: 340px;
                        }

                        .iframe8 {
                            left: 0;
                            // top: 1240px;
                            bottom: 806px;
                            height: 340px;
                        }

                        .iframe9 {
                            right: 0;
                            top: 42px;
                            background: #FAFAFA;
                        }

                        .iframe10 {
                            right: 0;
                            top: 442px;
                            background: #FAFAFA;
                            height: 344px;
                        }

                        .iframe11 {
                            right: 0;
                            top: 842px;
                            height: 340px;
                            background: #FAFAFA;
                        }

                        .iframe12 {
                            right: 0;
                            // top: 1240px;
                            bottom: 806px;
                            height: 340px;
                            background: #FAFAFA;
                        }

                        .player {
                            position: absolute;
                            width: 100%;
                            height: 466px;
                            top: -14px;
                            left: 0;
                        }
                    }

                    .tab-content1 {
                        >img {
                            width: 100%;
                        }

                        .iframe13 {
                            margin-top: 10px;
                            width: 100%;
                            height: 350px;
                            /*background: #FFFFFF;*/
                            border-bottom: 1px solid #F0F0F0;
                        }

                        .iframe14 {
                            margin-top: 10px;
                            width: 100%;
                            height: 350px;
                            /*background: #FFFFFF;*/
                            border-bottom: 1px solid #F0F0F0;
                        }
                    }
                }
            }
        }
    }
</style>
