const dashboard = () => import('./index');
const manage = () => import('./manage');

const moduleName = 'dashboard';

export default [
    {
        path: `/${moduleName}`,
        name: moduleName,
        meta: {title: "Dashboard", moduleName},
        component: dashboard
    },
    {
        path: `/${moduleName}/manage`,
        name: 'dashboard-manage',
        meta: {title: "dashboard", moduleName},
        component: manage
    }
]
