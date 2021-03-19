const analysis=()=>import('./index');
const yhfx=()=>import('./user/xzyh.vue')
// const yhfx=()=>import('./components/User.vue')
const qdfx=()=>import('./channel/qdss.vue')
// const qdfx=()=>import('./components/Channel.vue')
const ywgl=()=>import('./brand/ywgl.vue')
// const ywgl=()=>import('./components/Brand.vue')
const anchor=()=>import('./overview/overview.vue')
// const anchor=()=>import('./components/Overview.vue')
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
