const analysis=()=>import('./index');
// const zbjk=()=>import('./ztgl/zbjk.vue')
const yhfx=()=>import('./user/xzyh.vue')
const qdfx=()=>import('./channel/qdss.vue')
const ywgl=()=>import('./brand/ywgl.vue')
const anchor=()=>import('./overview/anchor.vue')
const moduleName='business-analysis';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-ztgl`},
    meta:{title:"经营分析"},
    component:analysis,
    children:[
      {
        path:`/${moduleName}/ztgl`,
        label:"指标监控",
        meta:{title:"指标监控",moduleName},
        component:anchor,
        name:`${moduleName}-ztgl`
      },
      // {
      //   path:`/${moduleName}/ztgl`,
      //   label:"整体趋势",
      //   meta:{title:"整体趋势",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgls`
      // },
      // {
      //   path:`/${moduleName}/ztgl`,
      //   label:"增长态势",
      //   meta:{title:"增长态势",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgl`
      // },
      // {
      //   path:`/${moduleName}/ztgl`,
      //   label:"用户旅程",
      //   meta:{title:"用户旅程",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgl`
      // },
      {
        path:`/${moduleName}/yhfx`,
        label:"新增用户",
        meta:{title:"新增用户",moduleName},
        component:yhfx,
        name:`${moduleName}-yhfx`
      },
      {
        path:`/${moduleName}/qdfx`,
        label:"渠道实时",
        meta:{title:"渠道实时",moduleName},
        component:qdfx,
        name:`${moduleName}-qdfx`
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
