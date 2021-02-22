<template>
  <DefaultPage>
    <DetailsPage title="编辑" backname="user-defined">
      <div class="user-defined-edit">
        <div class="user-group-rule"></div>
        <div class="user-target">
          <div class="target-left">
            <!-- <img :src="conditImg" alt="" srcset="" class="conditImg" /> -->
            <div class="l-item">
              <div class="l-item-label">常用标签</div>
              <div class="item-list" v-for="(item, index) in target" :key="index">
                <div class="item-con">
                  <div class="name">{{ item }}</div>
                  <i class="iconfont2 iconxiangqian"></i>
                </div>
              </div>
            </div>
            <div class="l-item">
              <div class="l-item-label">属性维度</div>
              <div class="item-list" v-for="(item, index) in property" :key="index" >
                <div class="item-con">
                  <div class="name">{{ item }}</div>
                  <i class="iconfont2 iconxiangqian"></i>
                </div>
              </div>
            </div>
            <div class="l-item">
              <div class="l-item-label">用户行为</div>
              <div class="item-list" v-for="(item, index) in behavior" :key="index" >
                <div class="item-con">
                  <div class="name">{{ item }}</div>
                  <i class="iconfont2 iconxiangqian"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="target-right">
            <div class="r-item">
              <div class="r-item-label">年龄</div>
              <div class="arr">
                <div class="ele"
                  ref="ninlinItem"
                  v-for="(item, index) in ageList"
                  :key="index"
                  @click="clickItem(index, 'ninlinItem')">
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="r-item">
              <div class="r-item-label">性别</div>
              <div class="arr">
                <div
                  class="ele"
                  ref="xingbieItem"
                  v-for="(item, index) in sexList"
                  :key="index"
                  @click="clickItem(index, 'xingbieItem')"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="r-item">
              <div class="r-item-label">有小孩</div>
              <div class="arr">
                <div
                  class="ele"
                  ref="hasChild"
                  v-for="(item, index) in hasChildList"
                  :key="index"
                  @click="clickItem(index, 'hasChild')"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="r-item">
              <div class="r-item-label">消费水平</div>
              <div class="arr">
                <div
                  class="ele"
                  ref="xflevel"
                  v-for="(item, index) in xiaofeiList"
                  :key="index"
                  @click="clickItem(index, 'xflevel')"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="r-item">
              <div class="r-item-label">婚姻</div>
              <div class="arr">
                <div
                  class="ele"
                  ref="huny"
                  v-for="(item, index) in huyList"
                  :key="index"
                  @click="clickItem(index, 'huny')"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="r-item">
              <div class="r-item-label">职业</div>
              <div class="arr">
                <div
                  class="ele"
                  ref="jobdom"
                  v-for="(item, index) in jobList"
                  :key="index"
                  @click="clickItem(index, 'jobdom')"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DetailsPage>
  </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";
import DetailsPage from "../../layouts/DetailsPage";
export default {
  name: "defined",
  components: { DefaultPage, DetailsPage },
  data() {
    return {
      target: ["自定义标签", "基本信息", "兴趣爱好", "设备属性"],
      property: ["用户维度", "媒介维度", "品牌维度"],
      behavior: ["线上行为", "线下行为"],
      ageList: ["18-24", "35-44", "45+"],
      sexList: ["男", "女"],
      hasChildList: [
        "妈妈",
        "母婴",
        "二胎",
        "中学生家长",
        "0-3岁小孩父母",
        "3-6岁小孩父母",
        "孕期",
        "备孕",
        "小学生家长",
      ],
      xiaofeiList: ["高", "中", "低"],
      huyList: ["约会", "相亲", "已婚", "未婚"],
      jobList: [
        "网约车司机",
        "广告",
        "大学生",
        "医生",
        "金融",
        "IT",
        "程序员",
        "教师货车司机",
      ],
    };
  },
  methods: {
    clickItem(arg, art) {
      var itemDom = this.$refs[art] || [];
      for (var i = 0; i < itemDom.length; i++) {
        if (i == arg) {
          itemDom[i].style = "background: #2373FF;color: #FFFFFF";
        } else {
          //如果需要多选去掉else
          itemDom[i].style = "color: #636E95;background: none;";
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.user-defined-edit {
  display: flex;
  .user-group-rule {
    width: 348px;
    height: 844px;
    overflow-y: scroll;
    margin-right: 24px;
    background: #ffffff;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #eaedf7;
  }
  .user-target {
    width: 780px;
    height: 690px;
    background: #ffffff;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #eaedf7;
    display: flex;
    .target-left {
      width: 186px;
      height: 100%;
      padding: 24px 0 0 24px;
      border-right: 1px solid #eaedf7;
      .l-item {
        margin-bottom: 24px;
        .l-item-label {
          width: 58px;
          height: 16px;
          margin-bottom: 15px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          line-height: 16px;
        }
        .item-list {
          .item-con {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 160px;
            height: 32px;
            padding: 0 16px;
            margin-right: 1px;
            margin-bottom: 8px;
            .name{
              height: 14px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #333333;
              line-height: 14px;
            }
            > i {
              font-size: 12px;
              color: #7c88b1;
            }
          }
        }
      }
    }
    .target-right {
      height: 100%;
      padding: 55px 0 0 22px;
      box-sizing: border-box;
      .r-item {
        display: flex;
        margin-bottom: 8px;
        .r-item-label {
          width: 106px;
          height: 24px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242f57;
          line-height: 24px;
        }
        .arr {
          width: calc(100% - 106px);
          display: flex;
          flex-wrap: wrap;
          .ele {
            height: 24px;
            padding: 0 9px;
            line-height: 24px;
            margin-right: 24px;
            margin-bottom: 16px;
            font-size: 14px;
            border-radius: 8px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            background-color: none;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>