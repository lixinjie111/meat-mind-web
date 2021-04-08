<template>
  <div class="wdsj">
    <div v-if="resultShow">
      <ResultBox @goBack="goBack"/>
    </div>
    <div v-else class="page-container ">
      <div class="header-nav">
        <p>我的数据</p>
      </div>
      <div class="statistics no-padding">
        <div :class="['statistics-item-box', {current: listType === 'upload' }]" @click="changeList('upload')">
          <div class="statistics-item-ico icon-bg"><i class="iconfont iconshangchuanshuju"></i></div>
          <div class="statistics-item">
            <div class="label">
              我上传的数据
            </div>
            <div class="count">
              2
            </div>
          </div>
          <i class="iconfont icongengduo"></i>
        </div>
        <div :class="['statistics-item-box', {current: listType === 'SDK' }]" @click="changeList('SDK')">
          <div class="statistics-item-ico icon-bg SDK"><i class="iconfont iconSDKmaidian"></i></div>
          <div class="statistics-item">
            <div class="label">
              SDK埋点
            </div>
            <div class="count">
              15
            </div>
          </div>
          <i class="iconfont icongengduo"></i>
        </div>
        <div :class="['statistics-item-box', {current: listType === 'API' }]" @click="changeList('API')">
          <div class="statistics-item-ico icon-bg API"><i class="iconfont iconAPIcaiji"></i></div>
          <div class="statistics-item">
            <div class="label">
              API采集
            </div>
            <div class="count">
              15
            </div>
          </div>
          <i class="iconfont icongengduo"></i>
        </div>
        <div :class="['statistics-item-box', {current: listType === 'SQL' }]" @click="changeList('SQL')">
          <div class="statistics-item-ico icon-bg SQL"><i class="iconfont iconshujukuzhilian"></i></div>
          <div class="statistics-item">
            <div class="label">
              数据库直连
            </div>
            <div class="count">
              0
            </div>
          </div>
          <i class="iconfont icongengduo"></i>
        </div>
      </div>
      <template v-if="listType === 'upload'">
        <div class="module">
          <div class="module-title">
            <div>已上传文件列表</div>
            <div class="module-btns btn-box">
              <Button class="a">更新数据</Button>
              <Button class="a" type="primary" @click="uploadModalStatus = true">上传数据</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table   :columns="uploadPage.file.columns" :data="uploadPage.file.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">查看</span>
                  <span class="operation-item">删除</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp">
              <Page
                :current="uploadPage.file.currentPage"
                :total="uploadPage.file.totalPage"
                :page-size="uploadPage.file.pageSize"
                show-total
                show-sizer
                class-name="pageS"
                @on-change="(page)=>tableChangePage(page, uploadPage.file)"
              />
            </div>

          </div>
        </div>
        <div class="module">
          <div class="module-title">
            <div>已购买数据</div>
            <div class="module-btns btn-box">
              <Button class="a" type="primary" @click="toMarket">购买数据包</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table  :columns="uploadPage.data.columns" :data="uploadPage.data.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据包</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp">
              <Page
                :current="uploadPage.data.currentPage"
                :total="uploadPage.data.totalPage"
                :page-size="uploadPage.data.pageSize"
                show-total
                show-sizer
                class-name="pageS"
                @on-change="(page)=>tableChangePage(page, uploadPage.data)"
              />
            </div>

          </div>
        </div>
      </template>
      <template v-else-if="listType === 'SDK'">
        <div class="module">
          <div class="module-title">
            <div>SDK应用列表</div>
            <div class="module-btns btn-box">
              <Button class="a">下载SDK文件</Button>
              <Button class="a" type="primary">新建应用</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table :columns="SDKPage.columns" :data="SDKPage.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp"  v-if="SDKPage.totalPage>0">
              <Page
                :current="SDKPage.currentPage"
                :total="SDKPage.totalPage"
                :page-size="SDKPage.pageSize"
                show-total
                show-sizer
                class-name="pageS"
                @on-change="(page)=>tableChangePage(page, SDKPage)"
              />
            </div>
            <div v-else style="padding: 30px">
              <div class="not-data">
                <span>尚未接入应用，若您不是开发者可以 </span>
                <span class="link">邀请工程师协助安装</span>
                <span>或</span>
                <span class="link">查看使用方法</span>
                <div class="not-data-create-btn">
                  <Button type="primary">新建应用</Button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </template>
      <template v-else-if="listType === 'API'">
        <div class="module">
          <div class="module-title">
            <div>API采集应用列表</div>
            <div class="module-btns btn-box">
              <Button type="primary" class="a">下载SDK文件</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table :columns="APIPage.columns" :data="APIPage.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp"  v-if="APIPage.totalPage>0">
              <Page
                :current="APIPage.currentPage"
                :total="APIPage.totalPage"
                :page-size="APIPage.pageSize"
                show-total
                show-sizer
                class-name="pageS"
                @on-change="(page)=>tableChangePage(page, APIPage)"
              />
            </div>
            <div v-else style="padding: 30px">
              <div class="not-data">
                <span>尚未接入开通AIP采集功能，请联系我们的 </span>
                <span class="link"> 技术人员 </span>
                <span>为您开通</span>
              </div>

            </div>

          </div>
        </div>
