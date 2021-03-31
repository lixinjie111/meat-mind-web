<template>
  <DetailsPage title="自定义客群" backname="user">
    <div class="defined-customer">
      <div class="d-c-container">
        <div class="defined-title">
          <span>有效行业数据</span>
          32,124,423
          <div class="message">
            <i class="iconfont iconguanyu tip-icon"></i>
            <div class="image"></div>
          </div>
        </div>
        <div class="name">
          <p>标题名称</p>
          <Input placeholder="请输入内容" style="width: 540px" />
        </div>
        <div class="rule">
          <p>
            客群规则
            <span @click="edit">编辑</span>
          </p>
          <Input type="textarea" :placeholder="plObj" :row="6" style="width: 540px;height:160px" />
        </div>
      </div>
      <div class="d-c-btn">
        <div class="cancel" @click="cancel">取消</div>
        <div class="create" @click="create">创建</div>
      </div>
    </div>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../layouts/DetailsPage";
export default {
  name: "defined",
  components: { DetailsPage },
  data(){
    return{
      plObj:''
    }
  },
  created(){
    var parm = this.$route.query.parmObj ? this.$route.query.parmObj : {til1:'',til2:''};
    this.plObj = `${parm.til1}\n\n${parm.til2}`
  },
  methods:{
      edit(){
          this.$router.push({name:"user-edit"})
      },
      cancel(){
        this.$router.push({name:"user"})
      },
      create(){
        this.$router.push({name:"user"})
      }
  }
};
</script>

<style scoped lang="scss">
.defined-customer {
  .d-c-container {
    height: 510px;
    padding: 24px;
    margin-bottom: 24px;
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    border-radius: 12px;
    border: 1px solid #eaedf7;
    .defined-title {
      display: flex;
      height: 16px;
      margin-bottom: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2373ff;
      line-height: 16px;
      > span {
        color: #242f57;
        margin-right: 6px;
      }
      .message {
        position: relative;
        color:#7C88B1;
        &:hover{
          color: #2373FF;
        }
        > i {
          margin-left: 6px;
          cursor: pointer;
        }
        .image {
          display: none;
          position:absolute;
          top:-40px;
          left:24px;
          width: 612px;
          height: 286px;
          background: url("../../assets/img/user/mesage@2x.png") no-repeat
            center center / 612px 286px;
          z-index: 999;
        }
        &:hover {
          .image {
            display: block;
          }
        }
      }
    }
    .name,
    .rule {
      margin-bottom: 24px;
      > p {
        height: 16px;
        margin-bottom: 8px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636e95;
        line-height: 16px;
      }
    }
    .rule {
      ::v-deep textarea.ivu-input {
        height: 160px;
      }
      > p {
        > span {
          margin-left: 10px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #2373ff;
          cursor: pointer;
        }
      }
    }
  }
  .d-c-btn {
    height: 32px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    .cancel,
    .create {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 32px;
      border-radius: 4px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      cursor: pointer;
    }
    .cancel {
      border: 1px solid #97A0C3;
      color: #242F57;
      margin-right: 16px;
    }
    .create {
      background: #2373FF;
      box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
      color: #ffffff;

    }
  }
}
</style>