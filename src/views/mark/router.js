const mark=()=>import('./index');

const moduleName='mark';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    // redirect:{name:`${moduleName}`},
    meta:{title:"品牌画像",moduleName},
    component:mark,
  }
]