<!--        <div class="module">-->
<!--          <div class="module-title">-->
<!--            <div>已购买数据</div>-->
<!--            <div class="module-btns btn-box">-->
<!--              <Button class="a" type="primary">购买数据包</Button>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="table-warp">-->
<!--            <Table  :columns="APIPage.buyData.columns" :data="APIPage.buyData.list">-->
<!--              <template slot-scope="" slot="operate">-->
<!--                <div class="operation">-->
<!--                  <span class="operation-item">更新数据包</span>-->
<!--                  <span class="operation-item">续费</span>-->
<!--                </div>-->
<!--              </template>-->
<!--            </Table>-->
<!--            <div class="table-page-warp">-->
<!--              <Page-->
<!--                  :current="APIPage.buyData.currentPage"-->
<!--                  :total="APIPage.buyData.totalPage"-->
<!--                  :page-size="APIPage.buyData.pageSize"-->
<!--                  show-total-->
<!--                  show-sizer-->
<!--                  class-name="pageS"-->
<!--                  @on-change="(page)=>tableChangePage(page, APIPage.buyData)"-->
<!--              />-->
<!--            </div>-->

<!--          </div>-->
<!--        </div>-->
      </template>
      <template v-else-if="listType === 'SQL'">
        <div class="module">
          <div class="module-title">
            <div>已接入数据库</div>
            <div class="module-btns btn-box">
              <Button class="a" type="primary"><i class="iconfont icontianjia"></i> 新建连接</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table :columns="SQLPage.columns" :data="SQLPage.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp"  v-if="SQLPage.totalPage>0">
              <Page
                :current="SQLPage.currentPage"
                :total="SQLPage.totalPage"
                :page-size="SQLPage.pageSize"
                class-name="pageS"
                show-total
                show-sizer
                @on-change="(page)=>tableChangePage(page, SQLPage)"
              />
            </div>
            <div v-else style="padding: 30px">
              <div class="not-data big-not-data">
                <span>尚未开通数据库直连功能，请联系我们的</span>
                <span class="link"> 技术人员 </span>
                <span>为您开通，开通后您可以直接对下述类型的数据库进行连接配置</span>
              </div>
              <div class="separator-line"></div>
              <div class="SQL-list-box">
                <img src="../../../static/img/datacenter/wdsj/SQL-list.png" alt="">
              </div>

            </div>

          </div>
        </div>
      </template>
    </div>
    <UploadDataModal :visible="uploadModalStatus" @onControlModal="onCloseUploadModal"/>
  </div>
</template>

