<template>
    <div class="sass-header">
        <div class="header-left">
            <div class="mark-logo">
                <img src="../assets/img/header/rectangle@2x.png" alt="">
                <div>
                    邓老凉茶
                    <!-- <i class="iconfont icondown"></i> -->
                </div>
            </div>
        </div>
        <div class="control">
            <div class="search" v-if="search">
                <Input @on-blur="search=!search" class="input-search" type="text" placeholder="输入关键词进行搜索...">
                    <img src="../static/img/header/search@2x.png" alt="" slot="prefix">
                </Input>
            </div>
            <div class="search-icon" v-else @click="search=!search">
                <i class="iconfont iconSearch"></i>
            </div>
            <div class="service">
                <i class="iconfont iconbangzhuline"></i>
            </div>
            <div class="alarm">
                <i class="iconfont icontixing"></i>
                <div class="group"></div>
            </div>
            <div class="column"></div>
            <div class="avatar" @click="select=!select">
                <template v-if="flag==1">
                    <img class="user" src="../assets/img/login/head2.png" alt="">
                    <span>企业主</span>
                </template>
                <template v-else-if="flag==2">
                    <img class="user" src="../assets/img/login/head3.png" alt="">
                    <span>数据管理员</span>
                </template>
                <template v-else>
                    <img class="user" src="../assets/img/login/head1.png" alt="">
                    <span>分析师</span>
                </template>
                <!-- <img class="triangle" src="../assets/img/header/triangle@2x.png" alt=""> -->
                <i class="iconfont icondown" :class="[select?'iconshouqi':'iconzhankai']" @click.stop="select=!select"></i>
                <ul ref="select" class="select-box" v-if="select">
                    <li @click="logout">退出登录</li>
                </ul>
            </div>
        </div>
<!--        <BackTop :bottom="8" :right="8"></BackTop>-->
    </div>
</template>

<script>
    export default {
        name: "DefaultHeader",
        props: {
            target: {
                type: String
            }
        },
        data() {
            return {
                flag: localStorage.getItem("dashboard"),
                search:false,
                select:false
            };
        },
        methods: {
            logout(){
                this.$router.push({path:'/'})
            }
        }
    };
</script>

<style lang="scss" scoped>
    .sass-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        padding: 0 24px;

        .header-left {
            display: flex;
            align-items: center;

            .mark-logo {
                display: flex;
                align-items: center;
                img{
                    width: 40px;
                    height: 40px;
                    margin-right: 8px;
                }
                > span {
                    height: 26px;
                    font-size: 18px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 26px;
                }

                > div {
                    height: 22px;
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;

                    > i {
                        font-size: 8px;
                    }
                }
            }


        }

        .control {
            display: flex;
            // justify-content: flex-end;
            align-items: center;
            .search {
                cursor: pointer;
                .input-search {
                    width: 360px;
                    height: 32px;
                }
                img {
                    width: 24px;
                    height: 24px;
                    margin-top: 4px;
                    padding: 2px;
                    opacity: 0.4;
                    color: #242F57;
                }
            }
            .search-icon,.service, .alarm {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                margin-left: 8px;
                // background: rgba(255, 255, 255, 0.5);
                // box-shadow: 4px 4px 8px 0px rgba(36, 47, 87, 0.06), -4px -4px 9px 0px rgba(255, 255, 255, 0.59);
                // border: 1px solid #FFFFFF;
                // border-radius: 50%;
                cursor: pointer;

                > i {
                    color: #7C88B1;
                    font-size: 24px;
                }

                &:hover {
                    color: #2373FF;
                }
            }

            .alarm {
                position: relative;

                .group {
                    position: absolute;
                    width: 5px;
                    height: 5px;
                    background: #F54A45;
                    border-radius: 50%;
                    top: 8px;
                    right: 8px;
                }
            }

            .column {
                width: 1px;
                height: 32px;
                margin: 0 24px;
                background: #EAEDF7;
            }
            .avatar {
                position: relative;
                display: flex;
                align-items: center;
                height: 40px;
                cursor: pointer;
                user-select: none;
                .user {
                    width: 40px;
                    height: 40px;
                    margin-right: 8px;
                    box-shadow: 4px 4px 8px 0px rgba(36, 47, 87, 0.2);
                    border-radius: 20px;
                    border: 1px solid #FFFFFF;
                }

                span {
                    display: inline-block;
                    height: 26px;
                    font-size: 18px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 26px;
                }

                .triangle {
                    width: 16px;
                    height: 16px;
                    margin-left: 8px;
                    color: #7C88B1;
                    line-height: 16px;
                }
                .iconshouqi{
                    .select-box{
                        display: block;
                    }
                }
                .iconzhankai{
                    .select-box{
                        display: none;
                    }
                }
                .select-box{
                    position: absolute;
                    top: 50px;
                    right: -22px;
                    width: 160px;
                    background: #FFFFFF;
                    box-shadow: 3px 4px 16px 0px rgba(134, 143, 191, 0.2);
                    border-radius: 4px;
                    li{
                        height: 43px;
                        padding-left:16px;
                        line-height: 43px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        &:hover{
                            color: #2373FF;
                        }
                    }
                }
            }
        }
    }
</style>
