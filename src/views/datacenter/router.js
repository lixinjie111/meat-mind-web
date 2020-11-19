const dataCenter=()=>import('./index');
const zbjk=()=>import('./ztgl/zbjk.vue')
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
        component:zbjk,
        name:`${moduleName}-my`
      },
      {
        path:`/${moduleName}/pay`,
        label:"付费数据",
        meta:{title:"付费数据",moduleName},
        component:zbjk,
        name:`${moduleName}-pay`
      },
      {
        path:`/${moduleName}/system`,
        label:"系统集成",
        meta:{title:"系统集成",moduleName},
        component:zbjk,
        name:`${moduleName}-system`
      },
      {
        path:`/${moduleName}/metax`,
        label:"元数据管理",
        meta:{title:"元数据管理",moduleName},
        component:zbjk,
        name:`${moduleName}-metax`
      }
    ]
  }
]
