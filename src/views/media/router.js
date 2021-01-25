const media=()=>import('./index');

const moduleName='media';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    // redirect:{name:`${moduleName}`},
    meta:{title:"媒介画像",moduleName},
    component:media,
  }
]
