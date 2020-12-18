const protrait=()=>import('./index');
const yxdc=()=>import('./components/yxdc.vue')
const yhhx=()=>import('./components/yhhx.vue')
const create=()=>import('./components/yhhx/create.vue')
const list=()=>import('./components/yhhx/list.vue')
const pphx=()=>import('./components/pphx.vue')
const tdhx=()=>import('./components/tdhx.vue')
const tdjchx=()=>import('./components/tdjchx.vue')
const kolsx=()=>import('./components/kolsx.vue')
const moduleName='portrait-system';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-yxdc`},
    meta:{title:"画像系统"},
    component:protrait,
    children:[
      {
        path:`/${moduleName}/yxdc`,
        label:"营销洞察",
        meta:{title:"用户画像",moduleName},
        component:yxdc,
        name:`${moduleName}-yxdc`
      },
      {
        path:`/${moduleName}/yhhx`,
        label:"用户画像",
        meta:{title:"用户画像",moduleName},
        component:yhhx,
        name:`${moduleName}-yhhx`
      },
      {
        path:`/${moduleName}/yhhx/create`,
        label:"创建用户画像",
        meta:{title:"创建用户画像",moduleName},
        component:create,
        name:`${moduleName}-yhhx-create`,
      },
      {
        path:`/${moduleName}/yhhx/list`,
        label:"用户画像信息列表",
        meta:{title:"用户画像信息列表",moduleName},
        component:list,
        name:`${moduleName}-yhhx-list`,
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
        label:"通道画像",
        // redirect:{name:`${moduleName}-tdhx-tdjchx`},
        meta:{title:"通道画像",moduleName},
        component:tdhx,
        name:`${moduleName}-tdhx`,
        children:[
          {
            path:`/${moduleName}/tdhx/tdjchx`,
            label:"通道基础画像",
            meta:{title:"通道基础画像",moduleName},
            component:tdjchx,
            name:`${moduleName}-tdhx-tdjchx`
          },
          {
            path:`/${moduleName}/tdhx/kolsx`,
            label:"KOL属性",
            meta:{title:"KOL属性",moduleName},
            component:kolsx,
            name:`${moduleName}-tdhx-kolsx`
          }
        ]
      },
    ]
  }
]
