const tool=()=>import('./index');
const zbjk=()=>import('./ztgl/zbjk.vue')
const moduleName='analysis-tool';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-fxmx`},
    meta:{title:"分析工具"},
    component:tool,
    children:[
      {
        path:`/${moduleName}/fxmx`,
        label:"分析模型",
        meta:{title:"分析模型",moduleName},
        component:zbjk,
        name:`${moduleName}-fxmx`
      },
      {
        path:`/${moduleName}/zbgl`,
        label:"指标管理",
        meta:{title:"指标管理",moduleName},
        component:zbjk,
        name:`${moduleName}-zbgl`
      },
      {
        path:`/${moduleName}/bqtx`,
        label:"标签体系",
        meta:{title:"标签体系",moduleName},
        component:zbjk,
        name:`${moduleName}-bqtx`
      },
      {
        path:`/${moduleName}/yhfq`,
        label:"用户分群",
        meta:{title:"用户分群",moduleName},
        component:zbjk,
        name:`${moduleName}-yhfq`
      },
      {
        path:`/${moduleName}/qdlj`,
        label:"渠道链接",
        meta:{title:"渠道链接",moduleName},
        component:zbjk,
        name:`${moduleName}-qdlj`
      },
      {
        path:`/${moduleName}/qdgl`,
        label:"渠道管理",
        meta:{title:"渠道管理",moduleName},
        component:zbjk,
        name:`${moduleName}-qdgl`
      },      {
        path:`/${moduleName}/cjk`,
        label:"场景库",
        meta:{title:"场景库",moduleName},
        component:zbjk,
        name:`${moduleName}-cjk`
      }
    ]
  }
]
