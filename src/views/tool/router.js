const tool=()=>import('./index');
const zbjk=()=>import('./ztgl/zbjk.vue')
const moduleName='analysis-tool';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    // redirect:{name:`${moduleName}`},
    meta:{title:"分析工具"},
    component:tool,
    children:[
      {
        path:`/${moduleName}/zbjk`,
        label:"指标监控",
        meta:{title:"实时看板",moduleName},
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
      }
    ]
  }
]
