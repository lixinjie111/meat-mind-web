const analysis=()=>import('./index');
const zbjk=()=>import('./ztgl/zbjk.vue')
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
      {
        path:`/${moduleName}/ztgl#zbjk`,
        label:"整体概览",
        meta:{title:"整体概览",moduleName},
        component:anchor,
        name:`${moduleName}-ztgl`
      },
      // {
      //   path:`/${moduleName}/ztgl`,
      //   label:"指标监控",
      //   meta:{title:"指标监控",moduleName},
      //   component:anchor,
      //   name:`${moduleName}-ztgl`
      // },
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
        path:`/${moduleName}/yhfx`,
        label:"用户分析",
        meta:{title:"用户分析",moduleName},
        redirect:{name:`${moduleName}-yhfx-xzyh`},
        children:[
          {
            path:`/${moduleName}/yhfx/xzyh`,
            label:"新增用户",
            meta:{title:"新增用户",moduleName},
            component:zbjk,
            name:`${moduleName}-yhfx-xzyh`
          },
        ],
        component:zbjk,
        name:`${moduleName}-yhfx`
      }
    ]
  }
]
