<template>
    <div class="xtjc">
        <img src="../../../static/img/datacenter/xtjc/xtjc@2x.png" alt="">
        <div class="detail">
            <div class="show">
                PhysioLAB 无线生理仪是德国 ERGONEERS 
                公司新推出的无线人体生理数据记录系统，可以记录所有的人体生理相关的数据，
                包括配 ECG 心电、EEG 脑电、EMG 肌电、
                Temp 温度、Resp 呼吸、ACC 加速度、眼电 EOG、EGG 胃电、血压 BPR、
                Handgrip 抓握力等传感器，被广泛应用于
                 心理认知、人因工程、用户体验、运动科学、医疗康复等领域...
                 <span>详情</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .xtjc {
        position: relative;
        width: 100%;
        height: 100%;
        img {
            width: 100%;
            // height: 100%;
        }
        .detail{
            position: absolute;
            top: 152px;
            left: 45px;
            width: 360px;
            height: 180px;
            border-radius: 4px;
            // border: 1px solid red;
            cursor: pointer;
            .show{
                display: none;
            }
            &:hover{
                .show{
                    display: block;
                    width: 362px;
                    height: 180px;
                    padding: 10px;
                    color:#FFFFFF;
                    background: #6D6E6D;
                    border-radius: 4px;
                    span{
                        float: right;
                        margin-top: 14px;
                        margin-right: 4px;
                        color: #10eee6;
                    }
                }
            }
        }
    }
</style>
