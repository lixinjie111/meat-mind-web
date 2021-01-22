const dashboard=()=>import('./index');

const moduleName='dashboard';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    // redirect:{name:`${moduleName}`},
    meta:{title:"Dashboard",moduleName},
    component:dashboard,
  }
]
