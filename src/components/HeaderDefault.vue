<template>
<div class="sass">
  <div class="sass-header">
      <div class="nav">
          <img src="../../static/header/fold@2x.png" alt="">
      </div>
      <div class="logo">
          <img src="../../static/header/bg@2x.png" alt="">
      </div>
      <div class="route">
          <div class="route-item" :class="{'active':active==index}" v-for="(item,index) in routes" :key="index" @click="checkItem(item,index)">
              <img :src="item.src" alt="">
              <span>{{item.name}}</span>
          </div>    
      </div>
      <div class="control"></div>
  </div>
  <div class="sass-container">
    <div class="sass-side">
        <!-- <template> -->
        <!-- <Row> -->
        <!-- <Col span="8"> -->
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" />
                        统计分析
                    </template>
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    <MenuGroup title="小组">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        <!-- </Col> -->
        <!-- </Row> -->
        <!-- </template> -->
    </div>
    <div class="sass-main"></div>
  </div>
  
</div>
</template>

<script>
export default {
    name:"HeaderDefault",
    data(){
        return {
            routes:[
                {src:require("../../static/header/home@2x.png"),name:"首页"},
                {src:require("../../static/header/intelligent_decision@2x.png"),name:"智能决策"},
                {src:require("../../static/header/business_analysis@2x.png"),name:"经营分析"},
                {src:require("../../static/header/analysis_tool@2x.png"),name:"分析工具"},
                {src:require("../../static/header/portrait_system@2x.png"),name:"画像系统"},
                {src:require("../../static/header/data_center@2x.png"),name:"数据管理"}
            ],
            active:0,
            theme2: "light"
        }
    },
    methods:{
        checkItem(item,index){
            this.active = index
        }
    }
}
</script>

<style lang="scss" scoped>
    .sass{
        width: 100%;
        height: 100%;
        background: #F5F5F5;
        border-radius: 2px;
        .sass-header{
            width: 100%;
            height: 56px;
            background: #333333;
            display: flex;
            .nav{
                width: 56px;
                height: 56px;
                background: #212121;
                img{
                    width: 24px;
                    height: 24px;
                    margin: 16px;
                }
            }
            .logo{
                width: 184px;
                height: 56px;
                padding: 16px 40px 16px 24px;
                img{
                    width: 120px;
                    height: 24px;
                }
            }
            .route{
                display: flex;
                .route-item{
                    height: 56px;
                    padding: 0 20px;
                    line-height: 56px;
                    cursor: pointer;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-right: 8px;
                        vertical-align: text-bottom;
                    }
                    >span{
                        display: inline-block;
                        height: 22px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 22px;
                    }
                    &:hover{
                        background: #2373FF;
                    }
                    &.active{
                        background: #2373FF;
                    }
                }
            }
        }
        .sass-container{
            height: calc(100vh - 56px);
            .sass-side{
                width: 240px;
                height: 100%;
                background: #FFFFFF;
            }
        }
    }
</style>