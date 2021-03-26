<template>
  <div class="analyst-manage-box">
    <div class="header-nav">
      <div class="back" @click="goBack"><img src="../../../assets/img/dashboard/back.png" /></div>
      <div class="dliver"></div>
      <p>新建看板</p>
    </div>
    <div class="header-title">
      <div class="left">
        <Input v-model="value" placeholder="2020年上半年XX电商会" />
      </div>
      <div class="right">
        <span>创建日期：2020/01/01</span>
        <span>更新日期：2020/03/01</span>
        <div class="btn btn1" @click="down">下载报表</div>
        <div class="btn"  @click="add">添加报表</div>
      </div>
    </div>
      <div class="imgContainer">
         <div class="cover" @click="create">
           <div class="text1">暂无报表</div>
           <div class="text2" @click="add">添加报表</div>
         </div>
        <img src="../../../assets/img/dashboard/kanban/new.png" alt="">
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
        down(){
          this.$router.push({
            path:'/dashboard/editDown'
          })
        },
        add(){
          this.$router.push({
            path:'/dashboard/addManage'
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
  .header-title{
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .left{
      width: 352px;
    }
    .right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span{
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        margin-left: 24px;
      }
      .btn{
        width: 96px;
        height: 32px;
        background: #2373FF;
        box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
        border-radius: 4px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 32px;
        text-align: center;
        cursor: pointer;
        margin-left: 12px;
        &.btn1{
          background: #FFFFFF;
          border: 1px solid #97A0C3;
          color: #242F57;
          margin-left: 24px;
        }
      }
    }
  }
  .imgContainer{
    position: relative;
    .cover{
      position: absolute;
      width: 1104px;
      height: 384px;
      top:72px;
      right: 0px;
      left:0;
      margin:auto;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.3);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .text1{
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 26px;
      }
      .text2{
       font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #2373FF;
      line-height: 22px;
      cursor: pointer;
      }
    }
  }
}
</style>
