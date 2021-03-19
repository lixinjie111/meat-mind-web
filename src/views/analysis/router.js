const analysis=()=>import('./index')
const ztgl=()=>import('./page/overview.vue')
const yhfx=()=>import('./page/user.vue')
const qdfx=()=>import('./page/channel.vue')
const yyfx=()=>import('./page/brand.vue')
const moduleName='business-analysis'

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
        component:ztgl,
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
        path:`/${moduleName}/yyfx`,
        label:"品牌运营分析",
        meta:{title:"品牌运营分析",moduleName},
        component:yyfx,
        name:`${moduleName}-yyfx`
      }
    ]
  }
]
