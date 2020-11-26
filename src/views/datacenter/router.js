const dataCenter=()=>import('./index');
const wdsj=()=>import('./ztgl/wdsj.vue')
const ffsj=()=>import('./ztgl/ffsj.vue')
const xtjc=()=>import('./ztgl/xtjc.vue')
const ysjgl=()=>import('./ztgl/ysjgl.vue')
const moduleName='data-center';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-my`},
    meta:{title:"数据管理"},
    component:dataCenter,
    children:[
      {
        path:`/${moduleName}/my`,
        label:"我的数据",
        meta:{title:"我的数据",moduleName},
        component:wdsj,
        name:`${moduleName}-my`
      },
      {
        path:`/${moduleName}/pay`,
        label:"付费数据",
        meta:{title:"付费数据",moduleName},
        component:ffsj,
        name:`${moduleName}-pay`
      },
      {
        path:`/${moduleName}/system`,
        label:"系统集成",
        meta:{title:"系统集成",moduleName},
        component:xtjc,
        name:`${moduleName}-system`
      },
      {
        path:`/${moduleName}/metax`,
        label:"元数据管理",
        meta:{title:"元数据管理",moduleName},
        component:ysjgl,
        name:`${moduleName}-metax`
      }
    ]
  }
]
