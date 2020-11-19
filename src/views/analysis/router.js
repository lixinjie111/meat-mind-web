const analysis=()=>import('./index');
const zbjk=()=>import('./ztgl/zbjk.vue')
const moduleName='business-analysis';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-zbjk`},
    meta:{title:"经营分析"},
    component:analysis,
    children:[
      {
        path:`/${moduleName}/zbjk`,
        label:"指标监控",
        meta:{title:"指标监控",moduleName},
        component:zbjk,
        name:`${moduleName}-zbjk`
      },
      {
        path:`/${moduleName}/ztqs`,
        label:"整体趋势",
        meta:{title:"整体趋势",moduleName},
        component:zbjk,
        name:`${moduleName}-ztqs`
      },
      {
        path:`/${moduleName}/zzts`,
        label:"增长态势",
        meta:{title:"增长态势",moduleName},
        component:zbjk,
        name:`${moduleName}-zzts`
      },
      {
        path:`/${moduleName}/yhlc`,
        label:"用户旅程",
        meta:{title:"用户旅程",moduleName},
        component:zbjk,
        name:`${moduleName}-yhlc`
      },
      {
        path:`/${moduleName}/xzyh`,
        label:"新增用户",
        meta:{title:"新增用户",moduleName},
        component:zbjk,
        name:`${moduleName}-xzyh`
      }
    ]
  }
]
