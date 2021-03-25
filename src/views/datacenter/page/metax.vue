<template>
  <div class="ysjgl">
    <div class="header-nav">
      <p>元数据管理</p>
    </div>
    <div class="ysjgl-content">
      <div v-for="(it, i) in list" :key="it.name" class="item-box">
        <Card class="item">
          <div @click="()=>it.click()" class="item-content">
            <div :class="['icon-box', `icon-box${i + 1}`]" ><i :class="['item-icon', 'iconfont', it.icon]"></i></div>
            <div>
              <div class="item-title">{{it.name}}</div>
              <div class="item-desc">{{it.desc}}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
    <!--        <img src="../../../static/img/datacenter/ysjgl/ysjgl@2x.png" alt="">-->

<!--    <div class="click-modal">-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click1.png" alt="" @click="click1">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click2.png" alt="" @click="click2">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click3.png" alt="" @click="click3">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click4.png" alt="" @click="click4">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click5.png" alt="" @click="click5">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click6.png" alt="" @click="click6">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click7.png" alt="" @click="click7">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click8.png" alt="" @click="click8">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click9.png" alt="" @click="click9">&ndash;&gt;-->
<!--      &lt;!&ndash;            <img src="../../../static/img/datacenter/ysjgl/click10.png" alt="" @click="click10">&ndash;&gt;-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: "Metax",
    data() {
      return {
        list: [
          {name: '入库检验规则设置', icon:'iconrukujianyanguizeshezhi', desc: '分端设置「设备 ID」和「登录 ID」的入库规则，也可以设置「 IP 」和「域名」黑名单，进行数据校验与过滤', click: this.click1},
          {name: '元事件', icon:'iconyuanshijian',desc: '在代码中追踪的原始事件', click: this.click2 },
          {name: '事件属性', icon:'iconshijianshuxing', desc: '可编辑自定义事件属性的显示名、显示状态、配置维度字典', click: this.click3 },
          {name: '用户属性', icon:'iconyonghushuxing', desc: '可编辑自定义用户属性的显示名、显示状态、配置维度字典', click: this.click4 },
          {name: '维度表',  icon:'iconweidubiao',desc: '已建立关联的维度表明细，完成复杂的分析场景', click: this.click5 },
          {name: '物品属性', icon:'iconwupinshuxing', desc: '可查看目前已通过后台命令创建的一些列自定义物品属性', click: this.click6 },
          {name: '虚拟属性', icon:'iconxunishuxing', desc: '通过 SQL 表达式对已有的所有属性进行二次加工生成一个新的事件属性适用于关联查询和复杂查询', click: this.click7 },
          {name: '虚拟事件', icon:'iconxunishijian', desc: '组合多个元事件并可为其分别设置过滤条件，形成符合需要的虚拟事件', click: this.click8 },
          {name: 'Session 管理', icon:'iconsessionguanli', desc: '创建/管理 Session', click: this.click9 },
          {name: '可视化全埋点事件', icon:'iconkeshihuaquanmaidianshijian', desc: '管理通过可视化全埋点自动上报的事件', click: this.click10 },
        ]
      }
    },
    methods: {
      click1() {
        this.$router.push({name: "data-center-metax-rule"})
      },
      click2() {
        this.$router.push({name: "data-center-metax-unit"})
      },
      click3() {
        this.$router.push({name: "data-center-metax-event"})
      },
      click4() {
        this.$router.push({name: "data-center-metax-user"})
      },
      click5() {
        this.$router.push({name: "data-center-metax-dimension"})
      },
      click6() {
        this.$router.push({name: "data-center-metax-item"})
      },
      click7() {
        this.$router.push({name: "data-center-metax-virtual"})
      },
      click8() {
        this.$router.push({name: "data-center-metax-virtualEvent"})
      },
      click9() {
        this.$router.push({name: "data-center-metax-session"})
      },
      click10() {
        this.$router.push({name: "data-center-metax-visualization"})
      }
    }
  }
</script>

<style scoped lang="scss">
  .ysjgl {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 24px;
    // .page-title{
    //   font-size: 20px;
    //   font-weight: 500;
    //   color: #242F57;
    //   display: flex;
    //   align-items: center;
    //   height: 64px;
    // }
    .ysjgl-content{
      background: #FFFFFF;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      width: 100%;
      // height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 24px 24px 0;
    }
    .item-box{
      width: calc(50% - 13px);
      margin-bottom: 24px;
      &:nth-child(odd){
        margin-right: 24px;
      }
      ::v-deep .ivu-card:hover{
        box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.1), 4px 6px 20px 0px rgba(134, 143, 191, 0.1);
      }
    }
    .item {
      height: 100%;
      background: #FFFFFF;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid #EAEDF7;
      display: flex;
      &>div{
        height: 100%;
      }
      .icon-box{
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        text-align: center;
        margin-right: 16px;
        flex-shrink: 0;
        .icon{
          font-size: 30px;
          color: #fff;
          margin-top: 10px;
        }
      }
      .icon-box1{
        background: #4D94FF;
        // box-shadow: 2px 3px 8px 0px rgba(77, 148, 255, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box2{
        background: #A49DFA;
        // box-shadow: 2px 3px 8px 0px rgba(164, 157, 250, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box3{
        background: #FC809F;
        // box-shadow: 2px 3px 8px 0px rgba(252, 128, 159, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box4{
        background: #FFD98C;
        // box-shadow: 2px 3px 8px 0px rgba(255, 217, 140, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box5{
        background: #8AE6C7;
        // box-shadow: 2px 3px 8px 0px rgba(138, 230, 199, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box6{
        background: #E19564;
        // box-shadow: 2px 3px 8px 0px rgba(225, 149, 100, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box7{
        background: #BF6E9B;
        // box-shadow: 2px 3px 8px 0px rgba(191, 110, 155, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box8{
        background: #CECE7E;
        // box-shadow: 2px 3px 8px 0px rgba(206, 206, 126, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box9{
        background: #FF9F7F;
        // box-shadow: 2px 3px 8px 0px rgba(255, 159, 127, 0.5), -2px -2px 8px 0px #FFFFFF;
      }
      .icon-box10{
        background: #91C2F2;
        // box-shadow: 2px 3px 8px 0px rgba(145, 194, 242, 0.5), -2px -2px 8px 0px #FFFFFF;
      }

    }
    .item-content{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .item-icon {
      font-size: 24px;
      color: #FFFFFF;
    }
    .item-title{
      height: 22px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
      line-height: 22px;
    }
    .item-desc{
      font-weight: 400;
      color: #636E95;
      font-family: PingFangSC-Regular, PingFang SC;
      font-size: 12px;
    }
    .click-modal {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      position: absolute;
      top: 192px;
      left: 27px;
      right: 27px;
      padding-bottom: 30px;
      background: #F7F9FA;
      img {
        width: 564px;
        height: 89px;
        margin-bottom: 6px;
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      // height: 100%;
    }
  }
</style>
