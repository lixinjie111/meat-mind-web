<template>
    <div class="add-launch-box" :style="'top:'+item.top+'px'">
       <div class="add-title">{{item.time}}</div>
       <div class="add-content">
           <div class="top">
               <img :src="item.img"/>
               <div>{{item.title}}</div>
           </div>
           <div class="bottom">
               <Upload action="/" :before-upload="handleUpload">
                   <div class="upload-box">
                      <i class="iconfont icontianjia"></i>
                      <p>上传素材</p>
                      <p>图片尺寸{{item.size}}</p>
                   </div>
               </Upload>
               <div v-if="file">{{file.name}}</div>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        name: "AddLaunch",
        data() {
            return {
                file: null
            }
        },
        props: {
            item: {
                type: Object,
                default: ()=> {}
            }
        },
        methods: {
            handleUpload (file) {
                this.file = file;
                return false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .add-launch-box {
        position: absolute;
        width: 132px;
        border-radius: 8px;
        border: 1px solid #EAEDF7;

        .add-title {
            width: 132px;
            height: 40px;
            line-height: 40px;
            background: #F4F7FC;
            border-bottom: 1px solid #EAEDF7;
            border-radius: 8px 8px 0px 0px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            text-align: center;
        }

        .add-content {
            .top {
                padding: 8px;
                display: flex;

                >img {
                    margin-right: 4px;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                }

                >div {
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: rgba(0, 0, 0, 0.85);
                }
            }

            .bottom {
                padding: 8px;

                .upload-box{
                    width: 116px;
                    height: 116px;
                    background: #F4F7FC;
                    border-radius: 4px;
                    border: 1px dashed #D2D6E4;
                    text-align: center;
                    cursor: pointer;

                    >i {
                        display: block;
                        margin-top: 28px;
                        margin-bottom: 4px;
                        font-size: 14px;
                        color: #97A0C3;
                    }

                    >p {
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #97A0C3;

                        &:first-child {
                            font-size: 16px;
                            margin-bottom: 8px;
                        }
                    }
                }
            }
        }
    }
</style>