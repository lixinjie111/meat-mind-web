const analysis=()=>import('./index');
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
    meta:{title:"经营分析",moduleName},
    component:analysis,
    children:[
      {
        path:`/${moduleName}/ztgl`,
        label:"整体概览",
        meta:{title:"整体概览",moduleName},
        component:anchor,
        name:`${moduleName}-ztgl`
      },
      {
        path:`/${moduleName}/yhfx`,
        label:"用户分析",
        meta:{title:"用户分析",moduleName},
        component:yhfx,
        name:`${moduleName}-yhfx`
      },
      {
        path:`/${moduleName}/qdfx`,
        label:"渠道分析",
        meta:{title:"渠道分析",moduleName},
        component:qdfx,
        name:`${moduleName}-qdfx`
      },
      {
        path:`/${moduleName}/ywgl`,
        label:"品牌运营分析",
        meta:{title:"品牌运营分析",moduleName},
        component:ywgl,
        name:`${moduleName}-ywgl`
      }
    ]
  }
]
