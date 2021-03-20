<template>
  <div class="m-p-kol">
    <div class="m-p-target-title">
      KOL资源
      <Poptip popper-class="saas-poptip small" placement="right-start">
        <i class="iconfont iconguanyu tip-icon blue-tip-icon"></i>
        <div slot="content">
          <p>媒介资源库，提供具体媒介资源的详细信息，包括基础数据、历史投放效果和合作方案等，以供品牌方比较分析并联系合作</p>
        </div>
      </Poptip>
    </div>
    <div class="subTitle">抖音媒介资源是品牌本次投放方案的最优选择，“邓荣”的投放效果表现最优。基于分析，“李刚”性价比最高，可作为比较和备选方案。</div>
    <Tabs @on-click="getTab" class="">
      <TabPaneItem :name="it" :label="it" v-for="it in tabs" :key="it"/>
    </Tabs>
  </div>
</template>

<script>
  import TabPaneItem from './TabPaneItem';

  export default {
    name: "index",
    components: {TabPaneItem},
    data() {
      return {
        tabs: ['短视频', '社交传媒', '大众传媒', '体验事件', '促销', '在线社交媒体', '公共关系和宣传', '网站', '其他'],
      }
    },
    mounted() {
    },
    methods: {
      getTab(name) {
        console.log(name)
      },
    },
    computed: {},
  };
</script>

<style scoped lang="scss">
  .subTitle {
    margin-top: 8px;
    margin-bottom: 24px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #636E95;
    line-height: 20px;
  }

  .m-p-kol {
    width: 100%;
    img {
      width: 100%;
      display: block;
    }
    // height: 952px;
    background: #FFFFFF;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
    padding: 24px;
    .m-p-target-title {
      font-size: 16px;
      font-weight: 500;
      color: #242F57;
      margin-bottom: 16px;
      span {
        cursor: pointer;
        position: relative;
        .m-pie-tip {
          position: absolute;
          left: 22px;
          top: 0;
          width: 200px;
          background: rgba(219, 234, 255, 0.94);
          border-radius: 8px;
          border: 1px solid #4D94FF;
          font-size: 12px;
          font-weight: 400;
          color: #636E95;
          line-height: 17px;
          padding: 16px;
          text-align: justify;
        }
      }
    }
  }
</style>
