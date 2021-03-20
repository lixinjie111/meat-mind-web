const analysis = () => import('./index')
const overview = () => import('./page/overview.vue')
const user = () => import('./page/user.vue')
const channel = () => import('./page/channel.vue')
const brand = () => import('./page/brand.vue')
const moduleName = 'business-analysis'

export default [
    {
        path: `/${moduleName}`,
        name: moduleName,
        redirect: {name: `${moduleName}-overview`},
        meta: {title: "经营分析", moduleName},
        component: analysis,
        children: [
            {
                path: `/${moduleName}/overview`,
                label: "整体概览",
                meta: {title: "整体概览", moduleName},
                component: overview,
                name: `${moduleName}-overview`
            },
            {
                path: `/${moduleName}/user`,
                label: "用户分析",
                meta: {title: "用户分析", moduleName},
                component: user,
                name: `${moduleName}-user`
            },
            {
                path: `/${moduleName}/channel`,
                label: "渠道分析",
                meta: {title: "渠道分析", moduleName},
                component: channel,
                name: `${moduleName}-channel`
            },
            {
                path: `/${moduleName}/brand`,
                label: "品牌运营分析",
                meta: {title: "品牌运营分析", moduleName},
                component: brand,
                name: `${moduleName}-brand`
            }
        ]
    }
]
