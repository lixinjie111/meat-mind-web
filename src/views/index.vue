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
    </div>
</template>

<script>
    import video from '../../src/static/video/video.mp4'

    export default {
        name: 'index',
        data() {
            return {
                src: video
            }
        },
        methods: {
            go() {
                this.$router.push({name: "home"})
            }
        }
    }
</script>

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
    }
</style>
