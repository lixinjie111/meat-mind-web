<template>
  <DetailsPage title="自定义查询" backname="analysis-tool-model">
    <div class="container">
    <div class="left-pane">
      <div class="title">数据表</div>
      <Input placeholder="表名..."/>
      <ul>
        <li v-for="tbl in tables">{{tbl}}</li>
      </ul>
    </div>
    <div class="right-pane">
      <div class="top-pane">
        <LineNumberInput></LineNumberInput>
        <ul class="note">
          <li>页面只显示前 1000 条查询结果；下载默认最大 1000000 条，如果需要下载更多数据请使用查询 API 或使用 JDBC 方式进行查询。</li>
          <li>本功能使用 Impala 查询引擎，不兼容 Hive 的部分语法和函数。Impala 官方支持的函数列表参考： <a href="#">点击查看</a></li>
          <li><a href="#">查看详细帮助文档</a></li>
        </ul>
        <div class="btns">
          <Button type="primary" class="btn-blue">执行</Button>
          <Button class="margin16 btn">另存为</Button>
          <div class="text margin16">或创建一个</div>
          <Button class="margin16 btn">新查询</Button>
        </div>
      </div>
      <div class="bottom-pane">
        <EmptyTable :columns="columns"></EmptyTable>
      </div>
    </div>
    </div>
  </DetailsPage>
</template>

<script>
  import DetailsPage from "../../../layouts/DetailsPage";
  import EmptyTable from '../base/EmptyTable';
  import LineNumberInput from '../base/LineNumberInput';

  export default {
    name: "Defined",
    components: { DetailsPage, EmptyTable, LineNumberInput },
    data() {
      return {
        tables: ['events',
          'users',
          'sessions_app_session',
          'sessions_liulan',
          'sessions_liulannew',
          'sessions_miniprgviewscreen',
          'sessions_session_default_1',
          'sessions_web_session',
          'user_group_user_group_276',
          'user_group_user_group_277',
          'user_group_user_group_300',
          'user_group_user_group_323',
          'user_group_user_group_324',
          'user_group_user_group_325',
          'user_group_user_group_326',
          'user_group_user_group_327',
          'user_group_user_group_328',
          'user_group_user_group_329',
          'user_group_user_group_330',
          'user_group_user_group_331',
          'user_group_user_group_332',
          'user_group_user_group_8',
          'user_group_user_group_9',
          'user_group_user_group_bydjyhu',
          'user_group_user_group_dhyyh',
          'user_group_user_group_dongyayi',],
        columns: [
          {
            title: "时间",
            key: "show",
            width: 180 / 144 * window.rem,
          },
          {
            title: "查询",
            key: "ios",
            width: 570 / 144 * window.rem,
          },
          {
            title: "结果",
            key: "type",
            width: 200 / 144 * window.rem,
          },
        ],
        tabs: ['最近查询', '查询', '日志', '列', '结果', '图表' ],
        tableData: [],
      };
    },
  };
</script>

<style scoped lang="scss">
  .container {
    margin-bottom: 20px;
    display: flex;
    justify-content: stretch;

    .left-pane, .top-pane, .bottom-pane {
      background: #ffffff;
      box-shadow: 3px 3px 8px 0px rgba(166, 171, 189, 0.3);
      border-radius: 8px;
      padding: 24px;
    }
    .left-pane {
      padding: 0 24px 24px 24px;

      ul {
        margin-top: 20px;

        li {
          /*padding-left: 20px;*/
          color: #2373FF;
          cursor: pointer;
        }
      }
    }
    .bottom-pane {
      margin-top: 24px;
    }
    .right-pane {
      margin-left: 24px;

      .note {
        padding: 24px;
        li {
          font-size: 12px;
          color: #636E95;
          line-height: 22px;
        }
        a {
          color: #2373FF;
        }
      }

      .btns {
        display: flex;
        align-items: center;
        .margin16 {
          margin-left: 16px;
        }
        .btn {
          border: 1px solid #97A0C3;
          color: #242F57;
        }
        .btn-blue {
          box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
        }
        .text {
          height: 22px;
          font-size: 14px;
          color: #636E95;
          line-height: 22px;
        }
      }
    }
  }
</style>
