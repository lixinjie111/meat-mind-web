const dashboard = () => import('./index');
const manage = () => import('./manage');
const editPanel = () => import('./components/editMange');
const editDown = () => import('./components/editDown');
const addManage = () => import('./components/addManage');
const addEdit = () => import('./components/addEdit');
const newManage = () => import('./components/newManage');

const moduleName = 'dashboard';

export default [
    {
        path: `/${moduleName}`,
        name: moduleName,
        meta: {title: "Dashboard", moduleName},
        component: dashboard,
        beforeEnter:(to,from,next)=>{
            if(from.name == 'login'){
                sessionStorage.setItem('ifShowPop',true);
                next();
            }
            else{
                sessionStorage.setItem('ifShowPop',false);
                next();
            }
        }
    },
    {
        path: `/${moduleName}/manage`,
        name: 'dashboard-manage',
        meta: {title: "dashboard", moduleName},
        component: manage
    },
    {
        path: `/${moduleName}/editPanel`,
        name: 'dashboard-editPanel',
        meta: {title: "dashboard", moduleName},
        component: editPanel
    },
    {
        path: `/${moduleName}/editDown`,
        name: 'dashboard-editDown',
        meta: {title: "dashboard", moduleName},
        component: editDown
    },
    {
        path: `/${moduleName}/addManage`,
        name: 'dashboard-addManage',
        meta: {title: "dashboard", moduleName},
        component: addManage
    },
   
]
