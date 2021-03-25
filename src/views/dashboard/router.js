const dashboard = () => import('./index');
const manage = () => import('./manage');
const editPanel = () => import('./editMange');

const moduleName = 'dashboard';

export default [
    {
        path: `/${moduleName}`,
        name: moduleName,
        meta: {title: "Dashboard", moduleName},
        component: dashboard,
        beforeEnter:(to,from,next)=>{
            console.log(from,'from')
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
    }
]
