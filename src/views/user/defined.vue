<template>
  <DetailsPage title="自定义客群" backname="user">
    <div class="defined-customer">
      <div class="d-c-container">
        <div class="defined-title">
          <span>有效行业数据</span>
          32,124,423
          <div class="message">
            <Icon type="ios-information-circle-outline" color="#7C88B1" />
            <div class="image"></div>
          </div>
        </div>
        <div class="name">
          <p>标题名称</p>
          <Input placeholder style="width: 540px" />
        </div>
        <div class="rule">
          <p>
            客群规则
            <span @click="edit">编辑</span>
          </p>
          <Input type="textarea" :row="6" style="width: 540px;height:160px" />
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
    background: #ffffff #d8d8d8;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
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
      border-radius: 8px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      cursor: pointer;
    }
    .cancel {
      border: 1px solid #c6cbde;
      color: #636e95;
      margin-right: 16px;
    }
    .create {
      background: #3366ff;
      color: #ffffff;

    }
  }
}
</style>