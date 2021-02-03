<template>
  <div class="wdsj">
    <div v-if="resultShow">
      <div class="result-box">
        <div class="title">
          <span class="rotate180">
            <i class="iconfont iconarrowRight" @click="resultShow = false"></i>
          </span>
          <span class="separate-line"></span>
          2020年上半年奢侈品销售数据</div>
        <div class="list">
          <div class="operation-section">
            <Input prefix="ios-search" class="operation-section-input" placeholder="请输入商品名称/商品编码" style="width: 217px" />
          </div>
          <Table border :columns="columns" :data="data"></Table>
          <div class="page-box">
            <Page :current="currentPage" :total="totalPage" :page-size="pageSize" simple
                  @on-change="changePage"/>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="page-container ">
      <div class="title">我的数据</div>
      <div class="statistics module no-padding">
        <div :class="['statistics-item-box', {current: listType === 'upload' }]" @click="changeList('upload')">
          <div class="statistics-item-ico icon-bg"><i class="iconfont iconshangchuanshuju"></i></div>
          <div class="statistics-item">
            <div class="label">
              我上传的数据
            </div>
            <div class="count">
              0
            </div>
          </div>
        </div>
        <div :class="['statistics-item-box', {current: listType === 'SDK' }]" @click="changeList('SDK')">
          <div class="statistics-item-ico icon-bg SDK"><i class="iconfont iconSDKmaidian"></i></div>
          <div class="statistics-item">
            <div class="label">
              SDK埋点
            </div>
            <div class="count">
              0
            </div>
          </div>
        </div>
        <div :class="['statistics-item-box', {current: listType === 'API' }]" @click="changeList('API')">
          <div class="statistics-item-ico icon-bg API"><i class="iconfont iconAPIcaiji"></i></div>
          <div class="statistics-item">
            <div class="label">
              API采集
            </div>
            <div class="count">
              0
            </div>
          </div>
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
        </div>
      </div>
      <template v-if="listType === 'upload'">
        <div class="module">
          <div class="module-title">
            <div>已上传文件列表</div>
            <div class="module-btns btn-box">
              <Button class="a">更新数据</Button>
              <Button class="a" type="primary" @click="uploadModal1 = true">上传数据</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table  border :columns="uploadPage.file.columns" :data="uploadPage.file.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">查看</span>
                  <span class="operation-item">删除</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp">
              <Select v-model="uploadPage.file.pageSize" style="width:100px">
                <Option v-for="item in [10, 20, 30, 40]" :value="item" :key="item">每页{{ item }}/条</Option>
              </Select>
              <Page
                :current="uploadPage.file.currentPage"
                :total="uploadPage.file.totalPage"
                :page-size="uploadPage.file.pageSize"
                show-total
                @on-change="(page)=>tableChangePage(page, uploadPage.file)"
              />
            </div>

          </div>
        </div>
        <div class="module">
          <div class="module-title">
            <div>已购买数据</div>
            <div class="module-btns btn-box">
              <Button class="a" type="primary">购买数据包</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table  border :columns="uploadPage.data.columns" :data="uploadPage.data.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据包</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp">
              <Select v-model="uploadPage.data.pageSize" style="width:100px">
                <Option v-for="item in [10, 20, 30, 40]" :value="item" :key="item">每页{{ item }}/条</Option>
              </Select>
              <Page
                :current="uploadPage.data.currentPage"
                :total="uploadPage.data.totalPage"
                :page-size="uploadPage.data.pageSize"
                show-total
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
            <Table  border :columns="SDKPage.columns" :data="SDKPage.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp"  v-if="SDKPage.totalPage>0">
              <Select v-model="SDKPage.pageSize" style="width:100px">
                <Option v-for="item in [10, 20, 30, 40]" :value="item" :key="item">每页{{ item }}/条</Option>
              </Select>
              <Page
                :current="SDKPage.currentPage"
                :total="SDKPage.totalPage"
                :page-size="SDKPage.pageSize"
                show-total
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
              <Button class="a">下载SDK文件</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table  border :columns="APIPage.columns" :data="APIPage.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp"  v-if="APIPage.totalPage>0">
              <Select v-model="APIPage.pageSize" style="width:100px">
                <Option v-for="item in [10, 20, 30, 40]" :value="item" :key="item">每页{{ item }}/条</Option>
              </Select>
              <Page
                :current="APIPage.currentPage"
                :total="APIPage.totalPage"
                :page-size="APIPage.pageSize"
                show-total
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
      </template>
      <template v-else-if="listType === 'SQL'">
        <div class="module">
          <div class="module-title">
            <div>已接入数据库</div>
            <div class="module-btns btn-box">
              <Button class="a" type="primary">新建连接</Button>
            </div>
          </div>
          <div class="table-warp">
            <Table  border :columns="SQLPage.columns" :data="SQLPage.list">
              <template slot-scope="" slot="operate">
                <div class="operation">
                  <span class="operation-item">更新数据</span>
                  <span class="operation-item">续费</span>
                </div>
              </template>
            </Table>
            <div class="table-page-warp"  v-if="SQLPage.totalPage>0">
              <Select v-model="SQLPage.pageSize" style="width:100px">
                <Option v-for="item in [10, 20, 30, 40]" :value="item" :key="item">每页{{ item }}/条</Option>
              </Select>
              <Page
                :current="SQLPage.currentPage"
                :total="SQLPage.totalPage"
                :page-size="SQLPage.pageSize"
                show-total
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
    <Modal class-name="upload-modal1" v-model="uploadModal1" footer-hide :closable="false">
      <div class="upload1">
        <div class="left-btn" @click="isUpload4 = false"></div>
        <div class="right-btn" @click="isUpload4 = true"></div>
        <div class="close1-btn" @click="uploadModal1 = false"></div>
        <div v-if="isUpload4">
          <img src="../../../static/img/datacenter/wdsj/upload4@2x.png" alt="">
          <div class="upload4-btn" @click="uploadChange1"></div>
          <div class="upload5-btn" @click="uploadChange3"></div>
        </div>
        <div v-else>
          <img src="../../../static/img/datacenter/wdsj/upload1@2x.png" alt="">
          <div class="upload1-btn" @click="uploadChange1"></div>
          <div class="upload3-btn" @click="uploadChange3"></div>
        </div>
      </div>
    </Modal>
    <Modal class-name="upload-modal2" v-model="uploadModal2" footer-hide :closable="false">
      <div class="upload2">
        <img v-if="isUpload4" src="../../../static/img/datacenter/wdsj/upload5.jpeg" alt="">
        <img v-else src="../../../static/img/datacenter/wdsj/upload2.png" alt="">
        <div class="upload2-btn" @click="uploadChange2"></div>
      </div>
    </Modal>
    <Modal class-name="upload-modal3" v-model="uploadModal3" footer-hide :closable="false">
      <div class="upload3">
        <img src="../../../static/img/datacenter/wdsj/upload3@2x.png" alt="">
      </div>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: "Mydata",
    data() {
      const width = window.innerWidth;
      console.log(width)
      return {
        uploadModal1: false,
        uploadModal2: false,
        uploadModal3: false,
        isUpload4: false,
        resultShow: false,
        currentPage: 1,
        totalPage: 25,
        pageSize: 15,
        columns: [
          {
            title: '销售日期',
            key: 'pid'
          },
          {
            title: '店号',
            key: 'name'
          },
          {
            title: '类别',
            key: 'vid'
          },
          {
            title: '品牌编号',
            key: 'cid'
          },
          {
            title: '楼层',
            key: 'num'
          },
          {
            title: '销售额',
            key: 'price'
          },
          {
            title: '毛利',
            key: 'inventory'
          },
        ],
        data: [
          {
            pid: '1',
            name: '苹果汁',
            vid: '1',
            cid: '1',
            num: '每箱24瓶',
            price: '18',
            inventory: '39',
            order: '0',
            orderA: '10'
          },
          {
            pid: '2',
            name: '牛奶',
            vid: '1',
            cid: '1',
            num: '每箱24瓶',
            price: '19',
            inventory: '17',
            order: '40',
            orderA: '25'
          },
          {
            pid: '3',
            name: '蕃茄酱',
            vid: '1',
            cid: '2',
            num: '每箱12瓶',
            price: '10',
            inventory: '13',
            order: '70',
            orderA: '25'
          },
          {
            pid: '4',
            name: '盐',
            vid: '2',
            cid: '2',
            num: '每箱12包',
            price: '22',
            inventory: '53',
            order: '0',
            orderA: '0'
          },
          {
            pid: '5',
            name: '麻油',
            vid: '2',
            cid: '2',
            num: '每箱12瓶',
            price: '21.35',
            inventory: '0',
            order: '0',
            orderA: '0'
          },
          {
            pid: '6',
            name: '酱油',
            vid: '3',
            cid: '2',
            num: '每箱12瓶',
            price: '25',
            inventory: '120',
            order: '0',
            orderA: '25'
          },
          {
            pid: '7',
            name: '海鲜粉',
            vid: '3',
            cid: '7',
            num: '每箱30盒',
            price: '30',
            inventory: '15',
            order: '0',
            orderA: '10'
          },
          {
            pid: '8',
            name: '胡椒粉',
            vid: '3',
            cid: '2',
            num: '每箱30盒',
            price: '40',
            inventory: '6',
            order: '1',
            orderA: '0'
          },
          {
            pid: '9',
            name: '鸡',
            vid: '4',
            cid: '6',
            num: '每袋500克',
            price: '97',
            inventory: '29',
            order: '3',
            orderA: '0'
          },
          {
            pid: '10',
            name: '蟹',
            vid: '4',
            cid: '8',
            num: '每袋500克',
            price: '31',
            inventory: '31',
            order: '0',
            orderA: '0'
          },
          {
            pid: '11',
            name: '大众奶酪',
            vid: '5',
            cid: '4',
            num: '每袋6克',
            price: '21',
            inventory: '22',
            order: '30',
            orderA: '30'
          },
          {
            pid: '12',
            name: '德国奶酪',
            vid: '5',
            cid: '4',
            num: '每箱12瓶',
            price: '38',
            inventory: '86',
            order: '3',
            orderA: '0'
          },
          {
            pid: '13',
            name: '龙虾',
            vid: '6',
            cid: '8',
            num: '每袋500克',
            price: '6',
            inventory: '24',
            order: '0',
            orderA: '5'
          },
          {
            pid: '14',
            name: '沙茶',
            vid: '6',
            cid: '7',
            num: '每箱12瓶',
            price: '23.25',
            inventory: '35',
            order: '0',
            orderA: '0'
          },
          {
            pid: '15',
            name: '味精',
            vid: '6',
            cid: '2',
            num: '每箱30盒',
            price: '15.5',
            inventory: '39',
            order: '0',
            orderA: '5'
          }
        ],
        data1: [
          {
            pid: '1',
            name: '苹果汁',
            vid: '1',
            cid: '1',
            num: '每箱24瓶',
            price: '18',
            inventory: '39',
            order: '0',
            orderA: '10'
          },
          {
            pid: '2',
            name: '牛奶',
            vid: '1',
            cid: '1',
            num: '每箱24瓶',
            price: '19',
            inventory: '17',
            order: '40',
            orderA: '25'
          },
          {
            pid: '3',
            name: '蕃茄酱',
            vid: '1',
            cid: '2',
            num: '每箱12瓶',
            price: '10',
            inventory: '13',
            order: '70',
            orderA: '25'
          },
          {
            pid: '4',
            name: '盐',
            vid: '2',
            cid: '2',
            num: '每箱12包',
            price: '22',
            inventory: '53',
            order: '0',
            orderA: '0'
          },
          {
            pid: '5',
            name: '麻油',
            vid: '2',
            cid: '2',
            num: '每箱12瓶',
            price: '21.35',
            inventory: '0',
            order: '0',
            orderA: '0'
          },
          {
            pid: '6',
            name: '酱油',
            vid: '3',
            cid: '2',
            num: '每箱12瓶',
            price: '25',
            inventory: '120',
            order: '0',
            orderA: '25'
          },
          {
            pid: '7',
            name: '海鲜粉',
            vid: '3',
            cid: '7',
            num: '每箱30盒',
            price: '30',
            inventory: '15',
            order: '0',
            orderA: '10'
          },
          {
            pid: '8',
            name: '胡椒粉',
            vid: '3',
            cid: '2',
            num: '每箱30盒',
            price: '40',
            inventory: '6',
            order: '1',
            orderA: '0'
          },
          {
            pid: '9',
            name: '鸡',
            vid: '4',
            cid: '6',
            num: '每袋500克',
            price: '97',
            inventory: '29',
            order: '3',
            orderA: '0'
          },
          {
            pid: '10',
            name: '蟹',
            vid: '4',
            cid: '8',
            num: '每袋500克',
            price: '31',
            inventory: '31',
            order: '0',
            orderA: '0'
          },
          {
            pid: '11',
            name: '大众奶酪',
            vid: '5',
            cid: '4',
            num: '每袋6克',
            price: '21',
            inventory: '22',
            order: '30',
            orderA: '30'
          },
          {
            pid: '12',
            name: '德国奶酪',
            vid: '5',
            cid: '4',
            num: '每箱12瓶',
            price: '38',
            inventory: '86',
            order: '3',
            orderA: '0'
          },
          {
            pid: '13',
            name: '龙虾',
            vid: '6',
            cid: '8',
            num: '每袋500克',
            price: '6',
            inventory: '24',
            order: '0',
            orderA: '5'
          },
          {
            pid: '14',
            name: '沙茶',
            vid: '6',
            cid: '7',
            num: '每箱12瓶',
            price: '23.25',
            inventory: '35',
            order: '0',
            orderA: '0'
          },
          {
            pid: '15',
            name: '味精',
            vid: '6',
            cid: '2',
            num: '每箱30盒',
            price: '15.5',
            inventory: '39',
            order: '0',
            orderA: '5'
          }
        ],
        data2: [
          {
            pid: '16',
            name: '饼干',
            vid: '7',
            cid: '3',
            num: '每箱30盒',
            price: '17.45',
            inventory: '29',
            order: '0',
            orderA: '10'
          },
          {
            pid: '17',
            name: '猪肉',
            vid: '7',
            cid: '6',
            num: '每袋500克',
            price: '39',
            inventory: '0',
            order: '0',
            orderA: '0'
          },
          {
            pid: '18',
            name: '墨鱼',
            vid: '9',
            cid: '8',
            num: '每袋500克',
            price: '62.5',
            inventory: '42',
            order: '4',
            orderA: '0'
          },
          {
            pid: '19',
            name: '糖果',
            vid: '8',
            cid: '3',
            num: '每箱30盒',
            price: '9.2',
            inventory: '25',
            order: '0',
            orderA: '5'
          },
          {
            pid: '20',
            name: '桂花糕',
            vid: '8',
            cid: '3',
            num: '每箱30盒',
            price: '81',
            inventory: '40',
            order: '0',
            orderA: '6'
          },
          {
            pid: '21',
            name: '花生',
            vid: '8',
            cid: '3',
            num: '每箱30包',
            price: '10',
            inventory: '3',
            order: '40',
            orderA: '5'
          },
          {
            pid: '22',
            name: '糯米',
            vid: '9',
            cid: '5',
            num: '每袋3公斤',
            price: '21',
            inventory: '104',
            order: '0',
            orderA: '25'
          },
          {
            pid: '23',
            name: '燕麦',
            vid: '9',
            cid: '5',
            num: '每袋3公斤',
            price: '9',
            inventory: '61',
            order: '0',
            orderA: '25'
          },
          {
            pid: '24',
            name: '汽水',
            vid: '10',
            cid: '1',
            num: '每箱12瓶',
            price: '4.5',
            inventory: '20',
            order: '0',
            orderA: '0'
          },
          {
            pid: '25',
            name: '巧克力',
            vid: '11',
            cid: '3',
            num: '每箱30盒',
            price: '14',
            inventory: '76',
            order: '0',
            orderA: '30'
          }
        ],
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
                width: '200'
              },
              {
                title: '操作',
                slot:"operate",
                width: '200'
              },
            ],
            currentPage: 1,
            totalPage: 2,
            pageSize: 10,
            list: [
              {
                name: '2020年上半年XX电商会员数据.xlsx',
                time: '2020-10-12 09:21:03',
              },
              {
                name: '2020年上半年XX电商会员数据.xlsx',
                time: '2020-10-12 09:21:03',
              },
            ],
          },
          data: {
            columns: [
              {
                title: '用户动线数据包',
                key: 'name',
              },
              {
                title: '详情描述',
                key: 'desc',
              },
              {
                title: '添加时间',
                key: 'time',
                width: '150'
              },
              {
                title: '最近更新版本',
                key: 'versions',
                width: '150'
              },
              {
                title: '有效期至',
                key: 'valid',
                width: '120'
              },
              {
                title: '状态',
                key: 'status',
                width: '80'
              },
              {
                title: '操作',
                slot:"operate",
                width: '200'
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
                name: 'XXX行业附加',
                desc: '2018-2020某大型电商用户生命周期运营数据…',
                time: '2020-10-12 09:21:03',
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
              // width: '200'
            },
            {
              title: '操作',
              slot:"operate",
              width: '200'
            },
          ],
          currentPage: 1,
          totalPage: 0,
          pageSize: 10,
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
              width: '200'
            },
          ],
          currentPage: 1,
          totalPage: 0,
          pageSize: 10,
          list: [],
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
        },
      }
    },
    methods: {
      changeList(type) {
        this.listType = type
      },
      tableChangePage(page, pageObj) {
        console.log('currentPage', page, pageObj)
        pageObj.currentPage = page
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
      changePage(page) {
        this.currentPage = page;
        page == 1 ? this.data = this.data1 : this.data = this.data2;
      }
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
        color: #212121;
      }
      .rotate180{
        transform:rotate(180deg);
        display: inline-block;
        .iconfont{
          font-size: 24px;
        }
      }
      .separate-line{
        width: 1px;
        height: 20px;
        background: #EAEDF7;
        display: inline-block;
        margin: 0 10px;
      }
      .operation-section{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 12px 0;
      }
      .list {
        margin-top: 24px;
        padding: 12px 24px;
        background: #FFFFFF;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        border: 1px solid #EAEDF7;
        .page-box {
          margin-top: 10px;
          text-align: right;
        }
      }
    }
  }
