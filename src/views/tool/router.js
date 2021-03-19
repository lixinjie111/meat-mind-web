const tool = () => import('./index');
const model = () => import('./page/model.vue')
const indicator = () => import('./page/indicator.vue')
const label = () => import('./page/label.vue')
const user = () => import('./page/user.vue')
const link = () => import('./page/link.vue')
const manage = () => import('./page/manage.vue')
const scene = () => import('./page/scene.vue')

const Event = () => import("./components/Event.vue")
const Funnel = () => import("./components/Funnel.vue")
const Keep = () => import("./components/Keep.vue")
const Distribute = () => import("./components/Distribute.vue")
const Way = () => import("./components/Way.vue")
const Hot = () => import("./components/Hot.vue")
const Interval = () => import("./components/Interval.vue")
const Defined = () => import("./components/Defined.vue")
const Cause = () => import("./components/Cause.vue")
const Property = () => import("./components/Property.vue")
const App = () => import("./components/App.vue")


const moduleName = 'analysis-tool';

export default [
    {
        path: `/${moduleName}`,
        name: moduleName,
        redirect: {name: `${moduleName}-model`},
        meta: {title: "分析工具", moduleName},
        component: tool,
        children: [
            {
                path: `/${moduleName}/model`,
                label: "分析模型",
                meta: {title: "分析模型", moduleName},
                component: model,
                name: `${moduleName}-model`,
            },
            {
                path: `/${moduleName}/model/event`,
                label: "事件分析",
                meta: {title: "分析模型", moduleName},
                component: Event,
                name: `${moduleName}-model-event`,
            },
            {
                path: `/${moduleName}/model/funnel`,
                label: "漏斗分析",
                meta: {title: "分析模型", moduleName},
                component: Funnel,
                name: `${moduleName}-model-funnel`,
            },
            {
                path: `/${moduleName}/model/keep`,
                label: "留存分析",
                meta: {title: "分析模型", moduleName},
                component: Keep,
                name: `${moduleName}-model-keep`,
            },
            {
                path: `/${moduleName}/model/distribute`,
                label: "分布分析",
                meta: {title: "分析模型", moduleName},
                component: Distribute,
                name: `${moduleName}-model-distribute`,
            },
            {
                path: `/${moduleName}/model/way`,
                label: "用户途径分析",
                meta: {title: "分析模型", moduleName},
                component: Way,
                name: `${moduleName}-model-way`,
            },
            {
                path: `/${moduleName}/model/hot`,
                label: "网页热力分析",
                meta: {title: "分析模型", moduleName},
                component: Hot,
                name: `${moduleName}-model-hot`,
            },
            {
                path: `/${moduleName}/model/interval`,
                label: "间隔分析",
                meta: {title: "分析模型", moduleName},
                component: Interval,
                name: `${moduleName}-model-interval`,
            },
            {
                path: `/${moduleName}/model/defined`,
                label: "自定义查询",
                meta: {title: "分析模型", moduleName},
                component: Defined,
                name: `${moduleName}-model-defined`,
            },
            {
                path: `/${moduleName}/model/cause`,
                label: "归因分析",
                meta: {title: "分析模型", moduleName},
                component: Cause,
                name: `${moduleName}-model-cause`,
            },
            {
                path: `/${moduleName}/model/property`,
                label: "属性分析",
                meta: {title: "分析模型", moduleName},
                component: Property,
                name: `${moduleName}-model-property`,
            },
            {
                path: `/${moduleName}/model/app`,
                label: "APP点击分析",
                meta: {title: "分析模型", moduleName},
                component: App,
                name: `${moduleName}-model-app`,
            },

            {
                path: `/${moduleName}/indicator`,
                label: "指标管理",
                meta: {title: "指标管理", moduleName},
                component: indicator,
                name: `${moduleName}-indicator`
            },
            {
                path: `/${moduleName}/label`,
                label: "标签管理",
                meta: {title: "标签管理", moduleName},
                component: label,
                name: `${moduleName}-label`
            },
            {
                path: `/${moduleName}/user`,
                label: "用户分群",
                meta: {title: "用户分群", moduleName},
                component: user,
                name: `${moduleName}-user`
            },
            {
                path: `/${moduleName}/link`,
                label: "渠道链接",
                meta: {title: "渠道链接", moduleName},
                component: link,
                name: `${moduleName}-link`
            },
            {
                path: `/${moduleName}/manage`,
                label: "渠道管理",
                meta: {title: "渠道管理", moduleName},
                component: manage,
                name: `${moduleName}-manage`
            },
            {
                path: `/${moduleName}/scene`,
                label: "场景库",
                meta: {title: "场景库", moduleName},
                component: scene,
                name: `${moduleName}-scene`
            }
        ]
    }
]