<script>
import ResultBox from '../components/ResultBox'
import UploadDataModal from '../components/UploadDataModal'
export default {
    name: "Mydata",
    components: { ResultBox, UploadDataModal },
    data() {
      return {
        uploadModalStatus: false,
        uploadModal1: false,
        uploadModal2: false,
        uploadModal3: false,
        isUpload4: false,
        resultShow: false,
        listType: 'upload',
        uploadPage: {
          file: {
            columns: [
              {
                title: '文件名称',
                key: 'name',
              },
              {
                title: '更新时间',
                key: 'time',
                // width: '200'
              },
              {
                title: '操作',
                slot:"operate",
                width: 170 / 144 * window.rem,

              },
            ],
            currentPage: 1,
            totalPage: 2,
            pageSize: 10,
            list: [
              {
                name: '用户消费场景心智测试数据包.xlsx',
                time: '2020-10-12 09:21:03',
              },
              {
                name: '青少年课堂应激行为测试数据包.xlsx',
                time: '2021-03-07 08:16:08',
              },
            ],
          },
          data: {
            columns: [
              {
                title: '用户动线数据包',
                key: 'name',
                width: 160 / 144 * window.rem,
              },
              {
                title: '详情描述',
                key: 'desc',
                width: 200 / 144 * window.rem,
              },
              {
                title: '添加时间',
                key: 'time',
                width: 180 / 144 * window.rem,
              },
              {
                title: '最近更新版本',
                key: 'versions',
                width: 180 / 144 * window.rem,
              },
              {
                title: '有效期至',
                key: 'valid',
                width: 120 / 144 * window.rem,
              },
              {
                title: '状态',
                key: 'status',
                // width: 80 / 144 * window.rem,
              },
              {
                title: '操作',
                slot:"operate",
                width: 170 / 144 * window.rem,
              },
            ],
            currentPage: 1,
            totalPage: 2,
            pageSize: 10,
            list: [
              {
                name: '用户动线数据包',
                desc: '2020年上半年某平台中高收入水平会员的城市…',
                time: '2020-10-12 09:21:03',
                versions: '2020-10-12 09:21:03',
                valid: '永久',
                status: '有效',
              },
              {
                name: '女性色彩感知测试数据包',
                desc: '2018-2020某大型电商用户生命周期运营数据…',
                time: '2021-05-07 08:16:08',
                versions: '2020-11-10 32:01:07',
                valid: '2021-10-12',
                status: '有效',
              },
            ],
          },
        },
        SDKPage: {
          columns: [
            {
              title: '应用名称',
              key: 'name',
            },
            {
              title: '平台',
              key: 'platform',
              // width: '200'
            },
            {
              title: '域名/包名',
              key: 'package',
              // width: '200'
            },
            {
              title: 'URL Scheme',
              key: 'url',
              // width: '200'
            },
            {
              title: '创建人',
              key: 'createUser',
              // width: '200'
            },
            {
              title: '创建时间',
              key: 'createTime',
              // width: '200'
            },
            {
              title: '状态',
              key: 'status',
              width: 80 / 144 * window.rem,
            },
            {
              title: '操作',
              slot:"operate",
              width: 200 / 144 * window.rem,

            },
          ],
          currentPage: 1,
          totalPage: 15,
          pageSize: 10,
          allList: [],
          list: [],
        },
        APIPage: {
          columns: [
            {
              title: '应用名称',
              key: 'name',
            },
            {
              title: '平台',
              key: 'platform',
              // width: '200'
            },
            {
              title: '域名/包名',
              key: 'package',
              // width: '200'
            },
            {
              title: 'URL Scheme',
              key: 'url',
              // width: '200'
            },
            {
              title: '创建人',
              key: 'createUser',
              // width: '200'
            },
            {
              title: '创建时间',
              key: 'createTime',
              // width: '200'
            },
            {
              title: '状态',
              key: 'status',
              // width: '200'
            },
            {
              title: '操作',
              slot:"operate",
              width: 200 / 144 * window.rem,

            },
          ],
          currentPage: 1,
          totalPage: 15,
          pageSize: 10,
          list: [],
          allList: [],
          buyData: {
            columns: [
              {
                title: '资源名称',
                key: 'name',
              },
              {
                title: '详情描述',
                key: 'desc',
                width: 350 / 144 * window.rem,
                // width: '200'
              },
              {
                title: '添加时间',
                key: 'time',
                // width: '200'
              },
              {
                title: '最近更新版本',
                key: 'versions',
                // width: '200'
              },
              {
                title: '有效期至',
                key: 'valid',
                // width: '200'
              },
              {
                title: '状态',
                key: 'status',
                // width: '200'
              },
              {
                title: '操作',
                slot:"operate",
                width: 200 / 144 * window.rem,
              },
            ],
            currentPage: 1,
            totalPage: 2,
            pageSize: 10,
            list: [],
            allList: [],
          },
        },
        SQLPage: {
          columns: [
            {
              title: '名称',
              key: 'name',
            },
            {
              title: '类型',
              key: 'type',
              // width: '200'
            },
            {
              title: '添加时间',
              key: 'addTime',
              // width: '200'
            },
            {
              title: '更新时间',
              key: 'url',
              width: 'time'
            },
          ],
          currentPage: 1,
          totalPage: 0,
          pageSize: 10,
          list: [],
          allList: [],
        },
      }
    },
    mounted() {
      this.generateSDKPageData()
      this.tableChangePage(1, this.SDKPage)
      this.generateAPIPageData()
      this.tableChangePage(1, this.APIPage)
      this.generateAPIBuyPageData()
      this.tableChangePage(1, this.APIPage.buyData)
      // this.generateSQLPageData()
      // this.tableChangePage(1, this.SQLPage)
    },
    methods: {
      toMarket() {
        this.$router.push({name:"data-center-market"})
      },
      changeList(type) {
        this.listType = type
      },
      tableChangePage(page, pageObj) {
        pageObj.currentPage = page
        pageObj.list = pageObj.allList.slice((page - 1) * pageObj.pageSize, page * pageObj.pageSize - 1)
      },
      onCloseUploadModal(status, result){
        this.uploadModalStatus = status
        this.resultShow = !!result
      },
      uploadChange1() {
        this.uploadModal1 = false;
        this.uploadModal2 = true;
      },
      uploadChange2() {
        this.uploadModal1 = true;
        this.uploadModal2 = false;
      },
      uploadChange3() {
        if (this.isUpload4) {
          this.uploadModal1 = false;
          this.uploadModal3 = false;
          this.resultShow = true;
        } else {
          this.uploadModal1 = false;
          this.uploadModal3 = true;
          setTimeout(() => {
            this.uploadModal3 = false;
            this.resultShow = true;
          }, 1000);
        }
      },
      generateSDKPageData(total=this.SDKPage.totalPage){
        for (let i = 0; i < total; ++i){
          const curr =  { name: '元信', platform: 'Android', package: 'yxin.apk', url: '--', createUser: 'Mr.Tang', createTime: '2020-11-10 32:01:07', status: '有效'};
          this.SDKPage.allList.push(curr)
        }
      },
      generateAPIPageData(total=this.APIPage.totalPage){
        for (let i = 0; i < total; ++i){
          const curr =  { name: '元信', platform: 'Android', package: 'yxin.apk', url: '--', createUser: 'Mr.Tang', createTime: '2020-11-10 32:01:07', status: '有效'};
          this.APIPage.allList.push(curr)
        }
      },
      generateAPIBuyPageData(total=this.APIPage.buyData.totalPage){
        for (let i = 0; i < total; ++i){
          const curr =  { name: '用户动线数据包', desc: '2020年上半年某平台中高收入水平会员的城市…', time: '2020-10-12 09:21:03', versions: '2020-11-10 32:01:07', valid: '永久',  status: '有效'};
          this.APIPage.buyData.allList.push(curr)
        }
      },
      generateSQLPageData(total=this.SQLPage.totalPage){
        for (let i = 0; i < total; ++i){
          const curr =  { name: '元信', platform: 'Android', package: 'yxin.apk', url: '--', createUser: 'Mr.Tang', createTime: '2020-11-10 32:01:07', status: '有效'};
          this.SQLPage.allList.push(curr)
        }
      },
      goBack(){
        this.resultShow = false
      },
    }
  }
