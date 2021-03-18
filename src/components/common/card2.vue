<template>
  <div class="card_container" ref="card_container" :class="{'removeMb':cardData.id==2||cardData.id==3}">
      <div class="info_lef">
          <img :src="cardData.jyIcon" alt="" srcset="" class="jyIcon">
      </div>
      <div class="txt_rig">
          <div class="til_txt">{{cardData.til}}</div>
          <div class="til_desc">
              <span class="til_num">{{cardData.jyNum}}</span>
              <span class="til_unit">{{cardData.jyUnit}}</span>
          </div>
      </div>
      <Poptip popper-class="saas-poptip small" placement="right-start" style="margin-right:10px;">
        <i :class="['iconfont','icongengduo',cardData.ysIcon]"></i>
        <div slot="content">
            <p>环比<i :class="['iconfont','iconshangsheng','upnumIcon']"></i><span class="upnum">{{cardData.upper}}</span></p >
            <p>同比<i :class="['iconfont','iconxiajiang','downnumIcon']"></i><span class="downnum">{{cardData.downper}}</span></p >
        </div>
      </Poptip>
  </div>
</template>

<script>
export default {
  name: "card2",
  data() {
    return {

    };
  },
  props: {
    cardData: {
      type: Object,
      default: {},
    }
  },
  created() {
    
  },
  mounted() {
      this.setStyle();
  },
  methods: {
    setStyle(){
        var domitem = this.$refs.card_container;
        console.log(domitem,'domitem')
        var styData = this.cardData;
        domitem.style=` background:${styData.bgc};color:${styData.fColor};`;
    }
  },
};
</script>

<style scoped lang="scss">
.card_container{
    width: 47%;
    border-radius: 8px;
    padding: 30px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    position: relative;
    .info_lef{
        width: 52px;
        height: 72px;
        margin-right: 16px;
        background: #FFFFFF;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        .jyIcon{
            display: block;
            width:24px;
            height: 24px;
        }
    }
    .txt_rig{
        flex: 1;
        .til_txt{
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            margin-bottom: 6px;
        }
        .til_desc{
            display: flex;
            align-items: baseline;
            .til_num{
                font-size: 28px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
            }
            .til_unit{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
            }
        }
    }
    .ivu-poptip{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .bgi1{
        color: #FE774B;
    }
    .bgi2{
        color: #2373FF;
    }
    .bgi3{
        color: #1DCEC3;
    }
    .bgi4{
        color: #F16E84;
    }
}
.removeMb{
    margin-bottom: 0px;
}
</style>
