const mark=()=>import('./index');
const view=()=>import('./page/view.vue');
const negative=()=>import('./page/negative.vue');
const detail=()=>import('./page/detail.vue');
const old = ()=>import('./indexOld.vue');
const moduleName='mark';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-view`},
    meta:{title:"品牌画像",moduleName},
    component:mark,
    children:[
      {
        path:`/${moduleName}/view`,
        label:"品牌概览",
        meta:{title:"品牌画像",moduleName},
        component:view,
        name:`${moduleName}-view`
      },
      {
        path:`/${moduleName}/negative`,
        label:"舆情应对",
        meta:{title:"品牌画像",moduleName},
        component:negative,
        name:`${moduleName}-negative`
      },
      {
        path:`/${moduleName}/detail`,
        label:"品牌详情",
        meta:{title:"品牌画像",moduleName},
        component:detail,
        name:`${moduleName}-detail`
      }
    ]
  }
]
