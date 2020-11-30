const analysis=()=>import('./index');
// const zbjk=()=>import('./ztgl/zbjk.vue')
const xzyh=()=>import('./ztgl/xzyh.vue')
const qdss=()=>import('./ztgl/qdss.vue')
const ywgl=()=>import('./ztgl/ywgl.vue')
const anchor=()=>import('./ztgl/anchor.vue')
const moduleName='business-analysis';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-ztgl`},
    meta:{title:"经营分析"},
    component:analysis,
    children:[
      // {
      //   path:`/${moduleName}/ztgl`,
      //   label:"整体概览",
      //   meta:{title:"整体概览",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgl`
      // },
      {
        path:`/${moduleName}/ztgl`,
        label:"指标监控",
        meta:{title:"指标监控",moduleName},
        component:anchor,
        name:`${moduleName}-ztgl`
      },
      // {
      //   path:`/${moduleName}/ztgl#ztqs`,
      //   label:"整体趋势",
      //   meta:{title:"整体趋势",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgl#ztqs`
      // },
      // {
      //   path:`/${moduleName}/ztgl#zzts`,
      //   label:"增长态势",
      //   meta:{title:"增长态势",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgl#zzts`
      // },
      // {
      //   path:`/${moduleName}/ztgl#yhlc`,
      //   label:"用户旅程",
      //   meta:{title:"用户旅程",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgl#yhlc`
      // },
      {
        path:`/${moduleName}/xzyh`,
        label:"新增用户",
        meta:{title:"新增用户",moduleName},
        component:xzyh,
        name:`${moduleName}-xzyh`
      },
      {
        path:`/${moduleName}/qdss`,
        label:"渠道实时",
        meta:{title:"渠道实时",moduleName},
        component:qdss,
        name:`${moduleName}-qdss`
      },
      {
        path:`/${moduleName}/ywgl`,
        label:"业务概览",
        meta:{title:"业务概览",moduleName},
        component:ywgl,
        name:`${moduleName}-ywgl`
      }
    ]
  }
]
