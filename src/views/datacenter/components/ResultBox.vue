<template>
  <div class="result-box">
    <div class="title">
          <span class="rotate180">
            <i class="iconfont iconleft-arrow" @click="goBack"></i>
          </span>
      <span class="separate-line"></span>
      2020年上半年奢侈品销售数据</div>
    <div class="list">
      <div class="operation-section">
        <Input prefix="ios-search" class="operation-section-input" placeholder="输入关键词进行搜索…" />
      </div>
      <Table :columns="columns" :data="data"></Table>
      <div class="page-box">
        <Page :total="totalPage" :current="currentPage" @on-change="changePage" :pageSize="pageSize" show-total show-sizer class-name="pageS"/>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {getRandom} from "@/utils/func"
  export default {
    data() {
      return {
        uploadModal1: false,
        uploadModal2: false,
        uploadModal3: false,
        isUpload4: false,
        currentPage: 1,
        totalPage: 25,
        pageSize: 10,
        columns: [
          {
            title: '销售日期',
            key: 'date',
            width: 180 / 144 * window.rem,
          },
          {
            title: '店号',
            key: 'num',
            align: 'center',
          },
          {
            title: '类别',
            key: 'type',
            align: 'center',
          },
          {
            title: '品牌编号',
            key: 'no',
            align: 'center',
          },
          {
            title: '楼层',
            key: 'floor',
            align: 'center',
          },
          {
            title: '销售额',
            key: 'sale',
            align: 'center',
          },
          {
            title: '毛利',
            key: 'profit',
            align: 'right',
          },
        ],
        data: [],
        totalList: [],
      }
    },
    mounted() {
      this.generateData()
      this.changePage(1)
    },
    methods: {
      goBack(){
        this.$emit('goBack')
      },
      changePage(page) {
        this.currentPage = page;
        this.data = this.totalList.slice((page - 1) * this.pageSize, page * this.pageSize - 1)
      },
      numFormat(num) {
        return (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      },
      generateData(total = this.totalPage){
        for (let i = 0; i < total; ++i){
          const curr =  {
                date: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
                num: getRandom(1000, 5000),
                type: getRandom(1, 10),
                no: `D${getRandom(1, 1000)}`,
                floor: getRandom(1, 10),
                sale: this.numFormat(getRandom(1000, 1500)),
                profit: this.numFormat(getRandom(200, 300)),
              };
          this.totalList.push(curr)
        }
      },
    }
  }
</script>

<style scoped lang="scss">
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
      cursor: pointer;
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
</style>
