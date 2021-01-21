<template>
  <div class="yhfq">
      <div class="list" v-if="page1">
        <img src="../../../static/img/tool/yhfq/list1.png" alt="">
        <div class="create" @click="create"></div>
        <div class="page2" @click="toPage2"></div>
        <!-- <div class="qdlj-table">
          <Table :columns="columns" :data="data">
            <template slot-scope="" slot="title">
              <div class="operation">
                <svg id="icon-right-circle-fill" viewBox="0 0 1024 1024"><path d="M512 972.8a460.8 460.8 0 1 1 0-921.6 460.8 460.8 0 0 1 0 921.6z m11.6224-384l1.1776 119.808c0 1.1776 0.4096 2.304 1.1776 3.1744a4.608 4.608 0 0 0 6.5024 0.3584L752.4864 512a4.7104 4.7104 0 0 0 0-6.9632L532.48 304.9472a4.608 4.608 0 0 0-3.072-1.2288 4.608 4.608 0 0 0-4.608 4.6592l-1.1776 118.784H296.704a4.608 4.608 0 0 0-4.608 4.7104v152.2688c0 2.56 2.048 4.6592 4.608 4.6592h226.9184z"></path></svg>
              </div>
            </template>
            <template slot-scope="" slot="number">
              <div class="operation"></div>
            </template>
            <template slot-scope="" slot="operation">
              <div class="operation"></div>
            </template>
          </Table>
          <div class="page-box">
            <Page :current="currentPage" :total="totalPage" :page-size="pageSize" @on-change="changePage"/>
          </div>
        </div> -->
      </div>
      <div class="list" v-if="page2">
        <img src="../../../static/img/tool/yhfq/list2.png" alt="">
        <div class="create" @click="create"></div>
        <div class="page1" @click="toPage1"></div>
      </div>
      <Modal title="通过哪种方式进行标签的创建" class-name="create-fq-modal" v-model="createModal" footer-hide>
          <img src="../../../static/img/tool/yhfq/create1@2x.png" alt="" @click="userBehavior">
          <img class="img2" src="../../../static/img/tool/yhfq/create2@2x.png" alt="" @click="userId">
      </Modal>
      <Modal v-model="byBehavior" class-name="create-by-behavior" footer-hide :closable="false">
        <div class="content">
          <div class="close-btn" @click="byBehavior = false"></div>
          <div class="behavior1" v-show="behavior1" >
            <img src="../../../static/img/tool/yhfq/bybehavior2@2x.png" alt="">
            <div class="next"  @click="behavior1=false;behavior2=true"></div>
          </div>
          <div class="behavior2" v-show="behavior2">
            <img src="../../../static/img/tool/yhfq/bybehavior@2x.png" alt="">
            <div class="confirm"  @click="byBehavior = false"></div>
          </div>
          <div class="cancel"  @click="byBehavior = false"></div>
        </div>
      </Modal>
      <Modal v-model="byUserId" class-name="create-by-userid" footer-hide :closable="false">
        <div class="content">
          <div class="close-btn" @click="byUserId = false"></div>
          <img src="../../../static/img/tool/yhfq/byuserId@2x.png" alt="">
          <div class="cancel"  @click="byUserId = false"></div>
          <div class="confirm"  @click="byUserId = false"></div>
        </div>
      </Modal>
  </div>
</template>

