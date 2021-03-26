<template>
  <div class="tab-pane-item">
    <div class="f-list">
      <div class="f-item" @click="changeModel(index)" :class="{'active':index==list4Act}"
           v-for="(item,index) in list4" :key="index">
        <p>{{item}}</p>
      </div>
    </div>
    <div class="listBox">
      <!--<div class="listBox-left">-->
      <!--<Menu active-name="1" width="133px" mode="vertical" @on-select="selectMenu">-->
      <!--<MenuItem name="1"> KOL综合排行</MenuItem>-->
      <!--<MenuItem name="2"> 粉丝增长排行</MenuItem>-->
      <!--<MenuItem name="3"> 粉丝互动排行</MenuItem>-->
      <!--<MenuItem name="4"> 销售转化排行</MenuItem>-->
      <!--<MenuItem name="5"> 性价比排行</MenuItem>-->
      <!--</Menu>-->
      <!--</div>-->
      <div class="listBox-right">
        <div class="m-f-line">
          <div class="label">类别</div>
          <div class="f-list">
            <div class="f-item" @click="changeType(index)" :class="{'active':index==list5Act}"
                 v-for="(item,index) in newList" :key="index">
              <p>{{item}}</p>
            </div>
          </div>
          <div class="more-btn" @click="clickMoreType">更多 <i :class="['iconfont ', moreOpen ? 'iconup' : 'icondown' ]"></i></div>
        </div>
        <Table class="table-wrapper" :columns="columns1" :data="data" size="large" :width="tableWidth">
          <template slot-scope="{ row, index }" slot="paiming">
            <div class="paiming1" v-if="row.index==0">{{row.index+1}}</div>
            <div class="paiming2" v-else-if="row.index==1">{{row.index+1}}</div>
            <div class="paiming3" v-else-if="row.index==2">{{row.index+1}}</div>
            <div class="paiming4" v-else>{{row.index+1}}</div>
          </template>
          <template slot-scope="{ row, index }" slot="douhao">
            <div class="personal">
              <div class="left">
                <img :src="row.header" alt="">
              </div>
              <div class="right">
                <div class="name">{{row.name}}</div>
                <div class="hao">账号：{{row.num}}</div>
              </div>
            </div>
          </template>
