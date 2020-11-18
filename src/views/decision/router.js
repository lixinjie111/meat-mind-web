const decision=()=>import('./index');

const moduleName='intelligent-decision';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    // redirect:{name:`${moduleName}`},
    meta:{title:"智能决策"},
    component:decision,
  }
]
