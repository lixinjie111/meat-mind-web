const tool=()=>import('./index');
const fxmx=()=>import('./components/fxmx.vue')
const cjk=()=>import('./components/cjk.vue')
const zbgl=()=>import('./components/zbgl.vue')
const yhfq=()=>import('./components/yhfq.vue')
const qdlj=()=>import('./components/qdlj.vue')
const bqgl=()=>import('./components/bqgl.vue')
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
        component:fxmx,
        name:`${moduleName}-fxmx`
      },
      {
        path:`/${moduleName}/zbgl`,
        label:"指标管理",
        meta:{title:"指标管理",moduleName},
        component:zbgl,
        name:`${moduleName}-zbgl`
      },
      {
        path:`/${moduleName}/bqgl`,
        label:"标签管理",
        meta:{title:"标签管理",moduleName},
        component:bqgl,
        name:`${moduleName}-bqgl`
      },
      {
        path:`/${moduleName}/yhfq`,
        label:"用户分群",
        meta:{title:"用户分群",moduleName},
        component:yhfq,
        name:`${moduleName}-yhfq`
      },
      {
        path:`/${moduleName}/qdlj`,
        label:"渠道链接",
        meta:{title:"渠道链接",moduleName},
        component:qdlj,
        name:`${moduleName}-qdlj`
      },
      {
        path:`/${moduleName}/qdgl`,
        label:"渠道管理",
        meta:{title:"渠道管理",moduleName},
        component:cjk,
        name:`${moduleName}-qdgl`
      },      {
        path:`/${moduleName}/cjk`,
        label:"场景库",
        meta:{title:"场景库",moduleName},
        component:cjk,
        name:`${moduleName}-cjk`
      }
    ]
  }
]
