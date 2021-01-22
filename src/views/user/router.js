const user=()=>import('./index');

const moduleName='user';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    // redirect:{name:`${moduleName}`},
    meta:{title:"用户画像",moduleName},
    component:user,
  }
]
