const protrait=()=>import('./index');
const yhhx=()=>import('./components/yhhx.vue')
const pphx=()=>import('./components/pphx.vue')
const tdjchx=()=>import('./components/tdjchx.vue')
const kolsx=()=>import('./components/kolsx.vue')
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
        component:yhhx,
        name:`${moduleName}-yhhx`
      },
      {
        path:`/${moduleName}/pphx`,
        label:"品牌画像",
        meta:{title:"品牌画像",moduleName},
        component:pphx,
        name:`${moduleName}-pphx`
      },
      {
        path:`/${moduleName}/tdhx`,
        label:"通道基础画像",
        meta:{title:"通道基础画像",moduleName},
        component:tdjchx,
        name:`${moduleName}-tdhx`
      },
      {
        path:`/${moduleName}/kolsx`,
        label:"KOL属性",
        meta:{title:"KOL属性",moduleName},
        component:kolsx,
        name:`${moduleName}-kolsx`
      }
    ]
  }
]
