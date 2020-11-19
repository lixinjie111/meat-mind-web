const protrait=()=>import('./index');
const zbjk=()=>import('./ztgl/zbjk.vue')
const moduleName='portrait-system';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-yhhx`},
    meta:{title:"画像系统"},
    component:protrait,
    children:[
      {
        path:`/${moduleName}/yhhx`,
        label:"用户画像",
        meta:{title:"用户画像",moduleName},
        component:zbjk,
        name:`${moduleName}-yhhx`
      },
      {
        path:`/${moduleName}/ppjchx`,
        label:"品牌基础画像",
        meta:{title:"品牌基础画像",moduleName},
        component:zbjk,
        name:`${moduleName}-ppjchx`
      },
      {
        path:`/${moduleName}/ppyq`,
        label:"品牌舆情",
        meta:{title:"品牌舆情",moduleName},
        component:zbjk,
        name:`${moduleName}-ppyq`
      },
      {
        path:`/${moduleName}/tdjchx`,
        label:"通道基础画像",
        meta:{title:"通道基础画像",moduleName},
        component:zbjk,
        name:`${moduleName}-tdjchx`
      },
      {
        path:`/${moduleName}/kolsx`,
        label:"KOL属性",
        meta:{title:"KOL属性",moduleName},
        component:zbjk,
        name:`${moduleName}-kolsx`
      }
    ]
  }
]
