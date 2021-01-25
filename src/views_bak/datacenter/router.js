const dataCenter=()=>import('./index');
const wdsj=()=>import('./components/wdsj.vue')
const sjsc=()=>import('./components/sjsc.vue')
const xtjc=()=>import('./components/xtjc.vue')
const ysjgl=()=>import('./components/ysjgl.vue')
const rule=()=>import('./components/ysjgl/Rule.vue')
const unit=()=>import('./components/ysjgl/Unit.vue')
const event=()=>import('./components/ysjgl/EventAttribute.vue')
const user=()=>import('./components/ysjgl/UserAttribute.vue')
const dimension=()=>import('./components/ysjgl/Dimension.vue')
const item=()=>import('./components/ysjgl/ItemAttribute.vue')
const virtual=()=>import('./components/ysjgl/VirtualAttribute.vue')
const virtualEvent=()=>import('./components/ysjgl/VirtualEvent.vue')
const session=()=>import('./components/ysjgl/Session.vue')
const visualization=()=>import('./components/ysjgl/Visualization.vue')
const moduleName='data-center';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-my`},
    meta:{title:"数据管理"},
    component:dataCenter,
    children:[
      {
        path:`/${moduleName}/my`,
        label:"我的数据",
        meta:{title:"我的数据",moduleName},
        component:wdsj,
        name:`${moduleName}-my`
      },
      {
        path:`/${moduleName}/market`,
        label:"数据市场",
        meta:{title:"数据市场",moduleName},
        component:sjsc,
        name:`${moduleName}-market`
      },
      {
        path:`/${moduleName}/system`,
        label:"系统集成",
        meta:{title:"系统集成",moduleName},
        component:xtjc,
        name:`${moduleName}-system`
      },
      {
        path:`/${moduleName}/metax`,
        label:"元数据管理",
        meta:{title:"元数据管理",moduleName},
        component:ysjgl,
        name:`${moduleName}-metax`
      },
      {
        path:`/${moduleName}/metax/rule`,
        label:"入库检验规则设置",
        meta:{title:"元数据管理",moduleName},
        component:rule,
        name:`${moduleName}-metax-rule`
      },
      {
        path:`/${moduleName}/metax/unit`,
        label:"元事件",
        meta:{title:"元数据管理",moduleName},
        component:unit,
        name:`${moduleName}-metax-unit`
      },
      {
        path:`/${moduleName}/metax/event`,
        label:"事件属性",
        meta:{title:"元数据管理",moduleName},
        component:event,
        name:`${moduleName}-metax-event`
      },
      {
        path:`/${moduleName}/metax/user`,
        label:"用户属性",
        meta:{title:"元数据管理",moduleName},
        component:user,
        name:`${moduleName}-metax-user`
      },
      {
        path:`/${moduleName}/metax/dimension`,
        label:"维度表",
        meta:{title:"元数据管理",moduleName},
        component:dimension,
        name:`${moduleName}-metax-dimension`
      },
      {
        path:`/${moduleName}/metax/item`,
        label:"物品属性",
        meta:{title:"元数据管理",moduleName},
        component:item,
        name:`${moduleName}-metax-item`
      },
      {
        path:`/${moduleName}/metax/virtual`,
        label:"虚拟属性",
        meta:{title:"元数据管理",moduleName},
        component:virtual,
        name:`${moduleName}-metax-virtual`
      },
      {
        path:`/${moduleName}/metax/virtualEvent`,
        label:"虚拟事件",
        meta:{title:"元数据管理",moduleName},
        component:virtualEvent,
        name:`${moduleName}-metax-virtualEvent`
      },
      {
        path:`/${moduleName}/metax/session`,
        label:"Session管理",
        meta:{title:"元数据管理",moduleName},
        component:session,
        name:`${moduleName}-metax-session`
      },
      {
        path:`/${moduleName}/metax/visualization`,
        label:"可视化全埋点事件",
        meta:{title:"元数据管理",moduleName},
        component:visualization,
        name:`${moduleName}-metax-visualization`
      }
    ]
  }
]