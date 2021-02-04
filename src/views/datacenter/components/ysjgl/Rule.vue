<template>
  <div class="fxmx-rule">
<!--      <img src="../../../../static/img/datacenter/ysjgl/rule@2x.png" alt="">-->
<!--      <div class="back" @click="back"></div>-->
    <div class="result-box">
      <div class="title">
          <span class="rotate180">
            <i class="iconfont iconarrowRight" @click="resultShow = false"></i>
          </span>
        <span class="separate-line"></span>
        入库检验规则设置</div>
    </div>
    <div class="page-container">
      <div class="module-rule">
        <div class="module-rule-title">事件与事件属性的入库设置</div>
        <div class="module-rule-desc">上报事件属性的类型与「事件属性」已有事件的类型不一致时，系统将按规则尝试自动转换，如无法完成则视为异常数据不能入库。</div>
        <div class="link module-rule-link">查看规则 ></div>
      </div>
      <div class="module-rule">
        <div class="module-rule-title">IP 及域名黑名单设置</div>
        <div class="module-rule-desc">开启 IP 或域名黑名单可以帮助您过滤无效的数据，避免刷量数据对数据分析或事件量的影响。开关开启后立即生效，但不对历史数据进行处理。</div>
        <div class="divider mg-t-b"></div>
        <div >
          <div class="poll">IP 黑名单 <Switch  /></div>
          <Input type="textarea" class="module-area" :rows="4"/>
        </div>
        <div>
          <div class="poll">域名黑名单<Switch  /></div>
          <Input type="textarea" class="module-area" :rows="4"/>
        </div>
      </div>
      <div class="module-rule">
        <div class="module-rule-title">用户属性入库设置</div>
        <div class="module-rule-desc">上报用户属性的类型与「用户属性」已有事件的类型不一致时，系统将按规则自动转换，如无法自动转换则视为异常数据不能入库。</div>
        <div class="link module-rule-link">查看规则 ></div>
        <div class="divider mg-t-b"></div>
        <div class="user-box">
          <div class="user-item">
            <div>接收用户「设备 ID」</div>
            <div  class="user-item-desc">如：匿名 ID 或游客 ID，不符合以下规则时，不能入库</div>
            <div v-for="it in list" class="device-item-container" :key="it.name">
              <div class="device-item">
                <div class="device-item-name">{{it.name}}</div>
                <div class="device-item-desc">{{it.desc}}</div>
              </div>

            </div>
          </div>
          <div class="user-item">
            <div>接收用户「登录 ID」</div>
            <div class="user-item-desc">用户在产品内的唯一标示，不符合以下规则时，不能入库</div>
            <div v-for="it in list1" class="device-item-container" :key="it.name">
              <div class="device-item">
                <div class="device-item-name">{{it.name}}</div>
                <div class="device-item-desc">{{it.desc}}</div>
              </div>
            </div>
            <div class="link user-link">查看正则表达式常用规则说明 ></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Rule",
  data(){
      return{
        list: [
          { name: 'JS', desc: '未设置 任意格式的 ID 均可上报入库' },
          { name: 'IOS', desc: '未设置 任意格式的 ID 均可上报入库' },
          { name: 'ANDROID', desc: '未设置 任意格式的 ID 均可上报入库' },
          { name: 'MINI_APP', desc: '未设置 任意格式的 ID 均可上报入库' },
        ],
        list1: [
          { name: '规则', desc: '未设置 任意格式的 ID 均可上报入库' },
        ]
      }
  },
    methods:{
        back(){
            this.$router.push({name:"data-center-metax"})
        }
    }
}
</script>

<style scoped lang="scss">
.fxmx-rule{
    position: relative;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
    }
    .back{
        position: absolute;
        top: 22px;
        left: 24px;
        width: 26px;
        height: 26px;
        // border: 1px solid red;
        cursor: pointer;
    }
  .result-box {
    padding: 12px 24px 0;
    .title {
      font-size: 24px;
      font-weight: 500;
      color: #212121;
    }
    .rotate180{
      transform:rotate(180deg);
      display: inline-block;
      .iconfont{
        font-size: 24px;
      }
    }
    .separate-line{
      width: 1px;
      height: 20px;
      background: #EAEDF7;
      display: inline-block;
      margin: 0 10px;
    }
    .operation-section{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 12px 0;
    }
    .list {
      margin-top: 24px;
      padding: 12px 24px;
      background: #FFFFFF;
      box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      .page-box {
        margin-top: 10px;
        text-align: right;
      }
    }
  }
  .page-container {
    padding: 0 24px;
    .title{
      height: 64px;
      line-height: 64px;
      font-size: 20px;
      font-weight: 500;
      color: #242F57;
      padding: 24px;
    }
    .module-rule{
      background: #FFFFFF;
      box-shadow: 3px 5px 10px 0 rgba(121, 131, 168, 0.15);
      border-radius: 12px;
      border: 1px solid #EAEDF7;
      padding: 24px;
      margin: 16px 0;
      .module-rule-title{
        font-size: 16px;
        font-weight: 500;
        color: #242F57;
        line-height: 24px;
      }
      .module-rule-desc{
        font-weight: 400;
        color: #636E95;
        line-height: 22px;
        margin: 8px 0;
      }
      .module-rule-link{
        font-size: 14px;
        font-weight: 400;
        color: #2373FF;
        line-height: 22px;
      }
      .divider{
        border: 1px solid #EAEDF7;
      }
      .poll{
        padding: 24px 0 8px;
      }
      .mg-t-b{
        margin: 10px 0;
      }
      .module-area{
        box-shadow: 2px 2px 7px 0 rgba(210, 213, 225, 0.8), -2px -2px 7px 0px #FFFEFA;
        border-radius: 8px;
        border: 1px solid #C6CBDE;
      }
      .user-box{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .user-item{
          width: calc((100% - 24px) / 2);
          display: flex;
          flex-direction: column;
        }
        .user-item-desc{
          margin: 4px 0;
        }
        .user-link{
          font-weight: 400;
          margin-top: 16px;
        }
      }
      .device-item-container{
        padding: 0 16px;
        background: #F4F7FC;
      }
      .device-item{
        height: 56px;
        display: flex;
        align-items: center;
        border-bottom:1px solid #EAEDF7;
        .device-item-name{
          width: 40%;
          font-weight: 400;
          color: #242F57;
          line-height: 22px;
        }
        .device-item-desc{
          width: 60%;
          font-weight: 400;
          color: #C6CBDE;
          line-height: 22px;
        }
      }
    }
  }
  .no-padding{
    padding: 0 !important;
  }
  .link{
    color: #2373FF;
    cursor: pointer;
  }
}
</style>