<script>
export default {
  name:"yhfq",
  data(){
    return {
      page1:true,
      page2:false,
      createModal:false,
      byBehavior:false,
      byUserId:false,
      behavior1:true,
      behavior2:false,
      currentPage:1,
      totalPage:25,
      pageSize:15,
      columns: [
        {
          title: "分群",
          slot: "title",
          tooltip:true
        },
        {
          title: "人数",
          slot: "number",
          tooltip:true
        },
        {
          title: "创建方式",
          key: "type",
        },
        {
          title: "创建者",
          key: "user",
        },
        {
          title: "更新方式",
          key: "change",
        },
        {
          title: "操作",
          slot: "operation",
          width:120,
          align:"center"
        },
      ],
    }
  },
  methods:{
    create(){
      this.createModal = true
    },
    toPage1(){
      this.page1=true
      this.page2=false
    },
    toPage2(){
      this.page1=false
      this.page2=true
    },
    changePage(page){
      this.currentPage = page;
      page == 1 ? this.data = this.data1 : this.data = this.data2;
    },
    userBehavior(){
      this.createModal = false
      this.byBehavior = true
      this.behavior1 = true
      this.behavior2 = false
      this.byUserId = false

    },
    userId(){
      this.createModal = false
      this.byBehavior = false
      this.byUserId = true
    }
  }
}
</script>

<style scoped lang="scss">
.yhfq{
  width: 100%;
  height: 100%;
  .list{
    position: relative;
    img{
      width: 100%;
      // height: 100%;
    }
    .create{
      position: absolute;
      top: 84px;
      left: 48px;
      width: 94px;
      height: 32px;
      // border: 1px solid red;
      cursor: pointer;
    }
    .page1{
      position: absolute;
      width: 80px;
      height: 46px;
      right: 46px;
      bottom: 200px;
      cursor: pointer;
    }
    .page2{
      position: absolute;
      width: 80px;
      height: 46px;
      right: 50px;
      bottom: 42px;
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss">
      .create-fq-modal {
        display: flex; 
        align-items: center;
        justify-content: center;
        .ivu-modal {
            top: 0;
            width: 560px !important;
            height: 339px;
            background: #ffffff;
            border-radius: 4px;
        }
        .ivu-modal-body {
            padding: 25px;
            img{
              width: 511px;
              height: 97px;
              margin-bottom: 25px;
              cursor: pointer;
            }
            .img2{
              height: 114px;
            }
        }
    }
    .create-by-behavior{
        display: flex; 
        align-items: center;
        justify-content: center;
        .ivu-modal {
            top: 0;
            width: 560px !important;
            height: 618px;
            background: #ffffff;
            border-radius: 4px;
        }
          .content {
            position: relative;
              width: 560px;
              height: 618px;

            img{
              width: 560px;
              height: 618px;
              cursor: pointer;
            }
            .next,.confirm{
              position: absolute;
              bottom: 8px;
              right: 16px;
              width: 60px;
              height: 26px;
              cursor: pointer;
              // border: 1px solid red;
            }
            .cancel{
              position: absolute;
              bottom: 8px;
              right: 84px;
              width: 50px;
              height: 24px;
              cursor: pointer;
              // border: 1px solid green;
            }

            .close-btn {
                position: absolute;
                right: 12px;
                top: 10px;
                width: 24px;
                height: 24px;
                cursor: pointer;
                // border: 1px solid red;
            }
        }
        .ivu-modal-body {
            padding: 0;

        }
    }
    .create-by-userid{
        display: flex; 
        align-items: center;
        justify-content: center;
        .ivu-modal {
            top: 0;
            width: 560px !important;
            height: 618px;
            background: #ffffff;
            border-radius: 4px;
        }
        .ivu-modal-body {
            padding: 0;
        }
          .content {
            position: relative;
              width: 560px;
              height: 618px;

            img{
              width: 560px;
              height: 618px;
              cursor: pointer;
            }

            .confirm{
              position: absolute;
              bottom: 8px;
              right: 16px;
              width: 60px;
              height: 26px;
              cursor: pointer;
              // border: 1px solid red;
            }
            .cancel{
              position: absolute;
              bottom: 8px;
              right: 84px;
              width: 50px;
              height: 24px;
              cursor: pointer;
              // border: 1px solid green;
            }
            .close-btn {
                position: absolute;
                right: 12px;
                top: 10px;
                width: 24px;
                height: 24px;
                cursor: pointer;
                // border: 1px solid red;
            }
          }
    }
</style>