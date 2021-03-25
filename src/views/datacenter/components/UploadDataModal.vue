<template>
  <div>
    <Modal v-show="ready" ok-text="确认上传" title="上传数据" @on-ok="onOk" :width="modalWidth" @on-visible-change="onVisibleChange" :value="visible" :closable="true">
      <template slot="close">
        <i class="iconfont iconClose" ></i>
      </template>
      <div class="row">
        <div class="required label">数据类型</div>
        <div class="content">
          <div :class="['type-content', { active: active === 1}]" @click="typeChange">
            <i class="iconfont iconjiegouhuashuju"></i>
            结构化数据
            <div class="triangle"><i class="iconfont iconduigou"></i></div>
          </div>
          <div :class="['type-content', { active: active === 2}]" @click="typeChange">
            <i class="iconfont iconfeijiegouhuashuju"></i>
            非结构化数据
            <div class="triangle"><i class="iconfont iconduigou"></i></div>
          </div>
        </div>
      </div>
      <div class="row" v-if="active === 2">
        <div class="required label">选择规则</div>
        <div class="content">
          <Select>
            <Option value="1">结构化处理-规则1</Option>
            <Option value="2">结构化处理-规则2</Option>
            <Option value="3">结构化处理-规则3</Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="required label">上传文件</div>
        <div class="content">
          <div class="file-content">
            <img src="../../../assets/img/datacenter/myData/xlsx.png" alt="">
<!--            <div class="text">仅支持.xlsx文件</div>-->
            <Button @click="uploadChange">选择文件</Button>
          </div>
        </div>
      </div>
      <div class="file-list">
        <div v-for="it in fileList" :key="it.name" class="file-item">
          <i class="iconfont iconfile"></i>
          {{it.name}}
          <div v-if="it.progress !==null" class="file-item-progress">
            <div class="file-item-bar"></div>
            <span>{{it.progress}}</span>
          </div>
        </div>
      </div>
    </Modal>
    <Uploading :visible="uploading" @select="onSelect"/>
    <UploadProgress :active="active" :visible="send" />
  </div>
</template>

<script>
import Uploading from './Uploading'
import UploadProgress from './UploadProgress'
const ready = 'ready'
const done = 'done'
const uploading = 'uploading'
const send = 'send'
const fileList = [{ name: '用户消费场景心智测试数据包.xlsx', progress: null }, { name: '青少年课堂应激行为测试数据包.xlsx', progress: '65%' }]
export default {
  props: ['visible'],
  components: { Uploading, UploadProgress },
  data(){
    return{
      upload: ready,
      send: false,
      active: 1,
      fileList: []
    }
  },
  methods: {
    onVisibleChange(v, result){
      this.upload = ready
      if(!v){
        this.fileList = []
        this.active = 1
        this.upload = send
      }

      this.$emit('onControlModal', v, result)
    },
    uploadChange(){
      this.upload = uploading
      this.fileList = fileList
    },
    onSelect(){
      this.upload = done
    },
    onOk(){
      this.upload = send
      this.send = true
      setTimeout(()=>{
        this.onVisibleChange(false, true)
        this.send = false
      }, 800)
    },
    typeChange(){
      this.active = this.active === 1 ? 2 : 1
    },
  },
  computed: {
    modalWidth(){
      return 400 / 144 * window.rem
    },
    ready(){
      return this.upload === ready || this.upload === done
    },
    uploaded(){
      return this.upload === done
    },
    uploading(){
      return this.upload === uploading
    },
  }
}
</script>

<style scoped lang="scss">
.row{
  .label{
    font-size: 12px;
    font-weight: 400;
    color: #636E95;
    margin: 24px 0 8px;
  }
  .required{
    &::before{
      content: "*";
      color: red;
    }
  }
  .content{
    display: flex;
    align-items: center;
    .type-content{
      width: 170px;
      height: 56px;
      border-radius: 8px;
      border: 1px solid #C6CBDE;
      margin-right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      .iconfont{
        font-size: 24px;
        margin-right: 8px;
      }
      .triangle {
        display: none;
        border-bottom: 20px solid #2373FF;
        border-left: 20px solid transparent;
        width: 0;
        height: 0;
        position: absolute;
        right: 0;
        bottom: 0;
        >.iconfont{
          position: absolute;
          left: -12px;
          bottom: -24px;
          color: #ffffff;
          font-weight: bolder;
          font-size: 14px;
        }
      }
      &:last-child{
        margin-right: 0;
      }
    }
    .type-content.active{
      border: 1px solid #2373FF;
      .triangle {
        display: block;
      }
      &:last-child{
        margin-right: 0;
      }
    }

    .file-content{
      width: 352px;
      height: 178px;
      background: #FFFFFF;
      border-radius: 8px;
      border: 1px solid #C6CBDE;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      >img{
        width: 80px;
        margin-bottom: 16px;
      }
      .text{
        font-size: 12px;
        font-weight: 400;
        color: #97A0C3;
        line-height: 14px;
        margin: 14px 16px;
      }
      button{
        width: 104px;
        height: 32px;
        background: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #97A0C3;
      }
    }
  }
}
.file-list{
  margin-top: 12px;
  .file-item{
    font-size: 14px;
    font-weight: 400;
    color: #242F57;
    margin-bottom: 16px;
    position: relative;
    .file-item-progress{
      .file-item-bar{
        height: 2px;
        background: #C6CBDE;
        position: relative;
        width: 100%;
        margin-top: 6px;
        &::before{
          content: "";
          position: absolute;
          display: inline-block;
          width: 65%;
          height: 2px;
          background: #2373FF;
        }
      }
      &>span{
        position: absolute;
        right: 0;
        top: 10px;
        font-size: 14px;
        font-weight: 400;
        color: #242F57;
        line-height: 16px;
      }
    }
  }
}

</style>