<!--          <template slot-scope="{ row, index }" slot="action">-->
<!--            <div class="actionList">-->
<!--              <div class="detail">详情</div>-->
<!--              <div class="detail">收藏</div>-->
<!--              <div class="detail">合作</div>-->
<!--            </div>-->
<!--          </template>-->
        </Table>
        <div class="page">
          <Page :total="total" :current="current" @on-change="change" @on-page-size-change="changeSize"
                :pageSize="pageSize" show-total show-sizer class-name="pageS"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['label', 'name'],
    data() {
      return {
        list4Act: 0,
        list5Act: 0,
        total: 40,
        pageSize: 10,
        current: 1,
        list4: [ "抖音", "快手", "微视", "梨视频", "西瓜视频"],
        list5: ["娱乐", "才艺", "萌宠", "搞笑", "二次元", "游戏", "家具", "美食", "旅游", "企业", "体育",
          "教育", "科技", "汽车", "情感", "时尚", "文化", "社会", "实事",],
        columns1: [
          {
            title: '排名',
            slot: 'paiming',
            width: 50 / 144 * window.rem,
          },
          {
            title: '账号',
            key: 'name',
            slot: 'douhao',
            width: 180 / 144 * window.rem,
          },
          {
            title: '带货量',
            tooltip: true,
            ellipsis: true,
            key: 'huo',
            width: 100 / 144 * window.rem,
          },
          {
            title: '品牌曝光数',
            tooltip: true,
            ellipsis: true,
            key: 'bao',
            width: 100 / 144 * window.rem,
          },
          {
            title: '作品数',
            tooltip: true,
            ellipsis: true,
            key: 'zuopin',
            width: 100 / 144 * window.rem,
          },
          {
            title: '互动总数',
            tooltip: true,
            ellipsis: true,
            key: 'hudong',
            width: 100 / 144 * window.rem,
          },
          {
            title: '真粉量/粉丝数',
            tooltip: true,
            ellipsis: true,
            key: 'fensi',
            width: 130 / 144 * window.rem,
          },
          {
            title: '品牌匹配度',
            tooltip: true,
            ellipsis: true,
            key: 'pinpaipipei',
            width: 100 / 144 * window.rem,
          },
          {
            title: '用户匹配度',
            tooltip: true,
            ellipsis: true,
            key: 'yonghupipei',
            width: 100 / 144 * window.rem,
          },
          {
            tooltip: true,
            ellipsis: true,
            key: 'yxiang',
            // width: 120 / 144 * window.rem,
            renderHeader: (h, params) => {
              return h("div", [
                h('strong', 'KOL影响力指数'),
                h("Poptip",
                  {
                    props: {
                      placement: "bottom",
                      popperClass: "saas-poptip",
                      transfer: true
                    },
                    style: {
                      marginLeft: '2px'
                    }
                  },
                  [
                    h("i", {
                      class: "iconfont iconguanyu tip-icon"
                    }),
                    h("div", {
                      slot: "content"
                    }, [
                      h("p", "影响力指数是系统基于账号粉丝量、真粉率、日均推广时长、代言品牌数、品牌匹配度、用户匹配度以及代言品牌数和带货量等数据分析得出的综合评分。其公式为"),
                      h("p", "F = [(粉丝量*真粉率)/10W * 0.27 + 日均推广时长(分钟) * (代言品牌数/100) * 0.23 + 10*用户匹配度*0.26 + 10*品牌匹配度 * 0.24 ] * θ(带货量)")
                    ])
                  ])
              ])
            }
          },
          // {
          //   title: '操作',
          //   slot: 'action',
          //   fixed: 'right',
          //   width: 120 / 144 * window.rem,
          // },
        ],
        data: [],
        moreOpen: false,
      }
    },
    mounted() {
      this.generateData()
    },
    methods: {
      change(current) {
        this.current = current
        this.generateData()
      },
      changeSize(pageSize) {
        this.pageSize = pageSize
        this.generateData()
      },
      changeType(current) {
        this.list5Act = current
        this.generateData()
      },
      changeModel(current) {
        this.list4Act = current
        this.generateData()
      },
      selectMenu() {
        this.generateData()
      },
      /**
       * 生成随机数
       * @param min
       * @param max
       * @param precise {Number}精准小数
       * @returns {*}
       */
      getRandom(min, max, precise) {
        min = Math.ceil(min);
        max = Math.floor(max);
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!precise) {
          return num
        }
        let tmp = Math.random().toFixed(precise);
        return num + Number(tmp)
      },
      generateData(total = this.pageSize) {
        const data = []
        const name1 = ['张', '李', '王', '李', '杜', '曾', '胡', '高', '欧阳', '诸葛']
        const name2 = ['瑷', '小璐', '大锤', '心怡', '紫藤', '小贤', '一菲', '达', '明', '亮']
        const headers = [
          require("../../../assets/img/yhhx/header1.png"),
          require("../../../assets/img/yhhx/header2.png"),
          require("../../../assets/img/yhhx/header3.png"),
          require("../../../assets/img/yhhx/header4.png"),
          require("../../../assets/img/yhhx/header5.png"),
          require("../../../assets/img/yhhx/header6.png"),
          require("../../../assets/img/yhhx/header7.png"),
          require("../../../assets/img/yhhx/header8.png"),
          require("../../../assets/img/yhhx/header9.png"),
          require("../../../assets/img/yhhx/header10.png"),
        ]
        const len = name1.length - 1
        const len2 = name2.length - 1
        for (let i = 0; i < total; i++) {
          const huo = this.getRandom(1, 100, 2) + 'w';
          const name_1 = name1[Math.ceil(Math.random() * len)]
          const name_2 = name2[Math.ceil(Math.random() * len2)]
          const headerI = Math.ceil(Math.random() * 9)
          data.push(
            {
              name: name_1 + name_2,
              huo,
              bao: this.getRandom(90, 95),
              fensi: `${this.getRandom(5000, 6000)}w/${this.getRandom(6000, 7000)}w`,
              zan: this.getRandom(90, 95),
              zuopin: this.getRandom(90, 95),
              pinpaipipei: `${this.getRandom(90, 95, 2)}%`,
              yonghupipei: `${this.getRandom(90, 95, 2)}%`,
              hudong: `${this.getRandom(1, 20, 2)}亿`,
              yxiang: this.getRandom(800, 950, 0),
              header: headers[headerI],
              num: `${Math.ceil(Math.random() * 10000000000)}`,
              index: (this.current - 1) * this.pageSize + i
            }
          )
        }
        if (this.current == 1) {
          data.splice(0, 1, {
            name: '邓荣',
            huo: '492w',
            bao: 92,
            fensi: `6987w/7200w`,
            zan: 93,
            pinpaipipei: '92.2%',
            yonghupipei: '92.2%',
            hudong: '5.32亿',
            zuopin: 95,
            yxiang: 960,
            header: require("../../../assets/img/yhhx/header1.png"),
            num: `${Math.ceil(Math.random() * 10000000000)}`,
            index: 0
          })
        }
        this.data = data
      },
      clickMoreType(){
        this.moreOpen = !this.moreOpen
      },
    },
    computed: {
      tableWidth() {
        return 1100 / 144 * window.rem
      },
      newList(){
        return this.list5.slice(0, this.moreOpen ? undefined : 12)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-pane-item{
    margin-top: 16px;
  }
  .f-list {
    width: calc(100% - 96px);
    display: flex;
    flex-wrap: wrap;
    .f-item {
      margin-right: 16px;
      margin-bottom: 16px;
      cursor: pointer;
      /*width: 68px;*/
      height: 32px;
      border-radius: 4px;
      font-size: 14px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      &.active {
        background: #2373FF;
        border-radius: 4px;
        > p {
          color: #FFFFFF;
        }
      }
      > p {
        height: 22px;
        font-size: inherit;
        font-weight: 400;
        color: #242F57;
        /*line-height: 22px;*/
      }
    }
  }

  .listBox {
    border-radius: 8px;
    display: flex;
    margin-bottom: 1px;
    padding-bottom: 2px;

    .listBox-left {
      ::v-deep .ivu-menu {
        width: 120px !important;
        height: 100%;
        padding-top: 10px;
        font-size: 14px;
        font-weight: 500;
        color: #636E95;
        .ivu-menu-item {
          text-align: right;
          padding-right: 16px;
          padding-left: 0;
        }

      }
      ::v-deep .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
        background: #fff;
      }
    }
    .listBox-right {
      flex: 1;
      /*padding: 24px;*/
      padding-top: 16px;
      .page {
        padding-top: 16px;
        .pageS {
          text-align: right;
          ::v-deep .ivu-page-options {
            float: left;
          }
        }
      }
      .paiming1 {
        width: 18px;
        height: 18px;
        background: #2373FF;
        border-radius: 50%;
        font-size: 12px;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 18px;
        text-align: center;
      }
      .paiming2 {
        width: 18px;
        height: 18px;
        background: #FE774B;
        border-radius: 50%;
        font-size: 12px;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 18px;
        text-align: center;
      }
      .paiming3 {
        width: 18px;
        height: 18px;
        background: #1DCEC3;
        border-radius: 50%;
        font-size: 12px;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 18px;
        text-align: center;
      }
      .paiming4 {
        width: 18px;
        height: 18px;
        background: #D9D9D9;
        border-radius: 50%;
        font-size: 12px;
        font-family: HelveticaNeue-Medium, HelveticaNeue;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 18px;
        text-align: center;
      }
      .personal {
        display: flex;
        align-items: center;
        .left {
          width: 32px;
          img {
            width: 100%;
            display: block;
          }
        }
        .right {
          margin-left: 3px;
          .name {
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 22px;
          }
          .hao {
            font-size: 12px;
            font-family: HelveticaNeue;
            color: #636E95;
            line-height: 18px;
          }
        }
        .detail {
          cursor: pointer;
        }
      }
      .actionList {
        display: flex;
        justify-content: space-between;
        .detail {
          cursor: pointer;
          font-size: 14px;
          font-weight: 400;
          color: #2373FF;
          line-height: 22px;
        }
      }

      .m-f-line {
        display: flex;
        margin-bottom: 8px;
        .label {
          width: 52px;
          height: 32px;
          font-size: 14px;
          font-weight: 400;
          color: #242F57;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .f-list {
          width: calc(100% - 96px);
          display: flex;
          flex-wrap: wrap;
          .f-item {
            padding: 0 16px;
            margin-right: 16px;
            margin-bottom: 16px;
            cursor: pointer;
            height: 28px;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            &.active {
              background: #75B1FF;
              border-radius: 4px;
              > p {
                color: #FFFFFF;
              }
            }
            > p {
              height: 22px;
              font-size: 14px;

              font-weight: 400;
              color: #242F57;
              line-height: 22px;
            }
          }
        }
        .more-btn{
          font-size: 12px;
          font-weight: 400;
          color: #636E95;
          cursor: pointer;
          /*padding: 5px 0;*/
          margin-bottom: 16px;
        }
      }
      .table-wrapper{
        /*padding: 0 24px;*/
      }
      ::v-deep .ivu-table {
        tr {
          .ivu-table-cell {
            font-size: 14px;
            padding-left: 0;
            padding-right: 0;
          }

          td, th {
            &:first-child {
              .ivu-table-cell {
                font-size: 14px;
                padding-left: 10px;
                padding-right: 0;
              }
            }
          }
        }
      }
    }
  }

</style>
