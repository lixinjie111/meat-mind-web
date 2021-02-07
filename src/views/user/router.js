const user=()=>import('./index');
const defined=()=>import('./defined');
const edit=()=>import('./edit');

const moduleName='user';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    meta:{title:"用户画像",moduleName},
    component:user,
  },
  {
    path:`/${moduleName}/defined`,
    name:'user-defined',
    meta:{title:"用户画像",moduleName},
    component:defined,
  },
  {
    path:`/${moduleName}/edit`,
    name:'user-edit',
    meta:{title:"用户画像",moduleName},
    component:edit,
  }
]
