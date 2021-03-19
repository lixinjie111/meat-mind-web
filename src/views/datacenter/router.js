const dataCenter = () => import('./index');
const mydata = () => import('./page/mydata.vue')
const market = () => import('./page/market.vue')
const system = () => import('./page/system.vue')
const metax = () => import('./page/metax.vue')

const Rule = () => import('./components/Rule.vue')
const Unit = () => import('./components/Unit.vue')
const EventAttribute = () => import('./components/EventAttribute.vue')
const UserAttribute = () => import('./components/UserAttribute.vue')
const Dimension = () => import('./components/Dimension.vue')
const ItemAttribute = () => import('./components/ItemAttribute.vue')
const VirtualAttribute = () => import('./components/VirtualAttribute.vue')
const VirtualEvent = () => import('./components/VirtualEvent.vue')
const Session = () => import('./components/Session.vue')
const visualization = () => import('./components/Visualization.vue')
const moduleName = 'data-center';

export default [
    {
        path: `/${moduleName}`,
        name: moduleName,
        redirect: {name: `${moduleName}-my`},
        meta: {title: "数据管理", moduleName},
        component: dataCenter,
        children: [
            {
                path: `/${moduleName}/my`,
                label: "我的数据",
                meta: {title: "我的数据", moduleName},
                component: mydata,
                name: `${moduleName}-my`
            },
            {
                path: `/${moduleName}/market`,
                label: "数据市场",
                meta: {title: "数据市场", moduleName},
                component: market,
                name: `${moduleName}-market`
            },
            {
                path: `/${moduleName}/system`,
                label: "系统集成",
                meta: {title: "系统集成", moduleName},
                component: system,
                name: `${moduleName}-system`
            },
            {
                path: `/${moduleName}/metax`,
                label: "元数据管理",
                meta: {title: "元数据管理", moduleName},
                component: metax,
                name: `${moduleName}-metax`
            },
            {
                path: `/${moduleName}/metax/rule`,
                label: "入库检验规则设置",
                meta: {title: "元数据管理", moduleName},
                component: Rule,
                name: `${moduleName}-metax-rule`
            },
            {
                path: `/${moduleName}/metax/unit`,
                label: "元事件",
                meta: {title: "元数据管理", moduleName},
                component: Unit,
                name: `${moduleName}-metax-unit`
            },
            {
                path: `/${moduleName}/metax/event`,
                label: "事件属性",
                meta: {title: "元数据管理", moduleName},
                component: EventAttribute,
                name: `${moduleName}-metax-event`
            },
            {
                path: `/${moduleName}/metax/user`,
                label: "用户属性",
                meta: {title: "元数据管理", moduleName},
                component: UserAttribute,
                name: `${moduleName}-metax-user`
            },
            {
                path: `/${moduleName}/metax/dimension`,
                label: "维度表",
                meta: {title: "元数据管理", moduleName},
                component: Dimension,
                name: `${moduleName}-metax-dimension`
            },
            {
                path: `/${moduleName}/metax/item`,
                label: "物品属性",
                meta: {title: "元数据管理", moduleName},
                component: ItemAttribute,
                name: `${moduleName}-metax-item`
            },
            {
                path: `/${moduleName}/metax/virtual`,
                label: "虚拟属性",
                meta: {title: "元数据管理", moduleName},
                component: VirtualAttribute,
                name: `${moduleName}-metax-virtual`
            },
            {
                path: `/${moduleName}/metax/virtualEvent`,
                label: "虚拟事件",
                meta: {title: "元数据管理", moduleName},
                component: VirtualEvent,
                name: `${moduleName}-metax-virtualEvent`
            },
            {
                path: `/${moduleName}/metax/session`,
                label: "Session管理",
                meta: {title: "元数据管理", moduleName},
                component: Session,
                name: `${moduleName}-metax-session`
            },
            {
                path: `/${moduleName}/metax/visualization`,
                label: "可视化全埋点事件",
                meta: {title: "元数据管理", moduleName},
                component: visualization,
                name: `${moduleName}-metax-visualization`
            }
        ]
    }
]
