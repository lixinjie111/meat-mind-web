<template>
  <div class="portrait-matching">
    <div class="m-p-target-title">
      媒介用户画像匹配度
    </div>
    <div class="subTitle">媒介泛用户与品牌用户的匹配度分析。</div>
    <Tab :tab-list="tabs" @change="changeTab"></Tab>
    <PortraitMatchingItem v-if="tabActive === (i + 1)" :label="it" :name="it" v-for="(it, i) in tabs" :key="i"  />
  </div>
</template>

<script>
  import PortraitMatchingItem from './PortraitMatchingItem';
  import Tab from "@/components/TabSmall"
  export default {
    components: { PortraitMatchingItem, Tab },
    data() {
      return {
        list4Act: 0,
        list4: ["抖音", "快手", "微视", "梨视频", "西瓜视频"],
        tabs: ['短视频','社交传媒', '大众传媒' , '体验事件' , '促销' , '在线社交媒体' , '公共关系和宣传' , '网站'  , '其他' ],
        tabActive: 1,
      }
    },
    mounted() {
    },
    methods: {
      changeModel(current) {
        this.list4Act = current
      },
      changeTab(index) {
        this.tabActive = index;
      },
      clickMoreType() {
        this.moreOpen = !this.moreOpen
      },
    },
    computed: {
    }
  }
</script>

<style scoped lang="scss">
  .portrait-matching {
    width: 100%;
    margin-bottom: 27px;
    img {
      width: 100%;
      display: block;
    }
    background: #FFFFFF;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
    padding: 24px;
    .m-p-target-title {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
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
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
          line-height: 17px;
          padding: 16px;
          text-align: justify;
        }
      }
    }
    .subTitle{
      margin-top: 8px;
      margin-bottom: 24px;
      font-size: 14px;
      font-weight: 400;
      color: #636E95;
      line-height: 20px;
    }
  }

</style>
