<template>
  <div class="intelligent_decision">
      <!-- 智能决策 -->
      <Header></Header>
      <div class="content">
        <!-- 智能决策 -->
          <div class="decision-container">
              <div class="nav">智能决策</div>
              <div class="top">
                  <img src="../../../src/static/img/decision/top@2x.png"/>
              </div>
              <div class="middle">
                  <div class="title">
                      <p>智能诊断</p>
                  </div>
                  <div class="chart">

                  </div>
                  <div class="info">
                      <img class="left" src="../../../src/static/img/decision/middle@2x.png"/>
                      <div class="right">
                          <ul>

                          </ul>
                      </div>
                  </div>
              </div>
              <div class="bottom">
                  <div>
                      <img src="../../../src/static/img/decision/graph1@2x.png"/>
                      <img src="../../../src/static/img/decision/graph2@2x.png"/>
                  </div>
                  <div>
                      <img src="../../../src/static/img/decision/graph3@2x.png"/>
                      <img src="../../../src/static/img/decision/graph4@2x.png"/>
                  </div>
                  <div>
                      <img src="../../../src/static/img/decision/graph5@2x.png"/>
                      <img src="../../../src/static/img/decision/graph6@2x.png"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Header from "../../components/HeaderDefault"
export default {
  name:"index",
  components:{Header}
}
</script>

<style lang="scss" scoped>
.intelligent_decision{
  .content{
    min-height: calc(100vh - 56px);
      .decision-container {
          padding: 0 24px 24px;
          width: 1440px;
          margin: 0 auto;

          .nav {
              padding: 22px 24px;
              font-size: 20px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #212121;
          }

          .top {
              > img {
                  width: 1392px;
                  height: 180px;

              }
          }

          .middle {
              padding-bottom: 24px;
              background: #FFFFFF;

              .title {
                  padding: 12px 24px;
                  border-bottom: 1px solid #F0F0F0;

                  >p {
                      font-size: 16px;
                      font-family: PingFangSC-Medium, PingFang SC;
                      font-weight: 500;
                      color: #212121;
                  }
              }

              .left {
                  width: 666px;
                  height: 326px;
              }
          }

          .bottom {
              > div {
                  margin-top: 16px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;

                  > img {
                      width: 684px;
                      height: 354px;
                  }
              }
          }
      }
  }
}
</style>
