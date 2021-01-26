const tool=()=>import('./index');
const fxmx=()=>import('./components/fxmx.vue')
const event=()=>import("./components/fxmx/Event.vue")
const funnel=()=>import("./components/fxmx/Funnel.vue")
const keep=()=>import("./components/fxmx/Keep.vue")
const distribute=()=>import("./components/fxmx/Distribute.vue")
const way=()=>import("./components/fxmx/Way.vue")
const hot=()=>import("./components/fxmx/Hot.vue")
const interval=()=>import("./components/fxmx/Interval.vue")
const defined=()=>import("./components/fxmx/Defined.vue")
const cause=()=>import("./components/fxmx/Cause.vue")
const property=()=>import("./components/fxmx/Property.vue")
const app=()=>import("./components/fxmx/App.vue")
const cjk=()=>import('./components/cjk.vue')
const zbgl=()=>import('./components/zbgl.vue')
const yhfq=()=>import('./components/yhfq.vue')
const qdzz=()=>import('./components/qdzz.vue')
const qdlj=()=>import('./components/qdlj.vue')
const qdgl=()=>import('./components/qdgl.vue')
const bqgl=()=>import('./components/bqgl.vue')
const moduleName='analysis-tool';

export default [
  {
    path:`/${moduleName}`,
    name:moduleName,
    redirect:{name:`${moduleName}-fxmx`},
    meta:{title:"分析工具",moduleName},
    component:tool,
    children:[
      {
        path:`/${moduleName}/fxmx`,
        label:"分析模型",
        meta:{title:"分析模型",moduleName},
        component:fxmx,
        name:`${moduleName}-fxmx`,
      },
      {
        path:`/${moduleName}/fxmx/event`,
        label:"事件分析",
        meta:{title:"分析模型",moduleName},
        component:event,
        name:`${moduleName}-fxmx-event`,
      },
      {
        path:`/${moduleName}/fxmx/funnel`,
        label:"漏斗分析",
        meta:{title:"分析模型",moduleName},
        component:funnel,
        name:`${moduleName}-fxmx-funnel`,
      },
      {
        path:`/${moduleName}/fxmx/keep`,
        label:"留存分析",
        meta:{title:"分析模型",moduleName},
        component:keep,
        name:`${moduleName}-fxmx-keep`,
      },
      {
        path:`/${moduleName}/fxmx/distribute`,
        label:"分布分析",
        meta:{title:"分析模型",moduleName},
        component:distribute,
        name:`${moduleName}-fxmx-distribute`,
      },
      {
        path:`/${moduleName}/fxmx/way`,
        label:"用户途径分析",
        meta:{title:"分析模型",moduleName},
        component:way,
        name:`${moduleName}-fxmx-way`,
      },
      {
        path:`/${moduleName}/fxmx/hot`,
        label:"网页热力分析",
        meta:{title:"分析模型",moduleName},
        component:hot,
        name:`${moduleName}-fxmx-hot`,
      },
      {
        path:`/${moduleName}/fxmx/interval`,
        label:"间隔分析",
        meta:{title:"分析模型",moduleName},
        component:interval,
        name:`${moduleName}-fxmx-interval`,
      },
      {
        path:`/${moduleName}/fxmx/defined`,
        label:"自定义查询",
        meta:{title:"分析模型",moduleName},
        component:defined,
        name:`${moduleName}-fxmx-defined`,
      },
      {
        path:`/${moduleName}/fxmx/cause`,
        label:"归因分析",
        meta:{title:"分析模型",moduleName},
        component:cause,
        name:`${moduleName}-fxmx-cause`,
      },
      {
        path:`/${moduleName}/fxmx/property`,
        label:"属性分析",
        meta:{title:"分析模型",moduleName},
        component:property,
        name:`${moduleName}-fxmx-property`,
      },
      {
        path:`/${moduleName}/fxmx/app`,
        label:"APP点击分析",
        meta:{title:"分析模型",moduleName},
        component:app,
        name:`${moduleName}-fxmx-app`,
      },

      {
        path:`/${moduleName}/zbgl`,
        label:"指标管理",
        meta:{title:"指标管理",moduleName},
        component:zbgl,
        name:`${moduleName}-zbgl`
      },
      {
        path:`/${moduleName}/bqgl`,
        label:"标签管理",
        meta:{title:"标签管理",moduleName},
        component:bqgl,
        name:`${moduleName}-bqgl`
      },
      {
        path:`/${moduleName}/yhfq`,
        label:"用户分群",
        meta:{title:"用户分群",moduleName},
        component:yhfq,
        name:`${moduleName}-yhfq`
      },
      {
        path:`/${moduleName}/qdzz`,
        label:"渠道追踪",
        meta:{title:"渠道追踪",moduleName:`${moduleName}-qdzz`},
        component:qdzz,
        name:`${moduleName}-qdzz`,
        children:[
          {
            path:`/${moduleName}/qdzz/qdlj`,
            label:"渠道链接",
            meta:{title:"渠道链接",moduleName},
            component:qdlj,
            name:`${moduleName}-qdzz-qdlj`
          },
          {
            path:`/${moduleName}/qdzz/qdgl`,
            label:"渠道管理",
            meta:{title:"渠道管理",moduleName},
            component:qdgl,
            name:`${moduleName}-qdzz-qdgl`
          }
        ]
      },
      {
        path:`/${moduleName}/cjk`,
        label:"场景库",
        meta:{title:"场景库",moduleName},
        component:cjk,
        name:`${moduleName}-cjk`
      }
    ]
  }
]
