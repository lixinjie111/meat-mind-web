const Analysis = () => import('./index')
const Overview = () => import('./page/overview.vue')
const User = () => import('./page/user.vue')
const Channel = () => import('./page/channel.vue')
const Brand = () => import('./page/brand.vue')
const moduleName = 'business-analysis'

export default [
    {
        path: `/${moduleName}`,
        name: moduleName,
        redirect: {name: `${moduleName}-overview`},
        meta: {title: "经营分析", moduleName},
        component: Analysis,
        children: [
            {
                path: `/${moduleName}/overview`,
                label: "整体概览",
                meta: {title: "整体概览", moduleName},
                component: Overview,
                name: `${moduleName}-overview`
            },
            {
                path: `/${moduleName}/user`,
                label: "用户分析",
                meta: {title: "用户分析", moduleName},
                component: User,
                name: `${moduleName}-user`
            },
            {
                path: `/${moduleName}/channel`,
                label: "渠道分析",
                meta: {title: "渠道分析", moduleName},
                component: Channel,
                name: `${moduleName}-channel`
            },
            {
                path: `/${moduleName}/brand`,
                label: "品牌运营分析",
                meta: {title: "品牌运营分析", moduleName},
                component: Brand,
                name: `${moduleName}-brand`
            }
        ]
    }
]
