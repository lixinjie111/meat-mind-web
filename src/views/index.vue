<template>
    <div class="index-container">
        <div class="header-box">
            <img src="../../src/static/img/index/header@2x.png">
        </div>
        <div class="title-box">
            <div class="info">
                <div class="title">
                    <img class="top" src="../static/img/index/title@2x.png">
                    <img class="bottom" src="../static/img/index/button@2x.png" @click="go">
                </div>
                <div class="video">
                    <video class="player" width="100%" height="100%" autoplay loop muted :src="src"></video>
                </div>
            </div>
        </div>
        <div class="content-top-box">
            <img src="../../src/static/img/index/content1@2x.png"/>
        </div>
        <div class="content-bottom-box">
            <img src="../../src/static/img/index/content2@2x.png"/>
        </div>
        <div class="footer-box">
            <img src="../../src/static/img/index/footer@2x.png"/>
        </div>
        <Modal
            title="欢迎使用智慧营销"
            v-model="showModal"
            footer-hide
            class-name="vertical-center-modal">
            <div class="middle">
                <div class="select">
                    请选择您的身份
                    <Select v-model="model1" @on-change="change" style="width:200px">
                        <Option v-for="item in optList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                </div>
                <div>*根据您的身份，我们为您准备了不同的展示重点</div>
            </div>
            <div class="footer">
                <div class="confirm" @click="confirm">确认</div>
            </div>
        </Modal>
        <div class="seconde-step" v-show="showImg">
            <img src="../static/img/login/welcome@2x.png" alt="" @click="jump">
        </div>
    </div>
</template>

<script>
    import video from '../../src/static/video/video.mp4'

    export default {
        name: 'index',
        data() {
            return {
                src: video,
                  showModal: false,
                  model1:"分析师",
                  optList:[
                      {value: '分析师',
                        label: '分析师'},
                        {
                        value: '企业主',
                        label: '企业主'
                        }
                  ],
                  showImg:false
            }
        },
        methods: {
            go() {
                this.showModal = true
                // this.$router.push({name: "home"})
            },
            change(val){
                console.log(val)
                this.model1 = val
            },
            confirm(){
                this.showModal = false 
                this.showImg = true
            },
            jump(){
                this.showImg = false
                console.log(this.model1)
                if(this.model1=="企业主"){
                    this.$router.push({name: "intelligent-decision"})
                }else{
                    this.$router.push({name: "home"})
                }
                
            }
        }
    }
</script>

<style lang="scss">
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
    width: 684px !important;
    min-height: 353px;
    background: #ffffff;
    border-radius: 4px;
    .ivu-modal-content {
      min-height: 353px;
      .ivu-modal-close{
        top: 16px;
        right: 16px;
      }
      .ivu-modal-header {
        padding: 14px 32px;
        border-bottom: 1px solid #f2f3f4;
        .ivu-modal-header-inner {
          height: 29px;
          font-size: 21px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #25272b;
          line-height: 29px;
        //   text-align: center;
        }
      }
      .ivu-modal-body{
        padding: 0 32px 64px;
        .middle{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            height: 200px;
            .select{
                margin: 20px 0 40px;
            }
        }
        .footer {
            width: 100px;
            margin: 0 auto;
          text-align: center;
          > div {
            height: 32px;
            padding: 6px 26px;
            font-size: 14px;
            border-radius: 4px;
            cursor: pointer;
            vertical-align: top;
          }
          .confirm {
            color: #ffffff;
            background: #278fe0;
          }
        }
      }

    }
  }
}
</style>
<style scoped lang="scss">
    .index-container {
        .header-box {
            width: 100%;
            height: 80px;
            background: #FFFFFF;
            text-align: center;

            > img {
                width: 1440px;
                height: 80px;
            }
        }

        .title-box {
            background: linear-gradient(to right, #FFFFFF 50%, #F8FAFD 50%);
            width: 100%;
            height: 605px;

            .info {
                position: relative;
                margin: 0 auto;
                width: 1440px;
                height: 605px;

                .title {
                    position: absolute;
                    z-index: 10;
                    margin-left: 214px;
                    width: 381px;

                    .top {
                        margin-top: 107px;
                        width: 381px;
                        height: 332px;
                    }

                    .bottom {
                        margin-top: 33px;
                        width: 182px;
                        height: 48px;
                        cursor: pointer;
                    }
                }

                .video {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 937px;
                    height: 605px;
                    background: #F8FAFD;

                    .player {
                        margin: 51px 0 0 69px;
                        width: 868px;
                        height: 504px;
                    }
                }
            }
        }

        .content-top-box {
            width: 100%;
            height: 100%;
            text-align: center;
            background: #FFFFFF;

            > img {
                width: 1440px;
                height: 665px;
            }
        }

        .content-bottom-box {
            width: 100%;
            height: 100%;
            text-align: center;
            background: #F8FAFD;

            > img {
                width: 1440px;
                height: 1245px;
            }
        }

        .footer-box {
            width: 100%;
            height: 100%;
            text-align: center;
            background: #FFFFFF;

            > img {
                width: 1440px;
                height: 80px;
            }
        }

        .seconde-step{
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            // background: #f5f5f5;
            background: rgba(0,0,0,0.6);
            z-index: 1000;
            img{
                width: 862px;
                height: 554px;
                cursor: pointer;
            }
        }
    }
</style>
