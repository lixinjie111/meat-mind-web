<template>
  <div class="analyst-manage-box">
    <div class="header-nav">
      <div class="back" @click="goBack"><img src="../../../assets/img/dashboard/back.png" /></div>
      <div class="dliver"></div>
      <p>添加报表/编辑</p>
    </div>
      <div class="imgContainer">
         <div class="btn" @click="create"></div>
        <img src="../../../assets/img/dashboard/kanban/addEdit.png" alt="">
      </div>
  </div>
</template>

<script>
import TableModel from "../base/TableModel";
export default {
    name: "manage",
    components:{TableModel},
    data() {
    return {
    };
    },
    methods:{
        create(){
           this.$router.push({
            path:'/dashboard/editPanel'
          })
        },
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  display: block;
}
.analyst-manage-box {
  padding: 24px;
  padding-top: 0;
  .header-nav {
    display: flex;
    align-items: center;
    position: relative;
    .back {
      width: 24px;
      cursor: pointer;
    }
    .dliver {
      width: 1px;
      height: 21px;
      background: #eaedf7;
      margin: 0 16px;
    }
    .blue-btn {
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 102px;
        height: 32px;
        // padding: 0 16px;
        margin-right: 8px;
        background: #2373ff;
        border-radius: 4px;
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
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          cursor: pointer;
        }
      }
  }
  .imgContainer{
    position: relative;
    .btn{
      position: absolute;
      width: 68px;
      height: 32px;
      top:298px;
      right: 40px;
      cursor: pointer;
    }
  }
}
</style>
