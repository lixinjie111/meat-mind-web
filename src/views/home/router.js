const home=()=>import('./index');

const moduleName='home';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    // redirect:{name:`${moduleName}`},
    meta:{title:"首页"},
    component:home,
  }
]