</style>
<style lang="scss">
  $radius: 8px;

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
    border-top-right-radius: $radius;
    border-top-left-radius: $radius;
    background-color: #fff;
    margin: 16px 0;
    padding: 0 24px;
    box-shadow: 3px 3px 8px 0 rgba(166, 171, 189, 0.3);
    .module-title{
      font-size: 16px;
      font-weight: 500;
      color: #242F57;
      height: 56px;
      line-height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    .statistics-item-box {
      padding: 15px 0;
      height: 100px;
      width: 25%;
      position: relative;
      cursor: pointer;
      .statistics-item-ico {
        position: absolute;
        left: 24px;
        top: 21px;
        height: 60px;
        width: 60px;
      }
    }
    .statistics-item {
      padding-left: 108px;
      height: 100%;
      border-right: 1px solid #F0F0F0;
      &:last-child{
        /*border-right: none;*/
      }
      .label {
        font-size: 14px;
        font-weight: 400;
        color: #242F57;
        line-height: 22px;
      }
      .count {
        font-size: 38px;
        font-weight: 400;
        color: #242F57;
        line-height: 46px;
      }
    }
    .statistics-item-box.current {
      border-bottom: 3px solid #2373FF;
    }
  }
  .btn-box{
    .ivu-btn{
      font-size: 14px;
      line-height: 22px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid #2373FF;
    }
    .ivu-btn-default{
      box-shadow: 2px 2px 7px 0 rgba(210, 213, 225, 0.8), -2px -2px 7px 0px #FFFEFA;
      border: 1px solid #C6CBDE;
    }
    .ivu-btn-primary{
      border: 1px solid #2373FF;
      box-shadow: 2px 2px 7px 0 rgba(210, 213, 225, 0.8), -2px -2px 7px 0px #FFFEFA;
      background-color: #fff;
      color: #2373FF;
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
  .icon-bg {
    background-color: #2373FF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .iconfont {
      color: #ffffff;
      font-size: 36px;
    }
  }
  .icon-bg.SDK {
    background-color: #A49DFA;
  }
  .icon-bg.API {
    background-color: #8AE6C7;
  }
  .icon-bg.SQL {
    background-color: #FFD98C;
  }

  .table-warp{
    .ivu-table th{
      height: 48px;
      background: #F4F7FC;
    }
    .table-page-warp{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
    }
  }
  .operation{
    .operation-item{
      margin: 0 10px;
      font-weight: 400;
      color: #2373FF;
      cursor: pointer;
    }
  }
  .not-data{
    width: 300px;
    text-align: center;
    margin: 0 auto;
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