</script>

<style scoped lang="scss">
  .wdsj {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 24px;

    img {
      width: 100%;
      // height: 100%;
    }

    .result-box {
      padding: 20px 0;

      .title {
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
      }
      .rotate180{
        transform:rotate(180deg);
        display: inline-block;
        .iconfont{
          font-size: 24px;
          color: #7e8ab2;
        }
      }
      .separate-line{
        width: 1px;
        height: 20px;
        background: #EAEDF7FF;
        display: inline-block;
        margin: 0 16px;
      }
      .operation-section{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 12px;
        .operation-section-input{
          width: 217px;
          height: 32px;
          background: #FFFFFF;
          border-radius: 4px;
        }
      }
      .list {
        margin-top: 22px;
        padding: 12px 24px;
        background: #FFFFFF;
        /*border: 1px solid #EAEDF7;*/
        box-shadow: 4px 6px 20px 0 rgba(134, 143, 191, 0.15);
        border-radius: 8px;
        .page-box {
          margin-top: 10px;
          text-align: right;
          .pageS {
            text-align: right;
            ::v-deep .ivu-page-options {
              float: left;
            }
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  $radius: 12px;

  .upload-modal1 {
    .ivu-modal {
      width: 488px !important;
      height: 616px;
    }

    .ivu-modal-body {
      padding: 0;

      .upload1 {
        position: relative;
        width: 488px !important;
        height: 616px;

        img {
          width: 488px !important;
          height: 616px;
        }

        .close1-btn {
          position: absolute;
          right: 15px;
          top: 20px;
          width: 16px;
          height: 16px;
          background: transparent;
          cursor: pointer;
        }

        .upload1-btn {
          position: absolute;
          left: 280px;
          top: 340px;
          width: 80px;
          height: 30px;
          background: transparent;
          cursor: pointer;
        }

        .upload3-btn {
          position: absolute;
          right: 24px;
          bottom: 10px;
          width: 90px;
          height: 30px;
          background: transparent;
          cursor: pointer;
        }

        .upload4-btn {
          position: absolute;
          left: 150px;
          top: 390px;
          width: 60px;
          height: 30px;
          background: transparent;
          cursor: pointer;
        }

        .upload5-btn {
          position: absolute;
          right: 24px;
          bottom: 10px;
          width: 90px;
          height: 30px;
          background: transparent;
          cursor: pointer;
        }

        .left-btn {
          position: absolute;
          left: 24px;
          top: 100px;
          width: 212px;
          height: 90px;
          background: transparent;
          cursor: pointer;
        }

        .right-btn {
          position: absolute;
          right: 24px;
          top: 100px;
          width: 212px;
          height: 90px;
          background: transparent;
          cursor: pointer;
        }
      }
    }


  }

  .upload-modal2 {
    .ivu-modal-body {
      padding: 0;
    }

    .ivu-modal {
      width: 640px !important;
      height: 400px;
    }

    .upload2 {
      position: relative;
      width: 640px;
      height: 400px;

      > img {
        width: 640px;
        height: 400px;
      }

      .upload2-btn {
        position: absolute;
        left: 120px;
        top: 50px;
        width: 160px;
        height: 80px;
        background: transparent;
        cursor: pointer;
      }
    }
  }

  .upload-modal3 {
    .ivu-modal {
      width: 500px !important;
      height: 206px;
    }

    .ivu-modal-body {
      padding: 0;
    }

    .upload3 {
      position: relative;
      width: 500px;
      height: 206px;

      > img {
        width: 500px;
        height: 206px;
      }
    }
  }

  .page-container {
    .title{
      height: 64px;
      line-height: 64px;
      font-size: 20px;
      font-weight: 500;
      color: #242F57;
    }
  }
  .no-padding{
    padding: 0 !important;
  }
  .module{
    border-radius: 8px;
    margin: 16px 0;
    padding: 0 24px;
    /*border: 1px solid #EAEDF7;*/
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    padding-bottom: 16px;
    .module-title{
      height: 56px;
      line-height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      font-weight: 500;
      .module-btns{
        display: flex;
        align-items: center;
        button{
          margin-left: 16px;
        }
      }
    }
  }
  .statistics {
    display: flex;
    align-items: center;
    border-radius: $radius $radius 0 0;

    .statistics-item-box {
      padding: 22px 0;
      position: relative;
      cursor: pointer;
      width: 270px;
      height: 102px;
      background: #D3E3FF;
      border-radius: 8px;
      margin-right: 24px;
      &:last-child{
        margin-right: 0;
      }
      .statistics-item-ico {
        position: absolute;
        left: 16px;
        top: 21px;
      }
      .statistics-item-ico.icon-bg {
        width: 48px;
        height: 52px;
        background: #FFFFFF;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        &>.iconfont {
          font-size: 36px;
        }
      }
      &>.iconfont{
        position: absolute;
        top: 12px;
        right: 12px;
      }
    }
    .statistics-item {
      padding-left: 76px;
      height: 100%;
      &:last-child{
        /*border-right: none;*/
      }
      .label {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
      .count {
        font-size: 28px;
        font-weight: 400;
        line-height: 36px;
        font-family: PingFangSC-Medium;
      }
    }
    .statistics-item-box:nth-child(1) {
      background-color: #D3E3FF;
      color: #2373FF;
      .iconfont{
        color: #2373FF;
      }
    }
    .statistics-item-box:nth-child(1).current {
      background-color: #2373FF;
      color: #FFFFFF;
      .iconfont.icongengduo{
        color: #FFFFFF;
      }
    }
    .statistics-item-box:nth-child(2) {
      background-color: #FFE6DE;
      color: #FE774B;
      .iconfont{
        color: #FE774B;
      }
    }
    .statistics-item-box:nth-child(2).current {
      background-color: #FE774B;
      color: #FFFFFF;
      .iconfont.icongengduo{
        color: #FFFFFF;
      }
    }
    .statistics-item-box:nth-child(3) {
      background-color: #DFF8F6;
      color: #1DCEC3;
      .iconfont{
        color: #1DCEC3;
      }
    }
    .statistics-item-box:nth-child(3).current {
      background-color: #1DCEC3;
      color: #FFFFFF;
      .iconfont.icongengduo{
        color: #FFFFFF;
      }
    }
    .statistics-item-box:nth-child(4) {
      background-color: #FFEBF3;
      color: #F16E84;
      .iconfont{
        color: #F16E84;
      }
    }
    .statistics-item-box:nth-child(4).current {
      background-color: #F16E84;
      color: #FFFFFF;
      .iconfont.icongengduo{
        color: #FFFFFF;
      }
    }
  }

  .btn-box{
    .ivu-btn{
      height: 32px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 400;
      color: #97A0C3;
    }
    .ivu-btn-default{
      background: #FFFFFF;
      border-radius: 4px;
      border: 1px solid #97A0C3;

    }
    .ivu-btn-primary{
      background: #2373FF;
      box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
      border-radius: 4px;
      color: #FFFFFF;
    }

  }
  .btn.btn2{
    font-size: 14px;
    line-height: 22px;
    width: 85px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #2373FF;
  }
  .table-warp{
    .ivu-table th{
      height: 48px;
      background: #F4F7FC;
    }
    .table-page-warp{
      margin-top: 10px;
      text-align: right;
      .pageS {
        text-align: right;
        ::v-deep .ivu-page-options {
          float: left;
        }
      }
    }
  }
  .operation{
    .operation-item{
      margin-right: 16px;
      font-weight: 400;
      color: #2373FF;
      cursor: pointer;
      font-size: 14px;
    }
  }
  .not-data{
    text-align: center;
    margin: 0 auto;
    width: 486px;
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    color: #636E95;
    .link{
      color: #2373FF;
      cursor: pointer;
    }
    .not-data-create-btn{
      margin-top: 16px;
    }
  }
  .not-data.big-not-data{
    width: 500px;
  }
  .separator-line{
    border-bottom: 1px solid #e8eaec;
    margin: 40px 0;
  }
  .SQL-list-box{
    width: 800px;
    margin: 0 auto;
  }

</style>
