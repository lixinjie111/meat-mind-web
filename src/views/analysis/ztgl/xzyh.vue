<template>
  <div ref="yhfx" class="yhfx">
    <div id="xzyh">
      <img src="../../../static/img/analysis/yhfx.png" alt="">
      <img src="../../../static/img/analysis/xzyh.png" alt="" />
    </div>
    <div id="ztqs">
      <img src="../../../static/img/analysis/ztqs.png" alt="" />
    </div>
    <div id="zzts">
      <img src="../../../static/img/analysis/zzts.png" alt="" />
    </div>
    <div id="yhlc">
      <img src="../../../static/img/analysis/yhlc.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
    .yhfx{
        height:100%;
        overflow-y: scroll;
        position: relative;
        img{
            width: 100%;
        }
            div{
                width: 100%;
                // height: 1000px;
            }
            #xzyh{
                // padding: 0 24px;
                // border:1px solid yellowgreen;
            }
            #ztqs{
                padding: 0 24px;
                // border:1px solid blue;
            }
            #zzts{
                padding: 0 24px;
                //  border:1px solid green;
            }
            #yhlc{
                padding: 0 24px;
                // border:1px solid yellow;
            }
    }
</style>
